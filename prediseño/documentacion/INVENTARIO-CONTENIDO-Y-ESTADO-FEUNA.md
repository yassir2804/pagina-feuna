# Inventario, rutas y estado del sitio FEUNA

Este documento consolida la información más útil del proyecto FEUNA en un solo MD: estructura de carpetas, rutas, capturas sugeridas, componentes clave, estilos globales, textos, logos e imágenes, y notas sobre qué está funcionando y qué falta.

## 1. Alcance del consolidado

Fuentes revisadas:
- [README.md](README.md)
- [ARQUITECTURA-SITIO-RENOVADO.md](ARQUITECTURA-SITIO-RENOVADO.md)
- [RESUMEN-EJECUTIVO.md](RESUMEN-EJECUTIVO.md)
- [CONTENIDO-SITIO.md](CONTENIDO-SITIO.md)
- [sitio-actual/ANALISIS-SITIO-ACTUAL.md](sitio-actual/ANALISIS-SITIO-ACTUAL.md)
- [mockup/js/main.js](mockup/js/main.js)
- [mockup/css/styles.css](mockup/css/styles.css)
- [mockup/common/header.html](mockup/common/header.html)
- [mockup/common/footer.html](mockup/common/footer.html)
- [mockup/deuna.html](mockup/deuna.html)

## 2. Árbol de carpetas

### Raíz del proyecto
```text
Página Web FEUNA/
├── ARQUITECTURA-SITIO-RENOVADO.md
├── BRIEF-PROYECTO-FEUNA.md
├── COMISIONES-DEUNA-MAPA.md
├── CONTENIDO-SITIO.md
├── INVENTARIO-CONTENIDO-Y-ESTADO-FEUNA.md
├── PROPUESTA-SIMPLICIDAD-JERARQUIA-V2.md
├── README.md
├── RESUMEN-EJECUTIVO.md
├── SITEMAP-VISUAL.md
├── feuna-website/
├── mockup/
├── sitio-actual/
└── wireframes/
```

### `mockup/`
```text
mockup/
├── archivo.html
├── asociaciones.html
├── becas.html
├── boletines.html
├── caeuna.html
├── cefeuna.html
├── contacto.html
├── deuna.html
├── defensor.html
├── denuncias.html
├── epeticiones.html
├── eventos.html
├── faq.html
├── feuna.html
├── guias.html
├── index-backup-original.html
├── index.html
├── mei.html
├── noticias.html
├── oportunidades.html
├── participacion.html
├── plan-trabajo.html
├── reglamentos.html
├── reservas.html
├── salud.html
├── servicios.html
├── sistemas.html
├── teeuna.html
├── temp-extract.html
├── transparencia.html
├── tramites.html
├── vida-universitaria.html
├── common/
├── css/
├── images/
└── js/
```

### `mockup/images/`
```text
mockup/images/
├── banner-acerca-de-feuna.png
├── estudiantes-manifestacion.png
├── hero-1.jpg
├── logo-feuna.png
├── passport-placeholder.svg
├── reunion.png
├── originales/
└── Fotos tamaño pasaporte, (JPG)/
```

### `mockup/images/Fotos tamaño pasaporte, (JPG)/`
```text
Adrian.jpg
Andrea Sisfontes.jpg
Ariana.png
Avril_.jpg
Bryam.jpg
Carolina Arrieta_.jpg
Cris Castro.png
Cristofer Gerrero (1).jpg
Cristofer Gerrero (2).jpg
Cristofer Ulate.jpg
Daniela.jpeg
Dilan Gómez_.jpg
Einer Canales Campos.jpg
Foto Lau.jpg
Gabriel Sancho.jpg
Iris Lopez .jpeg
Isabel_.jpg
Marco Víquez.jpeg
Mery.jpg
Nataly Mendoza Hernández.png
Omar.jpg
Sebastián.jpg
Stephanie.jpg
Valeria_.jpg
Yariel.png
Yassir.jpg
```

## 3. Rutas principales del sitio

### Páginas base del mockup
- [mockup/index.html](mockup/index.html)
- [mockup/feuna.html](mockup/feuna.html)
- [mockup/deuna.html](mockup/deuna.html)
- [mockup/noticias.html](mockup/noticias.html)
- [mockup/servicios.html](mockup/servicios.html)
- [mockup/oportunidades.html](mockup/oportunidades.html)
- [mockup/participacion.html](mockup/participacion.html)
- [mockup/transparencia.html](mockup/transparencia.html)

