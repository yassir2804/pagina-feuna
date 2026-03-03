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
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
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
