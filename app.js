const STORAGE_KEY = 'sat-system-data';

const dailySchedule = [
    { type: 'section', title: 'ERTALAB — TETIKLIK BLOKI' },

    {
        time: '05:45',
        title: "Uyg'onish + birinchi 5 daqiqa",
        desc: "Telefon ko'rma. Yotoqda 2 daqiqa chuqur nafas: burun orqali 4 soniya nafas olish, og'iz orqali 6 soniya chiqarish. Keyin darhol yotoqdan tur va pardani och.",
        tags: ['Uyqu sifati', 'Tetiklik'],
        category: 'routine',
        color: 'purple'
    },
    {
        time: '05:50',
        title: 'Suv + quyosh nuri',
        desc: "250–300 ml iliq suv ich (limon qo'shish tavsiya). Deraza yoki balkonga chiq — 5 daqiqa tabiiy yorug'lik kortizolni faollashtiradi va uyquchanlikni yo'q qiladi.",
        tags: ['Energiya', 'Biologik soat'],
        category: 'routine',
        color: 'green'
    },
    {
        time: '05:55',
        title: 'Jismoniy harakatlanish · 20–25 daqiqa',
        desc: 'Tashqarida yurish afzal. Ichkarida bo\'lsa: 3 set — 10 squat, 10 push-up, 20 jumping jack. Bu og\'ir sport emas — qon aylanishini ishga tushirish.',
        tags: ['Jismoniy', 'Miya uchun'],
        category: 'routine',
        color: 'teal'
    },
    {
        time: '06:20',
        title: 'Nonushta · 20 daqiqa',
        desc: 'Tuxum yoki yong\'oq (protein) + meva yoki un mahsuloti (uglevod). Shirin ichimlik va shirinlik yo\'q. Nonushta — miya yoqilg\'isi, o\'tkazib yuborma.',
        tags: ['Oziqlanish', 'Konsentratsiya'],
        category: 'routine',
        color: 'orange'
    },

    { type: 'section', title: 'SAT BLOKI 1 — ENG SAMARALI VAQT' },

    {
        time: '06:40',
        title: 'Kunni rejalashtirish · 10 daqiqa',
        desc: "Daftar yoki telefonda: bugun nima qilaman (3 ta asosiy maqsad), SAT jadvalim nima. Kechagi xatolardan 1 ta sabaq yoz. Telefon notificationlarni o'chir.",
        tags: ['SAT maqsad'],
        category: 'routine',
        color: 'sat'
    },
    {
        time: '07:00',
        title: 'SAT — Reading mashq · 90 daqiqa',
        desc: "Miya eng toza va tetik. Qiyin passaglar, inference savollar shu vaqtda. Telefon boshqa xonada, faqat saat va material.",
        tags: ['SAT — Reading'],
        category: 'reading',
        hours: 1.5,
        color: 'sat'
    },
    {
        time: '08:30',
        title: 'Dam olish · 15 daqiqa',
        desc: "Ko'zingni yum, yot. Telefon yo'q. Suv ich. Balkon yoki tashqariga chiq — havo olish miyani tozalaydi. Bu 15 daqiqa keyingi 90 daqiqa uchun yoqilg'i.",
        tags: ['Miya dam olishi'],
        category: 'break',
        color: 'break'
    },
    {
        time: '08:45',
        title: 'SAT — Writing mashq · 90 daqiqa',
        desc: "Grammar qoidalari, transitions, Standard English. Vaqt o'lchab ish. Har xato daftarga yoziladi: xato turi va sababi.",
        tags: ['SAT — Writing'],
        category: 'writing',
        hours: 1.5,
        color: 'sat'
    },
    {
        time: '10:15',
        title: 'Katta tanaffus · 45 daqiqa',
        desc: "Yengil ovqat yoki meva. 15 daqiqa tashqarida yurish. Ijtimoiy tarmoq yo'q — musiqa yoki shunchaki dam olish. Miya ma'lumotni mustahkamlaydi.",
        tags: ['Qayta tiklash', 'Ovqat'],
        category: 'break',
        color: 'break'
    },

    { type: 'section', title: 'SAT BLOKI 2 — CHUQUR TAHLIL' },

    {
        time: '11:00',
        title: 'SAT — Math mashq · 90 daqiqa',
        desc: 'Algebra, funksiyalar, advanced math. Qiyin masalalarni xatosiz ishlash. Vaqt o\'lchab ish — tezlik va aniqlik.',
        tags: ['SAT — Math'],
        category: 'math',
        hours: 1.5,
        color: 'sat'
    },
    {
        time: '12:30',
        title: 'Xatolar tahlili · 60 daqiqa',
        desc: "Bugungi va kechagi xatolarni ko'rib chiq. Har birida: 'Nima uchun xato?' deb savol ber. Qayta ishla. Bu eng muhim soat — bilim shu yerda mustahkamlanadi.",
        tags: ['SAT — Tahlil'],
        category: 'review',
        hours: 1,
        color: 'sat'
    },
    {
        time: '13:30',
        title: 'Tushlik va dam · 60 daqiqa',
        desc: "To'liq dam olish. Og'ir o'yin yoki video ko'rma — miya og'irlashadi. Yurish, suhbat yoki musiqa. To'yib, yengil qaytish.",
        tags: ['Tushlik', "To'liq dam"],
        category: 'break',
        color: 'break'
    },

    { type: 'section', title: 'SAT BLOKI 3 — MUSTAHKAMLASH' },

    {
        time: '14:30',
        title: 'SAT — Vocab + Reading · 60 daqiqa',
        desc: "Anki — 15 daqiqa. NY Times yoki The Atlantic dan 1 maqola o'qi — 30 daqiqa. Qolgan 15 daqiqa: passage savollar ishlash.",
        tags: ['SAT — Vocab'],
        category: 'reading',
        hours: 2,
        color: 'sat'
    },
    {
        time: '15:30',
        title: 'Dam olish · 20 daqiqa',
        desc: "Ko'zni yuming, asting — 'power nap' emas, shunchaki yotish. Yoki ko'zlarni dam oldirish: 20-20-20 qoidasi (20 daqiqada bir marta 20 metr uzoqqa 20 soniya qara).",
        tags: ["Ko'z va miya"],
        category: 'break',
        color: 'break'
    },
    {
        time: '15:50',
        title: 'SAT — Math mashq · 90 daqiqa',
        desc: "Juma kuni — 1 ta to'liq test section. Boshqa kunlari — eng zaif mavzuni chuqur ishlash. Sekin bo'lsa ham to'g'ri.",
        tags: ['SAT — Mustahkamlash'],
        category: 'math',
        hours: 1.5,
        color: 'sat'
    },

    { type: 'section', title: 'KECHQURUN — TIKLANISH BLOKI' },

    {
        time: '17:20',
        title: 'Erkin vaqt · 90 daqiqa',
        desc: "SAT yo'q. Do'stlar, oila, hobby, yurish, musiqa — xohlagan narsa. Bu vaqt SAT dan dam olish uchun muhim — miyani majburlamang, aks holda charchash keladi.",
        tags: ['Ruhiy tiklanish'],
        category: 'routine',
        color: 'break'
    },
    {
        time: '18:50',
        title: 'Kechki taom · 30 daqiqa',
        desc: "Yengil va to'yimli. Kechqurun og'ir ovqat uyqu sifatini pasaytiradi — go'sht, sabzavot, don. Gazlangan ichimlik va shirinlik — uxlashdan kamida 3 soat oldin.",
        tags: ['Kechki ovqat', 'Uyqu uchun'],
        category: 'routine',
        color: 'orange'
    },
    {
        time: '19:20',
        title: 'Yurish yoki yengil sport · 30 daqiqa',
        desc: "Kechqurun yurish uyqu sifatini sezilarli oshiradi. Og'ir mashq emas — shunchaki 30 daqiqa tashqarida. Uyqu oldidan tana harorati pasayishi kerak.",
        tags: ['Jismoniy', 'Uyqu sifati'],
        category: 'routine',
        color: 'green'
    },
    {
        time: '19:50',
        title: 'Erkin vaqt · 2 soat 30 daqiqa',
        desc: "Oila, do'stlar, serial, hobby — to'liq erkinlik. Faqat: ijtimoiy tarmoq 30 daqiqadan oshmasin. Bu vaqt SAT ga tegmaydi — miyangiz qayta tiklansin.",
        tags: ['Erkin'],
        category: 'routine',
        color: 'break'
    },

    { type: 'section', title: 'UYQU TAYYORGARLIGI — ENG MUHIM' },

    {
        time: '20:30',
        title: 'Ekran vaqtini kamaytirish',
        desc: "Telefon va kompyuter yoritishini kamaytirib qo'ying (Night mode). Qizil/sariq yorug'lik melatoninni to'xtatmaydi. Mumkin bo'lsa kitob o'qi.",
        tags: ['Melatonin'],
        category: 'routine',
        color: 'purple'
    },
    {
        time: '21:00',
        title: 'Uxlashga tayyorlanish · 30 daqiqa',
        desc: "Iliq dush (uyqu sifatini 15% oshiradi). Xonani salqin qilib qo'ying (18–20°C eng yaxshi). Ertangi kunni daftarga qisqacha yozing — miya 'yopiladi'. Telefon boshqa xonaga.",
        tags: ['Ritual', 'Salqin xona'],
        category: 'routine',
        color: 'purple'
    },
    {
        time: '21:30',
        title: 'Uxlash',
        desc: "8.5 soat = 5:45 da sifatli uyg'onish. Uyqusiz miya 40% kam ishlaydi — SAT da 50 ball farq shundan chiqadi.",
        tags: ['8.5 soat uyqu'],
        category: 'routine',
        color: 'purple'
    }
];

