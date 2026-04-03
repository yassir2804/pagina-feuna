<#
move-and-install.ps1

Copies the current repository to a location outside OneDrive (default `C:\Repos\feuna`),
then runs the `install-and-build.ps1` helper there.

USAGE (run as Administrator):
  Open PowerShell as Administrator, cd to the repo root and run:
    .\scripts\move-and-install.ps1

This script uses `robocopy` to copy files and excludes `node_modules` and common temp folders.
Be sure to pause OneDrive sync and close editors before running.
#>

function Abort($msg){ Write-Host "ERROR: $msg" -ForegroundColor Red; exit 1 }

# Check admin
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Abort "This script must be run as Administrator. Right-click PowerShell and choose 'Run as administrator'."
}

$source = (Get-Location).Path
$defaultDest = "C:\Repos\feuna"
$dest = Read-Host "Destination folder outside OneDrive (enter for $defaultDest)"
if ([string]::IsNullOrWhiteSpace($dest)) { $dest = $defaultDest }

Write-Host "Source: $source" -ForegroundColor Cyan
Write-Host "Destination: $dest" -ForegroundColor Cyan

Write-Host "Pausing OneDrive is recommended. Attempting to stop OneDrive process (may require confirmation)..." -ForegroundColor Yellow
Stop-Process -Name OneDrive -ErrorAction SilentlyContinue

New-Item -ItemType Directory -Path $dest -Force | Out-Null

# Use robocopy to copy everything except node_modules, .git and .vs
$robocopyArgs = @($source, $dest, '/E', '/COPY:DAT', '/R:3', '/W:5', '/XD', 'node_modules', '.git', '.vs', 'dist')

Write-Host "Starting copy (this may take a few minutes)..." -ForegroundColor Cyan
$rc = & robocopy @robocopyArgs

if ($LASTEXITCODE -ge 8) {
    Write-Host "Robocopy reported an error (exit code $LASTEXITCODE). Check output above." -ForegroundColor Red
    Abort "Copy failed. Resolve any issues and try again."
}

Write-Host "Copy finished. Changing directory to $dest and running install/build helper..." -ForegroundColor Green
Set-Location $dest

if (-not (Test-Path .\scripts\install-and-build.ps1)) {
    Abort "install-and-build.ps1 not found in destination. Ensure the source repo contains scripts/install-and-build.ps1"
}

Write-Host "Running install-and-build.ps1 in destination (this may take several minutes)..." -ForegroundColor Cyan
& .\scripts\install-and-build.ps1

Write-Host "Done. If build succeeded, open http://localhost:5000 to view the site (serve was used)." -ForegroundColor Green
