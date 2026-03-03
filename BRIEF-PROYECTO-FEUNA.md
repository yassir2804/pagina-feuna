# 📋 Brief del Proyecto: Rediseño Web FEUNA

**Proyecto:** Renovación completa del sitio web de la Federación de Estudiantes UNA (FEUNA)  
**Cliente:** FEUNA - Federación de Estudiantes de la Universidad Nacional, Costa Rica  
**Fecha de inicio:** Noviembre 2025  
**Estado actual:** Arquitectura de información validada con usuarios (Febrero 2026)  
**Equipo:** Yassir Jiménez Carballo (FEUNA) + Asistente de desarrollo

---

## 🎯 ¿DE QUÉ TRATA ESTE PROYECTO?

### Contexto:
FEUNA es el **gobierno estudiantil** de la Universidad Nacional de Costa Rica, integrado por:
- **DEUNA** (Directorio Estudiantil) - órgano ejecutivo
- **CAEUNA** (Consejo de Asociaciones) - parlamento estudiantil  
- **TEEUNA** (Tribunal Electoral) - órgano electoral
- **MEI** (Movimiento Estudiantil Independiente)
- **CEFEUNA** (Congreso Estudiantil)

### Objetivo del Rediseño:
Transformar el sitio web de una **plataforma informativa estática** a un **espacio digital de participación, transparencia y representación estudiantil** que:

1. **Priorice la acción** sobre la información pasiva
2. **Simplifique el acceso** a servicios y trámites
3. **Clarifique el rol de FEUNA** vs servicios externos de la UNA
4. **Potencie la participación estudiantil** (comisiones, e-peticiones, consultas)
5. **Transparente la gestión** (presupuesto, actas, informes)

---

## 🔴 ¿CUÁL ES EL DILEMA PRINCIPAL?

### Dilema 1: **Identidad vs Utilidad**

#### El Problema:
FEUNA es una **organización de representación estudiantil**, NO un departamento de servicios estudiantiles de la UNA.

Sin embargo, los estudiantes buscan mayoritariamente información sobre:
- **Becas SIBEUNA** (42% según card sorting) → Gestionado por Bienestar UNA, NO por FEUNA
- **Servicios de salud** → Gestionado por VIDAE, NO por FEUNA
- **Horarios de grupos culturales** → Gestionado por Vida Estudiantil UNA, NO por FEUNA
- **Bibliotecas, matrícula, aula virtual** → Servicios UNA, NO de FEUNA

#### La Tensión:
```
¿Debe el sitio de FEUNA...?

Opción A: CENTRARSE SOLO EN FEUNA
├─ ✅ Identidad clara: representación, transparencia, participación
├─ ✅ Foco en servicios propios (e-peticiones, asambleas, defensoría)
└─ ❌ Usuarios frustrados: "Vine por becas, no encontré nada útil"

Opción B: SER UN PORTAL ESTUDIANTIL COMPLETO
├─ ✅ Útil para estudiantes: toda la info UNA en un solo lugar
├─ ✅ Alto tráfico: estudiantes vienen frecuentemente
└─ ❌ Confusión de roles: "¿FEUNA da becas?" "¿FEUNA gestiona salud?"

Opción C: HÍBRIDO (SOLUCIÓN ELEGIDA)
├─ ✅ FEUNA al centro: servicios propios como PRIORIDAD #1
├─ ✅ Guía estudiantil: orientación sobre servicios UNA con etiquetas claras
├─ ✅ Valor agregado: tutoriales, FAQs, recordatorios elaborados por FEUNA
└─ ⚠️ Requiere diferenciación visual clara: propio vs externo
```

#### Solución Implementada:
**"FEUNA representa, articula y defiende al movimiento estudiantil. Además, te guía para que navegues la universidad con facilidad."**

**Diseño diferenciado:**
- **Servicios FEUNA** → Rojo, badge "SERVICIO FEUNA", botones internos
- **Servicios UNA** → Azul, etiqueta "🔗 SERVICIO UNA - [Dependencia]", enlace externo + tutorial FEUNA

---

### Dilema 2: **Simplicidad vs Completitud**

#### El Problema:
Comentario crítico de usuario en card sorting:

> "Muchos apartados de temáticas que uno realmente no busca... demasiadas ideas juntas, parece un collage sin dinámica, falta simpleza, eficacia y eficiencia"

