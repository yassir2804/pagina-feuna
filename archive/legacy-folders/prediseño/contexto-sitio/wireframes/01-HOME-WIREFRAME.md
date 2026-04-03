# 🏠 Wireframe: Página de Inicio (HOME)

**Versión:** 2.0 - REFORMADO  
**Fecha:** 10 de febrero de 2026  
**Resolución de referencia:** 1920x1080 (Desktop) | 375x667 (Mobile)  
**Alineado con:** 7 Secciones Finales (Sobre FEUNA, Órganos, Participá, Servicios UNA, Noticias)

---

## 🎨 Paleta de Colores (Institucional)

```
Azul UNA:  ███ #034991
Rojo FEUNA: ███ #bb1f1f
Gris texto: ███ #666666
Gris borde: ███ #dddddd
Negro:     ███ #000000
Blanco:    ███ #ffffff
```

## 🎯 Iconografía (Font Awesome 5)

| Sección/Elemento | Icono Font Awesome | Clase CSS |
|------------------|-------------------|-----------|
| **Navegación** |
| Trámites Digitales | 💻 | `fas fa-laptop` |
| Participación | 🗳️ | `fas fa-vote-yea` |
| Comunicación | 📢 | `fas fa-bullhorn` |
| Asociaciones/Representación | 👥 | `fas fa-users` |
| Búsqueda | 🔍 | `fas fa-search` |
| Menú móvil | ☰ | `fas fa-bars` |
| **9 Ejes de Trabajo** |
| Regionalización | 🗺️ | `fas fa-map-marked-alt` |
| Salud Integral | ❤️ | `fas fa-heartbeat` |
| Cultura | 🎨 | `fas fa-palette` |
| Diversidad/Género | 🤝 | `fas fa-hands-helping` |
| Comunicación | 💬 | `fas fa-comments` |
| Medio Ambiente | 🌿 | `fas fa-leaf` |
| Transformación Digital | 💻 | `fas fa-laptop-code` |
| Vinculación | 🤝 | `fas fa-handshake` |
| Educación Pública | 🎓 | `fas fa-graduation-cap` |
| **Servicios** |
| SIBEUNA (Becas) | 💰 | `fas fa-dollar-sign` |
| Bibliotecas | 📚 | `fas fa-book` |
| Salud | 🏥 | `fas fa-medkit` |
| Matrícula | ✍️ | `fas fa-edit` |
| Aula Virtual | 👨‍🏫 | `fas fa-chalkboard-teacher` |
| Defensoría | 🛡️ | `fas fa-shield-alt` |
| **Otros** |
| Calendario/Eventos | 📅 | `far fa-calendar-alt` |
| Documentos/Formularios | 📄 | `fas fa-file-alt` |
| Redes Sociales | 📱 | `fab fa-facebook`, `fab fa-instagram`, etc. |
| Contacto/Email | ✉️ | `fas fa-envelope` |
| Teléfono | 📞 | `fas fa-phone` |
| Ubicación | 📍 | `fas fa-map-marker-alt` |

**Nota:** Se usa Font Awesome 5 (ya incluido en el sitio actual)

---

## 📐 Layout Desktop (1920px)

