/* ============================================
   AYUVANT — Part 3: Smart Distribution & Patient Intelligence
   Main Application Orchestrator
   ============================================ */

(function () {
    'use strict';

    // ---- Utility Functions ----
    function debounce(fn, delay) {
        var timer;
        return function () {
            var args = arguments;
            var ctx = this;
            clearTimeout(timer);
            timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
        };
    }

    function formatDate(iso) {
        if (!iso) return '—';
        return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function timeAgo(iso) {
        if (!iso) return '';
        var diff = (Date.now() - new Date(iso).getTime()) / 1000;
        if (diff < 60) return 'Just now';
        if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
        if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
        return Math.floor(diff / 86400) + 'd ago';
    }

    function escapeHtml(str) {
        if (!str) return '';
        var d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    // ---- Toast ----
    function showToast(message, type) {
        var toast = document.getElementById('toast');
        if (!toast) return;
        var icon = toast.querySelector('.toast-icon');
        var text = toast.querySelector('.toast-text');

        text.textContent = message;

        if (type === 'error') {
            icon.textContent = 'error';
            icon.style.color = 'var(--error)';
            toast.style.borderColor = 'rgba(255,113,108,0.3)';
        } else if (type === 'info') {
            icon.textContent = 'info';
            icon.style.color = 'var(--primary)';
            toast.style.borderColor = 'rgba(129,236,255,0.3)';
        } else {
            icon.textContent = 'check_circle';
            icon.style.color = 'var(--tertiary)';
            toast.style.borderColor = 'rgba(63,255,139,0.2)';
        }

        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 3000);
    }

    // ---- Modal ----
    function showModal(title, bodyHtml) {
        var overlay = document.getElementById('modal-overlay');
        var titleEl = document.getElementById('modal-title');
        var bodyEl = document.getElementById('modal-body');
        if (!overlay) return;

        titleEl.textContent = title;
        bodyEl.innerHTML = bodyHtml;
        overlay.classList.add('show');
    }

    function hideModal() {
        var overlay = document.getElementById('modal-overlay');
        if (overlay) overlay.classList.remove('show');
    }

    // ---- Tab Navigation ----
    var currentTab = 'transfer';

    function setupTabs() {
        var tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var tabId = btn.dataset.tab;
                switchTab(tabId);
            });
        });
    }

    function switchTab(tabId) {
        currentTab = tabId;

        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
        var activeBtn = document.querySelector('.tab-btn[data-tab="' + tabId + '"]');
        if (activeBtn) activeBtn.classList.add('active');

        // Update views
        document.querySelectorAll('.view').forEach(function (v) { v.classList.remove('active'); });
        var activeView = document.getElementById('view-' + tabId);
        if (activeView) activeView.classList.add('active');

        // Render tab content
        renderTab(tabId);
    }

    function renderTab(tabId) {
        switch (tabId) {
            case 'transfer':
                renderTransferTab();
                break;
            case 'alternatives':
                // No initial render — search-driven
                break;
            case 'feedback':
                renderFeedbackTab();
                break;
            case 'patients':
                renderPatientsTab();
                break;
            case 'patterns':
                renderPatternsTab();
                break;
            case 'insights':
                renderInsightsTab();
                break;
        }
    }

    // ---- State ----
    var selectedOriginalMedicine = null;
    var currentPatientId = null;

    // ================================================
    // TAB 1: STOCK TRANSFER
    // ================================================
    function renderTransferTab() {
        PharmacyNetwork.renderActiveTransfers('active-transfers-list');
        PharmacyNetwork.renderTransferHistory('transfer-history-list');
        toggleEmpty('transfers-active-empty', PharmacyNetwork.getActiveTransfers().length === 0);
        toggleEmpty('transfers-history-empty', PharmacyNetwork.getTransferHistory().length === 0);
    }

    function setupTransferEvents() {
        var searchInput = document.getElementById('transfer-search');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function () {
                var query = searchInput.value.trim();
                var resultsDiv = document.getElementById('transfer-results');

                if (query.length < 2) {
                    if (resultsDiv) resultsDiv.style.display = 'none';
                    return;
                }

                var results = PharmacyNetwork.recommendTransfer(query);
                if (resultsDiv) resultsDiv.style.display = 'block';

                var countEl = document.getElementById('transfer-results-count');
                if (countEl) countEl.textContent = results.length + ' pharmacies found';

                PharmacyNetwork.renderPharmacyCards('nearby-pharmacies-grid', results);
            }, 300));
        }

        // Delegated events for transfer actions
        document.getElementById('app').addEventListener('click', function (e) {
            // Request transfer
            var reqBtn = e.target.closest('.btn-transfer-request');
            if (reqBtn) {
                var pharmacyId = reqBtn.dataset.pharmacyId;
                var medicine = reqBtn.dataset.medicine;

                showModal('Request Transfer', 
                    '<div class="form-group">' +
                        '<label class="form-label"><span class="material-icons-round field-icon">inventory</span>Quantity</label>' +
                        '<div class="stepper-wrapper">' +
                            '<button type="button" class="stepper-btn" id="transfer-qty-minus"><span class="material-icons-round">remove</span></button>' +
                            '<input type="number" id="transfer-qty" class="form-input stepper-input" value="50" min="1" max="500">' +
                            '<button type="button" class="stepper-btn" id="transfer-qty-plus"><span class="material-icons-round">add</span></button>' +
                        '</div>' +
                    '</div>' +
                    '<button class="submit-btn" id="confirm-transfer" data-pharmacy-id="' + pharmacyId + '" data-medicine="' + escapeHtml(medicine) + '">' +
                        '<span class="material-icons-round">swap_horiz</span> Confirm Request' +
                    '</button>'
                );

                // Stepper in modal
                setTimeout(function () {
                    var qtyInput = document.getElementById('transfer-qty');
                    var minus = document.getElementById('transfer-qty-minus');
                    var plus = document.getElementById('transfer-qty-plus');
                    if (minus) minus.addEventListener('click', function () { qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 10); });
                    if (plus) plus.addEventListener('click', function () { qtyInput.value = Math.min(500, parseInt(qtyInput.value) + 10); });
                }, 100);
                return;
            }

            // Confirm transfer request
            var confirmBtn = e.target.closest('#confirm-transfer');
            if (confirmBtn) {
                var pId = confirmBtn.dataset.pharmacyId;
                var med = confirmBtn.dataset.medicine;
                var qty = parseInt(document.getElementById('transfer-qty').value) || 50;

                var transfer = PharmacyNetwork.requestTransfer(pId, med, qty);
                if (transfer) {
                    hideModal();
                    showToast('Transfer requested from nearby pharmacy', 'success');
                    renderTransferTab();
                } else {
                    showToast('Failed to create transfer request', 'error');
                }
                return;
            }

            // Approve / Reject / Transit / Complete transfer
            var actionBtn = e.target.closest('[data-transfer-id][data-action]');
            if (actionBtn && (actionBtn.classList.contains('btn-approve-transfer') ||
                             actionBtn.classList.contains('btn-reject-transfer') ||
                             actionBtn.classList.contains('btn-transit-transfer') ||
                             actionBtn.classList.contains('btn-complete-transfer'))) {
                var transferId = actionBtn.dataset.transferId;
                var action = actionBtn.dataset.action;
                PharmacyNetwork.updateTransferStatus(transferId, action);
                showToast('Transfer ' + action.replace('_', ' '), action === 'rejected' ? 'error' : 'success');
                renderTransferTab();
                return;
            }
        });
    }

    // ================================================
    // TAB 2: ALTERNATIVES
    // ================================================
    function setupAlternativesEvents() {
        var searchInput = document.getElementById('alt-search');
        var searchResults = document.getElementById('alt-search-results');

        if (searchInput) {
            searchInput.addEventListener('input', debounce(function () {
                var query = searchInput.value.trim().toLowerCase();
                
                if (query.length < 2) {
                    if (searchResults) searchResults.innerHTML = '';
                    return;
                }

                var medicines = Alternatives.getMedicines();
                var matches = medicines.filter(function (m) {
                    return m.name.toLowerCase().includes(query) ||
                           m.genericName.toLowerCase().includes(query) ||
                           m.tags.some(function (t) { return t.includes(query); });
                });

                if (searchResults) {
                    searchResults.innerHTML = matches.slice(0, 8).map(function (m) {
                        return '<div class="search-result-item" data-med-id="' + m.id + '">' +
                            '<span class="search-result-name">' + escapeHtml(m.name) + '</span>' +
                            '<span class="search-result-qty">' + escapeHtml(m.genericName) + '</span>' +
                        '</div>';
                    }).join('');
                }
            }, 300));
        }

        // Delegated click for alternative actions
        document.getElementById('view-alternatives').addEventListener('click', function (e) {
            // Select medicine from search
            var resultItem = e.target.closest('.search-result-item');
            if (resultItem) {
                var medId = resultItem.dataset.medId;
                selectMedicineForAlternatives(medId);
                return;
            }

            // Sell alternative
            var sellBtn = e.target.closest('.btn-sell-alternative');
            if (sellBtn) {
                var altMedId = sellBtn.dataset.medicineId;
                openSellAlternativeModal(altMedId);
                return;
            }
        });
    }

    function selectMedicineForAlternatives(medId) {
        var medicines = Alternatives.getMedicines();
        var med = medicines.find(function (m) { return m.id === medId; });
        if (!med) return;

        selectedOriginalMedicine = med;

        // Clear search
        var searchInput = document.getElementById('alt-search');
        var searchResults = document.getElementById('alt-search-results');
        if (searchInput) searchInput.value = med.name;
        if (searchResults) searchResults.innerHTML = '';

        // Show medicine info
        var infoCard = document.getElementById('alt-medicine-info');
        if (infoCard) infoCard.style.display = 'block';
        Alternatives.renderMedicineInfo('alt-medicine-info', med);

        // Find and show alternatives
        var altResults = Alternatives.findAlternatives(med.name);
        var resultsDiv = document.getElementById('alt-results');
        if (resultsDiv) resultsDiv.style.display = 'block';

        var subtitleEl = document.getElementById('alt-results-subtitle');
        if (subtitleEl) subtitleEl.textContent = altResults.length + ' alternatives found based on salt composition';

        Alternatives.renderAlternatives('alt-recommendations-list', altResults);

        // Hide empty state
        toggleEmpty('alt-empty', false);
    }

    function openSellAlternativeModal(altMedId) {
        var medicines = Alternatives.getMedicines();
        var altMed = medicines.find(function (m) { return m.id === altMedId; });
        if (!altMed || !selectedOriginalMedicine) return;

        // Get available batches for this medicine
        var batches = [];
        try { batches = JSON.parse(localStorage.getItem('ayuvant_batches') || '[]'); } catch (e) {}
        var matchingBatches = batches.filter(function (b) {
            return b.medicineName === altMed.name && b.quantity > 0;
        });

        var batchOptions = matchingBatches.length > 0 ?
            matchingBatches.map(function (b) {
                return '<button class="batch-chip" data-batch="' + escapeHtml(b.batchNumber) + '">' +
                    b.batchNumber + ' (' + b.quantity + ' units)</button>';
            }).join('') :
            '<span class="field-hint">No batches available — sale will be recorded without batch</span>';

        showModal('Sell ' + altMed.name,
            '<div class="form-group">' +
                '<label class="form-label"><span class="material-icons-round field-icon">phone</span>Patient Mobile (Optional)</label>' +
                '<input type="tel" id="sell-patient-mobile" class="form-input" placeholder="10-digit mobile" maxlength="10">' +
            '</div>' +
            '<div class="form-group">' +
                '<label class="form-label"><span class="material-icons-round field-icon">qr_code_2</span>Select Batch</label>' +
                '<div class="batch-chips">' + batchOptions + '</div>' +
            '</div>' +
            '<div class="form-group">' +
                '<label class="form-label"><span class="material-icons-round field-icon">inventory</span>Quantity</label>' +
                '<div class="stepper-wrapper">' +
                    '<button type="button" class="stepper-btn" id="sell-qty-minus"><span class="material-icons-round">remove</span></button>' +
                    '<input type="number" id="sell-qty" class="form-input stepper-input" value="1" min="1">' +
                    '<button type="button" class="stepper-btn" id="sell-qty-plus"><span class="material-icons-round">add</span></button>' +
                '</div>' +
            '</div>' +
            '<button class="submit-btn" id="confirm-sell-alt" data-alt-id="' + altMedId + '">' +
                '<span class="material-icons-round">shopping_cart</span> Confirm Sale & Get Feedback' +
            '</button>'
        );

        // Wire modal interactions
        setTimeout(function () {
            var qtyInput = document.getElementById('sell-qty');
            var minus = document.getElementById('sell-qty-minus');
            var plus = document.getElementById('sell-qty-plus');
            if (minus) minus.addEventListener('click', function () { qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1); });
            if (plus) plus.addEventListener('click', function () { qtyInput.value = parseInt(qtyInput.value) + 1; });

            // Batch chip selection
            document.querySelectorAll('#modal-body .batch-chip').forEach(function (chip) {
                chip.addEventListener('click', function () {
                    document.querySelectorAll('#modal-body .batch-chip').forEach(function (c) { c.classList.remove('selected'); });
                    chip.classList.add('selected');
                });
            });
        }, 100);
    }

    // ================================================
    // TAB 3: FEEDBACK
    // ================================================
    function renderFeedbackTab() {
        var pending = Feedback.getPendingFeedback();

        // Update badge
        updateFeedbackBadge();

        // Show/hide pending alert
        var pendingDiv = document.getElementById('feedback-pending');
        var pendingCount = document.getElementById('feedback-pending-count');
        var noPending = document.getElementById('feedback-no-pending');
        var activeForm = document.getElementById('feedback-active-form');

        if (pending.length > 0) {
            if (pendingDiv) pendingDiv.style.display = 'block';
            if (pendingCount) pendingCount.textContent = pending.length + ' feedback form(s) waiting';
            if (noPending) noPending.classList.remove('show');

            // Render the first pending feedback form
            if (activeForm) {
                activeForm.style.display = 'block';
                Feedback.renderFeedbackForm('feedback-active-form', pending[0].id);
            }
        } else {
            if (pendingDiv) pendingDiv.style.display = 'none';
            if (noPending) noPending.classList.add('show');
            if (activeForm) { activeForm.style.display = 'none'; activeForm.innerHTML = ''; }
        }

        // Render insights and history
        Feedback.renderInsights('feedback-insights');
        Feedback.renderFeedbackHistory('feedback-history');
        toggleEmpty('feedback-history-empty', Feedback.getCompletedFeedback().length === 0);
    }

    function setupFeedbackEvents() {
        document.getElementById('view-feedback').addEventListener('click', function (e) {
            var submitBtn = e.target.closest('.btn-submit-feedback');
            if (submitBtn) {
                var feedbackId = submitBtn.dataset.feedbackId;
                var container = document.getElementById('feedback-active-form');
                var responses = Feedback.collectResponses(container, feedbackId);

                if (responses) {
                    Feedback.submitFeedback(feedbackId, responses);
                    showToast('Feedback submitted — AI learning updated!', 'success');
                    renderFeedbackTab();
                } else {
                    showToast('Please complete the feedback form', 'error');
                }
            }
        });
    }

    function updateFeedbackBadge() {
        var badge = document.getElementById('feedback-badge');
        var pending = Feedback.getPendingFeedback();
        if (badge) {
            if (pending.length > 0) {
                badge.style.display = 'inline-block';
                badge.textContent = pending.length;
            } else {
                badge.style.display = 'none';
            }
        }
    }

    // ================================================
    // TAB 4: PATIENTS
    // ================================================
    function renderPatientsTab() {
        PatientTracker.renderPatientList('patient-list');
        toggleEmpty('patient-empty', PatientTracker.getAllPatients().length === 0);
    }

    function setupPatientEvents() {
        var searchInput = document.getElementById('patient-search');
        var registerCard = document.getElementById('patient-register-card');
        var profileDiv = document.getElementById('patient-profile');
        var patientList = document.getElementById('patient-list');

        if (searchInput) {
            searchInput.addEventListener('input', debounce(function () {
                var query = searchInput.value.trim();

                if (query.length === 0) {
                    if (registerCard) registerCard.style.display = 'none';
                    if (profileDiv) { profileDiv.style.display = 'none'; profileDiv.innerHTML = ''; }
                    renderPatientsTab();
                    return;
                }

                var results = PatientTracker.findPatient(query);

                if (results.length === 0) {
                    // Show register card with prefilled mobile
                    if (registerCard) {
                        registerCard.style.display = 'block';
                        var mobileInput = document.getElementById('patient-mobile');
                        if (mobileInput && /^\d+$/.test(query)) {
                            mobileInput.value = query;
                        }
                    }
                    if (patientList) patientList.innerHTML = '';
                    toggleEmpty('patient-empty', false);
                } else {
                    if (registerCard) registerCard.style.display = 'none';
                    // Show search results in the patient list area
                    PatientTracker.renderPatientSearch('patient-list', query);
                    toggleEmpty('patient-empty', false);
                }
            }, 300));
        }

        // Register patient
        var registerBtn = document.getElementById('patient-register-btn');
        if (registerBtn) {
            registerBtn.addEventListener('click', function () {
                var mobile = document.getElementById('patient-mobile').value.trim();
                var name = document.getElementById('patient-name').value.trim();
                var age = document.getElementById('patient-age').value;
                var genderChip = document.querySelector('#patient-register-card .chip.selected');
                var gender = genderChip ? genderChip.dataset.value : 'Not specified';
                var consent = document.getElementById('patient-consent').checked;

                if (!mobile || mobile.length !== 10) {
                    showToast('Please enter a valid 10-digit mobile number', 'error');
                    return;
                }
                if (!name) {
                    showToast('Please enter the patient name', 'error');
                    return;
                }

                var result = PatientTracker.registerPatient(mobile, name, age, gender, consent);

                if (result.error) {
                    if (result.patient) {
                        showToast('Patient already registered — showing profile', 'info');
                        showPatientProfile(result.patient.id);
                    } else {
                        showToast(result.error, 'error');
                    }
                    return;
                }

                showToast('Patient registered: ' + result.patient.id, 'success');

                // Clear form
                document.getElementById('patient-mobile').value = '';
                document.getElementById('patient-name').value = '';
                document.getElementById('patient-age').value = '';
                document.querySelectorAll('#patient-register-card .chip').forEach(function (c) { c.classList.remove('selected'); });

                if (registerCard) registerCard.style.display = 'none';
                showPatientProfile(result.patient.id);
                renderPatientsTab();
            });
        }

        // Gender chip selection
        document.querySelectorAll('#patient-register-card .chip-group .chip').forEach(function (chip) {
            chip.addEventListener('click', function () {
                document.querySelectorAll('#patient-register-card .chip-group .chip').forEach(function (c) { c.classList.remove('selected'); });
                chip.classList.add('selected');
            });
        });

        // Delegated: patient list / search item click
        document.getElementById('view-patients').addEventListener('click', function (e) {
            var listItem = e.target.closest('.patient-list-item, .patient-search-item');
            if (listItem) {
                var patId = listItem.dataset.patientId;
                showPatientProfile(patId);
                return;
            }

            // Register from search prompt
            var regBtn = e.target.closest('.btn-register-patient');
            if (regBtn) {
                if (registerCard) registerCard.style.display = 'block';
                var prefill = regBtn.dataset.prefill || '';
                var mobileInput = document.getElementById('patient-mobile');
                if (mobileInput && /^\d+$/.test(prefill)) {
                    mobileInput.value = prefill;
                }
                return;
            }
        });
    }

    function showPatientProfile(patientId) {
        currentPatientId = patientId;
        var profileDiv = document.getElementById('patient-profile');
        if (profileDiv) {
            profileDiv.style.display = 'block';
            PatientTracker.renderPatientProfile('patient-profile', patientId);
        }
        toggleEmpty('patient-empty', false);
    }

    // ================================================
    // TAB 5: PATTERNS
    // ================================================
    function renderPatternsTab() {
        var patterns = PatientTracker.analyzePatterns();

        var hasBatch = patterns.batchPatterns && patterns.batchPatterns.length > 0;
        var hasMedicine = patterns.medicinePatterns && patterns.medicinePatterns.length > 0;
        var hasTrajectories = patterns.patientTrajectories && patterns.patientTrajectories.length > 0;
        var hasData = hasBatch || hasMedicine || hasTrajectories;

        toggleEmpty('patterns-empty', !hasData);

        // Render batch patterns
        var batchContainer = document.getElementById('batch-patterns');
        if (batchContainer && hasBatch) {
            var flagged = patterns.batchPatterns.filter(function (b) { return b.flag === 'HIGH_REPEAT'; });
            var normal = patterns.batchPatterns.filter(function (b) { return b.flag !== 'HIGH_REPEAT'; });

            var html = '<div class="section-header" style="margin-top:12px;"><h2 class="section-title">Batch Analysis</h2></div>';

            if (flagged.length > 0) {
                html += flagged.map(function (b) {
                    return '<div class="glass-card pattern-card pattern-concern">' +
                        '<div class="pattern-card-header">' +
                            '<span class="material-icons-round" style="color:var(--error);font-size:20px;">warning</span>' +
                            '<div class="pattern-info">' +
                                '<span class="pattern-title">' + escapeHtml(b.batchNumber) + ' — ' + escapeHtml(b.medicineName) + '</span>' +
                                '<span class="pattern-subtitle">' + b.repeatRate + '% repeat rate (' + b.repeatBuyers + '/' + b.totalBuyers + ' buyers)</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="repeat-rate-bar"><div class="repeat-rate-fill" style="width:' + Math.min(100, b.repeatRate) + '%;background:var(--error);"></div></div>' +
                        '<span class="pattern-flag">Possible efficacy concern</span>' +
                    '</div>';
                }).join('');
            }

            if (normal.length > 0) {
                html += normal.slice(0, 5).map(function (b) {
                    return '<div class="glass-card pattern-card pattern-normal">' +
                        '<div class="pattern-card-header">' +
                            '<span class="material-icons-round" style="color:var(--tertiary);font-size:18px;">check_circle</span>' +
                            '<div class="pattern-info">' +
                                '<span class="pattern-title">' + escapeHtml(b.batchNumber) + '</span>' +
                                '<span class="pattern-subtitle">' + b.medicineName + ' · ' + b.totalSales + ' sales · ' + b.repeatRate + '% repeat</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
                }).join('');
            }

            batchContainer.innerHTML = html;
        }

        // Render medicine patterns
        var medContainer = document.getElementById('medicine-patterns');
        if (medContainer && hasMedicine) {
            var medHtml = '<div class="section-header" style="margin-top:20px;"><h2 class="section-title">Medicine Insights</h2></div>';

            medHtml += patterns.medicinePatterns.slice(0, 8).map(function (m) {
                var spikes = m.seasonalSpikes.length > 0 ? m.seasonalSpikes.join(', ') : 'None';
                var followUps = m.commonFollowUps.length > 0 ? m.commonFollowUps.join(', ') : 'None';

                return '<div class="glass-card pattern-card">' +
                    '<div class="pattern-card-header">' +
                        '<span class="material-icons-round" style="color:var(--primary);font-size:18px;">medication</span>' +
                        '<div class="pattern-info">' +
                            '<span class="pattern-title">' + escapeHtml(m.medicineName) + '</span>' +
                            '<span class="pattern-subtitle">' + m.totalSales + ' sales · ' + m.totalQuantity + ' units</span>' +
                        '</div>' +
                    '</div>' +
                    '<div class="pattern-details">' +
                        '<span class="pattern-detail">Avg repeat: ' + (m.avgRepeatDays !== null ? m.avgRepeatDays + ' days' : 'N/A') + '</span>' +
                        '<span class="pattern-detail">Seasonal: ' + spikes + '</span>' +
                        '<span class="pattern-detail">Follow-ups: ' + escapeHtml(followUps) + '</span>' +
                    '</div>' +
                '</div>';
            }).join('');

            medContainer.innerHTML = medHtml;
        }

        // Render patient trajectories
        var trajContainer = document.getElementById('patient-trajectories');
        if (trajContainer && hasTrajectories) {
            var trajHtml = '<div class="section-header" style="margin-top:20px;"><h2 class="section-title">Patient Trajectories</h2></div>';

            var trajectoryColors = {
                improving: 'var(--tertiary)',
                stable: 'var(--primary)',
                concerning: 'var(--warning)',
                escalating: 'var(--error)'
            };

            trajHtml += patterns.patientTrajectories.map(function (t) {
                var color = trajectoryColors[t.trajectory] || 'var(--on-surface-variant)';
                return '<div class="glass-card pattern-card" style="border-left:3px solid ' + color + ';">' +
                    '<div class="pattern-card-header">' +
                        '<div class="pattern-info">' +
                            '<span class="pattern-title">' + escapeHtml(t.patientName) + '</span>' +
                            '<span class="pattern-subtitle">' + t.purchaseCount + ' purchases · Last: ' + timeAgo(t.lastVisit) + '</span>' +
                        '</div>' +
                        '<span class="trajectory-badge" style="color:' + color + ';border-color:' + color + ';">' + t.trajectory + '</span>' +
                    '</div>' +
                '</div>';
            }).join('');

            trajContainer.innerHTML = trajHtml;
        }
    }

    function setupPatternsEvents() {
        // Category filter pills
        var cats = document.getElementById('pattern-categories');
        if (cats) {
            cats.addEventListener('click', function (e) {
                var pill = e.target.closest('.category-pill');
                if (!pill) return;

                cats.querySelectorAll('.category-pill').forEach(function (p) { p.classList.remove('active'); });
                pill.classList.add('active');

                var cat = pill.dataset.cat;
                var batchDiv = document.getElementById('batch-patterns');
                var medDiv = document.getElementById('medicine-patterns');
                var trajDiv = document.getElementById('patient-trajectories');
                var anomalyDiv = document.getElementById('anomaly-alerts');

                [batchDiv, medDiv, trajDiv, anomalyDiv].forEach(function (d) { if (d) d.style.display = 'block'; });

                if (cat !== 'all') {
                    if (cat !== 'batch' && batchDiv) batchDiv.style.display = 'none';
                    if (cat !== 'medicine' && cat !== 'escalation' && medDiv) medDiv.style.display = 'none';
                    if (cat !== 'trajectory' && trajDiv) trajDiv.style.display = 'none';
                }
            });
        }
    }

    // ================================================
    // TAB 6: INSIGHTS
    // ================================================
    function renderInsightsTab() {
        var patients = PatientTracker.getAllPatients();
        var transfers = PharmacyNetwork.getTransferHistory();
        var completedFeedback = Feedback.getCompletedFeedback();
        var hasData = patients.length > 0 || transfers.length > 0 || completedFeedback.length > 0;

        toggleEmpty('insights-empty', !hasData);

        // Update stat cards
        var patientsEl = document.getElementById('insight-total-patients');
        var transfersEl = document.getElementById('insight-total-transfers');
        var subsEl = document.getElementById('insight-total-substitutions');
        var feedbackTotalEl = document.getElementById('feedback-count-total');

        if (patientsEl) patientsEl.textContent = patients.length;
        if (transfersEl) transfersEl.textContent = transfers.length;
        if (subsEl) subsEl.textContent = completedFeedback.length;
        if (feedbackTotalEl) feedbackTotalEl.textContent = completedFeedback.length;

        // Substitution success gauge
        var totalRating = 0;
        var ratingCount = 0;
        completedFeedback.forEach(function (f) {
            if (f.responses && typeof f.responses.q2 === 'number' && f.responses.q2 > 0) {
                totalRating += f.responses.q2;
                ratingCount++;
            }
        });
        var avgRating = ratingCount > 0 ? totalRating / ratingCount : 0;
        var successPct = Math.round((avgRating / 5) * 100);

        var gaugeFill = document.getElementById('sub-gauge-fill');
        var gaugeValue = document.getElementById('sub-gauge-value');
        if (gaugeFill) {
            var circumference = 2 * Math.PI * 52;
            var offset = circumference - (successPct / 100) * circumference;
            gaugeFill.style.strokeDasharray = circumference;
            gaugeFill.style.strokeDashoffset = offset;

            if (successPct >= 80) gaugeFill.style.stroke = 'var(--tertiary)';
            else if (successPct >= 50) gaugeFill.style.stroke = 'var(--primary)';
            else gaugeFill.style.stroke = 'var(--warning)';
        }
        if (gaugeValue) gaugeValue.textContent = successPct + '%';

        // Top substitution pairs
        var pairCounts = {};
        completedFeedback.forEach(function (f) {
            var key = f.originalMedicine.name + ' → ' + f.substituteMedicine.name;
            pairCounts[key] = (pairCounts[key] || 0) + 1;
        });
        var topPairs = Object.entries(pairCounts).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 5);

        var topAltContainer = document.getElementById('top-alternatives');
        if (topAltContainer && topPairs.length > 0) {
            topAltContainer.innerHTML = topPairs.map(function (pair, idx) {
                return '<div class="glass-card top-alt-item">' +
                    '<span class="top-alt-rank">' + (idx + 1) + '</span>' +
                    '<span class="top-alt-pair">' + escapeHtml(pair[0]) + '</span>' +
                    '<span class="top-alt-count">' + pair[1] + 'x</span>' +
                '</div>';
            }).join('');
        }

        // Network overview
        var networkContainer = document.getElementById('network-overview');
        if (networkContainer) {
            var activeTransfers = PharmacyNetwork.getActiveTransfers();
            networkContainer.innerHTML = '<div class="glass-card" style="padding:16px;">' +
                '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">' +
                    '<span class="pattern-detail">Connected Pharmacies</span>' +
                    '<span style="color:var(--primary);font-weight:600;">6</span>' +
                '</div>' +
                '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">' +
                    '<span class="pattern-detail">Active Transfers</span>' +
                    '<span style="color:var(--warning);font-weight:600;">' + activeTransfers.length + '</span>' +
                '</div>' +
                '<div style="display:flex;justify-content:space-between;">' +
                    '<span class="pattern-detail">Completed Transfers</span>' +
                    '<span style="color:var(--tertiary);font-weight:600;">' + transfers.length + '</span>' +
                '</div>' +
            '</div>';
        }

        // Patient health summary
        var summaryContainer = document.getElementById('patient-summary');
        if (summaryContainer && patients.length > 0) {
            var trajCounts = { improving: 0, stable: 0, concerning: 0, escalating: 0 };
            patients.forEach(function (p) {
                if (trajCounts[p.trajectory] !== undefined) trajCounts[p.trajectory]++;
            });

            summaryContainer.innerHTML = '<div class="glass-card" style="padding:16px;">' +
                '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">' +
                    '<span class="pattern-detail">Improving</span>' +
                    '<span style="color:var(--tertiary);font-weight:600;">' + trajCounts.improving + '</span>' +
                '</div>' +
                '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">' +
                    '<span class="pattern-detail">Stable</span>' +
                    '<span style="color:var(--primary);font-weight:600;">' + trajCounts.stable + '</span>' +
                '</div>' +
                '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">' +
                    '<span class="pattern-detail">Concerning</span>' +
                    '<span style="color:var(--warning);font-weight:600;">' + trajCounts.concerning + '</span>' +
                '</div>' +
                '<div style="display:flex;justify-content:space-between;">' +
                    '<span class="pattern-detail">Escalating</span>' +
                    '<span style="color:var(--error);font-weight:600;">' + trajCounts.escalating + '</span>' +
                '</div>' +
            '</div>';
        }
    }

    // ================================================
    // GLOBAL EVENT HANDLERS
    // ================================================
    function setupGlobalEvents() {
        // Modal close
        var modalClose = document.getElementById('modal-close');
        if (modalClose) modalClose.addEventListener('click', hideModal);

        var modalOverlay = document.getElementById('modal-overlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function (e) {
                if (e.target === modalOverlay) hideModal();
            });
        }

        // Confirm sell alternative (from modal)
        document.getElementById('app').addEventListener('click', function (e) {
            var confirmSell = e.target.closest('#confirm-sell-alt');
            if (confirmSell) {
                var altId = confirmSell.dataset.altId;
                var medicines = Alternatives.getMedicines();
                var altMed = medicines.find(function (m) { return m.id === altId; });
                if (!altMed || !selectedOriginalMedicine) return;

                var mobile = document.getElementById('sell-patient-mobile').value.trim();
                var qty = parseInt(document.getElementById('sell-qty').value) || 1;
                var selectedBatch = document.querySelector('#modal-body .batch-chip.selected');
                var batchNumber = selectedBatch ? selectedBatch.dataset.batch : 'N/A';

                // Find or create patient
                var patientId = null;
                if (mobile && mobile.length === 10) {
                    var existing = PatientTracker.findPatient(mobile);
                    if (existing.length > 0) {
                        patientId = existing[0].id;
                    } else {
                        var result = PatientTracker.registerPatient(mobile, 'Patient ' + mobile.slice(-4), '', '', true);
                        if (result.patient) patientId = result.patient.id;
                    }
                }

                // Execute sale
                var feedbackId = Alternatives.sellAlternative(
                    selectedOriginalMedicine, altMed, patientId, qty, batchNumber
                );

                hideModal();
                showToast('Sale recorded! Please provide feedback.', 'success');

                // Refresh feedback badge
                Feedback.init(); // Reload from storage
                updateFeedbackBadge();

                // Switch to feedback tab
                setTimeout(function () {
                    switchTab('feedback');
                }, 800);
            }
        });
    }

    // ---- Helper ----
    function toggleEmpty(id, show) {
        var el = document.getElementById(id);
        if (!el) return;
        if (show) { el.classList.add('show'); } else { el.classList.remove('show'); }
    }

    // ================================================
    // INITIALIZATION
    // ================================================
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize all modules
        PharmacyNetwork.init();
        Alternatives.init();
        Feedback.init();
        PatientTracker.init();

        // Setup navigation
        setupTabs();

        // Setup all tab events
        setupTransferEvents();
        setupAlternativesEvents();
        setupFeedbackEvents();
        setupPatientEvents();
        setupPatternsEvents();
        setupGlobalEvents();

        // Initial render
        renderTransferTab();
        updateFeedbackBadge();

        console.log('AYUVANT Part 3 — Smart Distribution & Patient Intelligence loaded');
    });

})();
