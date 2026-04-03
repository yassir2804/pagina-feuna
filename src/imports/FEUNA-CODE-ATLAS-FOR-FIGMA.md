# FEUNA Code Atlas for Figma

Este documento reúne el código fuente central del proyecto FEUNA en formato Markdown para que Figma AI y Claude Opus puedan leer la estructura real del sitio, sus componentes compartidos, su sistema visual y sus rutas principales sin perder contexto.

No pretende reemplazar el repositorio. Su función es servir como atlas de referencia con:
- HTML compartido y estructural
- CSS base y componentes visuales
- JS de soporte para interacciones existentes
- índice de páginas HTML disponibles
- notas de uso para Figma AI

Si quieres la fuente estandarizada de tokens, assets y reglas, usa también [FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml](FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml).

---

## 1. Mapa de archivos HTML y CSS existentes

### 1.1 HTML en `mockup/`
- [mockup/index.html](mockup/index.html)
- [mockup/feuna.html](mockup/feuna.html)
- [mockup/deuna.html](mockup/deuna.html)
- [mockup/noticias.html](mockup/noticias.html)
- [mockup/servicios.html](mockup/servicios.html)
- [mockup/oportunidades.html](mockup/oportunidades.html)
- [mockup/participacion.html](mockup/participacion.html)
- [mockup/transparencia.html](mockup/transparencia.html)
- [mockup/caeuna.html](mockup/caeuna.html)
- [mockup/teeuna.html](mockup/teeuna.html)
- [mockup/cefeuna.html](mockup/cefeuna.html)
- [mockup/mei.html](mockup/mei.html)
- [mockup/defensor.html](mockup/defensor.html)
- [mockup/asociaciones.html](mockup/asociaciones.html)
- [mockup/representacion-cu.html](mockup/representacion-cu.html)
- [mockup/archivo.html](mockup/archivo.html)
- [mockup/becas.html](mockup/becas.html)
- [mockup/salud.html](mockup/salud.html)
- [mockup/guias.html](mockup/guias.html)
- [mockup/vida-universitaria.html](mockup/vida-universitaria.html)
- [mockup/sistemas.html](mockup/sistemas.html)
- [mockup/tramites.html](mockup/tramites.html)
- [mockup/reservas.html](mockup/reservas.html)
- [mockup/epeticiones.html](mockup/epeticiones.html)
- [mockup/faq.html](mockup/faq.html)
- [mockup/boletines.html](mockup/boletines.html)
- [mockup/eventos.html](mockup/eventos.html)
- [mockup/denuncias.html](mockup/denuncias.html)
- [mockup/contacto.html](mockup/contacto.html)
- [mockup/reglamentos.html](mockup/reglamentos.html)
- [mockup/plan-trabajo.html](mockup/plan-trabajo.html)
- [mockup/index-backup-original.html](mockup/index-backup-original.html)
- [mockup/temp-extract.html](mockup/temp-extract.html)

### 1.2 CSS en `mockup/css/`
- [mockup/css/styles.css](mockup/css/styles.css) - hoja base canonical
- [mockup/css/styles-clean.css](mockup/css/styles-clean.css) - variante limpia
- [mockup/css/styles-temp.css](mockup/css/styles-temp.css) - variante temporal
- [mockup/css/styles-backup-corrupto.css](mockup/css/styles-backup-corrupto.css) - respaldo histórico

### 1.3 Componentes compartidos
- [mockup/common/header.html](mockup/common/header.html)
- [mockup/common/footer.html](mockup/common/footer.html)
- [mockup/js/main.js](mockup/js/main.js)

---

## 2. Código HTML compartido

### 2.1 `mockup/common/header.html`
```html
<!-- HEADER - DOS NIVELES -->
<header class="main-header">
    <!-- Top Bar: Logo, Redes Sociales, Búsqueda -->
    <div class="top-bar">
        <div class="container-full">
            <div class="top-bar-content">
                <div class="logo">
                    <a href="index.html">
                        <img src="images/logo-feuna.png" alt="FEUNA - Federación de Estudiantes UNA" class="logo-img">
                    </a>
                </div>
                
                <div class="header-right">
                    <div class="header-search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Buscar...">
                    </div>
                    
                    <div class="social-icons">
                        <a href="https://www.facebook.com/feunaoficial" target="_blank" class="social-link" aria-label="Facebook">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/feuna_oficial" target="_blank" class="social-link" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Navigation Bar: 7 secciones balanceadas - STICKY -->
    <div class="nav-bar">
        <div class="container-full">
            <div class="header-content">
                <nav class="main-nav">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">Inicio</a>
                        </li>

                        <li class="nav-item has-dropdown">
                            <a href="feuna.html" class="nav-link">Sobre FEUNA</a>
                            <ul class="dropdown-menu">
                                <li><a href="feuna.html"><i class="fas fa-info-circle"></i> ¿Qué es la FEUNA?</a></li>
                                <li><a href="archivo.html"><i class="fas fa-archive"></i> Historia y archivos</a></li>
                                <li><a href="reglamentos.html"><i class="fas fa-gavel"></i> Estatuto y reglamentos</a></li>
                            </ul>
                        </li>

                        <li class="nav-item has-dropdown">
                            <a href="#" class="nav-link">Órganos</a>
                            <ul class="dropdown-menu">
                                <li><a href="deuna.html"><i class="fas fa-users-cog"></i> DEUNA (Directorio Ejecutivo)</a></li>
                                <li><a href="caeuna.html"><i class="fas fa-landmark"></i> CAEUNA (Consejo de Asociaciones)</a></li>
                                <li><a href="teeuna.html"><i class="fas fa-balance-scale"></i> TEEUNA (Tribunal Electoral)</a></li>
                                <li><a href="cefeuna.html"><i class="fas fa-search-dollar"></i> CEFEUNA (Contraloría Estudiantil)</a></li>
                                <li><a href="mei.html"><i class="fas fa-feather-alt"></i> MEI (Movimiento Est. Indígena)</a></li>
                                <li><a href="defensor.html"><i class="fas fa-shield-alt"></i> Defensoría Estudiantil</a></li>
                                <li><a href="asociaciones.html"><i class="fas fa-users"></i> Asociaciones estudiantiles</a></li>
                                <li><a href="representacion-cu.html"><i class="fas fa-university"></i> Representación en órganos UNA</a></li>
                            </ul>
                        </li>

                        <li class="nav-item has-dropdown">
                            <a href="#" class="nav-link">Participá</a>
                            <ul class="dropdown-menu">
                                <li><a href="epeticiones.html"><i class="fas fa-file-signature"></i> E-Peticiones</a></li>
                                <li><a href="participacion.html"><i class="fas fa-hand-holding-heart"></i> Formas de participación</a></li>
                                <li><a href="plan-trabajo.html"><i class="fas fa-tasks"></i> Plan de trabajo</a></li>
                                <li><a href="transparencia.html"><i class="fas fa-chart-pie"></i> Transparencia</a></li>
                                <li><a href="oportunidades.html"><i class="fas fa-bullhorn"></i> Oportunidades</a></li>
                            </ul>
                        </li>

                        <li class="nav-item has-dropdown">
                            <a href="#" class="nav-link">Servicios</a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-subtitle"><i class="fas fa-cog"></i> Gestionados por FEUNA</li>
                                <li><a href="tramites.html"><i class="fas fa-file-invoice-dollar"></i> Exoneración y trámites</a></li>
                                <li><a href="defensor.html"><i class="fas fa-shield-virus"></i> Defensoría</a></li>
                                <li><a href="servicios.html"><i class="fas fa-hands-helping"></i> Orientación y servicios</a></li>
                                <li class="dropdown-divider"></li>
                                <li class="dropdown-subtitle"><i class="fas fa-university"></i> Enlaces a Servicios UNA</li>
                                <li><a href="becas.html"><i class="fas fa-dollar-sign"></i> Becas y apoyo económico</a></li>
                                <li><a href="salud.html"><i class="fas fa-heartbeat"></i> Salud y bienestar</a></li>
                                <li><a href="guias.html"><i class="fas fa-book"></i> Guías y recursos</a></li>
                                <li><a href="vida-universitaria.html"><i class="fas fa-graduation-cap"></i> Vida universitaria</a></li>
                                <li><a href="sistemas.html"><i class="fas fa-desktop"></i> Plataformas y sistemas</a></li>
                            </ul>
                        </li>

                        <li class="nav-item has-dropdown">
                            <a href="noticias.html" class="nav-link">Noticias</a>
                            <ul class="dropdown-menu">
                                <li><a href="noticias.html"><i class="fas fa-newspaper"></i> Todas las noticias</a></li>
                                <li><a href="eventos.html"><i class="fas fa-calendar-alt"></i> Eventos y calendario</a></li>
                                <li><a href="boletines.html"><i class="fas fa-file-alt"></i> Boletines</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="contacto.html" class="nav-link">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <button class="mobile-menu-btn" aria-label="Menú">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </div>
</header>
```