### Páginas de representación y apoyo
- [mockup/caeuna.html](mockup/caeuna.html)
- [mockup/teeuna.html](mockup/teeuna.html)
- [mockup/cefeuna.html](mockup/cefeuna.html)
- [mockup/mei.html](mockup/mei.html)
- [mockup/defensor.html](mockup/defensor.html)
- [mockup/asociaciones.html](mockup/asociaciones.html)
- [mockup/representacion-cu.html](mockup/representacion-cu.html)
- [mockup/archivo.html](mockup/archivo.html)

### Páginas de servicios y recursos
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

### Ruta de vista local que se ha usado para validar
- `http://localhost:8000/mockup/deuna.html`

## 4. Capturas de pantalla

No hay capturas versionadas dentro de este repositorio en esta revisión. En lugar de eso, se recomienda capturar estas vistas cuando se necesite entregar o documentar el estado visual:

- Inicio: [mockup/index.html](mockup/index.html)
- Sobre FEUNA: [mockup/feuna.html](mockup/feuna.html)
- DEUNA: [mockup/deuna.html](mockup/deuna.html)
- Servicios: [mockup/servicios.html](mockup/servicios.html)
- Representación: [mockup/caeuna.html](mockup/caeuna.html)
- Versión móvil del encabezado: [mockup/index.html](mockup/index.html)

Sugerencia de capturas a tomar:
- Header completo en desktop.
- Hero de inicio.
- Bloque de servicios y accesos rápidos.
- Sección DEUNA con filtros.
- Vista móvil con menú hamburguesa.

## 5. Componentes clave

### Componentes compartidos
- [mockup/common/header.html](mockup/common/header.html): encabezado común con logo, buscador, redes y navegación.
- [mockup/common/footer.html](mockup/common/footer.html): pie de página común con enlaces institucionales y contacto.
- [mockup/js/main.js](mockup/js/main.js): carga header/footer y activa interacciones generales.

### Componentes visuales principales
- `main-header` y `nav-bar` para el encabezado de dos niveles.
- `hero-slide` para el carrusel del home.
- `eje-card` para áreas de trabajo.
- `noticia-card` para noticias.
- `evento-item` para eventos.
- `servicio-btn` para accesos a servicios.
- `member-card`, `member-photo`, `filter-bar` y `highlight-card` para DEUNA.

### Componentes de interacción
- Menú móvil con botón hamburguesa.
- Slideshow automático del hero.
- Filtros por etiquetas en noticias.
- Filtros por comisión/categoría en DEUNA.
- Scroll suave entre secciones.
- Placeholder y fallback visual para imágenes faltantes.

## 6. Estilos globales

### Paleta base
Según [mockup/css/styles.css](mockup/css/styles.css):
- Rojo FEUNA: `#bb1f1f`
- Rojo oscuro: `#8b1515`
- Negro: `#1a1a1a`
- Azul UNA: `#034991`
- Azul gris: `#3d5a80`
- Gris oscuro: `#333333`
- Gris medio: `#666666`
- Gris claro: `#f5f5f5`
- Gris bordes: `#dddddd`
- Blanco: `#ffffff`

### Tipografía
- Space Grotesk desde Google Fonts.
- Pesos usados: 300, 400, 500, 600 y 700.

### Reglas y patrones globales relevantes
- Reset universal con `box-sizing: border-box`.
- Contenedores centrados con `max-width: 1200px`.
- Imágenes fluidas con `max-width: 100%`.
- Encabezado de dos niveles con barra superior clara y barra de navegación roja fija.
- Dropdowns para navegación principal.
- Animaciones suaves en elementos de tarjetas y botones.

### Ajustes locales en `mockup/deuna.html`
- Se sobreescribió el estilo de fotos para que sean rectangulares tipo pasaporte.
- Se removió el borde celeste global de las fotos solo en DEUNA.
- Se añadió una tarjeta destacada dinámica para el filtro activo.

## 7. Textos clave

### Home
- “¡ATRÉVETE A VIVIR LA U MÁS ALLÁ DE LAS AULAS!”
- Involucramiento estudiantil, servicios, participación y accesos directos.

### FEUNA
- Definición del gobierno estudiantil de la UNA.
- FEUNA como organización independiente y autónoma.
- Defensa de derechos estudiantiles, representación y participación.

