let saveTimeout;
let fxEnabled = true;
let appData = {};


let lastRollTimestamp = 0;

// Regelwerk S.15: kritische Treffer verdoppeln den nächsten Schadenswurf
let pendingCritDamage = false;
// Regelwerk S.4/S.5: GBP dürfen nicht nach einem kritischen Patzer für einen Reroll genutzt werden
let lastRollByCategory = { handeln: null, wissen: null, soziales: null };

// Initialization
function init() {
    // Start with a blank character by default, since we are not using localStorage anymore
    appData = JSON.parse(JSON.stringify(blankData));

    renderAll();
    setupEventListeners();
    setupMouseSpotlight();
    calculatePoints();

    setInterval(updateLiveTimers, 1000);
}

function setupMouseSpotlight() {
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.glass-panel, .tool-btn, .add-skill-btn, .add-item-row button, .points-counter').forEach(el => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

let isDirty = false;

function saveData() {
    isDirty = true;
    // Auto-save to cache is disabled per user request.
    // Data is kept in memory until the user clicks "Speichern (JSON)".
    if (typeof sendMultiplayerState === 'function') sendMultiplayerState();
}


function showSaveIndicator() {
    const ind = document.getElementById('save-indicator');
    if (!ind) return;
    ind.classList.add('show');
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        ind.classList.remove('show');
    }, 2000);
}

// Zeigt das Eldara-Piraten-Banner statt des allgemeinen EldaraHQ-Banners, sobald
// die Runde das Hausregel-Paket "eldora-arrrrr" aktiv hat (siehe hausregeln.js).
function updateHeaderBanner() {
    const img = document.getElementById('header-banner-img');
    if (!img) return;
    const eldoraAktiv = typeof hausregelnAktiv === 'function' && hausregelnAktiv()
        && appData.hausregeln && appData.hausregeln.paket === 'eldora-arrrrr';
    const ziel = eldoraAktiv ? 'assets/header-eldora.jpg' : 'assets/header-herohq.jpg';
    if (img.getAttribute('src') !== ziel) img.setAttribute('src', ziel);
}

// Rendering
function renderAll() {
    if (appData.name) {
        document.title = `${appData.name} - EldaraHQ`;
    } else {
        document.title = "EldaraHQ";
    }
    
    // Layout Mode
    const container = document.querySelector('.app-container');
    if (appData.layout3Col) {
        container.classList.add('layout-3col');
    } else {
        container.classList.remove('layout-3col');
    }

    // Basic Info fields
    document.querySelectorAll('[data-field]').forEach(el => {
        const field = el.getAttribute('data-field');
        if (appData[field] !== undefined) {
            el.value = appData[field];
        }
    });

    // Portrait
    if (appData.portrait) {
        document.getElementById('portrait-img').src = appData.portrait;
    } else {
        document.getElementById('portrait-img').src = 'assets/giphy.gif'; // default
    }

    // Max Points
    if (document.getElementById('points-max')) {
        document.getElementById('points-max').value = appData.maxPoints || 400;
    }

    // HP
    document.getElementById('hp-current').value = appData.hpCurrent;
    document.getElementById('hp-max').value = appData.hpMax;
    updateHpBarVisual();

    // Skills
    renderSkills('handeln');
    renderSkills('wissen');
    renderSkills('soziales');

    // Inventory
    renderInventory();

    renderWeapons();
    renderStatuses();
    renderActivityLog();
    // Mein Logbuch (spielerlog.js) - eigenes Tagebuch des Spielers
    if (typeof renderSpielerlog === 'function') renderSpielerlog();
    // Hausregel-Erweiterung (talentbaum.js) - zeigt sich nur mit aktivem Regelpaket
    if (typeof renderTalentbaum === 'function') renderTalentbaum();
    updateHeaderBanner();
    // Tischmitte (tischmitte.js) - nur als verbundener Spieler; Inventar-Auswahl fürs Ablegen aktuell halten
    if (typeof renderTischmitteSpieler === 'function') renderTischmitteSpieler();
    // Schiffs-Inventar (schiffsinventar.js) - nur bei aktivem Eldara-Regelpaket
    if (typeof renderSchiffSpieler === 'function') renderSchiffSpieler();
    // Seekampf-Karte (seekampf.js) - nur bei aktivem Eldara-Regelpaket
    if (typeof renderSeekampfSpieler === 'function') renderSeekampfSpieler();
    // Karte (karten.js) - nur bei aktivem Eldara-Regelpaket
    if (typeof renderKarteSpieler === 'function') renderKarteSpieler();
    // Kampf (kampf.js) - nur bei aktivem Eldara-Regelpaket
    if (typeof renderKampfSpieler === 'function') renderKampfSpieler();
    if (appData.currency) {
        const cName = document.getElementById('currency-name');
        const cVal = document.getElementById('currency-val');
        if(cName) { cName.value = appData.currency.name || 'Credits'; autoSizeCurrencyName(cName); }
        if(cVal) cVal.value = appData.currency.amount || 0;
    }

    // Theme
        // Theme and FX
    if (appData.fxEnabled !== undefined) {
        fxEnabled = appData.fxEnabled;
        const btn = document.getElementById('toggle-fx-btn');
        if (btn) btn.style.opacity = fxEnabled ? '1' : '0.5';
    }
    if (appData.soundEnabled !== undefined) {
        soundEnabled = appData.soundEnabled;
        const btn = document.getElementById('toggle-sound-btn');
        if (btn) {
            btn.style.opacity = soundEnabled ? '1' : '0.5';
            btn.innerHTML = soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
        }
    }
    if (typeof initPlayerVolumeSlider === 'function') initPlayerVolumeSlider();

    applyTheme();
}

function updateHpBarVisual() {
    let perc = (appData.hpCurrent / appData.hpMax) * 100;
    if (perc > 100) perc = 100;
    if (perc < 0) perc = 0;
    
    const bar = document.getElementById('hp-bar');
    bar.style.width = perc + '%';

    const hpContainer = document.querySelector('.hp-bar-container');
    const hpInput = document.getElementById('hp-current');

    if (appData.hpCurrent <= 10) {
        if(hpContainer) hpContainer.classList.add('low-hp-warning');
        if(hpInput) hpInput.classList.add('hp-text-danger');
    } else {
        if(hpContainer) hpContainer.classList.remove('low-hp-warning');
        if(hpInput) hpInput.classList.remove('hp-text-danger');
    }

    if (perc > 50) {
        bar.style.backgroundColor = 'var(--color-heal)';
    } else if (perc > 20) {
        bar.style.backgroundColor = '#f59e0b'; // warning orange
    } else {
        bar.style.backgroundColor = 'var(--color-dmg)'; // danger red
    }

    // Handy-Statusleiste (mobilestatus.js) synchron halten - ein einziger
    // Hook statt jeden HP-Änderungspfad (adjustHp/updateHp/updateHpMax)
    // einzeln anzufassen, da alle hier durchlaufen.
    if (typeof mobilestatusRender === 'function') mobilestatusRender(perc);
}

// Event Listeners for simple fields
function setupEventListeners() {
    document.querySelectorAll('[data-field]').forEach(el => {
        el.addEventListener('input', (e) => {
            const field = e.target.getAttribute('data-field');
            appData[field] = e.target.value;
            saveData();
            calculatePoints();
        });
    });
}

// --- HP Management ---
function adjustHp(amount, grund) {
    const oldHp = appData.hpCurrent;
    appData.hpCurrent += amount;
    if (appData.hpCurrent > appData.hpMax) appData.hpCurrent = appData.hpMax;
    const diff = appData.hpCurrent - oldHp;
    const zusatz = grund ? ` (${grund})` : '';
    if (diff > 0) addActivityLog(`Heilung um ${diff} HP${zusatz}`, 'activity-good', '<i class="fa-solid fa-heart"></i>');
    else if (diff < 0) addActivityLog(`Schaden erlitten: ${Math.abs(diff)} HP${zusatz}`, 'activity-bad', '<i class="fa-solid fa-heart-crack"></i>');
    
    document.getElementById('hp-current').value = appData.hpCurrent;
    updateHpBarVisual();
    saveData();
    
    // Quick animation on the number
    const display = document.getElementById('hp-current');
    display.classList.add('shake');
    setTimeout(() => display.classList.remove('shake'), 400);

    if (amount < 0) {
        if (typeof AudioController !== 'undefined') AudioController.play('hit');
    } else if (amount > 0) {
        if (typeof AudioController !== 'undefined') AudioController.play('hpup');
    }
}

function updateHp() {
    let val = parseInt(document.getElementById('hp-current').value) || 0;
    appData.hpCurrent = val;
    updateHpBarVisual();
    saveData();
}

function updateHpMax() {
    let val = parseInt(document.getElementById('hp-max').value) || 1;
    appData.hpMax = val;
    updateHpBarVisual();
    saveData();
}

function adjustHpMax(amount) {
    let el = document.getElementById('hp-max');
    let val = parseInt(el.value) || 1;
    val = Math.max(1, val + amount);
    el.value = val;
    updateHpMax();
}


