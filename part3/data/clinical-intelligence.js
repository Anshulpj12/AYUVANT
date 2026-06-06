/* ============================================
   AYUVANT — Part 3: Clinical Intelligence Dataset
   Auto-generated from Pharmacy Master Dataset
   ============================================ */

window.AYUVANT_CLINICAL_DATA = {
    diseases: [
    {
        "id": "D001",
        "name": "Common Cold",
        "category": "Respiratory",
        "icd_code": "J00",
        "description": "Common Cold",
        "commonSymptomIds": [
            "S001",
            "S002",
            "S003",
            "S004",
            "S006",
            "S007",
            "S048",
            "S084",
            "S120"
        ],
        "commonMedicineIds": [
            "M001",
            "M009",
            "M010",
            "M011",
            "M073",
            "M074",
            "M103",
            "M111"
        ]
    },
    {
        "id": "D002",
        "name": "Influenza",
        "category": "Respiratory",
        "icd_code": "J11",
        "description": "Influenza",
        "commonSymptomIds": [
            "S001",
            "S002",
            "S007",
            "S008",
            "S009",
            "S025",
            "S055",
            "S057"
        ],
        "commonMedicineIds": [
            "M001"
        ]
    },
    {
        "id": "D003",
        "name": "Fever (Viral)",
        "category": "Systemic",
        "icd_code": "R50.9",
        "description": "Fever (Viral)",
        "commonSymptomIds": [
            "S001",
            "S007",
            "S008",
            "S017",
            "S057"
        ],
        "commonMedicineIds": [
            "M001"
        ]
    },
    {
        "id": "D004",
        "name": "Typhoid Fever",
        "category": "Bacterial Infection",
        "icd_code": "A01.0",
        "description": "Typhoid Fever",
        "commonSymptomIds": [
            "S001",
            "S017",
            "S055",
            "S056",
            "S057",
            "S099",
            "S108"
        ],
        "commonMedicineIds": [
            "M029",
            "M031"
        ]
    },
    {
        "id": "D005",
        "name": "Dengue Fever",
        "category": "Viral Infection",
        "icd_code": "A90",
        "description": "Dengue Fever",
        "commonSymptomIds": [
            "S001",
            "S008",
            "S022",
            "S098",
            "S099",
            "S108"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D006",
        "name": "Malaria",
        "category": "Parasitic Infection",
        "icd_code": "B54",
        "description": "Malaria",
        "commonSymptomIds": [
            "S001",
            "S008",
            "S022",
            "S057",
            "S099",
            "S109"
        ],
        "commonMedicineIds": [
            "M032",
            "M034",
            "M035"
        ]
    },
    {
        "id": "D007",
        "name": "Bronchitis (Acute)",
        "category": "Respiratory",
        "icd_code": "J20.9",
        "description": "Bronchitis (Acute)",
        "commonSymptomIds": [
            "S004",
            "S005",
            "S082"
        ],
        "commonMedicineIds": [
            "M010",
            "M011",
            "M012",
            "M013",
            "M015",
            "M111"
        ]
    },
    {
        "id": "D008",
        "name": "Asthma",
        "category": "Respiratory",
        "icd_code": "J45.9",
        "description": "Asthma",
        "commonSymptomIds": [
            "S004",
            "S027",
            "S082"
        ],
        "commonMedicineIds": [
            "M013",
            "M014",
            "M015",
            "M064"
        ]
    },
    {
        "id": "D009",
        "name": "Pneumonia",
        "category": "Respiratory",
        "icd_code": "J18.9",
        "description": "Pneumonia",
        "commonSymptomIds": [
            "S005",
            "S027",
            "S099"
        ],
        "commonMedicineIds": [
            "M011",
            "M012",
            "M028",
            "M029",
            "M031",
            "M033",
            "M050"
        ]
    },
    {
        "id": "D010",
        "name": "Sinusitis",
        "category": "Respiratory",
        "icd_code": "J32.9",
        "description": "Sinusitis",
        "commonSymptomIds": [
            "S002",
            "S003",
            "S084",
            "S085",
            "S086",
            "S120"
        ],
        "commonMedicineIds": [
            "M012",
            "M073",
            "M074",
            "M075"
        ]
    },
    {
        "id": "D011",
        "name": "Allergic Rhinitis",
        "category": "Allergy",
        "icd_code": "J30.1",
        "description": "Allergic Rhinitis",
        "commonSymptomIds": [
            "S002",
            "S003",
            "S034",
            "S048",
            "S049",
            "S084"
        ],
        "commonMedicineIds": [
            "M006",
            "M007",
            "M008",
            "M009",
            "M014",
            "M067",
            "M073",
            "M075"
        ]
    },
    {
        "id": "D012",
        "name": "Urticaria (Hives)",
        "category": "Allergy",
        "icd_code": "L50.0",
        "description": "Urticaria (Hives)",
        "commonSymptomIds": [
            "S019",
            "S020",
            "S021"
        ],
        "commonMedicineIds": [
            "M006",
            "M007",
            "M008",
            "M009",
            "M041",
            "M064"
        ]
    },
    {
        "id": "D013",
        "name": "Eczema / Dermatitis",
        "category": "Skin",
        "icd_code": "L20.9",
        "description": "Eczema / Dermatitis",
        "commonSymptomIds": [
            "S019",
            "S020",
            "S050"
        ],
        "commonMedicineIds": [
            "M006",
            "M039",
            "M040",
            "M064",
            "M085"
        ]
    },
    {
        "id": "D014",
        "name": "Acne Vulgaris",
        "category": "Skin",
        "icd_code": "L70.0",
        "description": "Acne Vulgaris",
        "commonSymptomIds": [
            "S051"
        ],
        "commonMedicineIds": [
            "M032",
            "M082",
            "M114"
        ]
    },
    {
        "id": "D015",
        "name": "Fungal Skin Infection",
        "category": "Skin",
        "icd_code": "B35.9",
        "description": "Fungal Skin Infection",
        "commonSymptomIds": [
            "S019",
            "S020",
            "S051"
        ],
        "commonMedicineIds": [
            "M036",
            "M037",
            "M038",
            "M089"
        ]
    },
    {
        "id": "D016",
        "name": "Scabies",
        "category": "Skin",
        "icd_code": "B86",
        "description": "Scabies",
        "commonSymptomIds": [
            "S019",
            "S020",
            "S094"
        ],
        "commonMedicineIds": [
            "M042",
            "M086"
        ]
    },
    {
        "id": "D017",
        "name": "Chickenpox",
        "category": "Viral Infection",
        "icd_code": "B01.9",
        "description": "Chickenpox",
        "commonSymptomIds": [
            "S001",
            "S019",
            "S052",
            "S055",
            "S098"
        ],
        "commonMedicineIds": [
            "M041",
            "M043"
        ]
    },
    {
        "id": "D018",
        "name": "Measles",
        "category": "Viral Infection",
        "icd_code": "B05.9",
        "description": "Measles",
        "commonSymptomIds": [
            "S098"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D019",
        "name": "Acid Reflux / GERD",
        "category": "Gastrointestinal",
        "icd_code": "K21.0",
        "description": "Acid Reflux / GERD",
        "commonSymptomIds": [
            "S010",
            "S014",
            "S015",
            "S016",
            "S026",
            "S093",
            "S114"
        ],
        "commonMedicineIds": [
            "M016",
            "M017",
            "M018",
            "M019",
            "M020",
            "M096",
            "M097"
        ]
    },
    {
        "id": "D020",
        "name": "Peptic Ulcer",
        "category": "Gastrointestinal",
        "icd_code": "K27.9",
        "description": "Peptic Ulcer",
        "commonSymptomIds": [
            "S014",
            "S015",
            "S086"
        ],
        "commonMedicineIds": [
            "M016",
            "M017",
            "M018",
            "M097"
        ]
    },
    {
        "id": "D021",
        "name": "Gastritis",
        "category": "Gastrointestinal",
        "icd_code": "K29.7",
        "description": "Gastritis",
        "commonSymptomIds": [
            "S014",
            "S015",
            "S016",
            "S017",
            "S114"
        ],
        "commonMedicineIds": [
            "M016",
            "M017",
            "M018",
            "M019",
            "M096"
        ]
    },
    {
        "id": "D022",
        "name": "Irritable Bowel Syndrome",
        "category": "Gastrointestinal",
        "icd_code": "K58.9",
        "description": "Irritable Bowel Syndrome",
        "commonSymptomIds": [
            "S012",
            "S013",
            "S014",
            "S016",
            "S094"
        ],
        "commonMedicineIds": [
            "M023",
            "M027",
            "M096",
            "M102"
        ]
    },
    {
        "id": "D023",
        "name": "Diarrhea (Acute)",
        "category": "Gastrointestinal",
        "icd_code": "K59.1",
        "description": "Diarrhea (Acute)",
        "commonSymptomIds": [
            "S012",
            "S080"
        ],
        "commonMedicineIds": [
            "M022",
            "M023",
            "M024",
            "M030",
            "M102",
            "M103"
        ]
    },
    {
        "id": "D024",
        "name": "Constipation",
        "category": "Gastrointestinal",
        "icd_code": "K59.0",
        "description": "Constipation",
        "commonSymptomIds": [
            "S013",
            "S016"
        ],
        "commonMedicineIds": [
            "M025",
            "M026",
            "M027"
        ]
    },
    {
        "id": "D025",
        "name": "Food Poisoning",
        "category": "Gastrointestinal",
        "icd_code": "A05.9",
        "description": "Food Poisoning",
        "commonSymptomIds": [
            "S001",
            "S010",
            "S011",
            "S012",
            "S014"
        ],
        "commonMedicineIds": [
            "M021",
            "M022",
            "M024",
            "M030",
            "M102"
        ]
    },
    {
        "id": "D026",
        "name": "Nausea & Vomiting",
        "category": "Gastrointestinal",
        "icd_code": "R11",
        "description": "Nausea & Vomiting",
        "commonSymptomIds": [
            "S010",
            "S011"
        ],
        "commonMedicineIds": [
            "M019",
            "M020",
            "M021",
            "M067"
        ]
    },
    {
        "id": "D027",
        "name": "Appendicitis",
        "category": "Gastrointestinal",
        "icd_code": "K37",
        "description": "Appendicitis",
        "commonSymptomIds": [
            "S014",
            "S113"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D028",
        "name": "Hepatitis A",
        "category": "Hepatic",
        "icd_code": "B15.9",
        "description": "Hepatitis A",
        "commonSymptomIds": [
            "S001",
            "S017",
            "S018",
            "S095",
            "S108",
            "S115"
        ],
        "commonMedicineIds": [
            "M098",
            "M099"
        ]
    },
    {
        "id": "D029",
        "name": "Jaundice",
        "category": "Hepatic",
        "icd_code": "R17",
        "description": "Jaundice",
        "commonSymptomIds": [
            "S017",
            "S018",
            "S020",
            "S074",
            "S095"
        ],
        "commonMedicineIds": [
            "M099"
        ]
    },
    {
        "id": "D030",
        "name": "Urinary Tract Infection (UTI)",
        "category": "Urological",
        "icd_code": "N39.0",
        "description": "Urinary Tract Infection (UTI)",
        "commonSymptomIds": [
            "S023",
            "S038",
            "S039",
            "S040",
            "S095",
            "S106",
            "S113"
        ],
        "commonMedicineIds": [
            "M024",
            "M028",
            "M029",
            "M030",
            "M031",
            "M033",
            "M090"
        ]
    },
    {
        "id": "D031",
        "name": "Kidney Stones",
        "category": "Urological",
        "icd_code": "N20.0",
        "description": "Kidney Stones",
        "commonSymptomIds": [
            "S023",
            "S039",
            "S040",
            "S097"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D032",
        "name": "Prostatitis",
        "category": "Urological",
        "icd_code": "N41.9",
        "description": "Prostatitis",
        "commonSymptomIds": [
            "S038"
        ],
        "commonMedicineIds": [
            "M091"
        ]
    },
    {
        "id": "D033",
        "name": "Tension Headache",
        "category": "Neurological",
        "icd_code": "G44.2",
        "description": "Tension Headache",
        "commonSymptomIds": [
            "S007",
            "S024",
            "S085"
        ],
        "commonMedicineIds": [
            "M001",
            "M002",
            "M003",
            "M104"
        ]
    },
    {
        "id": "D034",
        "name": "Migraine",
        "category": "Neurological",
        "icd_code": "G43.9",
        "description": "Migraine",
        "commonSymptomIds": [
            "S007",
            "S085",
            "S103"
        ],
        "commonMedicineIds": [
            "M002",
            "M005",
            "M106",
            "M108",
            "M109",
            "M110"
        ]
    },
    {
        "id": "D035",
        "name": "Vertigo",
        "category": "Neurological",
        "icd_code": "H81.1",
        "description": "Vertigo",
        "commonSymptomIds": [
            "S029",
            "S037"
        ],
        "commonMedicineIds": [
            "M065",
            "M066"
        ]
    },
    {
        "id": "D036",
        "name": "Insomnia",
        "category": "Neurological/Psychiatric",
        "icd_code": "G47.0",
        "description": "Insomnia",
        "commonSymptomIds": [
            "S064",
            "S065"
        ],
        "commonMedicineIds": [
            "M068",
            "M069",
            "M070",
            "M104",
            "M106",
            "M110"
        ]
    },
    {
        "id": "D037",
        "name": "Anxiety Disorder",
        "category": "Psychiatric",
        "icd_code": "F41.9",
        "description": "Anxiety Disorder",
        "commonSymptomIds": [
            "S028",
            "S047",
            "S065",
            "S066",
            "S067",
            "S087"
        ],
        "commonMedicineIds": [
            "M058",
            "M070",
            "M071",
            "M072"
        ]
    },
    {
        "id": "D038",
        "name": "Depression",
        "category": "Psychiatric",
        "icd_code": "F32.9",
        "description": "Depression",
        "commonSymptomIds": [
            "S064",
            "S065",
            "S067",
            "S068",
            "S102"
        ],
        "commonMedicineIds": [
            "M071",
            "M072"
        ]
    },
    {
        "id": "D039",
        "name": "Hypertension",
        "category": "Cardiovascular",
        "icd_code": "I10",
        "description": "Hypertension",
        "commonSymptomIds": [
            "S007",
            "S021",
            "S026",
            "S027",
            "S028",
            "S066",
            "S087",
            "S089",
            "S092"
        ],
        "commonMedicineIds": [
            "M003",
            "M056",
            "M057",
            "M058",
            "M059",
            "M100"
        ]
    },
    {
        "id": "D040",
        "name": "Hypotension",
        "category": "Cardiovascular",
        "icd_code": "I95.9",
        "description": "Hypotension",
        "commonSymptomIds": [
            "S029",
            "S074",
            "S088"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D041",
        "name": "Palpitations",
        "category": "Cardiovascular",
        "icd_code": "R00.2",
        "description": "Palpitations",
        "commonSymptomIds": [
            "S026",
            "S028",
            "S087"
        ],
        "commonMedicineIds": [
            "M003",
            "M056",
            "M058"
        ]
    },
    {
        "id": "D042",
        "name": "Anemia (Iron Deficiency)",
        "category": "Hematological",
        "icd_code": "D50.9",
        "description": "Anemia (Iron Deficiency)",
        "commonSymptomIds": [
            "S009",
            "S029",
            "S074",
            "S076",
            "S088",
            "S091",
            "S100",
            "S119"
        ],
        "commonMedicineIds": [
            "M045",
            "M049",
            "M050",
            "M103"
        ]
    },
    {
        "id": "D043",
        "name": "Type 2 Diabetes",
        "category": "Endocrine",
        "icd_code": "E11.9",
        "description": "Type 2 Diabetes",
        "commonSymptomIds": [
            "S009",
            "S037",
            "S038",
            "S041",
            "S042",
            "S043",
            "S062",
            "S063",
            "S079",
            "S096",
            "S100",
            "S102"
        ],
        "commonMedicineIds": [
            "M051",
            "M052",
            "M053",
            "M105"
        ]
    },
    {
        "id": "D044",
        "name": "Hypothyroidism",
        "category": "Endocrine",
        "icd_code": "E03.9",
        "description": "Hypothyroidism",
        "commonSymptomIds": [
            "S009",
            "S044",
            "S045",
            "S050",
            "S056",
            "S059",
            "S064",
            "S068",
            "S075",
            "S076",
            "S090",
            "S119"
        ],
        "commonMedicineIds": [
            "M054"
        ]
    },
    {
        "id": "D045",
        "name": "Hyperthyroidism",
        "category": "Endocrine",
        "icd_code": "E05.9",
        "description": "Hyperthyroidism",
        "commonSymptomIds": [
            "S028",
            "S043",
            "S046",
            "S047",
            "S059",
            "S065",
            "S066",
            "S079",
            "S087",
            "S090"
        ],
        "commonMedicineIds": [
            "M055"
        ]
    },
    {
        "id": "D046",
        "name": "Vitamin D Deficiency",
        "category": "Nutritional",
        "icd_code": "E55.9",
        "description": "Vitamin D Deficiency",
        "commonSymptomIds": [
            "S009",
            "S025",
            "S071",
            "S119"
        ],
        "commonMedicineIds": [
            "M047",
            "M048",
            "M050"
        ]
    },
    {
        "id": "D047",
        "name": "Vitamin B12 Deficiency",
        "category": "Nutritional",
        "icd_code": "E53.8",
        "description": "Vitamin B12 Deficiency",
        "commonSymptomIds": [
            "S009",
            "S025",
            "S063",
            "S064",
            "S068",
            "S075",
            "S076"
        ],
        "commonMedicineIds": [
            "M046",
            "M050"
        ]
    },
    {
        "id": "D048",
        "name": "Obesity",
        "category": "Metabolic",
        "icd_code": "E66.9",
        "description": "Obesity",
        "commonSymptomIds": [
            "S043",
            "S044"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D049",
        "name": "Gout",
        "category": "Musculoskeletal",
        "icd_code": "M10.9",
        "description": "Gout",
        "commonSymptomIds": [
            "S022",
            "S072",
            "S073"
        ],
        "commonMedicineIds": [
            "M005",
            "M061",
            "M062"
        ]
    },
    {
        "id": "D050",
        "name": "Osteoarthritis",
        "category": "Musculoskeletal",
        "icd_code": "M19.9",
        "description": "Osteoarthritis",
        "commonSymptomIds": [
            "S021",
            "S022",
            "S072",
            "S073",
            "S104",
            "S105",
            "S116"
        ],
        "commonMedicineIds": [
            "M002",
            "M004",
            "M005",
            "M047",
            "M048",
            "M081"
        ]
    },
    {
        "id": "D051",
        "name": "Rheumatoid Arthritis",
        "category": "Musculoskeletal/Autoimmune",
        "icd_code": "M06.9",
        "description": "Rheumatoid Arthritis",
        "commonSymptomIds": [
            "S021",
            "S022",
            "S073",
            "S104"
        ],
        "commonMedicineIds": [
            "M002",
            "M004",
            "M005",
            "M034",
            "M063",
            "M064",
            "M105"
        ]
    },
    {
        "id": "D052",
        "name": "Back Pain (Lumbar)",
        "category": "Musculoskeletal",
        "icd_code": "M54.5",
        "description": "Back Pain (Lumbar)",
        "commonSymptomIds": [
            "S023",
            "S104",
            "S112"
        ],
        "commonMedicineIds": [
            "M002",
            "M004",
            "M081"
        ]
    },
    {
        "id": "D053",
        "name": "Neck Pain (Cervical)",
        "category": "Musculoskeletal",
        "icd_code": "M54.2",
        "description": "Neck Pain (Cervical)",
        "commonSymptomIds": [
            "S024",
            "S105"
        ],
        "commonMedicineIds": [
            "M004",
            "M081"
        ]
    },
    {
        "id": "D054",
        "name": "Muscle Cramps / Spasms",
        "category": "Musculoskeletal",
        "icd_code": "R25.2",
        "description": "Muscle Cramps / Spasms",
        "commonSymptomIds": [
            "S025",
            "S071"
        ],
        "commonMedicineIds": [
            "M004",
            "M047",
            "M081",
            "M104"
        ]
    },
    {
        "id": "D055",
        "name": "Fracture (Minor)",
        "category": "Orthopedic",
        "icd_code": "M84.4",
        "description": "Fracture (Minor)",
        "commonSymptomIds": [],
        "commonMedicineIds": [
            "M048"
        ]
    },
    {
        "id": "D056",
        "name": "Conjunctivitis (Pink Eye)",
        "category": "Ophthalmological",
        "icd_code": "H10.9",
        "description": "Conjunctivitis (Pink Eye)",
        "commonSymptomIds": [
            "S034",
            "S035",
            "S036",
            "S049",
            "S103"
        ],
        "commonMedicineIds": [
            "M076",
            "M077"
        ]
    },
    {
        "id": "D057",
        "name": "Dry Eyes",
        "category": "Ophthalmological",
        "icd_code": "H04.1",
        "description": "Dry Eyes",
        "commonSymptomIds": [
            "S034"
        ],
        "commonMedicineIds": [
            "M077"
        ]
    },
    {
        "id": "D058",
        "name": "Glaucoma",
        "category": "Ophthalmological",
        "icd_code": "H40.9",
        "description": "Glaucoma",
        "commonSymptomIds": [
            "S036",
            "S037"
        ],
        "commonMedicineIds": [
            "M078"
        ]
    },
    {
        "id": "D059",
        "name": "Otitis Media (Ear Infection)",
        "category": "ENT",
        "icd_code": "H66.9",
        "description": "Otitis Media (Ear Infection)",
        "commonSymptomIds": [
            "S030",
            "S031",
            "S032"
        ],
        "commonMedicineIds": [
            "M079"
        ]
    },
    {
        "id": "D060",
        "name": "Tinnitus",
        "category": "ENT",
        "icd_code": "H93.1",
        "description": "Tinnitus",
        "commonSymptomIds": [
            "S032",
            "S033"
        ],
        "commonMedicineIds": [
            "M065"
        ]
    },
    {
        "id": "D061",
        "name": "Tonsillitis",
        "category": "ENT",
        "icd_code": "J35.0",
        "description": "Tonsillitis",
        "commonSymptomIds": [
            "S001",
            "S006",
            "S055",
            "S083",
            "S093",
            "S111"
        ],
        "commonMedicineIds": [
            "M028",
            "M112"
        ]
    },
    {
        "id": "D062",
        "name": "Pharyngitis (Sore Throat)",
        "category": "ENT",
        "icd_code": "J02.9",
        "description": "Pharyngitis (Sore Throat)",
        "commonSymptomIds": [
            "S001",
            "S003",
            "S006",
            "S083",
            "S093"
        ],
        "commonMedicineIds": [
            "M028",
            "M029",
            "M112"
        ]
    },
    {
        "id": "D063",
        "name": "Laryngitis",
        "category": "ENT",
        "icd_code": "J37.0",
        "description": "Laryngitis",
        "commonSymptomIds": [
            "S006",
            "S083",
            "S110"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D064",
        "name": "Toothache / Dental Pain",
        "category": "Dental",
        "icd_code": "K08.8",
        "description": "Toothache / Dental Pain",
        "commonSymptomIds": [
            "S054",
            "S091",
            "S112"
        ],
        "commonMedicineIds": [
            "M001",
            "M002",
            "M028",
            "M113"
        ]
    },
    {
        "id": "D065",
        "name": "Mouth Ulcers / Canker Sores",
        "category": "Oral",
        "icd_code": "K12.0",
        "description": "Mouth Ulcers / Canker Sores",
        "commonSymptomIds": [
            "S053",
            "S086"
        ],
        "commonMedicineIds": [
            "M112",
            "M113"
        ]
    },
    {
        "id": "D066",
        "name": "Menstrual Cramps (Dysmenorrhea)",
        "category": "Gynecological",
        "icd_code": "N94.4",
        "description": "Menstrual Cramps (Dysmenorrhea)",
        "commonSymptomIds": [
            "S058"
        ],
        "commonMedicineIds": [
            "M001",
            "M002",
            "M004",
            "M005",
            "M092",
            "M093"
        ]
    },
    {
        "id": "D067",
        "name": "PCOS",
        "category": "Gynecological",
        "icd_code": "E28.2",
        "description": "PCOS",
        "commonSymptomIds": [
            "S044",
            "S058",
            "S059",
            "S067",
            "S075",
            "S102"
        ],
        "commonMedicineIds": [
            "M045",
            "M049",
            "M051",
            "M071",
            "M092"
        ]
    },
    {
        "id": "D068",
        "name": "Vaginal Candidiasis",
        "category": "Gynecological",
        "icd_code": "B37.3",
        "description": "Vaginal Candidiasis",
        "commonSymptomIds": [
            "S039",
            "S060",
            "S106",
            "S107"
        ],
        "commonMedicineIds": [
            "M029",
            "M036",
            "M037",
            "M094"
        ]
    },
    {
        "id": "D069",
        "name": "Menopause Symptoms",
        "category": "Gynecological",
        "icd_code": "N95.1",
        "description": "Menopause Symptoms",
        "commonSymptomIds": [
            "S056",
            "S059",
            "S061",
            "S067"
        ],
        "commonMedicineIds": [
            "M048",
            "M095"
        ]
    },
    {
        "id": "D070",
        "name": "Pregnancy Nausea",
        "category": "Obstetric",
        "icd_code": "O21.0",
        "description": "Pregnancy Nausea",
        "commonSymptomIds": [
            "S010",
            "S011"
        ],
        "commonMedicineIds": [
            "M020",
            "M021",
            "M049"
        ]
    },
    {
        "id": "D071",
        "name": "Burns (Minor/1st Degree)",
        "category": "Dermatological/Trauma",
        "icd_code": "T30.0",
        "description": "Burns (Minor/1st Degree)",
        "commonSymptomIds": [
            "S052",
            "S081"
        ],
        "commonMedicineIds": [
            "M083",
            "M084"
        ]
    },
    {
        "id": "D072",
        "name": "Wound Infection",
        "category": "Dermatological/Infection",
        "icd_code": "T79.3",
        "description": "Wound Infection",
        "commonSymptomIds": [
            "S051"
        ],
        "commonMedicineIds": [
            "M030",
            "M032",
            "M082",
            "M083",
            "M084"
        ]
    },
    {
        "id": "D073",
        "name": "Insect Bite / Sting Reaction",
        "category": "Allergy/Dermatology",
        "icd_code": "T63.4",
        "description": "Insect Bite / Sting Reaction",
        "commonSymptomIds": [
            "S019"
        ],
        "commonMedicineIds": [
            "M006",
            "M007",
            "M008",
            "M039",
            "M040",
            "M041"
        ]
    },
    {
        "id": "D074",
        "name": "Contact Dermatitis",
        "category": "Skin/Allergy",
        "icd_code": "L23.9",
        "description": "Contact Dermatitis",
        "commonSymptomIds": [
            "S019"
        ],
        "commonMedicineIds": [
            "M006",
            "M007",
            "M039",
            "M040",
            "M085"
        ]
    },
    {
        "id": "D075",
        "name": "Psoriasis",
        "category": "Skin/Autoimmune",
        "icd_code": "L40.0",
        "description": "Psoriasis",
        "commonSymptomIds": [
            "S020",
            "S050"
        ],
        "commonMedicineIds": [
            "M039",
            "M063",
            "M064",
            "M085",
            "M087"
        ]
    },
    {
        "id": "D076",
        "name": "Hemorrhoids / Piles",
        "category": "Colorectal",
        "icd_code": "K64.9",
        "description": "Hemorrhoids / Piles",
        "commonSymptomIds": [
            "S013",
            "S069",
            "S070"
        ],
        "commonMedicineIds": [
            "M025",
            "M027",
            "M115"
        ]
    },
    {
        "id": "D077",
        "name": "Fissure-in-Ano",
        "category": "Colorectal",
        "icd_code": "K60.2",
        "description": "Fissure-in-Ano",
        "commonSymptomIds": [
            "S069",
            "S070"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D078",
        "name": "Dehydration",
        "category": "Metabolic",
        "icd_code": "E86.0",
        "description": "Dehydration",
        "commonSymptomIds": [
            "S029",
            "S041",
            "S080",
            "S088",
            "S095",
            "S097"
        ],
        "commonMedicineIds": [
            "M022"
        ]
    },
    {
        "id": "D079",
        "name": "Heat Stroke / Exhaustion",
        "category": "Environmental",
        "icd_code": "T67.0",
        "description": "Heat Stroke / Exhaustion",
        "commonSymptomIds": [
            "S079",
            "S087"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D080",
        "name": "Motion Sickness",
        "category": "Neurological",
        "icd_code": "T75.3",
        "description": "Motion Sickness",
        "commonSymptomIds": [
            "S010",
            "S011",
            "S029",
            "S101"
        ],
        "commonMedicineIds": [
            "M020",
            "M021",
            "M066",
            "M067"
        ]
    },
    {
        "id": "D081",
        "name": "Whooping Cough (Pertussis)",
        "category": "Respiratory/Bacterial",
        "icd_code": "A37.9",
        "description": "Whooping Cough (Pertussis)",
        "commonSymptomIds": [
            "S005"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D082",
        "name": "Cholera",
        "category": "Gastrointestinal/Bacterial",
        "icd_code": "A00.9",
        "description": "Cholera",
        "commonSymptomIds": [
            "S011",
            "S012",
            "S080",
            "S099"
        ],
        "commonMedicineIds": [
            "M022",
            "M024",
            "M030",
            "M031"
        ]
    },
    {
        "id": "D083",
        "name": "Tuberculosis (Pulmonary)",
        "category": "Respiratory/Bacterial",
        "icd_code": "A15.0",
        "description": "Tuberculosis (Pulmonary)",
        "commonSymptomIds": [
            "S004",
            "S005",
            "S043",
            "S056",
            "S108"
        ],
        "commonMedicineIds": [
            "M033",
            "M111"
        ]
    },
    {
        "id": "D084",
        "name": "COVID-19 (Mild)",
        "category": "Viral Respiratory",
        "icd_code": "U07.1",
        "description": "COVID-19 (Mild)",
        "commonSymptomIds": [
            "S001",
            "S002",
            "S004",
            "S006",
            "S008",
            "S009",
            "S027",
            "S048",
            "S082",
            "S120"
        ],
        "commonMedicineIds": [
            "M010"
        ]
    },
    {
        "id": "D085",
        "name": "Herpes Zoster (Shingles)",
        "category": "Viral/Skin",
        "icd_code": "B02.9",
        "description": "Herpes Zoster (Shingles)",
        "commonSymptomIds": [
            "S019",
            "S052",
            "S098"
        ],
        "commonMedicineIds": [
            "M043",
            "M044",
            "M107"
        ]
    },
    {
        "id": "D086",
        "name": "Warts",
        "category": "Viral/Skin",
        "icd_code": "B07",
        "description": "Warts",
        "commonSymptomIds": [],
        "commonMedicineIds": [
            "M114"
        ]
    },
    {
        "id": "D087",
        "name": "Ringworm (Tinea Corporis)",
        "category": "Fungal/Skin",
        "icd_code": "B35.4",
        "description": "Ringworm (Tinea Corporis)",
        "commonSymptomIds": [],
        "commonMedicineIds": [
            "M036",
            "M038",
            "M089"
        ]
    },
    {
        "id": "D088",
        "name": "Dandruff (Seborrheic Dermatitis)",
        "category": "Skin",
        "icd_code": "L21.0",
        "description": "Dandruff (Seborrheic Dermatitis)",
        "commonSymptomIds": [
            "S050",
            "S077"
        ],
        "commonMedicineIds": [
            "M087",
            "M089",
            "M114"
        ]
    },
    {
        "id": "D089",
        "name": "Alopecia (Hair Loss)",
        "category": "Dermatological",
        "icd_code": "L65.9",
        "description": "Alopecia (Hair Loss)",
        "commonSymptomIds": [
            "S075"
        ],
        "commonMedicineIds": [
            "M088"
        ]
    },
    {
        "id": "D090",
        "name": "Nail Fungus (Onychomycosis)",
        "category": "Fungal",
        "icd_code": "B35.1",
        "description": "Nail Fungus (Onychomycosis)",
        "commonSymptomIds": [
            "S020",
            "S078"
        ],
        "commonMedicineIds": [
            "M036",
            "M037",
            "M038",
            "M114"
        ]
    },
    {
        "id": "D091",
        "name": "Epistaxis (Nosebleed)",
        "category": "ENT",
        "icd_code": "R04.0",
        "description": "Epistaxis (Nosebleed)",
        "commonSymptomIds": [
            "S092"
        ],
        "commonMedicineIds": [
            "M073",
            "M074"
        ]
    },
    {
        "id": "D092",
        "name": "Hyperuricemia",
        "category": "Metabolic",
        "icd_code": "E79.0",
        "description": "Hyperuricemia",
        "commonSymptomIds": [],
        "commonMedicineIds": [
            "M061"
        ]
    },
    {
        "id": "D093",
        "name": "Fatty Liver Disease",
        "category": "Hepatic",
        "icd_code": "K76.0",
        "description": "Fatty Liver Disease",
        "commonSymptomIds": [
            "S018",
            "S089",
            "S094",
            "S115"
        ],
        "commonMedicineIds": [
            "M060",
            "M098",
            "M099"
        ]
    },
    {
        "id": "D094",
        "name": "Cholecystitis / Gallstones",
        "category": "Hepatic/GI",
        "icd_code": "K80.2",
        "description": "Cholecystitis / Gallstones",
        "commonSymptomIds": [
            "S011",
            "S014",
            "S018",
            "S094",
            "S114",
            "S115"
        ],
        "commonMedicineIds": [
            "M098"
        ]
    },
    {
        "id": "D095",
        "name": "Peripheral Neuropathy",
        "category": "Neurological",
        "icd_code": "G62.9",
        "description": "Peripheral Neuropathy",
        "commonSymptomIds": [
            "S062",
            "S063",
            "S119"
        ],
        "commonMedicineIds": [
            "M046",
            "M106",
            "M107"
        ]
    },
    {
        "id": "D096",
        "name": "Carpal Tunnel Syndrome",
        "category": "Neurological/Orthopedic",
        "icd_code": "G56.0",
        "description": "Carpal Tunnel Syndrome",
        "commonSymptomIds": [
            "S062",
            "S116"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D097",
        "name": "Sciatica",
        "category": "Neurological/Musculoskeletal",
        "icd_code": "M54.4",
        "description": "Sciatica",
        "commonSymptomIds": [
            "S023",
            "S062",
            "S071",
            "S112"
        ],
        "commonMedicineIds": [
            "M004",
            "M081",
            "M107"
        ]
    },
    {
        "id": "D098",
        "name": "Deep Vein Thrombosis (DVT)",
        "category": "Vascular",
        "icd_code": "I80.2",
        "description": "Deep Vein Thrombosis (DVT)",
        "commonSymptomIds": [
            "S026",
            "S027",
            "S071"
        ],
        "commonMedicineIds": [
            "M100",
            "M101"
        ]
    },
    {
        "id": "D099",
        "name": "Varicose Veins",
        "category": "Vascular",
        "icd_code": "I83.9",
        "description": "Varicose Veins",
        "commonSymptomIds": [
            "S021",
            "S071"
        ],
        "commonMedicineIds": [
            "M059",
            "M101",
            "M115"
        ]
    },
    {
        "id": "D100",
        "name": "Hyperlipidemia / High Cholesterol",
        "category": "Metabolic/Cardiovascular",
        "icd_code": "E78.5",
        "description": "Hyperlipidemia / High Cholesterol",
        "commonSymptomIds": [],
        "commonMedicineIds": [
            "M060",
            "M103",
            "M105"
        ]
    },
    {
        "id": "D101",
        "name": "Chronic Kidney Disease (Stage 1-2)",
        "category": "Renal",
        "icd_code": "N18.1",
        "description": "Chronic Kidney Disease (Stage 1-2)",
        "commonSymptomIds": [
            "S021",
            "S040",
            "S089",
            "S096",
            "S097",
            "S100"
        ],
        "commonMedicineIds": [
            "M057",
            "M059"
        ]
    },
    {
        "id": "D102",
        "name": "Nocturnal Enuresis",
        "category": "Urological/Pediatric",
        "icd_code": "F98.0",
        "description": "Nocturnal Enuresis",
        "commonSymptomIds": [],
        "commonMedicineIds": []
    },
    {
        "id": "D103",
        "name": "Chickenpox in Adults",
        "category": "Viral",
        "icd_code": "B01.9",
        "description": "Chickenpox in Adults",
        "commonSymptomIds": [],
        "commonMedicineIds": [
            "M044"
        ]
    },
    {
        "id": "D104",
        "name": "Herpes Simplex (Oral)",
        "category": "Viral/Oral",
        "icd_code": "B00.2",
        "description": "Herpes Simplex (Oral)",
        "commonSymptomIds": [
            "S052",
            "S053"
        ],
        "commonMedicineIds": [
            "M043",
            "M044",
            "M113"
        ]
    },
    {
        "id": "D105",
        "name": "Eye Stye (Hordeolum)",
        "category": "Ophthalmological",
        "icd_code": "H00.0",
        "description": "Eye Stye (Hordeolum)",
        "commonSymptomIds": [
            "S035",
            "S036",
            "S117"
        ],
        "commonMedicineIds": [
            "M076"
        ]
    },
    {
        "id": "D106",
        "name": "Prickly Heat (Miliaria)",
        "category": "Skin/Environmental",
        "icd_code": "L74.0",
        "description": "Prickly Heat (Miliaria)",
        "commonSymptomIds": [
            "S081"
        ],
        "commonMedicineIds": [
            "M040",
            "M041"
        ]
    },
    {
        "id": "D107",
        "name": "Teething Pain (Pediatric)",
        "category": "Dental/Pediatric",
        "icd_code": "K00.7",
        "description": "Teething Pain (Pediatric)",
        "commonSymptomIds": [],
        "commonMedicineIds": []
    },
    {
        "id": "D108",
        "name": "Croup (Pediatric)",
        "category": "Respiratory/Pediatric",
        "icd_code": "J05.0",
        "description": "Croup (Pediatric)",
        "commonSymptomIds": [
            "S110",
            "S111"
        ],
        "commonMedicineIds": []
    },
    {
        "id": "D109",
        "name": "Ear Wax Blockage",
        "category": "ENT",
        "icd_code": "H61.2",
        "description": "Ear Wax Blockage",
        "commonSymptomIds": [
            "S030",
            "S032",
            "S033",
            "S118"
        ],
        "commonMedicineIds": [
            "M080"
        ]
    },
    {
        "id": "D110",
        "name": "Plantar Fasciitis",
        "category": "Musculoskeletal/Orthopedic",
        "icd_code": "M72.2",
        "description": "Plantar Fasciitis",
        "commonSymptomIds": [
            "S072"
        ],
        "commonMedicineIds": [
            "M081"
        ]
    }
],
    symptoms: [
    {
        "id": "S001",
        "name": "Fever",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D001",
            "D002",
            "D003",
            "D004",
            "D005",
            "D006",
            "D017",
            "D025",
            "D028",
            "D061",
            "D062",
            "D084"
        ]
    },
    {
        "id": "S002",
        "name": "Runny Nose",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D001",
            "D002",
            "D011",
            "D010",
            "D084"
        ]
    },
    {
        "id": "S003",
        "name": "Nasal Congestion",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D001",
            "D010",
            "D011",
            "D062"
        ]
    },
    {
        "id": "S004",
        "name": "Dry Cough",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D001",
            "D007",
            "D008",
            "D083",
            "D084"
        ]
    },
    {
        "id": "S005",
        "name": "Productive Cough (with Phlegm)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D007",
            "D009",
            "D081",
            "D083"
        ]
    },
    {
        "id": "S006",
        "name": "Sore Throat",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D001",
            "D061",
            "D062",
            "D063",
            "D084"
        ]
    },
    {
        "id": "S007",
        "name": "Headache",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D033",
            "D034",
            "D001",
            "D002",
            "D003",
            "D039"
        ]
    },
    {
        "id": "S008",
        "name": "Body Ache / Myalgia",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D002",
            "D003",
            "D005",
            "D006",
            "D084"
        ]
    },
    {
        "id": "S009",
        "name": "Fatigue / Weakness",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D002",
            "D042",
            "D043",
            "D044",
            "D046",
            "D047",
            "D084"
        ]
    },
    {
        "id": "S010",
        "name": "Nausea",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D026",
            "D025",
            "D019",
            "D080",
            "D070"
        ]
    },
    {
        "id": "S011",
        "name": "Vomiting",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D026",
            "D025",
            "D082",
            "D080",
            "D070",
            "D094"
        ]
    },
    {
        "id": "S012",
        "name": "Diarrhea",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D023",
            "D025",
            "D082",
            "D022"
        ]
    },
    {
        "id": "S013",
        "name": "Constipation",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D024",
            "D022",
            "D076"
        ]
    },
    {
        "id": "S014",
        "name": "Abdominal Pain",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D019",
            "D020",
            "D021",
            "D022",
            "D025",
            "D027",
            "D094"
        ]
    },
    {
        "id": "S015",
        "name": "Heartburn / Acid Regurgitation",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D019",
            "D020",
            "D021"
        ]
    },
    {
        "id": "S016",
        "name": "Bloating / Gas",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D019",
            "D021",
            "D022",
            "D024"
        ]
    },
    {
        "id": "S017",
        "name": "Loss of Appetite",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D021",
            "D028",
            "D029",
            "D003",
            "D004"
        ]
    },
    {
        "id": "S018",
        "name": "Jaundice (Yellow Skin/Eyes)",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D028",
            "D029",
            "D093",
            "D094"
        ]
    },
    {
        "id": "S019",
        "name": "Skin Rash",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D012",
            "D013",
            "D015",
            "D016",
            "D017",
            "D073",
            "D074",
            "D085"
        ]
    },
    {
        "id": "S020",
        "name": "Itching / Pruritus",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D012",
            "D013",
            "D015",
            "D016",
            "D029",
            "D075",
            "D090"
        ]
    },
    {
        "id": "S021",
        "name": "Swelling / Edema",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D012",
            "D039",
            "D050",
            "D051",
            "D099",
            "D101"
        ]
    },
    {
        "id": "S022",
        "name": "Joint Pain",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D049",
            "D050",
            "D051",
            "D005",
            "D006"
        ]
    },
    {
        "id": "S023",
        "name": "Back Pain",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D052",
            "D097",
            "D030",
            "D031"
        ]
    },
    {
        "id": "S024",
        "name": "Neck Pain / Stiffness",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D053",
            "D033"
        ]
    },
    {
        "id": "S025",
        "name": "Muscle Pain / Cramps",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D054",
            "D046",
            "D047",
            "D002"
        ]
    },
    {
        "id": "S026",
        "name": "Chest Pain",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D039",
            "D019",
            "D041",
            "D098"
        ]
    },
    {
        "id": "S027",
        "name": "Shortness of Breath / Dyspnea",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D008",
            "D009",
            "D039",
            "D084",
            "D098"
        ]
    },
    {
        "id": "S028",
        "name": "Palpitations",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D041",
            "D039",
            "D045",
            "D037"
        ]
    },
    {
        "id": "S029",
        "name": "Dizziness / Lightheadedness",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D035",
            "D040",
            "D042",
            "D078",
            "D080"
        ]
    },
    {
        "id": "S030",
        "name": "Ear Pain / Otalgia",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D059",
            "D109"
        ]
    },
    {
        "id": "S031",
        "name": "Ear Discharge",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D059"
        ]
    },
    {
        "id": "S032",
        "name": "Hearing Loss (Temporary)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D059",
            "D109",
            "D060"
        ]
    },
    {
        "id": "S033",
        "name": "Tinnitus (Ringing in Ears)",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D060",
            "D109"
        ]
    },
    {
        "id": "S034",
        "name": "Red / Watery Eyes",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D056",
            "D011",
            "D057"
        ]
    },
    {
        "id": "S035",
        "name": "Eye Discharge / Crusting",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D056",
            "D105"
        ]
    },
    {
        "id": "S036",
        "name": "Eye Pain / Discomfort",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D056",
            "D058",
            "D105"
        ]
    },
    {
        "id": "S037",
        "name": "Blurry Vision",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D043",
            "D058",
            "D035"
        ]
    },
    {
        "id": "S038",
        "name": "Frequent Urination",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D030",
            "D043",
            "D032"
        ]
    },
    {
        "id": "S039",
        "name": "Burning Urination (Dysuria)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D030",
            "D031",
            "D068"
        ]
    },
    {
        "id": "S040",
        "name": "Blood in Urine (Hematuria)",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D030",
            "D031",
            "D101"
        ]
    },
    {
        "id": "S041",
        "name": "Excessive Thirst (Polydipsia)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D043",
            "D078"
        ]
    },
    {
        "id": "S042",
        "name": "Excessive Hunger (Polyphagia)",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D043"
        ]
    },
    {
        "id": "S043",
        "name": "Weight Loss (Unexplained)",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D043",
            "D045",
            "D083",
            "D048"
        ]
    },
    {
        "id": "S044",
        "name": "Weight Gain (Unexplained)",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D044",
            "D048",
            "D067"
        ]
    },
    {
        "id": "S045",
        "name": "Cold Intolerance",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D044"
        ]
    },
    {
        "id": "S046",
        "name": "Heat Intolerance",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D045"
        ]
    },
    {
        "id": "S047",
        "name": "Tremors / Shakiness",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D045",
            "D037"
        ]
    },
    {
        "id": "S048",
        "name": "Sneezing",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D001",
            "D011",
            "D084"
        ]
    },
    {
        "id": "S049",
        "name": "Watery Eyes (Lacrimation)",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D011",
            "D056"
        ]
    },
    {
        "id": "S050",
        "name": "Skin Dryness / Scaling",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D013",
            "D044",
            "D075",
            "D088"
        ]
    },
    {
        "id": "S051",
        "name": "Pus / Boils on Skin",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D014",
            "D015",
            "D072"
        ]
    },
    {
        "id": "S052",
        "name": "Blisters / Vesicles",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D017",
            "D071",
            "D085",
            "D104"
        ]
    },
    {
        "id": "S053",
        "name": "Mouth Sores / Ulcers",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D065",
            "D104"
        ]
    },
    {
        "id": "S054",
        "name": "Toothache",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D064"
        ]
    },
    {
        "id": "S055",
        "name": "Swollen Lymph Nodes",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D002",
            "D004",
            "D061",
            "D017"
        ]
    },
    {
        "id": "S056",
        "name": "Night Sweats",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D083",
            "D004",
            "D044",
            "D069"
        ]
    },
    {
        "id": "S057",
        "name": "Chills / Rigors",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D006",
            "D004",
            "D002",
            "D003"
        ]
    },
    {
        "id": "S058",
        "name": "Menstrual Cramps",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D066",
            "D067"
        ]
    },
    {
        "id": "S059",
        "name": "Irregular Periods",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D067",
            "D044",
            "D045",
            "D069"
        ]
    },
    {
        "id": "S060",
        "name": "Vaginal Discharge (Abnormal)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D068"
        ]
    },
    {
        "id": "S061",
        "name": "Hot Flashes / Night Sweats (Female)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D069"
        ]
    },
    {
        "id": "S062",
        "name": "Numbness / Tingling",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D095",
            "D096",
            "D097",
            "D043"
        ]
    },
    {
        "id": "S063",
        "name": "Burning Feet / Hands",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D095",
            "D043",
            "D047"
        ]
    },
    {
        "id": "S064",
        "name": "Memory Problems / Brain Fog",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D044",
            "D047",
            "D038",
            "D036"
        ]
    },
    {
        "id": "S065",
        "name": "Insomnia / Sleep Difficulty",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D036",
            "D037",
            "D038",
            "D045"
        ]
    },
    {
        "id": "S066",
        "name": "Anxiety / Panic Attacks",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D037",
            "D045",
            "D039"
        ]
    },
    {
        "id": "S067",
        "name": "Mood Swings / Irritability",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D037",
            "D038",
            "D067",
            "D069"
        ]
    },
    {
        "id": "S068",
        "name": "Depressed Mood / Sadness",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D038",
            "D044",
            "D047"
        ]
    },
    {
        "id": "S069",
        "name": "Rectal Bleeding",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D076",
            "D077"
        ]
    },
    {
        "id": "S070",
        "name": "Anal Pain / Discomfort",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D076",
            "D077"
        ]
    },
    {
        "id": "S071",
        "name": "Leg Pain / Cramps",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D097",
            "D098",
            "D099",
            "D054",
            "D046"
        ]
    },
    {
        "id": "S072",
        "name": "Foot Pain / Heel Pain",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D110",
            "D049",
            "D050"
        ]
    },
    {
        "id": "S073",
        "name": "Stiffness in Joints (Morning)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D051",
            "D050",
            "D049"
        ]
    },
    {
        "id": "S074",
        "name": "Pale Skin",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D042",
            "D040",
            "D029"
        ]
    },
    {
        "id": "S075",
        "name": "Hair Loss / Thinning",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D089",
            "D044",
            "D047",
            "D067"
        ]
    },
    {
        "id": "S076",
        "name": "Brittle Nails",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D044",
            "D047",
            "D042"
        ]
    },
    {
        "id": "S077",
        "name": "Dandruff / Flaky Scalp",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D088"
        ]
    },
    {
        "id": "S078",
        "name": "Nail Discoloration / Thickening",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D090"
        ]
    },
    {
        "id": "S079",
        "name": "Excessive Sweating",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D045",
            "D043",
            "D079"
        ]
    },
    {
        "id": "S080",
        "name": "Dehydration Signs (Dry Mouth/Sunken Eyes)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D078",
            "D023",
            "D082"
        ]
    },
    {
        "id": "S081",
        "name": "Sunburn / Skin Redness",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D071",
            "D106"
        ]
    },
    {
        "id": "S082",
        "name": "Wheezing",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D008",
            "D007",
            "D084"
        ]
    },
    {
        "id": "S083",
        "name": "Hoarseness of Voice",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D063",
            "D062",
            "D061"
        ]
    },
    {
        "id": "S084",
        "name": "Post-nasal Drip",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D010",
            "D011",
            "D001"
        ]
    },
    {
        "id": "S085",
        "name": "Facial Pain / Pressure",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D010",
            "D033",
            "D034"
        ]
    },
    {
        "id": "S086",
        "name": "Bad Breath (Halitosis)",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D065",
            "D010",
            "D020"
        ]
    },
    {
        "id": "S087",
        "name": "Increased Heart Rate (Tachycardia)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D041",
            "D039",
            "D045",
            "D037",
            "D079"
        ]
    },
    {
        "id": "S088",
        "name": "Fainting / Syncope",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D040",
            "D078",
            "D042"
        ]
    },
    {
        "id": "S089",
        "name": "High Blood Pressure Reading",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D039",
            "D093",
            "D101"
        ]
    },
    {
        "id": "S090",
        "name": "Enlarged Thyroid (Goiter)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D044",
            "D045"
        ]
    },
    {
        "id": "S091",
        "name": "Bleeding Gums",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D064",
            "D042"
        ]
    },
    {
        "id": "S092",
        "name": "Nosebleed",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D091",
            "D039"
        ]
    },
    {
        "id": "S093",
        "name": "Difficulty Swallowing (Dysphagia)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D061",
            "D062",
            "D019"
        ]
    },
    {
        "id": "S094",
        "name": "Abdominal Distension",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D022",
            "D093",
            "D094",
            "D016"
        ]
    },
    {
        "id": "S095",
        "name": "Dark Urine",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D028",
            "D029",
            "D078",
            "D030"
        ]
    },
    {
        "id": "S096",
        "name": "Foamy Urine",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D101",
            "D043"
        ]
    },
    {
        "id": "S097",
        "name": "Reduced Urine Output",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D101",
            "D078",
            "D031"
        ]
    },
    {
        "id": "S098",
        "name": "Fever with Rash",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D017",
            "D018",
            "D005",
            "D085"
        ]
    },
    {
        "id": "S099",
        "name": "Sudden High Fever (>103F)",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D004",
            "D005",
            "D006",
            "D009",
            "D082"
        ]
    },
    {
        "id": "S100",
        "name": "Slow Wound Healing",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D043",
            "D042",
            "D101"
        ]
    },
    {
        "id": "S101",
        "name": "Motion Sickness (Nausea in Travel)",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D080"
        ]
    },
    {
        "id": "S102",
        "name": "Craving Salty / Sweet Foods",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D043",
            "D067",
            "D038"
        ]
    },
    {
        "id": "S103",
        "name": "Sensitivity to Light (Photophobia)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D034",
            "D056"
        ]
    },
    {
        "id": "S104",
        "name": "Stiffness After Rest",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D050",
            "D051",
            "D052"
        ]
    },
    {
        "id": "S105",
        "name": "Crepitus (Clicking Joints)",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D050",
            "D053"
        ]
    },
    {
        "id": "S106",
        "name": "Painful Urination in Females",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D030",
            "D068"
        ]
    },
    {
        "id": "S107",
        "name": "Genital Itching / Discharge",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D068"
        ]
    },
    {
        "id": "S108",
        "name": "Low-grade Fever Persisting >7 Days",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D004",
            "D083",
            "D028",
            "D005"
        ]
    },
    {
        "id": "S109",
        "name": "Paroxysmal Fever (Every 2-3 Days)",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D006"
        ]
    },
    {
        "id": "S110",
        "name": "Barking Cough (Croup)",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D108",
            "D063"
        ]
    },
    {
        "id": "S111",
        "name": "Stridor (High-pitched Breathing)",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D108",
            "D061"
        ]
    },
    {
        "id": "S112",
        "name": "Worsening Pain at Night",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D064",
            "D052",
            "D097"
        ]
    },
    {
        "id": "S113",
        "name": "Abdominal Pain Right Side Lower",
        "category": "General",
        "severity": "severe",
        "relatedDiseaseIds": [
            "D027",
            "D030"
        ]
    },
    {
        "id": "S114",
        "name": "Pain After Eating Fatty Food",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D094",
            "D021",
            "D019"
        ]
    },
    {
        "id": "S115",
        "name": "Oily / Greasy Stools",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D093",
            "D028",
            "D094"
        ]
    },
    {
        "id": "S116",
        "name": "Wrist Pain / Weakness",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D096",
            "D050"
        ]
    },
    {
        "id": "S117",
        "name": "Eye Swelling / Stye",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D105"
        ]
    },
    {
        "id": "S118",
        "name": "Excessive Ear Wax",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D109"
        ]
    },
    {
        "id": "S119",
        "name": "Muscle Weakness",
        "category": "General",
        "severity": "moderate",
        "relatedDiseaseIds": [
            "D046",
            "D044",
            "D095",
            "D042"
        ]
    },
    {
        "id": "S120",
        "name": "Loss of Taste / Smell",
        "category": "General",
        "severity": "mild",
        "relatedDiseaseIds": [
            "D001",
            "D084",
            "D010"
        ]
    }
],
    diseaseMedicineMap: [
    {
        "diseaseId": "D001",
        "medicineId": "M001",
        "saltCompositions": [
            "Paracetamol"
        ],
        "dosageStrengths": [
            "Paracetamol 500mg",
            "Paracetamol 650mg",
            "Paracetamol 125mg/5ml (Paediatric)",
            "Paracetamol 250mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D002",
        "medicineId": "M001",
        "saltCompositions": [
            "Paracetamol"
        ],
        "dosageStrengths": [
            "Paracetamol 500mg",
            "Paracetamol 650mg",
            "Paracetamol 125mg/5ml (Paediatric)",
            "Paracetamol 250mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D003",
        "medicineId": "M001",
        "saltCompositions": [
            "Paracetamol"
        ],
        "dosageStrengths": [
            "Paracetamol 500mg",
            "Paracetamol 650mg",
            "Paracetamol 125mg/5ml (Paediatric)",
            "Paracetamol 250mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D033",
        "medicineId": "M001",
        "saltCompositions": [
            "Paracetamol"
        ],
        "dosageStrengths": [
            "Paracetamol 500mg",
            "Paracetamol 650mg",
            "Paracetamol 125mg/5ml (Paediatric)",
            "Paracetamol 250mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D066",
        "medicineId": "M001",
        "saltCompositions": [
            "Paracetamol"
        ],
        "dosageStrengths": [
            "Paracetamol 500mg",
            "Paracetamol 650mg",
            "Paracetamol 125mg/5ml (Paediatric)",
            "Paracetamol 250mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D064",
        "medicineId": "M001",
        "saltCompositions": [
            "Paracetamol"
        ],
        "dosageStrengths": [
            "Paracetamol 500mg",
            "Paracetamol 650mg",
            "Paracetamol 125mg/5ml (Paediatric)",
            "Paracetamol 250mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 6
    },
    {
        "diseaseId": "D033",
        "medicineId": "M002",
        "saltCompositions": [
            "Ibuprofen"
        ],
        "dosageStrengths": [
            "Ibuprofen 200mg",
            "Ibuprofen 400mg",
            "Ibuprofen 600mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D034",
        "medicineId": "M002",
        "saltCompositions": [
            "Ibuprofen"
        ],
        "dosageStrengths": [
            "Ibuprofen 200mg",
            "Ibuprofen 400mg",
            "Ibuprofen 600mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D050",
        "medicineId": "M002",
        "saltCompositions": [
            "Ibuprofen"
        ],
        "dosageStrengths": [
            "Ibuprofen 200mg",
            "Ibuprofen 400mg",
            "Ibuprofen 600mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D051",
        "medicineId": "M002",
        "saltCompositions": [
            "Ibuprofen"
        ],
        "dosageStrengths": [
            "Ibuprofen 200mg",
            "Ibuprofen 400mg",
            "Ibuprofen 600mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D052",
        "medicineId": "M002",
        "saltCompositions": [
            "Ibuprofen"
        ],
        "dosageStrengths": [
            "Ibuprofen 200mg",
            "Ibuprofen 400mg",
            "Ibuprofen 600mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D064",
        "medicineId": "M002",
        "saltCompositions": [
            "Ibuprofen"
        ],
        "dosageStrengths": [
            "Ibuprofen 200mg",
            "Ibuprofen 400mg",
            "Ibuprofen 600mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 6
    },
    {
        "diseaseId": "D066",
        "medicineId": "M002",
        "saltCompositions": [
            "Ibuprofen"
        ],
        "dosageStrengths": [
            "Ibuprofen 200mg",
            "Ibuprofen 400mg",
            "Ibuprofen 600mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 7
    },
    {
        "diseaseId": "D033",
        "medicineId": "M003",
        "saltCompositions": [
            "Aspirin (Acetylsalicylic Acid)"
        ],
        "dosageStrengths": [
            "Aspirin 75mg (Cardioprotective)",
            "Aspirin 325mg",
            "Aspirin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D039",
        "medicineId": "M003",
        "saltCompositions": [
            "Aspirin (Acetylsalicylic Acid)"
        ],
        "dosageStrengths": [
            "Aspirin 75mg (Cardioprotective)",
            "Aspirin 325mg",
            "Aspirin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D041",
        "medicineId": "M003",
        "saltCompositions": [
            "Aspirin (Acetylsalicylic Acid)"
        ],
        "dosageStrengths": [
            "Aspirin 75mg (Cardioprotective)",
            "Aspirin 325mg",
            "Aspirin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D050",
        "medicineId": "M004",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac 50mg",
            "Diclofenac 75mg SR"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D051",
        "medicineId": "M004",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac 50mg",
            "Diclofenac 75mg SR"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D052",
        "medicineId": "M004",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac 50mg",
            "Diclofenac 75mg SR"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D053",
        "medicineId": "M004",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac 50mg",
            "Diclofenac 75mg SR"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D054",
        "medicineId": "M004",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac 50mg",
            "Diclofenac 75mg SR"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D066",
        "medicineId": "M004",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac 50mg",
            "Diclofenac 75mg SR"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 6
    },
    {
        "diseaseId": "D097",
        "medicineId": "M004",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac 50mg",
            "Diclofenac 75mg SR"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 7
    },
    {
        "diseaseId": "D050",
        "medicineId": "M005",
        "saltCompositions": [
            "Naproxen Sodium"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D051",
        "medicineId": "M005",
        "saltCompositions": [
            "Naproxen Sodium"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D049",
        "medicineId": "M005",
        "saltCompositions": [
            "Naproxen Sodium"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D066",
        "medicineId": "M005",
        "saltCompositions": [
            "Naproxen Sodium"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D034",
        "medicineId": "M005",
        "saltCompositions": [
            "Naproxen Sodium"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D011",
        "medicineId": "M006",
        "saltCompositions": [
            "Cetirizine Hydrochloride"
        ],
        "dosageStrengths": [
            "Cetirizine 5mg",
            "Cetirizine 10mg",
            "Cetirizine Syrup 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D012",
        "medicineId": "M006",
        "saltCompositions": [
            "Cetirizine Hydrochloride"
        ],
        "dosageStrengths": [
            "Cetirizine 5mg",
            "Cetirizine 10mg",
            "Cetirizine Syrup 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D013",
        "medicineId": "M006",
        "saltCompositions": [
            "Cetirizine Hydrochloride"
        ],
        "dosageStrengths": [
            "Cetirizine 5mg",
            "Cetirizine 10mg",
            "Cetirizine Syrup 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D073",
        "medicineId": "M006",
        "saltCompositions": [
            "Cetirizine Hydrochloride"
        ],
        "dosageStrengths": [
            "Cetirizine 5mg",
            "Cetirizine 10mg",
            "Cetirizine Syrup 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D074",
        "medicineId": "M006",
        "saltCompositions": [
            "Cetirizine Hydrochloride"
        ],
        "dosageStrengths": [
            "Cetirizine 5mg",
            "Cetirizine 10mg",
            "Cetirizine Syrup 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D011",
        "medicineId": "M007",
        "saltCompositions": [
            "Loratadine"
        ],
        "dosageStrengths": [
            "Loratadine 10mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D012",
        "medicineId": "M007",
        "saltCompositions": [
            "Loratadine"
        ],
        "dosageStrengths": [
            "Loratadine 10mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D073",
        "medicineId": "M007",
        "saltCompositions": [
            "Loratadine"
        ],
        "dosageStrengths": [
            "Loratadine 10mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D074",
        "medicineId": "M007",
        "saltCompositions": [
            "Loratadine"
        ],
        "dosageStrengths": [
            "Loratadine 10mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D011",
        "medicineId": "M008",
        "saltCompositions": [
            "Fexofenadine Hydrochloride"
        ],
        "dosageStrengths": [
            "Fexofenadine 120mg",
            "Fexofenadine 180mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D012",
        "medicineId": "M008",
        "saltCompositions": [
            "Fexofenadine Hydrochloride"
        ],
        "dosageStrengths": [
            "Fexofenadine 120mg",
            "Fexofenadine 180mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D073",
        "medicineId": "M008",
        "saltCompositions": [
            "Fexofenadine Hydrochloride"
        ],
        "dosageStrengths": [
            "Fexofenadine 120mg",
            "Fexofenadine 180mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D011",
        "medicineId": "M009",
        "saltCompositions": [
            "Chlorpheniramine Maleate"
        ],
        "dosageStrengths": [
            "Chlorpheniramine 4mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D012",
        "medicineId": "M009",
        "saltCompositions": [
            "Chlorpheniramine Maleate"
        ],
        "dosageStrengths": [
            "Chlorpheniramine 4mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D001",
        "medicineId": "M009",
        "saltCompositions": [
            "Chlorpheniramine Maleate"
        ],
        "dosageStrengths": [
            "Chlorpheniramine 4mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D001",
        "medicineId": "M010",
        "saltCompositions": [
            "Dextromethorphan Hydrobromide"
        ],
        "dosageStrengths": [
            "Dextromethorphan 10mg/5ml"
        ],
        "usageGuidelines": "Shake well before each use; Use the measuring spoon or cup provided for accurate dosing; Do not dilute unless specifically instructed; Refrigerate after opening if label advises; Discard opened bottle within 14 days; Give children only paediatric-appropriate doses per weight or age; Do not share the measuring spoon between patients",
        "priority": 1
    },
    {
        "diseaseId": "D007",
        "medicineId": "M010",
        "saltCompositions": [
            "Dextromethorphan Hydrobromide"
        ],
        "dosageStrengths": [
            "Dextromethorphan 10mg/5ml"
        ],
        "usageGuidelines": "Shake well before each use; Use the measuring spoon or cup provided for accurate dosing; Do not dilute unless specifically instructed; Refrigerate after opening if label advises; Discard opened bottle within 14 days; Give children only paediatric-appropriate doses per weight or age; Do not share the measuring spoon between patients",
        "priority": 2
    },
    {
        "diseaseId": "D084",
        "medicineId": "M010",
        "saltCompositions": [
            "Dextromethorphan Hydrobromide"
        ],
        "dosageStrengths": [
            "Dextromethorphan 10mg/5ml"
        ],
        "usageGuidelines": "Shake well before each use; Use the measuring spoon or cup provided for accurate dosing; Do not dilute unless specifically instructed; Refrigerate after opening if label advises; Discard opened bottle within 14 days; Give children only paediatric-appropriate doses per weight or age; Do not share the measuring spoon between patients",
        "priority": 3
    },
    {
        "diseaseId": "D007",
        "medicineId": "M011",
        "saltCompositions": [
            "Ambroxol Hydrochloride"
        ],
        "dosageStrengths": [
            "Ambroxol 15mg/5ml",
            "Ambroxol 30mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D009",
        "medicineId": "M011",
        "saltCompositions": [
            "Ambroxol Hydrochloride"
        ],
        "dosageStrengths": [
            "Ambroxol 15mg/5ml",
            "Ambroxol 30mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D001",
        "medicineId": "M011",
        "saltCompositions": [
            "Ambroxol Hydrochloride"
        ],
        "dosageStrengths": [
            "Ambroxol 15mg/5ml",
            "Ambroxol 30mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D007",
        "medicineId": "M012",
        "saltCompositions": [
            "Guaifenesin"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D009",
        "medicineId": "M012",
        "saltCompositions": [
            "Guaifenesin"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D010",
        "medicineId": "M012",
        "saltCompositions": [
            "Guaifenesin"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D008",
        "medicineId": "M013",
        "saltCompositions": [
            "Salbutamol Sulfate"
        ],
        "dosageStrengths": [
            "Salbutamol MDI 100mcg/dose"
        ],
        "usageGuidelines": "Shake MDI canister well before each use; Exhale fully before placing mouthpiece in mouth; Press canister down firmly as you begin to inhale slowly and deeply; Hold breath for 10 seconds after inhalation then exhale slowly; Rinse mouth with water after using corticosteroid inhaler to prevent oral thrush; Clean mouthpiece weekly with a dry cloth; Use a spacer device for children and elderly patients; Keep rescue inhaler accessible at all times; Monitor dose counter and replace inhaler before reaching zero; Wait 1 minute between puffs if more than one dose is prescribed",
        "priority": 1
    },
    {
        "diseaseId": "D007",
        "medicineId": "M013",
        "saltCompositions": [
            "Salbutamol Sulfate"
        ],
        "dosageStrengths": [
            "Salbutamol MDI 100mcg/dose"
        ],
        "usageGuidelines": "Shake MDI canister well before each use; Exhale fully before placing mouthpiece in mouth; Press canister down firmly as you begin to inhale slowly and deeply; Hold breath for 10 seconds after inhalation then exhale slowly; Rinse mouth with water after using corticosteroid inhaler to prevent oral thrush; Clean mouthpiece weekly with a dry cloth; Use a spacer device for children and elderly patients; Keep rescue inhaler accessible at all times; Monitor dose counter and replace inhaler before reaching zero; Wait 1 minute between puffs if more than one dose is prescribed",
        "priority": 2
    },
    {
        "diseaseId": "D008",
        "medicineId": "M014",
        "saltCompositions": [
            "Montelukast Sodium"
        ],
        "dosageStrengths": [
            "Montelukast 5mg (Child)",
            "Montelukast 10mg (Adult)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D011",
        "medicineId": "M014",
        "saltCompositions": [
            "Montelukast Sodium"
        ],
        "dosageStrengths": [
            "Montelukast 5mg (Child)",
            "Montelukast 10mg (Adult)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D008",
        "medicineId": "M015",
        "saltCompositions": [
            "Budesonide"
        ],
        "dosageStrengths": [
            "Budesonide 100mcg/dose",
            "Budesonide 200mcg/dose",
            "Budesonide 400mcg/dose"
        ],
        "usageGuidelines": "Shake MDI canister well before each use; Exhale fully before placing mouthpiece in mouth; Press canister down firmly as you begin to inhale slowly and deeply; Hold breath for 10 seconds after inhalation then exhale slowly; Rinse mouth with water after using corticosteroid inhaler to prevent oral thrush; Clean mouthpiece weekly with a dry cloth; Use a spacer device for children and elderly patients; Keep rescue inhaler accessible at all times; Monitor dose counter and replace inhaler before reaching zero; Wait 1 minute between puffs if more than one dose is prescribed",
        "priority": 1
    },
    {
        "diseaseId": "D007",
        "medicineId": "M015",
        "saltCompositions": [
            "Budesonide"
        ],
        "dosageStrengths": [
            "Budesonide 100mcg/dose",
            "Budesonide 200mcg/dose",
            "Budesonide 400mcg/dose"
        ],
        "usageGuidelines": "Shake MDI canister well before each use; Exhale fully before placing mouthpiece in mouth; Press canister down firmly as you begin to inhale slowly and deeply; Hold breath for 10 seconds after inhalation then exhale slowly; Rinse mouth with water after using corticosteroid inhaler to prevent oral thrush; Clean mouthpiece weekly with a dry cloth; Use a spacer device for children and elderly patients; Keep rescue inhaler accessible at all times; Monitor dose counter and replace inhaler before reaching zero; Wait 1 minute between puffs if more than one dose is prescribed",
        "priority": 2
    },
    {
        "diseaseId": "D019",
        "medicineId": "M016",
        "saltCompositions": [
            "Omeprazole"
        ],
        "dosageStrengths": [
            "Omeprazole 10mg",
            "Omeprazole 20mg",
            "Omeprazole 40mg",
            "Omeprazole 20mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D020",
        "medicineId": "M016",
        "saltCompositions": [
            "Omeprazole"
        ],
        "dosageStrengths": [
            "Omeprazole 10mg",
            "Omeprazole 20mg",
            "Omeprazole 40mg",
            "Omeprazole 20mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D021",
        "medicineId": "M016",
        "saltCompositions": [
            "Omeprazole"
        ],
        "dosageStrengths": [
            "Omeprazole 10mg",
            "Omeprazole 20mg",
            "Omeprazole 40mg",
            "Omeprazole 20mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D019",
        "medicineId": "M017",
        "saltCompositions": [
            "Pantoprazole Sodium"
        ],
        "dosageStrengths": [
            "Pantoprazole 20mg",
            "Pantoprazole 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D020",
        "medicineId": "M017",
        "saltCompositions": [
            "Pantoprazole Sodium"
        ],
        "dosageStrengths": [
            "Pantoprazole 20mg",
            "Pantoprazole 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D021",
        "medicineId": "M017",
        "saltCompositions": [
            "Pantoprazole Sodium"
        ],
        "dosageStrengths": [
            "Pantoprazole 20mg",
            "Pantoprazole 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D019",
        "medicineId": "M018",
        "saltCompositions": [
            "Famotidine"
        ],
        "dosageStrengths": [
            "Famotidine 20mg",
            "Famotidine 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D020",
        "medicineId": "M018",
        "saltCompositions": [
            "Famotidine"
        ],
        "dosageStrengths": [
            "Famotidine 20mg",
            "Famotidine 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D021",
        "medicineId": "M018",
        "saltCompositions": [
            "Famotidine"
        ],
        "dosageStrengths": [
            "Famotidine 20mg",
            "Famotidine 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D019",
        "medicineId": "M019",
        "saltCompositions": [
            "Aluminium Hydroxide + Magnesium Hydroxide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D021",
        "medicineId": "M019",
        "saltCompositions": [
            "Aluminium Hydroxide + Magnesium Hydroxide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D026",
        "medicineId": "M019",
        "saltCompositions": [
            "Aluminium Hydroxide + Magnesium Hydroxide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D026",
        "medicineId": "M020",
        "saltCompositions": [
            "Domperidone"
        ],
        "dosageStrengths": [
            "Domperidone 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D019",
        "medicineId": "M020",
        "saltCompositions": [
            "Domperidone"
        ],
        "dosageStrengths": [
            "Domperidone 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D070",
        "medicineId": "M020",
        "saltCompositions": [
            "Domperidone"
        ],
        "dosageStrengths": [
            "Domperidone 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D080",
        "medicineId": "M020",
        "saltCompositions": [
            "Domperidone"
        ],
        "dosageStrengths": [
            "Domperidone 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D026",
        "medicineId": "M021",
        "saltCompositions": [
            "Ondansetron Hydrochloride"
        ],
        "dosageStrengths": [
            "Ondansetron 4mg/2ml",
            "Ondansetron 8mg/4ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D025",
        "medicineId": "M021",
        "saltCompositions": [
            "Ondansetron Hydrochloride"
        ],
        "dosageStrengths": [
            "Ondansetron 4mg/2ml",
            "Ondansetron 8mg/4ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D070",
        "medicineId": "M021",
        "saltCompositions": [
            "Ondansetron Hydrochloride"
        ],
        "dosageStrengths": [
            "Ondansetron 4mg/2ml",
            "Ondansetron 8mg/4ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D080",
        "medicineId": "M021",
        "saltCompositions": [
            "Ondansetron Hydrochloride"
        ],
        "dosageStrengths": [
            "Ondansetron 4mg/2ml",
            "Ondansetron 8mg/4ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D023",
        "medicineId": "M022",
        "saltCompositions": [
            "Sodium Chloride + Potassium Chloride + Glucose (ORS)"
        ],
        "dosageStrengths": [
            "ORS Sachet WHO Formula 27.9g",
            "ORS Sachet Low Osmolarity 245 mOsm"
        ],
        "usageGuidelines": "Dissolve the sachet in the prescribed volume of clean drinking water only; Do not use fruit juice, milk, or carbonated beverages for dissolving ORS; Stir thoroughly until the powder is fully dissolved before consuming; Consume the prepared solution within 1 hour of preparation; Store unmixed sachets at room temperature in a dry place; For ORS in diarrhoea give small sips frequently rather than large amounts at once; Offer children ORS solution using a spoon or cup not a bottle",
        "priority": 1
    },
    {
        "diseaseId": "D025",
        "medicineId": "M022",
        "saltCompositions": [
            "Sodium Chloride + Potassium Chloride + Glucose (ORS)"
        ],
        "dosageStrengths": [
            "ORS Sachet WHO Formula 27.9g",
            "ORS Sachet Low Osmolarity 245 mOsm"
        ],
        "usageGuidelines": "Dissolve the sachet in the prescribed volume of clean drinking water only; Do not use fruit juice, milk, or carbonated beverages for dissolving ORS; Stir thoroughly until the powder is fully dissolved before consuming; Consume the prepared solution within 1 hour of preparation; Store unmixed sachets at room temperature in a dry place; For ORS in diarrhoea give small sips frequently rather than large amounts at once; Offer children ORS solution using a spoon or cup not a bottle",
        "priority": 2
    },
    {
        "diseaseId": "D082",
        "medicineId": "M022",
        "saltCompositions": [
            "Sodium Chloride + Potassium Chloride + Glucose (ORS)"
        ],
        "dosageStrengths": [
            "ORS Sachet WHO Formula 27.9g",
            "ORS Sachet Low Osmolarity 245 mOsm"
        ],
        "usageGuidelines": "Dissolve the sachet in the prescribed volume of clean drinking water only; Do not use fruit juice, milk, or carbonated beverages for dissolving ORS; Stir thoroughly until the powder is fully dissolved before consuming; Consume the prepared solution within 1 hour of preparation; Store unmixed sachets at room temperature in a dry place; For ORS in diarrhoea give small sips frequently rather than large amounts at once; Offer children ORS solution using a spoon or cup not a bottle",
        "priority": 3
    },
    {
        "diseaseId": "D078",
        "medicineId": "M022",
        "saltCompositions": [
            "Sodium Chloride + Potassium Chloride + Glucose (ORS)"
        ],
        "dosageStrengths": [
            "ORS Sachet WHO Formula 27.9g",
            "ORS Sachet Low Osmolarity 245 mOsm"
        ],
        "usageGuidelines": "Dissolve the sachet in the prescribed volume of clean drinking water only; Do not use fruit juice, milk, or carbonated beverages for dissolving ORS; Stir thoroughly until the powder is fully dissolved before consuming; Consume the prepared solution within 1 hour of preparation; Store unmixed sachets at room temperature in a dry place; For ORS in diarrhoea give small sips frequently rather than large amounts at once; Offer children ORS solution using a spoon or cup not a bottle",
        "priority": 4
    },
    {
        "diseaseId": "D023",
        "medicineId": "M023",
        "saltCompositions": [
            "Loperamide Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D022",
        "medicineId": "M023",
        "saltCompositions": [
            "Loperamide Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D023",
        "medicineId": "M024",
        "saltCompositions": [
            "Metronidazole"
        ],
        "dosageStrengths": [
            "Metronidazole 200mg",
            "Metronidazole 400mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D025",
        "medicineId": "M024",
        "saltCompositions": [
            "Metronidazole"
        ],
        "dosageStrengths": [
            "Metronidazole 200mg",
            "Metronidazole 400mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D030",
        "medicineId": "M024",
        "saltCompositions": [
            "Metronidazole"
        ],
        "dosageStrengths": [
            "Metronidazole 200mg",
            "Metronidazole 400mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D082",
        "medicineId": "M024",
        "saltCompositions": [
            "Metronidazole"
        ],
        "dosageStrengths": [
            "Metronidazole 200mg",
            "Metronidazole 400mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D024",
        "medicineId": "M025",
        "saltCompositions": [
            "Lactulose"
        ],
        "dosageStrengths": [
            "Lactulose 10g/15ml"
        ],
        "usageGuidelines": "Shake well before each use; Use the measuring spoon or cup provided for accurate dosing; Do not dilute unless specifically instructed; Refrigerate after opening if label advises; Discard opened bottle within 14 days; Give children only paediatric-appropriate doses per weight or age; Do not share the measuring spoon between patients",
        "priority": 1
    },
    {
        "diseaseId": "D076",
        "medicineId": "M025",
        "saltCompositions": [
            "Lactulose"
        ],
        "dosageStrengths": [
            "Lactulose 10g/15ml"
        ],
        "usageGuidelines": "Shake well before each use; Use the measuring spoon or cup provided for accurate dosing; Do not dilute unless specifically instructed; Refrigerate after opening if label advises; Discard opened bottle within 14 days; Give children only paediatric-appropriate doses per weight or age; Do not share the measuring spoon between patients",
        "priority": 2
    },
    {
        "diseaseId": "D024",
        "medicineId": "M026",
        "saltCompositions": [
            "Bisacodyl"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D024",
        "medicineId": "M027",
        "saltCompositions": [
            "Ispaghula Husk (Psyllium)"
        ],
        "dosageStrengths": [
            "Ispaghula Husk Sachet 3.5g"
        ],
        "usageGuidelines": "Dissolve the sachet in the prescribed volume of clean drinking water only; Do not use fruit juice, milk, or carbonated beverages for dissolving ORS; Stir thoroughly until the powder is fully dissolved before consuming; Consume the prepared solution within 1 hour of preparation; Store unmixed sachets at room temperature in a dry place; For ORS in diarrhoea give small sips frequently rather than large amounts at once; Offer children ORS solution using a spoon or cup not a bottle",
        "priority": 1
    },
    {
        "diseaseId": "D022",
        "medicineId": "M027",
        "saltCompositions": [
            "Ispaghula Husk (Psyllium)"
        ],
        "dosageStrengths": [
            "Ispaghula Husk Sachet 3.5g"
        ],
        "usageGuidelines": "Dissolve the sachet in the prescribed volume of clean drinking water only; Do not use fruit juice, milk, or carbonated beverages for dissolving ORS; Stir thoroughly until the powder is fully dissolved before consuming; Consume the prepared solution within 1 hour of preparation; Store unmixed sachets at room temperature in a dry place; For ORS in diarrhoea give small sips frequently rather than large amounts at once; Offer children ORS solution using a spoon or cup not a bottle",
        "priority": 2
    },
    {
        "diseaseId": "D076",
        "medicineId": "M027",
        "saltCompositions": [
            "Ispaghula Husk (Psyllium)"
        ],
        "dosageStrengths": [
            "Ispaghula Husk Sachet 3.5g"
        ],
        "usageGuidelines": "Dissolve the sachet in the prescribed volume of clean drinking water only; Do not use fruit juice, milk, or carbonated beverages for dissolving ORS; Stir thoroughly until the powder is fully dissolved before consuming; Consume the prepared solution within 1 hour of preparation; Store unmixed sachets at room temperature in a dry place; For ORS in diarrhoea give small sips frequently rather than large amounts at once; Offer children ORS solution using a spoon or cup not a bottle",
        "priority": 3
    },
    {
        "diseaseId": "D009",
        "medicineId": "M028",
        "saltCompositions": [
            "Amoxicillin Trihydrate"
        ],
        "dosageStrengths": [
            "Amoxicillin 250mg",
            "Amoxicillin 500mg",
            "Amoxicillin 250mg Capsule",
            "Amoxicillin 500mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D030",
        "medicineId": "M028",
        "saltCompositions": [
            "Amoxicillin Trihydrate"
        ],
        "dosageStrengths": [
            "Amoxicillin 250mg",
            "Amoxicillin 500mg",
            "Amoxicillin 250mg Capsule",
            "Amoxicillin 500mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D061",
        "medicineId": "M028",
        "saltCompositions": [
            "Amoxicillin Trihydrate"
        ],
        "dosageStrengths": [
            "Amoxicillin 250mg",
            "Amoxicillin 500mg",
            "Amoxicillin 250mg Capsule",
            "Amoxicillin 500mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D062",
        "medicineId": "M028",
        "saltCompositions": [
            "Amoxicillin Trihydrate"
        ],
        "dosageStrengths": [
            "Amoxicillin 250mg",
            "Amoxicillin 500mg",
            "Amoxicillin 250mg Capsule",
            "Amoxicillin 500mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D064",
        "medicineId": "M028",
        "saltCompositions": [
            "Amoxicillin Trihydrate"
        ],
        "dosageStrengths": [
            "Amoxicillin 250mg",
            "Amoxicillin 500mg",
            "Amoxicillin 250mg Capsule",
            "Amoxicillin 500mg Capsule"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D009",
        "medicineId": "M029",
        "saltCompositions": [
            "Azithromycin Dihydrate"
        ],
        "dosageStrengths": [
            "Azithromycin 250mg",
            "Azithromycin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D062",
        "medicineId": "M029",
        "saltCompositions": [
            "Azithromycin Dihydrate"
        ],
        "dosageStrengths": [
            "Azithromycin 250mg",
            "Azithromycin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D004",
        "medicineId": "M029",
        "saltCompositions": [
            "Azithromycin Dihydrate"
        ],
        "dosageStrengths": [
            "Azithromycin 250mg",
            "Azithromycin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D030",
        "medicineId": "M029",
        "saltCompositions": [
            "Azithromycin Dihydrate"
        ],
        "dosageStrengths": [
            "Azithromycin 250mg",
            "Azithromycin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D068",
        "medicineId": "M029",
        "saltCompositions": [
            "Azithromycin Dihydrate"
        ],
        "dosageStrengths": [
            "Azithromycin 250mg",
            "Azithromycin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D030",
        "medicineId": "M030",
        "saltCompositions": [
            "Ciprofloxacin Hydrochloride"
        ],
        "dosageStrengths": [
            "Ciprofloxacin 250mg",
            "Ciprofloxacin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D023",
        "medicineId": "M030",
        "saltCompositions": [
            "Ciprofloxacin Hydrochloride"
        ],
        "dosageStrengths": [
            "Ciprofloxacin 250mg",
            "Ciprofloxacin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D025",
        "medicineId": "M030",
        "saltCompositions": [
            "Ciprofloxacin Hydrochloride"
        ],
        "dosageStrengths": [
            "Ciprofloxacin 250mg",
            "Ciprofloxacin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D072",
        "medicineId": "M030",
        "saltCompositions": [
            "Ciprofloxacin Hydrochloride"
        ],
        "dosageStrengths": [
            "Ciprofloxacin 250mg",
            "Ciprofloxacin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D082",
        "medicineId": "M030",
        "saltCompositions": [
            "Ciprofloxacin Hydrochloride"
        ],
        "dosageStrengths": [
            "Ciprofloxacin 250mg",
            "Ciprofloxacin 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D004",
        "medicineId": "M031",
        "saltCompositions": [
            "Ceftriaxone Sodium"
        ],
        "dosageStrengths": [
            "Ceftriaxone 250mg/vial",
            "Ceftriaxone 500mg/vial",
            "Ceftriaxone 1g/vial"
        ],
        "usageGuidelines": "Administer only by a trained healthcare professional; Verify dosage strength and check patient allergy history before administration; Use strict aseptic technique at the injection site; Rotate injection sites for insulin - use abdomen, thigh or upper arm; Do not share needles or syringes under any circumstances; Discard used needles immediately in a sharps disposal container; Observe patient for at least 30 minutes after injection for allergic reactions; Check insulin vial for clarity - do not use if cloudy or discoloured unless expected",
        "priority": 1
    },
    {
        "diseaseId": "D009",
        "medicineId": "M031",
        "saltCompositions": [
            "Ceftriaxone Sodium"
        ],
        "dosageStrengths": [
            "Ceftriaxone 250mg/vial",
            "Ceftriaxone 500mg/vial",
            "Ceftriaxone 1g/vial"
        ],
        "usageGuidelines": "Administer only by a trained healthcare professional; Verify dosage strength and check patient allergy history before administration; Use strict aseptic technique at the injection site; Rotate injection sites for insulin - use abdomen, thigh or upper arm; Do not share needles or syringes under any circumstances; Discard used needles immediately in a sharps disposal container; Observe patient for at least 30 minutes after injection for allergic reactions; Check insulin vial for clarity - do not use if cloudy or discoloured unless expected",
        "priority": 2
    },
    {
        "diseaseId": "D030",
        "medicineId": "M031",
        "saltCompositions": [
            "Ceftriaxone Sodium"
        ],
        "dosageStrengths": [
            "Ceftriaxone 250mg/vial",
            "Ceftriaxone 500mg/vial",
            "Ceftriaxone 1g/vial"
        ],
        "usageGuidelines": "Administer only by a trained healthcare professional; Verify dosage strength and check patient allergy history before administration; Use strict aseptic technique at the injection site; Rotate injection sites for insulin - use abdomen, thigh or upper arm; Do not share needles or syringes under any circumstances; Discard used needles immediately in a sharps disposal container; Observe patient for at least 30 minutes after injection for allergic reactions; Check insulin vial for clarity - do not use if cloudy or discoloured unless expected",
        "priority": 3
    },
    {
        "diseaseId": "D082",
        "medicineId": "M031",
        "saltCompositions": [
            "Ceftriaxone Sodium"
        ],
        "dosageStrengths": [
            "Ceftriaxone 250mg/vial",
            "Ceftriaxone 500mg/vial",
            "Ceftriaxone 1g/vial"
        ],
        "usageGuidelines": "Administer only by a trained healthcare professional; Verify dosage strength and check patient allergy history before administration; Use strict aseptic technique at the injection site; Rotate injection sites for insulin - use abdomen, thigh or upper arm; Do not share needles or syringes under any circumstances; Discard used needles immediately in a sharps disposal container; Observe patient for at least 30 minutes after injection for allergic reactions; Check insulin vial for clarity - do not use if cloudy or discoloured unless expected",
        "priority": 4
    },
    {
        "diseaseId": "D006",
        "medicineId": "M032",
        "saltCompositions": [
            "Doxycycline Hyclate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D014",
        "medicineId": "M032",
        "saltCompositions": [
            "Doxycycline Hyclate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D072",
        "medicineId": "M032",
        "saltCompositions": [
            "Doxycycline Hyclate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D030",
        "medicineId": "M033",
        "saltCompositions": [
            "Sulfamethoxazole + Trimethoprim"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D009",
        "medicineId": "M033",
        "saltCompositions": [
            "Sulfamethoxazole + Trimethoprim"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D083",
        "medicineId": "M033",
        "saltCompositions": [
            "Sulfamethoxazole + Trimethoprim"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D006",
        "medicineId": "M034",
        "saltCompositions": [
            "Hydroxychloroquine Sulfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D051",
        "medicineId": "M034",
        "saltCompositions": [
            "Hydroxychloroquine Sulfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D006",
        "medicineId": "M035",
        "saltCompositions": [
            "Artemether + Lumefantrine"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D015",
        "medicineId": "M036",
        "saltCompositions": [
            "Clotrimazole"
        ],
        "dosageStrengths": [
            "Clotrimazole Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D068",
        "medicineId": "M036",
        "saltCompositions": [
            "Clotrimazole"
        ],
        "dosageStrengths": [
            "Clotrimazole Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D087",
        "medicineId": "M036",
        "saltCompositions": [
            "Clotrimazole"
        ],
        "dosageStrengths": [
            "Clotrimazole Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 3
    },
    {
        "diseaseId": "D090",
        "medicineId": "M036",
        "saltCompositions": [
            "Clotrimazole"
        ],
        "dosageStrengths": [
            "Clotrimazole Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 4
    },
    {
        "diseaseId": "D015",
        "medicineId": "M037",
        "saltCompositions": [
            "Fluconazole"
        ],
        "dosageStrengths": [
            "Fluconazole 50mg",
            "Fluconazole 150mg Single Dose"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D068",
        "medicineId": "M037",
        "saltCompositions": [
            "Fluconazole"
        ],
        "dosageStrengths": [
            "Fluconazole 50mg",
            "Fluconazole 150mg Single Dose"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D090",
        "medicineId": "M037",
        "saltCompositions": [
            "Fluconazole"
        ],
        "dosageStrengths": [
            "Fluconazole 50mg",
            "Fluconazole 150mg Single Dose"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D015",
        "medicineId": "M038",
        "saltCompositions": [
            "Terbinafine Hydrochloride"
        ],
        "dosageStrengths": [
            "Terbinafine Cream 1%"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D087",
        "medicineId": "M038",
        "saltCompositions": [
            "Terbinafine Hydrochloride"
        ],
        "dosageStrengths": [
            "Terbinafine Cream 1%"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D090",
        "medicineId": "M038",
        "saltCompositions": [
            "Terbinafine Hydrochloride"
        ],
        "dosageStrengths": [
            "Terbinafine Cream 1%"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D013",
        "medicineId": "M039",
        "saltCompositions": [
            "Betamethasone Valerate"
        ],
        "dosageStrengths": [
            "Betamethasone Cream 0.1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D074",
        "medicineId": "M039",
        "saltCompositions": [
            "Betamethasone Valerate"
        ],
        "dosageStrengths": [
            "Betamethasone Cream 0.1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D075",
        "medicineId": "M039",
        "saltCompositions": [
            "Betamethasone Valerate"
        ],
        "dosageStrengths": [
            "Betamethasone Cream 0.1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 3
    },
    {
        "diseaseId": "D073",
        "medicineId": "M039",
        "saltCompositions": [
            "Betamethasone Valerate"
        ],
        "dosageStrengths": [
            "Betamethasone Cream 0.1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 4
    },
    {
        "diseaseId": "D013",
        "medicineId": "M040",
        "saltCompositions": [
            "Hydrocortisone Acetate"
        ],
        "dosageStrengths": [
            "Hydrocortisone Cream 0.5%",
            "Hydrocortisone Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D074",
        "medicineId": "M040",
        "saltCompositions": [
            "Hydrocortisone Acetate"
        ],
        "dosageStrengths": [
            "Hydrocortisone Cream 0.5%",
            "Hydrocortisone Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D073",
        "medicineId": "M040",
        "saltCompositions": [
            "Hydrocortisone Acetate"
        ],
        "dosageStrengths": [
            "Hydrocortisone Cream 0.5%",
            "Hydrocortisone Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 3
    },
    {
        "diseaseId": "D106",
        "medicineId": "M040",
        "saltCompositions": [
            "Hydrocortisone Acetate"
        ],
        "dosageStrengths": [
            "Hydrocortisone Cream 0.5%",
            "Hydrocortisone Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 4
    },
    {
        "diseaseId": "D012",
        "medicineId": "M041",
        "saltCompositions": [
            "Zinc Oxide + Calamine"
        ],
        "dosageStrengths": [
            "Calamine Lotion Standard"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 1
    },
    {
        "diseaseId": "D017",
        "medicineId": "M041",
        "saltCompositions": [
            "Zinc Oxide + Calamine"
        ],
        "dosageStrengths": [
            "Calamine Lotion Standard"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 2
    },
    {
        "diseaseId": "D073",
        "medicineId": "M041",
        "saltCompositions": [
            "Zinc Oxide + Calamine"
        ],
        "dosageStrengths": [
            "Calamine Lotion Standard"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 3
    },
    {
        "diseaseId": "D106",
        "medicineId": "M041",
        "saltCompositions": [
            "Zinc Oxide + Calamine"
        ],
        "dosageStrengths": [
            "Calamine Lotion Standard"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 4
    },
    {
        "diseaseId": "D016",
        "medicineId": "M042",
        "saltCompositions": [
            "Permethrin"
        ],
        "dosageStrengths": [
            "Permethrin Cream 5%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D017",
        "medicineId": "M043",
        "saltCompositions": [
            "Acyclovir"
        ],
        "dosageStrengths": [
            "Acyclovir Cream 5%"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D085",
        "medicineId": "M043",
        "saltCompositions": [
            "Acyclovir"
        ],
        "dosageStrengths": [
            "Acyclovir Cream 5%"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D104",
        "medicineId": "M043",
        "saltCompositions": [
            "Acyclovir"
        ],
        "dosageStrengths": [
            "Acyclovir Cream 5%"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D085",
        "medicineId": "M044",
        "saltCompositions": [
            "Valacyclovir Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D104",
        "medicineId": "M044",
        "saltCompositions": [
            "Valacyclovir Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D103",
        "medicineId": "M044",
        "saltCompositions": [
            "Valacyclovir Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D042",
        "medicineId": "M045",
        "saltCompositions": [
            "Ferrous Sulfate / Ferrous Fumarate"
        ],
        "dosageStrengths": [
            "Iron Syrup 25mg/5ml (Paediatric)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D067",
        "medicineId": "M045",
        "saltCompositions": [
            "Ferrous Sulfate / Ferrous Fumarate"
        ],
        "dosageStrengths": [
            "Iron Syrup 25mg/5ml (Paediatric)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D047",
        "medicineId": "M046",
        "saltCompositions": [
            "Methylcobalamin (Vit B12)"
        ],
        "dosageStrengths": [
            "Vitamin B12 500mcg",
            "Vitamin B12 1000mcg",
            "Vitamin B12 1mg/ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D095",
        "medicineId": "M046",
        "saltCompositions": [
            "Methylcobalamin (Vit B12)"
        ],
        "dosageStrengths": [
            "Vitamin B12 500mcg",
            "Vitamin B12 1000mcg",
            "Vitamin B12 1mg/ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D046",
        "medicineId": "M047",
        "saltCompositions": [
            "Cholecalciferol (Vitamin D3)"
        ],
        "dosageStrengths": [
            "Vitamin D3 1000 IU",
            "Vitamin D3 60000 IU (Weekly)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D050",
        "medicineId": "M047",
        "saltCompositions": [
            "Cholecalciferol (Vitamin D3)"
        ],
        "dosageStrengths": [
            "Vitamin D3 1000 IU",
            "Vitamin D3 60000 IU (Weekly)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D054",
        "medicineId": "M047",
        "saltCompositions": [
            "Cholecalciferol (Vitamin D3)"
        ],
        "dosageStrengths": [
            "Vitamin D3 1000 IU",
            "Vitamin D3 60000 IU (Weekly)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D046",
        "medicineId": "M048",
        "saltCompositions": [
            "Calcium Carbonate + Vitamin D3"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D050",
        "medicineId": "M048",
        "saltCompositions": [
            "Calcium Carbonate + Vitamin D3"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D055",
        "medicineId": "M048",
        "saltCompositions": [
            "Calcium Carbonate + Vitamin D3"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D069",
        "medicineId": "M048",
        "saltCompositions": [
            "Calcium Carbonate + Vitamin D3"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D042",
        "medicineId": "M049",
        "saltCompositions": [
            "Folic Acid (Pteroylglutamic Acid)"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D067",
        "medicineId": "M049",
        "saltCompositions": [
            "Folic Acid (Pteroylglutamic Acid)"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D070",
        "medicineId": "M049",
        "saltCompositions": [
            "Folic Acid (Pteroylglutamic Acid)"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D009",
        "medicineId": "M050",
        "saltCompositions": [
            "Multivitamin + Multimineral Complex"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D042",
        "medicineId": "M050",
        "saltCompositions": [
            "Multivitamin + Multimineral Complex"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D046",
        "medicineId": "M050",
        "saltCompositions": [
            "Multivitamin + Multimineral Complex"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D047",
        "medicineId": "M050",
        "saltCompositions": [
            "Multivitamin + Multimineral Complex"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D043",
        "medicineId": "M051",
        "saltCompositions": [
            "Metformin Hydrochloride"
        ],
        "dosageStrengths": [
            "Metformin 500mg",
            "Metformin 850mg",
            "Metformin 1000mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D067",
        "medicineId": "M051",
        "saltCompositions": [
            "Metformin Hydrochloride"
        ],
        "dosageStrengths": [
            "Metformin 500mg",
            "Metformin 850mg",
            "Metformin 1000mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D043",
        "medicineId": "M052",
        "saltCompositions": [
            "Glibenclamide / Glipizide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D043",
        "medicineId": "M053",
        "saltCompositions": [
            "Human Insulin (Recombinant)"
        ],
        "dosageStrengths": [
            "Insulin Regular 100 IU/ml"
        ],
        "usageGuidelines": "Administer only by a trained healthcare professional; Verify dosage strength and check patient allergy history before administration; Use strict aseptic technique at the injection site; Rotate injection sites for insulin - use abdomen, thigh or upper arm; Do not share needles or syringes under any circumstances; Discard used needles immediately in a sharps disposal container; Observe patient for at least 30 minutes after injection for allergic reactions; Check insulin vial for clarity - do not use if cloudy or discoloured unless expected",
        "priority": 1
    },
    {
        "diseaseId": "D044",
        "medicineId": "M054",
        "saltCompositions": [
            "Levothyroxine Sodium"
        ],
        "dosageStrengths": [
            "Levothyroxine 25mcg",
            "Levothyroxine 50mcg",
            "Levothyroxine 100mcg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D045",
        "medicineId": "M055",
        "saltCompositions": [
            "Methimazole / Carbimazole"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D039",
        "medicineId": "M056",
        "saltCompositions": [
            "Amlodipine Besylate"
        ],
        "dosageStrengths": [
            "Amlodipine 2.5mg",
            "Amlodipine 5mg",
            "Amlodipine 10mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D041",
        "medicineId": "M056",
        "saltCompositions": [
            "Amlodipine Besylate"
        ],
        "dosageStrengths": [
            "Amlodipine 2.5mg",
            "Amlodipine 5mg",
            "Amlodipine 10mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D039",
        "medicineId": "M057",
        "saltCompositions": [
            "Lisinopril / Enalapril Maleate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D101",
        "medicineId": "M057",
        "saltCompositions": [
            "Lisinopril / Enalapril Maleate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D039",
        "medicineId": "M058",
        "saltCompositions": [
            "Metoprolol Succinate / Atenolol"
        ],
        "dosageStrengths": [
            "Metoprolol 25mg",
            "Metoprolol 50mg",
            "Atenolol 25mg",
            "Atenolol 50mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D041",
        "medicineId": "M058",
        "saltCompositions": [
            "Metoprolol Succinate / Atenolol"
        ],
        "dosageStrengths": [
            "Metoprolol 25mg",
            "Metoprolol 50mg",
            "Atenolol 25mg",
            "Atenolol 50mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D037",
        "medicineId": "M058",
        "saltCompositions": [
            "Metoprolol Succinate / Atenolol"
        ],
        "dosageStrengths": [
            "Metoprolol 25mg",
            "Metoprolol 50mg",
            "Atenolol 25mg",
            "Atenolol 50mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D039",
        "medicineId": "M059",
        "saltCompositions": [
            "Furosemide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D101",
        "medicineId": "M059",
        "saltCompositions": [
            "Furosemide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D099",
        "medicineId": "M059",
        "saltCompositions": [
            "Furosemide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D100",
        "medicineId": "M060",
        "saltCompositions": [
            "Atorvastatin Calcium / Rosuvastatin"
        ],
        "dosageStrengths": [
            "Atorvastatin 10mg",
            "Atorvastatin 20mg",
            "Atorvastatin 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D093",
        "medicineId": "M060",
        "saltCompositions": [
            "Atorvastatin Calcium / Rosuvastatin"
        ],
        "dosageStrengths": [
            "Atorvastatin 10mg",
            "Atorvastatin 20mg",
            "Atorvastatin 40mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D049",
        "medicineId": "M061",
        "saltCompositions": [
            "Allopurinol"
        ],
        "dosageStrengths": [
            "Allopurinol 100mg",
            "Allopurinol 300mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D092",
        "medicineId": "M061",
        "saltCompositions": [
            "Allopurinol"
        ],
        "dosageStrengths": [
            "Allopurinol 100mg",
            "Allopurinol 300mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D049",
        "medicineId": "M062",
        "saltCompositions": [
            "Colchicine"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D051",
        "medicineId": "M063",
        "saltCompositions": [
            "Methotrexate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D075",
        "medicineId": "M063",
        "saltCompositions": [
            "Methotrexate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D051",
        "medicineId": "M064",
        "saltCompositions": [
            "Prednisolone"
        ],
        "dosageStrengths": [
            "Prednisolone 5mg",
            "Prednisolone 10mg",
            "Prednisolone 20mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D008",
        "medicineId": "M064",
        "saltCompositions": [
            "Prednisolone"
        ],
        "dosageStrengths": [
            "Prednisolone 5mg",
            "Prednisolone 10mg",
            "Prednisolone 20mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D012",
        "medicineId": "M064",
        "saltCompositions": [
            "Prednisolone"
        ],
        "dosageStrengths": [
            "Prednisolone 5mg",
            "Prednisolone 10mg",
            "Prednisolone 20mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D013",
        "medicineId": "M064",
        "saltCompositions": [
            "Prednisolone"
        ],
        "dosageStrengths": [
            "Prednisolone 5mg",
            "Prednisolone 10mg",
            "Prednisolone 20mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D075",
        "medicineId": "M064",
        "saltCompositions": [
            "Prednisolone"
        ],
        "dosageStrengths": [
            "Prednisolone 5mg",
            "Prednisolone 10mg",
            "Prednisolone 20mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 5
    },
    {
        "diseaseId": "D035",
        "medicineId": "M065",
        "saltCompositions": [
            "Betahistine Dihydrochloride"
        ],
        "dosageStrengths": [
            "Betahistine 8mg",
            "Betahistine 16mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D060",
        "medicineId": "M065",
        "saltCompositions": [
            "Betahistine Dihydrochloride"
        ],
        "dosageStrengths": [
            "Betahistine 8mg",
            "Betahistine 16mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D035",
        "medicineId": "M066",
        "saltCompositions": [
            "Cinnarizine / Meclizine Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D080",
        "medicineId": "M066",
        "saltCompositions": [
            "Cinnarizine / Meclizine Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D080",
        "medicineId": "M067",
        "saltCompositions": [
            "Promethazine Hydrochloride"
        ],
        "dosageStrengths": [
            "Promethazine 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D026",
        "medicineId": "M067",
        "saltCompositions": [
            "Promethazine Hydrochloride"
        ],
        "dosageStrengths": [
            "Promethazine 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D011",
        "medicineId": "M067",
        "saltCompositions": [
            "Promethazine Hydrochloride"
        ],
        "dosageStrengths": [
            "Promethazine 5mg/5ml"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D036",
        "medicineId": "M068",
        "saltCompositions": [
            "Melatonin"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D036",
        "medicineId": "M069",
        "saltCompositions": [
            "Zolpidem Tartrate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D037",
        "medicineId": "M070",
        "saltCompositions": [
            "Alprazolam"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D036",
        "medicineId": "M070",
        "saltCompositions": [
            "Alprazolam"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D038",
        "medicineId": "M071",
        "saltCompositions": [
            "Sertraline Hydrochloride"
        ],
        "dosageStrengths": [
            "Sertraline 25mg",
            "Sertraline 50mg",
            "Sertraline 100mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D037",
        "medicineId": "M071",
        "saltCompositions": [
            "Sertraline Hydrochloride"
        ],
        "dosageStrengths": [
            "Sertraline 25mg",
            "Sertraline 50mg",
            "Sertraline 100mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D067",
        "medicineId": "M071",
        "saltCompositions": [
            "Sertraline Hydrochloride"
        ],
        "dosageStrengths": [
            "Sertraline 25mg",
            "Sertraline 50mg",
            "Sertraline 100mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D038",
        "medicineId": "M072",
        "saltCompositions": [
            "Escitalopram Oxalate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D037",
        "medicineId": "M072",
        "saltCompositions": [
            "Escitalopram Oxalate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D001",
        "medicineId": "M073",
        "saltCompositions": [
            "Sodium Chloride 0.9% (Saline)"
        ],
        "dosageStrengths": [
            "Saline Nasal Spray Isotonic"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 1
    },
    {
        "diseaseId": "D010",
        "medicineId": "M073",
        "saltCompositions": [
            "Sodium Chloride 0.9% (Saline)"
        ],
        "dosageStrengths": [
            "Saline Nasal Spray Isotonic"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 2
    },
    {
        "diseaseId": "D011",
        "medicineId": "M073",
        "saltCompositions": [
            "Sodium Chloride 0.9% (Saline)"
        ],
        "dosageStrengths": [
            "Saline Nasal Spray Isotonic"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 3
    },
    {
        "diseaseId": "D091",
        "medicineId": "M073",
        "saltCompositions": [
            "Sodium Chloride 0.9% (Saline)"
        ],
        "dosageStrengths": [
            "Saline Nasal Spray Isotonic"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 4
    },
    {
        "diseaseId": "D001",
        "medicineId": "M074",
        "saltCompositions": [
            "Xylometazoline Hydrochloride"
        ],
        "dosageStrengths": [
            "Xylometazoline 0.05% Child",
            "Xylometazoline 0.1% Adult"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 1
    },
    {
        "diseaseId": "D010",
        "medicineId": "M074",
        "saltCompositions": [
            "Xylometazoline Hydrochloride"
        ],
        "dosageStrengths": [
            "Xylometazoline 0.05% Child",
            "Xylometazoline 0.1% Adult"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 2
    },
    {
        "diseaseId": "D091",
        "medicineId": "M074",
        "saltCompositions": [
            "Xylometazoline Hydrochloride"
        ],
        "dosageStrengths": [
            "Xylometazoline 0.05% Child",
            "Xylometazoline 0.1% Adult"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 3
    },
    {
        "diseaseId": "D011",
        "medicineId": "M075",
        "saltCompositions": [
            "Fluticasone Propionate"
        ],
        "dosageStrengths": [
            "Fluticasone Nasal Spray 50mcg/spray"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 1
    },
    {
        "diseaseId": "D010",
        "medicineId": "M075",
        "saltCompositions": [
            "Fluticasone Propionate"
        ],
        "dosageStrengths": [
            "Fluticasone Nasal Spray 50mcg/spray"
        ],
        "usageGuidelines": "Blow nose gently before use to clear nasal passages; Shake nasal spray before each use; Prime the spray pump before first use by pressing several times; Tilt head slightly forward during instillation for nasal drops; Breathe in gently through the nose while pressing the spray; Do not tilt head back after spraying to avoid swallowing; Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion; Clean the nasal spray tip with a clean tissue after each use; Do not share nasal sprays between patients",
        "priority": 2
    },
    {
        "diseaseId": "D056",
        "medicineId": "M076",
        "saltCompositions": [
            "Chloramphenicol"
        ],
        "dosageStrengths": [
            "Chloramphenicol Eye Drops 0.5%"
        ],
        "usageGuidelines": "Wash hands thoroughly before instilling eye drops; Tilt head back and gently pull lower eyelid down to create a pocket; Do not let dropper tip touch the eye or any surface to prevent contamination; Wait at least 5 minutes between instillation of different eye drops; Press gently on the inner corner of the eye for 1 minute after instillation; Discard opened bottle after 28 days even if solution remains; Remove contact lenses before use and reinsert after 15 minutes; Store in a cool dry place - some formulations require refrigeration",
        "priority": 1
    },
    {
        "diseaseId": "D105",
        "medicineId": "M076",
        "saltCompositions": [
            "Chloramphenicol"
        ],
        "dosageStrengths": [
            "Chloramphenicol Eye Drops 0.5%"
        ],
        "usageGuidelines": "Wash hands thoroughly before instilling eye drops; Tilt head back and gently pull lower eyelid down to create a pocket; Do not let dropper tip touch the eye or any surface to prevent contamination; Wait at least 5 minutes between instillation of different eye drops; Press gently on the inner corner of the eye for 1 minute after instillation; Discard opened bottle after 28 days even if solution remains; Remove contact lenses before use and reinsert after 15 minutes; Store in a cool dry place - some formulations require refrigeration",
        "priority": 2
    },
    {
        "diseaseId": "D057",
        "medicineId": "M077",
        "saltCompositions": [
            "Hydroxypropyl Methylcellulose (HPMC)"
        ],
        "dosageStrengths": [
            "Artificial Tears 0.3% HPMC",
            "Artificial Tears 0.5% HPMC"
        ],
        "usageGuidelines": "Wash hands thoroughly before instilling eye drops; Tilt head back and gently pull lower eyelid down to create a pocket; Do not let dropper tip touch the eye or any surface to prevent contamination; Wait at least 5 minutes between instillation of different eye drops; Press gently on the inner corner of the eye for 1 minute after instillation; Discard opened bottle after 28 days even if solution remains; Remove contact lenses before use and reinsert after 15 minutes; Store in a cool dry place - some formulations require refrigeration",
        "priority": 1
    },
    {
        "diseaseId": "D056",
        "medicineId": "M077",
        "saltCompositions": [
            "Hydroxypropyl Methylcellulose (HPMC)"
        ],
        "dosageStrengths": [
            "Artificial Tears 0.3% HPMC",
            "Artificial Tears 0.5% HPMC"
        ],
        "usageGuidelines": "Wash hands thoroughly before instilling eye drops; Tilt head back and gently pull lower eyelid down to create a pocket; Do not let dropper tip touch the eye or any surface to prevent contamination; Wait at least 5 minutes between instillation of different eye drops; Press gently on the inner corner of the eye for 1 minute after instillation; Discard opened bottle after 28 days even if solution remains; Remove contact lenses before use and reinsert after 15 minutes; Store in a cool dry place - some formulations require refrigeration",
        "priority": 2
    },
    {
        "diseaseId": "D058",
        "medicineId": "M078",
        "saltCompositions": [
            "Timolol Maleate"
        ],
        "dosageStrengths": [
            "Timolol Eye Drops 0.25%",
            "Timolol Eye Drops 0.5%"
        ],
        "usageGuidelines": "Wash hands thoroughly before instilling eye drops; Tilt head back and gently pull lower eyelid down to create a pocket; Do not let dropper tip touch the eye or any surface to prevent contamination; Wait at least 5 minutes between instillation of different eye drops; Press gently on the inner corner of the eye for 1 minute after instillation; Discard opened bottle after 28 days even if solution remains; Remove contact lenses before use and reinsert after 15 minutes; Store in a cool dry place - some formulations require refrigeration",
        "priority": 1
    },
    {
        "diseaseId": "D059",
        "medicineId": "M079",
        "saltCompositions": [
            "Ciprofloxacin Hydrochloride"
        ],
        "dosageStrengths": [
            "Ciprofloxacin Ear Drops 0.3%"
        ],
        "usageGuidelines": "Warm the bottle gently in your hands for 1-2 minutes before use; Lie down with the affected ear facing upward; For adults pull earlobe gently back and upward to straighten the canal; For children pull earlobe gently back and downward; Instill the prescribed number of drops and remain in position for 5-10 minutes; Plug ear lightly with a small cotton ball if instructed; Do not use ear drops if eardrum perforation is suspected unless specifically prescribed; Complete the full prescribed course even if symptoms resolve early",
        "priority": 1
    },
    {
        "diseaseId": "D109",
        "medicineId": "M080",
        "saltCompositions": [
            "Docusate Sodium / H2O2 (Ear)"
        ],
        "dosageStrengths": [
            "Ear Wax Softener H2O2 3%"
        ],
        "usageGuidelines": "Warm the bottle gently in your hands for 1-2 minutes before use; Lie down with the affected ear facing upward; For adults pull earlobe gently back and upward to straighten the canal; For children pull earlobe gently back and downward; Instill the prescribed number of drops and remain in position for 5-10 minutes; Plug ear lightly with a small cotton ball if instructed; Do not use ear drops if eardrum perforation is suspected unless specifically prescribed; Complete the full prescribed course even if symptoms resolve early",
        "priority": 1
    },
    {
        "diseaseId": "D050",
        "medicineId": "M081",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac Gel 1%",
            "Diclofenac Gel 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D052",
        "medicineId": "M081",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac Gel 1%",
            "Diclofenac Gel 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D053",
        "medicineId": "M081",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac Gel 1%",
            "Diclofenac Gel 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 3
    },
    {
        "diseaseId": "D054",
        "medicineId": "M081",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac Gel 1%",
            "Diclofenac Gel 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 4
    },
    {
        "diseaseId": "D097",
        "medicineId": "M081",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac Gel 1%",
            "Diclofenac Gel 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 5
    },
    {
        "diseaseId": "D110",
        "medicineId": "M081",
        "saltCompositions": [
            "Diclofenac Sodium"
        ],
        "dosageStrengths": [
            "Diclofenac Gel 1%",
            "Diclofenac Gel 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 6
    },
    {
        "diseaseId": "D014",
        "medicineId": "M082",
        "saltCompositions": [
            "Mupirocin"
        ],
        "dosageStrengths": [
            "Mupirocin Ointment 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D072",
        "medicineId": "M082",
        "saltCompositions": [
            "Mupirocin"
        ],
        "dosageStrengths": [
            "Mupirocin Ointment 2%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D071",
        "medicineId": "M083",
        "saltCompositions": [
            "Silver Sulfadiazine"
        ],
        "dosageStrengths": [
            "Silver Sulfadiazine Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D072",
        "medicineId": "M083",
        "saltCompositions": [
            "Silver Sulfadiazine"
        ],
        "dosageStrengths": [
            "Silver Sulfadiazine Cream 1%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D071",
        "medicineId": "M084",
        "saltCompositions": [
            "Povidone-Iodine"
        ],
        "dosageStrengths": [
            "Povidone-Iodine Solution 10%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D072",
        "medicineId": "M084",
        "saltCompositions": [
            "Povidone-Iodine"
        ],
        "dosageStrengths": [
            "Povidone-Iodine Solution 10%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D013",
        "medicineId": "M085",
        "saltCompositions": [
            "Clobetasol Propionate"
        ],
        "dosageStrengths": [
            "Clobetasol Cream 0.05%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D075",
        "medicineId": "M085",
        "saltCompositions": [
            "Clobetasol Propionate"
        ],
        "dosageStrengths": [
            "Clobetasol Cream 0.05%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D074",
        "medicineId": "M085",
        "saltCompositions": [
            "Clobetasol Propionate"
        ],
        "dosageStrengths": [
            "Clobetasol Cream 0.05%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 3
    },
    {
        "diseaseId": "D016",
        "medicineId": "M086",
        "saltCompositions": [
            "Benzyl Benzoate"
        ],
        "dosageStrengths": [
            "Benzyl Benzoate Lotion 25%"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 1
    },
    {
        "diseaseId": "D075",
        "medicineId": "M087",
        "saltCompositions": [
            "Coal Tar"
        ],
        "dosageStrengths": [
            "Coal Tar Shampoo 2-5%"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 1
    },
    {
        "diseaseId": "D088",
        "medicineId": "M087",
        "saltCompositions": [
            "Coal Tar"
        ],
        "dosageStrengths": [
            "Coal Tar Shampoo 2-5%"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 2
    },
    {
        "diseaseId": "D089",
        "medicineId": "M088",
        "saltCompositions": [
            "Minoxidil"
        ],
        "dosageStrengths": [
            "Minoxidil Solution 2%",
            "Minoxidil Solution 5%"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 1
    },
    {
        "diseaseId": "D088",
        "medicineId": "M089",
        "saltCompositions": [
            "Ketoconazole"
        ],
        "dosageStrengths": [
            "Ketoconazole Shampoo 2%"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 1
    },
    {
        "diseaseId": "D015",
        "medicineId": "M089",
        "saltCompositions": [
            "Ketoconazole"
        ],
        "dosageStrengths": [
            "Ketoconazole Shampoo 2%"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 2
    },
    {
        "diseaseId": "D087",
        "medicineId": "M089",
        "saltCompositions": [
            "Ketoconazole"
        ],
        "dosageStrengths": [
            "Ketoconazole Shampoo 2%"
        ],
        "usageGuidelines": "For shampoo wet hair thoroughly then apply and massage into the scalp; Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly; For body lotion or scabicide apply to the entire body from neck downward on clean dry skin; Leave scabicide lotion on for 8-12 hours typically overnight then wash off; Do not apply to the face or mucous membranes unless specifically instructed; Wash all clothing bedding and towels in hot water after scabicide treatment; Repeat scabicide application after 7 days if advised",
        "priority": 3
    },
    {
        "diseaseId": "D030",
        "medicineId": "M090",
        "saltCompositions": [
            "Nitrofurantoin / Trimethoprim"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D032",
        "medicineId": "M091",
        "saltCompositions": [
            "Tamsulosin Hydrochloride"
        ],
        "dosageStrengths": [
            "Tamsulosin 0.4mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D066",
        "medicineId": "M092",
        "saltCompositions": [
            "Norethisterone / Mifepristone"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D067",
        "medicineId": "M092",
        "saltCompositions": [
            "Norethisterone / Mifepristone"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D066",
        "medicineId": "M093",
        "saltCompositions": [
            "Mefenamic Acid"
        ],
        "dosageStrengths": [
            "Mefenamic Acid 250mg",
            "Mefenamic Acid 500mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D068",
        "medicineId": "M094",
        "saltCompositions": [
            "Clotrimazole"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D069",
        "medicineId": "M095",
        "saltCompositions": [
            "Conjugated Estrogen + Progestogen"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D022",
        "medicineId": "M096",
        "saltCompositions": [
            "Dicyclomine Hydrochloride / Mebeverine"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D019",
        "medicineId": "M096",
        "saltCompositions": [
            "Dicyclomine Hydrochloride / Mebeverine"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D021",
        "medicineId": "M096",
        "saltCompositions": [
            "Dicyclomine Hydrochloride / Mebeverine"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D020",
        "medicineId": "M097",
        "saltCompositions": [
            "Sucralfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D019",
        "medicineId": "M097",
        "saltCompositions": [
            "Sucralfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D093",
        "medicineId": "M098",
        "saltCompositions": [
            "Ursodeoxycholic Acid"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D028",
        "medicineId": "M098",
        "saltCompositions": [
            "Ursodeoxycholic Acid"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D094",
        "medicineId": "M098",
        "saltCompositions": [
            "Ursodeoxycholic Acid"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D093",
        "medicineId": "M099",
        "saltCompositions": [
            "Silymarin (Silibinin)"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D028",
        "medicineId": "M099",
        "saltCompositions": [
            "Silymarin (Silibinin)"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D029",
        "medicineId": "M099",
        "saltCompositions": [
            "Silymarin (Silibinin)"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D098",
        "medicineId": "M100",
        "saltCompositions": [
            "Warfarin Sodium / Clopidogrel"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D039",
        "medicineId": "M100",
        "saltCompositions": [
            "Warfarin Sodium / Clopidogrel"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D098",
        "medicineId": "M101",
        "saltCompositions": [],
        "dosageStrengths": [],
        "usageGuidelines": "",
        "priority": 1
    },
    {
        "diseaseId": "D099",
        "medicineId": "M101",
        "saltCompositions": [],
        "dosageStrengths": [],
        "usageGuidelines": "",
        "priority": 2
    },
    {
        "diseaseId": "D023",
        "medicineId": "M102",
        "saltCompositions": [
            "Lactobacillus acidophilus (Probiotic)"
        ],
        "dosageStrengths": [
            "Probiotics 1 Billion CFU",
            "Probiotics 5 Billion CFU"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D022",
        "medicineId": "M102",
        "saltCompositions": [
            "Lactobacillus acidophilus (Probiotic)"
        ],
        "dosageStrengths": [
            "Probiotics 1 Billion CFU",
            "Probiotics 5 Billion CFU"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D025",
        "medicineId": "M102",
        "saltCompositions": [
            "Lactobacillus acidophilus (Probiotic)"
        ],
        "dosageStrengths": [
            "Probiotics 1 Billion CFU",
            "Probiotics 5 Billion CFU"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D001",
        "medicineId": "M103",
        "saltCompositions": [
            "Zinc Gluconate / Sulfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D023",
        "medicineId": "M103",
        "saltCompositions": [
            "Zinc Gluconate / Sulfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D042",
        "medicineId": "M103",
        "saltCompositions": [
            "Zinc Gluconate / Sulfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D100",
        "medicineId": "M103",
        "saltCompositions": [
            "Zinc Gluconate / Sulfate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 4
    },
    {
        "diseaseId": "D054",
        "medicineId": "M104",
        "saltCompositions": [
            "Magnesium Citrate / Oxide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D033",
        "medicineId": "M104",
        "saltCompositions": [
            "Magnesium Citrate / Oxide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D036",
        "medicineId": "M104",
        "saltCompositions": [
            "Magnesium Citrate / Oxide"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D100",
        "medicineId": "M105",
        "saltCompositions": [
            "Omega-3 Fatty Acids (EPA + DHA)"
        ],
        "dosageStrengths": [
            "Omega-3 500mg (EPA+DHA)",
            "Omega-3 1000mg (EPA+DHA)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D051",
        "medicineId": "M105",
        "saltCompositions": [
            "Omega-3 Fatty Acids (EPA + DHA)"
        ],
        "dosageStrengths": [
            "Omega-3 500mg (EPA+DHA)",
            "Omega-3 1000mg (EPA+DHA)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D043",
        "medicineId": "M105",
        "saltCompositions": [
            "Omega-3 Fatty Acids (EPA + DHA)"
        ],
        "dosageStrengths": [
            "Omega-3 500mg (EPA+DHA)",
            "Omega-3 1000mg (EPA+DHA)"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D034",
        "medicineId": "M106",
        "saltCompositions": [
            "Amitriptyline Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D095",
        "medicineId": "M106",
        "saltCompositions": [
            "Amitriptyline Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D036",
        "medicineId": "M106",
        "saltCompositions": [
            "Amitriptyline Hydrochloride"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D095",
        "medicineId": "M107",
        "saltCompositions": [
            "Gabapentin"
        ],
        "dosageStrengths": [
            "Gabapentin 100mg",
            "Gabapentin 300mg",
            "Gabapentin 400mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D097",
        "medicineId": "M107",
        "saltCompositions": [
            "Gabapentin"
        ],
        "dosageStrengths": [
            "Gabapentin 100mg",
            "Gabapentin 300mg",
            "Gabapentin 400mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D085",
        "medicineId": "M107",
        "saltCompositions": [
            "Gabapentin"
        ],
        "dosageStrengths": [
            "Gabapentin 100mg",
            "Gabapentin 300mg",
            "Gabapentin 400mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D034",
        "medicineId": "M108",
        "saltCompositions": [
            "Sumatriptan Succinate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D034",
        "medicineId": "M109",
        "saltCompositions": [
            "Ergotamine + Caffeine"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D034",
        "medicineId": "M110",
        "saltCompositions": [
            "Topiramate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D036",
        "medicineId": "M110",
        "saltCompositions": [
            "Topiramate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D001",
        "medicineId": "M111",
        "saltCompositions": [
            "Codeine Phosphate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D007",
        "medicineId": "M111",
        "saltCompositions": [
            "Codeine Phosphate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    },
    {
        "diseaseId": "D083",
        "medicineId": "M111",
        "saltCompositions": [
            "Codeine Phosphate"
        ],
        "dosageStrengths": [],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 3
    },
    {
        "diseaseId": "D062",
        "medicineId": "M112",
        "saltCompositions": [
            "Benzydamine Hydrochloride"
        ],
        "dosageStrengths": [
            "Benzydamine Mouthwash 0.15%"
        ],
        "usageGuidelines": "Do not eat or drink for at least 30 minutes before and after using mouthwash; Measure the correct volume using the cap provided; Swish vigorously in the mouth for 30 seconds then spit out - do not swallow; Dilute with equal amount of water if mouth is sensitive; Do not use chlorhexidine mouthwash for more than 2 consecutive weeks; Avoid using immediately after brushing teeth to preserve effectiveness",
        "priority": 1
    },
    {
        "diseaseId": "D065",
        "medicineId": "M112",
        "saltCompositions": [
            "Benzydamine Hydrochloride"
        ],
        "dosageStrengths": [
            "Benzydamine Mouthwash 0.15%"
        ],
        "usageGuidelines": "Do not eat or drink for at least 30 minutes before and after using mouthwash; Measure the correct volume using the cap provided; Swish vigorously in the mouth for 30 seconds then spit out - do not swallow; Dilute with equal amount of water if mouth is sensitive; Do not use chlorhexidine mouthwash for more than 2 consecutive weeks; Avoid using immediately after brushing teeth to preserve effectiveness",
        "priority": 2
    },
    {
        "diseaseId": "D061",
        "medicineId": "M112",
        "saltCompositions": [
            "Benzydamine Hydrochloride"
        ],
        "dosageStrengths": [
            "Benzydamine Mouthwash 0.15%"
        ],
        "usageGuidelines": "Do not eat or drink for at least 30 minutes before and after using mouthwash; Measure the correct volume using the cap provided; Swish vigorously in the mouth for 30 seconds then spit out - do not swallow; Dilute with equal amount of water if mouth is sensitive; Do not use chlorhexidine mouthwash for more than 2 consecutive weeks; Avoid using immediately after brushing teeth to preserve effectiveness",
        "priority": 3
    },
    {
        "diseaseId": "D065",
        "medicineId": "M113",
        "saltCompositions": [
            "Chlorhexidine Gluconate"
        ],
        "dosageStrengths": [
            "Chlorhexidine Mouthwash 0.2%"
        ],
        "usageGuidelines": "Do not eat or drink for at least 30 minutes before and after using mouthwash; Measure the correct volume using the cap provided; Swish vigorously in the mouth for 30 seconds then spit out - do not swallow; Dilute with equal amount of water if mouth is sensitive; Do not use chlorhexidine mouthwash for more than 2 consecutive weeks; Avoid using immediately after brushing teeth to preserve effectiveness",
        "priority": 1
    },
    {
        "diseaseId": "D064",
        "medicineId": "M113",
        "saltCompositions": [
            "Chlorhexidine Gluconate"
        ],
        "dosageStrengths": [
            "Chlorhexidine Mouthwash 0.2%"
        ],
        "usageGuidelines": "Do not eat or drink for at least 30 minutes before and after using mouthwash; Measure the correct volume using the cap provided; Swish vigorously in the mouth for 30 seconds then spit out - do not swallow; Dilute with equal amount of water if mouth is sensitive; Do not use chlorhexidine mouthwash for more than 2 consecutive weeks; Avoid using immediately after brushing teeth to preserve effectiveness",
        "priority": 2
    },
    {
        "diseaseId": "D104",
        "medicineId": "M113",
        "saltCompositions": [
            "Chlorhexidine Gluconate"
        ],
        "dosageStrengths": [
            "Chlorhexidine Mouthwash 0.2%"
        ],
        "usageGuidelines": "Do not eat or drink for at least 30 minutes before and after using mouthwash; Measure the correct volume using the cap provided; Swish vigorously in the mouth for 30 seconds then spit out - do not swallow; Dilute with equal amount of water if mouth is sensitive; Do not use chlorhexidine mouthwash for more than 2 consecutive weeks; Avoid using immediately after brushing teeth to preserve effectiveness",
        "priority": 3
    },
    {
        "diseaseId": "D086",
        "medicineId": "M114",
        "saltCompositions": [
            "Salicylic Acid"
        ],
        "dosageStrengths": [
            "Salicylic Acid Solution 10%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 1
    },
    {
        "diseaseId": "D014",
        "medicineId": "M114",
        "saltCompositions": [
            "Salicylic Acid"
        ],
        "dosageStrengths": [
            "Salicylic Acid Solution 10%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 2
    },
    {
        "diseaseId": "D088",
        "medicineId": "M114",
        "saltCompositions": [
            "Salicylic Acid"
        ],
        "dosageStrengths": [
            "Salicylic Acid Solution 10%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 3
    },
    {
        "diseaseId": "D090",
        "medicineId": "M114",
        "saltCompositions": [
            "Salicylic Acid"
        ],
        "dosageStrengths": [
            "Salicylic Acid Solution 10%"
        ],
        "usageGuidelines": "Apply a thin layer to the affected area only; Wash hands thoroughly before and after application; Do not apply to broken or infected skin unless it is a wound-specific product; Avoid contact with eyes, nostrils, and mouth; Do not cover with airtight dressing unless specifically advised; Apply 2-3 times daily or as directed on the label; Do not use potent corticosteroid cream on face, groin, or underarms long-term; For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse; Do not stop steroid cream abruptly after prolonged use - taper as advised",
        "priority": 4
    },
    {
        "diseaseId": "D076",
        "medicineId": "M115",
        "saltCompositions": [
            "Diosmin + Hesperidin"
        ],
        "dosageStrengths": [
            "Diosmin 450mg + Hesperidin 50mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 1
    },
    {
        "diseaseId": "D099",
        "medicineId": "M115",
        "saltCompositions": [
            "Diosmin + Hesperidin"
        ],
        "dosageStrengths": [
            "Diosmin 450mg + Hesperidin 50mg"
        ],
        "usageGuidelines": "Take with a full glass of water; Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron); Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine); Do not crush or chew enteric-coated or SR tablets; Take at the same time daily for chronic medications; Complete the full antibiotic course even if symptoms improve; Avoid alcohol during treatment; Do not double-dose if a dose is missed - skip and continue schedule; Swallow capsules whole with water - do not open unless instructed; Store at room temperature away from sunlight and moisture; Space Calcium + Thyroid medication doses by at least 4 hours; Do not stop blood pressure, thyroid or diabetes medicines without doctor advice",
        "priority": 2
    }
],
    sideEffects: [
    {
        "medicineId": "M001",
        "effects": [
            "Liver Enzyme Elevation / Hepatotoxicity"
        ],
        "severity_map": {
            "Liver Enzyme Elevation / Hepatotoxicity": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M002",
        "effects": [
            "Nausea",
            "Stomach Pain / GI Upset",
            "Gastric Ulcer / GI Bleeding",
            "Kidney Damage (Nephrotoxicity)",
            "Increased Blood Pressure",
            "Hypertension (Paradoxical / Drug-induced)",
            "Blood Thinning / Bleeding Risk",
            "Worsening of Asthma (Bronchospasm)",
            "Tinnitus (Drug-induced)"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Stomach Pain / GI Upset": "mild",
            "Gastric Ulcer / GI Bleeding": "severe",
            "Kidney Damage (Nephrotoxicity)": "severe",
            "Increased Blood Pressure": "moderate",
            "Hypertension (Paradoxical / Drug-induced)": "moderate",
            "Blood Thinning / Bleeding Risk": "severe",
            "Worsening of Asthma (Bronchospasm)": "severe",
            "Tinnitus (Drug-induced)": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M003",
        "effects": [
            "Nausea",
            "Stomach Pain / GI Upset",
            "Gastric Ulcer / GI Bleeding",
            "Kidney Damage (Nephrotoxicity)",
            "Blood Thinning / Bleeding Risk",
            "Worsening of Asthma (Bronchospasm)",
            "Hyperuricemia (Raised Uric Acid)",
            "Tinnitus (Drug-induced)"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Stomach Pain / GI Upset": "mild",
            "Gastric Ulcer / GI Bleeding": "severe",
            "Kidney Damage (Nephrotoxicity)": "severe",
            "Blood Thinning / Bleeding Risk": "severe",
            "Worsening of Asthma (Bronchospasm)": "severe",
            "Hyperuricemia (Raised Uric Acid)": "mild",
            "Tinnitus (Drug-induced)": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M004",
        "effects": [
            "Nausea",
            "Vomiting",
            "Stomach Pain / GI Upset",
            "Gastric Ulcer / GI Bleeding",
            "Kidney Damage (Nephrotoxicity)",
            "Increased Blood Pressure",
            "Hypertension (Paradoxical / Drug-induced)",
            "Blood Thinning / Bleeding Risk"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Vomiting": "mild",
            "Stomach Pain / GI Upset": "mild",
            "Gastric Ulcer / GI Bleeding": "severe",
            "Kidney Damage (Nephrotoxicity)": "severe",
            "Increased Blood Pressure": "moderate",
            "Hypertension (Paradoxical / Drug-induced)": "moderate",
            "Blood Thinning / Bleeding Risk": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M005",
        "effects": [
            "Stomach Pain / GI Upset",
            "Gastric Ulcer / GI Bleeding"
        ],
        "severity_map": {
            "Stomach Pain / GI Upset": "mild",
            "Gastric Ulcer / GI Bleeding": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M006",
        "effects": [
            "Photosensitivity Rash"
        ],
        "severity_map": {
            "Photosensitivity Rash": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M007",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M008",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M009",
        "effects": [
            "Drowsiness / Sedation",
            "Dry Mouth",
            "Urinary Retention",
            "Blurred Vision (Drug-induced)",
            "Hallucinations / Confusion in Elderly"
        ],
        "severity_map": {
            "Drowsiness / Sedation": "mild",
            "Dry Mouth": "mild",
            "Urinary Retention": "moderate",
            "Blurred Vision (Drug-induced)": "mild",
            "Hallucinations / Confusion in Elderly": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M010",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M011",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M012",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M013",
        "effects": [
            "Hypokalemia (Low Potassium)",
            "Tachycardia / Heart Rate Increase",
            "Insomnia / Sleep Disturbance",
            "Muscle Cramps",
            "Increased Blood Glucose",
            "Bad Taste in Mouth Post Inhaler"
        ],
        "severity_map": {
            "Hypokalemia (Low Potassium)": "moderate",
            "Tachycardia / Heart Rate Increase": "moderate",
            "Insomnia / Sleep Disturbance": "mild",
            "Muscle Cramps": "mild",
            "Increased Blood Glucose": "moderate",
            "Bad Taste in Mouth Post Inhaler": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M014",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M015",
        "effects": [
            "Bone Density Loss (Osteoporosis Risk)",
            "Oral Candidiasis (Thrush)",
            "Adrenal Suppression",
            "Bad Taste in Mouth Post Inhaler"
        ],
        "severity_map": {
            "Bone Density Loss (Osteoporosis Risk)": "severe",
            "Oral Candidiasis (Thrush)": "mild",
            "Adrenal Suppression": "severe",
            "Bad Taste in Mouth Post Inhaler": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M016",
        "effects": [
            "Headache",
            "Vitamin B12 Deficiency (Long-term PPI/Metformin)",
            "Gynecomastia in Males"
        ],
        "severity_map": {
            "Headache": "mild",
            "Vitamin B12 Deficiency (Long-term PPI/Metformin)": "moderate",
            "Gynecomastia in Males": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M017",
        "effects": [
            "Headache",
            "Vitamin B12 Deficiency (Long-term PPI/Metformin)",
            "Gynecomastia in Males"
        ],
        "severity_map": {
            "Headache": "mild",
            "Vitamin B12 Deficiency (Long-term PPI/Metformin)": "moderate",
            "Gynecomastia in Males": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M018",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M019",
        "effects": [
            "Constipation",
            "Bloating / Abdominal Fullness"
        ],
        "severity_map": {
            "Constipation": "mild",
            "Bloating / Abdominal Fullness": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M020",
        "effects": [
            "Gynecomastia in Males",
            "Tardive Dyskinesia (Long-term Antiemetic)"
        ],
        "severity_map": {
            "Gynecomastia in Males": "mild",
            "Tardive Dyskinesia (Long-term Antiemetic)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M021",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M022",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M023",
        "effects": [
            "Constipation"
        ],
        "severity_map": {
            "Constipation": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M024",
        "effects": [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Skin Rash / Urticaria",
            "Liver Enzyme Elevation / Hepatotoxicity",
            "Metallic Taste in Mouth",
            "CNS Effects (Confusion / Seizures)",
            "Peripheral Neuropathy (Drug-induced)",
            "Antibiotic-Associated Colitis (C. difficile)",
            "Dark / Discolored Urine",
            "Hemolytic Anemia",
            "Stevens-Johnson Syndrome (Rare)"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Vomiting": "mild",
            "Diarrhea": "mild",
            "Skin Rash / Urticaria": "moderate",
            "Liver Enzyme Elevation / Hepatotoxicity": "severe",
            "Metallic Taste in Mouth": "mild",
            "CNS Effects (Confusion / Seizures)": "severe",
            "Peripheral Neuropathy (Drug-induced)": "moderate",
            "Antibiotic-Associated Colitis (C. difficile)": "severe",
            "Dark / Discolored Urine": "mild",
            "Hemolytic Anemia": "severe",
            "Stevens-Johnson Syndrome (Rare)": "critical"
        },
        "contraindications": []
    },
    {
        "medicineId": "M025",
        "effects": [
            "Flatulence / Gas",
            "Bloating / Abdominal Fullness"
        ],
        "severity_map": {
            "Flatulence / Gas": "mild",
            "Bloating / Abdominal Fullness": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M026",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M027",
        "effects": [
            "Flatulence / Gas",
            "Bloating / Abdominal Fullness",
            "Abdominal Bloating from Fibre Supplement"
        ],
        "severity_map": {
            "Flatulence / Gas": "mild",
            "Bloating / Abdominal Fullness": "mild",
            "Abdominal Bloating from Fibre Supplement": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M028",
        "effects": [
            "Nausea",
            "Diarrhea",
            "Skin Rash / Urticaria",
            "Anaphylaxis (Severe Allergy)",
            "Antibiotic-Associated Colitis (C. difficile)"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Diarrhea": "mild",
            "Skin Rash / Urticaria": "moderate",
            "Anaphylaxis (Severe Allergy)": "critical",
            "Antibiotic-Associated Colitis (C. difficile)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M029",
        "effects": [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Skin Rash / Urticaria",
            "QT Prolongation (Cardiac Risk)",
            "Antibiotic-Associated Colitis (C. difficile)",
            "Pancreatitis (Rare)"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Vomiting": "mild",
            "Diarrhea": "mild",
            "Skin Rash / Urticaria": "moderate",
            "QT Prolongation (Cardiac Risk)": "severe",
            "Antibiotic-Associated Colitis (C. difficile)": "severe",
            "Pancreatitis (Rare)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M030",
        "effects": [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Photosensitivity (Sun Sensitivity)",
            "Kidney Damage (Nephrotoxicity)",
            "Tendon Rupture Risk",
            "CNS Effects (Confusion / Seizures)",
            "Peripheral Neuropathy (Drug-induced)",
            "Photosensitivity Rash",
            "QT Prolongation (Cardiac Risk)",
            "Antibiotic-Associated Colitis (C. difficile)"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Vomiting": "mild",
            "Diarrhea": "mild",
            "Photosensitivity (Sun Sensitivity)": "mild",
            "Kidney Damage (Nephrotoxicity)": "severe",
            "Tendon Rupture Risk": "severe",
            "CNS Effects (Confusion / Seizures)": "severe",
            "Peripheral Neuropathy (Drug-induced)": "moderate",
            "Photosensitivity Rash": "mild",
            "QT Prolongation (Cardiac Risk)": "severe",
            "Antibiotic-Associated Colitis (C. difficile)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M031",
        "effects": [
            "Anaphylaxis (Severe Allergy)",
            "Kidney Damage (Nephrotoxicity)",
            "Hearing Loss (Ototoxicity)",
            "Injection Site Reaction (Pain / Swelling)",
            "Warm or Numb Injection Site Feeling"
        ],
        "severity_map": {
            "Anaphylaxis (Severe Allergy)": "critical",
            "Kidney Damage (Nephrotoxicity)": "severe",
            "Hearing Loss (Ototoxicity)": "severe",
            "Injection Site Reaction (Pain / Swelling)": "mild",
            "Warm or Numb Injection Site Feeling": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M032",
        "effects": [
            "Photosensitivity (Sun Sensitivity)",
            "Photosensitivity Rash",
            "Teeth Discoloration (Paediatric Tetracycline)",
            "Dark / Discolored Urine",
            "Photosensitive Nail Changes",
            "Photodamage / Increased UV Sensitivity"
        ],
        "severity_map": {
            "Photosensitivity (Sun Sensitivity)": "mild",
            "Photosensitivity Rash": "mild",
            "Teeth Discoloration (Paediatric Tetracycline)": "mild",
            "Dark / Discolored Urine": "mild",
            "Photosensitive Nail Changes": "mild",
            "Photodamage / Increased UV Sensitivity": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M033",
        "effects": [
            "Skin Rash / Urticaria",
            "Antibiotic-Associated Colitis (C. difficile)",
            "Hemolytic Anemia",
            "Stevens-Johnson Syndrome (Rare)",
            "Photodamage / Increased UV Sensitivity"
        ],
        "severity_map": {
            "Skin Rash / Urticaria": "moderate",
            "Antibiotic-Associated Colitis (C. difficile)": "severe",
            "Hemolytic Anemia": "severe",
            "Stevens-Johnson Syndrome (Rare)": "critical",
            "Photodamage / Increased UV Sensitivity": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M034",
        "effects": [
            "Headache",
            "Skin Rash / Urticaria",
            "Anaphylaxis (Severe Allergy)",
            "Photosensitivity (Sun Sensitivity)",
            "Muscle Pain / Myopathy",
            "Liver Enzyme Elevation / Hepatotoxicity",
            "Reduced White Blood Cell Count",
            "Hypothyroidism (Drug-induced)"
        ],
        "severity_map": {
            "Headache": "mild",
            "Skin Rash / Urticaria": "moderate",
            "Anaphylaxis (Severe Allergy)": "critical",
            "Photosensitivity (Sun Sensitivity)": "mild",
            "Muscle Pain / Myopathy": "moderate",
            "Liver Enzyme Elevation / Hepatotoxicity": "severe",
            "Reduced White Blood Cell Count": "severe",
            "Hypothyroidism (Drug-induced)": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M035",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M036",
        "effects": [
            "Stinging / Burning Sensation (Local)"
        ],
        "severity_map": {
            "Stinging / Burning Sensation (Local)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M037",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M038",
        "effects": [
            "Stinging / Burning Sensation (Local)"
        ],
        "severity_map": {
            "Stinging / Burning Sensation (Local)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M039",
        "effects": [
            "Adrenal Suppression",
            "Skin Thinning / Atrophy (Topical Steroid)",
            "Increased Intraocular Pressure",
            "Perioral Dermatitis"
        ],
        "severity_map": {
            "Adrenal Suppression": "severe",
            "Skin Thinning / Atrophy (Topical Steroid)": "moderate",
            "Increased Intraocular Pressure": "moderate",
            "Perioral Dermatitis": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M040",
        "effects": [
            "Skin Thinning / Atrophy (Topical Steroid)"
        ],
        "severity_map": {
            "Skin Thinning / Atrophy (Topical Steroid)": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M041",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M042",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M043",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M044",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M045",
        "effects": [
            "Tachycardia / Heart Rate Increase",
            "Insomnia / Sleep Disturbance",
            "Flushing / Hot Sensation",
            "Dark / Discolored Urine",
            "Heartburn (Paradoxical from Supplements)",
            "Facial Flushing"
        ],
        "severity_map": {
            "Tachycardia / Heart Rate Increase": "moderate",
            "Insomnia / Sleep Disturbance": "mild",
            "Flushing / Hot Sensation": "mild",
            "Dark / Discolored Urine": "mild",
            "Heartburn (Paradoxical from Supplements)": "mild",
            "Facial Flushing": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M046",
        "effects": [
            "Injection Site Reaction (Pain / Swelling)"
        ],
        "severity_map": {
            "Injection Site Reaction (Pain / Swelling)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M047",
        "effects": [
            "Hypercalcemia (Too Much Calcium)",
            "Heartburn (Paradoxical from Supplements)"
        ],
        "severity_map": {
            "Hypercalcemia (Too Much Calcium)": "moderate",
            "Heartburn (Paradoxical from Supplements)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M048",
        "effects": [
            "Constipation",
            "Hypercalcemia (Too Much Calcium)",
            "Heartburn (Paradoxical from Supplements)"
        ],
        "severity_map": {
            "Constipation": "mild",
            "Hypercalcemia (Too Much Calcium)": "moderate",
            "Heartburn (Paradoxical from Supplements)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M049",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M050",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M051",
        "effects": [
            "Nausea",
            "Diarrhea",
            "Hypoglycemia (Low Blood Sugar)",
            "Weight Gain",
            "Metallic Taste in Mouth",
            "Vitamin B12 Deficiency (Long-term PPI/Metformin)",
            "Lactic Acidosis",
            "Flatulence / Gas",
            "Bloating / Abdominal Fullness",
            "Pancreatitis (Rare)"
        ],
        "severity_map": {
            "Nausea": "mild",
            "Diarrhea": "mild",
            "Hypoglycemia (Low Blood Sugar)": "severe",
            "Weight Gain": "mild",
            "Metallic Taste in Mouth": "mild",
            "Vitamin B12 Deficiency (Long-term PPI/Metformin)": "moderate",
            "Lactic Acidosis": "critical",
            "Flatulence / Gas": "mild",
            "Bloating / Abdominal Fullness": "mild",
            "Pancreatitis (Rare)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M052",
        "effects": [
            "Hypoglycemia (Low Blood Sugar)"
        ],
        "severity_map": {
            "Hypoglycemia (Low Blood Sugar)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M053",
        "effects": [
            "Hypoglycemia (Low Blood Sugar)",
            "Injection Site Reaction (Pain / Swelling)",
            "Warm or Numb Injection Site Feeling"
        ],
        "severity_map": {
            "Hypoglycemia (Low Blood Sugar)": "severe",
            "Injection Site Reaction (Pain / Swelling)": "mild",
            "Warm or Numb Injection Site Feeling": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M054",
        "effects": [
            "Hair Loss (Drug-induced)"
        ],
        "severity_map": {
            "Hair Loss (Drug-induced)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M055",
        "effects": [
            "Tachycardia / Heart Rate Increase",
            "Insomnia / Sleep Disturbance",
            "Agranulocytosis (Low WBC)",
            "Reduced White Blood Cell Count",
            "Increased Blood Glucose"
        ],
        "severity_map": {
            "Tachycardia / Heart Rate Increase": "moderate",
            "Insomnia / Sleep Disturbance": "mild",
            "Agranulocytosis (Low WBC)": "critical",
            "Reduced White Blood Cell Count": "severe",
            "Increased Blood Glucose": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M056",
        "effects": [
            "Headache",
            "Ankle Swelling / Edema",
            "Flushing / Hot Sensation",
            "Peripheral Edema",
            "Facial Flushing"
        ],
        "severity_map": {
            "Headache": "mild",
            "Ankle Swelling / Edema": "mild",
            "Flushing / Hot Sensation": "mild",
            "Peripheral Edema": "mild",
            "Facial Flushing": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M057",
        "effects": [
            "Dry Cough (ACE Inhibitor)",
            "Urinary Frequency Increase"
        ],
        "severity_map": {
            "Dry Cough (ACE Inhibitor)": "mild",
            "Urinary Frequency Increase": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M058",
        "effects": [
            "Dizziness / Lightheadedness",
            "Bradycardia (Slow Heart Rate)",
            "Fatigue / Weakness",
            "Sexual Dysfunction",
            "Mood Changes / Depression",
            "Worsening of Asthma (Bronchospasm)",
            "Dry Eyes (Drug-induced)",
            "Leg Cramps at Night",
            "Reduced Libido"
        ],
        "severity_map": {
            "Dizziness / Lightheadedness": "mild",
            "Bradycardia (Slow Heart Rate)": "moderate",
            "Fatigue / Weakness": "mild",
            "Sexual Dysfunction": "mild",
            "Mood Changes / Depression": "moderate",
            "Worsening of Asthma (Bronchospasm)": "severe",
            "Dry Eyes (Drug-induced)": "mild",
            "Leg Cramps at Night": "mild",
            "Reduced Libido": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M059",
        "effects": [
            "Hypokalemia (Low Potassium)",
            "Muscle Cramps",
            "Hearing Loss (Ototoxicity)",
            "Hyponatremia (Low Sodium)",
            "Urinary Frequency Increase",
            "Hyperuricemia (Raised Uric Acid)",
            "Leg Cramps at Night",
            "Tinnitus (Drug-induced)"
        ],
        "severity_map": {
            "Hypokalemia (Low Potassium)": "moderate",
            "Muscle Cramps": "mild",
            "Hearing Loss (Ototoxicity)": "severe",
            "Hyponatremia (Low Sodium)": "moderate",
            "Urinary Frequency Increase": "mild",
            "Hyperuricemia (Raised Uric Acid)": "mild",
            "Leg Cramps at Night": "mild",
            "Tinnitus (Drug-induced)": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M060",
        "effects": [
            "Headache",
            "Muscle Pain / Myopathy",
            "Liver Enzyme Elevation / Hepatotoxicity",
            "Fatigue / Weakness",
            "Thyroid Dysfunction (Drug-induced)",
            "Flushing / Hot Sensation",
            "Muscle Cramps",
            "Muscle Weakness / Fatigue",
            "Photodamage / Increased UV Sensitivity"
        ],
        "severity_map": {
            "Headache": "mild",
            "Muscle Pain / Myopathy": "moderate",
            "Liver Enzyme Elevation / Hepatotoxicity": "severe",
            "Fatigue / Weakness": "mild",
            "Thyroid Dysfunction (Drug-induced)": "moderate",
            "Flushing / Hot Sensation": "mild",
            "Muscle Cramps": "mild",
            "Muscle Weakness / Fatigue": "moderate",
            "Photodamage / Increased UV Sensitivity": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M061",
        "effects": [
            "Metallic Taste in Mouth",
            "Gout Flare (Initial Treatment Paradox)"
        ],
        "severity_map": {
            "Metallic Taste in Mouth": "mild",
            "Gout Flare (Initial Treatment Paradox)": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M062",
        "effects": [
            "Photosensitivity (Sun Sensitivity)"
        ],
        "severity_map": {
            "Photosensitivity (Sun Sensitivity)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M063",
        "effects": [
            "Muscle Pain / Myopathy",
            "Liver Enzyme Elevation / Hepatotoxicity",
            "Weight Loss / Appetite Loss",
            "Bone Density Loss (Osteoporosis Risk)",
            "Hair Loss (Drug-induced)",
            "Peripheral Neuropathy (Drug-induced)",
            "Agranulocytosis (Low WBC)",
            "Reduced White Blood Cell Count",
            "Muscle Weakness / Fatigue"
        ],
        "severity_map": {
            "Muscle Pain / Myopathy": "moderate",
            "Liver Enzyme Elevation / Hepatotoxicity": "severe",
            "Weight Loss / Appetite Loss": "mild",
            "Bone Density Loss (Osteoporosis Risk)": "severe",
            "Hair Loss (Drug-induced)": "mild",
            "Peripheral Neuropathy (Drug-induced)": "moderate",
            "Agranulocytosis (Low WBC)": "critical",
            "Reduced White Blood Cell Count": "severe",
            "Muscle Weakness / Fatigue": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M064",
        "effects": [
            "Anaphylaxis (Severe Allergy)",
            "Increased Blood Pressure",
            "Ankle Swelling / Edema",
            "Weight Gain",
            "Bone Density Loss (Osteoporosis Risk)",
            "Menstrual Irregularity",
            "Oral Candidiasis (Thrush)",
            "Adrenal Suppression",
            "Increased Intraocular Pressure",
            "Hypertension (Paradoxical / Drug-induced)",
            "Increased Appetite",
            "Mood Changes / Depression",
            "Acne / Skin Breakout",
            "Peripheral Edema",
            "Increased Blood Glucose",
            "Muscle Weakness / Fatigue"
        ],
        "severity_map": {
            "Anaphylaxis (Severe Allergy)": "critical",
            "Increased Blood Pressure": "moderate",
            "Ankle Swelling / Edema": "mild",
            "Weight Gain": "mild",
            "Bone Density Loss (Osteoporosis Risk)": "severe",
            "Menstrual Irregularity": "mild",
            "Oral Candidiasis (Thrush)": "mild",
            "Adrenal Suppression": "severe",
            "Increased Intraocular Pressure": "moderate",
            "Hypertension (Paradoxical / Drug-induced)": "moderate",
            "Increased Appetite": "mild",
            "Mood Changes / Depression": "moderate",
            "Acne / Skin Breakout": "mild",
            "Peripheral Edema": "mild",
            "Increased Blood Glucose": "moderate",
            "Muscle Weakness / Fatigue": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M065",
        "effects": [
            "Dizziness / Lightheadedness",
            "Transient Hearing Disturbance"
        ],
        "severity_map": {
            "Dizziness / Lightheadedness": "mild",
            "Transient Hearing Disturbance": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M066",
        "effects": [
            "Constipation",
            "Dizziness / Lightheadedness",
            "Drowsiness / Sedation"
        ],
        "severity_map": {
            "Constipation": "mild",
            "Dizziness / Lightheadedness": "mild",
            "Drowsiness / Sedation": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M067",
        "effects": [
            "Dizziness / Lightheadedness",
            "Drowsiness / Sedation",
            "Dry Mouth",
            "Urinary Retention",
            "Blurred Vision (Drug-induced)",
            "Hallucinations / Confusion in Elderly",
            "Tardive Dyskinesia (Long-term Antiemetic)"
        ],
        "severity_map": {
            "Dizziness / Lightheadedness": "mild",
            "Drowsiness / Sedation": "mild",
            "Dry Mouth": "mild",
            "Urinary Retention": "moderate",
            "Blurred Vision (Drug-induced)": "mild",
            "Hallucinations / Confusion in Elderly": "severe",
            "Tardive Dyskinesia (Long-term Antiemetic)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M068",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M069",
        "effects": [
            "Drowsiness / Sedation",
            "Weight Gain",
            "Withdrawal Symptoms / Dependence",
            "Respiratory Depression",
            "Hallucinations / Confusion in Elderly"
        ],
        "severity_map": {
            "Drowsiness / Sedation": "mild",
            "Weight Gain": "mild",
            "Withdrawal Symptoms / Dependence": "severe",
            "Respiratory Depression": "critical",
            "Hallucinations / Confusion in Elderly": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M070",
        "effects": [
            "Dizziness / Lightheadedness",
            "Drowsiness / Sedation",
            "Dry Mouth",
            "Weight Gain",
            "Blurred Vision (Drug-induced)",
            "Withdrawal Symptoms / Dependence",
            "Respiratory Depression",
            "Hallucinations / Confusion in Elderly"
        ],
        "severity_map": {
            "Dizziness / Lightheadedness": "mild",
            "Drowsiness / Sedation": "mild",
            "Dry Mouth": "mild",
            "Weight Gain": "mild",
            "Blurred Vision (Drug-induced)": "mild",
            "Withdrawal Symptoms / Dependence": "severe",
            "Respiratory Depression": "critical",
            "Hallucinations / Confusion in Elderly": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M071",
        "effects": [
            "Fatigue / Weakness",
            "Insomnia / Sleep Disturbance",
            "Weight Loss / Appetite Loss",
            "Menstrual Irregularity",
            "Sexual Dysfunction",
            "QT Prolongation (Cardiac Risk)",
            "Serotonin Syndrome",
            "Hyponatremia (Low Sodium)",
            "Reduced Libido",
            "Increased Suicidal Ideation (Initiation Phase)"
        ],
        "severity_map": {
            "Fatigue / Weakness": "mild",
            "Insomnia / Sleep Disturbance": "mild",
            "Weight Loss / Appetite Loss": "mild",
            "Menstrual Irregularity": "mild",
            "Sexual Dysfunction": "mild",
            "QT Prolongation (Cardiac Risk)": "severe",
            "Serotonin Syndrome": "critical",
            "Hyponatremia (Low Sodium)": "moderate",
            "Reduced Libido": "mild",
            "Increased Suicidal Ideation (Initiation Phase)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M072",
        "effects": [
            "Fatigue / Weakness",
            "Menstrual Irregularity",
            "Sexual Dysfunction",
            "QT Prolongation (Cardiac Risk)",
            "Serotonin Syndrome",
            "Hyponatremia (Low Sodium)",
            "Reduced Libido",
            "Increased Suicidal Ideation (Initiation Phase)"
        ],
        "severity_map": {
            "Fatigue / Weakness": "mild",
            "Menstrual Irregularity": "mild",
            "Sexual Dysfunction": "mild",
            "QT Prolongation (Cardiac Risk)": "severe",
            "Serotonin Syndrome": "critical",
            "Hyponatremia (Low Sodium)": "moderate",
            "Reduced Libido": "mild",
            "Increased Suicidal Ideation (Initiation Phase)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M073",
        "effects": [
            "Nasal Irritation / Epistaxis (Nasal Spray)"
        ],
        "severity_map": {
            "Nasal Irritation / Epistaxis (Nasal Spray)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M074",
        "effects": [
            "Dry Mouth",
            "Increased Blood Pressure",
            "Tachycardia / Heart Rate Increase",
            "Rebound Nasal Congestion (Rhinitis Medicamentosa)",
            "Hypertension (Paradoxical / Drug-induced)",
            "Nasal Irritation / Epistaxis (Nasal Spray)"
        ],
        "severity_map": {
            "Dry Mouth": "mild",
            "Increased Blood Pressure": "moderate",
            "Tachycardia / Heart Rate Increase": "moderate",
            "Rebound Nasal Congestion (Rhinitis Medicamentosa)": "mild",
            "Hypertension (Paradoxical / Drug-induced)": "moderate",
            "Nasal Irritation / Epistaxis (Nasal Spray)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M075",
        "effects": [
            "Nasal Irritation / Epistaxis (Nasal Spray)"
        ],
        "severity_map": {
            "Nasal Irritation / Epistaxis (Nasal Spray)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M076",
        "effects": [
            "Eye Irritation (Local)",
            "Photophobia / Eye Sensitivity (Ocular Drops)",
            "Subconjunctival Hemorrhage (Eye Drops)"
        ],
        "severity_map": {
            "Eye Irritation (Local)": "mild",
            "Photophobia / Eye Sensitivity (Ocular Drops)": "mild",
            "Subconjunctival Hemorrhage (Eye Drops)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M077",
        "effects": [
            "Eye Irritation (Local)"
        ],
        "severity_map": {
            "Eye Irritation (Local)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M078",
        "effects": [
            "Bradycardia (Slow Heart Rate)",
            "Eye Irritation (Local)",
            "Dry Eyes (Drug-induced)",
            "Photophobia / Eye Sensitivity (Ocular Drops)",
            "Subconjunctival Hemorrhage (Eye Drops)"
        ],
        "severity_map": {
            "Bradycardia (Slow Heart Rate)": "moderate",
            "Eye Irritation (Local)": "mild",
            "Dry Eyes (Drug-induced)": "mild",
            "Photophobia / Eye Sensitivity (Ocular Drops)": "mild",
            "Subconjunctival Hemorrhage (Eye Drops)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M079",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M080",
        "effects": [
            "Transient Hearing Disturbance"
        ],
        "severity_map": {
            "Transient Hearing Disturbance": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M081",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M082",
        "effects": [
            "Stinging / Burning Sensation (Local)"
        ],
        "severity_map": {
            "Stinging / Burning Sensation (Local)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M083",
        "effects": [
            "Chemical Burn from Improper Antiseptic Use"
        ],
        "severity_map": {
            "Chemical Burn from Improper Antiseptic Use": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M084",
        "effects": [
            "Stinging / Burning Sensation (Local)",
            "Chemical Burn from Improper Antiseptic Use"
        ],
        "severity_map": {
            "Stinging / Burning Sensation (Local)": "mild",
            "Chemical Burn from Improper Antiseptic Use": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M085",
        "effects": [
            "Adrenal Suppression",
            "Skin Thinning / Atrophy (Topical Steroid)",
            "Increased Intraocular Pressure",
            "Perioral Dermatitis"
        ],
        "severity_map": {
            "Adrenal Suppression": "severe",
            "Skin Thinning / Atrophy (Topical Steroid)": "moderate",
            "Increased Intraocular Pressure": "moderate",
            "Perioral Dermatitis": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M086",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M087",
        "effects": [
            "Scalp Irritation / Dryness (Shampoo)"
        ],
        "severity_map": {
            "Scalp Irritation / Dryness (Shampoo)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M088",
        "effects": [
            "Hypertrichosis (Excess Hair Growth)",
            "Scalp Irritation / Dryness (Shampoo)"
        ],
        "severity_map": {
            "Hypertrichosis (Excess Hair Growth)": "mild",
            "Scalp Irritation / Dryness (Shampoo)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M089",
        "effects": [
            "Scalp Irritation / Dryness (Shampoo)"
        ],
        "severity_map": {
            "Scalp Irritation / Dryness (Shampoo)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M090",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M091",
        "effects": [
            "Sexual Dysfunction"
        ],
        "severity_map": {
            "Sexual Dysfunction": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M092",
        "effects": [
            "Menstrual Irregularity",
            "Acne / Skin Breakout",
            "Vaginal Dryness / Discharge Change"
        ],
        "severity_map": {
            "Menstrual Irregularity": "mild",
            "Acne / Skin Breakout": "mild",
            "Vaginal Dryness / Discharge Change": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M093",
        "effects": [
            "Stomach Pain / GI Upset"
        ],
        "severity_map": {
            "Stomach Pain / GI Upset": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M094",
        "effects": [
            "Vaginal Dryness / Discharge Change"
        ],
        "severity_map": {
            "Vaginal Dryness / Discharge Change": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M095",
        "effects": [
            "Ankle Swelling / Edema",
            "Mood Changes / Depression",
            "Acne / Skin Breakout",
            "Reduced Libido",
            "Vaginal Dryness / Discharge Change"
        ],
        "severity_map": {
            "Ankle Swelling / Edema": "mild",
            "Mood Changes / Depression": "moderate",
            "Acne / Skin Breakout": "mild",
            "Reduced Libido": "mild",
            "Vaginal Dryness / Discharge Change": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M096",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M097",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M098",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M099",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M100",
        "effects": [
            "Hair Loss (Drug-induced)",
            "Thyroid Dysfunction (Drug-induced)",
            "Blood Thinning / Bleeding Risk",
            "Pancreatitis (Rare)",
            "Facial Flushing",
            "Hypothyroidism (Drug-induced)"
        ],
        "severity_map": {
            "Hair Loss (Drug-induced)": "mild",
            "Thyroid Dysfunction (Drug-induced)": "moderate",
            "Blood Thinning / Bleeding Risk": "severe",
            "Pancreatitis (Rare)": "severe",
            "Facial Flushing": "mild",
            "Hypothyroidism (Drug-induced)": "moderate"
        },
        "contraindications": []
    },
    {
        "medicineId": "M101",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M102",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M103",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M104",
        "effects": [
            "Withdrawal Symptoms / Dependence"
        ],
        "severity_map": {
            "Withdrawal Symptoms / Dependence": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M105",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M106",
        "effects": [
            "Drowsiness / Sedation",
            "Dry Mouth",
            "CNS Effects (Confusion / Seizures)",
            "Urinary Retention",
            "Blurred Vision (Drug-induced)",
            "Serotonin Syndrome",
            "Increased Suicidal Ideation (Initiation Phase)"
        ],
        "severity_map": {
            "Drowsiness / Sedation": "mild",
            "Dry Mouth": "mild",
            "CNS Effects (Confusion / Seizures)": "severe",
            "Urinary Retention": "moderate",
            "Blurred Vision (Drug-induced)": "mild",
            "Serotonin Syndrome": "critical",
            "Increased Suicidal Ideation (Initiation Phase)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M107",
        "effects": [
            "CNS Effects (Confusion / Seizures)",
            "Increased Appetite",
            "Peripheral Edema"
        ],
        "severity_map": {
            "CNS Effects (Confusion / Seizures)": "severe",
            "Increased Appetite": "mild",
            "Peripheral Edema": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M108",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M109",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M110",
        "effects": [
            "Weight Loss / Appetite Loss",
            "Stevens-Johnson Syndrome (Rare)",
            "Increased Suicidal Ideation (Initiation Phase)"
        ],
        "severity_map": {
            "Weight Loss / Appetite Loss": "mild",
            "Stevens-Johnson Syndrome (Rare)": "critical",
            "Increased Suicidal Ideation (Initiation Phase)": "severe"
        },
        "contraindications": []
    },
    {
        "medicineId": "M111",
        "effects": [
            "Withdrawal Symptoms / Dependence",
            "Respiratory Depression"
        ],
        "severity_map": {
            "Withdrawal Symptoms / Dependence": "severe",
            "Respiratory Depression": "critical"
        },
        "contraindications": []
    },
    {
        "medicineId": "M112",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M113",
        "effects": [
            "Metallic Taste in Mouth",
            "Stinging / Burning Sensation (Local)"
        ],
        "severity_map": {
            "Metallic Taste in Mouth": "mild",
            "Stinging / Burning Sensation (Local)": "mild"
        },
        "contraindications": []
    },
    {
        "medicineId": "M114",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    },
    {
        "medicineId": "M115",
        "effects": [],
        "severity_map": {},
        "contraindications": []
    }
],
    suspiciousHealthIssues: [
    {
        "id": "SHI001",
        "issue": "Medicine ineffective after 3 days of expected response",
        "flagType": "outcome_failure",
        "action": "Review diagnosis; consider alternative medicine or referral"
    },
    {
        "id": "SHI002",
        "issue": "Same medicine batch causing adverse reactions in multiple patients",
        "flagType": "batch_anomaly",
        "action": "Flag batch for investigation; notify drug authority"
    },
    {
        "id": "SHI003",
        "issue": "Symptom worsening despite correct treatment",
        "flagType": "treatment_failure",
        "action": "Rule out drug resistance or wrong diagnosis; refer to physician"
    },
    {
        "id": "SHI004",
        "issue": "Unusual side effect not listed in standard drug profile",
        "flagType": "pharmacovigilance",
        "action": "Document and report to ADR monitoring cell"
    },
    {
        "id": "SHI005",
        "issue": "Patient allergic reaction to first dose",
        "flagType": "allergy_event",
        "action": "Stop medicine; document allergy in record; provide safe alternative"
    },
    {
        "id": "SHI006",
        "issue": "Severe GI bleeding after NSAID use",
        "flagType": "serious_adverse_event",
        "action": "Immediate hospital referral; stop NSAID permanently"
    },
    {
        "id": "SHI007",
        "issue": "Recurrent UTI despite completing antibiotic course",
        "flagType": "drug_resistance",
        "action": "Urine culture and sensitivity; change antibiotic class"
    },
    {
        "id": "SHI008",
        "issue": "Blood sugar uncontrolled on maximum oral dose",
        "flagType": "treatment_inadequacy",
        "action": "Refer to physician for insulin initiation review"
    },
    {
        "id": "SHI009",
        "issue": "Patient returned with jaundice after antibiotic use",
        "flagType": "hepatotoxicity_signal",
        "action": "LFT testing; discontinue suspect drug; hepatologist referral"
    },
    {
        "id": "SHI010",
        "issue": "Multiple patients reporting rash from same medicine lot number",
        "flagType": "batch_contamination_signal",
        "action": "Quarantine batch; report to manufacturer and drug regulator"
    },
    {
        "id": "SHI011",
        "issue": "Patient purchasing same medicine from multiple pharmacy branches",
        "flagType": "overuse_misuse",
        "action": "Patient counselling; inform treating doctor"
    },
    {
        "id": "SHI012",
        "issue": "Antibiotic dispensed without prescription returning with worsening infection",
        "flagType": "prescription_bypass_outcome",
        "action": "Enforce Rx policy strictly; refer patient to doctor"
    },
    {
        "id": "SHI013",
        "issue": "Paediatric patient given adult dose (pharmacist error)",
        "flagType": "dosing_error",
        "action": "Immediate dose review and correction; internal error report"
    },
    {
        "id": "SHI014",
        "issue": "Expired medicine found in dispensed pack reported by patient",
        "flagType": "quality_control_breach",
        "action": "Recall entire lot from shelf; reimburse patient; audit stock"
    },
    {
        "id": "SHI015",
        "issue": "Patient reports counterfeit packaging (different colour or texture)",
        "flagType": "counterfeit_medicine_suspicion",
        "action": "Quarantine; report to drug controller; send sample for testing"
    },
    {
        "id": "SHI016",
        "issue": "Unexpected neurological symptom matching medication side effect profile",
        "flagType": "neurological_adverse_signal",
        "action": "Stop medicine; neurology referral; document ADR"
    },
    {
        "id": "SHI017",
        "issue": "Anaphylactic shock post-injection at pharmacy",
        "flagType": "critical_adverse_event",
        "action": "Administer epinephrine immediately; call emergency services; document"
    },
    {
        "id": "SHI018",
        "issue": "Corticosteroid cream causing facial skin thinning from long-term use",
        "flagType": "misuse_adverse_effect",
        "action": "Stop steroid cream on face; taper; dermatologist referral"
    },
    {
        "id": "SHI019",
        "issue": "Patient showing signs of benzodiazepine dependence with monthly repeat requests",
        "flagType": "dependency_signal",
        "action": "Flag in system; psychiatry referral; taper plan required"
    },
    {
        "id": "SHI020",
        "issue": "Hypoglycaemia episode after sulfonylurea in elderly patient",
        "flagType": "serious_adverse_event",
        "action": "Administer glucose; review and reduce dose; physician review"
    },
    {
        "id": "SHI021",
        "issue": "Medicine disintegrating or showing unusual odour in pack",
        "flagType": "degraded_product",
        "action": "Do not dispense; quarantine; report to supplier immediately"
    },
    {
        "id": "SHI022",
        "issue": "Pregnant patient given Category D or X drug unknowingly",
        "flagType": "contraindication_breach",
        "action": "Stop immediately; obstetric referral; document incident"
    },
    {
        "id": "SHI023",
        "issue": "Renal patient given nephrotoxic NSAID without renal check",
        "flagType": "contraindication_breach",
        "action": "Stop NSAID; substitute paracetamol; nephrology review"
    },
    {
        "id": "SHI024",
        "issue": "Cluster of fever cases unresponsive to standard antipyretics in same locality",
        "flagType": "outbreak_signal",
        "action": "Notify public health authority; report cluster data"
    },
    {
        "id": "SHI025",
        "issue": "Child given tetracycline by parent (contraindicated under 8 years)",
        "flagType": "contraindication_breach_paediatric",
        "action": "Stop drug immediately; monitor teeth; dentist referral"
    },
    {
        "id": "SHI026",
        "issue": "High frequency of same disease diagnosis from single zone within short period",
        "flagType": "epidemiological_signal",
        "action": "Report to local health authority for epidemiological investigation"
    },
    {
        "id": "SHI027",
        "issue": "Unusual or non-standard lot number format on medicine packaging",
        "flagType": "supply_chain_anomaly",
        "action": "Verify with manufacturer; quarantine stock pending investigation"
    },
    {
        "id": "SHI028",
        "issue": "QR code on pack scanning to incorrect or unknown manufacturer",
        "flagType": "counterfeit_medicine_signal",
        "action": "Remove from shelf; verify entire stock; report to drug regulator"
    },
    {
        "id": "SHI029",
        "issue": "Drug interaction detected by system during dispensing review",
        "flagType": "drug_drug_interaction",
        "action": "Alert pharmacist; consult physician before proceeding with dispensing"
    },
    {
        "id": "SHI030",
        "issue": "Patient on warfarin requesting ibuprofen or NSAID OTC",
        "flagType": "drug_drug_interaction_request",
        "action": "Do not dispense NSAID; recommend paracetamol; contact prescriber"
    },
    {
        "id": "SHI031",
        "issue": "Insulin vial appears cloudy when it should be clear (degradation suspected)",
        "flagType": "product_quality",
        "action": "Do not dispense; quarantine vial; replace from verified new stock"
    },
    {
        "id": "SHI032",
        "issue": "Children syrup colour or smell differs noticeably from previous batch",
        "flagType": "batch_quality_signal",
        "action": "Withhold batch; send for testing; report to QC team"
    },
    {
        "id": "SHI033",
        "issue": "Persistent dry cough lasting over 8 weeks in patient on ACE inhibitor",
        "flagType": "known_side_effect_unrecognised",
        "action": "Switch to ARB class; document outcome and notify prescriber"
    },
    {
        "id": "SHI034",
        "issue": "Patient vomiting within 15 minutes of oral dose (absorption failure)",
        "flagType": "dose_failure",
        "action": "Assess for repeat dose; consider alternative route; physician input"
    },
    {
        "id": "SHI035",
        "issue": "Repeated prescription for same antibiotic without culture review",
        "flagType": "antimicrobial_stewardship_concern",
        "action": "Recommend culture sensitivity test; alert prescribing physician"
    },
    {
        "id": "SHI036",
        "issue": "OTC antifungal repeat purchase every week suggesting systemic cause",
        "flagType": "chronic_undiagnosed_condition_signal",
        "action": "Refer to physician; rule out diabetes or immunodeficiency"
    },
    {
        "id": "SHI037",
        "issue": "Skin whitening steroid cream sold OTC causing facial complications",
        "flagType": "cosmetic_steroid_misuse",
        "action": "Counsel patient; stop product; dermatologist referral"
    },
    {
        "id": "SHI038",
        "issue": "Patient presenting with overdose symptoms after self-medication",
        "flagType": "overdose_emergency",
        "action": "Emergency referral; do not dispense further; document incident"
    },
    {
        "id": "SHI039",
        "issue": "Temperature-sensitive medicine stored improperly (cold chain break)",
        "flagType": "cold_chain_failure",
        "action": "Do not dispense; check temperature log; discard if breached"
    },
    {
        "id": "SHI040",
        "issue": "Multiple patients from same household with identical rare adverse effect",
        "flagType": "household_cluster_adverse_event",
        "action": "Investigate shared medicine batch; report to pharmacovigilance"
    },
    {
        "id": "SHI041",
        "issue": "Patient age under 12 requesting prescription-only medicine OTC",
        "flagType": "paediatric_safety_concern",
        "action": "Decline dispensing; counsel parent; refer to paediatrician"
    },
    {
        "id": "SHI042",
        "issue": "High-dose corticosteroid use over 4 weeks without physician oversight",
        "flagType": "steroid_overuse_signal",
        "action": "Escalate to physician; implement taper protocol"
    },
    {
        "id": "SHI043",
        "issue": "Pattern of high sedative or anxiolytic requests from specific age group",
        "flagType": "abuse_misuse_pattern",
        "action": "Flag in system; pharmacy management review; may require reporting"
    },
    {
        "id": "SHI044",
        "issue": "Inhaler technique error causing inadequate asthma control",
        "flagType": "device_technique_failure",
        "action": "Re-demonstrate technique; consider spacer; reassess control"
    },
    {
        "id": "SHI045",
        "issue": "Same patient purchasing narcotics from multiple pharmacy branches",
        "flagType": "doctor_shopping_narcotics",
        "action": "Cross-pharmacy flag; refuse dispensing; report to drug controller"
    },
    {
        "id": "SHI046",
        "issue": "Batch recall received from manufacturer while stock still on pharmacy shelf",
        "flagType": "active_recall_not_actioned",
        "action": "Immediately quarantine and return recalled batch; notify patients"
    },
    {
        "id": "SHI047",
        "issue": "Unusual spike in antidiarrheal sales in one zone suggesting local outbreak",
        "flagType": "disease_outbreak_signal",
        "action": "Report to local health authority for epidemiological assessment"
    },
    {
        "id": "SHI048",
        "issue": "Medicine sold as generic equivalent but with different composition",
        "flagType": "substitution_error",
        "action": "Remove from dispensing; pharmacist retraining; update database"
    },
    {
        "id": "SHI049",
        "issue": "Patient with active hepatitis on hepatotoxic drug combination",
        "flagType": "contraindication_hepatic",
        "action": "Stop hepatotoxic drug; hepatologist referral; monitor LFT"
    },
    {
        "id": "SHI050",
        "issue": "Elderly patient on multiple CNS depressants from different prescribers",
        "flagType": "polypharmacy_risk",
        "action": "Comprehensive medication review; alert all prescribing physicians"
    },
    {
        "id": "SHI051",
        "issue": "Drug temperature exceeded 30 degrees C during transport (heat damage)",
        "flagType": "temperature_excursion",
        "action": "Quarantine stock; verify manufacturer stability data before use"
    },
    {
        "id": "SHI052",
        "issue": "Batch showing unusual opacity in liquid formulation",
        "flagType": "visual_quality_defect",
        "action": "Do not dispense; separate batch; report to QC team"
    },
    {
        "id": "SHI053",
        "issue": "Prescription appears illegible or suspected to be forged",
        "flagType": "prescription_fraud",
        "action": "Refuse dispensing; verify with prescribing doctor; report to authority"
    },
    {
        "id": "SHI054",
        "issue": "Child given ORS incorrectly diluted with too little water (hypernatremia risk)",
        "flagType": "preparation_error_paediatric",
        "action": "Correct immediately; monitor child; educate parent on preparation"
    },
    {
        "id": "SHI055",
        "issue": "Patient developed tendon pain after fluoroquinolone course (tendinopathy)",
        "flagType": "serious_known_adverse_effect",
        "action": "Stop fluoroquinolone; orthopedic review; document ADR report"
    },
    {
        "id": "SHI056",
        "issue": "Antiviral medication given after Day 5 of symptom onset (too late)",
        "flagType": "treatment_timing_failure",
        "action": "Counsel patient on timing; audit prescribing practice"
    },
    {
        "id": "SHI057",
        "issue": "Multiple anaphylaxis events tied to same vaccine or injection batch",
        "flagType": "vaccine_batch_signal",
        "action": "Report to health ministry; quarantine batch; activate pharmacovigilance"
    },
    {
        "id": "SHI058",
        "issue": "Patient develops Stevens-Johnson syndrome post sulfonamide use",
        "flagType": "critical_skin_adverse_event",
        "action": "Immediate hospitalisation; stop drug; allergy documented permanently"
    },
    {
        "id": "SHI059",
        "issue": "Prescription drug sold without Rx check caught in system audit",
        "flagType": "internal_compliance_failure",
        "action": "Staff retraining; enforce mandatory Rx check; system audit review"
    },
    {
        "id": "SHI060",
        "issue": "Pain reliever ineffective across 3 consecutive visits suggesting systemic cause",
        "flagType": "red_flag_symptom",
        "action": "Refer to physician urgently; cancer or systemic screening protocol"
    },
    {
        "id": "SHI061",
        "issue": "Patient on thyroid medication requesting stimulants or weight loss pills",
        "flagType": "polypharmacy_thyroid_risk",
        "action": "Counsel patient; pharmacist review; notify physician"
    },
    {
        "id": "SHI062",
        "issue": "Unexplained tachycardia in multiple patients on same bronchodilator batch",
        "flagType": "batch_cardiovascular_signal",
        "action": "Quarantine batch; pharmacovigilance alert; arrange batch testing"
    },
    {
        "id": "SHI063",
        "issue": "Patients returning with skin darkening after topical hydroquinone or steroid combo",
        "flagType": "ochronosis_signal",
        "action": "Stop product; dermatologist referral; review product safety"
    },
    {
        "id": "SHI064",
        "issue": "Unusually high product returns for a specific medicine lot",
        "flagType": "quality_feedback_signal",
        "action": "Analyse return data; contact manufacturer QC department"
    },
    {
        "id": "SHI065",
        "issue": "Patient on blood thinner requesting ibuprofen OTC for pain relief",
        "flagType": "drug_interaction_prevention",
        "action": "Do not dispense ibuprofen; recommend paracetamol; advise prescriber"
    },
    {
        "id": "SHI066",
        "issue": "Chronic antacid user presenting with vitamin B12 deficiency symptoms",
        "flagType": "long_term_ppi_side_effect",
        "action": "Supplement B12; review PPI necessity; gastroenterologist referral"
    },
    {
        "id": "SHI067",
        "issue": "Patient develops liver failure after herbal supplement combined with prescription drug",
        "flagType": "herb_drug_interaction",
        "action": "Emergency referral; document herbal supplement; update patient record"
    },
    {
        "id": "SHI068",
        "issue": "Insulin pen device malfunction leading to incorrect dosing",
        "flagType": "device_failure",
        "action": "Replace device; check dosing history; report to manufacturer"
    },
    {
        "id": "SHI069",
        "issue": "Antimalarial stock shortage causing treatment delay in high-risk zone",
        "flagType": "supply_chain_risk",
        "action": "Alert procurement; contact alternative supplier; escalate to health authority"
    },
    {
        "id": "SHI070",
        "issue": "Patient taking same medicine in two brand names unknowingly (duplicate therapy)",
        "flagType": "duplicate_therapy_error",
        "action": "Counsel patient; reconcile all medicines; alert prescriber"
    },
    {
        "id": "SHI071",
        "issue": "Post-operative patient requesting prescription painkillers without documentation",
        "flagType": "controlled_substance_request_flag",
        "action": "Verify with surgical team; do not dispense without valid Rx"
    },
    {
        "id": "SHI072",
        "issue": "Cream or gel showing phase separation or unusual texture change in batch",
        "flagType": "formulation_stability_failure",
        "action": "Quarantine; do not dispense; contact QA department"
    },
    {
        "id": "SHI073",
        "issue": "Minor (under 18) requesting multiple purchases of sedatives",
        "flagType": "misuse_risk_in_minor",
        "action": "Refuse dispensing; escalate to pharmacist-in-charge; safeguarding protocol"
    },
    {
        "id": "SHI074",
        "issue": "Patient requests emergency contraceptive for third time in one month",
        "flagType": "repeated_emergency_contraception",
        "action": "Counsel on regular contraception options; GP referral"
    },
    {
        "id": "SHI075",
        "issue": "Inhaler dose counter shows zero but patient says medicine still feels active",
        "flagType": "placebo_use_risk",
        "action": "Educate on dose counter importance; replace inhaler; re-check technique"
    },
    {
        "id": "SHI076",
        "issue": "Patient with known kidney disease requesting NSAID (ibuprofen or diclofenac)",
        "flagType": "renal_contraindication",
        "action": "Decline NSAID; recommend paracetamol; notify nephrologist"
    },
    {
        "id": "SHI077",
        "issue": "Multiple pharmacy branches flagging complaints about same drug manufacturer",
        "flagType": "manufacturer_wide_signal",
        "action": "Escalate to drug controller; suspend manufacturer lot across all branches"
    },
    {
        "id": "SHI078",
        "issue": "Inconsistent tablet size within same blister pack reported by patient",
        "flagType": "manufacturing_defect",
        "action": "Quarantine; report to manufacturer; pharmacy manager review"
    },
    {
        "id": "SHI079",
        "issue": "Oral antibiotic prescribed for clearly viral illness (AMR concern)",
        "flagType": "antimicrobial_stewardship_breach",
        "action": "Alert prescribing physician; educate on antibiotic stewardship guidelines"
    },
    {
        "id": "SHI080",
        "issue": "Gel or cream pack seal found broken at point of purchase",
        "flagType": "tamper_evident_breach",
        "action": "Do not sell; return to supplier; inspect entire lot"
    },
    {
        "id": "SHI081",
        "issue": "Unusual spike in cough syrup sales in a zone more than 3x normal volume",
        "flagType": "misuse_or_outbreak_signal",
        "action": "Restrict OTC sales; notify zonal health officer; investigate cause"
    },
    {
        "id": "SHI082",
        "issue": "Patient presents hypertensive emergency while currently on antihypertensives",
        "flagType": "treatment_failure_emergency",
        "action": "Emergency referral; review medication compliance and drug efficacy"
    },
    {
        "id": "SHI083",
        "issue": "Topical antibiotic used over 2 weeks causing resistant skin infection",
        "flagType": "resistance_from_overuse",
        "action": "Stop topical antibiotic; take swab for culture; dermatologist referral"
    },
    {
        "id": "SHI084",
        "issue": "Eye drops dispensed for ear use or ear drops dispensed for eye use",
        "flagType": "dispensing_error",
        "action": "Correct immediately; clarify with patient; internal dispensing audit"
    },
    {
        "id": "SHI085",
        "issue": "Patient with G6PD deficiency given nitrofurantoin or primaquine",
        "flagType": "genetic_contraindication",
        "action": "Withdraw drug; G6PD-safe alternative; haematology review"
    },
    {
        "id": "SHI086",
        "issue": "Adverse event rate at specific pharmacy unusually high in internal audit",
        "flagType": "pharmacy_level_quality_issue",
        "action": "Internal audit; staff training; inspection by QA team"
    },
    {
        "id": "SHI087",
        "issue": "Medicine packaging lacks required regional language labelling as per regulations",
        "flagType": "regulatory_compliance",
        "action": "Flag to compliance officer; do not dispense; return to supplier"
    },
    {
        "id": "SHI088",
        "issue": "Customer confused between two similar-looking drug names (LASA error)",
        "flagType": "look_alike_sound_alike_error",
        "action": "Update shelf labelling; add TALL MAN letters; staff education"
    },
    {
        "id": "SHI089",
        "issue": "Diabetic patient on metformin with lactic acidosis symptoms (confusion and breathing difficulty)",
        "flagType": "critical_metabolic_emergency",
        "action": "Stop metformin; emergency hospital referral; monitor renal function urgently"
    },
    {
        "id": "SHI090",
        "issue": "Nasal decongestant requested for daily use beyond 5 days",
        "flagType": "dependency_rebound_signal",
        "action": "Counsel on rhinitis medicamentosa; switch to saline spray; ENT referral if needed"
    },
    {
        "id": "SHI091",
        "issue": "Skin infection spreading despite 5 days of topical treatment (systemic infection suspected)",
        "flagType": "treatment_inadequacy_systemic",
        "action": "Refer to physician for oral or IV antibiotics; wound culture"
    },
    {
        "id": "SHI092",
        "issue": "Unexpected interaction between self-purchased OTC drug and prescribed medication",
        "flagType": "self_medication_interaction",
        "action": "Medication reconciliation; counsel patient; notify prescriber immediately"
    },
    {
        "id": "SHI093",
        "issue": "Pharmacist repeatedly dispensing without checking allergy history (system audit flag)",
        "flagType": "internal_process_failure",
        "action": "Retrain pharmacist; enforce mandatory allergy check at every dispensing"
    },
    {
        "id": "SHI094",
        "issue": "Calcium supplement and thyroid medicine dispensed together without spacing warning",
        "flagType": "absorption_interaction_alert",
        "action": "Counsel patient to space doses by 4 hours; document interaction in record"
    },
    {
        "id": "SHI095",
        "issue": "Unusual metallic taste in medicine reported by 3 or more patients from same batch",
        "flagType": "batch_organoleptic_signal",
        "action": "Quarantine batch; arrange chemical analysis; report to QC"
    },
    {
        "id": "SHI096",
        "issue": "Patient using antidepressant plus tramadol simultaneously (serotonin syndrome risk)",
        "flagType": "dangerous_drug_combination",
        "action": "Do not dispense combination; contact prescriber; monitor patient closely"
    },
    {
        "id": "SHI097",
        "issue": "Child accidentally ingested adult blood pressure medicine from home (poisoning)",
        "flagType": "accidental_poisoning_paediatric",
        "action": "Poison control referral; emergency care; counsel family on safe storage"
    },
    {
        "id": "SHI098",
        "issue": "Patient requests medicine associated with national shortage",
        "flagType": "supply_shortage_patient_impact",
        "action": "Notify patient; check approved substitutes; escalate to procurement"
    },
    {
        "id": "SHI099",
        "issue": "Student requesting cognitive enhancers without valid prescription",
        "flagType": "smart_drug_misuse_request",
        "action": "Decline dispensing; educate on risks; no prescription means no dispensing"
    },
    {
        "id": "SHI100",
        "issue": "Batch with smeared print or unreadable manufacturing and expiry date",
        "flagType": "labelling_defect",
        "action": "Quarantine; do not dispense; report defect to manufacturer and drug regulator"
    }
],
    diseaseCategories: [
    "Respiratory",
    "Systemic",
    "Bacterial Infection",
    "Viral Infection",
    "Parasitic Infection",
    "Allergy",
    "Skin",
    "Gastrointestinal",
    "Hepatic",
    "Urological",
    "Neurological",
    "Neurological/Psychiatric",
    "Psychiatric",
    "Cardiovascular",
    "Hematological",
    "Endocrine",
    "Nutritional",
    "Metabolic",
    "Musculoskeletal",
    "Musculoskeletal/Autoimmune",
    "Orthopedic",
    "Ophthalmological",
    "ENT",
    "Dental",
    "Oral",
    "Gynecological",
    "Obstetric",
    "Dermatological/Trauma",
    "Dermatological/Infection",
    "Allergy/Dermatology",
    "Skin/Allergy",
    "Skin/Autoimmune",
    "Colorectal",
    "Environmental",
    "Respiratory/Bacterial",
    "Gastrointestinal/Bacterial",
    "Viral Respiratory",
    "Viral/Skin",
    "Fungal/Skin",
    "Dermatological",
    "Fungal",
    "Hepatic/GI",
    "Neurological/Orthopedic",
    "Neurological/Musculoskeletal",
    "Vascular",
    "Metabolic/Cardiovascular",
    "Renal",
    "Urological/Pediatric",
    "Viral",
    "Viral/Oral",
    "Skin/Environmental",
    "Dental/Pediatric",
    "Respiratory/Pediatric",
    "Musculoskeletal/Orthopedic"
],
    symptomCategories: [
    "General"
],
    dosageStrengthsByType: {
    "note": "Dosage strengths are grouped by medicine type. Select based on medicine type dispensed.",
    "Tablet": [
        {
            "label": "Paracetamol 500mg",
            "medicine_ids": [
                "M001"
            ]
        },
        {
            "label": "Paracetamol 650mg",
            "medicine_ids": [
                "M001"
            ]
        },
        {
            "label": "Ibuprofen 200mg",
            "medicine_ids": [
                "M002"
            ]
        },
        {
            "label": "Ibuprofen 400mg",
            "medicine_ids": [
                "M002"
            ]
        },
        {
            "label": "Ibuprofen 600mg",
            "medicine_ids": [
                "M002"
            ]
        },
        {
            "label": "Aspirin 75mg (Cardioprotective)",
            "medicine_ids": [
                "M003"
            ]
        },
        {
            "label": "Aspirin 325mg",
            "medicine_ids": [
                "M003"
            ]
        },
        {
            "label": "Aspirin 500mg",
            "medicine_ids": [
                "M003"
            ]
        },
        {
            "label": "Diclofenac 50mg",
            "medicine_ids": [
                "M004"
            ]
        },
        {
            "label": "Diclofenac 75mg SR",
            "medicine_ids": [
                "M004"
            ]
        },
        {
            "label": "Cetirizine 5mg",
            "medicine_ids": [
                "M006"
            ]
        },
        {
            "label": "Cetirizine 10mg",
            "medicine_ids": [
                "M006"
            ]
        },
        {
            "label": "Loratadine 10mg",
            "medicine_ids": [
                "M007"
            ]
        },
        {
            "label": "Fexofenadine 120mg",
            "medicine_ids": [
                "M008"
            ]
        },
        {
            "label": "Fexofenadine 180mg",
            "medicine_ids": [
                "M008"
            ]
        },
        {
            "label": "Chlorpheniramine 4mg",
            "medicine_ids": [
                "M009"
            ]
        },
        {
            "label": "Metronidazole 200mg",
            "medicine_ids": [
                "M024"
            ]
        },
        {
            "label": "Metronidazole 400mg",
            "medicine_ids": [
                "M024"
            ]
        },
        {
            "label": "Amoxicillin 250mg",
            "medicine_ids": [
                "M028"
            ]
        },
        {
            "label": "Amoxicillin 500mg",
            "medicine_ids": [
                "M028"
            ]
        },
        {
            "label": "Azithromycin 250mg",
            "medicine_ids": [
                "M029"
            ]
        },
        {
            "label": "Azithromycin 500mg",
            "medicine_ids": [
                "M029"
            ]
        },
        {
            "label": "Ciprofloxacin 250mg",
            "medicine_ids": [
                "M030"
            ]
        },
        {
            "label": "Ciprofloxacin 500mg",
            "medicine_ids": [
                "M030"
            ]
        },
        {
            "label": "Metformin 500mg",
            "medicine_ids": [
                "M051"
            ]
        },
        {
            "label": "Metformin 850mg",
            "medicine_ids": [
                "M051"
            ]
        },
        {
            "label": "Metformin 1000mg",
            "medicine_ids": [
                "M051"
            ]
        },
        {
            "label": "Amlodipine 2.5mg",
            "medicine_ids": [
                "M056"
            ]
        },
        {
            "label": "Amlodipine 5mg",
            "medicine_ids": [
                "M056"
            ]
        },
        {
            "label": "Amlodipine 10mg",
            "medicine_ids": [
                "M056"
            ]
        },
        {
            "label": "Atorvastatin 10mg",
            "medicine_ids": [
                "M060"
            ]
        },
        {
            "label": "Atorvastatin 20mg",
            "medicine_ids": [
                "M060"
            ]
        },
        {
            "label": "Atorvastatin 40mg",
            "medicine_ids": [
                "M060"
            ]
        },
        {
            "label": "Omeprazole 10mg",
            "medicine_ids": [
                "M016"
            ]
        },
        {
            "label": "Omeprazole 20mg",
            "medicine_ids": [
                "M016"
            ]
        },
        {
            "label": "Omeprazole 40mg",
            "medicine_ids": [
                "M016"
            ]
        },
        {
            "label": "Pantoprazole 20mg",
            "medicine_ids": [
                "M017"
            ]
        },
        {
            "label": "Pantoprazole 40mg",
            "medicine_ids": [
                "M017"
            ]
        },
        {
            "label": "Levothyroxine 25mcg",
            "medicine_ids": [
                "M054"
            ]
        },
        {
            "label": "Levothyroxine 50mcg",
            "medicine_ids": [
                "M054"
            ]
        },
        {
            "label": "Levothyroxine 100mcg",
            "medicine_ids": [
                "M054"
            ]
        },
        {
            "label": "Allopurinol 100mg",
            "medicine_ids": [
                "M061"
            ]
        },
        {
            "label": "Allopurinol 300mg",
            "medicine_ids": [
                "M061"
            ]
        },
        {
            "label": "Prednisolone 5mg",
            "medicine_ids": [
                "M064"
            ]
        },
        {
            "label": "Prednisolone 10mg",
            "medicine_ids": [
                "M064"
            ]
        },
        {
            "label": "Prednisolone 20mg",
            "medicine_ids": [
                "M064"
            ]
        },
        {
            "label": "Mefenamic Acid 250mg",
            "medicine_ids": [
                "M093"
            ]
        },
        {
            "label": "Mefenamic Acid 500mg",
            "medicine_ids": [
                "M093"
            ]
        },
        {
            "label": "Sertraline 25mg",
            "medicine_ids": [
                "M071"
            ]
        },
        {
            "label": "Sertraline 50mg",
            "medicine_ids": [
                "M071"
            ]
        },
        {
            "label": "Sertraline 100mg",
            "medicine_ids": [
                "M071"
            ]
        },
        {
            "label": "Metoprolol 25mg",
            "medicine_ids": [
                "M058"
            ]
        },
        {
            "label": "Metoprolol 50mg",
            "medicine_ids": [
                "M058"
            ]
        },
        {
            "label": "Atenolol 25mg",
            "medicine_ids": [
                "M058"
            ]
        },
        {
            "label": "Atenolol 50mg",
            "medicine_ids": [
                "M058"
            ]
        },
        {
            "label": "Famotidine 20mg",
            "medicine_ids": [
                "M018"
            ]
        },
        {
            "label": "Famotidine 40mg",
            "medicine_ids": [
                "M018"
            ]
        },
        {
            "label": "Montelukast 5mg (Child)",
            "medicine_ids": [
                "M014"
            ]
        },
        {
            "label": "Montelukast 10mg (Adult)",
            "medicine_ids": [
                "M014"
            ]
        },
        {
            "label": "Betahistine 8mg",
            "medicine_ids": [
                "M065"
            ]
        },
        {
            "label": "Betahistine 16mg",
            "medicine_ids": [
                "M065"
            ]
        },
        {
            "label": "Diosmin 450mg + Hesperidin 50mg",
            "medicine_ids": [
                "M115"
            ]
        }
    ],
    "Capsule": [
        {
            "label": "Amoxicillin 250mg Capsule",
            "medicine_ids": [
                "M028"
            ]
        },
        {
            "label": "Amoxicillin 500mg Capsule",
            "medicine_ids": [
                "M028"
            ]
        },
        {
            "label": "Gabapentin 100mg",
            "medicine_ids": [
                "M107"
            ]
        },
        {
            "label": "Gabapentin 300mg",
            "medicine_ids": [
                "M107"
            ]
        },
        {
            "label": "Gabapentin 400mg",
            "medicine_ids": [
                "M107"
            ]
        },
        {
            "label": "Vitamin D3 1000 IU",
            "medicine_ids": [
                "M047"
            ]
        },
        {
            "label": "Vitamin D3 60000 IU (Weekly)",
            "medicine_ids": [
                "M047"
            ]
        },
        {
            "label": "Vitamin B12 500mcg",
            "medicine_ids": [
                "M046"
            ]
        },
        {
            "label": "Vitamin B12 1000mcg",
            "medicine_ids": [
                "M046"
            ]
        },
        {
            "label": "Omeprazole 20mg Capsule",
            "medicine_ids": [
                "M016"
            ]
        },
        {
            "label": "Fluconazole 50mg",
            "medicine_ids": [
                "M037"
            ]
        },
        {
            "label": "Fluconazole 150mg Single Dose",
            "medicine_ids": [
                "M037"
            ]
        },
        {
            "label": "Probiotics 1 Billion CFU",
            "medicine_ids": [
                "M102"
            ]
        },
        {
            "label": "Probiotics 5 Billion CFU",
            "medicine_ids": [
                "M102"
            ]
        },
        {
            "label": "Omega-3 500mg (EPA+DHA)",
            "medicine_ids": [
                "M105"
            ]
        },
        {
            "label": "Omega-3 1000mg (EPA+DHA)",
            "medicine_ids": [
                "M105"
            ]
        },
        {
            "label": "Tamsulosin 0.4mg",
            "medicine_ids": [
                "M091"
            ]
        }
    ],
    "Syrup": [
        {
            "label": "Paracetamol 125mg/5ml (Paediatric)",
            "medicine_ids": [
                "M001"
            ]
        },
        {
            "label": "Paracetamol 250mg/5ml",
            "medicine_ids": [
                "M001"
            ]
        },
        {
            "label": "Ambroxol 15mg/5ml",
            "medicine_ids": [
                "M011"
            ]
        },
        {
            "label": "Ambroxol 30mg/5ml",
            "medicine_ids": [
                "M011"
            ]
        },
        {
            "label": "Dextromethorphan 10mg/5ml",
            "medicine_ids": [
                "M010"
            ]
        },
        {
            "label": "Lactulose 10g/15ml",
            "medicine_ids": [
                "M025"
            ]
        },
        {
            "label": "Domperidone 5mg/5ml",
            "medicine_ids": [
                "M020"
            ]
        },
        {
            "label": "Iron Syrup 25mg/5ml (Paediatric)",
            "medicine_ids": [
                "M045"
            ]
        },
        {
            "label": "Cetirizine Syrup 5mg/5ml",
            "medicine_ids": [
                "M006"
            ]
        },
        {
            "label": "Promethazine 5mg/5ml",
            "medicine_ids": [
                "M067"
            ]
        }
    ],
    "Inhaler": [
        {
            "label": "Salbutamol MDI 100mcg/dose",
            "medicine_ids": [
                "M013"
            ]
        },
        {
            "label": "Budesonide 100mcg/dose",
            "medicine_ids": [
                "M015"
            ]
        },
        {
            "label": "Budesonide 200mcg/dose",
            "medicine_ids": [
                "M015"
            ]
        },
        {
            "label": "Budesonide 400mcg/dose",
            "medicine_ids": [
                "M015"
            ]
        }
    ],
    "Cream_Gel_Ointment": [
        {
            "label": "Clotrimazole Cream 1%",
            "medicine_ids": [
                "M036"
            ]
        },
        {
            "label": "Betamethasone Cream 0.1%",
            "medicine_ids": [
                "M039"
            ]
        },
        {
            "label": "Hydrocortisone Cream 0.5%",
            "medicine_ids": [
                "M040"
            ]
        },
        {
            "label": "Hydrocortisone Cream 1%",
            "medicine_ids": [
                "M040"
            ]
        },
        {
            "label": "Terbinafine Cream 1%",
            "medicine_ids": [
                "M038"
            ]
        },
        {
            "label": "Mupirocin Ointment 2%",
            "medicine_ids": [
                "M082"
            ]
        },
        {
            "label": "Permethrin Cream 5%",
            "medicine_ids": [
                "M042"
            ]
        },
        {
            "label": "Silver Sulfadiazine Cream 1%",
            "medicine_ids": [
                "M083"
            ]
        },
        {
            "label": "Clobetasol Cream 0.05%",
            "medicine_ids": [
                "M085"
            ]
        },
        {
            "label": "Diclofenac Gel 1%",
            "medicine_ids": [
                "M081"
            ]
        },
        {
            "label": "Diclofenac Gel 2%",
            "medicine_ids": [
                "M081"
            ]
        },
        {
            "label": "Acyclovir Cream 5%",
            "medicine_ids": [
                "M043"
            ]
        }
    ],
    "Eye_Drops": [
        {
            "label": "Chloramphenicol Eye Drops 0.5%",
            "medicine_ids": [
                "M076"
            ]
        },
        {
            "label": "Artificial Tears 0.3% HPMC",
            "medicine_ids": [
                "M077"
            ]
        },
        {
            "label": "Artificial Tears 0.5% HPMC",
            "medicine_ids": [
                "M077"
            ]
        },
        {
            "label": "Timolol Eye Drops 0.25%",
            "medicine_ids": [
                "M078"
            ]
        },
        {
            "label": "Timolol Eye Drops 0.5%",
            "medicine_ids": [
                "M078"
            ]
        }
    ],
    "Ear_Drops": [
        {
            "label": "Ciprofloxacin Ear Drops 0.3%",
            "medicine_ids": [
                "M079"
            ]
        },
        {
            "label": "Ear Wax Softener H2O2 3%",
            "medicine_ids": [
                "M080"
            ]
        }
    ],
    "Nasal_Spray_Drops": [
        {
            "label": "Saline Nasal Spray Isotonic",
            "medicine_ids": [
                "M073"
            ]
        },
        {
            "label": "Xylometazoline 0.05% Child",
            "medicine_ids": [
                "M074"
            ]
        },
        {
            "label": "Xylometazoline 0.1% Adult",
            "medicine_ids": [
                "M074"
            ]
        },
        {
            "label": "Fluticasone Nasal Spray 50mcg/spray",
            "medicine_ids": [
                "M075"
            ]
        }
    ],
    "Injection": [
        {
            "label": "Ceftriaxone 250mg/vial",
            "medicine_ids": [
                "M031"
            ]
        },
        {
            "label": "Ceftriaxone 500mg/vial",
            "medicine_ids": [
                "M031"
            ]
        },
        {
            "label": "Ceftriaxone 1g/vial",
            "medicine_ids": [
                "M031"
            ]
        },
        {
            "label": "Ondansetron 4mg/2ml",
            "medicine_ids": [
                "M021"
            ]
        },
        {
            "label": "Ondansetron 8mg/4ml",
            "medicine_ids": [
                "M021"
            ]
        },
        {
            "label": "Insulin Regular 100 IU/ml",
            "medicine_ids": [
                "M053"
            ]
        },
        {
            "label": "Vitamin B12 1mg/ml",
            "medicine_ids": [
                "M046"
            ]
        }
    ],
    "Powder_Sachet": [
        {
            "label": "ORS Sachet WHO Formula 27.9g",
            "medicine_ids": [
                "M022"
            ]
        },
        {
            "label": "ORS Sachet Low Osmolarity 245 mOsm",
            "medicine_ids": [
                "M022"
            ]
        },
        {
            "label": "Ispaghula Husk Sachet 3.5g",
            "medicine_ids": [
                "M027"
            ]
        }
    ],
    "Lotion_Solution_Shampoo": [
        {
            "label": "Calamine Lotion Standard",
            "medicine_ids": [
                "M041"
            ]
        },
        {
            "label": "Benzyl Benzoate Lotion 25%",
            "medicine_ids": [
                "M086"
            ]
        },
        {
            "label": "Minoxidil Solution 2%",
            "medicine_ids": [
                "M088"
            ]
        },
        {
            "label": "Minoxidil Solution 5%",
            "medicine_ids": [
                "M088"
            ]
        },
        {
            "label": "Ketoconazole Shampoo 2%",
            "medicine_ids": [
                "M089"
            ]
        },
        {
            "label": "Coal Tar Shampoo 2-5%",
            "medicine_ids": [
                "M087"
            ]
        },
        {
            "label": "Salicylic Acid Solution 10%",
            "medicine_ids": [
                "M114"
            ]
        },
        {
            "label": "Povidone-Iodine Solution 10%",
            "medicine_ids": [
                "M084"
            ]
        }
    ],
    "Mouthwash": [
        {
            "label": "Benzydamine Mouthwash 0.15%",
            "medicine_ids": [
                "M112"
            ]
        },
        {
            "label": "Chlorhexidine Mouthwash 0.2%",
            "medicine_ids": [
                "M113"
            ]
        }
    ]
},
    usageGuidelinesByType: {
    "note": "Usage guidelines are grouped by medicine type. Apply the relevant set when dispensing.",
    "Tablet_Capsule": [
        "Take with a full glass of water",
        "Take after meals to reduce GI irritation (NSAIDs, antibiotics, iron)",
        "Take on an empty stomach 30-60 min before meals (PPIs, Levothyroxine)",
        "Do not crush or chew enteric-coated or SR tablets",
        "Take at the same time daily for chronic medications",
        "Complete the full antibiotic course even if symptoms improve",
        "Avoid alcohol during treatment",
        "Do not double-dose if a dose is missed - skip and continue schedule",
        "Swallow capsules whole with water - do not open unless instructed",
        "Store at room temperature away from sunlight and moisture",
        "Space Calcium + Thyroid medication doses by at least 4 hours",
        "Do not stop blood pressure, thyroid or diabetes medicines without doctor advice"
    ],
    "Syrup": [
        "Shake well before each use",
        "Use the measuring spoon or cup provided for accurate dosing",
        "Do not dilute unless specifically instructed",
        "Refrigerate after opening if label advises",
        "Discard opened bottle within 14 days",
        "Give children only paediatric-appropriate doses per weight or age",
        "Do not share the measuring spoon between patients"
    ],
    "Inhaler": [
        "Shake MDI canister well before each use",
        "Exhale fully before placing mouthpiece in mouth",
        "Press canister down firmly as you begin to inhale slowly and deeply",
        "Hold breath for 10 seconds after inhalation then exhale slowly",
        "Rinse mouth with water after using corticosteroid inhaler to prevent oral thrush",
        "Clean mouthpiece weekly with a dry cloth",
        "Use a spacer device for children and elderly patients",
        "Keep rescue inhaler accessible at all times",
        "Monitor dose counter and replace inhaler before reaching zero",
        "Wait 1 minute between puffs if more than one dose is prescribed"
    ],
    "Cream_Gel_Ointment": [
        "Apply a thin layer to the affected area only",
        "Wash hands thoroughly before and after application",
        "Do not apply to broken or infected skin unless it is a wound-specific product",
        "Avoid contact with eyes, nostrils, and mouth",
        "Do not cover with airtight dressing unless specifically advised",
        "Apply 2-3 times daily or as directed on the label",
        "Do not use potent corticosteroid cream on face, groin, or underarms long-term",
        "For antifungal creams, continue for 7 days after symptoms resolve to prevent relapse",
        "Do not stop steroid cream abruptly after prolonged use - taper as advised"
    ],
    "Eye_Drops": [
        "Wash hands thoroughly before instilling eye drops",
        "Tilt head back and gently pull lower eyelid down to create a pocket",
        "Do not let dropper tip touch the eye or any surface to prevent contamination",
        "Wait at least 5 minutes between instillation of different eye drops",
        "Press gently on the inner corner of the eye for 1 minute after instillation",
        "Discard opened bottle after 28 days even if solution remains",
        "Remove contact lenses before use and reinsert after 15 minutes",
        "Store in a cool dry place - some formulations require refrigeration"
    ],
    "Ear_Drops": [
        "Warm the bottle gently in your hands for 1-2 minutes before use",
        "Lie down with the affected ear facing upward",
        "For adults pull earlobe gently back and upward to straighten the canal",
        "For children pull earlobe gently back and downward",
        "Instill the prescribed number of drops and remain in position for 5-10 minutes",
        "Plug ear lightly with a small cotton ball if instructed",
        "Do not use ear drops if eardrum perforation is suspected unless specifically prescribed",
        "Complete the full prescribed course even if symptoms resolve early"
    ],
    "Nasal_Spray_Drops": [
        "Blow nose gently before use to clear nasal passages",
        "Shake nasal spray before each use",
        "Prime the spray pump before first use by pressing several times",
        "Tilt head slightly forward during instillation for nasal drops",
        "Breathe in gently through the nose while pressing the spray",
        "Do not tilt head back after spraying to avoid swallowing",
        "Do not use decongestant nasal spray for more than 3-5 days - risk of rebound congestion",
        "Clean the nasal spray tip with a clean tissue after each use",
        "Do not share nasal sprays between patients"
    ],
    "Injection": [
        "Administer only by a trained healthcare professional",
        "Verify dosage strength and check patient allergy history before administration",
        "Use strict aseptic technique at the injection site",
        "Rotate injection sites for insulin - use abdomen, thigh or upper arm",
        "Do not share needles or syringes under any circumstances",
        "Discard used needles immediately in a sharps disposal container",
        "Observe patient for at least 30 minutes after injection for allergic reactions",
        "Check insulin vial for clarity - do not use if cloudy or discoloured unless expected"
    ],
    "Powder_Sachet_Oral_Liquid": [
        "Dissolve the sachet in the prescribed volume of clean drinking water only",
        "Do not use fruit juice, milk, or carbonated beverages for dissolving ORS",
        "Stir thoroughly until the powder is fully dissolved before consuming",
        "Consume the prepared solution within 1 hour of preparation",
        "Store unmixed sachets at room temperature in a dry place",
        "For ORS in diarrhoea give small sips frequently rather than large amounts at once",
        "Offer children ORS solution using a spoon or cup not a bottle"
    ],
    "Lotion_Shampoo": [
        "For shampoo wet hair thoroughly then apply and massage into the scalp",
        "Leave medicated shampoo on for 3-5 minutes before rinsing thoroughly",
        "For body lotion or scabicide apply to the entire body from neck downward on clean dry skin",
        "Leave scabicide lotion on for 8-12 hours typically overnight then wash off",
        "Do not apply to the face or mucous membranes unless specifically instructed",
        "Wash all clothing bedding and towels in hot water after scabicide treatment",
        "Repeat scabicide application after 7 days if advised"
    ],
    "Mouthwash": [
        "Do not eat or drink for at least 30 minutes before and after using mouthwash",
        "Measure the correct volume using the cap provided",
        "Swish vigorously in the mouth for 30 seconds then spit out - do not swallow",
        "Dilute with equal amount of water if mouth is sensitive",
        "Do not use chlorhexidine mouthwash for more than 2 consecutive weeks",
        "Avoid using immediately after brushing teeth to preserve effectiveness"
    ]
}
};
