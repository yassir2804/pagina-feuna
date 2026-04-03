# FEUNA Web - Documento Tecnico Explicativo (presentacion para DTIC)

## 1. Contexto del proyecto

Este repositorio contiene el frontend oficial del sitio web de FEUNA.

La meta principal fue pasar de una etapa de mockups y material de prediseno a una implementacion web institucional:

- mantenible,
- ordenada,
- y desplegable automaticamente.

Es un proyecto interno FEUNA/DTIC. No esta planteado como iniciativa open source publica.

## 2. Que se hizo (en terminos de gestion)

Durante esta etapa se completaron cuatro frentes clave:

1. Base tecnica moderna.
2. Estandarizacion de navegacion y rutas internas.
3. Automatizacion de despliegue.
4. Orden y trazabilidad del material historico.

Resultado: hoy existe una base lista para crecer por fases (contenido, secciones y mejoras UX) sin perder gobernanza tecnica.

## 3. Stack tecnologico explicado para audiencias no tecnicas

### Frontend

- React
  - Se usa para construir la interfaz por componentes reutilizables (header, footer, paginas, secciones).
  - Beneficio para DTIC: facilita mantenimiento y escalabilidad.

- TypeScript
  - Es JavaScript con tipado.
  - Beneficio para DTIC: reduce errores comunes y mejora la calidad del codigo.

- Vite
  - Herramienta de desarrollo y compilacion.
  - Beneficio para DTIC: desarrollo rapido y build de produccion eficiente.

### Estilos y experiencia visual

- Estilos por clases utilitarias y CSS en componentes.
- Integracion con lineamientos visuales provenientes de Figma.
- Enfoque institucional: claridad, consistencia y adaptacion movil/escritorio.

### Versionado, automatizacion e infraestructura

- GitHub
  - Control de versiones, historial y trazabilidad de cambios.

- GitHub Actions
  - Pipeline de CI/CD que se ejecuta en cada push a `main`.
  - Compila y despliega automaticamente.

- Cloudflare Pages
  - Hosting del frontend en produccion.
  - Entrega rapida y estable del sitio publicado.

## 4. Arquitectura funcional actual

La aplicacion sigue una estructura clara:

```text
.
├── src/                    # Codigo activo
│   ├── app/
│   │   ├── components/     # Componentes y paginas
│   │   ├── data/           # Datos estructurados
│   │   └── routes.tsx      # Definicion de rutas
│   ├── assets/             # Recursos empaquetados
│   └── styles/             # Estilos globales
├── public/                 # Assets estaticos en runtime
├── scripts/                # Scripts internos vigentes
├── .github/workflows/      # CI/CD
└── archive/                # Material legacy preservado
```

Puntos de entrada clave:

- `src/main.tsx`: arranque de la app.
- `src/app/App.tsx`: contenedor principal.
- `src/app/routes.tsx`: mapa central de navegacion.

## 5. Estado real del proyecto

Estado validado:

- Build local estable (`npm run build`).
- Deploy automatico operativo por GitHub Actions + Cloudflare Pages.
- Rutas internas normalizadas con compatibilidad de enlaces legacy.
- Material historico movido a `archive/` para separar pasado y codigo activo.
- Convencion de assets para fotos institucionales aplicada (ejemplo: DEUNA).

## 6. Convenciones de assets (importante para continuidad)

### Assets empaquetados

- Ubicacion: `src/assets/`
- Uso: recursos que viajan dentro del build.

### Assets publicos

- Ubicacion: `public/`
- Uso: archivos estaticos servidos en runtime.

Convencion activa para fotos tipo pasaporte por organo:

- `public/images/fotos-pasaporte/<organo>/`

Ejemplo en uso:

- `public/images/fotos-pasaporte/deuna/`

## 7. Scripts vigentes y pertinencia

Se mantuvieron solo scripts utiles para el flujo actual FEUNA/DTIC.

Detalle extendido: `scripts/README.md`

Scripts activos:

1. `scripts/install-and-build.ps1`
   - Instala dependencias.
   - Ejecuta build.
   - Permite validar localmente la salida de produccion.

2. `scripts/deploy-cloudflare-automation.ps1`
   - Apoya configuracion de Cloudflare Pages.
   - Configura secrets de GitHub para despliegue.

## 8. Flujo operativo recomendado

Flujo simple y controlado para equipo pequeno:

1. Cambios en codigo.
2. Validacion local (`npm run build`).
3. Push a `main`.
4. Pipeline automatica despliega en Cloudflare Pages.
5. Verificacion final visual en sitio publicado.

## 9. CI/CD y secretos requeridos

Workflow activo:

- `.github/workflows/deploy-cloudflare-pages.yml`

Secrets requeridos en GitHub:

- `CF_API_TOKEN`
- `CF_ACCOUNT_ID`
- `CF_PROJECT_NAME`

## 10. Relacion Figma -> implementacion

El proyecto sigue una logica de trabajo en dos capas:

- Figma define arquitectura visual y experiencia.
- Este repositorio implementa la version funcional y desplegable.

La carpeta `archive/` mantiene trazabilidad de decisiones previas y facilita auditoria historica sin contaminar el codigo activo.

## 11. Pendientes priorizados

Pendientes funcionales:

- Completar secciones de contenido institucional faltante.
- Ajustes finales de navegacion y coherencia cross-page.

Pendientes de contenido:

- Sustitucion de placeholders por contenido aprobado institucionalmente.
- Carga de textos y documentos oficiales finales.

Pendientes de calidad:

- Revalidacion integral de enlaces y experiencia movil.

## 12. Comandos base

Instalar dependencias:

```bash
npm install
```

Desarrollo local:

```bash
npm run dev
```

Build de produccion:

```bash
npm run build
```

## 13. Nota de gobernanza

Este repositorio se administra como activo institucional FEUNA/DTIC.

Las decisiones de contenido, estilo y publicacion final se coordinan de forma interna entre ambas instancias.
  