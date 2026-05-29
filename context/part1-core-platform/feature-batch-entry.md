# Feature: Medicine Batch Entry

## Overview
The first and most fundamental feature of AYUVANT. When a chemist receives new medicine stock, they enter the batch details into the system.

---

## User Flow

```
Chemist opens app
    → Taps "Add Batch" / "+" button
    → Sees "Add Medicine Batch" screen
    → Enters:
        1. Batch Number (e.g., "BTH-2026-05-001")
        2. Medicine Name (e.g., "Paracetamol 500mg")
        3. Quantity in Batch (e.g., 500)
        4. Manufacturing Date (e.g., 2026-01-15)
        5. Expiry Date / Date of Use (e.g., 2028-01-15)
    → Taps "Submit Batch"
    → System validates & saves
    → Shows success confirmation
    → Batch appears in inventory
```

---

## Data Model

```javascript
{
  id: "auto-generated-uuid",
  batchNumber: "BTH-2026-05-001",        // Unique batch identifier
  medicineName: "Paracetamol 500mg",     // Name of the medicine
  quantity: 500,                          // Number of units in batch
  manufacturingDate: "2026-01-15",       // Date of manufacturing
  expiryDate: "2028-01-15",             // Date of use / expiry
  entryDate: "2026-05-29",              // When this was entered
  enteredBy: "chemist-user-id",          // Who entered it
  status: "active"                       // active | expired | depleted
}
```

---

## Input Fields

| # | Field | Type | Icon | Validation |
|---|-------|------|------|------------|
| 1 | Batch Number | Text | Barcode | Required, unique, alphanumeric |
| 2 | Medicine Name | Text + Autocomplete | Pill/Capsule | Required, searchable |
| 3 | Quantity | Number + Stepper | Counter | Required, min: 1 |
| 4 | Manufacturing Date | Date Picker | Calendar | Required, must be ≤ today |
| 5 | Expiry Date | Date Picker | Calendar | Required, must be > manufacturing date |

---

## Validations

1. **Batch Number**: Must be unique across all entries
2. **Medicine Name**: Supports autocomplete from existing medicine database
3. **Quantity**: Must be a positive integer (≥ 1)
4. **Manufacturing Date**: Cannot be in the future
5. **Expiry Date**: 
   - Must be after manufacturing date
   - If within 3 months from today → show **warning** (orange)
   - If already expired → show **error** (red), block submission

---

## UI Screen

### Stitch Design
- **Screen ID**: `767bcc6e12e1448f8942ff8bab6b03b6`
- **Project ID**: `9624603255088307164`
- **Device**: Mobile
- **Style**: Dark futuristic, glassmorphic card, electric cyan accents

### Key UI Elements
- Top navigation bar with back arrow and AYUVANT logo
- Status indicator: "New Batch Entry" with pulse animation
- Glassmorphic form container
- Glowing cyan input focus states
- "+/-" stepper for quantity
- "Scan Barcode" floating action button
- "Submit Batch" button with cyan-to-purple gradient
- Holographic gradient header

---

## API Endpoints (Planned)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/batches` | Create new batch entry |
| GET | `/api/batches` | List all batches |
| GET | `/api/batches/:id` | Get single batch |
| PUT | `/api/batches/:id` | Update batch |
| DELETE | `/api/batches/:id` | Delete batch |

---

## Future Enhancements
- Barcode scanning via camera
- Medicine name autocomplete from master database
- Duplicate batch number detection
- Bulk batch entry via CSV upload
- QR code generation for batch tracking
