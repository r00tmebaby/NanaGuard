/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"01234movies.co.uk":[["acs","Math","break;case $."]],"123-movies.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"123anime.com":[["aopr","glxopen"],["acs","setTimeout","popi"],["nowoif"]],"123moviefree.net":[["aeld","","break;case $."]],"123movierulz.nl":[["nowoif"]],"123moviesgo.co.uk":[["acs","Math","break;case $."]],"123moviesla.com.br":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"12news.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"1337x.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","adserverDomain"],["nowebrtc"],["nostif","location.href"]],"1kmovies.es":[["acs","JSON.parse","break;case $."],["aeld","","break;case $."]],"1kmovies.org":[["acs","JSON.parse","break;case $."],["aeld","","break;case $."]],"1plus1plus1equals1.net":[["rmnt","script","/__adblocker|html-load/"],["aopr","Date.prototype.toUTCString"]],"1stkissmanga.com.br":[["acs","Math","break;case $."]],"2024tv.ru":[["rmnt","script","break;case"]],"23jumpmanstreet.com":[["rmnt","script","/__adblocker|html-load/"]],"2kmovie.com.br":[["acs","document.documentElement","break;case $."]],"2madrasdub.org":[["aeld","","break;case $."]],"2sistersmixitup.com":[["rmnt","script","/__adblocker|html-load/"]],"2xkofire.com":[["rmnt","script","/__adblocker|html-load/"]],"33sk.nl":[["acs","Math","zfgloaded"]],"3addedminutes.com":[["rmnt","script","await eval"]],"3kmovies.co.uk":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"3kmovies.org":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"4stream.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["nowoif"]],"5letterwords.org":[["rmnt","script","/__adblocker|html-load/"]],"5xmovies.net":[["acs","parseInt","break;case $."]],"8xmovies.nl":[["nowoif"]],"9hentai.it":[["aeld","click","saveLastEvent"]],"9xmovie.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["nowoif"]],"9xmovie.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["nowoif"]],"9xmovies.net":[["rmnt","script",";}}};break;case $."],["nowoif"]],"aboderie.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adblockstrtape.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"adsrt.pl":[["nowoif"],["acs","atob","decodeURIComponent"],["aopw","Fingerprint2"],["aopr","rmVideoPlay"],["set","blurred","false"]],"adyou.nl":[["aeld","/^(?:click|mousedown)$/","bypassEventsInProxies"]],"afamuche.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"agrillforallseasons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airfryerlove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aitohuman.org":[["noeval-if","/chp_?ad/"]],"akmcloud.ru":[["acs","JSON.parse","break;case $."]],"androidheadlines.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"angelfire.com":[["acs","document.write","lycos_ad"]],"animeflv.ru":[["acs","jQuery","pp12"],["acs","EventTarget.prototype.addEventListener","delete window"]],"animetak.com.br":[["acs","JSON.parse","break;case $."]],"aniwatch.it":[["acs","document.documentElement","break;case $."]],"anoboy.de":[["acs","addEventListener","google_ad_client"]],"anodee.com":[["noeval-if","/chp_?ad/"]],"anomize.xyz":[["nano-sib"],["nosiif","visibility","1000"]],"aofsoru.com":[["acs","addEventListener","displayMessage"]],"ap7am.com":[["rmnt","script","adrecover.com"]],"apetogentleman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asmroger.org":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"astrology-seek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"astrostyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atomixhq.co.uk":[["aopw","adcashMacros"],["nowoif","!/download\\/|link/"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"autoscout24.com.br":[["nostif","/Detect|adblock|style\\.display|\\.call\\(null\\)/"]],"ayuka.link":[["noeval-if","/chp_?ad/"]],"babeporn.co.uk":[["aopr","decodeURI"]],"bcvc.de":[["aopr","open"]],"bdmusic28.com.br":[["acs","document.documentElement","break;case $."]],"beerintheevening.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bettacarefishguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bhoomtv.fr":[["rmnt","script","/adblock/i"]],"bitsmagic.fun":[["rmnt","script","htmls"]],"bluemedialink.it":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bluemediastorage.com.br":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bluemediaurls.org":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bolly2tolly.es":[["acs","document.documentElement","break;case $."]],"bollymovies.com":[["acs","JSON.parse","break;case $."]],"boysfood.com":[["aopw","encodeURIComponent"]],"braveryandbelonging.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brmovies.pl":[["aeld","","break;case $."]],"btvsports.pl":[["aeld","load","nextFunction"]],"buxtonadvertiser.co.uk":[["rmnt","script","await eval"]],"cambabe.ru":[["acs","onload"],["acs","crakPopInParams"]],"cambstimes.co.uk":[["set","adLight","true"]],"camwhorez.tv":[["set","flashvars.adv_pre_src",""],["set","flashvars.adv_pre_url",""],["set","flashvars.adv_pre_vast",""],["set","flashvars.protect_block",""]],"cancer-horoscopes.com":[["nostif","displayMessage","2000"]],"cap3.it":[["nowoif","popup="],["aeld","click","setTimeout"],["aeld","click","()}","elements",".art-control-fullscreen"]],"captionpost.com":[["noeval-if","/chp_?ad/"]],"carryflix.icu":[["noeval-if","/chp_?ad/"],["aopr","b2a"]],"casualgeographical.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cdrab.com":[["no-fetch-if","ads"],["aeld","load","bypass"]],"cesenatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"cg-gamespc.net":[["rmnt","script",":visible"],["nostif","checkAdblockUser"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"chamberofcommerce.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chatropolis.com":[["acs","document.querySelectorAll","popMagic"]],"chd4.com":[["aopw","checkAdBlocker"]],"cheatsheet.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chevyequinoxforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ciberdvd.fr":[["nowoif"],["aopw","smrtSB"]],"cima-club.net":[["aopr","zfgstorage"]],"cinemakottaga.it":[["no-xhr-if","googlesyndication"],["aeld","DOMContentLoaded","adsBlocked"],["acs","document.addEventListener","adsbygoogle"],["nano-sib","timePassed"]],"cinemalibero.nl":[["nowoif"],["aopr","AaDetector"]],"coconutsandkettlebells.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"code9media.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"colliersnews.com":[["noeval-if","/chp_?ad/"]],"coloradofans.com":[["rmnt","script","html-load.com"]],"comicsvalley.com":[["acs","document.querySelectorAll","popMagic"]],"conscioushacker.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"contextures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithcarlee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cool-etv.net":[["acs","document.documentElement","break;case $."]],"crazyvidup.com":[["ra","srcdoc","iframe"]],"crichdplays.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"crockpotsandflipflops.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crohasit.it":[["aopw","Fingerprint2"]],"cryptowidgets.net":[["noeval-if","/chp_?ad/"]],"cubshq.com":[["acs","document.getElementById","JSON"]],"cumshotlist.com":[["aopr","ExoLoader.serve"]],"curlygirlkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutdl.xyz":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"daddylive.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["rmnt","script","/adserverDomain|\\);break;case /"],["aopr","AaDetector"],["aopr","require"],["nowebrtc"],["aopw","afStorage"],["nowoif"]],"dafideff.com":[["acs","addEventListener","google_ad_client"]],"danishealthyeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"danny-cph.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"danseisama.com":[["rmnt","script","html-load.com"]],"dareda.net":[["rmnt","script","html-load.com"]],"darkwanderer.net":[["nostif","show"]],"databasegdriveplayer.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"databasegdriveplayer.nl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"denbighshirefreepress.co.uk":[["set","adLight","true"]],"derstandard.de":[["remove-cookie","zonck"],["set-local-storage-item","zonck","$remove$"],["nostif","event","3000"]],"descarga-animex.it":[["aopw","adBlockDetected"]],"descargaseriestv.com":[["noeval-if","/chp_?ad/"]],"descargasok.net":[["acs","document.addEventListener","google_ad_client"]],"desifuckonline.com":[["aopr","popit"],["aeld","popstate","noPop"]],"designthusiasm.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desiupload.com.br":[["acs","getCookie"],["aeld","","history.go"],["aeld","","/_0x|localStorage\\.getItem/"]],"desivideos.net":[["aopr","document.dispatchEvent"]],"dflinks.it":[["acs","JSON.parse","break;case $."]],"direct-cloud.co.uk":[["acs","document.documentElement","break;case $."]],"direct-dl.com.br":[["nowoif"]],"dirtbikerider.com":[["rmnt","script","await eval"]],"dirtyindianporn.it":[["aopr","exoJsPop101"]],"discover-sharm.com":[["no-fetch-if","adsbygoogle"]],"divinelifestyle.com":[["aopr","__eiPb"]],"dodz.de":[["nowoif"]],"domainregistrationtips.info":[["noeval-if","/chp_?ad/"]],"doods.pro":[["acs","document.documentElement","break;case $."]],"doujindesu.it":[["aeld","load","2000"],["rmnt","script","WebAssembly"],["acs","String.fromCharCode","window[_0x"],["acs","document.querySelectorAll","popMagic"]],"dramafren.org":[["acs","eval","replace"],["no-xhr-if","adsbygoogle"],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"dramamate.com":[["nowebrtc"]],"dreamcheeky.com":[["nano-sib","counter","*"]],"drtuber.com":[["nowoif"]],"duboku.info":[["acs","addEventListener","HTMLAllCollection"]],"duplex-full.lol":[["nowoif"]],"dutchycorp.co.uk":[["acs","eval","replace"],["nano-sib","time.html","1000"],["set","blurred","false"],["rmnt","script","/adblock.php"]],"dvdplay.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["set","D4zz","noopFunc"]],"easysky.in":[["set","blurred","false"]],"eatathomecooks.com":[["rmnt","script","/__adblocker|html-load/"]],"eatliverun.com":[["rmnt","script","/__adblocker|html-load/"]],"ebookmed.de":[["aeld","load","2000"]],"egydead.fr":[["acs","Promise","JSON.parse"]],"eksporimpor.com":[["aopw","adBlockDetected"]],"elitetorrent.ru":[["aopw","adcashMacros"]],"embed.scdn.to":[["aeld","","break;case $."]],"embedplayer.nl":[["acs","document.documentElement","break;case $."]],"empire-stream.com.br":[["set","empire.pop","undefined"],["set","empire.direct","undefined"],["set","empire.directHideAds","undefined"],["set","document.hidden","true"],["nano-stb","(!1)","*"],["no-xhr-if","pagead2.googlesyndication.com"]],"emsnow.com":[["acs","document.getElementById","fakeElement"]],"engineeryourfinances.com":[["rmnt","script","/__adblocker|html-load/"]],"enjoy4k.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"epe.es":[["nostif","sub"]],"eslfast.com":[["nostif","warning","100"]],"estrenosflux.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","atob"],["aopw","adcashMacros"]],"estrenosflux.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","atob"],["aopw","adcashMacros"]],"ettv.co.uk":[["nowoif"],["aopr","AaDetector"]],"europixhd.com":[["aopr","AaDetector"],["aopr","LieDetector"],["popads-dummy"],["nowoif"]],"eurostream.com.br":[["nowoif"]],"eventiavversinews.pl":[["noeval-if","/chp_?ad/"]],"extratorrents.it":[["aopw","adcashMacros"]],"extrem-down.com":[["rmnt","script","adserverDomain"]],"eztv.de":[["nowebrtc"],["rmnt","script","adserverDomain"],["nowoif"],["nostif","adb"]],"f2movies.es":[["aopr","AaDetector"]],"f800riders.org":[["rmnt","script","html-load.com"]],"fapptime.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"farmingshelter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fbgo.com":[["aopr","__Y"],["aopr","mm"]],"fc.lc":[["acs","document.addEventListener","nextFunction"],["aopr","adBlockDetected"],["aopr","app_vars.force_disable_adblock"],["noeval"],["set","blurred","false"],["nowoif","/^/","1"],["rmnt","script","/DName|#iframe_id|AdscoreSignatureLoaded/"]],"ffjav.com":[["acs","document.querySelectorAll","popMagic"]],"fid-gesundheitswissen.de":[["nostif",".call(null)","10"]],"filmisongs.co.uk":[["acs","JSON.parse","break;case $."]],"filmyzilla.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"finanzen.com.br":[["nostif",".call(null)","10"]],"findav.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"findporn.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fixthisbuildthat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flexamens.com":[["noeval-if","/chp_?ad/"]],"flixbaba.org":[["aeld","click","popMagic"]],"flixhq.com.br":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["aopr","zfgstorage"]],"flizmovies.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fmoonembed.com.br":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"fmoonembed.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"foodsharingvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footybite.es":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fortressofsolitude.co.za":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foxyfolksy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freefiremaxofficial.com":[["noeval-if","/chp_?ad/"]],"freeflix.info":[["aeld","","break;case $."],["aopr","open"]],"freeload.it":[["acs","Math","break;case $."]],"freevipservers.net":[["nostif","length"]],"ftuapps.org":[["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"futbolenlatelevision.com":[["noeval-if","/chp_?ad/"]],"fxporn69.it":[["aeld","click","exopop"],["set","adblock","noopFunc"],["nostif","nextFunction","2000"]],"gallant-matures.com":[["noeval"],["aopr","Aloader.serve"]],"games.centredaily.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamovideo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"gardenersyards.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gatherforbread.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gaypornhdfree.net":[["aeld","DOMContentLoaded","adsBlocked"]],"gelbooru.com":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"gentside.org":[["rmnt","script","()=>eval"]],"getmorevocab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gifcandy.net":[["acs","document.querySelectorAll","popMagic"]],"glodls.net":[["nowebrtc"],["rmnt","script","popLink"]],"gofilmes.fr":[["acs","parseInt","break;case $."]],"gogoanimes.net":[["aopr","LieDetector"],["nowoif"],["acs","Math","break;case $."]],"gogoanimes.ru":[["aopr","LieDetector"],["nowoif"],["acs","Math","break;case $."]],"gogoanimetv.it":[["aopr","AaDetector"],["nosiif","_0x"],["nowoif"]],"gogoanimetv.pl":[["aopr","AaDetector"],["nosiif","_0x"],["nowoif"]],"goheels.com":[["set","blockAdBlock","trueFunc"]],"gokutv.es":[["acs","document.documentElement","break;case $."]],"gomoviesc.pl":[["nowoif"]],"gomoviz.de":[["acs","parseInt","break;case $."],["aeld","","break;case $."]],"googleapis.com.do":[["aeld","click","_0x"]],"gourmetsupremacy.com":[["nostif","null"]],"greenwichmeantime.com":[["rmnt","script","void 0 || window,"]],"guardiansnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gurusiana.id":[["no-fetch-if","googlesyndication"]],"haleiwatown.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"haoweichi.com":[["aopr","onload"]],"hdfcfund.com":[["set","smartech","noopFunc"]],"hdfull.com.br":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","mousedown","!!{});"],["nano-stb"]],"hdmovieplus.net":[["acs","String.fromCharCode","/btoa|break/"]],"hdmovies50.fr":[["aeld","","break;case $."],["acs","navigator","break;case $."]],"hdonline.co":[["acs","JSON.parse","break;case $."]],"hds-streaming.com.br":[["acs","parseInt","break;case $."]],"heartifb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"helpdeskgeek.com":[["rmnt","script",";confirm("],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentaisenpai.it":[["acs","document.querySelectorAll","popMagic"]],"hentaisenpai.org":[["acs","document.querySelectorAll","popMagic"]],"hh3dhay.pl":[["aeld","","break;case $."]],"hhdmovies.es":[["acs","parseInt","break;case $."]],"hiidudemoviez.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"histordle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"home-xxx-videos.com":[["aopr","document.dispatchEvent"],["aeld","getexoloader"]],"homeairquality.org":[["no-fetch-if","googlesyndication"],["no-xhr-if","googlesyndication"],["aeld","blur","focusOut"],["no-fetch-if","googletagmanager"],["set","detectAdblock","noopFunc"]],"homefortheharvest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homegrownhappiness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homehobbiesdaily.com":[["set","loadShield","noopFunc"]],"homemoviestube.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["aopr","decodeURI"],["aeld","click","clickCount"]],"honeybuilthome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotcopper.com.au":[["acs","$","blockAds"],["rmnt","script","html-load.com"]],"housekeen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtomakedinner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hpaudiobooks.fr":[["acs","String.fromCharCode","shift"]],"hubdrive.com":[["aeld","DOMContentLoaded","script[data-domain="],["nowoif"],["aeld","","history.go"]],"hubdrive.fr":[["aeld","DOMContentLoaded","script[data-domain="],["nowoif"],["aeld","","history.go"]],"iawaterfowlers.com":[["rmnt","script","html-load.com"]],"iconmonstr.com":[["aost","document.getElementsByTagName","adsBlocked"],["acs","document.getElementById","nextFunction"],["aeld","DOMContentLoaded","adsBlocked"],["no-xhr-if","googlesyndication"]],"idlixvip.net":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"imas-cg.net":[["rmnt","script","html-load.com"]],"imgcloud.pw":[["popads-dummy"]],"imgdew.nl":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"imgviu.com.br":[["nowoif"],["acs","addEventListener","-0x"]],"instantramen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"insteading.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"isohunt.com":[["nowoif"]],"ispunlock.de":[["aopr","pace"]],"itsguider.com":[["aeld","load","nextFunction"]],"jablickar.cz":[["rmnt","script","html-load.com"]],"jacksorrell.tv":[["acs","jQuery","adblocker"]],"jalshamoviezhd.co.uk":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"jastrzabpost.pl":[["nano-sib","consoleLoaded?clearInterval"]],"jav-noni.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javboys.it":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["noeval-if","/chp_?ad/"]],"javwide.org":[["aopr","AaDetector"]],"javx.nl":[["nowoif","_blank"],["aeld","DOMContentLoaded","window.open"]],"jessicayeahcatch.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jkowners.com":[["rmnt","script","html-load.com"]],"justfamilyporn.com":[["acs","document.createElement","_htas"]],"kaaltv.com":[["rmnt","script","/__adblocker|html-load/"]],"kannadamasti.es":[["nowoif"]],"kaotic.com":[["nowoif"]],"katbay.com.br":[["aeld","","break;case $."],["aopw","ospen"]],"kawalingpinoy.com":[["rmnt","script","/__adblocker|html-load/"]],"kinox.co.uk":[["aopr","decodeURI"]],"kissanime.de":[["acs","JSON.parse","break;case $."],["acs","String.fromCharCode","/btoa|break/"],["nowoif"],["no-xhr-if","googlesyndication"]],"kitchenseer.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchenswagger.com":[["rmnt","script","/__adblocker|html-load/"]],"knifeinformer.com":[["rmnt","script","/__adblocker|html-load/"]],"kobieta.wp.pl":[["nostif","bait"]],"koora-online.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"koyso.co.uk":[["nowoif","!koyso."],["aeld","click","localStorage"]],"kstatewomenshoops.org":[["set","blockAdBlock","trueFunc"]],"la7.it":[["no-xhr-if","doubleclick"]],"langenscheidt.com":[["rmnt","script","html-load.com"]],"lapresse.ca":[["set","noBlocker","true"],["aopw","_sp_"]],"latesthdmovies.ru":[["acs","eval","replace"],["acs","document.createElement","script"]],"laurenfromscratch.com":[["rmnt","script","/__adblocker|html-load/"]],"learnmetrics.com":[["rmnt","script","/__adblocker|html-load/"]],"lecourrier-du-soir.com":[["nosiif","iframe"]],"leftinknots.com":[["rmnt","script","/__adblocker|html-load/"]],"letmewatchthis.com":[["nowebrtc"]],"libertyvf.com":[["acs","Math","zfgloaded"]],"linemarlin.com":[["aost","String.prototype.charCodeAt","ai_"]],"linkfly.pl":[["set","blurred","false"]],"linksdegrupos.com.br":[["aeld","","break;case $."]],"linkshortx.in":[["set","blurred","false"]],"littlechefwithin.com":[["rmnt","script","/__adblocker|html-load/"]],"livecamrips.pl":[["rmnt","script","window.open"]],"logi.im":[["nostif","adsbygoogle"]],"lookmovie.ru":[["aopr","adBlockDetected"],["aopr","mm"],["acs","JSON.parse","break;case $."],["set","Yii2App.playbackTimeout","0"]],"lookmovie186.de":[["acs","JSON.parse","break;case $."]],"losmovies.co.uk":[["acs","JSON.parse","break;case $."]],"lovefilipinofood.com":[["rmnt","script","/__adblocker|html-load/"]],"low-offset.com":[["rmnt","script","/__adblocker|html-load/"]],"m.shuhaige.net":[["rmnt","script","return a.split"]],"m1xdrop.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"m4u.com.br":[["noeval-if","/chp_?ad/"],["nowoif"]],"m4u.es":[["noeval-if","/chp_?ad/"],["nowoif"]],"madworldnews.com":[["rmnt","script","/==undefined.*body/"]],"magesypro.net":[["noeval-if","/chp_?ad/"]],"magicgameworld.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"],["aost","document.getElementById","adsBlocked"]],"maisonbrico.com":[["aopr","console.warn"]],"manga-scantrad.nl":[["acs","document.querySelectorAll","popMagic"]],"manga1000.it":[["aeld","","break;case $."],["aopw","document.ready"]],"mangatrend.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","shown_at"]],"mangovideo.ru":[["acs","document.createElement","script"],["set","flashvars.popunder_url",""],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"manwa.me":[["rmnt","script","popMagic"]],"mavavid.com":[["aopr","__Y"]],"maxicast.pl":[["nowoif","_blank"]],"maxstream.fr":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"meatrabbits.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meaww.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mediatakeout.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"megalink.it":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["aeld","click","popunder"]],"mejortorrento.it":[["nowebrtc"],["aeld","click","popMagic"]],"mejortorrento.net":[["nowebrtc"],["aeld","click","popMagic"]],"mejortorrents.com.br":[["nowebrtc"],["aeld","click","popMagic"]],"melissassouthernstylekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"melodelaa.nl":[["acs","parseInt","break;case $."]],"messforless.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mexa.it":[["acs","document.getElementById","adblockinfo"],["nowoif"]],"miixdrop.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"misterdonghua.in":[["nowoif"]],"mlbstreams.ai":[["rmnt","script","adserverDomain"]],"mlfbd.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"mlsbd.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."]],"mmopeon.ru":[["acs","decodeURI","decodeURIComponent"]],"mobile-cuisine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"modsella.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moflix-stream.de":[["nostif","affiliate"],["nostif","afterOpen"]],"momswithmouseears.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moretvtime.ru":[["acs","adBlockDetected"]],"moviehdf.com.br":[["aopr","popUp"],["nowoif"]],"movieon21.com":[["nowoif"]],"movies123.pk":[["acs","EventTarget.prototype.addEventListener","delete window"]],"movies2watch.fr":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"movies4u3.net":[["acs","document.documentElement","break;case $."],["nowoif"],["aopr","antiAdBlockerHandler"]],"moviesrulzfree.es":[["nowoif"]],"moviessources.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","devtoolschange"],["aopr","console.clear"]],"moviezwaphd.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"mtech4you.com":[["noeval-if","/chp_?ad/"]],"multifaucet.org":[["acs","String.fromCharCode","/btoa|break/"]],"my1ink.it":[["acs","JSON.parse","break;case $."]],"myegy.de":[["aopw","decodeURI"],["acs","JSON.parse","break;case $."]],"myfernweh.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"myketoplate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mylistoflists.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mymessykitchenn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myvidmate.de":[["acs","atob","decodeURIComponent"]],"naijahits.com":[["acs","Math","break;case $."]],"narcity.com":[["aopw","Ha"]],"narviks.nl":[["rmnt","script","adb"]],"natashaskitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"naturalhomeapothecary.com":[["rmnt","script","/__adblocker|html-load/"]],"new.lewd.ninja":[["nano-sib","next","1000","0.001"]],"newatlas.com":[["nostif","[native code]","500"],["rmnt","script","head.appendChild.bind"],["rmnt","script","/^\\(async\\(\\)=>\\{function.{1,200}head.{1,100}\\.bind.{1,900}location\\.href.{1,100}\\}\\)\\(\\);$/"],["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"nflperry.com":[["rmnt","script","/__adblocker|html-load/"]],"nirjonmela.com":[["acs","$","AdBlock"]],"nishinippon.co.jp":[["rmnt","script","html-load.com"]],"nissanforums.com":[["rmnt","script","html-load.com"]],"nitro-link.com":[["nowoif"]],"nosidebar.com":[["rmnt","script","/__adblocker|html-load/"]],"nosubapp.com":[["nostif","detectAdBlock"]],"novamovie.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"noz.de":[["nostif",".call(null)","10"]],"nvimfreak.com":[["noeval-if","/chp_?ad/"]],"o2tvseries.com.br":[["rmnt","script",";}}};break;case $."]],"oceanofmovies.de":[["acs","JSON.parse","break;case $."]],"officedepot.com":[["set","gbTracker","{}"],["set","gbTracker.sendAutoSearchEvent","noopFunc"]],"ohjav.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ohmymag.net":[["aopr","_sp_._networkListenerData"],["rmnt","script","()=>eval"]],"ohsospotless.com":[["rmnt","script","/__adblocker|html-load/"]],"oii.la":[["rmnt","script","{delete window["],["rmnt","script","/adb_detected|AdBlockCheck|;break;case \\$\\./i"],["nowoif"],["no-fetch-if","googlesyndication"],["no-xhr-if","/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","/checkAdblockUser|bypOnSyntheticClick/"],["nostif","checkAdblock"],["nosiif","-0x"],["set","blurred","false"]],"onepace.co":[["nowoif"]],"oneshetwoshe.com":[["rmnt","script","/__adblocker|html-load/"]],"onlinepornushka.com":[["acs","document.querySelectorAll","popMagic"]],"organizationjunkie.com":[["rmnt","script","/__adblocker|html-load/"]],"otakudesu.fr":[["nowoif"]],"oursaltykitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"ovcdigitalnetwork.com":[["set","blockAdBlock","trueFunc"]],"overthebigmoon.com":[["rmnt","script","/__adblocker|html-load/"]],"oxy.es":[["acs","$","window.open"],["nosiif",".hide"],["acs","$","localStorage"]],"pagalworld.com":[["acs","JSON.parse","break;case $."]],"pasteit.net":[["noeval-if","AdBlock"]],"pawchive.es":[["acs","document.createElement","no-referrer-when-downgrade"]],"peasandcrayons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peliculas-dvdrip.ru":[["aeld","DOMContentLoaded","shortener"],["aopr","AdservingModule"]],"pelisflix20.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"]],"pelisplus2.net":[["acs","document.getElementsByTagName","onclick"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"]],"pelisplus2.org":[["acs","document.getElementsByTagName","onclick"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"]],"pelix.com.br":[["aeld","","0x"],["set","btoa","null"],["nowoif"],["aeld","load","url"],["aopw","smrtSB"],["aopw","smrtSP"],["aopr","AaDetector"],["aopw","adcashMacros"]],"perfektdamen.com":[["acs","ExoLoader"],["aopw","ads_priv"],["noeval"]],"petitfute.com":[["rmnt","script","html-load.com"]],"phlebotomypracticetest.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picrok.pl":[["nowoif"],["acs","addEventListener","-0x"]],"pitbossforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plylive.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["nowoif"]],"pnd.es":[["aopr","AaDetector"],["aopw","Fingerprint2"]],"polygamia.pl":[["nano-sib","consoleLoaded?clearInterval"]],"popcorntime.ru":[["aeld","","break;case $."]],"pornhoarder.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/wpadmngr|adserverDomain/"]],"porno-365.com.br":[["aost","document.createElement","Object.init"]],"porntube15.com":[["acs","decodeURI","decodeURIComponent"]],"portnassauwebcam.com":[["nostif","innerHTML"]],"povw1deo.com":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"povwideo.com.br":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"powcloud.org":[["aeld","/click|mouse|touch/","_0x"],["set","puOverlay","noopFunc"],["aopw","opopnso"],["aopw","c0ZZ"]],"powlideo.com.br":[["nowoif"]],"powstream.net":[["nowoif"]],"powv1deo.nl":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"prostoporno.nl":[["aopr","ExoLoader.serve"]],"protege-liens.com":[["nowoif"]],"proxytpb.org":[["aeld","/^(?:click|mousedown)$/","_0x"]],"prydwen.gg":[["acs","admiral"]],"psarips.ru":[["aopw","Fingerprint2"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pudelek.pl":[["nano-sib","consoleLoaded?clearInterval"]],"putingfilm.com":[["acs","parseInt","break;case $."]],"putlocker9.pl":[["aopw","Fingerprint2"],["acs","JSON.parse","break;case $."]],"putlockers.it":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."]],"q1003.com":[["nostif","google_ad"]],"querofilmehd.fr":[["acs","JSON.parse","break;case $."]],"r6-forum.com":[["rmnt","script","html-load.com"]],"r8talk.com":[["rmnt","script","html-load.com"]],"radio-nederland.nl":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-uk.co.uk":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radioindia.in":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"raenonx.cc":[["nostif","error-report.com"],["nostif","Ads"]],"rapload.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rdxhd1.org":[["aeld","","/_0x|localStorage\\.getItem/"]],"recordbate.com":[["acs","document.querySelectorAll","popMagic"]],"redtedart.com":[["rmnt","script","/__adblocker|html-load/"]],"redtube.nl":[["acs","Object.defineProperty","trafficjunky"],["nowoif"],["set","page_params.holiday_promo","true"]],"rexporn.it":[["aeld","","pop"]],"ripplestream4u.de":[["acs","EventTarget.prototype.addEventListener","delete window"]],"rocketrevise.com":[["noeval-if","/chp_?ad/"]],"rojadirecta.co.uk":[["aopw","closeMyAd"],["aopw","smrtSP"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["nowoif"]],"rollsroyceforums.com":[["rmnt","script","html-load.com"]],"romhustler.org":[["nano-sib","timer.remove"]],"sabishiidesu.com":[["noeval-if","/chp_?ad/"]],"safetxt.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"safetxt.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"saltnsprinkles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"samaysawara.in":[["acs","document.addEventListener","google_ad_client"]],"sankakucomplex.com":[["set","Object.prototype.hideAds","true"],["acs","document.querySelectorAll","popMagic"]],"savefiles.nl":[["rmnt","script","wpadmngr.com"],["rmnt","script","catcher"]],"savemedia.com":[["nowoif"]],"savvytime.com":[["rmnt","script","\"nowprocket\""]],"scarletknights.com":[["set","blockAdBlock","trueFunc"]],"scholarshiplist.org":[["noeval-if","/chp_?ad/"]],"scoutmotorsforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"scr950forum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sdmoviespoint.it":[["acs","JSON.parse","break;case $."],["noeval-if","ads"]],"seaofknowledge.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seeeed.ru":[["acs","Promise","break;case $."]],"sekaikomik.live":[["acs","document.querySelectorAll","popMagic"]],"send.now":[["rmnt","script","LieDetector"]],"sendspace.com":[["aopr","runad"]],"sensualgirls.org":[["aopr","document.dispatchEvent"]],"seriemega.com":[["nowoif"]],"seriesonline.net":[["acs","document.documentElement","break;case $."]],"sex-torrent.net":[["acs","document.querySelectorAll","popMagic"],["ra","href","a[href*=\"torrentico.top/sim/go.php\"]"]],"sexy-games.pl":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"sexybabespictures.com":[["acs","document.querySelectorAll","popMagic"]],"sharedrive.it":[["nowoif"]],"shemaletoonsex.com":[["acs","document.querySelectorAll","popMagic"]],"shooshtime.com":[["nowoif"],["acs","document.getElementsByTagName","adn"]],"shortearn.nl":[["aopr","AaDetector"],["aopr","open"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","/btoa|break/"]],"shortstackkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shorttey.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","app_vars.force_disable_adblock"],["aopr","open"],["aopw","adcashMacros"],["aost","Math.random","t.pt"],["json-prune","clickAnywhere urls"],["set","blurred","false"],["set","canRunAds","true"]],"showflix.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["aost","document.getElementById","fairAdblock"]],"shrinke.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","window.open"],["aeld","load","doTest"]],"shrtfly.org":[["aopr","open"],["aopr","tabUnder"]],"simplyquinoa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"singingdalong.pl":[["aeld","load","2000"]],"sipandfeast.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sitesunblocked.com":[["aeld","","break;case $."],["aopr","open"]],"skilledgolf.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skillscouter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"societyofrock.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"softfully.com":[["no-fetch-if","ads"]],"softonic.org":[["set-cookie","softonic-r2d2-view-state","1"]],"solarmovie.es":[["aopr","AaDetector"],["nowoif"],["acs","Math","zfgloaded"]],"solarmovies.co.uk":[["aeld","","break;case $."]],"soundpark-club.ru":[["acs","$","open"],["acs","document.createElement","script"]],"southfreak.es":[["acs","parseInt","break;case $."],["nowoif"]],"splay.id":[["nostif","getComputedStyle"],["nowoif","maddenwiped"]],"sportcast.es":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"sporting77.es":[["nowoif"]],"sportlemon.es":[["aopr","decodeURI"]],"sports24.org":[["acs","String.fromCharCode","/btoa|break/"]],"sporttuna.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sssam.com":[["set","ads","true"]],"staaker.com":[["nano-sib","counter","*"]],"steanplay.com":[["nowoif"],["aeld","","BACK"],["aopr","jwplayer.utils.Timer"]],"stillrealtous.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stream4free.org":[["aeld","load","nextFunction"]],"streamadblockplus.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"streamcdn.ru":[["aopr","AaDetector"],["aopr","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamingnow.mov":[["aopr","aclib"],["rmnt","script","/popundersPerIP|adserverDomain|wpadmngr/"],["nowoif"]],"streamingworld.com.br":[["acs","atob","decodeURIComponent"],["aopr","AaDetector"],["aopw","Fingerprint2"],["acs","Math","break;case $."]],"streamonsport99.ru":[["acs","document.documentElement","break;case $."]],"streampiay.pl":[["nowoif"]],"strefabiznesu.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"strikeout.com":[["nowoif","|"],["acs","setTimeout","admc"],["acs","String.fromCharCode","shift"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","{delete window["]],"strmup.cc":[["nowoif"]],"subtorrents.de":[["aopr","capapubli"],["aopr","getUrlParameter"],["nowebrtc"],["noeval"],["popads-dummy"],["set","btoa","null"]],"sunshineandhurricanes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superherohype.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"sushi-scan.co.uk":[["nostif","show"]],"suzuki-forums.net":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"swaddlesnbottles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tab-maker.com":[["no-fetch-if","googletagmanager","length:10"]],"tagesspiegel.de":[["nostif",".call(null)","10"],["aopr","Notification"]],"talkaboutmarriage.com":[["rmnt","script","html-load.com"]],"tamilfreemp3songs.it":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"tamilprint30.fr":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"tampabayparenting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tarantulaforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tattle.life":[["nostif","prompt","1000"]],"teamfight.lol":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teamkong.tk":[["noeval-if","/chp_?ad/"]],"techacode.com":[["nostif","nextFunction","250"],["noeval-if","adb"],["set","count","0"],["aopr","SMart1"],["rmnt","script","deblocker"],["no-xhr-if","/doubleclick|googlesyndication/"]],"techjunkie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teensex.nl":[["aopr","popit"],["aeld","popstate","noPop"]],"tekkenmods.com":[["aopw","HTMLScriptElement.prototype.onerror"]],"tekniikanmaailma.fi":[["set","Object.prototype.disablecommercials","true"],["set","Object.prototype._autoPlayOnlyWithPrerollAd","false"]],"telecharger-igli4.net":[["aopw","adBlockDetected"]],"telerium.com":[["nostif","KeepOpeningPops","1000"],["nowoif"],["aopr","LieDetector"],["rmnt","script","delete window"]],"tennisstreams.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."],["acs","navigator","FingerprintJS"],["acs","setTimeout","admc"]],"thebigblogs.com":[["noeval-if","/chp_?ad/"]],"thecookiedoughdiaries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedigitalcrowns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegradcafe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehawaiivacationguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theroyalcourtofpasta.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesexcloud.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"theteenmagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theurbenlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewordcounter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thichcode.net":[["set","detectAdBlock","noopFunc"]],"thissavoryvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thotpacks.xyz":[["set","blurred","false"]],"thoughtcatalog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tmearn.nl":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["set","blurred","false"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"todaypktv.net":[["nowoif"]],"topeuropix.it":[["aopr","AaDetector"],["aopr","LieDetector"],["popads-dummy"],["nowoif"],["aeld","","_0x"]],"torinotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"torontosun.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","await eval"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"torrent9.it":[["aeld","","_0x"]],"torrentdosfilmes.de":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"totalsportek.co.uk":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","","open"]],"totalsportek.net":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","","open"]],"tpb.com":[["aopr","pace"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"transfermarkt.com":[["acs","document.querySelector","popupBlocked"],["acs","Math","/\\}\\s*\\(.*?\\b(self|this|window)\\b.*?\\)/"],["nostif",".call(null)","10"]],"trendytalker.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"tristatehomepage.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"tubsexer.com.br":[["nostif","innerText","2000"]],"tugaflix.de":[["aopr","open"]],"turbovidhls.com":[["nowoif"],["nostif","window.open"]],"tutsnode.es":[["aopr","b2a"]],"tutvlive.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"tvtv.pl":[["nostif",".call(null)","10"]],"txxx.es":[["acs","setTimeout","hommy.mutation.mutation"],["aopr","jwplayer.utils.Timer"],["rmnt","script","/nopop|spot\\.url|exoclick|_plBtnExclude|spot_id/"]],"typerush.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"u4m.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ucanwatch.com":[["nowoif"]],"uiil.ink":[["aopr","app_vars.force_disable_adblock"],["rmnt","script","/delete win/"],["nowoif"],["aeld","click","open"],["set","blurred","false"]],"ultimateninjablazingx.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"unefemme.net":[["rmnt","script","/__adblocker|html-load/"]],"untoldrecipesbynosheen.com":[["rmnt","script","/__adblocker|html-load/"]],"upfiles.es":[["acs","Math","break;case $."]],"uploadmall.com":[["set","navigator.brave","undefined"],["nowoif","zigi_tag_id","10","obj"]],"upornia.ru":[["acs","adver"],["set","hommy","{}"],["set","hommy.waitUntil","noopFunc"]],"uproxy2.ru":[["aost","Math.floor",""]],"uptomega.nl":[["nano-stb","seconds"],["aeld","","break;case $."]],"uqload.ru":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"urlbluemedia.fr":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"userload.net":[["aeld","","_0x"],["nowoif"],["acs","document.getElementById","style.display"]],"userupload.com":[["rmnt","script","/adbl/i"],["noeval-if","/chp_?ad/"]],"uwlathletics.com":[["set","blockAdBlock","trueFunc"]],"uyeshare.cc":[["nowoif"],["rmnt","script","pop1stp"]],"vapley.it":[["nowoif"],["aopr","doSecondPop"]],"vedbam.pl":[["acs","navigator","break;case $."]],"velostern.com":[["rmnt","script","html-load.com"]],"vev.it":[["aeld","/^(?:click|mousedown|mouseup)$/","di()"],["set","console.clear","trueFunc"],["nowoif","/^/","1"]],"vibestreams.com.br":[["rmnt","script","adserverDomain"],["nowoif","_blank"],["aeld","click","popunder"]],"videoplayer.co.uk":[["acs","document.documentElement","break;case $."]],"videos-xxx.com":[["acs","document.querySelectorAll","popMagic"]],"videovak.com":[["aeld","click","PopUnder"],["acs","document.addEventListener","location.href"]],"vidhd.nl":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"],["aopr","AaDetector"]],"vidmoly.net":[["nowoif","!vidmoly"],["set","HTMLAnchorElement.prototype.click","noopFunc"],["aeld","DOMContentLoaded","anchor.href"]],"vidnest.live":[["rmnt","script","{delete window["],["nostif","location.replace","100"],["acs","EventTarget.prototype.addEventListener","open"],["nostif","bait.remove"],["json-prune","*","rot_url"],["json-prune","*","pop_type"]],"vidnest.ru":[["nowoif"]],"vidoo.com":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"vintagetube.org":[["aopr","popit"],["aeld","popstate","noPop"]],"vipbox.es":[["set","path",""],["json-prune","*","*.adserverDomain"],["nowoif","","10"],["acs","JSON.parse","atob"],["rmnt","script","/delete window|adserverDomain|FingerprintJS/"]],"vipboxtv.it":[["json-prune","*","*.adserverDomain"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","navigator","FingerprintJS"],["nowoif","//"],["aopr","Adcash"]],"vipracing.de":[["acs","$","show"],["aopr","AaDetector"]],"viralpedia.pro":[["nowoif"]],"viralvideotube.ru":[["nowoif"]],"virtualstudybrain.com":[["no-fetch-if","googlesyndication"]],"vishakablone.com":[["rmnt","script","/__adblocker|html-load/"]],"vizcloud.de":[["aopr","AaDetector"],["ra","data-id|data-p","[data-id],[data-p]","stay"]],"vizcloud2.ru":[["aopr","AaDetector"]],"voirfilms.ru":[["aopw","smrtSB"],["nowoif"],["acs","atob","decodeURIComponent"]],"voltupload.com":[["nano-stb","download","1000","0.001"]],"voyageraleigh.com":[["rmnt","script","/__adblocker|html-load/"]],"voyeurhit.net":[["acs","adver"]],"waaw1.nl":[["aopr","doSecondPop"],["aopr","BetterJsPop"]],"waaw1.ru":[["aopr","doSecondPop"],["aopr","BetterJsPop"]],"wamgame.jp":[["rmnt","script","html-load.com"]],"wanderingindisney.com":[["rmnt","script","/__adblocker|html-load/"]],"wanderlustingk.com":[["rmnt","script","/__adblocker|html-load/"]],"wat32.tv":[["acs","JSON.parse","break;case $."]],"watchserieshd.com":[["acs","JSON.parse","break;case $."]],"watchserieshd.com.br":[["acs","JSON.parse","break;case $."]],"watchtvseries.fr":[["nowebrtc"]],"wcostream.de":[["nofab"],["acs","document.createElement","jsc.mgid.com"],["nowoif"]],"wcostream.fr":[["nofab"],["acs","document.createElement","jsc.mgid.com"],["nowoif"]],"web2.0calc.co.uk":[["aopr","doads"]],"webbikeworld.com":[["rmnt","script","/__adblocker|html-load/"]],"webhostingoffer.org":[["noeval-if","/chp_?ad/"]],"wegotcookies.co":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"weloma.de":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","addEventListener","HTMLAllCollection"],["nowoif"],["set-cookie","unlock_chapter_guest","1"],["acs","document.createElement","dataset.zone"]],"wetter.pl":[["nostif","(null)","10"]],"whippeditup.com":[["rmnt","script","/__adblocker|html-load/"]],"whitehavennews.co.uk":[["set","adLight","true"]],"wholesomepatisserie.com":[["rmnt","script","/__adblocker|html-load/"]],"wideopencountry.com":[["rmnt","script","/__adblocker|html-load/"]],"wildwap.co.uk":[["acs","JSON.parse","break;case $."]],"withinhours.com":[["rmnt","script","/__adblocker|html-load/"]],"wkrn.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wnynewsnow.com":[["set-attr",":is(.watch-on-link-logo, li.post) img.ezlazyload[src^=\"data:image\"][data-ezsrc]","src","[data-ezsrc]"]],"wojtekczytawh40k.blogspot.com":[["acs","addEventListener","ADBLOCK"]],"worldgreynews.com":[["acs","parseInt","break;case $."]],"worldhistoryedu.com":[["rmnt","script","/__adblocker|html-load/"]],"worldofpans.com":[["rmnt","script","/__adblocker|html-load/"]],"woxikon.es":[["rmnt","script","html-load.com"]],"wplink.com":[["set","blurred","false"]],"wplink.net":[["set","blurred","false"]],"wtnh.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xhamster15.co.uk":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster17.nl":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster19.net":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster4.nl":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster5.com.br":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster8.com.br":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xpaja.net":[["acs","String.fromCharCode","atob"]],"xpeditionforum.com":[["rmnt","script","html-load.com"]],"xprime4u.ru":[["noeval-if","/chp_?ad/"],["nowoif"]],"xxnx.ru":[["aopr","exoJsPop101"]],"xxxfiles.es":[["acs","document.querySelectorAll","popMagic"]],"xxxfiles.net":[["acs","document.querySelectorAll","popMagic"]],"xxxsex.pro":[["aopr","popit"],["aeld","popstate","noPop"]],"yakkun.com":[["rmnt","script","html-load.com"]],"yesdownloader.com":[["nano-sib"]],"yesmovies.org":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["aeld","","break;case $."],["nowoif"],["aopr","AaDetector"],["nowebrtc"]],"yggtorrent.nl":[["aopw","Fingerprint2"]],"yoima.hatenadiary.com":[["nostif","displayMessage","2000"]],"yomoviesnow.com":[["acs","parseInt","break;case $."]],"young-machine.com":[["rmnt","script","html-load.com"]],"youwatch.monster":[["acs","WebAssembly","atob"]],"yt2mp3s.de":[["aeld","","break;case $."]],"yts2.net":[["aopw","afStorage"],["nowoif"],["aopr","mm"]],"yuramanga.my.id":[["noeval-if","/chp_?ad/"]],"zone-annuaire.org":[["acs","Math","break;case $."],["nowoif"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
