# Feature: Zone Map System

## Overview
The map is divided into 2km × 2km grid squares. Each square is a zone with a unique zone number derived from its average coordinates.

---

## How Zones Are Calculated

### Grid Division
- Earth's surface is divided into a grid of 2km × 2km squares
- ~0.018° latitude ≈ 2km, longitude varies by latitude

### Zone Number Formula
```
grid_size_lat = 0.018  (approx 2km in degrees latitude)
grid_size_lng = 0.018 / cos(latitude)  (adjusted for longitude)

zone_x = floor(longitude / grid_size_lng)
zone_y = floor(latitude / grid_size_lat)

zone_center_lat = (zone_y * grid_size_lat) + (grid_size_lat / 2)
zone_center_lng = (zone_x * grid_size_lng) + (grid_size_lng / 2)

zone_number = derived from zone_x and zone_y (e.g., "Z-{zone_y}{zone_x}")
```

### Given a GPS coordinate → Find zone
```
Input: lat, lng
Output: zone_number, zone_center_lat, zone_center_lng
```

---

## Chemist Map View
- Center: Chemist's own zone (highlighted cyan)
- Surrounding: **10 nearby chunks/squares** in 360 degrees
- Not more than 10 surrounding zones shown
- Color coding based on demand intensity:
  - 🔴 Critical demand (red/orange glow)
  - 🟡 Moderate demand (yellow/amber glow)
  - 🟢 Stable/Low demand (green glow)
  - ⚫ No data (dim gray outline)

---

## Zone Data Tracked Per Zone
- Zone number
- Average coordinates (center point)
- Medicines sold in that zone
- Demand score per medicine
- Demand trends (weekly, monthly, day-of-week)