### 2.2 `mockup/common/footer.html`
```html
<!-- FOOTER -->
<footer class="main-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h3 class="footer-title">FEUNA</h3>
                <ul class="footer-links">
                    <li><a href="feuna.html">¿Qué es la FEUNA?</a></li>
                    <li><a href="#">Estructura organizativa</a></li>
                    <li><a href="#">Historia</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3 class="footer-title">Servicios</h3>
                <ul class="footer-links">
                    <li><a href="#">Exoneración</a></li>
                    <li><a href="#">Defensoría</a></li>
                    <li><a href="#">Orientación</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3 class="footer-title">Sitios de Interés</h3>
                <ul class="footer-links">
                    <li><a href="https://eis.una.ac.cr/authenticationendpoint/login.do?Name=PreLoginRequestProcessor&TARGET=https%3A%2F%2Fstudentssb.una.ac.cr%2FStudentRegistrationSsb%2Fj_spring_cas_security_check&commonAuthCallerPath=%252Fcas%252Flogin&forceAuth=true&passiveAuth=false&tenantDomain=carbon.super&sessionDataKey=75fc2add-e5c3-4f47-8c8b-d228b6b108ba&relyingParty=XEREGISPROD&type=cas&sp=XEREGISPROD&isSaaSApp=false&authenticators=BasicAuthenticator%3ALOCAL" target="_blank" class="footer-external-link">Banner de Matrícula</a></li>
                    <li><a href="https://www.sibeuna.una.ac.cr/sibeuna-web/becas.jsf" target="_blank" class="footer-external-link">Sibeuna (Becas)</a></li>
                    <li><a href="http://www.fiscalia.una.ac.cr/index.php/es/" target="_blank" class="footer-external-link">Fiscalía de Hostigamiento Sexual</a></li>
                    <li><a href="https://www.vidaestudiantil.una.ac.cr/" target="_blank" class="footer-external-link">Vida Estudiantil</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3 class="footer-title">Contacto</h3>
                <ul class="footer-links">
                    <li><i class="fas fa-phone"></i> (506) 2277-3236</li>
                    <li><i class="fas fa-envelope"></i> feuna@una.cr</li>
                    <li><i class="fas fa-map-marker-alt"></i> <a href="https://maps.app.goo.gl/6M6tiaTXEStFr3Yw9" target="_blank" class="footer-external-link">Heredia, Costa Rica</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-social">
            <h3 class="footer-title">Redes Sociales</h3>
            <div class="social-icons-footer">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2025 FEUNA - Todos los derechos reservados</p>
            <div class="footer-legal">
                <a href="#">Política de Privacidad</a>
                <a href="#">Términos de Uso</a>
            </div>
        </div>
    </div>
</footer>
```

---

## 3. Código JavaScript de soporte

### 3.1 `mockup/js/main.js`
```javascript
// ============================================
// FEUNA - Mockup Funcional
// JavaScript para interactividad básica
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== CARGAR HEADER Y FOOTER COMUNES ==========
    loadCommonComponents();
    
    // ========== MOBILE MENU ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ========== HERO SLIDESHOW ==========
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        if (heroSlides.length > 1) {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }
    }
    
    // Cambiar slide cada 5 segundos
    if (heroSlides.length > 1) {
        setInterval(nextSlide, 5000);
    }
    
    // ========== SCROLL HEADER ==========
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (header) {
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
            } else {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
            }
        }

        lastScroll = currentScroll;
    });
    
    // ========== FILTRO DE EJES ==========
    const tagButtons = document.querySelectorAll('.tag-btn');
    
    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eje = this.getAttribute('data-eje');
            
            // Remover clase active de todos los botones
            tagButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Aquí iría la lógica de filtrado de noticias
            console.log('Filtrando por eje:', eje);
            
            // Scroll suave a la sección de noticias
            const noticiasSection = document.querySelector('.noticias-section');
            if (noticiasSection) {
                noticiasSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ========== ANIMACIONES AL SCROLL ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.eje-card, .noticia-card, .evento-item, .servicio-btn');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ========== SEARCH FUNCTIONALITY ==========
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Aquí iría la lógica del buscador
            const searchQuery = prompt('¿Qué estás buscando?');
            
            if (searchQuery) {
                console.log('Buscando:', searchQuery);
                // Redirigir a página de resultados o mostrar modal
                alert('Función de búsqueda en desarrollo. Buscando: ' + searchQuery);
            }
        });
    }
    
    // ========== CONTADOR DE EVENTOS ==========
    function updateEventCountdown() {
        const eventDates = document.querySelectorAll('.evento-date');
        
        eventDates.forEach(dateElement => {
            const day = dateElement.querySelector('.evento-day').textContent;
            const month = dateElement.querySelector('.evento-month').textContent;
            
            // Aquí se podría agregar lógica para calcular días restantes
            // y mostrar un contador dinámico
        });
    }
    
    updateEventCountdown();
    
    // ========== LAZY LOADING DE IMÁGENES ==========
    const lazyImages = document.querySelectorAll('.noticia-image, .hero-slide');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                // Aquí se cargaría la imagen real si estuviera en data-src
                image.classList.add('loaded');
                imageObserver.unobserve(image);
            }
        });
    });
    
    lazyImages.forEach(image => imageObserver.observe(image));
    
    // ========== VALIDACIÓN DE FORMULARIOS ==========
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica de validación
            const formData = new FormData(form);
            console.log('Formulario enviado:', Object.fromEntries(formData));
            
            // Mostrar mensaje de éxito
            alert('¡Formulario enviado correctamente!');
        });
    });
    
    // ========== TOOLTIPS ==========
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            tooltip.style.cssText = `
                position: absolute;
                background-color: #000;
                color: #fff;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 14px;
                z-index: 10000;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
    
    // ========== ANALYTICS TRACKING (simulado) ==========
    function trackEvent(category, action, label) {
        console.log('Analytics Event:', { category, action, label });
        // Aquí se integraría Google Analytics o similar
    }
    
    // Track clicks en botones principales
    document.querySelectorAll('.hero-btn, .btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const label = this.textContent.trim();
            trackEvent('Button', 'Click', label);
        });
    });
    
    // Track clicks en ejes
    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eje = this.getAttribute('data-eje');
            trackEvent('Eje', 'Filter', eje);
        });
    });
    
    // ========== ACCESIBILIDAD ==========
    // Agregar atributos ARIA dinámicamente
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.classList.contains('active')) {
            link.setAttribute('aria-current', 'page');
        }
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        // ESC para cerrar menú móvil
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            mobileMenuBtn.click();
        }
    });
    
    // ========== PERFORMANCE ==========
    // Log de tiempos de carga
    window.addEventListener('load', function() {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Tiempo de carga:', pageLoadTime + 'ms');
    });
    
    console.log('FEUNA Mockup cargado correctamente ✓');
});

// ========== CARGAR COMPONENTES COMUNES ==========
async function loadCommonComponents() {
    // Cargar header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        try {
            const response = await fetch('common/header.html');
            const html = await response.text();
            headerPlaceholder.innerHTML = html;
            initializeHeaderEvents();
        } catch (error) {
            console.error('Error cargando header:', error);
        }
    }
    
    // Cargar footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        try {
            const response = await fetch('common/footer.html');
            const html = await response.text();
            footerPlaceholder.innerHTML = html;
        } catch (error) {
            console.error('Error cargando footer:', error);
        }
    }
}

// Reinicializar eventos del header después de cargar
function initializeHeaderEvents() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    }
}

// ========== UTILITIES ==========
// Función para formatear fechas
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-CR', options);
}

