<#
setup-deploy.ps1

Helper script to create a GitHub repo from the current folder, push the code,
add required repository secrets and optionally create a Cloudflare Pages project.

Requirements (run locally):
- Git installed and repository initialized (this script will use current folder).
- GitHub CLI (`gh`) installed and authenticated (`gh auth login`).
- curl available (comes with Windows 10+ / PowerShell).

Run as: Open PowerShell in the repo root and run: `.	ools\setup-deploy.ps1` or `.\	ools\setup-deploy.ps1`
#>

function Abort($msg){ Write-Host "ERROR: $msg" -ForegroundColor Red; exit 1 }

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI 'gh' not found. Install it and run 'gh auth login' first." -ForegroundColor Yellow
    Exit 1
}

Push-Location (Get-Location)

$cwd = Split-Path -Leaf (Get-Location)
Write-Host "Current folder: $cwd"

$repoDefault = Read-Host "Nombre del repositorio a crear en GitHub (enter = $cwd)"
if ([string]::IsNullOrWhiteSpace($repoDefault)) { $repoDefault = $cwd }

$visibility = Read-Host "Visibilidad del repo (public/private) [public]"
if ([string]::IsNullOrWhiteSpace($visibility)) { $visibility = 'public' }

Write-Host "Creating GitHub repo '$repoDefault' (visibility: $visibility) ..."

try {
    gh repo create $repoDefault --$visibility --source=. --remote=origin --push --confirm
} catch {
    Abort "Failed to create or push to GitHub repo. Ensure you are authenticated with 'gh' and have permission. $_"
}

Write-Host "Repository created and pushed. Now adding repository secrets..."

$cfToken = Read-Host -AsSecureString "Introduce tu Cloudflare API token (se guardará en GitHub Secrets)"
$cfTokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($cfToken))

$cfAccountId = Read-Host "Introduce tu Cloudflare Account ID"
$cfProjectName = Read-Host "Introduce el nombre del proyecto Cloudflare Pages (ej: feuna-demo)"

Write-Host "Adding secrets to GitHub repo..."
gh secret set CF_API_TOKEN --body $cfTokenPlain
gh secret set CF_ACCOUNT_ID --body $cfAccountId
gh secret set CF_PROJECT_NAME --body $cfProjectName

Write-Host "Secrets added. You can verify in GitHub > Settings > Secrets & variables > Actions."

$createPages = Read-Host "Deseas intentar crear el proyecto Cloudflare Pages automáticamente? (Y/N) [N]"
if ($createPages -and $createPages.ToUpper().StartsWith('Y')) {
    if ([string]::IsNullOrWhiteSpace($cfAccountId) -or [string]::IsNullOrWhiteSpace($cfProjectName)) {
        Abort "CF_ACCOUNT_ID y CF_PROJECT_NAME son requeridos para crear el proyecto Pages."
    }

    $body = @{
        name = $cfProjectName
        source = @{
            type = 'git'
            config = @{
                content_dir = 'dist'
                production_branch = 'main'
                repository = @{ name = $repoDefault; provider = 'github' }
            }
        }
    } | ConvertTo-Json -Depth 10

    Write-Host "Creando proyecto Pages en Cloudflare (account: $cfAccountId, project: $cfProjectName) ..."
    $resp = curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/$cfAccountId/pages/projects" `
        -H "Authorization: Bearer $cfTokenPlain" `
        -H "Content-Type: application/json" `
        -d $body

    Write-Host "Cloudflare response:"
    Write-Host $resp
    Write-Host "Si la creación fue exitosa, el workflow de GitHub Actions activado en 'main' desplegará automáticamente el sitio." -ForegroundColor Green
} else {
    Write-Host "Skip automatic Pages creation. Para completar:
 1) Crea un proyecto en Cloudflare Pages con el nombre '$cfProjectName' y conecta el repositorio en GitHub.
 2) Asegúrate de que los secrets `CF_API_TOKEN`, `CF_ACCOUNT_ID`, `CF_PROJECT_NAME` existan en GitHub.
 3) Haz push a `main` para activar el workflow.` -ForegroundColor Yellow
}

Pop-Location

Write-Host "Listo. Revisa GitHub Actions en el repo para ver el despliegue." -ForegroundColor Green