#### La Tensión:
```
¿Cómo balancear...?

Simplicidad (Usuario novato)          vs    Completitud (Usuario avanzado)
├─ Solo 6 accesos rápidos                  ├─ 50+ enlaces a toda la info
├─ Buscador gigante                        ├─ Mega-menús detallados
├─ Info institucional colapsada            ├─ Todo visible sin scroll
└─ Riesgo: Info importante enterrada       └─ Riesgo: Sobrecarga cognitiva
```

#### Solución Implementada:
**Jerarquía de 3 Niveles (Progressive Disclosure):**

```
🔴 NIVEL 1: CRÍTICO (Always visible)
├─ Buscador inteligente (protagonista)
├─ 6 accesos rápidos (servicios FEUNA más usados)
├─ Noticias destacadas (máximo 3)
└─ Above the fold (sin scroll)

🟠 NIVEL 2: IMPORTANTE (Segundo scroll)
├─ Servicios guía (becas, salud, cultura)
├─ Oportunidades (empleo, TFG)
└─ Visible con 1 scroll

🟡 NIVEL 3: INFORMATIVO (Colapsado)
├─ ¿Qué es FEUNA? Historia, estatutos
├─ Acordeones colapsados por defecto
└─ Footer o páginas internas
```

**Filosofía:** "No hagas que el usuario piense. Dale la respuesta directa o el atajo inmediato."

---

### Dilema 3: **Navegación Tradicional vs Task-Based**

#### El Problema:
Card sorting reveló **dispersión crítica**:
- Calendario buscado en 4 lugares: Noticias (42%), Inicio (33%), FEUNA (17%), Trámites (8%)
- Becas buscadas en 4 lugares: Servicios (42%), Trámites (25%), Oportunidades (25%), Noticias (8%)
- Defensoría buscada en 4 lugares: Contacto (33%), Representación (25%), Servicios (25%), FEUNA (17%)

**Insight:** Los usuarios NO piensan en "estructura organizativa", piensan en **"qué necesito hacer"**.

#### La Tensión:
```
Navegación por Estructura          vs    Navegación por Tarea
(Cómo está organizado FEUNA)            (Qué quiere hacer el usuario)

FEUNA > DEUNA > Comisiones               "Quiero unirme a una comisión"
Servicios > Becas > SIBEUNA              "Necesito una beca"
Representación > CAEUNA > Sesiones       "¿Cuándo es la próxima asamblea?"
```

#### Solución Implementada:
**Menú híbrido de 4 mega-categorías por TAREA:**

```
🔍 BUSCADOR  │  FEUNA HACE  │  GUÍA ESTUDIANTE  │  SOBRE FEUNA  │  📞
              (Servicios)     (Info útil)         (Institucional)
```

**+ Soluciones multi-ubicación para contenido disperso:**
- **Calendario:** Widget en Inicio + página completa en Noticias (sincronizados)
- **Becas:** Banner en Inicio + sección en Servicios + formulario en Trámites
- **Defensoría:** Botón emergencia en header + sección en Servicios + enlace en footer

---

## ⚖️ CONSIDERACIONES CRÍTICAS DEL PROYECTO

### 1. **Usabilidad es NO Negociable**
**Dato:** 92% de usuarios del card sorting calificaron la usabilidad como 10/10 de importancia.

**Implicación:**
- El sitio DEBE ser intuitivo o fracasará
- Medición obligatoria: tiempo para completar tareas <30 segundos
- Diseño mobile-first (75% de usuarios acceden desde móvil)

---

### 2. **Claridad de Roles (FEUNA vs UNA)**
**Problema detectado:** Confusión sobre qué hace FEUNA y qué hace la UNA.

**Solución visual obligatoria:**
```css
/* Servicios FEUNA */
.servicio-feuna {
  border: 2px solid #bb1f1f; /* Rojo FEUNA */
  badge: "SERVICIO FEUNA";
  button: "Acceder" (interno);
}

/* Servicios UNA */
.servicio-guia {
  border: 2px dashed #034991; /* Azul UNA */
  label: "🔗 SERVICIO UNA - [Dependencia]";
  button: "Ir al sitio ↗" (externo);
  secondary-button: "Ver guía FEUNA" (tutorial);
}
```

**Mensajería clara:**
- Footer: "FEUNA guía, no gestiona servicios institucionales UNA"
- FAQ: "¿FEUNA da becas?" → "No, pero te orientamos en el proceso"
- Banner Inicio: "¿Qué hace FEUNA por vos?" con lista clara de roles

---

### 3. **Principio de Pareto (80/20)**
**Dato:** El 80% de usuarios busca el 20% del contenido.

