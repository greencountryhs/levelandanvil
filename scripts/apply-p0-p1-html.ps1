# Apply P0/P1 HTML updates with UTF-8 (no BOM) to preserve existing copy.
$ErrorActionPreference = 'Stop'
$root = 'C:\Level&AnvilWebsite\levelandanvil'
Set-Location $root
$utf8 = New-Object System.Text.UTF8Encoding $false

$fontAndIconBlock = @"
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16.png">
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
"@

# ASCII-safe descriptions (no em dashes) to avoid encoding issues in tooling
$metaDescriptions = @{
  'about.html' = 'Meet Level & Anvil in Tulsa - owner-led repair and remodel help with clear scope, practical stewardship, and licensed general contracting.'
  'services.html' = 'Browse Level & Anvil services in Tulsa: repairs, remodels, drywall, structural and water issues, maintenance plans, and renovation consultation.'
  'repairs.html' = 'Tulsa home repair for doors, drywall, trim, punch-list work, and hard-to-solve issues. Call or text Level & Anvil for a practical next step.'
  'remodels.html' = 'Focused kitchen, bath, and layout remodel updates in Tulsa from Level & Anvil - clear scope, quality finishes, and practical planning.'
  'schedule.html' = 'Contact Level & Anvil in Tulsa to call, text, or send project details and photos for repair and remodel help.'
  'reviews.html' = 'Read homeowner reviews of Level & Anvil repair and remodel work across Tulsa and Northeast Oklahoma.'
  'service-area.html' = 'Level & Anvil serves Tulsa and nearby Northeast Oklahoma communities with residential repairs, remodels, and practical project help.'
  'maintenance.html' = 'A home maintenance plan from Level & Anvil for Tulsa homeowners who want recurring repairs and punch-list help between larger projects.'
}

