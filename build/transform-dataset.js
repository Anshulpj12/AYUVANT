const fs = require('fs');
const path = require('path');

const srcPath = 'c:/Users/anshul prajapati/OneDrive/Desktop/AYUVANT/pharmacy_master_dataset.json';
const destClinicalPath = 'c:/Users/anshul prajapati/OneDrive/Desktop/AYUVANT/part3/data/clinical-intelligence.js';
const destMedicinesPath = 'c:/Users/anshul prajapati/OneDrive/Desktop/AYUVANT/part3/data/medicines.js';

// Read JSON
const raw = fs.readFileSync(srcPath, 'utf8');
const data = JSON.parse(raw);

// 1. Process diseases
// Map symptoms and medicines to diseases for easy lookup in old structure
// In the dataset:
// symptom.linked_diseases contains disease IDs
// medicine.linked_diseases contains disease IDs
const diseases = data.diseases.map(d => {
    // Find all symptoms that link to this disease
    const commonSymptomIds = data.symptoms
        .filter(s => s.linked_diseases && s.linked_diseases.includes(d.id))
        .map(s => s.id);
        
    // Find all medicines that link to this disease
    const commonMedicineIds = data.medicines
        .filter(m => m.linked_diseases && m.linked_diseases.includes(d.id))
        .map(m => m.id);

    return {
        id: d.id,
        name: d.name,
        category: d.category,
        icd_code: d.icd_code,
        description: d.name, // Placeholder description matching old schema
        commonSymptomIds,
        commonMedicineIds
    };
});

// 2. Process symptoms
const symptoms = data.symptoms.map(s => {
    return {
        id: s.id,
        name: s.name,
        category: s.category || "General",
        severity: s.severity,
        relatedDiseaseIds: s.linked_diseases || []
    };
});

// 3. Process diseaseMedicineMap
// Invert: for each medicine, for each of its linked_diseases, create a mapping
const diseaseMedicineMap = [];
data.medicines.forEach(med => {
    const medSalts = data.salt_compositions
        .filter(sc => sc.linked_medicines && sc.linked_medicines.includes(med.id))
        .map(sc => sc.salt_name);

    // Find dosage strengths for this medicine
    const medDosages = [];
    for (const type in data.dosage_strengths) {
        if (type === 'note') continue;
        const list = data.dosage_strengths[type];
        for (const ds of list) {
            if (ds.medicine_ids && ds.medicine_ids.includes(med.id)) {
                medDosages.push(ds.label);
            }
        }
    }

    // Determine usage guidelines by type
    // Match medicine type to usage key
    let usageKey = null;
    const medType = (med.type || "").toLowerCase();
    if (medType.includes("tablet") || medType.includes("capsule")) {
        usageKey = "Tablet_Capsule";
    } else if (medType.includes("syrup")) {
        usageKey = "Syrup";
    } else if (medType.includes("inhaler")) {
        usageKey = "Inhaler";
    } else if (medType.includes("cream") || medType.includes("gel") || medType.includes("ointment")) {
        usageKey = "Cream_Gel_Ointment";
    } else if (medType.includes("eye")) {
        usageKey = "Eye_Drops";
    } else if (medType.includes("ear")) {
        usageKey = "Ear_Drops";
    } else if (medType.includes("nasal")) {
        usageKey = "Nasal_Spray_Drops";
    } else if (medType.includes("injection")) {
        usageKey = "Injection";
    } else if (medType.includes("powder") || medType.includes("sachet")) {
        usageKey = "Powder_Sachet_Oral_Liquid";
    } else if (medType.includes("lotion") || medType.includes("shampoo") || medType.includes("solution")) {
        usageKey = "Lotion_Shampoo";
    } else if (medType.includes("mouthwash")) {
        usageKey = "Mouthwash";
    }

    const guidelinesList = data.usage_guidelines[usageKey] || [];
    // Join guidelines into a single string for compatibility
    const usageGuidelinesStr = guidelinesList.join("; ");

    // Link diseases
    const linked = med.linked_diseases || [];
    linked.forEach((diseaseId, idx) => {
        // Priority based on index in linked_diseases
        const priority = idx + 1;
        diseaseMedicineMap.push({
            diseaseId,
            medicineId: med.id,
            saltCompositions: medSalts,
            dosageStrengths: medDosages,
            usageGuidelines: usageGuidelinesStr,
            priority
        });
    });
});

// 4. Process sideEffects
// Invert: for each medicine, collect side effects
const sideEffects = data.medicines.map(med => {
    const medSideEffects = data.side_effects.filter(se => 
        se.commonly_linked_medicines && se.commonly_linked_medicines.includes(med.id)
    );

    const effects = medSideEffects.map(se => se.effect);
    const severity_map = {};
    medSideEffects.forEach(se => {
        severity_map[se.effect] = se.severity;
    });

    return {
        medicineId: med.id,
        effects,
        severity_map,
        contraindications: [] // Empty list as placeholder to keep compatible
    };
});