**Contenido más buscado según card sorting:**
1. Becas (42%)
2. Horarios y eventos (35%)
3. Trámites y formularios (30%)
4. Contactar representante (25%)
5. Noticias FEUNA (20%)

**Decisión de diseño:**
- Estos 5 elementos DEBEN estar en Nivel 1 (always visible)
- Resto de contenido en Nivel 2 o 3
- Buscador como salvavidas para el 20% restante

---

### 4. **Buscador como Protagonista**
**Justificación:** Cuando hay dispersión de modelos mentales, el buscador es la solución.

**Requerimientos técnicos:**
- **Autocompletado inteligente** (Algolia, ElasticSearch)
- **Sinónimos:** "beca" = "ayuda económica" = "apoyo" = "SIBEUNA"
- **Respuestas directas:** Tipo Google, no solo enlaces
- **Contexto claro:** Diferenciar propio vs externo en resultados
- **Prioridad visual:** Grande, arriba, colores contrastantes

---

### 5. **Progressive Disclosure (Revelación Progresiva)**
**Concepto:** No mostrar TODO desde el inicio.

**Implementación:**
```
Inicio minimalista:
├─ Buscador (gigante)
├─ 6 accesos rápidos
├─ 3 noticias destacadas
├─ Acordeones colapsados para info secundaria
└─ Footer con enlaces adicionales

Evitar:
├─ ❌ 20+ bloques de información en Inicio
├─ ❌ Todo al mismo nivel de importancia
├─ ❌ Información institucional "above the fold"
└─ ❌ Menús con 8+ categorías al mismo nivel
```

---

### 6. **Arquitectura Validada con Usuarios**
**Metodología:** Card sorting con 12 estudiantes activos UNA.

**Hallazgos críticos implementados:**
1. ❌ "Contacto" → ✅ "Participación" (cambio de nombre por asociación mental)
2. 🆕 MEI y CEFEUNA agregados (omisión detectada)
3. 💰 Triple acceso a becas (dispersión crítica)
4. 📅 Calendario dual Inicio/Noticias (dispersión)
5. 🆘 Defensoría = botón emergencia (servicio crítico confuso)
6. 📝 "Trámites" → "Trámites y Formularios" (nombre más explícito)
7. 🎬 Tutoriales en video (sugerencia directa de usuario)
8. 👥 Directorio con WhatsApp Business (demanda explícita)

---

### 7. **Identidad Visual Institucional**
**Restricción:** Solo se pueden usar colores institucionales.

**Paleta aprobada:**
```css
--rojo-feuna: #bb1f1f;    /* Rojo principal FEUNA */
--azul-una: #034991;       /* Azul Universidad Nacional */
--gris-texto: #666666;     /* Texto secundario */
--negro: #000000;          /* Texto principal */
--blanco: #ffffff;         /* Fondos */
```

**Tipografía obligatoria:**
```css
font-family: 'Space Grotesk', sans-serif;
/* Ya usada en sitio actual, mantener consistencia */
```

**Iconografía:**
- Font Awesome 5 (ya implementado en sitio actual)
- Emojis para tags de ejes de trabajo (🌍 🏥 🎨 🌈 📢 🌱 💻 🤝 📚)

---

### 8. **Plan de Trabajo con 9 Ejes Estratégicos**
**Contexto:** No son solo categorías, son **ejes estratégicos del Plan de Trabajo oficial de FEUNA**.

**Los 9 ejes:**
1. Regionalización 🌍
2. Salud Integral y vida estudiantil 🏥
3. Cultura y vida universitaria 🎨
4. Diversidad, género y poblaciones vulnerabilizadas 🌈
5. Comunicación y reactivación del Movimiento Estudiantil 📢
6. Defensa del medio ambiente 🌱
7. Transformación digital e innovación tecnológica 💻
8. Vinculación Estudiantil con la Sociedad 🤝
9. Defensa de la Educación Pública 📚

**Uso en el sitio:**
- Sistema de tags para noticias/eventos/proyectos
- Filtros en página de Noticias
- Bloque de tags en Inicio (interactivos)
- Cada eje debe tener métricas de avance (futuro)

---

### 9. **Tecnología Actual: Estática HTML/CSS/JS**
**Stack actual:**
- HTML5 puro
- CSS3 con variables custom
- JavaScript Vanilla (sin frameworks)
- Python HTTP server para desarrollo local
- Cloudflare Tunnel para preview temporal

