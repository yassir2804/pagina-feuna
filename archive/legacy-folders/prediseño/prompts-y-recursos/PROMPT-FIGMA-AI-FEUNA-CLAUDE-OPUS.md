# Prompt maestro para Figma AI con Claude Opus

Usa este texto como prompt principal para que Claude Opus genere una propuesta de diseño en Figma AI para el sitio web de la FEUNA. El objetivo no es crear un sitio genérico, sino preservar y ordenar todo el trabajo ya realizado, respetar el lenguaje institucional-estudiantil existente y convertir el material actual en un sistema visual consistente, reutilizable y altamente claro para una futura implementación front-end.

Si necesitas datos normalizados, usa como referencia única el archivo [FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml](FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml). Ese manifiesto contiene tokens, rutas, assets, reglas de placeholders y copy base.

---

## Instrucción inicial obligatoria

Quiero que actúes como un equipo senior completo de diseño y arquitectura de información compuesto por:
- arquitecto de información
- diseñador UX/UI institucional
- diseñador de sistemas visuales
- especialista en contenido y copy
- diseñador de componentes reutilizables para handoff a front-end
- auditor de consistencia visual y de navegación

Tu trabajo debe partir del material real del proyecto FEUNA, no de suposiciones. Debes reconstruir, ordenar, clasificar y mejorar sin borrar lo que ya existe. No quiero una reinterpretación libre ni un rediseño genérico. Quiero una traducción rigurosa del proyecto actual a una propuesta visual de alta fidelidad, clara, coherente y lista para ser usada como base de diseño en Figma.

El resultado debe conservar el carácter del sitio: universitario, estudiantil, institucional, útil, participativo, transparente, serio pero cercano. El sitio no debe parecer una startup SaaS, una landing comercial ni una web corporativa vacía. Debe sentirse como una plataforma de representación estudiantil y servicios para la comunidad universitaria.

---

## 1. Contexto del proyecto

La FEUNA es la Federación de Estudiantes de la Universidad Nacional de Costa Rica. El sitio debe servir como centro de información, representación, participación, servicios, trámites, transparencia, noticias y apoyo estudiantil. El proyecto ya tiene base documental, mockups, imágenes, componentes compartidos y decisiones de arquitectura validadas en distintas etapas.

Existe ya un inventario consolidado del proyecto que describe rutas, páginas, componentes, assets, textos, estilos y estado actual. Debes respetar ese trabajo como punto de partida. También existe un análisis del sitio actual institucional y una arquitectura renovada con énfasis en navegación por tareas, simplificación y mejor acceso a contenidos prioritarios.

El objetivo actual es convertir todo eso en una especificación visual consistente para Figma AI, con alto nivel de detalle, de modo que el resultado final pueda servir como base real para diseño, revisión institucional, handoff a desarrollo y posible producción de front-end.

No debes centrarte en backend. Si aparece alguna referencia técnica interna, úsala solamente para comprender pantallas, estados, flujos, formularios o dependencias visuales. La salida debe orientarse a diseño, experiencia de usuario, contenido y sistema visual.

---

## 2. Principios que debes respetar

### 2.1 Conservación del trabajo existente
No borres ni reemplaces silenciosamente el trabajo previo. Debes distinguir entre:
- EXISTENTE: lo que ya está en el material del proyecto.
- INFERIDO: lo que puedes deducir con base razonable en el material.
- PROPUESTA DE MEJORA: lo que agregas para resolver vacíos o mejorar consistencia.

Si algo no está confirmado, no lo presentes como hecho. Si hay contradicciones entre fuentes, repórtalas explícitamente. Si hay duplicidades, no las elimines en silencio: explícalas y sugiere consolidación.

### 2.2 Tono institucional-estudiantil
El sitio debe ser claro, útil, directo y serio, pero no frío. Debe sentirse próximo al estudiantado, sin perder institucionalidad. El lenguaje visual debe sostener una lógica de servicio, representación y participación.

### 2.3 Navegación por tareas
La navegación debe priorizar lo que el estudiantado necesita hacer y encontrar, no solo la jerarquía formal de la organización. Debes tratar como ejes de experiencia:
- representación estudiantil
- trámites y formularios
- servicios y recursos
- becas y apoyo socioeconómico
- participación y peticiones
- noticias y eventos
- transparencia y rendición de cuentas
- contacto y apoyo

