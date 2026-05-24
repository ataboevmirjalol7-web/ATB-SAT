const PLAN_STORAGE_KEY = 'sat-system-plan';

const threeMonthPlan = {
    targetScore: 1500,
    totalWeeks: 12,
    phases: [
        {
            id: 1,
            name: '1-Oy — Asos',
            weeks: '1–4',
            color: 'blue',
            focus: 'SAT formatini o\'rganish, zaif joylarni aniqlash, algebra va reading asoslari',
            scoreTarget: '1200 → 1350',
            mockTests: 1
        },
        {
            id: 2,
            name: '2-Oy — Amaliyot',
            weeks: '5–8',
            color: 'purple',
            focus: 'Vaqt bilan ishlash, to\'liq mock testlar, xato tahlili va tezlik',
            scoreTarget: '1350 → 1450',
            mockTests: 2
        },
        {
            id: 3,
            name: '3-Oy — Imtihon',
            weeks: '9–12',
            color: 'green',
            focus: 'Imtihon simulyatsiyasi, zaif nuqtalarni yopish, eng yuqori natija',
            scoreTarget: '1450 → 1500+',
            mockTests: 3
        }
    ],
    weeks: [
        {
            week: 1,
            phase: 1,
            title: 'Diagnostika & Algebra Asosi',
            reading: ['SAT Reading formatini o\'rganish (2 modul, 54 daq)', 'Main idea va supporting details — 20 ta savol', 'Passage turlari: literature, history, science'],
            writing: ['Subject-verb agreement — 30 ta savol', 'Punctuation asoslari (vergul, nuqta)', 'Transitions kirish — 15 ta savol'],
            math: ['Linear equations & inequalities — 25 ta masala', 'Systems of equations — 15 ta masala', 'Word problems (algebra) — 10 ta masala'],
            vocab: 'Anki: 100 ta SAT so\'z (kuniga 15 ta yangi)',
            mock: null,
            weeklyGoal: 'SAT formatini tushunish va algebra poydevorini mustahkamlash'
        },
        {
            week: 2,
            phase: 1,
            title: 'Reading Strategiya & Funksiyalar',
            reading: ['Inference savollar — 25 ta', 'Evidence-based pairs — 15 ta', 'Graph/chart bilan reading — 10 ta'],
            writing: ['Verb tense consistency — 25 ta savol', 'Pronoun clarity — 20 ta savol', 'Modifier placement — 15 ta savol'],
            math: ['Linear functions & graphs — 20 ta masala', 'Slope, intercept, rate of change — 15 ta', 'Function notation — 10 ta masala'],
            vocab: 'Anki: 100 ta so\'z davom + maqola o\'qish (3 ta)',
            mock: null,
            weeklyGoal: 'Reading strategiyalarini o\'rganish va funksiyalar bo\'yicha ishonch'
        },
        {
            week: 3,
            phase: 1,
            title: 'Grammar Chuqurlashtirish & Quadratics',
            reading: ['Vocabulary in context — 20 ta', 'Author\'s purpose & tone — 15 ta', 'Cross-text connections — 10 ta'],
            writing: ['Parallel structure — 20 ta savol', 'Concision & clarity — 20 ta savol', 'Standard English conventions — 20 ta'],
            math: ['Quadratic equations — 20 ta masala', 'Factoring & completing the square — 15 ta', 'Parabola graphs — 10 ta masala'],
            vocab: 'Anki: 100 ta so\'z + NY Times 2 ta maqola',
            mock: null,
            weeklyGoal: 'Writing qoidalarini mustahkamlash va quadraticsni yechish'
        },
        {
            week: 4,
            phase: 1,
            title: '1-Oy Yakuni & Birinchi Mock',
            reading: ['Timed Reading modul (32 daq) — 2 marta', 'Xato tahlili: har xato uchun sabab yozish', 'Eng ko\'p xato qilinadigan tur — qayta mashq'],
            writing: ['Timed Writing modul (32 daq) — 2 marta', 'Grammar xatolar ro\'yxati tuzish', 'Transitions va organization — 20 ta'],
            math: ['Timed Math modul (35 daq) — 2 marta', 'Data analysis kirish — tables & graphs', 'Percent, ratio, proportion — 20 ta'],
            vocab: 'Anki: 400 ta so\'z yakunlash (1-oy)',
            mock: { type: 'Partial', desc: 'Reading + Math (1 modul har biri). Maqsad: 650+ kombinatsiya' },
            weeklyGoal: 'Birinchi mock test — zaif joylarni aniqlash'
        },
        {
            week: 5,
            phase: 2,
            title: 'Vaqt Boshqaruvi & Advanced Algebra',
            reading: ['Full timed Reading — har kuni 1 modul', 'Passage xaritalash texnikasi', 'Savol turlari bo\'yicha tezlik mashqi'],
            writing: ['Full timed Writing — har kuni 1 modul', 'Comma rules chuqur — 30 ta', 'Sentence boundaries — 25 ta'],
            math: ['Polynomials & rational expressions — 20 ta', 'Exponents & radicals — 20 ta', 'Absolute value — 15 ta masala'],
            vocab: 'Anki: yangi 75 ta so\'z + maqola 4 ta',
            mock: null,
            weeklyGoal: 'Har bir bo\'limni vaqt ichida tugatish ko\'nikmasi'
        },
        {
            week: 6,
            phase: 2,
            title: 'Geometry & Writing Tezlik',
            reading: ['Science passages — 15 ta savol', 'Historical documents — 10 ta', 'Dual passage comparison — 10 ta'],
            writing: ['Transitions mastery — 30 ta', 'Rhetorical synthesis — 20 ta', 'Full Writing modul — 3 marta timed'],
            math: ['Triangles, circles, angles — 25 ta', 'Area, volume, coordinate geometry — 20 ta', 'Trigonometry basics — 10 ta'],
            vocab: 'Anki: 75 ta so\'z + The Atlantic 2 ta maqola',
            mock: null,
            weeklyGoal: 'Geometry va writing tezligini oshirish'
        },
        {
            week: 7,
            phase: 2,
            title: 'To\'liq Mock #1 & Xato Tahlili',
            reading: ['Full SAT Reading simulyatsiya — 2 marta', 'Har mockdan keyin 1 soat xato tahlili', 'Zaif passage turi — maxsus mashq'],
            writing: ['Full SAT Writing simulyatsiya — 2 marta', 'Xato daftari: takrorlanuvchi xatolar', 'Grammar cheat sheet yaratish'],
            math: ['Full SAT Math simulyatsiya — 2 marta', 'Calculator vs no-calculator strategiya', 'Eng sekin masala turlari — tezlik mashqi'],
            vocab: 'Anki review: barcha eski so\'zlar',
            mock: { type: 'Full', desc: 'To\'liq SAT simulyatsiya #1. Maqsad: 1380–1420' },
            weeklyGoal: 'Birinchi to\'liq mock — haqiqiy natijani ko\'rish'
        },
        {
            week: 8,
            phase: 2,
            title: 'Zaif Joylarni Yopish',
            reading: ['Faqat zaif savol turlari — 50 ta', 'Timed drills: 5 daqiqada 5 ta savol', 'Passage skimming texnikasi'],
            writing: ['Faqat zaif grammar qoidalari — 50 ta', 'Timed drills: 3 daqiqada 5 ta savol', 'Cheat sheet takrorlash'],
            math: ['Faqat zaif mavzular — 50 ta masala', 'Desmos strategiyalari', 'Word problems maxsus — 20 ta'],
            vocab: 'Anki: zaif so\'zlar qayta ko\'rib chiqish',
            mock: { type: 'Section', desc: 'Faqat eng zaif bo\'lim mock. Maqsad: +50 ball o\'sish' },
            weeklyGoal: 'Mock #1 dagi xatolardan 80% ni bartaraf etish'
        },
        {
            week: 9,
            phase: 3,
            title: 'Imtihon Simulyatsiyasi #2',
            reading: ['Full timed Reading — 3 marta (exam conditions)', 'Telefon yo\'q, vaqt qat\'iy', 'Har safar xato tahlili'],
            writing: ['Full timed Writing — 3 marta', 'Imtihon muhiti simulyatsiyasi', 'Xato daftari yangilash'],
            math: ['Full timed Math — 3 marta', 'Calculator strategiyasi mukammallashtirish', 'Oxirgi 5 daqiqa tekshirish protokoli'],
            vocab: 'Anki: faqat qiyin so\'zlar review',
            mock: { type: 'Full', desc: 'To\'liq SAT simulyatsiya #2. Maqsad: 1450–1480' },
            weeklyGoal: 'Imtihon sharoitida ishlash — stress boshqaruvi'
        },
        {
            week: 10,
            phase: 3,
            title: 'Tezlik & Aniqlik Sprint',
            reading: ['Lightning round: 10 savol / 8 daq — 5 marta', 'Eng qiyin passage turlari', 'Final strategiya qayd etish'],
            writing: ['Lightning round: 10 savol / 6 daq — 5 marta', 'Oxirgi grammar review', 'Eng tez-tez xato qoidalar'],
            math: ['Lightning round: 10 masala / 10 daq — 5 marta', 'Desmos tez yechimlar', 'Hard questions bank — 30 ta'],
            vocab: 'Faqat oldingi xato so\'zlar',
            mock: null,
            weeklyGoal: 'Tezlik va aniqlikni maksimum darajaga olib chiqish'
        },
        {
            week: 11,
            phase: 3,
            title: 'Yakuniy Mock #3',
            reading: ['Full Reading — 2 marta (exam day simulation)', 'Strategiya final review', 'Passage turlari bo\'yicha so\'nggi mashq'],
            writing: ['Full Writing — 2 marta', 'Grammar final checklist', 'Transitions & organization review'],
            math: ['Full Math — 2 marta', 'Barcha formulalar review sheet', 'Calculator shortcuts'],
            vocab: 'Anki: faqat 50 ta eng muhim so\'z',
            mock: { type: 'Full', desc: 'Yakuniy to\'liq mock #3. Maqsad: 1480–1520' },
            weeklyGoal: 'Oxirgi mock — 1500 ga tayyorlikni tasdiqlash'
        },
        {
            week: 12,
            phase: 3,
            title: 'Imtihon Oldi & Engil Review',
            reading: ['Faqat 1 ta timed modul (yengil)', 'Strategiya qayta o\'qish — 30 daq', 'Xato daftari oxirgi ko\'rib chiqish'],
            writing: ['Faqat 1 ta timed modul (yengil)', 'Grammar cheat sheet o\'qish', 'Dam olish muhim!'],
            math: ['Faqat 1 ta timed modul (yengil)', 'Formula sheet o\'qish', 'Og\'ir mashq qilma — miya dam oladi'],
            vocab: 'Faqat 20 ta eng muhim so\'z',
            mock: null,
            weeklyGoal: 'Imtihon kuniga tayyor — dam olish, uyqu, ishonch'
        }
    ]
};

