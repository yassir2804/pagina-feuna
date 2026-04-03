# PowerShell script to fetch FEUNA 'Servicios Estudiantiles' page and extract links
# Usage: Open PowerShell in repository root and run: .\scripts\get-feuna-links.ps1

$Url = 'https://www.feuna.una.ac.cr/index.php/recursos/servicios-estudiantiles'
$OutFile = 'src/app/data/recursos-una-auto.md'

try {
    Write-Host "Fetching $Url ..."
    $resp = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 30
    $html = $resp.Content

    # Extract anchor tags href and inner text
    $pattern = '<a[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)<\/a>'
    $matches = [regex]::Matches($html, $pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

    $links = @()
    foreach ($m in $matches) {
        $href = $m.Groups[1].Value
        $text = $m.Groups[2].Value -replace '<.*?>', ''
        if ($href -and ($href -notlike '#') -and ($href -notlike 'javascript:*')) {
            $links += @{ text = $text.Trim(); url = $href.Trim() }
        }
    }

    # Deduplicate by URL
    $unique = $links | Sort-Object url -Unique

    "# Recursos extraídos de $Url" | Out-File -FilePath $OutFile -Encoding utf8
    "" | Out-File -FilePath $OutFile -Append -Encoding utf8
    foreach ($item in $unique) {
        $t = if ($item.text) { $item.text } else { $item.url }
        "- [$t]($($item.url))" | Out-File -FilePath $OutFile -Append -Encoding utf8
    }

    Write-Host "Wrote $($unique.Count) unique links to $OutFile"
} catch {
    Write-Error "Error fetching or parsing: $_"
}
