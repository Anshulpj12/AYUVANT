/* ============================================
   AYUVANT — Part 3: Pharmacist Feedback Module
   6-question structured feedback form, submission,
   history, and learning insights engine
   ============================================ */

window.Feedback = (function () {
    'use strict';

    // ---- Constants ----
    const FEEDBACK_KEY = 'ayuvant_feedback';

    // ---- Question Config ----
    const QUESTIONS = [
        {
            id: 'q1',
            text: 'Why was this alternative chosen?',
            type: 'multi-select',
            options: [
                'Same active salt/composition',
                'Doctor approved the substitute',
                'Patient requested this brand',
                'Original medicine out of stock',
                'More affordable option',
                'Better availability',
                "Pharmacist's professional judgment"
            ]
        },
        {
            id: 'q2',
            text: 'How appropriate was this AI recommendation?',
            type: 'star-rating',
            max: 5
        },
        {
            id: 'q3',
            text: "What was the patient's response?",
            type: 'single-select',
            options: [
                'Accepted immediately',
                'Accepted after explanation',
                'Hesitant but agreed',
                'Refused — wanted only original',
                'Asked to consult doctor first'
            ]
        },
        {
            id: 'q4',
            text: 'Your confidence in therapeutic equivalence?',
            type: 'slider',
            min: 0,
            max: 100,
            step: 5,
            defaultValue: 75,
            unit: '%'
        },
        {
            id: 'q5',
            text: 'Any specific clinical observations?',
            type: 'multi-select',
            options: [
                'No concerns — standard substitution',
                'Slightly different dosage strength',
                'Different manufacturer — may affect trust',
                'Patient has allergy concerns',
                'Requires different dosing schedule',
                'Patient is elderly — needs monitoring',
                'Patient is pregnant/lactating — verified safety',
                'Chronic patient — switching brands may cause confusion'
            ]
        },
        {
            id: 'q6',
            text: 'Would you recommend this substitution again?',
            type: 'single-select',
            options: [
                'Yes — highly recommended',
                'Yes — with caveats',
                'Maybe — depends on patient',
                'No — would prefer different alternative',
                'No — not therapeutically appropriate'
            ]
        }
    ];

    // ---- State ----
    let feedbackEntries = [];

    // ---- Storage Helpers ----
    function load(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) || fallback; }
        catch { return fallback; }
    }
    function save(key, data) {
        try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { console.error('Feedback: save error', e); }
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
        feedbackEntries = load(FEEDBACK_KEY, []);
    }

    // ---- Create Pending Feedback ----
    function createPendingFeedback(transactionId, patientId, originalMedicine, substituteMedicine) {
        var entry = {
            id: 'FB-' + Date.now(),
            transactionId: transactionId,
            patientId: patientId || null,
            originalMedicine: {
                id: originalMedicine.id,
                name: originalMedicine.name,
                genericName: originalMedicine.genericName,
                activeSalts: originalMedicine.activeSalts
            },
            substituteMedicine: {
                id: substituteMedicine.id,
                name: substituteMedicine.name,
                genericName: substituteMedicine.genericName,
                activeSalts: substituteMedicine.activeSalts
            },
            status: 'pending',
            createdAt: new Date().toISOString(),
            responses: null
        };

        feedbackEntries.push(entry);
        save(FEEDBACK_KEY, feedbackEntries);
        return entry;
    }

    // ---- Render Feedback Form ----
    function renderFeedbackForm(containerId, feedbackId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var entry = feedbackEntries.find(function (f) { return f.id === feedbackId; });
        if (!entry) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">rate_review</span>' +
                '<p class="empty-title">Feedback not found</p>' +
                '</div>';
            return;
        }

        var html = '<div class="feedback-form-wrapper" data-feedback-id="' + feedbackId + '">' +
            '<div class="feedback-form-header">' +
                '<span class="material-icons-round" style="color:var(--primary);font-size:24px;">rate_review</span>' +
                '<div class="feedback-form-title">' +
                    '<span class="feedback-form-heading">Substitution Feedback</span>' +
                    '<span class="feedback-form-sub">' +
                        escapeHtml(entry.originalMedicine.name) + ' → ' + escapeHtml(entry.substituteMedicine.name) +
                    '</span>' +
                '</div>' +
            '</div>';

        // Render each question
        QUESTIONS.forEach(function (q) {
            html += '<div class="feedback-question" data-question-id="' + q.id + '">' +
                '<label class="form-label">' + escapeHtml(q.text) + '</label>';

            switch (q.type) {
                case 'multi-select':
                    html += '<div class="chip-group" data-type="multi">';
                    q.options.forEach(function (opt, idx) {
                        html += '<button type="button" class="chip" data-value="' + escapeHtml(opt) + '" data-question="' + q.id + '">' +
                            escapeHtml(opt) + '</button>';
                    });
                    html += '</div>';
                    break;

                case 'star-rating':
                    html += '<div class="star-rating-group" data-question="' + q.id + '">';
                    for (var i = 1; i <= q.max; i++) {
                        html += '<span class="star-icon material-icons-round" data-value="' + i + '" data-question="' + q.id + '">star</span>';
                    }
                    html += '<span class="star-label">Select rating</span>';
                    html += '</div>';
                    break;

                case 'single-select':
                    html += '<div class="pill-group" data-type="single">';
                    q.options.forEach(function (opt) {
                        html += '<button type="button" class="pill" data-value="' + escapeHtml(opt) + '" data-question="' + q.id + '">' +
                            escapeHtml(opt) + '</button>';
                    });
                    html += '</div>';
                    break;

                case 'slider':
                    html += '<div class="slider-group">' +
                        '<input type="range" class="feedback-slider" data-question="' + q.id + '" ' +
                            'min="' + q.min + '" max="' + q.max + '" step="' + q.step + '" value="' + q.defaultValue + '">' +
                        '<span class="slider-value" data-question="' + q.id + '">' + q.defaultValue + q.unit + '</span>' +
                    '</div>';
                    break;
            }

            html += '</div>';
        });

        // Free text notes
        html += '<div class="feedback-question">' +
            '<label class="form-label">Additional Notes (Optional)</label>' +
            '<textarea class="feedback-textarea" id="feedback-notes-' + feedbackId + '" placeholder="Any additional observations or notes..." rows="3"></textarea>' +
        '</div>';

        // Submit button
        html += '<button class="btn-submit-feedback" data-feedback-id="' + feedbackId + '">' +
            '<span class="material-icons-round">send</span> Submit Feedback' +
        '</button>';

        html += '</div>';

        container.innerHTML = html;

        // ---- Wire up interactions ----
        // Multi-select chips
        container.querySelectorAll('.chip-group[data-type="multi"] .chip').forEach(function (chip) {
            chip.addEventListener('click', function () {
                chip.classList.toggle('selected');
            });
        });

        // Single-select pills
        container.querySelectorAll('.pill-group[data-type="single"]').forEach(function (group) {
            group.querySelectorAll('.pill').forEach(function (pill) {
                pill.addEventListener('click', function () {
                    group.querySelectorAll('.pill').forEach(function (p) { p.classList.remove('selected'); });
                    pill.classList.add('selected');
                });
            });
        });

        // Star rating
        container.querySelectorAll('.star-rating-group').forEach(function (group) {
            var stars = group.querySelectorAll('.star-icon');
            var label = group.querySelector('.star-label');

            stars.forEach(function (star) {
                star.addEventListener('click', function () {
                    var val = parseInt(star.dataset.value);
                    stars.forEach(function (s) {
                        var sVal = parseInt(s.dataset.value);
                        if (sVal <= val) {
                            s.classList.add('filled');
                        } else {
                            s.classList.remove('filled');
                        }
                    });
                    group.dataset.selectedValue = val;
                    var labels = ['', 'Poor', 'Below Average', 'Average', 'Good', 'Excellent'];
                    label.textContent = labels[val] || '';
                });

                star.addEventListener('mouseenter', function () {
                    var val = parseInt(star.dataset.value);
                    stars.forEach(function (s) {
                        var sVal = parseInt(s.dataset.value);
                        if (sVal <= val) {
                            s.classList.add('hover');
                        } else {
                            s.classList.remove('hover');
                        }
                    });
                });

                star.addEventListener('mouseleave', function () {
                    stars.forEach(function (s) { s.classList.remove('hover'); });
                });
            });
        });

        // Slider
        container.querySelectorAll('.feedback-slider').forEach(function (slider) {
            var qId = slider.dataset.question;
            var valueLabel = container.querySelector('.slider-value[data-question="' + qId + '"]');
            slider.addEventListener('input', function () {
                if (valueLabel) valueLabel.textContent = slider.value + '%';
            });
        });
    }

    // ---- Collect Form Responses ----
    function collectResponses(container, feedbackId) {
        var wrapper = container.querySelector('.feedback-form-wrapper[data-feedback-id="' + feedbackId + '"]');
        if (!wrapper) return null;

        var responses = {};

        QUESTIONS.forEach(function (q) {
            switch (q.type) {
                case 'multi-select': {
                    var selected = [];
                    wrapper.querySelectorAll('.chip[data-question="' + q.id + '"].selected').forEach(function (chip) {
                        selected.push(chip.dataset.value);
                    });
                    responses[q.id] = selected;
                    break;
                }
                case 'single-select': {
                    var pill = wrapper.querySelector('.pill[data-question="' + q.id + '"].selected');
                    responses[q.id] = pill ? pill.dataset.value : null;
                    break;
                }
                case 'star-rating': {
                    var group = wrapper.querySelector('.star-rating-group[data-question="' + q.id + '"]');
                    responses[q.id] = group ? parseInt(group.dataset.selectedValue) || 0 : 0;
                    break;
                }
                case 'slider': {
                    var slider = wrapper.querySelector('.feedback-slider[data-question="' + q.id + '"]');
                    responses[q.id] = slider ? parseInt(slider.value) : q.defaultValue;
                    break;
                }
            }
        });

        // Notes
        var notes = document.getElementById('feedback-notes-' + feedbackId);
        responses.notes = notes ? notes.value.trim() : '';

        return responses;
    }

    // ---- Submit Feedback ----
    function submitFeedback(feedbackId, responses) {
        var idx = feedbackEntries.findIndex(function (f) { return f.id === feedbackId; });
        if (idx === -1) return false;

        feedbackEntries[idx].status = 'completed';
        feedbackEntries[idx].completedAt = new Date().toISOString();
        feedbackEntries[idx].responses = responses;

        save(FEEDBACK_KEY, feedbackEntries);
        return true;
    }

    // ---- Getters ----
    function getPendingFeedback() {
        return feedbackEntries.filter(function (f) { return f.status === 'pending'; });
    }

    function getCompletedFeedback() {
        return feedbackEntries.filter(function (f) { return f.status === 'completed'; });
    }

    // ---- Render History ----
    function renderFeedbackHistory(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var completed = getCompletedFeedback();

        if (completed.length === 0) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">history</span>' +
                '<p class="empty-title">No feedback history</p>' +
                '<p class="empty-text">Complete feedback forms to see history</p>' +
                '</div>';
            return;
        }

        container.innerHTML = completed.map(function (entry) {
            var stars = entry.responses && entry.responses.q2 ? entry.responses.q2 : 0;
            var starHtml = '';
            for (var i = 1; i <= 5; i++) {
                starHtml += '<span class="material-icons-round" style="font-size:14px;color:' +
                    (i <= stars ? 'var(--warning)' : 'var(--outline-variant)') + ';">star</span>';
            }

            var confidence = entry.responses && entry.responses.q4 ? entry.responses.q4 : 0;
            var recommendation = entry.responses && entry.responses.q6 ? entry.responses.q6 : 'N/A';
            var dateStr = entry.completedAt ? new Date(entry.completedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : '';

            return '<div class="glass-card feedback-history-card">' +
                '<div class="fb-history-header">' +
                    '<div class="fb-history-medicines">' +
                        '<span class="fb-original">' + escapeHtml(entry.originalMedicine.name) + '</span>' +
                        '<span class="material-icons-round" style="font-size:14px;color:var(--primary);">arrow_forward</span>' +
                        '<span class="fb-substitute">' + escapeHtml(entry.substituteMedicine.name) + '</span>' +
                    '</div>' +
                    '<span class="fb-history-date">' + dateStr + '</span>' +
                '</div>' +
                '<div class="fb-history-details">' +
                    '<div class="fb-detail-item">' +
                        '<span class="fb-detail-label">Rating</span>' +
                        '<span class="fb-detail-stars">' + starHtml + '</span>' +
                    '</div>' +
                    '<div class="fb-detail-item">' +
                        '<span class="fb-detail-label">Confidence</span>' +
                        '<span class="fb-detail-value">' + confidence + '%</span>' +
                    '</div>' +
                    '<div class="fb-detail-item">' +
                        '<span class="fb-detail-label">Recommend</span>' +
                        '<span class="fb-detail-value" style="font-size:11px;">' + escapeHtml(recommendation) + '</span>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    // ---- Render Insights ----
    function renderInsights(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var completed = getCompletedFeedback();

        if (completed.length === 0) {
            container.innerHTML = '<div class="empty-state show">' +
                '<span class="material-icons-round empty-icon">lightbulb</span>' +
                '<p class="empty-title">No insights yet</p>' +
                '<p class="empty-text">Complete feedback forms to generate learning insights</p>' +
                '</div>';
            return;
        }

        // Total count
        var totalCount = completed.length;

        // Average rating (Q2)
        var totalRating = 0;
        var ratingCount = 0;
        completed.forEach(function (e) {
            if (e.responses && typeof e.responses.q2 === 'number' && e.responses.q2 > 0) {
                totalRating += e.responses.q2;
                ratingCount++;
            }
        });
        var avgRating = ratingCount > 0 ? (totalRating / ratingCount).toFixed(1) : '0';

        // Patient acceptance rate (Q3 — accepted = first 3 options)
        var acceptedCount = 0;
        var q3Count = 0;
        var acceptedOptions = ['Accepted immediately', 'Accepted after explanation', 'Hesitant but agreed'];
        completed.forEach(function (e) {
            if (e.responses && e.responses.q3) {
                q3Count++;
                if (acceptedOptions.indexOf(e.responses.q3) !== -1) {
                    acceptedCount++;
                }
            }
        });
        var acceptanceRate = q3Count > 0 ? Math.round((acceptedCount / q3Count) * 100) : 0;

        // Top reasons (Q1 aggregation)
        var reasonCounts = {};
        completed.forEach(function (e) {
            if (e.responses && Array.isArray(e.responses.q1)) {
                e.responses.q1.forEach(function (reason) {
                    reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
                });
            }
        });
        var topReasons = Object.entries(reasonCounts)
            .sort(function (a, b) { return b[1] - a[1]; })
            .slice(0, 5);

        // Recommendation rate (Q6 — "Yes" options)
        var wouldRecommend = 0;
        var q6Count = 0;
        completed.forEach(function (e) {
            if (e.responses && e.responses.q6) {
                q6Count++;
                if (e.responses.q6.indexOf('Yes') === 0) {
                    wouldRecommend++;
                }
            }
        });
        var recommendRate = q6Count > 0 ? Math.round((wouldRecommend / q6Count) * 100) : 0;

        // Star HTML for avg
        var avgStarHtml = '';
        for (var i = 1; i <= 5; i++) {
            var filled = i <= Math.round(parseFloat(avgRating));
            avgStarHtml += '<span class="material-icons-round" style="font-size:18px;color:' +
                (filled ? 'var(--warning)' : 'var(--outline-variant)') + ';">star</span>';
        }

        var html = '<div class="insights-grid">' +
            '<div class="glass-card insight-stat-card">' +
                '<span class="material-icons-round insight-icon" style="color:var(--primary);">assignment</span>' +
                '<span class="insight-value">' + totalCount + '</span>' +
                '<span class="insight-label">Total Feedback</span>' +
            '</div>' +
            '<div class="glass-card insight-stat-card">' +
                '<span class="material-icons-round insight-icon" style="color:var(--warning);">star</span>' +
                '<span class="insight-value">' + avgRating + '<small>/5</small></span>' +
                '<span class="insight-label">Avg Rating</span>' +
                '<div class="insight-stars">' + avgStarHtml + '</div>' +
            '</div>' +
            '<div class="glass-card insight-stat-card">' +
                '<span class="material-icons-round insight-icon" style="color:var(--tertiary);">people</span>' +
                '<span class="insight-value">' + acceptanceRate + '%</span>' +
                '<span class="insight-label">Patient Acceptance</span>' +
            '</div>' +
            '<div class="glass-card insight-stat-card">' +
                '<span class="material-icons-round insight-icon" style="color:#AB47BC;">thumb_up</span>' +
                '<span class="insight-value">' + recommendRate + '%</span>' +
                '<span class="insight-label">Would Recommend</span>' +
            '</div>' +
        '</div>';

        // Top reasons
        if (topReasons.length > 0) {
            html += '<div class="glass-card insight-reasons-card">' +
                '<span class="insight-reasons-title">Top Substitution Reasons</span>' +
                '<div class="insight-reasons-list">';

            topReasons.forEach(function (r, idx) {
                var pct = totalCount > 0 ? Math.round((r[1] / totalCount) * 100) : 0;
                html += '<div class="insight-reason-row">' +
                    '<span class="insight-reason-rank">' + (idx + 1) + '</span>' +
                    '<div class="insight-reason-bar-wrap">' +
                        '<span class="insight-reason-text">' + escapeHtml(r[0]) + '</span>' +
                        '<div class="insight-reason-bar">' +
                            '<div class="insight-reason-fill" style="width:' + pct + '%;"></div>' +
                        '</div>' +
                    '</div>' +
                    '<span class="insight-reason-count">' + r[1] + '</span>' +
                '</div>';
            });

            html += '</div></div>';
        }

        container.innerHTML = html;
    }

    // ---- Average Rating for Pair ----
    function getAverageRating(originalId, substituteId) {
        var ratings = [];

        feedbackEntries.forEach(function (entry) {
            if (entry.status !== 'completed' || !entry.responses) return;
            if (entry.originalMedicine.id === originalId && entry.substituteMedicine.id === substituteId) {
                if (typeof entry.responses.q2 === 'number' && entry.responses.q2 > 0) {
                    ratings.push(entry.responses.q2);
                }
            }
        });

        if (ratings.length === 0) return null;
        return ratings.reduce(function (s, r) { return s + r; }, 0) / ratings.length;
    }

    // ---- Public API ----
    return {
        init: init,
        createPendingFeedback: createPendingFeedback,
        renderFeedbackForm: renderFeedbackForm,
        collectResponses: collectResponses,
        submitFeedback: submitFeedback,
        getPendingFeedback: getPendingFeedback,
        getCompletedFeedback: getCompletedFeedback,
        renderFeedbackHistory: renderFeedbackHistory,
        renderInsights: renderInsights,
        getAverageRating: getAverageRating,
        QUESTIONS: QUESTIONS
    };

})();
