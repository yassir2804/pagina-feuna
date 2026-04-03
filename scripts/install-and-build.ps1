<#
install-and-build.ps1

Helper script to install dependencies, build the project and serve `dist` locally.
Run from repository root in PowerShell:
  ./scripts/install-and-build.ps1

#>
Write-Host "Installing dependencies (npm ci)..." -ForegroundColor Cyan
npm ci

if ($LASTEXITCODE -ne 0) {
    Write-Host "npm ci failed (exit code $LASTEXITCODE). Trying 'npm install' as fallback..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "'npm install' also failed (exit code $LASTEXITCODE). Possible reasons: file locks, permissions, antivirus or OneDrive sync.
Please close editors (VSCode), pause OneDrive sync, ensure no Node processes are running and run this script again as Administrator." -ForegroundColor Red
        exit $LASTEXITCODE
    }
}

Write-Host "Building project (npm run build)..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed (exit code $LASTEXITCODE). Check output above for errors." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "Build succeeded. Serving 'dist' at http://localhost:5000 (requires 'serve' package)" -ForegroundColor Green
if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
    Write-Host "npx not found; open the 'dist' folder manually or install 'serve' globally: npm i -g serve" -ForegroundColor Yellow
    exit 0
}

npx serve dist --listen 5000
