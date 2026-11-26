'use strict';

/* ---------- Project data ---------- */
const projects = [
  {
    id: 'aquanexus',
    title: 'AquaNexus',
    subtitle: 'IoT + deep learning aquaponics monitor',
    category: 'ml',
    categoryLabel: 'ML & IoT',
    date: 'Mar 2025 – Jul 2025',
    art: 'aqua',
    metric: '98.73% accuracy',
    tags: ['ESP32', 'C/C++', 'TensorFlow', 'DenseNet121', 'OpenCV', 'ThingSpeak'],
    summary: 'An automated aquaponics system that watches water quality in real time and classifies plant growth stages from images, built during my Deloitte US-India apprenticeship and as my capstone at TIET.',
    points: [
      'ESP32 firmware in C/C++ reads six sensors (pH, TDS, turbidity, water temperature, air temperature/humidity, water level) and pushes readings to a ThingSpeak cloud dashboard.',
      'Automated pump and circulation control through a motor driver, with a 16×2 I2C LCD cycling through live readings.',
      'Trained and evaluated the models on a dataset of 124,000 plant images.',
      'Benchmarked four architectures for growth-stage classification: DenseNet121 (98.73%), EfficientNet (~92.7%), custom CNN (~92.5%) and LNN (~80.8%).',
      'End-to-end pipeline (sensor → cloud → inference → dashboard) ran continuously during testing without manual intervention.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/manishkumarsiwach/AquaNexus---Plant-growth-monitoring-in-Automated-Aquaponic-System' }]
  },
  {
    id: 'tlms',
    title: 'Thapar Leave Management System',
    subtitle: 'Leave workflow for PhD scholars & JRFs',
    category: 'web',
    categoryLabel: 'Web Development',
    date: 'Mar 2026 – May 2026',
    art: 'leave',
    metric: '15+ REST APIs',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    summary: 'A full-stack platform that runs the full leave lifecycle for CSED PhD scholars and JRFs at Thapar, from applying to approval, with live notifications and reporting.',
    points: [
      'JWT login, role-based access and real-time Socket.io notifications for scholars and approvers.',
      '15+ REST APIs covering apply, approve, reject, resubmit, cancel and bulk approve, with automatic escalation of overdue requests to the next approver.',
      'Working-day calculation that skips holidays, semester leave limits and automatic conversion to unpaid leave.',
      'Full action history on every application, plus PDF and Excel reports.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/manishkumarsiwach/Leave-Management-System' }]
  },
  {
    id: 'jobportal',
    title: 'Full-Stack Job Portal',
    subtitle: 'Recruitment platform with three roles',
    category: 'web',
    categoryLabel: 'Web Development',
    date: 'Aug 2024 – Dec 2024',
    art: 'jobs',
    metric: '29 REST endpoints',
    tags: ['Node.js', 'Express', 'MongoDB', 'Multer', 'Selenium', 'TestNG'],
    summary: 'A job recruitment platform where job seekers, companies and admins each get their own workspace: profiles, job posts, applications, company reviews, interview practice and help requests.',
    points: [
      'Role-based access for Job Seeker, Company and Admin, with bcrypt password hashing and signed token authentication.',
      '29 REST API endpoints for job posts, profiles, applications and reviews.',
      'Resume and certificate uploads through Multer with file type and size validation.',
      'Selenium WebDriver + TestNG regression suite across login, posting, applying and status updates, increasing test coverage by 30%.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/manishkumarsiwach/Job-Portal' }]
  },
  {
    id: 'wheat',
    title: 'Wheat Growth-Stage Classification',
    subtitle: 'Computer vision research at TIET',
    category: 'ml',
    categoryLabel: 'ML & IoT',
    date: 'Jun 2025 – Jul 2025',
    art: 'wheat',
    metric: '14,000+ images',
    tags: ['Python', 'TensorFlow', 'MobileNet', 'Scikit-learn', 'Data augmentation'],
    summary: 'A research internship at the Experimental Learning Centre, TIET, building a pipeline that classifies wheat growth stages from field photographs.',
    points: [
      'Processed 14,000+ field images with MobileNet transfer learning for multi-class growth-stage classification.',
      'Data augmentation and Stratified K-Fold cross-validation to tackle class imbalance and measure generalisation honestly.',
      'Reached 75% validation accuracy on real-world, noisy field imagery.'
    ],
    links: []
  },
  {
    id: 'spaceshooter',
    title: '2D Space Shooter',
    subtitle: 'Arcade game in C++ & OpenGL',
    category: 'game',
    categoryLabel: 'Game Dev',
    date: 'Personal project',
    art: 'space',
    metric: 'Multi-phase boss',
    tags: ['C++', 'OpenGL', 'FreeGLUT', 'stb_image', 'Visual Studio'],
    summary: 'A classic arcade-style shooter written from scratch in C++ with OpenGL and FreeGLUT. Dodge asteroids, blast enemy ships and take down a multi-phase boss.',
    points: [
      'Animated space background with twinkling stars, a pulsing nebula and shooting stars.',
      'Three enemy types: falling asteroids, strafing ships, and advanced ships that fire a curving 3-bullet electric spread once you pass 100 points.',
      'A 15-HP boss with multiple phases, radial shots, beam attacks and a health bar.',
      'Custom explosion animations, score and lives system, and PNG textures loaded with stb_image.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/manishkumarsiwach/Space-Shooter-Game-2D' }]
  }
];

