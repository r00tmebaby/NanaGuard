/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123moviefree.nl":[["aeld","","break;case $."]],"123movies-org.es":[["acs","document.documentElement","break;case $."],["aopr","AaDetector"]],"123moviesc.org":[["aopr","mm"],["acs","JSON.parse","break;case $."]],"123moviesonline.it":[["acs","navigator","break;case $."]],"123moviesonline.pl":[["acs","navigator","break;case $."]],"123unblock.org":[["acs","atob","decodeURIComponent"],["acs","adcashMacros"]],"125ccsportsbikes.com":[["rmnt","script","html-load.com"]],"13wmaz.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"1bitspace.com":[["acs","setTimeout","Constant"],["aopr","u_cfg"],["acs","addEventListener","-0x"],["nano-stb","location.href","8000"]],"1movieshd.it":[["acs","document.documentElement","break;case $."]],"1todaypk.fr":[["acs","document.documentElement","break;case $."],["nowoif"]],"38.242.194.12":[["no-xhr-if","googlesyndication"]],"460ford.com":[["rmnt","script","html-load.com"]],"4anime.fr":[["aeld","","break;case $."]],"4movierulz1.de":[["acs","document.documentElement","break;case $."],["nowoif"]],"7moviesrulz.fr":[["nowoif"],["acs","document.documentElement","break;case $."]],"7starmv.com":[["acs","document.documentElement","break;case $."]],"9kmovies.com":[["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."]],"9tsu.it":[["acs","parseInt","break;case $."]],"a8ix.com.br":[["acs","document.documentElement","break;case $."]],"adblockeronstreamtape.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON","break;case"],["nowoif"],["nano-stb","counter"]],"adblocktape.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nano-stb","counter"],["nowoif"]],"adblocktape.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nano-stb","counter"],["nowoif"]],"adsfly.in":[["nowoif"]],"adshort.com":[["aopw","Fingerprint2"],["nowoif"],["set","blurred","false"],["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"adxtalk.com":[["rmnt","script","html-load.com"]],"ahmedmode.com.br":[["nostif","show"]],"airflix1.com":[["acs","addEventListener","HTMLAllCollection"]],"akmcloud.nl":[["acs","JSON.parse","break;case $."]],"alldeepfake.ink":[["nowoif"]],"allfeeds.org":[["nowoif"]],"aman-dn.blogspot.com":[["nano-sib","countdown"]],"american-rails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ana-white.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ancient-origins.de":[["set","document.bridCanRunAds","true"]],"androidapkmodpro.com":[["noeval-if","/chp_?ad/"]],"andyday.co.uk":[["acs","EventTarget.prototype.addEventListener","delete window"]],"animeflv.com.br":[["acs","jQuery","pp12"],["acs","EventTarget.prototype.addEventListener","delete window"]],"animeflv.net":[["acs","jQuery","pp12"],["acs","globalThis","break;case"],["acs","EventTarget.prototype.addEventListener","delete window"]],"animeheaven.com.br":[["no-xhr-if","method:HEAD"]],"animeheaven.es":[["no-xhr-if","method:HEAD"]],"animepahe.it":[["acs","String.fromCharCode","shift"],["aopr","open"],["aopr","PopAds"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["no-xhr-if","googlesyndication"]],"animetoast.cc":[["acs","document.querySelectorAll","popMagic"]],"animeunity.fr":[["acs","EventTarget.prototype.addEventListener","delete window"]],"aniplay.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"anisubindo.net":[["aeld","load","nextFunction"]],"anitalianinmykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ansuko.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"antimaximalist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anysoftwaretools.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arcticchat.com":[["rmnt","script","html-load.com"]],"arezzonotizie.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"asd.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"asianhdplay.org":[["acs","document.documentElement","break;case $."]],"asiansex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"asiansex.es":[["aopr","popit"],["aeld","popstate","noPop"]],"asimplepalate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asmroger.it":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"astro-seek.com":[["rmnt","script","await eval"]],"atlantic10.com":[["set","blockAdBlock","trueFunc"]],"auto-crypto.click":[["rmnt","script","catch"]],"avcrempie.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"b4ucast.com":[["acs","document.documentElement","break;case $."]],"badassoftcore.com":[["nostif","innerHTML"]],"bakai.org":[["aeld","load","nextFunction"]],"bakedbyrachel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakefromscratch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bcmanga.com":[["acs","document.querySelectorAll","popMagic"]],"bdmusic28.es":[["acs","document.documentElement","break;case $."]],"beegsexxx.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"bettingexchange.it":[["noeval-if","/chp_?ad/"]],"betweencarpools.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bfclive.com":[["nowoif"],["rmnt","script","/adb/i"]],"bflix.co.uk":[["rmnt","script",";}}};break;case $."],["rmnt","script","popup"]],"bikeportland.org":[["set","gform.utils","noopFunc"],["set","gform.utils.trigger","noopFunc"]],"bikyonyu-bijo-zukan.com":[["noeval-if","/chp_?ad/"]],"bizapedia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluemediafiles.com":[["aopr","open"],["nano-sib","i--"],["set","Time_Start","0"]],"bluetracker.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bodyketosis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"braunschweiger-zeitung.de":[["nostif",".call(null)","10"]],"brbushare.com":[["acs","navigator","break;case $."]],"breaddad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bsmaurya.com":[["noeval-if","/chp_?ad/"]],"buffsports.nl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"buyjiocoin.com.br":[["nowoif"]],"buzzfeed.at":[["nostif",".call(null)","10"]],"cactusforums.co.uk":[["rmnt","script","html-load.com"]],"caminoadventures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camwhorestv.com":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"]],"camwhorestv.net":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"]],"cbs17.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"cdn.gledaitv.ru":[["aopr","Handlers"],["aopr","Settings"],["nostif","initializeAdblockDetection"],["acs","document.createElement","detection-bait"]],"cerbahealthcare.it":[["set","pa","{}"],["set","Object.prototype.setConfigurations","noopFunc"]],"chawomenshockey.com":[["set","blockAdBlock","trueFunc"]],"chevalmag.com":[["noeval-if","/chp_?ad/"]],"cheyennechat.com":[["rmnt","script","html-load.com"]],"chicagosportshq.com":[["acs","document.getElementById","JSON"]],"chicasdesnudas.xxx":[["acs","document.querySelectorAll","popMagic"]],"chiefsreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chihuahua-people.com":[["rmnt","script","html-load.com"]],"chillicothegazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"citibank.com.sg":[["set","populateClientData4RBA","noopFunc"]],"cleaneatingwithkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clickndownload.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"client.pylexnodes.net":[["rmnt","script","onerror"]],"cnn.com":[["set","FAVE.settings.ads.ssai.prod.clips.enabled","false"],["set","FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["set","FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"]],"cocoandash.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comdotgame.com":[["acs","$","cdgPops"]],"comentariodetexto.com":[["aeld","DOMContentLoaded","adsBlocked"],["no-xhr-if","googlesyndication"]],"comix.nl":[["nosiif","localStorage["]],"comix.org":[["nosiif","localStorage["]],"concomber.com":[["rmnt","script","/==undefined.*body/"]],"cookni.net":[["no-xhr-if","adsbygoogle"]],"couchtuner.net":[["acs","RegExp","0x"],["acs","document.documentElement","break;case $."]],"cozymeal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazytoys.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"createyum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"creativebusybee.com":[["aopw","checkAds"]],"creeklinehouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crichd.org":[["aopr","AaDetector"],["acs","JSON.parse","break;case $."],["aeld","","break;case $."],["nowoif"]],"crichd.ru":[["aopr","AaDetector"],["acs","JSON.parse","break;case $."],["aeld","","break;case $."],["nowoif"]],"crx7601.com":[["rmnt","script","html-load.com"]],"crypt.cybar.to":[["nowoif","noreferrer"]],"cuttty.com":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"cw39.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"cx500forum.com":[["rmnt","script","html-load.com"]],"daddylivehd.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","setTimeout","admc"],["aopw","u_cfg"],["nostif","sadbl"]],"dailyrevs.com":[["no-xhr-if","adsbygoogle"]],"dciuu.org":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"ddlvalley.co.uk":[["acs","decodeURI","getScriptFromCss"],["aopw","Fingerprint2"]],"denverpioneers.com":[["set","blockAdBlock","trueFunc"]],"design4months.com":[["noeval-if","/chp_?ad/"]],"designmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dessertswithbenefits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"devour.asia":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dfiles.eu":[["aopw","Fingerprint2"]],"dhtpre.com":[["rmnt","script","setADBFlag"]],"dictionnaire-medical.net":[["nostif","nextFunction","2000"]],"dimsimlim.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"direct-cloud.es":[["acs","document.documentElement","break;case $."]],"discoverzermatt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dk894953543.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dontsweattherecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doodss.nl":[["nowoif"]],"dorkly.com":[["acs","btoa","BOOTLOADER_LOADED"]],"dotabuff.com":[["no-fetch-if","ads"]],"dotafire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dotflix.it":[["acs","EventTarget.prototype.addEventListener","delete window"]],"dotfreesex.com":[["noeval"],["aopr","Aloader.serve"]],"downloadhub.net":[["acs","document.documentElement","break;case $."],["nowoif"]],"downloadr.in":[["nostif","show"],["nano-stb","countdown"]],"dramamate.com.br":[["nowebrtc"]],"dreamhomebasedwork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dronexl.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dstat.space":[["aeld","DOMContentLoaded","checkBanners"]],"dudefilms.it":[["acs","EventTarget.prototype.addEventListener","delete window"]],"earncash.net":[["aopr","app_vars.force_disable_adblock"]],"easyrecipedepot.com":[["rmnt","script","/__adblocker|html-load/"]],"eclypsia.com":[["acs","btoa","BOOTLOADER_LOADED"]],"edibleperspective.com":[["rmnt","script","/__adblocker|html-load/"]],"eee1.lat":[["set","HTMLImageElement.prototype.onerror","undefined"]],"elcaminocentral.com":[["rmnt","script","html-load.com"]],"elevationmap.net":[["acs","parseInt","break;case $."]],"ellaclaireinspired.com":[["rmnt","script","/__adblocker|html-load/"]],"embedme.de":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"empire-streamz.fr":[["set","empire.pop","undefined"],["set","empire.direct","undefined"],["set","empire.directHideAds","undefined"],["set","document.hidden","true"],["nano-stb","(!1)","*"],["no-xhr-if","pagead2.googlesyndication.com"]],"erinobrien.life":[["rmnt","script","/__adblocker|html-load/"]],"esportivos.de":[["acs","document.documentElement","break;case $."],["rmnt","script","popundersPerIP"]],"evo.co.uk":[["aopr","_sp_._networkListenerData"]],"evolvingtable.com":[["rmnt","script","/__adblocker|html-load/"]],"exeo.app":[["set","blurred","false"],["rmnt","script","FingerprintJS"]],"expertplay.net":[["acs","ips.controller.register"]],"expertworldtravel.com":[["rmnt","script","/__adblocker|html-load/"]],"extreme-down.de":[["acs","$","friendlyduck"],["acs","Math","decodeURIComponent"],["acs","JSON.parse","break;case $."],["rmnt","script","adserverDomain"]],"f2movies.ru":[["aopr","AaDetector"]],"faiviral.com":[["nostif","/window\\.location\\.href|n/","8000"]],"fapnut.net":[["rmnt","script","adConfig"]],"farodevigo.es":[["set","pr_okvalida","true"],["nostif","sub"]],"fembed.pl":[["aopr","__Y"],["aopw","adcashMacros"],["aopr","mm"],["nowoif"]],"ffmovies.fr":[["acs","String.fromCharCode","break;"],["nowoif"]],"ffmovies.it":[["acs","String.fromCharCode","break;"],["nowoif"]],"fifojik.fr":[["acs","EventTarget.prototype.addEventListener","delete window"]],"file-upload.org":[["nowoif"],["acs","document.getElementById","undefined"],["aopw","Fingerprint2"],["aopr","start"],["acs","JSON.parse","document.head.appendChild"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"filecrypt.co.uk":[["acs","EventTarget.prototype.addEventListener","key in document"],["rmnt","script","{delete window["],["set","isAdblock","false"],["ra","onclick","button[id][onclick*=\".html\"]"],["rmnt","script","localStorage.setItem"]],"filesamba.ru":[["aopr","_wm"]],"filespayout.com":[["nowoif"]],"filma1.es":[["acs","parseInt","break;case $."]],"filmeserialegratis.pl":[["nowoif"]],"filmizletv.es":[["nano-sib"],["set","reklam_1_saniye","0"],["set","reklam_1_gecsaniye","0"],["set","reklamsayisi","1"],["set","reklam_1",""],["nostif","psresimler"]],"filmyworlds.pl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"filmyzilla.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"findav.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"findingtimetofly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"firefaucet.win":[["nofab"],["set","firefaucet","true"]],"firestream.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","adserverDomain"]],"firsthomelovelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flixhub.de":[["noeval-if","/chp_?ad/"]],"fmodpro.com":[["rmnt","script","/onerror|offsetHeight|no-store/"]],"fmoonembed.nl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"foldnfly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodtruckempire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballgamingzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"francaisfacile.net":[["noeval-if","/chp_?ad/"]],"freerealvideo.com":[["aopr","popit"],["aeld","popstate","noPop"]],"freshoffthegrid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"friedrichshainblog.de":[["noeval-if","/chp_?ad/"]],"friendshipbreadkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullreal.net":[["acs","JSON.parse","break;case $."]],"funfinderclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funzen.net":[["nostif","mdpDeBlocker"],["nowoif"]],"fzmovies.com":[["acs","Math","break;case $."],["rmnt","script","{delete window["],["ra","onclick","[onclick*=\"window.open\"]","stay"],["nosiif","visibility","1000"]],"fztvseries.live":[["ra","onclick","[onclick*=\"window.open\"]","stay"]],"gadsdentimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"gamecopyworld.de":[["acs","document.createElement","Tool"]],"games.triviatoday.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gaminginfos.com":[["rmnt","script","/userAgent|adb|htmls/"],["aopr","document.write"]],"genesisforums.org":[["rmnt","script","html-load.com"]],"gettystewart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"giessener-anzeiger.de":[["nostif",".call(null)","10"]],"gmt400.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gofilmes.it":[["acs","parseInt","break;case $."]],"gomacsports.com":[["set","blockAdBlock","trueFunc"]],"gomoviesc.it":[["nowoif"]],"gomoviesfree.fr":[["aopr","glxopen"]],"gototub.de":[["nowoif"]],"gotxx.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["nostif","getComputedStyle","250"],["aost","Element.prototype.matches","litespeed"]],"goved.org":[["acs","navigator","break;case $."]],"gowatchseries.de":[["rmnt","script",";}}};break;case $."]],"gozips.com":[["set","blockAdBlock","trueFunc"]],"gps--cache-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"gradecalculator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grantorrents.nl":[["nano-stb"]],"grantorrents.pl":[["nano-stb"]],"greetingcardpoet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grigtube.com":[["acs","document.querySelectorAll","popMagic"]],"gsurl.it":[["aeld","mousedown","preventDefault"]],"gtaaquaria.com":[["rmnt","script","html-load.com"]],"happybalancedwellness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happymoneysaver.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happyorganizedlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hausandhand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"haustec.de":[["nostif",".call(null)","10"]],"hax.co.id":[["no-fetch-if","googlesyndication"]],"hds-streaming.fr":[["acs","parseInt","break;case $."]],"hdss-to.com.br":[["acs","JSON.parse","break;case $."]],"healthy-delicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hearthpwn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heavy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["no-fetch-if","ads"]],"hellnaw.es":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"hentaicube.com":[["acs","WebAssembly","atob"]],"hentaila.com":[["acs","document.querySelectorAll","popMagic"]],"hentaisd.de":[["aopr","LieDetector"]],"hepper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hesgoal-vip.to":[["rmnt","script","/adbl/i"]],"hh3dhay.net":[["aeld","","break;case $."]],"hideout.it":[["acs","stop","adblock"]],"hindimovies.org":[["acs","parseInt","break;case $."]],"hindimoviesonline.nl":[["acs","Math","break;case $."]],"hiraethtranslation.com":[["aeld","DOMContentLoaded","document.documentElement.lang"],["rmnt","script","adsSrc"]],"hivetoon.com":[["noeval-if","/chp_?ad/"]],"holidayexpert.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotcleaner.com":[["aopr","Element.prototype.attachShadow"]],"hotelgyms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houseofnasheats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hubstream.it":[["nowoif"]],"hubstream.pl":[["nowoif"]],"hummingbirdhigh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hurawatch.nl":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"]],"iclarified.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"identicalrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"idlelivelink.com.br":[["nano-sib"]],"idntheme.com":[["aopw","hidekeep"]],"ihcubcadet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ihdstreams.it":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"ikramlar.online":[["noeval-if","/chp_?ad/"],["no-fetch-if","googlesyndication"]],"ilgeniodellostreaming.com":[["acs","parseInt","break;case $."],["aopr","AaDetector"],["nowoif"]],"imgrock.ru":[["nowoif"],["aopr","CustomEvent"],["aopr","popjs.init"],["aopw","Fingerprint2"],["nano-stb","/.?/","4000"],["popads-dummy"]],"imgsto.it":[["aopr","CustomEvent"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","loadTool"]],"imgsto.pl":[["aopr","CustomEvent"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","loadTool"]],"incest.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"indiansexstories2.net":[["set","history.pushState","noopFunc"]],"indiepanda.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infomaniakos.nl":[["set","btoa","null"]],"informatudo.com.br":[["noeval-if","/chp_?ad/"]],"inspirationmadesimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"interviewgig.com":[["aeld","load","onload"]],"isekaipalace.com":[["set","showAds","true"]],"isi7.net":[["no-fetch-if","adsbygoogle"]],"isohunt.net":[["nowoif"]],"izzylaif.com":[["acs","jQuery","undefined"]],"jalshamoviez.ru":[["aeld","","/_0x|localStorage\\.getItem/"]],"japanesecooking101.com":[["rmnt","script","/__adblocker|html-load/"]],"japanesexxxporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"jav-coco.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javhay.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javlab.net":[["acs","WebAssembly","atob"]],"javx357.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["noeval-if","/chp_?ad/"]],"jeepreconforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"jemontremonminou.com":[["aopr","localStorage"]],"jennasuedesign.com":[["rmnt","script","/__adblocker|html-load/"]],"jetanimes.com.br":[["acs","parseInt","break;case $."],["ra","href","#clickfakeplayer"]],"jewelry.com.my":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"jmanga.com":[["acs","WebAssembly","atob"]],"jorpetz.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kamehaus.net":[["set","uas","[]"]],"karaoke4download.com":[["noeval-if","/chp_?ad/"]],"kashtanka.it":[["aopr","exoJsPop101"]],"katlinks.org":[["acs","parseInt","break;case $."]],"kazefuri.net":[["href-sanitizer","a[href^=\"https://www.adtival.network/\"][href*=\"&url=\"]","?url"]],"kcra.com":[["set","google.ima.settings.setDisableFlashAds","noopFunc"]],"kerapoxy.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["nowoif"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"]],"keroseed.org":[["noeval-if","/chp_?ad/"]],"khatrimazaful.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kickasshydra.es":[["aeld","","break;case $."],["aopw","ospen"]],"kickasstorrents2.it":[["aeld","","break;case $."],["aopw","ospen"]],"kijk.nl":[["set","Object.prototype.ADBLOCK_DETECTION",""],["no-xhr-if","url:ad/banner.gif"]],"kimspireddiy.com":[["rmnt","script","/__adblocker|html-load/"]],"kissanime.pl":[["acs","JSON.parse","break;case $."],["acs","String.fromCharCode","/btoa|break/"],["nowoif"],["no-xhr-if","googlesyndication"]],"kissasian.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"klyker.com":[["noeval-if","adsbygoogle"]],"komikcast.co.uk":[["aeld","load","onload"],["aopr","open"],["acs","JSON.parse","Promise"]],"kordramass.com":[["acs","document.onclick","popunder"]],"kstreaming.com":[["aopw","Fingerprint2"],["nowebrtc"],["acs","Math","zfgloaded"]],"lebensmittelpraxis.de":[["nostif","nextFunction","2000"]],"leechall.pl":[["nano-sib"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"lemonsandzest.com":[["rmnt","script","/__adblocker|html-load/"]],"lewdcorner.com":[["acs","$","btoa"]],"liflix.site":[["acs","parseInt","break;case $."]],"lilyloutay.com":[["rmnt","script","/__adblocker|html-load/"]],"link.asiaon.top":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"linkfly.com":[["set","blurred","false"]],"linkpoi.me":[["acs","Math","replace"],["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["no-fetch-if","manager"]],"linkshub.co.uk":[["nowoif"],["rmnt","script",";}}};break;case $."]],"linkspy.cc":[["set","displayAds","0"]],"linkz.ru":[["rmnt","script","{delete window["],["noeval-if","/chp_?ad/"],["nowoif"]],"littlebinsbricks.com":[["rmnt","script","/__adblocker|html-load/"]],"liveon.com.br":[["acs","setTimeout","admc"]],"lookmovie.fr":[["aopr","adBlockDetected"],["aopr","mm"],["acs","JSON.parse","break;case $."],["set","Yii2App.playbackTimeout","0"]],"lookmovie186.pl":[["acs","JSON.parse","break;case $."]],"looptorrent.org":[["aopr","checkAdsStatus"]],"lootlemon.com":[["rmnt","script","()=>eval"]],"loveroms.nl":[["acs","decodeURI","decodeURIComponent"]],"luxmovies.co.uk":[["nowoif"]],"lz.de":[["nostif",".call(null)","10"]],"magesypro.de":[["noeval-if","/chp_?ad/"]],"magicalguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangakita.id":[["set","puShown1","true"]],"mangaku.pl":[["nowebrtc"],["acs","$","onclick"]],"mangasco.com":[["acs","JSON.parse","break;case $."]],"manhuascan.nl":[["acs","parseInt","break;case $."]],"mantrazscan.com":[["noeval-if","/chp_?ad/"]],"manytoon.com":[["aopr","decodeURI"]],"marijuanamoment.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masaporn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"maxicast.fr":[["nowoif","_blank"]],"maxstream.it":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"medeberiyaa.com":[["no-xhr-if","googlesyndication"]],"medisite.fr":[["nostif",".call(null)","10"]],"meilleurpronostic.fr":[["rmnt","script","/==undefined.*body/"]],"mejortorrentt.net":[["nowebrtc"],["aeld","click","popMagic"]],"mentalfoodchain.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"merkmal-biz.jp":[["rmnt","script",").join(String.fromCharCode"]],"mhdtvsports.com":[["acs","document.documentElement","break;case $."],["rmnt","script","deblocker"],["rmnt","script","/adbl/i"]],"mkvpapa.co.uk":[["acs","parseInt","break;case $."]],"mmamania.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"mmtv01.xyz":[["nowoif"],["nostif","window.open"]],"mofluid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneyning.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moretvtime.org":[["acs","adBlockDetected"]],"mov2day.com.br":[["aopr","LieDetector"]],"moviegan.fr":[["no-xhr-if","ads"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"movielinkbd.com":[["aeld","load","document.body.appendChild(s"],["aeld","click","/adsActive|POPUNDER/i"],["nowoif","_blank"]],"moviemad.it":[["nowoif"]],"movierulzlink.co.uk":[["aopr","String.fromCharCode"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"movierulzs.nl":[["nowoif"]],"movierulzz.com.br":[["nowoif"]],"movies123.ru":[["nowoif"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."],["rmnt","script","wpadmngr.com"]],"moviesjoy-to.com.br":[["acs","document.createElement","script[data-domain="]],"moviesmeta.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"moviesnation.co.uk":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopw","onpopstate"],["nowoif","_blank"]],"moviesonlinefree.nl":[["rmnt","script","_0x"],["nowoif"]],"mudinmyblood.net":[["rmnt","script","html-load.com"]],"muragon.com":[["rmnt","script","html-load.com"]],"mx6.com":[["rmnt","script","html-load.com"]],"myair2.resmed.com":[["no-xhr-if","cloudflare.com/cdn-cgi/trace"]],"mydownloadtube.es":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"myplexi.fr":[["aeld","click","location"]],"mythinkbiglife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"nbch.com.ar":[["acs","Math","break;case $."]],"neoxsoftworks.eu":[["set-session-storage-item","adblockDismissed","1"]],"netxwatch.ru":[["aopr","__Y"]],"news-buzz1.com":[["rmnt","script","html-load.com"]],"news-journalonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"newtorrentgame.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nexttv.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"nflstreams.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","navigator","FingerprintJS"],["acs","setTimeout","admc"]],"nhentaihaven.org":[["acs","Script_Manager"]],"nhltraderumors.me":[["rmnt","script","/__adblocker|html-load/"]],"niganpro.com":[["noeval-if","/chp_?ad/"]],"nikke.win":[["no-fetch-if","/doubleclick|google-analytics/"]],"nishankhatri.xyz":[["rmnt","script","AdbModel"]],"niyaniya.com.br":[["acs","WebAssembly","atob"]],"nonamehiding.com":[["rmnt","script","/__adblocker|html-load/"]],"nonsensediamond.ru":[["aopr","decodeURI"]],"notandor.cn":[["noeval-if","/chp_?ad/"]],"notebookcheck-hu.com":[["rmnt","script","&&window,"]],"noticias.gospelmais.com.br":[["set","blockAdBlock","true"]],"odporn.com":[["acs","WebAssembly","atob"]],"officerassignments.com":[["rmnt","script","/__adblocker|html-load/"]],"oggitreviso.it":[["nostif","Delay"]],"ogomovies.co.uk":[["acs","document.documentElement","break;case $."]],"ohiowaterfowlerforum.com":[["rmnt","script","html-load.com"]],"ohmymag.pl":[["aopr","_sp_._networkListenerData"],["rmnt","script","()=>eval"]],"ohsimply.com":[["rmnt","script","/__adblocker|html-load/"]],"onepiece-manga-online.net":[["acs","document.querySelectorAll","popMagic"]],"onepiecemangafree.com":[["acs","document.querySelectorAll","popMagic"]],"onepunch.ru":[["acs","document.querySelectorAll","popMagic"]],"onlygators.com":[["rmnt","script","/__adblocker|html-load/"]],"openloadmovies.co.uk":[["aopr","AaDetector"]],"ouo.com":[["aopr","AaDetector"],["nowebrtc"],["nano-sib","stop()"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"],["acs","String.fromCharCode","/'shift'|break;/"]],"overclockers.com":[["rmnt","script","/__adblocker|html-load/"]],"paintstrategies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"palofw-lab.com":[["noeval-if","/chp_?ad/"]],"panaceaspantryblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"panamericaforums.com":[["rmnt","script","html-load.com"]],"pandajogosgratis.com.br":[["nostif","()","2500"]],"peliculas-dvdrip.it":[["aeld","DOMContentLoaded","shortener"],["aopr","AdservingModule"]],"pelis28.de":[["nowoif"],["ra","href","#clickfakeplayer"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"pelisplusgo.es":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"pelisplusgo.org":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"pelletsandpits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"perfektdamen.de":[["acs","ExoLoader"],["aopw","ads_priv"],["noeval"]],"pesprofessionals.com":[["nostif","show"]],"petersfieldpost.co.uk":[["rmnt","script","await eval"]],"phillyburbs.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pianokafe.com":[["aopw","adBlockDetected"]],"piloncilloyvainilla.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pirate.de":[["aeld","/^(?:click|mousedown)$/","_0x"]],"pixhost.net":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","AdProvider"]],"pixlev.com":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"pixlev.nl":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"pkembed.es":[["acs","EventTarget.prototype.addEventListener","delete window"]],"play.starsites.fun":[["no-fetch-if","googlesyndication"]],"player.subespanolvip.com":[["aopr","BetterJsPop"]],"pogo.com":[["set","pogo.intermission.staticAdIntermissionPeriod","0"]],"popcornstream.nl":[["nostif","blur"],["aeld","","btoa"],["acs","Math","zfgloaded"]],"porcore.com":[["nowoif"],["set","puShown","true"],["acs","document.querySelectorAll","popMagic"]],"pornhub.de":[["rmnt","script","/\\/interstitial\\?|\\\\x/"],["nostif","adsbytrafficjunkycontext"],["acs","Object.defineProperty","trafficjunky"],["nowoif","ads"],["set","page_params.holiday_promo","true"],["set","abp1","1"]],"pornktube.de":[["acs","document.querySelectorAll","popMagic"],["aeld","","popMagic"]],"pornky.com":[["aopr","exoJsPop101"]],"pornoborshch.com":[["ra","onclick"]],"poscitech.net":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["nowoif"],["acs","setTimeout","admc"]],"positivepsychology.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"preppykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primesrc.me":[["aost","Math.floor","onClick"],["nowoif","_blank"],["nowoif"]],"primewire.co.uk":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["aost","Math.floor","onClick"],["nowoif","_blank"]],"prmovies.com.br":[["rmnt","script","{delete window["]],"proxytpb.fr":[["aeld","/^(?:click|mousedown)$/","_0x"]],"pubfilmz.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pumpkinsandpetals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"putlocker9.es":[["aopw","Fingerprint2"],["acs","JSON.parse","break;case $."]],"putlockertv.pl":[["nowoif"]],"puzzlefry.com":[["aopw","killAdBlock"]],"qashbits.com":[["aopr","NoAdBlock"]],"querofilmehd.co.uk":[["acs","JSON.parse","break;case $."]],"querofilmehd.nl":[["acs","JSON.parse","break;case $."]],"querofilmehd.pl":[["acs","JSON.parse","break;case $."]],"queue-times.com":[["rmnt","script","/__adblocker|html-load/"]],"radio.dk":[["nostif",".call(null)","10"]],"radio.net":[["nostif",".call(null)","10"]],"raisinghealthyfamilies.com":[["rmnt","script","/__adblocker|html-load/"]],"rangeofsounds.com":[["rmnt","script","/__adblocker|html-load/"]],"raptorforum.com":[["rmnt","script","html-load.com"]],"raw18.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"rawkuma.net":[["acs","WebAssembly","atob"],["acs","addEventListener","HTMLAllCollection"]],"rdembed.pl":[["aeld","click","pop_"],["nowoif"]],"rdxhd1.nl":[["aeld","","/_0x|localStorage\\.getItem/"]],"redsexhub.com":[["aopr","popit"],["aeld","popstate","noPop"]],"redstormsports.com":[["set","blockAdBlock","trueFunc"]],"repelisgooo.pl":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"reportera.co.kr":[["nostif","error-report.com"]],"resolutioneats.com":[["rmnt","script","/__adblocker|html-load/"]],"rexgarden.com":[["rmnt","script","/__adblocker|html-load/"]],"riftbound.gg":[["rmnt","script","/__adblocker|html-load/"]],"rigorousthemes.com":[["rmnt","script","/__adblocker|html-load/"]],"roblox.com":[["json-prune","sorts.[].recommendationList.[-].contentMetadata.EncryptedAdTrackingData"]],"rojadirecta.fr":[["aopw","closeMyAd"],["aopw","smrtSP"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["nowoif"]],"rp5.org":[["nostif","0x"]],"rugbystreams.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"safetxt.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"safetxt.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","window.open"]],"sandandsisal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sandrives.net":[["nostif","nextFunction","250"]],"sat24.com":[["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|siteActivateScripts/"]],"sbrity.com":[["aopr","__Y"],["aopr","mm"]],"sbrulz.de":[["aopr","__Y"],["aopr","mm"]],"sdmoviespoint.de":[["acs","JSON.parse","break;case $."],["noeval-if","ads"]],"seeeed.fr":[["acs","Promise","break;case $."]],"seehd.it":[["acs","String.fromCharCode","shift"]],"seehd.pl":[["acs","String.fromCharCode","shift"]],"semawur.com":[["aopr","open"],["nano-sib","","*","0"]],"seriemega.org":[["nowoif"]],"seriesyonkis.net":[["acs","document.querySelectorAll","popMagic"]],"sexy-games.ru":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"shahi4u.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"shahid4uu.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"shapinguptobeamom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharedisk.ru":[["acs","document.documentElement","break;case $."]],"shid4u.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"shieldsgazette.com":[["rmnt","script","await eval"]],"shortlinkto.es":[["acs","JSON.parse","break;case $."]],"showflix.pl":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["aost","document.getElementById","fairAdblock"]],"shrtfly.nl":[["aopr","open"],["aopr","tabUnder"]],"sideplusleaks.com":[["noeval-if","adb"]],"simplybeyondherbs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smallseotools.com":[["aeld","mouseout","clientWidth"],["nostif","adrecover"]],"soap2day.com.br":[["acs","JSON.parse","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","Reflect"]],"solarmovie.co.uk":[["aopr","AaDetector"],["nowoif"],["acs","Math","zfgloaded"]],"sonymobilityforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"soundpark-club.org":[["acs","$","open"],["acs","document.createElement","script"]],"spoilerplus.tv":[["acs","WebAssembly","atob"]],"sportlemon.ru":[["aopr","decodeURI"]],"sportlemons.fr":[["aopr","decodeURI"]],"sportshub.nl":[["acs","document.documentElement","break;case $."]],"sportsmobileforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportsonline.pl":[["acs","setTimeout","admc"],["acs","Object.defineProperty","break"]],"ssoap2day.org":[["acs","JSON.parse","break;case $."],["acs","document.documentElement","break;case $."]],"stapadblockuser.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"strcloud.in":[["acs","EventTarget.prototype.addEventListener","delete window"]],"stre4mplay.pl":[["nowoif"],["aopr","puOverlay"]],"streamadblocker.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["acs","setTimeout","admc"]],"streamango.es":[["acs","Math","zfgloaded"]],"streamers.co.uk":[["aeld","","break;case $."]],"streampiay.es":[["nowoif"]],"streamshunters.eu":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"streamwish.nl":[["set","xRds","true"],["set","cRAds","false"],["aopr","__Y"]],"streamwish.pl":[["set","xRds","true"],["set","cRAds","false"],["aopr","__Y"]],"strikeout.fr":[["nowoif","|"],["acs","setTimeout","admc"],["acs","String.fromCharCode","shift"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","{delete window["]],"stripedspatula.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"strtapewithadblock.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["nowoif"],["aopr","Adcash"]],"sulasok.pl":[["acs","Date.now","shouldRun"]],"supervideo.co.uk":[["aopr","AaDetector"]],"supraforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sushi-scan.nl":[["nostif","show"]],"sustainablereview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sutekinakijo.com":[["rmnt","script","html-load.com"]],"syosetu.pl":[["acs","WebAssembly","atob"]],"tajpoint.com":[["acs","Math","break;case $."]],"talesofthemiddleages.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tamilprint30.org":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"tamilprint31.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"tatyanaseverydayfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"taycanevforum.com":[["rmnt","script","html-load.com"]],"teachoo.com":[["aopr","importantFunc"],["rmnt","script","numberPages"],["rmnt","script","brave"]],"tekken8combo.kagewebsite.com":[["no-fetch-if","googlesyndication"]],"tele5.de":[["nostif",".call(null)","10"]],"testedich.de":[["nostif",".call(null)","10"]],"the-daily-record.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"theartofdoingstuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebullspen.com":[["rmnt","script","fetch"]],"theconscientiouseater.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefemaleprofessional.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefmovies.net":[["aost","Math","inlineScript"],["nostif","0x"],["nowoif"]],"theforkedspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefriendlyredfox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehoneyhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehyundaiforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themoviesflix.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif","_blank"]],"themw.com":[["set","blockAdBlock","trueFunc"]],"thepragmaticparent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theruntesters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestreameast.nl":[["aeld","/^/","0x"],["nosiif","visibility","1000"],["nowebrtc"],["nostif","sadbl"],["aopr","aclib"]],"theverge.com":[["acs","admiral"]],"theweeklyad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theyummylife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thoptv.fr":[["aopr","AaDetector"],["nostif","readyplayer","2000"]],"thriftyfrugalmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thriftynomads.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timescall.com":[["set","CnnXt.Event.fire","noopFunc"]],"tiz-cycling.nl":[["acs","jQuery","blocker"]],"tiz-cycling.pl":[["acs","jQuery","blocker"]],"tmcadaptations.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"topflix.org":[["nano-sib"],["nowoif"],["aopr","console.clear"],["acs","parseInt","break;case $."]],"topmovies.ru":[["nowoif"]],"topstreams.com":[["nowebrtc"],["acs","$","ads"],["acs","setTimeout","admc"]],"torrentdownloads.co.uk":[["acs","addEventListener","HTMLAllCollection"],["nowebrtc"],["acs","adcashMacros"]],"torrentgame.org":[["noeval-if","/chp_?ad/"]],"tradtalk.com":[["rmnt","script","html-load.com"]],"travellerselixir.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"treasl.com":[["rmnt","script","antiAdBlock"]],"triumphrat.net":[["rmnt","script","html-load.com"]],"truesourdough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tube8.org":[["set","showPopunder","false"],["aeld","","_0x"],["aopw","IS_ADBLOCK"],["nowoif"],["set","page_params.holiday_promo","true"]],"tugaflix.pl":[["aopr","open"]],"tutelehd.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","setTimeout","admc"]],"tutorialsaya.com":[["no-fetch-if","adsbygoogle"]],"tvtv.fr":[["nostif",".call(null)","10"]],"twink-hub.com":[["acs","document.querySelectorAll","popMagic"]],"twinsdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"u4m.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uiiumovie.co.uk":[["acs","document.readyState","callbackAdsBlocked"]],"unblocknow.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uploadbuzz.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uploads.mobi":[["acs","parseInt","break;case $."]],"upns.co.uk":[["nowoif"],["aeld","click","document.createElement"]],"upshrink.com":[["set","blurred","false"]],"uptomega.com":[["nano-stb","seconds"],["aeld","","break;case $."]],"uqload.net":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"usatodaycrosswordanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"usinger-anzeiger.de":[["nostif",".call(null)","10"]],"vegamovie.de":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"veganblueberry.com":[["rmnt","script","/__adblocker|html-load/"]],"veganderlust.com":[["rmnt","script","/__adblocker|html-load/"]],"vercanalesdominicanos.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"videos-xxx.de":[["acs","document.querySelectorAll","popMagic"]],"vidhd.co.uk":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"],["aopr","AaDetector"]],"vidnest.fr":[["nowoif"]],"vidop.it":[["aeld","/^(?:click|mousedown|mouseup)$/","di()"],["set","console.clear","trueFunc"],["nowoif"]],"vidsrc.org":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","FingerprintJS"],["acs","addEventListener","HTMLAllCollection"],["nosiif","/0x|sandCheck/"],["nowoif"],["aopr","__Y"],["aopr","AaDetector"],["aopr","Adcash"],["rmnt","script","adserverDomain"]],"vidstream.nl":[["nowoif","!api?call=","10","obj"]],"vipleague.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","navigator","FingerprintJS"],["acs","setTimeout","admc"]],"viprow.de":[["set","path",""],["acs","setTimeout","admc"],["nowoif","//"],["rmnt","script","FingerprintJS"],["json-prune","*","*.adserverDomain"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"viprow.ru":[["set","path",""],["acs","setTimeout","admc"],["nowoif","//"],["rmnt","script","FingerprintJS"],["json-prune","*","*.adserverDomain"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"viralvideotube.com":[["nowoif"]],"vitalitygames.com":[["no-fetch-if","googlesyndication"]],"vizcloud.co.uk":[["aopr","AaDetector"],["ra","data-id|data-p","[data-id],[data-p]","stay"]],"vizcloud2.com":[["aopr","AaDetector"]],"vizcloud2.it":[["aopr","AaDetector"]],"vortez.net":[["nowoif"],["acs","$","Adblock"]],"vosfemmes.com":[["set","is_adblocked","false"],["rmnt","script","/isAdBlocked|popUnderUrl/"],["set-cookie","dscl2","1"]],"voyeurhit.pl":[["acs","adver"]],"vsembed.de":[["acs","addEventListener","HTMLAllCollection"]],"vtlinks.de":[["nowoif"]],"vumoo.es":[["rmnt","script",";}}};break;case $."]],"waaw1.com":[["aopr","doSecondPop"],["aopr","BetterJsPop"]],"waitrosecellar.com":[["set","AnalyticsEventTrackingJS","{}"],["set","AnalyticsEventTrackingJS.addToBasket","noopFunc"],["set","AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"]],"watarukiti.com":[["rmnt","script","html-load.com"]],"watchonlinemoviespk.com.br":[["acs","document.documentElement","break;case $."],["nowoif"]],"watchseries9.de":[["aopr","mm"]],"wcostream.it":[["nofab"],["acs","document.createElement","jsc.mgid.com"],["nowoif"]],"web2.0calc.org":[["aopr","doads"]],"weddleunlimited.com":[["rmnt","script","/__adblocker|html-load/"]],"whas11.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wheelofgold.com":[["noeval-if","/chp_?ad/"],["aeld","load","document.getElementById"],["nosiif","onerror"],["set","checkAdBlocker","noopFunc"]],"whitehouseblackshutters.com":[["rmnt","script","/__adblocker|html-load/"]],"wired2fish.com":[["rmnt","script","/__adblocker|html-load/"]],"wkutickets.com":[["set","blockAdBlock","trueFunc"]],"wmoviesfree.pl":[["acs","JSON.parse","break;case $."]],"wolfsburger-nachrichten.de":[["nostif",".call(null)","10"]],"worddb.com":[["rmnt","script","/__adblocker|html-load/"]],"writedroid.co.uk":[["nano-stb","shortConfig","15000"],["aopw","akadb"],["nostif","_0x"],["no-xhr-if","ads"]],"www.seznam.cz":[["set","sssp","emptyObj"]],"x1337x.org":[["rmnt","script","adserverDomain"],["nowebrtc"],["nostif","location.href"]],"x1337x.ru":[["rmnt","script","adserverDomain"],["nowebrtc"],["nostif","location.href"]],"xhamster10.de":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster3.org":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster4.fr":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster7.de":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamsterdeutsch.co.uk":[["nostif","Adb"]],"xxx24.vip":[["aopr","exoJsPop101"]],"y2mate.ru":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopw","afStorage"],["nowoif"],["aopr","mm"]],"yakisurume.com":[["noeval-if","/chp_?ad/"]],"yesmovies.ru":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["aeld","","break;case $."],["nowoif"],["aopr","AaDetector"],["nowebrtc"]],"yetgamer.com":[["rmnt","script","/__adblocker|html-load/"]],"yomovies.de":[["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","decodeURI"]],"younetu.de":[["nowoif"],["aopr","doSecondPop"],["set","adblockcheck","false"]],"youngleak.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"],["acs","document.dispatchEvent","myEl"],["aopr","ExoLoader.serve"]],"yourporngod.com":[["acs","String.fromCharCode","shift"],["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_pre_vast_alt",""]],"yoututosjeff.es":[["aopw","adBlockDetected"],["aeld","load","2000"]],"yts2.de":[["aopw","afStorage"],["nowoif"],["aopr","mm"]],"zshort.com.br":[["set","blurred","false"]],"zshort.es":[["set","blurred","false"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