```
╔════════════════════════════════════════════════════════════════════════╗
║  [LOGO FEUNA]  INICIO | SOBRE FEUNA | ÓRGANOS | PARTICIPÁ |          ║
║                SERVICIOS UNA | NOTICIAS | CONTACTO                    ║
║                                                    [🔍] [FB] [IG] [📞] ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║   ┌────────────────────────────────────────────────────────────────┐  ║
║   │                                                                │  ║
║   │          [IMAGEN SLIDESHOW - Estudiantes UNA]                 │  ║
║   │                                                                │  ║
║   │    ¡ATRÉVETE A VIVIR LA U MÁS ALLÁ DE LAS AULAS!             │  ║
║   │                                                                │  ║
║   │    La FEUNA es tu voz en la Universidad Nacional.            │  ║
║   │    Accedé a información, recursos y espacios de              │  ║
║   │    participación estudiantil.                                 │  ║
║   │                                                                │  ║
║   │    [<i class="fas fa-vote-yea"></i> Participá]               │  ║
║   │    [<i class="fas fa-users"></i> Órganos FEUNA]               │  ║
║   │    [<i class="fas fa-bullhorn"></i> Noticias]                 │  ║
║   │    [<i class="fas fa-laptop"></i> Servicios UNA]              │  ║
║   │                                                                │  ║
║   └────────────────────────────────────────────────────────────────┘  ║
║                                                                        ║
╠════════════════════════════════════════════════════════════════════════╣
║              EXPLORA LAS ÁREAS PRINCIPALES DE FEUNA                  ║
╠════════════════════════════════════════════════════════════════════════╣
║  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐      ║
║  │<i class="fas fa-info-circle"></i>          │  │<i class="fas fa-users-cog"></i>          │  │<i class="fas fa-vote-yea"></i>          │      ║
║  │ SOBRE FEUNA     │  │ ÓRGANOS         │  │ PARTICIPÁ       │      ║
║  │                 │  │                 │  │                 │      ║
║  │ Historia,       │  │ DEUNA, CAEUNA,  │  │ E-peticiones,   │      ║
║  │ estatuto, qué   │  │ TEEUNA, MEI,    │  │ consultas,      │      ║
║  │ es la FEUNA y   │  │ defensoría,     │  │ asambleas y     │      ║
║  │ cómo funciona   │  │ asociaciones    │  │ transparencia   │      ║
║  │                 │  │                 │  │                 │      ║
║  │ [Conocer →]     │  │ [Ver órganos →] │  │ [Participar →]  │      ║
║  └─────────────────┘  └─────────────────┘  └─────────────────┘      ║
║                                                                        ║
║  ┌─────────────────┐  ┌─────────────────┐                           ║
║  │<i class="fas fa-university"></i>          │  │<i class="fas fa-bullhorn"></i>          │                           ║
║  │ SERVICIOS UNA   │  │ NOTICIAS        │                           ║
║  │                 │  │                 │                           ║
║  │ Becas, salud,   │  │ Eventos, actas, │                           ║
║  │ bibliotecas,    │  │ transmisiones y │                           ║
║  │ guías y más     │  │ calendario      │                           ║
║  │ info de UNA     │  │ estudiantil     │                           ║
║  │                 │  │                 │                           ║
║  │ [Explorar →]    │  │ [Ver todo →]    │                           ║
║  └─────────────────┘  └─────────────────┘                           ║
╠════════════════════════════════════════════════════════════════════════╣
║                        ACCESOS RÁPIDOS                                ║
╠════════════════════════════════════════════════════════════════════════╣
║  Las herramientas más usadas del movimiento estudiantil              ║
║                                                                        ║
║  [<i class="fas fa-hand-paper"></i> E-Peticiones]  [<i class="fas fa-poll"></i> Consultas]  [<i class="fas fa-dollar-sign"></i> Transparencia]    ║
║  [<i class="fas fa-user-tie"></i> Representantes]  [<i class="fas fa-file-download"></i> Formularios]  [<i class="fas fa-briefcase"></i> Oportunidades]║
║  [<i class="fas fa-users"></i> Asociaciones]  [<i class="fas fa-calendar-check"></i> Eventos]                              ║
╠════════════════════════════════════════════════════════════════════════╣
║                        NOTICIAS DESTACADAS                            ║
╠════════════════════════════════════════════════════════════════════════╣
║  ┌───────────┐  ┌───────────┐  ┌───────────┐                        ║
║  │[IMG]      │  │[IMG]      │  │[IMG]      │                        ║
║  │           │  │           │  │           │                        ║
║  │<i class="fas fa-map-marked-alt"></i> Regional│  │<i class="fas fa-graduation-cap"></i> Educación│  │<i class="fas fa-palette"></i> Cultura │                        ║
║  │           │  │           │  │           │                        ║
║  │Título de  │  │Título de  │  │Título de  │                        ║
║  │la noticia │  │la noticia │  │la noticia │                        ║
║  │           │  │           │  │           │                        ║
║  │20 nov 2025│  │19 nov 2025│  │18 nov 2025│                        ║
║  │           │  │           │  │           │                        ║
║  │[Leer más →]│ │[Leer más →]│ │[Leer más →]│                        ║
║  └───────────┘  └───────────┘  └───────────┘                        ║
║                                                        [Ver todas →]  ║
╠════════════════════════════════════════════════════════════════════════╣
║                       PRÓXIMOS EVENTOS                                ║
╠════════════════════════════════════════════════════════════════════════╣
║  <i class="far fa-calendar-alt"></i> 25 Nov - Asamblea General FEUNA - Auditorio UNA - 10:00 am       ║
║  <i class="far fa-calendar-alt"></i> 28 Nov - Taller de Diversidad - Sala Multiusos - 2:00 pm         ║
║  <i class="far fa-calendar-alt"></i> 01 Dic - Festival Cultural FEUNA - Campus Omar Dengo - 9:00 am   ║
║                                               [Ver calendario completo]║
╠════════════════════════════════════════════════════════════════════════╣
║                     SERVICIOS UNA PARA ESTUDIANTES                    ║
╠════════════════════════════════════════════════════════════════════════╣
║  Recursos y apoyo de la Universidad Nacional                          ║
║                                                                        ║
║  [<i class="fas fa-dollar-sign"></i> Becas]  [<i class="fas fa-heartbeat"></i> Salud]  [<i class="fas fa-book"></i> Bibliotecas]              ║
║  [<i class="fas fa-graduation-cap"></i> Vida Universitaria]  [<i class="fas fa-compass"></i> Guías]                    ║
║                                                [Ver todos los servicios]║
╠════════════════════════════════════════════════════════════════════════╣
║                    TRANSPARENCIA Y RENDICIÓN                          ║
║              ███ Fondo Rojo FEUNA #bb1f1f ███                        ║
╠════════════════════════════════════════════════════════════════════════╣
║  Consultá el presupuesto de FEUNA, ejecución financiera,            ║
║  actas de órganos estudiantiles e informes de labores.               ║
║                                                                        ║
║  [Ver Presupuesto] [Ver Actas] [Informes de Labores]                ║
╠════════════════════════════════════════════════════════════════════════╣
║                   ¡PARTICIPÁ EN EL MOVIMIENTO!                        ║
╠════════════════════════════════════════════════════════════════════════╣
║  [Imagen de estudiantes participando]                                ║
║                                                                        ║
║  Tu voz importa. Involúcrate a través de e-peticiones, consultas,   ║
║  asambleas, comisiones del DEUNA y proyectos estudiantiles.         ║
║  La FEUNA es tu espacio de participación y transformación.           ║
║                                                                        ║
║  [E-Peticiones] [Consultas] [Oportunidades] [Sé Parte de FEUNA]     ║
╠════════════════════════════════════════════════════════════════════════╣
║                            FOOTER                                     ║
╠════════════════════════════════════════════════════════════════════════╣
║  FEUNA              SERVICIOS          PARTICIPACIÓN    CONTACTO     ║
║  ¿Qué es?           Becas              E-Peticiones     Tel: 2277-3236║
║  Estructura         Salud              Transparencia    Email:        ║
║  Historia           Bibliotecas        Formularios      comunicacion@ ║
║                     Defensoría                          feuna.una.cr  ║
║                                                                        ║
║  REDES SOCIALES:                                                      ║
║  [<i class="fab fa-facebook"></i>] [<i class="fab fa-instagram"></i>] [<i class="fab fa-twitter"></i>] [<i class="fab fa-youtube"></i>] [<i class="fab fa-tiktok"></i>]     ║
║                                                                        ║
║  © 2025 FEUNA - Todos los derechos reservados                        ║
║  Política de Privacidad | Términos de Uso                            ║
╚════════════════════════════════════════════════════════════════════════╝
```