// Función para truncar texto
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Función para debounce (optimización)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
```

---

## 4. Código CSS base

### 4.1 `mockup/css/styles.css`
```css
/* 
==============================================
FEUNA - Mockup Visual
Colores Institucionales:
- Azul UNA: #034991
- Rojo FEUNA: #bb1f1f
- Gris texto: #666666
- Gris bordes: #dddddd
- Negro: #000000
- Blanco: #ffffff

Tipografía: Space Grotesk (Google Fonts)
Iconografía: Font Awesome 5
==============================================
*/

/* ========== RESET Y BASE ========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Colores institucionales - Paleta inspirada en Rectoría UNA */
    --rojo-feuna: #bb1f1f;      /* Rojo FEUNA - COLOR PRINCIPAL */
    --rojo-oscuro: #8b1515;     /* Rojo oscuro para hover */
    --negro: #1a1a1a;           /* Negro para textos - COLOR SECUNDARIO */
    --azul-una: #034991;        /* Azul UNA - SOLO DETALLES */
    --azul-gris: #3d5a80;       /* Azul grisáceo de Rectoría */
    --gris-oscuro: #333333;     /* Gris oscuro para textos secundarios */
    --gris-medio: #666666;      /* Gris medio */
    --gris-claro: #f5f5f5;      /* Fondos alternos */
    --gris-bordes: #dddddd;     /* Bordes sutiles */
    --blanco: #ffffff;          /* Fondo principal */
    
    /* Sombras sutiles */
    --sombra-suave: 0 1px 3px rgba(0, 0, 0, 0.1);
    --sombra-media: 0 2px 8px rgba(0, 0, 0, 0.12);
    --sombra-card: 0 2px 6px rgba(0, 0, 0, 0.08);
    
    /* Espaciado */
    --padding-section: 60px 0;
    --padding-mobile: 40px 0;
    
    /* Bordes */
    --border-radius: 4px;
    
    /* Transiciones */
    --transition: all 0.3s ease;
}

body {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--negro);
    background-color: var(--blanco);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Contenedor para header sin padding lateral */
.container-full {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    transition: var(--transition);
}

/* ========== HEADER - DOS NIVELES COMO RECTORÍA ========== */
.main-header {
    position: relative;
    background-color: var(--blanco);
}

/* Top Bar - Blanco con logo, redes y búsqueda - NO STICKY */
.top-bar {
    background-color: var(--blanco);
    border-bottom: 1px solid var(--gris-bordes);
    padding: 12px 0;
    position: relative;
    width: 100%;
}

.top-bar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-img {
    height: 60px;
    width: auto;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 24px;
}

.header-search {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--gris-claro);
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid var(--gris-bordes);
    transition: var(--transition);
}

.header-search:focus-within {
    border-color: var(--rojo-feuna);
    background-color: var(--blanco);
}

.header-search input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: var(--negro);
    width: 200px;
}

.header-search input::placeholder {
    color: var(--gris-medio);
}

.header-search i {
    color: var(--gris-medio);
}

.social-icons {
    display: flex;
    gap: 8px;
}

.social-link {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gris-oscuro);
    border-radius: 4px;
    transition: var(--transition);
}

.social-link:hover {
    color: var(--rojo-feuna);
    background-color: var(--gris-claro);
}

/* Navigation Bar - Rojo con todas las secciones - STICKY */
.nav-bar {
    background: linear-gradient(135deg, var(--rojo-feuna) 0%, var(--rojo-oscuro) 100%);
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    width: 100%;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-nav {
    width: 100%;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 0;
    justify-content: center;
    flex-wrap: wrap;
}

.nav-item {
    position: relative;
}

.nav-link {
    font-size: 14px;
    font-weight: 500;
    color: var(--blanco);
    padding: 16px 20px;
    position: relative;
    transition: var(--transition);
    display: block;
    white-space: nowrap;
}

.nav-link:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.nav-link.active {
    background-color: rgba(0, 0, 0, 0.15);
    font-weight: 600;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: var(--blanco);
}

/* Dropdown Menu */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--blanco);
    min-width: 240px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-top: 3px solid var(--rojo-feuna);
    list-style: none;
    padding: 12px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1001;
}

.nav-item.has-dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu li {
    margin: 0;
    border-bottom: none;
}

.dropdown-menu a {
    display: block;
    padding: 10px 20px;
    color: var(--negro);
    font-size: 14px;
    transition: var(--transition);
    text-decoration: none;
}

.dropdown-menu a:hover {
    background-color: var(--gris-claro);
    color: var(--rojo-feuna);
    padding-left: 24px;
}

.dropdown-subtitle {
    padding: 8px 20px 4px;
    font-size: 12px;
    font-weight: 700;
    color: var(--gris-medio);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 8px;
}

.dropdown-subtitle:first-child {
    margin-top: 0;
}

.dropdown-divider {
    height: 1px;
    margin: 8px 0;
    background-color: var(--gris-bordes);
    border: none;
}

/* Mega Dropdown Menu - Estilos para los 4 mega-menús */
.mega-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    background-color: var(--blanco);
    min-width: 700px;
    max-width: 800px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-top: 3px solid var(--rojo-feuna);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1001;
    padding: 24px;
}

.nav-item.mega-menu-item:hover .mega-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}

.mega-dropdown-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}

.mega-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mega-column-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--rojo-feuna);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 8px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--gris-claro);
}

.mega-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.mega-column ul li a {
    display: block;
    padding: 8px 12px;
    color: var(--negro);
    font-size: 14px;
    transition: var(--transition);
    text-decoration: none;
    border-radius: 4px;
}

.mega-column ul li a:hover {
    background-color: var(--gris-claro);
    color: var(--rojo-feuna);
    padding-left: 16px;
}

/* Servicios UNA en azul */
.mega-column ul li a.servicio-una {
    color: var(--azul-una);
}

.mega-column ul li a.servicio-una:hover {
    color: var(--azul-una);
    background-color: rgba(3, 73, 145, 0.05);
}

/* Botón de Contacto sin dropdown */
.nav-link-contact {
    background-color: rgba(255, 255, 255, 0.15);
    font-weight: 600;
}

.nav-link-contact:hover {
    background-color: rgba(255, 255, 255, 0.25);
}

.header-actions {
    display: none;
}

.icon-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gris-oscuro);
    transition: var(--transition);
    border-radius: 4px;
}

.icon-btn:hover {
    background-color: var(--gris-claro);
    color: var(--rojo-feuna);
}

.mobile-menu-btn {
    display: none;
    width: 36px;
    height: 36px;
    color: var(--blanco);
    font-size: 20px;
}

/* ========== HERO SECTION ========== */
.hero-section {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    background-color: var(--negro);
    overflow: hidden;
}

.hero-slideshow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.hero-slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.hero-slide.active {
    opacity: 1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 80px 0;
}

.hero-title {
    font-size: 48px;
    font-weight: 700;
    color: var(--blanco);
    line-height: 1.2;
    margin-bottom: 20px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    max-width: 800px;
}