let appData = loadData();
let audioCtx = null;
let activeSound = null;
let isPlaying = false;

const focusSounds = {
    brown: { label: 'Brown Noise' },
    jazz: { label: 'Jazz Piano' },
    lofi: { label: 'Lo-fi Chill' }
};

const jazzChords = [
    [261.63, 329.63, 392.0, 493.88],
    [220.0, 261.63, 329.63, 392.0],
    [174.61, 220.0, 261.63, 329.63],
    [196.0, 246.94, 293.66, 349.23]
];

function todayKey() {
    return new Date().toISOString().slice(0, 10);
}

function loadData() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const today = todayKey();

        if (saved.date !== today) {
            return {
                date: today,
                checkedTasks: {},
                errors: saved.errors || [],
                streak: calculateStreak(saved),
                fajrDone: false,
                istighfarCount: 0,
                istighfarDone: false
            };
        }

        return {
            date: today,
            checkedTasks: saved.checkedTasks || {},
            errors: saved.errors || [],
            streak: saved.streak || 1,
            lastActiveDate: saved.lastActiveDate || today,
            fajrDone: saved.fajrDone || false,
            istighfarCount: saved.istighfarCount || 0,
            istighfarDone: saved.istighfarDone || false
        };
    } catch {
        return {
            date: todayKey(),
            checkedTasks: {},
            errors: [],
            streak: 0,
            fajrDone: false,
            istighfarCount: 0,
            istighfarDone: false
        };
    }
}