---

## 📱 Layout Mobile (375px)

```
╔═══════════════════════════════╗
║  [☰]  [LOGO FEUNA]     [🔍]  ║
╠═══════════════════════════════╣
║                               ║
║  ┌─────────────────────────┐ ║
║  │   [IMAGEN HERO]         │ ║
║  │                         │ ║
║  │  ¡ATRÉVETE A VIVIR     │ ║
║  │  LA U MÁS ALLÁ DE      │ ║
║  │  LAS AULAS!            │ ║
║  │                         │ ║
║  │  [💻 Trámites]          │ ║
║  │  [🗳️ Participación]     │ ║
║  │  [📢 Noticias]          │ ║
║  │  [🤝 Sé Parte]          │ ║
║  └─────────────────────────┘ ║
║                               ║
╠═══════════════════════════════╣
║     ÁREAS PRINCIPALES         ║
╠═══════════════════════════════╣
║  ┌─────────────────────────┐ ║
║  │ ℹ️ SOBRE FEUNA          │ ║
║  │                         │ ║
║  │ Historia, estatuto,     │ ║
║  │ qué es FEUNA y cómo     │ ║
║  │ funciona                │ ║
║  │ [Conocer más →]         │ ║
║  └─────────────────────────┘ ║
║                               ║
║  ┌─────────────────────────┐ ║
║  │ ⚙️ ÓRGANOS              │ ║
║  │                         │ ║
║  │ DEUNA, CAEUNA, TEEUNA,  │ ║
║  │ MEI, defensoría y       │ ║
║  │ asociaciones            │ ║
║  │ [Ver órganos →]         │ ║
║  └─────────────────────────┘ ║
║                               ║
║  ┌─────────────────────────┐ ║
║  │ 🗳️ PARTICIPÁ            │ ║
║  │                         │ ║
║  │ E-peticiones, consultas │ ║
║  │ asambleas y más         │ ║
║  │ [Participar →]          │ ║
║  └─────────────────────────┘ ║
║                               ║
║  ┌─────────────────────────┐ ║
║  │ 🏛️ SERVICIOS UNA        │ ║
║  │                         │ ║
║  │ Becas, salud, biblio,   │ ║
║  │ guías y más info UNA    │ ║
║  │ [Explorar →]            │ ║
║  └─────────────────────────┘ ║
║                               ║
║  ┌─────────────────────────┐ ║
║  │ 📢 NOTICIAS             │ ║
║  │                         │ ║
║  │ Eventos, calendario y   │ ║
║  │ transmisiones           │ ║
║  │ [Ver noticias →]        │ ║
║  └─────────────────────────┘ ║
║  │ CU/CONSACA              │ ║
║  │ [Conocer →]             │ ║
║  └─────────────────────────┘ ║
╠═══════════════════════════════╣
║   9 EJES DE TRABAJO           ║
╠═══════════════════════════════╣
║  [🌍 Regionalización]         ║
║  [🏥 Salud Integral]          ║
║  [🎨 Cultura]                 ║
║  [🌈 Diversidad]              ║
║  [📢 Comunicación]            ║
║  [🌱 Medio Ambiente]          ║
║  [💻 Digital]                 ║
║  [🤝 Vinculación]             ║
║  [📚 Ed. Pública]             ║
╠═══════════════════════════════╣
║   NOTICIAS DESTACADAS         ║
╠═══════════════════════════════╣
║  ┌─────────────────────────┐ ║
║  │ [IMAGEN]                │ ║
║  │ 🌍 Regionalización      │ ║
║  │                         │ ║
║  │ Título de la noticia    │ ║
║  │ 20 nov 2025             │ ║
║  │ [Leer más →]            │ ║
║  └─────────────────────────┘ ║
║                               ║
║  ┌─────────────────────────┐ ║
║  │ [IMAGEN]                │ ║
║  │ 📚 Educación Pública    │ ║
║  │                         │ ║
║  │ Título de la noticia    │ ║
║  │ 19 nov 2025             │ ║
║  │ [Leer más →]            │ ║
║  └─────────────────────────┘ ║
║                               ║
║        [Ver todas →]          ║
╠═══════════════════════════════╣
║    PRÓXIMOS EVENTOS           ║
╠═══════════════════════════════╣
║  📅 25 Nov                    ║
║  Asamblea General FEUNA       ║
║  10:00 am                     ║
║                               ║
║  📅 28 Nov                    ║
║  Taller de Diversidad         ║
║  2:00 pm                      ║
║                               ║
║  [Ver calendario →]           ║
╠═══════════════════════════════╣
║   SERVICIOS ESTUDIANTILES     ║
╠═══════════════════════════════╣
║  [💰 SIBEUNA]                 ║
║  [📚 Bibliotecas]             ║
║  [🏥 Salud]                   ║
║  [📝 Matrícula]               ║
║  [🎓 Aula Virtual]            ║
║  [🛡️ Defensoría]              ║
║                               ║
║  [Ver todos →]                ║
╠═══════════════════════════════╣
║   ███ TRANSPARENCIA ███       ║
║   (Fondo Rojo #bb1f1f)        ║
╠═══════════════════════════════╣
║  Consultá presupuesto,        ║
║  actas e informes             ║
║                               ║
║  [Ver Presupuesto]            ║
║  [Ver Actas]                  ║
║  [Informes]                   ║
╠═══════════════════════════════╣
║        ¡SÉ PARTE!             ║
╠═══════════════════════════════╣
║  [IMAGEN]                     ║
║                               ║
║  ¡Involucrarte es fácil!      ║
║                               ║
║  Participá en las 7           ║
║  comisiones del DEUNA         ║
║                               ║
║  [Ver Comisiones]             ║
║  [Inscribirme]                ║
║  [Asociaciones]               ║
╠═══════════════════════════════╣
║          FOOTER               ║
╠═══════════════════════════════╣
║  FEUNA                        ║
║  ¿Qué es?                     ║
║  Estructura                   ║
║                               ║
║  SERVICIOS                    ║
║  Becas | Salud                ║
║                               ║
║  CONTACTO                     ║
║  Tel: 2277-3236               ║
║  comunicacion@feuna.una.cr    ║
║                               ║
║  REDES                        ║
║  [FB] [IG] [TW] [YT] [TT]    ║
║                               ║
║  © 2025 FEUNA                 ║
╚═══════════════════════════════╝
```