.hero-subtitle {
    font-size: 20px;
    font-weight: 400;
    color: var(--blanco);
    line-height: 1.6;
    margin-bottom: 36px;
    max-width: 700px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background-color: var(--rojo-feuna);
    color: var(--blanco);
    border-radius: var(--border-radius);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: var(--transition);
}
```

### 4.2 `mockup/css/styles-clean.css`
```css
/* Variante limpia del CSS base.
   Mantener como respaldo de depuración visual.
   Si el proyecto requiere una sola referencia canónica, usar styles.css.
*/
```

### 4.3 `mockup/css/styles-temp.css`
```css
/* Variante temporal del CSS base.
   Útil para pruebas rápidas y ajustes puntuales.
   No es la versión canónica.
*/
```

### 4.4 `mockup/css/styles-backup-corrupto.css`
```css
/* Respaldo histórico del CSS.
   Conservar solo como referencia de emergencia o recuperación.
*/
```

---

## 5. HTML estructural de referencia

### 5.0 `mockup/index.html` completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FEUNA - Federación de Estudiantes Universidad Nacional</title>
    
    <!-- Google Fonts - Space Grotesk -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome 5 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    
    <!-- Estilos principales -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- HEADER PLACEHOLDER -->
    <div id="header-placeholder"></div>

    <!-- HERO SECTION -->
    <section class="hero-section">
        <div class="hero-slideshow">
            <div class="hero-slide active" style="background-image: url('images/hero-campus.jpg');">
                <div class="hero-overlay"></div>
            </div>
        </div>
        
        <div class="hero-content">
            <div class="container">
                <h1 class="hero-title">¡ATRÉVETE A VIVIR LA U MÁS ALLÁ DE LAS AULAS!</h1>
                <p class="hero-subtitle">
                    Involúcrate en alguna agrupación: voluntariado, arte, deporte, recreación, bienestar, feminismos, política, representación estudiantil entre otras. Vive la experiencia universitaria completa y expande tus habilidades mientras disfrutas de momentos únicos.
                </p>
                
                <div class="hero-actions">
                    <a href="participacion.html" class="hero-btn hero-btn-primary">
                        <i class="fas fa-vote-yea"></i>
                        <span>Participá</span>
                    </a>
                    <a href="tramites.html" class="hero-btn">
                        <i class="fas fa-file-invoice-dollar"></i>
                        <span>Exoneración</span>
                    </a>
                    <a href="eventos.html" class="hero-btn">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Eventos</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICIOS -->
    <section class="servicios-section">
        <div class="container">
            <h2 class="section-title">Servicios</h2>
            <p class="section-subtitle">Diferenciamos entre lo que gestiona FEUNA y servicios externos de la UNA</p>
            
            <!-- Servicios FEUNA -->
            <div class="servicios-categoria">
                <h3 class="servicios-categoria-title">
                    <span class="badge-feuna">FEUNA</span>
                    Gestionados por FEUNA
                </h3>
                    <div class="servicios-grid">
                    <a href="tramites.html" class="servicio-card servicio-feuna">
                        <i class="fas fa-file-invoice-dollar"></i>
                        <span>Exoneración</span>
                    </a>
                    <a href="defensor.html" class="servicio-card servicio-feuna">
                        <i class="fas fa-shield-alt"></i>
                        <span>Defensoría</span>
                    </a>
                    <a href="servicios.html" class="servicio-card servicio-feuna">
                        <i class="fas fa-hands-helping"></i>
                        <span>Orientación</span>
                    </a>
                </div>
            </div>
            
            <!-- Servicios UNA -->
            <div class="servicios-categoria">
                <h3 class="servicios-categoria-title">
                    <span class="badge-una">UNA</span>
                    Enlaces a Servicios UNA
                </h3>
                <div class="servicios-grid">
                    <a href="becas.html" class="servicio-card servicio-una">
                        <i class="fas fa-dollar-sign"></i>
                        <span>Becas</span>
                    </a>
                    <a href="salud.html" class="servicio-card servicio-una">
                        <i class="fas fa-heartbeat"></i>
                        <span>Salud</span>
                    </a>
                    <a href="guias.html" class="servicio-card servicio-una">
                        <i class="fas fa-book"></i>
                        <span>Bibliotecas</span>
                    </a>
                    <a href="vida-universitaria.html" class="servicio-card servicio-una">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Vida Universitaria</span>
                    </a>
                    <a href="guias.html" class="servicio-card servicio-una">
                        <i class="fas fa-compass"></i>
                        <span>Guías</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- NOTICIAS DESTACADAS -->
    <section class="noticias-section">
        <div class="container">
            <h2 class="section-title">Noticias Destacadas</h2>
            
            <div class="noticias-grid">
                <!-- Noticia 1 -->
                <article class="noticia-card">
                    <div class="noticia-image" style="background-image: url('images/noticia-1.jpg');"></div>
                    <div class="noticia-content">
                        <span class="noticia-tag">
                            <i class="fas fa-map-marked-alt"></i> Regionalización
                        </span>
                        <h3 class="noticia-title">FEUNA visita sede regional Brunca para fortalecer participación</h3>
                        <p class="noticia-date"><i class="far fa-calendar-alt"></i> 20 de noviembre, 2025</p>
                        <a href="noticias.html" class="noticia-link">Leer más <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <!-- Noticia 2 -->
                <article class="noticia-card">
                    <div class="noticia-image" style="background-image: url('images/noticia-2.jpg');"></div>
                    <div class="noticia-content">
                        <span class="noticia-tag">
                            <i class="fas fa-graduation-cap"></i> Educación Pública
                        </span>
                        <h3 class="noticia-title">Estudiantes UNA marchan por defensa del FEES 2026</h3>
                        <p class="noticia-date"><i class="far fa-calendar-alt"></i> 19 de noviembre, 2025</p>
                        <a href="noticias.html" class="noticia-link">Leer más <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <!-- Noticia 3 -->
                <article class="noticia-card">
                    <div class="noticia-image" style="background-image: url('images/noticia-3.jpg');"></div>
                    <div class="noticia-content">
                        <span class="noticia-tag">
                            <i class="fas fa-palette"></i> Cultura
                        </span>
                        <h3 class="noticia-title">Festival Cultural FEUNA 2025: arte, música y resistencia</h3>
                        <p class="noticia-date"><i class="far fa-calendar-alt"></i> 18 de noviembre, 2025</p>
                        <a href="noticias.html" class="noticia-link">Leer más <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
            </div>
            
                <div class="section-cta">
                <a href="noticias.html" class="btn-secondary">Ver todas las noticias <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <!-- PRÓXIMOS EVENTOS -->
    <section class="eventos-section">
        <div class="container">
            <h2 class="section-title">Próximos Eventos</h2>
            
            <div class="eventos-list">
                <div class="evento-item">
                    <div class="evento-date">
                        <span class="evento-day">25</span>
                        <span class="evento-month">NOV</span>
                    </div>
                    <div class="evento-info">
                        <h3 class="evento-title">Asamblea General FEUNA</h3>
                        <p class="evento-details">
                            <i class="fas fa-map-marker-alt"></i> Auditorio UNA
                            <i class="far fa-clock"></i> 10:00 am
                        </p>
                    </div>
                </div>

                <div class="evento-item">
                    <div class="evento-date">
                        <span class="evento-day">28</span>
                        <span class="evento-month">NOV</span>
                    </div>
                    <div class="evento-info">
                        <h3 class="evento-title">Taller de Diversidad, Equidad y Género</h3>
                        <p class="evento-details">
                            <i class="fas fa-map-marker-alt"></i> Sala Multiusos
                            <i class="far fa-clock"></i> 2:00 pm
                        </p>
                    </div>
                </div>

                <div class="evento-item">
                    <div class="evento-date">
                        <span class="evento-day">01</span>
                        <span class="evento-month">DIC</span>
                    </div>
                    <div class="evento-info">
                        <h3 class="evento-title">Festival Cultural FEUNA 2025</h3>
                        <p class="evento-details">
                            <i class="fas fa-map-marker-alt"></i> Campus Omar Dengo
                            <i class="far fa-clock"></i> 9:00 am
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="section-cta">
                <a href="#" class="btn-secondary">Ver calendario completo <i class="far fa-calendar-alt"></i></a>
            </div>
        </div>
    </section>

    <!-- TRANSPARENCIA -->
    <section class="transparencia-section">
        <div class="container">
            <div class="transparencia-content">
                <h2 class="section-title-white">Transparencia</h2>
                <p class="transparencia-text">
                    Consultá el presupuesto de FEUNA, ejecución financiera, actas de órganos estudiantiles e informes de labores.
                </p>
                <div class="transparencia-actions">
                    <a href="transparencia.html" class="btn-white">Presupuesto</a>
                    <a href="transparencia.html" class="btn-white">Actas</a>
                    <a href="transparencia.html" class="btn-white">Informes</a>
                </div>
            </div>
        </div>
    </section>

    <!-- PARTICIPÁ -->
    <section class="se-parte-section">
        <div class="container">
            <div class="se-parte-content">
                <h2 class="section-title">¡Participá en el Movimiento Estudiantil!</h2>
                <p class="se-parte-text">
                    Tu voz importa. Involúcrate a través de e-peticiones, consultás, asambleas, comisiones del DEUNA y proyectos estudiantiles. La FEUNA es tu espacio de participación y transformación.
                </p>
                <div class="se-parte-actions">
                    <a href="epeticiones.html" class="btn-primary">E-Peticiones</a>
                    <a href="contacto.html" class="btn-primary">Consultas</a>
                    <a href="oportunidades.html" class="btn-secondary">Oportunidades</a>
                    <a href="participacion.html" class="btn-secondary">Sé Parte de FEUNA</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER PLACEHOLDER -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="js/main.js"></script>
</body>
</html>
```

