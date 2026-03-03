# 🎓 FEUNA - Rediseño Sitio Web

**Proyecto:** Renovación del sitio web de la Federación de Estudiantes de la Universidad Nacional (FEUNA)  
**Estado:** Arquitectura validada → Diseño en progreso  
**Fecha:** Febrero 2026

---

## 📋 Descripción del Proyecto

Rediseño completo del sitio web de FEUNA enfocado en:
- ✅ Simplicidad y usabilidad (validado con 12 usuarios)
- ✅ Diferenciación clara: servicios FEUNA vs guía UNA
- ✅ Navegación por tareas, no por estructura organizativa
- ✅ Transparencia y participación estudiantil

**Brief completo:** [BRIEF-PROYECTO-FEUNA.md](BRIEF-PROYECTO-FEUNA.md)

---

## 📁 Estructura del Proyecto

```
📦 Página Web FEUNA/
├── 📄 BRIEF-PROYECTO-FEUNA.md              # Documento maestro del proyecto
├── 📄 ARQUITECTURA-SITIO-RENOVADO.md       # Arquitectura de información v2.1
├── 📄 RESUMEN-EJECUTIVO.md                 # Resumen ejecutivo del rediseño
├── 📄 PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md # Propuesta de simplicidad (vigente)
├── 📄 SITEMAP-VISUAL.md                    # Mapa del sitio visual
├── 📄 COMISIONES-DEUNA-MAPA.md             # Estructura de comisiones DEUNA
│
├── 📂 docs/                                # Documentación
│   ├── 📂 investigacion/                   # Investigación con usuarios
│   │   ├── ANALISIS-CARD-SORTING.md        # Análisis de 12 usuarios UNA
│   │   └── Card Sorting*.csv               # Resultados del card sorting
│   └── 📂 historial-cambios/               # Historial de versiones
│       ├── CAMBIOS-V1.1.md                 # Comisiones DEUNA (Nov 2025)
│       ├── CAMBIOS-V1.3-RESUMEN.md         # 9 ejes de trabajo (Nov 2025)
│       └── CAMBIOS-V2.1-CARD-SORTING.md    # Cambios validados (Feb 2026)
│
├── 📂 wireframes/                          # Wireframes de alta fidelidad
│   └── 01-HOME-WIREFRAME.md                # Wireframe página de inicio
│
├── 📂 mockup/                              # Mockup visual (HTML/CSS/JS)
│   ├── index.html                          # Página de inicio
│   ├── feuna.html                          # Página ¿Qué es FEUNA?
│   ├── deuna.html                          # Página DEUNA
│   ├── css/styles.css                      # Estilos institucionales
│   ├── js/main.js                          # JavaScript interactivo
│   ├── images/                             # Imágenes del mockup
│   └── common/                             # Componentes reutilizables
│       ├── header.html
│       └── footer.html
│
└── 📂 sitio-actual/                        # Referencia del sitio anterior
    ├── ANALISIS-SITIO-ACTUAL.md            # Análisis del sitio antiguo
    ├── REFERENCIA-RAPIDA.md                # Guía de colores y tipografía
    └── *.html                              # Páginas descargadas (referencia)
```

---

## 🎯 Documentos Clave

### 📘 Para Entender el Proyecto
1. **[BRIEF-PROYECTO-FEUNA.md](BRIEF-PROYECTO-FEUNA.md)** - Documento maestro con dilemmas, consideraciones y decisiones
2. **[RESUMEN-EJECUTIVO.md](RESUMEN-EJECUTIVO.md)** - Resumen ejecutivo para stakeholders

### 🏗️ Arquitectura y Diseño
3. **[ARQUITECTURA-SITIO-RENOVADO.md](ARQUITECTURA-SITIO-RENOVADO.md)** - Arquitectura de información v2.1 (validada con usuarios)
4. **[PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md](PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md)** - Propuesta de simplicidad con diferenciación FEUNA/UNA
5. **[SITEMAP-VISUAL.md](SITEMAP-VISUAL.md)** - Mapa visual del sitio