**Decisión futura pendiente:**
- WordPress (más fácil para equipo no técnico)
- Joomla (más robusto, más curva de aprendizaje)
- Backend personalizado (máxima flexibilidad)

**Criterio de decisión:** Capacidad técnica del equipo FEUNA para mantener el sitio.

---

### 10. **Métricas de Éxito (Post-Implementación)**

| Métrica | Antes (estimado) | Meta | Medición |
|---------|------------------|------|----------|
| Tiempo para encontrar becas | ~2 minutos | <30 segundos | Google Analytics |
| Uso del buscador | 5% | 40% | GA4 eventos |
| Tasa de rebote | 60% | <30% | GA4 |
| Clics para completar tarea | 5-8 clics | 1-2 clics | Hotjar |
| "¿Fue fácil encontrar?" | N/A | >85% "Sí" | Encuesta post-uso |
| Consultas repetitivas a oficina | Alto | -50% | Registro manual |
| Uso de e-peticiones | Bajo | +100% | Dashboard |
| Participación en comisiones | Actual | +50% | Inscripciones |

---

## 📋 ENTREGABLES DEL PROYECTO

### ✅ Completados:
1. **Análisis del sitio actual** (ANALISIS-SITIO-ACTUAL.md)
2. **Arquitectura de información v2.1** (ARQUITECTURA-SITIO-RENOVADO.md)
3. **Card sorting con 12 usuarios** (ANALISIS-CARD-SORTING.md)
4. **Cambios basados en feedback** (CAMBIOS-V2.1-CARD-SORTING.md)
5. **Propuesta de simplicidad** (PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md)
6. **Resumen ejecutivo** (RESUMEN-EJECUTIVO.md)
7. **Documentación de comisiones DEUNA** (COMISIONES-DEUNA-MAPA.md)
8. **Sitemap visual** (SITEMAP-VISUAL.md)

### ⏳ En progreso:
1. **Wireframes de alta fidelidad** (próximo paso)
2. **Mockup visual completo** (colores, tipografía, componentes)
3. **Prototipo funcional** (HTML/CSS/JS navegable)

### 📅 Pendientes:
1. **Contenido final** (textos, imágenes, videos)
2. **Desarrollo backend** (si se elige CMS)
3. **Implementación técnica**
4. **Pruebas de usuario** (usability testing)
5. **Capacitación equipo FEUNA**
6. **Lanzamiento y migración**

---

## 🎯 PRINCIPIOS DE DISEÑO (Guías Permanentes)

### 1. **"Don't Make Me Think"** (Steve Krug)
- Intuitivo sin manual
- Respuestas directas, no búsquedas profundas
- 1-2 clics máximo para tareas comunes

### 2. **"FEUNA al Centro"**
- Servicios propios como prioridad #1
- Claridad sobre rol de representación
- Valor agregado en guías (tutoriales, FAQs)

### 3. **"Mobile First"**
- 75% de usuarios acceden desde móvil
- Diseño responsive obligatorio
- Touch-friendly (botones grandes)

### 4. **"Progressive Disclosure"**
- No todo visible al inicio
- Jerarquía de 3 niveles (Crítico → Importante → Informativo)
- Acordeones y tabs para info secundaria

### 5. **"Task-Based, Not Structure-Based"**
- Pensar en verbos: "Necesito", "Quiero", "Busco"
- No en sustantivos: "FEUNA", "Servicios", "Representación"
- Mega-menús por tarea, no por organigrama

