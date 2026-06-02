// app.js
import { supabase, getUser, signInWithGoogle, signOut,
         loadExercises, toggleExercise, loadRoutine, toggleRoutine } from './supabase.js';
import { semanas, fases, TRILHA_START_DATE } from './data.js';

let currentUser = null;
let exercises = {};
let routine = {};

// ── Utilitários de data ──────────────────────────────────
function getStartDate() {
  return new Date(TRILHA_START_DATE + 'T00:00:00');
}

function getCurrentWeekNumber() {
  const start = getStartDate();
  const now = new Date();
  const diff = Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000));
  return Math.max(1, Math.min(diff + 1, 36));
}

function getWeekStartDate(weekNum) {
  const start = getStartDate();
  const d = new Date(start);
  d.setDate(d.getDate() + (weekNum - 1) * 7);
  return d;
}

function isWeekLate(weekNum) {
  return weekNum < getCurrentWeekNumber();
}

function getWeekStatus(weekNum, completedCount, totalCount) {
  const current = getCurrentWeekNumber();
  if (weekNum > current) return 'future';
  if (weekNum === current) return 'current';
  if (completedCount === totalCount) return 'done';
  return 'late';
}

function getTodayRoutineKey() {
  const d = new Date();
  return `rotina-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// ── Progresso ────────────────────────────────────────────
function calcProgress() {
  const total = semanas.reduce((s, sem) => s + sem.exercicios.length, 0);
  const done = Object.values(exercises).filter(Boolean).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function calcAssiduidade() {
  const studyDays = ['seg', 'qua', 'qui'];
  const start = getStartDate();
  const now = new Date();
  let planned = 0, completed = 0;
  for (let d = new Date(start); d <= now; d.setDate(d.getDate() + 1)) {
    const dow = d.getDay();
    const isStudyDay = dow === 1 || dow === 3 || dow === 4;
    if (!isStudyDay) continue;
    planned++;
    const key = `rotina-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    if (routine[key]) completed++;
  }
  return { planned, completed, pct: planned ? Math.round((completed / planned) * 100) : 100 };
}

function calcWeeksStatus() {
  const current = getCurrentWeekNumber();
  let late = 0, onTime = 0;
  for (const sem of semanas) {
    if (sem.id >= current) continue;
    const done = sem.exercicios.filter((_, i) => exercises[`ex-${sem.id}-${i}`]).length;
    if (done < sem.exercicios.length) late++;
    else onTime++;
  }
  return { late, onTime };
}

// ── Render ────────────────────────────────────────────────
function render() {
  if (!currentUser) { renderLogin(); return; }
  renderApp();
}

function renderLogin() {
  document.getElementById('root').innerHTML = `
    <div class="login-screen">
      <div class="login-card">
        <div class="logo">📊</div>
        <h1>Trilha Daniel Miranda</h1>
        <p>Seu plano de estudos personalizado — do plateau ao consultor sênior.</p>
        <button class="btn-google" onclick="window.signIn()">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.8 2.5 30.3 0 24 0 14.7 0 6.7 5.4 2.7 13.3l7.8 6C12.4 13 17.8 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.8-2.1 5.2-4.5 6.8l7 5.4C43.1 37 46.1 31.2 46.1 24.5z"/>
            <path fill="#FBBC05" d="M10.5 28.7A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.7 10.7l7.8-6z"/>
            <path fill="#34A853" d="M24 48c6.3 0 11.6-2.1 15.5-5.7l-7-5.4c-2.1 1.4-4.8 2.3-8.5 2.3-6.2 0-11.6-3.5-13.5-8.8l-7.8 6C6.7 42.6 14.7 48 24 48z"/>
          </svg>
          Entrar com Google
        </button>
      </div>
    </div>`;
}