function calculateStreak(saved) {
    const today = todayKey();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().slice(0, 10);

    if (saved.lastActiveDate === today) {
        return saved.streak || 1;
    }
    if (saved.lastActiveDate === yesterdayKey) {
        return (saved.streak || 0) + 1;
    }
    return 1;
}

function saveData() {
    appData.lastActiveDate = todayKey();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

const ISTIGHFAR_GOAL = 10000;

function renderSpiritual() {
    const fajrCheck = document.getElementById('fajr-done');
    const istighfarCheck = document.getElementById('istighfar-done');
    const countEl = document.getElementById('istighfar-count');
    const fillEl = document.getElementById('istighfar-fill');
    const summaryEl = document.getElementById('spiritual-summary');

    fajrCheck.checked = !!appData.fajrDone;
    istighfarCheck.checked = !!appData.istighfarDone;

    const count = appData.istighfarCount || 0;
    countEl.textContent = `${count.toLocaleString('uz-UZ')} / ${ISTIGHFAR_GOAL.toLocaleString('uz-UZ')}`;

    const pct = Math.min(100, (count / ISTIGHFAR_GOAL) * 100);
    fillEl.style.width = `${pct}%`;

    document.getElementById('fajr-item').classList.toggle('done', appData.fajrDone);
    document.getElementById('istighfar-item').classList.toggle('done', appData.istighfarDone);

    let done = 0;
    if (appData.fajrDone) done++;
    if (appData.istighfarDone) done++;
    summaryEl.textContent = `Bugun: ${done} / 2 bajarildi`;
}

function initSpiritual() {
    renderSpiritual();

    document.getElementById('fajr-done').addEventListener('change', (e) => {
        appData.fajrDone = e.target.checked;
        saveData();
        renderSpiritual();
    });

    document.getElementById('istighfar-done').addEventListener('change', (e) => {
        appData.istighfarDone = e.target.checked;
        if (e.target.checked && appData.istighfarCount < ISTIGHFAR_GOAL) {
            appData.istighfarCount = ISTIGHFAR_GOAL;
        }
        saveData();
        renderSpiritual();
    });

    document.querySelectorAll('.istighfar-buttons [data-add]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const add = parseInt(btn.dataset.add, 10);
            appData.istighfarCount = Math.min(ISTIGHFAR_GOAL, (appData.istighfarCount || 0) + add);
            if (appData.istighfarCount >= ISTIGHFAR_GOAL) {
                appData.istighfarDone = true;
            }
            saveData();
            renderSpiritual();
        });
    });

    document.getElementById('istighfar-reset').addEventListener('click', () => {
        appData.istighfarCount = 0;
        appData.istighfarDone = false;
        saveData();
        renderSpiritual();
    });
}

