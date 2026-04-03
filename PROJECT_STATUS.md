# Estado del Proyecto FEUNA

## Resumen ejecutivo

Este documento complementa el README y deja por escrito el avance actual, los pendientes y el criterio de organizacion del repositorio.

## Avance completado

- Migracion del frontend a una estructura activa centrada en `src/`.
- Despliegue continuo configurado con Cloudflare Pages.
- Reorganizacion de material antiguo en `archive/` para mantener contexto sin contaminar la raiz.
- Normalizacion de fotos tipo pasaporte de DEUNA en:
  - `public/images/fotos-pasaporte/deuna/`

## Alcance de la fase actual

La fase actual es de consolidacion para presentacion final:

- base tecnica estable
- repositorio ordenado
- despliegue reproducible
- documentacion clara para continuar por iteraciones

## Pendientes funcionales

1. Panel/pagina de asociaciones:
- completar estructura, contenido y validacion de enlaces.

2. Navegacion inferior / footer:
- homologar comportamiento y enlaces en todas las paginas.

3. Navegacion transversal:
- revisar rutas internas, breadcrumbs y consistencia de menu.

## Pendientes de contenido

1. Placeholders visuales:
- agregar donde falte contenido para evitar espacios vacios.

2. Imagenes finales:
- reemplazar placeholders por imagenes aprobadas institucionalmente.

3. Recopilacion de informacion:
- consolidar textos oficiales, datos de organos, contactos y documentos.

4. Plantillas editoriales:
- estandarizar formato de carga de contenido por organo/seccion.

## Pendientes de calidad

1. Revisar markdown legacy archivado:
- corregir enlaces historicos rotos sin afectar el frontend activo.

2. Checklist de release:
- navegacion, responsive, accesibilidad, performance y enlaces clave.

## Criterio de organizacion del repositorio

- `src/` y `public/` contienen la implementacion activa.
- `archive/` conserva el contexto previo (prediseno, mockups y docs historicos).
- `scripts/` solo conserva utilidades activas de build/deploy.
- `.github/workflows/` solo mantiene CI/CD vigente.

## Direccion del proyecto

El producto se construye con enfoque Figma + implementacion:

- Figma como fuente de intencion visual y UX.
- Repositorio como fuente de implementacion y validacion tecnica.
- Archivo historico para mantener trazabilidad sin bloquear avance.
