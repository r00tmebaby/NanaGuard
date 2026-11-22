/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0cbcq8mu.com":[["nowoif"],["acs","Math","localStorage['\\x"]],"10hitmovies.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"123moviestoday.net":[["acs","Math","break;case $."]],"185.53.88.15":[["aeld","","break;case $."]],"18jav.tv":[["acs","WebAssembly","atob"]],"1bitspace.com":[["acs","setTimeout","Constant"],["aopr","u_cfg"],["acs","addEventListener","-0x"],["nano-stb","location.href","8000"]],"1movierulzhd.hair":[["no-xhr-if","adsbygoogle"]],"1primewire.com":[["acs","Math","break;case $."]],"2008ownersclub.co.uk":[["rmnt","script","html-load.com"]],"2adultflashgames.com":[["aopr","loadTool"]],"2kspecialist.net":[["acs","addEventListener","blocker"]],"320sycamoreblog.com":[["rmnt","script","/__adblocker|html-load/"]],"4c-forums.com":[["rmnt","script","html-load.com"]],"7thmustang.com":[["rmnt","script","html-load.com"]],"7yearolds.com":[["rmnt","script","/__adblocker|html-load/"]],"abc4.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"academiadelmotor.es":[["aopw","adBlockDetected"]],"addicted2decorating.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adhs-zentrum.de":[["nostif","/Werbeblocker|refresh\\\\/"],["set","cwAdblockDisabled","true"]],"afewshortcuts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"afreesms.com":[["nowoif"]],"agar.live":[["set","show_videoad_limited","noopFunc"]],"aii.sh":[["nowoif"],["nowebrtc"],["set","blurred","false"],["acs","Math","break;case $."]],"alecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allaboutami.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allcelebritywiki.com":[["noeval-if","/chp_?ad/"]],"altarofgaming.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"altdriver.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ambonkita.com":[["aopw","adBlockDetected"]],"amortization.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anime-jl.net":[["aopr","detector_launch"]],"anime4mega-descargas.net":[["noeval-if","/chp_?ad/"]],"animesex.me":[["acs","document.querySelectorAll","popMagic"]],"animexin.vip":[["noeval-if","/chp_?ad/"]],"aplinsinthealps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"apostoliclive.com":[["noeval-if","/chp_?ad/"]],"appellationmountain.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aquatic-eden.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aquiyahorajuegos.net":[["aopr","adBlockDetected"],["nowoif"],["no-fetch-if","googlesyndication"]],"arabahjoy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"areaconnect.com":[["rmnt","script","html-load.com"]],"areatopik.com":[["nostif","show"]],"areyouscreening.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arstechnica.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["nofab"]],"artbarblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"artfrommytable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianfuckmovies.com":[["aopr","popit"],["aeld","popstate","noPop"]],"asianhdplay.net":[["acs","parseInt","break;case $."]],"asweetpeachef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atlasandboots.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"autoguide.com":[["set","loadShield","noopFunc"]],"automatedhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ayrshire-today.co.uk":[["set","adLight","true"]],"baby-chick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakedambrosia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakotv.com":[["acs","parseInt","break;case $."]],"batcave.biz":[["acs","WebAssembly","atob"]],"bayaningfilipino.blogspot.com":[["acs","addEventListener","blocker"]],"bcsportbikes.com":[["rmnt","script","html-load.com"]],"bdsmwaytube.com":[["aopr","document.dispatchEvent"]],"beatsperminuteonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"benzforum.com":[["rmnt","script","html-load.com"]],"bettasource.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bibliotecadecorte.com":[["noeval-if","/chp_?ad/"]],"bibme.org":[["aopr","SBMGlobal.run.pcCallback"],["aeld","load","(!o)"]],"bighentai.org":[["rmnt","script","/popMagic|pop1stp/"]],"bikeportland.org":[["set","gform.utils","noopFunc"],["set","gform.utils.trigger","noopFunc"]],"biologianet.com":[["set","UOLPD","{}"],["set","UOLPD.dataLayer","{}"],["set","__configuredDFPTags","{}"]],"bitfly.io":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"]],"bitssurf.com":[["acs","document.getElementById","ads"]],"bizdustry.com":[["nostif","show"]],"blackhatworld.com":[["noeval-if","AdBlocker"],["no-xhr-if","adsbygoogle"]],"blasensex.com":[["acs","document.querySelectorAll","popMagic"]],"blifaloo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blog-peliculas.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"blogher.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"bmaxownersclub.co.uk":[["rmnt","script","html-load.com"]],"boardoftheworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bookroo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boredpanda.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"borwap.xxx":[["acs","document.querySelectorAll","popMagic"],["nowoif"],["aopr","loadTool"]],"bowfishingforum.com":[["rmnt","script","html-load.com"]],"bromsgroveadvertiser.co.uk":[["set","adLight","true"]],"bubraves.com":[["set","blockAdBlock","trueFunc"]],"budgettravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bysejikuar.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"cakesbymk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camillestyles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"caminoadventures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"caralynmirand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cararegistrasi.com":[["nano-sib","timer"],["nowoif"]],"card-codex.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cartoonporno.xxx":[["aopr","prPuShown"],["nowoif"]],"cartoonvideos247.com":[["acs","document.querySelectorAll","popMagic"]],"casutalaurei.ro":[["aopr","__eiPb"]],"cats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cdn.gledaitv.live":[["noeval-if","String.fromCharCode"]],"cdn256.xyz":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"cdrab.com":[["no-fetch-if","ads"],["aeld","load","bypass"]],"celeb.gate.cc":[["aeld","click","native code"]],"chatgbt.one":[["noeval-if","/chp_?ad/"]],"cheater.ninja":[["nano-sib","clearInterval"],["no-fetch-if","ads"]],"cheatsheet.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chefspencil.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cheneetoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chickenforum.com":[["rmnt","script","html-load.com"]],"chickensandmore.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chikianimation.org":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"chzzkban.xyz":[["no-fetch-if","pagead2.googlesyndication.com/pagead/js/adsbygoogle.js method:HEAD","emptyStr"]],"cillacrochets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinema-sketch.com":[["noeval-if","/chp_?ad/"]],"cityam.com":[["aopr","paywallWrapper"]],"civinfo.com":[["rmnt","script","html-load.com"]],"cjponyparts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"claimlite.club":[["nostif","_0x"],["noeval-if","blocker"]],"clasicotas.org":[["aopr","nombre_dominio"],["nowoif"]],"classicxmovies.com":[["acs","document.querySelectorAll","popMagic"]],"clutterkeeper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cmaxownersclub.co.uk":[["rmnt","script","html-load.com"]],"cmsdetect.com":[["nowoif","_blank"]],"codesnse.com":[["set","go_popup","{}"],["nano-sib","counter","*","0.001"]],"cointiply.arkadiumarena.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"conceptoweb-studio.com":[["set","initJWPlayerMux","{}"],["set","initJWPlayerMux.utils","{}"],["set","initJWPlayerMux.utils.now","noopFunc"]],"conservativefiringline.com":[["rmnt","script","/==undefined.*body/"]],"cookinginthekeys.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"corsa-c.co.uk":[["rmnt","script","html-load.com"]],"corsaeforums.co.uk":[["rmnt","script","html-load.com"]],"crazydl.net":[["nostif","show"]],"creativecanning.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crichdplays.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"crowdworknews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cryptoclicks.net":[["acs","fetch","adblock"]],"culinaryginger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"curbsideclassic.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cw23.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"cwarkansas.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"cwseed.com":[["aopr","admrlWpJsonP"]],"daddylivestream.com":[["rmnt","script","/adserverDomain|\\);break;case /"]],"dailycommercial.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"danaberez.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dawindycity.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"deadline.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"],["rmnt","script",").join(String.fromCharCode"]],"deco.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"desertxforum.com":[["rmnt","script","html-load.com"]],"designeatrepeat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"designorate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desijugar.net":[["acs","document.querySelectorAll","popMagic"]],"detoxinista.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"digitalcorvettes.com":[["rmnt","script","html-load.com"]],"dinheirocursosdownload.com":[["noeval-if","/chp_?ad/"]],"dirtyasiantube.com":[["noeval"],["aopr","Aloader.serve"]],"disheye.com":[["no-fetch-if","googlesyndication"],["nano-sib","count","*"],["set","blurred","false"]],"disneyfanatic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diygarden.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diyinspired.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"djpunjab2.in":[["no-fetch-if","googlesyndication"]],"djstar.in":[["noeval-if","/chp_?ad/"]],"donnaglamour.it":[["aopw","adBlockRunning"]],"dontworkanotherday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doodledoods.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doseofporn.com":[["acs","loadTool","popping"]],"downloadfilm.website":[["no-fetch-if","ads"]],"dpreview.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"draftmag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dreamdictionary.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drivemoe.com":[["aopr","showada"]],"droplink.co":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"duoplanet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dwellbymichelle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"easytravelpoints.com":[["rmnt","script","/__adblocker|html-load/"]],"eatbetterrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"eatingbyelaine.com":[["rmnt","script","/__adblocker|html-load/"]],"eatliverun.com":[["rmnt","script","/__adblocker|html-load/"]],"eclipsecrossforums.com":[["rmnt","script","html-load.com"]],"eio.io":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["aopr","adBlockDetected"],["no-fetch-if","google"],["acs","JSON.parse","break;case $."]],"elavegan.com":[["rmnt","script","/__adblocker|html-load/"]],"elearning-cpge.com":[["noeval-if","/chp_?ad/"]],"elektrobike-online.com":[["nostif",".call(null)","10"]],"elementownersclub.com":[["rmnt","script","html-load.com"]],"eletric-vehicles.com":[["rmnt","script","/__adblocker|html-load/"]],"ellibrepensador.com":[["aopr","require"]],"elpasotimes.com":[["aopr","_sp_.mms.startMsg"],["set","gnt.x.uam","undefined","runAt","interactive"]],"elperiodicodearagon.com":[["nostif","sub"]],"elperiodicomediterraneo.com":[["nostif","sub"]],"embedstream.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","JSON","break;case"],["rmnt","script","FingerprintJS"],["rmnt","script","adserverDomain"],["rmnt","script","/break;case|FingerprintJS/"],["aeld","message"],["acs","JSON.parse","atob"]],"emilyfabulous.com":[["rmnt","script","/__adblocker|html-load/"]],"eromanga-show.com":[["nostif","/[a-z]\\(!0\\)/","800"]],"escortconrecensione.com":[["acs","document.querySelectorAll","popMagic"]],"esportbike.com":[["rmnt","script","html-load.com"]],"essexcountynews.co.uk":[["set","adLight","true"]],"et-invest.de":[["noeval-if","/chp_?ad/"]],"etkjokken.com":[["rmnt","script","/__adblocker|html-load/"]],"everydaytechvams.com":[["rmnt","script","antiAdBlockerHandler"]],"everylastbite.com":[["rmnt","script","/__adblocker|html-load/"]],"expressilustrowany.pl":[["aeld","","show"]],"exrx.net":[["rmnt","script","/__adblocker|html-load/"]],"eymockup.com":[["noeval-if","/chp_?ad/"]],"fabioambrosi.it":[["nostif","ad"]],"fanfiktion.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"fap16.net":[["acs","document.querySelectorAll","popMagic"]],"fapdrop.com":[["aost","atob","eval"],["nostif","redURL"]],"faperplace.com":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"fastt.gg":[["nowoif","_blank"],["nano-sib","countdown","1000"],["nano-stb","tick","1000"]],"fchopin.net":[["noeval-if","/chp_?ad/"]],"feet9.com":[["acs","__ADX_URL_U"]],"file.magiclen.org":[["nano-stb","","","0.02"]],"filmcdn.top":[["nowoif"]],"filmi7.net":[["aost","document.getElementById","adsBlocked"]],"flagle-game.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flashingjungle.com":[["aeld","/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["aopr","document.dispatchEvent"]],"flavorfulife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flexamens.com":[["noeval-if","/chp_?ad/"]],"floralapron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodiefiasco.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodsguy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"football365.com":[["rmnt","script","/_0x|'innerHTML'/"]],"footballrumors.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forgetfulmomma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forgetsugarfriday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forum-xiaomi.com":[["nostif","show"]],"forzafire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fox23albany.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"franceprefecture.fr":[["rmnt","script","deblocker"]],"freebnbcoin.com":[["nostif","fetch"]],"freelistenonline.com":[["set","fuckAdBlock._options.baitClass","null"]],"freemagazinespdf.com":[["acs","eval","replace"]],"freep.com":[["set","adsEnabled","true"],["set","gnt.x.uam","undefined","runAt","interactive"]],"freesoftpdfdownload.blogspot.com":[["acs","decodeURI","decodeURIComponent"],["aeld","load","2000"]],"freetarotonline.com":[["noeval-if","/chp_?ad/"]],"freevipservers.net":[["nostif","length"]],"freewsad.com":[["no-fetch-if","googlesyndication"],["set-local-storage-item","email","true"]],"fritidsmarkedet.dk":[["nostif","Check"]],"frommybowl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullvoyeur.com":[["aopw","adBlockDetected"]],"funwithoutfodmaps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fynesdesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamebanana.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/admiral|adshield/"]],"games.macon.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.qns.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamewith.jp":[["rmnt","script",").join(String.fromCharCode"],["rmnt","script","html-load.com"],["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"garlicandzest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gasserhotrods.com":[["rmnt","script","html-load.com"]],"gazetteandherald.co.uk":[["set","adLight","true"]],"gazzetta.it":[["aeld","adblockActivated"]],"gbadamud.blogspot.com":[["acs","addEventListener","blocker"]],"gdl.freegogpcgames.xyz":[["nano-sib","secondsLeft"]],"gearingcommander.com":[["nostif","/innerHTML|AdBlock/"],["no-xhr-if","ads"]],"geekchamp.com":[["rmnt","script","isWindows"]],"gemstreams.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"genxfinance.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"geoguessr.com":[["rmnt","script","html-load.com"]],"getnews.jp":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"gewinde-normen.de":[["nostif","nextFunction","2000"]],"ggbases.com":[["acs","document.querySelectorAll","popMagic"]],"giadzy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"giantshemalecocks.com":[["aopr","document.dispatchEvent"]],"ginaccreates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlfuckgalleries.com":[["acs","document.querySelectorAll","popMagic"]],"givee.club":[["acs","document.addEventListener","adjsData"]],"globalssh.net":[["acs","addEventListener","nextFunction"]],"gluesticksgumdrops.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"go.discovery.com":[["json-prune","data.attributes.ssaiInfo.forecastTimeline data.attributes.ssaiInfo.vendorAttributes.nonLinearAds data.attributes.ssaiInfo.vendorAttributes.videoView data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adMetadata data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adParameters data.attributes.ssaiInfo.vendorAttributes.breaks.[].timeOffset"]],"gocurrycracker.com":[["aopr","encodeURIComponent"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goduke.com":[["no-xhr-if","/analytics|livestats/"]],"gogatv.org":[["rmnt","script","/popunder/i"]],"goldenlucycrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gomacsports.com":[["set","blockAdBlock","trueFunc"]],"gotechug.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"groundbeefrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grownandflown.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gs24.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"gsmhamza.com":[["no-xhr-if","googlesyndication"]],"handelsblatt.com":[["no-xhr-if","request=adb"]],"hative.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hattiesburgamerican.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"haveyaseenjapan.com":[["noeval-if","/chp_?ad/"]],"hdfcfund.com":[["set","smartech","noopFunc"]],"hdhub4one.pics":[["noeval-if","/chp_?ad/"]],"hdonline.co":[["acs","JSON.parse","break;case $."]],"hdpornt.com":[["aopr","ExoLoader"],["aopw","__NA"]],"healthyhelperkaila.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heartrainbowblog.com":[["noeval-if","/chp_?ad/"]],"heartsstandard.co.uk":[["set","adLight","true"]],"hellolovelystudio.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hemitruckclub.com":[["rmnt","script","html-load.com"]],"hentaibooty.com":[["acs","jQuery","popupAt"]],"hentaicomics.pro":[["set","adb","0"],["nowoif"]],"hentaihaven.red":[["acs","document.querySelectorAll","popMagic"]],"hextank.io":[["set","aipAPItag.prerollSkipped","true"],["set","aipAPItag.setPreRollStatus","trueFunc"]],"heymichigan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hindustantimes.com":[["no-fetch-if","adsbygoogle.js"],["ra","onclick","a[href][onclick^=\"getFullStory\"]"]],"hiphomeschoolmoms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hlsplayer.top":[["nowoif"]],"homebuilding.co.uk":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"honeygirlsworld.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"honkai.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hookupnovel.com":[["noeval-if","/chp_?ad/"]],"hqmaxporn.com":[["noeval"],["aopr","Aloader.serve"]],"iamhomesteader.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"icyporno.com":[["aeld","click","popMagic"]],"idevice.me":[["noeval-if","/chp_?ad/"]],"iheartorganizing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imgadult.com":[["aopr","ExoLoader"],["aopr","loadTool"],["aopw","cticodes"],["aopw","imgadbpops"],["acs","document.getElementById","document.write"],["nano-stb","redirect","4000"]],"instagram.com":[["json-prune","data.xdt_injected_story_units.ad_media_items"]],"ipa-apps.me":[["nano-sib","timer"]],"iptvapps.net":[["nostif","show"]],"iptvpulse.top":[["no-fetch-if","/googlesyndication|doubleclick|adsterra/"],["nostif",".adsbygoogle"],["nostif","/googlesyndication\\.com|offsetHeight/"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"isaidub6.net":[["acs","document.documentElement","break;case $."]],"itdmusics.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","load","onload"],["acs","eval","replace"]],"itemlevel.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iumkit.net":[["noeval-if","/chp_?ad/"]],"izzylaif.com":[["acs","jQuery","undefined"]],"jamaicajawapos.com":[["rmnt","script","adrecover.com"]],"japansex.me":[["aopr","popit"],["aeld","popstate","noPop"]],"japansporno.com":[["aopr","popit"],["aeld","popstate","noPop"]],"jav-zozo.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javdoge.com":[["acs","document.querySelectorAll","popMagic"]],"javfc2.xyz":[["acs","WebAssembly","atob"],["aeld","click","doThePop"],["nowoif"],["acs","globalThis","break;case"],["no-fetch-if","thanksgivingdelights"],["aost","document.createElement","yes.onclick"]],"javleaked.com":[["aopr","__Y"]],"javmobile.net":[["acs","document.querySelectorAll","popMagic"]],"javrip.net":[["acs","document.querySelectorAll","popMagic"]],"javroi.com":[["acs","document.querySelectorAll","popMagic"]],"javsunday.com":[["aeld","","popMagic"],["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"jessicalynnwrites.com":[["rmnt","script","/__adblocker|html-load/"]],"joannaoverly.com":[["rmnt","script","/__adblocker|html-load/"]],"jobnoid.net":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"jpgames.de":[["nostif",".call(null)","10"]],"jukeownersclub.co.uk":[["rmnt","script","html-load.com"]],"juniperandoakes.com":[["rmnt","script","/__adblocker|html-load/"]],"k-statewomenshoops.org":[["set","blockAdBlock","trueFunc"]],"kanald.com.tr":[["set","googlefc","undefined"]],"kawasakininja1000.com":[["rmnt","script","html-load.com"]],"kckingdom.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"kelaam.com":[["set","google_unique_id","6"]],"keloland.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kendam.com":[["set","canRunAds","true"]],"ketk.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"ketubanjiwa.com":[["nostif","blockUI","2000"],["noeval-if","/chp_?ad/"]],"kilburntimes.co.uk":[["set","adLight","true"]],"killingthyme.net":[["rmnt","script","/__adblocker|html-load/"]],"kindergartenworks.com":[["rmnt","script","/__adblocker|html-load/"]],"kissmaturestube.com":[["aopr","Aloader.serve"],["noeval"]],"kitchenknifeforums.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchenlaughter.com":[["rmnt","script","/__adblocker|html-load/"]],"kitsapsun.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"kizi.com":[["set","ad_blocker_active","false"]],"kmhd.net":[["aeld","","history.go"]],"knittingparadise.com":[["rmnt","script","html-load.com"]],"knotions.com":[["rmnt","script","/__adblocker|html-load/"]],"kodibeginner.com":[["noeval-if","/chp_?ad/"]],"kojo-designs.com":[["rmnt","script","/__adblocker|html-load/"]],"ktmx.pro":[["aeld","load","2000"]],"ktvb.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kumaraw.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"kuttymovies1.com":[["acs","document.documentElement","break;case $."]],"lamorgues.com":[["noeval-if","/chp_?ad/"]],"laopiniondemalaga.es":[["set","pr_okvalida","true"],["nostif","sub"]],"latinatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"laurenslatest.com":[["rmnt","script","/__adblocker|html-load/"]],"leaguetips.gg":[["rmnt","script","/__adblocker|html-load/"]],"leftbraincraftbrain.com":[["rmnt","script","/__adblocker|html-load/"]],"legendsofmodding.org":[["rmnt","script","/offsetHeight|\\.test/"]],"lemonsandlattes.com":[["rmnt","script","/__adblocker|html-load/"]],"lewdstars.com":[["acs","document.querySelectorAll","popMagic"]],"lgcnews.com":[["noeval-if","/chp_?ad/"]],"lifeinleggings.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"lifewiththecrustcutoff.com":[["rmnt","script","/__adblocker|html-load/"]],"lilyloutay.com":[["rmnt","script","/__adblocker|html-load/"]],"lincolncourier.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"lineup11.net":[["nostif","/\\{[a-z]+\\(\\)\\}/"],["nosiif",".value||"],["aeld","visibilitychange",".value&&"]],"link.paid4link.com":[["nowoif"],["aeld","click","maxclick"],["set","blurred","false"],["aeld","click","","elements","#get-link-button"]],"littlecoffeefox.com":[["rmnt","script","/__adblocker|html-load/"]],"littlehousebigalaska.com":[["rmnt","script","/__adblocker|html-load/"]],"living-magazines.co.uk":[["set","adLight","true"]],"lnk.news":[["aopr","popAdsClickCount"],["nano-sib","","","0"],["nostif","redirectPage"]],"localmemphis.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"lokerwfh.net":[["no-fetch-if","googlesyn"],["nano-stb","/.?/","*"],["nano-stb"],["nano-sib"],["no-xhr-if","adsbygoogle"],["nowoif","_blank"]],"loptelink.com":[["set","blurred","false"]],"luxe.digital":[["rmnt","script","/__adblocker|html-load/"]],"lxmanga.my":[["set","skipAdblockCheck","true"]],"lycee-maroc.com":[["noeval-if","/chp_?ad/"]],"madaboutfood.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"magazyn-kuchnia.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"maisonbrico.com":[["aopr","console.warn"]],"mamainstincts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamaknowsglutenfree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamochki.info":[["acs","document.querySelectorAll","popMagic"]],"manga4life.com":[["acs","JSON.parse","break;case $."]],"manhaircuts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manhwaus.net":[["acs","document.querySelectorAll","popMagic"]],"mantrazscan.com":[["noeval-if","/chp_?ad/"]],"manwa.me":[["rmnt","script","popMagic"]],"marie-claire.es":[["set","ads","true"]],"marvelousdogs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maths.media":[["no-fetch-if","googlesyndication"]],"maturegrannyfuck.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"maximumridesharingprofits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mediacast.click":[["nowoif"]],"mediaindonesia.com":[["rmnt","script","adrecover.com"]],"mediapason.it":[["set","jQuery.adblock","false"]],"memorialnotice.com":[["noeval-if","/chp_?ad/"]],"mercedescla.org":[["rmnt","script","html-load.com"]],"mercedesclaforum.com":[["rmnt","script","html-load.com"]],"merinfo.se":[["rmnt","script","()=>eval"]],"meuplayeronlinehd.com":[["nowoif"],["ra","style","[style*=\"z-index\"]","stay"],["aeld","load","detect"]],"mexicanfoodjournal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mg-rover.org":[["rmnt","script","html-load.com"]],"mgzrownersclub.co.uk":[["rmnt","script","html-load.com"]],"michigan-sportsman.com":[["rmnt","script","html-load.com"]],"minecraftforum.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"minecraftwild.com":[["noeval-if","/chp_?ad/"]],"mintnotion.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"misterdonghua.in":[["nowoif"]],"mod18.com":[["noeval-if","/chp_?ad/"]],"modocine.com":[["rmnt","script","offsetHeight"]],"modporntube.com":[["aopr","Aloader.serve"],["noeval"]],"modsbase.com":[["nowebrtc"],["rmnt","script","html-load.com"]],"modsella.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momlovesbest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moms.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"moneyweek.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"morencius.com":[["nowoif","_blank"]],"mostlyhomemademom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motohigh.pl":[["nostif","","1"]],"motorbikecatalog.com":[["nostif","loader.min.js"],["rmnt","script","error-report.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script",",window]"],["rmnt","script","html-load.com"]],"movearnpre.com":[["set","uas","[]"]],"movieshdwatch.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"mozielife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mtg-print.com":[["no-fetch-if","ads"]],"mundovideoshd.com":[["noeval-if","/chp_?ad/"]],"musicradar.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"mychamplainvalley.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"myfearlesskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myradkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mystateline.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"n.fcd.su":[["acs","$","push-allow-modal"]],"nammakalvi.com":[["nostif","data?"]],"naruldonghua.com":[["noeval-if","adsbygoogle"]],"nation.africa":[["aopr","evolokParams.adblock"]],"nbabox.me":[["rmnt","script","adserverDomain"]],"needgayporn.com":[["acs","document.querySelectorAll","popMagic"],["aopr","ExoLoader.serve"]],"newengland.com":[["rmnt","script","/__adblocker|html-load/"]],"newjapanesexxx.com":[["aopr","popit"],["aeld","popstate","noPop"]],"niadd.com":[["acs","document.documentElement","break;case $."]],"nibelungen-kurier.de":[["set","nlf.custom.userCapabilities","false"]],"nilesoft.org":[["aost","document.createElement","notify"]],"nissanzclub.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"nitroforumz.com":[["rmnt","script","html-load.com"]],"nkreport.jp":[["noeval-if","/chp_?ad/"]],"nola.com":[["aopr","_sp_._networkListenerData"]],"nomadsunveiled.com":[["rmnt","script","/__adblocker|html-load/"]],"norinesnest.com":[["rmnt","script","/__adblocker|html-load/"]],"nottinghamworld.com":[["rmnt","script","await eval"]],"novoglam.com":[["aopr","AaDetector"]],"null-scripts.net":[["nostif","show"]],"nulledbear.com":[["nostif","nextFunction"]],"nwzonline.de":[["nostif",".call(null)","10"]],"nxxn.live":[["nowoif"],["nostif","/createElement|addEventListener|clientHeight/"]],"nypost.com":[["aopw","_sp_"],["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/parentNode\\.removeChild|textContent=atob/"],["acs","atob","/parentNode\\.removeChild|textContent=atob/"]],"nyssaskitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"nytbee.com":[["rmnt","script","/__adblocker|html-load/"]],"oatuu.org":[["noeval-if","/chp_?ad/"]],"offbeatwed.com":[["rmnt","script","/__adblocker|html-load/"]],"ok.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"okusama-kijyo.com":[["rmnt","script","html-load.com"]],"oldhousesunder50k.com":[["rmnt","script","/__adblocker|html-load/"]],"onebeautifulhomeblog.com":[["rmnt","script","/__adblocker|html-load/"]],"onedayitinerary.com":[["rmnt","script","/__adblocker|html-load/"]],"onionstream.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"onlineathens.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"onlinexxx.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"opatil.com":[["rmnt","script","offsetParent"]],"operawire.com":[["rmnt","script","html-load.com"]],"organizeyourselfskinny.com":[["rmnt","script","/__adblocker|html-load/"]],"orovillemr.com":[["set","CnnXt.Event.fire","noopFunc"]],"osint-info.netlify.app":[["nostif","checkAdBlock"]],"osthessen-news.de":[["nostif",".call(null)"]],"otomoto.pl":[["nowoif","_blank"]],"outbackers.com":[["rmnt","script","html-load.com"]],"outsidergaming.com":[["rmnt","script","/__adblocker|html-load/"]],"overemployed.com":[["rmnt","script","/__adblocker|html-load/"]],"oyundunyasi.net":[["aopr","adsBlocked"]],"pagalworld.video":[["nowoif"]],"pahe.plus":[["acs","document.documentElement","break;case $."],["set","blurred","false"],["aopr","app_vars.force_disable_adblock"]],"passeportsante.net":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"pastatwins.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pauladeen.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"peasandcrayons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pedroinnecco.com":[["aopw","adBlockDetected"]],"pemersatu.top":[["rmnt","script",".offsetParent"]],"pestdude.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pet-happy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pilotplans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pixelio.de":[["nostif",".call(null)","10"]],"plantbasedcookingshow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"planthebestvacation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"play.playkrx18.site":[["acs","WebAssembly","atob"]],"player.euroxxx.net":[["nowoif"]],"player.pop.co.uk":[["json-prune","response.ads"]],"playerstv.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pocketbikeplanet.com":[["rmnt","script","html-load.com"]],"polska-ie.com":[["aeld","load","isBlanketFound"]],"ponselharian.com":[["nowoif"]],"popjav.in":[["acs","WebAssembly","atob"]],"pornahegao.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"pornflip.com":[["aopr","open"],["set","pop_target","null"]],"porngem.com":[["set","console.clear","noopFunc"]],"pornhat.asia":[["aopr","popit"],["aeld","popstate","noPop"]],"pornktubes.net":[["nostif","myTestAd"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","eval","replace"]],"pornoklinge.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"pornproxy.art":[["nowoif"],["aopr","LieDetector"]],"pornsai.com":[["acs","document.querySelectorAll","popMagic"]],"pornxday.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornzone.com":[["acs","document.querySelectorAll","popMagic"]],"powerpyx.com":[["rmnt","script","html-load.com"]],"preciouscore.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pregnantchicken.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"premeditatedleftovers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prepear.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"presentation-ppt.com":[["aeld","load","nextFunction"]],"preservationtalk.com":[["rmnt","script","html-load.com"]],"prime4you.de":[["nostif","ad_blocker_detector"]],"problogbooster.com":[["aopw","hidekeep"]],"programmingeeksclub.com":[["aeld","DOMContentLoaded","googlesyndication"],["no-fetch-if","googlesyndication"]],"puzzlepagecheats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pythonforbeginners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"quelleestladifference.fr":[["aeld","load","onload"]],"quizack.com":[["no-fetch-if","googlesyndication"],["nano-stb","isScrexed","5000"]],"r9riders.com":[["rmnt","script","html-load.com"]],"radio-hrvatska.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-maroc.org":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radios-guatemala.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radios-venezuela.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"raidersbeat.com":[["rmnt","script","/__adblocker|html-load/"]],"ram-rho.com":[["rmnt","script","/__adblocker|html-load/"]],"rangeofsounds.com":[["rmnt","script","/__adblocker|html-load/"]],"rangerraptorowners.com":[["rmnt","script","html-load.com"]],"rbscripts.net":[["noeval-if","/chp_?ad/"]],"recipeboy.com":[["rmnt","script","/__adblocker|html-load/"]],"recon-forum.com":[["rmnt","script","html-load.com"]],"redcarpet-fashionawards.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"redhdtube.xxx":[["aopr","popns"]],"redheadcandecorate.com":[["rmnt","script","/__adblocker|html-load/"]],"redherringanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"redlineutvforums.net":[["rmnt","script","html-load.com"]],"reggiotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"registerguard.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"resizer.myct.jp":[["rmnt","#text","/スポンサーリンク|Sponsored Link|广告/"]],"restaurantmenuprice.com":[["rmnt","script","/__adblocker|html-load/"]],"restegourmet.de":[["nano-sib","invoke","1000"]],"retropotluck.com":[["rmnt","script","/__adblocker|html-load/"]],"ridvanmau.com":[["aopw","adBlockDetected"]],"rivianforums.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"rnbastreams.com":[["rmnt","script","adserverDomain"]],"rockcrawler.com":[["rmnt","script","/__adblocker|html-load/"]],"roystream.com":[["acs","JSON.parse","atob"],["nowoif"]],"rssing.com":[["rmnt","script",";}}};break;case $."]],"rtbookreviews.com":[["rmnt","script","/__adblocker|html-load/"]],"rubyskitchenrecipes.uk":[["noeval-if","/chp_?ad/"]],"salu-salo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sandiegouniontribune.com":[["aopr","googlefc"]],"sat1.de":[["nostif",".call(null)","10"]],"savego.org":[["no-fetch-if","ads"],["aeld","load","bypass"]],"savorytooth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seazon.fr":[["no-fetch-if","url:ipapi.co"]],"seeklogo.com":[["nowoif","shutterstock.com"]],"seoschmiede.at":[["rmnt","script","/pirate/i"]],"serial4.com":[["rmnt","script","antiAdBlockerHandler"]],"sevenst.us":[["aopr","adsBlocked"],["aopr","b2a"]],"sexywomeninlingerie.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"shanty-2-chic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shemalepower.xyz":[["nowoif"]],"shinesheets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"short.pe":[["acs","atob","tabunder"],["acs","RegExp","POSTBACK_PIXEL"],["aopr","AaDetector"],["aopr","console.clear"],["aeld","mousedown","preventDefault"],["nowebrtc"],["nowoif"],["nostif","0x"]],"shoutoutsocal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siamblockchain.com":[["rmnt","script","var Data"]],"siennachat.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"simplyjillicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simulatormods.com":[["acs","eval","replace"]],"sinsitio.site":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sissytube.net":[["acs","document.querySelectorAll","popMagic"]],"skoolielivin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartbikegames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartwebsolutions.org":[["acs","$",".show"]],"snapinstadownload.xyz":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"soapmakingforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"souexatasmais.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sourdoughjesha.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"south-park-tv.biz":[["noeval-if","/chp_?ad/"]],"southhousedesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spanishmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spfutures.org":[["acs","jQuery","No"]],"spiritualhack.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spokesman.com":[["aopr","Connext"]],"sport.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"sportstohfa.online":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"spotidownloader.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"sssinstagram.com":[["nowoif"]],"stayglam.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ster-blog.xyz":[["noeval-if","/chp_?ad/"]],"stockpilingmoms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"strcloud.club":[["rmnt","script","wpadmngr.com"]],"stream.crichd.vip":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamed.su":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streamlivetv.site":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streamscheme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"streamservicehd.click":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"stronakuchni.pl":[["rmnt","script","admiral","excludes",",\\\""]],"subtitleporn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sugarandcharm.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superhonda.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"supramkv.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"syracuse.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","adblockerDisabled","excludes",",\\\""]],"tasteofthesouthmagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tattooglee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techilife.com":[["acs","jQuery","adblocker"]],"technews.tw":[["acs","jQuery","adblock"]],"techzed.info":[["nowoif"]],"tecmint.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tehnotone.com":[["noeval-if","/chp_?ad/"]],"teslanorth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tespedia.com":[["noeval-if","/chp_?ad/"]],"the-daily-record.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"the-digital-picture.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"the-take.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theandroidpro.com":[["aopr","adBlockDetected"]],"thebalancednutritionist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebassbarn.com":[["rmnt","script","html-load.com"]],"thebestcakerecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecaffeinatedsnail.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecambridgeconsultant.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecombineforum.com":[["rmnt","script","html-load.com"]],"thecraftathomefamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecrazycraftlady.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedroidguy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefeatherednester.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefieryvegetarian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegatheredhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehappierhomemaker.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehealthy.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"thehoya.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theinspiredtreehouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theliveinkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenightwithoutthedawn.blogspot.com":[["nostif","_0x"]],"theparentsflewthenest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thephotoforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepointsinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesavvyexplorers.com":[["set","loadShield","noopFunc"]],"theshabbytree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theskeletalsystem.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thespeckledpalate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestate.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"thesweetsimplethings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thevetdesk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewave.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theweeklyad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisdelicioushouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"throwsmallstone.com":[["noeval-if","/chp_?ad/"]],"tide-forecast.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"timesnownews.com":[["nostif","Adblock"]],"timesofisrael.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"timothyplivingston.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"top-ten-travel-list.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toxicwap.us":[["aost","Math","https"],["aopr","mm"]],"tradingview.com":[["no-fetch-if","doubleclick"],["set-local-storage-item","forcefeaturetoggle.enable_ad_block_detect","false"]],"trannyteca.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"travellerselixir.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trxking.xyz":[["set","blurred","false"]],"tsubasa.im":[["nostif","location.href","10000"]],"turkishseriestv.net":[["noeval-if","/chp_?ad/"]],"turksub24.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tvtoday.de":[["nosiif","fireEvent","500"],["set","window.__gv_org_tfa","undefined"],["nostif",".call(null)","10"]],"txstatebobcats.com":[["set","blockAdBlock","trueFunc"]],"ukathletics.com":[["set","blockAdBlock","trueFunc"]],"ukdevilz.com":[["nano-stb","download","1100"],["acs","document.querySelectorAll","popMagic"]],"ultraten.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"unicum.de":[["nostif",".call(null)","10"]],"unlockxh4.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"updown.link":[["nano-stb","startDownload","8000"],["nostif","offsetHeight"]],"uprwssp.org":[["noeval-if","/chp_?ad/"]],"ur.ly":[["nano-sib"]],"ustimz.com":[["noeval-if","/chp_?ad/"]],"uwakitaiken.com":[["rmnt","script","html-load.com"]],"vanityfair.com":[["nofab"]],"vexfile.com":[["acs","String.fromCharCode","/btoa|break/"]],"vgamerz.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"vichitrainfo.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"vid-guard.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["nostif","afterOpen"],["nowoif"],["set","PlayerConfig.config.CustomAdSetting","[]"]],"vidohd.com":[["aopr","__Y"]],"viduyy.com":[["no-fetch-if","method:/head/i"],["nowoif","_blank"]],"viidshar.com":[["acs","document.documentElement","break;case $."]],"viki.com":[["set","VikiPlayer.prototype.pingAbFactor","noopFunc"],["set","player.options.disableAds","true"]],"viperalley.com":[["rmnt","script","html-load.com"]],"vipergirls.to":[["aopr","loadTool"],["nowoif"]],"viptube.com":[["nowoif"]],"viralharami.com":[["rmnt","script","destroyContent"],["nostif","window.open"]],"vstdrive.in":[["aopr","Base64"]],"vtcafe.com":[["rmnt","script","html-load.com"]],"w3layouts.com":[["nostif","show"]],"wandersomewhere.com":[["rmnt","script","/__adblocker|html-load/"]],"wane.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"watchasians.cc":[["acs","addEventListener","HTMLAllCollection"],["aeld","click","popunder"],["set","console.clear","noopFunc"]],"watchmoviesrulz.com":[["nowoif"]],"wbir.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wearablyweird.com":[["rmnt","script","/__adblocker|html-load/"]],"webseriessex.com":[["nostif","myTestAd"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","eval","replace"]],"wegotcookies.co":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"welovetrump.com":[["rmnt","script","/==undefined.*body/"]],"wendaful.com":[["rmnt","script","/__adblocker|html-load/"]],"whippeditup.com":[["rmnt","script","/__adblocker|html-load/"]],"whipperberry.com":[["rmnt","script","/__adblocker|html-load/"]],"wholenotism.com":[["noeval-if","/chp_?ad/"]],"whowantstuffs.blogspot.com":[["acs","addEventListener","google_ad_client"]],"wildhentaitube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"windingroadcrochet.com":[["rmnt","script","/__adblocker|html-load/"]],"windsorexpress.co.uk":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"winit.heatworld.com":[["aopw","showModal"]],"wizhdsports.fi":[["nowebrtc"]],"wlz-online.de":[["nostif",".call(null)","10"]],"wordtrip.net":[["rmnt","script","/__adblocker|html-load/"]],"workweeklunch.com":[["rmnt","script","/__adblocker|html-load/"]],"workxvacation.jp":[["noeval-if","/chp_?ad/"]],"worldbirds.com":[["rmnt","script","/__adblocker|html-load/"]],"worldboxingnews.com":[["rmnt","script","/__adblocker|html-load/"]],"worldhistory.org":[["nostif","error-report.com"],["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="],["set","AHE.is_member","1"],["rmnt","script","/__adblocker|html-load/"]],"worldjournal.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","void 0||window,"],["rmnt","script","html-load.com"]],"worldofblenders.com":[["rmnt","script","/__adblocker|html-load/"]],"worldofcardgames.com":[["rmnt","script","/__adblocker|html-load/"]],"wowtv.de":[["set","window.__CONFIGURATION__.adInsertion.enabled","false"],["set","window.__CONFIGURATION__.features.enableAdBlockerDetection","false"]],"wsav.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wtaj.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xdabo.com":[["rmnt","script","document.body.onclick"]],"xhbig.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmovie.pro":[["aopr","popit"],["aeld","popstate","noPop"]],"xpicu.store":[["aopr","popns"]],"xvide.me":[["aopr","popit"],["aeld","popstate","noPop"]],"yamsoti.com":[["noeval-if","/chp_?ad/"]],"yogabasics.com":[["rmnt","script","/__adblocker|html-load/"]],"yogabytheday.com":[["rmnt","script","/__adblocker|html-load/"]],"yottachess.com":[["no-xhr-if","googlesyndication"]],"youpouch.com":[["set-attr",".lazy","src","[data-sco-src]"]],"yourhomemadetube.com":[["aopr","Aloader.serve"]],"yourlocalguardian.co.uk":[["set","adLight","true"]],"yout.pw":[["nowoif"]],"ypi.com":[["rmnt","script","/__adblocker|html-load/"]],"yt1s.com":[["acs","JSON.parse","break;case $."]],"yupflix.org":[["acs","globalThis","break;case"],["rmnt","script","/bait|com\\.android\\.chrome/"]],"yusepjaelani.blogspot.com":[["nostif","Debug"]],"yutura.net":[["rmnt","script","html-load.com"]],"zcar.com":[["rmnt","script","html-load.com"]],"zdxowners.com":[["rmnt","script","html-load.com"]],"zerocoin.top":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"zonecoverage.com":[["rmnt","script","/__adblocker|html-load/"]],"zx6r.com":[["rmnt","script","html-load.com"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
  if (!DATA) return;

  /* ---------- pick calls for this host ---------- */
  const host = location.hostname.replace(/^www\./, "");
  const parts = host.split(".");
  const chain = [host];
  for (let i = 1; i < parts.length - 1; i++) chain.push(parts.slice(i).join("."));
  const off = new Set();
  for (const d of chain) for (const o of DATA.off[d] || []) off.add(o);
  if (off.has("*")) return;
  const calls = [];
  const seen = new Set();
  for (const d of chain) {
    for (const c of DATA.calls[d] || []) {
      const k = JSON.stringify(c);
      if (!seen.has(k) && !off.has(k)) { seen.add(k); calls.push(c); }
    }
  }
  if (!calls.length) return;

  /* ---------- helpers ---------- */
  const MAGIC = "blk" + Math.random().toString(36).slice(2, 9);
  const noop = () => {};
  const toRegex = (s, flags = "") => {
    if (s === undefined || s === null || s === "" || s === "*") return /^/;
    const m = /^\/(.+)\/([gimsuy]*)$/.exec(s);
    if (m) { try { return new RegExp(m[1], m[2] || flags); } catch { return /^\b$/; } }
    return new RegExp(String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags);
  };
  /** needle with optional leading "!" negation → (text) => boolean */
  const matcher = (needle) => {
    if (!needle) return () => true;
    const neg = needle.startsWith("!");
    const re = toRegex(neg ? needle.slice(1) : needle);
    return (text) => re.test(String(text)) !== neg;
  };
  const fnText = (fn) => { try { return typeof fn === "function" ? Function.prototype.toString.call(fn) : String(fn); } catch { return ""; } };

  const natives = new WeakMap();
  const nativeToString = Function.prototype.toString;
  const toStringProxy = function toString() { return nativeToString.call(natives.get(this) || this); };
  natives.set(toStringProxy, nativeToString);
  try { Object.defineProperty(Function.prototype, "toString", { value: toStringProxy, writable: true, configurable: true }); } catch { /* ignore */ }
  const wrap = (obj, key, factory) => {
    if (!obj || typeof obj[key] !== "function") return;
    const orig = obj[key];
    const fn = factory(orig);
    natives.set(fn, orig);
    try { Object.defineProperty(obj, key, { value: fn, writable: true, configurable: true }); } catch { obj[key] = fn; }
  };

  // Swallow errors thrown by abort-* scriptlets so the page console stays clean.
  window.addEventListener("error", (e) => {
    if (String(e.message).includes(MAGIC)) e.preventDefault();
  }, true);

  const parseValue = (raw) => {
    const map = {
      undefined: undefined, false: false, true: true, null: null,
      noopFunc: () => {}, trueFunc: () => true, falseFunc: () => false,
      throwFunc: () => { throw new Error(MAGIC); },
      emptyObj: {}, emptyArr: [], emptyStr: "", "''": "", '""': "", "[]": [], "{}": {},
      yes: "yes", no: "no", "-1": -1, NaN: NaN, Infinity: Infinity,
    };
    if (raw in map) return { ok: true, v: map[raw] };
    if (/^-?\d+(\.\d+)?$/.test(raw) && Math.abs(Number(raw)) <= 0x7fff) return { ok: true, v: Number(raw) };
    if (raw === "noopCallbackFunc") return { ok: true, v: () => noop };
    return { ok: false };
  };

  /** Installs `handler` on the last property of a dotted chain, even before the chain exists. */
  function trapChain(chain, handler, owner = window) {
    const dot = chain.indexOf(".");
    if (dot === -1) { handler(owner, chain); return; }
    const prop = chain.slice(0, dot);
    const rest = chain.slice(dot + 1);
    let v = owner[prop];
    if (v !== undefined && v !== null && (typeof v === "object" || typeof v === "function")) {
      trapChain(rest, handler, v);
      return;
    }
    const d = Object.getOwnPropertyDescriptor(owner, prop);
    if (d && !d.configurable) return;
    try {
      Object.defineProperty(owner, prop, {
        configurable: true,
        get: () => v,
        set: (a) => {
          v = a;
          if (a !== null && (typeof a === "object" || typeof a === "function")) trapChain(rest, handler, a);
        },
      });
    } catch { /* ignore */ }
  }
  const defineSafe = (owner, prop, desc) => {
    const d = Object.getOwnPropertyDescriptor(owner, prop);
    if (d && !d.configurable) return;
    try { Object.defineProperty(owner, prop, { configurable: true, ...desc }); } catch { /* ignore */ }
  };
  const whenReady = (fn) => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn, { once: true });
    else fn();
  };
  const observe = (fn) => {
    fn();
    let t = 0;
    const mo = new MutationObserver(() => { if (!t) t = setTimeout(() => { t = 0; fn(); }, 50); });
    const start = () => mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
    if (document.documentElement) start(); else whenReady(start);
  };

  /* JSON pruning: paths like "a.b", "a.[].c", "[].x" */
  function prunePath(obj, segs) {
    if (!obj || typeof obj !== "object") return false;
    const [head, ...rest] = segs;
    if (head === "[]" || head === "*") {
      let hit = false;
      for (const k of Object.keys(obj)) hit = (rest.length ? prunePath(obj[k], rest) : (delete obj[k], true)) || hit;
      return hit;
    }
    if (!(head in obj)) return false;
    if (!rest.length) { delete obj[head]; return true; }
    return prunePath(obj[head], rest);
  }
  function hasPath(obj, segs) {
    if (!obj || typeof obj !== "object") return false;
    const [head, ...rest] = segs;
    if (head === "[]" || head === "*") return Object.keys(obj).some((k) => (rest.length ? hasPath(obj[k], rest) : true));
    if (!(head in obj)) return false;
    return rest.length ? hasPath(obj[head], rest) : true;
  }
  const splitPath = (p) => p.replace(/\.\[\]/g, ".[]").split(".").filter(Boolean);
  function pruner(rawPrune, rawNeedles) {
    const prune = String(rawPrune || "").split(/\s+/).filter(Boolean).map(splitPath);
    const needles = String(rawNeedles || "").split(/\s+/).filter(Boolean).map(splitPath);
    return (obj) => {
      if (!prune.length || !obj || typeof obj !== "object") return obj;
      if (needles.length && !needles.every((n) => hasPath(obj, n))) return obj;
      for (const p of prune) prunePath(obj, p);
      return obj;
    };
  }

  /* ---------- scriptlets ---------- */
  const S = {
    set(chain, raw) {
      if (!chain) return;
      const p = parseValue(raw);
      if (!p.ok) return;
      trapChain(chain, (owner, prop) => defineSafe(owner, prop, { get: () => p.v, set: noop }));
    },
    aopr(chain) {
      if (!chain) return;
      trapChain(chain, (owner, prop) => defineSafe(owner, prop, {
        get() { throw new ReferenceError(MAGIC); }, set: noop,
      }));
    },
    aopw(chain) {
      if (!chain) return;
      trapChain(chain, (owner, prop) => {
        let v = owner[prop];
        defineSafe(owner, prop, { get: () => v, set() { throw new ReferenceError(MAGIC); } });
      });
    },
    acs(chain, needle, context) {
      if (!chain) return;
      const test = matcher(needle);
      const ctx = context ? toRegex(context) : null;
      trapChain(chain, (owner, prop) => {
        let v = owner[prop];
        const check = () => {
          const s = document.currentScript;
          if (!s) return;
          const text = s.src ? s.src + "\n" + s.textContent : s.textContent;
          if (ctx && !ctx.test(text)) return;
          if (test(text)) throw new ReferenceError(MAGIC);
        };
        defineSafe(owner, prop, { get() { check(); return v; }, set(a) { check(); v = a; } });
      });
    },
    aost(chain, needle) {
      if (!chain) return;
      const test = matcher(needle);
      trapChain(chain, (owner, prop) => {
        let v = owner[prop];
        const check = () => { if (test(new Error().stack || "")) throw new ReferenceError(MAGIC); };
        defineSafe(owner, prop, { get() { check(); return v; }, set(a) { check(); v = a; } });
      });
    },
    aeld(type, needle) {
      const typeRe = matcher(type);
      const test = matcher(needle);
      wrap(EventTarget.prototype, "addEventListener", (orig) => function addEventListener(t, fn) {
        if (typeRe(t) && test(fnText(fn && fn.handleEvent ? fn.handleEvent : fn))) return undefined;
        return orig.apply(this, arguments);
      });
    },
    nostif(needle, delay) { timerDefuser("setTimeout", needle, delay); },
    nosiif(needle, delay) { timerDefuser("setInterval", needle, delay); },
    "nano-stb"(needle, delay, boost) { timerBooster("setTimeout", needle, delay, boost); },
    "nano-sib"(needle, delay, boost) { timerBooster("setInterval", needle, delay, boost); },
    nowoif(needle) {
      const test = matcher(needle);
      wrap(window, "open", (orig) => function open(url) {
        if (!test(url || "")) return orig.apply(this, arguments);
        const fake = { closed: false, close() { this.closed = true; }, focus: noop, blur: noop, postMessage: noop,
          document: { write: noop, writeln: noop, close: noop, open: noop }, location: { href: String(url || "") } };
        return fake;
      });
    },
    "no-fetch-if"(props, response) {
      const tests = propTests(props);
      wrap(window, "fetch", (orig) => function fetch(input, init) {
        const details = {
          url: typeof input === "string" ? input : (input && input.url) || String(input),
          method: (init && init.method) || (input && input.method) || "GET",
          body: init && typeof init.body === "string" ? init.body : "",
        };
        if (!tests(details)) return orig.apply(this, arguments);
        const body = response === "emptyArr" ? "[]" : response === "emptyObj" ? "{}" : "";
        return Promise.resolve(new Response(body, { status: 200, statusText: "OK" }));
      });
    },
    "no-xhr-if"(props) {
      const tests = propTests(props);
      const XHR = XMLHttpRequest.prototype;
      const blocked = new WeakSet();
      wrap(XHR, "open", (orig) => function open(method, url) {
        if (tests({ url: String(url), method: String(method) })) blocked.add(this); else blocked.delete(this);
        return orig.apply(this, arguments);
      });
      wrap(XHR, "send", (orig) => function send() {
        if (!blocked.has(this)) return orig.apply(this, arguments);
        const xhr = this;
        for (const [k, v] of [["readyState", 4], ["status", 200], ["statusText", "OK"], ["response", ""], ["responseText", ""]]) {
          defineSafe(xhr, k, { value: v });
        }
        setTimeout(() => {
          for (const t of ["readystatechange", "load", "loadend"]) xhr.dispatchEvent(new Event(t));
        }, 1);
        return undefined;
      });
    },
    "json-prune"(rawPrune, rawNeedles) {
      const prune = pruner(rawPrune, rawNeedles);
      wrap(JSON, "parse", (orig) => function parse() { return prune(orig.apply(this, arguments)); });
      wrap(Response.prototype, "json", (orig) => function json() { return orig.apply(this, arguments).then(prune); });
    },
    ra(attrs, selector) {
      const list = String(attrs || "").split(/\s*\|\s*/).filter(Boolean);
      if (!list.length) return;
      const sel = selector || list.map((a) => `[${CSS.escape(a)}]`).join(",");
      observe(() => {
        try { for (const el of document.querySelectorAll(sel)) for (const a of list) el.removeAttribute(a); } catch { /* bad selector */ }
      });
    },
    rc(classes, selector) {
      const list = String(classes || "").split(/\s*\|\s*/).filter(Boolean);
      if (!list.length) return;
      const sel = selector || list.map((c) => "." + CSS.escape(c)).join(",");
      observe(() => {
        try { for (const el of document.querySelectorAll(sel)) el.classList.remove(...list); } catch { /* bad selector */ }
      });
    },
    "set-attr"(selector, attr, value = "") {
      if (!selector || !attr || /^on/i.test(attr)) return;
      if (!/^(?:\d+|true|false|)$/.test(value) && !/^\[.+\]$/.test(value)) return;
      observe(() => {
        try {
          for (const el of document.querySelectorAll(selector)) {
            const v = /^\[.+\]$/.test(value) ? el.getAttribute(value.slice(1, -1)) || "" : value;
            if (el.getAttribute(attr) !== v) el.setAttribute(attr, v);
          }
        } catch { /* ignore */ }
      });
    },
    rmnt(nodeName, needle) {
      if (!nodeName) return;
      const name = nodeName.toUpperCase();
      const test = matcher(needle);
      const check = (n) => {
        if (n.nodeName === name && test(n.textContent || "")) n.remove();
      };
      const mo = new MutationObserver((muts) => {
        for (const m of muts) for (const n of m.addedNodes) check(n);
      });
      const start = () => mo.observe(document.documentElement, { childList: true, subtree: true });
      if (document.documentElement) start(); else whenReady(start);
      whenReady(() => {
        const it = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ALL);
        for (let n = it.nextNode(); n; n = it.nextNode()) check(n);
      });
    },
    "set-local-storage-item"(key, value) { setStorage(localStorage, key, value); },
    "set-session-storage-item"(key, value) { setStorage(sessionStorage, key, value); },
    "set-cookie"(name, value, path = "/") {
      const allowed = /^(?:true|false|yes|no|y|n|on|off|ok|accept|accepted|reject|rejected|allow|allowed|deny|denied|necessary|required|hide|hidden|dismiss|dismissed|essential|nonessential|-?\d{1,5}|)$/i;
      if (!name || !allowed.test(value)) return;
      const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      if (!document.cookie.split(/;\s*/).includes(cookie)) {
        document.cookie = `${cookie}; path=${path === "none" ? "/" : path}; max-age=31536000`;
      }
    },
    "remove-cookie"(needle) {
      const test = matcher(needle);
      const remove = () => {
        for (const c of document.cookie.split(";")) {
          const name = c.split("=")[0].trim();
          if (!name || !test(name)) continue;
          for (const domain of ["", location.hostname, "." + location.hostname.split(".").slice(-2).join(".")]) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? "; domain=" + domain : ""}`;
          }
        }
      };
      remove();
      window.addEventListener("beforeunload", remove);
      document.addEventListener("visibilitychange", remove);
    },
    noeval() { wrap(window, "eval", () => function () { return undefined; }); },
    "noeval-if"(needle) {
      const test = matcher(needle);
      wrap(window, "eval", (orig) => function (code) { return test(code) ? undefined : orig.apply(this, arguments); });
    },
    nowebrtc() {
      for (const k of ["RTCPeerConnection", "webkitRTCPeerConnection"]) {
        if (!window[k]) continue;
        const Fake = function () {
          return { close: noop, createDataChannel: () => ({}), createOffer: () => Promise.resolve({}),
            setLocalDescription: () => Promise.resolve(), addEventListener: noop, removeEventListener: noop };
        };
        natives.set(Fake, window[k]);
        window[k] = Fake;
      }
    },
    nofab() {
      const Fab = function () {};
      Fab.prototype = { check: noop, clearEvent: noop, emitEvent: noop, on() { return this; }, onDetected() { return this; },
        onNotDetected(fn) { if (typeof fn === "function") fn(); return this; }, setOption: noop };
      for (const k of ["FuckAdBlock", "BlockAdBlock", "SniffAdBlock"]) defineSafe(window, k, { value: Fab });
      for (const k of ["fuckAdBlock", "blockAdBlock", "sniffAdBlock"]) defineSafe(window, k, { value: new Fab() });
    },
    "popads-dummy"() {
      for (const k of ["PopAds", "popns"]) defineSafe(window, k, { get() { throw new ReferenceError(MAGIC); }, set: noop });
    },
    "href-sanitizer"(selector, source = "text") {
      if (!selector) return;
      const valid = (u) => { try { const x = new URL(u, location.href); return /^https?:$/.test(x.protocol) ? x.href : ""; } catch { return ""; } };
      observe(() => {
        try {
          for (const a of document.querySelectorAll(selector)) {
            let target = "";
            if (source === "text") target = valid(a.textContent.trim());
            else if (/^\[.+\]$/.test(source)) target = valid(a.getAttribute(source.slice(1, -1)) || "");
            else if (source.startsWith("?")) {
              try { target = valid(new URL(a.href).searchParams.get(source.slice(1)) || ""); } catch { /* ignore */ }
            }
            if (target && a.href !== target) a.href = target;
          }
        } catch { /* ignore */ }
      });
    },
  };

  function timerDefuser(kind, needle, delay) {
    const test = matcher(needle);
    let delayTest = () => true;
    if (delay) {
      const neg = delay.startsWith("!");
      const n = Number(neg ? delay.slice(1) : delay);
      if (!Number.isNaN(n)) delayTest = (d) => (Number(d) === n) !== neg;
    }
    wrap(window, kind, (orig) => function (fn, d) {
      if (test(fnText(fn)) && delayTest(d)) return orig.call(this, noop, d);
      return orig.apply(this, arguments);
    });
  }
  function timerBooster(kind, needle, delay = "1000", boost = "0.05") {
    const test = matcher(needle);
    const target = delay === "*" ? null : Number(delay);
    let factor = Number(boost);
    if (!(factor >= 0.001 && factor <= 50)) factor = 0.05;
    wrap(window, kind, (orig) => function (fn, d) {
      if ((target === null || Number(d) === target) && test(fnText(fn))) {
        const args = Array.from(arguments);
        args[1] = Number(d) * factor;
        return orig.apply(this, args);
      }
      return orig.apply(this, arguments);
    });
  }
  function propTests(props) {
    const s = String(props || "").trim();
    if (!s || s === "*") return () => true;
    const pairs = [];
    for (const token of s.split(/\s+/)) {
      const m = /^(url|method|body|mode|headers|credentials|cache|redirect|referrer|integrity):(.*)$/.exec(token);
      if (m) pairs.push([m[1], matcher(m[2])]);
      else pairs.push(["url", matcher(token)]);
    }
    return (details) => pairs.every(([k, t]) => t(details[k] === undefined ? "" : details[k]));
  }
  function setStorage(store, key, value) {
    if (!key) return;
    try {
      if (value === "$remove$") { store.removeItem(key); return; }
      const allowed = { undefined: "undefined", false: "false", true: "true", null: "null", emptyArr: "[]", emptyObj: "{}", "": "",
        yes: "yes", no: "no", on: "on", off: "off", accept: "accept", accepted: "accepted", reject: "reject", rejected: "rejected" };
      let v;
      if (value in allowed) v = allowed[value];
      else if (/^-?\d{1,5}$/.test(value)) v = value;
      else return;
      store.setItem(key, v);
    } catch { /* storage blocked */ }
  }

  for (const [name, ...args] of calls) {
    const fn = S[name];
    if (fn) { try { fn(...args); } catch { /* one broken call must not stop the rest */ } }
  }
})();
