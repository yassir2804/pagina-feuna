# Scripts del proyecto (uso interno FEUNA/DTIC)

Este directorio se mantiene intencionalmente pequeno.

## Scripts vigentes

1. install-and-build.ps1
- Objetivo: instalar dependencias, compilar y servir la carpeta dist localmente.
- Uso: ejecutar desde la raiz del repo.
- Cuando usarlo: validacion local rapida antes de publicar.

2. deploy-cloudflare-automation.ps1
- Objetivo: automatizar configuracion de Cloudflare Pages + GitHub Secrets.
- Uso: ejecutar desde la raiz del repo con token de Cloudflare.
- Cuando usarlo: configuracion inicial o ajustes de despliegue.

## Criterio de pertinencia

Se conserva solo scripts que:
- se usan en el flujo real actual,
- son mantenibles por el equipo FEUNA/DTIC,
- no duplican funciones ya archivadas.

Los scripts experimentales o legacy se mueven a archive/legacy-scripts o se eliminan si no aportan al flujo actual.