### 2.4 Sistema visual estable
Debes mantener el ancla visual del proyecto:
- rojo FEUNA como color principal
- azul UNA como color complementario
- Space Grotesk como tipografía base
- tarjetas, módulos, filtros, directorios y bloques informativos como patrón dominante
- jerarquía clara, accesos rápidos y bloques de contenido altamente escaneables

### 2.5 Responsive y accesibilidad
Debes diseñar pensando en:
- desktop
- tablet
- mobile

Y debes incluir explícitamente:
- contraste suficiente
- foco visible
- navegación comprensible por teclado
- estructuras semánticas claras
- CTAs visibles y consistentes
- formularios entendibles
- imágenes con intención funcional o institucional
- bloques que sigan siendo legibles y útiles en móvil

---

## 3. Fuente única de normalización

Antes de generar cualquier pantalla, usa como referencia normalizada el archivo [FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml](FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml). Ese archivo contiene:
- tokens de color
- tipografía
- layout
- breakpoints
- sombras
- rutas principales
- rutas de imágenes
- carpeta de retratos tipo pasaporte
- placeholder SVG
- copy semilla
- reglas de uso
- páginas detectadas
- componentes reutilizables
- interacciones conocidas

No inventes nuevas rutas de assets si ya existe una ruta normalizada en ese manifiesto. Si necesitas un placeholder, usa la convención definida allí. Si la imagen no existe, usa un placeholder explícito y rotulado.

---

## 4. Inventario lógico que debes reconstruir

### 4.1 Páginas principales del sitio
Debes diseñar y ordenar como sistema completo, no como piezas sueltas, las siguientes páginas o grupos de páginas:

- Inicio
- FEUNA
- DEUNA
- Noticias
- Servicios
- Oportunidades
- Participación
- Transparencia
- CAEUNA
- TEEUNA
- CEFEUNA
- MEI
- Defensoría
- Asociaciones estudiantiles
- Representación en órganos UNA
- Archivo histórico
- Becas
- Salud y bienestar
- Guías y recursos
- Vida universitaria
- Sistemas y plataformas
- Trámites y formularios
- Reservas
- E-Peticiones
- FAQ
- Boletines
- Eventos
- Denuncias
- Contacto
- Reglamentos
- Plan de trabajo

Si una página aparece en el inventario pero aún no tiene madurez visual, debes representarla igual con un frame estructurado y marcar su contenido como placeholder útil.

### 4.2 Estructura global
La navegación principal debe organizarse de forma jerárquica y clara. El sitio debe reflejar una arquitectura orientada a tareas con categorías amplias que agrupen subpáginas útiles. Debes respetar el lenguaje institucional y la lógica de representación estudiantil.

A nivel de sistema, el sitio debe dejar claro que FEUNA no es solo noticias: también es representación, servicios, participación, transparencia, apoyo y acceso a recursos.

### 4.3 Componentes comunes detectados
Debes reutilizar y estandarizar los componentes ya detectados en el proyecto:
- header desktop
- header mobile
- topbar institucional
- navbar con dropdown
- footer
- hero principal
- carrusel o slideshow
- cards de ejes o categorías
- cards de noticias
- cards de eventos
- tarjetas de servicios
- tarjetas de personas o representantes
- filtros por categoría
- bloques destacados
- CTA primarios y secundarios
- buscador
- formularios
- FAQ o acordeones
- banners informativos
- módulos de transparencia
- tablas y listados documentales
- placeholder de imagen
- módulos de participación
- módulos de contacto

Si un componente no aparece literalmente en el material, pero es necesario para completar un patrón ya existente, puedes proponerlo como mejora, siempre marcado como tal.

---

## 5. Sistema visual que debes usar como base

### 5.1 Paleta de color
Debes usar la paleta institucional consolidada:
- rojo FEUNA: #bb1f1f
- rojo oscuro: #8b1515
- azul UNA: #034991
- azul gris: #3d5a80
- negro: #1a1a1a
- gris oscuro: #333333
- gris medio: #666666
- gris claro: #f5f5f5
- gris bordes: #dddddd
- blanco: #ffffff

El rojo FEUNA debe ser el ancla principal. El azul UNA debe aparecer como apoyo, no como protagonista dominante. Los grises deben sostener legibilidad y neutralidad. No debes introducir una estética violeta, neón, pastel artificial o startup genérica.

### 5.2 Tipografía
Usa Space Grotesk como tipografía principal. La jerarquía debe contemplar pesos 300, 400, 500, 600 y 700. Mantén una escala clara para títulos, subtítulos, texto principal, etiquetas, botones y microcopy.

