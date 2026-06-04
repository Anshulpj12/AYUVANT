/* ============================================
   AYUVANT — Part 3: Patient Tracker Module
   Patient registration, purchase history,
   health trajectory analysis, pattern detection
   ============================================ */

window.PatientTracker = (function () {
    'use strict';

    // ---- Constants ----
    const PATIENTS_KEY = 'ayuvant_patients';
    const HEALTH_PATTERNS_KEY = 'ayuvant_health_patterns';
    const BATCHES_KEY = 'ayuvant_batches';
    const SALES_KEY = 'ayuvant_sales';

    // ---- Medicine Strength Hierarchy (for escalation detection) ----
    const STRENGTH_ORDER = {
        'Antipyretic': ['Calpol 500', 'Crocin 650', 'Dolo 650'],
        'Analgesic': ['Combiflam', 'Sumo'],
        'Antibiotic': ['Amoxicillin 500', 'Azithromycin 500', 'Azee 500', 'Augmentin 625'],
        'Antidiabetic': ['Metformin 500', 'Glycomet 500'],
        'Antihistamine': ['Cetirizine 10', 'Allegra 120']
    };

    // ---- State ----
    let patients = [];
    let healthPatterns = {};

    // ---- Storage Helpers ----
    function load(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) || fallback; }
        catch { return fallback; }
    }
    function save(key, data) {
        try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { console.error('PatientTracker: save error', e); }
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
        patients = load(PATIENTS_KEY, []);
        healthPatterns = load(HEALTH_PATTERNS_KEY, {});
    }

    // ---- Register Patient ----
    function registerPatient(mobile, name, age, gender, consent) {
        if (!mobile || !name) return { error: 'Mobile and name are required' };

        // Normalize mobile
        var cleanMobile = mobile.replace(/\D/g, '').slice(-10);
        if (cleanMobile.length !== 10) return { error: 'Invalid mobile number' };

        // Check duplicate
        var existing = patients.find(function (p) { return p.mobile === cleanMobile; });
        if (existing) return { error: 'Patient already registered', patient: existing };

        var patient = {
            id: 'PAT-' + cleanMobile,
            mobile: cleanMobile,
            name: name.trim(),
            age: parseInt(age) || 0,
            gender: gender || 'Not specified',
            consent: consent === true || consent === 'true',
            registeredAt: new Date().toISOString(),
            lastVisit: new Date().toISOString(),
            purchases: [],
            healthFlags: [],
            trajectory: 'stable'
        };

        patients.push(patient);
        save(PATIENTS_KEY, patients);
        return { patient: patient };
    }

    // ---- Find Patient ----
    function findPatient(query) {
        if (!query || query.trim().length === 0) return [];

        var q = query.trim().toLowerCase();
        return patients.filter(function (p) {
            var mobileMatch = p.mobile.includes(q);
            var nameMatch = p.name.toLowerCase().includes(q);
            var idMatch = p.id.toLowerCase().includes(q);
            return mobileMatch || nameMatch || idMatch;
        });
    }

    // ---- Get Patient ----
    function getPatient(patientId) {
        return patients.find(function (p) { return p.id === patientId; }) || null;
    }

    // ---- Record Purchase ----
    function recordPurchase(patientId, purchaseData) {
        var patientIdx = patients.findIndex(function (p) { return p.id === patientId; });
        if (patientIdx === -1) return { error: 'Patient not found' };

        var purchase = {
            purchaseId: 'PUR-' + Date.now(),
            date: new Date().toISOString(),
            medicineName: purchaseData.medicineName,
            medicineId: purchaseData.medicineId || null,
            activeSalts: purchaseData.activeSalts || [],
            batchNumber: purchaseData.batchNumber || 'N/A',
            quantity: purchaseData.quantity || 1,
            category: purchaseData.category || 'General',
            wasSubstitute: purchaseData.wasSubstitute || false,
            originalMedicine: purchaseData.originalMedicine || null
        };

        patients[patientIdx].purchases.push(purchase);
        patients[patientIdx].lastVisit = new Date().toISOString();
        save(PATIENTS_KEY, patients);

        return { purchase: purchase };
    }

    // ---- Analyze Patterns ----
    function analyzePatterns() {
        var results = {
            batchPatterns: [],
            medicinePatterns: [],
            patientTrajectories: [],
            analyzedAt: new Date().toISOString()
        };

        var batches = load(BATCHES_KEY, []);
        var sales = load(SALES_KEY, []);
        var now = Date.now();
        var sevenDaysMs = 7 * 24 * 60 * 60 * 1000;

        // ---- 1. Batch Patterns ----
        var batchBuyers = {};
        sales.forEach(function (sale) {
            if (!sale.batchNumber) return;
            if (!batchBuyers[sale.batchNumber]) {
                batchBuyers[sale.batchNumber] = {
                    batchNumber: sale.batchNumber,
                    medicineName: sale.medicineName,
                    buyers: {},
                    totalSales: 0
                };
            }
            var buyerKey = sale.patientId || sale.zone || 'anonymous_' + sale.id;
            if (!batchBuyers[sale.batchNumber].buyers[buyerKey]) {
                batchBuyers[sale.batchNumber].buyers[buyerKey] = [];
            }
            batchBuyers[sale.batchNumber].buyers[buyerKey].push(sale.date);
            batchBuyers[sale.batchNumber].totalSales++;
        });

        Object.values(batchBuyers).forEach(function (batch) {
            var totalBuyers = Object.keys(batch.buyers).length;
            var repeatBuyers = 0;

            Object.values(batch.buyers).forEach(function (dates) {
                if (dates.length > 1) {
                    // Check if any two purchases within 7 days
                    for (var i = 1; i < dates.length; i++) {
                        var diff = Math.abs(new Date(dates[i]).getTime() - new Date(dates[i - 1]).getTime());
                        if (diff <= sevenDaysMs) {
                            repeatBuyers++;
                            break;
                        }
                    }
                }
            });

            var repeatRate = totalBuyers > 0 ? (repeatBuyers / totalBuyers) * 100 : 0;
            var flag = repeatRate > 25 ? 'HIGH_REPEAT' : 'NORMAL';

            results.batchPatterns.push({
                batchNumber: batch.batchNumber,
                medicineName: batch.medicineName,
                totalBuyers: totalBuyers,
                repeatBuyers: repeatBuyers,
                repeatRate: Math.round(repeatRate),
                flag: flag,
                totalSales: batch.totalSales
            });
        });

        // ---- 2. Medicine Patterns ----
        var medicineSales = {};
        sales.forEach(function (sale) {
            var name = sale.medicineName;
            if (!medicineSales[name]) {
                medicineSales[name] = { sales: [], categories: new Set() };
            }
            medicineSales[name].sales.push(sale);
        });

        Object.entries(medicineSales).forEach(function (entry) {
            var medName = entry[0];
            var data = entry[1];
            var medSales = data.sales;

            // Average repeat rate
            var buyerDates = {};
            medSales.forEach(function (s) {
                var buyer = s.patientId || s.zone || 'anon';
                if (!buyerDates[buyer]) buyerDates[buyer] = [];
                buyerDates[buyer].push(new Date(s.date).getTime());
            });

            var repeatIntervals = [];
            Object.values(buyerDates).forEach(function (dates) {
                dates.sort(function (a, b) { return a - b; });
                for (var i = 1; i < dates.length; i++) {
                    repeatIntervals.push(dates[i] - dates[i - 1]);
                }
            });

            var avgRepeatDays = repeatIntervals.length > 0 ?
                Math.round(repeatIntervals.reduce(function (a, b) { return a + b; }, 0) / repeatIntervals.length / (24 * 60 * 60 * 1000)) : null;

            // Monthly distribution for seasonal spikes
            var monthlyDist = new Array(12).fill(0);
            medSales.forEach(function (s) {
                var month = new Date(s.date).getMonth();
                monthlyDist[month] += s.quantity;
            });
            var avgMonthly = monthlyDist.reduce(function (a, b) { return a + b; }, 0) / 12;
            var seasonalSpikes = [];
            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            monthlyDist.forEach(function (qty, idx) {
                if (qty > avgMonthly * 1.5) {
                    seasonalSpikes.push(monthNames[idx]);
                }
            });

            // Follow-up medicines
            var followUps = {};
            medSales.forEach(function (s) {
                var buyer = s.patientId || null;
                if (!buyer) return;
                var patient = patients.find(function (p) { return p.id === buyer; });
                if (!patient) return;
                var medDate = new Date(s.date).getTime();
                patient.purchases.forEach(function (pur) {
                    var purDate = new Date(pur.date).getTime();
                    if (purDate > medDate && purDate - medDate < 30 * 24 * 60 * 60 * 1000 && pur.medicineName !== medName) {
                        followUps[pur.medicineName] = (followUps[pur.medicineName] || 0) + 1;
                    }
                });
            });

            var topFollowUps = Object.entries(followUps)
                .sort(function (a, b) { return b[1] - a[1]; })
                .slice(0, 3)
                .map(function (e) { return e[0]; });

            results.medicinePatterns.push({
                medicineName: medName,
                totalSales: medSales.length,
                totalQuantity: medSales.reduce(function (s, x) { return s + x.quantity; }, 0),
                avgRepeatDays: avgRepeatDays,
                seasonalSpikes: seasonalSpikes,
                commonFollowUps: topFollowUps
            });
        });

        // ---- 3. Patient Trajectories ----
        patients.forEach(function (patient) {
            var purchases = patient.purchases || [];
            var trajectory = 'stable';

            if (purchases.length < 3) {
                // Default
                trajectory = 'stable';
            } else {
                // Sort by date
                var sorted = purchases.slice().sort(function (a, b) {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                });

                // Check frequency trend (intervals between purchases)
                var intervals = [];
                for (var i = 1; i < sorted.length; i++) {
                    intervals.push(new Date(sorted[i].date).getTime() - new Date(sorted[i - 1].date).getTime());
                }

                var isFrequencyIncreasing = false;
                var isFrequencyDecreasing = false;
                if (intervals.length >= 2) {
                    var firstHalf = intervals.slice(0, Math.floor(intervals.length / 2));
                    var secondHalf = intervals.slice(Math.floor(intervals.length / 2));
                    var avgFirst = firstHalf.reduce(function (a, b) { return a + b; }, 0) / firstHalf.length;
                    var avgSecond = secondHalf.reduce(function (a, b) { return a + b; }, 0) / secondHalf.length;

                    if (avgSecond < avgFirst * 0.7) isFrequencyIncreasing = true;
                    if (avgSecond > avgFirst * 1.3) isFrequencyDecreasing = true;
                }

                // Check for escalation (moving to stronger medicines)
                var isEscalating = false;
                var categories = {};
                sorted.forEach(function (p) {
                    if (!categories[p.category]) categories[p.category] = [];
                    categories[p.category].push(p.medicineName);
                });

                Object.entries(categories).forEach(function (catEntry) {
                    var cat = catEntry[0];
                    var meds = catEntry[1];
                    var hierarchy = STRENGTH_ORDER[cat];
                    if (hierarchy && meds.length >= 2) {
                        var lastIdx = hierarchy.indexOf(meds[meds.length - 1]);
                        var firstIdx = hierarchy.indexOf(meds[0]);
                        if (lastIdx > firstIdx && lastIdx >= 0 && firstIdx >= 0) {
                            isEscalating = true;
                        }
                    }
                });

                // Check for new categories
                var uniqueCategories = new Set();
                var recentCategories = new Set();
                var midpoint = sorted.length > 3 ? Math.floor(sorted.length / 2) : 1;

                sorted.slice(0, midpoint).forEach(function (p) { uniqueCategories.add(p.category); });
                sorted.slice(midpoint).forEach(function (p) { recentCategories.add(p.category); });

                var newCategories = 0;
                recentCategories.forEach(function (cat) {
                    if (!uniqueCategories.has(cat)) newCategories++;
                });

                // Determine trajectory
                if (isEscalating) {
                    trajectory = 'escalating';
                } else if (isFrequencyIncreasing || newCategories > 0) {
                    trajectory = 'concerning';
                } else if (isFrequencyDecreasing) {
                    trajectory = 'improving';
                } else {
                    // Check for chronic patterns (same medicine repeatedly)
                    var hasChronic = false;
                    Object.values(categories).forEach(function (meds) {
                        if (meds.length >= 3) hasChronic = true;
                    });
                    trajectory = hasChronic ? 'stable' : 'stable';
                }
            }

            // Update patient
            patient.trajectory = trajectory;

            results.patientTrajectories.push({
                patientId: patient.id,
                patientName: patient.name,
                purchaseCount: purchases.length,
                trajectory: trajectory,
                lastVisit: patient.lastVisit
            });
        });

        // Save patterns and updated patients
        healthPatterns = results;
        save(HEALTH_PATTERNS_KEY, results);
        save(PATIENTS_KEY, patients);

        return results;
    }

    // ---- Health Timeline ----
    function getHealthTimeline(patientId) {
        var patient = getPatient(patientId);
        if (!patient) return [];

        var purchases = (patient.purchases || []).slice();
        purchases.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        return purchases.map(function (p, idx) {
            var observations = [];

            if (p.wasSubstitute) {
                observations.push('Substitute for ' + (p.originalMedicine || 'unknown'));
            }

            // Check if repeat purchase (same medicine within 7 days prior)
            for (var i = idx + 1; i < purchases.length; i++) {
                if (purchases[i].medicineName === p.medicineName) {
                    var diff = new Date(p.date).getTime() - new Date(purchases[i].date).getTime();
                    if (diff <= 7 * 24 * 60 * 60 * 1000) {
                        observations.push('Repeat purchase within 7 days');
                    }
                    break;
                }
            }

            return {
                date: p.date,
                medicineName: p.medicineName,
                category: p.category,
                quantity: p.quantity,
                wasSubstitute: p.wasSubstitute,
                observations: observations
            };
        });
    }

    // ---- Render Patient Profile ----
    function renderPatientProfile(containerId, patientId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var patient = getPatient(patientId);
        if (!patient) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">person_off</span>' +
                '<p class="empty-title">Patient not found</p>' +
                '</div>';
            return;
        }

        var purchases = patient.purchases || [];
        var uniqueMeds = new Set();
        purchases.forEach(function (p) { uniqueMeds.add(p.medicineName); });

        var lastVisitStr = patient.lastVisit ?
            new Date(patient.lastVisit).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Never';

        var trajectoryColors = {
            improving: 'var(--tertiary)',
            stable: 'var(--primary)',
            concerning: 'var(--warning)',
            escalating: 'var(--error)'
        };
        var trajectoryIcons = {
            improving: 'trending_down',
            stable: 'horizontal_rule',
            concerning: 'trending_up',
            escalating: 'arrow_upward'
        };

        var trajectoryColor = trajectoryColors[patient.trajectory] || 'var(--on-surface-variant)';
        var trajectoryIcon = trajectoryIcons[patient.trajectory] || 'help';

        // Avatar gradient
        var avatarGradients = [
            'linear-gradient(135deg, #81ECFF, #7C4DFF)',
            'linear-gradient(135deg, #A68CFF, #00E676)',
            'linear-gradient(135deg, #00E5FF, #AB47BC)',
            'linear-gradient(135deg, #FFB74D, #FF716C)',
            'linear-gradient(135deg, #B5FFC2, #81ECFF)'
        ];
        var gradientIdx = patient.name.charCodeAt(0) % avatarGradients.length;
        var initial = patient.name.charAt(0).toUpperCase();

        var html = '<div class="patient-profile">' +
            '<div class="patient-profile-header">' +
                '<div class="patient-avatar" style="background:' + avatarGradients[gradientIdx] + '">' +
                    '<span>' + initial + '</span>' +
                '</div>' +
                '<div class="patient-header-info">' +
                    '<span class="patient-name">' + escapeHtml(patient.name) + '</span>' +
                    '<span class="patient-id-badge">' + patient.id + '</span>' +
                    '<span class="patient-demographics">' +
                        (patient.age > 0 ? patient.age + ' yrs · ' : '') +
                        escapeHtml(patient.gender) + ' · ' + patient.mobile +
                    '</span>' +
                '</div>' +
            '</div>' +
            '<div class="patient-stats-row">' +
                '<div class="patient-stat">' +
                    '<span class="patient-stat-value">' + purchases.length + '</span>' +
                    '<span class="patient-stat-label">Visits</span>' +
                '</div>' +
                '<div class="patient-stat">' +
                    '<span class="patient-stat-value">' + uniqueMeds.size + '</span>' +
                    '<span class="patient-stat-label">Medicines</span>' +
                '</div>' +
                '<div class="patient-stat">' +
                    '<span class="patient-stat-value" style="font-size:12px;">' + lastVisitStr + '</span>' +
                    '<span class="patient-stat-label">Last Visit</span>' +
                '</div>' +
            '</div>' +
            '<div class="patient-trajectory" style="border-color:' + trajectoryColor + '">' +
                '<span class="material-icons-round" style="color:' + trajectoryColor + ';font-size:18px;">' + trajectoryIcon + '</span>' +
                '<span class="trajectory-label">Trajectory: </span>' +
                '<span class="trajectory-value" style="color:' + trajectoryColor + ';text-transform:capitalize;">' + patient.trajectory + '</span>' +
            '</div>';

        // Health flags
        if (patient.healthFlags && patient.healthFlags.length > 0) {
            html += '<div class="patient-health-flags">';
            patient.healthFlags.forEach(function (flag) {
                html += '<span class="health-flag-chip">' +
                    '<span class="material-icons-round" style="font-size:12px;">flag</span> ' +
                    escapeHtml(flag) +
                '</span>';
            });
            html += '</div>';
        }

        // Purchase timeline
        html += '<div class="patient-timeline-header">' +
            '<span class="material-icons-round" style="color:var(--primary);font-size:18px;">timeline</span>' +
            '<span>Purchase Timeline</span>' +
        '</div>';

        if (purchases.length === 0) {
            html += '<div class="empty-state show" style="padding:16px;">' +
                '<p class="empty-text">No purchase history</p>' +
                '</div>';
        } else {
            var sortedPurchases = purchases.slice().sort(function (a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });

            html += '<div class="patient-timeline">';
            sortedPurchases.forEach(function (p) {
                var dateStr = new Date(p.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
                var subTag = p.wasSubstitute ?
                    '<span class="timeline-sub-tag">Substitute</span>' : '';

                html += '<div class="timeline-item">' +
                    '<div class="timeline-dot"></div>' +
                    '<div class="timeline-content">' +
                        '<div class="timeline-header">' +
                            '<span class="timeline-medicine">' + escapeHtml(p.medicineName) + '</span>' +
                            subTag +
                        '</div>' +
                        '<div class="timeline-meta">' +
                            '<span>' + p.quantity + ' units · ' + escapeHtml(p.category || '') + '</span>' +
                            '<span>' + dateStr + '</span>' +
                        '</div>' +
                        (p.wasSubstitute && p.originalMedicine ?
                            '<div class="timeline-note">Originally: ' + escapeHtml(p.originalMedicine) + '</div>' : '') +
                    '</div>' +
                '</div>';
            });
            html += '</div>';
        }

        html += '</div>';
        container.innerHTML = html;
    }

    // ---- Render Patient List ----
    function renderPatientList(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        if (patients.length === 0) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">people</span>' +
                '<p class="empty-title">No patients registered</p>' +
                '<p class="empty-text">Register a patient to get started</p>' +
                '</div>';
            return;
        }

        // Sort by most recent visit
        var sorted = patients.slice().sort(function (a, b) {
            return new Date(b.lastVisit || 0).getTime() - new Date(a.lastVisit || 0).getTime();
        });

        container.innerHTML = sorted.map(function (p) {
            var avatarGradients = [
                'linear-gradient(135deg, #81ECFF, #7C4DFF)',
                'linear-gradient(135deg, #A68CFF, #00E676)',
                'linear-gradient(135deg, #00E5FF, #AB47BC)',
                'linear-gradient(135deg, #FFB74D, #FF716C)',
                'linear-gradient(135deg, #B5FFC2, #81ECFF)'
            ];
            var gradientIdx = p.name.charCodeAt(0) % avatarGradients.length;
            var initial = p.name.charAt(0).toUpperCase();
            var visitCount = (p.purchases || []).length;
            var lastVisit = p.lastVisit ? getTimeAgo(p.lastVisit) : 'Never';

            var trajectoryColor = {
                improving: 'var(--tertiary)',
                stable: 'var(--primary)',
                concerning: 'var(--warning)',
                escalating: 'var(--error)'
            }[p.trajectory] || 'var(--on-surface-variant)';

            return '<div class="glass-card patient-list-item" data-patient-id="' + p.id + '">' +
                '<div class="patient-list-avatar" style="background:' + avatarGradients[gradientIdx] + '">' +
                    '<span>' + initial + '</span>' +
                '</div>' +
                '<div class="patient-list-info">' +
                    '<span class="patient-list-name">' + escapeHtml(p.name) + '</span>' +
                    '<span class="patient-list-meta">' + p.mobile + ' · ' + visitCount + ' visits · ' + lastVisit + '</span>' +
                '</div>' +
                '<span class="patient-trajectory-dot" style="background:' + trajectoryColor + ';" title="' + (p.trajectory || 'stable') + '"></span>' +
            '</div>';
        }).join('');
    }

    // ---- Render Search ----
    function renderPatientSearch(containerId, query) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var results = findPatient(query);

        if (results.length === 0) {
            container.innerHTML = '<div class="glass-card register-prompt">' +
                '<span class="material-icons-round" style="color:var(--primary);font-size:28px;">person_add</span>' +
                '<p class="register-prompt-text">No patient found for "' + escapeHtml(query) + '"</p>' +
                '<button class="btn-register-patient" data-prefill="' + escapeHtml(query) + '">' +
                    '<span class="material-icons-round">add</span> Register New Patient' +
                '</button>' +
            '</div>';
            return;
        }

        container.innerHTML = results.map(function (p) {
            var avatarGradients = [
                'linear-gradient(135deg, #81ECFF, #7C4DFF)',
                'linear-gradient(135deg, #A68CFF, #00E676)',
                'linear-gradient(135deg, #00E5FF, #AB47BC)',
                'linear-gradient(135deg, #FFB74D, #FF716C)',
                'linear-gradient(135deg, #B5FFC2, #81ECFF)'
            ];
            var gradientIdx = p.name.charCodeAt(0) % avatarGradients.length;
            var initial = p.name.charAt(0).toUpperCase();

            return '<div class="glass-card patient-search-item" data-patient-id="' + p.id + '">' +
                '<div class="patient-list-avatar" style="background:' + avatarGradients[gradientIdx] + '">' +
                    '<span>' + initial + '</span>' +
                '</div>' +
                '<div class="patient-list-info">' +
                    '<span class="patient-list-name">' + escapeHtml(p.name) + '</span>' +
                    '<span class="patient-list-meta">' + p.id + ' · ' + p.mobile + '</span>' +
                '</div>' +
                '<span class="material-icons-round" style="color:var(--primary);font-size:20px;">chevron_right</span>' +
            '</div>';
        }).join('');
    }

    // ---- Get All Patients ----
    function getAllPatients() {
        return patients;
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
        registerPatient: registerPatient,
        findPatient: findPatient,
        getPatient: getPatient,
        recordPurchase: recordPurchase,
        analyzePatterns: analyzePatterns,
        getHealthTimeline: getHealthTimeline,
        renderPatientProfile: renderPatientProfile,
        renderPatientList: renderPatientList,
        renderPatientSearch: renderPatientSearch,
        getAllPatients: getAllPatients,
        getPatterns: function () { return healthPatterns; }
    };

})();
