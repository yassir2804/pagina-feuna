param(
    [string]$CloudflareAccountId = "3763646f4b1cdc83dc4e52d6c0372c64",
    [string]$CloudflareProject = "pagina-feuna",
    [string]$GitHubRepo = "yassir2804/pagina-feuna",
    [string]$CloudflareToken,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"

function Abort($Message) {
    Write-Host "ERROR: $Message" -ForegroundColor Red
    exit 1
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    $ghWindowsPath = "C:\Program Files\GitHub CLI\gh.exe"
    if (Test-Path $ghWindowsPath) {
        Set-Alias gh $ghWindowsPath -Scope Script
    } else {
        Abort "GitHub CLI (gh) no esta instalado. Instala gh y ejecuta 'gh auth login'."
    }
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Abort "Git no esta instalado o no esta en PATH."
}

if ([string]::IsNullOrWhiteSpace($CloudflareToken)) {
    $CloudflareToken = $env:CLOUDFLARE_API_TOKEN
}

if ([string]::IsNullOrWhiteSpace($CloudflareToken)) {
    $tokenSecure = Read-Host -AsSecureString "Introduce tu Cloudflare API token"
    $CloudflareToken = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($tokenSecure)
    )
}

if ([string]::IsNullOrWhiteSpace($CloudflareToken)) {
    Abort "No se recibio Cloudflare API token."
}

if ($CloudflareToken.StartsWith("cfat_")) {
    Write-Host "Token recibido correctamente."
} else {
    Write-Host "Advertencia: el token no tiene el prefijo esperado de Cloudflare. Verifica que sea valido." -ForegroundColor Yellow
}

Write-Host "Repositorio: $GitHubRepo"
Write-Host "Proyecto Pages: $CloudflareProject"
Write-Host "Account ID: $CloudflareAccountId"

if ($DryRun) {
    Write-Host "[DryRun] Validacion completada. No se realizaron cambios." -ForegroundColor Yellow
    Write-Host "Comandos que se ejecutarian:" -ForegroundColor Yellow
    Write-Host "- Crear/verificar proyecto Cloudflare Pages"
    Write-Host "- gh secret set CF_API_TOKEN"
    Write-Host "- gh secret set CF_ACCOUNT_ID"
    Write-Host "- gh secret set CF_PROJECT_NAME"
    exit 0
}

Write-Host "Creando/verificando proyecto en Cloudflare Pages..."
$headers = @{ Authorization = "Bearer $CloudflareToken"; "Content-Type" = "application/json" }
$projectCheckUrl = "https://api.cloudflare.com/client/v4/accounts/$CloudflareAccountId/pages/projects/$CloudflareProject"
$exists = $false

try {
    $projectResp = Invoke-RestMethod -Uri $projectCheckUrl -Headers $headers -Method Get
    if ($projectResp.success) {
        $exists = $true
    }
} catch {
    $exists = $false
}

if (-not $exists) {
    $body = @{ name = $CloudflareProject; production_branch = "main" } | ConvertTo-Json
    try {
        $createResp = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/accounts/$CloudflareAccountId/pages/projects" -Headers $headers -Method Post -Body $body
        if (-not $createResp.success) {
            Abort "Cloudflare no pudo crear el proyecto."
        }
        Write-Host "Proyecto Cloudflare creado."
    } catch {
        Abort "Error creando proyecto Cloudflare Pages: $($_.Exception.Message)"
    }
} else {
    Write-Host "Proyecto Cloudflare ya existe."
}

Write-Host "Configurando secrets en GitHub..."
gh secret set CF_API_TOKEN --body $CloudflareToken -R $GitHubRepo
gh secret set CF_ACCOUNT_ID --body $CloudflareAccountId -R $GitHubRepo
gh secret set CF_PROJECT_NAME --body $CloudflareProject -R $GitHubRepo

Write-Host "Listo. Ahora haz push a main para disparar el deploy en GitHub Actions." -ForegroundColor Green
Write-Host "Link estable esperado: https://$CloudflareProject.pages.dev" -ForegroundColor Green
