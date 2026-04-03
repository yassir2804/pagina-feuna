/* FEUNA - main.js */

// ============ HEADER / FOOTER INJECTION ============
function renderHeader() {
  const nav = [
    { label: 'Inicio', href: 'index.html', icon: 'fa-home', sub: [] },
    { label: 'FEUNA', href: 'feuna.html', icon: 'fa-university', sub: [
      { label: '¿Qué es la FEUNA?', href: 'feuna.html', icon: 'fa-info-circle' },
      { label: 'Misión, Visión y Principios', href: 'feuna.html#mision', icon: 'fa-bullseye' },
      { label: 'Historia y Logros', href: 'historia.html', icon: 'fa-history' },
      { label: 'Estructura Organizativa', href: 'feuna.html#estructura', icon: 'fa-sitemap' },
      { label: 'Estatuto y Reglamentos', href: 'pages/reglamentos.html', icon: 'fa-file-alt' },
      { label: 'Plan de Trabajo', href: 'pages/plan-trabajo.html', icon: 'fa-tasks' },
    ]},
    { label: 'Representación', href: 'deuna.html', icon: 'fa-users', sub: [
      { label: 'DEUNA', href: 'deuna.html', icon: 'fa-star' },
      { label: 'CAEUNA', href: 'pages/caeuna.html', icon: 'fa-landmark' },
      { label: 'TEEUNA', href: 'pages/teeuna.html', icon: 'fa-vote-yea' },
      { label: 'Asociaciones Estudiantiles', href: 'pages/asociaciones.html', icon: 'fa-users-cog' },
      { label: 'Representación en CU y CONSACA', href: 'pages/representacion-cu.html', icon: 'fa-user-tie' },
      { label: 'Transparencia', href: 'pages/transparencia.html', icon: 'fa-eye' },
    ]},
    { label: 'Noticias', href: 'pages/noticias.html', icon: 'fa-newspaper', sub: [
      { label: 'Todas las Noticias', href: 'pages/noticias.html', icon: 'fa-th-large' },
      { label: 'Eventos y Actividades', href: 'pages/eventos.html', icon: 'fa-calendar' },
      { label: 'Boletines y Newsletter', href: 'pages/boletines.html', icon: 'fa-envelope' },
    ]},
    { label: 'Trámites', href: 'pages/tramites.html', icon: 'fa-file-invoice', sub: [
      { label: 'Formularios Digitales', href: 'pages/tramites.html', icon: 'fa-wpforms' },
      { label: 'E-Peticiones', href: 'pages/epeticiones.html', icon: 'fa-paper-plane' },
      { label: 'Reserva de Espacios', href: 'pages/reservas.html', icon: 'fa-calendar-check' },
      { label: 'Archivo Digital', href: 'pages/archivo.html', icon: 'fa-folder-open' },
      { label: 'Preguntas Frecuentes (FAQ)', href: 'pages/faq.html', icon: 'fa-question-circle' },
    ]},
    { label: 'Servicios', href: 'pages/servicios.html', icon: 'fa-hands-helping', sub: [
      { label: '💰 Becas y Apoyo (SIBEUNA)', href: 'pages/becas.html', icon: 'fa-dollar-sign' },
      { label: 'Salud y Bienestar', href: 'pages/salud.html', icon: 'fa-heartbeat' },
      { label: 'Vida Universitaria', href: 'pages/vida-universitaria.html', icon: 'fa-graduation-cap' },
      { label: 'Sistemas UNA', href: 'pages/sistemas.html', icon: 'fa-laptop' },
      { label: 'Guías y Manuales', href: 'pages/guias.html', icon: 'fa-book-open' },
    ]},
    { label: 'Oportunidades', href: 'pages/oportunidades.html', icon: 'fa-rocket', sub: [
      { label: 'Bolsa de Empleo', href: 'pages/oportunidades.html#empleo', icon: 'fa-briefcase' },
      { label: 'Becas al Extranjero', href: 'pages/oportunidades.html#becas-ext', icon: 'fa-globe' },
      { label: 'Voluntariados', href: 'pages/oportunidades.html#voluntariado', icon: 'fa-hands-helping' },
      { label: 'Concursos', href: 'pages/oportunidades.html#concursos', icon: 'fa-trophy' },
    ]},
    { label: 'Participación', href: 'pages/participacion.html', icon: 'fa-hand-point-up', sub: [
      { label: '¡Sé Parte de FEUNA!', href: 'pages/participacion.html', icon: 'fa-star' },
      { label: 'Propuestas y Peticiones', href: 'pages/epeticiones.html', icon: 'fa-paper-plane' },
      { label: 'Contacto', href: 'pages/contacto.html', icon: 'fa-envelope' },
      { label: 'Canal de Denuncias', href: 'pages/denuncias.html', icon: 'fa-bullhorn' },
    ]},
  ];

  const fullPath = window.location.pathname;
  const current = fullPath.split('/').pop() || 'index.html';

  function isActive(href) {
    const hrefFile = href.split('/').pop().split('#')[0];
    return current === hrefFile || (current === '' && hrefFile === 'index.html');
  }

  const html = `
  <header class="site-header" id="site-header">
    <div class="header-top">
      <div class="container">
        <div class="header-top-inner">
          <div class="header-top-left">
            <a href="tel:+50622773236" class="header-top-link"><i class="fas fa-phone"></i> (506) 2277-3236</a>
            <a href="mailto:comunicacionfeuna@una.cr" class="header-top-link"><i class="fas fa-envelope"></i> comunicacionfeuna@una.cr</a>
          </div>
          <div class="header-top-right">
            <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-icon" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <div class="header-main-inner">
          <a href="index.html" class="logo-wrap">
            <div class="logo-icon"><span>FE</span></div>
            <div>
              <div class="logo-text-main">FEUNA</div>
              <div class="logo-text-sub">Federación de Estudiantes UNA</div>
            </div>
          </a>
          <nav class="main-nav" id="main-nav">
            ${nav.map(item => `
              <div class="nav-item">
                <a href="${item.href}" class="nav-link ${isActive(item.href) ? 'active' : ''}">
                  ${item.label}
                  ${item.sub.length ? '<i class="fas fa-chevron-down chevron"></i>' : ''}
                </a>
                ${item.sub.length ? `
                  <div class="dropdown">
                    ${item.sub.map(s => `
                      <a href="${s.href}" class="dropdown-link">
                        <i class="fas ${s.icon}"></i>${s.label}
                      </a>`).join('')}
                  </div>` : ''}
              </div>`).join('')}
          </nav>
          <div class="header-actions">
            <a href="pages/defensor.html" class="btn-help"><i class="fas fa-shield-alt"></i> Defensoría</a>
            <a href="pages/participacion.html" class="btn-se-parte">Sé Parte</a>
            <button class="hamburger" id="hamburger-btn" aria-label="Menú">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Mobile Nav -->
  <div class="overlay" id="nav-overlay"></div>
  <nav class="mobile-nav" id="mobile-nav">
    <div class="mobile-nav-header">
      <div class="logo-wrap">
        <div class="logo-icon"><span>FE</span></div>
        <div class="logo-text-main">FEUNA</div>
      </div>
      <button class="mobile-nav-close" id="nav-close">&times;</button>
    </div>
    <ul class="mobile-nav-list">
      ${nav.map((item, i) => `
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" data-mobile-toggle="${i}">
            ${item.label}
            ${item.sub.length ? '<i class="fas fa-chevron-down"></i>' : ''}
          </div>
          ${item.sub.length ? `
            <div class="mobile-dropdown" id="mobile-sub-${i}">
              ${item.sub.map(s => `<a href="${s.href}" class="mobile-dropdown-link">${s.label}</a>`).join('')}
            </div>` : ''}
        </li>`).join('')}
    </ul>
    <div style="padding:16px 20px; border-top:1px solid var(--gris-borde); margin-top:8px;">
      <a href="pages/defensor.html" class="btn-help" style="width:100%;justify-content:center;margin-bottom:10px;display:flex"><i class="fas fa-shield-alt"></i> Defensoría</a>
      <a href="pages/participacion.html" class="btn-se-parte" style="width:100%;display:flex;justify-content:center;padding:11px">Sé Parte de FEUNA</a>
    </div>
  </nav>`;

  const ph = document.getElementById('header-placeholder');
  if (ph) ph.outerHTML = html;

  // Events
  document.getElementById('hamburger-btn')?.addEventListener('click', openMobileNav);
  document.getElementById('nav-close')?.addEventListener('click', closeMobileNav);
  document.getElementById('nav-overlay')?.addEventListener('click', closeMobileNav);
  document.querySelectorAll('[data-mobile-toggle]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.mobileToggle;
      const sub = document.getElementById(`mobile-sub-${id}`);
      if (sub) sub.classList.toggle('open');
    });
  });
}

