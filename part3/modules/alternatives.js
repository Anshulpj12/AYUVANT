/* ============================================
   AYUVANT — Part 3: Alternatives Engine Module
   Salt-match based alternative finder, stock
   integration, and feedback-boosted scoring
   ============================================ */

window.Alternatives = (function () {
    'use strict';

    // ---- Constants ----
    const BATCHES_KEY = 'ayuvant_batches';
    const SALES_KEY = 'ayuvant_sales';
    const FEEDBACK_KEY = 'ayuvant_feedback';
    const PATIENTS_KEY = 'ayuvant_patients';

    // ---- State ----
    let medicines = [];

    // ---- Storage Helpers ----
    function load(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) || fallback; }
        catch { return fallback; }
    }
    function save(key, data) {
        try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { console.error('Alternatives: save error', e); }
    }

    // ---- Escape ----
    function escapeHtml(str) {
        if (!str) return '';
        var d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    // ---- Init ----
    function init() {
        medicines = window.AYUVANT_MEDICINES || [];
    }

    // ---- Salt Comparison Utilities ----
    function getSaltKey(salt) {
        return (salt.name + '_' + salt.strength + '_' + salt.unit).toLowerCase();
    }

    function getSaltSet(med) {
        return med.activeSalts.map(getSaltKey);
    }

    function getSaltNameSet(med) {
        return med.activeSalts.map(function (s) { return s.name.toLowerCase(); });
    }

    // ---- Find Alternatives ----
    function findAlternatives(medicineNameOrId) {
        if (!medicineNameOrId) return [];

        var query = medicineNameOrId.trim().toLowerCase();
        var original = medicines.find(function (m) {
            return m.id.toLowerCase() === query ||
                   m.name.toLowerCase() === query ||
                   m.name.toLowerCase().includes(query);
        });

        if (!original) return [];

        var originalSalts = getSaltSet(original);
        var originalSaltNames = getSaltNameSet(original);
        var feedbackBoosts = boostFromFeedback();
        var results = [];

        medicines.forEach(function (med) {
            if (med.id === original.id) return; // skip self

            var matchScore = 0;
            var matchReasons = [];

            // 1. Exact salt match (same salts with same strengths)
            var medSalts = getSaltSet(med);
            var exactMatches = originalSalts.filter(function (s) { return medSalts.indexOf(s) !== -1; });
            var isExactSaltMatch = exactMatches.length === originalSalts.length && exactMatches.length === medSalts.length;

            if (isExactSaltMatch) {
                matchScore = 90 + Math.min(10, exactMatches.length * 5);
                original.activeSalts.forEach(function (salt) {
                    matchReasons.push('Same active salt: ' + salt.name + ' ' + salt.strength + salt.unit);
                });
            }

            // 2. Approved alternatives
            if (original.approvedAlternatives.indexOf(med.id) !== -1) {
                if (matchScore < 80) matchScore = 80 + Math.floor(Math.random() * 11);
                matchReasons.push('Approved therapeutic alternative');
            }

            // 3. Same therapeutic class
            if (matchScore < 70 && med.therapeuticClass === original.therapeuticClass) {
                matchScore = Math.max(matchScore, 50 + Math.floor(Math.random() * 21));
                matchReasons.push('Same therapeutic class: ' + med.therapeuticClass);
            }

            // 4. Partial salt match
            if (matchScore < 60) {
                var medSaltNames = getSaltNameSet(med);
                var sharedSalts = originalSaltNames.filter(function (s) { return medSaltNames.indexOf(s) !== -1; });

                if (sharedSalts.length > 0) {
                    matchScore = Math.max(matchScore, 40 + Math.floor((sharedSalts.length / originalSaltNames.length) * 20));
                    sharedSalts.forEach(function (saltName) {
                        matchReasons.push('Shares active ingredient: ' + saltName.charAt(0).toUpperCase() + saltName.slice(1));
                    });
                }
            }

            // 5. Same category fallback
            if (matchScore === 0 && med.category === original.category) {
                matchScore = 30;
                matchReasons.push('Same category: ' + med.category);
            }

            if (matchScore === 0) return; // no match

            // Apply feedback boost
            var boostKey = original.id + '_' + med.id;
            if (feedbackBoosts[boostKey] !== undefined) {
                matchScore = Math.max(0, Math.min(100, matchScore + feedbackBoosts[boostKey]));
                if (feedbackBoosts[boostKey] > 0) {
                    matchReasons.push('Boosted by positive pharmacist feedback');
                } else if (feedbackBoosts[boostKey] < 0) {
                    matchReasons.push('Penalized by negative pharmacist feedback');
                }
            }

            // Check stock
            var stockInfo = checkStock(med.name);
            var priceDiff = med.mrp - original.mrp;

            results.push({
                medicine: med,
                matchScore: Math.min(100, matchScore),
                matchReasons: matchReasons,
                inStock: stockInfo.inStock,
                stockQty: stockInfo.qty,
                priceDiff: priceDiff
            });
        });

        // Sort by score descending
        results.sort(function (a, b) { return b.matchScore - a.matchScore; });
        return results;
    }

    // ---- Match Reasons (for external use) ----
    function getMatchReasons(original, alternative) {
        var reasons = [];
        var origSalts = getSaltSet(original);
        var altSalts = getSaltSet(alternative);

        var exactMatches = origSalts.filter(function (s) { return altSalts.indexOf(s) !== -1; });
        if (exactMatches.length === origSalts.length && exactMatches.length === altSalts.length) {
            reasons.push('Identical active salt composition');
        }

        if (original.approvedAlternatives.indexOf(alternative.id) !== -1) {
            reasons.push('Approved therapeutic alternative');
        }

        if (original.therapeuticClass === alternative.therapeuticClass) {
            reasons.push('Same therapeutic class: ' + alternative.therapeuticClass);
        }

        var origNames = getSaltNameSet(original);
        var altNames = getSaltNameSet(alternative);
        var shared = origNames.filter(function (s) { return altNames.indexOf(s) !== -1; });
        if (shared.length > 0 && shared.length < origNames.length) {
            reasons.push('Partially matching salts (' + shared.length + '/' + origNames.length + ')');
        }

        return reasons;
    }

    // ---- Stock Check ----
    function checkStock(medicineName) {
        var batches = load(BATCHES_KEY, []);
        var name = medicineName.toLowerCase();
        var totalQty = 0;

        batches.forEach(function (b) {
            if (b.medicineName && b.medicineName.toLowerCase() === name && b.quantity > 0) {
                totalQty += b.quantity;
            }
        });

        return { inStock: totalQty > 0, qty: totalQty };
    }

    // ---- Sell Alternative ----
    function sellAlternative(originalMedicine, alternativeMedicine, patientId, quantity, batchNumber) {
        // 1. Deduct from ayuvant_batches
        var batches = load(BATCHES_KEY, []);
        var deducted = false;
        for (var i = 0; i < batches.length; i++) {
            if (batches[i].batchNumber === batchNumber && batches[i].medicineName === alternativeMedicine.name) {
                batches[i].quantity = Math.max(0, batches[i].quantity - quantity);
                deducted = true;
                break;
            }
        }
        if (!deducted) {
            // Try name-only match if batch doesn't match exactly
            for (var j = 0; j < batches.length; j++) {
                if (batches[j].medicineName === alternativeMedicine.name && batches[j].quantity >= quantity) {
                    batches[j].quantity -= quantity;
                    batchNumber = batches[j].batchNumber;
                    deducted = true;
                    break;
                }
            }
        }
        save(BATCHES_KEY, batches);

        // 2. Add to ayuvant_sales
        var sales = load(SALES_KEY, []);
        var saleId = Date.now().toString();
        var sale = {
            id: saleId,
            medicineName: alternativeMedicine.name,
            medicineId: alternativeMedicine.id,
            batchNumber: batchNumber,
            quantity: quantity,
            zone: 'Z-14954133',
            date: new Date().toISOString(),
            dayOfWeek: new Date().getDay(),
            month: new Date().getMonth(),
            wasSubstitute: true,
            originalMedicine: originalMedicine.name,
            originalMedicineId: originalMedicine.id,
            patientId: patientId || null
        };
        sales.unshift(sale);
        save(SALES_KEY, sales);

        // 3. Create pending feedback entry
        var feedback = load(FEEDBACK_KEY, []);
        var feedbackId = 'FB-' + Date.now();
        var feedbackEntry = {
            id: feedbackId,
            transactionId: saleId,
            patientId: patientId || null,
            originalMedicine: {
                id: originalMedicine.id,
                name: originalMedicine.name,
                genericName: originalMedicine.genericName,
                activeSalts: originalMedicine.activeSalts
            },
            substituteMedicine: {
                id: alternativeMedicine.id,
                name: alternativeMedicine.name,
                genericName: alternativeMedicine.genericName,
                activeSalts: alternativeMedicine.activeSalts
            },
            quantity: quantity,
            status: 'pending',
            createdAt: new Date().toISOString(),
            responses: null
        };
        feedback.push(feedbackEntry);
        save(FEEDBACK_KEY, feedback);

        // 4. Update patient purchase history (if patientId provided)
        if (patientId) {
            var patients = load(PATIENTS_KEY, []);
            var patientIdx = patients.findIndex(function (p) { return p.id === patientId; });
            if (patientIdx !== -1) {
                if (!patients[patientIdx].purchases) patients[patientIdx].purchases = [];
                patients[patientIdx].purchases.push({
                    purchaseId: 'PUR-' + Date.now(),
                    date: new Date().toISOString(),
                    medicineName: alternativeMedicine.name,
                    medicineId: alternativeMedicine.id,
                    activeSalts: alternativeMedicine.activeSalts.map(function (s) { return s.name + ' ' + s.strength + s.unit; }),
                    batchNumber: batchNumber,
                    quantity: quantity,
                    category: alternativeMedicine.category,
                    wasSubstitute: true,
                    originalMedicine: originalMedicine.name
                });
                patients[patientIdx].lastVisit = new Date().toISOString();
                save(PATIENTS_KEY, patients);
            }
        }

        return feedbackId;
    }

    // ---- Render Medicine Info ----
    function renderMedicineInfo(containerId, medicine) {
        var container = document.getElementById(containerId);
        if (!container || !medicine) return;

        var saltTags = medicine.activeSalts.map(function (s) {
            return '<span class="salt-tag">' + escapeHtml(s.name) + ' ' + s.strength + s.unit + '</span>';
        }).join('');

        var stockInfo = checkStock(medicine.name);
        var stockClass = stockInfo.inStock ? 'stock-available' : 'stock-unavailable';
        var stockText = stockInfo.inStock ? stockInfo.qty + ' units in stock' : 'Out of stock';

        container.innerHTML =
            '<div class="glass-card medicine-info-card">' +
                '<div class="medicine-info-header">' +
                    '<div class="medicine-icon-wrap">' +
                        '<span class="material-icons-round">medication</span>' +
                    '</div>' +
                    '<div class="medicine-header-text">' +
                        '<span class="medicine-brand-name">' + escapeHtml(medicine.name) + '</span>' +
                        '<span class="medicine-generic-name">' + escapeHtml(medicine.genericName) + '</span>' +
                    '</div>' +
                    '<span class="medicine-schedule-badge">' + medicine.schedule + '</span>' +
                '</div>' +
                '<div class="medicine-salt-tags">' + saltTags + '</div>' +
                '<div class="medicine-meta-row">' +
                    '<div class="medicine-meta-item">' +
                        '<span class="medicine-meta-label">Category</span>' +
                        '<span class="medicine-meta-value">' + escapeHtml(medicine.category) + '</span>' +
                    '</div>' +
                    '<div class="medicine-meta-item">' +
                        '<span class="medicine-meta-label">MRP</span>' +
                        '<span class="medicine-meta-value">₹' + medicine.mrp.toFixed(2) + '</span>' +
                    '</div>' +
                    '<div class="medicine-meta-item">' +
                        '<span class="medicine-meta-label">Pack</span>' +
                        '<span class="medicine-meta-value">' + escapeHtml(medicine.packSize) + '</span>' +
                    '</div>' +
                    '<div class="medicine-meta-item">' +
                        '<span class="medicine-meta-label">Maker</span>' +
                        '<span class="medicine-meta-value">' + escapeHtml(medicine.manufacturer) + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="medicine-stock-row ' + stockClass + '">' +
                    '<span class="material-icons-round" style="font-size:16px;">' + (stockInfo.inStock ? 'inventory' : 'warning') + '</span>' +
                    '<span>' + stockText + '</span>' +
                '</div>' +
            '</div>';
    }

    // ---- Render Alternatives ----
    function renderAlternatives(containerId, results) {
        var container = document.getElementById(containerId);
        if (!container) return;

        if (!results || results.length === 0) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">search_off</span>' +
                '<p class="empty-title">No alternatives found</p>' +
                '<p class="empty-text">No matching medicines in the database</p>' +
                '</div>';
            return;
        }

        container.innerHTML = results.map(function (r) {
            var scoreColor = r.matchScore >= 85 ? 'var(--tertiary)' :
                             r.matchScore >= 70 ? 'var(--primary)' :
                             r.matchScore >= 50 ? 'var(--warning)' : 'var(--on-surface-variant)';

            var scoreLabel = r.matchScore >= 85 ? 'Excellent Match' :
                             r.matchScore >= 70 ? 'Good Match' :
                             r.matchScore >= 50 ? 'Fair Match' : 'Partial Match';

            var priceDiffText = '';
            if (r.priceDiff > 0) {
                priceDiffText = '<span class="price-higher">+₹' + r.priceDiff.toFixed(0) + '</span>';
            } else if (r.priceDiff < 0) {
                priceDiffText = '<span class="price-lower">-₹' + Math.abs(r.priceDiff).toFixed(0) + '</span>';
            } else {
                priceDiffText = '<span class="price-same">Same price</span>';
            }

            var saltTags = r.medicine.activeSalts.map(function (s) {
                return '<span class="salt-tag-small">' + escapeHtml(s.name) + ' ' + s.strength + s.unit + '</span>';
            }).join('');

            var reasonChips = r.matchReasons.map(function (reason) {
                return '<span class="reason-chip">' + escapeHtml(reason) + '</span>';
            }).join('');

            var stockBadge = r.inStock ?
                '<span class="stock-badge in-stock"><span class="material-icons-round" style="font-size:12px;">check_circle</span> ' + r.stockQty + ' units</span>' :
                '<span class="stock-badge out-stock"><span class="material-icons-round" style="font-size:12px;">cancel</span> Out of stock</span>';

            var sellBtn = r.inStock ?
                '<button class="btn-sell-alternative" data-medicine-id="' + r.medicine.id + '">' +
                    '<span class="material-icons-round">shopping_cart</span> Sell This' +
                '</button>' : '';

            return '<div class="glass-card alternative-card" data-medicine-id="' + r.medicine.id + '">' +
                '<div class="alt-card-header">' +
                    '<div class="alt-info">' +
                        '<span class="alt-name">' + escapeHtml(r.medicine.name) + '</span>' +
                        '<span class="alt-generic">' + escapeHtml(r.medicine.genericName) + ' · ' + escapeHtml(r.medicine.manufacturer) + '</span>' +
                    '</div>' +
                    '<div class="alt-score" style="color:' + scoreColor + '">' +
                        '<span class="alt-score-value">' + r.matchScore + '%</span>' +
                        '<span class="alt-score-label">' + scoreLabel + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="alt-salts">' + saltTags + '</div>' +
                '<div class="alt-reasons">' + reasonChips + '</div>' +
                '<div class="alt-footer">' +
                    '<div class="alt-price-stock">' +
                        '<span class="alt-price">₹' + r.medicine.mrp.toFixed(0) + ' ' + priceDiffText + '</span>' +
                        stockBadge +
                    '</div>' +
                    sellBtn +
                '</div>' +
            '</div>';
        }).join('');
    }

    // ---- Feedback Boost Engine ----
    function boostFromFeedback() {
        var feedback = load(FEEDBACK_KEY, []);
        var boosts = {};

        // Group by substitution pair
        var pairRatings = {};
        feedback.forEach(function (entry) {
            if (entry.status !== 'completed' || !entry.responses) return;

            var key = entry.originalMedicine.id + '_' + entry.substituteMedicine.id;
            if (!pairRatings[key]) pairRatings[key] = [];

            // Q2 is the star rating
            var rating = entry.responses.q2;
            if (typeof rating === 'number') {
                pairRatings[key].push(rating);
            }
        });

        // Calculate boosts
        Object.keys(pairRatings).forEach(function (key) {
            var ratings = pairRatings[key];
            var avg = ratings.reduce(function (s, r) { return s + r; }, 0) / ratings.length;

            if (avg >= 4) {
                boosts[key] = 5;
            } else if (avg < 2) {
                boosts[key] = -10;
            }
        });

        return boosts;
    }

    // ---- Public API ----
    return {
        init: init,
        findAlternatives: findAlternatives,
        getMatchReasons: getMatchReasons,
        checkStock: checkStock,
        sellAlternative: sellAlternative,
        renderMedicineInfo: renderMedicineInfo,
        renderAlternatives: renderAlternatives,
        boostFromFeedback: boostFromFeedback,
        getMedicines: function () { return medicines; }
    };

})();
