/* ============================================
   AYUVANT — Part 3: Medicine Master Database
   20 Common Indian Medicines with Real Salt Compositions
   ============================================ */

window.AYUVANT_MEDICINES = [
    {
        id: "MED-001",
        name: "Crocin 650",
        genericName: "Paracetamol",
        activeSalts: [
            { name: "Paracetamol", strength: "650", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antipyretic",
        subCategory: "OTC",
        manufacturer: "GSK",
        mrp: 30.00,
        packSize: "15 tablets",
        therapeuticClass: "Analgesic/Antipyretic",
        schedule: "OTC",
        approvedAlternatives: ["MED-002", "MED-003"],
        tags: ["fever", "headache", "body pain", "cold", "flu"]
    },
    {
        id: "MED-002",
        name: "Dolo 650",
        genericName: "Paracetamol",
        activeSalts: [
            { name: "Paracetamol", strength: "650", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antipyretic",
        subCategory: "OTC",
        manufacturer: "Micro Labs",
        mrp: 30.00,
        packSize: "15 tablets",
        therapeuticClass: "Analgesic/Antipyretic",
        schedule: "OTC",
        approvedAlternatives: ["MED-001", "MED-003"],
        tags: ["fever", "headache", "body pain", "cold", "flu"]
    },
    {
        id: "MED-003",
        name: "Calpol 500",
        genericName: "Paracetamol",
        activeSalts: [
            { name: "Paracetamol", strength: "500", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antipyretic",
        subCategory: "OTC",
        manufacturer: "GSK",
        mrp: 18.00,
        packSize: "15 tablets",
        therapeuticClass: "Analgesic/Antipyretic",
        schedule: "OTC",
        approvedAlternatives: ["MED-001", "MED-002"],
        tags: ["fever", "headache", "mild pain", "child-safe"]
    },
    {
        id: "MED-004",
        name: "Combiflam",
        genericName: "Ibuprofen + Paracetamol",
        activeSalts: [
            { name: "Ibuprofen", strength: "400", unit: "mg" },
            { name: "Paracetamol", strength: "325", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Analgesic",
        subCategory: "OTC",
        manufacturer: "Sanofi",
        mrp: 42.00,
        packSize: "20 tablets",
        therapeuticClass: "NSAID/Analgesic",
        schedule: "OTC",
        approvedAlternatives: ["MED-005"],
        tags: ["pain", "inflammation", "headache", "toothache", "body pain", "fever"]
    },
    {
        id: "MED-005",
        name: "Sumo",
        genericName: "Nimesulide + Paracetamol",
        activeSalts: [
            { name: "Nimesulide", strength: "100", unit: "mg" },
            { name: "Paracetamol", strength: "325", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Analgesic",
        subCategory: "Rx",
        manufacturer: "Alkem",
        mrp: 55.00,
        packSize: "10 tablets",
        therapeuticClass: "NSAID/Analgesic",
        schedule: "H",
        approvedAlternatives: ["MED-004"],
        tags: ["pain", "inflammation", "arthritis", "dental pain", "fever"]
    },
    {
        id: "MED-006",
        name: "Azithromycin 500",
        genericName: "Azithromycin",
        activeSalts: [
            { name: "Azithromycin", strength: "500", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antibiotic",
        subCategory: "Rx",
        manufacturer: "Various",
        mrp: 95.00,
        packSize: "3 tablets",
        therapeuticClass: "Macrolide Antibiotic",
        schedule: "H",
        approvedAlternatives: ["MED-007"],
        tags: ["infection", "respiratory", "throat", "pneumonia", "skin infection"]
    },
    {
        id: "MED-007",
        name: "Azee 500",
        genericName: "Azithromycin",
        activeSalts: [
            { name: "Azithromycin", strength: "500", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antibiotic",
        subCategory: "Rx",
        manufacturer: "Cipla",
        mrp: 105.00,
        packSize: "3 tablets",
        therapeuticClass: "Macrolide Antibiotic",
        schedule: "H",
        approvedAlternatives: ["MED-006"],
        tags: ["infection", "respiratory", "throat", "pneumonia", "skin infection"]
    },
    {
        id: "MED-008",
        name: "Amoxicillin 500",
        genericName: "Amoxicillin",
        activeSalts: [
            { name: "Amoxicillin", strength: "500", unit: "mg" }
        ],
        dosageForm: "Capsule",
        category: "Antibiotic",
        subCategory: "Rx",
        manufacturer: "Various",
        mrp: 75.00,
        packSize: "10 capsules",
        therapeuticClass: "Penicillin Antibiotic",
        schedule: "H",
        approvedAlternatives: ["MED-009"],
        tags: ["infection", "ear", "throat", "urinary", "dental", "respiratory"]
    },
    {
        id: "MED-009",
        name: "Augmentin 625",
        genericName: "Amoxicillin + Clavulanic Acid",
        activeSalts: [
            { name: "Amoxicillin", strength: "500", unit: "mg" },
            { name: "Clavulanic Acid", strength: "125", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antibiotic",
        subCategory: "Rx",
        manufacturer: "GSK",
        mrp: 230.00,
        packSize: "10 tablets",
        therapeuticClass: "Penicillin + Beta-Lactamase Inhibitor",
        schedule: "H",
        approvedAlternatives: ["MED-008"],
        tags: ["infection", "resistant bacteria", "respiratory", "sinusitis", "UTI"]
    },
    {
        id: "MED-010",
        name: "Metformin 500",
        genericName: "Metformin",
        activeSalts: [
            { name: "Metformin Hydrochloride", strength: "500", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antidiabetic",
        subCategory: "Rx",
        manufacturer: "Various",
        mrp: 25.00,
        packSize: "20 tablets",
        therapeuticClass: "Biguanide Antidiabetic",
        schedule: "H",
        approvedAlternatives: ["MED-011"],
        tags: ["diabetes", "blood sugar", "type 2 diabetes", "chronic"]
    },
    {
        id: "MED-011",
        name: "Glycomet 500",
        genericName: "Metformin",
        activeSalts: [
            { name: "Metformin Hydrochloride", strength: "500", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antidiabetic",
        subCategory: "Rx",
        manufacturer: "USV",
        mrp: 30.00,
        packSize: "20 tablets",
        therapeuticClass: "Biguanide Antidiabetic",
        schedule: "H",
        approvedAlternatives: ["MED-010"],
        tags: ["diabetes", "blood sugar", "type 2 diabetes", "chronic"]
    },
    {
        id: "MED-012",
        name: "Amlodipine 5",
        genericName: "Amlodipine",
        activeSalts: [
            { name: "Amlodipine Besylate", strength: "5", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antihypertensive",
        subCategory: "Rx",
        manufacturer: "Various",
        mrp: 35.00,
        packSize: "14 tablets",
        therapeuticClass: "Calcium Channel Blocker",
        schedule: "H",
        approvedAlternatives: [],
        tags: ["blood pressure", "hypertension", "heart", "chronic"]
    },
    {
        id: "MED-013",
        name: "Pantoprazole 40",
        genericName: "Pantoprazole",
        activeSalts: [
            { name: "Pantoprazole Sodium Sesquihydrate", strength: "40", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antacid",
        subCategory: "OTC",
        manufacturer: "Various",
        mrp: 65.00,
        packSize: "15 tablets",
        therapeuticClass: "Proton Pump Inhibitor",
        schedule: "H",
        approvedAlternatives: ["MED-014"],
        tags: ["acidity", "GERD", "ulcer", "gastric", "heartburn"]
    },
    {
        id: "MED-014",
        name: "Pan 40",
        genericName: "Pantoprazole",
        activeSalts: [
            { name: "Pantoprazole Sodium Sesquihydrate", strength: "40", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antacid",
        subCategory: "OTC",
        manufacturer: "Alkem",
        mrp: 70.00,
        packSize: "15 tablets",
        therapeuticClass: "Proton Pump Inhibitor",
        schedule: "H",
        approvedAlternatives: ["MED-013"],
        tags: ["acidity", "GERD", "ulcer", "gastric", "heartburn"]
    },
    {
        id: "MED-015",
        name: "Cetirizine 10",
        genericName: "Cetirizine",
        activeSalts: [
            { name: "Cetirizine Hydrochloride", strength: "10", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antihistamine",
        subCategory: "OTC",
        manufacturer: "Various",
        mrp: 20.00,
        packSize: "10 tablets",
        therapeuticClass: "Second-Generation Antihistamine",
        schedule: "OTC",
        approvedAlternatives: ["MED-016"],
        tags: ["allergy", "cold", "sneezing", "runny nose", "urticaria"]
    },
    {
        id: "MED-016",
        name: "Allegra 120",
        genericName: "Fexofenadine",
        activeSalts: [
            { name: "Fexofenadine Hydrochloride", strength: "120", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Antihistamine",
        subCategory: "OTC",
        manufacturer: "Sanofi",
        mrp: 180.00,
        packSize: "10 tablets",
        therapeuticClass: "Second-Generation Antihistamine",
        schedule: "OTC",
        approvedAlternatives: ["MED-015"],
        tags: ["allergy", "seasonal allergy", "hay fever", "urticaria", "non-drowsy"]
    },
    {
        id: "MED-017",
        name: "Ecosprin 75",
        genericName: "Aspirin",
        activeSalts: [
            { name: "Aspirin", strength: "75", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Cardiac",
        subCategory: "Rx",
        manufacturer: "USV",
        mrp: 15.00,
        packSize: "14 tablets",
        therapeuticClass: "Antiplatelet Agent",
        schedule: "H",
        approvedAlternatives: [],
        tags: ["heart", "blood thinner", "cardiac", "stroke prevention", "chronic"]
    },
    {
        id: "MED-018",
        name: "Atorvastatin 10",
        genericName: "Atorvastatin",
        activeSalts: [
            { name: "Atorvastatin Calcium", strength: "10", unit: "mg" }
        ],
        dosageForm: "Tablet",
        category: "Cardiac",
        subCategory: "Rx",
        manufacturer: "Various",
        mrp: 80.00,
        packSize: "10 tablets",
        therapeuticClass: "Statin / HMG-CoA Reductase Inhibitor",
        schedule: "H",
        approvedAlternatives: [],
        tags: ["cholesterol", "lipid", "heart", "cardiac", "chronic"]
    },
    {
        id: "MED-019",
        name: "Shelcal 500",
        genericName: "Calcium + Vitamin D3",
        activeSalts: [
            { name: "Calcium Carbonate", strength: "500", unit: "mg" },
            { name: "Vitamin D3 (Cholecalciferol)", strength: "250", unit: "IU" }
        ],
        dosageForm: "Tablet",
        category: "Supplement",
        subCategory: "OTC",
        manufacturer: "Torrent",
        mrp: 120.00,
        packSize: "15 tablets",
        therapeuticClass: "Calcium & Vitamin Supplement",
        schedule: "OTC",
        approvedAlternatives: [],
        tags: ["calcium", "bones", "vitamin D", "osteoporosis", "supplement"]
    },
    {
        id: "MED-020",
        name: "Becosules",
        genericName: "B-Complex + Vitamin C",
        activeSalts: [
            { name: "Thiamine Mononitrate (B1)", strength: "10", unit: "mg" },
            { name: "Riboflavin (B2)", strength: "10", unit: "mg" },
            { name: "Pyridoxine HCl (B6)", strength: "3", unit: "mg" },
            { name: "Cyanocobalamin (B12)", strength: "15", unit: "mcg" },
            { name: "Niacinamide (B3)", strength: "100", unit: "mg" },
            { name: "Calcium Pantothenate (B5)", strength: "50", unit: "mg" },
            { name: "Folic Acid", strength: "1.5", unit: "mg" },
            { name: "Biotin", strength: "100", unit: "mcg" },
            { name: "Ascorbic Acid (Vitamin C)", strength: "150", unit: "mg" }
        ],
        dosageForm: "Capsule",
        category: "Supplement",
        subCategory: "OTC",
        manufacturer: "Pfizer",
        mrp: 35.00,
        packSize: "20 capsules",
        therapeuticClass: "Multivitamin Supplement",
        schedule: "OTC",
        approvedAlternatives: [],
        tags: ["vitamin", "B-complex", "energy", "immunity", "supplement", "fatigue"]
    }
];
