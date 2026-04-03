
# FEUNA Web - Frontend Oficial

Sitio web de la Federacion de Estudiantes de la Universidad Nacional (FEUNA), implementado con React + Vite y alineado con un proceso de diseno de la mano con Figma.

## Objetivo del proyecto

Este repositorio busca dos metas en paralelo:

1. Consolidar una base web moderna, mantenible y desplegable.
2. Convertir el trabajo de prediseno y documentacion en una implementacion real por fases.

El foco no es solo "maquetar", sino traducir decisiones de arquitectura de informacion, contenido y experiencia en un producto final institucional.

## Estado actual

- Build local funcionando con `npm run build`.
- Despliegue preparado en Cloudflare Pages por GitHub Actions.
- Estructura legacy movida a `archive/` para no perder contexto historico.
- Fotos de pasaporte DEUNA migradas a una ruta profesional en `public/images/fotos-pasaporte/deuna/`.

## Estructura actual del repositorio

```text
.
├── .github/
│   └── workflows/
│       └── deploy-cloudflare-pages.yml
├── archive/
│   ├── legacy-folders/        # Mockups, prediseno y referencias historicas
│   ├── legacy-root/           # Markdown legacy movido de raiz
│   ├── legacy-scripts/        # Scripts antiguos no operativos
│   └── legacy-workflows/      # Workflows antiguos archivados
├── public/
│   ├── images/
│   │   └── fotos-pasaporte/
│   │       └── deuna/         # Fotos usadas por la pagina DEUNA
│   └── prediseño/             # Recursos publicos heredados aun disponibles
├── scripts/
│   ├── deploy-cloudflare-automation.ps1
│   └── install-and-build.ps1
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── data/
│   │   └── routes.tsx
│   ├── assets/
│   └── styles/
├── package.json
└── vite.config.ts
```

## Dónde inicia la app

- Entrada principal React: `src/main.tsx`
- Configuracion de rutas: `src/app/routes.tsx`
- Componente raiz de app: `src/app/App.tsx`

## Imágenes y assets en uso

### Assets empaquetados por Vite

- `src/assets/logo-feuna.png`
- `src/assets/banner-acerca-de-feuna.png`

### Fotos de pasaporte DEUNA (runtime)

- Carpeta activa: `public/images/fotos-pasaporte/deuna/`
- Consumidas por: `src/app/components/pages/DeunaPage.tsx`
- Base URL activa en codigo: `/images/fotos-pasaporte/deuna/`

## Scripts activos

- `scripts/install-and-build.ps1`: instalacion y build local.
- `scripts/deploy-cloudflare-automation.ps1`: crea/verifica proyecto Pages y configura secrets en GitHub.

## CI/CD y despliegue

- Workflow activo: `.github/workflows/deploy-cloudflare-pages.yml`
- Trigger: push a `main`
- Flujo:
  1. instala dependencias (`npm install`)
  2. ejecuta build (`npm run build`)
  3. despliega `dist/` a Cloudflare Pages

Variables necesarias en GitHub Secrets:

- `CF_API_TOKEN`
- `CF_ACCOUNT_ID`
- `CF_PROJECT_NAME`

## Qué se hizo en esta etapa

- Reorganizacion del repositorio para presentacion final.
- Archivo de material historico y no operativo en `archive/`.
- Correccion de workflow de deploy para entorno actual.
- Normalizacion de ruta de fotos DEUNA en carpeta dedicada.
- Preparacion del proyecto para trabajo incremental por organos.

## Pendientes funcionales y de contenido

Pendientes tecnicos/prioritarios:

- Completar panel/pagina de Asociaciones con estructura final.
- Ajustar navegacion inferior/footer para consistencia entre paginas.
- Revisar navegacion cruzada y enlaces internos en todas las vistas.

Pendientes de diseno y contenido:

- Agregar placeholders de imagen donde aun falta contenido visual.
- Sustituir placeholders por imagenes finales aprobadas.
- Recopilar informacion institucional faltante (textos, datos, contactos, documentos).
- Consolidar plantillas editoriales por seccion/organo para carga de contenido.

Pendientes de documentacion:

- Depurar links legacy y referencias antiguas en markdown archivado.
- Mantener trazabilidad de fases de implementacion vs diseno Figma.

## Relacion con Figma

El proyecto se desarrolla con una estrategia "Figma + implementacion":

- Figma define estructura visual, jerarquia y componentes.
- Este repositorio implementa y valida esas decisiones en frontend real.
- `archive/` conserva el contexto historico para no perder decisiones previas.

## Comandos de trabajo

Instalar dependencias:

```bash
npm install
```

Levantar entorno local:

```bash
npm run dev
```

Build de produccion:

```bash
npm run build
```

## Notas de gestion

- `archive/` no es basura: es respaldo historico.
- Todo lo nuevo debe implementarse sobre `src/` + `public/` actuales.
- Cualquier nuevo organo con fotos tipo pasaporte debe usar la convencion:
  - `public/images/fotos-pasaporte/<organo>/`
  