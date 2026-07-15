/* ========================================
   JOVAPP — MAIN JAVASCRIPT
   GSAP + Lenis + SplitText animations (via CDN globals)
   ======================================== */

// Register GSAP plugins (loaded via CDN)
gsap.registerPlugin(ScrollTrigger);

// ========================================
// DATA
// ========================================

const cursosData = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    title: 'Excel & Planilhas do Zero',
    desc: 'Domine fórmulas, tabela dinâmica e dashboards. O requisito #1 em 87% das vagas de aprendiz.'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    title: 'Comunicação Profissional',
    desc: 'E-mail corporativo, etiqueta no Teams/Slack, feedback construtivo e postura em reuniões.'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>',
    title: 'Lógica & Resolução de Problemas',
    desc: 'Pensamento estruturado, algoritmos básicos e como abordar desafios do dia a dia corporativo.'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    title: 'Direitos do Aprendiz (CLT)',
    desc: 'Jornada, salário, férias, FGTS, rescisão e como identificar irregularidades no contrato.'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    title: 'Gestão de Tempo & Rotinas',
    desc: 'Técnicas de priorização, blocos de foco, equilíbrio estudo-trabalho e saúde mental.'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    title: 'Entrevista: Simulados Reais',
    desc: 'Pratique com perguntas reais de RH, receba feedback de IA e chegue preparado no dia.'
  }
];

const fairPrinciplesData = [
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: 'Critérios Públicos', desc: 'Requisitos e pesos divulgados antes da inscrição. Ninguém joga com regras ocultas.' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', title: 'Prazo Garantido', desc: 'Resposta em até 7 dias úteis após cada etapa. Seu tempo vale respeito.' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: 'Feedback Acionável', desc: 'Não apenas "não passou" — o que melhorar concretamente para a próxima vez.' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/></svg>', title: 'Denúncia Anônima', desc: 'Canal direto e seguro para relatar irregularidades no processo seletivo.' }
];