### 5.3 Layout y espaciado
Debes trabajar con:
- max width de contenido centrado cercano a 1200px
- ritmo visual consistente basado en múltiplos de 8px
- bloques bien separados
- tarjetas con aire suficiente
- jerarquía vertical fuerte
- secciones con encabezados claros

### 5.4 Bordes, radios y sombras
Debes respetar la sensación institucional limpia:
- radios moderados, no exagerados
- sombras suaves y funcionales
- bordes discretos para tarjetas y contenedores
- uso prudente de elevación visual

### 5.5 Imagen y fotografía
El tono visual de las imágenes debe ser universitario, documental e institucional. Las imágenes deben mostrar:
- personas reales
- comunidad estudiantil
- espacios universitarios
- actividades institucionales
- recursos útiles

En DEUNA y en directorios de personas, debes usar el patrón de retrato rectangular tipo pasaporte. No lo conviertas en avatar circular. No apliques bordes decorativos que contradigan esa intención.

---

## 6. Reglas estrictas para imágenes y placeholders

Debes respetar las rutas y convenciones ya definidas en el manifiesto. Cuando una imagen exista, usa una etiqueta de asset con su ruta exacta. Cuando no exista, usa placeholder claramente marcado.

### 6.1 Rutas de assets ya existentes
Utiliza las rutas normalizadas del manifiesto para:
- logo
- banner institucional
- hero principal
- imágenes de apoyo
- fotos tipo pasaporte
- placeholder SVG

### 6.2 Convención de placeholders
Cuando la imagen no esté disponible o no sea usable:
- usa [mockup/images/passport-placeholder.svg](mockup/images/passport-placeholder.svg) si es un retrato
- usa un bloque gris claro con texto de ejemplo si se trata de un banner, hero o imagen de contenido general
- marca siempre el placeholder como placeholder propuesto o placeholder útil

### 6.3 Regla de nombres
Si aparece un nombre real en el proyecto, respétalo. Si aparece un archivo de foto ya confirmado, respeta su ruta. Si se usan iniciales como fallback, deben ser discretas y coherentes con el diseño.

### 6.4 Qué no hacer con imágenes
- no inventar fotografías nuevas
- no asumir que una foto HEIC debe mostrarse si ya fue reemplazada
- no omitir el texto alternativo
- no usar recortes circulares por defecto
- no poner decoraciones visuales que compitan con la identificación de la persona

---

## 7. Arquitectura de información que debes materializar

Debes construir una experiencia de navegación que responda a capas de información:
- institucional
- servicios
- representación estudiantil
- participación
- transparencia
- noticias y eventos
- recursos prácticos

La arquitectura debe permitir que una persona encuentre rápidamente lo que necesita, especialmente:
- becas
- trámites
- formularios
- representación estudiantil
- contacto y apoyo
- noticias y calendario
- documentos y transparencia

### 7.1 Menú principal sugerido
La navegación debe ser consistente con la lógica ya validada en el material, agrupando:
- Inicio
- FEUNA
- Representación
- Noticias
- Trámites
- Servicios
- Oportunidades
- Participación

Si una sección todavía conserva nombres antiguos o en transición, debes señalarlos como conflicto o estado histórico, no como verdad definitiva.

### 7.2 Navegación secundaria
Debes contemplar subniveles para:
- DEUNA y sus comisiones
- CAEUNA, TEEUNA, CEFEUNA, MEI
- becas, salud, guías, sistemas, vida universitaria
- trámites, formularios y reservas
- participación, peticiones, denuncias y transparencia
- archivos, reglamentos, plan de trabajo e historia

### 7.3 Orden de prioridad del usuario
En el diseño debes priorizar el acceso rápido a:
1. Becas y apoyo socioeconómico
2. Trámites y formularios
3. Participación y peticiones
4. Representación estudiantil
5. Noticias y eventos
6. Servicios estudiantiles
7. Transparencia y documentación
8. Contacto y redes

---

## 8. Instrucciones específicas para la entrega visual

Debes generar un sistema visual completo que incluya:
- frames o pantallas por página
- componentes reutilizables
- estados de botones y filtros
- navegación desktop y móvil
- versiones de bloques principales
- ejemplos con contenido real o placeholder
- jerarquía visual coherente entre páginas
- consistencia entre módulos