### 🔬 Investigación
6. **[docs/investigacion/ANALISIS-CARD-SORTING.md](docs/investigacion/ANALISIS-CARD-SORTING.md)** - Análisis de 12 usuarios UNA (Febrero 2026)

### 📜 Historial
7. **[docs/historial-cambios/](docs/historial-cambios/)** - Todas las versiones anteriores

---

## 🎨 Identidad Visual

### Colores Institucionales
- **Rojo FEUNA:** `#bb1f1f` (color principal, servicios FEUNA)
- **Azul UNA:** `#034991` (color secundario, servicios UNA)
- **Gris texto:** `#666666`
- **Negro:** `#000000`
- **Blanco:** `#ffffff`

### Tipografía
- **Familia:** Space Grotesk (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700

### Sistema de Diferenciación Visual
```
SERVICIOS FEUNA (propios):
├─ Color: Rojo #bb1f1f
├─ Badge: "SERVICIO FEUNA"
├─ Borde: Sólido 2px
└─ Botón: Interno "Acceder"

SERVICIOS UNA (guía):
├─ Color: Azul #034991
├─ Etiqueta: "🔗 SERVICIO UNA - [Dependencia]"
├─ Borde: Discontinuo 2px
└─ Botones: Externo "Ir al sitio ↗" + Tutorial "Ver guía FEUNA"
```

---

## 🚀 Cómo Usar Este Repositorio

### Para Desarrolladores
1. **Revisar:** [ARQUITECTURA-SITIO-RENOVADO.md](ARQUITECTURA-SITIO-RENOVADO.md) para entender la estructura
2. **Explorar:** Carpeta `mockup/` para ver el diseño visual implementado
3. **Probar localmente:**
   ```powershell
   cd mockup
   python -m http.server 8000
   # Abrir navegador en http://localhost:8000
   ```

### Para Diseñadores
1. **Revisar:** [PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md](PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md) para principios de diseño
2. **Ver wireframes:** Carpeta `wireframes/`
3. **Consultar colores:** [sitio-actual/REFERENCIA-RAPIDA.md](sitio-actual/REFERENCIA-RAPIDA.md)

### Para Stakeholders
1. **Leer:** [BRIEF-PROYECTO-FEUNA.md](BRIEF-PROYECTO-FEUNA.md) - Explicación completa del proyecto
2. **Ver:** [RESUMEN-EJECUTIVO.md](RESUMEN-EJECUTIVO.md) - Resumen de 5 minutos

---

## 📊 Hitos del Proyecto

- ✅ **Nov 2025:** Análisis del sitio actual
- ✅ **Nov 2025:** Arquitectura v1.0 (estructura inicial)
- ✅ **Ene 2026:** Card sorting con 12 usuarios UNA
- ✅ **Feb 2026:** Arquitectura v2.1 (validada con usuarios)
- ✅ **Feb 2026:** Propuesta de simplicidad v2
- ⏳ **Feb 2026:** Wireframes completos (en progreso)
- 📅 **Mar 2026:** Mockup visual completo
- 📅 **Abr 2026:** Prototipo funcional
- 📅 **May 2026:** Desarrollo backend
- 📅 **Jun 2026:** Lanzamiento

---

## 🤝 Equipo

**Cliente:** FEUNA - Federación de Estudiantes UNA  
**Contacto:** Yassir Jiménez Carballo  
**Email:** comunicacionfeuna@una.cr  
**Teléfono:** (506) 2277-3236

---

## 📄 Licencia

© 2025-2026 FEUNA - Federación de Estudiantes Universidad Nacional, Costa Rica  
Este proyecto es propiedad de FEUNA. Uso interno y educativo.

---

## 📝 Notas de Versión Actual

**Versión:** 2.1  
**Fecha:** Febrero 10, 2026  
**Cambios principales:**
- ✅ Arquitectura validada con 12 usuarios (card sorting)
- ✅ Cambio crítico: CONTACTO → PARTICIPACIÓN
- ✅ Triple acceso a becas (dispersión crítica)
- ✅ Diferenciación visual FEUNA vs UNA
- ✅ Propuesta de simplicidad con jerarquía de 3 niveles
- ✅ **DECISIÓN CRÍTICA (10 Feb 2026):** 4 mega-menús (no 8 secciones)
- ✅ **ESTRATEGIA CONTENIDO:** Placeholders temporales, recopilación en paralelo

**Decisiones arquitectónicas tomadas:**
- **Navegación:** 4 mega-menús (🔍 BUSCADOR | FEUNA HACE | GUÍA ESTUDIANTE | SOBRE FEUNA | 📞)
- **Justificación:** Simplificación radical validada por card sorting, mejor UX
- **Contenido:** Mockups con placeholders (Lorem Ipsum, fechas ejemplo, imágenes placeholder)
- **Proceso paralelo:** Comunicación FEUNA recopila contenido real durante diseño

**Sistema de Diseño Completo (10 Feb 2026):**
- ✅ **Colores:** 40+ definidos (principales, variaciones, estados)
- ✅ **Tipografía:** Escala modular H1-H6 (48px-18px desktop, escalado móvil)
- ✅ **Espaciados:** Sistema base 8 (4px-128px, 9 niveles)
- ✅ **Breakpoints:** 5 puntos responsive (320px-1920px)
- ✅ **Componentes:** Sombras, transiciones, z-index, radios definidos

**Próximos pasos:**
1. ✅ ~~Definir especificaciones técnicas completas~~ COMPLETADO
2. ✅ ~~Priorizar páginas por fases~~ COMPLETADO
3. 🎯 **EN PROGRESO:** Rediseñar página Inicio con 4 mega-menús
4. Diseñar wireframes/mockups de alta fidelidad con placeholders
5. Crear componentes reutilizables (botones, cards, formularios)
6. Recopilar contenido real (nombres DEUNA, fechas asambleas, URLs, noticias)

---

## 🌐 Ver Cambios en Tiempo Real

**Servidor local activo:** http://localhost:8000

Mientras trabajamos, podés ver los cambios en tiempo real:
1. Abrí el navegador en http://localhost:8000
2. Los cambios se actualizan al refrescar (F5)
3. Usa DevTools (F12) para ver responsive

**Estado actual del diseño:**
- 📄 index.html - ⏳ En progreso (rediseño con 4 mega-menús)
- 📄 feuna.html - ✅ Existente (referencia)
- 📄 deuna.html - ✅ Existente (referencia)

---

## 🧹 Log de Limpieza (10 Feb 2026)

**Archivos eliminados (23 total):**
- ✅ 9 archivos de proceso card sorting (MENSAJE-DIFUSION, CARD-SORTING-GOOGLE-FORMS, scripts)
- ✅ 13 HTMLs de referencia sitio anterior (solo se mantienen index.html, feuna-acerca y análisis)
- ✅ 4 imágenes placeholder/duplicadas (hero-campus.jpg, WhatsApp image, noticias placeholder)
- ✅ 1 archivo temporal (temp_home.html ~1.1MB)
- ✅ 1 archivo de instrucciones (PROMPT-MOCKUPS-FEUNA.md 82KB)
- ✅ Carpeta common/ mockup (componentes no usados)
- ✅ PROPUESTA-SIMPLICIDAD-JERARQUIA.md v1 (consolidada en V2)
- ✅ RESUMEN-IMAGENES.md (info en README mockup)
- ✅ css-links.txt

**Resultado:**
- Espacio liberado: ~1.6 MB
- Archivos reducidos: 70 → 47 (-33%)
- Solo archivos esenciales del proyecto
- Listo para GitHub
