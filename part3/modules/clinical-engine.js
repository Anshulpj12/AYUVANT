/* ============================================
   AYUVANT — Part 3: Clinical Engine
   ML-powered symptom-based medicine recommendation
   with outcome tracking and batch anomaly detection
   ============================================ */

window.ClinicalEngine = (function () {
    'use strict';

    var STORAGE_KEY_TRANSACTIONS = 'ayuvant_clinical_transactions';
    var STORAGE_KEY_OUTCOMES = 'ayuvant_clinical_outcomes';

    var transactions = [];
    var outcomes = [];
    var data = null; // reference to AYUVANT_CLINICAL_DATA

    // ================================================
    // INITIALIZATION
    // ================================================
    function init() {
        data = window.AYUVANT_CLINICAL_DATA;
        if (!data) {
            console.error('ClinicalEngine: AYUVANT_CLINICAL_DATA not found');
            return;
        }
        transactions = _loadJSON(STORAGE_KEY_TRANSACTIONS) || [];
        outcomes = _loadJSON(STORAGE_KEY_OUTCOMES) || [];
        console.log('ClinicalEngine: Loaded ' + transactions.length + ' transactions, ' + outcomes.length + ' outcomes');
    }

    // ================================================
    // DISEASE QUERIES
    // ================================================
    function getDiseases(query) {
        if (!data) return [];
        if (!query || query.trim() === '') return data.diseases.slice();

        var q = query.toLowerCase().trim();
        return data.diseases.filter(function (d) {
            return d.name.toLowerCase().indexOf(q) !== -1 ||
                d.category.toLowerCase().indexOf(q) !== -1 ||
                (d.description && d.description.toLowerCase().indexOf(q) !== -1) ||
                (d.icd_code && d.icd_code.toLowerCase().indexOf(q) !== -1);
        });
    }

    function getDiseaseById(diseaseId) {
        if (!data) return null;
        for (var i = 0; i < data.diseases.length; i++) {
            if (data.diseases[i].id === diseaseId) return data.diseases[i];
        }
        return null;
    }

    function getDiseaseCategories() {
        if (!data) return [];
        return data.diseaseCategories || [];
    }

    function getDiseasesByCategory(category) {
        if (!data) return [];
        if (!category || category === 'All') return data.diseases.slice();
        return data.diseases.filter(function (d) { return d.category === category; });
    }

    // ================================================
    // SYMPTOM QUERIES
    // ================================================
    function getSymptomsForDisease(diseaseId) {
        if (!data) return [];
        var disease = getDiseaseById(diseaseId);
        if (!disease) return [];

        return disease.commonSymptomIds.map(function (symId) {
            return getSymptomById(symId);
        }).filter(Boolean);
    }

    function getSymptomById(symptomId) {
        if (!data) return null;
        for (var i = 0; i < data.symptoms.length; i++) {
            if (data.symptoms[i].id === symptomId) return data.symptoms[i];
        }
        return null;
    }

    function getAllSymptoms() {
        if (!data) return [];
        return data.symptoms.slice();
    }

    // ================================================
    // ML RECOMMENDATION ENGINE
    // ================================================
    function getRecommendations(diseaseId, symptomIds) {
        if (!data) return [];
        symptomIds = symptomIds || [];

        // Get medicine mappings for this disease
        var mappings = data.diseaseMedicineMap.filter(function (m) {
            return m.diseaseId === diseaseId;
        });

        if (mappings.length === 0) return [];

        var medicines = window.AYUVANT_MEDICINES || [];
        var results = [];

        mappings.forEach(function (mapping) {
            var med = null;
            for (var i = 0; i < medicines.length; i++) {
                if (medicines[i].id === mapping.medicineId) {
                    med = medicines[i];
                    break;
                }
            }
            if (!med) return;

            // Calculate ML score
            var score = _calculateScore(mapping, diseaseId, symptomIds, med);

            // Get side effects
            var sideEffect = _getSideEffects(med.id);

            results.push({
                medicine: med,
                mapping: mapping,
                score: score,
                confidence: Math.min(99, Math.round(score * 100)),
                historicalSuccess: _getHistoricalSuccess(med.id, diseaseId),
                totalUses: _getUsageCount(med.id, diseaseId),
                sideEffects: sideEffect,
                reasons: _buildReasons(mapping, score, diseaseId, symptomIds)
            });
        });

        // Sort by score descending
        results.sort(function (a, b) { return b.score - a.score; });

        return results;
    }

    function _calculateScore(mapping, diseaseId, symptomIds, med) {
        // Base priority score (0.0 to 1.0)
        var maxPriority = 3;
        var basePriority = 1 - ((mapping.priority - 1) / maxPriority);

        // Historical success rate
        var successRate = _getHistoricalSuccess(med.id, diseaseId);
        var usageCount = _getUsageCount(med.id, diseaseId);
        // Weight success rate more if we have enough data
        var successWeight = usageCount >= 3 ? successRate : 0.5;

        // Symptom overlap — how many selected symptoms align with disease-medicine pattern
        var symptomOverlap = 0;
        if (symptomIds.length > 0) {
            var disease = getDiseaseById(diseaseId);
            if (disease) {
                var commonSyms = disease.commonSymptomIds;
                var matchCount = 0;
                symptomIds.forEach(function (sid) {
                    if (commonSyms.indexOf(sid) !== -1) matchCount++;
                });
                symptomOverlap = matchCount / Math.max(symptomIds.length, 1);
            }
        } else {
            symptomOverlap = 0.5; // neutral if no symptoms selected
        }

        // Recency boost — recent successful usage of this medicine
        var recencyBoost = _getRecencyBoost(med.id, diseaseId);

        // Final weighted score
        var score = (basePriority * 0.3) + (successWeight * 0.4) +
            (symptomOverlap * 0.2) + (recencyBoost * 0.1);

        return Math.max(0, Math.min(1, score));
    }

    function _getHistoricalSuccess(medicineId, diseaseId) {
        var relevant = outcomes.filter(function (o) {
            return o.medicineId === medicineId && o.diseaseId === diseaseId;
        });
        if (relevant.length === 0) return 0.7; // default assumption

        var effective = relevant.filter(function (o) {
            return o.outcome === 'effective' || o.outcome === 'partial';
        }).length;

        return effective / relevant.length;
    }

    function _getUsageCount(medicineId, diseaseId) {
        return transactions.filter(function (t) {
            return t.medicineId === medicineId && t.diseaseId === diseaseId;
        }).length;
    }

    function _getRecencyBoost(medicineId, diseaseId) {
        var recent = transactions.filter(function (t) {
            return t.medicineId === medicineId && t.diseaseId === diseaseId;
        }).sort(function (a, b) {
            return new Date(b.timestamp) - new Date(a.timestamp);
        });

        if (recent.length === 0) return 0.5;

        var daysSinceLastUse = (Date.now() - new Date(recent[0].timestamp).getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceLastUse < 7) return 0.9;
        if (daysSinceLastUse < 30) return 0.7;
        return 0.4;
    }

    function _buildReasons(mapping, score, diseaseId, symptomIds) {
        var reasons = [];
        if (mapping.priority === 1) reasons.push('First-line treatment');
        else if (mapping.priority === 2) reasons.push('Second-line option');
        else reasons.push('Alternative treatment');

        var usages = _getUsageCount(mapping.medicineId, diseaseId);
        if (usages > 0) reasons.push('Used ' + usages + ' times before');

        var success = _getHistoricalSuccess(mapping.medicineId, diseaseId);
        if (usages > 0 && success >= 0.8) reasons.push('High success rate');
        else if (usages > 0 && success < 0.5) reasons.push('Low success rate');

        if (symptomIds.length > 0) {
            reasons.push(symptomIds.length + ' symptoms matched');
        }

        return reasons;
    }

    function _getSideEffects(medicineId) {
        if (!data || !data.sideEffects) return null;
        for (var i = 0; i < data.sideEffects.length; i++) {
            if (data.sideEffects[i].medicineId === medicineId) return data.sideEffects[i];
        }
        return null;
    }

    // ================================================
    // MEDICINE DETAIL FOR PRESCRIPTION
    // ================================================
    function getMedicineDetails(medicineId, diseaseId) {
        if (!data) return null;

        var mapping = null;
        for (var i = 0; i < data.diseaseMedicineMap.length; i++) {
            if (data.diseaseMedicineMap[i].medicineId === medicineId &&
                data.diseaseMedicineMap[i].diseaseId === diseaseId) {
                mapping = data.diseaseMedicineMap[i];
                break;
            }
        }
        if (!mapping) return null;

        var med = null;
        var medicines = window.AYUVANT_MEDICINES || [];
        for (var j = 0; j < medicines.length; j++) {
            if (medicines[j].id === medicineId) { med = medicines[j]; break; }
        }

        return {
            medicine: med,
            saltCompositions: mapping.saltCompositions,
            dosageStrengths: mapping.dosageStrengths,
            usageGuidelines: mapping.usageGuidelines,
            sideEffects: _getSideEffects(medicineId),
            priority: mapping.priority
        };
    }

    // ================================================
    // TRANSACTION RECORDING
    // ================================================
    function recordTransaction(payload) {
        var txn = {
            id: 'TXN-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
            diseaseId: payload.diseaseId,
            diseaseName: payload.diseaseName || '',
            symptomIds: payload.symptomIds || [],
            symptomNames: payload.symptomNames || [],
            medicineId: payload.medicineId,
            medicineName: payload.medicineName || '',
            saltComposition: payload.saltComposition || '',
            dosageStrength: payload.dosageStrength || '',
            usageGuidelines: payload.usageGuidelines || '',
            patientId: payload.patientId || null,
            patientMobile: payload.patientMobile || '',
            batchNumber: payload.batchNumber || '',
            pharmacistNotes: payload.pharmacistNotes || '',
            timestamp: new Date().toISOString(),
            outcomeLogged: false
        };

        transactions.push(txn);
        _saveJSON(STORAGE_KEY_TRANSACTIONS, transactions);

        console.log('ClinicalEngine: Transaction recorded — ' + txn.id);
        return txn;
    }

    // ================================================
    // OUTCOME TRACKING
    // ================================================
    function recordOutcome(transactionId, outcome, notes) {
        // outcome: 'effective', 'partial', 'ineffective', 'side_effect'
        var outcomeRecord = {
            id: 'OUT-' + Date.now(),
            transactionId: transactionId,
            outcome: outcome,
            notes: notes || '',
            timestamp: new Date().toISOString(),
            medicineId: null,
            diseaseId: null
        };

        // Link to transaction
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].id === transactionId) {
                transactions[i].outcomeLogged = true;
                outcomeRecord.medicineId = transactions[i].medicineId;
                outcomeRecord.diseaseId = transactions[i].diseaseId;
                outcomeRecord.medicineName = transactions[i].medicineName;
                outcomeRecord.diseaseName = transactions[i].diseaseName;
                outcomeRecord.batchNumber = transactions[i].batchNumber;
                break;
            }
        }

        outcomes.push(outcomeRecord);
        _saveJSON(STORAGE_KEY_TRANSACTIONS, transactions);
        _saveJSON(STORAGE_KEY_OUTCOMES, outcomes);

        console.log('ClinicalEngine: Outcome recorded — ' + outcomeRecord.id);
        return outcomeRecord;
    }

    function getPendingFollowups() {
        return transactions.filter(function (t) {
            return !t.outcomeLogged;
        }).sort(function (a, b) {
            return new Date(b.timestamp) - new Date(a.timestamp);
        });
    }

    function getCompletedOutcomes() {
        return outcomes.slice().sort(function (a, b) {
            return new Date(b.timestamp) - new Date(a.timestamp);
        });
    }

    // ================================================
    // ANALYTICS & STATS
    // ================================================
    function getOutcomeStats() {
        var total = outcomes.length;
        if (total === 0) return { total: 0, effective: 0, partial: 0, ineffective: 0, sideEffect: 0, successRate: 0 };

        var effective = outcomes.filter(function (o) { return o.outcome === 'effective'; }).length;
        var partial = outcomes.filter(function (o) { return o.outcome === 'partial'; }).length;
        var ineffective = outcomes.filter(function (o) { return o.outcome === 'ineffective'; }).length;
        var sideEffect = outcomes.filter(function (o) { return o.outcome === 'side_effect'; }).length;

        return {
            total: total,
            effective: effective,
            partial: partial,
            ineffective: ineffective,
            sideEffect: sideEffect,
            successRate: Math.round(((effective + partial) / total) * 100)
        };
    }

    function getTransactionCount() {
        return transactions.length;
    }

    // ================================================
    // BATCH ANOMALY DETECTION
    // ================================================
    function detectBatchAnomalies() {
        // Group outcomes by batch number
        var batchMap = {};
        outcomes.forEach(function (o) {
            if (!o.batchNumber) return;
            if (!batchMap[o.batchNumber]) {
                batchMap[o.batchNumber] = {
                    batchNumber: o.batchNumber,
                    medicineName: o.medicineName || '',
                    medicineId: o.medicineId || '',
                    total: 0,
                    negative: 0,
                    sideEffects: 0,
                    outcomes: []
                };
            }
            batchMap[o.batchNumber].total++;
            if (o.outcome === 'ineffective' || o.outcome === 'side_effect') {
                batchMap[o.batchNumber].negative++;
            }
            if (o.outcome === 'side_effect') {
                batchMap[o.batchNumber].sideEffects++;
            }
            batchMap[o.batchNumber].outcomes.push(o);
        });

        var anomalies = [];
        Object.keys(batchMap).forEach(function (batch) {
            var data = batchMap[batch];
            if (data.total >= 2) {
                var negativeRate = data.negative / data.total;
                if (negativeRate >= 0.5) {
                    anomalies.push({
                        batchNumber: batch,
                        medicineName: data.medicineName,
                        medicineId: data.medicineId,
                        totalReports: data.total,
                        negativeReports: data.negative,
                        sideEffectReports: data.sideEffects,
                        negativeRate: Math.round(negativeRate * 100),
                        severity: negativeRate >= 0.75 ? 'critical' : 'warning',
                        message: negativeRate >= 0.75
                            ? 'CRITICAL: ' + Math.round(negativeRate * 100) + '% negative outcomes for batch ' + batch
                            : 'WARNING: ' + Math.round(negativeRate * 100) + '% negative outcomes for batch ' + batch
                    });
                }
            }
        });

        return anomalies.sort(function (a, b) { return b.negativeRate - a.negativeRate; });
    }

    // ================================================
    // CROSS-PHARMACY ALERTS
    // ================================================
    function generateCrossPharmacyAlerts() {
        var alerts = [];

        // Check for medicines with consistently poor outcomes
        var medOutcomes = {};
        outcomes.forEach(function (o) {
            if (!o.medicineId) return;
            if (!medOutcomes[o.medicineId]) {
                medOutcomes[o.medicineId] = { id: o.medicineId, name: o.medicineName, total: 0, negative: 0 };
            }
            medOutcomes[o.medicineId].total++;
            if (o.outcome === 'ineffective' || o.outcome === 'side_effect') {
                medOutcomes[o.medicineId].negative++;
            }
        });

        Object.keys(medOutcomes).forEach(function (medId) {
            var d = medOutcomes[medId];
            if (d.total >= 3 && (d.negative / d.total) >= 0.6) {
                alerts.push({
                    type: 'medicine_concern',
                    medicineId: d.id,
                    medicineName: d.name,
                    message: d.name + ' has ' + Math.round((d.negative / d.total) * 100) + '% negative outcomes across ' + d.total + ' uses',
                    severity: 'warning'
                });
            }
        });

        // Check batch anomalies too
        var batchAnomalies = detectBatchAnomalies();
        batchAnomalies.forEach(function (a) {
            alerts.push({
                type: 'batch_anomaly',
                batchNumber: a.batchNumber,
                medicineName: a.medicineName,
                message: a.message,
                severity: a.severity
            });
        });

        return alerts;
    }

    // ================================================
    // DATA EXPORT
    // ================================================
    function exportTransactionData(format) {
        if (format === 'json') {
            return _exportJSON();
        }
        return _exportCSV();
    }

    function _exportCSV() {
        var headers = [
            'Transaction ID', 'Date', 'Disease', 'Symptoms', 'Medicine',
            'Salt Composition', 'Dosage', 'Usage Guidelines',
            'Patient Mobile', 'Batch Number', 'Pharmacist Notes',
            'Outcome', 'Outcome Notes'
        ];

        var rows = [headers.join(',')];
        transactions.forEach(function (t) {
            var outcomeData = _findOutcome(t.id);
            var row = [
                t.id,
                t.timestamp,
                '"' + (t.diseaseName || '').replace(/"/g, '""') + '"',
                '"' + (t.symptomNames || []).join('; ').replace(/"/g, '""') + '"',
                '"' + (t.medicineName || '').replace(/"/g, '""') + '"',
                '"' + (t.saltComposition || '').replace(/"/g, '""') + '"',
                '"' + (t.dosageStrength || '').replace(/"/g, '""') + '"',
                '"' + (t.usageGuidelines || '').replace(/"/g, '""') + '"',
                t.patientMobile || '',
                t.batchNumber || '',
                '"' + (t.pharmacistNotes || '').replace(/"/g, '""') + '"',
                outcomeData ? outcomeData.outcome : 'pending',
                outcomeData ? '"' + (outcomeData.notes || '').replace(/"/g, '""') + '"' : ''
            ];
            rows.push(row.join(','));
        });

        return rows.join('\n');
    }

    function _exportJSON() {
        return JSON.stringify({
            exportDate: new Date().toISOString(),
            transactions: transactions,
            outcomes: outcomes,
            stats: getOutcomeStats()
        }, null, 2);
    }

    function _findOutcome(transactionId) {
        for (var i = 0; i < outcomes.length; i++) {
            if (outcomes[i].transactionId === transactionId) return outcomes[i];
        }
        return null;
    }

    function triggerDownload(content, filename, mimeType) {
        var blob = new Blob([content], { type: mimeType });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ================================================
    // STORAGE HELPERS
    // ================================================
    function _loadJSON(key) {
        try {
            var raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            console.error('ClinicalEngine: Error loading ' + key, e);
            return null;
        }
    }

    function _saveJSON(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('ClinicalEngine: Error saving ' + key, e);
        }
    }

    // ================================================
    // NEW QUERY METHODS FOR MASTER DATASET
    // ================================================
    function getSuspiciousHealthIssues(flagType) {
        if (!data || !data.suspiciousHealthIssues) return [];
        return data.suspiciousHealthIssues.filter(function (s) {
            return !flagType || s.flagType === flagType;
        });
    }

    function getSideEffectsForMedicine(medicineId) {
        var se = _getSideEffects(medicineId);
        if (!se) return [];
        var results = [];
        if (se.effects) {
            se.effects.forEach(function (eff) {
                results.push({
                    effect: eff,
                    severity: (se.severity_map && se.severity_map[eff]) || 'mild'
                });
            });
        }
        return results;
    }

    function _matchTypeToDosageKey(type) {
        if (!type) return null;
        var t = type.toLowerCase();
        if (t.indexOf('tablet') !== -1) return 'Tablet';
        if (t.indexOf('capsule') !== -1) return 'Capsule';
        if (t.indexOf('syrup') !== -1) return 'Syrup';
        if (t.indexOf('inhaler') !== -1) return 'Inhaler';
        if (t.indexOf('cream') !== -1 || t.indexOf('gel') !== -1 || t.indexOf('ointment') !== -1) return 'Cream_Gel_Ointment';
        if (t.indexOf('eye') !== -1) return 'Eye_Drops';
        if (t.indexOf('ear') !== -1) return 'Ear_Drops';
        if (t.indexOf('nasal') !== -1) return 'Nasal_Spray_Drops';
        if (t.indexOf('injection') !== -1) return 'Injection';
        if (t.indexOf('powder') !== -1 || t.indexOf('sachet') !== -1) return 'Powder_Sachet';
        if (t.indexOf('lotion') !== -1 || t.indexOf('shampoo') !== -1 || t.indexOf('solution') !== -1) return 'Lotion_Solution_Shampoo';
        if (t.indexOf('mouthwash') !== -1) return 'Mouthwash';
        return null;
    }

    function _matchTypeToUsageKey(type) {
        if (!type) return null;
        var t = type.toLowerCase();
        if (t.indexOf('tablet') !== -1 || t.indexOf('capsule') !== -1) return 'Tablet_Capsule';
        if (t.indexOf('syrup') !== -1) return 'Syrup';
        if (t.indexOf('inhaler') !== -1) return 'Inhaler';
        if (t.indexOf('cream') !== -1 || t.indexOf('gel') !== -1 || t.indexOf('ointment') !== -1) return 'Cream_Gel_Ointment';
        if (t.indexOf('eye') !== -1) return 'Eye_Drops';
        if (t.indexOf('ear') !== -1) return 'Ear_Drops';
        if (t.indexOf('nasal') !== -1) return 'Nasal_Spray_Drops';
        if (t.indexOf('injection') !== -1) return 'Injection';
        if (t.indexOf('powder') !== -1 || t.indexOf('sachet') !== -1) return 'Powder_Sachet_Oral_Liquid';
        if (t.indexOf('lotion') !== -1 || t.indexOf('shampoo') !== -1 || t.indexOf('solution') !== -1) return 'Lotion_Shampoo';
        if (t.indexOf('mouthwash') !== -1) return 'Mouthwash';
        return null;
    }

    function getDosagesByType(medicineType) {
        if (!data || !data.dosageStrengthsByType) return [];
        var targetKey = _matchTypeToDosageKey(medicineType);
        if (targetKey && data.dosageStrengthsByType[targetKey]) {
            return data.dosageStrengthsByType[targetKey].map(function(item) { return item.label; });
        }
        return [];
    }

    function getUsageGuidelinesByType(medicineType) {
        if (!data || !data.usageGuidelinesByType) return [];
        var targetKey = _matchTypeToUsageKey(medicineType);
        if (targetKey && data.usageGuidelinesByType[targetKey]) {
            return data.usageGuidelinesByType[targetKey];
        }
        return [];
    }

    // ================================================
    // PUBLIC API
    // ================================================
    return {
        init: init,
        getDiseases: getDiseases,
        getDiseaseById: getDiseaseById,
        getDiseaseCategories: getDiseaseCategories,
        getDiseasesByCategory: getDiseasesByCategory,
        getSymptomsForDisease: getSymptomsForDisease,
        getSymptomById: getSymptomById,
        getAllSymptoms: getAllSymptoms,
        getRecommendations: getRecommendations,
        getMedicineDetails: getMedicineDetails,
        recordTransaction: recordTransaction,
        recordOutcome: recordOutcome,
        getPendingFollowups: getPendingFollowups,
        getCompletedOutcomes: getCompletedOutcomes,
        getOutcomeStats: getOutcomeStats,
        getTransactionCount: getTransactionCount,
        detectBatchAnomalies: detectBatchAnomalies,
        generateCrossPharmacyAlerts: generateCrossPharmacyAlerts,
        exportTransactionData: exportTransactionData,
        triggerDownload: triggerDownload,
        getSuspiciousHealthIssues: getSuspiciousHealthIssues,
        getSideEffectsForMedicine: getSideEffectsForMedicine,
        getDosagesByType: getDosagesByType,
        getUsageGuidelinesByType: getUsageGuidelinesByType
    };

})();