// --- Skills Management ---
function renderSkills(attr) {
    const listEl = document.getElementById(`skills-${attr}`);
    listEl.innerHTML = '';

    const skills = appData[`skills_${attr}`];
    const attrVal = parseInt(appData[`attr_${attr}`]) || 0;
    // Hausregel-Paket mit fester Talentliste (aktuell nur Eldara, siehe
    // hausregeln.js) ersetzt die freie Texteingabe durch ein Dropdown -
    // Regelwerk pur bleibt exakt wie bisher.
    const talentliste = typeof hausregelnFesteTalentliste === 'function' ? hausregelnFesteTalentliste(attr) : null;

    skills.forEach((skill, index) => {
        const item = document.createElement('div');
        item.className = 'skill-item';

        const nameInput = document.createElement('div');
        nameInput.className = 'skill-name-input';
        nameInput.textContent = skill.name || '';
        // Talente aus einem Regelpaket (hausregeln.js) bringen eine Beschreibung mit
        if (skill.beschreibung) nameInput.title = skill.beschreibung;
        if (talentliste) {
            // Feste Talentliste aktiv: Name kommt aus dem Dropdown beim Anlegen
            // (siehe renderSkillAddControl), nicht mehr frei eintippbar.
            nameInput.classList.add('skill-name-fixed');
        } else {
            nameInput.contentEditable = true;
            nameInput.setAttribute('placeholder', 'Skill Name');
            nameInput.oninput = (e) => {
                skill.name = e.target.textContent;
                saveData();
            };
            nameInput.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    nameInput.blur();
                }
            };
        }

        const totalSpan = document.createElement('span');
        totalSpan.className = 'skill-total skill-val clickable';
        totalSpan.id = 'total-' + skill.id;
        updateSkillTotalDisplay(totalSpan, skill, attrVal);
        totalSpan.onclick = () => {
            const currentAttrVal = parseInt(appData[`attr_${attr}`]) || 0;
            const currentTotal = (skill.excludeBonus ? 0 : currentAttrVal) + (skill.invested || 0);
            rollSkillCheck(skill.name, currentTotal, false, attr);
        };

        // Regelwerk S.4: "Der Bonus wird zu jeder Fähigkeit addiert, es sei denn, ein Spieler
        // möchte dies explizit nicht." - Toggle, um den Begabungs-Bonus für diesen Skill abzuwählen.
        const bonusToggleBtn = document.createElement('button');
        bonusToggleBtn.className = 'btn-bonus-toggle' + (skill.excludeBonus ? ' bonus-excluded' : '');
        bonusToggleBtn.textContent = 'B';
        bonusToggleBtn.title = skill.excludeBonus
            ? `Begabungs-Bonus (+${attrVal}) ist für diesen Skill deaktiviert. Klicken zum Aktivieren.`
            : `Begabungs-Bonus (+${attrVal}) ist aktiv. Klicken um ihn für diesen Skill abzuwählen.`;
        bonusToggleBtn.onclick = () => {
            skill.excludeBonus = !skill.excludeBonus;
            saveData();
            const currentAttrVal = parseInt(appData[`attr_${attr}`]) || 0;
            bonusToggleBtn.classList.toggle('bonus-excluded', !!skill.excludeBonus);
            bonusToggleBtn.title = skill.excludeBonus
                ? `Begabungs-Bonus (+${currentAttrVal}) ist für diesen Skill deaktiviert. Klicken zum Aktivieren.`
                : `Begabungs-Bonus (+${currentAttrVal}) ist aktiv. Klicken um ihn für diesen Skill abzuwählen.`;
            updateSkillTotalDisplay(totalSpan, skill, currentAttrVal);
        };

        const minusBtn = document.createElement('button');
        minusBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
        minusBtn.style = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: rgba(255,255,255,0.7); width: 24px; height: 28px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; flex-shrink: 0; transition: all 0.2s;';
        minusBtn.onmouseover = () => { minusBtn.style.background = 'rgba(255,255,255,0.15)'; minusBtn.style.color = 'white'; };
        minusBtn.onmouseout = () => { minusBtn.style.background = 'rgba(255,255,255,0.05)'; minusBtn.style.color = 'rgba(255,255,255,0.7)'; };
        minusBtn.onclick = () => {
            skill.invested = Math.max(0, (parseInt(skill.invested !== undefined ? skill.invested : skill.value) || 0) - 1);
            valInput.value = skill.invested;
            valInput.dispatchEvent(new Event('input'));
        };

        const valInput = document.createElement('input');
        valInput.type = 'number';
        valInput.title = "Investierte Punkte";
        valInput.value = skill.invested !== undefined ? skill.invested : (skill.value !== undefined ? skill.value : 0);
        valInput.oninput = (e) => {
            skill.invested = parseInt(e.target.value) || 0;
            saveData();
            calculatePoints(); // This recalculates the base attribute

            // Update all spans in this category visually without re-rendering everything
            const currentAttrVal = parseInt(appData[`attr_${attr}`]) || 0;
            appData[`skills_${attr}`].forEach(s => {
                const span = document.getElementById('total-' + s.id);
                if (span) {
                    updateSkillTotalDisplay(span, s, currentAttrVal);
                }
            });
        };

        const plusBtn = document.createElement('button');
        plusBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        plusBtn.style = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: rgba(255,255,255,0.7); width: 24px; height: 28px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; flex-shrink: 0; transition: all 0.2s;';
        plusBtn.onmouseover = () => { plusBtn.style.background = 'rgba(255,255,255,0.15)'; plusBtn.style.color = 'white'; };
        plusBtn.onmouseout = () => { plusBtn.style.background = 'rgba(255,255,255,0.05)'; plusBtn.style.color = 'rgba(255,255,255,0.7)'; };
        plusBtn.onclick = () => {
            skill.invested = (parseInt(skill.invested !== undefined ? skill.invested : skill.value) || 0) + 1;
            valInput.value = skill.invested;
            valInput.dispatchEvent(new Event('input'));
        };

        const delBtn = document.createElement('button');
        delBtn.className = 'btn-delete-icon';
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.style.marginLeft = 'auto';
        delBtn.onclick = () => {
            if (confirm(`Möchtest du den Skill "${skill.name || 'Unbenannt'}" wirklich löschen?`)) {
                appData[`skills_${attr}`].splice(index, 1);
                saveData();
                renderSkills(attr);
                calculatePoints();
            }
        };

        const controlsRow = document.createElement('div');
        controlsRow.className = 'skill-item-controls';
        controlsRow.appendChild(minusBtn);
        controlsRow.appendChild(valInput);
        controlsRow.appendChild(plusBtn);
        controlsRow.appendChild(bonusToggleBtn);
        controlsRow.appendChild(totalSpan);
        // Sondertabelle des Regelpakets (z.B. Kochen, Zechen) direkt am Talent würfeln
        if (skill.tabelle && typeof hausregelnTabellen === 'function' && hausregelnTabellen()[skill.tabelle]) {
            const tabBtn = document.createElement('button');
            tabBtn.className = 'btn-skill-tabelle';
            tabBtn.innerHTML = '<i class="fa-solid fa-table-list"></i>';
            tabBtn.title = `Sondertabelle "${hausregelnTabellen()[skill.tabelle].name}" würfeln`;
            tabBtn.onclick = () => hausregelnTabelleWuerfeln(skill.tabelle);
            controlsRow.appendChild(tabBtn);
        }
        controlsRow.appendChild(delBtn);

        item.appendChild(nameInput);
        item.appendChild(controlsRow);
        listEl.appendChild(item);
    });

    renderSkillAddControl(attr, talentliste);
}

// Ersetzt bei fester Talentliste den "+ Skill"-Button durch ein Dropdown mit
// den noch nicht auf dem Bogen stehenden Paket-Talenten; ohne Talentliste
// (oder wenn schon alle drauf sind) bleibt/verschwindet einfach der Button.
function renderSkillAddControl(attr, talentliste) {
    const btn = document.getElementById(`add-skill-btn-${attr}`);
    const alteSelect = document.getElementById(`add-skill-select-${attr}`);
    if (alteSelect) alteSelect.remove();
    if (!btn) return;

    if (!talentliste) {
        btn.style.display = '';
        return;
    }

    const vorhanden = (appData[`skills_${attr}`] || []).map(s => (s.name || '').trim().toLowerCase());
    const verfuegbar = talentliste.filter(t => !vorhanden.includes(t.name.toLowerCase()));
    btn.style.display = 'none';
    if (!verfuegbar.length) return;

    const select = document.createElement('select');
    select.id = `add-skill-select-${attr}`;
    select.className = 'add-skill-select';
    select.innerHTML = '<option value="" selected disabled>+ Talent hinzufügen …</option>'
        + verfuegbar.map(t => `<option value="${escapeHtml(t.id)}">${escapeHtml(t.name)}</option>`).join('');
    select.addEventListener('change', () => {
        const t = verfuegbar.find(x => x.id === select.value);
        if (!t) return;
        if (!Array.isArray(appData[`skills_${attr}`])) appData[`skills_${attr}`] = [];
        appData[`skills_${attr}`].push({
            id: 's' + Date.now() + Math.random().toString(36).slice(2, 6),
            name: t.name,
            invested: 0,
            paketTalent: t.id,
            beschreibung: t.beschreibung || '',
            tabelle: t.tabelle || undefined
        });
        saveData();
        renderSkills(attr);
        calculatePoints();
    });
    btn.insertAdjacentElement('afterend', select);
}

// Regelwerk S.8: "keine Fähigkeiten über 100 Punkte haben kann" - markiert Werte über 100 visuell.
function updateSkillTotalDisplay(span, skill, attrVal) {
    const total = (skill.excludeBonus ? 0 : attrVal) + (skill.invested || 0);
    span.textContent = '= ' + total;
    span.classList.toggle('over-cap', total > 100);
    span.title = total > 100
        ? 'Probe würfeln! Achtung: Laut Regelwerk darf ein Fähigkeitswert nicht über 100 liegen - investiere die überzähligen Punkte anderweitig.'
        : 'Probe würfeln!';
}

function addSkill(attr) {
    appData[`skills_${attr}`].push({
        id: 's' + Date.now(),
        name: 'Neuer Skill',
        invested: 0
    });
    saveData();
    renderSkills(attr);
    calculatePoints();
}