No generes solo una home bonita. Debes generar una familia de pantallas que se entiendan como un mismo sistema.

### 8.1 Home
La home debe ser el hub principal. Debe mostrar:
- hero fuerte
- CTA claros
- accesos rápidos
- servicios destacados
- noticias o eventos recientes
- bloques de transparencia o participación
- módulos visuales de becas o recursos
- indicadores de recorrido rápido

### 8.2 FEUNA
La página de FEUNA debe explicar:
- qué es la FEUNA
- su papel como gobierno estudiantil
- su autonomía e independencia
- su misión y función
- su estructura general
- sus principios y su alcance

Debe sentirse institucional, pero comprensible para estudiantes nuevos.

### 8.3 DEUNA
La página DEUNA ya es una referencia avanzada. Debe conservarse como una página con:
- filtros por comisión
- tarjetas de integrantes
- fotos rectangulares tipo pasaporte
- tarjetas destacadas para el filtro activo
- descripción de funciones
- jerarquía clara entre presidencia, secretaría y comisiones
- comportamiento responsive

No reemplaces este trabajo. Úsalo como base y conviértelo en un patrón visual pulido y consistente.

### 8.4 Noticias
Debe mostrar:
- listado de noticias
- filtros por área temática
- cards consistentes
- fechas visibles
- categorías
- CTAs para leer más
- buen uso de imágenes de portada

### 8.5 Servicios
Debe organizarse por utilidad real y no solo por organigrama. Debe agrupar:
- becas
- salud
- sistemas
- vida universitaria
- guías
- trámites
- reservas
- FAQ

### 8.6 Participación
Debe ser una página de acción. Debe incluir:
- e-peticiones
- propuestas
- participación en FEUNA
- contacto y comunicación
- denuncias o sugerencias cuando aplique
- acceso a redes o canales oficiales

### 8.7 Transparencia
Debe mostrar:
- presupuesto
- ejecución
- informes
- actas
- acuerdos
- documentos públicos
- archivos descargables

### 8.8 Representación
Debe reunir y diferenciar claramente:
- DEUNA
- CAEUNA
- TEEUNA
- CEFEUNA
- MEI
- representación en CU y CONSACA
- asociaciones estudiantiles
- defensoría, si la arquitectura la incluye

---

## 9. Detalle de comportamiento visual por tipo de módulo

### 9.1 Header
El header debe ser de dos niveles:
- barra superior institucional con logo, búsqueda y redes
- barra de navegación principal en color FEUNA con dropdowns

Debe existir versión desktop y versión mobile. En mobile, el menú debe colapsar con botón hamburguesa y conservar claridad visual.

### 9.2 Hero
El hero debe sostener el mensaje principal y ofrecer CTA. Debe permitir variaciones según página:
- hero de inicio con mensaje de bienvenida
- hero interno con título, subtítulo y breadcrumb
- hero de sección con enfoque de utilidad

### 9.3 Cards
Las cards deben obedecer a sistema consistente:
- título
- subtítulo o descripción
- icono o imagen
- CTA opcional
- borde y sombra suaves
- estados hover y focus

### 9.4 Filtros
Los filtros deben verse como chips, tabs o botones segmentados. Deben tener estado activo claro, transición suave y suficiente contraste.

### 9.5 Formularios
Los formularios deben verse entendibles y no intimidantes. Deben incluir:
- labels visibles
- ayudas contextuales
- campos claros
- botones legibles
- mensajes de estado
- espacios amplios

### 9.6 FAQ y acordeones
Los FAQ deben presentar preguntas como módulos fáciles de escanear, con acordeones visualmente claros y diferenciación entre pregunta y respuesta.

### 9.7 Transparencia y tablas
Las tablas o listados documentales deben ser legibles, con jerarquía visual, posibilidad de descarga y buen comportamiento responsive.

---

## 10. Qué debes considerar como EXISTENTE

Debes tratar como EXISTENTE todo lo que ya está documentado en el material del proyecto:
- páginas listadas
- componentes compartidos
- estilos base
- paleta y tipografía
- rutas de imágenes
- copy semilla
- estructura de navegación
- DEUNA con filtros y tarjetas
- placeholder SVG
- análisis del sitio actual
- arquitectura renovada
- consolidado de contenido

No reinterpretes eso como si fuera una idea nueva. Es material real del proyecto.

---

## 11. Qué debes considerar como INFERIDO

