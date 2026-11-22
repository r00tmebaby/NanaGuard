/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0123movie.ru":[["aopr","AaDetector"],["acs","document.documentElement","break;case $."]],"0gomovie.net":[["aeld","","break;case $."]],"0l23movies.it":[["aopr","rid"]],"101kks.com":[["rmnt","script","/popMagic|pop1stp/"]],"10starhd.net":[["acs","globalThis","break;case"]],"11xmovies.org":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["]],"123movies.net":[["aopr","open"],["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."]],"123movieshd.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","mm"],["set","p18","undefined"]],"123movieweb.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"12thmanrising.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"1madrasdub.co.uk":[["aeld","","break;case $."]],"1xfaucet.com":[["rmnt","script",".offsetHeight"]],"2gomovies.co.uk":[["acs","JSON.parse","break;case $."]],"2ix2.com":[["noeval-if","/chp_?ad/"]],"33sk.pl":[["acs","Math","zfgloaded"]],"45.86.86.235":[["acs","eval","replace"]],"4anime.com.br":[["aeld","","break;case $."]],"4spaces.org":[["noeval-if","/chp_?ad/"]],"4tube.com":[["aopr","ExoLoader"],["aopw","ads_priv"]],"502streetscene.net":[["rmnt","script","html-load.com"]],"720pflix.nl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"9hentai.org":[["aeld","click","saveLastEvent"]],"9kmovies.com.br":[["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."]],"9mod.com":[["nano-stb","timeLeft--","*"]],"9xupload.org":[["nano-stb"],["acs","parseInt","break;case $."],["aeld","","/_0x|localStorage\\.getItem/"]],"a-o.ninja":[["set","showAds","true"]],"a1movies.es":[["aeld","DOMContentLoaded","showPopup"],["nowoif"]],"abc17news.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"accordxclub.com":[["rmnt","script","html-load.com"]],"accountantforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acraftedpassion.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"actvid.org":[["acs","addEventListener","HTMLAllCollection"]],"adblockstreamtape.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"adcorto.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["aopr","app_vars.force_disable_adblock"],["aopw","atOptions"],["set","blurred","false"]],"advnture.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"aeroxplorer.com":[["nostif","ads"]],"afk.guide":[["nostif","display"]],"afropunk.com":[["rmnt","script","adshield"]],"agf.nl":[["nosiif","show"]],"airforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ak4eg.com.br":[["acs","document.documentElement","break;case $."],["aeld","load","onload"],["acs","u_cfg"]],"akatsuki-no-yona.com":[["acs","document.querySelectorAll","popMagic"]],"akutsu-san.com":[["acs","document.querySelectorAll","popMagic"]],"aliancapes.es":[["nostif","nextFunction","2000"]],"allnutritious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"altselection.com":[["noeval-if","/chp_?ad/"]],"amyinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anigo.to":[["nowoif"]],"anime4up.net":[["acs","parseInt","break;case $."],["nowoif"]],"animeblix.fr":[["nowoif"]],"animeflv.co.uk":[["acs","jQuery","pp12"],["acs","EventTarget.prototype.addEventListener","delete window"]],"animeheaven.co.uk":[["no-xhr-if","method:HEAD"]],"animeheaven.pl":[["no-xhr-if","method:HEAD"]],"animekb.ru":[["nowebrtc"]],"animeonline.ninja":[["acs","document.documentElement","break;case $."]],"animesa.co.uk":[["set","adblock_use","false"]],"animesup.nl":[["acs","parseInt","break;case $."]],"anitube.com":[["aopr","exoJsPop101"],["set","adBlockDetected","noopFunc"],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","btoa"]],"anitube.it":[["aopr","exoJsPop101"],["set","adBlockDetected","noopFunc"],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","btoa"]],"aniwave.pl":[["nowoif","_blank"],["set-cookie","__pf","1"]],"anroll.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"anxcinema.fr":[["ra","href","#clickfakeplayer"],["aopr","__Y"]],"apkandroidhub.in":[["no-fetch-if","googlesyndication"]],"appdoze.es":[["noeval-if","/chp_?ad/"]],"argio-logic.net":[["acs","document.getElementById","alert"]],"arizonahuntingforums.com":[["rmnt","script","html-load.com"]],"artistforum.com":[["rmnt","script","html-load.com"]],"as-web.jp":[["rmnt","script","html-load.com"]],"ashcroftfamilytable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audiotag.info":[["nostif","/offsetHeight|google|Global/"]],"audycje.tokfm.pl":[["set","adsOk","true"]],"autoroad.cz":[["nostif","check"]],"av01.org":[["nowoif"],["ra","onclick","a[onclick^=\"setTimeout\"]"],["rc","vjs-hidden",".vjs-control-bar","stay"]],"b15u.com":[["rmnt","script","html-load.com"]],"bakemeacookie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baketobefit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baking-sense.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bdiptv.com.br":[["aopr","AaDetector"],["nowoif"],["acs","Math","break;case $."]],"bdmusic28.co.uk":[["acs","document.documentElement","break;case $."]],"beelink.pro":[["no-fetch-if","googlesyndication"]],"bestshemaleclips.com":[["acs","document.querySelectorAll","popMagic"]],"bezpolitickekorektnosti.cz":[["aopr","sc_adv_out"]],"bildirim.nl":[["set","Notification","undefined"]],"bitchute.com":[["json-prune","show_adverts"],["no-xhr-if","googlesyndication"]],"blogesque.net":[["acs","document.documentElement","break;case $."]],"bloxd.io":[["noeval-if","page-kit.io"],["rmnt","script","window.__as_"]],"bluemediafile.com.br":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bobsvagene.club":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"boerse-online.de":[["nostif",".call(null)","10"]],"bogowieslowianscy.pl":[["noeval-if","/chp_?ad/"]],"bokepindoh.it":[["rmnt","script","/popMagic|pop1stp/"]],"bolly4u.co.uk":[["aopr","open"],["aopr","XMLHttpRequest"]],"bollywoodchamp.in":[["noeval-if","/chp_?ad/"]],"boolwowgirls.com":[["acs","document.querySelectorAll","popMagic"]],"bootdey.com":[["nostif","offsetHeight"]],"boxingvideo.org":[["noeval-if","/chp_?ad/"]],"burningseries.de":[["aeld","click","preventDefault"],["ra","onclick"]],"cafedelites.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"calbears.com":[["set","blockAdBlock","trueFunc"]],"cambabe.com":[["acs","onload"],["acs","crakPopInParams"]],"cambabe.de":[["acs","onload"],["acs","crakPopInParams"]],"camsclips.es":[["nostif","innerText","2000"]],"camwhorespy.com":[["acs","crakPopInParams"],["acs","onload","onclick"],["aopr","console.log"],["nowoif"]],"cap3.co.uk":[["nowoif","popup="],["aeld","click","setTimeout"],["aeld","click","()}","elements",".art-control-fullscreen"]],"cap3.com.br":[["nowoif","popup="],["aeld","click","setTimeout"],["aeld","click","()}","elements",".art-control-fullscreen"]],"castleinthemountains.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cavallo.de":[["nostif",".call(null)","10"]],"cbr250.com":[["rmnt","script","html-load.com"]],"ccnworldtech.com":[["acs","parseInt","break;case $."]],"cdn.gledaitv.com.br":[["aopr","Handlers"],["aopr","Settings"],["nostif","initializeAdblockDetection"],["acs","document.createElement","detection-bait"]],"cfb.fan":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"challengertalk.com":[["rmnt","script","html-load.com"]],"chatgpt.com":[["json-prune","messages.*.ads messages.*.renderedAdsHtml"]],"cheflindseyfarr.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chooseveganism.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chubbyelders.com":[["acs","document.querySelectorAll","popMagic"]],"cima4u.forum":[["rmnt","script","popup"]],"cine-calidad.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["aeld","click","allclick_Public"],["aopw","adcashMacros"],["ra","href","#opfk"]],"civilenggforall.com":[["aopr","blockAdBlock"]],"clashdaily.com":[["rmnt","script","/==undefined.*body/"]],"classiccasualhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clockskin.us":[["noeval-if","/chp_?ad/"]],"cockroachsavvy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"codesnse.com":[["set","go_popup","{}"],["nano-sib","counter","*","0.001"]],"coffeecopycat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"columbusnavigator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comixzilla.com":[["acs","document.createElement","script"]],"commercialcompetentedigitale.ro":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"compsmag.com":[["nostif","jQuery"]],"condorsoft.co":[["no-xhr-if","googlesyndication"]],"cookiesfordays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithcoit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cosmetologyguru.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cotswoldjournal.co.uk":[["set","adLight","true"]],"cpu-monkey.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"crackthemes.com":[["noeval-if","/chp_?ad/"]],"craftylittlegnome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazyforcrust.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crohasit.com":[["aopw","Fingerprint2"]],"cryptowin.io":[["acs","document.getElementById","body"]],"csrevo.com":[["acs","document.querySelectorAll","popMagic"]],"dailyveganmeal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daveockop.com":[["rmnt","script","void 0||window,"]],"decompiler.com":[["no-fetch-if","/ethicalads\\.io|nitropay\\.com/"],["set","HTMLImageElement.prototype.onload","undefined"],["set","HTMLImageElement.prototype.onerror","undefined"],["aeld","load","img"],["aeld","error"],["set","Image.prototype.complete","false"],["set","Element.prototype.getBoundingClientRect","undefined"],["nostif",".length"],["set","HTMLImageElement.prototype.naturalWidth","240"],["set","OffscreenCanvas.prototype.getContext","undefined"],["aost","Image",".js"],["aost","Element.prototype.removeChild","/blocked|tick/"]],"deinesexfilme.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"depedlps.fr":[["aeld","load","onload"],["aopr","encodeURIComponent"]],"derryjournal.com":[["rmnt","script","await eval"]],"descarga-animex.com":[["aopw","adBlockDetected"]],"desihoes.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"],["aopr","decodeURI"]],"desiupload.de":[["acs","getCookie"],["aeld","","history.go"],["aeld","","/_0x|localStorage\\.getItem/"]],"dev2qa.com":[["acs","decodeURIComponent","ai_"]],"dewimg.pl":[["nowoif"],["acs","addEventListener","-0x"]],"dickclark.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"digitalcitizen.life":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dinnerexa.com":[["nowoif"]],"dl-protect.nl":[["acs","String.fromCharCode","/btoa|break/"],["nowoif"]],"doomovie-hd.fr":[["set","adSettings","[]"]],"dooood.de":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"doooood.es":[["nowoif"]],"downloadming.ru":[["aopw","decodeURIComponent"],["acs","JSON.parse","break;case $."]],"downloadpirate.com":[["aopw","Fingerprint2"],["nowoif","_blank"],["acs","globalThis","break;case"]],"downloadtwittervideo.com":[["nowoif"]],"dozarte.com":[["acs","document.getElementById","undefined"],["ra","onclick"]],"draftmag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dragonball-zxk.com":[["noeval-if","/chp_?ad/"]],"drakecomic.co.uk":[["set","checkAdBlocker","noopFunc"]],"dribbblegraphics.com":[["rmnt","script","deblocker"]],"drivelinks.me":[["acs","document.oncontextmenu"],["acs","document.onmousedown"]],"dropgalaxy.co.uk":[["nowoif"]],"dropgalaxy.fr":[["nowoif"]],"dtupgames.blogspot.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"dvdplay.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["set","D4zz","noopFunc"]],"dzienniklodzki.pl":[["aeld","","show"]],"earth911.com":[["rmnt","script","/__adblocker|html-load/"]],"eatbetterrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"educationaltechnology.net":[["rmnt","script","/__adblocker|html-load/"]],"einthusan.it":[["no-xhr-if","/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"]],"elitetorrent.pl":[["aopw","adcashMacros"]],"elystandard.co.uk":[["set","adLight","true"]],"embedmoon.com":[["nowoif"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"]],"embedplayer.pl":[["acs","document.documentElement","break;case $."]],"emojikeyboard.io":[["rmnt","script","/__adblocker|html-load/"]],"empire-streaming.it":[["set","empire.pop","undefined"],["set","empire.direct","undefined"],["set","empire.directHideAds","undefined"],["set","document.hidden","true"],["nano-stb","(!1)","*"],["no-xhr-if","pagead2.googlesyndication.com"]],"endomondo.com":[["rmnt","script","/__adblocker|html-load/"]],"engel-horoskop.de":[["nostif","displayMessage","2000"]],"eroprofile.com":[["acs","ExoLoader"]],"escaladeevforum.com":[["rmnt","script","html-load.com"]],"estrenosflix.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopw","adcashMacros"]],"ethanchlebowski.com":[["rmnt","script","/__adblocker|html-load/"]],"europix.ru":[["acs","JSON.parse","break;case $."]],"eventiavversinews.nl":[["noeval-if","/chp_?ad/"]],"everydayelizabeth.com":[["rmnt","script","/__adblocker|html-load/"]],"exclusivomen.com":[["aopr","_sp_._networkListenerData"]],"extreme-down.ru":[["acs","$","friendlyduck"],["acs","Math","decodeURIComponent"],["acs","JSON.parse","break;case $."],["rmnt","script","adserverDomain"]],"faaduindia.com":[["noeval-if","/chp_?ad/"]],"fapdig.com":[["acs","document.createElement","script"]],"faselhds.de":[["rmnt","script",";}}};break;case $."]],"fast-dl.nl":[["nowoif"]],"fc-lc.nl":[["rmnt","script","/DName|#iframe_id|AdscoreSignatureLoaded/"]],"feelgoodfoodie.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fembed.net":[["aopr","__Y"],["aopw","adcashMacros"],["aopr","mm"],["nowoif"]],"femmeactuelle.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"fffmovies.de":[["acs","JSON.parse","break;case $."]],"fiberfluxblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"file4go.pl":[["acs","document.getElementById","ad_block"],["set","time","0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"filecloud.de":[["nowoif"]],"filecloud.net":[["nowoif"]],"filelions.com":[["aopr","__Y"]],"filemooon.fr":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"filepress.net":[["aeld","","break;case $."],["aost","String.prototype.charCodeAt","/(?=^(?!.*(jquery|turnstile|challenge-platform)))/"],["aeld","blur","console.log"]],"filesamba.org":[["aopr","_wm"]],"filma1.co.uk":[["acs","parseInt","break;case $."]],"filmeseries.nl":[["acs","navigator","break;case $."]],"filmnudes.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"filmy-hit.pl":[["acs","document.documentElement","break;case $."]],"filmy4wap1.org":[["acs","Math","break;case $."]],"findporn.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fitasamamabear.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flavorfulife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flavormosaic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flixhq.nl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["aopr","zfgstorage"]],"fmovie.net":[["acs","Math","zfgloaded"]],"fmovies.es":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"],["aopr","mm"],["set","console.clear","undefined"],["acs","document.write","innerWidth"]],"fmoviesfree.com.br":[["acs","document.documentElement","break;case $."]],"footybite.pl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"forex-yours.com":[["noeval-if","/chp_?ad/"]],"foumovies.pl":[["aopw","decodeURIComponent"],["acs","JSON.parse","break;case $."]],"fplstatistics.co.uk":[["no-fetch-if","googlesyndication"]],"freexmovs.com":[["aopr","document.dispatchEvent"]],"ftuapps.dev":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"],["nostif","ai_"]],"fuelly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funny-jokes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"futemais.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fxporn69.ru":[["aeld","click","exopop"],["set","adblock","noopFunc"],["nostif","nextFunction","2000"]],"gadgets.es":[["set","DHAntiAdBlocker","true"],["set","isAdBlockActive","false"]],"gamecopyworld.com.br":[["acs","document.createElement","Tool"]],"gamedayeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"general-anzeiger-bonn.de":[["nostif",".call(null)","10"]],"giga.de":[["aost","XMLHttpRequest.prototype.open","svonm.com"],["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"gloucestershirelive.co.uk":[["set","chameleonVideo.adDisabledRequested","true"]],"godrakebulldogs.com":[["set","blockAdBlock","trueFunc"]],"gofile.to":[["set","countDown","0"]],"gofilmes.org":[["acs","parseInt","break;case $."]],"gofilms4u.de":[["aeld","","break;case $."]],"gofilms4u.it":[["aeld","","break;case $."]],"gogodl.com":[["acs","document.getElementById","adblock"]],"gokutv.nl":[["acs","document.documentElement","break;case $."]],"golfstreams.me":[["rmnt","script","adserverDomain"]],"gostream.com":[["set","check_adblock","true"]],"gousfbulls.com":[["set","blockAdBlock","trueFunc"]],"govid.co.uk":[["acs","parseInt","break;case $."]],"gr86.org":[["rmnt","script","html-load.com"]],"gra.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"grasta.net":[["noeval-if","/chp_?ad/"]],"greatbritishlife.co.uk":[["set","adLight","true"]],"greenweddingshoes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gunhub.com":[["rmnt","script","html-load.com"]],"happy-otalife.com":[["noeval-if","/chp_?ad/"]],"hardlinecrawlers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hartico.tv":[["nostif","getComputedStyle","250"]],"hdhub4one.pics":[["noeval-if","/chp_?ad/"]],"hdmovies50.com.br":[["aeld","","break;case $."],["acs","navigator","break;case $."]],"hdzog.fr":[["acs","adver"]],"healthfirstweb.com":[["set","timeSec","0"],["nano-stb","getlink","*","0.001"],["noeval-if","replace"]],"hentai-senpai.ru":[["acs","document.querySelectorAll","popMagic"]],"hentaiarena.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"heraldonline.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"herepup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"highschooltestprep.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hindimovies.net":[["acs","parseInt","break;case $."]],"hockeystats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"holavid.com":[["aopw","decodeURIComponent"]],"hortonbarbell.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hostzteam.com":[["noeval-if","/chp_?ad/"]],"hotcopper.co.nz":[["rmnt","script","html-load.com"]],"hotmovs.com":[["acs","adver"]],"hungryhealthyhappy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hurawatch.net":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"]],"hutchnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"iammagnus.com":[["set","adsbygoogle.loaded","true"]],"ibecamethewifeofthemalelead.com":[["acs","document.querySelectorAll","popMagic"]],"idevice.me":[["noeval-if","/chp_?ad/"]],"idlelivelink.fr":[["nano-sib"]],"iflixmovies.com.br":[["acs","document.documentElement","break;case $."]],"ihdstreams.es":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"ilifehacks.com":[["aost","String.prototype.charCodeAt","ai_"]],"illinoisloyalty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ilmeteo.it":[["nostif","google_jobrunner"]],"improvephotography.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"incestflix.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"indianpornvideos.com.br":[["aopr","exoJsPop101"]],"infarrantlycreative.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infomaniakos.net":[["set","btoa","null"]],"iptvdroid1.blogspot.com":[["acs","Math","zfgloaded"]],"ironysub.ru":[["acs","Math","zfgloaded"]],"itopmusic.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"iwsti.com":[["rmnt","script","html-load.com"]],"jacquieetmichelelite.com":[["acs","$","show"]],"japanfuck.com":[["aopr","popit"],["aeld","popstate","noPop"]],"japannews.yomiuri.co.jp":[["rmnt","script","piano"]],"japansporno.com":[["aopr","popit"],["aeld","popstate","noPop"]],"jav.si":[["acs","WebAssembly","atob"]],"javlion.xyz":[["aopr","__Y"]],"javmost.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javpool.com":[["acs","document.querySelectorAll","popMagic"]],"javx.org":[["nowoif","_blank"],["aeld","DOMContentLoaded","window.open"]],"jenismac.com":[["rmnt","script","/eval.*RegExp/"]],"jessieathome.com":[["rmnt","script","/__adblocker|html-load/"]],"jmanga.nl":[["acs","WebAssembly","atob"]],"justbrightideas.com":[["rmnt","script","/__adblocker|html-load/"]],"justpicsplease.com":[["aopw","__aaZoneid"]],"kaembed.net":[["nowoif","!vidmoly"]],"kagane.ru":[["nowoif"]],"kaliscan.it":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","/popMagic|pop1stp/"]],"kare11.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kashtanka.net":[["aopr","exoJsPop101"]],"kashtanka.org":[["aopr","exoJsPop101"]],"kattracker.co.uk":[["aeld","","break;case $."],["aopw","ospen"]],"keepingupchangs.com":[["rmnt","script","/__adblocker|html-load/"]],"keepvid.it":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"kickassanime.it":[["rmnt","script","globalThis;break;case"],["acs","document.documentElement","break;case $."],["set","ifmax","true"]],"kickassgo.it":[["aeld","","break;case $."],["aopw","ospen"]],"kickasshydra.org":[["aeld","","break;case $."],["aopw","ospen"]],"kindergartenworksheetsandgames.com":[["rmnt","script","/__adblocker|html-load/"]],"kinoger.co.uk":[["aopr","__Y"],["nowoif"],["acs","document.documentElement","break;case $."]],"kinoger.net":[["aopr","__Y"],["nowoif"],["acs","document.documentElement","break;case $."]],"kinox.es":[["aopr","decodeURI"]],"kirbiecravings.com":[["rmnt","script","/__adblocker|html-load/"]],"kiss-anime.fr":[["nowebrtc"],["acs","JSON.parse","break;case $."]],"koyso.ru":[["nowoif","!koyso."],["aeld","click","localStorage"]],"kstreaming.pl":[["aopw","Fingerprint2"],["nowebrtc"],["acs","Math","zfgloaded"]],"ktmatvhq.com":[["rmnt","script","html-load.com"]],"kwro.com":[["set","google_unique_id","6"]],"l23movies.org":[["acs","JSON.parse","atob"]],"lancastereaglegazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"largefamilytable.com":[["rmnt","script","/__adblocker|html-load/"]],"layardrama21.com":[["noeval-if","ads"]],"legacy.hockey":[["rmnt","script","/__adblocker|html-load/"]],"legionjuegos.org":[["nano-sib","","","0.02"],["set","t","0"]],"lenkino.com.br":[["nostif","innerText","2000"]],"leo-horoscopes.com":[["nostif","displayMessage","2000"]],"leoduq.com":[["rmnt","script","/__adblocker|html-load/"]],"lewdzone.com":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","Promise"],["nano-sib","circle_animation"],["nano-stb","CountBack","990"]],"lifemadesweeter.com":[["rmnt","script","/__adblocker|html-load/"]],"likemanga.ink":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/popMagic|pop1stp/"]],"linksaya.com":[["acs","addEventListener","google_ad_client"]],"linksfire.com.br":[["acs","parseInt","break;case $."],["aopr","open"]],"listar-mc.net":[["rmnt","script","onerror"]],"livetvon.co.uk":[["aeld","","break;case $."],["aopw","u_cfg"]],"lookcam.org":[["set","canRunAds","true"]],"lookmovie2.fr":[["rmnt","script","/popunder/i"]],"lookmovie2.it":[["rmnt","script","/popunder/i"]],"loveourreallife.com":[["rmnt","script","/__adblocker|html-load/"]],"loveroms.co.uk":[["acs","decodeURI","decodeURIComponent"]],"low-riders.com":[["rmnt","script","html-load.com"]],"madouqu.com":[["acs","WebAssembly","atob"],["rmnt","script","/popMagic|pop1stp/"]],"maketecheasier.com":[["nostif","loader.min.js"],["rmnt","script","KCgpPT57bGV0IGU"],["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"makinghomebase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manga1001.com":[["aeld","","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"mangakoma01.es":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"mangaread.org":[["acs","document.addEventListener","promos"]],"mangovideo.de":[["acs","document.createElement","script"],["set","flashvars.popunder_url",""],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"mariasbluecrayon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"martinloganowners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mcrypto.es":[["noeval-if","/chp_?ad/"]],"meinestadt.de":[["nostif",".call(null)","10"]],"mejortorrents1.com.br":[["nowebrtc"],["aeld","click","popMagic"]],"melaterevancha.com":[["rmnt","script","await eval"]],"memoriadatv.com":[["nano-stb"]],"menshealth.de":[["nostif",".call(null)","10"]],"messinatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"mhdsport.nl":[["rmnt","script",";}}};break;case $."]],"mhdtvsports.de":[["acs","document.documentElement","break;case $."],["rmnt","script","deblocker"],["rmnt","script","/adbl/i"]],"michiganreefers.com":[["rmnt","script","html-load.com"]],"mimaletadepeliculas.co.uk":[["aeld","load","advertising"]],"missav.org":[["acs","document.createElement","htmlAds"],["nowoif"]],"missinformationblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mixdroop.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"mobilesuitarena.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneymakingmommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"monkeyandmekitchenadventures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moodymixologist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moovitapp.com":[["no-fetch-if","doubleclick"]],"morels.com":[["rmnt","script","html-load.com"]],"moritzfinedesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motchill.pl":[["aeld","click","popactive"]],"motogpstream.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"moviebaztv.com":[["rmnt","script","popundersPerIP"]],"moviefreak.ru":[["acs","parseInt","break;case $."]],"movieplex.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"movieruls.fr":[["nowoif"]],"movierulz2free.com.br":[["nowoif"]],"movierulzz.de":[["nowoif"]],"movierulzz.org":[["nowoif"]],"movies123.com":[["nowoif"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."],["rmnt","script","wpadmngr.com"]],"movies4u.es":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"],["nowoif"],["aopr","antiAdBlockerHandler"],["aopw","app_advert"],["href-sanitizer","a[href^=\"https://linkshortify.com/\"][href*=\"url=http\"]","?url"]],"moviesnation.org":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopw","onpopstate"],["nowoif","_blank"]],"moviesverse.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."]],"movieuniverse.net":[["acs","document.documentElement","break;case $."]],"movizland.de":[["acs","Math","break;case $."],["aopr","open"]],"mp3clan.com":[["aopw","Fingerprint2"]],"mp3juices.icu":[["nano-sib","temp"]],"mrpiracy.com":[["acs","document.getElementById","deleted"],["aopr","LieDetector"],["nowoif"]],"mscdroidlabs.es":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"mtsproducoes.co.uk":[["aopw","block_detected"]],"murphybedhq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"my1ink.co.uk":[["acs","JSON.parse","break;case $."]],"mycoolmoviez.com":[["nowebrtc"]],"mycoolmoviez.fr":[["nowebrtc"]],"mycoolmoviez.it":[["nowebrtc"]],"mydesibaba.com":[["acs","document.querySelectorAll","popMagic"]],"mydownloadtube.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"mydverse.com.br":[["rmnt","script","antiAdBlockerHandler"]],"myflixerz.de":[["acs","document.documentElement","break;case $."]],"myflixerz.to":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"myfooddata.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mylivestream.pro":[["rmnt","script","popundersPerIP"],["aopw","Adcash"]],"mymp3song.com":[["nowoif"]],"mywatchseries.it":[["nowebrtc"],["acs","document.querySelectorAll","popMagic"],["acs","EventTarget.prototype.addEventListener","delete window"]],"naasongsfree.net":[["acs","JSON.parse","break;case $."]],"naijaray.com.ng":[["aost","Math.floor",""]],"naszahistoria.pl":[["rmnt","script","admiral","excludes",",\\\""]],"netuplayer.fr":[["nowoif"]],"newmovierulz.de":[["aopr","String.fromCharCode"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nknews.jp":[["noeval-if","/chp_?ad/"]],"nonsensediamond.pl":[["aopr","decodeURI"]],"noracooks.com":[["rmnt","script","/__adblocker|html-load/"]],"notabully.org":[["rmnt","script","/__adblocker|html-load/"]],"notube.pl":[["nowoif"]],"novascotiahunting.com":[["rmnt","script","html-load.com"]],"nozomi.la":[["set","D4zz","noopFunc"],["aopw","__aaZoneid"]],"nuovo.vidplayer.live":[["json-prune","ads playerAds"],["nowoif","_blank"]],"nuroflix.es":[["rmnt","script",";}}};break;case $."],["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"nutraingredients-latam.com":[["set","displayInterstitialAdConfig","false"]],"oceanofmovies.net":[["acs","JSON.parse","break;case $."]],"officedepot.es":[["set","gbTracker","{}"],["set","gbTracker.sendAutoSearchEvent","noopFunc"]],"ohiosportsman.com":[["rmnt","script","html-load.com"]],"okhatrimaza.pl":[["popads-dummy"],["aopr","glxopen"],["acs","Object.defineProperty","XMLHttpRequest"]],"okuyami-information.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"oncehelp.com":[["aeld","click","trigger"],["aopr","open"],["set","blurred","false"]],"onechicagocenter.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"onlinekosh.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"onlyfanvideo.com":[["acs","document.querySelectorAll","popMagic"]],"onmovies.it":[["aopw","Fingerprint2"]],"optimizepri.me":[["rmnt","script","/__adblocker|html-load/"]],"osubeavers.com":[["set","blockAdBlock","trueFunc"]],"oyundunyasi.net":[["aopr","adsBlocked"]],"pachinkopachisro.com":[["rmnt","script","html-load.com"]],"partner.nonamejose.sx":[["set-local-storage-item","removeAdv","true"],["nostif","","15000"]],"pasend.de":[["acs","document.querySelectorAll","popMagic"]],"pasend.nl":[["acs","document.querySelectorAll","popMagic"]],"pastrychefonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pawastreams.de":[["nowoif"]],"pawchive.pl":[["acs","document.createElement","no-referrer-when-downgrade"]],"peliculas24.es":[["acs","blur"],["aopw","smrtSB"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pelispedia.fr":[["acs","allclick_Public"],["nano-stb"],["ra","href","a#clickfakeplayer"],["ra","href","#opfk"],["ra","href",".fake_player > [href][target]"]],"pelisplushd.pl":[["aopw","adcashMacros"],["nowoif"]],"pelisplusxd.es":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"perfectgirls.com.br":[["acs","ExoLoader"],["aopw","ads_priv"],["noeval"],["acs","document.querySelectorAll","popMagic"]],"phoenixwithkids.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picturelol.com":[["aopr","ExoLoader"],["nowoif"]],"piratebayz.com":[["aopr","LieDetector"]],"planomoms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pnd.nl":[["aopr","AaDetector"],["aopw","Fingerprint2"]],"poe-vault.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"popcorntime.it":[["aeld","","break;case $."]],"pornclipshub.com":[["noeval"],["aopr","Aloader.serve"]],"pornd.pro":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","puShown"]],"porndollz.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"]],"porngames.tv":[["nowoif"],["set","puShown","true"]],"porngameshd.com":[["nostif","/out.php"]],"pornhub-sexfilme.net":[["aopr","ExoLoader"],["nostif","/loadMomoVip|loadExo|includeSpecial/"],["aost","document.createElement","loadNeverBlock"]],"pornid.ru":[["aopr","decodeURI"]],"pornlore.com":[["acs","document.querySelectorAll","popMagic"],["set","pre_roll_url"],["set","post_roll_url"]],"pornmaturetube.com":[["noeval"],["aopr","Aloader.serve"]],"portcanaveralwebcam.com":[["nostif","innerHTML"]],"powerstrokearmy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"powvdeo.com.br":[["nowoif"]],"powvibeo.com.br":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"privatemoviez.org":[["aeld","DOMContentLoaded","adsBlocked"],["nostif","magnificPopup"],["nano-sib","count"]],"project-free-tv.com.br":[["acs","document.documentElement","break;case $."]],"projectfreetv.it":[["aeld","","_0x"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","globalThis","break;case"],["acs","document.documentElement","break;case $."]],"proverbmeaning.com":[["acs","document.querySelector","adblock"]],"puzzles.independent.co.uk":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"quiltfusion.com":[["acs","parseInt","break;case $."]],"radiantlydressed.com":[["rmnt","script","/__adblocker|html-load/"]],"radio-ao-vivo.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"rainanime.nl":[["aopr","loadRunative"]],"rakskitchen.net":[["rmnt","script","/__adblocker|html-load/"]],"rankersadda.in":[["acs","addEventListener","google_ad_client"]],"rawlazy.si":[["nano-stb","/\\$\\('|ai-close/","*","0.001"]],"rctalk.com":[["rmnt","script","/__adblocker|html-load/"]],"readcomicsonline.lol":[["nostif","getComputedStyle"]],"readingbd.com":[["acs","Math","break;case $."]],"realmenrealstyle.com":[["rmnt","script","/__adblocker|html-load/"]],"recipesfromleftovers.com":[["rmnt","script","/__adblocker|html-load/"]],"redditchadvertiser.co.uk":[["set","adLight","true"]],"remodelaholic.com":[["rmnt","script","/__adblocker|html-load/"]],"repelisgooo.com.br":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"resortcams.com":[["nostif","adblocker"]],"retirementtipsandtricks.com":[["rmnt","script","/__adblocker|html-load/"]],"rexporn.net":[["aeld","","pop"]],"rojadirectaenvivo.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rollingstone.de":[["nostif",".call(null)","10"]],"rp5.de":[["nostif","0x"]],"saabcentral.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="],["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sadisflix.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"safeframe.googlesyndication.com":[["nano-sib","()=>{var c=Kb","1000","0.2"]],"safehomefarm.com":[["aopw","adBlockDetected"]],"saradahentai.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["aopr","document.dispatchEvent"]],"sat.technology":[["aeld","load","abDetectorPro"],["no-fetch-if","googlesyndication"]],"savefiles.pl":[["rmnt","script","wpadmngr.com"],["rmnt","script","catcher"]],"sbchip.co.uk":[["aopr","__Y"],["aopr","mm"]],"sbplay3.org":[["aopr","__Y"],["aopr","mm"]],"scotsman.com":[["rmnt","script","await eval"]],"scrumptiously.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seasonalcravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seeeed.com":[["acs","Promise","break;case $."]],"seeeed.it":[["acs","Promise","break;case $."]],"seirsanduk.online":[["rmnt","script","adserverDomain"]],"series2watch.com.br":[["acs","document.documentElement","break;case $."]],"seriesflixhd.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"seriesflv.org":[["acs","Math","break;case $."]],"seriesly.net":[["acs","Math","break;case $."]],"seriesyonkis.fr":[["acs","document.querySelectorAll","popMagic"]],"setfucktube.com":[["noeval"],["aopr","Aloader.serve"]],"seulink.co.uk":[["aopr","mm"],["set","blurred","false"]],"seulink.de":[["aopr","mm"],["set","blurred","false"]],"sexvid.fr":[["acs","document.write","iframe"],["aopr","ExoLoader"],["aopr","pu"]],"sexyscope.net":[["set","adList","[]"]],"sflix.ru":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","AaDetector"]],"shadowrangers.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"shahed4u.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."]],"shemalez.de":[["rmnt","script","/_plBtn|__native_l|_offerwalls/"]],"shineads.pl":[["aeld","DOMContentLoaded","adsSrc"]],"shrtfly.ru":[["aopr","open"],["aopr","tabUnder"]],"shuangyskitchensink.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sitepdf.com":[["aeld","","break;case $."],["aopr","open"]],"sixdollarfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skysetx.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"skysetx.fr":[["acs","EventTarget.prototype.addEventListener","delete window"]],"sleazedepot.com":[["acs","document.querySelectorAll","popMagic"]],"slreamplay.nl":[["nano-stb","grecaptcha.ready","*"],["nowoif"]],"slutdump.com":[["aopr","document.dispatchEvent"],["set","dclm_ajax_var.disclaimer_redirect_url",""]],"smartfeecalculator.com":[["set","document.hidden","false"],["set","document.hasFocus","trueFunc"],["rmnt","script","DisableDevtool"],["nowoif","!devuploads.com"],["nano-sib","","*","0.02"],["nano-stb","","*","0.02"]],"so1.asia":[["nano-stb","","","0.02"],["nano-sib","","","0.02"],["rc","hidden",".panel-body > .text-center > button"],["ra","disabled",".panel-body > .text-center > button"]],"soapcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"softarchive.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"softonic.net":[["set-cookie","softonic-r2d2-view-state","1"]],"solarmovies.pl":[["aeld","","break;case $."]],"solomaxlevelnewbie.nl":[["acs","document.querySelectorAll","popMagic"]],"songs.org":[["aopr","AaDetector"]],"southparkstudios.nl":[["no-fetch-if","ima3_dai"],["no-fetch-if","dai_iframe"]],"sparklesofsunshine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spatuladesserts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spicedblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sport.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"sportlemons.de":[["aopr","decodeURI"]],"sportlive.com.br":[["ra","onclick"]],"sports24.es":[["acs","String.fromCharCode","/btoa|break/"]],"sportsembed.org":[["acs","setTimeout","admc"]],"sportsseoul.com":[["nostif","error-report.com"]],"stape.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"steamplay.com":[["aopr","btoa"],["aopw","Fingerprint2"],["aopr","console.clear"],["aopw","adcashMacros"],["nowoif"],["aopr","jwplayer.utils.Timer"]],"stfly.it":[["acs","document.documentElement","break;case $."]],"stiflersmoms.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"streamcdn.de":[["aopr","AaDetector"],["aopr","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamcdn.org":[["aopr","AaDetector"],["aopr","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamhoe.co.uk":[["aopr","open"],["aopr","_pop"]],"streaming-community.es":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streamonsport99.com.br":[["acs","document.documentElement","break;case $."]],"streetstylis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"strms.net":[["set","sensorsDataAnalytic201505","{}"],["set","vizier","{}"]],"subtitleporn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"subtorrents1.co.uk":[["aopr","capapubli"],["aopr","getUrlParameter"],["nowebrtc"],["noeval"],["popads-dummy"],["set","btoa","null"]],"sunlineclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superanimes.in":[["acs","EventTarget.prototype.addEventListener","delete window"]],"supergoldenbakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supervideo.tv":[["acs","Math","break;case $."]],"suzukiatvforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"svetserialu.com":[["rmnt","script","/detect/i"]],"sxyprn.pl":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["acs","WebAssembly","atob"],["acs","decodeURI","decodeURIComponent"],["set","vast_urls","{}"],["aopr","popns"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aopw","__aaZoneid"]],"t20cup.com.br":[["aeld","","break;case $."]],"tabooporn.tv":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","mm"]],"talesfromthekitchenshed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tamilprint.ru":[["acs","parseInt","break;case $."]],"tamilprint30.de":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"tamilyogis.pl":[["acs","JSON.parse","break;case $."]],"tauntongazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"techdico.com":[["rmnt","script","html-load.com"]],"techhelpbd.com":[["nostif","/adblocker|alert/"]],"tecnobillo.com":[["nostif","check"]],"teensex.es":[["aopr","popit"],["aeld","popstate","noPop"]],"teluguflix.de":[["no-xhr-if","googlesyndication"],["rmnt","script","/deblocker|chp_ad/"]],"teluguonlinemovies.org":[["nowoif"]],"terianncarty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"testlanguages.com":[["set","sgpbCanRunAds","true"]],"testsieger.de":[["json-prune","offers"]],"theandroidpro.com":[["aopr","adBlockDetected"]],"thefarmchicken.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegameslayer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegay.de":[["acs","adver"]],"thejobsmovie.com":[["nostif","adsBlocked"]],"thekat.com.br":[["aeld","","break;case $."],["aopw","ospen"]],"thelinkbox.co.uk":[["acs","JSON.parse","break;case $."]],"themeparkreview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themovementmenu.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepiratebay.it":[["aeld","/^(?:click|mousedown)$/","_0x"],["aopw","spot"],["aopr","popjs.init"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thepiratebay.org":[["aopw","Fingerprint2"],["aeld","/^(?:click|mousedown)$/","_0x"],["aopw","spot"],["aopr","popjs.init"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","exoJsPop101"]],"therootedfarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thescottishsun.co.uk":[["rmnt","script","/parentNode\\.removeChild|textContent=atob/"],["acs","atob","/parentNode\\.removeChild|textContent=atob/"]],"theskinnypot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetfordandbrandontimes.co.uk":[["set","adLight","true"]],"thewoodgraincottage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thingstomen.com":[["acs","JSON.parse","break;case $."]],"thueringen24.de":[["nostif",".call(null)","10"]],"timesandstar.co.uk":[["set","adLight","true"]],"timesofisrael.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"tirexo.es":[["nowoif"]],"tiz-cycling.com":[["acs","jQuery","blocker"]],"todaytvseries1.com":[["rmnt","script","protectedDomains"]],"todopolicia.com":[["nostif","show"]],"toonanime.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["aeld","","break;case $."]],"topdrama.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tophentaicomics.com":[["acs","pop_init"]],"topstreams.es":[["nowebrtc"],["acs","$","ads"],["acs","setTimeout","admc"]],"torlock2.it":[["acs","setTimeout","admc"],["nowebrtc"]],"tpb.es":[["aopr","pace"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tporn.xxx":[["rmnt","script","directBanner"]],"transfermarkt.ru":[["acs","document.querySelector","popupBlocked"],["acs","Math","/\\}\\s*\\(.*?\\b(self|this|window)\\b.*?\\)/"],["nostif",".call(null)","10"]],"truckscout24.com":[["nostif",".call(null)","10"]],"turbocloud.xyz":[["nowoif"],["nostif","window.open"]],"turbovid.fr":[["acs","WebAssembly","atob"]],"tutelehd.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","setTimeout","admc"]],"twomonkeystravelgroup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"twoplaidaprons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"txxx.pl":[["acs","setTimeout","hommy.mutation.mutation"],["aopr","jwplayer.utils.Timer"],["rmnt","script","/nopop|spot\\.url|exoclick|_plBtnExclude|spot_id/"]],"tyler-brown.com":[["nano-stb","download","1100"],["acs","document.querySelectorAll","popMagic"]],"u.co.uk":[["no-xhr-if","fwmrm.net"],["no-fetch-if","fwmrm.net"]],"uciteljica.net":[["noeval-if","/chp_?ad/"]],"unite-guide.com":[["rmnt","script","detect"]],"upapk.io":[["nano-stb","tick","1000","0.001"]],"upfiles.com":[["acs","Math","break;case $."]],"uploadbuzz.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"upmedia.mg":[["rmnt","script","adrecover.com"]],"uproxy2.net":[["aost","Math.floor",""]],"urlbluemedia.pl":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"ustream.org":[["nowoif"],["aopr","console.clear"]],"uur-tech.net":[["noeval-if","/chp_?ad/"]],"v-twinforum.com":[["rmnt","script","html-load.com"]],"v8sleuth.com.au":[["rmnt","script","html-load.com"]],"vanime.fr":[["acs","parseInt","break;case $."],["acs","JSON.parse","Promise"]],"vapley.com":[["nowoif"],["aopr","doSecondPop"]],"varminthunters.com":[["rmnt","script","html-load.com"]],"vedbam.co.uk":[["acs","navigator","break;case $."]],"venuedrivers.com":[["rmnt","script","html-load.com"]],"verdragonball.online":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"vermoegen.org":[["aopr","document.referrer"]],"vgmlinks.fr":[["aopr","initPu"]],"vibestreams.es":[["rmnt","script","adserverDomain"],["nowoif","_blank"],["aeld","click","popunder"]],"vid-guard.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["nostif","afterOpen"],["nowoif"],["set","PlayerConfig.config.CustomAdSetting","[]"]],"vid2faf.ru":[["nowoif"]],"vide-greniers.org":[["no-fetch-if","ads"]],"videofilms.pl":[["aopr","__Y"]],"videovard.it":[["nowoif"],["aeld","mouseup","catch"],["nosiif","0x"],["aopr","FuckAdBlock"]],"vidfast.ru":[["acs","atob","/popundersPerIP[\\s\\S]*?Date[\\s\\S]*?getElementsByTagName[\\s\\S]*?insertBefore/"],["acs","addEventListener","HTMLAllCollection"]],"vidnest.it":[["nowoif"]],"vidnest.pl":[["nowoif"]],"vidoo.co.uk":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"vidup.org":[["set","console.clear","trueFunc"],["nowoif","/^/","1"]],"vipracing.ru":[["acs","$","show"],["aopr","AaDetector"]],"vizcloud.com":[["aopr","AaDetector"],["ra","data-id|data-p","[data-id],[data-p]","stay"]],"voirfilms.de":[["aopw","smrtSB"],["nowoif"],["acs","atob","decodeURIComponent"]],"voirseries.de":[["acs","globalThis","break;case"]],"vstplugin.net":[["noeval-if","/chp_?ad/"]],"vudeo.it":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"waaw1.co.uk":[["aopr","doSecondPop"],["aopr","BetterJsPop"]],"watchfree.com":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"watchmovies.pl":[["acs","document.documentElement","break;case $."]],"watchomovies.org":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","popunder"]],"watchporn.it":[["acs","document.querySelectorAll","popMagic"]],"watchseries.unblocked.com.br":[["nowebrtc"]],"watchseries.unblocked.fr":[["nowebrtc"]],"way2movies.de":[["acs","EventTarget.prototype.addEventListener","delete window"]],"web2.0calc.net":[["aopr","doads"]],"webbro.co.uk":[["aopr","AaDetector"]],"whofacts.com":[["rmnt","script","/__adblocker|html-load/"]],"winlator.com":[["no-fetch-if","googlesyndication"]],"winporn.com":[["nowoif"]],"wmoviesfree.com.br":[["acs","JSON.parse","break;case $."]],"wolfstream.ru":[["nowoif"]],"world4ufree1.de":[["acs","parseInt","break;case $."]],"woxikon.com":[["rmnt","script","html-load.com"]],"wsavcw.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wzzm13.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xhamster13.co.uk":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster14.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster17.es":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster3.com.br":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster3.net":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster42.fr":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmovies08.com":[["acs","Math","zfgloaded"]],"xnxx.it":[["aeld","DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["set","xv.sda.pp.init","noopFunc"],["set","xv.conf.dyn.ads","undefined"],["set","xv.conf.dyn.excld","undefined"],["rmnt","script","html5player.enableVideoPreRollAds"]],"xxxmomz.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxrip.net":[["ra","href","a[href*=\"torrentico.top/sim/go.php\"]"]],"y2tube.pro":[["nowoif"]],"yakyufan-asobiba.com":[["noeval-if","/chp_?ad/"]],"younetu.ru":[["nowoif"],["aopr","doSecondPop"],["set","adblockcheck","false"]],"yt5s.com":[["aost","String.prototype.charCodeAt","https"]],"ytanime.tv":[["acs","document.querySelectorAll","popMagic"],["acs","Math","break;case $."],["aopr","u_cfg"],["aopw","adcashMacros"]],"ytboob.com":[["aopr","document.dispatchEvent"]],"ytmp3eu.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"yummytoddlerfood.com":[["rmnt","script","/__adblocker|html-load/"]],"zeijakunahiko.com":[["noeval-if","/chp_?ad/"]],"zentralplus.ch":[["nofab"]],"zilla-xr.xyz":[["nowoif"]],"zone-annuaire.fr":[["acs","Math","break;case $."],["nowoif"]],"zooredtube.com":[["aopr","popunderSetup"],["aeld","DOMContentLoaded","preventExit"]],"zshort.ru":[["set","blurred","false"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