function calculatePoints() {
    let totalInvested = 0;
    // Hausregeln (hausregeln.js): Mit Kostenstaffel zählt fürs Budget nicht der
    // Talentwert, sondern was er gekostet hat. Ohne Paket ist beides identisch.
    let totalKosten = 0;
    const kostenFn = typeof hausregelnTalentKosten === 'function' ? hausregelnTalentKosten : (n => n);
    ['handeln', 'wissen', 'soziales'].forEach(attr => {
        let catSum = 0;
        if (appData[`skills_${attr}`]) {
            appData[`skills_${attr}`].forEach(skill => {
                const pts = skill.invested !== undefined ? skill.invested : (skill.value !== undefined ? skill.value : 0);
                catSum += parseInt(pts) || 0;
                totalKosten += kostenFn(parseInt(pts) || 0);
                
                // auto-migrate legacy data
                if (skill.invested === undefined && skill.value !== undefined) {
                    skill.invested = parseInt(skill.value) || 0;
                }
            });
        }
        totalInvested += catSum;
        
        // HTBAH Core Rule: Base Attribute = sum of invested points / 10 (rounded mathematically)
        const baseAttr = Math.round(catSum / 10);
        appData[`attr_${attr}`] = baseAttr;
        
        const attrInput = document.getElementById(`attr-${attr}`);
        if (attrInput) {
            attrInput.value = baseAttr;
        }

        // --- Geistesblitzpunkte Logic ---
        // Max GBP = Base Attribute / 10 (kaufmännisch gerundet nach offiziellen Regeln)
        const maxGbp = Math.round(baseAttr / 10);
        
        appData[`gbp_${attr}`] = parseInt(appData[`gbp_${attr}`]);
        if (isNaN(appData[`gbp_${attr}`])) {
            appData[`gbp_${attr}`] = maxGbp; // default to max
        } else if (appData[`gbp_${attr}`] > maxGbp) {
            appData[`gbp_${attr}`] = maxGbp; // cap if base attribute drops
        } else if (appData[`gbp_${attr}`] < 0) {
            appData[`gbp_${attr}`] = 0;
        }
        
        const maxGbpEl = document.getElementById(`gbp-max-${attr}`);
        if (maxGbpEl) maxGbpEl.textContent = maxGbp;
        
        const currGbpInput = document.getElementById(`gbp-current-${attr}`);
        if (currGbpInput) {
            currGbpInput.value = appData[`gbp_${attr}`];
            currGbpInput.max = maxGbp;
        }
    });
    
    const hausregelBudget = typeof hausregelnBudget === 'function' ? hausregelnBudget() : undefined;
    const max = hausregelBudget || appData.maxPoints || 400;
    const verteilt = hausregelBudget ? totalKosten : totalInvested;
    
    const totalEl = document.getElementById('points-total');
    const containerEl = document.getElementById('points-counter');
    if (totalEl) {
        totalEl.textContent = verteilt;
        totalEl.title = hausregelBudget ? `Kosten nach Hausregel-Staffel (${totalInvested} Punkte verteilt)` : '';
    }
    // Das Budget kommt dann aus dem Paket - das Feld zeigt es nur noch an
    const maxInput = document.getElementById('points-max');
    if (maxInput) {
        if (hausregelBudget) maxInput.value = max;
        maxInput.readOnly = !!hausregelBudget;
        maxInput.title = hausregelBudget ? 'Budget laut Regelpaket' : '';
    }
    
    if (containerEl) {
        if (verteilt > max) {
            containerEl.classList.add('over-limit');
        } else {
            containerEl.classList.remove('over-limit');
        }
    }

    // Rang-/Skillpunkte des Talentbaums entstehen aus den Talentwerten
    if (typeof renderTalentbaum === 'function' && typeof talentbaumRegeln === 'function' && talentbaumRegeln()) renderTalentbaum();
}

function updateMaxPoints() {
    const maxInput = document.getElementById('points-max');
    if (maxInput) {
        appData.maxPoints = parseInt(maxInput.value) || 400;
        saveData();
        calculatePoints();
    }
}

// --- Inventory Management ---

// --- Drag & Drop State ---
let dragSourceIndex = null;
let dragSourceType = null;

function handleDragStart(e, index, type) {
    dragSourceIndex = index;
    dragSourceType = type;
    e.target.closest('.inv-item').classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const item = e.target.closest('.inv-item');
    if (item) item.classList.add('drag-over');
}

function handleDragLeave(e) {
    const item = e.target.closest('.inv-item');
    if (item) item.classList.remove('drag-over');
}

function handleDrop(e, targetIndex, type) {
    e.preventDefault();
    e.stopPropagation();
    const items = document.querySelectorAll('.inv-item');
    items.forEach(i => {
        i.classList.remove('dragging');
        i.classList.remove('drag-over');
    });

    if (dragSourceType !== type) return;
    if (dragSourceIndex === null || dragSourceIndex === targetIndex) return;

    const arrayName = type === 'inventory' ? 'inventory' : 'weapons';
    const itemToMove = appData[arrayName].splice(dragSourceIndex, 1)[0];
    appData[arrayName].splice(targetIndex, 0, itemToMove);
    
    saveData();
    if (type === 'inventory') renderInventory();
    else renderWeapons();
    
    dragSourceIndex = null;
    dragSourceType = null;
}

function handleDragEnd(e) {
    const elem = e.target.closest('.inv-item');
    if(elem) elem.classList.remove('dragging');
    const items = document.querySelectorAll('.inv-item');
    items.forEach(i => i.classList.remove('drag-over'));
}

function renderInventory() {
    const listEl = document.getElementById('inventory-list');
    const rasterBox = document.getElementById('inventar-raster');
    const addBox = document.getElementById('add-item-box');
    const weaponsSection = document.getElementById('weapons-section');
    // Eldara-Hausregel: Rasterinventar (inventarraster.js) statt der freien
    // Liste - das eigene Formular des Rasters ersetzt add-item-box komplett,
    // und Waffen wandern als eigener Eintrags-Typ mit ins Raster (siehe
    // irWaffenNachRasterMigrieren) statt im klassischen Waffen-Panel zu leben.
    if (typeof eldaraAktiv === 'function' && eldaraAktiv()) {
        if (typeof irWaffenNachRasterMigrieren === 'function') irWaffenNachRasterMigrieren();
        // .inventory-list ist per CSS "display: grid !important" gesetzt - eine
        // normale inline style.display würde dagegen verlieren.
        listEl.style.setProperty('display', 'none', 'important');
        listEl.innerHTML = '';
        if (addBox) addBox.style.display = 'none';
        if (weaponsSection) weaponsSection.style.display = 'none';
        if (rasterBox) { rasterBox.style.display = ''; renderInventarRaster(); }
        return;
    }
    if (typeof irWaffenAusRasterMigrieren === 'function') irWaffenAusRasterMigrieren();
    if (rasterBox) { rasterBox.style.display = 'none'; rasterBox.innerHTML = ''; }
    if (addBox) addBox.style.display = '';
    if (weaponsSection) weaponsSection.style.display = '';
    listEl.style.removeProperty('display');
    listEl.innerHTML = '';

    appData.inventory.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'inv-item card-layout';
        div.draggable = true;
        
        div.addEventListener('dragstart', (e) => handleDragStart(e, index, 'inventory'));
        div.addEventListener('dragover', handleDragOver);
        div.addEventListener('dragleave', handleDragLeave);
        div.addEventListener('drop', (e) => handleDrop(e, index, 'inventory'));
        div.addEventListener('dragend', handleDragEnd);

        // Header
        const headerDiv = document.createElement('div');
        headerDiv.className = 'inv-card-header';

        const dragHandle = document.createElement('i');
        dragHandle.className = 'fa-solid fa-bars drag-handle';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = item.name;
        input.className = 'inv-item-name';
        input.oninput = (e) => {
            item.name = e.target.value;
            saveData();
        };
        
        const delBtn = document.createElement('button');
        delBtn.className = 'btn-delete-icon';
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.style.marginLeft = '1rem';
        delBtn.onclick = () => {
            if (confirm(`Möchtest du das Item "${item.name || 'Unbenannt'}" wirklich löschen?`)) {
                    addActivityLog(`Verloren/Verbraucht: ${item.name || 'Item'}`, 'activity-bad', '<i class="fa-solid fa-trash"></i>');
                    appData.inventory.splice(index, 1);
                saveData();
                renderInventory();
            }
        };

        headerDiv.appendChild(dragHandle);
        headerDiv.appendChild(input);
        headerDiv.appendChild(delBtn);

        // Controls
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'inv-card-controls';
        
        const amountDiv = document.createElement('div');
        amountDiv.className = 'item-amount-wrapper';

        const minusBtn = document.createElement('button');
        minusBtn.className = 'btn-icon-small';
        minusBtn.innerHTML = '-';
        minusBtn.onclick = () => {
            if (item.amount > 1) {
                item.amount--;
                addActivityLog(`Verbraucht: 1x ${item.name || 'Item'}`, 'activity-bad', '<i class="fa-solid fa-minus"></i>');
                saveData();
                renderInventory();
            } else {
                if(confirm("Item löschen?")) {
                    addActivityLog(`Verloren/Verbraucht: ${item.name || 'Item'}`, 'activity-bad', '<i class="fa-solid fa-trash"></i>');
                    appData.inventory.splice(index, 1);
                    saveData();
                    renderInventory();
                }
            }
        };

        const amountSpan = document.createElement('span');
        amountSpan.className = 'item-amount';
        amountSpan.innerText = item.amount || 1;

        const plusBtn = document.createElement('button');
        plusBtn.className = 'btn-icon-small';
        plusBtn.innerHTML = '+';
        plusBtn.onclick = () => {
            item.amount = (item.amount || 1) + 1;
            addActivityLog(`Gefunden: 1x ${item.name || 'Item'}`, 'activity-good', '<i class="fa-solid fa-plus"></i>');
            saveData();
            renderInventory();
        };

        amountDiv.appendChild(minusBtn);
        amountDiv.appendChild(amountSpan);
        amountDiv.appendChild(plusBtn);

        const toggleDescBtn = document.createElement('button');
        toggleDescBtn.className = 'item-desc-toggle';
        toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Details';
        
        controlsDiv.appendChild(amountDiv);
        controlsDiv.appendChild(toggleDescBtn);
        
        // Description
        const descArea = document.createElement('textarea');
        descArea.className = 'item-description';
        descArea.placeholder = 'Beschreibung / Effekte...';
        descArea.value = item.description || '';
        if (item.showDesc) descArea.classList.add('show');
        
        descArea.oninput = (e) => {
            item.description = e.target.value;
            saveData();
        };
        
        toggleDescBtn.onclick = () => {
            item.showDesc = !item.showDesc;
            if (item.showDesc) {
                descArea.classList.add('show');
                toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Details';
            } else {
                descArea.classList.remove('show');
                toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Details';
            }
            saveData();
        };
        if (item.showDesc) toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Details';

        div.appendChild(headerDiv);
        div.appendChild(controlsDiv);
        div.appendChild(descArea);
        
        listEl.appendChild(div);
    });
}