/* ---------- Project artwork (inline SVG, no external images) ---------- */
const art = {
  aqua: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e3a4a"/><stop offset="1" stop-color="#062029"/></linearGradient></defs><rect width="320" height="200" fill="url(#ga)"/><path d="M0 120 Q40 110 80 120 T160 120 T240 120 T320 120 V200 H0z" fill="#14b8a6" opacity=".25"/><path d="M0 135 Q40 125 80 135 T160 135 T240 135 T320 135 V200 H0z" fill="#14b8a6" opacity=".35"/><g fill="#5eead4"><path d="M70 160c10-8 24-8 34 0-10 8-24 8-34 0z"/><path d="M104 160l8-6v12z"/><path d="M190 172c8-6 18-6 26 0-8 6-18 6-26 0z"/><path d="M216 172l6-5v10z"/></g><g stroke="#86efac" stroke-width="3" fill="none" stroke-linecap="round"><path d="M240 120V70"/><path d="M240 92c-14-2-22-12-22-22 12 0 22 8 22 22z" fill="#22c55e"/><path d="M240 80c12-2 20-12 20-22-11 0-20 8-20 22z" fill="#4ade80"/></g><g font-family="monospace" font-size="11" fill="#99f6e4"><rect x="20" y="22" width="92" height="56" rx="8" fill="#042f2e" stroke="#14b8a6"/><text x="30" y="42">pH   7.1</text><text x="30" y="56">TDS  412</text><text x="30" y="70">T°C  26.4</text></g></svg>`,
  leave: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#1e1b4b"/><rect x="40" y="30" width="150" height="140" rx="12" fill="#312e81" stroke="#818cf8"/><rect x="40" y="30" width="150" height="30" rx="12" fill="#4f46e5"/><g fill="#a5b4fc">${Array.from({length:20},(_,i)=>`<rect x="${52+(i%5)*27}" y="${72+Math.floor(i/5)*24}" width="20" height="16" rx="4" opacity="${[3,8,9,14].includes(i)?1:.35}" ${[3,8,9,14].includes(i)?'fill="#facc15"':''}/>`).join('')}</g><g><rect x="200" y="50" width="96" height="34" rx="10" fill="#22c55e"/><text x="214" y="72" font-family="Inter,Arial" font-size="13" font-weight="600" fill="#052e16">Approved</text><rect x="200" y="94" width="96" height="34" rx="10" fill="#f59e0b"/><text x="212" y="116" font-family="Inter,Arial" font-size="13" font-weight="600" fill="#451a03">Escalated</text><rect x="200" y="138" width="96" height="34" rx="10" fill="#334155"/><text x="220" y="160" font-family="Inter,Arial" font-size="13" font-weight="600" fill="#e2e8f0">Pending</text></g></svg>`,
  jobs: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#1c1917"/><g><rect x="30" y="34" width="170" height="40" rx="10" fill="#292524" stroke="#f97316"/><circle cx="52" cy="54" r="10" fill="#f97316"/><rect x="70" y="46" width="90" height="7" rx="3" fill="#fed7aa"/><rect x="70" y="58" width="60" height="6" rx="3" fill="#78716c"/><rect x="50" y="84" width="170" height="40" rx="10" fill="#292524" stroke="#57534e"/><circle cx="72" cy="104" r="10" fill="#fb923c" opacity=".6"/><rect x="90" y="96" width="80" height="7" rx="3" fill="#d6d3d1"/><rect x="90" y="108" width="50" height="6" rx="3" fill="#78716c"/><rect x="70" y="134" width="170" height="40" rx="10" fill="#292524" stroke="#57534e"/><circle cx="92" cy="154" r="10" fill="#fdba74" opacity=".5"/><rect x="110" y="146" width="96" height="7" rx="3" fill="#d6d3d1"/><rect x="110" y="158" width="44" height="6" rx="3" fill="#78716c"/></g><g font-family="monospace" font-size="11" fill="#fdba74"><text x="236" y="58">GET</text><text x="236" y="80">POST</text><text x="236" y="102">PUT</text><text x="236" y="124">DELETE</text></g></svg>`,
  wheat: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="gw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2f0b"/><stop offset="1" stop-color="#1a1405"/></linearGradient></defs><rect width="320" height="200" fill="url(#gw)"/>${[40,80,120,160,200,240,280].map((x,i)=>{const h=60+i*12;return `<g stroke="#eab308" stroke-width="2.5" fill="#facc15"><path d="M${x} 190V${190-h}" fill="none"/>${[0,1,2,3].map(k=>`<ellipse cx="${x-5}" cy="${190-h+8+k*10}" rx="4" ry="7" transform="rotate(-25 ${x-5} ${190-h+8+k*10})"/><ellipse cx="${x+5}" cy="${190-h+8+k*10}" rx="4" ry="7" transform="rotate(25 ${x+5} ${190-h+8+k*10})"/>`).join('')}</g>`}).join('')}<g stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="6 4"><rect x="150" y="40" width="70" height="90" rx="4"/></g><rect x="150" y="24" width="70" height="16" rx="3" fill="#38bdf8"/><text x="156" y="36" font-family="monospace" font-size="10" fill="#082f49">stage 4</text></svg>`,
  space: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="gs" cx=".7" cy=".3" r=".8"><stop offset="0" stop-color="#4c1d95"/><stop offset="1" stop-color="#020617"/></radialGradient></defs><rect width="320" height="200" fill="url(#gs)"/><g fill="#fff">${Array.from({length:40},(_,i)=>`<circle cx="${(i*73)%320}" cy="${(i*41)%200}" r="${(i%3)*0.6+0.4}" opacity="${0.4+(i%4)*0.15}"/>`).join('')}</g><image href="assets/images/boss.png" x="190" y="14" width="96" height="96"/><image href="assets/images/spaceship.png" x="60" y="110" width="76" height="76"/><g stroke="#f43f5e" stroke-width="3" stroke-linecap="round"><path d="M98 104V84"/><path d="M98 70V54"/></g></svg>`
};