$imgMap = @{
  '/images/home-renovation-open-living-area-tulsa-ok.webp' = @{ Stem='home-renovation-open-living-area-tulsa-ok'; Def=1600; W=1600; H=1200 }
  '/images/carpentry-work-miter-saw-cutting-wood.webp' = @{ Stem='carpentry-work-miter-saw-cutting-wood'; Def=1600; W=1200; H=1600 }
  '/images/open-concept-home-remodel-tulsa-ok.webp' = @{ Stem='open-concept-home-remodel-tulsa-ok'; Def=1600; W=1600; H=900 }
  '/images/cedar-privacy-fence-installation-tulsa-ok.webp' = @{ Stem='cedar-privacy-fence-installation-tulsa-ok'; Def=1200; W=1200; H=900 }
  '/images/brick-fireplace-gas-valve-repair-before-tulsa.webp' = @{ Stem='brick-fireplace-gas-valve-repair-before-tulsa'; Def=1200; W=900; H=1200 }
  '/images/brick-fireplace-repair-gas-valve-replaced-tulsa.webp' = @{ Stem='brick-fireplace-repair-gas-valve-replaced-tulsa'; Def=1200; W=816; H=1118 }
  '/images/ceiling-water-damage-collapse-before-tulsa.webp' = @{ Stem='ceiling-water-damage-collapse-before-tulsa'; Def=1200; W=1200; H=900 }
  '/images/ceiling-repair-drywall-texture-finished-tulsa.webp' = @{ Stem='ceiling-repair-drywall-texture-finished-tulsa'; Def=1200; W=1200; H=900 }
  '/images/yurt-floor-installation-custom-wood-tulsa.webp' = @{ Stem='yurt-floor-installation-custom-wood-tulsa'; Def=1200; W=1200; H=900 }
  '/images/TFS-NonProfit-Jon-cookin-with-kids-over-campfire.webp' = @{ Stem='tfs-nonprofit-jon-cookin-with-kids-over-campfire'; Def=1200; W=900; H=1200 }
  '/images/family-owned-handyman-business-tulsa.webp' = @{ Stem='family-owned-handyman-business-tulsa'; Def=1200; W=676; H=1200 }
  '/images/custom-fireplace-feature-wall-jenks-ok.webp' = @{ Stem='custom-fireplace-feature-wall-jenks-ok'; Def=1200; W=900; H=1200 }
  '/images/custom-tv-feature-wall-modern-design-jenks-ok.webp' = @{ Stem='custom-tv-feature-wall-modern-design-jenks-ok'; Def=1200; W=900; H=1200 }
  '/images/custom-wood-frame-construction-geometric-design.webp' = @{ Stem='custom-wood-frame-construction-geometric-design'; Def=1200; W=983; H=1200 }
  '/images/custom-woodworking-shop-project-tulsa.webp' = @{ Stem='custom-woodworking-shop-project-tulsa'; Def=1200; W=960; H=720 }
  '/images/home-renovation-before-living-room-tulsa.webp' = @{ Stem='home-renovation-before-living-room-tulsa'; Def=1200; W=1200; H=900 }
  '/images/open-concept-remodel-before-wall-removal-tulsa.webp' = @{ Stem='open-concept-remodel-before-wall-removal-tulsa'; Def=1200; W=1200; H=900 }
  '/images/projects/Visiting-Angels-French-Drain/French-drain-After-repair-cherry-street-concrete-cutting.webp' = @{ Stem='french-drain-after-repair-cherry-street-concrete-cutting'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/AKitchen20220316_202339_result.webp' = @{ Stem='akitchen20220316_202339_result'; Def=1200; W=900; H=1200 }
  '/images/projects/tulsa-full-home-remodel/AKitchen20220316_202356_result.webp' = @{ Stem='akitchen20220316_202356_result'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/AKitchen20220316_202153_result.webp' = @{ Stem='akitchen20220316_202153_result'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/akitchen-remodel-white-cabinets-island-tulsa.webp' = @{ Stem='akitchen-remodel-white-cabinets-island-tulsa'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/bkitchen-remodel-before-tulsa-1.webp' = @{ Stem='bkitchen-remodel-before-tulsa-1'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/bopen-concept-remodel-before-wall-removal-tulsa.webp' = @{ Stem='bopen-concept-remodel-before-wall-removal-tulsa'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/ahome-renovation-open-living-area-tulsa-ok.webp' = @{ Stem='ahome-renovation-open-living-area-tulsa-ok'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/ABath20220319_111822_result.webp' = @{ Stem='abath20220319_111822_result'; Def=1200; W=900; H=1200 }
  '/images/projects/tulsa-full-home-remodel/ABath1_c1732261-4519-484a-86b1-356a95fc3715.webp' = @{ Stem='abath1_c1732261-4519-484a-86b1-356a95fc3715'; Def=1200; W=1200; H=900 }
  '/images/projects/tulsa-full-home-remodel/AHall20220319_111809_result.webp' = @{ Stem='ahall20220319_111809_result'; Def=1200; W=900; H=1200 }
  '/images/projects/tulsa-full-home-remodel/AShower20220319_111650_result.webp' = @{ Stem='ashower20220319_111650_result'; Def=1200; W=900; H=1200 }
  '/images/projects/tulsa-full-home-remodel/AShower20220319_111712_result.webp' = @{ Stem='ashower20220319_111712_result'; Def=1200; W=900; H=1200 }
  '/images/projects/tulsa-full-home-remodel/pShowerIMG_20211129_124118169_result.webp' = @{ Stem='pshowerimg_20211129_124118169_result'; Def=1200; W=900; H=1200 }
}

function Get-OgBlock([string]$title, [string]$description, [string]$canonical) {
  $safeTitle = $title.Replace('"', '&quot;')
  $safeDesc = $description.Replace('"', '&quot;')
  return @"
    <meta property="og:type" content="website">
    <meta property="og:title" content="$safeTitle">
    <meta property="og:description" content="$safeDesc">
    <meta property="og:url" content="$canonical">
    <meta property="og:image" content="https://levelandanvil.com/images/og-default.webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="$safeTitle">
    <meta name="twitter:description" content="$safeDesc">
    <meta name="twitter:image" content="https://levelandanvil.com/images/og-default.webp">
"@
}

function Update-ImgTag([string]$html) {
  $pattern = '<img\b([^>]*?)>'
  return [regex]::Replace($html, $pattern, {
    param($m)
    $attrs = $m.Groups[1].Value
    if ($attrs -notmatch 'src="([^"]+)"') { return $m.Value }
    $src = $Matches[1]
    $srcKey = [uri]::UnescapeDataString($src)
    if (-not $imgMap.ContainsKey($src) -and -not $imgMap.ContainsKey($srcKey)) { return $m.Value }
    $info = if ($imgMap.ContainsKey($src)) { $imgMap[$src] } else { $imgMap[$srcKey] }
    $stem = $info.Stem
    $def = $info.Def
    $w800 = "/images/responsive/$stem-800.webp"
    $wDef = "/images/responsive/$stem-$def.webp"
    $disk800 = Join-Path $root ($w800.TrimStart('/') -replace '/', '\')
    if (-not (Test-Path -LiteralPath $disk800)) { return $m.Value }

    $attrs2 = $attrs
    $attrs2 = [regex]::Replace($attrs2, '\s+width="[^"]*"', '')
    $attrs2 = [regex]::Replace($attrs2, '\s+height="[^"]*"', '')
    $attrs2 = [regex]::Replace($attrs2, '\s+srcset="[^"]*"', '')
    $attrs2 = [regex]::Replace($attrs2, '\s+sizes="[^"]*"', '')
    $attrs2 = [regex]::Replace($attrs2, 'src="[^"]*"', "src=`"$src`" srcset=`"$w800 800w, $wDef $($def)w`" sizes=`"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px`"")
    $attrs2 = $attrs2.Trim() + " width=`"$($info.W)`" height=`"$($info.H)`""
    return "<img $attrs2>"
  })
}

$htmlFiles = Get-ChildItem -Path $root -Filter '*.html' -Recurse | Where-Object { $_.FullName -notmatch '\\originals\\' }

foreach ($file in $htmlFiles) {
  $rel = $file.FullName.Substring($root.Length + 1)
  $c = [IO.File]::ReadAllText($file.FullName, $utf8)
  # Strip BOM if present in string
  if ($c.Length -gt 0 -and [int][char]$c[0] -eq 0xFEFF) { $c = $c.Substring(1) }
  $orig = $c

  if ($c -notmatch 'fonts\.googleapis\.com/css2') {
    $c = [regex]::Replace($c, '(<link rel="stylesheet" href="(?:\.\./)?styles\.css">)', ($fontAndIconBlock + "`r`n    `$1"))
  }

  $name = $file.Name
  if ($metaDescriptions.ContainsKey($name)) {
    $desc = $metaDescriptions[$name]
    if ($c -match 'name="description"') {
      $c = [regex]::Replace($c, '<meta\s+name="description"\s+content="[^"]*"\s*/?>', "<meta name=`"description`" content=`"$desc`">")
      $c = [regex]::Replace($c, '(?s)<meta\s+name="description"\s+content="[^"]*">', "<meta name=`"description`" content=`"$desc`">")
    } else {
      $c = [regex]::Replace($c, '(<title>[^<]*</title>)', "`$1`r`n    <meta name=`"description`" content=`"$desc`">")
    }
  }

  $title = if ($c -match '<title>([^<]*)</title>') { $Matches[1].Trim() } else { 'Level & Anvil Solutions | Tulsa' }
  $description = if ($c -match 'name="description"\s+content="([^"]*)"') { $Matches[1] } else { 'Level & Anvil provides practical repair, remodel, and project help for Tulsa-area homeowners.' }
  $canonical = if ($c -match 'rel="canonical"\s+href="([^"]*)"') { $Matches[1] } else { 'https://levelandanvil.com/' }

  $c = [regex]::Replace($c, '(?m)^\s*<meta\s+property="og:[^"]+"\s+content="[^"]*"\s*/?>\s*\r?\n', '')
  $c = [regex]::Replace($c, '(?m)^\s*<meta\s+name="twitter:[^"]+"\s+content="[^"]*"\s*/?>\s*\r?\n', '')
  $ogBlock = Get-OgBlock $title $description $canonical
  if ($c -match 'rel="canonical"') {
    $c = [regex]::Replace($c, '(<link rel="canonical" href="[^"]*"\s*/?>)', ("`$1`r`n" + $ogBlock))
  }

  $c = [regex]::Replace($c, 'href="(/[^"]+?)\.html(#[^"]*)?"', {
    param($m)
    $path = $m.Groups[1].Value
    $hash = $m.Groups[2].Value
    if ($path -eq '/index') { return ('href="/' + $hash + '"') }
    return ('href="' + $path + $hash + '"')
  })

  $c = Update-ImgTag $c

  $c = $c.Replace('<script src="/js/layout.js"></script>', '<script src="/js/layout.js" defer></script>')
  $c = $c.Replace('<script src="js/layout.js"></script>', '<script src="js/layout.js" defer></script>')
  $c = $c.Replace('<script src="../js/layout.js"></script>', '<script src="../js/layout.js" defer></script>')

  $c = $c.Replace('"image": "https://levelandanvil.com/images/logo.png"', '"image": "https://levelandanvil.com/images/logo-header.webp"')

  if ($c -ne $orig) {
    [IO.File]::WriteAllText($file.FullName, $c, $utf8)
    Write-Output ("UPDATED " + $rel)
  } else {
    Write-Output ("unchanged " + $rel)
  }
}

Write-Output 'HTML pass complete.'
