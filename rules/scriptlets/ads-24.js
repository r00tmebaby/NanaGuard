/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123moviesfun.is":[["acs","Math","XMLHttpRequest"]],"18tubehd.com":[["acs","document.dispatchEvent","myEl"]],"300cforumz.com":[["rmnt","script","html-load.com"]],"4k2h4w04.xyz":[["nowoif"],["acs","Math","localStorage['\\x"]],"4meplayer.com":[["nowoif","_blank"]],"4tube.live":[["nowoif"],["nostif","/createElement|addEventListener|clientHeight/"]],"5newsonline.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"7misr4day.com":[["nano-sib"],["aopr","adBlockDetected"],["nowoif"],["noeval-if","ads"]],"9908ww.com":[["set","page_params.holiday_promo","true"]],"abakingjourney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aboderie.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adayinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adictox.com":[["acs","WebAssembly","atob"],["aopr","popns"]],"adn.com":[["aopr","MG2Loader"]],"airportwebcams.net":[["noeval-if","/chp_?ad/"]],"akff.net":[["rmnt","script","html-load.com"]],"akirabox.com":[["aeld","DOMContentLoaded","open"],["nowoif","_blank"],["acs","setTimeout","decodeURIComponent(escape"],["rmnt","script","(function(","excludes","document"],["aeld","click",".href"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>/g","excludes","/^self\\.__next_f\\.push/"]],"alfajuniorforum.com":[["rmnt","script","html-load.com"]],"alimaniacky.cz":[["acs","$","urlForPopup"]],"alleveilingen.nl":[["acs","document.addEventListener","fakeAd"]],"allthehealthythings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alphatv.gr":[["set","Object.prototype.adblockPlugin","undefined"]],"andrewzimmern.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ani-stream.com":[["no-fetch-if","damoh.ani-stream.com"]],"animalextremesex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"animepornfilm.com":[["aopr","popit"],["aeld","popstate","noPop"]],"animeworld.ac":[["acs","WebAssembly","atob"]],"aqua2ch.net":[["rmnt","script","html-load.com"]],"aquariustraveller.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aronaforums.co.uk":[["rmnt","script","html-load.com"]],"asianacircus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asiananimaltube.org":[["nowoif"]],"asimplepalate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aspirapolveremigliori.it":[["noeval-if","/chp_?ad/"]],"aswbpracticeexam.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atsloanestable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atvdragracers.com":[["rmnt","script","html-load.com"]],"audiobooks4soul.com":[["nostif","show"]],"authenticforum.com":[["rmnt","script","html-load.com"]],"authoritytattoo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"avforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"awellstyledlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"awkward.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"ayuka.link":[["noeval-if","/chp_?ad/"]],"babyjimaditya.com":[["aopw","adBlockDetected"]],"bajarjuegospcgratis.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"barchart.com":[["set","showPremLite","true"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barkinganddagenhampost.co.uk":[["set","adLight","true"]],"basset.net":[["rmnt","script","html-load.com"]],"belletag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"berich8.com":[["aopr","adsBlocked"]],"best-minecraft-servers.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bethbryan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beyondmeresustenance.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bigojav.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"birdsandblooms.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"birdzilla.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bitcosite.com":[["no-fetch-if","googlesyndication"],["acs","eval","replace"],["set","blurred","false"],["set","adScriptLoaded","true"],["rmnt","script","alert","condition","adblock"]],"bizapedia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blackpoolgazette.co.uk":[["rmnt","script","await eval"]],"blazersedge.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"blessthismessplease.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blissfulbasil.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blogmura.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"blu-ray.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["nowoif"]],"blueovalfanatics.com":[["rmnt","script","html-load.com"]],"bootstrample.com":[["aopr","popns"]],"breitbart.com":[["nostif","BN_CAMPAIGNS"]],"breznikar.com":[["nostif","modal"]],"broccyourbody.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brownsnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bsmaurya.com":[["noeval-if","/chp_?ad/"]],"buckinghamshirelandscapegardeners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"budgettravelbuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buickforums.com":[["no-xhr-if","googlesyndication"]],"buythiscookthat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"by-pink.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"c.newsnow.com":[["rmnt","script","/^/gms","excludes","__INITIAL_STATE__"]],"cacfutures.org":[["acs","jQuery","No"]],"cafedelites.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"calgaryherald.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"caloriesburnedhq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camchickscaps.com":[["aopw","ai_adb_overlay"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"camgirls.casa":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"campercommunity.com":[["rmnt","script","html-load.com"]],"campingforfoodies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"canadianunderwriter.ca":[["aopw","mockingbird"]],"capoplay.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"cardcollector.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"castandspear.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"castleinthemountains.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"celebritydeeplink.com":[["acs","WebAssembly","atob"]],"celticway.co.uk":[["set","adLight","true"]],"centredaily.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"chattanoogan.com":[["set","AbleToRunAds","true"]],"cheerfulcook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chefnotrequired.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chelseasmessyapron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chevronlemon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chiselandfork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"choosingchia.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chopchat.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"chopstickchronicles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chromebookforum.com":[["rmnt","script","html-load.com"]],"cinehd.app":[["nostif","getComputedStyle"],["no-fetch-if","method:HEAD"]],"cinemastervip.com":[["rmnt","script","'hidden'"]],"cizzyscripts.com":[["noeval-if","/chp_?ad/"]],"clamor.pl":[["no-fetch-if","ads"]],"clickjogos.com.br":[["set","ShowRewards","noopFunc"]],"cloudhostingz.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"club-flank.com":[["aopr","ExoLoader.serve"]],"clubfrontier.org":[["rmnt","script","html-load.com"]],"cnevpost.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coachrallyrus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coltforum.com":[["rmnt","script","html-load.com"]],"confettidaydreams.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"convert2mp3.cx":[["nowoif"]],"cookathomemom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"corriere.it":[["aeld","adb"]],"cottageandvine.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"courseleader.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"cravingsofalunatic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"creditcardrush.com":[["nostif","adsBlocked"]],"crochet-patterns-free.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crosswordmasterhelp.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cryptorank.io":[["nostif","...","300"],["nostif","/\\{[a-z]\\(!0\\)\\}/"]],"csgo-ranks.com":[["nosiif","visibility","1000"]],"cuevana8.com":[["nowoif"]],"customonesixth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"czterykaty.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"dailyveganmeal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyvoice.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"dallashoopsjournal.com":[["rmnt","script","html-load.com"]],"darknessporn.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","Exo"],["aeld","getexoloader"]],"dbna.de":[["nostif",".call(null)","10"]],"ddownr.com":[["nowoif"]],"deadspin.com":[["set","ga","noopFunc"]],"deltiasgaming.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"demooh.com":[["noeval-if","/chp_?ad/"]],"derstandard.at":[["remove-cookie","zonck"],["set-local-storage-item","zonck","$remove$"],["nostif","event","3000"]],"designmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deutschekanale.com":[["no-fetch-if","imasdk"]],"developer.arm.com":[["set","Munchkin","{}"],["set","Munchkin.init","noopFunc"]],"dicecitysports.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diethood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"differentiatedkindergarten.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"digitalseoninja.com":[["noeval-if","/chp_?ad/"]],"dirtytubemix.com":[["aopr","document.dispatchEvent"]],"distanta.net":[["acs","parseInt","break;case $."]],"dlapk4all.com":[["aopr","glxopen"],["aeld","","_0x"]],"dlhe-videa.sk":[["acs","document.createElement","script"]],"doctor-groups.com":[["acs","String.fromCharCode","/btoa|break/"]],"dodgeintrepid.net":[["rmnt","script","html-load.com"]],"dododsondesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domahi.net":[["acs","document.querySelectorAll","popMagic"]],"dongknows.com":[["acs","document.createElement","js_func_decode_base_64"],["no-fetch-if","/ads|doubleclick/"],["nostif","/Ads|adbl|offsetHeight/"],["acs","eval","replace"],["aeld","load",".innerHTML"]],"donlego.com":[["noeval-if","/chp_?ad/"]],"dootalk.com":[["rmnt","script","html-load.com"]],"dotfreexxx.com":[["noeval"],["aopr","Aloader.serve"]],"down.dataaps.com":[["rmnt","script","window.open"]],"drakecomic.com":[["noeval-if","/chp_?ad/"]],"drugstoredivas.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drummerworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drzna.com":[["noeval-if","/chp_?ad/"]],"dsocker1234.blogspot.com":[["acs","String.prototype.charCodeAt","replace"],["set","new_config.timedown","0"]],"dvdgayporn.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"eadt.co.uk":[["set","adLight","true"]],"easyvidplayer.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["aeld","click","popunder"],["aost","document.createElement","displayLayer"],["aeld","click","adId"],["nowoif"]],"ebook-hell.to":[["nowoif"]],"edibleperspective.com":[["rmnt","script","/__adblocker|html-load/"]],"ehmac.ca":[["rmnt","script","html-load.com"]],"elamigosedition.com":[["aost","document.addEventListener","blocker"],["nowoif"]],"eldia.es":[["set","pr_okvalida","true"],["nostif","sub"]],"elizabethrider.com":[["rmnt","script","/__adblocker|html-load/"]],"elvocero.com":[["acs","__tnt","compatibility"]],"emailnator.com":[["nostif","adsbygoogle"]],"embedtv.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","closeBanner"]],"emisoras-puertorico.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"emueagles.com":[["set","blockAdBlock","trueFunc"]],"energydrinkhub.com":[["rmnt","script","/__adblocker|html-load/"]],"eodev.com":[["nostif","trigger","0"]],"epicgardening.com":[["rmnt","script","/__adblocker|html-load/"]],"erome.com":[["acs","$","exo"],["aopr","tic"],["aopw","tiPopAction"]],"escort-in-italia.com":[["acs","document.querySelectorAll","popMagic"]],"eventstocelebrate.net":[["rmnt","script","/__adblocker|html-load/"]],"evergreenkitchen.ca":[["rmnt","script","/__adblocker|html-load/"]],"everydayessentialist.com":[["rmnt","script","/__adblocker|html-load/"]],"everysextube.com":[["acs","document.querySelectorAll","popMagic"]],"exeking.top":[["noeval-if","/chp_?ad/"]],"expatforum.com":[["rmnt","script","html-load.com"]],"exporntoons.net":[["nano-stb","download","1100"],["acs","document.querySelectorAll","popMagic"]],"fakt.pl":[["rmnt","script","__adblocker","excludes","self.__next"],["nostif","offsetHeight"]],"fantasticporn.net":[["aopr","popit"],["aeld","popstate","noPop"]],"fastupload.io":[["rmnt","script","AdBlocker"]],"fc2db.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ferrari296forum.com":[["rmnt","script","html-load.com"]],"fetcheveryone.com":[["rmnt","script","ab.php"]],"fifaultimateteam.it":[["aost","Math","inlineScript"],["nowoif"]],"filedot.to":[["rmnt","script","popundersPerIP"]],"film1k.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"financeehelp.com":[["noeval-if","/chp_?ad/"]],"firmy.cz":[["rmnt","script","/adBottomWrap|doubleclick/"],["aopr","shaman"]],"firstpost.com":[["ra","href",".t-out-span [href*=\"utm_source\"]","stay"],["ra","src",".t-out-span [src*=\".gif\"]","stay"]],"fjrforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flouronmyfingers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fmj.co.uk":[["aopr","wpsite_clickable_data"]],"focusst.org":[["rmnt","script","html-load.com"]],"foodal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodbymars.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forteforums.com":[["rmnt","script","html-load.com"]],"foxandbriar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foxsports.com.au":[["set","cxStartDetectionProcess","noopFunc"]],"freecourse.tech":[["nostif","ai_"]],"freemockups.org":[["noeval-if","/chp_?ad/"]],"freepic-downloader.com":[["no-fetch-if","google-analytics"]],"freepikdownloader.com":[["aeld","load","modal_blocker"]],"freeride.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freesexvideos24.com":[["noeval"],["aopr","Aloader.serve"]],"freetron.top":[["no-xhr-if","adx"]],"freeuse.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fstore.biz":[["acs","document.getElementById","undefined"],["set","blurred","false"],["nano-sib"]],"fuckmonstercock.com":[["aopr","Aloader.serve"],["noeval"]],"funzen.net":[["nostif","mdpDeBlocker"],["nowoif"]],"fusionsportforums.com":[["rmnt","script","html-load.com"]],"g5club.net":[["rmnt","script","html-load.com"]],"gala.fr":[["aopr","_sp_._networkListenerData"],["nostif","checkPub","6000"],["acs","btoa","BOOTLOADER_LOADED"],["set","DD_RUM.addTiming","noopFunc"],["no-xhr-if","doubleclick"]],"gamelab.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.denverpost.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gardeningelsa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gatagata.net":[["noeval-if","/chp_?ad/"]],"gayvidsclub.com":[["nowoif"]],"gentiluomodigitale.it":[["noeval-if","/chp_?ad/"]],"ghbrisk.com":[["rmnt","script","#adbd"]],"giessener-anzeiger.de":[["nostif",".call(null)","10"]],"gingerdivine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gingersnapsbakingaffairs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"glasgowworld.com":[["rmnt","script","await eval"]],"golfchannel.com":[["set","adBlockEnabled","false"]],"golfergeeks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gopests.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gopresstimes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gorgeradio.com":[["set","google_unique_id","6"]],"govfacts.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gp24.pl":[["aeld","","show"]],"greasygaming.com":[["noeval-if","/chp_?ad/"]],"greedygirlgourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greenvalleykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grillo-designs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grsprotection.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"grubstreet.com":[["aopr","stop"]],"gry-online.pl":[["set","jad","undefined"]],"gseagles.com":[["set","blockAdBlock","trueFunc"]],"guiafinanceiro.top":[["set","adb_failed","false"]],"gumtree.com":[["json-prune","features.ad02 features.adshield"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"happyfamilyrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happyhealthyeaters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happymoments.lol":[["rmnt","script","html-load.com"]],"hardgif.com":[["acs","$","window.open"],["nowoif",".php"]],"hartico.tv":[["nostif","getComputedStyle","250"]],"hawtcelebs.com":[["aopw","close_screen"]],"hdjavonline.com":[["acs","document.querySelectorAll","popMagic"]],"hdrez.com":[["nostif","displayMessage"],["acs","document.addEventListener","openPopup"]],"hellcat.org":[["rmnt","script","html-load.com"]],"heqviral.com":[["nostif","/window\\.location\\.href|n/","8000"]],"hhesse.de":[["noeval-if","/chp_?ad/"]],"hibsobserver.co.uk":[["set","adLight","true"]],"hiddencamhd.com":[["noeval"],["aopr","Aloader.serve"]],"hieunguyenphoto.com":[["nostif","adblock"],["nano-sib","countdown"]],"hockeyanswered.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"holisticsquid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemodelenginemachinist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hometalkpaid.com":[["set","loadShield","noopFunc"]],"hondatwins.net":[["rmnt","script","html-load.com"]],"honestgolfers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hopsion-consulting.com":[["noeval-if","/chp_?ad/"]],"hotstar.com":[["json-prune","success.page.spaces.player.widget_wrappers.[].widget.data.intervention_data"]],"howsweeteats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtotipsntricks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hub2tv.com":[["noeval-if","/chp_?ad/"]],"hwreload.it":[["acs","$","show"]],"hyperosthemes.org":[["no-fetch-if","adsbygoogle"]],"iclarified.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imas-cg.net":[["rmnt","script","html-load.com"]],"imgbaron.com":[["aopr","loadTool"]],"indiansexbazar.com":[["acs","document.querySelectorAll","popMagic"]],"indojavstream.com":[["acs","document.createElement","pop_tag"],["nowoif","_blank"]],"indratranslations.com":[["noeval-if","/chp_?ad/"]],"infinitijxforum.com":[["rmnt","script","html-load.com"]],"infor.pl":[["rmnt","script","html-load.com"]],"instantloss.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iporntv.net":[["acs","document.createElement","pop"]],"ireez.com":[["aost","String.prototype.charCodeAt","ai_"]],"isekaipalace.com":[["set","showAds","true"]],"italiadascoprire.net":[["noeval-if","/chp_?ad/"]],"itstartswithgoodfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itunesfre.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"iulive.blogspot.com":[["nowebrtc"]],"iusedtobeaboss.com":[["acs","document.querySelectorAll","popMagic"],["aeld","mousedown","pop.doEvent"]],"iwsti.com":[["rmnt","script","html-load.com"]],"jacquieetmicheltv2.net":[["set","Object.prototype.prerollAds","[]"]],"japanfuck.com.es":[["acs","document.querySelectorAll","popMagic"]],"jav247.top":[["aopr","__Y"]],"javboys.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"javindo.site":[["set","uas","[]"]],"javmelon.com":[["acs","document.querySelectorAll","popMagic"]],"javporn18.com":[["acs","document.querySelectorAll","popMagic"],["acs","mypop"]],"jaysjournal.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"jazznearyou.com":[["rmnt","script","/__adblocker|html-load/"]],"jenhayescreations.com":[["rmnt","script","/__adblocker|html-load/"]],"jnovels.com":[["aopw","KillAdBlock"]],"jockeyjournal.com":[["rmnt","script","html-load.com"]],"joyousapron.com":[["rmnt","script","/__adblocker|html-load/"]],"jupiter.recipes":[["rmnt","script","/__adblocker|html-load/"]],"justapinch.com":[["rmnt","script","/__adblocker|html-load/"]],"justjared.com":[["aopr","__eiPb"]],"justslowcooker-recipes.com":[["rmnt","script","/__adblocker|html-load/"]],"justswallows.net":[["aopr","BetterJsPop"]],"kaa.lt":[["acs","globalThis","break;case"],["acs","EventTarget.prototype.addEventListener","window.open"],["set","KAA.state.revspot","undefined"],["set","KAA.state.popads","undefined"],["aeld","","/popMagic|shield/"],["nosiif","enforceVideoShield"],["nowoif","_blank"],["aost","document.createElement","startOrchestrator"]],"kaembed.net":[["nowoif","!vidmoly"]],"kbconlinegame.com":[["rmnt","script","/fetch|popupshow/"]],"kelseyinlondon.com":[["rmnt","script","/__adblocker|html-load/"]],"kfx450central.com":[["rmnt","script","html-load.com"]],"kiaevforums.com":[["rmnt","script","html-load.com"]],"kickcharm.com":[["noeval-if","/chp_?ad/"]],"kinmaweb.jp":[["rmnt","script","html-load.com"]],"klyker.com":[["noeval-if","adsbygoogle"]],"koin.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"krankheiten-simulieren.de":[["nostif","exitTimer"]],"krktcountry.com":[["set","google_unique_id","6"]],"ktsm.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kwejk.pl":[["rc","froc-blur","","stay"]],"labradoodle-dogs.net":[["rmnt","script","html-load.com"]],"lagacetadesalamanca.es":[["aopr","videootv"]],"lancastereaglegazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"lancewhosedifficult.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"landwirt.com":[["nostif",".call(null)","10"]],"laser-pics.com":[["no-fetch-if","googlesyndication"]],"lawyercontact.us":[["noeval-if","/chp_?ad/"]],"leatherskill.com":[["rmnt","script","/__adblocker|html-load/"]],"lecturel.com":[["aeld","load","nextFunction"],["nowoif","php"]],"leightonbuzzardonline.co.uk":[["rmnt","script","await eval"]],"lesbian8.com":[["aopr","decodeURI"],["set","flashvars.adv_pre_vast",""],["aopw","__spotSettings"]],"lifeaudio.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"linkspy.cc":[["set","displayAds","0"]],"listatv.pl":[["nostif","nextFunction"]],"littlebinsbricks.com":[["rmnt","script","/__adblocker|html-load/"]],"littlesunnykitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"livefootballempire.com":[["noeval-if","/chp_?ad/"]],"livinginashoebox.com":[["rmnt","script","/__adblocker|html-load/"]],"livingonadime.com":[["rmnt","script","/__adblocker|html-load/"]],"livingwellforseniors.com":[["rmnt","script","/__adblocker|html-load/"]],"lizmarieblog.com":[["rmnt","script","/__adblocker|html-load/"]],"loader.to":[["aopr","open"]],"localizaagencia.com":[["nosiif","visibility","1000"]],"lookism.me":[["noeval-if","/chp_?ad/"]],"lotterycritic.com":[["rmnt","script","/__adblocker|html-load/"]],"louisianacookin.com":[["rmnt","script","/__adblocker|html-load/"]],"louisianafirstnews.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"lovegrowswild.com":[["aopr","__eiPb"]],"luxaterra.com":[["rmnt","script","/__adblocker|html-load/"]],"madaboutcruises.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"madeitateitlovedit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"madmaxworld.tv":[["set","Object.prototype.ads.nopreroll_","true"]],"madworldnews.com":[["rmnt","script","/==undefined.*body/"]],"mahitimanch.in":[["noeval-if","/chp_?ad/"]],"mail.com":[["nostif","offsetHeight"],["set","AdService.info.abd","noopFunc"]],"main.sportswordz.com":[["aopr","AdBDetected"]],"makinglemonadeblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"makylacreates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"malaysiastock.biz":[["aopr","google_ad_status"]],"manutdtalk.com":[["rmnt","script","html-load.com"]],"manyakan.com":[["acs","document.querySelectorAll","popMagic"],["no-xhr-if","adsbygoogle"]],"maryspecialwatch.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"mastakongo.info":[["noeval-if","/chp_?ad/"]],"masteranime.tv":[["set","check_adblock","true"]],"mature-tube.sexy":[["acs","document.querySelectorAll","popMagic"]],"maureenabood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maverickforums.net":[["rmnt","script","html-load.com"]],"mccooltravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mega4upload.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"melaterevancha.com":[["rmnt","script","await eval"]],"mfmfinancials.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"mfw09.org":[["nowoif"]],"michaelsaves.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mixop.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mjukb26l.fun":[["nowoif"],["acs","Math","localStorage['\\x"]],"mmsbee42.com":[["rmnt","script","/dismissAdBlock|533092QTEErr/"]],"mochimommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"modernmoh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommyporntube.com":[["acs","document.querySelectorAll","popMagic"]],"momsdish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneteasy.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"moneyzine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"monstream.org":[["aopr","BetterJsPop"]],"moodymixologist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moto.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"motofan-r.com":[["noeval-if","/chp_?ad/"]],"movie4u.live":[["aopr","AaDetector"]],"mp1st.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"muchohentai.com":[["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"murtonroofing.com":[["noeval-if","/chp_?ad/"]],"mx6.com":[["rmnt","script","html-load.com"]],"myblahblahblahg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myfocuselectric.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myhentaicomics.com":[["acs","addEventListener","fallback"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"mylargescale.com":[["rmnt","script","html-load.com"]],"mysexgames.com":[["aopr","loadTool"],["set","createCanvas","noopFunc"]],"mytractorforum.com":[["rmnt","script","html-load.com"]],"nbadraftroom.com":[["rmnt","script","/__adblocker|html-load/"]],"netaffiliation.com":[["acs","$","hide"]],"newsinlevels.com":[["rmnt","script","html-load.com"],["set","sgpbCanRunAds","true"]],"nghetruyenma.net":[["noeval-if","/chp_?ad/"]],"nhltraderumors.me":[["rmnt","script","/__adblocker|html-load/"]],"nickskitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"njherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"nkiri.com":[["acs","parseInt","break;case $."]],"nkunorse.com":[["set","blockAdBlock","trueFunc"]],"nnn.de":[["nostif",".call(null)","10"]],"nocrumbsleft.net":[["rmnt","script","/__adblocker|html-load/"]],"nordenforums.com":[["rmnt","script","html-load.com"]],"northsomersettimes.co.uk":[["set","adLight","true"]],"novaratoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"novascotiafishing.com":[["rmnt","script","html-load.com"]],"novelroom.net":[["acs","parseInt","break;case $."]],"npb-news.com":[["rmnt","script","html-load.com"]],"nto.pl":[["aeld","","show"]],"nukibooks.com":[["acs","WebAssembly","atob"]],"nuovo.vidplayer.live":[["json-prune","ads playerAds"],["nowoif","_blank"]],"nutraingredients-asia.com":[["set","displayInterstitialAdConfig","false"]],"ohhowcivilized.com":[["rmnt","script","/__adblocker|html-load/"]],"ohsweetbasil.com":[["rmnt","script","/__adblocker|html-load/"]],"oliveyouwhole.com":[["rmnt","script","/__adblocker|html-load/"]],"onlineradiobox.com":[["rmnt","script","&&window,"],["rmnt","script","html-load.com"]],"onlyfaucet.com":[["rmnt","script","/fetch|adb/i"]],"onlyssh.my.id":[["acs","document.querySelector","akadb"]],"origamiway.com":[["rmnt","script","/__adblocker|html-load/"]],"ortograf.pl":[["no-fetch-if","ima"]],"ourquadcities.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"oursaltykitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"outdoormatome.com":[["rmnt","script","html-load.com"]],"overtake.gg":[["aopw","probeScript"]],"pageflutter.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"paminy.com":[["noeval-if","/chp_?ad/"]],"panaceaspantryblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"paradisi.de":[["nostif",".call(null)","10"]],"pastrieslikeapro.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"patriotathleticfund.com":[["set","blockAdBlock","trueFunc"]],"patriotledger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"patriotnationpress.com":[["rmnt","script","/==undefined.*body/"]],"pcso-lottoresults.com":[["nosiif","visibility","1000"]],"peekvids.com":[["aopr","open"],["set","pop_target","null"]],"persialou.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"petguide.com":[["set","loadShield","noopFunc"]],"petsoid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pharmaguideline.com":[["aeld","load","2000"]],"pinkueiga.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"piratesandprincesses.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"play.tv3.lt":[["set","Object.prototype.isNoAds","{}"]],"playingmtg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plumbingzone.com":[["rmnt","script","html-load.com"]],"poemsandoccasions.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porn3dx.com":[["acs","document.querySelectorAll","popMagic"]],"pornbimbo.com":[["nostif","()","2000"],["acs","document.querySelectorAll","popMagic"]],"porner.tv":[["acs","document.querySelectorAll","popMagic"]],"pornhd.com":[["aopr","hasAdBlock"],["aopr","ExoLoader.serve"],["popads-dummy"],["nowoif"],["aeld","","pop"]],"porno-porno.net":[["acs","document.querySelectorAll","popMagic"]],"pornofisch.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"porntube18.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"pornvideospass.com":[["aopw","Aloader"],["aopw","bindall"]],"poshplate.us":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"postermockup.com":[["aost","setTimeout","adsBlocked"]],"powerover.online":[["rmnt","script","popundersPerIP"]],"practicecnatest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prajwaldesai.com":[["nostif","ai_"],["nostif","site-access"]],"prepostseo.com":[["acs","loadAdBlocker"],["no-fetch-if","googlesyndication"]],"principiaathletics.com":[["set","blockAdBlock","trueFunc"]],"progress-index.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"projectfreetv2.com":[["acs","JSON.parse","break;case $."]],"proxyninja.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"publicananker.com":[["nano-sib","counter","*"]],"pudelek.pl":[["nano-sib","consoleLoaded?clearInterval"]],"putingfilm.com":[["acs","parseInt","break;case $."]],"puzzles.crosswordsolver.org":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"queerty.com":[["rmnt","script","adblockerDisabled"]],"quietlifefarm.com":[["rmnt","script","/__adblocker|html-load/"]],"quinnipiacbobcats.com":[["set","blockAdBlock","trueFunc"]],"quotesshine.com":[["set","detectAdBlock","noopFunc"]],"r7forums.com":[["rmnt","script","html-load.com"]],"rachelcooksthai.com":[["rmnt","script","/__adblocker|html-load/"]],"radio-en-ligne.fr":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.pl":[["nostif",".call(null)","10"]],"radiopogoda.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"ramchargercentral.com":[["rmnt","script","html-load.com"]],"ramforum.com":[["rmnt","script","/__adblocker|html-load/"]],"rctechsworld.in":[["noeval-if","/chp_?ad/"]],"reallifenutritionist.com":[["rmnt","script","/__adblocker|html-load/"]],"reallittlemeals.com":[["rmnt","script","/__adblocker|html-load/"]],"rebajagratis.com":[["rmnt","script","/adsBlocked|\"popundersPerIP\"/"]],"recipe-diaries.com":[["rmnt","script","/__adblocker|html-load/"]],"rendimentibtp.it":[["no-fetch-if","googlesyndication"]],"renoconcrete.ca":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"republicain-lorrain.fr":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"resortsgal.com":[["rmnt","script","/__adblocker|html-load/"]],"retrorenovation.com":[["rmnt","script","/__adblocker|html-load/"]],"revistaapolice.com.br":[["noeval-if","/chp_?ad/"]],"rincondelsazon.com":[["nano-sib","timercounter"]],"rinconpsicologia.com":[["noeval-if","/chp_?ad/"],["no-fetch-if","method:HEAD"]],"rmdown.com":[["aopw","open"]],"roadtrippin.fr":[["set","test_adblock","noopFunc"]],"roguesportforum.com":[["rmnt","script","html-load.com"]],"rollstroll.com":[["nosiif","daadb"]],"royalbaloo.com":[["rmnt","script","/__adblocker|html-load/"]],"royalmailchat.co.uk":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"rule34.jp.net":[["acs","document.querySelectorAll","popMagic"]],"runtoradiance.com":[["rmnt","script","/__adblocker|html-load/"]],"rvpioneers.com":[["rmnt","script","/__adblocker|html-load/"]],"sabornutritivo.com":[["no-fetch-if","googlesyndication"]],"samaysawara.in":[["acs","document.addEventListener","google_ad_client"]],"santacruzsentinel.com":[["set","CnnXt.Event.fire","noopFunc"]],"sarapbabe.com":[["acs","document.querySelector","_0x"],["aopr","decodeURI"]],"sawdust2stitches.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sayphotobooth.com":[["noeval-if","/chp_?ad/"],["rmnt","script","navigator.brave"]],"sbbrisk.com":[["aopr","__Y"],["aopr","mm"]],"sbnmp.bar":[["acs","document.documentElement","break;case $."]],"scratchandstitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scriptgrowagarden.com":[["nano-stb","/getElementById|gotoo/","*","0.02"],["set","navigator.brave","undefined"]],"seadoospark.org":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"seaofknowledge.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"secondhandsongs.com":[["rmnt","script","blocking"],["aost","document.getElementById","inlineScript"]],"sewguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sex-torrent.net":[["acs","document.querySelectorAll","popMagic"],["ra","href","a[href*=\"torrentico.top/sim/go.php\"]"]],"sexy-parade.com":[["acs","document.querySelectorAll","popMagic"]],"shemaleraw.com":[["rmnt","script","deblocker"]],"shootingworld.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"shop123.com.tw":[["aopw","daCheckManager"]],"shottalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shueisharaw.tv":[["acs","matchMedia","l.parentNode.insertBefore(s"]],"simpleshowing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sinfullyspicy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skoolie.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sledujfilmy.io":[["set-cookie","popupAdSeen","3","","reload","1"]],"slingshotforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"soapoperamagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"softwarecrackguru.com":[["aopw","downloadJSAtOnload"]],"solarchaine.com":[["aopr","adsBlocked"]],"sonymobilityforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"souqsky.net":[["aopw","Fingerprint2"]],"spaste.com":[["nofab"]],"speisekarte.de":[["rmnt","script","html-load.com"],["nostif","Delay"]],"spiele.bild.de":[["nano-stb","","10000"]],"spieletipps.de":[["nostif",".call(null)","10"]],"sport.es":[["no-fetch-if","mode:no-cors"]],"sportbikes.net":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sporteurope.tv":[["set","google.ima.settings.setDisableFlashAds","noopFunc"]],"sportlife.es":[["set","blockAdBlock","noopFunc"]],"sportsbite.cc":[["nowoif","_blank"]],"spreadsheetpage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sshconect.com.br":[["acs","addEventListener","nextFunction"]],"stevivor.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"stitching-together.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stockingfetishvideo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"strategiesforparents.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"streambucket.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamcash.to":[["rmnt","script","adserverDomain"],["rmnt","script","/\\.onerror|offsetHeight|Bait|getComputedStyle|dimCheck|getBoundingClientRect|x69|height===0|width===0|eval|banner-zone|no-store|\\'flex\\'|String\\.fromCharCode|media-slot-bottom|String\\.fromCodePoint|join\\(''\\)|\\[decodeURIComponent\\(|style\\.setProperty|join\\('-'\\)|cache:|\\.then|'\\+'|fl\\${''}ex|contentWindow\\.document|ublock|wall-trigger|abp|adguard|'style'|'setProperty'|document\\.currentScript\\.previousElementSibling/"],["nowoif"],["rmnt","script","/\\${''}|body:JSON\\.stringify/"],["set","Element.prototype.attachShadow","noopFunc"],["ra","style","div[class][style*=\"2147483647\"]","asap","quitAfter","1000"],["set","document.adoptedStyleSheets","undefined"]],"streamix.so":[["nowoif"]],"sublimereflection.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugarandsnappeas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superpsx.com":[["no-xhr-if","googlesyndication"],["aost","document.getElementById","adsBlocked"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["set","penciBlocksArray","[]"],["acs","b2a"]],"swatalk.com":[["aost","String.prototype.charCodeAt","ai_"]],"sweetpeasandsaffron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swtimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"syllablecounter.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sythe.org":[["acs","$","adblocker"],["acs","document.getElementsByTagName","adblocker"]],"talkandroid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tamilultra.team":[["noeval-if","/chp_?ad/"]],"taming.io":[["no-xhr-if","ads"]],"taradinhos.com":[["noeval-if","ads"]],"taroot-rangi.com":[["aopw","sc_adv_out"]],"tarotgoddess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tasteofhome.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"tastesoflizzyt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tastingwithtina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tech.trendingword.com":[["nano-stb","/getElementById|gotoo/","*","0.02"],["set","navigator.brave","undefined"]],"technewsrooms.com":[["noeval-if","/chp_?ad/"]],"teensexvideos.me":[["aopr","ExoLoader"]],"temp-mail.lol":[["no-fetch-if","method:/head/i"]],"testserver.pro":[["nostif","google"]],"thattravel.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theadventuresatlas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebatavian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theboondocksblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebullspen.com":[["rmnt","script","fetch"]],"thecoconutmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecookingjar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecreativemuggle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedailybeast.com":[["set","_aps","{}"]],"theeastcoastkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theepicureanmouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theeverylastdetail.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefantazy.com":[["acs","document.querySelectorAll","popMagic"]],"thefappening.pro":[["acs","WebAssembly","atob"]],"thefappeningblog.com":[["acs","WebAssembly","atob"]],"thefoodietakesflight.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegoodgermanshepherd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegradcafe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehappyhousie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theharvestkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theholymess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehomeschoolmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theimaginationtree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theirishmanswife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thejoysofboys.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thememypc.net":[["aopr","Abd_Detector"],["nano-sib","counter","2000"],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"themirror.com":[["rmnt","script","nowprocket","excludes","self.__next"]],"thenourishinghome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepondsfarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepoorcoder.com":[["aopr","adblockDetector"]],"thesciencetoday.com":[["rmnt","script","==\"]"]],"theseamanmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesugarfreediva.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetinylife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theviewfromgreatisland.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewambugu.com":[["noeval-if","/chp_?ad/"]],"theworldbucketlist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theyarncrew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisreadingmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thunderboltlaptop.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thyroidboards.com":[["rmnt","script","html-load.com"]],"tidbitsandtwine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tiermaker.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"tiny-sparklies.com":[["noeval-if","/chp_?ad/"]],"tinyhomeforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tips97tech.blogspot.com":[["acs","document.createElement","adblock"]],"tmcadaptations.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tmnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"todoandroid.live":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","document.onmousedown"]],"tokyohive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tomakeamommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toptenreviews.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"toshistable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"totalsportek.to":[["rmnt","script","adserverDomain"]],"tr.link":[["nowoif","ppcnt"],["ra","data-ppcnt_ads","main[onclick]"]],"transparentnevada.com":[["rmnt","script","html-load.com"]],"traversewithtaylor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trx250r.net":[["rmnt","script","html-load.com"]],"tucson-forum.com":[["rmnt","script","html-load.com"]],"tunemovie.fun":[["acs","document.createElement","target.appendChild(s"]],"tusfiles.com":[["aopw","Fingerprint2"],["nowoif"],["acs","document.createElement","script"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","JSON","break;case"]],"tv3play.skaties.lv":[["set","Object.prototype.isNoAds","{}"]],"tw-calc.net":[["set","WebSite.plsDisableAdBlock","null"]],"tw200forum.com":[["rmnt","script","html-load.com"]],"unboundwellness.com":[["rmnt","script","/__adblocker|html-load/"]],"uploadbank.com":[["aeld","","break;case $."],["noeval-if","/chp_?ad/"]],"uploadgig.com":[["nowoif"]],"uploadmall.com":[["set","navigator.brave","undefined"],["nowoif","zigi_tag_id","10","obj"]],"upzur.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ustream.to":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"vanillatweaks.net":[["nano-sib","downloadTimer"]],"vegamovvies.to":[["aopr","LieDetector"]],"veronica.uk":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"]],"video1exa.live":[["rmnt","script","VK_DIRECT_AD"]],"videos1002.com":[["acs","$","azar"],["aopr","jsPopunder"]],"vidnest.io":[["rmnt","script","{delete window["],["nostif","location.replace","100"],["acs","EventTarget.prototype.addEventListener","open"],["nostif","bait.remove"],["json-prune","*","rot_url"],["json-prune","*","pop_type"]],"vikingforum.org":[["rmnt","script","html-load.com"]],"vintageleatherjackets.org":[["rmnt","script","/__adblocker|html-load/"]],"viralpedia.pro":[["nowoif"]],"vod.tvp.pl":[["no-fetch-if","method:HEAD"]],"voyeurxxxfree.com":[["aopr","Aloader.serve"],["noeval"]],"vwt4forum.co.uk":[["rmnt","script","html-load.com"]],"watch.ug":[["acs","EventTarget.prototype.addEventListener","delete window"]],"watchfootballhighlights.com":[["aopr","aclib"]],"webbikeworld.com":[["rmnt","script","/__adblocker|html-load/"]],"webmaal.cfd":[["rmnt","script","popundersPerIP"]],"wecast.to":[["acs","document.documentElement","break;case $."],["nostif","sadbl"]],"wemove-charity.org":[["rmnt","script","deblocker"]],"wgntv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"whatjewwannaeat.com":[["rmnt","script","/__adblocker|html-load/"]],"wheninyourstate.com":[["rmnt","script","/__adblocker|html-load/"]],"wigrevival.com":[["rmnt","script","/__adblocker|html-load/"]],"wilkerdos.com":[["rmnt","script","/__adblocker|html-load/"]],"windbreaker.me":[["noeval-if","/chp_?ad/"]],"windycityfishing.com":[["rmnt","script","html-load.com"]],"winnersandwhiners.com":[["rmnt","script","/__adblocker|html-load/"]],"wintips.org":[["rmnt","script","/__adblocker|html-load/"]],"witchyspiritualstuff.com":[["rmnt","script","/__adblocker|html-load/"]],"women.com":[["rmnt","script","/__adblocker|html-load/"]],"womenshealth.de":[["nostif",".call(null)","10"]],"wondermomwannabe.com":[["rmnt","script","/__adblocker|html-load/"]],"wonkywonderful.com":[["rmnt","script","/__adblocker|html-load/"]],"worcesternews.co.uk":[["set","adLight","true"]],"wordconnect.info":[["rmnt","script","/__adblocker|html-load/"]],"worldgreynews.com":[["acs","parseInt","break;case $."]],"worldgyan18.com":[["noeval-if","/chp_?ad/"]],"worldsports.me":[["rmnt","script","adserverDomain"]],"writersedit.com":[["rmnt","script","/__adblocker|html-load/"]],"wsj.com":[["rmnt","script","admiral","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"wvt.free.nf":[["noeval-if","/chp_?ad/"],["nowoif"],["acs","document.getElementById","window.open"]],"wyseguide.com":[["rmnt","script","/__adblocker|html-load/"]],"x86.co.kr":[["rmnt","script","adBlockDetected"]],"xemphim1.top":[["acs","document.querySelectorAll","popMagic"],["aeld","click","popMagic"]],"xenvn.com":[["rmnt","script","XV"]],"xhvictory.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmalay1.net":[["rmnt","script","/isAdBlockActive|WebAssembly/"]],"xpornzo.com":[["acs","document.querySelectorAll","popMagic"]],"xxxvideo.asia":[["aopr","popit"],["aeld","popstate","noPop"]],"yakkun.com":[["rmnt","script","html-load.com"]],"yiv.com":[["nostif","/Adb|moneyDetect/"]],"youngerporn.mobi":[["acs","document.querySelectorAll","popMagic"]],"ytmp4.live":[["acs","parseInt","break;case $."]],"yummyaddiction.com":[["rmnt","script","/__adblocker|html-load/"]],"yunjiema.top":[["rmnt","script","adb"]],"zardyplants.com":[["rmnt","script","/__adblocker|html-load/"]],"zenless.gg":[["rmnt","script","/__adblocker|html-load/"]],"zinkmovies.in":[["aopr","app_advert"]],"zoebakes.com":[["rmnt","script","/__adblocker|html-load/"]],"zrozz.com":[["set","adblock","false"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