const vagasData = [
  { company: 'Banco Nacional', logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>', badge: 'Destaque', title: 'Assistente Administrativo - Aprendiz', location: 'São Paulo, SP', regime: 'Híbrido', salary: 'R$ 1.412', deadline: 'Inscrições até 22/07', tags: ['Administrativo', 'Banco', 'Grande Porte'] },
  { company: 'Varejo Brasil', logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>', badge: 'Urgente', title: 'Atendimento ao Cliente - Jovem Aprendiz', location: 'Santo André, SP', regime: 'Presencial', salary: 'R$ 1.320', deadline: 'Inscrições até 25/07', tags: ['Atendimento', 'Varejo', 'Escala 6x1'] },
  { company: 'HealthTech Innov', logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>', badge: 'Remoto', title: 'Suporte TI Júnior - Programa Aprendiz', location: 'Remoto (Brasil)', regime: 'Remoto', salary: 'R$ 1.600', deadline: 'Inscrições até 20/07', tags: ['Tecnologia', 'Saúde', 'Mentoria'] },
  { company: 'Logística Express', logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', badge: '', title: 'Operações Logísticas - Aprendiz', location: 'Guarulhos, SP', regime: 'Presencial', salary: 'R$ 1.380', deadline: 'Inscrições até 28/07', tags: ['Logística', 'CD', 'Benefícios'] },
  { company: 'Financeira Segura', logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', badge: 'Novo', title: 'Backoffice Financeiro - Aprendiz', location: 'Rio de Janeiro, RJ', regime: 'Híbrido', salary: 'R$ 1.450', deadline: 'Inscrições até 30/07', tags: ['Financeiro', 'Backoffice', 'Certificação'] },
  { company: 'TechStart', logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>', badge: 'Exclusiva', title: 'Desenvolvimento Web Júnior - Aprendiz', location: 'Belo Horizonte, MG', regime: 'Remoto', salary: 'R$ 1.700', deadline: 'Inscrições até 18/07', tags: ['Tech', 'React', 'Node.js', 'Mentor Sênior'] }
];

const empresasLogos = [
  { name: 'Banco Nacional', svg: '<svg viewBox="0 0 120 40" fill="currentColor"><rect width="120" height="40" rx="4" fill="#1E2A38"/><text x="60" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="16" fill="#7ED957">BANCO NACIONAL</text></svg>' },
  { name: 'Varejo Brasil', svg: '<svg viewBox="0 0 120 40" fill="currentColor"><rect width="120" height="40" rx="4" fill="#1E2A38"/><text x="60" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="16" fill="#7ED957">VAREJO BRASIL</text></svg>' },
  { name: 'HealthTech Innov', svg: '<svg viewBox="0 0 140 40" fill="currentColor"><rect width="140" height="40" rx="4" fill="#1E2A38"/><text x="70" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="14" fill="#7ED957">HEALTHTECH INNOV</text></svg>' },
  { name: 'Logística Express', svg: '<svg viewBox="0 0 140 40" fill="currentColor"><rect width="140" height="40" rx="4" fill="#1E2A38"/><text x="70" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="14" fill="#7ED957">LOGÍSTICA EXPRESS</text></svg>' },
  { name: 'Financeira Segura', svg: '<svg viewBox="0 0 140 40" fill="currentColor"><rect width="140" height="40" rx="4" fill="#1E2A38"/><text x="70" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="14" fill="#7ED957">FINANCEIRA SEGURA</text></svg>' },
  { name: 'TechStart', svg: '<svg viewBox="0 0 120 40" fill="currentColor"><rect width="120" height="40" rx="4" fill="#1E2A38"/><text x="60" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="16" fill="#7ED957">TECHSTART</text></svg>' },
  { name: 'EducaMais', svg: '<svg viewBox="0 0 120 40" fill="currentColor"><rect width="120" height="40" rx="4" fill="#1E2A38"/><text x="60" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="16" fill="#7ED957">EDUCAMAIS</text></svg>' },
  { name: 'Indústria Forte', svg: '<svg viewBox="0 0 130 40" fill="currentColor"><rect width="130" height="40" rx="4" fill="#1E2A38"/><text x="65" y="26" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="14" fill="#7ED957">INDÚSTRIA FORTE</text></svg>' }
];

const depoimentosData = [
  { name: 'Maria Silva', role: 'Aprendiz Administrativa - Banco Nacional', text: '"O JovApp me deu estrutura para me preparar. Os cursos de Excel e comunicação foram decisivos. Consegui minha vaga em 3 semanas."', avatar: 'MS' },
  { name: 'João Santos', role: 'Aprendiz de TI - HealthTech Innov', text: '"Diferente de outros sites, aqui o processo é transparente. Recebi feedback de cada etapa e soube exatamente o que melhorar."', avatar: 'JS' },
  { name: 'Ana Oliveira', role: 'Aprendiz de Logística - Logística Express', text: '"A denúncia anônima me deu segurança. Reportei uma irregularidade e vi a empresa ser notificada. Isso é concorrência leal de verdade."', avatar: 'AO' },
  { name: 'Pedro Costa', role: 'Aprendiz Financeiro - Financeira Segura', text: '"Cursos gratuitos com certificado, simulador de entrevista que parece real, e vagas que realmente pagam o que prometem."', avatar: 'PC' },
  { name: 'Lucas Ferreira', role: 'Aprendiz Dev - TechStart', text: '"Mentoria sênior inclusa na vaga. Aprendi React na prática enquanto trabalhava. Melhor entrada no mercado possível."', avatar: 'LF' },
  { name: 'Carla Mendes', role: 'Aprendiz Atendimento - Varejo Brasil', text: '"Filtrei por regime híbrido e salário. Encontrei a vaga perfeita perto de casa. Processo todo pelo app, sem burocracia."', avatar: 'CM' }
];

// ========================================
// UTILITIES
// ========================================

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animateCounter = (el, target, duration = 1800) => {
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('pt-BR');
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

// ========================================
// NAVBAR
// ========================================

const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Mobile menu toggle
navbarToggle.addEventListener('click', () => {
  const expanded = navbarToggle.getAttribute('aria-expanded') === 'true';
  navbarToggle.setAttribute('aria-expanded', !expanded);
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = expanded ? '' : 'hidden';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbarToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ========================================
// HERO ANIMATIONS
// ========================================

const heroTimeline = gsap.timeline({ defaults: { ease: 'expo.out' } });

// Initial states
gsap.set(['.hero-logo', '.hero-title__word', '.hero-sub', '.hero-cta', '.hero-trust'], { opacity: 0 });

if (!prefersReducedMotion()) {
  heroTimeline
    .to('.hero-logo', { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.2 })
    .to('.hero-title__word', { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, '-=0.6')
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
    .to('.hero-trust', { opacity: 1, y: 0, duration: 0.8 }, '-=0.2');
} else {
  gsap.set(['.hero-logo', '.hero-title__word', '.hero-sub', '.hero-cta', '.hero-trust'], { opacity: 1, y: 0, scale: 1 });
}

// Animate counters when hero-trust enters
ScrollTrigger.create({
  trigger: '.hero-trust',
  start: 'top 80%',
  onEnter: () => {
    document.querySelectorAll('.hero-trust__value[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      animateCounter(el, target);
    });
  },
  once: true
});

// Parallax orbs
gsap.to('.orb-1', { y: -100, x: 50, rotation: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top bottom', end: 'bottom top', scrub: 1 } });
gsap.to('.orb-2', { y: 80, x: -40, rotation: -8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top bottom', end: 'bottom top', scrub: 1 } });
gsap.to('.orb-3', { y: 60, x: 30, rotation: 5, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top bottom', end: 'bottom top', scrub: 1 } });

// Hero scroll indicator fade
gsap.to('.hero-scroll', { opacity: 0, y: -20, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=300', scrub: true } });

// ========================================
// SECTION REVEAL ANIMATIONS
// ========================================

const revealSections = (selector, stagger = 0.1) => {
  gsap.utils.toArray(selector).forEach(section => {
    const tag = section.querySelector('.section-tag');
    const title = section.querySelector('.section-title');
    const sub = section.querySelector('.section-sub');

    gsap.from([tag, title, sub].filter(Boolean), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  });
};

revealSections('.section-header');

// ========================================
// CURSOS CARDS
// ========================================

const cursosGrid = document.getElementById('cursos-grid');
const cursosCta = document.getElementById('cursos-cta');

cursosData.forEach((curso, i) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.innerHTML = `
    <div class="card-icon" aria-hidden="true">${curso.icon}</div>
    <h3>${curso.title}</h3>
    <p>${curso.desc}</p>
  `;
  cursosGrid.appendChild(card);
});

gsap.to('.section--cursos .card', {
  opacity: 1,
  y: 0,
  duration: 0.7,
  stagger: 0.08,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#cursos-grid',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

gsap.to('#cursos-cta', {
  opacity: 1,
  y: 0,
  duration: 0.7,
  delay: 0.3,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#cursos-cta',
    start: 'top 90%',
    toggleActions: 'play none none reverse'
  }
});

// ========================================
// FAIR COMPETITION SECTION
// ========================================

const fairPrinciples = document.getElementById('fair-principles');
fairPrinciplesData.forEach((p, i) => {
  const el = document.createElement('article');
  el.className = 'principle';
  el.style.opacity = '0';
  el.style.transform = 'translateX(-30px)';
  el.innerHTML = `
    <div class="principle-icon" aria-hidden="true">${p.icon}</div>
    <div>
      <h4>${p.title}</h4>
      <span>${p.desc}</span>
    </div>
  `;
  fairPrinciples.appendChild(el);
});

gsap.to('#fair-principles .principle', {
  opacity: 1,
  x: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#fair-principles',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

gsap.to('#fair-cta', {
  opacity: 1,
  y: 0,
  duration: 0.6,
  delay: 0.4,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#fair-cta',
    start: 'top 90%',
    toggleActions: 'play none none reverse'
  }
});

// Balance scale scroll rotation
gsap.to('.scale-beam', {
  rotation: 3,
  transformOrigin: 'center center',
  ease: 'none',
  scrollTrigger: {
    trigger: '.fair-visual',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

// Floating labels parallax
gsap.to('.fair-float--1', { y: -30, x: 20, ease: 'none', scrollTrigger: { trigger: '.fair-visual', start: 'top bottom', end: 'bottom top', scrub: 1 } });
gsap.to('.fair-float--2', { y: 25, x: -15, ease: 'none', scrollTrigger: { trigger: '.fair-visual', start: 'top bottom', end: 'bottom top', scrub: 1 } });
gsap.to('.fair-float--3', { y: -20, x: 10, ease: 'none', scrollTrigger: { trigger: '.fair-visual', start: 'top bottom', end: 'bottom top', scrub: 1 } });

// Fair orb parallax
gsap.to('.fair-orb', { scale: 1.2, rotation: 180, ease: 'none', scrollTrigger: { trigger: '.section--fair', start: 'top bottom', end: 'bottom top', scrub: 1 } });

// ========================================
// VAGAS SECTION
// ========================================

const vagasGrid = document.getElementById('vagas-grid');
const vagasToolbar = document.getElementById('vagas-toolbar');

vagasData.forEach((vaga, i) => {
  const card = document.createElement('article');
  card.className = 'card card--vaga';
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.innerHTML = `
    <div class="vaga-header">
      <div class="vaga-company">
        <div class="vaga-company__logo" aria-hidden="true">${vaga.logo}</div>
        <span class="vaga-company__name">${vaga.company}</span>
      </div>
      ${vaga.badge ? '<span class="vaga-badge">' + vaga.badge + '</span>' : ''}
    </div>
    <h3 class="vaga-title">${vaga.title}</h3>
    <div class="vaga-meta">
      <span class="vaga-meta__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${vaga.location}</span>
      <span class="vaga-meta__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>${vaga.regime}</span>
      <span class="vaga-meta__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>${vaga.tags[0]}</span>
    </div>
    <div class="vaga-footer">
      <span class="vaga-salary">${vaga.salary}/mês</span>
      <span class="vaga-deadline">${vaga.deadline}</span>
    </div>
  `;
  vagasGrid.appendChild(card);
});

gsap.to('.section--vagas .card', {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.06,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#vagas-grid',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

gsap.to('#vagas-toolbar', {
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#vagas-toolbar',
    start: 'top 85%',
    toggleActions: 'play none none reverse'
  }
});

gsap.to('#vagas-cta', {
  opacity: 1,
  y: 0,
  duration: 0.7,
  delay: 0.3,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#vagas-cta',
    start: 'top 90%',
    toggleActions: 'play none none reverse'
  }
});

// ========================================
// EMPRESAS MARQUEE
// ========================================

const marqueeTrack = document.querySelector('.marquee-track');

function renderMarquee() {
  empresasLogos.forEach(emp => {
    const wrapper = document.createElement('div');
    wrapper.className = 'empresa-logo';
    wrapper.setAttribute('aria-label', emp.name);
    wrapper.innerHTML = emp.svg;
    marqueeTrack.appendChild(wrapper);
  });
  // Duplicate for seamless loop
  const clone = marqueeTrack.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  document.getElementById('empresas-marquee').appendChild(clone);
}
renderMarquee();

// ========================================
// DEPOIMENTOS SLIDER
// ========================================

const depoimentosTrack = document.querySelector('.depoimentos-track');
const depoimentosDots = document.getElementById('depoimentos-dots');
const depoimentosPrev = document.getElementById('depoimentos-prev');
const depoimentosNext = document.getElementById('depoimentos-next');

let currentSlide = 0;
const slidesPerView = () => {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};
const totalSlides = depoimentosData.length;
const maxSlide = Math.max(0, totalSlides - slidesPerView());

depoimentosData.forEach((d, i) => {
  const card = document.createElement('div');
  card.className = 'depoimento-card';
  card.innerHTML = `
    <div class="depoimento-inner">
      <div class="depoimento-header">
        <div class="depoimento-avatar" aria-hidden="true">${d.avatar}</div>
        <div class="depoimento-author">
          <span class="depoimento-name">${d.name}</span>
          <span class="depoimento-role">${d.role}</span>
        </div>
      </div>
      <p class="depoimento-text">${d.text}</p>
      <div class="depoimento-stars" aria-label="5 estrelas">
        ${'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(5)}
      </div>
    </div>
  `;
  depoimentosTrack.appendChild(card);

  // Dots
  const dot = document.createElement('button');
  dot.className = 'depoimentos-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('role', 'tab');
  dot.setAttribute('aria-label', 'Depoimento ' + (i + 1));
  dot.dataset.index = i;
  depoimentosDots.appendChild(dot);
});

function updateSlider() {
  const card = depoimentosTrack.querySelector('.depoimento-card');
  if (!card) return;
  const cardWidth = card.offsetWidth;
  const gap = 24;
  const offset = currentSlide * (cardWidth + gap);
  depoimentosTrack.style.transform = 'translateX(-' + offset + 'px)';

  depoimentosDots.querySelectorAll('.depoimentos-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });

  depoimentosPrev.disabled = currentSlide === 0;
  depoimentosNext.disabled = currentSlide >= maxSlide;
}

function goToSlide(index) {
  currentSlide = Math.max(0, Math.min(index, maxSlide));
  updateSlider();
}

depoimentosPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
depoimentosNext.addEventListener('click', () => goToSlide(currentSlide + 1));

depoimentosDots.addEventListener('click', (e) => {
  const dot = e.target.closest('.depoimentos-dot');
  if (dot) goToSlide(parseInt(dot.dataset.index, 10));
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
  if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
});

// Touch swipe
let touchStartX = 0;
depoimentosTrack.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
depoimentosTrack.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) goToSlide(currentSlide + 1);
    else goToSlide(currentSlide - 1);
  }
}, { passive: true });

// Recalculate on resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    goToSlide(currentSlide);
  }, 150);
});

// Animate slider entrance
gsap.from('.section--depoimentos .depoimento-card', {
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.1,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#depoimentos-slider',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

gsap.from('.depoimentos-nav', {
  opacity: 0,
  y: 20,
  duration: 0.6,
  delay: 0.3,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '.depoimentos-nav',
    start: 'top 90%',
    toggleActions: 'play none none reverse'
  }
});

// ========================================
// FOOTER CTA
// ========================================

gsap.to('#footer-cta-content > *', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: 'expo.out',
  scrollTrigger: {
    trigger: '#footer-cta-content',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

// Footer orb parallax
gsap.to('.footer-cta-orb', { scale: 1.15, y: -50, ease: 'none', scrollTrigger: { trigger: '.section--footer-cta', start: 'top bottom', end: 'bottom top', scrub: 1 } });

// ========================================
// BUTTON HOVER EFFECTS
// ========================================

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.02, duration: 0.3, ease: 'back.out(1.5)' }));
  btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.3, ease: 'expo.out' }));
  btn.addEventListener('mousedown', () => gsap.to(btn, { scale: 0.98, duration: 0.1 }));
  btn.addEventListener('mouseup', () => gsap.to(btn, { scale: 1.02, duration: 0.1 }));
});

// ========================================
// CARD MAGNETIC EFFECT
// ========================================

document.querySelectorAll('.card:not(.card--vaga)').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, { x: x * 0.08, y: y * 0.08, duration: 0.3, ease: 'expo.out' });
  });
  card.addEventListener('mouseleave', () => gsap.to(card, { x: 0, y: 0, duration: 0.5, ease: 'expo.out' }));
});

// ========================================
// VAGAS TOTAL COUNTER
// ========================================

const vagaTotalEl = document.querySelector('.vagas-total');
if (vagaTotalEl) {
  ScrollTrigger.create({
    trigger: '#vagas-cta',
    start: 'top 85%',
    onEnter: () => animateCounter(vagaTotalEl, 2840),
    once: true
  });
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================

const progressBar = document.createElement('div');
progressBar.style.cssText = 'position:fixed;top:0;left:0;right:0;height:3px;background:linear-gradient(135deg,#7ED957 0%,#5CC93A 100%);transform-origin:left;transform:scaleX(0);z-index:9999;pointer-events:none;';
document.body.appendChild(progressBar);

ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate: (self) => {
    gsap.set(progressBar, { scaleX: self.progress });
  }
});

// ========================================
// REFRESH & READY
// ========================================

setTimeout(() => ScrollTrigger.refresh(), 100);

console.log('%c🚀 JovApp — Site carregado com animações fluidas', 'color: #7ED957; font-size: 14px; font-weight: bold;');