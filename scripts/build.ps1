# Builds store-ready packages:
#   dist/chrome/  + dist/hush-chrome-<version>.zip   (Chrome, Edge, Brave, Opera)
#   dist/firefox/ + dist/hush-firefox-<version>.zip  (Firefox / AMO)
# Works on Windows PowerShell 5.1 and PowerShell 7 (Linux/macOS CI).
param([string]$OutDir = "dist")
$ErrorActionPreference = "Stop"

$root = Split-Path $PSScriptRoot -Parent
$dist = Join-Path $root $OutDir
$include = @("_locales", "icons", "rules", "src")
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem

$manifestText = Get-Content (Join-Path $root "manifest.json") -Raw
$version = ($manifestText | ConvertFrom-Json).version
$utf8 = New-Object System.Text.UTF8Encoding $false

if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }

foreach ($target in "chrome", "firefox") {
  $dir = Join-Path $dist $target
  New-Item -ItemType Directory -Force $dir | Out-Null
  foreach ($item in $include) { Copy-Item (Join-Path $root $item) (Join-Path $dir $item) -Recurse }

  $m = $manifestText | ConvertFrom-Json
  if ($target -eq "chrome") {
    $m.background.PSObject.Properties.Remove("scripts")
    $m.PSObject.Properties.Remove("browser_specific_settings")
  } else {
    $m.background.PSObject.Properties.Remove("service_worker")
    $m.PSObject.Properties.Remove("minimum_chrome_version")
  }
  [IO.File]::WriteAllText((Join-Path $dir "manifest.json"), ($m | ConvertTo-Json -Depth 20), $utf8)

  # Zip manually so entry names always use "/" (Compress-Archive on 5.1 uses "\", which AMO rejects).
  $zipPath = Join-Path $dist "hush-$target-$version.zip"
  $zip = [IO.Compression.ZipFile]::Open($zipPath, "Create")
  try {
    Get-ChildItem $dir -Recurse -File | ForEach-Object {
      $entry = $_.FullName.Substring($dir.Length + 1).Replace("\", "/")
      [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $entry, "Optimal") | Out-Null
    }
  } finally { $zip.Dispose() }
  Write-Host "Built $zipPath"
}
