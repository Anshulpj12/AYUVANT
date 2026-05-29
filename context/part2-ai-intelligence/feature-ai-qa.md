# Feature: AI Q&A Section (Pre-fixed Questions)

## Overview
A section where the chemist selects from pre-fixed questions. The AI (local ML model) responds with data-driven answers based on prediction scores.

---

## Pre-fixed Questions

| # | Question | What it answers |
|---|----------|-----------------|
| 1 | Is there any medicine needed? | Shows medicines running low or predicted to run out |
| 2 | Which zone around requires which medicine? | Zone-wise medicine demand map for nearby zones |
| 3 | When and on which date will medicine be required? | Date predictions for specific medicines |
| 4 | After how many days will medicine be needed? | Countdown/days remaining before shortage |
| 5 | Which medicine is selling fastest this week? | Trending medicines by selling speed |
| 6 | Demand prediction for specific medicine | Targeted forecast for a chosen medicine |

---

## How Answers Are Generated
1. Chemist taps a question
2. Local ML model queries stored sales data and scores
3. Generates prediction based on:
   - Historical sales patterns
   - Monthly trends
   - Day-of-week patterns
   - Zone-wise demand
   - Current stock levels
4. Response shown with:
   - Data cards/chips for relevant medicines and zones
   - Confidence score (e.g., 94% confidence)
   - Trend visualization

---

## Model Info Display
- Model Status: Self-Improving
- Last trained timestamp
- Accuracy percentage