function addInventoryItem() {
    const nameInput = document.getElementById('new-item-input');
    const amountInput = document.getElementById('new-item-amount');
    const descInput = document.getElementById('new-item-desc');
    
    if(!nameInput) return;
    
    const name = nameInput.value.trim();
    if (name) {
        if (!appData.inventory) appData.inventory = [];
        
        let amount = 1;
        let desc = '';
        if(amountInput) amount = parseInt(amountInput.value) || 1;
        if(descInput) desc = descInput.value.trim();
        
        appData.inventory.push({ 
            id: 'inv_' + Date.now(), 
            name: name,
            amount: amount,
            description: desc,
            showDesc: !!desc // auto-expand if description was added
        });
        addActivityLog(`Erhalten: ${amount}x ${name}`, 'activity-good', '<i class="fa-solid fa-box"></i>');
        
        nameInput.value = '';
        if(amountInput) amountInput.value = '1';
        if(descInput) descInput.value = '';
        
        saveData();
        renderInventory();
    }
}

function handleNewItemKey(e) {
    if (e.key === 'Enter') {
        addInventoryItem();
    }
}

// --- Dice Roller ---
function consumeModifier() {
    const modInput = document.getElementById('roll-modifier');
    let mod = 0;
    let str = '';
    if (modInput && modInput.value !== '' && modInput.value !== '0') {
        mod = parseInt(modInput.value);
        if (!isNaN(mod)) {
            str = mod > 0 ? ` (+${mod})` : ` (${mod})`;
            if (mod > 0) {
                addActivityLog(`SL-Bonus: +${mod} auf Probe`, 'activity-good', '<i class="fa-solid fa-wand-magic-sparkles"></i>');
            } else if (mod < 0) {
                addActivityLog(`SL-Malus: ${mod} auf Probe`, 'activity-bad', '<i class="fa-solid fa-wand-magic-sparkles"></i>');
            }
        } else {
            mod = 0;
        }
        modInput.value = '';
    }
    return { mod, str };
}

function rollDice(sides) {
    // Add shake animation to the button
    const btn = document.querySelector(`.dice-btn.w${sides}`);
    btn.classList.add('shake');
    setTimeout(() => btn.classList.remove('shake'), 400);

    // Generate random number
    const result = Math.floor(Math.random() * sides) + 1;
    const modifier = consumeModifier();
    const finalResult = result + modifier.mod;
    
    // Update display
    const displayNum = document.querySelector('.result-number');
    const displayLabel = document.querySelector('.result-label');
    
    displayNum.textContent = finalResult;
    displayLabel.textContent = `Gewürfelt: 1W${sides}`;
    
    // Animate display text
    displayNum.classList.add('shake');
    setTimeout(() => displayNum.classList.remove('shake'), 400);

    lastRollTimestamp = Date.now();
    updateLiveTimers();

    // Add to log
    addToLog(`1W${sides}`, modifier.mod === 0 ? finalResult : `${result}${modifier.str} = <b>${finalResult}</b>`, lastRollTimestamp);

    // Krit und Patzer gibt es nur auf dem W100. Auf dem W6 ist die 1 der
    // schlechteste Schadenswurf, nicht der beste - vorher gab es dafür Konfetti.
    if (sides === 100) {
        if (result === 1) {
            fireConfetti();
        } else if (result === 100) {
            fireFumble();
        }
    }
}

function rollCustomDice() {
    const input = document.getElementById('custom-dice-input').value.trim().toLowerCase();
    const match = input.match(/^(\d*)[wd](\d+)$/);
    if (!match) {
        alert("Bitte Format wie '2w10', '1w20' oder 'd6' verwenden.");
        return;
    }
    
    const count = parseInt(match[1]) || 1;
    const sides = parseInt(match[2]);
    
    if (count > 50 || sides > 1000 || sides < 2) {
        alert("Bitte realistische Zahlen verwenden.");
        return;
    }

    const btn = document.querySelector('.dice-btn.w-custom');
    if (btn) {
        btn.classList.add('shake');
        setTimeout(() => btn.classList.remove('shake'), 400);
    }
    
    let sum = 0;
    let results = [];
    for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * sides) + 1;
        results.push(r);
        sum += r;
    }
    const modifier = consumeModifier();
    const finalResult = sum + modifier.mod;
    
    const displayNum = document.querySelector('.result-number');
    const displayLabel = document.querySelector('.result-label');
    
    displayNum.textContent = finalResult;
    displayLabel.textContent = `Gewürfelt: ${count}W${sides} ${count > 1 ? '(' + results.join(', ') + ')' : ''}`;
    
    displayNum.classList.add('shake');
    setTimeout(() => displayNum.classList.remove('shake'), 400);

    lastRollTimestamp = Date.now();
    updateLiveTimers();

    let logDetail = results.length > 1 ? `[${results.join(', ')}] = ${sum}` : `${sum}`;
    if (modifier.mod !== 0) {
        logDetail += `${modifier.str} = <b>${finalResult}</b>`;
    }
    addToLog(`${count}W${sides}`, logDetail, lastRollTimestamp);

    // Gleiche Logik wie beim Waffenschaden: alles Maximum ist ein Grund zu feiern,
    // alles Einsen ist das Gegenteil. Vorher gab es für den Minimalwurf Konfetti.
    if (sum === count * sides) {
        fireConfetti();
    } else if (sum === count) {
        fireFumble();
    }
}

function updateLiveTimers() {
    if (!lastRollTimestamp) return;
    const now = Date.now();
    const diffSec = Math.floor((now - lastRollTimestamp) / 1000);
    
    let timeStr = 'Gerade eben';
    if (diffSec > 0 && diffSec < 60) {
        timeStr = `vor ${diffSec} Sekunden`;
    } else if (diffSec >= 60) {
        const min = Math.floor(diffSec / 60);
        timeStr = `vor ${min} Minute${min > 1 ? 'n' : ''}`;
    }
    
    const timeEl = document.getElementById('main-dice-time');
    if (timeEl) {
        timeEl.textContent = timeStr;
    }

    // Also update log entries
    document.querySelectorAll('.log-entry').forEach(li => {
        const ts = parseInt(li.getAttribute('data-ts'));
        if (ts) {
            const lDiff = Math.floor((now - ts) / 1000);
            let lStr = 'Gerade eben';
            if (lDiff > 0 && lDiff < 60) {
                lStr = `vor ${lDiff} Sek`;
            } else if (lDiff >= 60) {
                const lMin = Math.floor(lDiff / 60);
                lStr = `vor ${lMin} Min`;
            }
            const timeSpan = li.querySelector('.log-time');
            if (timeSpan) {
                timeSpan.textContent = lStr;
            }
        }
    });
}

function addToLog(dice, result, timestamp) {
    const logList = document.getElementById('dice-log');
    const li = document.createElement('li');
    li.className = 'log-entry';
    li.setAttribute('data-ts', timestamp);
    
    li.innerHTML = `
        <div>
            <span class="log-time">Gerade eben</span>
            <span class="log-type">${dice}</span>
        </div>
        <span class="log-val">${result}</span>
    `;

    li.setAttribute('draggable', 'true');
    li.style.cursor = 'grab';
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = `${dice}: ${result}`;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";
    const dragText = `[Wurf] ${plainText.trim().replace(/\s+/g, ' ')}`;
    
    li.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', dragText);
    });

    logList.prepend(li);
    
    // Keep log max 10 entries
    if (logList.children.length > 10) {
        logList.removeChild(logList.lastChild);
    }
    
    sendToDiscord(dice + ": " + result);
    if (typeof sendMultiplayerLog === 'function') {
        // Über die Leitung geht nur Klartext. Das Dashboard des Spielleiters escapt
        // alles, was von außen kommt - würde hier Markup mitfahren (der Wurf-Titel
        // enthält z.B. ein <i>-Icon), stünde es dort als sichtbarer Text.
        const temp = document.createElement('div');
        temp.innerHTML = result;
        const cleanResult = temp.textContent || temp.innerText || "";
        temp.innerHTML = dice;
        const cleanDice = (temp.textContent || temp.innerText || "").trim();
        let bigNum = cleanResult.match(/\d+/);
        bigNum = bigNum ? bigNum[0] : "--";
        sendMultiplayerLog(cleanDice + ": " + cleanResult, "🎲", bigNum, cleanDice);
    }
}