### 5.1 `mockup/feuna.html` completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¿Qué es la FEUNA? - Federación de Estudiantes Universidad Nacional</title>
    
    <!-- Google Fonts - Space Grotesk -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome 5 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    
    <!-- Estilos principales -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- HEADER PLACEHOLDER -->
    <div id="header-placeholder"></div>

    <!-- BREADCRUMB -->
    <section class="breadcrumb-section">
        <div class="container">
            <nav class="breadcrumb">
                <a href="index.html"><i class="fas fa-home"></i> Inicio</a>
                <span class="separator">/</span>
                <a href="#">FEUNA</a>
                <span class="separator">/</span>
                <span class="current">¿Qué es la FEUNA?</span>
            </nav>
        </div>
    </section>

    <!-- PAGE HEADER -->
    <section class="page-header" style="background-image: url('images/banner-acerca-de-feuna.png'); background-size: cover; background-position: center 30%;">
        <div class="container">
            <h1 class="page-title">¿Qué es la FEUNA?</h1>
            <p class="page-subtitle">Conocé la Federación de Estudiantes de la Universidad Nacional</p>
        </div>
    </section>

    <!-- CONTENIDO PRINCIPAL -->
    <section class="content-section">
        <div class="container">
            <div class="content-grid">
                <!-- Contenido principal -->
                <div class="main-content">

                    <!-- ¿Qué es la FEUNA? -->
                    <div class="content-block">
                        <h2 class="content-title">¿Qué es la FEUNA?</h2>
                        <p class="content-text">
                            La <strong>Federación de Estudiantes de la Universidad Nacional (FEUNA)</strong> es el gobierno estudiantil de la UNA y la máxima instancia de organización política del movimiento estudiantil universitario. Somos una organización independiente y autónoma que representa a todos los estudiantes de la universidad en los <strong>Campus Omar Dengo</strong>, <strong>Benjamín Núñez</strong>, <strong>Sede Interuniversitaria de Alajuela</strong> (Sección Regional Central-Occidente), <strong>Campus Sarapiquí</strong> (Sección Regional Huetar Norte y Caribe), <strong>Campus Coto</strong> y <strong>Campus Pérez Zeledón</strong> (ambos de la Sede Regional Brunca), <strong>Campus Nicoya</strong> y <strong>Campus Liberia</strong> (Sede Regional Chorotega), además de todas las regiones del país con carreras itinerantes.
                        </p>
                        <p class="content-text">
                            La FEUNA funciona como una federación independiente - no dependemos de partidos políticos, religiones ni organizaciones específicas. Nos organizamos a través de diferentes órganos: el <strong>DEUNA</strong> (Directorio Ejecutivo de Estudiantes, que es el órgano ejecutivo), el <strong>CAEUNA</strong> (Consejo de Asociaciones, donde todas las organizaciones estudiantiles toman decisiones de forma conjunta), y el <strong>TEEUNA</strong> (Tribunal Electoral Estudiantil, que organiza y supervisa las elecciones estudiantiles).
                        </p>
                        <p class="content-text">
                            Nuestra función principal es <strong>defender tus derechos como estudiante</strong> y hacer que tu voz sea escuchada en los espacios de decisión de la universidad. Tenemos representación estudiantil en el Consejo Universitario (CU), el Consejo Académico (CONSACA) y otros órganos colegiados donde se toman decisiones que afectan directamente tu vida universitaria.
                        </p>
                        <p class="content-text">
                            Pero la FEUNA no solo trabaja dentro de la UNA - también nos involucramos activamente en las luchas sociales del país, defendemos la educación superior pública y apoyamos causas de justicia social. Nuestro compromiso es claro: <strong>organizamos, representamos y defendemos al estudiantado de la UNA</strong>, tanto dentro de la universidad como en la sociedad costarricense.
                        </p>
                    </div>

                    <!-- Imágenes ilustrativas -->
                    <div class="image-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 48px;">
                        <img src="images/reunion.png" alt="Asamblea FEUNA" style="width: 100%; height: 250px; object-fit: cover; border-radius: 4px;">
                        <img src="images/estudiantes-manifestacion.png" alt="Actividades estudiantiles" style="width: 100%; height: 250px; object-fit: cover; border-radius: 4px;">
                    </div>

                    <!-- Misión -->
                    <div class="content-block highlight-block">
                        <div class="icon-title">
                            <i class="fas fa-bullseye"></i>
                            <h3>Nuestra Misión</h3>
                        </div>
                        <p class="content-text">
                            Representar, organizar y defender los intereses de la comunidad estudiantil de la Universidad Nacional, promoviendo tu participación activa para construir juntos una universidad más democrática, inclusiva y comprometida con el desarrollo del país.
                        </p>
                    </div>

                    <!-- Visión -->
                    <div class="content-block highlight-block">
                        <div class="icon-title">
                            <i class="fas fa-eye"></i>
                            <h3>Nuestra Visión</h3>
                        </div>
                        <p class="content-text">
                            Ser la organización estudiantil líder en la defensa de la educación pública de Costa Rica, reconocida por su compromiso con la justicia social, la inclusión, la sostenibilidad ambiental y el fortalecimiento del movimiento estudiantil.
                        </p>
                    </div>

                    <!-- Principios -->
                    <div class="content-block">
                        <h3 class="content-subtitle">
                            <i class="fas fa-star"></i> Nuestros Principios
                        </h3>
                        <div class="principles-grid">
                            <div class="principle-card">
                                <div class="principle-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <h4>Democracia y Participación</h4>
                                <p>Promovemos la participación activa de todos los estudiantes en la toma de decisiones.</p>
                            </div>

                            <div class="principle-card">
                                <div class="principle-icon">
                                    <i class="fas fa-balance-scale"></i>
                                </div>
                                <h4>Justicia Social</h4>
                                <p>Luchamos por la equidad, la inclusión y el respeto a los derechos humanos.</p>
                            </div>

                            <div class="principle-card">
                                <div class="principle-icon">
                                    <i class="fas fa-leaf"></i>
                                </div>
                                <h4>Sostenibilidad</h4>
                                <p>Defendemos el medio ambiente y promovemos prácticas sustentables.</p>
                            </div>

                            <div class="principle-card">
                                <div class="principle-icon">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <h4>Educación Pública</h4>
                                <p>Defendemos el derecho a una educación pública, gratuita y de calidad.</p>
                            </div>

                            <div class="principle-card">
                                <div class="principle-icon">
                                    <i class="fas fa-hands-helping"></i>
                                </div>
                                <h4>Solidaridad</h4>
                                <p>Fomentamos la cooperación, el apoyo mutuo y la construcción colectiva.</p>
                            </div>

                            <div class="principle-card">
                                <div class="principle-icon">
                                    <i class="fas fa-lightbulb"></i>
                                </div>
                                <h4>Innovación</h4>
                                <p>Promovemos la creatividad y la transformación digital del movimiento estudiantil.</p>
                            </div>
                        </div>
                    </div>

                    <!-- ¿Qué hacemos? -->
                    <div class="content-block">
                        <h3 class="content-subtitle">
                            <i class="fas fa-tasks"></i> ¿Qué hacemos?
                        </h3>
                        <div class="actions-timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="timeline-content">
                                    <h4>Representación Estudiantil</h4>
                                    <p>Participamos en el Consejo Universitario, CONSACA y otros órganos de la UNA para defender tus intereses.</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-hands-helping"></i>
                                </div>
                                <div class="timeline-content">
                                    <h4>Servicios y Recursos</h4>
                                    <p>Te ayudamos con trámites, información sobre becas, salud, cultura y oportunidades académicas.</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-music"></i>
                                </div>
                                <div class="timeline-content">
                                    <h4>Actividades Culturales y Deportivas</h4>
                                    <p>Organizamos eventos, festivales, torneos y actividades para que disfrutes tu vida universitaria.</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <div class="timeline-content">
                                    <h4>Defensa de Derechos</h4>
                                    <p>Luchamos contra el acoso, la discriminación y cualquier violación a tus derechos como estudiante.</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="timeline-content">
                                    <h4>Transparencia y Participación</h4>
                                    <p>Rendimos cuentas públicamente y promovemos tu participación en asambleas y consultas.</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="timeline-content">
                                    <h4>Vinculación Social</h4>
                                    <p>Trabajamos con comunidades, organizaciones sociales y el movimiento estudiantil nacional.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Imagen final -->
                    <div class="content-image" style="margin-bottom: 48px;">
                        <img src="images/WhatsApp%20Image%202025-11-20%20at%2011.12.11%20PM.jpeg" alt="Equipo FEUNA" style="width: 100%; height: 350px; object-fit: cover; border-radius: 4px;">
                    </div>
                </div>

                <!-- Sidebar -->
                <aside class="sidebar">
                    <!-- Enlaces rápidos -->
                    <div class="sidebar-widget">
                        <h3 class="widget-title">Documentos</h3>
                        <ul class="widget-links">
                            <li><a href="reglamentos.html"><i class="fas fa-file-alt"></i> Estatuto Orgánico FEUNA</a></li>
                                <li><a href="reglamentos.html"><i class="fas fa-book"></i> Reglamentos</a></li>
                                <li><a href="plan-trabajo.html"><i class="fas fa-tasks"></i> Plan de Trabajo</a></li>
                                <li><a href="archivo.html"><i class="fas fa-history"></i> Historia de FEUNA</a></li>
                                <li><a href="representacion-cu.html"><i class="fas fa-sitemap"></i> Estructura Organizativa</a></li>
                        </ul>
                    </div>

                    <!-- Sé Parte -->
                    <div class="sidebar-widget cta-widget">
                        <i class="fas fa-users"></i>
                        <h4>¡Sé Parte de FEUNA!</h4>
                        <p>Participá en comisiones, voluntariados y actividades estudiantiles.</p>
                        <a href="participacion.html" class="btn-secondary">Únete ahora</a>
                    </div>

                    <!-- Denuncias -->
                    <div class="sidebar-widget cta-widget">
                        <i class="fas fa-bullhorn"></i>
                        <h4>¿Tenés una denuncia o sugerencia?</h4>
                        <a href="contacto.html" class="btn-secondary">Contactanos</a>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <!-- FOOTER PLACEHOLDER -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="js/main.js"></script>