Puedes inferir, con prudencia, cosas como:
- patrones de uso más probables por parte del estudiantado
- qué páginas deben ser más prominentes
- qué bloques requieren mejor jerarquía
- qué componentes conviene convertir en librería
- cómo agrupar noticias, servicios y representación
- qué layout sería más eficiente en móvil

Si infieres algo, dilo como inferencia. No lo presentes como hecho.

---

## 12. Qué debes considerar como PROPUESTA DE MEJORA

Puedes proponer mejoras, pero separadas con claridad del material existente:
- consolidar un sistema de diseño en Figma
- crear variantes responsive por pantalla
- unificar nombres de componentes
- crear estados de hover/focus/active
- mejorar espaciados y jerarquías
- mejorar el copy de placeholder donde falte contenido real
- crear un sistema visual de transparencia más claro
- integrar mejor el calendario o noticias destacadas
- estandarizar tarjetas de personas y comisiones

No mezcles mejora con inventario.

---

## 13. Biblioteca de componentes que debes producir en Figma

Debes incluir componentes base y variantes para:
- header desktop
- header mobile
- topbar institucional
- navbar con dropdown
- footer
- hero principal
- hero interno
- breadcrumb
- card de eje o categoría
- card de noticia
- card de evento
- card de servicio
- card de persona o representante
- tarjeta DEUNA de comisión
- filtro/chip
- bloque destacado
- CTA primario
- CTA secundario
- buscador
- acordeón FAQ
- bloque de transparencia
- tabla o listado documental
- banner informativo
- placeholder de imagen general
- placeholder de retrato
- módulo de contacto
- módulo de participación
- módulo de redes
- módulo de calendario
- módulo de documentos descargables

Cada componente debe tener variantes claras y reutilizables. Deben existir estados de:
- default
- hover
- active
- focus
- disabled si aplica

---

## 14. Páginas y grupos que debes diseñar con detalle

### 14.1 Inicio
Debe incluir:
- logo y navegación
- hero principal
- CTA de participación
- accesos rápidos a servicios clave
- bloque de becas destacado si aplica
- noticia destacada
- módulo de eventos o calendario
- bloque de transparencia o representación
- footer completo

### 14.2 FEUNA
Debe incluir:
- qué es FEUNA
- misión y visión
- estructura organizativa
- historia y principios
- enlaces a documentos clave

### 14.3 Representación
Debe incluir una vista hub que conecte:
- DEUNA
- CAEUNA
- TEEUNA
- CEFEUNA
- MEI
- representación en órganos UNA
- asociaciones

### 14.4 DEUNA
Debe incluir:
- filtro por comisión
- lista de integrantes por comisión
- highlight de comisión activa
- funciones de la comisión
- presentación clara de presidencia, secretaría y comisiones
- fotos de retrato con formato tipo pasaporte
- placeholders correctos donde haga falta

### 14.5 Noticias
Debe incluir:
- cards de noticias
- filtros por área temática
- fecha y categoría
- destacados
- vista responsive

### 14.6 Servicios
Debe incluir:
- cards o bloques de becas, salud, guías, sistemas, vida universitaria, trámites, reservas y FAQ
- accesos a recursos externos cuando aplique
- diferenciación entre servicio gestionado por FEUNA y enlace a dependencia UNA

### 14.7 Participación
Debe incluir:
- e-peticiones
- formas de participación
- contacto y canales
- propuestas y seguimiento
- canal de denuncias o sugerencias cuando aplique

### 14.8 Transparencia
Debe incluir:
- presupuesto
- informes
- actas
- acuerdos
- archivos
- documentos descargables

### 14.9 Oportunidades
Debe incluir:
- bolsas de empleo
- becas al extranjero
- TFG
- horas asistente
- voluntariados
- convocatorias

### 14.10 Recursos prácticos
Debes diseñar páginas y bloques como:
- becas
- salud
- guías
- sistemas
- vida universitaria
- tramites
- reservas
- FAQ
- boletines
- eventos
- denuncias
- contacto
- reglamentos
- plan de trabajo

---

## 15. Copy base y placeholders sugeridos

Cuando falte texto, usa un copy claro, corto y útil. Algunos textos base ya validados son:
- “¡ATRÉVETE A VIVIR LA U MÁS ALLÁ DE LAS AULAS!”
- “La FEUNA es el gobierno estudiantil de la UNA...”
- “Directorio Estudiantil (DEUNA)”
- “Representantes estudiantiles de la FEUNA 2025-2027”
- “Participación” como eje de acción

