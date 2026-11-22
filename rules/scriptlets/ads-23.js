/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0cbcq8mu.com":[["nowoif"],["acs","Math","localStorage['\\x"]],"0l23movies.de":[["aopr","rid"]],"0l23movies.org":[["aopr","rid"]],"10short.ru":[["nano-sib","timer","*","0.001"]],"123moviesla.fr":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"123moviesready.org":[["acs","parseInt","break;case $."]],"1337x.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","adserverDomain"],["nowebrtc"],["nostif","location.href"]],"1direct-cloud.ru":[["acs","document.documentElement","break;case $."]],"5newsonline.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"5play.com":[["nano-sib","countdown","*"]],"5play.de":[["nano-sib","countdown","*"]],"6thgenram.com":[["rmnt","script","html-load.com"]],"7movierulz1.com.br":[["nowoif"]],"9hentai.com.br":[["aeld","click","saveLastEvent"]],"aachener-nachrichten.de":[["nostif",".call(null)","10"]],"abysscdn.com":[["aeld","","break;case $."],["set","document.ontouchend","null"],["set","document.onclick","null"],["aost","HTMLElement.prototype.click","_0x"]],"account.bhvr.com":[["set","Osano","{}"],["set","Osano.cm","{}"],["set","Osano.cm.addEventListener","noopFunc"],["set","Osano.cm.removeEventListener","noopFunc"]],"acienciasgalilei.com":[["aeld","load","adverts-top-container"]],"acortalo.fr":[["nofab"],["nano-sib","","","0"],["set","clicked","true"],["set","eClicked","true"],["set","number","0"],["set","sync","true"]],"actresstoday.com":[["acs","eval","replace"]],"actvid.it":[["acs","addEventListener","HTMLAllCollection"]],"adblockeronstape.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","navigator","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"adblockeronstape.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","navigator","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"advtpe.com":[["nosiif","adblock"]],"afly.pro":[["noeval-if","ads"]],"airfryeryum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alexsportss.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"aliendictionary.com":[["acs","document.querySelector","adblock"]],"an1me.it":[["aost","document.getElementsByTagName","adsBlocked"]],"animalia.bio":[["rmnt","script","void 0||window,"]],"animefreak.es":[["acs","parseInt","break;case $."]],"animesa.ru":[["set","adblock_use","false"]],"antiadtape.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"archivebate.de":[["acs","WebAssembly","atob"]],"arenavision.com.br":[["nowoif"],["acs","JSON.parse","break;case $."]],"aroundtheworldpluskids.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asiangay.tv":[["aopr","popns"]],"atgstudy.com":[["noeval-if","/chp_?ad/"]],"atlantatrails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atomixhq.ru":[["aopw","adcashMacros"],["nowoif","!/download\\/|link/"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"attractiondiary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ausfile.com":[["aopw","Fingerprint2"],["aopw","SubmitDownload1"],["nano-stb"]],"aussiehomebrewer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baby-chick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"babytorrent.net":[["aopr","decodeURI"]],"bakerstreetsociety.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barleyandbirch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bbqingwiththenolands.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bcvc.nl":[["aopr","open"]],"bdmusic23.net":[["acs","parseInt","break;case $."]],"bdupload.fr":[["nano-stb"],["acs","String.fromCharCode","/btoa|break/"],["aeld","","/_0x|localStorage\\.getItem/"]],"beaconjournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"beautytidbits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beekeepingforum.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beinmatch.de":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"beritabangka.com":[["aopw","adBlockDetected"]],"bestsportslive.org":[["rmnt","script","/ai_|eval|Google/"]],"beyondtheflag.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"bhaai.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bigbearswife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bike-urious.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"binged.com.br":[["nowoif"]],"blog.motionisland.com":[["noeval-if","/chp_?ad/"]],"blogk.com":[["noeval-if","/chp_?ad/"]],"blogpascher.com":[["nostif","document.location"]],"blowjobamateur.net":[["acs","document.querySelectorAll","popMagic"]],"bmamag.com":[["rmnt","script","advanced_ads_check_adblocker"]],"bmovies.org":[["acs","JSON.parse","break;case $."],["acs","Math","XMLHttpRequest"]],"bokepindoh.es":[["rmnt","script","/popMagic|pop1stp/"]],"bolly2tolly.co.uk":[["acs","document.documentElement","break;case $."]],"bolly2tolly.com":[["acs","document.documentElement","break;case $."]],"bollyflix.org":[["acs","document.documentElement","break;case $."]],"brainly.com":[["nostif","trigger","0"],["aopr","__brn_private_mode"]],"broccyourbody.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buffsports.it":[["acs","EventTarget.prototype.addEventListener","delete window"]],"buffstream.co.uk":[["acs","JSON.parse","break;case $."],["aopr","mm"]],"buffstreams.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","navigator","FingerprintJS"]],"burytimes.co.uk":[["set","adLight","true"]],"bustybloom.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["aopr","loadTool"]],"carolbeecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cellocentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cg-method.com":[["noeval-if","/chp_?ad/"]],"ch-play.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"championdrive.co":[["aopr","Adcash"]],"chevyblazer.org":[["rmnt","script","html-load.com"]],"chewoutloud.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chip.de":[["json-prune","enabled","force_disabled"],["set","window.__gv_org_tfa","undefined"],["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"christmasonadime.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinefreak.fr":[["aeld","click","openPopunder"]],"cinemalibero.net":[["nowoif"],["aopr","AaDetector"]],"cinemalibero.ru":[["nowoif"],["aopr","AaDetector"]],"claudiastable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleveland.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"clk.org":[["nowoif"],["set","blurred","false"]],"cloudcomputingtopics.net":[["set","distance","0"]],"coatingsworld.com":[["acs","$","#pageWrapper"]],"coleycooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coloringpageshq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comix.it":[["nosiif","localStorage["]],"conniekresin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"convert2mp3.cx":[["nowoif"]],"couchtuner.fr":[["acs","RegExp","0x"],["acs","document.documentElement","break;case $."]],"craftsbyamanda.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"craftycookbook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cricwatch.io":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"crohasit.nl":[["aopw","Fingerprint2"]],"cuevana3.pl":[["aopr","S9tt"],["aopr","decodeURI"],["aopw","popUpUrl"],["acs","Math","break;case $."]],"cztalk.com":[["rmnt","script","html-load.com"]],"daddylive1.net":[["acs","document.documentElement","break;case $."],["rmnt","script","popundersPerIP"]],"dailynews.com":[["set","CnnXt.Event.fire","noopFunc"]],"dailysport.pl":[["acs","String.fromCharCode","atob"],["aopr","AaDetector"],["aopr","open"]],"dailyweb.pl":[["noeval-if","/chp_?ad/"]],"dankmemer.lol":[["nostif","nads"]],"dartsstreams.com":[["rmnt","script","adserverDomain"]],"dciuu.ru":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"deseneledublate.com":[["acs","Math","XMLHttpRequest"],["aopr","AaDetector"],["nowoif"]],"desiflix.net":[["nowoif"]],"desiupload.fr":[["acs","getCookie"],["aeld","","history.go"],["aeld","","/_0x|localStorage\\.getItem/"]],"devx.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dfiles.ru":[["acs","decodeURI","decodeURIComponent"]],"digit77.com":[["acs","addEventListener","Blocker"]],"dimensionalseduction.com":[["rmnt","script","/popMagic|pop1stp/"]],"discoveryplus.org":[["json-prune","data.attributes.config.freewheel data.attributes.config.featureFlags.dPlayer"],["json-prune","data.attributes.ssaiInfo.forecastTimeline data.attributes.ssaiInfo.vendorAttributes.nonLinearAds data.attributes.ssaiInfo.vendorAttributes.videoView data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adMetadata data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adParameters data.attributes.ssaiInfo.vendorAttributes.breaks.[].timeOffset"]],"dissmercury.co.uk":[["set","adLight","true"]],"diycandy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dnevno.hr":[["rmnt","script","html-load.com"]],"dodgetalk.com":[["rmnt","script","html-load.com"]],"dodz.nl":[["nowoif"]],"doityourselfdivas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domainwheel.com":[["nowoif"]],"donegallive.ie":[["rmnt","script","await eval"]],"doodstream.it":[["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"downloadhub.com":[["acs","document.documentElement","break;case $."],["nowoif"]],"downloadming.com.br":[["aopw","decodeURIComponent"],["acs","JSON.parse","break;case $."]],"drivebot.ru":[["nostif","/GoToURL|delay/"]],"dropmms.pl":[["aeld","load","undefined"],["acs","document.onkeydown"]],"dutchycorp.pl":[["acs","eval","replace"],["nano-sib","time.html","1000"],["set","blurred","false"],["rmnt","script","/adblock.php"]],"dvdplay.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["set","D4zz","noopFunc"]],"e123movies.com":[["acs","JSON.parse","break;case $."]],"earnload.pl":[["aopr","app_vars.force_disable_adblock"],["acs","Math","break;case $."]],"eater.com":[["acs","admiral"]],"eatortoss.com":[["rmnt","script","/__adblocker|html-load/"]],"electricteeth.com":[["rmnt","script","/__adblocker|html-load/"]],"elixx.co.uk":[["aopr","AdservingModule"],["aopr","LieDetector"],["aopw","I833"],["json-prune","urls","urls.0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"elixx.it":[["aopr","AdservingModule"],["aopr","LieDetector"],["aopw","I833"],["json-prune","urls","urls.0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"embedcanais.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"embedmoon.de":[["nowoif"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"]],"embedplayer.ru":[["acs","document.documentElement","break;case $."]],"empleo.com.uy":[["noeval-if","/chp_?ad/"]],"eplayvid.es":[["acs","parseInt","break;case $."]],"ericeastweight.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"esportivos.ru":[["acs","document.documentElement","break;case $."],["rmnt","script","popundersPerIP"]],"everydayeileen.com":[["rmnt","script","/__adblocker|html-load/"]],"expressilustrowany.pl":[["aeld","","show"]],"extramovies.de":[["rmnt","script",";}}};break;case $."]],"extrem-down.de":[["rmnt","script","adserverDomain"]],"eztv.fr":[["nowebrtc"],["rmnt","script","adserverDomain"],["nowoif"],["nostif","adb"]],"fandom.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script",").join(String.fromCharCode"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["set","RLCONF.wgAdShieldActive","false"],["set","wgAffiliateEnabled","false"],["set","optimizely","{}"],["set","optimizely.initialized","true"]],"fantabulosity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fantasycalc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"faselhd-watch.pl":[["acs","document.documentElement","break;case $."]],"fastdokan.pl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fc-lc.net":[["rmnt","script","/DName|#iframe_id|AdscoreSignatureLoaded/"]],"fembed.fr":[["aopr","__Y"],["aopw","adcashMacros"],["aopr","mm"],["nowoif"]],"fetchpik.com":[["rmnt","script","googlesyndication"]],"file4go.fr":[["acs","document.getElementById","ad_block"],["set","time","0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"filemooon.top":[["noeval-if","popunder"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"filmisongs.net":[["acs","JSON.parse","break;case $."]],"filmpornofrancais.fr":[["aeld","getexoloader"]],"filmygod.de":[["acs","document.documentElement","break;case $."]],"filmygod13.com.br":[["nowoif"]],"filmypur.net":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"firebirdnation.com":[["rmnt","script","html-load.com"]],"fitnessscenz.com":[["noeval-if","/chp_?ad/"]],"flabfix.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flippedupsidedown.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flix-wave.com.br":[["rmnt","script","adserverDomain"]],"flixtor.org":[["acs","parseInt","break;case $."]],"footballtransfer.com.ua":[["nostif","error-report.com"]],"fouraroundtheworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fox16.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"franceadventurer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"franceprefecture.fr":[["rmnt","script","deblocker"]],"freecoursesonline.de":[["aeld","load","nextFunction"]],"freecoursesonline.fr":[["aeld","load","nextFunction"]],"freemagazinespdf.com":[["acs","eval","replace"]],"freetvsports.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"frostytube.com":[["aopr","document.dispatchEvent"]],"fsplayer.it":[["nowoif"]],"fstore.biz":[["acs","document.getElementById","undefined"],["set","blurred","false"],["nano-sib"]],"funwithoutfodmaps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"g-streaming.com":[["acs","WebAssembly","atob"],["nowoif"]],"gamecopyworld.es":[["acs","document.createElement","Tool"]],"games.boston.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.insp.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamestar.de":[["nostif",".call(null)","10"]],"gamingsmart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"garoetpos.com":[["set","adBlockDetected","noopFunc"]],"gayck.com":[["set","flashvars.adv_pause_html",""]],"gayteam.club":[["acs","document.querySelectorAll","popMagic"],["aopr","AaDetector"]],"gcloud.cfd":[["nowoif"]],"gdplayer.co.uk":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"gentside.ru":[["rmnt","script","()=>eval"]],"gigashock.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlfuckgalleries.com":[["acs","document.querySelectorAll","popMagic"]],"girlwiththeironcast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"giuseppegravante.com":[["noeval-if","/chp_?ad/"]],"gkbooks.in":[["noeval-if","/chp_?ad/"]],"glodls.com":[["nowebrtc"],["rmnt","script","popLink"]],"gluesticksgumdrops.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gntai.net":[["aeld","click","popMagic"]],"gocreighton.com":[["set","blockAdBlock","trueFunc"]],"godupdates.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"gogoanimetv.nl":[["aopr","AaDetector"],["nosiif","_0x"],["nowoif"]],"gogoplay.co.uk":[["acs","JSON.parse","break;case $."]],"gogoplay.de":[["acs","JSON.parse","break;case $."]],"gol24.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"gomovies.es":[["nowoif"],["set","check_adblock","true"],["aopr","mm"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","addEventListener","HTMLAllCollection"]],"gototub.pl":[["nowoif"]],"gotxx.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["nostif","getComputedStyle","250"],["aost","Element.prototype.matches","litespeed"]],"growingplay.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gseagles.com":[["set","blockAdBlock","trueFunc"]],"gtaall.com":[["nowebrtc"],["aopr","Notification"]],"guitarplayer.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"hairstylesfeed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"halifaxcourier.co.uk":[["rmnt","script","await eval"]],"halloporno.fr":[["aeld","getexoloader"]],"hanauer.de":[["nostif",".call(null)","10"]],"handelsblatt.com":[["no-xhr-if","request=adb"]],"handsthatbless.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardxxxmoms.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hdfilme.net":[["acs","Math","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"hdmoviefair.net":[["aeld","","break;case $."],["aost","document.createElement","onerror"]],"hdmoviesflix.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopw","p$00a"]],"hdmoviesmaza.pl":[["nowoif"]],"hdpopcorns.pl":[["acs","JSON.parse","break;case $."]],"hdss.co.uk":[["acs","String.fromCharCode","/btoa|break/"],["acs","globalThis","break;case"]],"hdvideo9.com":[["nowoif"]],"hdzog.de":[["acs","adver"]],"healbot.dpm15.net":[["aopw","adBlockDetected"]],"healthyfoodiegirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hemitruckclub.com":[["rmnt","script","html-load.com"]],"hentaidays.com":[["acs","document.querySelectorAll","popMagic"]],"hentaipulse.com":[["acs","ExoLoader"]],"heraldmailmedia.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"hideout.com":[["acs","stop","adblock"]],"highkeyfinance.com":[["rmnt","script","AdbModel"],["no-fetch-if","ads"],["rmnt","script","deblocker"]],"hiidudemoviez.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"hikarinoakari.com":[["acs","parseInt","break;case $."]],"hilfen-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"history.com":[["no-xhr-if","time-events"],["set","phxSiteConfig.gallery.ads.interstitialFrequency","emptyObj"],["rc","has-ad-top|has-ad-right",".m-gallery-overlay.has-ad-top.has-ad-right"]],"hitomi.la":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","popMagic"],["acs","WebAssembly","atob"],["noeval"],["aopr","open"]],"hoerzu.de":[["nostif",".call(null)","10"]],"holidaycalendar.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"holymanga.net":[["aeld","","break;case $."]],"homeschoolof1.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeschoolpreschool.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hometalk.com":[["set","loadShield","noopFunc"]],"honeygirlsworld.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"hotasianpussysex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hotcars.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"hydrax.co.uk":[["aeld","","_0x"]],"icdrama.net":[["set","adblock","1"]],"idlelivelink.pl":[["nano-sib"]],"iframejav.it":[["nowoif"],["aopr","__Y"]],"iimanga.com":[["aeld","DOMContentLoaded","adsBlocked"]],"imagefap.com":[["acs","$","popCookie"],["set","history.pushState","noopFunc"],["set-cookie","show_only_once_per_day","1"],["set-cookie","show_only_once_per_day2","1"]],"imgflare.com":[["acs","document.querySelectorAll","popMagic"]],"imgtown.com.br":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopr","popjs.init"],["aopw","Fingerprint2"],["nowoif"],["acs","addEventListener","-0x"]],"inkapelis.net":[["acs","setTimeout","aadblock"],["aopr","AaDetector"],["aopw","smrtSB"],["aopw","smrtSP"],["aopw","Fingerprint2"],["acs","decodeURI","decodeURIComponent"]],"investing.com":[["no-fetch-if","ads"],["set","adNotificationDetected","false"]],"itdmusic.co.uk":[["noeval-if","/chp_?ad/"]],"itdmusic.com":[["noeval-if","/chp_?ad/"]],"itdmusic.de":[["noeval-if","/chp_?ad/"]],"ithinkwecouldbefriends.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itopmusicx.com":[["noeval-if","/chp_?ad/"]],"izurvive.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"jamonkey.com":[["rmnt","script","/__adblocker|html-load/"]],"japscan.lol":[["acs","document.documentElement","break;case $."],["nostif","detectImgLoad"]],"jav-fun.cc":[["acs","WebAssembly","atob"]],"javbee.de":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"javct.net":[["aopr","asgPopScript"]],"javembed.co.uk":[["nowoif"]],"justfullporn.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"justonecookbook.com":[["rmnt","script","/__adblocker|html-load/"]],"k12reader.com":[["aopr","rccbase_styles"]],"kaboomtube.com":[["aopr","document.dispatchEvent"]],"kannadamasti.org":[["nowoif"]],"kat.com":[["aeld","","break;case $."],["aopw","ospen"]],"kat2.pl":[["aeld","","break;case $."],["aopw","ospen"]],"katbay.it":[["aeld","","break;case $."],["aopw","ospen"]],"kcentv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"keeplinks.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kerapoxy.co.uk":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["nowoif"],["acs","document.querySelectorAll","popMagic"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"]],"keroseed.com.br":[["noeval-if","/chp_?ad/"]],"kickass.pl":[["rmnt","style","text-decoration"],["aeld","","break;case $."],["aopw","ospen"]],"kickasst.nl":[["aeld","","break;case $."],["aopw","ospen"]],"kilburntimes.co.uk":[["set","adLight","true"]],"kissmanga.co.uk":[["acs","JSON.parse","break;case $."]],"kisstvshow.it":[["acs","$","#divDownload"]],"kitchen335co.com":[["rmnt","script","/__adblocker|html-load/"]],"kotaku.com":[["set","ga","noopFunc"]],"kpopjams.com":[["acs","dataLayer","detectAdBlock"]],"kuronavi.blog":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"kyleecooks.com":[["rmnt","script","/__adblocker|html-load/"]],"laopiniondezamora.es":[["set","pr_okvalida","true"],["nostif","sub"]],"largescaleforums.com":[["rmnt","script","/__adblocker|html-load/"],["nostif",").show()"]],"lastweekilearned.com":[["rmnt","script","/__adblocker|html-load/"]],"leprogres.fr":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"letmewatchthis.it":[["nowebrtc"]],"letocard.fr":[["rmnt","script","/==undefined.*body/"]],"levante-emv.com":[["set","pr_okvalida","true"],["nostif","sub"]],"ligainsider.de":[["acs","$","MutationObserver"],["aopr","LIDetector"],["rmnt","script","ProbeError"],["nostif","/unknown|BLOCKED/i"]],"lilblueboo.com":[["rmnt","script","/__adblocker|html-load/"]],"ling-online.es":[["acs","document.documentElement","break;case $."]],"link1s.com.br":[["aopr","app_vars.force_disable_adblock"],["aopr","open"],["set","blurred","false"]],"linkshere.fr":[["acs","JSON.parse","break;case $."]],"linksmore.it":[["acs","JSON.parse","break;case $."]],"littlebigsnake.com":[["set","ADS.isBannersEnabled","false"]],"littleblackskillet.com":[["rmnt","script","/__adblocker|html-load/"]],"liveon.com":[["acs","setTimeout","admc"]],"liveon.ru":[["acs","setTimeout","admc"]],"longporn.xyz":[["acs","document.querySelectorAll","popMagic"],["nowoif"],["aopr","loadTool"]],"lookmovie2.com.br":[["rmnt","script","/popunder/i"]],"lookslikecandy.com":[["rmnt","script","/__adblocker|html-load/"]],"lovelynudez.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"],["aopr","popit"]],"lyricle.app":[["rmnt","script","/__adblocker|html-load/"]],"m4uhd.nl":[["aopr","mm"]],"manga-scantrad.org":[["acs","document.querySelectorAll","popMagic"]],"mangalist.org":[["nosiif","0x"]],"manganato.gg":[["acs","WebAssembly","atob"],["nowoif"]],"manganatos.com":[["acs","parseInt","break;case $."]],"mangarawjp.pl":[["aeld","","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"mangasail.it":[["set","adblock","1"]],"mangatv.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"manhwa68.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","","break;case $."]],"marinmamacooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marlinowners.com":[["rmnt","script","html-load.com"]],"mathler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mcloud.it":[["aopr","AaDetector"]],"mejortorrent.com.br":[["nowebrtc"],["aeld","click","popMagic"]],"melissaknorris.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"melodelaa.net":[["acs","parseInt","break;case $."]],"meteolive.it":[["no-xhr-if","adsbygoogle"]],"mhdstream.it":[["rmnt","script","deblocker"]],"minitorque.com":[["rmnt","script","html-load.com"]],"mobile.de":[["set","optimizelyDatafile","{}"],["set","optimizelyDatafile.featureFlags","[]"]],"moflix-stream.es":[["nostif","affiliate"],["nostif","afterOpen"]],"moflix-stream.fans":[["acs","addEventListener","HTMLAllCollection"]],"moneysavingmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mostlymorgan.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"motive213link.blogspot.com":[["acs","JSON.parse","break;case $."]],"movie123.pl":[["acs","Math","XMLHttpRequest"],["aopw","Fingerprint2"]],"movie4me.com":[["aopr","Math.floor"]],"movierulzhd.pl":[["acs","JSON.parse","break;case $."],["acs","document.getElementById","adsBlocked"],["aost","document.createElement","/(?=^(?!.*(http)))/"]],"movies07.com.br":[["aeld","","pop"]],"movies4me.it":[["acs","Math","break;case $."]],"moviesdaweb.com.br":[["acs","parseInt","break;case $."]],"moviesden.com":[["aeld","","break;case $."]],"moviesflix.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"]],"moviesmon.net":[["acs","Math","break;case $."]],"movieuniverse.com":[["acs","document.documentElement","break;case $."]],"mp3fy.com":[["nostif","nextFunction","2000"]],"mp3guild.net":[["aopw","Fingerprint2"]],"multicanais.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"multishows.top":[["rmnt","script","/adbl/i","stay","1"],["set-local-storage-item","ad_free_expiry","9999999999999"]],"mustangecoboost.net":[["rmnt","script","html-load.com"]],"myeasymusic.ir":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"myegy.es":[["aopw","decodeURI"],["acs","JSON.parse","break;case $."]],"myfunkytravel.com":[["aopr","__eiPb"]],"naasongsfree.de":[["acs","JSON.parse","break;case $."]],"nativesurge.top":[["nowoif"]],"nekopoi.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"],["acs","atob","tabunder"],["aeld","","adsense"]],"nesiaku.my.id":[["nostif","show"],["aeld","","show"]],"netmovies.to":[["acs","addEventListener","HTMLAllCollection"],["nowoif"]],"newsletter.co.uk":[["rmnt","script","await eval"]],"newsshopper.co.uk":[["set","adLight","true"]],"nflstream.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"nhentai.nl":[["acs","document.querySelectorAll","popMagic"]],"nhentai.pl":[["acs","document.querySelectorAll","popMagic"]],"nobunplease.com":[["rmnt","script","/__adblocker|html-load/"]],"nomadsunveiled.com":[["rmnt","script","/__adblocker|html-load/"]],"nonsensediamond.co.uk":[["aopr","decodeURI"]],"nourish-and-fete.com":[["rmnt","script","/__adblocker|html-load/"]],"novablogitalia.com":[["aeld","load","nextFunction"]],"novelbob.com":[["noeval-if","/chp_?ad/"]],"nowmovies.de":[["acs","Math","break;case $."]],"nurulislam.org":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"okamimiost.com":[["acs","parseInt","break;case $."]],"onedishkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"onionringsandthings.com":[["rmnt","script","/__adblocker|html-load/"]],"onlyindianporn.com.br":[["aopr","exoJsPop101"]],"onlyindianporn.ru":[["aopr","exoJsPop101"]],"onmovies.fr":[["aopw","Fingerprint2"]],"openloadmov.co.uk":[["nowoif"]],"openloadmov.it":[["nowoif"]],"openloadmovies.it":[["aopr","AaDetector"]],"openloadmovies.pl":[["aopr","AaDetector"]],"opjav.com":[["nowoif"]],"oploverz.it":[["acs","JSON.parse","break;case $."],["acs","$","popup"],["nostif","popup"]],"otakuindo.net":[["aopr","Date.prototype.toUTCString"]],"otokukensaku.jp":[["noeval-if","/chp_?ad/"]],"otonanswer.jp":[["rmnt","script",").join(String.fromCharCode"]],"ourcoincash.xyz":[["aeld","load","htmls"],["acs","addEventListener","google_ad_client"],["rmnt","script","htmls"],["noeval-if","Adblock"]],"ourcrowsnest.com":[["rmnt","script","/__adblocker|html-load/"]],"ourfifthhouse.com":[["rmnt","script","/__adblocker|html-load/"]],"oyohd.it":[["nowoif"]],"padresmission.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"paginadanoticia.com.br":[["aopr","pareAdblock"]],"panuvideo.com":[["acs","setTimeout","l.parentNode.insertBefore(s"],["nostif","myTestAd"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","eval","replace"],["nostif","click"]],"paste-drop.com":[["acs","$","googleAdUrl"],["nowoif","_blank"]],"pctfenix.co.uk":[["acs","I833"],["aopr","AaDetector"],["aopr","TID"],["aopw","adcashMacros"],["nowoif","!/download\\/|link/"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"pctnew.fr":[["acs","I833"],["aopr","AaDetector"],["aopr","TID"],["aopw","adcashMacros"],["nowoif","!/download\\/|link/"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"pelix.org":[["aeld","","0x"],["set","btoa","null"],["nowoif"],["aeld","load","url"],["aopw","smrtSB"],["aopw","smrtSP"],["aopr","AaDetector"],["aopw","adcashMacros"]],"pendidikandasar.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"phototrans.hu":[["rmnt","script","!adsbygoogle.loaded"]],"phototrans.net":[["rmnt","script","!adsbygoogle.loaded"]],"pipocamoderna.com.br":[["aopw","adBlockDetected"]],"pirateproxy.de":[["aopw","Fingerprint2"],["nowebrtc"],["acs","String.fromCharCode","decodeURIComponent"],["aeld","/^(?:click|mousedown)$/","_0x"],["acs","Object.defineProperty","document.body.appendChild"]],"pjip.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plaion.com":[["set","Cookiebot","noopFunc"]],"player.sbnmp.it":[["nowoif"]],"player.tormalayalamhd.ru":[["aopr","BetterJsPop"]],"playfmovies.ru":[["nowoif"]],"playtamil.com.br":[["acs","JSON.parse","break;case $."]],"playtivities.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plyjam.co.uk":[["set","attr","{}"],["set","scriptSrc",""],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."]],"pocketnow.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"pogolinks.it":[["aeld","","break;case $."],["nostif","showModal"],["acs","setTimeout","admc"]],"pokedata.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pons.com":[["nostif",".call(null)","10"],["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"poop.pl":[["nowoif"]],"poplinks.net":[["noeval-if","/chp_?ad/"],["rmnt","script","onerror"],["rmnt","script","deblocker"],["nostif","/AdBlock/i"]],"porn720.nl":[["acs","document.querySelectorAll","popMagic"]],"porncomics.it":[["acs","document.querySelectorAll","popMagic"]],"pornfay.es":[["nowoif"]],"pornhd720p.com":[["aopr","loadTool"]],"porno-365.fr":[["aost","document.createElement","Object.init"]],"porno18.net":[["aopr","exoJsPop101"]],"pornocolegialas.org":[["acs","document.querySelectorAll","popMagic"]],"pornx.to":[["rmnt","script","wpadmngr.com"],["nowoif"]],"postimees.ee":[["nostif","adblock"]],"pouvideo.co.uk":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"powv1deo.ru":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"powvibeo.de":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"powvldeo.ru":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"prbay.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"premio.io":[["no-fetch-if","cloudflare.com/cdn-cgi/trace"]],"prime4you.de":[["nostif","ad_blocker_detector"]],"produktion.de":[["set","adblock","false"]],"profootballnetwork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"project-free-tv.ru":[["acs","document.documentElement","break;case $."]],"prostoporno.org":[["aopr","ExoLoader.serve"]],"qthang.net":[["aopr","app_vars.force_disable_adblock"]],"r7forums.com":[["rmnt","script","html-load.com"]],"radio-danmark.dk":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"rainanime.org":[["aopr","loadRunative"]],"raptorforumz.com":[["rmnt","script","html-load.com"]],"raw18.pl":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"read.amazon.net":[["set","canRunAds","1"],["set","ue_adb_chk","1"]],"rebeccacostthousand.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"redandhoney.com":[["rmnt","script","/__adblocker|html-load/"]],"remaxhd.com.br":[["aopr","decodeURI"],["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"repelis.net":[["aopr","popTimes"]],"rgeyyddl.es":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"ripplestream4u.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"ripplestream4u.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"rojadirectatvhd.ru":[["aeld","","_0x"]],"rugerpistolforums.com":[["rmnt","script","html-load.com"]],"rule34ai.com.br":[["aeld","","popMagic"]],"rusticpassionbyallieblog.com":[["rmnt","script","/__adblocker|html-load/"]],"ryannordheimer.com":[["rmnt","script","/__adblocker|html-load/"]],"rysafe.blogspot.com":[["nostif","nextFunction","250"]],"safetxt.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sakurafile.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"savefiles.ru":[["rmnt","script","wpadmngr.com"],["rmnt","script","catcher"]],"savespendsplurge.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"sbplay2.nl":[["aopr","__Y"],["aopr","mm"]],"scat.gold":[["nostif","show"],["acs","document.createElement","onerror"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"searchmovie.wp.xdomain.jp":[["noeval-if","/chp_?ad/"]],"seksualios.com":[["acs","document.querySelectorAll","popMagic"]],"seriemega.co.uk":[["nowoif"]],"serienstream.de":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"seriesonline.co.uk":[["acs","document.documentElement","break;case $."]],"seuseriado.com":[["acs","Math","break;case $."]],"sex-pic.info":[["acs","document.querySelectorAll","popMagic"]],"sextvx.com":[["nostif","window.location.href=link"]],"sharedisk.nl":[["acs","document.documentElement","break;case $."]],"sharedrive.fr":[["nowoif"]],"shavetape.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["acs","document.documentElement","break;case $."],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"shavetape.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["acs","document.documentElement","break;case $."],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"shortearn.ru":[["aopr","AaDetector"],["aopr","open"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","/btoa|break/"]],"shotgunworld.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sikkenscolore.it":[["aopr","wpsite_clickable_data"]],"simpleveganblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplymaggie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simscommunity.info":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siouxlandproud.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"slopitchcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smcgaels.com":[["set","blockAdBlock","trueFunc"]],"smilingcolors.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sms-anonyme.net":[["nowebrtc"]],"soap2day.org":[["acs","JSON.parse","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","Reflect"]],"soapdelinews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"socaltrailriders.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"solarmovie.ru":[["aopr","AaDetector"],["nowoif"],["acs","Math","zfgloaded"]],"sooeveningnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"sosuroda.pl":[["noeval-if","/chp_?ad/"]],"spankbang.com":[["nowoif"],["set","BJSShowUnder","{}"],["set","BJSShowUnder.bindTo","noopFunc"],["set","BJSShowUnder.add","noopFunc"]],"spigotunlocked.pl":[["nostif","show"]],"sportcast.de":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"sportlive.com":[["ra","onclick"]],"sportlive.es":[["ra","onclick"]],"sportsembed.ru":[["acs","setTimeout","admc"]],"sportstreamtv.pl":[["acs","JSON.parse","break;case $."]],"sporttuna.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"spring.org.uk":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"sptfy.be":[["set","count","0"]],"spy-x-family.com":[["acs","document.querySelectorAll","popMagic"]],"stapewithadblock.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","navigator","break;case $."]],"starmusiq.it":[["nowebrtc"],["set","isAdBlockActive","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"staugustine.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"steanplay.net":[["nowoif"],["aeld","","BACK"],["aopr","jwplayer.utils.Timer"]],"stemandspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stream.googleapiscdn.com":[["json-prune","pauseAd"],["rmnt","script","/\\\\x|-a0|bait/"],["aeld","DOMContentLoaded","_0x"]],"streamadblockplus.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"streamadblockplus.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"streambucket.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamers.net":[["aeld","","break;case $."]],"streamhub.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["aopw","__aaZoneid"],["nowoif"]],"streaming-community.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streamm4u.nl":[["nowebrtc"],["aopr","AaDetector"]],"streamonsport99.com":[["acs","document.documentElement","break;case $."]],"subarubrzforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"subtitleone.cc":[["set","Object.prototype.adblockFound","false"]],"subtorrents.es":[["aopr","capapubli"],["aopr","getUrlParameter"],["nowebrtc"],["noeval"],["popads-dummy"],["set","btoa","null"]],"superembeds.com":[["nowoif"]],"supermarches.ca":[["acs","$","css"]],"superstream.es":[["aopr","AaDetector"]],"supervideo.net":[["aopr","AaDetector"]],"sushi-scan.org":[["nostif","show"]],"svipvids.com":[["aopw","KillAdBlock"]],"swatalk.com":[["aost","String.prototype.charCodeAt","ai_"]],"sweetteaandthyme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sxyprn.fr":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["acs","WebAssembly","atob"],["acs","decodeURI","decodeURIComponent"],["set","vast_urls","{}"],["aopr","popns"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aopw","__aaZoneid"]],"t20cup.co.uk":[["aeld","","break;case $."]],"tablelifeblog.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"talkcockatiels.com":[["rmnt","script","html-load.com"]],"tamilprinthd.es":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"taming.io":[["no-xhr-if","ads"]],"taradinhos.com":[["noeval-if","ads"]],"teds-list.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teluguonlinemovies.es":[["nowoif"]],"tenies-online.co.uk":[["acs","JSON.parse","break;case $."],["aopr","mm"]],"tenies-online.com.br":[["acs","JSON.parse","break;case $."],["aopr","mm"]],"theadvertiser.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thebeginningaftertheend.com":[["acs","document.querySelectorAll","popMagic"]],"thedroidguy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefirstmess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefmovies.fr":[["aost","Math","inlineScript"],["nostif","0x"],["nowoif"]],"thelabradorforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themomfriend.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theroot.com":[["set","ga","noopFunc"]],"thestitchinmommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestreameast.ru":[["aeld","/^/","0x"],["nosiif","visibility","1000"],["nowebrtc"],["nostif","sadbl"],["aopr","aclib"]],"theyarehuge.com":[["acs","document.querySelectorAll","popMagic"],["acs","Object.defineProperty","clickHandler"]],"thisisourbliss.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"thisisraleigh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thispixiecreates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ticketmaster.sg":[["nosiif","detector"]],"tide-forecast.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"tiguanevforum.com":[["rmnt","script","html-load.com"]],"tiz-cycling.fr":[["acs","jQuery","blocker"]],"topsoccerblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"torlock.net":[["acs","setTimeout","admc"],["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"torlock2.nl":[["acs","setTimeout","admc"],["nowebrtc"]],"tornadomovies.pl":[["set","atob","noopFunc"]],"torovalley.net":[["acs","document.documentElement","break;case $."]],"torrentstatus.de":[["aopw","afStorage"],["nowoif"],["aopr","mm"]],"torrentz2eu.fr":[["aopr","glxopen"],["acs","decodeURI","decodeURIComponent"],["acs","$","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"torrentz2eu.org":[["aopr","glxopen"],["acs","decodeURI","decodeURIComponent"],["acs","$","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tortoiseforum.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"totaldebrid.es":[["nostif","nextFunction","250"]],"totallygoldens.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"touchdowntexas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tr.link":[["nowoif","ppcnt"],["ra","data-ppcnt_ads","main[onclick]"]],"trapshooters.com":[["rmnt","script","html-load.com"]],"trigonevo.com":[["acs","eval","replace"],["rmnt","script","deblocker"]],"trocforums.co.uk":[["rmnt","script","html-load.com"]],"turkdown.com":[["aopr","AaDetector"]],"turkishliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tvfutbol.info":[["acs","document.documentElement","break;case $."]],"ujav.me":[["aopr","jwplayer.utils.Timer"],["aopr","__Y"],["nowoif"],["acs","globalThis","break;case"]],"unblocknow.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uplinkto.org":[["acs","navigator","break;case $."]],"uplinkto.pl":[["acs","navigator","break;case $."]],"uploadbuzz.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uploadhub.fr":[["acs","document.documentElement","break;case $."],["nowoif"],["no-fetch-if","adsbygoogle"],["nostif","location.href","1000"]],"vev.org":[["aeld","/^(?:click|mousedown|mouseup)$/","di()"],["set","console.clear","trueFunc"],["nowoif","/^/","1"]],"vgamerz.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"vidbeem.com":[["acs","JSON.parse","break;case $."]],"vidcloud9.it":[["rmnt","script",";}}};break;case $."],["acs","Math","break;case $."],["acs","document.documentElement","break;case $."]],"vidsrc.ru":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","FingerprintJS"],["acs","addEventListener","HTMLAllCollection"],["nosiif","/0x|sandCheck/"],["nowoif"],["aopr","__Y"],["aopr","AaDetector"],["aopr","Adcash"],["rmnt","script","adserverDomain"]],"vintagetube.com.br":[["aopr","popit"],["aeld","popstate","noPop"]],"vipboxtv.com.br":[["json-prune","*","*.adserverDomain"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","navigator","FingerprintJS"],["nowoif","//"],["aopr","Adcash"]],"vipboxtv.net":[["json-prune","*","*.adserverDomain"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","navigator","FingerprintJS"],["nowoif","//"],["aopr","Adcash"]],"vipracing.nl":[["acs","$","show"],["aopr","AaDetector"]],"visorsmr.com":[["noeval-if","/chp_?ad/"]],"vivatube.ru":[["nowoif"]],"vkmp3.com.br":[["acs","JSON.parse","break;case $."]],"volkszone.com":[["rmnt","script","html-load.com"]],"vox.de":[["no-xhr-if","svonm"],["nostif",".call(null)","10"]],"voyeur-pornvideos.com":[["aopr","Aloader.serve"],["noeval"]],"voyeurhit.fr":[["acs","adver"]],"voyeurhit.it":[["acs","adver"]],"vulture.com":[["aeld","/^(?:click|mousedown)$/","latest!=="]],"waaw1.pl":[["aopr","doSecondPop"],["aopr","BetterJsPop"]],"wannafreeporn.com":[["acs","document.querySelectorAll","popMagic"],["aeld","","pop"]],"waploaded.ru":[["aopr","exoJsPop101"],["ra","href",".button[href^=\"javascript\"]"]],"watchcartoonsonline.pl":[["acs","document.createElement","jsc.mgid.com"]],"watchkobestreams.info":[["aost","atob","inlineScript"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watchmovierulz.org":[["acs","document.documentElement","break;case $."],["nowoif"]],"watchmovieshd.com.br":[["acs","JSON.parse","break;case $."]],"watchporn.com":[["acs","document.querySelectorAll","popMagic"]],"watchpornx.com":[["aopr","document.dispatchEvent"],["aopr","jsUnda"],["nowoif"],["acs","puShown","/doOpen|popundr/"]],"watchseries9.co.uk":[["aopr","mm"]],"watchsuitsonline.net":[["nowoif"]],"watchtalkforums.info":[["rmnt","script","html-load.com"]],"watchtvchh.net":[["acs","setTimeout","admc"]],"watchxxxfree.pw":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"webnoveltranslations.com":[["rmnt","script","ad-gate"]],"weloma.es":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","addEventListener","HTMLAllCollection"],["nowoif"],["set-cookie","unlock_chapter_guest","1"],["acs","document.createElement","dataset.zone"]],"werefarfromnormal.com":[["rmnt","script","/__adblocker|html-load/"]],"wetteronline.com.br":[["aopr","__eiPb"],["nostif",".call(null)","10"]],"wgod.co":[["acs","$","test"]],"whatmollymade.com":[["rmnt","script","/__adblocker|html-load/"]],"wholeandheavenlyoven.com":[["rmnt","script","/__adblocker|html-load/"]],"wieistmeineip.it":[["nostif",".call(null)","10"],["rmnt","script","html-load.com"]],"wikipooster.com":[["noeval-if","/chp_?ad/"]],"wlz-online.de":[["nostif",".call(null)","10"]],"wolfstream.org":[["nowoif"]],"worldfree4u.co.uk":[["nowoif"]],"wplink.co.uk":[["set","blurred","false"]],"wspolczesna.pl":[["aeld","","show"]],"wttw.com":[["set","canRunAds","true"]],"wupfile.com":[["acs","parseInt","break;case $."]],"wwwfotografgotlin.blogspot.com":[["set","fuckAdBlock._options.baitClass","null"]],"x-trail-uk.co.uk":[["rmnt","script","html-load.com"]],"xfrenchies.com":[["aeld","","popMagic"]],"xhamster10.es":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster12.es":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster16.de":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster18.pl":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster2.de":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster42.net":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmegadrive.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","wpadmngr.com"],["set","flashvars.adv_pause_html",""]],"xnxx-downloader.net":[["acs","document.querySelectorAll","popMagic"]],"xprime4u.fr":[["noeval-if","/chp_?ad/"],["nowoif"]],"xxx-image.com":[["aopr","adsBlocked"],["aopr","open"],["noeval"],["aopr","XMLHttpRequest"],["aopr","Date.prototype.toUTCString"],["ra","oncontextmenu"]],"xxxfiles.de":[["acs","document.querySelectorAll","popMagic"]],"xxxhdvideo.com":[["aopr","decodeURI"]],"xxxindianporn.fr":[["aopr","exoJsPop101"]],"y2meta.mobi":[["nowoif","!y2meta"]],"yeptube.fr":[["nowoif"]],"ymix.to":[["nostif","._$","2000"],["nosiif","._$","3000"]],"ymovies.fr":[["acs","Math","break;case $."]],"your-local-pest-control.com":[["noeval-if","/chp_?ad/"]],"youtubemp3donusturucu.net":[["aeld","click","t(a)"]],"yoututosjeff.de":[["aopw","adBlockDetected"],["aeld","load","2000"]],"ytsaver.com":[["acs","JSON.parse","break;case $."]],"zedporn.com":[["set","vastEnabled","false"],["aopw","BetterJsPop"]],"zooqle.es":[["nowebrtc"],["aeld","/^(?:mousedown|mouseup)$/","0x"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"zshort.it":[["set","blurred","false"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