</body>
</html>
```

### 5.2 `mockup/deuna.html` completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEUNA - Directorio Estudiantil | FEUNA</title>
    
    <!-- Google Fonts - Space Grotesk -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome 5 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    
    <!-- Estilos principales -->
    <link rel="stylesheet" href="css/styles.css">
    <style>
    /* DEUNA — local improvements for filter bar and cards */
    .filter-bar{align-items:center;margin:0 0 12px 0;padding:6px 0}
    .filter-bar{display:flex;flex-wrap:wrap;gap:10px}
    .filter-btn{border:1px solid var(--azul, #0b57d0);background:transparent;color:var(--azul, #0b57d0);padding:6px 12px;border-radius:999px;font-weight:600;cursor:pointer;transition:all .18s ease;box-shadow:none}
    .filter-btn:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(11,87,208,.08)}
    .filter-btn.active{background:var(--azul, #0b57d0);color:#fff;border-color:transparent}
    .filter-explanation{font-size:0.95rem;margin-top:6px;color:var(--texto-sec,#666)}
    .members-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:18px;margin-top:8px}
    .member-card{background:#fff;border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;text-align:center;border:1px solid rgba(0,0,0,0.04);box-shadow:0 6px 18px rgba(20,20,30,0.04)}
    .member-photo{width:96px;height:120px;border-radius:6px;overflow:hidden;margin-bottom:10px;background:#f6f7f8;display:block;box-shadow:none;border:none !important;box-shadow:none !important}
    .member-photo img{width:100%;height:100%;object-fit:cover;display:block}
    .member-name{font-size:1rem;margin:6px 0 2px;color:var(--texto,#111);font-weight:700}
    .member-position{font-size:0.9rem;color:var(--texto-sec,#666);margin:0}
    .info-cards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:14px}
    .info-card{padding:16px;border-radius:10px;background:linear-gradient(180deg,#fff,#fbfdff);border:1px solid rgba(0,0,0,0.03)}
    .highlight-card{padding:14px;border-radius:10px;background:linear-gradient(180deg,#f7fbff,#ffffff);border:1px solid rgba(11,87,208,0.08);box-shadow:0 8px 24px rgba(11,87,208,0.04);}
    .highlight-card h4{margin:0 0 8px;font-size:1rem;color:var(--azul,#0b57d0);font-weight:700}
    .highlight-card p{margin:0 0 8px;color:var(--texto-sec,#666)}
    .highlight-card ul{margin:6px 0 0;padding-left:18px;color:var(--texto-sec,#666)}
    @media (max-width:560px){.filter-bar{overflow:auto;padding-bottom:6px} .filter-btn{flex:0 0 auto}}
    </style>
</head>
<body>
    <!-- HEADER PLACEHOLDER -->
    <div id="header-placeholder"></div>

    <!-- BREADCRUMB -->
    <section class="breadcrumb-section">
        <div class="container">
            <nav class="breadcrumb">
                <a href="index.html"><i class="fas fa-home"></i> Inicio</a>
                <span class="separator">/</span>
                <a href="#">Representación</a>
                <span class="separator">/</span>
                <span class="current">DEUNA</span>
            </nav>
        </div>
    </section>

    <!-- PAGE HEADER -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Directorio Estudiantil (DEUNA)</h1>
            <p class="page-subtitle">Representantes estudiantiles de la FEUNA 2025-2027</p>
        </div>
    </section>

    <!-- CONTENIDO PRINCIPAL -->
    <section class="content-section">
        <div class="container">
            <!-- Introducción -->
            <div class="intro-block">
                <p id="intro-text" class="intro-text">
                    El <strong>Directorio Estudiantil (DEUNA)</strong> es el órgano ejecutivo de la FEUNA, responsable de dirigir y coordinar la representación estudiantil y ejecutar las decisiones de la Federación.
                </p>
            </div>

            <!-- INTEGRANTES DEL DEUNA -->
            <div class="members-section">
                <h2 class="section-title">Integrantes DEUNA 2025-2027</h2>

                <div class="filter-bar" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                    <button class="filter-btn active" data-filter="all" data-target="members">Todos</button>
                    <button class="filter-btn" data-filter="directorio" data-target="members">Presidencia</button>
                    <button class="filter-btn" data-filter="secretaria" data-target="members">Secretaría General</button>
                    <button class="filter-btn" data-filter="finanzas" data-target="members">Finanzas</button>
                    <button class="filter-btn" data-filter="ecologicos" data-target="members">Asuntos Ecológicos</button>
                    <button class="filter-btn" data-filter="comunicacion" data-target="members">Comunicación</button>
                    <button class="filter-btn" data-filter="asuntos-universitarios" data-target="members">Asuntos Universitarios</button>
                    <button class="filter-btn" data-filter="regionales" data-target="members">Asuntos Regionales</button>
                    <button class="filter-btn" data-filter="cultura" data-target="members">Cultura y Deporte</button>
                    <button class="filter-btn" data-filter="diversidad" data-target="members">Diversidad y Género</button>
                    <button class="filter-btn" data-filter="politica" data-target="members">Política</button>
                    <button class="filter-btn" data-filter="consaca" data-target="members">CONSACA</button>
                    <button class="filter-btn" data-filter="cu" data-target="members">Consejo Universitario</button>
                </div>

                                <div style="display:flex;flex-direction:column;gap:10px">
                                    <div id="filter-highlight" class="highlight-card" style="display:none"></div>
                                </div>

                <h3 class="sr-only">Directorio</h3>
                <div class="members-grid" id="members">

                    <div class="member-card" data-category="directorio">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Marco%20V%C3%ADquez.jpeg" alt="Marco Viquez Fallas" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>MV</div>'"></div>
                        <h3 class="member-name">Marco Viquez Fallas</h3>
                        <p class="member-position">Presidencia</p>
                    </div>

                    <div class="member-card" data-category="secretaria">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Daniela.jpeg" alt="Daniela Chaves Matamoros" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>DC</div>'"></div>
                        <h3 class="member-name">Daniela Chaves Matamoros</h3>
                        <p class="member-position">Secretaría General</p>
                    </div>

                    <div class="member-card" data-category="finanzas">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Dilan%20G%C3%B3mez_.jpg" alt="Dilan Gómez Arias" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>DG</div>'"></div>
                        <h3 class="member-name">Dilan Gómez Arias</h3>
                        <p class="member-position">Comisión de Finanzas</p>
                    </div>

                    <div class="member-card" data-category="finanzas">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Einer%20Canales%20Campos.jpg" alt="Einer Canales Campos" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>EC</div>'"></div>
                        <h3 class="member-name">Einer Canales Campos</h3>
                        <p class="member-position">Comisión de Finanzas</p>
                    </div>

                    <div class="member-card" data-category="asuntos-universitarios">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Cristofer%20Guerrero.jpg" alt="Cristofer Guerrero Lepiz" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>CG</div>'"></div>
                        <h3 class="member-name">Cristofer Guerrero Lepiz</h3>
                        <p class="member-position">Comisión de Asuntos Universitarios</p>
                    </div>

                    <div class="member-card" data-category="politica">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Avril_.jpg" alt="Avril Flores Chaves" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>AF</div>'"></div>
                        <h3 class="member-name">Avril Flores Chaves</h3>
                        <p class="member-position">Comisión de Asuntos Nacionales e Internacionales</p>
                    </div>

                    <div class="member-card" data-category="ecologicos">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Mery.jpg" alt="Mery Ann Fonseca López" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>MF</div>'"></div>
                        <h3 class="member-name">Mery Ann Fonseca López</h3>
                        <p class="member-position">Comisión de Asuntos Ecológicos</p>
                    </div>

                    <div class="member-card" data-category="diversidad">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Andrea%20Sisfontes.jpg" alt="Andrea Sisfontes Sandí" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>AS</div>'"></div>
                        <h3 class="member-name">Andrea Sisfontes Sandí</h3>
                        <p class="member-position">Comisión de Diversidad, Equidad y Género</p>
                    </div>

                    <div class="member-card" data-category="regionales">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Yariel.png" alt="Yariel Miranda Chaves" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>YM</div>'"></div>
                        <h3 class="member-name">Yariel Miranda Chaves</h3>
                        <p class="member-position">Comisión de Asuntos Regionales</p>
                    </div>

                    <div class="member-card" data-category="cultura">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Cris%20Castro.png" alt="Cristofer Castro Fallas" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>CC</div>'"></div>
                        <h3 class="member-name">Cristofer Castro Fallas</h3>
                        <p class="member-position">Comisión de Cultura, Recreación y Deporte</p>
                    </div>

                    <div class="member-card" data-category="cultura">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Isabel_.jpg" alt="Isabel Sanchez Lizano" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>IS</div>'"></div>
                        <h3 class="member-name">Isabel Sanchez Lizano</h3>
                        <p class="member-position">Comisión de Cultura, Recreación y Deporte</p>
                    </div>

                    <div class="member-card" data-category="comunicacion">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Gabriel%20Sancho.jpg" alt="Gabriel Sancho Quintanilla" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>GS</div>'"></div>
                        <h3 class="member-name">Gabriel Sancho Quintanilla</h3>
                        <p class="member-position">Oficina de Comunicación e Información</p>
                    </div>

                    <div class="member-card" data-category="comunicacion">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Stephanie.jpg" alt="Stephanie Ruiz Matamoros" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>SR</div>'"></div>
                        <h3 class="member-name">Stephanie Ruiz Matamoros</h3>
                        <p class="member-position">Oficina de Comunicación e Información</p>
                    </div>

                    <div class="member-card" data-category="cu">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Nataly%20Mendoza%20Hern%C3%A1ndez.png" alt="Nataly Mendoza Hernández" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>NM</div>'"></div>
                        <h3 class="member-name">Nataly Mendoza Hernández</h3>
                        <p class="member-position">Consejo Universitario (Propiedad 1°)</p>
                    </div>

                    <div class="member-card" data-category="cu">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Omar.jpg" alt="Omar Morales Torres" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>OM</div>'"></div>
                        <h3 class="member-name">Omar Morales Torres</h3>
                        <p class="member-position">Consejo Universitario (Suplencia 1°)</p>
                    </div>

                    <div class="member-card" data-category="cu">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Cristofer%20Ulate.jpg" alt="Christopher Ulate Orozco" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>CU</div>'"></div>
                        <h3 class="member-name">Christopher Ulate Orozco</h3>
                        <p class="member-position">Consejo Universitario (Propiedad 2°)</p>
                    </div>

                    <div class="member-card" data-category="cu">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Iris%20Lopez%20.jpeg" alt="Iris Lopez Cruz" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>IL</div>'"></div>
                        <h3 class="member-name">Iris Lopez Cruz</h3>
                        <p class="member-position">Consejo Universitario (Suplencia 2°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Foto%20Lau.jpg" alt="Laura Flores Barrantes" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>LF</div>'"></div>
                        <h3 class="member-name">Laura Flores Barrantes</h3>
                        <p class="member-position">CONSACA (Propiedad 1°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Sebasti%C3%A1n.jpg" alt="Sebastián Sánchez Padilla" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>SS</div>'"></div>
                        <h3 class="member-name">Sebastián Sánchez Padilla</h3>
                        <p class="member-position">CONSACA (Suplencia 1°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Yassir.jpg" alt="Yassir Jiménez Carballo" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>YJ</div>'"></div>
                        <h3 class="member-name">Yassir Jiménez Carballo</h3>
                        <p class="member-position">CONSACA (Propiedad 2°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Ariana.png" alt="Ariana Esquivel Flores" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>AE</div>'"></div>
                        <h3 class="member-name">Ariana Esquivel Flores</h3>
                        <p class="member-position">CONSACA (Suplencia 2°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Valeria_.jpg" alt="Valeria Espinoza Aguilar" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>VE</div>'"></div>
                        <h3 class="member-name">Valeria Espinoza Aguilar</h3>
                        <p class="member-position">CONSACA (Propiedad 3°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Pablo%20Carballo.jpg" alt="Pablo Carballo Chaves" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>PC</div>'"></div>
                        <h3 class="member-name">Pablo Carballo Chaves</h3>
                        <p class="member-position">CONSACA (Suplencia 3°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Bryam.jpg" alt="Bryam Bejarano Rucavado" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>BB</div>'"></div>
                        <h3 class="member-name">Bryam Bejarano Rucavado</h3>
                        <p class="member-position">CONSACA (Propiedad 4°)</p>
                    </div>

                    <div class="member-card" data-category="consaca">
                        <div class="member-photo"><img src="images/Fotos%20tamaño%20pasaporte,%20(JPG)/Carolina%20Arrieta_.jpg" alt="Carolina Arrieta Angulo" onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem;color:#333\'>CA</div>'"></div>
                        <h3 class="member-name">Carolina Arrieta Angulo</h3>
                        <p class="member-position">CONSACA (Suplencia 4°)</p>
                    </div>
                </div>
                <!-- La información de Secretaría General se muestra dinámicamente en el recuadro destacado al seleccionar el filtro -->
            </div>

            <!-- Información adicional -->
            <div class="info-section">
                <div class="info-cards-grid">
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fas fa-gavel"></i>
                        </div>
                        <h3>Competencias del DEUNA</h3>
                        <p>Representar a la comunidad estudiantil, atender y ejecutar los acuerdos del CAEUNA, Congreso de Estudiantes y Asamblea General.</p>
                        <a href="reglamentos.html" class="btn-secondary">Ver reglamento</a>
                    </div>

                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fas fa-vote-yea"></i>
                        </div>
                        <h3>Modalidad de Elección</h3>
                        <p>Electos mediante votación universal, directa y secreta por la comunidad estudiantil. Período: 2 años.</p>
                        <a href="teeuna.html" class="btn-secondary">Proceso electoral</a>
                    </div>

                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <h3>Contacto DEUNA</h3>
                        <p>¿Tenés consultas o necesitás contactar al Directorio Estudiantil?</p>
                        <a href="contacto.html" class="btn-secondary">Contactar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER PLACEHOLDER -->
    <div id="footer-placeholder"></div>

        <!-- Scripts -->
        <script src="js/main.js"></script>
        <script>
        // DEUNA: enhanced filter with dynamic explanation
        (function(){
            const descriptions = {
                all: 'Directorio completo del DEUNA. Aquí aparecen todos los integrantes y sus cargos.',
                directorio: 'Presidencia',
                finanzas: 'Comisión de Finanzas: gestión presupuestaria y transparencia financiera de FEUNA.',
                ecologicos: 'Comisión de Asuntos Ecológicos: defensa del medio ambiente y prácticas sustentables en el campus.',
                comunicacion: 'Oficina de Comunicación e Información: comunicación institucional y difusión.',
                'asuntos-universitarios': 'Comisión de Asuntos Universitarios: defensa de la educación pública y vinculación con la sociedad.',
                regionales: 'Comisión de Asuntos Regionales: representación y apoyo a sedes regionales y estudiantes itinerantes.',
                cultura: 'Comisión de Cultura, Recreación y Deporte: actividades culturales, artísticas y deportivas.',
                diversidad: 'Comisión de Diversidad, Equidad y Género: apoyo a poblaciones vulnerabilizadas e igualdad de derechos.',
                politica: 'Comisión de Política Nacional e Internacional: coordinación y acción política estudiantil.',
                consaca: 'Representantes ante CONSACA.',
                cu: 'Representantes ante el Consejo Universitario.'
            };

            const meta = {
                directorio: {
                    title: 'Presidencia',
                    text: 'Presidencia: responsable de la dirección operativa del DEUNA.',
                    functions: ['Convocar y dirigir reuniones del DEUNA','Representar institucionalmente a FEUNA','Coordinar la ejecución del plan de trabajo']
                },
                secretaria: {
                    title: 'Secretaría General',
                    text: 'La Secretaría General organiza el trabajo interno de la FEUNA y asegura el seguimiento de acuerdos y procesos.',
                    functions: ['Dar seguimiento a acuerdos y tareas del Directorio','Apoyar la organización y el funcionamiento interno','Mantener control de actas, convocatorias y comunicación institucional','Representar a la FEUNA en instancias universitarias cuando corresponda']
                },
                finanzas: {
                    title: 'Finanzas',
                    text: 'Gestión presupuestaria, control y transparencia de recursos estudiantiles.',
                    functions: ['Elaborar y supervisar presupuestos','Rendir cuentas ante FEUNA','Proponer criterios de asignación de fondos']
                },
                ecologicos: {
                    title: 'Asuntos Ecológicos',
                    text: 'Promover prácticas sustentables y campañas ambientales en el campus.',
                    functions: ['Diseñar campañas ambientales','Promover reciclaje y ahorro energético','Coordinar actividades de conservación']
                },
                comunicacion: {
                    title: 'Comunicación',
                    text: 'Oficina encargada de la difusión institucional y la comunicación con la comunidad.',
                    functions: ['Gestionar redes y boletines','Coordinar comunicaciones oficiales','Apoyar en la difusión de actividades']
                },
                'asuntos-universitarios': {
                    title: 'Asuntos Universitarios',
                    text: 'Defensa de la educación pública y propuestas académicas para la comunidad estudiantil.',
                    functions: ['Formular propuestas académicas','Representar demandas estudiantiles','Vincular con actores académicos']
                },
                regionales: {
                    title: 'Asuntos Regionales',
                    text: 'Atención y representación de estudiantes en sedes y regiones.',
                    functions: ['Canalizar demandas regionales','Coordinar presencia en sedes','Facilitar participación estudiantil local']
                },
                cultura: {
                    title: 'Cultura y Deporte',
                    text: 'Organización de actividades culturales, artísticas y deportivas.',
                    functions: ['Organizar eventos culturales','Fomentar actividades deportivas','Apoyar grupos artísticos estudiantiles']
                },
                diversidad: {
                    title: 'Diversidad, Equidad y Género',
                    text: 'Promover políticas de igualdad y protección de grupos vulnerabilizados.',
                    functions: ['Diseñar políticas de inclusión','Atender situaciones de violencia de género','Promover formación en derechos']
                },
                politica: {
                    title: 'Política Nacional e Internacional',
                    text: 'Coordinación de la acción política y la representación estudiantil.',
                    functions: ['Representar a FEUNA en espacios políticos','Coordinar campañas y alianzas','Monitorear asuntos públicos relevantes']
                },
                consaca: {
                    title: 'CONSACA',
                    text: 'Representantes ante CONSACA.',
                    functions: ['Participar en reuniones de CONSACA','Defender acuerdos estudiantiles','Informar sobre decisiones y procesos']
                },
                cu: {
                    title: 'Consejo Universitario',
                    text: 'Representantes ante el Consejo Universitario.',
                    functions: ['Defender intereses estudiantiles en el CU','Presentar propuestas y mociones','Reportar decisiones al estudiantado']
                }
            };

            function applyFilter(container, filter){
                const items = container.querySelectorAll('.member-card');
                items.forEach(item=>{
                    if(filter==='all'){
                        item.style.display='';
                    } else {
                        const cat = item.dataset.category || '';
                        item.style.display = (cat === filter) ? '' : 'none';
                    }
                });
            }

            function initDeunaFilters(){
                const buttons = document.querySelectorAll('.filter-btn');
                const highlightEl = document.getElementById('filter-highlight');
                if(!buttons.length) return;
                buttons.forEach(btn=>btn.addEventListener('click', function(){
                    const targetId = this.dataset.target;
                    const filter = this.dataset.filter;
                    // toggle active class
                    buttons.forEach(b=>b.classList.remove('active'));
                    this.classList.add('active');
                    const container = document.getElementById(targetId);
                    if(container) applyFilter(container, filter);
                    if(highlightEl){
                        const m = meta[filter];
                        if(m){
                            let html = `<h4>${m.title}</h4><p>${m.text}</p>`;
                            if(Array.isArray(m.functions) && m.functions.length){
                                html += '<ul>' + m.functions.map(f=>`<li>${f}</li>`).join('') + '</ul>';
                            }
                            highlightEl.innerHTML = html;
                            highlightEl.style.display = '';
                        } else {
                            highlightEl.style.display = 'none';
                            highlightEl.innerHTML = '';
                        }
                    }
                }));

                // set initial state: hide highlight when 'all'
                const active = document.querySelector('.filter-btn.active');
                const initial = active ? active.dataset.filter : 'all';
                const container = document.getElementById(active ? active.dataset.target : 'members');
                if(container) applyFilter(container, initial);
                if(highlightEl){
                    if(initial === 'all') { highlightEl.style.display = 'none'; }
                    else {
                        const m = meta[initial];
                        if(m){
                            let html = `<h4>${m.title}</h4><p>${m.text}</p>`;
                            if(Array.isArray(m.functions) && m.functions.length) html += '<ul>' + m.functions.map(f=>`<li>${f}</li>`).join('') + '</ul>';
                            highlightEl.innerHTML = html; highlightEl.style.display = '';
                        }
                    }
                }
            }

            if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initDeunaFilters);
            else initDeunaFilters();
        })();
        </script>
</body>
</html>
```

