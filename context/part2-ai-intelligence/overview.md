# Part 2: AI Intelligence, Zone Map & Sales Tracking

## Summary
Handles medicine sales tracking with zone data, zone-based map system, ML-based demand prediction (runs locally), self-improving model, notifications, and AI Q&A section.

---

## Feature 1: Medicine Sale / Sold Section
When any medicine is sold, the chemist goes to this section:
1. Search medicine by name
2. Enter the batch number of that medicine
3. Add the zone number of the buyer's location

---

## Feature 2: Zone Map System

### How Zones Work
- The map is divided into **2km × 2km squares** (grid-based)
- Each square = 1 zone
- **Zone number** is derived from the **average coordinates** of that zone square
- A formula converts any GPS location into the correct zone number
- The system knows which zone a location belongs to using this formula

### Zone Formula Concept
```
Given a GPS coordinate (lat, lng):
  zone_x = floor(lng / grid_size)
  zone_y = floor(lat / grid_size)
  zone_number = derived from average coordinates of that square
```

### Chemist Map View
- Shows the chemist's own zone (center)
- Shows **nearby 10 chunks/squares** around 360 degrees
- Not more than 10 surrounding zones
- Each zone colored based on demand intensity
- Good for work management and quick visibility

---

## Feature 3: Data Tracking
- All purchase data stored
- When medicine is purchased more (frequency tracking)
- Demand tracked by:
  - **Month** (which month has more demand)
  - **Day of week** (which day in a week)
- Data stored by score

---

## Feature 4: ML Prediction Model (Local)
- **Runs locally** on device
- Trained by dataset
- Predicts medicine shortage based on selling speed
- Predictions: **weekly** and **monthly**
- Averaging and scoring to decide when medicine is needed most
- **Self-improving model** — learns from new data continuously

### What it predicts:
- When and where upcoming demand will be
- Which medicine in which zone
- Tells chemist to fill supply of needed medicine
- Zone-wise demand patterns

---

## Feature 5: Notification System
- Notifies about upcoming demand
- Which medicine, which zone, when
- Alerts chemist to fill supply before shortage

---

## Feature 6: AI Q&A Section (Pre-fixed Questions)
A section where chemist selects from pre-fixed questions:

1. **"Is there any medicine needed?"** — Shows medicines running low or predicted to run out
2. **"Which zone around requires which medicine?"** — Zone-wise medicine demand map
3. **"Your probability — when and on which date or after how many days which medicine will be required?"** — Date/time predictions for specific medicines
4. More pre-fixed questions to be added

The AI responds with data-driven answers based on the prediction model.

---

## Data Flow
```
Medicine Sold → Record (name, batch, zone, date, quantity)
    ↓
Store locally with scores
    ↓
Feed into ML model (local)
    ↓
Model learns: monthly trends, weekly trends, day-of-week patterns
    ↓
Self-improves with new data
    ↓
Generates predictions:
  - Medicine shortage alerts
  - Zone-wise demand
  - Weekly/Monthly forecasts
    ↓
Notifications → Chemist
AI Q&A → Chemist asks pre-fixed questions → Gets data answers
```