### 6. **"Accesibilidad Universal"**
- WCAG 2.1 nivel AA mínimo
- Alto contraste (rojo #bb1f1f sobre blanco)
- Alt text en todas las imágenes
- Navegación por teclado
- Screen reader friendly

### 7. **"Transparencia Radical"**
- Presupuesto visible desde Inicio
- Actas publicadas en <7 días
- Informes trimestrales obligatorios
- Dashboard de métricas público

### 8. **"Contenido es Rey, Pero Diseño es Reina"**
- Contenido claro, conciso, sin jerga
- Diseño visual que refuerza jerarquía
- Consistencia en tono de voz
- Tipografía legible (16px+ en móvil)

---

## 🚨 RIESGOS Y MITIGACIONES

### Riesgo 1: **Confusión de Roles**
**Descripción:** Usuarios creen que FEUNA gestiona becas/salud/etc.  
**Probabilidad:** Alta  
**Impacto:** Alto (sobrecarga de consultas, frustración)  
**Mitigación:**
- Etiquetas visuales claras "🔗 SERVICIO UNA"
- Mensajes explícitos "Gestionado por [Dependencia]"
- FAQ: "¿Qué hace FEUNA?"
- Banner en Inicio: Razón de ser de FEUNA

### Riesgo 2: **Sobrecarga Cognitiva**
**Descripción:** Demasiada información en Inicio, usuario se pierde.  
**Probabilidad:** Media (si no se sigue propuesta de simplicidad)  
**Impacto:** Alto (rebote, frustración)  
**Mitigación:**
- Máximo 6 accesos rápidos en Inicio
- Progressive disclosure estricto
- Buscador gigante como salvavidas
- Testing con usuarios novatos

### Riesgo 3: **Mantenimiento Sin Equipo Técnico**
**Descripción:** Contenido desactualizado, enlaces rotos.  
**Probabilidad:** Alta (equipo FEUNA rota anualmente)  
**Impacto:** Medio (desconfianza, información errónea)  
**Mitigación:**
- Elegir CMS amigable (WordPress)
- Manual de uso con videos
- Checklist mensual de mantenimiento
- Backup automático

### Riesgo 4: **Baja Adopción de E-Peticiones**
**Descripción:** Estudiantes no usan formulario digital.  
**Probabilidad:** Media  
**Impacto:** Medio (objetivo clave no cumplido)  
**Mitigación:**
- Tutorial en video prominente
- Campaña de difusión en redes
- Incentivo: respuesta garantizada en 7 días
- Dashboard público de seguimiento

### Riesgo 5: **Performance en Móvil**
**Descripción:** Sitio lento en conexiones 3G/4G.  
**Probabilidad:** Media  
**Impacto:** Alto (abandono, frustración)  
**Mitigación:**
- Lazy loading de imágenes
- Compresión WebP
- CDN para assets estáticos
- Pruebas en dispositivos reales

---

## 💡 LECCIONES APRENDIDAS (Proceso)

### 1. **El Usuario NO Piensa Como el Diseñador**
- Lo "lógico" para FEUNA ≠ lógico para estudiantes
- Ejemplo: "Contacto" ≠ "Participación" en mente estudiantil

### 2. **La Dispersión es un Síntoma, No un Error**
- 4 lugares para buscar calendario = 4 modelos mentales válidos
- Solución: multi-ubicación estratégica, no forzar una sola

### 3. **Card Sorting es ORO**
- Reveló confusiones que NO habíamos anticipado
- Comentarios cualitativos tan valiosos como datos cuantitativos
- Inversión de 2 días, retorno en claridad de diseño

### 4. **Simplicidad ≠ Menos Contenido**
- Simplicidad = mejor organización + jerarquización + acceso directo
- Todo el contenido existe, pero no todo es igualmente visible

### 5. **Identidad de Marca Clara es Crítica**
- Si FEUNA no define qué hace, usuarios asumen roles incorrectos
- Banner "Razón de ser" NO es vanidad, es necesidad

---

## 📞 CONTACTO DEL PROYECTO

**Cliente:**
- Organización: FEUNA - Federación de Estudiantes UNA
- Contacto principal: Yassir Jiménez Carballo
- Email: comunicacionfeuna@una.cr
- Teléfono: (506) 2277-3236
- Ubicación: Campus Omar Dengo, Edificio Administrativo, 2do piso

**Alcance Geográfico:**
- Campus Omar Dengo (Heredia)
- Sedes Regionales: Brunca, Chorotega, Huetar Norte y Caribe

**Usuarios Finales:**
- ~15,000 estudiantes activos UNA
- Asociaciones estudiantiles por facultad/sede
- Funcionarios UNA (consulta de representación)
- Comunidad externa (transparencia)

---

## 🎯 RESUMEN EJECUTIVO PARA NUEVOS MIEMBROS

**En 3 líneas:**
Rediseño del sitio web de FEUNA (gobierno estudiantil UNA) que pasa de informativo a participativo, diferenciando servicios propios de FEUNA vs guía de servicios UNA, con arquitectura validada por 12 usuarios y enfoque en simplicidad, usabilidad y transparencia.

**Decisión clave:**
FEUNA al centro (representación, participación, transparencia) + guía de servicios UNA con etiquetas claras (becas, salud, cultura).

**Próximo paso:**
Wireframes con diferenciación visual propio vs externo, buscador protagonista, Inicio minimalista con 6 accesos rápidos.

---

**Última actualización:** 10 de febrero de 2026  
**Versión del documento:** 1.0  
**Estado del proyecto:** Arquitectura validada → Diseño visual en progreso