### DEUNA
- “Directorio Estudiantil (DEUNA)”
- “Representantes estudiantiles de la FEUNA 2025-2027”
- “El Directorio Estudiantil (DEUNA) es el órgano ejecutivo de la FEUNA...”

### Mensajes de arquitectura validados
- El contenido se organiza por tareas y no por estructura rígida.
- Se prioriza transparencia, participación y acceso rápido a becas, formularios y recursos.
- “CONTACTO” se renombró a “PARTICIPACIÓN” en la arquitectura propuesta.

## 8. Logos e imágenes

### Logos usados
- [mockup/images/logo-feuna.png](mockup/images/logo-feuna.png)
- [mockup/images/banner-acerca-de-feuna.png](mockup/images/banner-acerca-de-feuna.png)

### Imágenes de apoyo
- [mockup/images/hero-1.jpg](mockup/images/hero-1.jpg)
- [mockup/images/reunion.png](mockup/images/reunion.png)
- [mockup/images/estudiantes-manifestacion.png](mockup/images/estudiantes-manifestacion.png)

### Imágenes de personas
- Carpeta base: [mockup/images/Fotos tamaño pasaporte, (JPG)/](mockup/images/Fotos%20tamaño%20pasaporte,%20(JPG)/)
- Se usa formato rectangular tipo pasaporte.
- Existe un placeholder: [mockup/images/passport-placeholder.svg](mockup/images/passport-placeholder.svg)

### Nota sobre disponibilidad
- Ya se incorporaron varias fotos JPG/PNG que sustituyen los HEIC.
- Cuando falta una foto usable, la página usa placeholder o fallback con iniciales.

## 9. Qué sí sirve

- [mockup/deuna.html](mockup/deuna.html) ya tiene filtro funcional por comisión.
- El card de detalle dinámico de DEUNA sí responde al filtro seleccionado.
- El encabezado y pie comunes se cargan desde `mockup/common/`.
- El servidor local ya se probó en `http://localhost:8000`.
- Las imágenes de pasaporte están organizadas dentro de `mockup/images/Fotos tamaño pasaporte, (JPG)/`.
- El estilo rectangular de las fotos quedó aplicado en DEUNA.
- El placeholder SVG sirve para fotos no disponibles.

## 10. Qué no sirve o está pendiente

- No hay capturas de pantalla versionadas en el repositorio en esta revisión.
- Algunos enlaces del encabezado y footer pueden apuntar a páginas que aún están en proceso o no se han validado visualmente una por una.
- Parte del contenido de otras páginas sigue siendo base/migración y puede requerir revisión editorial.
- Hay documentos con información histórica y nueva mezclada; conviene evitar duplicar sin depurar.
- Algunas fotos antiguas HEIC no se usan directamente; se sustituyeron por JPG/PNG o placeholder.

## 11. Análisis ya hecho

### Arquitectura
- Se validó una arquitectura de navegación más simple y orientada a tareas.
- Se consolidó la separación entre servicios propios de FEUNA y servicios externos de la UNA.
- Se priorizó el acceso a becas, formularios, participación y representación.

### Sitio actual
- El sitio original usa Joomla, template JA Rights y T4 Framework.
- La identidad visual ya estaba clara, pero la navegación era menos directa.
- Había oportunidad de mejorar accesibilidad, búsqueda, responsive y velocidad.

### Mockup
- El mockup usa HTML, CSS y JavaScript estáticos con componentes compartidos.
- El directorio DEUNA fue el punto más trabajado: filtros, fotos, fallback visual y ajuste de bordes.
- El flujo de contenido quedó más claro para una futura migración o entrega a DTIC.

## 12. Estado actual resumido

- [README.md](README.md) describe el proyecto y su estado general.
- [ARQUITECTURA-SITIO-RENOVADO.md](ARQUITECTURA-SITIO-RENOVADO.md) define la estructura propuesta del sitio.
- [CONTENIDO-SITIO.md](CONTENIDO-SITIO.md) contiene el texto visible consolidado.
- [mockup/deuna.html](mockup/deuna.html) es la página más avanzada en términos de interacción y presentación.
- El servidor local ya se puede levantar y revisar en navegador.

## 13. Próximo paso sugerido

Si hace falta, este MD se puede convertir después en una versión más formal para DTIC, con:
- tabla de rutas finales,
- inventario de capturas reales,
- y estado por página (hecha / parcial / pendiente).
