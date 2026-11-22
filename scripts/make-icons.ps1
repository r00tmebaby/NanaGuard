# Regenerates icons/*.png (shield + check mark). Windows only (System.Drawing).
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing
$out = Join-Path (Split-Path $PSScriptRoot -Parent) "icons"
New-Item -ItemType Directory -Force $out | Out-Null

function New-Icon([int]$s, [string]$file, [string]$c1, [string]$c2) {
  $bmp = New-Object System.Drawing.Bitmap $s, $s
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = "AntiAlias"
  $g.PixelOffsetMode = "HighQuality"
  $g.Clear([System.Drawing.Color]::Transparent)
  $P = { param($x, $y) New-Object System.Drawing.PointF ([float]($x * $s)), ([float]($y * $s)) }

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddLine((& $P 0.50 0.04), (& $P 0.90 0.18))
  $path.AddLine((& $P 0.90 0.18), (& $P 0.90 0.47))
  $path.AddBezier((& $P 0.90 0.47), (& $P 0.90 0.73), (& $P 0.72 0.88), (& $P 0.50 0.97))
  $path.AddBezier((& $P 0.50 0.97), (& $P 0.28 0.88), (& $P 0.10 0.73), (& $P 0.10 0.47))
  $path.AddLine((& $P 0.10 0.47), (& $P 0.10 0.18))
  $path.CloseFigure()

  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (& $P 0 0), (& $P 1 1),
    ([System.Drawing.ColorTranslator]::FromHtml($c1)), ([System.Drawing.ColorTranslator]::FromHtml($c2))
  $g.FillPath($brush, $path)

  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::White), ([float][Math]::Max(1.6, $s * 0.1))
  $pen.StartCap = "Round"; $pen.EndCap = "Round"; $pen.LineJoin = "Round"
  $g.DrawLines($pen, [System.Drawing.PointF[]]@((& $P 0.31 0.50), (& $P 0.45 0.64), (& $P 0.70 0.37)))

  $bmp.Save((Join-Path $out $file), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}

foreach ($s in 16, 32, 48, 128) {
  New-Icon $s "icon-$s.png" "#6366f1" "#7c3aed"
  New-Icon $s "off-$s.png" "#9ca3af" "#6b7280"
}
Write-Host "Icons written to $out"
