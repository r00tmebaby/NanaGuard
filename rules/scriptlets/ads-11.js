/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123moviesd.com":[["aopr","mm"]],"12thman.com":[["set","blockAdBlock","trueFunc"]],"1337x.unblock2.xyz":[["aopr","btoa"],["aopr","open"],["aopr","Math.floor"]],"1340kbbr.com":[["set","google_unique_id","6"]],"13wmaz.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"16powers.com":[["rmnt","script","/__adblocker|html-load/"]],"18-teen-porn.com":[["aopr","document.dispatchEvent"]],"1911forum.com":[["rmnt","script","html-load.com"]],"1ink.cc":[["nano-sib"]],"3dsfree.org":[["rmnt","script","ctrlKey"]],"502streetscene.net":[["rmnt","script","html-load.com"]],"6indianporn.com":[["acs","document.querySelectorAll","popMagic"],["aeld","","popMagic"]],"80-talet.se":[["noeval-if","/chp_?ad/"]],"8newsnow.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"8tracks.com":[["set","App.views.adsView.adblock","false"]],"acienciasgalilei.com":[["aeld","load","adverts-top-container"]],"acutetube.net":[["aopr","Aloader.serve"]],"ad-itech.blogspot.com":[["aeld","load","onload"]],"adamtheautomator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"addapinch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ads-ti9ni4.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"aflavorfulbite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ai18.pics":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"alandacraft.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alexandracooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alittlepinchofperfect.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allcalidad.app":[["noeval-if","/chp_?ad/"]],"allourway.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allthenoodles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alphatron.tv":[["acs","EventTarget.prototype.addEventListener","delete window"]],"amarokforum.com":[["rmnt","script","html-load.com"]],"amazon-love.com":[["acs","document.querySelectorAll","popMagic"]],"androidfacil.org":[["noeval-if","/chp_?ad/"]],"anerdcooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"animahd.com":[["nowoif","_blank"]],"anime-jav.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"aninami.site":[["nowoif","_blank"]],"anonmp4.help":[["acs","WebAssembly","atob"]],"anysex.com":[["aopr","ExoLoader"],["aopr","document.dispatchEvent"],["aopr","console.clear"],["aopr","decodeURI"],["aopr","setExoCookie"],["acs","globalThis","break;case"]],"anytimecocktails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aofsoru.com":[["acs","addEventListener","displayMessage"]],"api.webs.moe":[["rmnt","script",";}}};break;case $."]],"apistogramma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"appletoolbox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aquariumgays.com":[["aopr","_cpp"],["acs","eval","replace"]],"ar15forums.com":[["rmnt","script","html-load.com"]],"architecturelab.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arrestyourdebt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"articlebase.pk":[["noeval-if","/chp_?ad/"]],"asweetalternative.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aussiepythons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"auszeit.bio":[["nostif",".call(null)","10"]],"auto-motor-und-sport.de":[["nostif",".call(null)","10"]],"bakingbites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baptistboard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beerconnoisseur.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"benelliforum.com":[["rmnt","script","html-load.com"]],"best-xxxvideos.com":[["noeval"],["aopr","Aloader.serve"]],"bestappetizers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestensuree.com":[["noeval-if","/chp_?ad/"]],"bestreamsports.org":[["rmnt","script","/eval|adb/i"]],"bikeradar.com":[["aopr","_sp_._networkListenerData"]],"bikeride.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bingotingo.com":[["rmnt","script","deblocker"],["no-xhr-if","googlesyndication"],["nano-sib","counter","","0.02"]],"bjpenn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blogk.com":[["noeval-if","/chp_?ad/"]],"bluecoreinside.com":[["noeval-if","/chp_?ad/"]],"bogglewizard.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"breadsandsweets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"breedingmoms.com":[["aopr","ExoLoader.serve"]],"bridgwatermercury.co.uk":[["set","adLight","true"]],"bridportnews.co.uk":[["set","adLight","true"]],"browneyedbaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"btcadspace.com":[["acs","document.getElementById","AdBlock"]],"bunnymuffins.lol":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burymercury.co.uk":[["set","adLight","true"]],"busydaydinners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"butfirstwebrunch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"byswiizen.fr":[["noeval-if","/chp_?ad/"]],"calgarysun.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"camvideoshub.com":[["set","canRunAds","true"]],"caravaning.de":[["nostif",".call(null)","10"]],"carnewz.site":[["aeld","DOMContentLoaded","history.go"]],"carolinafishtalk.com":[["rmnt","script","html-load.com"]],"carscoops.com":[["nostif","error-report.com"],["rmnt","script","html-load.com"]],"ccnworldtech.com":[["acs","parseInt","break;case $."]],"celebitchy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"change-ta-vie-coaching.com":[["noeval-if","/chp_?ad/"]],"chatgptfree.ai":[["noeval-if","/chp_?ad/"]],"cheatcloud.cc":[["nano-sib","clearInterval"]],"chemicalaid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chesterstandard.co.uk":[["set","adLight","true"]],"cheyennechat.com":[["rmnt","script","html-load.com"]],"christianheadlines.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""],["rmnt","script","AdBlockEnabled"]],"cima100fm.com":[["acs","parseInt","break;case $."]],"cimanow.cc":[["aopr","navigator.brave"],["no-xhr-if","criteo"],["set","HTMLImageElement.prototype.onerror","undefined"],["no-fetch-if","googlesyndication"],["acs","document.createElement","globalThis"]],"civitai.green":[["no-fetch-if","googlesyndication"]],"claimsatoshi.xyz":[["acs","document.createElement","adsBlocked"]],"clapway.com":[["nosiif","daadb"]],"classicoder.com":[["aost","document.getElementsByTagName","adsBlocked"]],"cleverlyinspired.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cloud9obits.com":[["noeval-if","/chp_?ad/"]],"cloudhostt.com":[["noeval-if","/chp_?ad/"]],"clubroadster.net":[["rmnt","script","html-load.com"]],"cnnamador.com":[["nostif","offsetWidth","2000"],["nostif","backRedirect"],["aeld","","pop"],["noeval"],["aopw","adv_pre_duration"],["aopw","adv_post_duration"],["aeld","/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"]],"code-source.net":[["noeval-if","/chp_?ad/"]],"comentariodetexto.com":[["aeld","DOMContentLoaded","adsBlocked"],["no-xhr-if","googlesyndication"]],"comicsxxxgratis.com":[["acs","document.querySelectorAll","popMagic"]],"conanfanatics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"contextures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"convertinmp4.com":[["nowebrtc"]],"cookeatlivelove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingcarnival.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookitwithtim.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cooksinfo.com":[["aopr","Date.prototype.toUTCString"]],"cookthestory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cordcuttingreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"counton2.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"crackberry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crackfree.org":[["aeld","","break;case $."],["aopr","open"]],"crazyvegankitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"creativecolorlab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cricket365.com":[["rmnt","script","/_0x|'innerHTML'/"]],"cricstreams.re":[["rmnt","script","adserverDomain"],["rmnt","script","FingerprintJS"]],"crunchytech.net":[["noeval-if","/chp_?ad/"]],"cryptofaucet.xyz":[["acs","eval","replace"]],"cryptoquoteanswer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cubuffs.com":[["set","blockAdBlock","trueFunc"]],"culturequizz.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script","html-load.com"]],"customfighters.com":[["rmnt","script","html-load.com"]],"cutnet.net":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"cwfeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cybar.xyz":[["aeld","click","open"],["nowoif","cpmecs"],["set-cookie","ads","off"],["nostif","/adlink/i"]],"dansmovies.com":[["aopr","popunder"]],"daotekno.com":[["nostif","bait"]],"dayuploads.com":[["nowoif"]],"depressionhurts.us":[["noeval-if","/chp_?ad/"]],"devdrive.cloud":[["acs","document.getElementById","undefined"]],"devonlife.co.uk":[["set","adLight","true"]],"diendancauduong.com":[["aeld","load","popunder"],["aopw","DOMAssistant"],["aopw","rotator"],["rmnt","script","antiAdBlockerHandler"]],"digimanie.cz":[["set","rabLimit","-1"]],"dilar.tube":[["set","HTMLImageElement.prototype.onerror","undefined"],["no-fetch-if","method:HEAD"]],"dinneratthezoo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"discoverysport.net":[["rmnt","script","html-load.com"]],"discoverzermatt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diyswank.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dogdrip.net":[["no-fetch-if","/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["no-fetch-if","-load.com/script/","length:101"],["nostif",")](this,...","3000-6000"]],"dogfoodchat.com":[["rmnt","script","html-load.com"]],"dominican-republic.co.il":[["noeval-if","/chp_?ad/"]],"download.kingtecnologia.com":[["nostif","await _0x"]],"dragontea.ink":[["nano-sib","/attachonce == false/","800","0.001"]],"ds2play.com":[["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dubipc.blogspot.com":[["nostif","displayMessage","2000"]],"dulichkhanhhoa.net":[["no-fetch-if","googlesyndication"]],"duramaxforum.com":[["rmnt","script","html-load.com"]],"dwlinks.buzz":[["acs","document.documentElement","break;case $."]],"earninginwork.com":[["noeval-if","/chp_?ad/"]],"easydinnerrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"edeneats.com":[["rmnt","script","/__adblocker|html-load/"]],"elamigosgames.net":[["nostif","checkAdblockUser"]],"eliteprospects.com":[["rmnt","script","/__adblocker|html-load/"]],"elleandpear.com":[["rmnt","script","/__adblocker|html-load/"]],"embasic.pro":[["acs","EventTarget.prototype.addEventListener","delete window"]],"embdproxy.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","deblocker"]],"embedhd.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"embedseek.xyz":[["json-prune","ads playerAds"],["nowoif","_blank"]],"embracingsimpleblog.com":[["rmnt","script","/__adblocker|html-load/"]],"esgentside.com":[["aopr","_sp_._networkListenerData"]],"eurostreaming.casino":[["acs","document.documentElement","break;case $."]],"eurotruck2.com.br":[["aeld","load","nextFunction"]],"evernia.site":[["rmnt","script","/FingerprintJS|openPopup/"],["set","blurred","false"]],"everydayannie.com":[["rmnt","script","/__adblocker|html-load/"]],"everydaydishes.com":[["rmnt","script","/__adblocker|html-load/"]],"evo.co.uk":[["aopr","_sp_._networkListenerData"]],"expedition33.gg":[["rmnt","script","/__adblocker|html-load/"]],"f150lightningforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"f4scdn.com":[["no-fetch-if","adsbygoogle"],["nowoif","_blank"]],"fakaza.com":[["acs","Math","break;case $."]],"fantasydata.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fapeza.com":[["acs","globalThis","break;case"],["acs","WebAssembly","atob"],["set-local-storage-item","superberb_disable","1"]],"fark.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"farmgirlgourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fastandslowcooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fatimafarmer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fboxtv.com":[["acs","parseInt","break;case $."]],"feastingonfruit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feedingtinybellies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fhmemorial.com":[["noeval-if","/chp_?ad/"]],"fiberglassrv.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fictionhorizon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"file.org":[["rmnt","script","googlesyndication"]],"filemirage.com":[["nowoif"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"fileplanet.com":[["acs","showTav"]],"finalnews24.com":[["noeval-if","/chp_?ad/"]],"fitbottomedgirls.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitibility.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitmamarealfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitting-it-all-in.com":[["aopr","__eiPb"]],"flexy.stream":[["aopw","_pop"]],"flexyhit.com":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"floridatravelwithkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flygbussarna.se":[["no-fetch-if","/piwik-"]],"fmradiofree.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"foodiesgallery.com":[["nostif","hasAdblock"]],"foodnetworkgossip.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodnouveau.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fordtremor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forgepattern.net":[["acs","JSON.parse","atob"],["aopr","aclib"]],"formasyonhaber.net":[["aopw","adBlockDetected"]],"freecardano.com":[["nowebrtc"]],"freecodezilla.net":[["aeld","DOMContentLoaded","adsBlocked"],["no-xhr-if","googlesyndication"]],"freehardcore.com":[["aopr","decodeURI"]],"freepornjpg.com":[["acs","document.querySelectorAll","popMagic"]],"freevstplugins.net":[["acs","document.getElementById","adsBlocked"]],"freexcafe.com":[["acs","__PoSettings"]],"freshaprilflours.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"friscofighters.com":[["set","blockAdBlock","trueFunc"]],"frugalfanatic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funtasticlife.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"fz-10forum.com":[["rmnt","script","html-load.com"]],"gadgetguideonline.com":[["aost","String.prototype.charCodeAt","ai_"]],"galesburg.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"game-repack.site":[["nowoif"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"gamedayculture.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"games.metro.us":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gameslantern.com":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"gamesradar.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"gametohkenranbu.sakuraweb.com":[["rmnt","#text","スポンサーリンク"]],"gardenholic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gayboyshd.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"gazetawroclawska.pl":[["aeld","","show"]],"gdrivelatino.net":[["acs","document.documentElement","break;case $."]],"genesisg80forum.com":[["rmnt","script","html-load.com"]],"getexploits.com":[["nostif","current.children"]],"gksansar.com":[["noeval-if","/chp_?ad/"]],"glutenfreeguidehq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gniewkowo.eu":[["nosiif","childNodes"]],"gnusocial.jp":[["noeval-if","/chp_?ad/"]],"gocreighton.com":[["set","blockAdBlock","trueFunc"]],"gogriz.com":[["set","blockAdBlock","trueFunc"]],"gokerja.net":[["noeval-if","/chp_?ad/"]],"golfspan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gomaainfo.com":[["acs","addEventListener","google_ad_client"]],"gomovies.pk":[["acs","EventTarget.prototype.addEventListener","delete window"]],"googledrivelinks.com":[["aost","String.prototype.charCodeAt","ai_"],["aopr","adBlockDetected"]],"grandbaby-cakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grantourismotravels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gravureblog.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"greatergood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greedygourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greenweddingshoes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greenwichmeantime.com":[["rmnt","script","void 0 || window,"]],"grouppornotube.com":[["noeval"],["aopr","Aloader.serve"]],"gsmmessages.com":[["noeval-if","/chp_?ad/"]],"guardiansnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gulfcoastcw.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"haloursynow.pl":[["no-fetch-if","ads"]],"hanime.xxx":[["json-prune","adblock popup vast"],["aopw","Script_Manager"],["nowoif"]],"happyveggiekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"haustec.de":[["nostif",".call(null)","10"]],"hdporn92.com":[["acs","onload","puHref"]],"hdpornflix.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"hdpornos.net":[["nostif","Adb"]],"hellenism.net":[["noeval-if","/chp_?ad/"]],"hentaidays.com":[["acs","document.querySelectorAll","popMagic"]],"heresyoursavings.com":[["aopr","__eiPb"]],"hidan.co":[["nowoif","!hidan.sh"]],"highheelsandgrills.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hiperdex.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"hometheatershack.com":[["rmnt","script","html-load.com"]],"hornbunny.com":[["acs","document.querySelectorAll","popMagic"]],"hotmediahub.com":[["json-prune","web_share_ads_adsterra_config wap_short_link_middle_page_ad wap_short_link_middle_page_show_time data.ads_cpm_info"],["nano-stb","value","*"],["nano-sib","clearInterval","*"]],"hotpankitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtocook.recipes":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtohomeschoolforfree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hqxxxmovies.com":[["noeval"],["aopr","Aloader.serve"]],"huddle.today":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hummusapien.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hungarianhardstyle.hu":[["noeval-if","/chp_?ad/"]],"iamflorianschulze.com":[["aopr","adsBlocked"]],"iankewks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ibsgroup.org":[["rmnt","script","html-load.com"]],"ibtimes.co.in":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"iconicblogger.com":[["rmnt","script","catch"]],"ideal-teens.com":[["acs","document.querySelectorAll","popMagic"]],"idealme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iheartartsncrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iheartrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ikramlar.online":[["noeval-if","/chp_?ad/"],["no-fetch-if","googlesyndication"]],"ilifehacks.com":[["aost","String.prototype.charCodeAt","ai_"]],"ilsole24ore.com":[["nostif","refresh"]],"imagenesderopaparaperros.com":[["acs","Math","break;case $."],["acs","String.fromCharCode","shift"],["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"imagenpic.com":[["aeld","","checkTarget"]],"imgdrive.net":[["acs","jQuery","TestAdBlock"],["aopr","ExoLoader"],["aopr","loadTool"],["aopw","cticodes"],["aopw","imgadbpops"],["acs","document.getElementById","document.write"],["nano-stb","redirect","4000"]],"imgthbm.shop":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"indianmotorcycles.net":[["rmnt","script","html-load.com"]],"infinitehentai.com":[["nowoif"]],"infinitiqx50.org":[["rmnt","script","html-load.com"]],"infinitiqx60.org":[["rmnt","script","html-load.com"]],"infinityfree.com":[["rmnt","script","await eval"]],"influencersgonewild.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"infojabarloker.com":[["noeval-if","/chp_?ad/"]],"inside-digital.de":[["nostif",".call(null)","10"]],"insidekstatesports.org":[["set","blockAdBlock","trueFunc"]],"italianporn.com.es":[["acs","decodeURI","decodeURIComponent"]],"itpro.co.uk":[["aopr","_sp_._networkListenerData"]],"its.porn":[["set","POPUNDER_ENABLED","false"],["set","plugins.preroll","noopFunc"]],"j.gs":[["aopw","Fingerprint2"]],"j7p.jp":[["rmnt","script","html-load.com"]],"jaktsidan.se":[["noeval-if","/chp_?ad/"]],"jamesbornmain.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jasminemaria.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"javstream.com":[["acs","document.querySelectorAll","popMagic"]],"javup.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","/popMagic|pop1stp/"]],"jeanprofessorcentral.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jenniferrizzo.com":[["rmnt","script","/__adblocker|html-load/"]],"jesseporn.xyz":[["aopr","loadTool"]],"jillcataldo.com":[["rmnt","script","/__adblocker|html-load/"]],"jilliandescribecompany.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jobfound.org":[["no-fetch-if","doubleclick"],["no-fetch-if","method:HEAD"],["nostif","sentry"]],"joyn.de":[["no-fetch-if","zomap.de"]],"jpop80ss3.blogspot.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"karaoketexty.cz":[["nostif","/native|\\{n\\(\\)/"],["ra","style","[style^=\"background\"]","stay"],["ra","href","[target^=\"_\"]","stay"]],"katdrive.link":[["aeld","","history.go"]],"kfx450hq.com":[["rmnt","script","html-load.com"]],"khsn1230.com":[["set","google_unique_id","6"]],"kiasoulforums.com":[["rmnt","script","html-load.com"]],"kidsactivitiesblog.com":[["rmnt","script","/__adblocker|html-load/"]],"kimochi.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kimspireddiy.com":[["rmnt","script","/__adblocker|html-load/"]],"kinoger.to":[["nowebrtc"]],"kiuruvesilehti.fi":[["aeld","scroll","innerHeight"]],"kjanime.net":[["nostif","CekAab","0"]],"kobieta.wp.pl":[["nostif","bait"]],"kokostream.net":[["nowoif"]],"kompasiana.com":[["aopr","initAdserver"],["rmnt","script","adrecover.com"]],"komputerswiat.pl":[["rmnt","script","__adblocker","excludes","self.__next"],["acs","$onet","adblock"]],"ksl.com":[["acs","showAdBlock"]],"kstatewomenshoops.org":[["set","blockAdBlock","trueFunc"]],"kwokspots.com":[["rmnt","script","/__adblocker|html-load/"]],"lampungway.com":[["aopw","adBlockDetected"]],"lancashiretelegraph.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"landroverevforum.com":[["rmnt","script","html-load.com"]],"latinblog.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"laurelberninteriors.com":[["rmnt","script","/__adblocker|html-load/"],["set","Object.prototype._adsDisabled","true"],["remove-cookie","/__adblocker|ccuid/"],["rmnt","script","__adblocker"]],"lazytranslations.com":[["aost","String.prototype.charCodeAt","ai_"]],"ldnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"leasehackr.com":[["rmnt","script","/__adblocker|html-load/"]],"leoduq.com":[["rmnt","script","/__adblocker|html-load/"]],"letmejerk6.com":[["aopr","ExoLoader"],["aeld","","_0x"]],"lfpress.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"lheritierblog.com":[["noeval-if","/chp_?ad/"]],"lifeismessyandbrilliant.com":[["rmnt","script","/__adblocker|html-load/"]],"lifemadeketo.com":[["rmnt","script","/__adblocker|html-load/"]],"lifewithgremlins.com":[["rmnt","script","/__adblocker|html-load/"]],"link.get2short.com":[["set","blurred","false"]],"listendata.com":[["rmnt","script","/__adblocker|html-load/"],["rmnt","script","AdBlocker"]],"liveandletsfly.com":[["rmnt","script","await eval"]],"livemint.com":[["set","dapTracker","{}"],["set","dapTracker.track","noopFunc"]],"liveonlinesports.net":[["acs","document.createElement","dataset.zone"]],"liverpoolecho.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"livesports4u.pw":[["rmnt","script","popundersPerIP"]],"livinghealthywithchocolate.com":[["rmnt","script","/__adblocker|html-load/"]],"livornotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"lnbz.la":[["nowoif"],["set","blurred","false"]],"lokhung888.com":[["rmnt","script","/popup|arrDirectLink/"],["nowoif","_blank"]],"lolhentai.net":[["nowoif"],["aopr","loadTool"]],"lostineu.eu":[["nostif","Delay"]],"loveandrenovations.com":[["rmnt","script","/__adblocker|html-load/"]],"lowcarbinspirations.com":[["rmnt","script","/__adblocker|html-load/"]],"lrepacks.net":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"lucagrassetti.com":[["aopw","__aaZoneid"]],"madhentaitube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"maggotdrowning.com":[["aeld","DOMContentLoaded","adBlockNotice"]],"mailgen.biz":[["rmnt","script","insertAdjacentHTML"]],"makehealthyrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"malaysianchinesekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangas-origines.fr":[["acs","document.querySelectorAll","popMagic"]],"mangasco.com":[["acs","JSON.parse","break;case $."]],"manhwa68.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","","break;case $."]],"mantelligence.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masahub.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"matacoco.com":[["rmnt","script","html-load.com"]],"mathaeser.de":[["nostif","adb"]],"mathplayground.com":[["set","HTMLScriptElement.prototype.onerror","undefined"],["no-xhr-if","protectsubrev.com","length:10"],["aeld","error","dispatchEvent(window.catchdo)"],["nostif","En(e-1)"]],"matomeblade.com":[["rmnt","script","html-load.com"]],"matshortener.xyz":[["noeval-if","/chp_?ad/"]],"mbeqclub.com":[["rmnt","script","html-load.com"]],"meaningfuleats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"measuringstuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medeberiyas.com":[["acs","document.documentElement","break;case $."]],"medicalstudyzone.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"megadb.net":[["acs","document.documentElement","break;case $."]],"meganesport.net":[["rmnt","script","html-load.com"]],"mellysews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meltol.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"michellemorfett.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"militarydisneytips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"minecraftskins.com":[["noeval-if","page-kit.io"],["rmnt","script","window.__as_"]],"minecraftstation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"missouriwhitetails.com":[["rmnt","script","html-load.com"]],"mittengirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mixmods.com.br":[["noeval-if","/chp_?ad/"]],"mlbb.space":[["acs","EventTarget.prototype.addEventListener","delete window"]],"mlbpark.donga.com":[["nostif","content-loader.com"],["rmnt","script","KCgpPT57bGV0IGU"]],"mobile-cuisine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moderncamaro.com":[["rmnt","script","html-load.com"]],"modernhoney.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moin.de":[["nostif",".call(null)","10"],["rmnt","script","html-load.com"]],"momlifetoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneyning.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mostream.us":[["rmnt","script","{delete window["]],"motive213link.blogspot.com":[["acs","JSON.parse","break;case $."]],"motorgeek.com":[["rmnt","script","html-load.com"]],"movies-watch.com.pk":[["aeld","","break;case $."]],"movieshd.watch":[["acs","document.documentElement","break;case $."]],"mp-pistol.com":[["rmnt","script","html-load.com"]],"mp3songsdownloadf.blogspot.com":[["acs","Math","break;case $."]],"mp3y.info":[["nowoif"]],"mscdroidlabs.es":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"mtgdecks.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mturbogamer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"multishows.top":[["rmnt","script","/adbl/i","stay","1"],["set-local-storage-item","ad_free_expiry","9999999999999"]],"musicsite.biz":[["aeld","","break;case $."],["aopr","open"]],"mybeautybunny.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mycolombianrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mykitchenescapades.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mymbonline.com":[["rmnt","script","html-load.com"]],"mythinkbiglife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myvideo.ge":[["json-prune","data.[].relationships.advert data.[].relationships.vast"]],"mywinston-salem.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"namethatporn.com":[["popads-dummy"]],"nastybulb.com":[["aopr","document.dispatchEvent"]],"navaraforum.com":[["rmnt","script","/__adblocker|html-load/"]],"networkhint.com":[["set","detectAdBlock","noopFunc"]],"newhome.de":[["acs","document.getElementById","blocker_div"]],"newsandstar.co.uk":[["set","adLight","true"]],"niketalk.com":[["rmnt","script","html-load.com"]],"northwaleschronicle.co.uk":[["set","adLight","true"]],"nosubapp.com":[["nostif","detectAdBlock"]],"nothingbutnewcastle.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"noticias.gospelmais.com.br":[["set","blockAdBlock","true"]],"nousdecor.com":[["nano-sib","counter","*"]],"novelgames.com":[["rmnt","script","/__adblocker|html-load/"],["nano-sib","skipAdSeconds","","0.02"]],"nowgg.lol":[["no-fetch-if","googlesyndication"]],"nsfwzone.xyz":[["aopr","__Y"]],"nursefern.com":[["rmnt","script","/__adblocker|html-load/"]],"o2.pl":[["nano-sib","consoleLoaded?clearInterval"]],"oceanbreezenyc.org":[["set","blockAdBlock","trueFunc"]],"odkrywamyzakryte.com":[["nofab"]],"ohmy-creative.com":[["rmnt","script","/__adblocker|html-load/"]],"oldsaltfarm.com":[["rmnt","script","/__adblocker|html-load/"]],"oncehelp.com":[["aeld","click","trigger"],["aopr","open"],["set","blurred","false"]],"oneupload.to":[["set","cRAds","false"]],"online-xxxmovies.com":[["noeval"],["aopr","Aloader.serve"]],"onyxfeed.com":[["noeval-if","/chp_?ad/"]],"op-online.de":[["nostif",".call(null)","10"]],"openstartup.tm":[["noeval-if","/chp_?ad/"]],"opiniones-empresas.com":[["noeval-if","/chp_?ad/"]],"orusoku.com":[["rmnt","script","html-load.com"]],"osxinfo.net":[["acs","$","btoa"]],"ourlovelanguageisfood.com":[["rmnt","script","/__adblocker|html-load/"]],"overgal.com":[["no-fetch-if","googlesyndication"],["nano-sib","timeLeft","*","0.001"]],"overtakefans.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"paktech2.com":[["set","openPopunder","noopFunc"],["rmnt","script","fromCharCode"]],"palisadeforum.com":[["rmnt","script","html-load.com"]],"pandaznetwork.com":[["set","blurred","false"]],"papalah.com":[["aopw","adBlockDetected"]],"paperzonevn.com":[["nostif","adb"]],"parapropracticetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pastemytxt.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"paylaterin.com":[["aost","decodeURIComponent","autoptimize"]],"payt.com":[["acs","document.createElement","script"]],"peakbagger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peterboroughtoday.co.uk":[["rmnt","script","await eval"]],"physicsread.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picksandparlays.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pimpandhost.com":[["nano-stb","count"]],"pipandebby.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pirate4x4.com":[["rmnt","script","html-load.com"]],"pirateiro.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pixsera.net":[["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"],["set","hold_click","false"]],"planet-9.com":[["rmnt","script","html-load.com"]],"planetfootball.com":[["rmnt","script","/_0x|'innerHTML'/"]],"plantifullybasedblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"play.virginmediatelevision.ie":[["json-prune","avails"]],"player4me.vip":[["nowoif"]],"playhydrax.com":[["set","console.clear","undefined"],["ra","style","#over"],["nowoif","/^/","1"],["set","document.ontouchend","null"],["set","document.onclick","null"],["aost","HTMLElement.prototype.click","_0x"]],"pliroforiki-edu.gr":[["noeval-if","/chp_?ad/"]],"poco.rcccn.in":[["noeval-if","/chp_?ad/"]],"poemanalysis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"poki-gdn.com":[["aopr","alert"]],"polsatsport.pl":[["no-xhr-if","xml"]],"polseksongs.blogspot.com":[["noeval-if","#fab"]],"pomofocus.io":[["no-xhr-if","adsbygoogle","length:10"]],"porhubvideo.com":[["nostif","myTestAd"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","eval","replace"]],"pornblade.com":[["aeld","click","popMagic"]],"porndollz.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"]],"pornhits.com":[["acs","ACtMan"]],"pornjapanesesex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"pornmonde.com":[["acs","document.querySelectorAll","popMagic"]],"pornotorrent.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornrabbit.com":[["nowoif"],["acs","document.querySelectorAll","popMagic"]],"pornuploaded.net":[["aopr","document.dispatchEvent"]],"pornvideotop.com":[["aopr","open"],["nostif","location.href"]],"portsmouth.co.uk":[["rmnt","script","await eval"]],"primeflix.website":[["acs","Math","break;case $."]],"primevideo.com":[["set","ue_adb_chk","1"]],"priusforum.com":[["rmnt","script","html-load.com"]],"programme.tv":[["aopr","_sp_._networkListenerData"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"promiblogs.de":[["noeval-if","/chp_?ad/"]],"prophecyowners.com":[["rmnt","script","html-load.com"]],"quiltfusion.com":[["acs","parseInt","break;case $."]],"ragerampage.com":[["rmnt","script","/__adblocker|html-load/"]],"randomarchive.com":[["acs","document.querySelectorAll","popMagic"]],"readcomiconline.li":[["rmnt","script","{delete window["]],"reasonstoskipthehousework.com":[["rmnt","script","/__adblocker|html-load/"]],"reporterherald.com":[["set","CnnXt.Event.fire","noopFunc"]],"reporternews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"reqlinks.net":[["set","blurred","false"]],"retailshout.com":[["rmnt","script","/__adblocker|html-load/"]],"review42.com":[["rmnt","script","/__adblocker|html-load/"]],"richhioon.eu":[["aopr","BetterJsPop"]],"rightwingnews.com":[["rmnt","script","/==undefined.*body/"]],"rimfirecentral.com":[["rmnt","script","html-load.com"]],"ripexbooster.xyz":[["rmnt","script","antiAdBlockerHandler"]],"rockcelebrities.net":[["rmnt","script","/__adblocker|html-load/"]],"rodsnsods.co.uk":[["rmnt","script","html-load.com"]],"roemische-zahlen.net":[["nostif",".call(null)","10"]],"rosasidan.ws":[["set","detectAdBlock","noopFunc"]],"routedfamily.com":[["rmnt","script","/__adblocker|html-load/"]],"rpmstream.live":[["json-prune","ads playerAds"]],"rugbystreams.me":[["rmnt","script","adserverDomain"]],"runlifteatrepeat.com":[["rmnt","script","/__adblocker|html-load/"]],"rusticpassionbyallieblog.com":[["rmnt","script","/__adblocker|html-load/"]],"sabishiidesu.com":[["noeval-if","/chp_?ad/"]],"sagittarius-horoscopes.com":[["nostif","displayMessage","2000"]],"salamanca24horas.com":[["aopr","ReviveBannerInterstitial"]],"sarkariresult.social":[["noeval-if","/chp_?ad/"]],"savortheflavour.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scriptsrbx.com":[["no-xhr-if","googlesyndication"]],"scriptzhub.com":[["nostif","show()"]],"scrollsguided.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sctimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"see-xxx.com":[["acs","document.querySelectorAll","popMagic"]],"seekplayer.vip":[["nowoif"]],"selfhacked.com":[["aopr","googletag"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"serien.cam":[["acs","parseInt","break;case $."]],"sermonsearch.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"severeporn.com":[["acs","document.querySelectorAll","popMagic"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"sewrella.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexmutant.com":[["acs","document.querySelectorAll","popMagic"]],"sexyfreepussy.com":[["acs","document.querySelectorAll","popMagic"]],"sexymilfsearch.com":[["noeval"],["aopr","Aloader.serve"]],"shegotass.info":[["aopr","popunder"],["set","flashvars.adv_pre_vast",""]],"sheknows.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"shercoforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"siamfishing.com":[["acs","is_noadblock","window.location"]],"silveradosierra.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"simpleandfraiche.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simpleasthatblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplebits.io":[["no-xhr-if","/ads"],["no-fetch-if","/ads"],["nostif","","3000"]],"simplymaggie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplyscratchmade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siteapk.net":[["aopr","open"]],"sixfiguresunder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skintagsgone.com":[["acs","btoa","BOOTLOADER_LOADED"]],"skpb.live":[["acs","atob","decodeURIComponent"]],"slashdot.org":[["rmnt","script","html-load.com"]],"slowcookerliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slowthecookdown.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sn95forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snackfora.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"snacknation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"so1.asia":[["nano-stb","","","0.02"],["nano-sib","","","0.02"],["rc","hidden",".panel-body > .text-center > button"],["ra","disabled",".panel-body > .text-center > button"]],"soccershoes.blog":[["aeld","DOMContentLoaded","adsSrc"]],"socialjunkie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"societyofrock.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"softwareengineer-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"solopornoitaliani.xxx":[["acs","document.querySelectorAll","popMagic"]],"songsio.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"southerndakotamama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sparklesofsunshine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spicyvintageporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"sportsgamblingpodcast.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"ssdownloader.online":[["noeval-if","/chp_?ad/"]],"staaker.com":[["nano-sib","counter","*"]],"statscrew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"staugustine.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"steamcrackedgames.com":[["nowoif"]],"steamunderground.net":[["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"stiletv.it":[["set","StileApp.somecontrols.adBlockDetected","noopFunc"]],"stocktitan.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stpm.co.uk":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"stream.nflbox.me":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"streampass.shop":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"streamshunters.eu":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"strefaobrony.pl":[["rmnt","script","admiral","excludes",",\\\""]],"stylebyemilyhenderson.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sunbtc.space":[["set","adBlock","false"]],"sweetestmenu.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetsandthankyou.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"system32.ink":[["noeval-if","/chp_?ad/"]],"t3n.de":[["set-local-storage-item","ADB_ACTIVE_STATUS","$remove$"]],"tainhanhvn.com":[["aeld","load","/nextFunction|2000/"]],"tainio-mania.online":[["aeld","","break;case $."],["rmnt","script","AaDetector"],["nowoif"],["aopr","mm"]],"talkparrotlets.com":[["rmnt","script","html-load.com"]],"tanfacil.net":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","document.onmousedown"]],"tasteslovely.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tastycocktailrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"taurus.topmanhuas.org":[["noeval-if","/chp_?ad/"]],"techybuff.com":[["nostif","bait"]],"telenovelas-turcas.com.es":[["aopr","BetterJsPop"],["nowoif"]],"tempatwisata.pro":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com|googlesyndication|pubadx/","{\"type\": \"cors\"}"],["nowoif","_blank"],["nano-sib","/.?/","*"],["nano-stb","/.?/","*"]],"tenseishitaraslimedattaken-manga.com":[["acs","document.querySelectorAll","popMagic"]],"teresapoliticallearn.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"thatveganbabe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"the-military-guide.com":[["aopr","__eiPb"]],"the-social-edge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theadultman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecakeblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thechaotictable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theconsciousplantkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecouponchallenge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecravetraveler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedigitalfix.com":[["nosiif","debug"]],"theeburgerdude.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theendlessappetite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefoodcharlatan.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegoatspot.net":[["rmnt","script","html-load.com"]],"thehealthyhomeeconomist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thekingavatar.com":[["acs","Math","break;case $."]],"thelosmovies.com":[["acs","parseInt","break;case $."]],"themeparkinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themilitarywifeandmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themontessoritwinmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themusicman.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenewx.org":[["rmnt","script","html-load.com"]],"theresaneoforthat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theslenderwrist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesoccermomblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesportster.com":[["aopr","googletag"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"thethingswellmake.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theunsealed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thevikingage.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"thewatchforum.co.uk":[["rmnt","script","html-load.com"]],"thewhiskeyjug.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewoodenskillet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theworkathomewife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theyummybowl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thorforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thotcity.su":[["set","flashvars.adv_pre_src",""]],"thothd.to":[["nostif","offsetWidth"]],"thurrockgazette.co.uk":[["set","adLight","true"]],"ticoandtina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tiktokrealtime.com":[["nostif","documentElement.innerHTML"],["no-fetch-if","doubleclick","","{\"type\": \"opaque\"}"],["set","document.hasFocus","trueFunc"]],"tmail.sys64738.at":[["no-fetch-if","googlesyndication"]],"tny.so":[["acs","Math","break;case $."]],"todaysgardener.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toddlerdietitiantiff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toptenknowledge.com":[["noeval-if","/chp_?ad/"]],"topvideosgay.com":[["aopr","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"toursetlist.com":[["rmnt","script","ai_adb"]],"tous-sports.ru":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","Adcash"]],"towratings.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toyotanation.com":[["rmnt","script","html-load.com"]],"tradingref.com":[["no-fetch-if","method:HEAD"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"traegerforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trailblazertalk.com":[["rmnt","script","html-load.com"]],"trangchu.news":[["rmnt","script","deblocker"],["no-xhr-if","/doubleclick|googlesyndication/"]],"trapshooters.com":[["rmnt","script","html-load.com"]],"traverseforum.com":[["rmnt","script","html-load.com"]],"trendohunts.com":[["noeval-if","/chp_?ad/"]],"tropicalfishkeeping.com":[["rmnt","script","html-load.com"]],"troprockin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"truyenaudiocv.net":[["aopr","adblockDetect"]],"trzpro.com":[["nano-sib","counter--"]],"tubexxxone.com":[["noeval"],["aopr","Aloader.serve"]],"turkeymenus.com":[["noeval-if","/chp_?ad/"]],"turningforprofit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tv5mondeplus.com":[["remove-cookie","didomi_token"],["set-local-storage-item","didomi_token","$remove$"]],"uozzart.com":[["noeval-if","/chp_?ad/"]],"up-load.io":[["noeval"],["nostif","nextFunction","2000"],["acs","document.querySelectorAll","popMagic"],["acs","parseInt","break;case $."]],"upornia.com":[["rmnt","script","/popunder|isAdBlock|admvn.src/i"]],"uptoimage.com":[["acs","parseInt","break;case $."]],"usahealthandlifestyle.com":[["noeval-if","/chp_?ad/"]],"uwlathletics.com":[["set","blockAdBlock","trueFunc"]],"v6performance.net":[["rmnt","script","html-load.com"]],"vanillabeancuisine.com":[["rmnt","script","/__adblocker|html-load/"]],"varminthunters.com":[["rmnt","script","html-load.com"]],"veganfamilyrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"ver-comics-porno.com":[["aeld","click","popMagic"]],"vestimage.site":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"victoriaelizabethbarnes.com":[["rmnt","script","/__adblocker|html-load/"]],"vidarbergum.com":[["rmnt","script","/__adblocker|html-load/"]],"vidcloudpng.com":[["acs","Math","break;case $."]],"viewalongtheway.com":[["rmnt","script","/__adblocker|html-load/"]],"vippers.jp":[["rmnt","script","html-load.com"]],"viralxns.com":[["noeval-if","/chp_?ad/"]],"volusiariders.com":[["rmnt","script","html-load.com"]],"walftech.com":[["nostif","/offsetHeight|getComputedStyle/"],["nowoif"]],"weairdown.com":[["rmnt","script","/__adblocker|html-load/"]],"wealthbytes.co":[["rmnt","script","/__adblocker|html-load/"]],"weeatatlast.com":[["rmnt","script","/__adblocker|html-load/"]],"weightofstuff.com":[["rmnt","script","/__adblocker|html-load/"]],"weirdunsocializedhomeschoolers.com":[["rmnt","script","/__adblocker|html-load/"]],"wendypolisi.com":[["rmnt","script","/__adblocker|html-load/"]],"west-games.com":[["rmnt","script","/__adblocker|html-load/"]],"westword.com":[["set","VMG.Components.Adblock","false"],["rmnt","script","/==undefined.*body/"]],"wetasiancreampie.com":[["aopr","popit"],["aeld","popstate","noPop"]],"wetter.de":[["no-xhr-if","homad-global-configs"]],"wetteronline.de":[["rmnt","script","html-load.com"]],"wfmz.com":[["nostif","error-report.com"],["rmnt","script","html-load.com"]],"whatdresscodeblog.com":[["rmnt","script","/__adblocker|html-load/"]],"whatsmomcookin.com":[["rmnt","script","/__adblocker|html-load/"]],"whattogetmy.com":[["rmnt","script","/__adblocker|html-load/"]],"wideopenspaces.com":[["rmnt","script","/__adblocker|html-load/"]],"windowsonarm.org":[["no-fetch-if","doubleclick"]],"wired2fish.com":[["rmnt","script","/__adblocker|html-load/"]],"wirralglobe.co.uk":[["set","adLight","true"],["aopr","_sp_._networkListenerData"]],"wisconsinrapidstribune.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"wjbf.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"womangettingmarried.com":[["rmnt","script","/__adblocker|html-load/"]],"woodtv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wordcookieanswer.com":[["rmnt","script","/__adblocker|html-load/"]],"wordfinderx.com":[["rmnt","script","html-load.com"]],"wordhippo.com":[["rmnt","script","html-load.com"]],"worldle.teuteuf.fr":[["rmnt","script","html-load.com"]],"worldtop2.com":[["noeval-if","/chp_?ad/"]],"wormser-zeitung.de":[["nostif",".call(null)","10"]],"wowclassicdb.com":[["rmnt","script","/__adblocker|html-load/"]],"wp.solar":[["noeval-if","/chp_?ad/"]],"wqad.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wymondhamandattleboroughmercury.co.uk":[["set","adLight","true"]],"xc40forum.com":[["rmnt","script","html-load.com"]],"xfforum.co.uk":[["rmnt","script","html-load.com"]],"xhadult3.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xiaomitools.com":[["acs","addEventListener","google_ad_client"]],"xn--nbkw38mlu2a.com":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"xnudevideos.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxmovz.com":[["aopr","decodeURI"]],"xxxymovies.com":[["set","flashvars.adv_pause_html",""],["aopw","__aaZoneid"]],"yarnhookneedles.com":[["rmnt","script","/__adblocker|html-load/"]],"ydr.com":[["aopr","_sp_._networkListenerData"],["set","gnt.x.uam","undefined","runAt","interactive"]],"ynk-blog.com":[["noeval-if","/chp_?ad/"]],"yomotherboard.com":[["rmnt","script","/__adblocker|html-load/"]],"youpornfm.com":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"youtubemp3donusturucu.net":[["aeld","click","t(a)"]],"yuki0918kw.com":[["noeval-if","/chp_?ad/"]],"zeiz.me":[["nano-sib"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
