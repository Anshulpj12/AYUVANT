/* ============================================
   AYUVANT — Part 1: App Logic
   Batch Entry + Dashboard + Local Storage
   ============================================ */

(function () {
    'use strict';

    // ---- Storage Key ----
    const STORAGE_KEY = 'ayuvant_batches';

    // ---- DOM Elements ----
    const tabBtns = document.querySelectorAll('.tab-btn');
    const views = document.querySelectorAll('.view');
    const batchForm = document.getElementById('batch-form');
    const batchList = document.getElementById('batch-list');
    const emptyState = document.getElementById('empty-state');
    const searchInput = document.getElementById('search-input');
    const toast = document.getElementById('toast');

    // Stats
    const statTotal = document.getElementById('stat-total');
    const statMedicines = document.getElementById('stat-medicines');
    const statExpiring = document.getElementById('stat-expiring');

    // Form inputs
    const batchNumberInput = document.getElementById('batchNumber');
    const medicineNameInput = document.getElementById('medicineName');
    const medicineSuggestions = document.getElementById('medicine-suggestions');
    const medicineTypeSelect = document.getElementById('medicineType');
    const dosageStrengthSelect = document.getElementById('dosageStrength');
    const customStrengthInput = document.getElementById('customStrength');
    const quantityInput = document.getElementById('quantity');
    const mfgDateInput = document.getElementById('mfgDate');
    const expDateInput = document.getElementById('expDate');
    const expiryHint = document.getElementById('expiry-hint');

    // Stepper buttons
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');

    // ---- State ----
    let selectedMedicineId = 'custom';

    // ---- Data ----
    function loadBatches() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    }

    function saveBatches(batches) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(batches));
    }

    // ---- Tab Navigation ----
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            views.forEach(v => v.classList.remove('active'));
            const targetView = document.getElementById('view-' + tab);
            if (targetView) {
                targetView.classList.add('active');
            }

            // Refresh dashboard when switching to it
            if (tab === 'dashboard') {
                renderDashboard();
            }
        });
    });

    // ---- Stepper ----
    qtyMinus.addEventListener('click', () => {
        const current = parseInt(quantityInput.value) || 0;
        if (current > 1) {
            quantityInput.value = current - 1;
        }
    });

    qtyPlus.addEventListener('click', () => {
        const current = parseInt(quantityInput.value) || 0;
        quantityInput.value = current + 1;
    });

    // ---- Expiry Date Validation ----
    expDateInput.addEventListener('change', () => {
        checkExpiryDate();
    });

    function checkExpiryDate() {
        const expiry = expDateInput.value;
        if (!expiry) {
            expiryHint.textContent = 'When this batch expires';
            expiryHint.className = 'field-hint';
            return;
        }

        const expiryDate = new Date(expiry);
        const today = new Date();
        const threeMonths = new Date();
        threeMonths.setMonth(threeMonths.getMonth() + 3);

        if (expiryDate <= today) {
            expiryHint.textContent = '⚠ This batch is already expired!';
            expiryHint.className = 'field-hint error';
        } else if (expiryDate <= threeMonths) {
            expiryHint.textContent = '⚠ Expiring within 3 months';
            expiryHint.className = 'field-hint warning';
        } else {
            expiryHint.textContent = 'When this batch expires';
            expiryHint.className = 'field-hint';
        }
    }

    // ---- Autocomplete Suggestions & Dropdowns ----
    const masterMedicines = window.AYUVANT_MEDICINES || [];

    medicineNameInput.addEventListener('input', debounce(function () {
        const query = medicineNameInput.value.trim().toLowerCase();
        if (query.length < 2) {
            medicineSuggestions.innerHTML = '';
            medicineSuggestions.classList.remove('show');
            return;
        }

        const matches = masterMedicines.filter(med => 
            med.name.toLowerCase().includes(query) ||
            med.genericName.toLowerCase().includes(query) ||
            (med.tags && med.tags.some(tag => tag.toLowerCase().includes(query)))
        ).slice(0, 10);

        if (matches.length === 0) {
            medicineSuggestions.innerHTML = '<div class="suggestion-item" style="cursor:default;color:var(--outline);font-size:12.5px;padding:12px;">No matches in master list. Keep typing custom name...</div>';
            medicineSuggestions.classList.add('show');
            return;
        }

        medicineSuggestions.innerHTML = matches.map(med => `
            <div class="suggestion-item" data-id="${med.id}" data-name="${escapeHtml(med.name)}" data-form="${escapeHtml(med.dosageForm)}">
                <span class="suggestion-name">${escapeHtml(med.name)}</span>
                <span class="suggestion-meta">${escapeHtml(med.dosageForm)}</span>
            </div>
        `).join('');
        medicineSuggestions.classList.add('show');
    }, 200));

    // Handle suggestion click
    medicineSuggestions.addEventListener('click', function (e) {
        const item = e.target.closest('.suggestion-item');
        if (!item) return;

        const id = item.dataset.id;
        const name = item.dataset.name;
        const form = item.dataset.form;

        selectedMedicineId = id;
        medicineNameInput.value = name;
        medicineSuggestions.classList.remove('show');

        // Set medicine type options
        selectTypeOption(form);
        // Load strengths
        loadDosageStrengths(id, form);
    });

    // Close suggestions dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.autocomplete-container') && e.target !== medicineNameInput) {
            medicineSuggestions.classList.remove('show');
        }
    });

    // Helper to select the medicine type dropdown
    function selectTypeOption(form) {
        if (!form) return;
        const formLower = form.toLowerCase();
        
        // Find best option in dropdown
        for (let i = 0; i < medicineTypeSelect.options.length; i++) {
            const optVal = medicineTypeSelect.options[i].value.toLowerCase();
            if (optVal && (formLower.includes(optVal) || optVal.includes(formLower))) {
                medicineTypeSelect.selectedIndex = i;
                return;
            }
        }
        
        // Fallbacks
        if (formLower.includes('tablet')) medicineTypeSelect.value = 'Tablet';
        else if (formLower.includes('capsule')) medicineTypeSelect.value = 'Capsule';
        else if (formLower.includes('syrup')) medicineTypeSelect.value = 'Syrup';
        else if (formLower.includes('inhaler')) medicineTypeSelect.value = 'Inhaler';
        else if (formLower.includes('cream') || formLower.includes('gel')) medicineTypeSelect.value = 'Cream';
        else if (formLower.includes('injection')) medicineTypeSelect.value = 'Injection';
    }

    // Helper to match type to dosage keys from clinical-intelligence.js
    function matchTypeToDosageKey(t) {
        if (!t) return null;
        var val = t.toLowerCase();
        if (val.indexOf('tablet') !== -1) return 'Tablet';
        if (val.indexOf('capsule') !== -1) return 'Capsule';
        if (val.indexOf('syrup') !== -1) return 'Syrup';
        if (val.indexOf('inhaler') !== -1) return 'Inhaler';
        if (val.indexOf('cream') !== -1 || val.indexOf('gel') !== -1 || val.indexOf('ointment') !== -1) return 'Cream_Gel_Ointment';
        if (val.indexOf('eye') !== -1) return 'Eye_Drops';
        if (val.indexOf('ear') !== -1) return 'Ear_Drops';
        if (val.indexOf('nasal') !== -1) return 'Nasal_Spray_Drops';
        if (val.indexOf('injection') !== -1) return 'Injection';
        if (val.indexOf('powder') !== -1 || val.indexOf('sachet') !== -1) return 'Powder_Sachet';
        if (val.indexOf('lotion') !== -1 || val.indexOf('shampoo') !== -1 || val.indexOf('solution') !== -1) return 'Lotion_Solution_Shampoo';
        if (val.indexOf('mouthwash') !== -1) return 'Mouthwash';
        return null;
    }

    // Populate dosage strength dropdown based on medicine and selected type
    function loadDosageStrengths(medId, formType) {
        // Clear strengths
        dosageStrengthSelect.innerHTML = '<option value="">-- Select Strength --</option>';
        customStrengthInput.value = '';

        if (!window.AYUVANT_CLINICAL_DATA || !window.AYUVANT_CLINICAL_DATA.dosageStrengthsByType) {
            return;
        }

        const dosageKey = matchTypeToDosageKey(formType || medicineTypeSelect.value);
        if (!dosageKey) return;

        const list = window.AYUVANT_CLINICAL_DATA.dosageStrengthsByType[dosageKey] || [];
        
        // Find strengths that link to this medicine ID
        let matched = list.filter(item => 
            item.medicine_ids && item.medicine_ids.includes(medId)
        ).map(item => item.label);

        // Fallback to all strengths for this type
        if (matched.length === 0) {
            matched = list.map(item => item.label);
        }

        matched.forEach(label => {
            const opt = document.createElement('option');
            opt.value = label;
            opt.textContent = label;
            dosageStrengthSelect.appendChild(opt);
        });
    }

    // Listen to type dropdown changes to refresh strengths
    medicineTypeSelect.addEventListener('change', function () {
        loadDosageStrengths(selectedMedicineId, medicineTypeSelect.value);
    });

    medicineNameInput.addEventListener('change', function() {
        const val = medicineNameInput.value.trim().toLowerCase();
        const found = masterMedicines.find(m => m.name.toLowerCase() === val);
        if (!found) {
            selectedMedicineId = 'custom';
            dosageStrengthSelect.innerHTML = '<option value="">-- Select Strength --</option>';
        }
    });

    // Debounce helper
    function debounce(fn, delay) {
        let timer;
        return function () {
            const args = arguments;
            const ctx = this;
            clearTimeout(timer);
            timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
        };
    }

    // ---- Form Submit ----
    batchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const batchNumber = batchNumberInput.value.trim();
        const medicineName = medicineNameInput.value.trim();
        const dosageForm = medicineTypeSelect.value;
        const dosageStrength = dosageStrengthSelect.value || customStrengthInput.value.trim();
        const quantity = parseInt(quantityInput.value);
        const mfgDate = mfgDateInput.value;
        const expDate = expDateInput.value;

        // Validate
        if (!batchNumber || !medicineName || !dosageForm || !dosageStrength || !quantity || !mfgDate || !expDate) {
            showToast('Please fill out all fields!', true);
            return;
        }

        if (quantity < 1) {
            return;
        }

        // Check duplicate batch number
        const batches = loadBatches();
        const duplicate = batches.find(b => b.batchNumber.toLowerCase() === batchNumber.toLowerCase());
        if (duplicate) {
            showToast('Batch number already exists!', true);
            return;
        }

        // Create batch entry
        const newBatch = {
            id: Date.now().toString(),
            batchNumber: batchNumber,
            medicineId: selectedMedicineId,
            medicineName: medicineName,
            dosageForm: dosageForm,
            dosageStrength: dosageStrength,
            quantity: quantity,
            manufacturingDate: mfgDate,
            expiryDate: expDate,
            entryDate: new Date().toISOString().split('T')[0],
            status: 'active'
        };

        // Save
        batches.unshift(newBatch);
        saveBatches(batches);

        // Reset form
        batchForm.reset();
        selectedMedicineId = 'custom';
        dosageStrengthSelect.innerHTML = '<option value="">-- Select Strength --</option>';
        expiryHint.textContent = 'When this batch expires';
        expiryHint.className = 'field-hint';

        // Show success toast
        showToast('Batch added successfully!', false);

        // Switch to dashboard
        setTimeout(() => {
            document.querySelector('[data-tab="dashboard"]').click();
        }, 800);
    });

    // ---- Toast ----
    function showToast(message, isError) {
        const toastIcon = toast.querySelector('.toast-icon');
        const toastText = toast.querySelector('.toast-text');

        toastText.textContent = message;

        if (isError) {
            toastIcon.textContent = 'error';
            toast.style.borderColor = 'rgba(255, 113, 108, 0.2)';
            toastIcon.style.color = 'var(--error)';
        } else {
            toastIcon.textContent = 'check_circle';
            toast.style.borderColor = 'rgba(63, 255, 139, 0.2)';
            toastIcon.style.color = 'var(--tertiary)';
        }

        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    // ---- Dashboard Rendering ----
    function renderDashboard(filter) {
        let batches = loadBatches();

        // Filter if search text provided
        if (filter) {
            const q = filter.toLowerCase();
            batches = batches.filter(b =>
                b.medicineName.toLowerCase().includes(q) ||
                b.batchNumber.toLowerCase().includes(q)
            );
        }

        // Update stats
        const allBatches = loadBatches();
        const totalUnits = allBatches.reduce((sum, b) => sum + b.quantity, 0);
        const today = new Date();
        const threeMonths = new Date();
        threeMonths.setMonth(threeMonths.getMonth() + 3);
        const expiringSoon = allBatches.filter(b => {
            const exp = new Date(b.expiryDate);
            return exp > today && exp <= threeMonths;
        }).length;

        statTotal.textContent = allBatches.length;
        statMedicines.textContent = totalUnits.toLocaleString();
        statExpiring.textContent = expiringSoon;

        // Render batch cards
        if (batches.length === 0) {
            batchList.innerHTML = '';
            emptyState.classList.add('show');
            return;
        }

        emptyState.classList.remove('show');
        batchList.innerHTML = batches.map(batch => {
            const expiryClass = getExpiryClass(batch.expiryDate);
            return `
                <div class="batch-card" data-id="${batch.id}">
                    <div class="batch-card-header">
                        <span class="batch-name">${escapeHtml(batch.medicineName)}</span>
                        <span class="batch-qty">${batch.quantity} units</span>
                    </div>
                    <div class="batch-card-body">
                        <div class="batch-detail">
                            <span class="batch-detail-label">Batch No.</span>
                            <span class="batch-detail-value">${escapeHtml(batch.batchNumber)}</span>
                        </div>
                        <div class="batch-detail">
                            <span class="batch-detail-label">Type & Strength</span>
                            <span class="batch-detail-value">${escapeHtml(batch.dosageForm || '—')} (${escapeHtml(batch.dosageStrength || '—')})</span>
                        </div>
                        <div class="batch-detail">
                            <span class="batch-detail-label">Mfg. Date</span>
                            <span class="batch-detail-value">${formatDate(batch.manufacturingDate)}</span>
                        </div>
                        <div class="batch-detail">
                            <span class="batch-detail-label">Expiry Date</span>
                            <span class="batch-detail-value ${expiryClass}">${formatDate(batch.expiryDate)}</span>
                        </div>
                        <div class="batch-detail">
                            <span class="batch-detail-label">Quantity</span>
                            <span class="batch-detail-value">${batch.quantity} units</span>
                        </div>
                    </div>
                    <div class="batch-card-footer">
                        <span class="batch-date-added">Added: ${formatDate(batch.entryDate)}</span>
                        <button class="batch-delete-btn" onclick="deleteBatch('${batch.id}')">
                            <span class="material-icons-round">delete_outline</span>
                            Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ---- Helpers ----
    function getExpiryClass(dateStr) {
        const expiry = new Date(dateStr);
        const today = new Date();
        const threeMonths = new Date();
        threeMonths.setMonth(threeMonths.getMonth() + 3);

        if (expiry <= today) return 'expired';
        if (expiry <= threeMonths) return 'expiring-soon';
        return '';
    }

    function formatDate(dateStr) {
        if (!dateStr) return '-';
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ---- Global: Delete Batch ----
    window.deleteBatch = function (id) {
        let batches = loadBatches();
        batches = batches.filter(b => b.id !== id);
        saveBatches(batches);
        renderDashboard(searchInput.value);
        showToast('Batch removed', false);
    };

    // ---- Search ----
    searchInput.addEventListener('input', () => {
        renderDashboard(searchInput.value);
    });

    // ---- Init ----
    renderDashboard();

})();
