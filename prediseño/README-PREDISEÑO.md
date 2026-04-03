# Prediseño FEUNA - Paquete de Respaldo

Esta carpeta concentra todo el trabajo previo al frontend oficial en Figma, para no perder contexto, decisiones ni materiales de referencia.

## Estructura

- `prediseño/documentacion/`
  - Documentos estratégicos y de arquitectura.
  - Incluye resumen ejecutivo, propuesta, sitemap, contenido consolidado e inventario.

- `prediseño/prompts-y-recursos/`
  - Prompts de trabajo para Copilot/Claude/Figma AI.
  - Manifiesto de recursos estandarizados (tokens, rutas, assets).
  - Atlas de código para lectura por IA.

- `prediseño/contexto-sitio/`
  - Código y referencias originales usados durante el prediseño.
  - Incluye:
    - `mockup/`
    - `feuna-website/`
    - `sitio-actual/`
    - `wireframes/`

## Objetivo

Tener una base completa de contexto antes de construir el frontend oficial, evitando descartar:
- decisiones de UX/IA
- estructura y navegación
- textos y contenido
- rutas de imágenes y assets
- componentes y patrones visuales

## Uso recomendado antes de pasar a frontend oficial

1. Revisar `prediseño/prompts-y-recursos/PROMPT-FIGMA-AI-FEUNA-CLAUDE-OPUS.md`.
2. Validar tokens y rutas en `prediseño/prompts-y-recursos/FEUNA-FIGMA-AI-RESOURCE-MANIFEST.yaml`.
3. Consultar `prediseño/documentacion/INVENTARIO-CONTENIDO-Y-ESTADO-FEUNA.md`.
4. Usar `prediseño/contexto-sitio/mockup/` como referencia visual y estructural.

## Nota

Se hizo copia (no movimiento). El proyecto original en raíz permanece intacto.