function renderApp() {
  const prog = calcProgress();
  const assim = calcAssiduidade();
  const weekStatus = calcWeeksStatus();
  const currentWeek = getCurrentWeekNumber();
  const todayKey = getTodayRoutineKey();
  const todayDone = routine[todayKey] || false;
  const dow = new Date().getDay();
  const isStudyDay = dow === 1 || dow === 3 || dow === 4;

  document.getElementById('root').innerHTML = `
    <div class="app">
      <!-- Header -->
      <header class="header">
        <div class="header-inner">
          <div class="header-left">
            <span class="logo-icon">📊</span>
            <span class="header-title">Trilha Daniel Miranda</span>
          </div>
          <div class="header-right">
            <span class="user-name">${currentUser.user_metadata?.full_name?.split(' ')[0] || 'Daniel'}</span>
            <button class="btn-signout" onclick="window.signOutUser()">Sair</button>
          </div>
        </div>
      </header>

      <!-- Painel de Saúde -->
      <section class="health-panel">
        <div class="health-card">
          <div class
                    <div class="health-label">Progresso Geral</div>
          <div class="health-value">${prog.pct}%</div>
          <div class="health-sub">${prog.done} de ${prog.total} exercícios</div>
          <div class="progress-bar"><div class="progress-fill" style="width:${prog.pct}%"></div></div>
        </div>
        <div class="health-card ${assim.pct < 70 ? 'card-warning' : ''}">
          <div class="health-label">Assiduidade</div>
          <div class="health-value">${assim.pct}%</div>
          <div class="health-sub">${assim.completed} de ${assim.planned} sessões</div>
          <div class="progress-bar"><div class="progress-fill ${assim.pct < 70 ? 'fill-warning' : 'fill-green'}" style="width:${assim.pct}%"></div></div>
        </div>
        <div class="health-card ${weekStatus.late > 0 ? 'card-warning' : ''}">
          <div class="health-label">Semanas em Atraso</div>
          <div class="health-value ${weekStatus.late > 0 ? 'text-warning' : 'text-green'}">${weekStatus.late}</div>
          <div class="health-sub">${weekStatus.onTime} semanas concluídas no prazo</div>
        </div>
        <div class="health-card">
          <div class="health-label">Semana Atual</div>
          <div class="health-value">${currentWeek}<span class="health-of">/36</span></div>
          <div class="health-sub">Fase ${fases.find(f => currentWeek >= f.semanas[0] && currentWeek <= f.semanas[1])?.id || 1}</div>
        </div>
      </section>

      <!-- Check de hoje -->
      ${isStudyDay ? `
      <section class="today-check">
        <div class="today-inner">
          <span class="today-icon">${todayDone ? '✅' : '📚'}</span>
          <span class="today-text">${todayDone ? 'Sessão de hoje marcada! Ótimo trabalho.' : 'Você estudou hoje?'}</span>
          <button class="btn-today ${todayDone ? 'btn-today-done' : ''}" 
                  onclick="window.toggleToday('${todayKey}', ${!todayDone})">
            ${todayDone ? 'Desmarcar' : 'Marcar sessão de hoje ✓'}
          </button>
        </div>
      </section>` : ''}

      <!-- Filtro de Fases -->
      <section class="phase-filter">
        <button class="pill pill-active" onclick="window.filterPhase(0)" id="pill-0">Todas</button>
        ${fases.map(f => `
          <button class="pill" onclick="window.filterPhase(${f.id})" id="pill-${f.id}" style="--phase-color:${f.cor}">
            Fase ${f.id}
          </button>`).join('')}
      </section>

      <!-- Semanas -->
      <main class="weeks-list" id="weeks-list">
        ${semanas.map(sem => renderWeek(sem)).join('')}
      </main>
    </div>`;
}

