/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0vg9r.com":[["nostif","readyWait"],["nowoif"]],"100percentfedup.com":[["rmnt","script","/==undefined.*body/"]],"1337x.ninjaproxy1.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowebrtc"],["nostif","location.href"]],"1cloudfile.com":[["acs","document.documentElement","break;case $."],["nosiif","!display"],["nowoif"],["no-fetch-if","/nerveheels/"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"2conv.com":[["acs","String.fromCharCode","/btoa|break/"]],"30kaiteki.com":[["noeval-if","/chp_?ad/"]],"4horlover.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"4players.de":[["nostif",".call(null)","10"]],"4runner-forums.com":[["rmnt","script","html-load.com"]],"4runner6g.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"9jarock.org":[["set","openWindow","noopFunc"]],"9to5toys.com":[["rmnt","script","fundingChoicesCalled"]],"ab.nanacdn.com":[["nowoif","/^/","1"],["set","document.ontouchend","null"],["set","document.onclick","null"],["aost","HTMLElement.prototype.click","_0x"]],"acraftedpassion.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"activevoyeur.com":[["acs","document.dispatchEvent","myEl"],["aopr","ExoLoader.serve"]],"addictinggames.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["aopr","Drupal.behaviors.agBlockAdBlock"]],"adfoc.us":[["set","count","0"]],"adsafelink.com":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["set","blurred","false"]],"adsh.cc":[["rmnt","script",";}}};break;case $."],["acs","Math","break;case $."]],"aeclectic.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aegeanews.gr":[["aopr","wpsite_clickable_data"]],"aflizmovies.com":[["acs","document.documentElement","break;case $."]],"aina.lt":[["rmnt","script","html-load.com"]],"alekasgettogether.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allabouttattoo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ambereverywhere.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amessagewithabottle.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"amindi.org":[["acs","$","open"]],"analysis-chess.io.vn":[["noeval-if","/chp_?ad/"]],"anestwithayard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anifast.co":[["acs","addEventListener","HTMLAllCollection"]],"animefire.io":[["acs","WebAssembly","atob"],["rmnt","script","document.body.innerHTML"]],"animesup.info":[["acs","EventTarget.prototype.addEventListener","delete window"]],"ansuko.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"antenasport.online":[["aopr","Adcash"]],"applescoop.org":[["rmnt","script","/probe|adblock|__asPicks/i"]],"appsbull.com":[["nano-stb","div_form"],["aeld","load","htmls"],["rmnt","script","onerror"],["set","private","false"]],"arabic-robot.blogspot.com":[["acs","document.createElement","adblock"]],"areadvd.de":[["nostif",".call(null)","10"]],"astronews.com":[["nostif",".call(null)","10"]],"astrumscans.xyz":[["noeval-if","/chp_?ad/"]],"atemporal.cloud":[["noeval-if","/chp_?ad/"]],"atozmath.com":[["set","googletag._vars_","{}"],["set","googletag._loadStarted_","true"],["set","googletag._loaded_","true"],["set","google_unique_id","1"],["set","google.javascript","{}"],["set","google.javascript.ads","{}"],["set","google_global_correlator","1"]],"aussieexotics.com":[["rmnt","script","html-load.com"]],"auto-service.de":[["nostif",".call(null)","10"]],"autoby.jp":[["rmnt","script","html-load.com"]],"automoblog.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"avirtuouswoman.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"avpcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"azmath.info":[["rmnt","script","AdBlocker"],["aopr","SMart1"],["noeval-if","chp_ad"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"]],"b-hentai.com":[["acs","WebAssembly","atob"]],"badbatchbaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barefeetonthedashboard.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"basketballbuckets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bclikeqt.com":[["acs","JSON.parse","break;case $."]],"beaconjournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"beeg.fund":[["aopr","popit"],["aeld","popstate","noPop"]],"beehivehero.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bellacococrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"berliner-zeitung.de":[["nostif",".call(null)","10"]],"beruang.club":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"best4hack.blogspot.com":[["acs","Math","zfgloaded"]],"besthugecocks.com":[["aopr","document.dispatchEvent"]],"bestporncomix.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bestshemaleclips.com":[["acs","document.querySelectorAll","popMagic"]],"bibliacrista.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"bikinitryon.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bit-shares.com":[["aeld","load","onload"]],"bitview.cloud":[["noeval-if","/chp_?ad/"]],"blizzpaste.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bloxd.io":[["noeval-if","page-kit.io"],["rmnt","script","window.__as_"]],"boerse-online.de":[["nostif",".call(null)","10"]],"bojongourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boredgiant.com":[["noeval-if","/chp_?ad/"]],"brato.bg":[["acs","document.createElement","script"]],"bubbapie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bucksherald.co.uk":[["rmnt","script","await eval"]],"buickevforum.com":[["rmnt","script","html-load.com"]],"bunsenburnerbakery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"businessinsider.com.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"butterbeready.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cambb.xxx":[["no-xhr-if","googlesyndication"]],"campaddict.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"campgrilleat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camsrip.com":[["rmnt","script","googlesyndication"]],"canlikolik.my":[["aeld","message","adsense"]],"carolinaroad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cashurl.in":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"cat-a-cat.net":[["acs","parseInt","break;case $."]],"cbr250.net":[["rmnt","script","html-load.com"]],"cbs42.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"cekip.site":[["no-xhr-if","ads"]],"channel4.com":[["no-xhr-if","/\\/ad\\/g\\/1/"],["json-prune","adverts.breaks"]],"chasingthedonkey.com":[["nowoif"]],"cheatcc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chelseadamon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chevroletownersclub.co.uk":[["rmnt","script","html-load.com"]],"chillizet.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"chrislovesjulia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"citibank.com.sg":[["set","populateClientData4RBA","noopFunc"]],"claimrbx.gg":[["nostif","swal","500"]],"claireguessthousand.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"classic-armory.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clickhole.com":[["set","ga","noopFunc"]],"cloudnestra.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"coldfrm.org":[["nostif","show"]],"colorpsychology.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"columbiacougars.com":[["set","blockAdBlock","trueFunc"]],"computerpedia.in":[["no-fetch-if","ads"],["noeval-if","/chp_?ad/"]],"condorsoft.co":[["no-xhr-if","googlesyndication"]],"confettiandbliss.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookwithdana.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"correction-livre-scolaire.fr":[["noeval-if","/chp_?ad/"]],"cosascaseras.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cosmicapp.co":[["no-fetch-if","adsbygoogle"]],"countrythangdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"couponsandfreebiesmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"craftsyhacks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"creators.nafezly.com":[["no-fetch-if","ads"]],"creatur.io":[["set","canRunAds","true"]],"croq-kilos.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"crunchtimekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crzforum.com":[["rmnt","script","html-load.com"]],"cumbrialife.co.uk":[["set","adLight","true"]],"cupofzest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutegirlshairstyles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyangels.com":[["aopr","document.dispatchEvent"]],"dailymail.com":[["aopr","Notification"]],"dallasnews.com":[["nostif","initializeCourier","3000"]],"dallasobserver.com":[["set","VMG.Components.Adblock","false"]],"databazeknih.cz":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"dateyourspouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daughtertraining.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"deedeedoes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"defendersxs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deichstube.de":[["nostif",".call(null)","10"]],"deliciouslyseasoned.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"delightfulplate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"derwesten.de":[["nostif",".call(null)","10"]],"designtagebuch.de":[["set","SteadyWidgetSettings.adblockActive","false"]],"destakenewsgospel.com":[["noeval-if","/chp_?ad/"]],"dev2qa.com":[["acs","decodeURIComponent","ai_"]],"diskizone.com":[["noeval-if","/chp_?ad/"]],"displacedhousewife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dlhd.sx":[["aost","document.createElement","onerror"],["aopw","u_cfg"],["nostif","()","150"]],"domcooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"donna-cerca-uomo.com":[["acs","document.querySelectorAll","popMagic"]],"downloadpirate.com":[["aopw","Fingerprint2"],["nowoif","_blank"],["acs","globalThis","break;case"]],"downloadr.in":[["nostif","show"],["nano-stb","countdown"]],"dozarte.com":[["acs","document.getElementById","undefined"],["ra","onclick"]],"drake-scans.com":[["noeval-if","/chp_?ad/"]],"drifted.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dudleynews.co.uk":[["set","adLight","true"]],"due.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ebikerforums.com":[["rmnt","script","html-load.com"]],"ecoboostmustang.org":[["rmnt","script","html-load.com"]],"ecoconsumerguide.com":[["rmnt","script","/__adblocker|html-load/"]],"ecranlarge.com":[["rmnt","script","html-load.com"]],"edinburghlive.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"edufileshare.com":[["nano-sib","display"]],"elantraforum.com":[["rmnt","script","html-load.com"]],"elantrasport.com":[["rmnt","script","html-load.com"]],"eleceedmanhwa.me":[["noeval-if","/chp_?ad/"]],"elmundoeats.es":[["rmnt","script","/__adblocker|html-load/"]],"embedwish.com":[["aopr","__Y"],["rmnt","script","/$.*(css|oncontextmenu)/"]],"emmymade.com":[["rmnt","script","/__adblocker|html-load/"]],"enagato.com":[["aopr","open"],["set","blurred","false"]],"epicstream.com":[["aopr","googletag"]],"essenparadies.com":[["rmnt","script","/__adblocker|html-load/"]],"everythinginherenet.blogspot.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"examscisco.com":[["aopr","adsBlocked"]],"exclusivomen.com":[["aopr","_sp_._networkListenerData"]],"explorecams.com":[["aeld","np.detect"],["no-fetch-if","ad-delivery"]],"fabeveryday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fake-it.ws":[["set","adsLoadable","true"]],"fapality.com":[["aopr","document.dispatchEvent"],["aopr","open"]],"fatherandus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fenixsite.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ferrari-talk.com":[["rmnt","script","html-load.com"]],"fiestastoc.com":[["rmnt","script","html-load.com"]],"fightingillini.com":[["set","blockAdBlock","trueFunc"]],"filmez.club":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"findheman.com":[["noeval-if","/chp_?ad/"]],"fisheries.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fishforums.com":[["rmnt","script","html-load.com"]],"florgeous.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fmoonembed.pro":[["acs","document.documentElement","break;case $."]],"focus.de":[["aopr","_sp_.mms.startMsg"],["set","window.__gv_org_tfa","undefined"],["json-prune","enabled","force_disabled"],["nostif",".call(null)"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"fooak.com":[["rmnt","script","/FingerprintJS|openPopup/"],["set","blurred","false"]],"food-bites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forex-yours.com":[["noeval-if","/chp_?ad/"]],"forteturbo.org":[["rmnt","script","html-load.com"]],"forumchat.club":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fotoblogia.pl":[["nano-sib","consoleLoaded?clearInterval"]],"foxhollowcottage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fragrancetoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"francevoyager.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"free-wargamer.com":[["noeval-if","/chp_?ad/"]],"freeprettythingsforyou.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freereceivesms.com":[["nosiif","0x"]],"freezeit.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frugalginger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fuldaerzeitung.de":[["nostif",".call(null)","10"]],"gamemodsbase.com":[["nostif","show"]],"games.everythingzoomer.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.islandpacket.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.sunherald.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gaminggorilla.com":[["aopr","history.replaceState"]],"gardenandbloom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gay4porn.com":[["acs","document.querySelectorAll","popMagic"],["set","flashvars.adv_start_html",""]],"gaydam.net":[["nowoif","","10"]],"gayfor.us":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"]],"genesisforums.com":[["rmnt","script","html-load.com"]],"gentside.com":[["nostif","checkPub","6000"]],"getintopc.com":[["nostif","/ai_adb|_0x/"]],"giessener-allgemeine.de":[["nostif",".call(null)","10"]],"gledajcrtace.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"godeacs.com":[["set","blockAdBlock","trueFunc"]],"gol24.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"golf365.com":[["rmnt","script","/_0x|'innerHTML'/"]],"gonomad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gostreamon.net":[["aopr","open"]],"gr-yaris.co.uk":[["rmnt","script","html-load.com"]],"grcorollaforum.com":[["rmnt","script","html-load.com"]],"greenbaypressgazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"gsmware.com":[["noeval-if","adblock"]],"gsxs1000.org":[["rmnt","script","html-load.com"]],"guardian-series.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"guide2free.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guitars101.com":[["rmnt","script","html-load.com"]],"gulf-up.com":[["aopr","AaDetector"],["acs","Math","break;case $."]],"guruofporn.com":[["aopr","loadTool"]],"hamstersinfo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hanimesubth.com":[["aeld","load","nextFunction"]],"happyhourprojects.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardcoreluv.com":[["acs","document.querySelectorAll","popMagic"]],"hardwarezone.com.sg":[["aopr","SPHMoverlay"]],"hblinks.pro":[["aopr","mm"],["aeld","","history.go"]],"hdmozi.hu":[["rmnt","script","popup"]],"hdontap.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hdstreetforums.com":[["rmnt","script","html-load.com"]],"healthmyst.com":[["rmnt","script","/detectAdBlock|checkFakeAd|adBlockNotDetected/"],["nano-sib","/.?/","*","0.02"]],"healthygirlkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heatworld.com":[["aopr","_sp_._networkListenerData"]],"heavenlyhomemakers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"help.cashctrl.com":[["set","Origami","{}"],["set","Origami.fastclick","noopFunc"]],"helpfixthat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai4k.com":[["acs","document.querySelectorAll","popMagic"]],"hentaiworld.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"],["nowoif","/xlirdr|hotplay\\-games|hyenadata/"]],"hersfelder-zeitung.de":[["nostif",".call(null)","10"]],"hoca5.com":[["rmnt","script","delete window"]],"hoegel-textildruck.de":[["noeval-if","/chp_?ad/"]],"homenization.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeschoolhappiness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeyohmy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houseofturquoise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtoblogformoney.net":[["noeval-if","/chp_?ad/"]],"hqcelebcorner.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"hubzter.com":[["aopr","adsanity_ad_block_vars"]],"hungryforinspiration.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hypesol.com":[["noeval-if","/chp_?ad/"]],"hyundaitucson.info":[["rmnt","script","/adb|offsetWidth|eval/i"],["noeval-if","/adbl/i"]],"ianimes.one":[["rmnt","script","adserverDomain"]],"idol69.net":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"imgclick.net":[["aopw","Fingerprint2"],["noeval"]],"indianveggiedelight.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"inertz.org":[["noeval-if","/chp_?ad/"]],"infocorp.io":[["aopr","detectAdBlocker"]],"internetradio-horen.de":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"intomore.com":[["rmnt","script","adblockerDisabled"]],"investor-verlag.de":[["nostif",".call(null)","10"]],"isaimini.ca":[["acs","JSON.parse","break;case $."]],"issstories.xyz":[["set","history.pushState","noopFunc"]],"itpassportgokaku.com":[["aopw","ai_front"]],"j-town.net":[["rmnt","script","html-load.com"]],"javaguides.net":[["aeld","load","onload"]],"javhay.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javneon.tv":[["acs","document.querySelectorAll","popMagic"],["set","univresalP","noopFunc"]],"javrave.club":[["acs","document.querySelectorAll","popMagic"]],"javsek.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nosiif","pop"]],"javsex.to":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"jaylynnlittle.com":[["rmnt","script","/__adblocker|html-load/"]],"jemontremonminou.com":[["aopr","localStorage"]],"jigcraft.com":[["rmnt","script","/__adblocker|html-load/"]],"jokersportshd.org":[["nowoif","/aff|jump/"]],"jugglingactmama.com":[["rmnt","script","/__adblocker|html-load/"]],"juliescafebakery.com":[["rmnt","script","/__adblocker|html-load/"]],"justagirlandherblog.com":[["rmnt","script","/__adblocker|html-load/"]],"justcastingporn.com":[["acs","document.createElement","_htas"]],"justfamilyporn.com":[["acs","document.createElement","_htas"]],"kabarportal.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"kawarthanow.com":[["nosiif","daadb"]],"kawieriders.com":[["rmnt","script","html-load.com"]],"kazefuri.id":[["rmnt","script","sessionStorage.getItem"]],"kdvr.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kentucky.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"kingshotoptimizer.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchen335co.com":[["rmnt","script","/__adblocker|html-load/"]],"klikmanga.com":[["acs","document.querySelectorAll","popMagic"]],"klrforum.com":[["rmnt","script","html-load.com"]],"kollhong.com":[["aopr","adBlockDetected"]],"kompiko.pl":[["noeval-if","/chp_?ad/"]],"krussdomi.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kukaj.io":[["nowoif"]],"lakelandmom.com":[["rmnt","script","/__adblocker|html-load/"]],"laleggepertutti.it":[["rmnt","script","html-load.com"]],"lancerregister.com":[["rmnt","script","html-load.com"]],"landocspe.com":[["rmnt","script","/__adblocker|html-load/"]],"laneandgreyfare.com":[["rmnt","script","/__adblocker|html-load/"]],"laptechinfo.com":[["nostif","show"]],"lauradaydo.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"laurenmcbrideblog.com":[["rmnt","script","/__adblocker|html-load/"]],"lgwebos.com":[["acs","ips","adb"]],"lifehealthhq.com":[["rmnt","script","/__adblocker|html-load/"]],"likuoo.video":[["acs","document.querySelectorAll","popMagic"]],"linemarlin.com":[["aost","String.prototype.charCodeAt","ai_"]],"linkspaid.com":[["set","jQuery.adblock","false"],["nostif","()","1000"]],"listar-mc.net":[["rmnt","script","onerror"]],"livegore.com":[["acs","atob","decodeURIComponent"],["aopr","LieDetector"]],"livenewsflix.com":[["set","timeSec","0"],["nano-stb","getlink","*","0.001"],["noeval-if","replace"]],"lostatsay.com":[["rmnt","script","/__adblocker|html-load/"]],"loveandgoodstuff.com":[["rmnt","script","/__adblocker|html-load/"]],"loveandlemons.com":[["rmnt","script","/__adblocker|html-load/"]],"lovetofu.cyou":[["nowoif"]],"low-offset.com":[["rmnt","script","/__adblocker|html-load/"]],"luciferdonghua.in":[["noeval-if","/chp_?ad/"],["rmnt","script","ai_adb"],["rmnt","script","baits.push"]],"lusttaboo.com":[["set","popped","true"],["set","flashvars.popunder_url",""]],"m-hentai.net":[["aeld","click","popMagic"]],"m.liputan6.com":[["aeld","scroll"]],"macsite.info":[["aopr","open"]],"makeanddocrew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangagun.net":[["aopr","popns"],["acs","addEventListener","HTMLAllCollection"]],"mangamovil.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"mangoporn.net":[["acs","puShown","/doOpen|popundr/"],["aopr","document.dispatchEvent"],["aopw","pURL"],["nowoif"]],"manitobafishingforum.com":[["rmnt","script","html-load.com"]],"marinmamacooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marshfieldnewsherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"maryswholelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masashi-blog418.com":[["noeval-if","/chp_?ad/"]],"matchthememory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mathebibel.de":[["nostif",".call(null)","10"]],"matometemitatta.com":[["rmnt","script","html-load.com"]],"mavericktruckclub.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"mavsnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maxegatos.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"mdplay.top":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"measuringflower.com":[["aopr","__eiPb"]],"mediaset.es":[["rmnt","script","adbl"]],"megawarez.org":[["aopw","smrtSB"]],"melaniecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"memedroid.com":[["nostif","/adScriptPath|MMDConfig/"]],"mexicanmademeatless.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mgevs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"milkglasshome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"minitravellers.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"misshomemade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommy-pussy.com":[["acs","document.querySelectorAll","popMagic"]],"mommyoverwork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommysucks.com":[["acs","decodeURI","decodeURIComponent"]],"momsneedtoknow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momswhothink.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"money.bg":[["no-fetch-if","method:GET"],["nostif","google"]],"monopolyland.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moredesi.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"morrowplay.com":[["no-fetch-if","adblock_probe"]],"motorbiscuit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motorhomefaqs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motscroises.fr":[["nostif","error-report.com"],["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"movied.link":[["nowoif","!notunmovie"]],"moviesdl.cc":[["rmnt","script",".offsetHeight"]],"mr2oc.com":[["rmnt","script","html-load.com"]],"mrshappyhomemaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mtlurb.com":[["nostif","purple_box"]],"multicanaistt.space":[["aeld","load","detect"]],"musiccritic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"musingsofamuse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myhomebook.de":[["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"mylust.com":[["aopr","document.dispatchEvent"],["aopr","console.clear"]],"myplantifulcooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myreadingmanga.info":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"naijaray.com.ng":[["aost","Math.floor",""]],"narcissisms.com":[["rmnt","script","/__adblocker|html-load/"]],"nativesurge.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"naturalbabylife.com":[["rmnt","script","/__adblocker|html-load/"]],"naturalbd.com":[["aopr","encodeURIComponent"]],"nauathletics.com":[["set","blockAdBlock","trueFunc"]],"netchimp.co.uk":[["aopr","ai_wait_for_jquery"]],"netfapx.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"]],"newatlas.com":[["nostif","[native code]","500"],["rmnt","script","head.appendChild.bind"],["rmnt","script","/^\\(async\\(\\)=>\\{function.{1,200}head.{1,100}\\.bind.{1,900}location\\.href.{1,100}\\}\\)\\(\\);$/"],["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"newtorrentgame.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nexusmods.com":[["set","blockingAds","false"],["remove-cookie","ab"]],"nexuspointnews.com":[["rmnt","script","/__adblocker|html-load/"]],"neymartv.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"ninersnation.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"ninjacue.com":[["rmnt","script","/__adblocker|html-load/"]],"nitroowners.com":[["rmnt","script","/__adblocker|html-load/"]],"noanyi.com":[["noeval-if","/chp_?ad/"]],"noikiiki.info":[["noeval-if","/chp_?ad/"]],"now.gg":[["no-fetch-if","googlesyndication"]],"nsfwhowto.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"nudes7.com":[["acs","document.addEventListener","adsbygoogle"]],"nulleb.com":[["rmnt","script","deblocker"]],"nursingtheory.org":[["rmnt","script","/__adblocker|html-load/"]],"nurtureandthriveblog.com":[["rmnt","script","/__adblocker|html-load/"]],"nutraceuticalsworld.com":[["acs","$","#pageWrapper"]],"nuviatoon.com":[["no-fetch-if","tag.min.js"]],"nwemail.co.uk":[["set","adLight","true"]],"o2tvseries4u.com":[["set-cookie","downloadbypass","1"]],"ohmybrush.com":[["set","ads_blocked","false"]],"oklahomahunter.net":[["rmnt","script","html-load.com"]],"onechicagocenter.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"onehappybite.com":[["rmnt","script","/__adblocker|html-load/"]],"onionplay.io":[["set-attr","#dooplay_player_content .source-box iframe.metaframe[data-src]:not([src])","src","[data-src]"]],"onlyfanvideo.com":[["acs","document.querySelectorAll","popMagic"]],"onneddy.com":[["noeval-if","/chp_?ad/"]],"ontvtonight.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"organicallyaddison.com":[["rmnt","script","/__adblocker|html-load/"]],"otakuliah.com":[["noeval-if","/chp_?ad/"]],"ovcdigitalnetwork.com":[["set","blockAdBlock","trueFunc"]],"pachinkopachisro.com":[["rmnt","script","html-load.com"]],"palmbeachpost.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"parentingscience.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pasokau.com":[["noeval-if","/chp_?ad/"]],"pdftoshokan.com":[["aeld","/click|load/","/document\\.location|pop\\.|exo|cookie|\\.php/"],["nowoif","/ok_|pemsrv\\.com|window\\.location\\.href/"],["set","doAdRedirect","noopFunc"]],"personalityunleashed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"phillyburbs.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"phoenixwithkids.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pierandsurf.com":[["rmnt","script","html-load.com"]],"piloteers.org":[["rmnt","script","html-load.com"]],"pitube.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","/popMagic|pop1stp/"],["rmnt","script","/request|_0x/"]],"pizzamaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"platform.adex.network":[["no-fetch-if","moonicorn.network"]],"playpaste.com":[["acs","document.addEventListener","Popup"],["set","$.ajax","trueFunc"]],"plugincrack.com":[["nostif","ai_adb"]],"pmppracticeexam.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pogo.com":[["set","pogo.intermission.staticAdIntermissionPeriod","0"]],"pokemon-project.com":[["rmnt","script","closePlayer"]],"pokopiadex.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"police.community":[["nostif","adblock"]],"popno-tour.net":[["nostif","innerText","2000"]],"pornbaker.com":[["acs","document.querySelectorAll","popMagic"]],"porncomics.me":[["aopr","open"]],"pornmoms.org":[["acs","document.querySelectorAll","popMagic"]],"pornobr.ninja":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornwatch.ws":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"poultryshowcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"practicalkida.com":[["noeval-if","/chp_?ad/"]],"preparedsociety.com":[["rmnt","script","html-load.com"]],"preppykitchen.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"presstelegram.com":[["set","CnnXt.Event.fire","noopFunc"]],"preventionrd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primaledgehealth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"privatenudes.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"profil.at":[["nostif",".call(null)","10"]],"projuktirkotha.com":[["noeval-if","/chp_?ad/"]],"proxydocker.com":[["nostif","()","1000"]],"publicdomainq.net":[["noeval-if","/chp_?ad/"]],"pumpkinsandpetals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"put-locker.com":[["acs","parseInt","break;case $."]],"puzzles.centralmaine.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"pythonjobshq.com":[["aopr","Keen"]],"quefaire.be":[["rmnt","script","html-load.com"]],"r1.richtoon.top":[["noeval-if","/chp_?ad/"]],"r3-forums.com":[["rmnt","script","html-load.com"]],"r8talk.com":[["rmnt","script","html-load.com"]],"radio-dominicana.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-osterreich.at":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"rallyforums.com":[["rmnt","script","html-load.com"]],"ramdomlives.com":[["acs","document.querySelectorAll","popMagic"]],"ramrebel.org":[["rmnt","script","html-load.com"]],"randaderkson.com":[["rmnt","script","/__adblocker|html-load/"]],"rawmanga.top":[["aopr","AaDetector"]],"realbooru.com":[["aopr","ExoLoader.serve"]],"redwap.me":[["aeld","click","popMagic"]],"regio7.cat":[["set","pr_okvalida","true"],["nostif","sub"]],"reneweconomy.com.au":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"rgbcolorpicker.com":[["rmnt","script","/__adblocker|html-load/"]],"richtoscan.com":[["noeval-if","/chp_?ad/"]],"roadbike.de":[["nostif",".call(null)","10"]],"robaldowns.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rollrivers.com":[["set","blockAdBlock","trueFunc"]],"romsgames.net":[["nano-stb","submit","5000"]],"rot-blau.com":[["nostif",".call(null)","10"]],"runningtothekitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"sagewater.com":[["set","aoAdBlockDetected","false"]],"sandbetweenmypiggies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sarforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"savvytime.com":[["rmnt","script","\"nowprocket\""]],"scarletknights.com":[["set","blockAdBlock","trueFunc"]],"scenexe2.io":[["no-fetch-if","googlesyndication"]],"schoolsweek.co.uk":[["aopr","wpsite_clickable_data"]],"scottishdailyexpress.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"scrumptiously.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seacoastonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"seasonalcravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"send.cm":[["aeld","","break;case $."],["acs","document.documentElement","break;case $."],["acs","JSON","break;case"],["rmnt","script","LieDetector"],["nowoif"]],"seriesperu.com":[["nostif","show"]],"seselah.com":[["aopw","adBlockDetected"]],"setforset.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"settingforfour.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexetag.com":[["aopr","decodeURI"]],"sexphimhd.net":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"sexytrunk.com":[["aopr","document.dispatchEvent"]],"shahied4u.me":[["rmnt","script","/googlesyndication|adblock|keydown|popundersPerIP/i"]],"shapinguptobeamom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharksider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shemalesin.com":[["aopw","__spotSettings"]],"shinobijawi.id":[["no-xhr-if","googlesyndication"]],"shipin188.com":[["rmnt","script","_cpv"]],"shlly.com":[["noeval-if","/chp_?ad/"]],"shupirates.com":[["set","blockAdBlock","trueFunc"]],"sim-kichi.monster":[["noeval-if","/chp_?ad/"]],"simplyrebekah.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skapiec.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"skincaretalk.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sleazyneasy.com":[["aopr","decodeURI"],["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_pre_vast_alt",""],["set","x_width","1"]],"smallfootprintfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smotret-porno-onlain.com":[["acs","document.querySelectorAll","popMagic"]],"smsonline.cloud":[["no-fetch-if","-load.com/script/","length:101"],["nostif",")](this,...","3000-6000"],["nostif","(new Error(","3000-6000"]],"snippetsofparis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soconsports.com":[["set","blockAdBlock","trueFunc"]],"somersetlive.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"songbirdblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spaghetti-interactive.it":[["rmnt","script","html-load.com"]],"speedporn.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["rmnt","script","wpadmngr.com"]],"sportmargin.online":[["rmnt","script","popundersPerIP"]],"sportpiacenza.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"sptfy.be":[["set","count","0"]],"staige.tv":[["set","Object.prototype.adBlocked","false"]],"starbikeforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"starcourier.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"stateofdinner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stevenspointjournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"storyblack.com":[["acs","document.querySelectorAll","popMagic"]],"straatosphere.com":[["nostif","showModal"]],"strcloud.in":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streamporn.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"streamseeds24.com":[["noeval-if","/chp_?ad/"]],"strmup.to":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","wpadmngr.com"],["nowoif"],["rmnt","script","popundersPerIP"],["acs","document.createElement","'script'"]],"stylinbyaylin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugarhero.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supercheats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supermotojunkie.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"superpackpormega.com":[["noeval-if","/chp_?ad/"]],"sussexexpress.co.uk":[["rmnt","script","await eval"]],"swiftload.io":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"synonyms.com":[["set","canRunAds","true"]],"syracusefan.com":[["acs","$","initDetection"]],"t-goforum.com":[["rmnt","script","html-load.com"]],"tagesspiegel.de":[["nostif",".call(null)","10"],["aopr","Notification"]],"talkbudgies.com":[["rmnt","script","html-load.com"]],"talkford.com":[["rmnt","script","html-load.com"]],"talksport.com":[["rmnt","script","AD_URL"],["rmnt","script","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"],["nostif","()=>","1000"]],"taurusarmed.net":[["rmnt","script","html-load.com"]],"tech5s.co":[["nano-sib","/.?/","*","0.02"]],"techbixby.com":[["nowoif"]],"technichero.com":[["nostif","ads"]],"techtalkcounty.com":[["set-cookie","not-robot","true"]],"tecnoaldia.net":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","document.onmousedown"]],"teenager365.to":[["acs","WebAssembly","atob"]],"teryxhq.com":[["rmnt","script","html-load.com"]],"tesbox.my.id":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"thatgirlcookshealthy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theawesomegreen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theblueclit.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thebourbonculture.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedizzycook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefinalfrontier.us":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefirearmblog.com":[["rmnt","script","html-load.com"]],"theglucosegourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theglutenfreeaustrian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehentaiworld.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"theinspirationboard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thejetpress.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"thekitchenpaper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelureforum.com":[["rmnt","script","html-load.com"]],"themerrythought.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theoldhamtimes.co.uk":[["set","adLight","true"]],"thepinterestedparent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theprofitupdates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therebelwalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thescottishfarmer.co.uk":[["set","adLight","true"]],"theshabbycreekcottage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesimplyluxuriouslife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewaystowealth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewebflash.com":[["nostif","clientHeight"]],"thisbagogirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisisoxfordshire.co.uk":[["set","adLight","true"]],"thought.is":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thriving-glutenfree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ticotimes.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tighttorque.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timelylists.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timesheraldonline.com":[["set","CnnXt.Event.fire","noopFunc"]],"tinkerlab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"titantalk.com":[["rmnt","script","html-load.com"]],"tntdrama.com":[["set","turnerAnalyticsObj","{}"],["set","turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["set","turnerAnalyticsObj.getVideoObject4AnalyticsProperty","noopFunc"]],"tokyomotion.net":[["acs","document.querySelectorAll","popMagic"]],"torture1.net":[["acs","document.querySelectorAll","popMagic"]],"tprteaching.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trailhunterforums.com":[["rmnt","script","html-load.com"]],"traxforum.com":[["rmnt","script","html-load.com"]],"treasurenet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tricksplit.io":[["set","blockAdBlock","trueFunc"]],"truyenbanquyen.com":[["acs","decodeURIComponent","ai_"]],"trvst.world":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"turbovidhls.com":[["nowoif"],["nostif","window.open"]],"tv.latinlucha.es":[["rmnt","script","/adsBlocked|\"popundersPerIP\"/"]],"tv.youtube.com":[["set","ytInitialPlayerResponse.playerAds","undefined"],["set","ytInitialPlayerResponse.adPlacements","undefined"],["set","ytInitialPlayerResponse.adSlots","undefined"],["set","playerResponse.adPlacements","undefined"],["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"underhentai.net":[["nano-sib"],["nowoif","!t.me"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"unexpectedelegance.com":[["rmnt","script","/__adblocker|html-load/"]],"unofficialnetworks.com":[["rmnt","script","/__adblocker|html-load/"]],"updown.cam":[["acs","EventTarget.prototype.addEventListener","delete window"]],"upicsz.com":[["acs","document.querySelectorAll","popMagic"]],"uploadbox.io":[["nosiif","()","5000"]],"upstateramblings.com":[["rmnt","script","/__adblocker|html-load/"]],"uranai.nosv.org":[["rmnt","script","html-load.com"]],"utrockets.com":[["set","blockAdBlock","trueFunc"]],"vavada5com.com":[["acs","document.documentElement","break;case $."],["set","adblockDetector","noopFunc"]],"vidara.to":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","WebAssembly","atob"],["nowoif"],["acs","document.createElement","/blocker|detected/"],["rmnt","script","document.getElementsByTagName"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"viefaucet.com":[["nostif","/adbl/i"]],"vintagesexpass.com":[["aopr","Aloader.serve"],["noeval"]],"viva100.com":[["noeval-if","/content-loader\\.com|css-load\\.com|html-load\\.com/"],["rmnt","script","KCgpPT57bGV0IGU"]],"vivasexe.com":[["acs","history.replaceState","location.href"]],"vivrebordeaux.fr":[["noeval-if","/chp_?ad/"]],"volksliederarchiv.de":[["rmnt","script","ai_adb"]],"vox.de":[["no-xhr-if","svonm"],["nostif",".call(null)","10"]],"vozer.io":[["acs","document.addEventListener","Popunder"]],"vxetable.cn":[["rmnt","script","wwads"]],"walletbliss.com":[["rmnt","script","/__adblocker|html-load/"]],"watchsite.net":[["aopr","open"]],"wate.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"watson.de":[["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"wcia.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"weather.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["acs","admiral"]],"wetravelwebond.com":[["rmnt","script","/__adblocker|html-load/"]],"whatismyelevation.com":[["rmnt","script","/__adblocker|html-load/"]],"whatthefroth.com":[["rmnt","script","/__adblocker|html-load/"]],"wikipekes.com":[["acs","jQuery","ai_adb"]],"wildexplained.com":[["rmnt","script","/__adblocker|html-load/"]],"wildpictures.net":[["acs","document.querySelectorAll","popMagic"],["aopr","decodeURI"]],"windowcleaningforums.co.uk":[["nostif","show"],["rmnt","script","/__adblocker|html-load/"]],"woffxxx.com":[["nowoif"]],"workingfromhomeforum.com":[["rmnt","script","html-load.com"]],"worldoftravelswithkids.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"worldstarhiphop.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["acs","admiral"]],"worldwidestandard.net":[["noeval-if","/chp_?ad/"]],"wowdb.com":[["rmnt","script","/__adblocker|html-load/"]],"wp.de":[["nostif",".call(null)","10"]],"wspolczesna.pl":[["aeld","","show"]],"wttw.com":[["set","canRunAds","true"]],"www.amazon.com":[["json-prune","cuepointPlaylist vodPlaybackUrls.result.playbackUrls.cuepoints vodPlaylistedPlaybackUrls.result.playbackUrls.pauseBehavior vodPlaylistedPlaybackUrls.result.playbackUrls.pauseAdsResolution vodPlaylistedPlaybackUrls.result.playbackUrls.intraTitlePlaylist.[-].shouldShowOnScrubBar ads"]],"www.msn.com":[["no-fetch-if","googlesyndication","method:HEAD mode:no-cors"]],"www2.tmyinsight.net":[["noeval-if","/chp_?ad/"]],"xbabe.com":[["set","vastEnabled","false"]],"xbox360torrent.com":[["acs","document.addEventListener","google_ad_client"],["nowoif"]],"xlrforum.com":[["rmnt","script","html-load.com"]],"xpaja.net":[["acs","String.fromCharCode","atob"]],"xpicse.com":[["acs","document.querySelectorAll","popMagic"]],"xr150lforum.com":[["rmnt","script","html-load.com"]],"xup.in":[["nostif","clientHeight"]],"xxxonline.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"yoima.hatenadiary.com":[["nostif","displayMessage","2000"]],"yomucomics.com":[["no-xhr-if","/doubleclick|googlesyndication/"],["no-fetch-if","/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"]],"youhadmeatgardening.com":[["rmnt","script","/__adblocker|html-load/"]],"yourpatientvoice.com":[["rmnt","script","html-load.com"]],"yumstories.com":[["aopr","document.dispatchEvent"]],"zeilink.net":[["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"zekamashi.net":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"zerogpt.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"zerotopay.com":[["aeld","load","onload"]],"zimmysnook.ca":[["rmnt","script","/__adblocker|html-load/"]],"zippyshare.cloud":[["noeval-if","/chp_?ad/"]],"zoechip.com":[["acs","addEventListener","HTMLAllCollection"]],"zonebourse.com":[["acs","$","AdBlocker"],["set","onloadUI","noopFunc"]],"zooredtube.com":[["aopr","popunderSetup"],["aeld","DOMContentLoaded","preventExit"]],"zotyezone.com":[["rmnt","script","html-load.com"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