/* ---------- Render projects ---------- */
const grid = document.querySelector('[data-projects]');
grid.innerHTML = projects.map(p => `
  <li class="project-card" data-category="${p.category}">
    <button class="project-btn" data-open="${p.id}" aria-label="Open ${p.title}">
      <figure class="project-art">${art[p.art]}<span class="project-metric">${p.metric}</span></figure>
      <div class="project-info">
        <p class="project-cat">${p.categoryLabel}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-sub">${p.subtitle}</p>
        <ul class="chips chips-sm">${p.tags.slice(0, 4).map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    </button>
    ${p.links.length ? `<a class="card-gh" href="${p.links[0].href}" target="_blank" rel="noopener" aria-label="${p.title} on GitHub" title="View on GitHub"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z"/></svg>GitHub</a>` : ''}
  </li>`).join('');

/* ---------- Project filter ---------- */
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
    const f = btn.dataset.filter;
    grid.querySelectorAll('.project-card').forEach(card => {
      card.hidden = !(f === 'all' || card.dataset.category === f);
    });
  });
});

/* ---------- Modal ---------- */
const modal = document.querySelector('[data-modal]');
const modalBody = document.querySelector('[data-modal-body]');
let lastFocus = null;

function openModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <figure class="modal-art">${art[p.art]}</figure>
    <p class="project-cat">${p.categoryLabel} · ${p.date}</p>
    <h3 class="modal-title" id="modal-title">${p.title}</h3>
    <p class="modal-summary">${p.summary}</p>
    <ul class="modal-points">${p.points.map(x => `<li>${x}</li>`).join('')}</ul>
    <ul class="chips">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
    ${p.links.length
      ? `<div class="modal-links">${p.links.map(l => `<a class="btn btn-primary" href="${l.href}" target="_blank" rel="noopener">${l.label} →</a>`).join('')}</div>`
      : `<p class="form-note">Code isn't public for this project. Happy to walk through it in an interview.</p>`}
  `;
  modal.hidden = false;
  document.body.classList.add('no-scroll');
  modal.querySelector('.modal-close').focus();
}
function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('no-scroll');
  if (lastFocus) lastFocus.focus();
}
grid.addEventListener('click', e => {
  const b = e.target.closest('[data-open]');
  if (b) openModal(b.dataset.open);
});
modal.addEventListener('click', e => { if (e.target.closest('[data-modal-close]')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ---------- Page navigation ---------- */
const navLinks = document.querySelectorAll('[data-nav]');
const pages = document.querySelectorAll('[data-page]');
function showPage(name) {
  if (![...pages].some(p => p.dataset.page === name)) name = 'about';
  pages.forEach(p => p.classList.toggle('active', p.dataset.page === name));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === name));
}
navLinks.forEach(link => link.addEventListener('click', () => {
  showPage(link.dataset.nav);
  history.replaceState(null, '', '#' + link.dataset.nav);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}));
showPage(location.hash.slice(1) || 'about');
window.addEventListener('hashchange', () => showPage(location.hash.slice(1) || 'about'));

/* ---------- Sidebar toggle (mobile) ---------- */
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
sidebarBtn.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  sidebarBtn.setAttribute('aria-expanded', open);
  sidebarBtn.querySelector('span').textContent = open ? 'Hide contacts' : 'Show contacts';
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

/* ---------- Resume viewer ---------- */
const resumeModal = document.querySelector('[data-resume]');
const resumeFrame = document.querySelector('[data-resume-frame]');
const RESUME_URL = 'assets/Manish_Kumar_Resume.pdf';
document.querySelectorAll('[data-resume-open]').forEach(btn => btn.addEventListener('click', () => {
  // Phones can't show a PDF inside a page, so open it directly there.
  if (window.matchMedia('(max-width: 767px)').matches) {
    window.open(RESUME_URL, '_blank', 'noopener');
    return;
  }
  if (!resumeFrame.src) resumeFrame.src = RESUME_URL + '#view=FitH';
  resumeModal.hidden = false;
  document.body.classList.add('no-scroll');
}));

/* Inline preview on the Resume page (desktop only; loaded when the page is first opened) */
const resumeInline = document.querySelector('[data-resume-inline]');
function loadInlineResume() {
  if (!resumeInline.src && !window.matchMedia('(max-width: 767px)').matches) {
    resumeInline.src = RESUME_URL + '#view=FitH';
  }
}
if (document.querySelector('[data-page="resume"]').classList.contains('active')) loadInlineResume();
navLinks.forEach(l => l.addEventListener('click', () => { if (l.dataset.nav === 'resume') loadInlineResume(); }));
window.addEventListener('hashchange', () => { if (location.hash === '#resume') loadInlineResume(); });
function closeResume() {
  resumeModal.hidden = true;
  document.body.classList.remove('no-scroll');
}
resumeModal.addEventListener('click', e => { if (e.target.closest('[data-resume-close]')) closeResume(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !resumeModal.hidden) closeResume(); });
