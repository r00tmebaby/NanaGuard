/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"01234movies.ru":[["acs","Math","break;case $."]],"10short.org":[["nano-sib","timer","*","0.001"]],"11xmovies.nl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["]],"11xmovies.pl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["]],"123animes.it":[["aopr","glxopen"],["aopr","AaDetector"]],"123gostream.co.uk":[["acs","Math","break;case $."]],"123movies-free.com.br":[["acs","document.documentElement","break;case $."]],"123moviesme.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["aopr","decodeURI"]],"1kmovies.ru":[["acs","JSON.parse","break;case $."],["aeld","","break;case $."]],"1madrasdub.com.br":[["aeld","","break;case $."]],"1milf.com":[["aost","Math.floor","randStr"]],"24pdd.com":[["noeval-if","/chp_?ad/"]],"24pdd.pl":[["noeval-if","/chp_?ad/"]],"2gomovies.pl":[["acs","JSON.parse","break;case $."]],"4movierulz.ru":[["aeld","","_0x"],["acs","document.documentElement","break;case $."]],"4movierulz1.co.uk":[["acs","document.documentElement","break;case $."],["nowoif"]],"5play.es":[["nano-sib","countdown","*"]],"5thwheelforums.com":[["rmnt","script","/__adblocker|html-load/"]],"5xmovies.it":[["acs","parseInt","break;case $."]],"5xmovies.pl":[["acs","parseInt","break;case $."]],"720pxmovies.blogspot.com":[["acs","Math","break"],["aopr","myFunction_ads"],["nowoif"]],"7thgenhonda.com":[["rmnt","script","html-load.com"]],"8newsnow.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"9thgencivic.com":[["rmnt","script","html-load.com"]],"9xflix.org":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"9xupload.de":[["nano-stb"],["acs","parseInt","break;case $."],["aeld","","/_0x|localStorage\\.getItem/"]],"a8ix.es":[["acs","document.documentElement","break;case $."]],"abc4westmichigan.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"acedarspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"actuallygoodteamnames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"actvid.co.uk":[["acs","addEventListener","HTMLAllCollection"]],"actvid.es":[["acs","addEventListener","HTMLAllCollection"]],"adultgamesworld.com":[["set","doOpen","undefined"]],"adviceonlyfinancial.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"afilmywap.pl":[["popads-dummy"],["aopr","glxopen"]],"aha-music.com":[["aopw","__tcfapi"],["set","ezRewardedAds.requestAndShow","noopFunc"],["nano-stb","timeout","*","0.02"],["set","__ahaEzoicLoaderError","false"],["set","__ahaEzoicInjectedAt","0"],["nano-sib",".value--","1000","0.001"]],"akirabox.pl":[["rmnt","script","/var lw=\\(\\[\\]\\+!\\[\\]\\)/"]],"alexsports.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","mm"],["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"alexsportz.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"allcalidad.app":[["noeval-if","/chp_?ad/"]],"allcalidad.fr":[["acs","doOnce"],["aeld","","0x"],["aopw","smrtSB"],["set","btoa","null"],["ra","href","#clickfakeplayer"],["aeld","click","popMagic"],["acs","Math","zfgloaded"]],"alleveilingen.nl":[["acs","document.addEventListener","fakeAd"]],"allyskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amateurfapper.com":[["acs","document.querySelectorAll","popMagic"]],"amateurprochef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anconatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"andyday.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"anime4mega.net":[["noeval-if","/chp_?ad/"]],"anime4up.com.br":[["acs","parseInt","break;case $."],["nowoif"]],"animesa.it":[["set","adblock_use","false"]],"animesanka.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"animesexclip.com":[["aopr","popit"],["aeld","popstate","noPop"]],"annoncesescorts.com":[["acs","document.querySelectorAll","popMagic"]],"aoashimanga.com":[["acs","document.querySelectorAll","popMagic"]],"apnews.com":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"app-sorteos.com":[["rmnt","script","onerror"]],"appunwrapper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arabseed.it":[["aeld","","_0x"],["acs","Promise","break;case $."]],"aronaforums.co.uk":[["rmnt","script","html-load.com"]],"ashemaletube.org":[["set","openPopunder","noopFunc"]],"ashemaletube.ru":[["set","openPopunder","noopFunc"]],"asianplay.nl":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"asiansex.com.br":[["aopr","popit"],["aeld","popstate","noPop"]],"asiaon.pl":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"],["no-xhr-if","googlesyndication","length:10"],["no-xhr-if","doubleclick"],["json-prune","props.pageProps.data.aotHomepageTopBar props.pageProps.data.aotHomepageTopBar props.pageProps.data.aotHeaderAdScripts props.pageProps.data.aotFooterWidgets"]],"ask4movie.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","AaDetector"],["nowoif"]],"audiotools.com":[["noeval-if","/chp_?ad/"]],"autoshieldd.com":[["noeval-if","/chp_?ad/"]],"av1core.de":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com/"],["set","HTMLElement.prototype.offsetHeight","1"],["nowoif","uplcm.com"],["set","document.hidden","false"]],"babaganosh.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakingbeauty.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"balkanteka.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"bang14.com":[["acs","$","setCookie"]],"bcaquaria.com":[["rmnt","script","html-load.com"]],"benzinga.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bftactics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"biovetro.net":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"biqle.org":[["acs","decodeURI","decodeURIComponent"],["aopr","Date.prototype.toUTCString"]],"bittbox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blogghetti.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bmovie.de":[["acs","Math","zfgloaded"]],"bokepindo13.de":[["rmnt","script","/popMagic|pop1stp/"]],"bokepindo13.ru":[["rmnt","script","/popMagic|pop1stp/"]],"bolly2tolly.nl":[["acs","document.documentElement","break;case $."]],"boredbat.com":[["aopr","b2a"]],"boredpanda.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"br.de":[["set","akamaiDisableServerIpLookup","noopFunc"]],"brentwoodlive.co.uk":[["set","adLight","true"]],"brstej.com":[["aeld","","_0x"]],"brutusforum.com":[["rmnt","script","html-load.com"]],"bypass.city":[["aopr","Adcash"]],"castandspear.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cbr500riders.com":[["rmnt","script","html-load.com"]],"ciaoflorentina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinecloud.net":[["nostif","location.href","5000"],["aost","Promise","imageProbe"]],"cinen9.nl":[["acs","Math","break;case $."]],"cinetux.co.uk":[["aopw","smrtSB"],["ra","href","#clickfakeplayer"],["acs","Math","zfgloaded"]],"civicsquestions.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clampschoolholic.de":[["acs","JSON.parse","break;case $."]],"cloudynights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clubtread.com":[["rmnt","script","html-load.com"]],"cmovies.com.br":[["aeld","","break;case $."]],"colearn.id":[["json-prune","*.tanya_video_ads"]],"collectorfreaks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cometogliere.com":[["noeval-if","/chp_?ad/"]],"comicallyincorrect.com":[["rmnt","script","/==undefined.*body/"]],"comingsoon.net":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"compucalitv.com":[["aeld","DOMContentLoaded","compupaste"],["aopr","redirectURL"]],"comunio.co.uk":[["nostif",".call(null)","10"]],"conservationinstitute.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"convert-case.softbaba.com":[["aopr","adblockDetector"]],"cookingforkeeps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cottageandvine.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"couponcravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cracked.com":[["rmnt","script","/adblockerDisabled|\\.cmd\\.unshift|admiral/","excludes",",\\\""]],"craftsyhacks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cravenherald.co.uk":[["set","adLight","true"]],"crosswordsolver.com":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"crxcommunity.com":[["rmnt","script","html-load.com"]],"cuatro.com":[["aopr","$REACTBASE_STATE.serverModules.push"]],"cuevana3.com":[["aopr","S9tt"],["aopr","decodeURI"],["aopw","popUpUrl"],["acs","Math","break;case $."]],"cupcakesandcutlery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cupofjo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutiecomics.com":[["acs","document.querySelectorAll","popMagic"]],"cwfeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daddyhd.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","Adcash"]],"dailytech-news.eu":[["nostif","_0x"],["noeval-if","ads"]],"dark-gaming.com":[["no-xhr-if","lr-ingest.io"]],"darlingquote.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"depedlps.ru":[["aeld","load","onload"],["aopr","encodeURIComponent"]],"descargasok.de":[["acs","document.addEventListener","google_ad_client"]],"designorate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desiremovies.pl":[["acs","document.createElement","console"],["aeld","","_0x"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"desiremovies.ru":[["acs","document.createElement","console"],["aeld","","_0x"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"diabetesselfmanagement.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"discoveryplus.de":[["json-prune","data.attributes.config.freewheel data.attributes.config.featureFlags.dPlayer"],["json-prune","data.attributes.ssaiInfo.forecastTimeline data.attributes.ssaiInfo.vendorAttributes.nonLinearAds data.attributes.ssaiInfo.vendorAttributes.videoView data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adMetadata data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adParameters data.attributes.ssaiInfo.vendorAttributes.breaks.[].timeOffset"]],"divxfilmeonline.net":[["acs","document.documentElement","break;case $."]],"dlupload.com":[["nowoif"]],"do7go.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dodgeintrepid.net":[["rmnt","script","html-load.com"]],"dollopofdough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doods.it":[["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"doodstream.com.br":[["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dooood.com.br":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dosya.co":[["nano-stb"]],"downloadhub.com.br":[["acs","document.documentElement","break;case $."],["nowoif"]],"dramacool.com.br":[["acs","JSON.parse","break;case $."]],"dramacool.ru":[["acs","JSON.parse","break;case $."]],"dreamfancy.org":[["nostif","nextFunction","250"],["nowoif"]],"droidgamers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dropgalaxy.es":[["nowoif"]],"dropmms.es":[["aeld","load","undefined"],["acs","document.onkeydown"]],"drumspy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dumblittleman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"eatatmaudes.com":[["rmnt","script","/__adblocker|html-load/"]],"egyanime.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","/btoa|break/"]],"einthusan.com":[["no-xhr-if","/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"]],"elantrasport.com":[["rmnt","script","html-load.com"]],"elmundo.es":[["aopr","adUnits"]],"elperiodicodearagon.com":[["nostif","sub"]],"embedmoon.com.br":[["nowoif"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"]],"englishbulldognews.com":[["rmnt","script","/__adblocker|html-load/"]],"enoki.nz":[["rmnt","script","/__adblocker|html-load/"]],"esportivos.it":[["acs","document.documentElement","break;case $."],["rmnt","script","popundersPerIP"]],"ettv.com":[["nowoif"],["aopr","AaDetector"]],"ettv.com.br":[["nowoif"],["aopr","AaDetector"]],"everydaynourishingfoods.com":[["rmnt","script","/__adblocker|html-load/"]],"evileaks.ru":[["acs","$","prompt"]],"exceltrick.com":[["rmnt","script","/__adblocker|html-load/"]],"exclusiveasianporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"extratorrent.net":[["aopw","afStorage"],["nowoif"]],"extrem-down.org":[["rmnt","script","adserverDomain"]],"familiesgotravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"familyfelicity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"familytreemagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"famousnipple.com":[["acs","document.querySelectorAll","popMagic"]],"fannetasticfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fashionbeans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fastandslowcooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fastilinks.it":[["acs","parseInt","break;case $."]],"fbgo.ru":[["aopr","__Y"],["aopr","mm"]],"fbstreams.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fedandfit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fiestast.net":[["rmnt","script","html-load.com"]],"fifojik.pl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"filemoon.co.uk":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"],["acs","navigator","popunder"],["nano-sib","seconds"],["aopr","FMPoopS"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"]],"filmlinks4u.com":[["aeld","","break;case $."]],"filmpertutti.org":[["acs","document.querySelectorAll","popMagic"],["aeld","","break;case $."]],"filmy.es":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"filmy4web.com":[["nowoif"]],"filmyfly.de":[["acs","EventTarget.prototype.addEventListener","delete window"]],"financestrategists.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"findmyguitar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"finfang.net":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"firestream.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","adserverDomain"]],"firstpost.com":[["ra","href",".t-out-span [href*=\"utm_source\"]","stay"],["ra","src",".t-out-span [src*=\".gif\"]","stay"]],"fitbottomedgirls.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fivemturk.com":[["aopr","adBlockDetected"]],"flixhub.org":[["noeval-if","/chp_?ad/"]],"flyfishbc.com":[["rmnt","script","html-load.com"]],"flygbussarna.se":[["no-fetch-if","/piwik-"]],"footstockings.com":[["set","flashvars.video_click_url",""],["set","flashvars.popunder_url",""],["set","flashvars.protect_block",""]],"fosters.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"foundit.net":[["set","freshpaint","{}"],["set","freshpaint.track","noopFunc"]],"fourfourtwo.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"frankfurter-wochenblatt.de":[["nostif",".call(null)","10"]],"freevpn.us":[["noeval-if","adbl"]],"freevstplugins.com.br":[["noeval-if","/chp_?ad/"]],"freiepresse.de":[["set","UhasAB","false"]],"frembed.ru":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","atob","/popundersPerIP[\\s\\S]*?Date[\\s\\S]*?getElementsByTagName[\\s\\S]*?insertBefore/"]],"french-stream.nl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"frenchcountrycottage.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fromabcstoacts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fromscratchdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frontrangefed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullcinema.ru":[["acs","JSON.parse","break;case $."]],"fulltube.com.br":[["acs","JSON.parse","break;case $."]],"fullxh.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"fumettologica.it":[["noeval-if","/chp_?ad/"]],"fxstreet-vn.com":[["rmnt","script","html-load.com"]],"gamedrive.org":[["aost","document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["acs","String.fromCharCode","fetch"],["acs","eval","replace"],["aopr","b2a"],["aeld","DOMContentLoaded","window.open"],["aeld","click","_shouldProcessLink"],["aeld","click","preventDefault"],["rmnt","script","'+'","excludes","/^\\(self\\.__next/"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"gamer18.net":[["aeld","DOMContentLoaded","src=atob"]],"gamerdiscovery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamersglobal.de":[["nostif",".call(null)","10"]],"gamestorrents.org":[["aopr","LieDetector"]],"garnishandglaze.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gdflix.fr":[["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","history.pushState"]],"gdirect.es":[["acs","Math","break;case $."]],"gearingcommander.com":[["nostif","/innerHTML|AdBlock/"],["no-xhr-if","ads"]],"genxfinance.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"getmeonacruise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ggjav.com":[["acs","$","popunder"]],"girlschannel.net":[["rmnt","script","()=>eval"]],"gluedtomycraftsblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gmtruckclub.com":[["rmnt","script","html-load.com"]],"gnula.pl":[["nowoif"],["aeld","click","","elements",".post.movies"],["acs","JSON.parse","break;case $."]],"gogoanime.fr":[["acs","atob","decodeURIComponent"],["nowoif"],["set","console.clear","undefined"],["set","check_adblock","true"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","","break;case $."]],"gogoplay1.com":[["acs","parseInt","break;case $."]],"gohuskies.com":[["set","blockAdBlock","trueFunc"]],"golink.bloggerishyt.in":[["set","blurred","false"]],"gomovies.net":[["nowoif"],["set","check_adblock","true"],["aopr","mm"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","addEventListener","HTMLAllCollection"]],"gplastra.com":[["noeval-if","ads"],["aost","setTimeout","data"]],"greatyarmouthmercury.co.uk":[["set","adLight","true"]],"gtoforum.com":[["rmnt","script","html-load.com"]],"guardaserie.net":[["aeld","","/pop|_blank/"]],"guiafinanceiro.top":[["set","adb_failed","false"]],"guitarworld.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"hamburgerinsult.com":[["acs","document.documentElement","break;case $."]],"hardwoodhoudini.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"hartlepoolmail.co.uk":[["rmnt","script","await eval"]],"hawaii-guide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hd21.it":[["nowoif"]],"hdhub4u.es":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","mm"],["nowoif"]],"hdmovies4u.co.uk":[["aeld","","break;case $."]],"hdmovies4u.com.br":[["aeld","","break;case $."]],"hdss-to.org":[["acs","JSON.parse","break;case $."]],"heatherlikesfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heftig.fr":[["nostif",".call(null)","10"]],"heftig.pl":[["nostif",".call(null)","10"]],"hentaisd.com":[["aopr","LieDetector"]],"hentaisenpai.net":[["acs","document.querySelectorAll","popMagic"]],"hes-goals.de":[["acs","document.addEventListener","AdBlock"]],"heydonna.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hianime.se":[["rmnt","script","REDIRECT_URL"]],"hideout.es":[["acs","stop","adblock"]],"hivflix.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"holistichealthherbalist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homegrounds.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hondapioneerforum.com":[["rmnt","script","html-load.com"]],"hostserverz.com":[["no-xhr-if","googlesyndication"]],"hosttbuzz.com":[["nowoif"],["nano-sib","/countdown--|getElementById/","*","0.001"],["nano-stb","getElementById","*","0.001"]],"hotpress.info":[["nostif","nextFunction","2000"]],"hotscopes.de":[["aopw","puShown"],["nowoif"]],"howtodispose.info":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hwbusters.com":[["rmnt","script","adbl"]],"hwreload.it":[["acs","$","show"]],"i5talk.com":[["rmnt","script","html-load.com"]],"icdrama.pl":[["set","adblock","1"]],"iconicblogger.com":[["rmnt","script","catch"]],"idevicecentral.com":[["nostif","()=>"]],"igram.com.br":[["nano-sib"]],"imaginationsoup.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imgair.net":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"imgtown.org":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopr","popjs.init"],["aopw","Fingerprint2"],["nowoif"],["acs","addEventListener","-0x"]],"innateblogger.com":[["rmnt","script","adsbygoogle"]],"insidetherustickitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"intereseducation.com":[["acs","parseInt","break;case $."]],"isekaisubs.web.id":[["aost","String.prototype.charCodeAt","ai_"]],"janjua.ru":[["acs","Math","zfgloaded"]],"javbee.fr":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"javfc2.xyz":[["acs","WebAssembly","atob"],["aeld","click","doThePop"],["nowoif"],["acs","globalThis","break;case"],["no-fetch-if","thanksgivingdelights"],["aost","document.createElement","yes.onclick"]],"javhd.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"jeepkj.com":[["rmnt","script","/__adblocker|html-load/"]],"jetpunk.com":[["rmnt","script","/__adblocker|html-load/"],["no-xhr-if","prebid"],["remove-cookie","PageCount"],["set-local-storage-item","PageCount","$remove$"]],"jkdamours.com":[["noeval-if","/chp_?ad/"],["set","count","0"]],"juliasalbum.com":[["rmnt","script","/__adblocker|html-load/"]],"kaliscan.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","/popMagic|pop1stp/"]],"kat2.org":[["aeld","","break;case $."],["aopw","ospen"]],"katiescucina.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"],["rmnt","script","/__adblocker|html-load/"]],"katmoviehd4.com":[["acs","parseInt","break;case $."]],"kattracker.it":[["aeld","","break;case $."],["aopw","ospen"]],"kerapoxy.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["nowoif"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"]],"khoaiphim.com":[["rmnt","script","end_click"]],"kickass-anime.com.br":[["nowoif","/\\/4\\//"],["acs","setInterval","window.open"]],"kickasstorrents2.es":[["aeld","","break;case $."],["aopw","ospen"]],"kickassz.com":[["aeld","","break;case $."],["aopw","ospen"]],"kickassz.es":[["aeld","","break;case $."],["aopw","ospen"]],"kimoitv.com":[["acs","parseInt","break;case $."]],"kinox.ru":[["aopr","decodeURI"]],"kmhd.net":[["aeld","","history.go"]],"la123movies.org":[["acs","JSON.parse","break;case $."],["aeld","","break;case $."]],"lakersdaily.com":[["rmnt","script","/__adblocker|html-load/"]],"lastwar.wiki":[["rmnt","script","/__adblocker|html-load/"]],"lat69.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"lecceprima.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"lecturisiarome.ro":[["aopr","__eiPb"]],"legionscans.com":[["noeval-if","/chp_?ad/"]],"lenkino.pl":[["nostif","innerText","2000"]],"lineup11.net":[["nostif","/\\{[a-z]+\\(\\)\\}/"],["nosiif",".value||"],["aeld","visibilitychange",".value&&"]],"linkos.fr":[["nowoif"]],"linkshorts.org":[["aopr","open"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","/btoa|break/"]],"linux-magazin.de":[["nostif",".call(null)","10"]],"livecricket.nl":[["rmnt","script",";}}};break;case $."]],"livecricket.pl":[["rmnt","script",";}}};break;case $."]],"livestreams.org":[["nowoif","_blank"]],"livinggospeldaily.com":[["rmnt","script","/==undefined.*body/"]],"livingincebuforums.com":[["nostif",".offsetHeight"]],"lowcarblove.com":[["rmnt","script","/__adblocker|html-load/"]],"lustaufsleben.at":[["nostif",".call(null)","10"]],"magnetdl.it":[["nowoif","!magnetdl.","1"]],"malaysianchinesekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamaneedscake.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangago.me":[["acs","WebAssembly","atob"]],"manhastro.com":[["noeval-if","/chp_?ad/"]],"manhuatop.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["nowoif","_blank"]],"masaporn.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"mathgeekmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mavanimes.es":[["acs","JSON.parse","Promise"]],"maverickchat.com":[["rmnt","script","html-load.com"]],"maxicast.com":[["nowoif","_blank"]],"mazda6club.com":[["rmnt","script","html-load.com"]],"mcloud.guru":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif","_blank"]],"mcrypto.com.br":[["noeval-if","/chp_?ad/"]],"mdy48tn97.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"meatloafandmelodrama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meetimgz.com":[["acs","document.querySelectorAll","popMagic"]],"mega-dvdrip.pl":[["aeld","DOMContentLoaded","shortener"]],"mega1080p.net":[["aeld","DOMContentLoaded","btoa"]],"mega4up.it":[["ra","onclick","[onclick^=\"window.open\"]"],["nowoif"],["acs","Math","break;case $."]],"melodelaa.it":[["acs","parseInt","break;case $."]],"merakilane.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mhn.quest":[["nostif","adblock"]],"miamitake.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"micmicidol.ru":[["acs","document.querySelectorAll","popMagic"]],"microsip.org":[["rmnt","script","/google_esf|ins\\.adsbygoogle/"]],"miixdrop.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"milforddailynews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"militarybases.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mixandmatchmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mixdrop.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","adserverDomain"],["set","MDCore.adblock","0"],["acs","$","String.fromCharCode"],["nowoif"]],"mixdrp.de":[["aeld","load","download-wrapper"],["acs","$","String.fromCharCode"],["nowoif"]],"mjsbigblog.com":[["aopr","__eiPb"],["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"]],"mkvcage.de":[["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"mlfbd.pl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"moflix-stream.org":[["nostif","affiliate"],["nostif","afterOpen"]],"mommybunch.com":[["aopr","__eiPb"]],"monaco.co.il":[["noeval-if","/chp_?ad/"]],"monoschino2.com":[["rmnt","script","popMagic"]],"montereyherald.com":[["set","CnnXt.Event.fire","noopFunc"]],"mov2day.fr":[["aopr","LieDetector"]],"movie4me.co.uk":[["aopr","Math.floor"]],"moviebaaz.fr":[["acs","document.documentElement","break;case $."]],"movieplay.de":[["acs","document.documentElement","break;case $."]],"movierulzlink.de":[["aopr","String.fromCharCode"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"movierulzwatch.com.br":[["nowoif"]],"movierulzz.co.uk":[["nowoif"]],"movies07.co.uk":[["aeld","","pop"]],"movies4me.ru":[["acs","Math","break;case $."]],"movies4u3.it":[["acs","document.documentElement","break;case $."],["nowoif"],["aopr","antiAdBlockerHandler"]],"movies4u3.org":[["acs","document.documentElement","break;case $."],["nowoif"],["aopr","antiAdBlockerHandler"]],"moviesflix.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"]],"moviesflix.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"]],"movieuniverse.com.br":[["acs","document.documentElement","break;case $."]],"movisubmalay.it":[["aopr","glxopen"],["aopr","exoJsPop101"]],"mozielife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mozkra.com":[["acs","Math","break;case $."]],"mt.de":[["nostif",".call(null)","10"]],"myair.resmed.com":[["no-xhr-if","1.1.1.1/cdn-cgi/trace"]],"mycima.fr":[["acs","parseInt","break;case $."]],"mytreg.com":[["rmnt","script","html-load.com"]],"nandemo-uketori.com":[["rmnt","script","html-load.com"]],"nbastream.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"ncdnstm.com":[["aopr","__Y"]],"nemenlake.com":[["nowoif"]],"netxwatch.fr":[["aopr","__Y"]],"neuepresse.de":[["nostif",".call(null)","10"]],"newhamrecorder.co.uk":[["set","adLight","true"]],"newpelis.pl":[["aeld","","0x"],["set","btoa","null"],["nowoif"],["aeld","load","url"],["aopw","smrtSB"],["aopw","smrtSP"]],"news.now.com":[["set","NMAFMediaPlayerController.vastManager.vastShown","true"]],"newstvonline.com":[["aost","String.prototype.charCodeAt","ai_"]],"nexdrive.de":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"nintendoeverything.com":[["rmnt","script","html-load.com"]],"nola.com":[["aopr","_sp_._networkListenerData"]],"norisoku.com":[["rmnt","script","html-load.com"]],"norwichbulletin.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"nospoonnecessary.com":[["rmnt","script","/__adblocker|html-load/"]],"notebookcheck.nl":[["aopw","ab_cl"],["nostif",".call(null)","10"],["rmnt","script","&&window,"]],"notube.org":[["nowoif"]],"nuevos-mu.ucoz.com":[["aeld","load","2000"]],"nulljungle.com":[["aeld","DOMContentLoaded","adsBlocked"],["nostif","innerHTML"]],"nyaatorrent.com":[["acs","document.querySelectorAll","popMagic"]],"o2tvseriesz.com.br":[["rmnt","script",";}}};break;case $."]],"oceanofmovies.ru":[["acs","JSON.parse","break;case $."]],"officedepot.fr":[["set","gbTracker","{}"],["set","gbTracker.sendAutoSearchEvent","noopFunc"]],"ogario.pl":[["acs","parseInt","break;case $."]],"ohmyfoodrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"oldhousecalling.com":[["rmnt","script","/__adblocker|html-load/"]],"olutposti.fi":[["aeld","scroll","innerHeight"]],"onvid.es":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"openload.co.uk":[["acs","Math","break;case $."]],"organized31.com":[["rmnt","script","/__adblocker|html-load/"]],"otakuindo.ru":[["aopr","Date.prototype.toUTCString"]],"outsidergaming.com":[["rmnt","script","/__adblocker|html-load/"]],"overtakefans.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"oxxfile.pl":[["no-fetch-if","ads_"],["no-xhr-if","ads_"]],"pakkotoisto.com":[["acs","$","undefined"],["rmnt","script","void 0||window,"]],"papunika.com":[["nostif","ai_"]],"parents.at":[["aopw","AdBlockDetectorWorkaround"]],"parmatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"pasend.ru":[["acs","document.querySelectorAll","popMagic"]],"pasteit.it":[["noeval-if","AdBlock"]],"pawchive.pw":[["acs","WebAssembly","atob"]],"pawdiet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pcosnutritionistalyssa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peliculas-dvdrip.co.uk":[["aeld","DOMContentLoaded","shortener"],["aopr","AdservingModule"]],"pelishouse.ru":[["ra","href","#clickfakeplayer"]],"pelisplus.de":[["aopr","AaDetector"],["aopw","adcashMacros"],["aopw","smrtSP"],["aopw","smrtSB"],["nowoif"],["ra","href","#opfk"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"]],"pelisplus.org":[["aopr","AaDetector"],["aopw","adcashMacros"],["aopw","smrtSP"],["aopw","smrtSB"],["nowoif"],["ra","href","#opfk"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"]],"pinkporno.net":[["acs","document.querySelectorAll","popMagic"]],"pinterpoin.com":[["rmnt","script","await eval"],["rmnt","script","()=>eval"]],"planetaminecraft.com":[["set","ab","false"]],"platinporno.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"playoffsstream.com":[["rmnt","script","adserverDomain"]],"playstore.pw":[["nostif","offsetWidth"],["aopr","adsBlocked"],["set","PreRollAd.timeCounter","0"]],"pnd.com.br":[["aopr","AaDetector"],["aopw","Fingerprint2"]],"ponselharian.com":[["nowoif"]],"pookspantry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"poplinks.pl":[["noeval-if","/chp_?ad/"],["rmnt","script","onerror"],["rmnt","script","deblocker"],["nostif","/AdBlock/i"]],"popularmechanics.com":[["nostif","addEventListener","0"]],"porn3dx.com":[["acs","document.querySelectorAll","popMagic"]],"porn720.org":[["acs","document.querySelectorAll","popMagic"]],"pornditt.com":[["acs","document.querySelectorAll","popMagic"]],"porngrey.com":[["aeld","","popMagic"]],"pornktube.com":[["acs","document.querySelectorAll","popMagic"],["aeld","","popMagic"]],"porno-365.com":[["aost","document.createElement","Object.init"]],"porno-tour.pl":[["aopr","document.dispatchEvent"],["nostif","innerText","2000"]],"poscitechs.de":[["acs","document.documentElement","break;case $."],["rmnt","script","popundersPerIP"]],"powlideo.pl":[["nowoif"]],"powstream.org":[["nowoif"]],"powvdeo.it":[["nowoif"]],"powvibeo.fr":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"practicallyfunctional.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pressian.com":[["nostif","error-report.com"]],"prignitzer.de":[["nostif",".call(null)","10"]],"princesscruisesblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"privatemoviez.net":[["aeld","DOMContentLoaded","adsBlocked"],["nostif","magnificPopup"],["nano-sib","count"]],"prmovies.ru":[["rmnt","script","{delete window["]],"pronpic.org":[["aopr","document.createEvent"],["aopw","ShowAdbblock"],["nostif","style"]],"prosongs.nl":[["aopr","__Y"]],"psarips.de":[["aopw","Fingerprint2"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"putlockers.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."]],"quicasting.it":[["nosiif","visibility","1000"]],"ragnarokscanlation.org":[["noeval-if","/chp_?ad/"]],"rainbowplantlife.com":[["rmnt","script","/__adblocker|html-load/"]],"realsimplegood.com":[["rmnt","script","/__adblocker|html-load/"]],"repelisgt.pl":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"repelishd.org":[["nowoif"]],"respiratorytherapyzone.com":[["rmnt","script","/__adblocker|html-load/"]],"resplendentkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"rhinotalk.net":[["rmnt","script","html-load.com"]],"ripplestream4u.nl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"rnbastreams.com":[["rmnt","script","adserverDomain"]],"rnbxclusive1.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"roadbikereview.com":[["rmnt","script","html-load.com"]],"rolltide.com":[["set","blockAdBlock","trueFunc"]],"roms-hub.com":[["acs","parseInt","break;case $."]],"routerforums.com":[["rmnt","script","html-load.com"]],"rpmplay.xyz":[["aopr","open"]],"runnerslab.com":[["rmnt","script","/__adblocker|html-load/"]],"s10forum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"samurai.wordoco.com":[["noeval-if","/chp_?ad/"]],"savingadvice.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savoringitaly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sbplay.es":[["aopr","__Y"],["aopr","mm"],["acs","document.addEventListener","offsetHeight"],["set","console.clear","noopFunc"]],"screenfetch4.cyou":[["acs","addEventListener","HTMLAllCollection"]],"seasons-dlove.net":[["noeval-if","/chp_?ad/"]],"securegames.iwin.com":[["no-xhr-if","/gtm.js"]],"seirsanduk.it":[["popads-dummy"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"series2watch.pl":[["acs","document.documentElement","break;case $."]],"seriesflv.ru":[["acs","Math","break;case $."]],"seriesly.fr":[["acs","Math","break;case $."]],"sextubedot.com":[["noeval"],["aopr","Aloader.serve"]],"sexyasianteenspics.com":[["acs","document.querySelectorAll","popMagic"]],"sexyteengirlfriends.net":[["acs","document.querySelectorAll","popMagic"]],"shadowrangers.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"shaheed4u.pl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"sheamateur.com":[["aopr","__htapop"]],"shemalez.net":[["rmnt","script","/_plBtn|__native_l|_offerwalls/"]],"shlink.net":[["acs","document.querySelectorAll","popMagic"]],"shoot-yalla.live":[["acs","document.documentElement","break;case $."]],"shrib.com":[["nostif","adb","6000"]],"shrinkme.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","window.open"],["aeld","load","doTest"]],"shrinkme.de":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","window.open"],["aeld","load","doTest"]],"shtms.co":[["aopr","xmlhttp"],["nano-sib"],["ra","data-ppcnt_ads|onclick","#main"]],"silkengirl.co.uk":[["aopr","ExoLoader.addZone"],["aopr","loadTool"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"simpcity.ru":[["aeld","","shouldShow"],["acs","WebAssembly","atob"]],"sitesunblocked.it":[["aeld","","break;case $."],["aopr","open"]],"skymovieshd.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","navigator","break;case $."]],"skysetx.com.br":[["acs","EventTarget.prototype.addEventListener","delete window"]],"slideshare.net":[["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"],["set","feature_flags.interstitial_ads_flag","false"],["set","feature_flags.interstitials_every_four_slides","false"]],"smashyplayer.top":[["aeld","click","document.createElement"]],"sms-ol.com":[["rmnt","script",".showModal()"]],"sms24.it":[["aost","$ado","/ado/i"],["aost","document.createElement","app.js"]],"snopes.com":[["nostif","=>"]],"songmeaningsandfacts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"songs.de":[["aopr","AaDetector"]],"soulcysters.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soundproofcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southpark.org":[["no-fetch-if","ima3_dai"],["no-fetch-if","dai_iframe"]],"spigotunlocked.es":[["nostif","show"]],"sportlemon.com.br":[["aopr","decodeURI"]],"sportsbite.cc":[["nowoif","_blank"]],"spy-x-family.com.br":[["acs","document.querySelectorAll","popMagic"]],"sreality.cz":[["rmnt","script","/adBottomWrap|doubleclick/"],["aopr","shaman"]],"statsalt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stre4mpay.one":[["nowoif"],["aopr","puOverlay"]],"streamcloud.fr":[["acs","document.documentElement","break;case $."]],"streamed.pl":[["rmnt","script","adserverDomain"]],"streamhoe.nl":[["aopr","open"],["aopr","_pop"]],"streamm4u.it":[["nowebrtc"],["aopr","AaDetector"]],"streamtape.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","wpadmngr.com"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"streamtpmedia.com":[["rmnt","script","{delete window["]],"striphub.cam":[["nostif","/timed out|\\?\\?=/"],["no-fetch-if","method:HEAD","length:10001"]],"sussytoons.es":[["no-fetch-if","doubleclick"]],"syosetu.fr":[["acs","WebAssembly","atob"]],"t20cup.es":[["aeld","","break;case $."]],"tamilarasan.com":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"taurus-horoscopes.com":[["nostif","displayMessage","2000"]],"teachertube.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"teaching2and3yearolds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teamupinternational.com":[["noeval-if","/chp_?ad/"]],"tech-blogs.com":[["nostif","mdp"]],"techpenny.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techymedies.com":[["acs","eval","replace"],["set","blurred","false"]],"teenxxxporn.pro":[["acs","document.querySelectorAll","popMagic"]],"telegratuita.com":[["aeld","DOMContentLoaded","script[data-domain="]],"theargus.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"theawesomegreen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebakermama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecaffeinatedsnail.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepetiteplanner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepeugeotforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesaltymarshmallow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestreameast.com.br":[["aeld","/^/","0x"],["nosiif","visibility","1000"],["nowebrtc"],["nostif","sadbl"],["aopr","aclib"]],"thestreameast.pl":[["aeld","/^/","0x"],["nosiif","visibility","1000"],["nowebrtc"],["nostif","sadbl"],["aopr","aclib"]],"thisiswiltshire.co.uk":[["set","adLight","true"]],"thothub.com":[["aost","localStorage","inlineScript"],["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_pre_vast_alt",""]],"torlock.co.uk":[["acs","setTimeout","admc"],["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"torlock.it":[["acs","setTimeout","admc"],["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"torrentdownload.it":[["acs","addEventListener","HTMLAllCollection"],["acs","adcashMacros"],["acs","JSON.parse","break;case"],["nowoif"]],"totalsportek.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","","open"]],"trailhunterforums.com":[["rmnt","script","html-load.com"]],"traveldesearch.com":[["acs","parseInt","break;case $."]],"triedandtruerecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ttforum.co.uk":[["rmnt","script","html-load.com"]],"tubemania.org":[["nowoif"]],"tweaksforgeeks.com":[["nostif","error-report.com"],["rmnt","script","KCgpPT57bGV0IGU"]],"twobluescans.com":[["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["rmnt","script","/ai_|googletag|adb/"]],"ufcstream.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"uii.io":[["noeval"],["nowebrtc"],["nowoif"],["aeld","mouseup","_blank"]],"unblockweb.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"upfiles.nl":[["acs","Math","break;case $."]],"uproxy2.co.uk":[["aost","Math.floor",""]],"uptoimage.com":[["acs","parseInt","break;case $."]],"utahstateaggies.com":[["set","blockAdBlock","trueFunc"]],"vague.style":[["rmnt","script",").join(String.fromCharCode"]],"veggieinspired.com":[["rmnt","script","/__adblocker|html-load/"]],"verhentai.top":[["acs","document.querySelectorAll","popMagic"]],"veronica.uk":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"]],"vevioz.com":[["acs","JSON.parse","break;case $."],["aopr","app_vars.force_disable_adblock"],["aopr","open"],["set","blurred","false"]],"vid2faf.com.br":[["nowoif"]],"videovard.nl":[["nowoif"],["aeld","mouseup","catch"],["nosiif","0x"],["aopr","FuckAdBlock"]],"vidhidevip.com":[["aopr","__Y"]],"vidmoly.com.br":[["nowoif","!vidmoly"],["set","HTMLAnchorElement.prototype.click","noopFunc"],["aeld","DOMContentLoaded","anchor.href"]],"vido.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"vidplay.nl":[["ra","data-id|data-p","[data-id],[data-p]","stay"]],"vidup.to":[["acs","addEventListener","HTMLAllCollection"]],"viki.com":[["set","VikiPlayer.prototype.pingAbFactor","noopFunc"],["set","player.options.disableAds","true"]],"villanova.com":[["set","blockAdBlock","trueFunc"]],"vipracing.com.br":[["acs","$","show"],["aopr","AaDetector"]],"vkmp3.it":[["acs","JSON.parse","break;case $."]],"volvoevforum.com":[["rmnt","script","html-load.com"]],"voyageutah.com":[["rmnt","script","/__adblocker|html-load/"]],"walkthrough-indo.blogspot.com":[["acs","addEventListener","google_ad_client"]],"waltherforums.com":[["rmnt","script","html-load.com"]],"warezcdn.pl":[["acs","Array.isArray","bait"],["nowoif"]],"watchf1full.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"watchmovieshd.com":[["acs","JSON.parse","break;case $."]],"watchseries.net":[["acs","Math","XMLHttpRequest"],["nowebrtc"],["nowoif"],["set","console.clear","trueFunc"],["aopr","Adcash"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","popMagic"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"watchseries.unblocked.nl":[["nowebrtc"]],"watchseries9.es":[["aopr","mm"]],"watchserieshd.it":[["acs","JSON.parse","break;case $."]],"wbtw.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wcvb.com":[["set","google.ima.settings.setDisableFlashAds","noopFunc"]],"wealthbytes.co":[["rmnt","script","/__adblocker|html-load/"]],"webseriessex.com":[["nostif","myTestAd"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","eval","replace"]],"whodatdish.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"whoisnovel.com":[["acs","document.readyState","adsBlocked"]],"wieistmeineip.pl":[["nostif",".call(null)","10"],["rmnt","script","html-load.com"]],"wildwap.es":[["acs","JSON.parse","break;case $."]],"wimbledonguardian.co.uk":[["set","adLight","true"]],"windowsreport.com":[["rmnt","script","/__adblocker|html-load/"]],"winporn.net":[["nowoif"]],"wirtualnynowydwor.pl":[["noeval-if","/chp_?ad/"]],"wisforwebsite.com":[["rmnt","script","/__adblocker|html-load/"]],"wlns.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wmoviesfree.fr":[["acs","JSON.parse","break;case $."]],"wrestlinginc.com":[["set","admiral","noopFunc"],["rmnt","script","/__adblocker|html-load/"]],"writedroid.de":[["nano-stb","shortConfig","15000"],["aopw","akadb"],["nostif","_0x"],["no-xhr-if","ads"]],"wwlp.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xda-developers.com":[["acs","admiral"],["rc","twig-body"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"xecce.com":[["aopr","open"]],"xhamster12.org":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster2.co.uk":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmalay1.net":[["rmnt","script","/isAdBlockActive|WebAssembly/"]],"xmovies8.fr":[["nowoif"],["aeld","/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["set","check_adblock","true"],["acs","JSON.parse","break;case $."]],"xn--k9ja7fb0161b5jtgfm.jp":[["acs","document.addEventListener","google_ad_client"]],"xnxxhamster.net":[["acs","document.querySelectorAll","popMagic"]],"xozilla.xxx":[["aost","HTMLSelectElement","Object"]],"xrares.com":[["acs","decodeURI","decodeURIComponent"]],"xsz-av.com":[["nowoif"]],"xtits.es":[["set","flashvars.adv_start_html",""],["set","flashvars.adv_pause_html",""]],"xvideis.cc":[["acs","document.querySelectorAll","popMagic"]],"xxxhdvideo.pl":[["aopr","decodeURI"]],"xxxhdvideo.ru":[["aopr","decodeURI"]],"xxxymovies.com":[["set","flashvars.adv_pause_html",""],["aopw","__aaZoneid"]],"yomovies.com.br":[["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","decodeURI"]],"youporn.ru":[["set","page_params.holiday_promo","true"]],"ytmp3.net":[["nowoif"]],"ytmp3cc.net":[["acs","parseInt","break;case $."]],"ytmp3eu.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"zeefiles.org":[["ra","onclick","[onclick^=\"window.open\"]"],["nano-stb","tick"],["nowoif"]],"zeenews.india.com":[["no-fetch-if","adsbygoogle"]],"zoebakes.com":[["rmnt","script","/__adblocker|html-load/"]],"zone-telechargement.fr":[["rmnt","script","adserverDomain"],["aeld","popstate"],["nowoif"],["no-fetch-if","/^/"]],"zshort.co.uk":[["set","blurred","false"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