---

## 📝 Notas de Diseño

### Interacciones Clave:

1. **Slideshow Hero:**
   - Auto-play cada 5 segundos
   - Controles manuales (flechas + dots)
   - 3-4 imágenes de estudiantes en actividades

2. **Tags de Ejes (9 botones):**
   - Hover: Borde azul o rojo según color asignado
   - Click: Filtra noticias/proyectos relacionados
   - Diferenciación por emoji + ligeras variaciones de opacidad

3. **Cards de Noticias:**
   - Hover: Elevación sutil (shadow)
   - Tag del eje en esquina superior
   - Imagen destacada arriba

4. **Bloque Transparencia:**
   - Fondo rojo #bb1f1f
   - Texto blanco
   - Alto contraste

5. **Footer:**
   - 4 columnas en desktop
   - Stack vertical en mobile
   - Enlaces en gris #666

### Responsive Breakpoints:

- **Desktop:** 1920px - 1200px (4 columnas)
- **Tablet:** 1199px - 768px (2 columnas)
- **Mobile:** 767px - 375px (1 columna)

### Accesibilidad:

- Contraste WCAG AA: Mínimo 4.5:1 (texto normal)
- Alt text en todas las imágenes
- Labels claros en formularios
- Navegación con teclado (Tab)
- Foco visible en elementos interactivos

---

## ✅ Elementos Validados con Cliente

- ✅ Colores institucionales únicos (Azul/Rojo/Gris)
- ✅ 9 ejes de trabajo con emoji identificadores
- ✅ 4 bloques principales del Plan de Trabajo
- ✅ Bloque de Transparencia destacado (rojo)
- ✅ Mención a 7 comisiones del DEUNA
- ✅ Servicios estudiantiles UNA (recopilador)

---

**Siguiente wireframe:** Página de Representación Estudiantil (con comisiones DEUNA)