function addActivityLog(message, cssClass, iconHtml) {
    if (!appData.activityLog) appData.activityLog = [];
    const timeStr = new Date().toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'});
    
    appData.activityLog.unshift({
        time: timeStr,
        cssClass: cssClass,
        iconHtml: iconHtml,
        message: message
    });
    
    if (appData.activityLog.length > 30) {
        appData.activityLog.pop();
    }
    
    saveData();
    renderActivityLog();
    let emoji = "🎲";
    if (iconHtml) {
        if (iconHtml.includes('fa-heart-crack')) emoji = "💔";
        else if (iconHtml.includes('fa-heart')) emoji = "💚";
        else if (iconHtml.includes('fa-trash')) emoji = "🗑️";
        else if (iconHtml.includes('fa-minus')) emoji = "➖";
        else if (iconHtml.includes('fa-plus')) emoji = "➕";
        else if (iconHtml.includes('fa-box')) emoji = "📦";
        else if (iconHtml.includes('fa-wand-magic')) emoji = "🪄";
        else if (iconHtml.includes('fa-masks')) emoji = "🎭";
        else if (iconHtml.includes('fa-coins')) emoji = "🪙";
        else if (iconHtml.includes('fa-table')) emoji = "📐";
        else if (iconHtml.includes('fa-khanda')) emoji = "⚔️";
        else if (iconHtml.includes('fa-lightbulb')) emoji = "💡";
        else if (iconHtml.includes('fa-discord')) emoji = "🔗";
    }
    
    sendToDiscord(message, emoji);
    if (typeof sendMultiplayerLog === 'function') sendMultiplayerLog(message, emoji);
}

// --- Discord Sync ---
function openDiscordModal() {
    const modal = document.getElementById('discord-modal-overlay');
    document.getElementById('discord-webhook-input').value = appData.discordWebhookUrl || '';
    document.getElementById('discord-sync-toggle').checked = !!appData.discordSyncEnabled;
    modal.style.display = 'flex';
    setTimeout(() => { modal.classList.add('active'); }, 10);
}

function closeDiscordModal() {
    const modal = document.getElementById('discord-modal-overlay');
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

function saveDiscordSettings() {
    appData.discordWebhookUrl = document.getElementById('discord-webhook-input').value.trim();
    appData.discordSyncEnabled = document.getElementById('discord-sync-toggle').checked;
    saveData();
    closeDiscordModal();
    
    if (appData.discordSyncEnabled && appData.discordWebhookUrl) {
        sendToDiscord("Discord Sync erfolgreich aktiviert!", "🔗");
        if (!appData.activityLog) appData.activityLog = [];
        appData.activityLog.unshift({
            time: new Date().toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'}),
            cssClass: 'activity-good',
            iconHtml: '<i class="fa-brands fa-discord"></i>',
            message: 'Discord Sync aktiviert'
        });
        saveData();
        renderActivityLog();
    }
}

// Discords harte Grenzen. Wird eine überschritten, lehnt der Webhook die
// gesamte Nachricht mit HTTP 400 ab — also lieber vorher kürzen.
const DISCORD_MAX_CONTENT = 2000;
const DISCORD_MAX_USERNAME = 80;
let discordFehlerGemeldet = false;

// allowed_mentions verhindert nur den Ping — Discord malt "@everyone" trotzdem
// blau hervorgehoben in den Chat. Auf einem grossen Server sieht es dann so aus,
// als haette die Spielrunde gerade alle angeschrien. Ein unsichtbares Zeichen
// hinter dem @ macht daraus wieder ganz normalen Text: gleiche Optik wie im
// Logbuch, aber keine Erwaehnung mehr.
const UNSICHTBAR = '\u200b';

function entschaerfeErwaehnungen(text) {
    return text
        // @everyone und @here pingen den ganzen Server.
        .replace(/@(everyone|here)/gi, '@' + UNSICHTBAR + '$1')
        // <@123>, <@!123> und <@&123> sind einzelne Leute bzw. ganze Rollen.
        .replace(/<@([!&]?\d+)>/g, '<@' + UNSICHTBAR + '$1>');
}

function sendToDiscord(message, emoji = "🎲") {
    if (!appData.discordSyncEnabled || !appData.discordWebhookUrl) return;

    const charName = appData.name || "Unbekannter Charakter";

    // Strip HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = message;
    const cleanMessage = tempDiv.textContent || tempDiv.innerText || "";

    // Discord weist Absendernamen ab, die "discord" oder "clyde" enthalten,
    // und erkennt auch Umschreibungen wie "Disc0rd". Solche Namen wandern in
    // den Nachrichtentext, damit der Wurf trotzdem ankommt und man sieht,
    // von wem er stammt.
    const nameGesperrt = /discord|clyde/i.test(charName);
    const text = nameGesperrt
        ? `**${charName}:** ${emoji} ${cleanMessage}`
        : `${emoji} ${cleanMessage}`;

    const payload = {
        content: entschaerfeErwaehnungen(text).slice(0, DISCORD_MAX_CONTENT),
        // Zweite Sicherung: Sollte die Entschaerfung oben je eine neue
        // Discord-Syntax verpassen, faellt der Ping hier trotzdem weg.
        allowed_mentions: { parse: [] }
    };
    if (!nameGesperrt) payload.username = charName.slice(0, DISCORD_MAX_USERNAME);

    fetch(appData.discordWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(res => {
        if (res.ok) discordFehlerGemeldet = false;
        else meldeDiscordFehler(res.status);
    }).catch(err => {
        console.error("Discord Sync Error:", err);
        meldeDiscordFehler(0);
    });
}

// Ein stiller Sync-Ausfall ist schlimmer als gar keiner: ohne Hinweis würfelt
// die Gruppe weiter, während im Kanal seit einer Stunde nichts mehr ankommt.
// Die Meldung erscheint nur einmal und erst wieder nach einem geglückten Wurf.
function meldeDiscordFehler(status) {
    if (discordFehlerGemeldet) return;
    discordFehlerGemeldet = true;

    let grund;
    if (status === 401 || status === 404) grund = "Webhook ungültig oder gelöscht";
    else if (status === 400) grund = "Nachricht von Discord abgelehnt";
    else if (status === 429) grund = "zu viele Würfe in kurzer Zeit";
    else grund = "Discord nicht erreichbar";

    // Direkt in den Log schreiben — addActivityLog würde erneut senden wollen.
    if (!appData.activityLog) appData.activityLog = [];
    appData.activityLog.unshift({
        time: new Date().toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'}),
        cssClass: 'activity-bad',
        iconHtml: '<i class="fa-brands fa-discord"></i>',
        message: `Discord Sync gestört: ${grund}`
    });
    saveData();
    renderActivityLog();
}

function renderActivityLog() {
    const logList = document.getElementById('activity-log');
    if (!logList) return;
    logList.innerHTML = '';
    
    if (!appData.activityLog) appData.activityLog = [];
    
    appData.activityLog.forEach(entry => {
        const li = document.createElement('li');
        li.className = 'activity-entry';
        li.innerHTML = `
            <div class="activity-time">${entry.time}</div>
            <div class="activity-icon ${entry.cssClass}">${entry.iconHtml}</div>
            <div class="activity-content">${entry.message}</div>
        `;
        
        li.setAttribute('draggable', 'true');
        li.style.cursor = 'grab';
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = entry.message;
        const plainMsg = tempDiv.textContent || tempDiv.innerText || "";
        const dragText = `[Log] ${entry.time} - ${plainMsg.trim().replace(/\s+/g, ' ')}`;
        
        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', dragText);
        });

        logList.appendChild(li);
    });
}


function fireFumble() {
    if (typeof AudioController !== 'undefined') AudioController.play('fail');
    // Flash overlay
    const overlay = document.getElementById('crit-fail-overlay');
    if(overlay) {
        overlay.classList.add('show');
        setTimeout(() => overlay.classList.remove('show'), 500);
    }
    // Shake body
    document.body.classList.add('shake-hard-active');
    setTimeout(() => document.body.classList.remove('shake-hard-active'), 500);
    
    // Fall down skulls
    if (window.confetti) {
        const scalar = 2;
        const skull = window.confetti.shapeFromText({ text: '☠️', scalar });
        window.confetti({
            particleCount: 50,
            spread: 100,
            origin: { y: 0.1 },
            shapes: [skull],
            scalar,
            colors: ['#ff0000', '#000000']
        });
    }
}

function fireConfetti() {
    if (typeof AudioController !== 'undefined') AudioController.play('crit');
    if (window.confetti) {
        window.confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#38bdf8', '#8b5cf6', '#fbbf24', '#f43f5e']
        });
    }
}

// --- Image Upload ---
function handlePortraitUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        appData.portrait = e.target.result;
        document.getElementById('portrait-img').src = appData.portrait;
        saveData();
        if (typeof syncWizardMediaPreviews === 'function') syncWizardMediaPreviews();
    };
    reader.readAsDataURL(file);
}

// --- Import / Export ---

// Die Webhook-URL ist praktisch das Passwort zum Discord-Kanal: Wer sie hat,
// kann dort posten. Sie gehört deshalb weder in die Charakter-Datei, die man
// in der Gruppe herumreicht, noch in den Multiplayer-Stream zum Spielleiter.
// Sie bleibt nur im Browser desjenigen, der sie eingetragen hat.
function charakterZumTeilen() {
    const kopie = Object.assign({}, appData);
    delete kopie.discordWebhookUrl;
    return kopie;
}

function exportData() {
    isDirty = false;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(charakterZumTeilen(), null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    
    let fileName = "htbah_character";
    if (appData.vorname || appData.name) {
        fileName = `${appData.vorname}_${appData.name}`.trim().replace(/^_+|_+$/g, '');
    }
    
    downloadAnchorNode.setAttribute("download", fileName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
    showSaveIndicator();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            appData = Object.assign(appData, imported);
            saveData();
            isDirty = false;
            // Muss vor dem ersten renderAll() laufen: renderTalentbaum() markiert
            // appData.hausregeln.paket schon beim bloßen Rendern (sobald das Paket
            // geladen ist) - liefe renderAll() zuerst, hielte hausregelnSicherstellen()
            // den Charakter fälschlich für bereits aktiviert und würde ihn nie für
            // Eldara aktivieren. hausregelnSicherstellen() rendert selbst mit (beide Zweige).
            if (typeof hausregelnSicherstellen === 'function') {
                hausregelnSicherstellen();
            } else {
                renderAll();
                calculatePoints();
            }

            // Clear the file input so the same file can be loaded again if needed
            document.getElementById('import-upload').value = '';
        } catch (err) {
            alert("Fehler beim Importieren der Datei!");
        }
    };
    reader.readAsText(file);
}