### 5.2 `mockup/index.html`
La página de inicio usa la misma base compartida y agrega:
- hero principal
- accesos rápidos
- bloques temáticos
- noticias/eventos
- llamadas a la participación y a los servicios

### 5.3 `mockup/feuna.html`
Página institucional con:
- breadcrumb
- título institucional
- texto explicativo
- misión, visión o principios según el montaje

---

## 6. Observaciones para Figma AI

### 6.1 Qué debe leer Figma de este atlas
- el sitio usa un sistema común de header/footer
- la identidad visual se centra en rojo FEUNA y azul UNA
- los componentes se repiten entre páginas
- DEUNA usa filtros y cards de personas
- las imágenes de personas deben ser rectangulares, no circulares
- el sitio tiene una base clara para convertir en librería de componentes

### 6.2 Qué debe respetar al diseñar
- rutas ya normalizadas en el manifiesto
- tipografía Space Grotesk
- jerarquía clara y contenido útil
- responsiveness
- accesibilidad
- placeholders marcados

### 6.3 Qué debe evitar
- inventar rutas o assets nuevos sin fundamento
- ignorar las páginas ya listadas
- usar un estilo visual ajeno al tono FEUNA
- borrar el sistema de representación y servicios
- aplanar todo en una sola landing genérica

---

## 7. Resumen práctico

Si Figma AI necesita el código base del proyecto, este atlas debe usarse junto con:
- [FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml](FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml)
- [INVENTARIO-CONTENIDO-Y-ESTADO-FEUNA.md](INVENTARIO-CONTENIDO-Y-ESTADO-FEUNA.md)
- [mockup/common/header.html](mockup/common/header.html)
- [mockup/common/footer.html](mockup/common/footer.html)
- [mockup/js/main.js](mockup/js/main.js)
- [mockup/css/styles.css](mockup/css/styles.css)
- [mockup/deuna.html](mockup/deuna.html)

Con eso tiene el sistema completo: inventario, recursos, rutas, componentes y comportamiento.
