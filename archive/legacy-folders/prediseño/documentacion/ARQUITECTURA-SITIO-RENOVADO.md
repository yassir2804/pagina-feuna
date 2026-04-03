# 🏗️ Arquitectura del Sitio Web FEUNA Renovado

**Versión:** 2.1  
**Fecha:** 10 de febrero de 2026  
**Enfoque:** 8 categorías principales optimizadas según card sorting  
**Última actualización:** Ajustes basados en feedback de usuarios (v2.1 - Card Sorting)

---

## 🎯 Filosofía del Rediseño

### Principios de Organización
✅ **8 categorías principales** que caben en el header en una sola fila  
✅ Cada categoría agrupa contenidos afines con subpáginas desplegables  
✅ Navegación simplificada y directa  
✅ Orientada a la **acción estudiantil** y **transparencia**  
✅ Visibilidad de todos los servicios desde el menú principal

### Mantener
✅ Áreas de trabajo como filtros en noticias (9 áreas temáticas)  
✅ Sistema de Noticias con categorías  
✅ Recursos y Servicios Estudiantiles  
✅ Información de DEUNA, CAEUNA, TEEUNA  
✅ Identidad visual (colores #034991 azul UNA, #bb1f1f rojo FEUNA, tipografía Space Grotesk)

---

## 📐 Estructura Principal (8 Categorías Header)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  INICIO  │  FEUNA  │  REPRESENTACIÓN  │  NOTICIAS  │  TRÁMITES  │      │
│          │         │                  │           │            │      │
│  SERVICIOS  │  OPORTUNIDADES  │  PARTICIPACIÓN                        │
└─────────────────────────────────────────────────────────────────────────┘
```

**⚠️ CAMBIO CRÍTICO v2.1:** "CONTACTO" renombrado a "PARTICIPACIÓN" según hallazgos de card sorting.
Los usuarios asocian mentalmente "participar en FEUNA" con acción activa, no con información pasiva.

### 1️⃣ **INICIO**
   - Página principal (sin submenú)
   - Hero con llamados a acción
   - Áreas temáticas de trabajo (antes "Ejes")
   - Noticias destacadas
   - Eventos próximos
   - Transparencia destacada

---

### 2️⃣ **FEUNA** (¿Quiénes somos?)
   **Subpáginas:**
   - ¿Qué es la FEUNA?
   - Misión, Visión y Principios
   - Historia y Logros
   - Estructura Organizativa
   - Estatuto y Reglamentos
   - Plan de Trabajo

---

### 3️⃣ **REPRESENTACIÓN** (Órganos y representantes)
   **Subpáginas:**
   - ¿Qué es la Representación Estudiantil?
   - **DEUNA** (Directorio Estudiantil)
     - Integrantes del Directorio
     - Presidencia y Secretaría General
     - 7 Comisiones de Trabajo:
       - Asuntos Ecológicos
       - Asuntos Regionales
       - Asuntos Universitarios
       - Cultura, Recreación y Deporte
       - Diversidad, Equidad y Género
       - Finanzas
       - Política Nacional e Internacional
   - **CAEUNA** (Consejo de Asociaciones)
     - Juntas Directivas por Facultad/Sede
     - Calendario de Sesiones
   - **TEEUNA** (Tribunal de Elecciones)
   - **MEI** (Movimiento Estudiantil Independiente) 🆕
     - Qué es el MEI
     - Integrantes y contacto
     - Proyectos y propuestas
   - **CEFEUNA** (Congreso Estudiantil) 🆕
     - Qué es el Congreso
     - Sesiones y acuerdos
     - Convocatorias
   - **Asociaciones Estudiantiles**
     - Directorio de Asociaciones
     - Herramientas y Plantillas (Actas, Planes, Presupuestos)
     - Capacitaciones y Apoyo
   - **Representación en órganos UNA**
     - Consejo Universitario (CU)
     - CONSACA (Consejo Académico)
   - **Transparencia y Rendición de Cuentas**
     - Presupuesto FEUNA
     - Ejecución Presupuestaria
     - Informes de Labores
     - Actas y Acuerdos

---

### 4️⃣ **NOTICIAS** (Comunicación e información)
   **Subpáginas:**
   - Todas las Noticias
   - Eventos y Actividades
   - Calendario FEUNA
   - Boletines y Newsletter
   - Streaming y Transmisiones
   - **Filtros por Área Temática** (9 áreas):
     - Regionalización
     - Salud Integral y Vida Estudiantil
     - Cultura y Vida Universitaria
     - Diversidad, Género y Poblaciones Vulnerabilizadas
     - Comunicación y Movimiento Estudiantil
     - Defensa del Medio Ambiente
     - Transformación Digital e Innovación
     - Vinculación con la Sociedad
     - Defensa de la Educación Pública

---

### 5️⃣ **TRÁMITES Y FORMULARIOS** (Herramientas digitales) 📝
   **⚠️ MEJORA v2.1:** Nombre más explícito según card sorting (67% ubicaban formularios aquí).
   
   **Subpáginas:**
   - **Formularios Digitales** (énfasis visual)
     - Todos los formularios disponibles
     - Instrucciones paso a paso
     - Tutoriales en video (1-2 min) 🆕
   - **E-Peticiones y Propuestas**
     - Presentar petición al DEUNA
     - Seguimiento de propuestas
   - **Consultas y Votaciones Estudiantiles**
   - **Encuestas Rápidas**
   - **Reserva de Espacios y Salones** 🆕
   - **Archivo Digital**
     - Actas históricas
     - Documentos oficiales
   - **Preguntas Frecuentes (FAQ)**
   - **Chatbot de Ayuda** 🤖 (omnipresente en todas las páginas)
     - Activación contextual según página
     - Respuestas rápidas sobre becas, trámites, servicios

---

### 6️⃣ **SERVICIOS Y RECURSOS** (Apoyo estudiantil) 🎓
   **⚠️ PRIORIDAD MÁXIMA:** Becas SIBEUNA tiene triple acceso según card sorting (dispersión crítica).
   
   **Subpáginas:**
   - **💰 Becas y Apoyo Socioeconómico** (DESTACADO)
     - 🔥 SIBEUNA: Información completa de becas
     - Tipos de becas disponibles
     - Requisitos y plazos
     - Guías descargables
     - 🔗 Enlace a formularios (→ Trámites)
     - 🔗 Enlace a becas extranjero (→ Oportunidades)
   - **🏥 Salud y Bienestar Estudiantil**
     - Servicios de salud (VIDAE)
     - 🆘 Defensoría Estudiantil (botón de emergencia)
     - Apoyo psicológico
   - **📚 Vida Universitaria**
     - Deportes y recreación
     - Cultura y arte
     - Recursos académicos y bibliotecas
   - **💻 Sistemas y Herramientas UNA**
     - SIGA (matrículas)
     - UNA Virtual (Moodle)
     - Correo institucional
     - SIDUNA (bibliotecas)
   - **📖 Guías y Manuales**
     - 🆕 Guía de estudiantes de primer ingreso (banner temporal feb-mar)
     - Manuales descargables
     - Tutoriales
   - **📞 Directorio de Contactos UNA**
   - **📅 Calendario Institucional UNA**

---

### 7️⃣ **OPORTUNIDADES** (Desarrollo estudiantil)
   **Subpáginas:**
   - Bolsa de Empleo y Pasantías
   - Proyectos de TFG (Trabajos Finales)
   - Horas Asistente y Monitores
   - Becas al Extranjero
   - Posgrados y Especializaciones
   - Proyectos de Investigación UNA
   - Voluntariados y Extensión
   - Concursos y Convocatorias
   - Movilidad e Intercambios

---

### 8️⃣ **PARTICIPACIÓN** (¡Sé Parte!) 🔄
   **⚠️ CAMBIO CRÍTICO:** Renombrada de "Contacto" a "Participación" según análisis card sorting.
   
   **Subpáginas:**
   - **¡Sé Parte de FEUNA!** (prioridad máxima)
     - Cómo participar en FEUNA
     - Únete a una Comisión del DEUNA
     - Voluntariados y proyectos activos
     - Formulario de inscripción
   - **Propuestas y Peticiones**
     - Formulario de e-Petición
     - Cómo presentar una propuesta al DEUNA
     - Seguimiento de propuestas
   - **Contacto y Comunicación**
     - Directorio de contactos (con WhatsApp Business)
     - Oficina de Comunicación FEUNA
     - Ubicación y horarios (mapa)
     - Formulario de contacto general
   - **Redes Sociales FEUNA**
   - **Canal de Denuncias y Sugerencias Anónimas**

---

## 🏠 PÁGINA DE INICIO - Estructura Detallada

### 1️⃣ Header (Global)
- **Logo FEUNA** (izquierda)
- **Menú principal simplificado** (centro/derecha) - 8 secciones:
  - Inicio | FEUNA | Representación | Noticias | Trámites | Servicios | Oportunidades | Participación 🔄
- **🔍 Buscador** (destacado - según card sorting)
- **Redes sociales** (iconos)
- **🆘 Botón Ayuda** "¿Necesitás ayuda?" → Defensoría (nuevo)
- **Botón CTA:** "Sé Parte" (destacado en rojo)

---

### 2️⃣ Hero Section
**Visual:** Slideshow con imágenes estudiantiles (manteniendo estilo actual)

**Mensaje principal:**
> "¡ATRÉVETE A VIVIR LA U MÁS ALLÁ DE LAS AULAS!"
> 
> La FEUNA es tu voz en la Universidad Nacional. Accedé a información, recursos y espacios de participación estudiantil.

**Botones rápidos (4 accesos directos):**
- 💻 Trámites Digitales → Formularios y Herramientas
- 🗳️ Participación → E-Peticiones y Transparencia
- 📢 Comunicación → Noticias y Calendario
- 🤝 Sé Parte → Comisiones y Voluntariado

**🔥 Banner destacado BECAS (temporal cuando hay becas abiertas):**
- Fondo amarillo con icono 💰
- Texto: "Becas SIBEUNA abiertas - Solicitá ahora"
- Botón: "Ver becas disponibles" → Servicios > Becas
- ⚠️ Según card sorting: el contenido MÁS buscado (42% usuarios)

**🔥 Banner destacado BECAS (temporal cuando hay becas abiertas):**
- Fondo amarillo con icono 💰
- Texto: "Becas SIBEUNA abiertas - Solicitá ahora"
- Botón: "Ver becas disponibles" → Servicios > Becas
- ⚠️ Según card sorting: el contenido MÁS buscado (42% usuarios)

**🔥 Banner destacado BECAS (temporal cuando hay becas abiertas):**
- Fondo amarillo con icono 💰
- Texto: "Becas SIBEUNA abiertas - Solicitá ahora"
- Botón: "Ver becas disponibles" → Servicios > Becas
- ⚠️ Según card sorting: el contenido MÁS buscado (42% usuarios)

---

### 3️⃣ Bloques Principales (Cards Grid)

#### Bloque A: EJES DEL PLAN DE TRABAJO (4 cards grandes)

**Card 1: Trámites y Herramientas Digitales**
- Icono: �
- Título: "Trámites más simples"
- Texto: "Formularios digitales, chatbot informativo, seguimiento de proyectos y archivo de documentos accesibles."
- Botón: "Explorar herramientas"

**Card 2: Participación y Transparencia**
- Icono: 🗳️
- Título: "Tu voz cuenta"
- Texto: "E-peticiones, consultas, presupuesto abierto, actas y rendición de cuentas en un solo lugar."
- Botón: "Ver transparencia"

**Card 3: Comunicación e Información**
- Icono: 📢
- Título: "Mantente informado"
- Texto: "Noticias, calendario de eventos, streaming de asambleas y newsletter semanal."
- Botón: "Ver noticias"

**Card 4: Asociaciones y Representación**
- Icono: 👥
- Título: "Conocé quiénes te representan"
- Texto: "Juntas directivas de asociaciones, órganos de FEUNA (DEUNA, CAEUNA, TEEUNA) y representación ante el CU y CONSACA de la UNA."
- Botón: "Ver representación"

---

#### Bloque B: EJES DE TRABAJO FEUNA (9 tags visuales)

**Título:** "Ejes de trabajo del Plan de Trabajo FEUNA"

**Tags interactivos (con color e icono):**
1. � Regionalización
2. � Salud Integral y vida estudiantil
3. 🎨 Cultura y vida universitaria
4. 🌈 Diversidad, género y poblaciones vulnerabilizadas
5. 📢 Comunicación y reactivación del Movimiento Estudiantil
6. 🌱 Defensa del medio Defensa del medio ambiente
7. 💻 Transformación digital e innovación tecnológica
8. 🤝 Vinculación Estudiantil con la Sociedad
9. 📚 Defensa de la Educación Pública

*Al hacer clic en un tag, se filtran las noticias/proyectos relacionados con ese eje.*

---

#### Bloque C: NOTICIAS DESTACADAS (3 cards)

- Card con imagen, título, fecha, categoría/tag
- Extracto breve (2 líneas)
- Botón: "Leer más"

**Botón general:** "Ver todas las noticias"

---

#### Bloque D: PRÓXIMOS EVENTOS (Mini calendario) 📅

**⚠️ SOLUCIÓN DUAL v2.1:** Calendario embebido en Inicio Y Noticias (sincronizados).
Según card sorting: dispersión crítica (Noticias 42%, Inicio 33%, FEUNA 17%, Trámites 8%).

- Widget de Google Calendar embebido (mismo calendario en ambas páginas)
- Timeline con eventos destacados (3-5 próximos)
- Nombre del evento, fecha, hora, lugar
- Filtros rápidos:
  - Asambleas FEUNA
  - Eventos culturales/deportivos
  - Fechas límite (becas, matrícula, TFG)
- Botón: "Ver calendario completo" → Noticias > Calendario

---

#### Bloque E: SERVICIOS ESTUDIANTILES (Accesos rápidos)

**Título:** "Servicios que necesitás"

**🔥 PRIORIDAD MÁXIMA:** Becas SIBEUNA como primer botón (contenido más buscado según card sorting).

**6 botones rápidos con iconos:**
1. 💰 **SIBEUNA (Becas)** ← DESTACADO (fondo amarillo, tamaño doble)
2. 📚 Bibliotecas (SIDUNA)
3. 🏥 Salud y Bienestar
4. 📝 Matrícula
5. 🎓 Aula Virtual
6. 🛡️ Defensoría Estudiantil

**Botón general:** "Ver todos los servicios" → Servicios

---

#### Bloque F: TRANSPARENCIA (Banner destacado)

**Fondo:** Color rojo FEUNA (#bb1f1f)

**Texto:**
> "Transparencia y rendición de cuentas"
> 
> Consultá el presupuesto de la FEUNA, ejecución financiera, actas de órganos estudiantiles e informes de labores.

**Botones:**
- Ver presupuesto
- Ver actas
- Informes de labores

---

#### Bloque G: SÉ PARTE (Call to Action)

**Visual:** Imagen de estudiantes en acción

**Texto:**
> "¡Involucrarte es fácil!"
> 
> Participá en las 7 comisiones del DEUNA, voluntariados, asociaciones y proyectos del movimiento estudiantil. Encontrá tu espacio en la U.

**Botones:**
- Ver comisiones del DEUNA
- Inscribirme en comisiones
- Ver asociaciones
- Contactar FEUNA

---

### 4️⃣ Footer (Global)

**Columna 1: FEUNA**
- ¿Qué es la FEUNA?
- Estructura organizativa
- Historia

**Columna 2: Servicios**
- Becas
- Salud
- Bibliotecas
- Defensoría

**Columna 3: Participación** 🔄
- Sé parte de FEUNA
- E-Peticiones
- Transparencia
- Formularios digitales

**Columna 4: Contacto**
- Oficina de Comunicación
- Teléfono: (506) 2277 3236
- Email: comunicacionfeuna@una.cr
- Ubicación (mapa)

**Columna 5: Redes Sociales**
- Facebook, Instagram, Twitter, YouTube, TikTok

**Barra inferior:**
- Copyright © 2025 FEUNA. Todos los derechos reservados.
- Cultura y vida universitaria de Privacidad | Términos de Uso

---

## 📄 PÁGINAS INTERNAS - Estructura

### 🏛️ FEUNA (Institucional)

**URL:** `/feuna`

**Secciones:**

#### 1. ¿Qué es la FEUNA?
- Texto descriptivo (adaptar del actual "Acerca de la FEUNA")
- Federación de Estudiantes como gobierno estudiantil
- Defensa de derechos y articulación del movimiento

#### 2. Misión, Visión y Principios
- Misión
- Visión
- Principios y Fines
  - Pluralista
  - Al servicio de la sociedad

#### 3. Estructura Organizativa
**Bloques tipo card:**

**DEUNA (Directorio Estudiantil)**
- Descripción: órgano ejecutivo
- Integrantes actuales (nombres y cargos)
- Botón: "Ver más sobre DEUNA"

**CAEUNA (Consejo de Asociaciones)**
- Descripción: parlamento estudiantil
- Coordinaciones
- Botón: "Ver más sobre CAEUNA"

**TEEUNA (Tribunal de Elecciones)**
- Descripción: órgano electoral
- Composición
- Botón: "Ver más sobre TEEUNA"

**Otros órganos:**
- Defensoría Estudiantil (enlace externo)
- Contraloría Estudiantil (enlace externo)

#### 4. Historia y Logros
- Breve cronología
- Logros destacados del año actual
- Galería de fotos históricas

---

### � TRÁMITES Y HERRAMIENTAS DIGITALES

**URL:** `/tramites-digitales`

**Intro:**
> "Simplificamos trámites estudiantiles con herramientas digitales. Accedé rápido a formularios, documentos y seguimiento de proyectos."

**Secciones:**

#### 1. Formularios Digitales
- Lista de formularios disponibles (embeds de Google Forms o sistema propio):
  - Inscripción a comisiones
  - Solicitud de apoyo a proyectos
  - Reserva de espacios
  - E-peticiones (enlaza a Participación)
  - Sugerencias y quejas
- Botón para cada formulario

#### 2. Chatbot Informativo
- **Widget de chatbot** (puede ser iframe de Dialogflow, Landbot, etc.)
- Descripción: "Preguntá sobre becas, servicios, trámites frecuentes, rutas en el campus y más."
- Botón: "Abrir chatbot"

#### 3. Archivo Digital
- Buscador de documentos
- Filtros:
  - Órgano (DEUNA, CAEUNA, TEEUNA, Comisiones)
  - Tipo (Actas, Acuerdos, Comunicados, Informes)
  - Año (2023, 2024, 2025...)
- Lista de documentos con:
  - Título
  - Fecha
  - Órgano
  - Botón: "Descargar PDF"

#### 4. Seguimiento de Proyectos
- Tabla simple con proyectos de comisiones y asociaciones:
  - Nombre del proyecto
  - Comisión/Asociación responsable
  - Estado (Planeado, En ejecución, Finalizado)
  - Última actualización
- Botón: "Ver detalle"

#### 5. Encuestas Rápidas
- Encuesta activa del momento (embed)
- Botón: "Ver resultados de encuestas anteriores"

---

### 🗳️ PARTICIPACIÓN Y TRANSPARENCIA

**URL:** `/participacion-transparencia`

**Intro:**
> "La democracia estudiantil se construye con tu participación. Consultá presupuestos, actas, proponé e-peticiones y seguí las decisiones de tus representantes."

**Secciones:**

#### 1. Transparencia Financiera

**Presupuesto FEUNA**
- Documento interactivo o PDF descargable
- Gráfico de distribución presupuestaria (por área o proyecto)

**Ejecución Presupuestaria**
- Gráfico de barras o tabla: Presupuestado vs. Ejecutado (trimestral)
- Última actualización

**Informes de Labores**
- Lista de informes anuales y semestrales
- Botón: "Descargar informe"

#### 2. Actas y Acuerdos
- Buscador similar al Archivo Digital (mismo filtro)
- Resúmenes ejecutivos de actas (párrafo breve)
- Enlace a acta completa

#### 3. E-Peticiones Estudiantiles
- **Formulario de E-Petición:**
  - Título de la petición
  - Descripción
  - Categoría (Infraestructura, Académico, Bienestar, etc.)
  - Nombre y correo del solicitante
- **Lista de E-Peticiones activas:**
  - Título, fecha, estado (Recibida, En revisión, Respondida)
  - Número de apoyos (si hay sistema de votos)
  - Botón: "Apoyar esta petición"
  - Botón: "Ver respuesta"

#### 4. Consultas y Votaciones
- Consultas abiertas (tipo encuestas con resultados vinculantes)
- Botón: "Votar ahora"
- Resultados de consultas cerradas

#### 5. Rendición de Cuentas
- Informes de DEUNA, CAEUNA, representantes ante CU/CONSACA
- Fechas de asambleas de rendición
- Botón: "Ver transmisión en vivo" (si aplica)

---

### 📢 COMUNICACIÓN E INFORMACIÓN

**URL:** `/comunicacion`

**Intro:**
> "Mantente al día con noticias, eventos, calendario y transmisiones en vivo del movimiento estudiantil."

**Secciones:**

#### 1. Noticias Destacadas
- Grid de 6 noticias recientes
- Cada card: imagen, título, fecha, categoría/tag, extracto
- Botón: "Ver todas las noticias"

#### 2. Calendario FEUNA
- **Google Calendar embebido** (o calendario propio)
- Vista mensual/semanal
- Eventos destacados: asambleas, actividades, fechas límite

#### 3. Eventos y Actividades
- Lista de eventos próximos (tipo timeline)
- Filtro por tipo: Asamblea, Taller, Actividad cultural, Deporte, etc.
- Botón: "Ver evento en calendario"

#### 4. Streaming y Transmisiones
- Embed de Facebook Live / YouTube Live
- Próximas transmisiones programadas
- Archivo de transmisiones pasadas

#### 5. Newsletter y Boletines
- Formulario de suscripción
- Archivo de boletines anteriores (PDF descargables)
- Botón: "Suscribirme"

#### 6. Preguntas Frecuentes (FAQ)
- Acordeones (preguntas colapsables) organizadas por tema:
  - Sobre FEUNA
  - Becas
  - Servicios
  - Representación
  - Trámites
- Buscador de preguntas

---

### 🤝 ASOCIACIONES ESTUDIANTILES

**URL:** `/asociaciones`

**Intro:**
> "Las asociaciones son la unidad de representación más cercana a vos. En cada carrera existe una agrupación de estudiantes que defiende tus derechos."

**Secciones:**

#### 1. ¿Qué son las Asociaciones?
- Texto explicativo (adaptar del actual)
- Importancia de las asociaciones
- Relación con FEUNA y CAEUNA

#### 2. Juntas Directivas por Facultad/Sede
- **Tabla o cards agrupadas por sede:**
  - **Sede Central**
    - Asociación de Biología
    - Asociación de Derecho
    - Asociación de Economía
    - ... (todas las carreras)
  - **Sede Regional Brunca**
  - **Sede Regional Chorotega**
  - Etc.

**Información por asociación:**
- Nombre de la asociación
- Junta Directiva actual (nombres y cargos)
- Correo de contacto
- Redes sociales (si tiene)
- Botón: "Contactar"

#### 3. Herramientas y Plantillas
**Documentos descargables:**
- 📄 Plantilla de Acta
- 📄 Plantilla de Plan de Trabajo
- 📄 Plantilla de Presupuesto
- 📄 Plantilla de Informe de Labores
- 📄 Guía de Rendición de Cuentas

**Botón general:** "Descargar todas las plantillas"

#### 4. Capacitaciones y Apoyo
- Calendario de talleres para dirigentes
- Temas: gestión de proyectos, finanzas, comunicación, liderazgo
- Grabaciones de capacitaciones pasadas
- Botón: "Inscribirme a taller"

#### 5. Calendario de Asociaciones
- Calendario coordinado de actividades de todas las asociaciones
- Filtro por sede/facultad

---

### 👥 REPRESENTACIÓN ESTUDIANTIL

**URL:** `/representacion`

**Intro:**
> "La representación estudiantil defiende tus derechos en los espacios donde se toman decisiones. Conocé los órganos de FEUNA y nuestros representantes ante el Consejo Universitario (CU) y el Consejo Académico (CONSACA) de la UNA."

**Secciones:**

#### 1. ¿Qué es la Representación?
- Texto explicativo
- Niveles de representación (carrera → facultad → universidad)
- **Aclaración importante:** DEUNA, CAEUNA y TEEUNA son órganos propios de FEUNA. CU y CONSACA son órganos de la UNA donde FEUNA tiene representación estudiantil.

#### 2. DEUNA (Directorio Estudiantil)
**Órgano ejecutivo de FEUNA**

**Integrantes de DEUNA:**
- **Directorio:**
  - Foto, nombre, cargo (Presidente/a, Vicepresidente/a, Secretario/a, etc.)
  - Carrera, correo de contacto
  - Áreas de responsabilidad

**Comisiones del DEUNA:**
Las comisiones son equipos de trabajo especializados que ejecutan los ejes del Plan de Trabajo:

1. **Comisión de Asuntos Ecológicos**
   - Responsable: [Nombre del/la coordinador/a]
   - Email: ecologia@feuna.una.cr
   - Eje: Defensa del medio ambiente
   - Proyectos actuales
   - Botón: "Contactar comisión"

2. **Comisión de Asuntos Regionales**
   - Responsable: [Nombre del/la coordinador/a]
   - Email: regionales@feuna.una.cr
   - Eje: Regionalización
   - Proyectos actuales
   - Botón: "Contactar comisión"

3. **Comisión de Asuntos Universitarios**
   - Responsable: [Nombre del/la coordinador/a]
   - Email: universitarios@feuna.una.cr
   - Ejes: Defensa de la Educación Pública, Vinculación Estudiantil
   - Proyectos actuales
   - Botón: "Contactar comisión"

4. **Comisión de Cultura, Recreación y Deporte**
   - Responsable: [Nombre del/la coordinador/a]
   - Email: cultura@feuna.una.cr
   - Eje: Cultura y vida universitaria
   - Proyectos actuales
   - Botón: "Contactar comisión"

5. **Comisión de Diversidad, Equidad y Género**
   - Responsable: [Nombre del/la coordinador/a]
   - Email: diversidad@feuna.una.cr
   - Eje: Diversidad, género y poblaciones vulnerabilizadas
   - Proyectos actuales
   - Botón: "Contactar comisión"

6. **Comisión de Finanzas**
   - Responsable: [Nombre del/la coordinador/a]
   - Email: finanzas@feuna.una.cr
   - Gestión presupuestaria y transparencia financiera
   - Proyectos actuales
   - Botón: "Contactar comisión"

7. **Comisión de Política Nacional e Internacional**
   - Responsable: [Nombre del/la coordinador/a]
   - Email: politica@feuna.una.cr
   - Eje: Comunicación y reactivación del Movimiento Estudiantil
   - Proyectos actuales
   - Botón: "Contactar comisión"

**Formulario: "Quiero participar en una comisión"**
- Nombre completo
- Carrera y año
- Comisión de interés (desplegable)
- ¿Por qué querés participar?
- Correo y teléfono
- Botón: "Enviar solicitud"

**Recursos para Comisiones:**
- Competencias y funciones (según Estatuto)
- Reglamento interno de DEUNA (enlace o PDF)
- Plantillas de trabajo
- Calendario de reuniones

**Botón general:** "Contactar DEUNA"

#### 3. CAEUNA (Consejo de Asociaciones Estudiantiles)
**Parlamento estudiantil de FEUNA**
- **Coordinaciones actuales:**
  - Lista de coordinadores por sede/facultad
  - Foto, nombre, asociación, correo
- Funciones y competencias
- Calendario de sesiones
- Actas de CAEUNA (enlace a Archivo)
- Botón: "Contactar CAEUNA"

#### 4. TEEUNA (Tribunal de Elecciones Estudiantiles)
**Órgano electoral de FEUNA**
- **Integrantes:**
  - Foto, nombre, cargo
- Competencias (según Estatuto)
- Reglamento Electoral (PDF)
- Calendario electoral (si hay elecciones próximas)
- Botón: "Contactar TEEUNA"

---

#### 5. Representación ante la Universidad Nacional

**5.1. Consejo Universitario (CU)**
- **¿Qué es el CU?** Máximo órgano de gobierno de la Universidad Nacional
- **Representantes estudiantiles de FEUNA ante el CU:**
  - Nombre, carrera, periodo
  - Foto y correo
- Informes de gestión
- Calendario de sesiones del CU
- Botón: "Contactar representantes CU"

---

#### 6. Representación ante la UNA (continuación)

**6.1. CONSACA (Consejo Académico)**
- **¿Qué es CONSACA?** Consejo Académico de la Universidad Nacional
- **Representantes estudiantiles de FEUNA ante CONSACA:**
  - Nombre, carrera, periodo
  - Foto y correo
- Informes de gestión
- Calendario de sesiones de CONSACA
- Botón: "Contactar representantes CONSACA"

---

#### 7. Contactar Representación
- Formulario de contacto general para consultas a representantes
- Campos: Nombre, Correo, Mensaje, A quién dirigir (desplegable: DEUNA | CAEUNA | TEEUNA | Representantes CU | Representantes CONSACA)

---

### 🎓 SERVICIOS Y RECURSOS

**URL:** `/servicios-recursos`

**Intro:**
> "Accedé a los servicios que la UNA ofrece y a los documentos esenciales del movimiento estudiantil."

**Secciones:**

#### 1. Servicios Estudiantiles
**(Recopilador actual, reorganizado)**

**Becas y Apoyo Socioeconómico**
- SIBEUNA (Becas)
- Residencias Estudiantiles
- Fondo de Ayuda Estudiantil
- Botón: "Ir al servicio"

**Salud y Bienestar**
- Clínica de la Salud
- Psicología
- Emergencias Médicas
- Póliza Estudiantil
- Vida Saludable
- Botón: "Ir al servicio"

**Vida Universitaria**
- Vida Estudiantil
- Actividades Culturales
- Deportes y Recreación
- Voluntariado
- Botón: "Ir al servicio"

**Recursos Académicos y Bibliotecas**
- SIDUNA (Bibliotecas)
- Bases de Datos
- Catálogos en línea
- Revistas académicas
- Botón: "Ir al servicio"

**Sistemas Institucionales**
- Sistema de Matrícula
- Banner (registro académico)
- Correo institucional
- Recuperación de contraseña
- Aula Virtual
- Botón: "Ir al servicio"

#### 2. Documentos para Descarga
- Estatuto Orgánico de la FEUNA
- Reglamentos (DEUNA, CAEUNA, TEEUNA, Electoral)
- Manuales y Guías
- Botón: "Descargar"

#### 3. Calendario Institucional UNA
- Embed del calendario oficial de la UNA
- Fechas importantes: matrícula, exámenes, vacaciones, etc.

#### 4. Guías para Estudiantes
- Guía de primer ingreso
- Guía de trámites frecuentes
- Guía de representación estudiantil
- Botón: "Descargar guía"

---

### � OPORTUNIDADES

**URL:** `/oportunidades`

> **"Mejorá tu currículum y construí tu futuro profesional con las oportunidades que la UNA y FEUNA tienen para vos."**

**Estructura:**

#### Header de página
- Título: "Oportunidades para Estudiantes"
- Subtítulo: "Bolsa de empleo, becas, proyectos y más para impulsar tu desarrollo profesional"
- **Barra de filtros:**
  - Por tipo: Empleo, Pasantías, TFG, Horas Asistente, Becas, Posgrados, Investigación, Voluntariados, Concursos
  - Por facultad/escuela
  - Por plazo (Abiertas ahora, Próximamente, Todo)
  - Buscador por palabra clave

#### 1. Bolsa de Empleo y Pasantías
**Descripción:** Ofertas laborales y pasantías para estudiantes y recién graduados
**Contenido:**
- Lista de ofertas actuales con:
  - Nombre de la empresa/institución
  - Puesto disponible
  - Requisitos (carrera, nivel, habilidades)
  - Fecha de cierre
  - Tipo: Tiempo completo, Medio tiempo, Pasantía
- **Botón:** "Publicar oferta" (para empleadores)
- **Botón:** "Ver detalles y aplicar"

#### 2. Proyectos de TFG (Trabajos Finales de Graduación)
**Descripción:** Oportunidades de TFG ofrecidas por empresas, organizaciones y docentes
**Contenido:**
- Lista de propuestas de TFG con:
  - Título del proyecto
  - Área/disciplina
  - Institución oferente
  - Tutor sugerido
  - Descripción breve
  - Requisitos del estudiante
- **Botón:** "Proponer proyecto" (para instituciones/docentes)
- **Botón:** "Más información"

#### 3. Horas Asistente y Monitores
**Descripción:** Convocatorias para horas asistente, monitores y ayudantías en la UNA
**Contenido:**
- Lista de convocatorias con:
  - Escuela/Centro que convoca
  - Tipo: Asistente de docencia, Asistente de investigación, Monitor
  - Horas semanales
  - Requisitos académicos
  - Remuneración/beneficios
  - Plazo de aplicación
- **Botón:** "Ver convocatoria completa"

#### 4. Becas al Extranjero
**Descripción:** Becas para estudios, intercambios y programas internacionales
**Contenido:**
- Lista de becas con:
  - País/institución destino
  - Tipo: Intercambio, Maestría, Doctorado, Curso corto, Investigación
  - Cobertura (matrícula, manutención, pasajes, etc.)
  - Requisitos
  - Fechas importantes
  - Enlace a convocatoria oficial
- Filtros: Por país, por nivel académico, por área de estudio
- **Botón:** "Más información"

#### 5. Posgrados y Especializaciones
**Descripción:** Programas de posgrado en la UNA y convenios con otras universidades
**Contenido:**
- Lista de programas con:
  - Nombre del programa (Maestría, Doctorado, Especialización)
  - Escuela/Universidad oferente
  - Modalidad: Presencial, Virtual, Híbrida
  - Duración
  - Requisitos de ingreso
  - Becas disponibles
  - Fechas de inscripción
- **Botón:** "Ver programa completo"

#### 6. Proyectos de Investigación UNA
**Descripción:** Oportunidades para unirse a proyectos de investigación como asistente o colaborador
**Contenido:**
- Lista de proyectos con:
  - Título del proyecto
  - Instituto/Centro de investigación
  - Investigador principal
  - Área temática
  - Rol del estudiante
  - Compromiso de tiempo
  - Beneficios (académicos, económicos)
- **Botón:** "Contactar investigador"

#### 7. Voluntariados y Proyectos de Extensión
**Descripción:** Programas de voluntariado y extensión universitaria para ganar experiencia y aportar a la comunidad
**Contenido:**
- Lista de proyectos con:
  - Nombre del proyecto
  - Comunidad/población beneficiaria
  - Objetivos
  - Actividades del voluntario
  - Duración y horarios
  - Certificación disponible
- **Botón:** "Inscribirme como voluntario"

#### 8. Concursos y Convocatorias
**Descripción:** Concursos académicos, culturales, deportivos y de innovación
**Contenido:**
- Lista de concursos con:
  - Nombre del concurso
  - Organizador
  - Categorías
  - Premios
  - Requisitos de participación
  - Fechas de inscripción y ejecución
- **Botón:** "Ver bases del concurso"

#### Sección: "Publicá tu oportunidad"
- Formulario para que instituciones, empresas, docentes o la misma FEUNA publiquen oportunidades
- Campos: Tipo de oportunidad, título, descripción, requisitos, contacto, plazo
- **Botón:** "Enviar oportunidad para revisión"
- Nota: "Las oportunidades serán revisadas por FEUNA antes de su publicación"

#### Sección: Suscripción a Alertas
- Campo de email
- Selección de tipos de oportunidades de interés
- **Botón:** "Recibir alertas"
- Texto: "Recibí un correo cuando se publiquen nuevas oportunidades que te interesen"

---

### �📰 NOTICIAS Y EVENTOS

**URL:** `/noticias`

**Estructura:**

#### Header de página
- Título: "Noticias y Eventos"
- **Barra de filtros:**
  - Todas
  - Regionalización
  - Salud Integral y vida estudiantil
  - Cultura y vida universitaria
  - Diversidad, género y poblaciones vulnerabilizadas
  - Comunicación y reactivación del Movimiento Estudiantil
  - Defensa del medio Defensa del medio ambiente
  - Transformación digital e innovación tecnológica
  - Vinculación Estudiantil con la Sociedad
  - Defensa de la Educación Pública
- **Buscador:** por palabra clave

#### Grid de noticias
- 12 noticias por página (grid 3 columnas)
- Cada card:
  - Imagen destacada
  - Tag de categoría (color según área)
  - Título
  - Fecha
  - Extracto (2 líneas)
  - Botón: "Leer más"
- **Paginación:** 1, 2, 3... (abajo)

#### Sidebar (opcional)
- **Eventos destacados** (mini calendario)
- **Noticias más leídas** (últimas 5)
- **Suscripción a newsletter**

---

### 📰 Página de Noticia Individual

**URL:** `/noticias/titulo-de-la-noticia`

**Estructura:**
- Imagen destacada (full width)
- Tag de categoría
- Título
- Fecha y autor
- Cuerpo del contenido (HTML enriquecido)
- Galería de imágenes (si aplica)
- Enlaces relacionados
- Botones de compartir (Facebook, Twitter, WhatsApp)
- **Noticias relacionadas** (3 cards al final)
- Botón: "Volver a noticias"

---

### 📞 CONTACTO Y "SÉ PARTE"

**URL:** `/contacto`

**Estructura:**

#### 1. Información de Contacto

**Oficina de Comunicación de la FEUNA**
- Dirección: Costa Rica, Heredia. Apto. Postal: 86-3000
- Teléfono: (506) 2277 3236
- Email: comunicacionfeuna@una.cr
- Horario de atención: Lunes a viernes, 8:00 am - 5:00 pm

**Mapa interactivo:**
- Google Maps embebido con ubicación de oficinas FEUNA

#### 2. Formulario de Contacto
- Nombre completo
- Correo electrónico
- Teléfono (opcional)
- Asunto (desplegable):
  - Consulta general
  - E-petición
  - Queja o sugerencia
  - Solicitud de información
  - Otro
- Mensaje
- Botón: "Enviar mensaje"

#### 3. ¡Sé Parte!

**Título:** "¡Involucrarte es fácil!"

**Texto:**
> "El movimiento estudiantil se construye con tu participación. Podés integrarte a comisiones de trabajo, voluntariados, asociaciones estudiantiles y proyectos culturales, deportivos y políticos. ¡Encontrá tu espacio en la U!"

**Opciones de participación (cards):**

**Comisiones del DEUNA**
- **7 comisiones de trabajo especializadas:**
  - Asuntos Ecológicos
  - Asuntos Regionales
  - Asuntos Universitarios
  - Cultura, Recreación y Deporte
  - Diversidad, Equidad y Género
  - Finanzas
  - Política Nacional e Internacional
- Descripción: "Cada comisión trabaja en un eje del Plan de Trabajo. Podés participar aunque no seas parte del DEUNA."
- Botón: "Ver comisiones" (enlaza a /representacion#deuna-comisiones)
- Botón: "Inscribirme"

**Asociaciones Estudiantiles**
- Enlace a sección de Asociaciones
- Botón: "Ver asociaciones"

**Voluntariado y Proyectos**
- Proyectos de extensión, cultura, deporte
- Botón: "Ver proyectos"

**Representación Estudiantil**
- Cómo ser representante
- Botón: "Más información"

#### 4. Redes Sociales FEUNA
- Iconos grandes con enlaces:
  - Facebook
  - Instagram
  - Twitter / X
  - YouTube
  - TikTok
  - WhatsApp (grupos temáticos)

---

## 🎨 Sistema de Diseño Visual

### Colores

**⚠️ IMPORTANTE: Respetar línea gráfica institucional**

- **Colores Institucionales (ÚNICOS PERMITIDOS):**
  - **Azul UNA:** `#034991` - Color principal, identidad institucional
  - **Rojo FEUNA:** `#bb1f1f` - Color secundario, destacados y CTAs
  - **Gris texto:** `#666666` - Texto secundario
  - **Gris bordes:** `#dddddd` - Bordes y separadores
  - **Negro:** `#000000` - Texto principal
  - **Blanco:** `#ffffff` - Fondos y texto inverso

- **Uso de colores para tags/ejes de trabajo:**
  - **NO usar colores adicionales** (morado, amarillo, rosa, naranja, verde, cyan, turquesa)
  - **Solución:** Usar **variaciones de opacidad** de los colores institucionales:
    - Azul UNA al 100%: `#034991`
    - Azul UNA al 80%: `rgba(3, 73, 145, 0.8)`
    - Azul UNA al 60%: `rgba(3, 73, 145, 0.6)`
    - Rojo FEUNA al 100%: `#bb1f1f`
    - Rojo FEUNA al 80%: `rgba(187, 31, 31, 0.8)`
    - Gris al 100%: `#666666`
  - **Alternativa:** Usar solo Azul/Rojo/Gris con **iconos diferenciadores** (emoji o Font Awesome)

- **Distribución sugerida para 9 ejes:**
  1. 🌍 Regionalización → Azul `#034991`
  2. 🏥 Salud Integral → Azul opaco `rgba(3, 73, 145, 0.8)`
  3. 🎨 Cultura → Rojo `#bb1f1f`
  4. 🌈 Diversidad → Rojo opaco `rgba(187, 31, 31, 0.8)`
  5. 📢 Comunicación → Azul `#034991`
  6. 🌱 Medio ambiente → Gris `#666666`
  7. 💻 Transformación digital → Azul opaco `rgba(3, 73, 145, 0.6)`
  8. 🤝 Vinculación → Gris opaco `rgba(102, 102, 102, 0.8)`
  9. 📚 Educación Pública → Rojo `#bb1f1f`

### Tipografía
- **Familia:** Space Grotesk (Google Fonts)
- **Pesos:**
  - Títulos: 700 (Bold)
  - Subtítulos: 600 (Semi-bold)
  - Cuerpo: 400 (Regular)
  - Destacados: 500 (Medium)

### Componentes
- **Botones:**
  - Primario: fondo azul #034991, texto blanco, hover más oscuro
  - Secundario: fondo rojo #bb1f1f, texto blanco
  - Terciario: outline azul, texto azul, hover relleno
- **Cards:**
  - Fondo blanco, borde gris claro
  - Sombra sutil al hover
  - Padding: 24px
- **Formularios:**
  - Inputs con borde gris, focus azul
  - Labels en gris oscuro
  - Validación con color rojo para errores

---

## 🔄 Flujos de Usuario Clave

### Flujo 1: Estudiante busca información sobre becas
1. Entra a INICIO
2. Click en "Servicios y Recursos" (menú) o card "Servicios que necesitás"
3. Click en "Becas y Apoyo Socioeconómico"
4. Ve enlaces a SIBEUNA, requisitos, fechas
5. Click en "Ir a SIBEUNA" (enlace externo)

### Flujo 2: Estudiante quiere hacer una e-petición
1. Entra a INICIO
2. Click en card "Participación y Transparencia"
3. Scroll a "E-Peticiones Estudiantiles"
4. Click en "Crear nueva e-petición"
5. Llena formulario
6. Envía
7. Ve confirmación y número de seguimiento

### Flujo 3: Estudiante busca a su asociación
1. Entra a INICIO
2. Click en "Asociaciones" (menú)
3. Busca su sede/facultad
4. Ve lista de asociaciones de su carrera
5. Click en la suya
6. Ve Junta Directiva, correo, redes
7. Click en "Contactar"

### Flujo 4: Estudiante quiere ver quiénes representan en CU
1. Entra a INICIO
2. Click en card "Asociaciones y Representación"
3. Click en "Ver representación"
4. Scroll a sección "Consejo Universitario (CU)"
5. Ve nombres, fotos, correos de representantes
6. Click en "Ver informes de gestión"

---

## 📊 Métricas de Éxito

### KPIs para medir efectividad del rediseño
1. **Accesibilidad:**
   - Tiempo promedio para encontrar información clave (becas, trámites, contacto) < 30 segundos
   - Tasa de rebote < 40%

2. **Participación:**
   - Número de e-peticiones creadas por mes
   - Número de suscriptores a newsletter
   - Visitas a sección Transparencia

3. **Engagement:**
   - Páginas vistas por sesión > 3
   - Tiempo en sitio > 2 minutos
   - Tasa de clics en CTAs (Sé Parte, Formularios)

4. **Transparencia:**
   - Descargas de presupuesto, actas, informes
   - Visitas a sección Participación y Transparencia

---

## 🚀 Fases de Implementación

### Fase 1: MVP (Mínimo Producto Viable) - 4 semanas
- ✅ Inicio con hero y bloques principales
- ✅ FEUNA (institucional)
- ✅ Servicios y Recursos (recopilador)
- ✅ Noticias y Eventos
- ✅ Contacto y Sé Parte
- ✅ Diseño responsive
- ⏳ CMS básico (WordPress o similar)

### Fase 2: Herramientas de Participación - 3 semanas
- ⏳ Desburocratización (formularios, chatbot básico)
- ⏳ Participación y Transparencia (presupuesto, e-peticiones)
- ⏳ Archivo Digital (actas y documentos)

### Fase 3: Asociaciones y Representación - 2 semanas
- ⏳ Asociaciones con Juntas Directivas
- ⏳ Representación (DEUNA, CAEUNA, TEEUNA, CU, CONSACA)
- ⏳ Plantillas y herramientas para asociaciones

### Fase 4: Comunicación Avanzada - 2 semanas
- ⏳ Calendario digital integrado
- ⏳ Streaming y transmisiones
- ⏳ Newsletter automatizado
- ⏳ Chatbot avanzado

### Fase 5: Optimización y Mejoras - Continuo
- ⏳ SEO
- ⏳ Accesibilidad (WCAG AA)
- ⏳ Analytics y métricas
- ⏳ Mejoras según feedback

---

## 🛠️ Recomendaciones Técnicas

### Opción A: WordPress + Plugins (recomendado para arranque rápido)
**Ventajas:**
- Fácil de administrar por personal no técnico
- Gran ecosistema de plugins
- Hosting económico
- CMS maduro

**Stack:**
- WordPress 6.x
- Theme personalizado (basado en Astra o GeneratePress)
- Plugins:
  - Elementor Pro (page builder visual)
  - Advanced Custom Fields (campos personalizados)
  - WPForms (formularios)
  - The Events Calendar (eventos)
  - WP Document Revisions (documentos)

### Opción B: Static Site + Headless CMS (mejor performance)
**Ventajas:**
- Más rápido y seguro
- Mejor SEO
- Deploy automático

**Stack:**
- Next.js 14 (React framework)
- Sanity.io o Strapi (headless CMS)
- Vercel/Netlify (hosting)
- Tailwind CSS (estilos)

### Opción C: Mantener Joomla 4.x (si hay resistencia al cambio)
**Ventajas:**
- Mantener infraestructura actual
- No hay curva de aprendizaje

**Mejoras:**
- Actualizar a Joomla 4.x
- Theme personalizado T4 Framework
- Optimizar performance
- Agregar extensiones para formularios y calendario

---

## ✅ Checklist Pre-Implementación

- [ ] Validar estructura con equipo FEUNA
- [ ] Definir quién administrará contenidos (capacitación)
- [ ] Confirmar hosting y dominio
- [ ] Recopilar contenido (textos, imágenes, documentos)
- [ ] Diseñar wireframes de pantallas clave
- [ ] Crear mockup visual (Figma)
- [ ] Aprobar paleta de colores y tipografía
- [ ] Definir tecnología (WordPress, Next.js, Joomla)
- [ ] Configurar repositorio Git
- [ ] Configurar entorno de desarrollo
- [ ] Planificar migración de contenido actual

---

## 📝 Próximos Pasos Inmediatos

1. **Revisar y validar esta arquitectura** contigo
2. **Ajustar** secciones o flujos según tus comentarios
3. **Crear wireframes de baja fidelidad** para páginas clave (Inicio, Desburocratización, Participación)
4. **Diseñar mockup visual** en Figma o herramienta similar
5. **Implementar demo funcional** con tecnología elegida

---

**¿Estás de acuerdo con esta estructura? ¿Hay algo que quieras cambiar, agregar o quitar antes de pasar a wireframes y programación?**