// 5. Process suspiciousHealthIssues
const suspiciousHealthIssues = data.suspicious_health_issues.map(shi => {
    return {
        id: shi.id,
        issue: shi.issue,
        flagType: shi.flag_type,
        action: shi.action
    };
});

// 6. Extract unique categories
const diseaseCategories = Array.from(new Set(diseases.map(d => d.category))).filter(Boolean);
const symptomCategories = Array.from(new Set(symptoms.map(s => s.category))).filter(Boolean);

// Write clinical-intelligence.js
const clinicalDataContent = `/* ============================================
   AYUVANT — Part 3: Clinical Intelligence Dataset
   Auto-generated from Pharmacy Master Dataset
   ============================================ */

window.AYUVANT_CLINICAL_DATA = {
    diseases: ${JSON.stringify(diseases, null, 4)},
    symptoms: ${JSON.stringify(symptoms, null, 4)},
    diseaseMedicineMap: ${JSON.stringify(diseaseMedicineMap, null, 4)},
    sideEffects: ${JSON.stringify(sideEffects, null, 4)},
    suspiciousHealthIssues: ${JSON.stringify(suspiciousHealthIssues, null, 4)},
    diseaseCategories: ${JSON.stringify(diseaseCategories, null, 4)},
    symptomCategories: ${JSON.stringify(symptomCategories, null, 4)},
    dosageStrengthsByType: ${JSON.stringify(data.dosage_strengths, null, 4)},
    usageGuidelinesByType: ${JSON.stringify(data.usage_guidelines, null, 4)}
};
`;

// 7. Process medicines.js
const medicines = data.medicines.map(med => {
    const medSalts = data.salt_compositions.filter(sc => 
        sc.linked_medicines && sc.linked_medicines.includes(med.id)
    );

    // Parse activeSalts
    const activeSalts = medSalts.map(salt => {
        // Find matching dosage strengths for this medicine
        const medDosages = [];
        for (const type in data.dosage_strengths) {
            if (type === 'note') continue;
            const list = data.dosage_strengths[type];
            for (const ds of list) {
                if (ds.medicine_ids && ds.medicine_ids.includes(med.id)) {
                    medDosages.push(ds.label);
                }
            }
        }

        // Try to match salt name in dosage label to extract strength
        let strength = "";
        let unit = "mg";
        for (const label of medDosages) {
            const escapedSalt = salt.salt_name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(escapedSalt + '\\s*(\\d+(?:\\.\\d+)?)\\s*(mg|mcg|g|ml|%|IU|mcg/ml)?', 'i');
            const match = label.match(regex);
            if (match) {
                strength = match[1];
                unit = match[2] || "mg";
                break;
            }
        }
        
        // Fallback
        if (!strength && medDosages.length > 0) {
            const match = medDosages[0].match(/(\d+(?:\.\d+)?)\s*(mg|mcg|g|ml|%|IU)?/);
            if (match) {
                strength = match[1];
                unit = match[2] || "mg";
            }
        }

        return {
            name: salt.salt_name,
            strength: strength || "500", // Default fallback strength if not found
            unit: unit || "mg"
        };
    });

    const genericName = activeSalts.map(s => s.name).join(" + ") || med.name;

    // Generate tags: linked disease names
    const linkedDiseases = med.linked_diseases || [];
    const diseaseNames = linkedDiseases.map(did => {
        const found = data.diseases.find(d => d.id === did);
        return found ? found.name.toLowerCase() : null;
    }).filter(Boolean);

    // Find alternatives: medicines that share at least one salt composition
    const alternativeIds = [];
    data.medicines.forEach(m => {
        if (m.id === med.id) return;
        // Check if they share any salt
        const mSalts = data.salt_compositions.filter(sc => 
            sc.linked_medicines && sc.linked_medicines.includes(m.id)
        ).map(sc => sc.id);
        const thisSalts = medSalts.map(sc => sc.id);
        const share = mSalts.some(id => thisSalts.includes(id));
        if (share) {
            alternativeIds.push(m.id);
        }
    });

    return {
        id: med.id,
        name: med.name,
        genericName,
        activeSalts,
        dosageForm: med.type,
        category: med.category,
        subCategory: med.otc ? "OTC" : "Rx",
        manufacturer: "Various",
        mrp: 0.00,
        packSize: "10 units",
        therapeuticClass: med.category,
        schedule: med.otc ? "OTC" : "Rx",
        approvedAlternatives: alternativeIds,
        tags: diseaseNames
    };
});

// Write medicines.js
const medicinesContent = `/* ============================================
   AYUVANT — Part 3: Medicine Master Database
   Auto-generated from Pharmacy Master Dataset
   ============================================ */

window.AYUVANT_MEDICINES = ${JSON.stringify(medicines, null, 4)};
`;

fs.writeFileSync(destClinicalPath, clinicalDataContent, 'utf8');
console.log('Successfully wrote clinical-intelligence.js');

fs.writeFileSync(destMedicinesPath, medicinesContent, 'utf8');
console.log('Successfully wrote medicines.js');
