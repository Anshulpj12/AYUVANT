/* ============================================
   AYUVANT — Part 3: Pharmacy Network Module
   Nearby pharmacy stock search, AI-scored transfer
   recommendations, and transfer lifecycle management
   ============================================ */

window.PharmacyNetwork = (function () {
    'use strict';

    // ---- Constants ----
    const NETWORK_KEY = 'ayuvant_pharmacy_network';
    const TRANSFERS_KEY = 'ayuvant_transfers';
    const BATCHES_KEY = 'ayuvant_batches';

    // ---- State ----
    let pharmacies = [];
    let transfers = [];

    // ---- Storage Helpers ----
    function load(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) || fallback; }
        catch { return fallback; }
    }
    function save(key, data) {
        try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { console.error('PharmacyNetwork: save error', e); }
    }

    // ---- Escape Helpers ----
    function escapeHtml(str) {
        if (!str) return '';
        var d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    // ---- Seed Pharmacies ----
    function seedPharmacies() {
        var medicines = window.AYUVANT_MEDICINES || [];
        var medIds = medicines.map(function (m) { return m.id; });

        var pharmacyTemplates = [
            {
                id: "PH-001",
                name: "MedPlus Vaishali Nagar",
                address: "Shop 12, Vaishali Nagar, Jaipur 302021",
                phone: "+91-141-2356001",
                distance: 3.2,
                zone: "Z-14954133",
                lat: 26.9218,
                lng: 75.7653,
                reliability: 92,
                avgResponseTime: "45 min",
                openHours: "8:00 AM - 10:00 PM"
            },
            {
                id: "PH-002",
                name: "Apollo Pharmacy Malviya Nagar",
                address: "F-45, Malviya Nagar, Jaipur 302017",
                phone: "+91-141-2720002",
                distance: 4.8,
                zone: "Z-14954142",
                lat: 26.8768,
                lng: 75.8127,
                reliability: 95,
                avgResponseTime: "30 min",
                openHours: "24 Hours"
            },
            {
                id: "PH-003",
                name: "Shree Medical Tonk Road",
                address: "Tonk Road, Near Durgapura, Jaipur 302018",
                phone: "+91-141-2551003",
                distance: 2.1,
                zone: "Z-14954198",
                lat: 26.8891,
                lng: 75.7933,
                reliability: 85,
                avgResponseTime: "20 min",
                openHours: "9:00 AM - 9:30 PM"
            },
            {
                id: "PH-004",
                name: "Jan Aushadhi Mansarovar",
                address: "Sector 4, Mansarovar, Jaipur 302020",
                phone: "+91-141-2781004",
                distance: 6.5,
                zone: "Z-14954156",
                lat: 26.8627,
                lng: 75.7584,
                reliability: 78,
                avgResponseTime: "60 min",
                openHours: "9:00 AM - 8:00 PM"
            },
            {
                id: "PH-005",
                name: "Wellness Forever C-Scheme",
                address: "C-Scheme, Ashok Marg, Jaipur 302001",
                phone: "+91-141-2364005",
                distance: 5.0,
                zone: "Z-14954178",
                lat: 26.9154,
                lng: 75.8054,
                reliability: 90,
                avgResponseTime: "40 min",
                openHours: "8:00 AM - 11:00 PM"
            },
            {
                id: "PH-006",
                name: "NetMeds Pickup Raja Park",
                address: "Raja Park Main Road, Jaipur 302004",
                phone: "+91-141-2620006",
                distance: 3.7,
                zone: "Z-14954211",
                lat: 26.9249,
                lng: 75.8012,
                reliability: 88,
                avgResponseTime: "35 min",
                openHours: "9:00 AM - 10:00 PM"
            }
        ];

        // Assign random stock to each pharmacy
        var demandLevels = ['low', 'moderate', 'high'];

        pharmacyTemplates.forEach(function (pharmacy) {
            // Pick 8-12 random medicines
            var shuffled = medIds.slice().sort(function () { return 0.5 - Math.random(); });
            var stockCount = 8 + Math.floor(Math.random() * 5); // 8-12
            var stock = [];

            for (var i = 0; i < Math.min(stockCount, shuffled.length); i++) {
                var med = medicines.find(function (m) { return m.id === shuffled[i]; });
                if (!med) continue;

                var qty = 50 + Math.floor(Math.random() * 451); // 50-500
                var demandIdx = Math.floor(Math.random() * 3);
                var demand = demandLevels[demandIdx];
                var isSurplus = qty > 250 && demand !== 'high';

                // Generate a reasonable expiry (3-18 months out)
                var expiryMonths = 3 + Math.floor(Math.random() * 16);
                var expiryDate = new Date();
                expiryDate.setMonth(expiryDate.getMonth() + expiryMonths);

                stock.push({
                    medicineId: med.id,
                    medicineName: med.name,
                    genericName: med.genericName,
                    quantity: qty,
                    demandLevel: demand,
                    surplus: isSurplus,
                    batchNumber: 'B-' + (1000 + Math.floor(Math.random() * 9000)),
                    expiryDate: expiryDate.toISOString(),
                    mrp: med.mrp,
                    lastUpdated: new Date().toISOString()
                });
            }

            pharmacy.stock = stock;
            pharmacy.lastSynced = new Date().toISOString();
        });

        return pharmacyTemplates;
    }

    // ---- Init ----
    function init() {
        pharmacies = load(NETWORK_KEY, null);
        if (!pharmacies || pharmacies.length === 0) {
            pharmacies = seedPharmacies();
            save(NETWORK_KEY, pharmacies);
        }
        transfers = load(TRANSFERS_KEY, []);
    }

    // ---- Search Stock ----
    function searchStock(medicineName) {
        if (!medicineName || medicineName.trim().length === 0) return [];

        var query = medicineName.trim().toLowerCase();
        var results = [];

        pharmacies.forEach(function (pharmacy) {
            pharmacy.stock.forEach(function (item) {
                var nameMatch = item.medicineName.toLowerCase().includes(query);
                var genericMatch = item.genericName.toLowerCase().includes(query);

                if (nameMatch || genericMatch) {
                    results.push({
                        pharmacyId: pharmacy.id,
                        pharmacyName: pharmacy.name,
                        address: pharmacy.address,
                        phone: pharmacy.phone,
                        distance: pharmacy.distance,
                        zone: pharmacy.zone,
                        reliability: pharmacy.reliability,
                        avgResponseTime: pharmacy.avgResponseTime,
                        openHours: pharmacy.openHours,
                        medicineId: item.medicineId,
                        medicineName: item.medicineName,
                        genericName: item.genericName,
                        quantity: item.quantity,
                        demandLevel: item.demandLevel,
                        surplus: item.surplus,
                        batchNumber: item.batchNumber,
                        expiryDate: item.expiryDate,
                        mrp: item.mrp
                    });
                }
            });
        });

        // Sort by distance
        results.sort(function (a, b) { return a.distance - b.distance; });
        return results;
    }

    // ---- AI-Scored Recommendations ----
    function recommendTransfer(medicineName) {
        var stockResults = searchStock(medicineName);
        if (stockResults.length === 0) return [];

        var maxDistance = Math.max.apply(null, stockResults.map(function (r) { return r.distance; })) || 10;
        var maxQty = Math.max.apply(null, stockResults.map(function (r) { return r.quantity; })) || 500;
        var now = Date.now();

        var scored = stockResults.map(function (result) {
            // Distance score (closer = better) — 30%
            var distScore = (1 - (result.distance / maxDistance)) * 100;

            // Surplus score (more = better) — 25%
            var surplusScore = (result.quantity / maxQty) * 100;
            if (result.surplus) surplusScore = Math.min(100, surplusScore + 20);

            // Demand score (low demand = better, more willing to share) — 20%
            var demandMap = { low: 100, moderate: 60, high: 20 };
            var demandScore = demandMap[result.demandLevel] || 60;

            // Expiry score (further expiry = better) — 15%
            var expiryMs = new Date(result.expiryDate).getTime() - now;
            var maxExpiryMs = 18 * 30 * 24 * 60 * 60 * 1000; // 18 months
            var expiryScore = Math.min(100, (expiryMs / maxExpiryMs) * 100);
            if (expiryScore < 0) expiryScore = 0;

            // Reliability score — 10%
            var reliabilityScore = result.reliability || 80;

            // Weighted total
            var totalScore = (distScore * 0.30) +
                             (surplusScore * 0.25) +
                             (demandScore * 0.20) +
                             (expiryScore * 0.15) +
                             (reliabilityScore * 0.10);

            result.aiScore = Math.round(totalScore);
            result.scoreBreakdown = {
                distance: Math.round(distScore),
                surplus: Math.round(surplusScore),
                demand: Math.round(demandScore),
                expiry: Math.round(expiryScore),
                reliability: Math.round(reliabilityScore)
            };

            return result;
        });

        // Sort by AI score descending
        scored.sort(function (a, b) { return b.aiScore - a.aiScore; });
        return scored;
    }

    // ---- Transfer Management ----
    function requestTransfer(pharmacyId, medicineName, quantity) {
        var pharmacy = pharmacies.find(function (p) { return p.id === pharmacyId; });
        if (!pharmacy) return null;

        var stockItem = pharmacy.stock.find(function (s) {
            return s.medicineName.toLowerCase() === medicineName.toLowerCase();
        });

        var transfer = {
            id: 'TRF-' + Date.now(),
            pharmacyId: pharmacyId,
            pharmacyName: pharmacy.name,
            pharmacyPhone: pharmacy.phone,
            distance: pharmacy.distance,
            medicineName: medicineName,
            medicineId: stockItem ? stockItem.medicineId : null,
            quantity: quantity,
            batchNumber: stockItem ? stockItem.batchNumber : 'N/A',
            status: 'requested',
            requestedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            statusHistory: [
                { status: 'requested', timestamp: new Date().toISOString(), note: 'Transfer request created' }
            ]
        };

        transfers.push(transfer);
        save(TRANSFERS_KEY, transfers);
        return transfer;
    }

    function updateTransferStatus(transferId, newStatus, note) {
        var idx = transfers.findIndex(function (t) { return t.id === transferId; });
        if (idx === -1) return null;

        transfers[idx].status = newStatus;
        transfers[idx].updatedAt = new Date().toISOString();
        transfers[idx].statusHistory.push({
            status: newStatus,
            timestamp: new Date().toISOString(),
            note: note || ('Status changed to ' + newStatus)
        });

        if (newStatus === 'completed') {
            transfers[idx].completedAt = new Date().toISOString();
        }

        save(TRANSFERS_KEY, transfers);
        return transfers[idx];
    }

    function getActiveTransfers() {
        return transfers.filter(function (t) {
            return t.status !== 'completed' && t.status !== 'rejected';
        });
    }

    function getTransferHistory() {
        return transfers.filter(function (t) {
            return t.status === 'completed' || t.status === 'rejected';
        });
    }

    // ---- Rendering ----
    function renderPharmacyCards(containerId, results) {
        var container = document.getElementById(containerId);
        if (!container) return;

        if (!results || results.length === 0) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">local_pharmacy</span>' +
                '<p class="empty-title">No pharmacies found</p>' +
                '<p class="empty-text">Try searching for a different medicine</p>' +
                '</div>';
            return;
        }

        container.innerHTML = results.map(function (r) {
            var demandColor = r.demandLevel === 'high' ? 'var(--error)' :
                              r.demandLevel === 'moderate' ? 'var(--warning)' : 'var(--tertiary)';
            var surplusTag = r.surplus ?
                '<span class="status-badge" style="background:rgba(0,230,118,0.12);color:var(--tertiary);font-size:10px;padding:2px 8px;">SURPLUS</span>' : '';
            var scoreColor = r.aiScore >= 75 ? 'var(--tertiary)' :
                             r.aiScore >= 50 ? 'var(--primary)' :
                             r.aiScore >= 30 ? 'var(--warning)' : 'var(--error)';

            var expiryDate = r.expiryDate ? new Date(r.expiryDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : 'N/A';

            return '<div class="glass-card pharmacy-card" data-pharmacy-id="' + r.pharmacyId + '" data-medicine="' + escapeHtml(r.medicineName) + '">' +
                '<div class="pharmacy-card-header">' +
                    '<div class="pharmacy-info">' +
                        '<span class="pharmacy-name">' + escapeHtml(r.pharmacyName) + '</span>' +
                        '<span class="pharmacy-distance">' + r.distance + ' km away</span>' +
                    '</div>' +
                    '<div class="pharmacy-score" style="color:' + scoreColor + '">' +
                        '<span class="material-icons-round" style="font-size:16px;">smart_toy</span>' +
                        '<span>' + r.aiScore + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="pharmacy-stock-info">' +
                    '<div class="pharmacy-detail">' +
                        '<span class="pharmacy-detail-label">Medicine</span>' +
                        '<span class="pharmacy-detail-value">' + escapeHtml(r.medicineName) + '</span>' +
                    '</div>' +
                    '<div class="pharmacy-detail">' +
                        '<span class="pharmacy-detail-label">Available</span>' +
                        '<span class="pharmacy-detail-value">' + r.quantity + ' units ' + surplusTag + '</span>' +
                    '</div>' +
                    '<div class="pharmacy-detail">' +
                        '<span class="pharmacy-detail-label">Demand</span>' +
                        '<span class="pharmacy-detail-value" style="color:' + demandColor + ';text-transform:capitalize;">' + r.demandLevel + '</span>' +
                    '</div>' +
                    '<div class="pharmacy-detail">' +
                        '<span class="pharmacy-detail-label">Expiry</span>' +
                        '<span class="pharmacy-detail-value">' + expiryDate + '</span>' +
                    '</div>' +
                    '<div class="pharmacy-detail">' +
                        '<span class="pharmacy-detail-label">Zone</span>' +
                        '<span class="pharmacy-detail-value">' + r.zone + '</span>' +
                    '</div>' +
                    '<div class="pharmacy-detail">' +
                        '<span class="pharmacy-detail-label">Response</span>' +
                        '<span class="pharmacy-detail-value">~' + r.avgResponseTime + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="pharmacy-card-actions">' +
                    '<button class="btn-transfer-request" data-pharmacy-id="' + r.pharmacyId + '" data-medicine="' + escapeHtml(r.medicineName) + '">' +
                        '<span class="material-icons-round">swap_horiz</span> Request Transfer' +
                    '</button>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    function renderActiveTransfers(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var active = getActiveTransfers();

        if (active.length === 0) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">sync_alt</span>' +
                '<p class="empty-title">No active transfers</p>' +
                '<p class="empty-text">Request a stock transfer from nearby pharmacies</p>' +
                '</div>';
            return;
        }

        container.innerHTML = active.map(function (t) {
            var statusColor = {
                requested: 'var(--warning)',
                approved: 'var(--primary)',
                in_transit: '#AB47BC',
                completed: 'var(--tertiary)',
                rejected: 'var(--error)'
            }[t.status] || 'var(--on-surface-variant)';

            var statusIcon = {
                requested: 'pending',
                approved: 'check_circle',
                in_transit: 'local_shipping',
                completed: 'done_all',
                rejected: 'cancel'
            }[t.status] || 'help';

            var statusLabel = t.status.replace('_', ' ');
            var timeAgo = getTimeAgo(t.updatedAt);

            return '<div class="glass-card transfer-card" data-transfer-id="' + t.id + '">' +
                '<div class="transfer-card-header">' +
                    '<div class="transfer-info">' +
                        '<span class="transfer-medicine">' + escapeHtml(t.medicineName) + '</span>' +
                        '<span class="transfer-pharmacy">' + escapeHtml(t.pharmacyName) + ' · ' + t.distance + ' km</span>' +
                    '</div>' +
                    '<div class="transfer-status" style="color:' + statusColor + '">' +
                        '<span class="material-icons-round" style="font-size:14px;">' + statusIcon + '</span>' +
                        '<span style="text-transform:capitalize;">' + statusLabel + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="transfer-details">' +
                    '<span class="transfer-qty">' + t.quantity + ' units</span>' +
                    '<span class="transfer-time">' + timeAgo + '</span>' +
                '</div>' +
                '<div class="transfer-actions">' +
                    (t.status === 'requested' ? '<button class="btn-approve-transfer" data-transfer-id="' + t.id + '" data-action="approved"><span class="material-icons-round">check</span> Approve</button>' +
                        '<button class="btn-reject-transfer" data-transfer-id="' + t.id + '" data-action="rejected"><span class="material-icons-round">close</span> Reject</button>' : '') +
                    (t.status === 'approved' ? '<button class="btn-transit-transfer" data-transfer-id="' + t.id + '" data-action="in_transit"><span class="material-icons-round">local_shipping</span> In Transit</button>' : '') +
                    (t.status === 'in_transit' ? '<button class="btn-complete-transfer" data-transfer-id="' + t.id + '" data-action="completed"><span class="material-icons-round">done_all</span> Mark Received</button>' : '') +
                '</div>' +
            '</div>';
        }).join('');
    }

    function renderTransferHistory(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var history = getTransferHistory();

        if (history.length === 0) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">history</span>' +
                '<p class="empty-title">No transfer history</p>' +
                '<p class="empty-text">Completed and rejected transfers will appear here</p>' +
                '</div>';
            return;
        }

        container.innerHTML = history.map(function (t) {
            var isCompleted = t.status === 'completed';
            var statusColor = isCompleted ? 'var(--tertiary)' : 'var(--error)';
            var statusIcon = isCompleted ? 'done_all' : 'cancel';
            var dateStr = t.completedAt || t.updatedAt;
            var formattedDate = new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

            return '<div class="glass-card history-card">' +
                '<div class="history-card-header">' +
                    '<span class="material-icons-round" style="color:' + statusColor + ';font-size:18px;">' + statusIcon + '</span>' +
                    '<div class="history-info">' +
                        '<span class="history-medicine">' + escapeHtml(t.medicineName) + '</span>' +
                        '<span class="history-meta">' + t.quantity + ' units · ' + escapeHtml(t.pharmacyName) + '</span>' +
                    '</div>' +
                    '<span class="history-date">' + formattedDate + '</span>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    // ---- Time Helper ----
    function getTimeAgo(isoString) {
        if (!isoString) return '';
        var diff = (Date.now() - new Date(isoString).getTime()) / 1000;
        if (diff < 60) return 'Just now';
        if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
        if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
        return Math.floor(diff / 86400) + 'd ago';
    }

    // ---- Public API ----
    return {
        init: init,
        searchStock: searchStock,
        recommendTransfer: recommendTransfer,
        requestTransfer: requestTransfer,
        updateTransferStatus: updateTransferStatus,
        getActiveTransfers: getActiveTransfers,
        getTransferHistory: getTransferHistory,
        renderPharmacyCards: renderPharmacyCards,
        renderActiveTransfers: renderActiveTransfers,
        renderTransferHistory: renderTransferHistory
    };

})();
