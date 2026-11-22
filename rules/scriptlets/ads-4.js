/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"2017tube.com":[["acs","document.dispatchEvent","myEl"]],"208ownersclub.co.uk":[["rmnt","script","html-load.com"]],"360tuna.com":[["rmnt","script","html-load.com"]],"423down.com":[["aeld","DOMContentLoaded","adsBlocked"]],"4download.net":[["acs","addEventListener","nextFunction"],["nano-sib"]],"4j.com":[["nostif","()","2000"]],"4umods.com":[["rmnt","script",".offsetParent"]],"50states.com":[["rmnt","script","html-load.com"]],"52kitchenadventures.com":[["rmnt","script","/__adblocker|html-load/"]],"5thramforum.com":[["rmnt","script","html-load.com"]],"6theory.com":[["rmnt","script","/__adblocker|html-load/"]],"6thgenram.com":[["rmnt","script","html-load.com"]],"720pxmovies.blogspot.com":[["acs","Math","break"],["aopr","myFunction_ads"],["nowoif"]],"790dukeforum.com":[["rmnt","script","html-load.com"]],"7daystodiemods.com":[["aopr","b2a"]],"7fractals.icu":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"7thgenhonda.com":[["rmnt","script","html-load.com"]],"8teenxxx.com":[["aopr","ExoLoader.serve"]],"9to5google.com":[["rmnt","script","fundingChoicesCalled"]],"a6iqb4m8.xyz":[["nowoif"],["acs","Math","localStorage['\\x"]],"aagag.com":[["no-xhr-if","googlesyndication"]],"absolugirl.com":[["aopr","document.dispatchEvent"]],"absolutube.com":[["aopr","document.dispatchEvent"]],"acousticbridge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adeth.cc":[["nosiif","visibility","1000"]],"adrianoluis.net":[["aost","String.prototype.charCodeAt","ai_"]],"adrinolinks.com":[["nostif","alert","2000"]],"adurly.cc":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"afrodity.sk":[["acs","document.createElement","script"]],"afropunk.com":[["rmnt","script","adshield"]],"aha-music.com":[["aopw","__tcfapi"],["set","ezRewardedAds.requestAndShow","noopFunc"],["nano-stb","timeout","*","0.02"],["set","__ahaEzoicLoaderError","false"],["set","__ahaEzoicInjectedAt","0"],["nano-sib",".value--","1000","0.001"]],"airfryerfanatics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alanyapower.com":[["noeval-if","/chp_?ad/"]],"allaccordingtoplann.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alldayidreamaboutfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allschoolboysecrets.com":[["aopr","ExoLoader.serve"]],"altselection.com":[["noeval-if","/chp_?ad/"]],"aman-dn.blogspot.com":[["nano-sib","countdown"]],"amandacooksandstyles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amateurebonypics.com":[["aeld","","popMagic"]],"androidrepublic.org":[["acs","$","samInitDetection"]],"androidsite.net":[["aopr","open"]],"anhdep24.com":[["acs","eval","replace"]],"anihatsu.com":[["rmnt","script","html-load.com"]],"anime4i.vip":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","adserverDomain"]],"animelek.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"animesite.net":[["aopr","open"]],"animesonliner4.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"anitube.pro":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"anon-v.com":[["acs","atob","decodeURI"],["acs","onload"]],"aopathletics.org":[["set","blockAdBlock","trueFunc"]],"apkprime.org":[["nano-sib","","1000","0.001"]],"app.cekresi.me":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com|googlesyndication|pubadx/","{\"type\": \"cors\"}"],["nowoif","_blank"],["nano-sib","/.?/","*"],["nano-stb","/.?/","*"]],"appliancerepairforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"appunwrapper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ar-atech.blogspot.com":[["aopr","adBlockDetected"]],"arab4media.com":[["acs","addEventListener","nextFunction"]],"arnaqueinternet.com":[["acs","Math","break;case $."]],"artru.net":[["acs","setTimeout","getComputedStyle"]],"artsyfartsymama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asd.pics":[["nowoif","_blank"]],"ashleyhardat.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"asia2tv.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"aspiringwinos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"astraownersnetwork.co.uk":[["rmnt","script","html-load.com"]],"atshq.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"autodime.com":[["noeval-if","/chp_?ad/"]],"autoembed.cc":[["aopr","AaDetector"],["nowoif"],["set","Object.prototype.adUrl"]],"baddiehub.com":[["nostif","css_class.scroll"]],"bailiwickexpress.com":[["acs","$","load_banner"]],"bangpremier.com":[["nostif","adBlockDetected"]],"bcfishingreports.com":[["rmnt","script","html-load.com"]],"bengalisite.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"bestfriendsforfrosting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bettacarefishguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bg-gledai.video":[["aopr","Handlers"],["aopr","Settings"],["nostif","initializeAdblockDetection"],["acs","document.createElement","detection-bait"]],"bharathwick.com":[["rmnt","script","deblocker"]],"biblegateway.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"bigoven.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bikesmarts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bing.com":[["no-xhr-if","/fd/ls/lsp.aspx"]],"blackcitadelrpg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blackgirlnerds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blazerevforum.com":[["rmnt","script","html-load.com"]],"blograffo.net":[["acs","addEventListener","nextFunction"]],"blogue.tech":[["noeval-if","/chp_?ad/"]],"bmwevforum.com":[["rmnt","script","html-load.com"]],"bookseries.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boredbat.com":[["aopr","b2a"]],"bravoerotica.com":[["aopr","ExoLoader.serve"]],"brawlify.com":[["rmnt","script","/adb|ta_session_id/i"],["set","__venatusLoaderInit","true"],["set-session-storage-item","/^ta_/","$remove$"]],"brevi.eu":[["noeval-if","/chp_?ad/"]],"brightpets.org":[["noeval-if","/chp_?ad/"]],"britannica.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"broncozone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bryantenunder.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"buders.com":[["aeld","load","getComputedStyle"]],"burgmanusa.com":[["rmnt","script","html-load.com"]],"bustyfats.com":[["acs","document.querySelectorAll","popMagic"]],"bx-zone.com":[["acs","parseInt","break;case $."]],"c--ix-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"c.newsnow.co.uk":[["rmnt","script","/^/gms","excludes","__INITIAL_STATE__"]],"cake-babe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"canonprintersdrivers.com":[["acs","parseInt","break;case $."]],"capriforum.com":[["rmnt","script","html-load.com"]],"cardshare.biz":[["acs","$","btoa"]],"carwindshields.info":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"casadecrews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"celemusic.com":[["noeval-if","/chp_?ad/"]],"cellmapper.net":[["nostif","/children\\('ins'\\)|Adblock|adsbygoogle/"],["set","dct","0"]],"cgaa.org":[["aost","Error","/stackDepth:1\\s/"]],"challengertalk.com":[["rmnt","script","html-load.com"]],"charlessheimprove.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"cheftalk.com":[["rmnt","script","html-load.com"]],"chewoutloud.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chieflyoffer.com":[["noeval-if","/chp_?ad/"]],"childrens-ministry-deals.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"chindeep.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"choiceofmods.com":[["nostif","show"]],"chooseveganism.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cincinnati.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"cineb.gg":[["acs","addEventListener","HTMLAllCollection"]],"classpop.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"classyyettrendy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clkmein.com":[["acs","Math","break;case $."]],"cmumavericks.com":[["set","blockAdBlock","trueFunc"]],"cncsourced.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cnyhomepage.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"coin-free.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","htmls"]],"coloradoan.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"coloradoevowners.com":[["rmnt","script","html-load.com"]],"coloringpage.eu":[["no-fetch-if","method:HEAD"]],"commandersnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"commercialappeal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"comtasq.ca":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"contractortalk.com":[["rmnt","script","html-load.com"]],"cookierun.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingupmemories.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithmammac.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coolmathgames.com":[["nano-sib"],["set","cmgpbjs","false"],["set","displayAdblockOverlay","false"],["set","google","false"],["set","start_full_screen_without_ad","false"],["set","drupalSettings.coolmath.hide_preroll_ads","true"],["set","network_user_id",""]],"cosmonova-broadcast.tv":[["set","amodule.data","emptyArr"]],"country94.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crizyman.online":[["rmnt","script","getComputedStyle(el"],["rmnt","script","popup"]],"crm.urlwebsite.com":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com|googlesyndication|pubadx/","{\"type\": \"cors\"}"],["nowoif","_blank"],["nano-sib","/.?/","*"],["nano-stb","/.?/","*"]],"cronachesalerno.it":[["noeval-if","/chp_?ad/"]],"cryptowidgets.net":[["noeval-if","/chp_?ad/"]],"cubbiescrib.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"custommapposter.com":[["no-fetch-if","googlesyndication"]],"cuttty.com":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"d0000d.com":[["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dailycomet.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dailydemocrat.com":[["set","CnnXt.Event.fire","noopFunc"]],"dailykos.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"dailymaverick.co.za":[["nostif","t()","0"]],"dailyuploads.net":[["acs","$","window.open"],["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dailyweb.pl":[["noeval-if","/chp_?ad/"]],"damneasyrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"davescomputertips.com":[["nosiif","show"],["aeld","DOMContentLoaded","daadb_get_data_fetch"]],"decorativemodels.com":[["aopr","loadTool"]],"deezer.com":[["nostif","Ads"],["set","smartLoaded","true"]],"defensivecarry.com":[["rmnt","script","html-load.com"]],"descargaspcpro.net":[["noeval-if","ads"],["rmnt","script","deblocker"]],"desertsun.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dfwstangs.net":[["rmnt","script","html-load.com"]],"dieseljeeps.com":[["rmnt","script","html-load.com"]],"dirtbikerider.com":[["rmnt","script","await eval"]],"dirtybadger.com":[["acs","document.querySelectorAll","popMagic"]],"discordfastfood.com":[["nostif","clientHeight"]],"diudemy.com":[["nano-stb","div_form"],["aeld","load","htmls"],["rmnt","script","onerror"],["set","private","false"]],"djsaviation.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doesitreallywork.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dollartimes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domainregistrationtips.info":[["noeval-if","/chp_?ad/"]],"donnerwetter.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"dontsweattherecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dosya.co":[["nano-stb"]],"dpselfhelp.com":[["rmnt","script","html-load.com"]],"drawize.com":[["acs","chAdblock"]],"drrtyr.mx":[["aeld","","adb"]],"dubsdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ducatiforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"duckhuntingchat.com":[["rmnt","script","html-load.com"]],"e123movies.com":[["acs","JSON.parse","break;case $."]],"easythingstosew.com":[["rmnt","script","/__adblocker|html-load/"]],"eatingonadime.com":[["rmnt","script","/__adblocker|html-load/"]],"echelonforum.com":[["rmnt","script","html-load.com"]],"elantraxd.com":[["rmnt","script","html-load.com"]],"embed-player.space":[["nowoif"]],"embedtv.best":[["rmnt","script","delete window"],["rmnt","script","adserverDomain"],["nowoif","!embedtv.best"]],"emsnow.com":[["acs","document.getElementById","fakeElement"]],"endfield.gg":[["rmnt","script","/__adblocker|html-load/"]],"engineeryourfinances.com":[["rmnt","script","/__adblocker|html-load/"]],"english101.co.za":[["noeval-if","/chp_?ad/"]],"epsilonakdemy.com":[["noeval-if","/chp_?ad/"]],"equippinggodlywomen.com":[["rmnt","script","/__adblocker|html-load/"]],"errorfixer.co":[["rmnt","script","/__adblocker|html-load/"]],"escape-city.com":[["rmnt","script","html-load.com"]],"euronews.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"ex-foary.com":[["aopr","app_vars.force_disable_adblock"],["aopr","open"],["nowebrtc"],["acs","document.querySelectorAll","popMagic"]],"expressandstar.com":[["rmnt","script","await eval"]],"expressnews.com":[["set-session-storage-item","realm.Oidc.3pc","$remove$"]],"falasteenifoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"farmergrows.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"faucetdump.com":[["acs","$","ads"]],"feastforafraction.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feastgood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feelgoodfoodie.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fhedits.in":[["noeval-if","/chp_?ad/"]],"filemoon-nv2xl8an.xyz":[["acs","Math.floor","urls.length"]],"filesupload.in":[["no-fetch-if","adsbygoogle.js"]],"filezipa.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["aopr","open"]],"filmex.to":[["no-fetch-if","method:HEAD"]],"findingseaturtles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"finearttutorials.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"finya.de":[["nostif",".call(null)","10"]],"firearmstalk.com":[["rmnt","script","html-load.com"]],"fishonfirst.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitnessholic.net":[["noeval-if","/chp_?ad/"],["set","count","0"]],"flawlessfood.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flighthacks.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flix-wave.lol":[["nostif","offsetHeight"],["aopr","Adcash"]],"flixhq.ru":[["acs","JSON.parse","break;case $."]],"foldnfly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodforfitness.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodforlifegarden.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forevermillennials.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foreverwingman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fortressofsolitude.co.za":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foxbusiness.com":[["rmnt","script","adblockerDisabled","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/typeof [a-z]\\.unshift/","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"francaisfacile.net":[["noeval-if","/chp_?ad/"]],"freepornasians.com":[["aopr","popit"],["aeld","popstate","noPop"]],"freewoodworking.ca":[["noeval-if","/chp_?ad/"]],"fremdwort.de":[["nostif",".call(null)","10"]],"frpgods.com":[["noeval-if","/chp_?ad/"]],"frugalfarmwife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fuelly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullsizebronco.com":[["rmnt","script","html-load.com"]],"fullxxxmovies.net":[["aopr","open"]],"funfinderclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funmoneymom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"games.startribune.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamesrepacks.com":[["noeval-if","show"]],"gaming-fans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"garnishandglaze.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gaytail.com":[["aeld","getexoloader"],["acs","onload","onclick"]],"gazeta.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"gazetteherald.co.uk":[["set","adLight","true"]],"genpick.app":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"getthit.com":[["no-fetch-if","/ads|googletagmanager/"],["set","sharedController.adblockDetector","noopFunc"]],"giornalone.it":[["rmnt","script","adrecover.com"]],"girlssexxxx.com":[["noeval"],["aopr","Aloader.serve"]],"girlwiththepassport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gixxer.com":[["rmnt","script","html-load.com"]],"globes.co.il":[["set","document.blocked_var","1"],["set","____ads_js_blocked","false"]],"glodls.to":[["acs","navigator","FingerprintJS"],["acs","fetch","break;case"]],"gocast123.me":[["aeld","","break;case $."]],"godlike.com":[["rmnt","script","/alert|brave|blocker/i"]],"godrakebulldog.com":[["set","blockAdBlock","trueFunc"]],"goldendoodleadvice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"govalleykids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"govtportal.org":[["no-fetch-if","ads"]],"grazedandenthused.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gromforum.com":[["rmnt","script","html-load.com"]],"gruenderlexikon.de":[["nostif",".call(null)","10"]],"gudangfirmwere.com":[["acs","addEventListener","AdBlocker"]],"gulfcoastjourneys.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hakunamatata5.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"halicopteraway.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hallofseries.com":[["rmnt","script","ai_adb"]],"happypenguin.altervista.org":[["nostif","adb"]],"hard-tube-porn.com":[["aopr","document.dispatchEvent"]],"hausbau-forum.de":[["no-xhr-if","adsbygoogle"],["set","detectAdblock","noopFunc"],["rmnt","script","Adblock"]],"hauteandhealthyliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthbeautybee.com":[["noeval-if","/chp_?ad/"]],"heartfullofmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heidelberg24.de":[["nostif",".call(null)","10"]],"helmstedter-nachrichten.de":[["nostif",".call(null)","10"]],"hentai-vl.blogspot.com":[["aeld","load","2000"]],"hentaibatch.com":[["acs","document.createElement","appendChild"]],"hentaihere.com":[["aeld","getexoloader"],["rmnt","script","/shown_at|WebAssembly/"]],"hentaitk.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"hentaivost.fr":[["rmnt","script","_ADX_"]],"herefordtimes.com":[["set","adLight","true"]],"hexham-courant.co.uk":[["set","adLight","true"]],"hianime.to":[["rmnt","script",";}}};break;case $."],["nowoif"]],"highdefdiscnews.com":[["noeval-if","/chp_?ad/"]],"himovies.sx":[["acs","addEventListener","HTMLAllCollection"]],"homeairadvisor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homebooster.de":[["acs","document.getElementById","blocker_div"]],"hornylips.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"hotbabes.tv":[["aopr","loadTool"],["aopr","_wm"]],"hotbeautyhealth.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotsexstory.xyz":[["acs","document.querySelectorAll","popMagic"]],"houseofnasheats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtomakewreaths.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"html.net":[["aopw","_sp_"]],"husaberg.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"idnes.cz":[["acs","document.onclick","reklama-flash-body"]],"ignoustudhelp.in":[["noeval-if","/chp_?ad/"]],"iiv.pl":[["nano-sib"]],"ilmeteo.it":[["nostif","google_jobrunner"]],"imboc.com":[["rmnt","script","html-load.com"]],"imperiofilmes.co":[["noeval-if","/chp_?ad/"]],"indexsubtitle.cc":[["rmnt","script","catch"]],"infinitiq50.org":[["rmnt","script","html-load.com"]],"influencersgonewild.com":[["acs","document.querySelectorAll","popMagic"],["aost","Math.round","onload"]],"insearchofyummyness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"instabiosai.com":[["no-xhr-if","doubleclick"],["no-xhr-if","google","length:10"]],"instream.pro":[["rmnt","script","popundersPerIP"]],"ipalibrary.me":[["no-fetch-if","gloacmug.net"],["nano-sib","countdown"],["rmnt","script","textContent"]],"iv-soft.com":[["acs","JSON.parse","break;case $."]],"jakdojade.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"javbix.com":[["acs","document.querySelectorAll","popMagic"]],"javfor.tv":[["acs","WebAssembly","atob"],["acs","addEventListener","-0x"]],"javhun.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"javleak.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"jeepgarage.org":[["rmnt","script","html-load.com"]],"jenhdao.com":[["rmnt","script","/__adblocker|html-load/"]],"jessifearon.com":[["rmnt","script","/__adblocker|html-load/"]],"jlwranglerforums.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"journalbuddies.com":[["rmnt","script","/__adblocker|html-load/"]],"k-stateathletics.com":[["set","blockAdBlock","trueFunc"]],"k4owners.com":[["rmnt","script","html-load.com"]],"kaliscan.io":[["rmnt","script","MutationObserver"]],"kamehaus.net":[["set","uas","[]"]],"karanpc.com":[["rmnt","script","deblocker"],["aost","document.getElementsByTagName","adsBlocked"]],"kawasakininja300.com":[["rmnt","script","html-load.com"]],"kcentv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"keeptradecut.com":[["rmnt","script","/__adblocker|html-load/"]],"keezmovies.surf":[["aopr","popit"],["aeld","popstate","noPop"]],"kelleynan.com":[["rmnt","script","/__adblocker|html-load/"]],"ki24.info":[["aeld","load","adb"]],"kijoden.com":[["rmnt","script","html-load.com"]],"kikifoodies.com":[["rmnt","script","/__adblocker|html-load/"]],"kin8-jav.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"king5.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kingofthegym.com":[["rmnt","script","/__adblocker|html-load/"]],"kpnw.com":[["set","google_unique_id","6"]],"lakesimcoemessageboard.com":[["rmnt","script","html-load.com"]],"latlong.net":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"laughingplace.com":[["rmnt","script","/__adblocker|html-load/"]],"lcsun-news.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"leakedzone.com":[["acs","document.querySelectorAll","popMagic"]],"leapmotorforum.com":[["rmnt","script","html-load.com"]],"legendsofamerica.com":[["rmnt","script","/__adblocker|html-load/"]],"leighjournal.co.uk":[["set","adLight","true"]],"lesbiantube.club":[["acs","document.querySelectorAll","popMagic"]],"lexusgxforum.com":[["rmnt","script","/__adblocker|html-load/"]],"life-in-the-lofthouse.com":[["rmnt","script","/__adblocker|html-load/"]],"lifeinourcorner.com":[["rmnt","script","/__adblocker|html-load/"]],"lifeinruralfrance.com":[["rmnt","script","/__adblocker|html-load/"]],"lifeline.de":[["nostif",".call(null)","10"]],"lifemadesimplebakes.com":[["rmnt","script","/__adblocker|html-load/"]],"liflix.site":[["acs","parseInt","break;case $."]],"lightsnovel.com":[["set","pandaAdviewValidate","true"]],"lingeriefuckvideo.com":[["aopr","popit"],["aeld","popstate","noPop"]],"linuxsecurity.com":[["aeld","load","nextFunction"]],"littleferrarokitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"livedoor.biz":[["rmnt","script","html-load.com"]],"liverpoolworld.uk":[["rmnt","script","await eval"]],"livingetc.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"ln-online.de":[["nostif",".call(null)","10"]],"localsyr.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"lollyjane.com":[["rmnt","script","/__adblocker|html-load/"]],"lovelydelites.com":[["rmnt","script","/__adblocker|html-load/"]],"lovelynudez.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"],["aopr","popit"]],"loverugbyleague.com":[["rmnt","script",".onerror"],["rmnt","script","/_0x|'innerHTML'/"]],"luluvid.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"],["nowoif"],["rmnt","script","/HTMLAllCollection|popundersPerIP|referrerPolicy|WebAssembly/"],["acs","WebAssembly","Promise"],["acs","document.write","unescape"],["rmnt","script","/detect/i"],["rmnt","script","popundersPerIP"]],"lustylist.com":[["aopr","document.dispatchEvent"]],"m.shuhaige.net":[["rmnt","script","return a.split"]],"m1000xrforum.com":[["rmnt","script","html-load.com"]],"macreports.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"madoohd.com":[["set","adSettings","[]"]],"magesypro.com":[["aopr","adsBlocked"]],"mahfda.com":[["set","__aab_init","true"]],"majalahpendidikan.com":[["aopr","adBlockDetected"]],"makelifelovely.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"malverngazette.co.uk":[["set","adLight","true"]],"mamakatslosinit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangarawjp.asia":[["acs","document.querySelectorAll","popMagic"]],"manhwaclub.net":[["rmnt","script","wpadmngr.com"],["rmnt","script","/adConfig|'ph'/"],["nowoif","_blank"]],"marieclaire.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"maseratilevanteforum.com":[["rmnt","script","html-load.com"]],"mastaklomods.com":[["acs","eval","replace"]],"mathstutor.life":[["no-fetch-if","googlesyndication"]],"mayihavethatrecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maytheray.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mc-at.org":[["nostif","show"]],"meaningfulmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meatrabbits.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medonet.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"medstudentz.com":[["rmnt","script","html-load.com"]],"megamovies.org":[["aeld","","break;case $."],["aopr","open"]],"merlininkazani.com":[["nostif","onDetected"]],"meteologix.com":[["nostif",".call(null)","10"]],"mettablog.com":[["acs","JSON.parse","break;case $."],["aost","String.prototype.charCodeAt","ai_"]],"minhaconexao.com.br":[["set","canRunAds","true"],["no-xhr-if","doubleclick"]],"mitaku.net":[["acs","document.createElement","appendTo:"],["no-xhr-if","googlesyndication"],["set","globalThis","null"],["acs","WebAssembly","Promise"],["noeval-if","ads"]],"mixdropjmk.pw":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"mmnm.store":[["nowoif","_blank"]],"modapkfile.com":[["acs","String.fromCharCode","/btoa|break/"]],"mojomojo-licarca.com":[["rmnt","script","html-load.com"]],"momxxx.video":[["acs","document.querySelectorAll","popMagic"]],"morethanmeatandpotatoes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"morningchores.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motofakty.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"mountainbuzz.com":[["rmnt","script","html-load.com"]],"moviehaxx.pro":[["aopr","open"]],"movielinkhub.xyz":[["acs","document.documentElement","break;case $."]],"moviemakeronline.com":[["nosiif","adsbygoogle"]],"moviexxx.mobi":[["aopr","popit"],["aeld","popstate","noPop"]],"mp3cristianos.net":[["acs","Math","break;case $."]],"mrdeepfakes.com":[["aopw","ReactAds"],["acs","document.getElementsByTagName","script"],["aopw","phtData"]],"mtb-news.de":[["nostif",".call(null)","10"]],"musclecarclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mustangecoboost.net":[["rmnt","script","html-load.com"]],"my-island-jamaica.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mybmwi3.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mygalls.com":[["acs","document.querySelectorAll","popMagic"]],"mygardening411.com":[["aost","String.prototype.charCodeAt","ai_"]],"mykhel.com":[["set","detectAdBlock","noopFunc"]],"mylatinatable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mylawnmowerforum.com":[["rmnt","script","html-load.com"]],"mypaycalculator.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mysexybabes.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"]],"mytopspotify.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myturbodiesel.com":[["rmnt","script","html-load.com"]],"mzansifun.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nandemo-uketori.com":[["rmnt","script","html-load.com"]],"nashvillevoyager.com":[["rmnt","script","/__adblocker|html-load/"]],"nationalparksmom.com":[["rmnt","script","/__adblocker|html-load/"]],"nativesurge.info":[["aopr","Adcash"]],"nayturr.com":[["rmnt","script","/__adblocker|html-load/"]],"nensaysubs.net":[["acs","Math","zfgloaded"]],"net77.cc":[["set","HTMLImageElement.prototype.onerror","undefined"],["set","HTMLScriptElement.prototype.onerror","undefined"],["nowoif","_blank"],["ra","onerror","script","asap","quitAfter","1000"],["rmnt","script","adp.innerHTML"]],"networklovers.com":[["acs","parseInt","break;case $."]],"newsleader.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"newsshopper.co.uk":[["set","adLight","true"]],"nextdoor.com":[["json-prune","data.searchClassifiedFeed.searchResultView.0.searchResultItemsV2.edges.[-].node.item.content.creative.clickThroughEvent.adsTrackingMetadata.metadata.adRequestId"],["json-prune","data.me.personalizedFeed.feedItems.[-].promo.creative.clickThroughUrl.adsTrackingMetadata.metadata.adRequestId"],["json-prune","data.me.rhrFeed.feedItems.[-].promo.creative.clickThroughUrl.adsTrackingMetadata.metadata.sponsor"]],"nexttv.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"nick.com":[["no-fetch-if","dai_iframe"]],"nikkansports.com":[["rmnt","script","/:\\[?window,/"]],"niocarclub.com":[["rmnt","script","html-load.com"]],"noblepig.com":[["rmnt","script","/__adblocker|html-load/"]],"nontonx.com":[["rmnt","script","location.reload"]],"northnorfolknews.co.uk":[["set","adLight","true"]],"northwichguardian.co.uk":[["set","adLight","true"]],"novelsparadise.site":[["noeval-if","/chp_?ad/"]],"nowiny24.pl":[["aeld","","show"]],"nsfw247.to":[["nostif","mdpDeBlocker"],["acs","document.querySelectorAll","popMagic"]],"nutmegandvinegar.com":[["rmnt","script","/__adblocker|html-load/"]],"nyharborwebcam.com":[["nostif","innerHTML"]],"observedtrials.net":[["rmnt","script","html-load.com"]],"oilprice.com":[["rmnt","script","html-load.com"],["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"okiemrolnika.pl":[["no-fetch-if","adsbygoogle"]],"okstate.com":[["set","blockAdBlock","trueFunc"]],"okteve.com":[["set","xpv","{}"],["set","xpv.v","true"],["acs","EventTarget.prototype.addEventListener",".clientHeight===0"]],"older-mature.net":[["aopr","doOpen"]],"oldhousesusa.com":[["rmnt","script","/__adblocker|html-load/"]],"onlineguitarbooks.com":[["rmnt","script","/__adblocker|html-load/"]],"onlinetv.planetfools.com":[["acs","setTimeout","1000"]],"openlua.cloud":[["set","HTMLScriptElement.prototype.onerror","undefined"],["aeld","error","script-error"],["aost","Element.prototype.remove","probe"],["aost","HTMLElement.prototype.remove","probe"]],"orlandovoyager.com":[["rmnt","script","/__adblocker|html-load/"]],"otokukensaku.jp":[["noeval-if","/chp_?ad/"]],"owsafe.com":[["no-fetch-if","ads"],["aeld","load","bypass"]],"parrocchiapalata.it":[["aopr","adsBlocked"]],"pastes.io":[["acs","document.createElement","admiral"]],"paw-talk.net":[["rmnt","script","html-load.com"]],"pc-magazin.de":[["nostif",".call(null)","10"]],"pcmecca.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pelis182.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"pennantchase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peppershomeandgarden.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pesktop.com":[["acs","document.documentElement","break;case $."],["nowoif"]],"petbook-magazine.com":[["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"peugeot108forum.co.uk":[["rmnt","script","html-load.com"]],"pewterreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"photos-public-domain.com":[["aopr","blockAdBlock"]],"pickerwheel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picky-palate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pietsmiet.de":[["nostif",".call(null)","10"]],"pineconesandacorns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"piranha-fury.com":[["rmnt","script","html-load.com"]],"pistonpowered.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"pittsburghpanthers.com":[["set","blockAdBlock","trueFunc"]],"plaidandpaleo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plantpowercouple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plc4free.com":[["noeval-if","/chp_?ad/"]],"pokemoncard.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pookspantry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"popcdn.day":[["aopw","detectedAdblock"]],"pornchimp.com":[["acs","document.querySelectorAll","popMagic"]],"porncoven.com":[["aopr","loadTool"]],"porndish.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornhegemon.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"pornmaturetube.com":[["noeval"],["aopr","Aloader.serve"]],"pornoschlange.com":[["nostif","Adb"]],"pornozebra.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"],["nostif","Adb"]],"pornslash.com":[["acs","WebAssembly","atob"],["nowoif","_blank"]],"pornstarsadvice.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"pornstarsyfamosas.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"porntubegf.com":[["aopr","document.dispatchEvent"]],"pornult.com":[["acs","Math.random","Exoloader"],["nowoif"],["nostif","offsetWidth"],["aopr","exoJsPop101"],["aopr","btoa"]],"portstthomaswebcam.com":[["nostif","innerHTML"]],"practical-golf.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"practicalpie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"premierguitar.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","adblockerDisabled","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"preparednessadvice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pronounceskincare.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"properlyrooted.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"protege-torrent.com":[["aeld","","pop"],["aopr","decodeURI"]],"prouditaliancook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ps4storage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"puzzles.independent.co.uk":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"puzzles.pressherald.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"qrcodemonkey.net":[["nostif","#ad_blocker_detector"]],"queersapphic.com":[["rmnt","script","/__adblocker|html-load/"]],"quoka.de":[["nostif",".call(null)","10"]],"rabo.no":[["noeval-if","/chp_?ad/"]],"radio-south-africa.co.za":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.pt":[["nostif",".call(null)","10"]],"radiotimes.com":[["aopr","_sp_._networkListenerData"]],"rail-log.net":[["noeval-if","/chp_?ad/"]],"ramonascuisine.com":[["rmnt","script","/__adblocker|html-load/"]],"ramrho.org":[["rmnt","script","html-load.com"]],"realadvicegal.com":[["rmnt","script","/__adblocker|html-load/"]],"recetas.arrozconleche.info":[["acs","Math","break;case $."]],"recipahi.com":[["nostif","offsetHeight","100"],["nano-stb","redirectpage","13500","0.001"],["nano-sib","counter","1000","0.001"],["aeld","DOMContentLoaded","AdBlock"]],"red-herring.info":[["rmnt","script","/__adblocker|html-load/"]],"redretti.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"renegadeforum.com":[["rmnt","script","html-load.com"]],"repicsx.com":[["acs","document.querySelectorAll","popMagic"]],"rewardcharts4kids.com":[["rmnt","script","/__adblocker|html-load/"]],"rhyljournal.co.uk":[["set","adLight","true"]],"riftbound.gg":[["rmnt","script","/__adblocker|html-load/"]],"rocdacier.com":[["noeval-if","/chp_?ad/"]],"rollingstone.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"route-fifty.com":[["set","GEMG.GPT.Interstitial","noopFunc"]],"royalskeep.com":[["rmnt","script","/__adblocker|html-load/"]],"saffronwaldenreporter.co.uk":[["set","adLight","true"]],"salidzini.lv":[["nostif","media_place_list"]],"salina.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"salongeek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sanadegreecollege.in":[["set","document.hidden","false"],["aopw","AdBDetected"],["set","navigator.brave","undefined"]],"sat-sharing.com":[["rmnt","script","navigator.userAgent"]],"savealoonie.com":[["aopr","mdp_deblocker"]],"savespendsplurge.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"scamalot.com":[["acs","$","#DontBloxMyAdZ"]],"scatkings.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"schadeck.eu":[["noeval-if","/chp_?ad/"]],"scontianastro.com":[["noeval-if","/chp_?ad/"]],"scotchandscones.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seat-forum.co.uk":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"seatroutforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"senmanga.com":[["aopr","AaDetector"]],"septle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seriezloaded.com.ng":[["aeld","","break;case $."],["acs","navigator","break;case $."]],"servsafepracticetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexcams-24.com":[["set","flashvars.popunder_url",""],["set","flashvars.protect_block",""]],"sexpuss.org":[["acs","document.querySelectorAll","popMagic"]],"shadowverse.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharclub.in":[["aopr","AdBDetected"]],"shoot-yalla.me":[["rmnt","script","/adbl/i"]],"shotgunworld.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"shoutoutsouthcarolina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shownieuws.nl":[["set","Object.prototype.ADBLOCK_DETECTION",""]],"shrinkus.tk":[["noeval-if","/chp_?ad/"]],"simplemadepretty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplisticallyliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skidrow-games.com":[["acs","JSON.parse","break;case $."]],"slapdashmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slopitchcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sms-receive-online.com":[["nostif","adb"]],"snaptik.app":[["aost","$","openAdsModal"]],"solotrend.net":[["aopr","b2a"]],"somewhatsimpleliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"somuchfoodblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southwalesguardian.co.uk":[["set","adLight","true"]],"spa.center.ivof.com":[["aopw","ai_front"]],"spoonfulofsi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportico.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"spotifystats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"standard-freeholder.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"]],"starbucks-calorie-calculator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stepstomagic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stillcurtain.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"stireazilei.eu":[["noeval-if","/chp_?ad/"]],"strcloud.site":[["rmnt","script","wpadmngr.com"]],"streamextreme.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"strefaedukacji.pl":[["rmnt","script","admiral","excludes",",\\\""]],"stripedspatula.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"striphub.cam":[["nostif","/timed out|\\?\\?=/"],["no-fetch-if","method:HEAD","length:10001"]],"strms.net":[["set","sensorsDataAnalytic201505","{}"],["set","vizier","{}"]],"studio73designsnb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stuttgarter-nachrichten.de":[["nostif",".call(null)","10"]],"stylishcurves.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"subsvip.com":[["nano-stb","","10000","0"]],"subtitleone.cc":[["set","Object.prototype.adblockFound","false"]],"sudokutable.com":[["rmnt","script","html-load.com"]],"sugarandsoul.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugargeekshow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"suneelkevat.com":[["noeval-if","/chp_?ad/"]],"surreyworld.co.uk":[["rmnt","script","await eval"]],"surrit.store":[["nowoif"]],"svg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"svrider.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"switch520.com":[["acs","eval","replace"]],"tagecoin.com":[["acs","alert"],["acs","document.createElement","adsBlocked"],["aeld","load","htmls"]],"talaba.su":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"talkesg.com":[["rmnt","script","html-load.com"]],"tasteandtellblog.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tasteoflithuania.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tastingtable.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tatabrada.tv":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"tech.pubghighdamage.com":[["nano-stb","/getElementById|gotoo/","*","0.02"],["set","navigator.brave","undefined"]],"techadvisor.com":[["nostif",".call(null)"],["rmnt","script","window.admiral","excludes",",\\\""]],"techhelpbd.com":[["nostif","/adblocker|alert/"]],"techiepirates.com":[["noeval-if","/chp_?ad/"]],"technons.com":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"technorozen.com":[["noeval-if","/chp_?ad/"]],"teenvogue.com":[["nofab"]],"tennis.stream":[["nowoif","/aff|jump/"]],"texture-packs.com":[["no-xhr-if","adsbygoogle"]],"thatlowcarblife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theairfryingdiva.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theappstore.org":[["no-fetch-if","adsbygoogle","length:11000"]],"thebananadiaries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebestideasforkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebestkidscraftsandactivities.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecalifornian.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thecentsableshoppin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theeminenceinshadowmanga.com":[["acs","document.querySelectorAll","popMagic"]],"thefoodhussy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefpsreview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theglowingfridge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themediterraneandish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themodernnonna.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenavagepatch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepatriotjournal.com":[["rmnt","script","/==undefined.*body/"]],"thepiratebay.org":[["aopw","Fingerprint2"],["aopr","exoJsPop101"]],"thepopupprincess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therecordherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thereisfoodathome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thermocookery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theroot.com":[["set","ga","noopFunc"]],"theroyalforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesexcloud.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thestemlaboratory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestressfreechristmas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theturquoisehome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetwordtravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theuncorkedlibrarian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thingiverse.com":[["rmnt","script","/:\\\"length\\\"\\}\\);$/"],["nano-sib"]],"threadsmonthly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thrivinginparenting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tinhte.vn":[["nostif",".getComputedStyle"]],"tipsandtricksjapan.com":[["rmnt","script","await eval"]],"tnstudycorner.in":[["noeval-if","/chp_?ad/"]],"toddlerapproved.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"togetherasfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tokuzilla.net":[["ra","onclick","[onclick*=\"_blank\"]","complete"],["nowoif","_blank"],["aeld","click","overlay"]],"torrentdofilmeshd.net":[["noeval-if","/chp_?ad/"]],"totallygoldens.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tpornstars.com":[["acs","document.querySelectorAll","popMagic"]],"travel-on-points.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"triumphtalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trovapromozioni.it":[["noeval-if","/chp_?ad/"]],"truyentranhfull.net":[["rmnt","script","ai_adb"]],"tryvaga.com":[["acs","document.addEventListener","adsBlocked"]],"tu.no":[["aeld","error"]],"tubegaytube.com":[["acs","document.querySelectorAll","popMagic"]],"tubesex.me":[["aopr","Aloader.serve"],["noeval"]],"tudo-para-android.com":[["aeld","load","onload"]],"tulink.org":[["no-fetch-if","/doubleclick|googlesyndication/"]],"tundratalk.net":[["rmnt","script","html-load.com"]],"turkish123.com":[["acs","parseInt","break;case $."]],"tusachmanga.com":[["nowoif","_blank"]],"tyla.com":[["rmnt","script","\"nowprocket\""]],"uhcougars.com":[["set","blockAdBlock","trueFunc"]],"ultrahorny.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uncovercolorado.com":[["rmnt","script","/__adblocker|html-load/"]],"unlockapk.com":[["aeld","load","onload"]],"updown.icu":[["acs","addEventListener","HTMLAllCollection"]],"upgradedhome.com":[["set","loadShield","noopFunc"]],"upscaler.stockphotos.com":[["json-prune","placements.processingFile"]],"usgamer.net":[["set","_sp_.msg.displayMessage","noopFunc"]],"utepminermaniacs.com":[["set","blockAdBlock","trueFunc"]],"valentinascorner.com":[["rmnt","script","/__adblocker|html-load/"]],"valyastasteofhome.com":[["rmnt","script","/__adblocker|html-load/"]],"vaughn.live":[["nosiif","header_menu_abvs","10000"]],"veev.to":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["no-xhr-if","/vast.php?"],["no-xhr-if","/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["nostif","]();}","500"],["rmnt","script","offsetParent"],["no-xhr-if","162.252.214.4","true"],["no-xhr-if","c.adsco.re"],["no-xhr-if","adsco.re:2087"]],"vegehomecooking.com":[["rmnt","script","/__adblocker|html-load/"]],"veggieinspired.com":[["rmnt","script","/__adblocker|html-load/"]],"vibrantlygfree.com":[["rmnt","script","/__adblocker|html-load/"]],"video1tube.com":[["set","popit","false"],["acs","btoa"]],"videogamesblogger.com":[["rmnt","script","/==undefined.*body/"]],"videosputas.xxx":[["acs","document.querySelectorAll","popMagic"]],"vidload.net":[["aopr","AaDetector"]],"viewmature.com":[["acs","document.querySelectorAll","popMagic"]],"vintageporntubes.com":[["aopr","ExoLoader.serve"],["aeld","getexoloader"],["acs","document.querySelectorAll","popMagic"]],"viper.to":[["nowoif"]],"voodc.com":[["aopw","Adcash"],["json-prune","*","*.adserverDomain"],["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"voyagehouston.com":[["rmnt","script","/__adblocker|html-load/"]],"voyeurxxxsex.com":[["acs","document.querySelectorAll","popMagic"]],"vstplugin.net":[["noeval-if","/chp_?ad/"]],"vtxoa.com":[["rmnt","script","html-load.com"]],"warwickshireworld.com":[["rmnt","script","await eval"]],"watchimpracticaljokers.com":[["acs","parseInt","break;case $."]],"watchmonkonline.com":[["aopr","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watchtalkforums.info":[["rmnt","script","html-load.com"]],"wdwmagic.com":[["rmnt","script","/__adblocker|html-load/"]],"weadown.com":[["nostif","showModal"],["aeld","","showModal"],["set","blurred","false"]],"webcheats.com.br":[["set","can_run_ads","true"],["nostif","test","0"]],"welcometojapan.jp":[["noeval-if","/chp_?ad/"]],"werkzeug-news.de":[["nostif",".call(null)","10"]],"whatagirleats.com":[["rmnt","script","/__adblocker|html-load/"]],"wheelofgold.com":[["noeval-if","/chp_?ad/"],["aeld","load","document.getElementById"],["nosiif","onerror"],["set","checkAdBlocker","noopFunc"]],"whiteoutdata.com":[["rmnt","script","/__adblocker|html-load/"]],"whlt.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wielerflits.be":[["rmnt","script","html-load.com"]],"wmubroncos.com":[["set","blockAdBlock","trueFunc"]],"womenlivingwell.org":[["rmnt","script","/__adblocker|html-load/"]],"word-craze.com":[["rmnt","script","/__adblocker|html-load/"]],"wordimpostor.com":[["rmnt","script","/__adblocker|html-load/"]],"workproductivityinfo.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"writingtipsoasis.com":[["rmnt","script","/__adblocker|html-load/"]],"wvnstv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xfantazy.com":[["acs","document.querySelectorAll","popMagic"]],"xforum.live":[["acs","document.querySelectorAll","popMagic"]],"xhadult2.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhchannel.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xvideos.com":[["nowoif"],["aeld","click","ShouldShow"]],"xxxtik.com":[["acs","atob","Uint8Array"]],"xxxtubepass.com":[["aopr","Aloader.serve"]],"yachtrevue.at":[["nostif",".call(null)","10"]],"yaoiotaku.com":[["nostif","afs_ads","2000"]],"yarnutopia.com":[["rmnt","script","/__adblocker|html-load/"]],"yetiownersclub.co.uk":[["rmnt","script","html-load.com"]],"yourfirstvisit.net":[["rmnt","script","/__adblocker|html-load/"]],"yourteenmag.com":[["rmnt","script","/__adblocker|html-load/"]],"youwatch.monster":[["acs","WebAssembly","atob"]],"yseries.tv":[["acs","parseInt","break;case $."]],"ytmp4converter.com":[["acs","parseInt","break;case $."]],"yumeost.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"zeekrchat.com":[["rmnt","script","html-load.com"]],"zitss.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"zmamobile.com":[["nano-stb","tick","1000"]],"zokaj.com":[["nowoif","","1"],["rmnt","script","popupShown"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