window.addEventListener('beforeunload', function (e) {
    if (isDirty) {
        e.preventDefault();
        e.returnValue = ''; // Standard behavior to show prompt in modern browsers
    }
});

function resetData() {
    if (confirm("Möchtest du wirklich einen komplett neuen Charakter erstellen? Alle aktuellen Daten werden gelöscht!")) {
        appData = {
            vorname: '', name: '', geschlecht: '', beruf: '', alter: '', statur: '',
            hpCurrent: 100, hpMax: 100,
            attr_handeln: 0, gbp_handeln: 0, skills_handeln: [],
            attr_wissen: 0, gbp_wissen: 0, skills_wissen: [],
            attr_soziales: 0, gbp_soziales: 0, skills_soziales: [],
            inventory: [], weapons: [], statuses: [],
            currency: { name: 'Credits', amount: 0 },
            layout3Col: false,
            notes: '', maxPoints: 400,
            fxEnabled: true, soundEnabled: true,
            discordWebhookUrl: '', discordSyncEnabled: false
        };
        document.getElementById('portrait-img').src = 'assets/giphy.gif'; // default placeholder
        saveData();
        // Muss vor dem ersten renderAll() laufen - siehe Kommentar in importData().
        // Aktiviert Eldara sofort (Budget, Währung, Talent-Dropdown), statt bis
        // zum nächsten Reload in der freien Regelwerk-pur-Eingabe steckenzubleiben -
        // die Talentliste selbst bleibt aber leer, bis der Spieler sie sich über
        // das Dropdown zusammenstellt.
        if (typeof hausregelnSicherstellen === 'function') {
            hausregelnSicherstellen();
        } else {
            renderAll();
            calculatePoints();
        }
    }
}

// Boot up
document.addEventListener('DOMContentLoaded', init);

// --- Notes Management ---
function toggleNotes() {
    const content = document.getElementById('notes-content');
    const chevron = document.getElementById('notes-chevron');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        chevron.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
    }
}

// --- Theme (Piraten) ---------------------------------------------------
// Eldara ist eine reine Piratengeschichte - es gibt nur noch dieses eine
// Vibe-Theme, fest verdrahtet. Keine Auswahl, kein Umschalten, kein Sync
// über Multiplayer.

let fxInterval = null;

function clearFx() {
    const layer = document.getElementById('fx-layer');
    if (layer) layer.innerHTML = '';
    if (fxInterval) clearInterval(fxInterval);
}

function startPiratesFx() {
    clearFx();
    const layer = document.getElementById('fx-layer');
    if(!layer) return;
    
    // Create multiple waves for depth
    for(let i=0; i<3; i++) {
        const wave = document.createElement('div');
        wave.style.position = 'absolute';
        wave.style.bottom = '0';
        wave.style.left = '0';
        wave.style.width = '100vw'; 
        wave.style.height = (80 + i*30) + 'px'; // staggered heights
        
        // A nice curve for the wave using SVG
        const opacity = 0.2 + (i*0.1);
        const svg = `<svg viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,50 C250,100 250,0 500,50 C750,100 750,0 1000,50 L1000,100 L0,100 Z" fill="rgba(10, 60, 80, ${opacity})"/></svg>`;
        
        // Encode the SVG properly
        const encodedSvg = svg.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/#/g, '%23').replace(/"/g, "'");
        
        wave.style.background = `url("data:image/svg+xml;utf8,${encodedSvg}") repeat-x`;
        wave.style.backgroundSize = '1000px 100%';
        wave.style.backgroundPosition = 'bottom';
        wave.style.animation = `waveRoll ${8 + i*4}s linear infinite`;
        wave.style.pointerEvents = 'none';
        
        // Reverse direction for middle wave to make it look turbulent
        if (i === 1) {
            wave.style.animationDirection = 'reverse';
        }
        
        layer.appendChild(wave);
    }
    
    // Kraken tentacles!
    const spawnTentacle = () => {
        const tentacle = document.createElement('div');
        tentacle.style.position = 'absolute';
        tentacle.style.bottom = '-300px'; // Start below the screen
        tentacle.style.left = (Math.random() * 80 + 10) + 'vw'; // Random horizontal position
        tentacle.style.width = '150px';
        tentacle.style.height = '300px';
        
        // Detailed SVG Kraken tentacle (no newlines)
        const tentacleSvg = `<svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg"><g fill="#e25d6b" stroke="#2d132c" stroke-width="2"><circle cx="27" cy="120" r="8"/><circle cx="21" cy="95" r="7"/><circle cx="21" cy="70" r="6"/><circle cx="26" cy="45" r="5"/><circle cx="34" cy="25" r="4"/><circle cx="44" cy="10" r="3"/></g><g fill="#801336"><circle cx="26" cy="120" r="3"/><circle cx="20" cy="95" r="3"/><circle cx="20" cy="70" r="2"/><circle cx="25" cy="45" r="2"/><circle cx="33" cy="25" r="1.5"/><circle cx="43" cy="10" r="1"/></g><path d="M35,200 Q10,120 20,70 Q25,40 45,10 Q50,0 55,5 Q60,10 40,40 Q30,70 45,120 Q55,160 65,200 Z" fill="#2d132c"/><path d="M40,200 Q15,120 25,70 Q30,40 48,10" fill="none" stroke="#801336" stroke-width="4" stroke-linecap="round"/></svg>`;
        const encodedTentacle = tentacleSvg.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/#/g, '%23').replace(/"/g, "'");
        
        tentacle.style.background = `url("data:image/svg+xml;utf8,${encodedTentacle}") no-repeat bottom center`;
        tentacle.style.backgroundSize = 'contain';
        tentacle.style.animation = 'tentacleRise 4s ease-in-out forwards';
        tentacle.style.transformOrigin = 'bottom center';
        
        layer.appendChild(tentacle);
        
        setTimeout(() => {
            if (tentacle.parentNode) tentacle.parentNode.removeChild(tentacle);
        }, 4000);
    };

    // Spawn one immediately for the wow factor, then every 20 seconds
    spawnTentacle();
    fxInterval = setInterval(spawnTentacle, 20000);
}

function toggleFx() {
    fxEnabled = !fxEnabled;
    appData.fxEnabled = fxEnabled;
    saveData();
    const btn = document.getElementById('toggle-fx-btn');
    if (btn) btn.style.opacity = fxEnabled ? '1' : '0.5';
    if (fxEnabled) startPiratesFx();
    else clearFx();
}

function applyTheme() {
    clearFx();
    if (fxEnabled) startPiratesFx();

    const mainLogoWrapper = document.getElementById('main-logo-wrapper');
    const mainLogoImg = document.getElementById('main-theme-logo');
    const removeBtn = document.getElementById('btn-remove-custom-logo');

    if (mainLogoImg) {
        mainLogoImg.onerror = function () {
            this.onerror = null;
            this.src = 'assets/logo_default.jpg';
        };
        mainLogoImg.src = appData.customThemeLogo || 'assets/logo_pirates.jpg';
    }
    if (mainLogoWrapper) mainLogoWrapper.style.display = 'flex';
    if (removeBtn) removeBtn.style.display = appData.customThemeLogo ? 'flex' : 'none';
}







// ==================== UTILITY PACK FUNCTIONS ====================
function renderStatuses() {
    const container = document.getElementById('status-container');
    if (!container) return;
    container.innerHTML = '';
    
    if (!appData.statuses) appData.statuses = [];
    
    if (appData.statuses.length > 0 && typeof appData.statuses[0] === 'string') {
        appData.statuses = appData.statuses.map(s => ({ id: 'st_' + Math.random().toString(36).substr(2, 9), name: s, value: '' }));
        saveData();
    }

    appData.statuses.forEach(statusObj => {
        const badge = document.createElement('span');
        badge.className = `status-badge ${statusObj.type || 'malus'}`;
        badge.style.display = 'inline-flex';
        badge.style.alignItems = 'center';
        badge.style.cursor = 'default';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = statusObj.name;
        badge.appendChild(nameSpan);

        if (statusObj.value !== undefined && statusObj.value !== '') {
            badge.appendChild(document.createTextNode(': '));
            const valInput = document.createElement('input');
            valInput.type = 'text';
            valInput.value = statusObj.value;
            valInput.style = 'background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; color: inherit; width: 45px; font-family: inherit; font-size: inherit; outline: none; text-align: center; margin-left: 4px; padding: 0 2px;';
            valInput.onchange = (e) => {
                statusObj.value = e.target.value;
                saveData();
            };
            badge.appendChild(valInput);
        }

        const delIcon = document.createElement('i');
        delIcon.className = 'fa-solid fa-times';
        delIcon.style = 'margin-left: 0.5rem; opacity: 0.7; cursor: pointer; padding: 0.2rem;';
        delIcon.onclick = (e) => {
            e.stopPropagation();
            if (confirm(`Möchtest du den Status "${statusObj.name}" wirklich löschen?`)) {
                removeStatus(statusObj.id);
            }
        };
        badge.appendChild(delIcon);
        
        container.appendChild(badge);
    });
}

function removeStatus(id) {
    if (!appData.statuses) return;
    const st = appData.statuses.find(s => s.id === id);
    if(st) {
        let logClass = 'activity-neutral';
        if (st.type === 'malus') logClass = 'activity-good';
        else if (st.type === 'bonus') logClass = 'activity-bad';
        addActivityLog(`Status entfernt: ${st.name}`, logClass, '<i class="fa-solid fa-heart-circle-check"></i>');
    }
    appData.statuses = appData.statuses.filter(s => s.id !== id);
    saveData();
    renderStatuses();
}

