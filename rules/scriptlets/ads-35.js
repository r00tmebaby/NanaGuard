/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0rechner.de":[["set","doads","true"]],"123gostream.org":[["acs","Math","break;case $."]],"123movierulz.fr":[["nowoif"]],"123movies4up.de":[["acs","parseInt","break;case $."]],"123movieshd.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","mm"],["set","p18","undefined"]],"123moviesme.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["aopr","decodeURI"]],"123moviesme.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["aopr","decodeURI"]],"141tube.com":[["acs","document.querySelectorAll","popMagic"],["set","univresalP","noopFunc"]],"173.249.8.3":[["nowoif"],["acs","eval","replace"]],"1direct-cloud.com.br":[["acs","document.documentElement","break;case $."]],"1hd.to":[["acs","document.documentElement","break;case $."]],"2ddl.nl":[["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"3dassetcollection.com":[["noeval-if","/chp_?ad/"]],"3gaytube.com":[["acs","document.querySelectorAll","popMagic"]],"3sk.co.uk":[["acs","Math","zfgloaded"]],"3sk.pl":[["acs","Math","zfgloaded"]],"48daysworkout.com":[["rmnt","script","/__adblocker|html-load/"]],"4filmyzilla.it":[["acs","JSON.parse","break;case $."]],"4runner6g.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"5movierulz2.nl":[["nowoif"]],"5xmovies.nl":[["acs","parseInt","break;case $."]],"6indianporn.com":[["acs","document.querySelectorAll","popMagic"],["aeld","","popMagic"]],"723qrh1p.fun":[["rmnt","script","popunder"]],"7movierulz1.it":[["nowoif"]],"7starhd.com.br":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","String.fromCharCode","/'shift'|break;/"],["aeld","","/_0x|localStorage\\.getItem/"]],"7vibelife.com":[["no-xhr-if","doubleclick"],["no-xhr-if","google","length:10"]],"94.103.83.138":[["nowoif"]],"9xflix.es":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"9xmovies.de":[["rmnt","script",";}}};break;case $."],["nowoif"]],"a8ix.it":[["acs","document.documentElement","break;case $."]],"abudhabitravelplanner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acortalo.es":[["nofab"],["nano-sib","","","0"],["set","clicked","true"],["set","eClicked","true"],["set","number","0"],["set","sync","true"]],"acortar.fr":[["nofab"],["nano-sib","","","0"],["set","clicked","true"],["set","eClicked","true"],["set","number","0"],["set","sync","true"]],"adsrt.de":[["nowoif"],["acs","atob","decodeURIComponent"],["aopw","Fingerprint2"],["aopr","rmVideoPlay"],["set","blurred","false"]],"advanced-astrology.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adyou.net":[["aeld","/^(?:click|mousedown)$/","bypassEventsInProxies"]],"afilmywap.es":[["popads-dummy"],["aopr","glxopen"]],"afrugalchick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ahri8.co.uk":[["acs","document.querySelectorAll","popMagic"]],"ainttooproudtomeg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allevertakstream.space":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"allitebooks.es":[["nowebrtc"]],"allmovie.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"allwpworld.com":[["nano-sib","timeleft"],["ra","disabled","input[id=\"button1\"][class=\"btn btn-primary\"][disabled]"]],"altadefinizione01.net":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"altadefinizione01.org":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"anagrammer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anallievent.com":[["aopr","__eiPb"]],"anestwithayard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"angrybbq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anime4i.vip":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","adserverDomain"]],"animekb.es":[["nowebrtc"]],"animesanka.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"animevietsub.com":[["rmnt","script","PopupManager"]],"apex2nova.com":[["rmnt","script","delete window"]],"apkmody.com.br":[["nano-stb","download_loading","*"],["nowoif"]],"arizonagunowners.com":[["rmnt","script","html-load.com"]],"aroundthenook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arsiv.mackolik.com":[["set","AdmostClient","{}"]],"artfulhomemaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asd.it":[["acs","EventTarget.prototype.addEventListener","delete window"]],"askattest.com":[["set","attestHasAdBlockerActivated","true"]],"askim-bg.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"asssex-hd.com":[["aopr","Aloader.serve"],["noeval"]],"autosport.ru":[["noeval-if","/chp_?ad/"]],"ayatoon.com":[["noeval-if","/chp_?ad/"]],"bakedambrosia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakeorbreak.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baking-forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bcsnoticias.mx":[["noeval-if","/chp_?ad/"]],"benchmark.pl":[["nano-sib","consoleLoaded?clearInterval"]],"benelliforum.com":[["rmnt","script","html-load.com"]],"biggerbolderbaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bike-magazin.de":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"bildirim.co.uk":[["set","Notification","undefined"]],"blogenginee.com":[["aopr","adsBlocked"]],"boerse.de":[["nostif",".call(null)","10"]],"bollyflix.pl":[["acs","document.documentElement","break;case $."]],"bollymovies.it":[["acs","JSON.parse","break;case $."]],"boxylucha.com":[["aost","String.prototype.charCodeAt","ai_"]],"bravoerotica.net":[["set","flashvars.adv_pause_html",""],["set","flashvars.adv_start_html",""]],"bricksandlogic.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"btdb.nl":[["aeld","","_0x"],["aopr","console.clear"],["aeld","","Date"],["aopr","open"]],"buffsports.co.uk":[["acs","EventTarget.prototype.addEventListener","delete window"]],"buickforums.com":[["no-xhr-if","googlesyndication"]],"bunkrr.fr":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"busydaydinners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"calfkicker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camwhorestv.it":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"]],"camwhorestv.pl":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"]],"camwhoria.com":[["acs","crakPopInParams"],["aopr","console.log"]],"cantondailyledger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"castironforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chargerforums.com":[["rmnt","script","html-load.com"]],"charlottepilgrimagetour.com":[["noeval-if","/chp_?ad/"]],"chazhound.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chefjacooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chihouban.com":[["noeval-if","/chp_?ad/"]],"cindyhattersleydesign.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cine-calidad.fr":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["aeld","click","allclick_Public"],["aopw","adcashMacros"],["ra","href","#opfk"]],"cinefreak.de":[["aeld","click","openPopunder"]],"cinemalibero.it":[["nowoif"],["aopr","AaDetector"]],"classic-armory.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleaneatingveggiegirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clevergirlfinance.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"codelivly.com":[["rmnt","script","clientHeight"]],"cola16.app":[["noeval-if","/chp_?ad/"]],"comunio.de":[["nostif",".call(null)","10"]],"condolencemessages.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"construct101.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookinwithmima.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cracksports.me":[["rmnt","script","adserverDomain"],["acs","JSON.parse","atob"],["rmnt","script","FingerprintJS"],["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"crayonsandcravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazydl.net":[["nostif","show"]],"cruzetalk.com":[["rmnt","script","html-load.com"]],"csgo-ranks.com":[["nosiif","visibility","1000"]],"cuevana3.net":[["aopr","S9tt"],["aopr","decodeURI"],["aopw","popUpUrl"],["acs","Math","break;case $."]],"culture-informatique.net":[["aopr","__eiPb"]],"curlynikki.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daddyhd.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","Adcash"]],"dads-banging-teens.com":[["aeld","getexoloader"],["acs","document.querySelectorAll","popMagic"]],"dailytruthreport.com":[["rmnt","script","/==undefined.*body/"]],"ddrmovies.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"decider.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/parentNode\\.removeChild|textContent=atob/"],["acs","atob","/parentNode\\.removeChild|textContent=atob/"]],"definitions.net":[["set","canRunAds","true"]],"descarga-animex.nl":[["aopw","adBlockDetected"]],"descargasok.org":[["acs","document.addEventListener","google_ad_client"]],"desktopsolution.org":[["noeval-if","/chp_?ad/"]],"dfiles.de":[["acs","decodeURI","decodeURIComponent"]],"dfilmizle.com":[["aopr","initPu"]],"dflinks.de":[["acs","JSON.parse","break;case $."]],"diaridegirona.cat":[["set","pr_okvalida","true"],["nostif","sub"]],"dicariguru.com":[["aopw","adBlockDetected"]],"direct-dl.de":[["nowoif"]],"dishedbykate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"disheye.com":[["no-fetch-if","googlesyndication"],["nano-sib","count","*"],["set","blurred","false"]],"displacedhousewife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diynatural.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"djqunjab.in":[["noeval-if","/chp_?ad/"]],"dl-protect1.de":[["acs","String.fromCharCode","/btoa|break/"]],"dododsondesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dooood.nl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"douploads.com":[["acs","$","show"],["ra","checked","input#chkIsAdd"]],"downloadtanku.org":[["noeval-if","/chp_?ad/"]],"drakecomic.de":[["set","checkAdBlocker","noopFunc"]],"dropmms.com":[["aeld","load","undefined"],["acs","document.onkeydown"]],"dubaitime.net":[["noeval-if","/chp_?ad/"]],"dz4soft.nl":[["noeval"],["aeld","load","2000"]],"easy-coin.it":[["acs","Math.random","banner"]],"eatplant-based.com":[["rmnt","script","/__adblocker|html-load/"]],"edumailfree.com":[["no-fetch-if","adsbygoogle"]],"einthusan.co.uk":[["no-xhr-if","/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"]],"elearning-cpge.com":[["noeval-if","/chp_?ad/"]],"eletronicabr.com":[["nostif","test","100"]],"emailnator.com":[["nostif","adsbygoogle"]],"embed.wcostream.com":[["remove-cookie","PHPSESSID"],["rmnt","script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"]],"embtaku.co.uk":[["acs","document.documentElement","break;case $."]],"emovies.es":[["acs","document.documentElement","break;case $."]],"emporda.info":[["set","pr_okvalida","true"],["nostif","sub"]],"enjoysharepoint.com":[["rmnt","script","/__adblocker|html-load/"]],"eppingforestguardian.co.uk":[["set","adLight","true"]],"erayforums.com":[["rmnt","script","html-load.com"]],"estrenosflix.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopw","adcashMacros"]],"eugenemakedraw.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"eveningsun.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"everythingairfryer.com":[["rmnt","script","/__adblocker|html-load/"]],"everythingmarina.com":[["rmnt","script","/__adblocker|html-load/"]],"evileaks.pl":[["acs","$","prompt"]],"exego.app":[["set","blurred","false"],["set","document.hasFocus","trueFunc"]],"explorecams.com":[["aeld","np.detect"],["no-fetch-if","ad-delivery"]],"extratorrent.fr":[["aopw","afStorage"],["nowoif"]],"fake-it.ws":[["set","adsLoadable","true"]],"fantasticyoungporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"faselhds.com":[["rmnt","script",";}}};break;case $."]],"fbgo.net":[["aopr","__Y"],["aopr","mm"]],"file-upload.de":[["nowoif"],["acs","document.getElementById","undefined"],["aopw","Fingerprint2"],["aopr","start"]],"filecloud.com.br":[["nowoif"]],"filecloud.nl":[["nowoif"]],"filedown.com":[["nowoif"]],"filester.org":[["acs","WebAssembly","atob"]],"fileszero.com":[["rmnt","script","destroyContent"]],"filma1.com":[["acs","parseInt","break;case $."]],"filmy.com":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"filmyzilla.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"flixtor.ru":[["acs","parseInt","break;case $."]],"flouronmyfingers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fmovies.fr":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"],["aopr","mm"],["set","console.clear","undefined"],["acs","document.write","innerWidth"]],"fojik.fr":[["rmnt","script","{delete window["]],"foodfolksandfun.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fordranger.net":[["rmnt","script","html-load.com"]],"fordraptorforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forestryjournal.co.uk":[["set","adLight","true"]],"forgee.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","click","window.open"]],"fox21news.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"foxfarmhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freelistenonline.com":[["set","fuckAdBlock._options.baitClass","null"]],"freewp.io":[["no-xhr-if","/^/"]],"fremdwort.de":[["nostif",".call(null)","10"]],"frugalyabundante.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ft.com":[["aopr","_sp_._networkListenerData"]],"fxporn69.co.uk":[["aeld","click","exopop"],["set","adblock","noopFunc"],["nostif","nextFunction","2000"]],"fxstreet.es":[["rmnt","script","html-load.com"]],"g6ownersclub.com":[["rmnt","script","html-load.com"]],"gadgetguideonline.com":[["aost","String.prototype.charCodeAt","ai_"]],"game.digitap.eu":[["aeld","/ADBLOCK|ADSENSE/"]],"gardenholic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gardenmyths.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gasserhotrods.com":[["rmnt","script","html-load.com"]],"gdplayer.de":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"getfreegames.net":[["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"getpaste.link":[["set","isAdBlockActive","false"]],"gipfelbuch.ch":[["nostif",".call(null)","10"]],"gjsabgs.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|popup|\\.onerror|WebAssembly/i"]],"gledaitv.de":[["set","scriptBlocked","false"],["set","blocked","false"],["set","testUrls","[]"],["aopr","Handlers"],["aopr","Settings"],["nostif","initializeAdblockDetection"],["acs","document.createElement","detection-bait"]],"glodls.pl":[["nowebrtc"],["rmnt","script","popLink"]],"gmx.ru":[["aeld","timeupdate"],["nostif","UABP"],["set","adBlockDetectionResult","undefined"]],"gnom-gnom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gntai.ru":[["aeld","click","popMagic"]],"gocast123.me":[["aeld","","break;case $."]],"godeacs.com":[["set","blockAdBlock","trueFunc"]],"goingconcern.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"golfcartgo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gomaainfo.com":[["acs","addEventListener","google_ad_client"]],"gomoviesc.es":[["nowoif"]],"gotxx.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["nostif","getComputedStyle","250"],["aost","Element.prototype.matches","litespeed"]],"grantorrent1.pl":[["aopr","getUrlParameter"],["aopw","Fingerprint2"],["acs","decodeURI","decodeURIComponent"]],"growfully.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"growingajeweledrose.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gsurl.co.uk":[["aeld","mousedown","preventDefault"]],"gtaboom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guardaserie.de":[["aeld","","/pop|_blank/"]],"guitaradvise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gunco.net":[["rmnt","script","html-load.com"]],"gutesexfilme.com":[["nostif","Adb"]],"h-flash.com":[["nowoif"]],"hadakanonude.com":[["noeval-if","/chp_?ad/"]],"hausgarten.net":[["nostif",".call(null)","10"]],"hb-nippon.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","html-load.com"]],"hdeuropix.com.br":[["aopr","AaDetector"],["aopr","LieDetector"],["popads-dummy"]],"hdfungamezz.org":[["rmnt","script",";}}};break;case $."]],"hdmoviehubs.net":[["acs","JSON.parse","break;case $."]],"hdmovies23.co.uk":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"hdss-to.de":[["acs","JSON.parse","break;case $."]],"healthygreenkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hecktictravels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"helmstedter-nachrichten.de":[["nostif",".call(null)","10"]],"hentai-cosplay-xxx.com":[["acs","document.querySelectorAll","popMagic"]],"hentai-senpai.org":[["acs","document.querySelectorAll","popMagic"]],"hentaihaven.com":[["acs","document.querySelectorAll","popMagic"],["no-fetch-if","www/delivery"]],"hentaihd.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["acs","globalThis","break;case"]],"hentaistream.com":[["aeld","load","script"],["noeval-if","popUnderStage"]],"heroichollywood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hideandseek.world":[["set","canRunAds","true"]],"hollymoviehd.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"hollymoviehd.com.br":[["acs","document.documentElement","break;case $."]],"hot-cartoon.com":[["aopr","BetterJsPop"]],"hotgirlhub.com":[["acs","document.querySelectorAll","popMagic"]],"hqq.org":[["aopr","adBlockDetected"],["set","sadbl","false"],["nowoif"],["set","adblockcheck","false"],["rmnt","script","self == top"]],"humorliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"i.pl":[["rmnt","script","admiral","excludes",",\\\""]],"iceporn.co.uk":[["nowoif"]],"idlelivelink.es":[["nano-sib"]],"idlixvip.co.uk":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"iframejav.de":[["nowoif"],["aopr","__Y"]],"ifreemagazines.com":[["aopr","ai_run_scripts"]],"ilgeniodellostreaming.com.br":[["acs","parseInt","break;case $."],["aopr","AaDetector"],["nowoif"]],"imgdew.co.uk":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"imgfrost.net":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"imgmaze.net":[["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopr","popjs.init"],["aopw","Fingerprint2"],["nowoif"]],"imgur.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["set","ADBLOCKED","false"],["set-cookie","WHITELISTED_CLOSED","1"],["set","Object.prototype.adsEnabled","false"]],"immotherofthebride.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"indeed.com":[["set","DD_RUM.addAction","noopFunc"]],"indojavstream.com":[["acs","document.createElement","pop_tag"],["nowoif","_blank"]],"infinityfree.com":[["rmnt","script","await eval"]],"influencersgonewild.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"infrafandub.com":[["noeval-if","/chp_?ad/"]],"inkapelis.co.uk":[["acs","setTimeout","aadblock"],["aopr","AaDetector"],["aopw","smrtSB"],["aopw","smrtSP"],["aopw","Fingerprint2"],["acs","decodeURI","decodeURIComponent"]],"insightcentral.net":[["rmnt","script","html-load.com"]],"instagram.com":[["json-prune","data.xdt_injected_story_units.ad_media_items"]],"intelligence-console.com":[["noeval-if","/chp_?ad/"]],"jamhands.net":[["rmnt","script","/__adblocker|html-load/"]],"jav-noni.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javbee.nl":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"jayscentre.com":[["rmnt","script","/__adblocker|html-load/"]],"jefferycontrolmodel.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jerseydigs.com":[["rmnt","script","/__adblocker|html-load/"]],"jeshoots.com":[["set","google_jobrunner","true"]],"joolinks.fr":[["acs","parseInt","break;case $."]],"jpg.fishing":[["acs","document.querySelectorAll","popMagic"]],"juliewomanwish.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"kagane.fr":[["nowoif"]],"kashtanka.com":[["aopr","exoJsPop101"]],"katfile.com":[["nowoif"],["aeld","click","open"],["nano-stb","tick"],["nostif","/adblock/i"],["set-cookie","ads","10"],["set","download_click","true"],["rmnt","script","name="]],"kckingdom.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"keepinspiring.me":[["rmnt","script","/__adblocker|html-load/"]],"kellythekitchenkop.com":[["rmnt","script","/__adblocker|html-load/"]],"keroseed.de":[["noeval-if","/chp_?ad/"]],"keviniscooking.com":[["rmnt","script","/__adblocker|html-load/"]],"khatrimazafull.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"],["aopr","LieDetector"]],"kiddingaroundcolumbia.com":[["rmnt","script","/__adblocker|html-load/"]],"kingshotguides.com":[["rmnt","script","/__adblocker|html-load/"]],"kinoger.it":[["aopr","__Y"],["nowoif"],["acs","document.documentElement","break;case $."]],"kiss-anime.org":[["nowebrtc"],["acs","JSON.parse","break;case $."]],"kissasian.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"kitraskimisi.com":[["nowoif"]],"kkickass.net":[["aeld","","break;case $."],["aopw","ospen"]],"klaustube.com":[["aopr","document.dispatchEvent"]],"kollhong.com":[["aopr","adBlockDetected"]],"kontenterabox.com":[["noeval-if","adsbygoogle"]],"krem.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"laksa19.github.io":[["aost","console.log","/blob|injectedScript/"],["set","ASSetCookieAds","null"],["nostif","0x"]],"lancashiretelegraph.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"lanjutkeun.org":[["aeld","load","2000"]],"lbprate.com":[["acs","Math.imul"]],"lcarecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"leaguefeed.net":[["rmnt","script","/__adblocker|html-load/"]],"leagueofgraphs.com":[["rmnt","script","/__adblocker|html-load/"],["nostif","adblock"]],"lewdstars.com":[["acs","document.querySelectorAll","popMagic"]],"lifeline.de":[["nostif",".call(null)","10"]],"ling-online.com.br":[["acs","document.documentElement","break;case $."]],"link1s.com":[["aopr","app_vars.force_disable_adblock"],["aopr","open"],["set","blurred","false"],["noeval-if","/chp_?ad/"]],"linkfly.it":[["set","blurred","false"]],"linksmore.com.br":[["acs","JSON.parse","break;case $."]],"linkz.nl":[["rmnt","script","{delete window["],["noeval-if","/chp_?ad/"],["nowoif"]],"livehere.com.br":[["nowebrtc"]],"liverpoolworld.uk":[["rmnt","script","await eval"]],"livetvon.com.br":[["aeld","","break;case $."],["aopw","u_cfg"]],"livetvon.net":[["aeld","","break;case $."],["aopw","u_cfg"]],"lizmarieblog.com":[["rmnt","script","/__adblocker|html-load/"]],"lulust.com":[["rmnt","script","/HTMLAllCollection|popundersPerIP|referrerPolicy|WebAssembly/"],["acs","WebAssembly","Promise"],["acs","document.write","unescape"],["rmnt","script","/detect/i"]],"luv2garden.com":[["rmnt","script","/__adblocker|html-load/"]],"m4u.com":[["noeval-if","/chp_?ad/"],["nowoif"]],"m4ufree.de":[["nostif","debugger"],["nowebrtc"],["aopr","mm"],["aopr","BetterJsPop"]],"mafiatown.pl":[["rmnt","script","AreLoaded"]],"magesy.org":[["acs","document.createElement","admiral"]],"mahobeachcam.com":[["nostif","innerHTML"]],"makeanddocrew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"makenstitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangakoma01.fr":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"mangovideo.nl":[["acs","document.createElement","script"],["set","flashvars.popunder_url",""],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"mangovideo.pl":[["acs","document.createElement","script"],["set","flashvars.popunder_url",""],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"marvelsnap.pro":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maxgaming.fi":[["aeld","contextmenu"]],"meetmeindepartures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"megafilmeshd20.com":[["acs","JSON.parse","break;case $."]],"mejortorrento.pl":[["nowebrtc"],["aeld","click","popMagic"]],"mejortorrents1.ru":[["nowebrtc"],["aeld","click","popMagic"]],"mexa.pl":[["acs","document.getElementById","adblockinfo"],["nowoif"]],"micmicidol.pl":[["acs","document.querySelectorAll","popMagic"]],"midwesternhomelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miiixdrop.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"miixdrop.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"],["acs","addEventListener","adserverDomain"]],"mirrorace.ru":[["aopr","AaDetector"],["aeld","click","_0x"],["popads-dummy"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"misshomemade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mitedrive.com":[["nano-sib"],["nowoif"]],"mixdroop.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"mlfbd.co.uk":[["acs","EventTarget.prototype.addEventListener","delete window"]],"mlsbd.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."]],"modcombo.com":[["nano-sib"]],"moflix-stream.pl":[["nostif","affiliate"],["nostif","afterOpen"]],"mojomojo-licarca.com":[["rmnt","script","html-load.com"]],"moneywar2.blogspot.com":[["acs","addEventListener","google_ad_client"]],"morningchores.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motorbikecatalog.com":[["nostif","loader.min.js"],["rmnt","script","error-report.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script",",window]"],["rmnt","script","html-load.com"]],"movidy.nl":[["nowoif"]],"moviefreak.nl":[["acs","parseInt","break;case $."]],"moviegan.com":[["no-xhr-if","ads"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"movierulz.pl":[["nowoif"],["aeld","","break;case $."]],"movierulz2free.com":[["nowoif"]],"movierulzfree.co.uk":[["nowoif"]],"movierulzhd.co.uk":[["acs","JSON.parse","break;case $."],["acs","document.getElementById","adsBlocked"],["aost","document.createElement","/(?=^(?!.*(http)))/"]],"movierulzs.ru":[["nowoif"]],"movierulzz.ru":[["nowoif"]],"movies2watch.net":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"movies4me.net":[["acs","Math","break;case $."]],"moviescounter.net":[["aopr","LieDetector"],["aeld","","_0x"],["acs","JSON.parse","break;case $."]],"moviesmod.net":[["nowoif"]],"moviesnipipay.me":[["noeval-if","/chp_?ad/"]],"moviesonlinefree.net":[["rmnt","script","_0x"],["nowoif"]],"moviesrulz.ru":[["nowoif"],["acs","document.documentElement","break;case $."]],"moviessources.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","devtoolschange"],["aopr","console.clear"]],"movieuniverse.nl":[["acs","document.documentElement","break;case $."]],"moviezwap.nl":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"movisubmalay.nl":[["aopr","glxopen"],["aopr","exoJsPop101"]],"mp3guild.es":[["aopw","Fingerprint2"]],"mp3juice.pl":[["nowoif"]],"mp3juices.pl":[["aost","Math.random","computed"],["nowoif"]],"mp4upload.com":[["aopw","adcashMacros"],["aopr","Adcash"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"mrpiracy.nl":[["acs","document.getElementById","deleted"],["aopr","LieDetector"],["nowoif"]],"mtgsalvation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"multiup.eu":[["nosiif",".submit"]],"myaudiq5.com":[["rmnt","script","html-load.com"]],"mydownloadtube.org":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"myflixer.com":[["rmnt","script","{delete window["]],"myproplugins.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"mywatchseries.co.uk":[["nowebrtc"],["acs","document.querySelectorAll","popMagic"],["acs","EventTarget.prototype.addEventListener","delete window"]],"mz-web.de":[["acs","document.createElement","document.head.appendChild"],["nostif",".call(null)","10"]],"naasongs.com.br":[["acs","JSON.parse","break;case $."]],"naasongs.ru":[["acs","JSON.parse","break;case $."]],"naruldonghua.com":[["noeval-if","adsbygoogle"]],"nbabite.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"nedandmimi.com":[["rmnt","script","/__adblocker|html-load/"]],"nekopoi.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"],["acs","atob","tabunder"],["aeld","","adsense"]],"newportri.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"newsweek.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"nflstream.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"nft-media.net":[["rmnt","script","leave_recommend"]],"nhentai.es":[["acs","document.querySelectorAll","popMagic"]],"nhl66.ir":[["nowoif"]],"njwildlifecam.com":[["nostif","innerHTML"]],"noblocktape.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","JSON","break;case"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"noblocktape.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","JSON","break;case"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"noblocktape.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","JSON","break;case"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"note.sieuthuthuat.com":[["set","isAdBlockActive","false"]],"notunmovie.org":[["nowoif","!notunmovie"]],"novablogitalia.ru":[["aeld","load","nextFunction"]],"novaratoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"nudeslegion.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["noeval-if","/chp_?ad/"]],"nxbrew.net":[["rmnt","script","/adb/i"]],"ohmybrush.com":[["set","ads_blocked","false"]],"okanime.it":[["acs","$","getElementById"],["nowebrtc"],["nowoif"],["acs","parseInt","break;case $."]],"oklahoman.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"onohawaiianrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"onpenang.com":[["rmnt","script","/__adblocker|html-load/"]],"onvid.com.br":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"oploverz.ru":[["acs","JSON.parse","break;case $."],["acs","$","popup"],["nostif","popup"]],"opvid.nl":[["nowoif"]],"ourbestbites.com":[["rmnt","script","/__adblocker|html-load/"]],"oyohd.de":[["nowoif"]],"packinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pandafreegames.co.uk":[["nostif","adFilled","2500"]],"pandafreegames.com":[["nostif","adFilled","2500"]],"pandamovie.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"patriotledger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pctnew.es":[["acs","I833"],["aopr","AaDetector"],["aopr","TID"],["aopw","adcashMacros"],["nowoif","!/download\\/|link/"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"pelisflix20.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"]],"pelispedia24.nl":[["nowoif"],["ra","href","a#clickfakeplayer"]],"pelisplus.nl":[["aopr","AaDetector"],["aopw","adcashMacros"],["aopw","smrtSP"],["aopw","smrtSB"],["nowoif"],["ra","href","#opfk"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"]],"pelisplus2.de":[["acs","document.getElementsByTagName","onclick"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"]],"pelisplusxd.nl":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"pepar.net":[["noeval-if","/chp_?ad/"]],"perfectgirls.de":[["acs","ExoLoader"],["aopw","ads_priv"],["noeval"],["acs","document.querySelectorAll","popMagic"]],"personalityhunt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"personalityunleashed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"physicsread.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pianmanga.com":[["acs","document.querySelectorAll","popMagic"]],"pianmanga.es":[["acs","document.querySelectorAll","popMagic"]],"pisces-horoscopes.com":[["nostif","displayMessage","2000"]],"playfmovies.de":[["nowoif"]],"pletaura.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plusupload.com":[["acs","Math","break;case $."]],"pobre.it":[["no-fetch-if","ads"],["nowoif"]],"pocketbikeplanet.com":[["rmnt","script","html-load.com"]],"polestar-forum.com":[["rmnt","script","html-load.com"]],"poradyiwskazowki.pl":[["rmnt","script","await eval"]],"porncomics.de":[["acs","document.querySelectorAll","popMagic"]],"pornhd8k.nl":[["acs","document.querySelectorAll","popMagic"]],"pornhoarder.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/wpadmngr|adserverDomain/"]],"pornhub.com.br":[["rmnt","script","/\\/interstitial\\?|\\\\x/"],["nostif","adsbytrafficjunkycontext"],["acs","Object.defineProperty","trafficjunky"],["nowoif","ads"],["set","page_params.holiday_promo","true"],["set","abp1","1"]],"pornid.es":[["aopr","decodeURI"]],"pornobengala.com":[["aopr","open"]],"pornocomics.fr":[["aeld","","pop"]],"porntin.com":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"portevergladeswebcam.com":[["nostif","innerHTML"]],"povvldeo.es":[["aopw","Fingerprint2"],["nowoif"]],"powvdeo.net":[["nowoif"]],"powvibeo.net":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"powvideo.ru":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"prbay.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"r18.best":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"radio.at":[["nostif",".call(null)","10"]],"ran.de":[["nostif",".call(null)","10"]],"rank1-media.com":[["rmnt","#text","スポンサードリンク"]],"raskakcija.lt":[["rmnt","script","html-load.com"]],"redecanais.com.br":[["rmnt","script",";}}};break;case $."],["aeld","click","_0x"],["aopr","__Y"],["aopr","ConsoleBan"],["aopr","disableDevtool"],["aopr","ondevtoolopen"],["aopr","onkeydown"],["aopr","window.location.href"],["aopr","window.history.back"],["set","DisableDevtool","undefined"]],"repelisxd.nl":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"restlessbackpacker.com":[["rmnt","script","/__adblocker|html-load/"]],"rnbxclusive0.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rnbxclusive1.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rocketcitynow.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"rootsandradishes.com":[["rmnt","script","/__adblocker|html-load/"]],"rophimz.pl":[["set-session-storage-item","ads-clicked-under-last-click","11"]],"runeterrafire.com":[["rmnt","script","/__adblocker|html-load/"]],"rytmp3.io":[["aeld","","break;case $."]],"safego.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"salidzini.lv":[["nostif","media_place_list"]],"samdoesherbest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"samrudhiglobal.com":[["noeval-if","/chp_?ad/"]],"sarahfit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sarkarinaukry.com":[["aost","String.prototype.charCodeAt","ai_"]],"satkurier.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["no-fetch-if","ads"],["nostif","/getComputedStyle|bait/"],["set","AController_3","noopFunc"],["rmnt","script","assets/check"]],"savelinks.co.uk":[["aopr","LieDetector"],["nowoif"],["aeld","DOMContentLoaded","window.open"]],"scotchandscones.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"segwayforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"serengo.net":[["nostif","checkPub","6000"]],"seriemega.de":[["nowoif"]],"seriesflixhd.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"seuseriado.co.uk":[["acs","Math","break;case $."]],"sfastwish.com":[["aopr","__Y"]],"sfat4582testa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shahid4u1.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"shahid4u1.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sharedrive.de":[["nowoif"]],"sharksider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharphindi.in":[["noeval-if","/chp_?ad/"]],"shemalez.org":[["rmnt","script","/_plBtn|__native_l|_offerwalls/"]],"shid4u.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"shortearn.it":[["aopr","AaDetector"],["aopr","open"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","/btoa|break/"]],"shortix.co":[["rmnt","script","onerror"]],"showrovblog.com":[["noeval-if","/chp_?ad/"]],"simulatormods.com":[["acs","eval","replace"]],"singingdalong.de":[["aeld","load","2000"]],"skidrowcpy.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"skymovieshd.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","navigator","break;case $."]],"slreamplay.it":[["nano-stb","grecaptcha.ready","*"],["nowoif"]],"smalltownwoman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sms24.org":[["aost","$ado","/ado/i"],["aost","document.createElement","app.js"]],"snapinsta.to":[["rmnt","style",".modal-content"]],"snappygourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sniperforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sociallyindian.com":[["noeval-if","/chp_?ad/"]],"sofwaremania.blogspot.com":[["nano-stb"]],"solarmovies.com":[["aeld","","break;case $."]],"solomax-levelnewbie.co.uk":[["acs","document.querySelectorAll","popMagic"]],"solomaxlevelnewbie.net":[["acs","document.querySelectorAll","popMagic"]],"sound-park.it":[["acs","$","open"],["acs","document.createElement","script"]],"space.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"spiritword.net":[["acs","document.createElement","script"]],"spoiledmaltese.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sports24.fr":[["acs","String.fromCharCode","/btoa|break/"]],"sportsembed.de":[["acs","setTimeout","admc"]],"sportsloverz.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","popundersPerIP"]],"ssdhostting.com":[["no-xhr-if","googlesyndication"]],"ssrfanatic.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stapewithadblock.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","navigator","break;case $."]],"starmusiq.ru":[["nowebrtc"],["set","isAdBlockActive","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"startseite.to":[["nowebrtc"]],"streamadblocker.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["acs","setTimeout","admc"]],"streamblasters.es":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["]],"streamonsport99.pl":[["acs","document.documentElement","break;case $."]],"streamoupload.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamwish.net":[["set","xRds","true"],["set","cRAds","false"],["aopr","__Y"]],"strikeout.com.br":[["nowoif","|"],["acs","setTimeout","admc"],["acs","String.fromCharCode","shift"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","{delete window["]],"striptube.net":[["aopr","loadTool"]],"strtapeadblock.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"strtapewithadblock.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["nowoif"],["aopr","Adcash"]],"sturgisjournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"sulasok.fr":[["acs","Date.now","shouldRun"]],"super.cz":[["rmnt","script","/AdTop|customElements/"]],"sustainlifejournal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"svetserialu.ru":[["rmnt","script","/detect/i"]],"tamilfreemp3songs.nl":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"tamilprint29.nl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"tapenoads.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"tcrossforums.co.uk":[["rmnt","script","html-load.com"]],"teamos.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"techforu.in":[["noeval-if","/chp_?ad/"]],"techieway.blogspot.com":[["acs","addEventListener","AdBlock"]],"teleriumtv.de":[["nowoif"]],"territorysupply.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tf1.fr":[["no-fetch-if","adsafeprotected"]],"thatgirlcookshealthy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theallergychef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecalifornian.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thecontentauthority.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefightingcock.co.uk":[["noeval-if","decodeURIComponent(atob"]],"thegreekfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theharperhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelibrarydigital.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"themodestman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theoi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theolympian.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"thepewterplank.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"thephotoforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theproxy.net":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"],["nowoif"],["aopr","_wm"]],"therecordherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thesugarfreediva.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesuperdownload.fr":[["acs","JSON.parse","break;case $."]],"theyarncrew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tichyseinblick.de":[["nostif",".call(null)","10"]],"tik-tok.porn":[["aeld","click","clkUnder"],["set","adsArr","{}"]],"todaypk.org":[["acs","document.documentElement","break;case $."],["nowoif"]],"tokoasrimotedanpayet.my.id":[["noeval-if","/chp_?ad/"]],"toonanime.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["aeld","","break;case $."]],"topdogtips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"totalsportek1000.com":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"trailvoy.com":[["rmnt","script","html-load.com"]],"transexuales.gratis":[["acs","document.querySelectorAll","popMagic"]],"travelingwithjessica.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trx450r.org":[["rmnt","script","html-load.com"]],"tsubasa.im":[["nostif","location.href","10000"]],"tsxclub.com":[["rmnt","script","html-load.com"]],"turbogvideos.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"turboimagehost.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"turkish123.com":[["acs","parseInt","break;case $."]],"tutelehd.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","setTimeout","admc"]],"tvhay.co.uk":[["set","vidorev_jav_plugin_video_ads_object","{}"],["set","vidorev_jav_plugin_video_ads_object_post","{}"]],"twokooksinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"uconnhuskies.com":[["set","blockAdBlock","trueFunc"]],"uglyducklinghouse.com":[["rmnt","script","/__adblocker|html-load/"]],"uhdmovies.com":[["nowoif"]],"unblocknow.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uploadev.es":[["nowoif"],["set","openInNewTab","noopFunc"],["acs","Math","zfgloaded"]],"uploadev.org":[["nowoif"],["set","openInNewTab","noopFunc"],["acs","Math","zfgloaded"]],"uploadhub.de":[["acs","document.documentElement","break;case $."],["nowoif"],["no-fetch-if","adsbygoogle"],["nostif","location.href","1000"]],"uproxy2.fr":[["aost","Math.floor",""]],"uproxy2.org":[["aost","Math.floor",""]],"urlcero.co.uk":[["aopr","open"],["nostif","checkAdblockUser","1000"]],"usethinkscript.com":[["rmnt","script","/__adblocker|html-load/"]],"vanime.com.br":[["acs","parseInt","break;case $."],["acs","JSON.parse","Promise"]],"vedbam.de":[["acs","navigator","break;case $."]],"vedbom.co.uk":[["acs","JSON.parse","break;case $."]],"vegamovie.org":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"vegamovie.pl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"vegamovies4u.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"veganwins.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"vexmoviex.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"vibestreams.net":[["rmnt","script","adserverDomain"],["nowoif","_blank"],["aeld","click","popunder"]],"vibrantlygfree.com":[["rmnt","script","/__adblocker|html-load/"]],"vidfast.es":[["acs","atob","/popundersPerIP[\\s\\S]*?Date[\\s\\S]*?getElementsByTagName[\\s\\S]*?insertBefore/"],["acs","addEventListener","HTMLAllCollection"]],"vido.es":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"vidop.com.br":[["aeld","/^(?:click|mousedown|mouseup)$/","di()"],["set","console.clear","trueFunc"],["nowoif"]],"vidup.com":[["set","console.clear","trueFunc"],["nowoif","/^/","1"]],"visagrader.com":[["rmnt","script","/__adblocker|html-load/"]],"vivcrochets.com":[["rmnt","script","/__adblocker|html-load/"]],"voirfilms.co.uk":[["aopw","smrtSB"],["nowoif"],["acs","atob","decodeURIComponent"]],"voirfilms.nl":[["aopw","smrtSB"],["nowoif"],["acs","atob","decodeURIComponent"]],"voirfilms.pl":[["aopw","smrtSB"],["nowoif"],["acs","atob","decodeURIComponent"]],"volokit2.com":[["json-prune","*","*.adserverDomain"],["rmnt","script","/adserverDomain|\\);break;case /"],["aopr","Adcash"]],"voyeurhit.com":[["acs","adver"]],"vtlinks.com":[["nowoif"]],"vudeo.net":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"vumoo.com.br":[["rmnt","script",";}}};break;case $."]],"vwatlasforum.com":[["rmnt","script","html-load.com"]],"watchcartoononline.fr":[["acs","document.documentElement","break;case $."],["nofab"],["acs","document.createElement","jsc.mgid.com"]],"watchfree.com.br":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"watchmovies.com":[["acs","document.documentElement","break;case $."]],"watchporninpublic.com":[["acs","document.querySelectorAll","popMagic"]],"watchsite.net":[["aopr","open"]],"wealthup.com":[["rmnt","script","/__adblocker|html-load/"]],"wearesunderland.com":[["set","adLight","true"]],"web2.0calc.com.br":[["aopr","doads"]],"webmaal.pl":[["set","univresalP","noopFunc"]],"weightofstuff.com":[["rmnt","script","/__adblocker|html-load/"]],"weihnachts-filme.com":[["nostif",".call(null)","10"]],"wheatbythewayside.com":[["rmnt","script","/__adblocker|html-load/"]],"wikiofthrones.com":[["rmnt","script","/__adblocker|html-load/"]],"winporn.fr":[["nowoif"]],"winporn.it":[["nowoif"]],"worldsports.co.uk":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"worldsports.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"wp.solar":[["noeval-if","/chp_?ad/"]],"wristreview.com":[["aopw","ai_front"]],"xhamster13.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster42.es":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster7.pl":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster8.fr":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmateur.com":[["set","flashvars.protect_block",""],["set","flashvars.popunder_url",""],["set","flashvars.video_click_url",""],["aopr","adConfig"]],"xnxxjapon.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xprime4u.com":[["noeval-if","/chp_?ad/"],["nowoif"]],"xvideos.org":[["aeld","DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["set","xv.sda.pp.init","noopFunc"],["set","xv.conf.dyn.ads","undefined"],["set","xv.conf.dyn.excld","undefined"],["rmnt","script","html5player.enableVideoPreRollAds"]],"xxnx.com":[["aopr","exoJsPop101"]],"xxxfiles.co.uk":[["acs","document.querySelectorAll","popMagic"]],"xxxmovies.co.uk":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxpussyclips.com":[["aopr","popit"],["aeld","popstate","noPop"]],"yanksgoyard.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"youporn.pl":[["set","page_params.holiday_promo","true"]],"youtubetomp3.co.uk":[["nowoif"]],"youtubetomp3.pl":[["nowoif"]],"ytc.pl":[["nowoif"]],"ytsaver.net":[["acs","JSON.parse","break;case $."]],"ytube2dl.com":[["aeld","","pop"]],"yummyhealthyeasy.com":[["rmnt","script","/__adblocker|html-load/"]],"yunjiema.top":[["rmnt","script","adb"]],"z12z0vla.net":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
