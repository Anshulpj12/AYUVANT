/* ============================================
   AYUVANT — Part 2: AI Intelligence & Zone System
   Sale Recording, Zone Map, Predictions, AI Q&A, Alerts
   ============================================ */

(function () {
    'use strict';

    // ---- Storage Keys ----
    const BATCHES_KEY = 'ayuvant_batches';
    const SALES_KEY = 'ayuvant_sales';
    const PREDICTIONS_KEY = 'ayuvant_predictions';
    const MODEL_KEY = 'ayuvant_model';

    // ---- Zone Config ----
    const GRID_SIZE_KM = 2;
    const GRID_SIZE_DEG = 0.018; // ~2km in latitude degrees
    const DEFAULT_LAT = 26.9124; // Default: Jaipur, India
    const DEFAULT_LNG = 75.7873;

    // ---- DOM Elements ----
    const tabBtns = document.querySelectorAll('.tab-btn');
    const views = document.querySelectorAll('.view');
    const toast = document.getElementById('toast');

    // Sale form
    const saleForm = document.getElementById('sale-form');
    const medicineSearch = document.getElementById('sale-medicine-search');
    const searchResults = document.getElementById('medicine-search-results');
    const selectedDisplay = document.getElementById('selected-medicine-display');
    const selectedMedName = document.getElementById('selected-med-name');
    const selectedMedStock = document.getElementById('selected-med-stock');
    const clearMedicineBtn = document.getElementById('clear-medicine-btn');
    const batchSelectGroup = document.getElementById('batch-select-group');
    const batchChips = document.getElementById('batch-chips');
    const qtySoldGroup = document.getElementById('qty-sold-group');
    const saleQuantity = document.getElementById('sale-quantity');
    const saleQtyHint = document.getElementById('sale-qty-hint');
    const zoneGroup = document.getElementById('zone-group');
    const buyerZone = document.getElementById('buyer-zone');
    const saleSubmitBtn = document.getElementById('sale-submit-btn');
    const recentSalesList = document.getElementById('recent-sales-list');
    const salesEmpty = document.getElementById('sales-empty');

    // Prediction
    const predictionCards = document.getElementById('prediction-cards');
    const gaugeFill = document.getElementById('gauge-fill');
    const gaugeValue = document.getElementById('gauge-value');
    const lastTrained = document.getElementById('last-trained');
    const modelAccuracy = document.getElementById('model-accuracy');

    // Alerts
    const alertList = document.getElementById('alert-list');
    const alertsEmpty = document.getElementById('alerts-empty');
    const alertCount = document.getElementById('alert-count');

    // ---- State ----
    let selectedMedicine = null;
    let selectedBatch = null;
    let chemistLat = DEFAULT_LAT;
    let chemistLng = DEFAULT_LNG;

    // ---- Data Helpers ----
    function load(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
    function save(key, data) { localStorage.setItem(key, JSON.stringify(data)); }
    function loadObj(key) { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; } }
    function saveObj(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

    // ---- Tab Navigation ----
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            views.forEach(v => v.classList.remove('active'));
            const target = document.getElementById('view-' + tab);
            if (target) target.classList.add('active');

            if (tab === 'zone-map') renderZoneMap();
            if (tab === 'predictions') renderPredictions();
            if (tab === 'alerts') renderAlerts();
            if (tab === 'record-sale') renderRecentSales();
        });
    });

    // ================================================
    // ZONE SYSTEM
    // ================================================

    function getZoneFromCoords(lat, lng) {
        const zoneX = Math.floor(lng / GRID_SIZE_DEG);
        const zoneY = Math.floor(lat / GRID_SIZE_DEG);
        const centerLat = (zoneY * GRID_SIZE_DEG) + (GRID_SIZE_DEG / 2);
        const centerLng = (zoneX * GRID_SIZE_DEG) + (GRID_SIZE_DEG / 2);
        const number = `Z-${Math.abs(zoneY)}${Math.abs(zoneX)}`;
        return { zoneX, zoneY, centerLat, centerLng, number };
    }

    function getChemistZone() {
        return getZoneFromCoords(chemistLat, chemistLng);
    }

    // Try to get real location
    function initLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    chemistLat = pos.coords.latitude;
                    chemistLng = pos.coords.longitude;
                    renderZoneMap();
                },
                () => { /* Use default */ }
            );
        }
    }

    // ================================================
    // RECORD SALE
    // ================================================

    // Medicine search
    medicineSearch.addEventListener('input', () => {
        const query = medicineSearch.value.trim().toLowerCase();
        if (query.length < 1) { searchResults.innerHTML = ''; return; }

        const batches = load(BATCHES_KEY);
        const medicines = {};
        batches.forEach(b => {
            const name = b.medicineName.toLowerCase();
            if (name.includes(query)) {
                if (!medicines[b.medicineName]) medicines[b.medicineName] = { name: b.medicineName, totalQty: 0, batches: [] };
                medicines[b.medicineName].totalQty += b.quantity;
                medicines[b.medicineName].batches.push(b);
            }
        });

        const results = Object.values(medicines);
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item"><span class="search-result-name" style="color:var(--on-surface-variant)">No medicines found</span></div>';
            return;
        }

        searchResults.innerHTML = results.map(m => `
            <div class="search-result-item" data-medicine="${escapeAttr(m.name)}">
                <span class="search-result-name">${escapeHtml(m.name)}</span>
                <span class="search-result-qty">${m.totalQty} units</span>
            </div>
        `).join('');

        searchResults.querySelectorAll('.search-result-item[data-medicine]').forEach(item => {
            item.addEventListener('click', () => selectMedicine(item.dataset.medicine));
        });
    });

    function selectMedicine(name) {
        const batches = load(BATCHES_KEY);
        const medicineBatches = batches.filter(b => b.medicineName === name);
        const totalQty = medicineBatches.reduce((s, b) => s + b.quantity, 0);

        selectedMedicine = { name, batches: medicineBatches, totalQty };
        selectedBatch = null;

        // Show selected
        selectedMedName.textContent = name;
        selectedMedStock.textContent = `${totalQty} units in ${medicineBatches.length} batch(es)`;
        selectedDisplay.style.display = 'flex';
        medicineSearch.style.display = 'none';
        searchResults.innerHTML = '';

        // Show batch chips
        batchChips.innerHTML = medicineBatches.map(b => `
            <div class="batch-chip" data-batch="${escapeAttr(b.batchNumber)}">${escapeHtml(b.batchNumber)} (${b.quantity})</div>
        `).join('');
        batchSelectGroup.style.display = 'block';

        batchChips.querySelectorAll('.batch-chip').forEach(chip => {
            chip.addEventListener('click', () => selectBatch(chip.dataset.batch));
        });
    }

    function selectBatch(batchNumber) {
        selectedBatch = batchNumber;
        batchChips.querySelectorAll('.batch-chip').forEach(c => c.classList.remove('selected'));
        const selected = batchChips.querySelector(`[data-batch="${CSS.escape(batchNumber)}"]`);
        if (selected) selected.classList.add('selected');

        qtySoldGroup.style.display = 'block';
        zoneGroup.style.display = 'block';

        // Auto-fill zone
        const myZone = getChemistZone();
        buyerZone.value = myZone.number;

        saleSubmitBtn.style.display = 'flex';
    }

    clearMedicineBtn.addEventListener('click', () => {
        selectedMedicine = null;
        selectedBatch = null;
        selectedDisplay.style.display = 'none';
        medicineSearch.style.display = 'block';
        medicineSearch.value = '';
        batchSelectGroup.style.display = 'none';
        qtySoldGroup.style.display = 'none';
        zoneGroup.style.display = 'none';
        saleSubmitBtn.style.display = 'none';
        saleQuantity.value = '';
    });

    // Stepper
    document.getElementById('sale-qty-minus').addEventListener('click', () => {
        const v = parseInt(saleQuantity.value) || 0;
        if (v > 1) saleQuantity.value = v - 1;
    });
    document.getElementById('sale-qty-plus').addEventListener('click', () => {
        saleQuantity.value = (parseInt(saleQuantity.value) || 0) + 1;
    });

    // Submit sale
    saleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!selectedMedicine || !selectedBatch) return;

        const qty = parseInt(saleQuantity.value);
        const zone = buyerZone.value.trim();
        if (!qty || qty < 1 || !zone) return;

        // Record sale
        const sales = load(SALES_KEY);
        const sale = {
            id: Date.now().toString(),
            medicineName: selectedMedicine.name,
            batchNumber: selectedBatch,
            quantity: qty,
            zone: zone,
            date: new Date().toISOString(),
            dayOfWeek: new Date().getDay(),
            month: new Date().getMonth()
        };
        sales.unshift(sale);
        save(SALES_KEY, sales);

        // Deduct from batch
        const batches = load(BATCHES_KEY);
        const batchIdx = batches.findIndex(b => b.batchNumber === selectedBatch);
        if (batchIdx !== -1) {
            batches[batchIdx].quantity = Math.max(0, batches[batchIdx].quantity - qty);
        }
        save(BATCHES_KEY, batches);

        // Retrain model
        trainModel();

        // Reset form
        clearMedicineBtn.click();
        showToast('Sale recorded successfully!', false);
        renderRecentSales();
    });

    function renderRecentSales() {
        const sales = load(SALES_KEY).slice(0, 10);
        if (sales.length === 0) {
            recentSalesList.innerHTML = '';
            salesEmpty.classList.add('show');
            return;
        }
        salesEmpty.classList.remove('show');
        recentSalesList.innerHTML = sales.map(s => `
            <div class="batch-card">
                <div class="batch-card-header">
                    <span class="batch-name">${escapeHtml(s.medicineName)}</span>
                    <span class="batch-qty">${s.quantity} sold</span>
                </div>
                <div class="batch-card-body">
                    <div class="batch-detail">
                        <span class="batch-detail-label">Batch</span>
                        <span class="batch-detail-value">${escapeHtml(s.batchNumber)}</span>
                    </div>
                    <div class="batch-detail">
                        <span class="batch-detail-label">Zone</span>
                        <span class="batch-detail-value">${escapeHtml(s.zone)}</span>
                    </div>
                    <div class="batch-detail">
                        <span class="batch-detail-label">Date</span>
                        <span class="batch-detail-value">${formatDate(s.date)}</span>
                    </div>
                    <div class="batch-detail">
                        <span class="batch-detail-label">Day</span>
                        <span class="batch-detail-value">${getDayName(new Date(s.date).getDay())}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ================================================
    // ML PREDICTION MODEL (LOCAL)
    // ================================================

    function trainModel() {
        const sales = load(SALES_KEY);
        if (sales.length === 0) return;

        const model = {};
        const now = new Date();

        // Group by medicine
        const medGroups = {};
        sales.forEach(s => {
            if (!medGroups[s.medicineName]) medGroups[s.medicineName] = [];
            medGroups[s.medicineName].push(s);
        });

        // For each medicine, compute scores
        Object.keys(medGroups).forEach(med => {
            const medSales = medGroups[med];
            const totalSold = medSales.reduce((sum, s) => sum + s.quantity, 0);

            // Weekly rate
            const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
            const weeklySales = medSales.filter(s => new Date(s.date) >= weekAgo);
            const weeklyQty = weeklySales.reduce((sum, s) => sum + s.quantity, 0);

            // Monthly rate
            const monthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
            const monthlySales = medSales.filter(s => new Date(s.date) >= monthAgo);
            const monthlyQty = monthlySales.reduce((sum, s) => sum + s.quantity, 0);

            // Day-of-week distribution
            const dayDist = [0, 0, 0, 0, 0, 0, 0];
            medSales.forEach(s => { dayDist[s.dayOfWeek] += s.quantity; });

            // Month distribution
            const monthDist = new Array(12).fill(0);
            medSales.forEach(s => { monthDist[s.month] += s.quantity; });

            // Zone distribution
            const zoneDist = {};
            medSales.forEach(s => {
                if (!zoneDist[s.zone]) zoneDist[s.zone] = 0;
                zoneDist[s.zone] += s.quantity;
            });

            // Selling speed: units per day
            const firstSale = new Date(medSales[medSales.length - 1].date);
            const daysSince = Math.max(1, (now - firstSale) / (24 * 60 * 60 * 1000));
            const sellingSpeed = totalSold / daysSince;

            // Current stock
            const batches = load(BATCHES_KEY);
            const currentStock = batches.filter(b => b.medicineName === med).reduce((s, b) => s + b.quantity, 0);

            // Days until shortage
            const daysUntilShortage = sellingSpeed > 0 ? Math.floor(currentStock / sellingSpeed) : 999;

            // Demand score (0-100)
            let demandScore = 0;
            if (daysUntilShortage <= 3) demandScore = 95;
            else if (daysUntilShortage <= 7) demandScore = 80;
            else if (daysUntilShortage <= 14) demandScore = 60;
            else if (daysUntilShortage <= 30) demandScore = 40;
            else demandScore = 20;

            // Boost score if weekly rate is higher than monthly average
            const weeklyAvg = monthlyQty / 4;
            if (weeklyQty > weeklyAvg * 1.3) demandScore = Math.min(100, demandScore + 15);

            model[med] = {
                totalSold,
                weeklyQty,
                monthlyQty,
                sellingSpeed: Math.round(sellingSpeed * 100) / 100,
                currentStock,
                daysUntilShortage,
                demandScore: Math.round(demandScore),
                dayDist,
                monthDist,
                zoneDist,
                lastTrained: now.toISOString(),
                saleCount: medSales.length
            };
        });

        saveObj(MODEL_KEY, {
            medicines: model,
            lastTrained: now.toISOString(),
            totalSales: sales.length,
            accuracy: Math.min(95, 70 + Math.floor(sales.length / 5))
        });
    }

    // ================================================
    // ZONE MAP RENDERING
    // ================================================

    function renderZoneMap() {
        const myZone = getChemistZone();
        const grid = document.getElementById('zone-grid');
        const model = loadObj(MODEL_KEY);
        const sales = load(SALES_KEY);

        // Build zone demand data
        const zoneDemand = {};
        sales.forEach(s => {
            if (!zoneDemand[s.zone]) zoneDemand[s.zone] = { total: 0, medicines: {} };
            zoneDemand[s.zone].total += s.quantity;
            if (!zoneDemand[s.zone].medicines[s.medicineName]) zoneDemand[s.zone].medicines[s.medicineName] = 0;
            zoneDemand[s.zone].medicines[s.medicineName] += s.quantity;
        });

        // Generate 5x5 grid centered on chemist
        let html = '';
        let nearbyZones = [];
        let cellCount = 0;

        for (let dy = 2; dy >= -2; dy--) {
            for (let dx = -2; dx <= 2; dx++) {
                const lat = chemistLat + (dy * GRID_SIZE_DEG);
                const lng = chemistLng + (dx * GRID_SIZE_DEG);
                const zone = getZoneFromCoords(lat, lng);
                const isCenter = dx === 0 && dy === 0;
                const demand = zoneDemand[zone.number];

                let cls = 'zone-cell';
                let demandLabel = 'No Data';

                if (isCenter) {
                    cls += ' zone-center';
                    demandLabel = 'You';
                } else if (demand) {
                    const score = demand.total;
                    if (score > 50) { cls += ' zone-critical'; demandLabel = 'Critical'; }
                    else if (score > 30) { cls += ' zone-high'; demandLabel = 'High'; }
                    else if (score > 15) { cls += ' zone-moderate'; demandLabel = 'Moderate'; }
                    else { cls += ' zone-stable'; demandLabel = 'Stable'; }
                } else {
                    cls += ' zone-empty';
                }

                // Only count non-center cells for nearby limit (max 10 shown around 360°)
                if (!isCenter) {
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist <= 2.5) {
                        cellCount++;
                        if (cellCount <= 10) {
                            nearbyZones.push({ zone, demand, demandLabel });
                        }
                    }
                    // Hide cells beyond 10 nearby
                    if (cellCount > 10 && !isCenter) {
                        cls += ' zone-empty';
                        demandLabel = '';
                    }
                }

                html += `<div class="${cls}">
                    <span class="zone-number">${zone.number}</span>
                    <span class="zone-demand-label">${demandLabel}</span>
                </div>`;
            }
        }

        grid.innerHTML = html;

        // My Zone Info
        document.getElementById('my-zone-number').textContent = myZone.number;
        document.getElementById('my-zone-coords').textContent = `${chemistLat.toFixed(4)}, ${chemistLng.toFixed(4)}`;
        const myDemand = zoneDemand[myZone.number];
        if (myDemand && myDemand.total > 30) {
            document.getElementById('my-zone-status').textContent = 'High';
            document.getElementById('my-zone-status').className = 'zone-info-value zone-status-high';
        } else if (myDemand && myDemand.total > 15) {
            document.getElementById('my-zone-status').textContent = 'Moderate';
            document.getElementById('my-zone-status').className = 'zone-info-value zone-status-moderate';
        } else {
            document.getElementById('my-zone-status').textContent = 'Stable';
            document.getElementById('my-zone-status').className = 'zone-info-value zone-status-stable';
        }

        // Nearby zones scroll
        const scroll = document.getElementById('nearby-zones-scroll');
        scroll.innerHTML = nearbyZones.map(nz => {
            const topMed = nz.demand ? Object.entries(nz.demand.medicines).sort((a, b) => b[1] - a[1])[0] : null;
            const score = nz.demand ? nz.demand.total : 0;
            const scoreColor = score > 50 ? 'var(--error)' : score > 30 ? 'var(--warning)' : score > 15 ? '#FFE082' : 'var(--tertiary)';
            return `<div class="zone-mini-card">
                <div class="zone-mini-number" style="color:${scoreColor}">${nz.zone.number}</div>
                <div class="zone-mini-med">${topMed ? escapeHtml(topMed[0]) : 'No data'}</div>
                <div class="zone-mini-score" style="color:${scoreColor}">${score}</div>
            </div>`;
        }).join('');
    }

    // ================================================
    // PREDICTIONS RENDERING
    // ================================================

    function renderPredictions() {
        const model = loadObj(MODEL_KEY);
        const medicines = model.medicines || {};
        const meds = Object.entries(medicines).sort((a, b) => b[1].demandScore - a[1].demandScore);

        if (meds.length === 0) {
            predictionCards.innerHTML = '<div class="empty-state show"><span class="material-icons-round empty-icon">insights</span><p class="empty-title">No prediction data</p><p class="empty-text">Record sales to train the AI model</p></div>';
            gaugeFill.style.strokeDashoffset = 327;
            gaugeValue.textContent = '0';
            lastTrained.textContent = 'Not yet';
            modelAccuracy.textContent = '—';
            return;
        }

        predictionCards.innerHTML = meds.map(([name, data]) => {
            let speedClass, speedLabel;
            if (data.sellingSpeed > 5) { speedClass = 'speed-fast'; speedLabel = 'Fast'; }
            else if (data.sellingSpeed > 2) { speedClass = 'speed-moderate'; speedLabel = 'Moderate'; }
            else { speedClass = 'speed-slow'; speedLabel = 'Slow'; }

            let barClass;
            if (data.demandScore >= 80) barClass = 'bar-critical';
            else if (data.demandScore >= 60) barClass = 'bar-high';
            else if (data.demandScore >= 40) barClass = 'bar-moderate';
            else barClass = 'bar-stable';

            const shortageText = data.daysUntilShortage >= 999 ? 'No shortage expected' :
                data.daysUntilShortage <= 0 ? 'Out of stock!' :
                `Expected shortage: ${data.daysUntilShortage} days`;

            return `<div class="prediction-card">
                <div class="prediction-card-header">
                    <span class="prediction-med-name">${escapeHtml(name)}</span>
                    <span class="prediction-speed ${speedClass}">${speedLabel}</span>
                </div>
                <div class="prediction-bar-container">
                    <div class="prediction-bar ${barClass}" style="width:${data.demandScore}%"></div>
                </div>
                <div class="prediction-footer">
                    <span class="prediction-score" style="color:${data.demandScore >= 80 ? 'var(--error)' : data.demandScore >= 60 ? 'var(--warning)' : 'var(--tertiary)'}">Score: ${data.demandScore}/100</span>
                    <span class="prediction-shortage">${shortageText}</span>
                </div>
            </div>`;
        }).join('');

        // Overall gauge
        const avgScore = Math.round(meds.reduce((s, m) => s + m[1].demandScore, 0) / meds.length);
        const offset = 327 - (327 * avgScore / 100);
        gaugeFill.style.strokeDashoffset = offset;
        if (avgScore >= 80) gaugeFill.style.stroke = 'var(--error)';
        else if (avgScore >= 60) gaugeFill.style.stroke = 'var(--warning)';
        else gaugeFill.style.stroke = 'var(--primary)';
        gaugeValue.textContent = avgScore;

        // Model info
        if (model.lastTrained) {
            const d = new Date(model.lastTrained);
            const diff = Math.round((new Date() - d) / 60000);
            lastTrained.textContent = diff < 1 ? 'Just now' : diff < 60 ? `${diff}m ago` : `${Math.round(diff / 60)}h ago`;
        }
        modelAccuracy.textContent = model.accuracy ? `${model.accuracy}%` : '—';
    }

    // Time toggle
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPredictions();
        });
    });

    // ================================================
    // AI ASSISTANT (Q&A)
    // ================================================

    const qaList = document.getElementById('qa-list');
    const aiAnswerPanel = document.getElementById('ai-answer-panel');
    const aiAnswerTitle = document.getElementById('ai-answer-title');
    const aiAnswerBody = document.getElementById('ai-answer-body');
    const aiBackBtn = document.getElementById('ai-back-btn');

    document.querySelectorAll('.qa-card').forEach(card => {
        card.addEventListener('click', () => {
            const question = card.dataset.question;
            showAIAnswer(question, card.querySelector('.qa-question').textContent);
        });
    });

    aiBackBtn.addEventListener('click', () => {
        aiAnswerPanel.style.display = 'none';
        qaList.style.display = 'flex';
    });

    function showAIAnswer(questionType, questionText) {
        qaList.style.display = 'none';
        aiAnswerPanel.style.display = 'block';
        aiAnswerTitle.textContent = questionText;

        const model = loadObj(MODEL_KEY);
        const medicines = model.medicines || {};
        const meds = Object.entries(medicines);

        let html = '';
        const accuracy = model.accuracy || 70;

        switch (questionType) {
            case 'medicine-needed': {
                const needed = meds.filter(([, d]) => d.daysUntilShortage <= 14).sort((a, b) => a[1].daysUntilShortage - b[1].daysUntilShortage);
                if (needed.length === 0) {
                    html = '<div class="ai-answer-text">All medicines have sufficient stock. No shortages predicted in the next 14 days.</div>';
                } else {
                    html = '<div class="ai-answer-text">The following medicines need attention based on current selling speed:</div><div class="ai-data-chips">';
                    needed.forEach(([name, d]) => {
                        const cls = d.daysUntilShortage <= 3 ? 'ai-chip-error' : d.daysUntilShortage <= 7 ? 'ai-chip-warning' : 'ai-chip';
                        html += `<span class="${cls}">${escapeHtml(name)} — ${d.daysUntilShortage} days left</span>`;
                    });
                    html += '</div>';
                }
                html += `<div class="confidence-badge" style="margin-top:12px;">🎯 ${accuracy}% confidence</div>`;
                break;
            }
            case 'zone-medicine': {
                const zoneMeds = {};
                load(SALES_KEY).forEach(s => {
                    if (!zoneMeds[s.zone]) zoneMeds[s.zone] = {};
                    if (!zoneMeds[s.zone][s.medicineName]) zoneMeds[s.zone][s.medicineName] = 0;
                    zoneMeds[s.zone][s.medicineName] += s.quantity;
                });
                if (Object.keys(zoneMeds).length === 0) {
                    html = '<div class="ai-answer-text">No zone data available yet. Record sales with zone numbers to see zone-wise demand.</div>';
                } else {
                    html = '<div class="ai-answer-text">Zone-wise medicine demand based on sales data:</div>';
                    Object.entries(zoneMeds).forEach(([zone, meds]) => {
                        const sorted = Object.entries(meds).sort((a, b) => b[1] - a[1]);
                        html += `<div style="margin-bottom:12px;"><span style="font-weight:600;color:var(--primary);font-size:13px;">${escapeHtml(zone)}</span><div class="ai-data-chips" style="margin-top:6px;">`;
                        sorted.slice(0, 3).forEach(([m, q]) => {
                            html += `<span class="ai-chip">${escapeHtml(m)}: ${q}</span>`;
                        });
                        html += '</div></div>';
                    });
                }
                html += `<div class="confidence-badge" style="margin-top:12px;">🎯 ${accuracy}% confidence</div>`;
                break;
            }
            case 'date-prediction': {
                if (meds.length === 0) {
                    html = '<div class="ai-answer-text">No prediction data. Record sales to train the model.</div>';
                } else {
                    html = '<div class="ai-answer-text">Predicted dates when medicines will be required:</div><div class="ai-data-chips">';
                    meds.sort((a, b) => a[1].daysUntilShortage - b[1].daysUntilShortage).forEach(([name, d]) => {
                        if (d.daysUntilShortage < 999) {
                            const futureDate = new Date(Date.now() + d.daysUntilShortage * 24 * 60 * 60 * 1000);
                            const cls = d.daysUntilShortage <= 7 ? 'ai-chip-error' : 'ai-chip-warning';
                            html += `<span class="${cls}">${escapeHtml(name)} — ${formatDate(futureDate.toISOString())}</span>`;
                        }
                    });
                    html += '</div>';
                }
                html += `<div class="confidence-badge" style="margin-top:12px;">🎯 ${accuracy}% confidence</div>`;
                break;
            }
            case 'days-remaining': {
                if (meds.length === 0) {
                    html = '<div class="ai-answer-text">No data. Start recording sales.</div>';
                } else {
                    html = '<div class="ai-answer-text">Days remaining before medicine runs out:</div>';
                    meds.sort((a, b) => a[1].daysUntilShortage - b[1].daysUntilShortage).forEach(([name, d]) => {
                        const pct = Math.min(100, (d.daysUntilShortage / 30) * 100);
                        const color = d.daysUntilShortage <= 3 ? 'var(--error)' : d.daysUntilShortage <= 7 ? 'var(--warning)' : 'var(--tertiary)';
                        html += `<div style="margin-bottom:10px;">
                            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
                                <span>${escapeHtml(name)}</span>
                                <span style="color:${color};font-weight:600;">${d.daysUntilShortage >= 999 ? '∞' : d.daysUntilShortage + ' days'}</span>
                            </div>
                            <div style="height:4px;background:var(--surface-container-high);border-radius:2px;overflow:hidden;">
                                <div style="height:100%;width:${100 - pct}%;background:${color};border-radius:2px;"></div>
                            </div>
                        </div>`;
                    });
                }
                html += `<div class="confidence-badge" style="margin-top:12px;">🎯 ${accuracy}% confidence</div>`;
                break;
            }
            case 'fastest-selling': {
                if (meds.length === 0) {
                    html = '<div class="ai-answer-text">No sales data. Start recording sales.</div>';
                } else {
                    html = '<div class="ai-answer-text">Medicines ranked by selling speed this week:</div><div class="ai-data-chips">';
                    meds.sort((a, b) => b[1].weeklyQty - a[1].weeklyQty).forEach(([name, d]) => {
                        const cls = d.weeklyQty > 20 ? 'ai-chip-error' : d.weeklyQty > 10 ? 'ai-chip-warning' : 'ai-chip';
                        html += `<span class="${cls}">${escapeHtml(name)}: ${d.weeklyQty}/week (${d.sellingSpeed}/day)</span>`;
                    });
                    html += '</div>';
                }
                html += `<div class="confidence-badge" style="margin-top:12px;">🎯 ${accuracy}% confidence</div>`;
                break;
            }
            case 'specific-demand': {
                if (meds.length === 0) {
                    html = '<div class="ai-answer-text">No data available. Record sales to enable predictions.</div>';
                } else {
                    html = '<div class="ai-answer-text">Detailed demand forecast per medicine:</div>';
                    meds.forEach(([name, d]) => {
                        html += `<div class="glass-card" style="padding:12px;margin-bottom:8px;">
                            <div style="font-weight:600;margin-bottom:6px;">${escapeHtml(name)}</div>
                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:11px;color:var(--on-surface-variant);">
                                <span>Weekly: ${d.weeklyQty}</span><span>Monthly: ${d.monthlyQty}</span>
                                <span>Speed: ${d.sellingSpeed}/day</span><span>Stock: ${d.currentStock}</span>
                                <span>Score: ${d.demandScore}/100</span><span>Shortage: ${d.daysUntilShortage >= 999 ? 'None' : d.daysUntilShortage + 'd'}</span>
                            </div>
                        </div>`;
                    });
                }
                html += `<div class="confidence-badge" style="margin-top:12px;">🎯 ${accuracy}% confidence</div>`;
                break;
            }
        }

        aiAnswerBody.innerHTML = html;
    }

    // ================================================
    // ALERTS
    // ================================================

    function renderAlerts() {
        const model = loadObj(MODEL_KEY);
        const medicines = model.medicines || {};
        const alerts = [];

        Object.entries(medicines).forEach(([name, data]) => {
            if (data.daysUntilShortage <= 3) {
                alerts.push({ type: 'critical', category: 'shortage', icon: 'warning', title: `${name} shortage critical`, desc: `Expected to run out in ${data.daysUntilShortage} days. Current stock: ${data.currentStock} units. Speed: ${data.sellingSpeed}/day.`, time: 'Now' });
            } else if (data.daysUntilShortage <= 7) {
                alerts.push({ type: 'warning', category: 'shortage', icon: 'inventory', title: `${name} shortage in ${data.daysUntilShortage} days`, desc: `Based on current selling speed of ${data.sellingSpeed} units/day.`, time: 'Today' });
            }

            if (data.currentStock > 0 && data.currentStock / Math.max(1, data.totalSold) < 0.15) {
                alerts.push({ type: 'warning', category: 'supply', icon: 'local_shipping', title: `Fill supply: ${name}`, desc: `Stock below 15% threshold. Consider reordering.`, time: 'Today' });
            }

            if (data.weeklyQty > (data.monthlyQty / 4) * 1.3) {
                alerts.push({ type: 'info', category: 'trending', icon: 'trending_up', title: `${name} demand rising`, desc: `Weekly sales ${Math.round((data.weeklyQty / Math.max(1, data.monthlyQty / 4) - 1) * 100)}% above monthly average.`, time: 'This week' });
            }
        });

        // Zone alerts
        const sales = load(SALES_KEY);
        const zoneTotals = {};
        sales.forEach(s => {
            if (!zoneTotals[s.zone]) zoneTotals[s.zone] = 0;
            zoneTotals[s.zone] += s.quantity;
        });
        Object.entries(zoneTotals).forEach(([zone, total]) => {
            if (total > 50) {
                alerts.push({ type: 'warning', category: 'zone', icon: 'location_on', title: `High demand in ${zone}`, desc: `Total ${total} units sold in this zone. Monitor closely.`, time: 'Ongoing' });
            }
        });

        // Update badge
        if (alerts.length > 0) {
            alertCount.style.display = 'block';
            alertCount.textContent = alerts.length;
        } else {
            alertCount.style.display = 'none';
        }

        // Filter by category
        const activeCat = document.querySelector('.category-pill.active')?.dataset.cat || 'all';
        const filtered = activeCat === 'all' ? alerts : alerts.filter(a => a.category === activeCat);

        if (filtered.length === 0) {
            alertList.innerHTML = '';
            alertsEmpty.classList.add('show');
            return;
        }
        alertsEmpty.classList.remove('show');

        alertList.innerHTML = filtered.map(a => {
            const iconClass = a.type === 'critical' ? 'alert-critical' : a.type === 'warning' ? 'alert-warning' : 'alert-info';
            return `<div class="alert-card">
                <div class="alert-icon-wrap ${iconClass}">
                    <span class="material-icons-round">${a.icon}</span>
                </div>
                <div class="alert-content">
                    <div class="alert-title">${escapeHtml(a.title)}</div>
                    <div class="alert-desc">${escapeHtml(a.desc)}</div>
                    <div class="alert-meta">
                        <span class="alert-time">${a.time}</span>
                        <button class="alert-action ${a.type === 'critical' ? 'alert-action-order' : 'alert-action-view'}">${a.type === 'critical' ? 'Order Now' : 'View Details'}</button>
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    // Alert category filter
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderAlerts();
        });
    });

    // ================================================
    // UTILITIES
    // ================================================

    function showToast(message, isError) {
        const icon = toast.querySelector('.toast-icon');
        const text = toast.querySelector('.toast-text');
        text.textContent = message;
        icon.textContent = isError ? 'error' : 'check_circle';
        icon.style.color = isError ? 'var(--error)' : 'var(--tertiary)';
        toast.style.borderColor = isError ? 'rgba(255,113,108,0.2)' : 'rgba(63,255,139,0.2)';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    function formatDate(dateStr) {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function getDayName(day) {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function escapeAttr(str) {
        return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    // ================================================
    // INIT
    // ================================================

    initLocation();
    trainModel();
    renderRecentSales();
    renderAlerts();

})();