function addCustomStatus() {
    const nameInput = document.getElementById('new-status-name');
    const valInput = document.getElementById('new-status-val');
    if (!nameInput) return;
    const name = nameInput.value.trim();
    const val = valInput ? valInput.value.trim() : '';
    if (name) {
        if (!appData.statuses) appData.statuses = [];
        const typeInput = document.getElementById('new-status-type');
        const statusType = typeInput ? typeInput.value : 'malus';
        appData.statuses.push({ id: 'st_' + Date.now(), name: name, value: val, type: statusType });
        const cssMap = { 'bonus': 'activity-good', 'malus': 'activity-bad', 'neutral': 'activity-neutral' };
        addActivityLog(`Neuer Status: ${name}`, cssMap[statusType] || 'activity-neutral', '<i class="fa-solid fa-masks-theater"></i>');
        nameInput.value = '';
        if (valInput) valInput.value = '';
        saveData();
        renderStatuses();
    }
}

function autoSizeCurrencyName(el) {
    if (!el) return;
    // ch-Einheiten orientieren sich an der Breite der Ziffer "0" - bei fetter Proportionalschrift
    // reicht das nicht, echte Buchstaben sind breiter. Deshalb wird die Textbreite exakt per
    // Canvas gemessen (im aktuell auf dem Feld angewendeten Font) und als px-Breite gesetzt.
    if (!autoSizeCurrencyName._ctx) {
        autoSizeCurrencyName._ctx = document.createElement('canvas').getContext('2d');
    }
    const ctx = autoSizeCurrencyName._ctx;
    const cs = getComputedStyle(el);
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const textWidth = ctx.measureText(el.value || ' ').width;
    // +28px deckt das Eingabefeld-Padding (0.75rem links/rechts) plus etwas Cursor-Puffer ab
    el.style.width = Math.max(40, Math.ceil(textWidth) + 28) + 'px';
}

function updateCurrency() {
    const oldAmt = appData.currency ? appData.currency.amount : 0;
    const newAmt = parseInt(document.getElementById('currency-val').value) || 0;
    const name = document.getElementById('currency-name').value;
    appData.currency = {
        name: name,
        amount: newAmt
    };
    const diff = newAmt - oldAmt;
    if(diff > 0) addActivityLog(`+${diff} ${name}`, 'activity-good', '<i class="fa-solid fa-coins"></i>');
    else if(diff < 0) addActivityLog(`${diff} ${name}`, 'activity-bad', '<i class="fa-solid fa-coins"></i>');
    saveData();
}

function toggleLayout() {
    appData.layout3Col = !appData.layout3Col;
    renderAll();
    saveData();
    const statusText = appData.layout3Col ? 'Notizen links angeheftet' : 'Notizen unten platziert';
    addActivityLog(`Layout geändert: ${statusText}`, 'activity-good', '<i class="fa-solid fa-table-columns"></i>');
    
    if (appData.layout3Col) {
        document.getElementById('notes-content').style.display = 'block';
        document.getElementById('notes-chevron').style.transform = 'rotate(180deg)';
    }
}

// --- Help System ---
function showHelp(key) {
    if (!helpData || !helpData[key]) return;
    const modal = document.getElementById('help-modal-overlay');
    const content = document.getElementById('help-modal-content');
    content.innerHTML = helpData[key];
    modal.style.display = 'flex';
    // Small delay to allow display:flex to apply before adding class for transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeHelp() {
    const modal = document.getElementById('help-modal-overlay');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Wait for transition
}

function renderWeapons() {
    const listEl = document.getElementById('weapons-list');
    listEl.innerHTML = '';
    
    if (!appData.weapons) appData.weapons = [];
    
    appData.weapons.forEach((weapon, index) => {
        const div = document.createElement('div');
        div.className = 'weapon-item inv-item card-layout';
        div.draggable = true;
        
        div.addEventListener('dragstart', (e) => handleDragStart(e, index, 'weapons'));
        div.addEventListener('dragover', handleDragOver);
        div.addEventListener('dragleave', handleDragLeave);
        div.addEventListener('drop', (e) => handleDrop(e, index, 'weapons'));
        div.addEventListener('dragend', handleDragEnd);

        // Header
        const headerDiv = document.createElement('div');
        headerDiv.className = 'inv-card-header';

        const dragHandle = document.createElement('i');
        dragHandle.className = 'fa-solid fa-bars drag-handle';
        
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = weapon.name;
        nameInput.className = 'inv-item-name';
        nameInput.oninput = (e) => {
            weapon.name = e.target.value;
            saveData();
        };
        
        const delBtn = document.createElement('button');
        delBtn.className = 'btn-delete-icon';
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.style.marginLeft = '1rem';
        delBtn.onclick = () => {
            if (confirm(`Möchtest du die Waffe "${weapon.name || 'Unbenannt'}" wirklich löschen?`)) {
                removeWeapon(weapon.id);
            }
        };

        headerDiv.appendChild(dragHandle);
        headerDiv.appendChild(nameInput);
        headerDiv.appendChild(delBtn);

        // Controls
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'inv-card-controls';

        const dmgDiv = document.createElement('div');
        dmgDiv.className = 'weapon-dmg-wrapper';
        dmgDiv.innerHTML = '<span style="font-size: 0.8rem; color: var(--text-secondary); margin-right: 0.3rem;">Schaden</span>';
        
        const dmgInput = document.createElement('input');
        dmgInput.type = 'text';
        dmgInput.value = weapon.damage;
        dmgInput.className = 'weapon-dmg-input';
        dmgInput.placeholder = 'z.B. 1w10';
        dmgInput.oninput = (e) => {
            weapon.damage = e.target.value;
            saveData();
        };
        dmgDiv.appendChild(dmgInput);

        const rollBtn = document.createElement('button');
        rollBtn.className = 'btn-icon-small weapon-damage-btn';
        rollBtn.innerHTML = '<i class="fa-solid fa-dice"></i>';
        rollBtn.title = 'Schaden würfeln';
        rollBtn.onclick = () => {
            rollWeaponDamage(weapon.damage, weapon.name);
        };
        dmgDiv.appendChild(rollBtn);

        const toggleDescBtn = document.createElement('button');
        toggleDescBtn.className = 'item-desc-toggle';
        toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Details';
        
        controlsDiv.appendChild(dmgDiv);
        controlsDiv.appendChild(toggleDescBtn);

        // Description
        const descArea = document.createElement('textarea');
        descArea.className = 'item-description';
        descArea.placeholder = 'Beschreibung / Effekte...';
        descArea.value = weapon.description || '';
        if (weapon.showDesc) descArea.classList.add('show');
        
        descArea.oninput = (e) => {
            weapon.description = e.target.value;
            saveData();
        };
        
        toggleDescBtn.onclick = () => {
            weapon.showDesc = !weapon.showDesc;
            if (weapon.showDesc) {
                descArea.classList.add('show');
                toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Details';
            } else {
                descArea.classList.remove('show');
                toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Details';
            }
            saveData();
        };
        if (weapon.showDesc) toggleDescBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Details';
        
        div.appendChild(headerDiv);
        div.appendChild(controlsDiv);
        div.appendChild(descArea);
        
        listEl.appendChild(div);
    });
}

function addWeaponItem() {
    const nameInput = document.getElementById('new-weapon-name');
    const dmgInput = document.getElementById('new-weapon-dmg');
    const descInput = document.getElementById('new-weapon-desc');
    
    const name = nameInput.value.trim();
    const dmg = dmgInput.value.trim();
    
    if (name && dmg) {
        if (!appData.weapons) appData.weapons = [];
        
        let desc = '';
        if(descInput) desc = descInput.value.trim();
        
        appData.weapons.push({ 
            id: 'w_' + Date.now(), 
            name: name, 
            damage: dmg,
            description: desc,
            showDesc: !!desc
        });
        addActivityLog(`Neue Waffe: ${name}`, 'activity-good', '<i class="fa-solid fa-khanda"></i>');
        
        nameInput.value = '';
        dmgInput.value = '';
        if(descInput) descInput.value = '';
        
        saveData();
        renderWeapons();
    }
}

function removeWeapon(id) {
    const wp = appData.weapons.find(w => w.id === id);
    if (wp) addActivityLog(`Waffe entfernt: ${wp.name}`, 'activity-bad', '<i class="fa-solid fa-trash"></i>');
    appData.weapons = appData.weapons.filter(w => w.id !== id);
    saveData();
    renderWeapons();
}

function parseDiceFormula(formula) {
    const match = formula.toLowerCase().match(/(\d+)w(\d+)([\+\-]\d+)?/);
    if (!match) return null;
    return {
        count: parseInt(match[1]),
        sides: parseInt(match[2]),
        mod: match[3] ? parseInt(match[3]) : 0
    };
}