function loadPlanData() {
    try {
        return JSON.parse(localStorage.getItem(PLAN_STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

function savePlanData(data) {
    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(data));
}

function getPlanData() {
    if (!window._planData) {
        window._planData = loadPlanData();
    }
    return window._planData;
}

function getStartDate() {
    const data = getPlanData();
    if (data.startDate) {
        return new Date(data.startDate + 'T00:00:00');
    }
    return null;
}

function getCurrentWeekNumber() {
    const start = getStartDate();
    if (!start) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffMs = today - start;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const week = Math.floor(diffDays / 7) + 1;

    if (week < 1) return 0;
    if (week > threeMonthPlan.totalWeeks) return threeMonthPlan.totalWeeks + 1;
    return week;
}

function getWeekProgress() {
    const data = getPlanData();
    return data.weekProgress || {};
}

function toggleWeekGoal(weekNum, goalIndex) {
    const data = getPlanData();
    if (!data.weekProgress) data.weekProgress = {};
    if (!data.weekProgress[weekNum]) data.weekProgress[weekNum] = {};

    const key = `goal-${goalIndex}`;
    data.weekProgress[weekNum][key] = !data.weekProgress[weekNum][key];
    savePlanData(data);
}

function saveMockScore(weekNum, score) {
    const data = getPlanData();
    if (!data.mockScores) data.mockScores = {};
    data.mockScores[weekNum] = parseInt(score, 10) || null;
    savePlanData(data);
}

function setStartDate(dateStr) {
    const data = getPlanData();
    data.startDate = dateStr;
    savePlanData(data);
}

function renderPlanOverview() {
    const currentWeek = getCurrentWeekNumber();
    const start = getStartDate();

    let statusHtml = '';
    if (!start) {
        statusHtml = '<p class="plan-status hint">Boshlash sanasini tanlang — qaysi haftada ekanligingiz avtomatik hisoblanadi.</p>';
    } else if (currentWeek === 0) {
        statusHtml = '<p class="plan-status upcoming">Reja hali boshlanmagan. Tayyorlaning!</p>';
    } else if (currentWeek > threeMonthPlan.totalWeeks) {
        statusHtml = '<p class="plan-status complete">3 oylik reja yakunlandi! Tabriklaymiz!</p>';
    } else {
        const weekData = threeMonthPlan.weeks[currentWeek - 1];
        statusHtml = `
            <div class="plan-status active">
                <span class="status-badge">Hafta ${currentWeek} / ${threeMonthPlan.totalWeeks}</span>
                <strong>${weekData.title}</strong>
                <p>${weekData.weeklyGoal}</p>
            </div>
        `;
    }

    document.getElementById('plan-status').innerHTML = statusHtml;

    const phasesEl = document.getElementById('phases-grid');
    phasesEl.innerHTML = threeMonthPlan.phases.map((phase) => {
        const isActive = currentWeek && phase.id === threeMonthPlan.weeks[Math.min(currentWeek - 1, 11)]?.phase;
        return `
            <div class="phase-card phase-${phase.color}${isActive ? ' active-phase' : ''}">
                <div class="phase-header">
                    <span class="phase-num">${phase.name}</span>
                    <span class="phase-weeks">Hafta ${phase.weeks}</span>
                </div>
                <p class="phase-focus">${phase.focus}</p>
                <div class="phase-meta">
                    <span>Maqsad: ${phase.scoreTarget}</span>
                    <span>Mock: ${phase.mockTests} ta</span>
                </div>
            </div>
        `;
    }).join('');

    const targetEl = document.getElementById('target-score');
    if (targetEl) {
        targetEl.textContent = threeMonthPlan.targetScore;
    }

    const progressEl = document.getElementById('plan-progress-fill');
    const progressLabel = document.getElementById('plan-progress-label');
    if (progressEl && currentWeek) {
        const pct = Math.min(100, Math.max(0, ((currentWeek - 1) / threeMonthPlan.totalWeeks) * 100));
        progressEl.style.width = `${currentWeek > threeMonthPlan.totalWeeks ? 100 : pct}%`;
        progressLabel.textContent = currentWeek > threeMonthPlan.totalWeeks
            ? '100% — Reja yakunlandi'
            : `${Math.round(pct)}% — ${threeMonthPlan.totalWeeks - currentWeek + 1} hafta qoldi`;
    } else if (progressEl) {
        progressEl.style.width = '0%';
        progressLabel.textContent = '0% — Sanani tanlang';
    }
}

function renderWeeks() {
    const container = document.getElementById('weeks-container');
    const currentWeek = getCurrentWeekNumber();
    const weekProgress = getWeekProgress();
    const mockScores = getPlanData().mockScores || {};

    container.innerHTML = threeMonthPlan.weeks.map((week) => {
        const isCurrent = currentWeek === week.week;
        const isPast = currentWeek && week.week < currentWeek;
        const isFuture = currentWeek !== null && week.week > currentWeek;
        const progress = weekProgress[week.week] || {};

        const allGoals = [
            ...week.reading.map((g) => ({ text: g, type: 'reading' })),
            ...week.writing.map((g) => ({ text: g, type: 'writing' })),
            ...week.math.map((g) => ({ text: g, type: 'math' })),
            { text: week.vocab, type: 'vocab' }
        ];

        const doneCount = allGoals.filter((_, i) => progress[`goal-${i}`]).length;
        const totalGoals = allGoals.length;
        const pct = totalGoals ? Math.round((doneCount / totalGoals) * 100) : 0;

        const goalsHtml = allGoals.map((goal, i) => {
            const checked = progress[`goal-${i}`] ? 'checked' : '';
            const typeLabel = { reading: 'R', writing: 'W', math: 'M', vocab: 'V' }[goal.type];
            return `
                <label class="week-goal week-goal-${goal.type}">
                    <input type="checkbox" data-week="${week.week}" data-goal="${i}" ${checked}>
                    <span class="goal-type">${typeLabel}</span>
                    <span>${goal.text}</span>
                </label>
            `;
        }).join('');

        const mockHtml = week.mock ? `
            <div class="week-mock">
                <strong>Mock Test: ${week.mock.type}</strong>
                <p>${week.mock.desc}</p>
                <div class="mock-score-input">
                    <label>Natija (ball):</label>
                    <input type="number" class="error-input mock-score" data-week="${week.week}"
                        placeholder="Masalan: 1420" min="400" max="1600"
                        value="${mockScores[week.week] || ''}">
                </div>
            </div>
        ` : '';

        return `
            <details class="week-card${isCurrent ? ' current-week' : ''}${isPast ? ' past-week' : ''}${isFuture ? ' future-week' : ''}" ${isCurrent ? 'open' : ''}>
                <summary class="week-summary">
                    <div class="week-summary-left">
                        <span class="week-num">Hafta ${week.week}</span>
                        <span class="week-title">${week.title}</span>
                    </div>
                    <div class="week-summary-right">
                        <span class="week-pct">${pct}%</span>
                        ${isCurrent ? '<span class="current-badge">Hozir</span>' : ''}
                    </div>
                </summary>
                <div class="week-body">
                    <p class="week-goal-text"><strong>Haftalik maqsad:</strong> ${week.weeklyGoal}</p>
                    <div class="week-goals">${goalsHtml}</div>
                    ${mockHtml}
                </div>
            </details>
        `;
    }).join('');

    container.querySelectorAll('.week-goal input[type="checkbox"]').forEach((cb) => {
        cb.addEventListener('change', () => {
            toggleWeekGoal(parseInt(cb.dataset.week, 10), parseInt(cb.dataset.goal, 10));
            renderWeeks();
            renderPlanOverview();
        });
    });

    container.querySelectorAll('.mock-score').forEach((input) => {
        input.addEventListener('change', () => {
            saveMockScore(parseInt(input.dataset.week, 10), input.value);
        });
    });
}

function initPlan() {
    const data = getPlanData();
    const startInput = document.getElementById('plan-start-date');
    if (startInput) {
        if (data.startDate) {
            startInput.value = data.startDate;
        } else {
            const today = new Date();
            startInput.value = today.toISOString().slice(0, 10);
        }

        startInput.addEventListener('change', () => {
            setStartDate(startInput.value);
            renderPlanOverview();
            renderWeeks();
        });
    }

    renderPlanOverview();
    renderWeeks();
}
