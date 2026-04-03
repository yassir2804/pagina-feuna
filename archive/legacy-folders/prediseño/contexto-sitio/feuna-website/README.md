# Sitio Web FEUNA – Guía de Implementación

**Versión:** 2.1  
**Tecnología:** HTML5 + CSS3 + JavaScript Vanilla  
**Colores:** Azul UNA `#034991` | Rojo FEUNA `#bb1f1f`  
**Tipografía:** Space Grotesk (Google Fonts)

---

## 📁 Estructura de Archivos

```
feuna-website/
│
├── index.html              ← Página de inicio
├── feuna.html              ← ¿Qué es la FEUNA? (institucional)
├── deuna.html              ← Directorio Estudiantil DEUNA
├── historia.html           ← Historia y Logros
│
├── css/
│   └── styles.css          ← Todos los estilos del sitio
│
├── js/
│   └── main.js             ← Header, footer, navegación (inyectados dinámicamente)
│
├── images/
│   ├── hero-campus.jpg     ← Imagen principal del hero (reemplazar)
│   ├── noticia-1.jpg       ← Imágenes de noticias (reemplazar)
│   ├── noticia-2.jpg
│   ├── noticia-3.jpg
│   └── deuna/
│       ├── marco-viquez.jpg       ← Fotos de integrantes DEUNA (reemplazar)
│       ├── daniela-chaves.jpg
│       └── ... (25 fotos)
│
└── pages/
    ├── noticias.html
    ├── tramites.html
    ├── servicios.html
    ├── becas.html
    ├── oportunidades.html
    ├── participacion.html
    ├── transparencia.html
    ├── epeticiones.html
    ├── contacto.html
    ├── caeuna.html
    ├── teeuna.html
    ├── asociaciones.html
    ├── representacion-cu.html
    ├── defensor.html
    ├── denuncias.html
    ├── eventos.html
    ├── boletines.html
    ├── faq.html
    ├── salud.html
    ├── sistemas.html
    ├── guias.html
    ├── reglamentos.html
    ├── plan-trabajo.html
    ├── archivo.html
    ├── reservas.html
    └── vida-universitaria.html
```

---

## 🚀 Cómo Usar

### Opción A: Abrir directamente (desarrollo)
1. Descomprimí el ZIP
2. Abrí `index.html` en cualquier navegador moderno
3. ¡Listo! Todo funciona sin servidor

### Opción B: Servidor local (recomendado)
```bash
# Con Python (viene instalado en Mac/Linux)
cd feuna-website
python3 -m http.server 8080
# Abrí: http://localhost:8080

# Con Node.js
npx serve .
```

### Opción C: Subir a hosting
- Subí todos los archivos al servidor (por FTP, Git, cPanel, etc.)
- El sitio no requiere PHP ni base de datos
- Compatible con cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.)

---

## 🖼️ Reemplazar Imágenes

Las imágenes de placeholder están en formato SVG. Para reemplazarlas:

### Fotos del DEUNA
Reemplazá cada archivo en `images/deuna/` con una foto real:
- Tamaño recomendado: **400×400 px** (cuadrada)
- Formato: JPG o PNG
- Nombre exacto: `marco-viquez.jpg`, `daniela-chaves.jpg`, etc.

### Hero principal
- Reemplazá `images/hero-campus.jpg`
- Tamaño recomendado: **1920×1080 px**
- La imagen oscurece automáticamente con el overlay azul

### Noticias
- Reemplazá `images/noticia-1.jpg`, `noticia-2.jpg`, `noticia-3.jpg`
- Tamaño recomendado: **800×450 px** (16:9)

---

## ✏️ Editar Contenido

### Cambiar datos del DEUNA
Abrí `deuna.html` y buscá el bloque con el nombre a modificar:
```html
<div class="member-card" data-category="directorio">
  <h3 class="member-name">Marco Viquez Fallas</h3>
  <p class="member-position">Presidencia</p>
</div>
```

### Agregar noticias
En `pages/noticias.html`, copiá un bloque `<article class="noticia-card">` y modificá el contenido.

### Cambiar eventos
En `pages/eventos.html` y en `index.html`, modificá los bloques `.evento-item` con las fechas actuales.

### Actualizar becas banner
En `index.html`, buscá `.becas-banner` y actualizá la fecha límite y el texto.

---

## 🎨 Personalizar Estilos

Todos los colores y variables están en `css/styles.css` al inicio:

```css
:root {
  --azul: #034991;       /* Azul UNA */
  --rojo: #bb1f1f;       /* Rojo FEUNA */
  --gris: #666666;       /* Texto secundario */
  --negro: #111111;      /* Texto principal */
  --blanco: #ffffff;     /* Fondos */
  --fondo: #f5f7fa;      /* Fondo suave */
}
```

---

## 🔧 Header y Footer Dinámicos

El header y footer se generan automáticamente desde `js/main.js`. Para modificarlos, editá las funciones `renderHeader()` y `renderFooter()`.

**Para agregar una nueva página al menú:**
```javascript
{ label: 'Mi Página', href: 'pages/mi-pagina.html', icon: 'fa-star', sub: [
  { label: 'Sub Página', href: 'pages/mi-pagina.html#seccion', icon: 'fa-circle' },
]}
```

---

## 📱 Responsive

El sitio es completamente responsive con 3 breakpoints:
- **Desktop:** ≥ 1024px — menú horizontal completo
- **Tablet:** 768px–1024px — grid adaptado
- **Móvil:** < 768px — hamburger menu, columna única

---

## 🌐 Integrar Google Calendar

En `pages/eventos.html`, reemplazá el placeholder del calendario con el embed oficial de Google Calendar:

```html
<!-- Reemplazar el div con clase map-placeholder por: -->
<iframe src="https://calendar.google.com/calendar/embed?src=TU_ID_DE_CALENDARIO&ctz=America%2FCosta_Rica"
  style="border:0" width="100%" height="400" frameborder="0" scrolling="no"></iframe>
```

---

## 📋 Lista de pendientes para lanzamiento

- [ ] Reemplazar fotos placeholder del DEUNA
- [ ] Subir foto hero del campus
- [ ] Reemplazar imágenes de noticias
- [ ] Actualizar correos y teléfonos de contacto
- [ ] Subir PDFs de actas, informes y documentos reales
- [ ] Integrar Google Calendar con el calendario real de FEUNA
- [ ] Configurar formularios (Google Forms, Formspree, o backend)
- [ ] Integrar Google Maps con ubicación de la oficina FEUNA
- [ ] Activar newsletter (Mailchimp, Sendinblue, etc.)
- [ ] Revisar y actualizar URLs de sistemas UNA (SIGA, Moodle, etc.)
- [ ] Agregar etiquetas Open Graph para redes sociales
- [ ] Configurar Google Analytics

---

## 📞 Soporte

Para consultas técnicas sobre el sitio:  
✉️ comunicacionfeuna@una.cr  
📞 (506) 2277-3236

---

*Desarrollado para la Federación de Estudiantes de la Universidad Nacional (FEUNA)*  
*Costa Rica – 2026*
