# Mega prompt maestro para Copilot + Claude Opus
## Proyecto FEUNA → consolidación total → generación de prompt final para Figma AI

Usa este prompt en Copilot con Claude Opus para que primero audite, organice y preserve todo el trabajo existente del proyecto FEUNA, y luego genere **otro prompt final** listo para Figma AI.

---

## Prompt

```text
Quiero que actúes como un especialista senior en:
- auditoría de proyectos web
- arquitectura de información
- UX/UI institucional
- diseño de sistemas visuales
- front-end orientado a producto
- documentación técnica y de diseño

Tu trabajo NO es programar todavía. Tu trabajo principal es reconstruir, consolidar, preservar, ordenar y traducir todo el proyecto existente del sitio web de la FEUNA a una especificación maestra de diseño, y a partir de eso crear un prompt final impecable para Figma AI.

# 1) CONTEXTO GENERAL DEL PROYECTO

Estoy trabajando en el sitio web de la FEUNA (Federación de Estudiantes de la Universidad Nacional). El repositorio y directorio del proyecto están desordenados y mezclan materiales de distinta naturaleza, distintas etapas y distintos niveles de madurez.

El objetivo actual NO es entregar un sistema completo con backend. El objetivo actual es:
- ordenar conceptualmente el proyecto
- conservar todo el trabajo ya avanzado
- quedarnos únicamente con el front-end necesario para la entrega
- convertir todo lo existente en un insumo sólido para generar un diseño más limpio y mejorado en Figma AI
- evitar perder cualquier detalle importante del trabajo ya hecho

Si encuentras piezas de backend, lógica técnica no visual, referencias a integración o estructuras internas, solo debes usarlas para comprender:
- pantallas
- formularios
- estados
- flujos
- dependencias visuales
- arquitectura de información
- necesidades de interfaz

NO debes orientar la salida a backend. La salida debe estar orientada a diseño, front-end, UX/UI, estructura, contenido, sistema visual y especificación para Figma AI.

# 2) CONDICIÓN CRÍTICA

No quiero un rediseño genérico que borre el trabajo previo.
Quiero que conserves y explicites absolutamente todo lo útil que ya existe.

Tu prioridad es:
1. preservar
2. inventariar
3. organizar
4. depurar sin perder trazabilidad
5. distinguir lo existente de lo inferido y de lo propuesto
6. generar después un prompt final para Figma AI que no omita nada

No quiero que la IA simplifique demasiado ni que “se inspire” vagamente.
Quiero un resultado controlado, auditable, trazable y extremadamente detallado.

# 3) INSUMOS YA CONSOLIDADOS DEL PROYECTO

Debes tomar como base el siguiente estado del proyecto:

## 3.1 Estado general
- Existe un consolidado del proyecto FEUNA en un archivo MD con inventario, rutas, activos, textos, estilos y estado general.
- El proyecto contiene documentación, mockups, contenido, análisis del sitio actual, arquitectura renovada y materiales visuales.
- Hay un enfoque claro de reorganización orientada a tareas y no solo a estructura institucional.

## 3.2 Estructura general del proyecto
La raíz del proyecto contiene, entre otros:
- ARQUITECTURA-SITIO-RENOVADO.md
- BRIEF-PROYECTO-FEUNA.md
- COMISIONES-DEUNA-MAPA.md
- CONTENIDO-SITIO.md
- INVENTARIO-CONTENIDO-Y-ESTADO-FEUNA.md
- PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md
- README.md
- RESUMEN-EJECUTIVO.md
- SITEMAP-VISUAL.md
- feuna-website/
- mockup/
- sitio-actual/
- wireframes/

## 3.3 Directorio mockup
El mockup contiene páginas HTML estáticas, assets, CSS, JS y componentes comunes.
Páginas relevantes identificadas:
- archivo.html
- asociaciones.html
- becas.html
- boletines.html
- caeuna.html
- cefeuna.html
- contacto.html
- deuna.html
- defensor.html
- denuncias.html
- epeticiones.html
- eventos.html
- faq.html
- feuna.html
- guias.html
- index.html
- mei.html
- noticias.html
- oportunidades.html
- participacion.html
- plan-trabajo.html
- reglamentos.html
- reservas.html
- salud.html
- servicios.html
- sistemas.html
- teeuna.html
- transparencia.html
- tramites.html
- vida-universitaria.html

Además existen:
- common/
- css/
- images/
- js/

## 3.4 Rutas y páginas principales detectadas
### Páginas base
- index.html
- feuna.html
- deuna.html
- noticias.html
- servicios.html
- oportunidades.html
- participacion.html
- transparencia.html

### Páginas de representación y apoyo
- caeuna.html
- teeuna.html
- cefeuna.html
- mei.html
- defensor.html
- asociaciones.html
- representacion-cu.html
- archivo.html

### Páginas de servicios y recursos
- becas.html
- salud.html
- guias.html
- vida-universitaria.html
- sistemas.html
- tramites.html
- reservas.html
- epeticiones.html
- faq.html
- boletines.html
- eventos.html
- denuncias.html
- contacto.html
- reglamentos.html
- plan-trabajo.html

## 3.5 Componentes compartidos y funcionales
Componentes compartidos detectados:
- common/header.html
- common/footer.html
- js/main.js

Patrones y componentes relevantes:
- main-header
- nav-bar
- hero-slide
- eje-card
- noticia-card
- evento-item
- servicio-btn
- member-card
- member-photo
- filter-bar
- highlight-card

Interacciones detectadas:
- menú móvil hamburguesa
- slideshow automático del hero
- filtros por etiquetas en noticias
- filtros por comisión/categoría en DEUNA
- scroll suave
- fallback visual o placeholder para imágenes faltantes

## 3.6 Estado de madurez
- deuna.html es la página más avanzada y trabajada
- DEUNA ya tiene filtro funcional por comisión
- existe una tarjeta dinámica de detalle o destaque para el filtro activo
- el header y footer se cargan desde componentes comunes
- el servidor local fue validado en localhost:8000/mockup/deuna.html

## 3.7 Sistema visual detectado
### Paleta base
- Rojo FEUNA: #bb1f1f
- Rojo oscuro: #8b1515
- Negro: #1a1a1a
- Azul UNA: #034991
- Azul gris: #3d5a80
- Gris oscuro: #333333
- Gris medio: #666666
- Gris claro: #f5f5f5
- Gris bordes: #dddddd
- Blanco: #ffffff

### Tipografía
- Space Grotesk
- pesos 300, 400, 500, 600 y 700

### Patrones visuales y de layout
- reset base con box-sizing border-box
- contenedores centrados con max-width 1200px
- imágenes fluidas
- header de dos niveles
- barra superior clara
- barra de navegación roja fija
- dropdowns
- animaciones suaves en tarjetas y botones

### Ajustes locales relevantes
En DEUNA:
- las fotos se ajustaron a formato rectangular tipo pasaporte
- se removió el borde celeste global solo en esa página
- se añadió una tarjeta destacada dinámica para el filtro activo

## 3.8 Assets visuales detectados
Logos e imágenes de apoyo:
- logo-feuna.png
- banner-acerca-de-feuna.png
- hero-1.jpg
- reunion.png
- estudiantes-manifestacion.png

Imágenes de personas:
- carpeta de fotos tamaño pasaporte con múltiples retratos
- existe passport-placeholder.svg
- cuando no hay foto usable, se usa placeholder o fallback con iniciales

## 3.9 Textos y mensajes clave ya validados
### Home
- “¡ATRÉVETE A VIVIR LA U MÁS ALLÁ DE LAS AULAS!”
- foco en involucramiento estudiantil, servicios, participación y accesos directos

### FEUNA
- FEUNA como gobierno estudiantil de la UNA
- organización independiente y autónoma
- defensa de derechos, representación y participación

### DEUNA
- “Directorio Estudiantil (DEUNA)”
- “Representantes estudiantiles de la FEUNA 2025-2027”
- DEUNA como órgano ejecutivo de la FEUNA

### Mensajes de arquitectura ya validados
- el contenido se organiza por tareas y no por una estructura rígida
- se prioriza transparencia, participación y acceso rápido a becas, formularios y recursos
- en la arquitectura propuesta, “CONTACTO” fue renombrado a “PARTICIPACIÓN”

## 3.10 Qué sí sirve
- DEUNA tiene filtro funcional por comisión
- el detalle dinámico responde al filtro seleccionado
- header y footer comunes cargan correctamente
- la carpeta de fotos pasaporte está organizada
- el estilo rectangular de fotos está aplicado
- el placeholder SVG funciona
- el mockup usa HTML, CSS y JavaScript estáticos con componentes compartidos

## 3.11 Qué no sirve o qué está pendiente
- no hay capturas de pantalla versionadas en el repo
- algunos enlaces del header/footer pueden apuntar a páginas aún no validadas una por una
- parte del contenido de otras páginas sigue en estado base o migración
- hay mezcla de información histórica y nueva que debe depurarse
- algunas fotos antiguas HEIC no se usan directamente y fueron sustituidas por JPG, PNG o placeholder

## 3.12 Análisis ya validados
- se validó una arquitectura más simple y orientada a tareas
- se consolidó la separación entre servicios propios de FEUNA y servicios externos de la UNA
- se priorizó acceso a becas, formularios, participación y representación
- el sitio original usa Joomla, JA Rights y T4 Framework
- había oportunidad de mejorar accesibilidad, búsqueda, responsive y velocidad
- el flujo de contenido del mockup quedó más claro para una futura migración o entrega a DTIC

# 4) MATERIALES ADICIONALES QUE TE VOY A PASAR

Además de lo anterior, te voy a compartir materiales del proyecto. Debes integrar todo y no ignorar nada:
- estructura de carpetas
- rutas
- archivos clave
- fragmentos HTML/CSS/JS
- screenshots
- wireframes
- notas de funcionalidad
- textos
- observaciones mías
- assets visuales
- contexto institucional
- modelos previos
- ideas desordenadas
- contenido editorial
- documentación histórica o actual

Asume que parte del material puede estar repetido, incompleto, desordenado o parcialmente contradictorio. Tu trabajo es depurarlo sin borrar información importante y dejando trazabilidad.

# 5) TUS REGLAS DE TRABAJO

Debes cumplir estas reglas sin excepción:

1. No inventes páginas, componentes, módulos o flujos que no estén sustentados en el material, salvo cuando claramente los propongas como mejora necesaria.
2. Todo hallazgo debe clasificarse como una de estas tres categorías:
   - EXISTENTE
   - INFERIDO
   - PROPUESTA DE MEJORA
3. Si algo no se puede confirmar, no lo presentes como hecho.
4. Si falta contenido, crea placeholders útiles, pero márcalos como placeholders propuestos.
5. No conviertas el proyecto en una landing page genérica.
6. No ignores el tono institucional-estudiantil del sitio.
7. No reduzcas la FEUNA a un sitio de noticias: el sitio también trata de representación, servicios, participación, transparencia, apoyo estudiantil y acceso rápido.
8. No centres la salida en backend.
9. No pierdas ningún detalle de estilo, componentes, assets, textos, rutas o decisiones de arquitectura ya validadas.
10. Si hay conflictos entre materiales, repórtalos explícitamente.
11. Si encuentras duplicidades, no las borres silenciosamente: repórtalas y sugiere consolidación.
12. La salida debe servir como base real para diseño en Figma, no como resumen superficial.

# 6) ENFOQUE DE DISEÑO QUE DEBES RESPETAR

El diseño NO debe sentirse como una startup SaaS cualquiera.
Debe sentirse como un sitio:
- universitario
- estudiantil
- institucional
- accesible
- serio pero cercano
- claro
- útil
- participativo
- transparente
- con servicios visibles
- orientado a tareas reales del estudiantado

Debe mantener y mejorar el lenguaje visual existente:
- rojo FEUNA como ancla visual principal
- apoyo complementario del azul UNA
- tipografía Space Grotesk
- layouts claros, jerarquía fuerte y navegación más simple
- tarjetas, accesos rápidos, filtros, directorios y módulos informativos
- equilibrio entre lo institucional y lo juvenil

# 7) TU OBJETIVO FINAL

Necesito que conviertas todo el material en tres capas de salida:

## Capa A: Auditoría maestra del proyecto
Una reconstrucción exhaustiva y ordenada de todo lo que existe.

## Capa B: Especificación de diseño para recrear y mejorar el sitio
Con páginas, secciones, componentes, sistema visual, prioridades, placeholders y mejoras controladas.

## Capa C: Prompt final para Figma AI
Un prompt largo, preciso y listo para copiar/pegar en Figma AI para que genere el diseño sin perder detalle.

# 8) TAREAS OBLIGATORIAS QUE DEBES HACER

Realiza estas tareas en el siguiente orden:

## Tarea 1. Auditoría exhaustiva
Haz un inventario completo de:
- páginas
- vistas
- rutas
- componentes
- assets
- textos
- navegación
- interacciones
- módulos
- layouts
- estilos
- patrones
- secciones por página
- imágenes
- piezas reutilizables
- estados visuales
- vacíos de contenido
- elementos pendientes
- inconsistencias

## Tarea 2. Reconstrucción de arquitectura
Reconstruye:
- mapa del sitio
- navegación principal
- navegación secundaria
- agrupación temática
- jerarquía de contenidos
- relaciones entre páginas
- prioridades de entrada del usuario
- accesos rápidos
- estructura orientada a tareas

## Tarea 3. Lectura crítica del estado real
Determina:
- qué está sólido
- qué está parcial
- qué está desordenado
- qué es meramente base
- qué es reutilizable
- qué debería conservarse tal cual
- qué debería mejorarse sin romper el trabajo ya hecho

## Tarea 4. Sistema visual consolidado
Extrae:
- paleta
- tipografía
- uso de color
- sistema de botones
- tarjetas
- menús
- hero
- banners
- bloques informativos
- directorios
- filtros
- tablas si aplica
- formularios si aplica
- tono de las imágenes
- jerarquía visual
- responsive esperado
- accesibilidad esperada

## Tarea 5. Especificación detallada por página
Para cada página detectada o consolidada, describe:
- propósito
- usuario objetivo
- prioridad dentro del sitio
- layout sugerido
- secciones
- copy o placeholders
- CTA
- componentes usados
- imágenes
- comportamiento responsive
- observaciones
- estado de madurez
- si es EXISTENTE / INFERIDO / PROPUESTA DE MEJORA

## Tarea 6. Biblioteca de componentes
Define una librería de componentes para Figma que incluya:
- header desktop
- header mobile
- topbar institucional
- navbar con dropdown
- footer
- hero
- carrusel o hero rotativo si procede
- cards de ejes
- cards de noticias
- cards de eventos
- botones de servicios
- fichas o cards de representantes
- filtros
- bloques destacados
- CTA
- buscador si aplica
- formularios
- FAQ / acordeones
- banners informativos
- módulos de transparencia
- tablas o listados documentales
- placeholder de imagen
- módulos de contacto/participación
- cualquier otro componente detectado o estrictamente necesario

## Tarea 7. Propuestas de mejora controlada
Propón mejoras solo si:
- respetan el trabajo ya avanzado
- resuelven vacíos reales
- mejoran consistencia
- mejoran claridad
- mejoran accesibilidad
- mejoran navegación
- mejoran responsividad
- completan lo que falta para un diseño usable

Estas mejoras deben separarse claramente de lo ya existente.

## Tarea 8. Redacción de prompt final para Figma AI
Con toda la auditoría anterior, redacta un único prompt final para Figma AI que:
- describa el proyecto completo
- explique el tono visual e institucional
- enumere las páginas
- enumere las secciones
- defina el sistema visual
- preserve el trabajo existente
- pida completar vacíos con placeholders útiles
- pida consistencia entre pantallas
- pida responsive desktop/tablet/mobile
- pida accesibilidad
- pida jerarquía clara
- pida no inventar secciones sin fundamento
- pida mejorar el copy de ejemplo cuando falte
- pida un diseño de alta fidelidad
- pida componentes reutilizables
- pida una librería base compatible con evolución futura del front-end

## Tarea 9. Versión corta del prompt
Genera una versión más corta del prompt final por si Figma AI tiene límites de longitud.

# 9) FORMATO DE SALIDA OBLIGATORIO

Tu respuesta debe estar organizada exactamente así:

# 1. Resumen ejecutivo
Explica:
- qué tipo de sitio es
- cuál es su propósito
- en qué estado está el proyecto
- cuál es la intención del trabajo de consolidación

# 2. Inventario maestro del proyecto
## 2.1 Páginas y vistas
Para cada página:
- nombre
- ruta o archivo
- propósito
- estado
- secciones detectadas
- componentes detectados
- contenido detectado
- categoría (existente / inferido / mejora)

## 2.2 Componentes reutilizables
Para cada componente:
- nombre
- función
- variantes
- estados
- páginas donde aparece
- categoría

## 2.3 Assets visuales
- logos
- imágenes de apoyo
- retratos
- placeholders
- observaciones de uso

## 2.4 Sistema visual detectado
- colores
- tipografías
- espaciados
- layout
- bordes
- sombras
- interacciones
- responsive
- observaciones

# 3. Arquitectura de información consolidada
- mapa del sitio
- menús
- agrupaciones
- prioridades
- navegación por tareas
- observaciones

# 4. Estado real del proyecto
Divide en:
- sólido
- parcial
- pendiente
- conflictivo
- desordenado
- reusable
- riesgos de consolidación

# 5. Lineamientos UX/UI del sitio FEUNA
- tono
- personalidad visual
- jerarquía
- accesibilidad
- claridad
- interacción
- objetivos institucionales
- objetivos de servicio
- objetivos de participación

# 6. Especificación página por página
Una sección completa por cada página o grupo de páginas.

# 7. Biblioteca de componentes para Figma
Lista y describe todos los componentes base.

# 8. Mejoras controladas propuestas
Separa:
- mejoras estructurales
- mejoras visuales
- mejoras de contenido
- placeholders sugeridos
- mejoras de accesibilidad
- mejoras responsive

# 9. Prompt final listo para Figma AI
Redáctalo como un bloque continuo listo para copiar y pegar.

# 10. Versión corta del prompt para Figma AI
Más breve, pero funcional.

# 11. Checklist final de cobertura
Verifica explícitamente que no se omitió:
- ninguna página importante
- ningún componente importante
- ninguna interacción importante
- ningún asset importante
- ningún texto clave
- ningún criterio visual clave
- ningún pendiente importante

# 10) INSTRUCCIÓN MUY IMPORTANTE SOBRE LA TRAZABILIDAD

Quiero que mantengas una lógica de trazabilidad estricta:
- Si algo viene del material, marca que viene del material.
- Si lo estás deduciendo, marca que es inferido.
- Si lo propones como mejora, marca que es propuesta.

No mezcles estas tres categorías.

# 11) INSTRUCCIÓN MUY IMPORTANTE SOBRE CAPAS DE CONTENIDO

Debes leer el proyecto en capas:
- capa institucional
- capa de servicios
- capa de representación estudiantil
- capa de participación
- capa de transparencia
- capa de noticias y eventos
- capa de recursos prácticos

Luego debes reflejar eso en la organización del sitio y en el prompt para Figma AI.

# 12) INSTRUCCIÓN MUY IMPORTANTE SOBRE EL TONO DEL COPY

Cuando necesites sugerir textos o placeholders, usa un tono:
- claro
- institucional
- estudiantil
- directo
- útil
- no excesivamente corporativo
- no demasiado informal
- orientado a acción y comprensión rápida

# 13) INSTRUCCIÓN SOBRE RESPONSIVE Y ACCESIBILIDAD

Debes incluir explícitamente en tu especificación y en el prompt final para Figma AI:
- desktop
- tablet
- mobile

Y también:
- contraste adecuado
- jerarquía legible
- navegación clara
- estados de foco
- componentes accesibles
- CTA visibles
- formularios comprensibles
- imágenes con intención funcional o institucional

# 14) SI EL MATERIAL ES DEMASIADO GRANDE

Si el contexto total excede tu capacidad de respuesta de una sola vez:
- procesa el material por bloques
- mantén una tabla acumulativa interna
- no cierres prematuramente
- no generes el prompt final de Figma AI hasta haber consolidado todo lo recibido
- entrega al final una síntesis unificada

# 15) MATERIAL ADICIONAL A CONTINUACIÓN

A continuación te compartiré archivos, fragmentos, capturas, observaciones y demás contexto del proyecto.
Tu trabajo comienza solo después de leer todo lo que te pase.
No respondas con una propuesta superficial.
Responde con la estructura completa solicitada y con máximo nivel de detalle útil.
```

---

## Cómo usarlo
1. Pega este prompt en Copilot con Claude Opus.
2. Debajo, añade el resto de tus archivos, capturas, notas y fragmentos.
3. Pídele que no genere el prompt final para Figma hasta consolidar todo.
4. Cuando te entregue el resultado, usa la sección “Prompt final listo para Figma AI”.

---

## Notas
Este prompt ya incorpora, entre otras cosas:
- la estructura general del proyecto
- las rutas principales
- la organización del mockup
- los componentes compartidos
- los componentes visuales clave
- las interacciones detectadas
- la paleta y tipografía
- los ajustes específicos de DEUNA
- los textos base del home, FEUNA y DEUNA
- los assets principales
- el estado actual del proyecto
- los pendientes y riesgos
- la orientación institucional y por tareas del sitio
- la necesidad de separar existente / inferido / propuesta

Puedes complementarlo luego con:
- screenshots reales
- fragmentos HTML/CSS/JS específicos
- wireframes
- prioridades tuyas
- restricciones de entrega
- observaciones de DTIC
- observaciones editoriales
- jerarquías definitivas de contenido
