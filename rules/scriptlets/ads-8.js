/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0l23movies.co.uk":[["aopr","rid"]],"1111fullwise.co.uk":[["acs","JSON.parse","break;case $."]],"1111fullwise.de":[["acs","JSON.parse","break;case $."]],"123moviesc.pl":[["aopr","mm"],["acs","JSON.parse","break;case $."]],"123moviesfree.it":[["nowoif"],["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."]],"123moviesonline.com":[["acs","navigator","break;case $."]],"123movieweb.co.uk":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"1337x.ninjaproxy1.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowebrtc"],["nostif","location.href"]],"18asiantube.com":[["aopr","document.dispatchEvent"]],"18comic-gquu.vip":[["acs","WebAssembly","atob"]],"240sxforums.com":[["rmnt","script","html-load.com"]],"2gomovies.net":[["acs","JSON.parse","break;case $."]],"3gpterbaru.com":[["noeval-if","/chp_?ad/"]],"4filmyzilla.org":[["acs","JSON.parse","break;case $."]],"4pics1-word.com":[["rmnt","script","/__adblocker|html-load/"]],"5thramforum.com":[["rmnt","script","html-load.com"]],"5xmovies.ru":[["acs","parseInt","break;case $."]],"720pflix.pl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"720pstream.it":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."],["nowoif"],["nostif","admc"],["rmnt","script","adserverDomain"]],"7daystodie-servers.com":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"8muses.xxx":[["acs","document.querySelectorAll","popMagic"]],"aberdeennews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"abseits-ka.de":[["nostif",".call(null)","10"]],"adblockplustape.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"adblockstrtape.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"adblocktape.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nano-stb","counter"],["nowoif"]],"ads-ti9ni4.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"adshort.com.br":[["aopw","Fingerprint2"],["nowoif"],["set","blurred","false"],["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"adshort.fr":[["aopw","Fingerprint2"],["nowoif"],["set","blurred","false"],["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"afasiaarchzine.com":[["nosiif","visibility","1000"]],"africatwinforum.com":[["rmnt","script","html-load.com"]],"afrodity.sk":[["acs","document.createElement","script"]],"ahmedmode.fr":[["nostif","show"]],"ahri8.pl":[["acs","document.querySelectorAll","popMagic"]],"akirabox.com":[["aeld","DOMContentLoaded","open"],["nowoif","_blank"],["acs","setTimeout","decodeURIComponent(escape"],["rmnt","script","(function(","excludes","document"],["aeld","click",".href"],["rmnt","script","/var lw=\\(\\[\\]\\+!\\[\\]\\)/"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"alexsportz.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"algodaodocescan.com.br":[["acs","document.querySelectorAll","popMagic"],["acs","document.documentElement","break;case $."],["noeval-if","/chp_?ad/"]],"althub.club":[["rmnt","script","Adblock"]],"animesanka.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"animesup.pl":[["acs","parseInt","break;case $."]],"animesvision.com.br":[["acs","Math","zfgloaded"]],"animetak.co.uk":[["acs","JSON.parse","break;case $."]],"animixplay.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"anisubindo.nl":[["aeld","load","nextFunction"]],"anxcinema.org":[["ra","href","#clickfakeplayer"],["aopr","__Y"]],"arabseed.de":[["aeld","","_0x"],["acs","Promise","break;case $."]],"arenascan.com":[["aost","document.getElementById","adsBlocked"]],"areweranked.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arolinks.com":[["nostif","location.href"],["set","blurred","false"]],"asianplay.net":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"asiansexcilps.com":[["aopr","popit"],["aeld","popstate","noPop"]],"astonmartinlife.com":[["rmnt","script","html-load.com"]],"asyaanimeleri.pw":[["nowoif","!asyaanimeleri."],["set-cookie","popcounter","2"]],"atomohd.nl":[["nowoif","!atomtt"],["acs","setTimeout","admc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"atresplayer.com":[["nano-stb","[native code]","5000"],["no-fetch-if","doubleclick"]],"audiolgy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"azsoft.pl":[["aopr","SMart1"],["noeval-if","chp_ad"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"]],"babla.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"bcfishingreports.com":[["rmnt","script","html-load.com"]],"beamng.wesupply.cx":[["set","importFAB","undefined"]],"bearfoottheory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beesandroses.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beinmatch.fit":[["rmnt","script","{delete window["]],"bestreamsports.org":[["rmnt","script","/eval|adb/i"]],"bigbuttshub2.top":[["no-fetch-if","widgets.outbrain.com"],["no-fetch-if","mode:no-cors"]],"biggestuscities.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bigtitsxxxsex.com":[["aopr","ALoader"],["nowoif"],["noeval"]],"bitesofwellness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluearchive.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluemediafiles.net":[["aopr","open"],["nano-sib","i--"],["set","Time_Start","0"]],"bluemedialink.de":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bolly4umovies.com.br":[["aopr","zfgformats"],["acs","Math","XMLHttpRequest"]],"bollywoodfilma.nl":[["acs","JSON.parse","break;case $."]],"bowerpowerblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brbushare.es":[["acs","navigator","break;case $."]],"btv.bg":[["no-xhr-if","googlesyndication"],["no-fetch-if","googlesyndication"]],"buffstreams.app":[["rmnt","script","adserverDomain"]],"bunnymuffins.lol":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"celebsuburb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"centredaily.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"chapteria.com":[["acs","document.createElement","ignielAdBlock"]],"chicoer.com":[["nostif","n.trigger","1"],["set","CnnXt.Event.fire","noopFunc"]],"cineb.gg":[["acs","addEventListener","HTMLAllCollection"]],"cinen9.co.uk":[["acs","Math","break;case $."]],"claimsatoshi.xyz":[["acs","document.createElement","adsBlocked"]],"clashdaddy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cloudvideotv.ru":[["nowoif"],["aopr","localStorage"],["rmnt","script",";}}};break;case $."],["acs","JSON","break;case"],["rmnt","script","FingerprintJS"]],"club3g.com":[["rmnt","script","html-load.com"]],"codeastro.com":[["noeval-if","/chp_?ad/"]],"codesnail.com":[["nostif","css_class.show"]],"compilationtube.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"connoisseurusveg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithparita.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cornwalllife.co.uk":[["set","adLight","true"]],"costcoinsider.com":[["rmnt","script","()=>eval"]],"countryrebel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"countryroadssourdough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cr7-soccer.store":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"cricfree.org":[["aeld","","break;case $."],["aopr","afScript"]],"crm.urlwebsite.com":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com|googlesyndication|pubadx/","{\"type\": \"cors\"}"],["nowoif","_blank"],["nano-sib","/.?/","*"],["nano-stb","/.?/","*"]],"cucinabyelena.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cuevana3.fr":[["aopr","S9tt"],["aopr","decodeURI"],["aopw","popUpUrl"],["acs","Math","break;case $."]],"cyberleaks.fr":[["nowoif"]],"cybertrucktalk.com":[["rmnt","script","html-load.com"]],"daddyhd.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","Adcash"]],"daddylive.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["rmnt","script","/adserverDomain|\\);break;case /"],["aopr","AaDetector"],["aopr","require"],["nowebrtc"],["aopw","afStorage"],["nowoif"]],"dadsguidetowdw.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dbna.de":[["nostif",".call(null)","10"]],"ddlvalley.net":[["acs","decodeURI","getScriptFromCss"],["aopw","Fingerprint2"]],"desicinemas.pk":[["acs","EventTarget.prototype.addEventListener","delete window"]],"desiflix.it":[["nowoif"]],"devlib.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"direct-cloud.fr":[["acs","document.documentElement","break;case $."]],"dirproxy.com":[["aeld","","break;case $."],["aost","Math",""],["nowoif"]],"discordfastfood.com":[["nostif","clientHeight"]],"divxtotal.de":[["acs","jQuery","btoa"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dl-protect.pl":[["acs","String.fromCharCode","/btoa|break/"],["nowoif"]],"dogecoin.pl":[["acs","Math","break;case $."],["aopr","app_vars.force_disable_adblock"]],"dogtrainingadvicetips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doodss.org":[["nowoif"]],"doodstream.nl":[["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"doood.net":[["nowoif"]],"doooood.de":[["nowoif"]],"dramamate.fr":[["nowebrtc"]],"drpsychmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dsharer.com":[["aopr","showada"]],"ducatimonster.org":[["rmnt","script","html-load.com"]],"dutchycorp.ru":[["acs","eval","replace"],["nano-sib","time.html","1000"],["set","blurred","false"],["rmnt","script","/adblock.php"]],"dziennikbaltycki.pl":[["aeld","","show"]],"earncash.ru":[["aopr","app_vars.force_disable_adblock"]],"easyweeknightrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"eatdrinkpure.com":[["rmnt","script","/__adblocker|html-load/"]],"electricmotorcyclesforum.com":[["rmnt","script","html-load.com"]],"elektrobike-online.com":[["nostif",".call(null)","10"]],"elixx.fr":[["aopr","AdservingModule"],["aopr","LieDetector"],["aopw","I833"],["json-prune","urls","urls.0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"elixx.nl":[["aopr","AdservingModule"],["aopr","LieDetector"],["aopw","I833"],["json-prune","urls","urls.0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"elrefugiodelpirata.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"embed.st":[["rmnt","script","adserverDomain"]],"embedmoon.pl":[["nowoif"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"]],"embedsports.top":[["aopr","Adcash"],["acs","navigator","FingerprintJS"]],"emiraforum.com":[["rmnt","script","/__adblocker|html-load/"]],"emovies.pl":[["acs","document.documentElement","break;case $."]],"emulatorgames.net":[["nano-sib","","","0.3"],["nano-stb","","7000","0"]],"enjoy4k.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"enjoy4k.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"enryumanga.com":[["noeval-if","/chp_?ad/"]],"eplayvid.it":[["acs","parseInt","break;case $."]],"esportstales.com":[["rmnt","script","/__adblocker|html-load/"],["aeld","DOMContentLoaded","detect"]],"ettv.pl":[["nowoif"],["aopr","AaDetector"]],"eveningnews24.co.uk":[["set","adLight","true"]],"everydaythrifty.com":[["rmnt","script","/__adblocker|html-load/"]],"f1stream.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"f2movies.fr":[["aopr","AaDetector"]],"fakeginger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fap.bar":[["set-cookie","popunder","1"]],"fapnado.de":[["acs","Math.floor","ExoLoader"]],"faselhd-watch.net":[["acs","document.documentElement","break;case $."]],"fast-dl.com":[["nowoif"]],"fbgo.co.uk":[["aopr","__Y"],["aopr","mm"]],"fifaultimateteam.it":[["aost","Math","inlineScript"],["nowoif"]],"filesq.net":[["nowoif","_blank"]],"filester.nl":[["acs","WebAssembly","atob"]],"filmlinks4u.pl":[["aeld","","break;case $."]],"filmweb.pl":[["rmnt","script","window.open"],["rc","rodo","body.rodo"],["set","rodo.checkIsDidomiConsent","noopFunc"],["rmnt","script","Ads"]],"filmydown.ru":[["nowoif"]],"filmygod.ru":[["acs","document.documentElement","break;case $."]],"filmygod6.de":[["nowoif"]],"findav.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"findporn.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"finfang.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"fiskerbuzz.com":[["rmnt","script","html-load.com"]],"flix-wave.pl":[["rmnt","script","adserverDomain"]],"flixhub.co":[["nowoif","!notunmovie"]],"foodess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodrenegade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodxor.com":[["no-fetch-if","googlesyndication"]],"foumovies.fr":[["aopw","decodeURIComponent"],["acs","JSON.parse","break;case $."]],"fox59.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"foxestalk.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freecoursesonline.com":[["aeld","load","nextFunction"]],"freeiphone.fr":[["acs","decodeURIComponent","ai_"],["aost","Math","ai_"]],"freemagazines.top":[["aopr","b2a"],["nostif","showModal"],["acs","eval","replace"],["rmnt","script",".offsetParent"],["no-xhr-if","/doubleclick|googlesyndication/"],["aeld","DOMContentLoaded","/atob|overlay/"]],"freetvsports.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"french-stream.com.br":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fullreal.org":[["acs","JSON.parse","break;case $."]],"funkyjunkinteriors.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamecopyworld.net":[["acs","document.createElement","Tool"]],"games.sacbee.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.sanluisobispo.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gameswelt.org":[["nostif",".call(null)","10"]],"gameswelt.ru":[["nostif",".call(null)","10"]],"gametter.com":[["acs","document.addEventListener","google_ad_client"]],"gay4porn.com":[["acs","document.querySelectorAll","popMagic"],["set","flashvars.adv_start_html",""]],"gdflix.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","history.pushState"]],"gdtot.com.br":[["acs","document.createElement","script"],["aopr","open"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"geiriadur.ac.uk":[["set","fingerprint","{}"],["set","get_fingerprint","noopFunc"]],"get-to.link":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","exoJsPop101"],["aopr","document.dispatchEvent"],["nowoif"]],"getintoway.com":[["no-fetch-if","googlesyndication"],["noeval-if","adsBlocked"],["no-xhr-if","/googlesyndication|doubleclick/"]],"gezondnu.nl":[["rmnt","script","await eval"]],"gioialive.it":[["nostif","rbm_block_active","1000"]],"glockforum.net":[["rmnt","script","html-load.com"]],"gntai.com":[["aeld","click","popMagic"]],"godlike.com":[["rmnt","script","/alert|brave|blocker/i"]],"goku.sx":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"golfsidekick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goodlookingtan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gototub.com":[["nowoif"]],"gototub.fr":[["nowoif"]],"govandals.com":[["set","blockAdBlock","trueFunc"]],"govid.net":[["acs","parseInt","break;case $."]],"gplinks.fr":[["set","blurred","false"],["aopr","clickCount"]],"grantorrent1.ru":[["aopr","getUrlParameter"],["aopw","Fingerprint2"],["acs","decodeURI","decodeURIComponent"]],"greatgrubdelicioustreats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gruene-zitate.de":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"guided.news":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hanime.xxx":[["json-prune","adblock popup vast"],["aopw","Script_Manager"],["nowoif"]],"harzkurier.de":[["nostif",".call(null)","10"]],"hauntedplaces.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hdfilme.es":[["acs","Math","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"hdmoviehubs.es":[["acs","JSON.parse","break;case $."]],"hdmovies50.pl":[["aeld","","break;case $."],["acs","navigator","break;case $."]],"hdrez.com":[["nostif","displayMessage"],["acs","document.addEventListener","openPopup"]],"hds-streaming.org":[["acs","parseInt","break;case $."]],"heartsstandard.co.uk":[["set","adLight","true"]],"hentai-sub.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"hentaihaven.fr":[["no-fetch-if","www/delivery"]],"hentaiocean.com":[["acs","CustomEvent","ExoLoader"]],"hentaiworld.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"],["nowoif","/xlirdr|hotplay\\-games|hyenadata/"]],"herpackinglist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hillsdale.net":[["set","gnt.x.uam","undefined","runAt","interactive"]],"himovies.org":[["nowoif"]],"himovies.ru":[["nowoif"]],"hindilinks4u.co.uk":[["acs","document.querySelectorAll","popMagic"],["rmnt","script",";}}};break;case $."],["acs","Math","zfgloaded"],["aeld","","break;case $."],["aopr","zfgstorage"]],"hindimoviesonline.de":[["acs","Math","break;case $."]],"hivflix.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"homeairadvisor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hostingreviews24.com":[["noeval-if","/chp_?ad/"]],"hotmama.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"hotmovs.nl":[["acs","adver"]],"hpaudiobooks.es":[["acs","String.fromCharCode","shift"]],"hubdrive.nl":[["aeld","DOMContentLoaded","script[data-domain="],["nowoif"],["aeld","","history.go"]],"huyamba.it":[["acs","document.querySelectorAll","popMagic"]],"huyamba.pl":[["acs","document.querySelectorAll","popMagic"]],"hyperdebrid.nl":[["acs","decodeURI","atob"]],"ibreatheimhungry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"img4fap.nl":[["aopr","decodeURI"]],"imgmaze.org":[["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopr","popjs.init"],["aopw","Fingerprint2"],["nowoif"]],"imgtag.co.kr":[["nosiif","adsbygoogle"]],"imgview.it":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"imgview.pl":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"independentmail.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"indianhealthyrecipes.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"indopanas.cyou":[["nowoif"]],"insideeducation.co.za":[["noeval-if","/chp_?ad/"]],"ishouldhavesaid.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itsalwaysautumn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"jagledam.com":[["rmnt","script","offsetHeight"]],"jalshamoviez.com.br":[["aeld","","/_0x|localStorage\\.getItem/"]],"javbee.net":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"javboys.ru":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["noeval-if","/chp_?ad/"]],"javmost.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javmost.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javsaga.ninja":[["acs","document.querySelectorAll","popMagic"],["set","univresalP","noopFunc"]],"jemontremasextape.com":[["aopr","localStorage"]],"jessicaautumn.com":[["rmnt","script","/__adblocker|html-load/"]],"journalduweb.org":[["nostif","bait"]],"kansas.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"katbay.pl":[["aeld","","break;case $."],["aopw","ospen"]],"kathyinformationwhether.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"keepthescore.com":[["rmnt","script","/__adblocker|html-load/"]],"keeptradecut.com":[["rmnt","script","/__adblocker|html-load/"]],"keezmovies.surf":[["aopr","popit"],["aeld","popstate","noPop"]],"kendralist.com":[["aopr","loadTool"]],"keralahd.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ketubanjiwa.com":[["nostif","blockUI","2000"],["noeval-if","/chp_?ad/"]],"khatrimazafull.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"],["aopr","LieDetector"]],"kickass-anime.net":[["nowoif","/\\/4\\//"],["acs","setInterval","window.open"]],"kickass.ru":[["rmnt","style","text-decoration"],["aeld","","break;case $."],["aopw","ospen"]],"kickasshydra.fr":[["aeld","","break;case $."],["aopw","ospen"]],"kinisuru.com":[["noeval-if","/chp_?ad/"]],"kmansin09.com.br":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"kmansin09.it":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"knitterknotter.com":[["rmnt","script","/__adblocker|html-load/"]],"komikcast.net":[["aeld","load","onload"],["aopr","open"],["acs","JSON.parse","Promise"]],"komikcast.ru":[["aeld","load","onload"],["aopr","open"],["acs","JSON.parse","Promise"]],"kshowsubindo.org":[["acs","document.onclick","popunder"]],"lablue.net":[["nostif","push","500"]],"lancasterguardian.co.uk":[["rmnt","script","await eval"]],"layardrama21.nl":[["noeval-if","ads"]],"layardrama21.ru":[["noeval-if","ads"]],"leahingram.com":[["rmnt","script","/__adblocker|html-load/"]],"leelalicious.com":[["rmnt","script","/__adblocker|html-load/"]],"lenconnect.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"linkconfig.com":[["nano-sib"]],"linkshub.it":[["nowoif"],["rmnt","script",";}}};break;case $."]],"linksmore.fr":[["acs","JSON.parse","break;case $."]],"listenonrepeat.com":[["acs","googlefc"]],"lite-link.com":[["aopr","app_vars.force_disable_adblock"],["ra","target|href","a[href^=\"//\"]"],["set","blurred","false"]],"littleloucooks.com":[["rmnt","script","/__adblocker|html-load/"]],"littlenonni.com":[["rmnt","script","/__adblocker|html-load/"]],"littlespicejar.com":[["rmnt","script","/__adblocker|html-load/"]],"lodynet.fr":[["acs","JSON.parse","break;case $."]],"lookcam.pl":[["set","canRunAds","true"]],"lukesitturn.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"lvz.de":[["nostif",".call(null)","10"]],"magesypro.nl":[["noeval-if","/chp_?ad/"]],"makingitinthemountains.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangaku.es":[["nowebrtc"],["acs","$","onclick"]],"mangaraw.de":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","","break;case $."],["acs","document.documentElement","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"mangas-origines.fr":[["acs","document.querySelectorAll","popMagic"]],"mangasail.es":[["set","adblock","1"]],"mat6tube.nl":[["nano-stb","download","1100"]],"mathmonks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mathplayground.com":[["set","HTMLScriptElement.prototype.onerror","undefined"],["no-xhr-if","protectsubrev.com","length:10"],["aeld","error","dispatchEvent(window.catchdo)"],["nostif","En(e-1)"]],"maxcheaters.com":[["nostif","adblock"]],"mazda3revolution.com":[["rmnt","script","html-load.com"]],"mc-hacks.net":[["acs","navigator","FingerprintJS"],["aopw","ai_front"]],"medeberiyas.com":[["acs","document.documentElement","break;case $."]],"mega4upload.com":[["acs","document.documentElement","break;case $."]],"megalink.org":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["aeld","click","popunder"]],"mejortorrentt.de":[["nowebrtc"],["aeld","click","popMagic"]],"meteologix.com":[["nostif",".call(null)","10"]],"miiixdrop.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"milfnut.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"],["set","console.clear","noopFunc"],["aeld","contextmenu"],["acs","onload","onclick"],["nowoif"]],"milfnut.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"],["set","console.clear","noopFunc"],["aeld","contextmenu"],["acs","onload","onclick"],["nowoif"]],"milftoon.xxx":[["acs","document.querySelectorAll","popMagic"]],"miniminiplus.pl":[["json-prune","ads.servers.[].apiAddress"]],"mixdroop.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"mobdi3ips.com":[["aeld","load","onload"]],"modernfarmer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moenime.com":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"motchill.fr":[["aeld","click","popactive"]],"movidy.com.br":[["nowoif"]],"moviebaaz.nl":[["acs","document.documentElement","break;case $."]],"movieplay.org":[["acs","document.documentElement","break;case $."]],"movieplay.pl":[["acs","document.documentElement","break;case $."]],"movierulz.org":[["nowoif"],["aeld","","break;case $."]],"movierulzhd.ru":[["acs","JSON.parse","break;case $."],["acs","document.getElementById","adsBlocked"],["aost","document.createElement","/(?=^(?!.*(http)))/"]],"movierulzlink.es":[["aopr","String.fromCharCode"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"movierulzz.es":[["nowoif"]],"movies2watch.es":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"moviescounnter.com":[["acs","parseInt","break;case $."]],"moviesdaweb.nl":[["acs","parseInt","break;case $."]],"moviesrulzfree.co.uk":[["nowoif"]],"moviessources.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","devtoolschange"],["aopr","console.clear"]],"moviezaddiction.nl":[["aeld","","break;case $."]],"movisubmalay.ru":[["aopr","glxopen"],["aopr","exoJsPop101"]],"mp3juice.org":[["nowoif"]],"mp3juices.es":[["aost","Math.random","computed"],["nowoif"]],"mrunblock.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","decodeURIComponent","atob"]],"mtsproducoes.es":[["aopw","block_detected"]],"multicanais.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"multicanais.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"multiup.io":[["nosiif",".submit"],["rmnt","script","\\x"],["nowoif","_blank"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"munchinwithmaddie.blog":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"munchygoddess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mycima.nl":[["acs","parseInt","break;case $."]],"mydownloadtube.co.uk":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"myegy.pl":[["aopw","decodeURI"],["acs","JSON.parse","break;case $."]],"myflixer.it":[["rmnt","script","{delete window["]],"mymp3song.net":[["nowoif"]],"mysostech.com":[["aopw","ai_adb_overlay"]],"mywatchseries.com.br":[["nowebrtc"],["acs","document.querySelectorAll","popMagic"],["acs","EventTarget.prototype.addEventListener","delete window"]],"narcissisms.com":[["rmnt","script","/__adblocker|html-load/"]],"nationalgeographic.fr":[["nostif","checkPub","6000"],["no-xhr-if","/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"]],"neueroeffnung.info":[["nostif",".call(null)","10"]],"newdmn.it":[["nowoif","!newdmn","1"]],"news-press.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"newsextv.com":[["acs","ExoLoader"]],"nflbite.com":[["acs","Math","zfgloaded"],["rmnt","script","adserverDomain"]],"nhlstream.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"nishankhatri.fr":[["noeval-if","/chp_?ad/"]],"niyaniya.org":[["acs","WebAssembly","atob"]],"nocensor.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nonsensediamond.es":[["aopr","decodeURI"]],"northernfarmer.co.uk":[["set","adLight","true"]],"notunmovie.link":[["nowoif"]],"novelasesp.co.uk":[["aeld","load","2000"]],"novelasesp.net":[["aeld","load","2000"]],"novelasesp.nl":[["aeld","load","2000"]],"ntv.pl":[["rmnt","script","adserverDomain"]],"nursefern.com":[["rmnt","script","/__adblocker|html-load/"]],"ofilmywap.co.uk":[["nowoif"]],"ohentai.org":[["nowoif"]],"okanime.com":[["acs","$","getElementById"],["nowebrtc"],["nowoif"],["acs","parseInt","break;case $."]],"okhatrimaza.co.uk":[["popads-dummy"],["aopr","glxopen"],["acs","Object.defineProperty","XMLHttpRequest"]],"oldhousesforsale.com":[["rmnt","script","/__adblocker|html-load/"]],"onepiece.gg":[["rmnt","script","/__adblocker|html-load/"]],"onlinevideoconverter.ru":[["nowoif"],["acs","JSON.parse","break;case $."]],"onlyindianporn.co.uk":[["aopr","exoJsPop101"]],"onlyindianporn.com":[["aopr","exoJsPop101"]],"oracleerpappsguide.com":[["noeval-if","/chp_?ad/"]],"osrsguide.com":[["rmnt","script","/__adblocker|html-load/"]],"oxanime.com":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"pageflutter.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pandafreegames.es":[["nostif","adFilled","2500"]],"pasend.it":[["acs","document.querySelectorAll","popMagic"]],"passportaction.com":[["noeval-if","/chp_?ad/"]],"pawastreams.fr":[["nowoif"]],"pcgames.de":[["nostif",".call(null)","10"]],"pcmecca.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pelismarthd.com":[["acs","parseInt","break;case $."]],"pelix.nl":[["aeld","","0x"],["set","btoa","null"],["nowoif"],["aeld","load","url"],["aopw","smrtSB"],["aopw","smrtSP"],["aopr","AaDetector"],["aopw","adcashMacros"]],"pepperlivestream.online":[["aopr","Adcash"]],"phototrans.eu":[["rmnt","script","!adsbygoogle.loaded"]],"piratebayz.de":[["aopr","LieDetector"]],"pirateblue.org":[["set","blockAdBlock","trueFunc"]],"pirateproxy.ru":[["aopw","Fingerprint2"],["nowebrtc"],["acs","String.fromCharCode","decodeURIComponent"],["aeld","/^(?:click|mousedown)$/","_0x"],["acs","Object.defineProperty","document.body.appendChild"]],"pixelio.de":[["nostif",".call(null)","10"]],"planetf1.com":[["rmnt","script","/_0x|'innerHTML'/"]],"play.doramasplus.net":[["set","openUp","noopFunc"]],"play.max.com":[["json-prune","adtech-brightline adtech-google-pal adtech-iab-om"]],"player.msmini.co.uk":[["nowoif"]],"player.sbnmp.pl":[["nowoif"]],"playerfs.com":[["acs","JSON.parse","break;case $."]],"plylive.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["nowoif"]],"pogolinks.co.uk":[["aeld","","break;case $."],["nostif","showModal"],["acs","setTimeout","admc"]],"pogolinks.fr":[["aeld","","break;case $."],["nostif","showModal"],["acs","setTimeout","admc"]],"popcornstream.fr":[["nostif","blur"],["aeld","","btoa"],["acs","Math","zfgloaded"]],"pornforrelax.com":[["aopr","adver.abFucker.serve"],["aeld","","_blank"]],"pornlib.com":[["nowoif"]],"pornmonde.com":[["acs","document.querySelectorAll","popMagic"]],"porno-365.de":[["aost","document.createElement","Object.init"]],"porno-tour.nl":[["aopr","document.dispatchEvent"],["nostif","innerText","2000"]],"portclintonnewsherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"povvvideo.de":[["nowoif"]],"powv1deo.org":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"powvdeo.org":[["nowoif"]],"premeditatedleftovers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"privatemoviez.nl":[["aeld","DOMContentLoaded","adsBlocked"],["nostif","magnificPopup"],["nano-sib","count"]],"progardentips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"programme.tv":[["aopr","_sp_._networkListenerData"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"projectgolfau.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"raccontivietati.com":[["acs","document.querySelectorAll","popMagic"]],"radio.pt":[["nostif",".call(null)","10"]],"rancheroforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"raw18.ru":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"readcomiconline.co.uk":[["acs","addEventListener","HTMLAllCollection"],["no-xhr-if","/adskeeper|bidgear|googlesyndication|mgid/"],["aopr","adblockDetector"],["aeld","mousedown","localStorage"]],"realadvicegal.com":[["rmnt","script","/__adblocker|html-load/"]],"realitydaydream.com":[["rmnt","script","/__adblocker|html-load/"]],"reasonstoskipthehousework.com":[["rmnt","script","/__adblocker|html-load/"]],"redbluffdailynews.com":[["set","CnnXt.Event.fire","noopFunc"]],"redecanais.org":[["rmnt","script",";}}};break;case $."],["aeld","click","_0x"],["aopr","__Y"],["aopr","ConsoleBan"],["aopr","disableDevtool"],["aopr","ondevtoolopen"],["aopr","onkeydown"],["aopr","window.location.href"],["aopr","window.history.back"],["set","DisableDevtool","undefined"]],"reisefrage.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"repelisgt.nl":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"repelishd.nl":[["nowoif"]],"ringsidenews.com":[["aopr","googletag"]],"ripleyfieldworktracker.com":[["acs","jQuery","ad-block"]],"rnbxclusive0.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"roaringapps.com":[["set","Sentry","{}"],["set","Sentry.onLoad","noopFunc"]],"rojadirectaenvivo.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rswarrior.com":[["rmnt","script","html-load.com"]],"s2dfree.net":[["acs","Math","break;case $."]],"saveshared.com":[["aopr","String.fromCharCode"]],"savingdessert.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sbazar.cz":[["rmnt","script","ads"]],"screenrant.com":[["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"seirsanduk.pl":[["popads-dummy"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sembunyi.in":[["aopr","popjs"]],"seoschmiede.at":[["rmnt","script","/pirate/i"]],"series9movies.com":[["rmnt","script","/window\\[\\'open\\'\\]/"],["nowoif"]],"seriesflixhd.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"seriesyonkis.ru":[["acs","document.querySelectorAll","popMagic"]],"seselah.com":[["aopw","adBlockDetected"]],"sexcams-24.com":[["set","flashvars.popunder_url",""],["set","flashvars.protect_block",""]],"sexy-games.nl":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"shemaleup.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","/popMagic|pop1stp/"]],"shoppingwithdave.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"showflix.es":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["aost","document.getElementById","fairAdblock"]],"shrinkme.co.uk":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","window.open"],["aeld","load","doTest"]],"shutupandgo.travel":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"simana.online":[["rmnt","script","/FingerprintJS|openPopup/"],["set","blurred","false"]],"simple.money":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sissytube.net":[["acs","document.querySelectorAll","popMagic"]],"sixfiguresunder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sizecharts.net":[["rmnt","#text","adinserter"]],"slowthecookdown.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soap2day.it":[["acs","JSON.parse","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","Reflect"]],"socceronline.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."]],"softarchive.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"solarmovie.org":[["aopr","AaDetector"],["nowoif"],["acs","Math","zfgloaded"]],"sonsoflibertymedia.com":[["rmnt","script","/==undefined.*body/"]],"sound-park.org":[["acs","$","open"],["acs","document.createElement","script"]],"soundgearnerd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southernmadesimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southwestfarmer.co.uk":[["set","adLight","true"]],"space.tribuntekno.com":[["aopw","adBlockDetected"]],"speedporn.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["rmnt","script","wpadmngr.com"]],"sportbar.co.uk":[["nowoif"]],"sporting77.nl":[["nowoif"]],"sportlemons.net":[["aopr","decodeURI"]],"sportsgamersonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportshd.org":[["rmnt","script","adserverDomain"]],"sportstreamtv.com":[["acs","JSON.parse","break;case $."]],"sqlserverguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ssoap2day.nl":[["acs","JSON.parse","break;case $."],["acs","document.documentElement","break;case $."]],"ssrmovies.it":[["nowoif"],["acs","parseInt","break;case $."]],"star-facts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steamplay.co.uk":[["aopr","btoa"],["aopw","Fingerprint2"],["aopr","console.clear"],["aopw","adcashMacros"],["nowoif"],["aopr","jwplayer.utils.Timer"]],"stelvioforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stemplay.co.uk":[["nowoif"],["aopr","jwplayer.utils.Timer"]],"stemplay.nl":[["nowoif"],["aopr","jwplayer.utils.Timer"]],"stfly.de":[["acs","document.documentElement","break;case $."]],"stockhideout.com":[["nosiif","daadb"]],"stokesentinel.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"stormininnorman.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"storynavigation.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streamango.fr":[["acs","Math","zfgloaded"]],"streamblasters.nl":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["]],"streamers.com.br":[["aeld","","break;case $."]],"streaming-community.it":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streamta.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"streamta.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"strtpe.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"strtpe.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"stvid.com":[["noeval"]],"subtorrents.pl":[["aopr","capapubli"],["aopr","getUrlParameter"],["nowebrtc"],["noeval"],["popads-dummy"],["set","btoa","null"]],"sullacollina.it":[["noeval-if","/chp_?ad/"]],"superdeporte.es":[["set","pr_okvalida","true"],["nostif","sub"]],"supremebabes.com":[["acs","document.querySelectorAll","popMagic"]],"survivingateacherssalary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swatchseries.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"sztucznainteligencjablog.pl":[["noeval-if","/chp_?ad/"]],"t20cup.de":[["aeld","","break;case $."]],"t7meel.nl":[["acs","parseInt","break;case $."],["aopr","zfgstorage"]],"tamilfreemp3songs.org":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"tamilmv.fr":[["nowebrtc"],["acs","atob","decodeURIComponent"]],"tamilprint29.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"tamilyogi.com":[["acs","String.fromCharCode","shift"]],"tamilyogis.org":[["acs","JSON.parse","break;case $."]],"teachersupdates.net":[["noeval-if","/chp_?ad/"]],"techlearning.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"telecharger-igli4.com.br":[["aopw","adBlockDetected"]],"tenies-online.it":[["acs","JSON.parse","break;case $."],["aopr","mm"]],"tenies-online.pl":[["acs","JSON.parse","break;case $."],["aopr","mm"]],"tennisstreams.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."],["acs","navigator","FingerprintJS"],["acs","setTimeout","admc"]],"testedich.org":[["nostif",".call(null)","10"]],"thecoconutmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecpuguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedaddy.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/adserverDomain|\\);break;case /"]],"thegay.fr":[["acs","adver"]],"thehealthy.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"thehouseoffancy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theimpulsivebuy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelureforum.com":[["rmnt","script","html-load.com"]],"thenicolechase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepiratebay.com":[["aeld","/^(?:click|mousedown)$/","_0x"],["aopw","spot"],["aopr","popjs.init"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thepiratebay.com.br":[["aeld","/^(?:click|mousedown)$/","_0x"],["aopw","spot"],["aopr","popjs.init"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thereallife-rd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thescarboroughnews.co.uk":[["rmnt","script","await eval"]],"theskeletalsystem.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thespeedtriple.com":[["rmnt","script","html-load.com"]],"theuser.cloud":[["acs","fetch","Math.random"]],"thewebflash.com":[["nostif","clientHeight"]],"theworldofarchitecture.com":[["rmnt","script","html-load.com"]],"thothub.today":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"titsintops.com":[["acs","document.querySelectorAll","popMagic"],["acs","Math.floor","Math.random"],["aopr","decodeURI"]],"tokuvn.com":[["acs","goToURL"]],"topmovies.org":[["nowoif"]],"torrentkong.cc":[["rmnt","script","__kgrun"],["rmnt","noscript","kgate"],["nostif","__kgrun"]],"tortoiseknowledge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"totally.top":[["noeval-if","/chp_?ad/"]],"toyokeizai.net":[["rmnt","script","await eval"]],"traverseforum.com":[["rmnt","script","html-load.com"]],"trogiupnhanh.com":[["no-fetch-if","/\\?abg=|adsbygoogle|tpc\\.googlesyndication\\.com|doubleclick\\.net|googleadservices\\.com/"]],"truyenhentai18.net":[["acs","document.querySelectorAll","popMagic"]],"tutcourse.com":[["aeld","DOMContentLoaded","adsBlocked"]],"tutorialsduniya.com":[["noeval-if","/chp_?ad/"]],"tutti-dolci.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tvchoicemagazine.co.uk":[["acs","$","onload"]],"tvply.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"tvtv.co.uk":[["nostif",".call(null)","10"]],"twospoke.com":[["rmnt","script","html-load.com"]],"typinggames.zone":[["acs","document.getElementById","alert"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"u4m.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"unblocknow.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"unlimitedfiles.xyz":[["nowoif"]],"uploadrar.it":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."],["nano-stb","/.?/","*"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"upornia.com":[["acs","adver"],["rmnt","script","/popunder|isAdBlock|admvn.src/i"],["set","hommy","{}"],["set","hommy.waitUntil","noopFunc"]],"uproxy2.biz":[["aopr","GetWindowHeight"],["aopr","decodeURIComponent"],["acs","adcashMacros"]],"upscaler.stockphotos.com":[["json-prune","placements.processingFile"]],"upxin.net":[["aeld","load","onload"]],"usahealthandlifestyle.com":[["noeval-if","/chp_?ad/"]],"vanime.org":[["acs","parseInt","break;case $."],["acs","JSON.parse","Promise"]],"vembed.net":[["nostif","afterOpen"],["nowoif"],["set","PlayerConfig.config.CustomAdSetting","[]"]],"vexmovies.co.uk":[["acs","String.fromCharCode","/btoa|break/"]],"videos-xxx.nl":[["acs","document.querySelectorAll","popMagic"]],"videos1002.com":[["acs","$","azar"],["aopr","jsPopunder"]],"vidspeeds.com":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"vintage-mustang.com":[["rmnt","script","html-load.com"]],"vipleague.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","navigator","FingerprintJS"],["acs","setTimeout","admc"]],"virginiafirst.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"voodc.com":[["aopw","Adcash"],["json-prune","*","*.adserverDomain"],["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"vsembed.com":[["acs","addEventListener","HTMLAllCollection"]],"vtlinks.nl":[["nowoif"]],"vvtlinks.com":[["nowoif"]],"wanderingcalifornia.com":[["rmnt","script","/__adblocker|html-load/"]],"watchelementaryonline.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watchfree.net":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"watchgameofthrones.org":[["aopr","AaDetector"]],"watchomovies.it":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","popunder"]],"way2movies.es":[["acs","EventTarget.prototype.addEventListener","delete window"]],"wcoanimesub.tv":[["set","isAdBlockActive","false"]],"weathernj.com":[["rmnt","script","/__adblocker|html-load/"]],"web2.0calc.nl":[["aopr","doads"]],"wellseasonedstudio.com":[["rmnt","script","/__adblocker|html-load/"]],"weloma.pl":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","addEventListener","HTMLAllCollection"],["nowoif"],["set-cookie","unlock_chapter_guest","1"],["acs","document.createElement","dataset.zone"]],"welovetrump.com":[["rmnt","script","/==undefined.*body/"]],"wericmartin.com":[["rmnt","script","window.SCHEDULE.home"]],"wethedryers.com":[["rmnt","script","/__adblocker|html-load/"]],"wetteronline.co.uk":[["aopr","__eiPb"],["nostif",".call(null)","10"]],"wildlifenomads.com":[["rmnt","script","/__adblocker|html-load/"]],"windingcreekranch.org":[["rmnt","script","/__adblocker|html-load/"]],"workwithjoshua.com":[["rmnt","script","/__adblocker|html-load/"]],"world4ufree.net":[["acs","parseInt","break;case $."],["aeld","","_0x"],["acs","eval","replace"]],"worldclock.com":[["rmnt","script","/__adblocker|html-load/"]],"worldfree4u.fr":[["nowoif"]],"worldofblenders.com":[["rmnt","script","/__adblocker|html-load/"]],"woxikon.fr":[["rmnt","script","html-load.com"]],"woxikon.it":[["rmnt","script","html-load.com"]],"wysokieobcasy.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"xhamster1.fr":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster11.nl":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster16.co.uk":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster16.ru":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster4.es":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xianzhenyuan.cn":[["acs","document.getElementById","undefined"]],"xmovies08.pl":[["acs","Math","zfgloaded"]],"xnxx.com":[["aeld","DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["set","xv.sda.pp.init","noopFunc"],["set","xv.conf.dyn.ads","undefined"],["set","xv.conf.dyn.excld","undefined"],["rmnt","script","html5player.enableVideoPreRollAds"]],"xrv.org.uk":[["rmnt","script","html-load.com"]],"xxxtubedot.com":[["noeval"],["aopr","Aloader.serve"]],"xxxyoungtv.com":[["aopr","popit"],["aeld","popstate","noPop"]],"youlikeboys.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"]],"youporn.net":[["set","page_params.holiday_promo","true"]],"yourastrologyreading.com":[["rmnt","script","/__adblocker|html-load/"]],"ytjar.info":[["nowoif","_blank"]],"yts-subs.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","setTimeout","admc"]],"yts2.nl":[["aopw","afStorage"],["nowoif"],["aopr","mm"]],"z12z0vla.de":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"zbporn.es":[["aopr","decodeURI"],["aopr","promo"]],"zone-telechargement.ing":[["acs","setTimeout","aclib.runPop"]],"zovo.it":[["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
