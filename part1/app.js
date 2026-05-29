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
    const quantityInput = document.getElementById('quantity');
    const mfgDateInput = document.getElementById('mfgDate');
    const expDateInput = document.getElementById('expDate');
    const expiryHint = document.getElementById('expiry-hint');

    // Stepper buttons
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');

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

    // ---- Form Submit ----
    batchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const batchNumber = batchNumberInput.value.trim();
        const medicineName = medicineNameInput.value.trim();
        const quantity = parseInt(quantityInput.value);
        const mfgDate = mfgDateInput.value;
        const expDate = expDateInput.value;

        // Validate
        if (!batchNumber || !medicineName || !quantity || !mfgDate || !expDate) {
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
            medicineName: medicineName,
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
                            <span class="batch-detail-label">Mfg. Date</span>
                            <span class="batch-detail-value">${formatDate(batch.manufacturingDate)}</span>
                        </div>
                        <div class="batch-detail">
                            <span class="batch-detail-label">Expiry Date</span>
                            <span class="batch-detail-value ${expiryClass}">${formatDate(batch.expiryDate)}</span>
                        </div>
                        <div class="batch-detail">
                            <span class="batch-detail-label">Quantity</span>
                            <span class="batch-detail-value">${batch.quantity}</span>
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