function rollWeaponDamage(damageString, weaponName) {
    if (!damageString) return;
    const parsed = parseDiceFormula(damageString);
    if (!parsed) {
        alert("Schadensformat nicht erkannt. Bitte z.B. 1w6+2 verwenden.");
        return;
    }
    
    let wuerfelSumme = 0;
    let rolls = [];
    for (let i = 0; i < parsed.count; i++) {
        let r = Math.floor(Math.random() * parsed.sides) + 1;
        rolls.push(r);
        wuerfelSumme += r;
    }

    // Regelwerk S.15: "Trifft ein Spieler mit seiner Waffe kritisch, wird der
    // ausgewürfelte Schaden verdoppelt." Verdoppelt wird also nur das Würfelergebnis.
    // Ein fester Waffenbonus (S.18 nennt als Beispiel Excalibur mit 5W10+10) kommt
    // danach dazu und wird nicht mitverdoppelt.
    const wasCritHit = pendingCritDamage;
    if (wasCritHit) pendingCritDamage = false;

    const total = (wasCritHit ? wuerfelSumme * 2 : wuerfelSumme) + parsed.mod;

    let rollStr = `[${rolls.join('+')}]`;
    if (wasCritHit) rollStr += ' &times;2 (Krit!)';
    if (parsed.mod !== 0) rollStr += (parsed.mod > 0 ? '+' + parsed.mod : parsed.mod);

    const displayRes = document.getElementById('dice-result');
    displayRes.querySelector('.result-number').textContent = total;
    displayRes.querySelector('.result-label').textContent = weaponName + " Schaden";
    displayRes.className = 'dice-result-display active damage-roll';

    setTimeout(() => {
        displayRes.classList.remove('active');
        displayRes.classList.remove('damage-roll');
    }, 400);

    lastRollTimestamp = Date.now();
    updateLiveTimers();

    // Crit/Fumble logic for weapons
    const isMax = !wasCritHit && wuerfelSumme === parsed.count * parsed.sides;
    const isMin = !wasCritHit && wuerfelSumme === parsed.count;

    if (wasCritHit) {
        fireConfetti();
        addToLog(`<i class="fa-solid fa-burst"></i> ${weaponName} Schaden`, `<b class="crit-success">${total} (Kritischer Treffer, verdoppelt!)</b> <span style="font-size:0.75rem;opacity:0.7">(${damageString} = ${rollStr})</span>`, lastRollTimestamp);
    } else if (isMax) {
        fireConfetti();
        addToLog(`<i class="fa-solid fa-burst"></i> ${weaponName} Schaden`, `<b class="crit-success">${total} (Max!)</b> <span style="font-size:0.75rem;opacity:0.7">(${damageString} = ${rollStr})</span>`, lastRollTimestamp);
    } else if (isMin) {
        fireFumble();
        addToLog(`<i class="fa-solid fa-burst"></i> ${weaponName} Schaden`, `<b class="crit-fail">${total} (Min!)</b> <span style="font-size:0.75rem;opacity:0.7">(${damageString} = ${rollStr})</span>`, lastRollTimestamp);
    } else {
        addToLog(`<i class="fa-solid fa-burst"></i> ${weaponName} Schaden`, `<b>${total}</b> <span style="font-size:0.75rem;opacity:0.7">(${damageString} = ${rollStr})</span>`, lastRollTimestamp);
    }
}

function adjustGbp(category, amount) {
    let field = 'gbp_' + category;
    let baseAttrField = 'attr_' + category;
    let maxGbp = Math.round(appData[baseAttrField] / 10);
    
    let oldVal = parseInt(appData[field]) || 0;
    let newVal = oldVal + amount;
    if (newVal < 0) newVal = 0;
    if (newVal > maxGbp) newVal = maxGbp;
    
    if (oldVal !== newVal) {
        appData[field] = newVal;
        
        const inputEl = document.getElementById('gbp-current-' + category);
        if (inputEl) inputEl.value = newVal;
        
        if (newVal > oldVal) {
            addActivityLog(`Geistesblitz aufgefüllt (${category})`, 'activity-positive', '<i class="fa-solid fa-lightbulb"></i>');
        } else {
            addActivityLog(`Geistesblitz entfernt (${category})`, 'activity-negative', '<i class="fa-solid fa-lightbulb"></i>');
        }
        
        saveData();
    }
}

function useGBP(category) {
    let field = 'gbp_' + category;
    if (appData[field] > 0) {
        // Regelwerk S.4/S.5: Ein GBP darf nicht eingesetzt werden, wenn der letzte Wurf in dieser
        // Begabung ein kritischer Misserfolg (Patzer) war.
        if (lastRollByCategory[category] === 'crit-fail') {
            const override = confirm(`Laut Regelwerk kann nach einem kritischen Patzer kein Geistesblitzpunkt mehr eingesetzt werden, um den Wurf zu wiederholen.\n\nTrotzdem fortfahren?`);
            if (!override) return;
        }

        appData[field]--;
        document.getElementById('gbp-current-' + category).value = appData[field];
        addActivityLog(`Geistesblitz genutzt (${category})`, 'activity-neutral', '<i class="fa-solid fa-lightbulb"></i>');
        saveData();
        addToLog(`<i class="fa-solid fa-lightbulb"></i> Geistesblitzpunkt`, `für ${category.charAt(0).toUpperCase() + category.slice(1)} eingesetzt`);
    }
}

function rollInitiative() {
    const handlnAttr = parseInt(appData['attr_handeln']) || 0;
    const w10Result = Math.floor(Math.random() * 10) + 1;
    const modifier = consumeModifier();
    const total = w10Result + handlnAttr + modifier.mod;
    
    addToLog(`<i class="fa-solid fa-bolt"></i> Initiative`, `1W10 (${w10Result}) + Handeln (${handlnAttr})${modifier.str} = <b>${total}</b>`);
    
    const displayRes = document.getElementById('dice-result');
    if(displayRes) {
        displayRes.querySelector('.result-number').textContent = total;
        displayRes.querySelector('.result-label').textContent = "Initiative";
        displayRes.className = 'dice-result-display active success';
        if (typeof AudioController !== 'undefined') AudioController.play('dice');
        
        setTimeout(() => {
            displayRes.className = 'dice-result-display';
        }, 3000);
    }
}

function rollSkillCheck(skillName, skillValue, isBaseAttribute = false, category = null) {
    // Regelwerk S.8: "keine Fähigkeiten über 100 Punkte haben kann" - der Fähigkeitswert selbst
    // wird für den Wurf hart bei 100 gedeckelt, auch wenn auf dem Bogen mehr investiert ist.
    let capHint = '';
    if (!isBaseAttribute && skillValue > 100) {
        capHint = ` <span style="opacity:0.7">(Fähigkeit hat ${skillValue} Punkte, laut Regelwerk auf 100 gedeckelt!)</span>`;
        skillValue = 100;
    }

    // Regelwerk S.21: "Bei einem Probenwurf kennzeichnen 10% des Fähigkeitswertes den
    // Bereich für einen kritischen Erfolg" und "Die untere Grenze des Bereichs für einen
    // kritischen Misserfolg wird durch 10% der Fähigkeit/Begabung plus 90 gekennzeichnet."
    // Beide Grenzen hängen am Fähigkeitswert selbst - ein SL-Bonus macht die Probe
    // leichter, aber nicht die Fähigkeit besser, und verschiebt deshalb nur die
    // Erfolgsschwelle weiter unten, nicht die Krit-Grenzen.
    // Würfe auf Begabungen haben laut selber Seite keinen kritischen Erfolgsbereich.
    const critSuccessMax = isBaseAttribute ? 0 : Math.round(skillValue / 10);
    const critFailMin = 90 + Math.round(skillValue / 10);

    const modifier = consumeModifier();
    if (modifier.mod !== 0) {
        modifier.str = modifier.mod > 0 ? ` (inkl. +${modifier.mod} Bonus)` : ` (inkl. ${modifier.mod} Malus)`;
    }
    // Erfolgsschwelle inklusive SL-Bonus. Auf dem W100 gibt es über 100 nichts mehr
    // zu treffen und unter 0 nichts mehr zu verlieren.
    const zielwert = Math.max(0, Math.min(100, skillValue + modifier.mod));

    const result = Math.floor(Math.random() * 100) + 1;
    let statusText = '';
    let statusClass = '';

    if (!isBaseAttribute && result <= critSuccessMax) {
        statusText = '🌟 Kritischer Erfolg!';
        statusClass = 'crit-success';
        fireConfetti();
        if (typeof AudioController !== 'undefined') AudioController.play('crit');
    } else if (result >= critFailMin) {
        statusText = '💀 Patzer!';
        statusClass = 'crit-fail';
        fireFumble();
        if (typeof AudioController !== 'undefined') AudioController.play('fail');
    } else if (result <= zielwert) {
        statusText = '✅ Erfolg';
        statusClass = 'success';
    } else {
        statusText = '❌ Fehlschlag';
        statusClass = 'fail';
    }

    if (category && lastRollByCategory.hasOwnProperty(category)) {
        lastRollByCategory[category] = statusClass;
    }

    // Regelwerk S.15: Ein kritischer *Treffer* verdoppelt den nächsten Schadenswurf.
    // Treffer kann nur eine Handeln-Probe sein - ein Krit auf Überreden darf den
    // nächsten Waffenschaden nicht verdoppeln. Jede weitere Probe löst den Treffer
    // wieder ab, damit das Flag nicht szenenlang stehen bleibt.
    pendingCritDamage = (statusClass === 'crit-success' && category === 'handeln');

    const displayRes = document.getElementById('dice-result');
    displayRes.querySelector('.result-number').textContent = result;
    displayRes.querySelector('.result-label').textContent = skillName + " Probe";

    displayRes.className = 'dice-result-display active ' + statusClass;
    setTimeout(() => {
        displayRes.className = 'dice-result-display';
    }, 500);

    const critDamageHint = pendingCritDamage ? ` <span style="opacity:0.7">(nächster Schadenswurf wird verdoppelt!)</span>` : '';
    addToLog(`<i class="fa-solid fa-dice"></i> ${skillName}-Probe (Wert: ${zielwert}${modifier.str})`, `gewürfelt <b>${result}</b> &rarr; <span style="color:var(--accent)">${statusText}</span>${critDamageHint}${capHint}`);
}

function handleThemeLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const MAX_SIZE = 300;
                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                
                appData.customThemeLogo = compressedDataUrl;
                saveData();
                applyTheme();
                if (typeof syncWizardMediaPreviews === 'function') syncWizardMediaPreviews();
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function removeCustomLogo(event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm("Möchtest du das eigene Logo entfernen und zum Standard-Logo zurückkehren?")) {
        delete appData.customThemeLogo;
        saveData();
        applyTheme();
    }
}