function openMobileNav() {
  document.getElementById('mobile-nav')?.classList.add('open');
  document.getElementById('nav-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobile-nav')?.classList.remove('open');
  document.getElementById('nav-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderFooter() {
  const html = `
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo-wrap">
              <div class="logo-icon"><span>FE</span></div>
              <div>
                <div class="logo-text-main">FEUNA</div>
                <div class="logo-text-sub">Federación de Estudiantes UNA</div>
              </div>
            </a>
            <p class="footer-desc">La voz del estudiantado de la Universidad Nacional de Costa Rica desde 1974. Defendemos tus derechos y construimos el movimiento estudiantil.</p>
            <div class="footer-socials">
              <a href="#" class="footer-social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="footer-social"><i class="fab fa-instagram"></i></a>
              <a href="#" class="footer-social"><i class="fab fa-twitter"></i></a>
              <a href="#" class="footer-social"><i class="fab fa-youtube"></i></a>
              <a href="#" class="footer-social"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div>
            <p class="footer-col-title">FEUNA</p>
            <ul class="footer-links">
              <li><a href="feuna.html">¿Qué es la FEUNA?</a></li>
              <li><a href="historia.html">Historia y Logros</a></li>
              <li><a href="feuna.html#estructura">Estructura Organizativa</a></li>
              <li><a href="pages/reglamentos.html">Estatuto y Reglamentos</a></li>
              <li><a href="pages/plan-trabajo.html">Plan de Trabajo</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Servicios</p>
            <ul class="footer-links">
              <li><a href="pages/becas.html">Becas SIBEUNA</a></li>
              <li><a href="pages/salud.html">Salud y Bienestar</a></li>
              <li><a href="pages/sistemas.html">Bibliotecas (SIDUNA)</a></li>
              <li><a href="pages/defensor.html">Defensoría Estudiantil</a></li>
              <li><a href="pages/guias.html">Guías y Manuales</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Participación</p>
            <ul class="footer-links">
              <li><a href="pages/participacion.html">Sé Parte de FEUNA</a></li>
              <li><a href="pages/epeticiones.html">E-Peticiones</a></li>
              <li><a href="pages/tramites.html">Formularios Digitales</a></li>
              <li><a href="pages/transparencia.html">Transparencia</a></li>
              <li><a href="pages/denuncias.html">Canal de Denuncias</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Contacto</p>
            <ul class="footer-links">
              <li><a href="mailto:comunicacionfeuna@una.cr"><i class="fas fa-envelope"></i> comunicacionfeuna@una.cr</a></li>
              <li><a href="tel:+50622773236"><i class="fas fa-phone"></i> (506) 2277-3236</a></li>
              <li><a href="#"><i class="fas fa-map-marker-alt"></i> Heredia, Costa Rica</a></li>
              <li><a href="pages/contacto.html">Formulario de contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p>© 2025 FEUNA – Federación de Estudiantes de la Universidad Nacional. Todos los derechos reservados.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos de Uso</a>
            <a href="pages/contacto.html">Contacto</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Chatbot flotante -->
  <button class="chatbot-btn" title="¿Necesitás ayuda?"><i class="fas fa-comment-dots"></i></button>`;

  const ph = document.getElementById('footer-placeholder');
  if (ph) ph.outerHTML = html;
}

// ============ ACCORDION ============
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('open'));
      // Open clicked
      if (!isOpen) { body.classList.add('open'); header.classList.add('open'); }
    });
  });
}

// ============ FILTERS ============
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.filter-bar');
      parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const target = btn.dataset.target;
      if (target) {
        document.querySelectorAll(`[data-category]`).forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      }
    });
  });
}

// ============ EJE TAGS ============
function initEjeTags() {
  document.querySelectorAll('.eje-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.eje-tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
    });
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initAccordions();
  initFilters();
  initEjeTags();
});