function renderWeek(sem) {
  const totalEx = sem.exercicios.length;
  const doneEx = sem.exercicios.filter((_, i) => exercises[`ex-${sem.id}-${i}`]).length;
  const status = getWeekStatus(sem.id, doneEx, totalEx);
  const fase = fases.find(f => sem.fase === f.id);
  const startDate = getWeekStartDate(sem.id);
  const dateStr = startDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });

  const statusMap = {
    future: { label: 'Futura', cls: 'status-future' },
    current: { label: 'Em andamento', cls: 'status-current' },
    done: { label: 'Concluída ✓', cls: 'status-done' },
    late: { label: '⚠ Atrasada', cls: 'status-late' },
  };
  const st = statusMap[status];

  return `
    <div class="week-card ${st.cls}" data-fase="${sem.fase}" data-week="${sem.id}">
      <div class="week-header" onclick="window.toggleWeek(${sem.id})">
        <div class="week-left">
          <span class="week-number">Semana ${sem.id}</span>
          <span class="week-phase-dot" style="background:${fase.cor}"></span>
          <span class="week-phase-name">${fase.nome}</span>
        </div>
        <div class="week-right">
          <span class="week-date">${dateStr}</span>
          <span class="week-status ${st.cls}-badge">${st.label}</span>
          <span class="week-progress-mini">${doneEx}/${totalEx}</span>
          <span class="week-chevron" id="chev-${sem.id}">▼</span>
        </div>
      </div>
      <div class="week-title" onclick="window.toggleWeek(${sem.id})">${sem.titulo}</div>
      <div class="week-progress-bar">
        <div class="week-progress-fill" style="width:${totalEx ? Math.round((doneEx/totalEx)*100) : 0}%; background:${fase.cor}"></div>
      </div>

      <div class="week-body" id="body-${sem.id}" style="display:none">
        <!-- Conteúdo -->
        <div class="section-label">📖 Conteúdo da semana</div>
        <ul class="content-list">
          ${sem.conteudo.map(c => `>${c}</li>`).join('')}
        </ul>

        <!-- Exercícios -->
        <div class="section-label">✏️ Exercícios práticos</div>
        <ul class="exercise-list">
          ${sem.exercicios.map((ex, i) => {
            const key = `ex-${sem.id}-${i}`;
            const done = exercises[key] || false;
            return `
              >
                abel class="ex-label">
                  <input type="checkbox" ${done ? 'checked' : ''} 
                         onchange="window.toggleEx('${key}', this.checked)">
                  <span>${ex}</span>
                </label>
              </li>`;
          }).join('')}
        </ul>

        <!-- Certificação -->
        ${sem.certificacao ? `
          <div class="section-label">🏆 Certificação da semana</div>
          <div class="cert-badge">${sem.certificacao}</div>` : ''}

        <!-- Projeto -->
        <div class="section-label">🚀 Projeto DataHub</div>
        <div class="projeto-box">${sem.projeto}</div>
      </div>
    </div>`;
}

// ── Event handlers globais ────────────────────────────────
window.signIn = signInWithGoogle;
window.signOutUser = signOut;

window.toggleWeek = (id) => {
  const body = document.getElementById(`body-${id}`);
  const chev = document.getElementById(`chev-${id}`);
  const open = body.style.display === 'none';
  body.style.display = open ? 'block' : 'none';
  chev.textContent = open ? '▲' : '▼';
};

window.toggleEx = async (key, checked) => {
  exercises[key] = checked;
  await toggleExercise(currentUser.id, key, checked);
  render();
};

window.toggleToday = async (key, checked) => {
  routine[key] = checked;
  await toggleRoutine(currentUser.id, key, checked);
  render();
};

window.filterPhase = (phaseId) => {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('pill-active'));
  document.getElementById(`pill-${phaseId}`).classList.add('pill-active');
  document.querySelectorAll('.week-card').forEach(card => {
    const fase = parseInt(card.dataset.fase);
    card.style.display = (phaseId === 0 || fase === phaseId) ? 'block' : 'none';
  });
};

// ── Init ─────────────────────────────────────────────────
async function init() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    currentUser = session.user;
    [exercises, routine] = await Promise.all([
      loadExercises(currentUser.id),
      loadRoutine(currentUser.id),
    ]);
  }
  render();

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      currentUser = session.user;
      [exercises, routine] = await Promise.all([
        loadExercises(currentUser.id),
        loadRoutine(currentUser.id),
      ]);
    } else {
      currentUser = null;
      exercises = {};
      routine = {};
    }
    render();
  });
}

init();