function renderDate() {
    const el = document.getElementById('today-date');
    const now = new Date();
    el.textContent = now.toLocaleDateString('uz-UZ', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function loadSchedule() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';

    dailySchedule.forEach((item, index) => {
        if (item.type === 'section') {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'timeline-section';
            sectionEl.textContent = item.title;
            container.appendChild(sectionEl);
            return;
        }

        const isDone = !!appData.checkedTasks[index];
        const colorClass = item.color ? ` timeline-${item.color}` : '';
        const itemEl = document.createElement('div');
        itemEl.className = `timeline-item${isDone ? ' done' : ''}${colorClass}`;

        const tagsHtml = (item.tags || [])
            .map((tag) => `<span class="task-tag">${tag}</span>`)
            .join('');

        itemEl.innerHTML = `
            <div class="item-meta">
                <span class="time-tag">${item.time}</span>
                <div class="task-title">${item.title}</div>
                <div class="task-desc">${item.desc}</div>
                ${tagsHtml ? `<div class="task-tags">${tagsHtml}</div>` : ''}
            </div>
            <input type="checkbox" class="task-check" id="task-${index}" ${isDone ? 'checked' : ''}>
        `;

        itemEl.querySelector('.task-check').addEventListener('change', (e) => {
            appData.checkedTasks[index] = e.target.checked;
            itemEl.classList.toggle('done', e.target.checked);
            saveData();
        });

        container.appendChild(itemEl);
    });
}

function renderErrors() {
    const errorList = document.getElementById('error-list');
    errorList.innerHTML = '';

    appData.errors.slice().reverse().forEach((entry) => {
        const div = document.createElement('div');
        div.className = 'error-item';
        div.innerHTML = `
            <strong>${escapeHtml(entry.task)}</strong>
            ${escapeHtml(entry.reason)}
            <div class="error-meta">${entry.date}</div>
        `;
        errorList.appendChild(div);
    });
}

function saveError() {
    const task = document.getElementById('error-task').value.trim();
    const reason = document.getElementById('error-reason').value.trim();

    if (!task || !reason) {
        alert("Iltimos, xato va uning sababini yozing!");
        return;
    }

    appData.errors.push({
        task,
        reason,
        date: new Date().toLocaleString('uz-UZ')
    });

    saveData();
    renderErrors();

    document.getElementById('error-task').value = '';
    document.getElementById('error-reason').value = '';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function getVolume() {
    return document.getElementById('volume-slider').value / 100;
}

function stopFocusSound() {
    if (activeSound) {
        if (activeSound.type === 'brown') {
            activeSound.source.stop();
            activeSound.source.disconnect();
        } else if (activeSound.type === 'jazz') {
            clearInterval(activeSound.interval);
            activeSound.nodes.forEach(({ osc, gain }) => {
                osc.stop();
                osc.disconnect();
                gain.disconnect();
            });
        } else if (activeSound.type === 'lofi') {
            clearInterval(activeSound.beatInterval);
            activeSound.source.stop();
            activeSound.source.disconnect();
            activeSound.filter.disconnect();
            activeSound.beatGain.disconnect();
        }
        activeSound.masterGain.disconnect();
        activeSound = null;
    }
}

function startBrownNoise(masterGain) {
    const ctx = getAudioContext();
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.connect(masterGain);
    source.start();

    activeSound = { type: 'brown', source, masterGain };
}

function playJazzNote(ctx, masterGain, freq, startTime, duration, volume) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
}

function startJazzPiano(masterGain) {
    const ctx = getAudioContext();
    let chordIndex = 0;

    const playChord = () => {
        const chord = jazzChords[chordIndex % jazzChords.length];
        const now = ctx.currentTime;
        chord.forEach((freq, i) => {
            playJazzNote(ctx, masterGain, freq, now + i * 0.04, 2.8, 0.07);
        });
        chordIndex++;
    };

    playChord();
    const interval = setInterval(playChord, 3200);

    activeSound = { type: 'jazz', interval, nodes: [], masterGain };
}

function startLofiChill(masterGain) {
    const ctx = getAudioContext();
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.015 * white) / 1.015;
        lastOut = data[i];
        data[i] *= 2.2;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;

    const beatGain = ctx.createGain();
    beatGain.gain.value = 0;

    source.connect(filter);
    filter.connect(masterGain);
    beatGain.connect(masterGain);

    const beatInterval = setInterval(() => {
        const now = ctx.currentTime;
        beatGain.gain.setValueAtTime(0.001, now);
        beatGain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
        beatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        const kick = ctx.createOscillator();
        const kickGain = ctx.createGain();
        kick.type = 'sine';
        kick.frequency.setValueAtTime(90, now);
        kick.frequency.exponentialRampToValueAtTime(45, now + 0.12);
        kickGain.gain.setValueAtTime(0.15, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        kick.connect(kickGain);
        kickGain.connect(masterGain);
        kick.start(now);
        kick.stop(now + 0.2);
    }, 900);

    source.start();
    activeSound = { type: 'lofi', source, filter, beatGain, beatInterval, masterGain };
}

function startFocusSound(type) {
    stopFocusSound();
    const ctx = getAudioContext();
    const masterGain = ctx.createGain();
    masterGain.gain.value = getVolume();
    masterGain.connect(ctx.destination);

    if (type === 'brown') startBrownNoise(masterGain);
    else if (type === 'jazz') startJazzPiano(masterGain);
    else if (type === 'lofi') startLofiChill(masterGain);
}

function toggleAudio() {
    const btn = document.getElementById('audio-btn');
    const type = document.getElementById('sound-select').value;

    if (!isPlaying) {
        startFocusSound(type);
        btn.textContent = "To'xtatish";
        btn.classList.add('active');
        isPlaying = true;
    } else {
        stopFocusSound();
        btn.textContent = 'Yoqish';
        btn.classList.remove('active');
        isPlaying = false;
    }
}

function updateSoundLabel() {
    const type = document.getElementById('sound-select').value;
    document.getElementById('sound-name').textContent = focusSounds[type].label;
}

function initFocusAudio() {
    document.getElementById('audio-btn').addEventListener('click', toggleAudio);
    document.getElementById('volume-slider').addEventListener('input', () => {
        if (activeSound && activeSound.masterGain) {
            activeSound.masterGain.gain.value = getVolume();
        }
    });
    document.getElementById('sound-select').addEventListener('change', () => {
        updateSoundLabel();
        if (isPlaying) {
            const type = document.getElementById('sound-select').value;
            startFocusSound(type);
        }
    });
    updateSoundLabel();
}

function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('active'));
            panels.forEach((p) => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
        });
    });
}

function init() {
    renderDate();
    loadSchedule();
    renderErrors();
    initSpiritual();
    initTabs();
    initPlan();

    initFocusAudio();

    document.getElementById('save-error-btn').addEventListener('click', saveError);

    document.getElementById('error-reason').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            saveError();
        }
    });
}

window.addEventListener('load', init);