Si necesitas placeholders:
- usa descripciones breves y neutrales
- no uses Lorem Ipsum si puedes evitarlo
- marca claramente que es contenido de ejemplo
- mantén tono institucional-estudiantil

Ejemplos de placeholders útiles:
- “Descripción breve del servicio estudiantil.”
- “Aquí se mostrarán documentos y acuerdos recientes.”
- “Contenido por completar con información oficial.”
- “Enlace externo a dependencia UNA.”

---

## 16. Qué debe producir la salida de Figma AI

Quiero que la salida final de Figma AI sea un diseño de alta fidelidad que incluya:
- sistema visual unificado
- componentes reutilizables
- pantallas principales
- pantallas secundarias
- estados responsive
- placeholders útiles
- jerarquía clara
- consistencia entre módulos
- estructura lista para handoff

El diseño debe ser suficientemente detallado para que un equipo pueda implementarlo después sin reinterpretar la base conceptual.

---

## 17. Qué no debes hacer

No hagas esto:
- no inventar secciones no sustentadas
- no borrar el lenguaje institucional
- no convertir el sitio en una demo comercial genérica
- no usar una estética excesivamente corporativa
- no usar colores arbitrarios sin justificación
- no ignorar la separación entre servicios FEUNA y servicios UNA
- no olvidar representación, participación y transparencia
- no omitir los assets ya existentes
- no perder las rutas de imágenes ya normalizadas
- no mezclar EXISTENTE, INFERIDO y PROPUESTA
- no producir un solo layout sin variantes responsive

---

## 18. Entregable esperado

Tu salida debe organizarse internamente como:
1. auditoría maestra del material
2. reconstrucción de arquitectura
3. sistema visual consolidado
4. especificación página por página
5. biblioteca de componentes
6. mejoras controladas propuestas
7. prompt final para Figma AI
8. versión corta del prompt

Si en la plataforma donde lo vas a usar no conviene entregar tantas secciones, conserva la lógica interna pero prioriza el prompt final como bloque principal.

---

## 19. Instrucción final para el diseño

Diseña FEUNA como una plataforma universitaria útil, sólida y clara. Debe verse como un sitio que ayuda al estudiantado a resolver cosas reales, comprender la representación, encontrar recursos, participar y mantenerse informado. Debe tener identidad propia, coherencia visual y mucha capacidad de crecimiento.

Preserva lo que ya se trabajó. Mejora lo que está incompleto. Usa placeholders cuando haga falta, pero no escondas la falta de contenido real. Haz visible la estructura, los recursos, las rutas y los componentes. Convierte todo el material en un sistema serio y reutilizable.

---

## 20. Bloque de referencia de recursos

Para que no haya ambigüedad, toma como referencia directa estos elementos normalizados:
- [FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml](FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml)
- [INVENTARIO-CONTENIDO-Y-ESTADO-FEUNA.md](INVENTARIO-CONTENIDO-Y-ESTADO-FEUNA.md)
- [mockup/common/header.html](mockup/common/header.html)
- [mockup/common/footer.html](mockup/common/footer.html)
- [mockup/js/main.js](mockup/js/main.js)
- [mockup/css/styles.css](mockup/css/styles.css)
- [mockup/deuna.html](mockup/deuna.html)

Usa estos archivos para mantener consistencia entre lo que ya existe y lo que vas a diseñar.

---

## 21. Resultado ideal

El resultado ideal debe permitir que alguien mire la propuesta y entienda de inmediato:
- qué es FEUNA
- cómo se navega el sitio
- dónde están los servicios
- dónde están las decisiones de representación
- cómo participa el estudiantado
- dónde están las noticias
- dónde están los documentos
- dónde están las becas y recursos
- cómo se sostienen visualmente todas las páginas con el mismo sistema

Ese es el objetivo final.

---

## 22. Instrucción final operativa para Claude Opus

Toma todo este contexto, usa el manifiesto de recursos como base única de estandarización, conserva el contenido existente, marca claramente lo inferido y lo propuesto, y genera una propuesta de diseño para Figma AI extremadamente específica, coherente, reutilizable y lista para producción visual.

No simplifiques en exceso. No elimines detalles. No inventes sin fundamento. No pierdas la trazabilidad. Usa placeholders bien definidos donde falte material. Mantén identidad FEUNA. Mantén claridad. Mantén estructura. Mantén utilidad.
