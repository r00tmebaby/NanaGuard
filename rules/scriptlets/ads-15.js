/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123animehub.cc":[["acs","addEventListener","HTMLAllCollection"]],"123easy4me.com":[["rmnt","script","html-load.com"]],"13tv.co.il":[["no-fetch-if","/doubleclick|googlesyndication/"],["nano-stb","taboola timeout","*","0.001"],["nano-stb","clearInterval(run)","5000","0.001"]],"18adultgames.com":[["acs","document.querySelectorAll","popMagic"],["set","URLlist","[]"]],"1fichier.com":[["nowebrtc"],["nano-stb","dlw","40000"],["nano-stb","ctt()","1000","0.001"]],"2822news.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"2ndrun.tv":[["aeld","load","showModal"],["set","DHAntiAdBlocker","true"]],"45er-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"4live.online":[["aeld","DOMContentLoaded","checkAdBlocker"]],"4pics1-word.com":[["rmnt","script","/__adblocker|html-load/"]],"4porn4.com":[["acs","document.querySelectorAll","popMagic"]],"4thgentacoma.com":[["rmnt","script","html-load.com"]],"7vibelife.com":[["no-xhr-if","doubleclick"],["no-xhr-if","google","length:10"]],"94.103.83.138":[["nowoif"]],"98zero.com":[["rmnt","script","adbl"]],"9gag.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","()=>eval"],["rmnt","script","/:\\[?window,/"],["rmnt","script","void 0||window,"],["acs","document.createElement","moa_id"]],"abyssplay.pages.dev":[["nowoif","_blank"]],"acultivatednest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ad-doge.com":[["nostif","_0x"]],"afly.pro":[["noeval-if","ads"]],"aghasolution.com":[["noeval-if","/chp_?ad/"]],"ai.hubtoday.app":[["set","killads","true"]],"aitoolsfree.org":[["noeval-if","/chp_?ad/"]],"allafricangirls.net":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"alleydog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alliecarte.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allpornflix.com":[["json-prune","*.props.videoPlayerAds *.props.postButtonAds"]],"alrincon.com":[["aopr","loadTool"],["aopr","ExoLoader.serve"],["aopr","open"],["acs","onload","open"]],"andreasnotebook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anime-i.com":[["nostif","nextFunction","2000"]],"animeindo.asia":[["aeld","","_0x"]],"animeonline.ninja":[["acs","document.documentElement","break;case $."]],"animetoast.cc":[["acs","document.querySelectorAll","popMagic"]],"anitalianinmykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"antennaland.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anysoftwaretools.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"apfelpatient.de":[["nostif","css_class"]],"applefitnessforum.com":[["rmnt","script","html-load.com"]],"appstore-discounts.com":[["acs","document.getElementById","undefined"]],"arabshentai.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"arenabg.com":[["aopr","AaDetector"]],"art19.com":[["json-prune","ad_pods.0.ads.0.segments.0.media ad_pods.1.ads.1.segments.1.media ad_pods.2.ads.2.segments.2.media ad_pods.3.ads.3.segments.3.media ad_pods.4.ads.4.segments.4.media ad_pods.5.ads.5.segments.5.media ad_pods.6.ads.6.segments.6.media ad_pods.7.ads.7.segments.7.media ad_pods.8.ads.8.segments.8.media"]],"articlesmania.me":[["noeval-if","/chp_?ad/"]],"askcerebrum.com":[["noeval-if","/chp_?ad/"]],"at4xowners.com":[["rmnt","script","html-load.com"]],"atresplayer.com":[["nano-stb","[native code]","5000"],["no-fetch-if","doubleclick"]],"attractionsmagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audioz.download":[["rmnt","script","adserverDomain"]],"augustacrime.com":[["rmnt","script","()=>eval"]],"aussiehomebrewer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"autocentrum.pl":[["nano-sib","consoleLoaded?clearInterval"]],"autoembed.app":[["no-fetch-if","/adsbygoogle|google-analytics|ads-twitter|doubleclick/"],["nostif","offsetHeight"]],"automobile-catalog.com":[["nostif","loader.min.js"],["rmnt","script","error-report.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script",",window]"],["rmnt","script","html-load.com"]],"avnsgames.com":[["rmnt","script","/detectAdBlock|checkFakeAd|adBlockNotDetected/"],["nano-sib","/.?/","*","0.02"]],"avocadopesto.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"azores.co.il":[["noeval-if","/chp_?ad/"]],"b9good.co":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"babygaga.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"balancingeverything.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"batesfamilyblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bcsnoticias.mx":[["noeval-if","/chp_?ad/"]],"beardeddragonforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beautyriot.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"bellezashot.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"],["noeval-if","/chp_?ad/"],["noeval-if","adsbygoogle"],["rmnt","script","/popMagic|pop1stp/"]],"beneathmyheart.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"berlyskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bevcooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bhplay.me":[["acs","parseInt","break;case $."]],"bible-knowledge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bigbuttshubvideos.com":[["no-fetch-if","widgets.outbrain.com"],["no-fetch-if","mode:no-cors"]],"biletomat.pl":[["set","toggleAdBlockInfo","falseFunc"]],"biopills.net":[["aost","encodeURIComponent","inlineScript"]],"bisceglielive.it":[["nostif","#rbm_block_active","1000"]],"blwideas.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"bowl-me-over.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brandeating.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bravoporn.com":[["set","vastEnabled","false"]],"browser.lol":[["nostif","window.getComputedStyle"]],"bucksfreepress.co.uk":[["set","adLight","true"]],"buellxb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buggyandbuddy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bymichiby.com":[["acs","document.querySelectorAll","popMagic"]],"calfkicker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"call4cloud.nl":[["set","detectAdblock","noopFunc"]],"callofwar.com":[["rmnt","script","Anzeige"]],"cambro.tv":[["acs","document.addEventListener","initBCPopunder"],["aopr","onload"],["set","flashvars.logo_url",""],["set","flashvars.logo_text",""]],"camgoddess.tv":[["aopr","console.log"],["set","hasPoped","true"]],"canna.to":[["aopw","_pop"]],"capital.de":[["aeld","load","autoRecov"]],"carolbeecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"carseatsmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cartoonporncomics.info":[["acs","document.querySelectorAll","popMagic"]],"cataniatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"cattleforum.com":[["rmnt","script","html-load.com"]],"ccurl.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","Math","break;case $."]],"chaos2ch.com":[["rmnt","script","html-load.com"]],"chaptercheats.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"chatropolis.com":[["acs","document.querySelectorAll","popMagic"]],"cheatsquad.gg":[["nano-sib","clearInterval"],["nosiif","visibility","1000"],["nostif","offsetHeight"]],"chefjar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chelsweets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chikonori.com":[["noeval-if","/chp_?ad/"]],"chocolatecoveredkatie.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"christinamariablog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ciaoflorentina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"citpekalongan.com":[["acs","Math","break;case $."]],"cjeatsrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cloudorchestranova.com":[["nowoif","_blank"]],"cocogals.com":[["aopr","loadTool"],["aopr","document.dispatchEvent"]],"coleycooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"commanderforums.org":[["rmnt","script","html-load.com"]],"computerbild.de":[["nostif",".call(null)","10"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"computerfrage.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"conceptartempire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"connect.de":[["nostif",".call(null)","10"]],"cookiesandcups.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cooktoria.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coolrom.com.au":[["set","time","0"],["acs","confirm","location"],["set-cookie","modal_cookie","yes"]],"corvsport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"couponingfor4.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cozylittlehouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cpu-monkey.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"craftymorning.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crayonsandcravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cricwatch.io":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"criticker.com":[["json-prune","bannerad sidebar ti_sidebar"]],"crochet365knittoo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crossdresserhub.com":[["acs","document.querySelectorAll","popMagic"]],"crosstourownersclub.com":[["rmnt","script","html-load.com"]],"cruisegalore.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crunchyroll.com":[["json-prune","value.media.ad_breaks"],["nosiif","onAdVideoStart"]],"crvsport.ru":[["acs","document.documentElement","break;case $."]],"cryptoearns.com":[["rmnt","script","Brave"],["aopw","infoey"]],"cuevana.pro":[["acs","EventTarget.prototype.addEventListener","delete window"]],"cx50forums.com":[["rmnt","script","html-load.com"]],"daftsex.biz":[["acs","document.querySelectorAll","popMagic"],["nano-sib","timeleftlink","1000","0.001"]],"dailydish.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyfreebits.com":[["acs","$","html"]],"danslescoulisses.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"dartmouthsports.com":[["set","blockAdBlock","trueFunc"]],"daytonflyers.com":[["set","blockAdBlock","trueFunc"]],"dbusports.com":[["set","blockAdBlock","trueFunc"]],"debraklein.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"decanter.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"delishdlites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dendroboard.com":[["rmnt","script","html-load.com"]],"desifakes.com":[["acs","WebAssembly","atob"],["rmnt","script","navigator.userAgent"]],"desimmshd.com":[["aeld","","popMagic"],["aopr","document.dispatchEvent"]],"digitalbeautybabes.com":[["acs","document.querySelectorAll","popMagic"]],"divorceandfinance.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dlive.sx":[["rmnt","script","adserverDomain"]],"do-xxx.com":[["noeval"],["aopr","Aloader.serve"]],"dogsonplanes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dota2freaks.com":[["nosiif","visibility","1000"]],"dramafren.org":[["acs","eval","replace"],["no-xhr-if","adsbygoogle"],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"dreamystays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drivenbydecor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drivinggeeks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"droidmirror.com":[["nano-sib","counter"]],"dualshockers.com":[["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"ducatimonster.org":[["rmnt","script","html-load.com"]],"e-monsite.com":[["set","CaptchmeState.adb","undefined"]],"ear-phone-review.com":[["nostif","nextFunction"]],"easyrecipedepot.com":[["rmnt","script","/__adblocker|html-load/"]],"eatathomecooks.com":[["rmnt","script","/__adblocker|html-load/"]],"eatingwitherica.com":[["rmnt","script","/__adblocker|html-load/"]],"educationtips213.blogspot.com":[["aeld","","break;case $."]],"edumail.su":[["rmnt","script","enable_ad_block_detector"]],"efukt.com":[["aeld","click","preventDefault"],["nostif","_0x","2000"],["aopr","open"]],"elamigosgamez.net":[["nostif","checkAdblockUser"]],"embedindia.st":[["rmnt","script","adserverDomain"]],"emissions.org":[["rmnt","script","/__adblocker|html-load/"]],"emperorscan.mundoalterno.org":[["noeval-if","/chp_?ad/"]],"emturbovid.com":[["nowoif"],["nostif","window.open"]],"enclaveforum.net":[["rmnt","script","html-load.com"]],"encurtads.net":[["nostif","checkAdBlock"],["rmnt","script","popUp"]],"eng-news.com":[["noeval-if","/chp_?ad/"]],"entireweb.com":[["acs","setInterval","addAds"]],"erayforums.com":[["rmnt","script","html-load.com"]],"erinstraveltips.com":[["rmnt","script","/__adblocker|html-load/"]],"erokomiksi.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"eskiceviri.blogspot.com":[["aopr","adBlockDetected"],["acs","puShown","/doOpen|popundr/"]],"etransitforum.com":[["rmnt","script","html-load.com"]],"everythinglubbock.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"expertplay.net":[["acs","ips.controller.register"]],"explorersweb.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"extremehowto.com":[["rmnt","script","/__adblocker|html-load/"]],"factsinstitute.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"faiviral.com":[["nostif","/window\\.location\\.href|n/","8000"]],"falatron.com":[["rc","unclickable","","stay"]],"familyfelicity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"familytravel-middleeast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"faqwiki.us":[["noeval-if","/chp_?ad/"],["aopr","antiAdBlockerHandler"],["nostif",".offsetHeight>0"]],"farmlifediy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feedingourflamingos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feral-heart.com":[["aopr","googletag"]],"fgcuathletics.com":[["set","blockAdBlock","trueFunc"]],"financeguidz.com":[["noeval-if","/chp_?ad/"],["nowoif"]],"findcatnames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fishlab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fiuxy2.co":[["rmnt","script","mega-enlace.com/ext.php?o="]],"focusdailynews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"followfollow.com":[["rmnt","script","admiral","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"forbusybees.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fordraptorforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forevertwentysomethings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forkinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forscubadivers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fox51.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"foxfarmhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fragrancereview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freefiremaxofficial.com":[["noeval-if","/chp_?ad/"]],"freegrannypornmovies.com":[["acs","document.querySelectorAll","popMagic"]],"friv.com":[["aeld","DOMContentLoaded","Visibility"],["nostif","Visibility"]],"frugalrules.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fsiblog3.club":[["rmnt","script","navigator.userAgent"]],"fullxxxmovies.me":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"fun-a-day.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"futbin.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"g8forum.com":[["rmnt","script","html-load.com"]],"gagaltotal666.my.id":[["acs","addEventListener","nextFunction"]],"gameanswer.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamenv.net":[["noeval-if","/chp_?ad/"]],"gamepcfull.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"gamerxyt.com":[["noeval-if","/chp_?ad/"],["aopr","antiAdBlockerHandler"],["aeld","DOMContentLoaded","history.go"]],"games.thenewstribune.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.usnews.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games4king.com":[["ra","target"]],"gamesaktuell.de":[["nostif",".call(null)","10"]],"gameslikefinder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamestouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamingbeasts.com":[["nano-sib","counter"]],"gamingforecast.com":[["acs","addEventListener","popunder"]],"gardeningchannel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gazettelive.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"genesisg70forum.com":[["rmnt","script","html-load.com"]],"gentlewasher.com":[["acs","parseInt","break;case $."]],"gesund-vital.de":[["nostif",".call(null)","10"]],"getpaste.link":[["set","isAdBlockActive","false"]],"gimmethegoodstuff.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlshd.xxx":[["aopr","document.dispatchEvent"]],"girlsvip-matome.com":[["rmnt","script","html-load.com"]],"globle.fun":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"godrakebulldogs.net":[["set","blockAdBlock","trueFunc"]],"goducks.com":[["set","blockAdBlock","trueFunc"]],"gofile.to":[["set","countDown","0"]],"gojo2.com":[["aopr","b2a"]],"golfcartreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goodcarbadcar.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gostyn24.pl":[["set","arePiratesOnBoard","false"]],"grillonadime.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"growforagecookferment.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grunge.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gsm1x.xyz":[["aopw","downloadJSAtOnload"],["nano-stb","run"]],"guitarchalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guitarworld.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"hailstate.com":[["set","blockAdBlock","trueFunc"]],"haonguyen.top":[["set","blurred","false"]],"happyhomefairy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"harrogateadvertiser.co.uk":[["rmnt","script","await eval"]],"haxnode.net":[["noeval-if","/chp_?ad/"]],"haylskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hdgay.net":[["nowoif","","10"]],"hdpicsx.com":[["acs","document.querySelectorAll","popMagic"]],"hds-streaming-hd.com":[["acs","parseInt","break;case $."]],"headfonia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthylittlefoodies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthylittlepeach.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentaienglish.com":[["acs","document.querySelectorAll","popMagic"],["set","vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""]],"herepup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hesipracticetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hilaw.vn":[["noeval-if","/chp_?ad/"]],"hit-erotic.com":[["acs","document.querySelectorAll","popMagic"]],"hmanga.asia":[["acs","document.querySelectorAll","popMagic"]],"hoca4u.com":[["acs","document.createElement","onerror"]],"hockeyforum.com":[["rmnt","script","html-load.com"]],"homanathome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeautomation.forum":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeglowdesign.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"homemadeforelle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemoviestube.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["aopr","decodeURI"],["aeld","click","clickCount"]],"hornyfanz.com":[["acs","document.querySelectorAll","popMagic"]],"hot-teens-movies.mobi":[["aopr","popit"],["aeld","popstate","noPop"]],"hotanimepornvideos.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hotgirlhub.com":[["acs","document.querySelectorAll","popMagic"]],"hotspringsofbc.ca":[["noeval-if","/chp_?ad/"]],"hqtv.biz":[["set","google_tag_data","noopFunc"]],"huddlegame.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hvac.forum":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hwbusters.com":[["rmnt","script","adbl"]],"imaginationsoup.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imihu.net":[["rmnt","script","html-load.com"]],"indianbestporn.com":[["noeval"],["aopr","Aloader.serve"]],"infinityscans.net":[["rmnt","script",";}}};break;case $."],["nostif",".adv-"]],"infogenyus.top":[["rmnt","script","/bait/i"]],"infoinspired.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ingles.com":[["set","SD_IS_BLOCKING","false"],["aeld","","isBlocking"]],"insidekstatesports.net":[["set","blockAdBlock","trueFunc"]],"insidenova.com":[["aopr","googletag"]],"instaporno.net":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"insuranceloan.akbastiloantips.in":[["no-xhr-if","doubleclick"],["no-xhr-if","google","length:10"]],"internet-access-guide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iputitas.net":[["aopr","afScript"]],"irvinetimes.com":[["set","adLight","true"]],"isavea2z.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"isixsigma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"islands.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itisakeeper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itrwrestling.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itsavegworldafterall.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"jacquieetmichelelite.com":[["acs","$","show"]],"jaginfo.org":[["rmnt","script","html-load.com"]],"jameeltips.us":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"javct.net":[["aopr","asgPopScript"]],"javjavhd.com":[["acs","document.querySelectorAll","popMagic"]],"javplay.me":[["aopr","popns"]],"javquick.com":[["nowoif"]],"jeshoots.com":[["set","google_jobrunner","true"]],"jisakuhibi.jp":[["rmnt","#text","スポンサードリンク"]],"journaldemontreal.com":[["no-fetch-if","doubleclick"],["no-xhr-if","doubleclick"]],"juneauharborwebcam.com":[["nostif","innerHTML"]],"justsotasty.com":[["rmnt","script","/__adblocker|html-load/"]],"k-statesports.net":[["set","blockAdBlock","trueFunc"]],"kakiagune.com":[["noeval-if","/chp_?ad/"]],"karanapk.com":[["set","google_jobrunner","true"]],"kawalingpinoy.com":[["rmnt","script","/__adblocker|html-load/"]],"kaystls.site":[["noeval-if","/chp_?ad/"],["nostif","AdDetect"]],"kedoam.com":[["set","google_unique_id","6"]],"kijolifehack.com":[["rmnt","script","html-load.com"]],"kimberdawnco.com":[["rmnt","script","/__adblocker|html-load/"]],"kingjamesgospel.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"kodaika.com":[["noeval-if","/chp_?ad/"]],"kokosovoulje.com":[["noeval-if","/chp_?ad/"]],"komisanwamanga.com":[["acs","document.querySelectorAll","popMagic"]],"koora-online.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kosheronabudget.com":[["rmnt","script","/__adblocker|html-load/"]],"krakenfiles.com":[["nowoif"],["aeld","DOMContentLoaded","open"],["aeld","DOMContentLoaded","history.go"],["rmnt","script","onpopstate"],["rmnt","script","showBannerAdBlock"],["no-fetch-if","pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"],["no-fetch-if","googletagservices"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"krebs-horoskop.com":[["nostif","displayMessage","2000"]],"kristineinbetween.com":[["rmnt","script","/__adblocker|html-load/"]],"kurakura21.com":[["acs","document.createElement","l.parentNode.insertBefore(s","/^data:/"],["noeval-if","/chp_?ad/"]],"kyleecooks.com":[["rmnt","script","/__adblocker|html-load/"]],"la3c.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"lakeshowlife.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"lapresse.ca":[["set","noBlocker","true"],["aopw","_sp_"]],"laughingroostereats.com":[["rmnt","script","/__adblocker|html-load/"]],"lek-manga.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"lemonbin.com":[["rmnt","script","/__adblocker|html-load/"]],"lenconnect.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"leo-horoscopes.com":[["nostif","displayMessage","2000"]],"lesboluvin.com":[["acs","document.querySelectorAll","popMagic"]],"lifeisaparty.ca":[["rmnt","script","/__adblocker|html-load/"]],"limontorrents.com":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"linksaya.com":[["acs","addEventListener","google_ad_client"]],"livecrafteat.com":[["rmnt","script","/__adblocker|html-load/"]],"longislandfirearms.com":[["rmnt","script","html-load.com"]],"lordchannel.com":[["rmnt","script","await"]],"lostsword.gg":[["rmnt","script","/__adblocker|html-load/"]],"louisianawomanblog.com":[["rmnt","script","/__adblocker|html-load/"]],"lsd.law":[["rmnt","script","/__adblocker|html-load/"]],"luckypatchers.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"lusthero.com":[["nostif","()","50"]],"magesy.blog":[["nostif","/adbl/i"]],"maisondecinq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"malaysianwireless.com":[["nostif","class.scroll","1000"]],"malluporno.com":[["rmnt","script","/exoloader/i"]],"mangacrab.com":[["nostif","","500"]],"mangadna.com":[["acs","document.querySelectorAll","popMagic"],["acs","JSON.parse","break;case $."]],"mangaindo.web.id":[["acs","Math","break;case $."]],"mangakoma.ac":[["acs","WebAssembly","atob"]],"marimo-info.net":[["noeval-if","/chp_?ad/"]],"masterplayer.xyz":[["aeld","click","popundr"]],"math-aids.com":[["set","__revCatchInitialized","true"],["nostif","En(e-1)"]],"mathdf.com":[["set","adBlockEnabled","false"]],"mathwarehouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mazakony.com":[["nostif","show"]],"mealplanningmommies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mealplanpros.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meanttobemade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mechanicguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medebooks.xyz":[["nostif","ai_adb"]],"medicalhero.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"megadrive-emulator.com":[["nostif","biteDisplay"],["set","blext","true"]],"meltontimes.co.uk":[["rmnt","script","await eval"]],"menshealth.de":[["nostif",".call(null)","10"]],"messengernewspapers.co.uk":[["set","adLight","true"]],"meuanime.info":[["acs","EventTarget.prototype.addEventListener","delete window"]],"milfordmercury.co.uk":[["set","adLight","true"]],"milftoon.xxx":[["acs","document.querySelectorAll","popMagic"]],"minif66.com":[["rmnt","script","html-load.com"]],"minimalistbaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"missmustardseed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mizugigurabia.com":[["acs","document.addEventListener","google_ad_client"]],"mlsbd.co":[["acs","document.addEventListener","window.open"],["nowoif"]],"mmastreams.me":[["acs","document.documentElement","break;case $."],["aopw","Adcash"]],"mmoovvfr.cloudfree.jp":[["noeval-if","/chp_?ad/"]],"mobdi3ips.com":[["aeld","load","onload"]],"modelrailforum.com":[["rmnt","script","html-load.com"]],"mom4real.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommybearmedia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneyhouse.ch":[["nostif","bait"]],"moneymakingmommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneywehave.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"montereyherald.com":[["set","CnnXt.Event.fire","noopFunc"]],"morethankyounotes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motorhomefacts.com":[["rmnt","script","html-load.com"]],"motorradonline.de":[["nofab"],["nostif",".call(null)","10"]],"motorsport.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","html-load.com"],["noeval-if","interactionCount"]],"mov18plus.cloud":[["acs","addEventListener","HTMLAllCollection"],["aost","HTMLElement.prototype.click","_0x"],["nowoif"]],"moviesx.org":[["aopr","open"]],"mrmakeithappen.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mtgarena.pro":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mumsmakelists.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mxcity.mx":[["noeval-if","/chp_?ad/"]],"mydinner.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myexcelonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myfxbook.com":[["nostif","/adblock/i"]],"mymocktailforest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myradioonline.pl":[["set","AddAdsV2I.addBlock","false"]],"myvidster.com":[["acs","document.write","cachebuster"]],"nakedgirlsroom.com":[["aopr","ExoLoader.addZone"]],"naomicakes.com":[["rmnt","script","/__adblocker|html-load/"]],"ncdnx3.xyz":[["nowoif"]],"nearthebeatenpath.com":[["rmnt","script","/__adblocker|html-load/"]],"neowners.com":[["rmnt","script","html-load.com"]],"nerdsandbeyond.com":[["rmnt","script","/__adblocker|html-load/"]],"newnissanz.com":[["rmnt","script","html-load.com"]],"newstvonline.com":[["aost","String.prototype.charCodeAt","ai_"]],"nextstophawaii.com":[["rmnt","script","/__adblocker|html-load/"]],"nguyenvanbao.com":[["nano-sib","counter","*"]],"ninaoutandabout.ca":[["rmnt","script","/__adblocker|html-load/"]],"nonamehiding.com":[["rmnt","script","/__adblocker|html-load/"]],"nordbayern.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"northantstelegraph.co.uk":[["rmnt","script","await eval"]],"nosteamgames.ro":[["nowoif"],["aopr","_wm"]],"nowsportv.nl":[["acs","document.documentElement","break;case $."]],"nrj-play.fr":[["set","adBlockDetector.isEnabled","falseFunc"]],"ntvs.cx":[["rmnt","script","adserverDomain"],["set","initializeNtvxSheet","noopFunc"],["nowoif"]],"nude-teen-18.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"nudismteens.com":[["acs","document.querySelectorAll","popMagic"],["noeval"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"numstheword.com":[["rmnt","script","/__adblocker|html-load/"]],"nunflix.org":[["nowoif"]],"nurturemygut.com":[["rmnt","script","/__adblocker|html-load/"]],"nyaatorrent.com":[["acs","document.querySelectorAll","popMagic"]],"nytspellingbeeanswers.org":[["rmnt","script","/__adblocker|html-load/"]],"nzbstars.com":[["acs","document.getElementById","adblocker"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"of-model.com":[["acs","decodeURI","decodeURIComponent"]],"officiallyglutenfree.com":[["rmnt","script","/__adblocker|html-load/"]],"oke.io":[["aopr","open"],["aopw","Fingerprint2"],["set","blurred","false"]],"okonomikitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"onecall2ch.com":[["rmnt","script","html-load.com"]],"optiqforum.com":[["rmnt","script","html-load.com"]],"orlando-parenting.com":[["rmnt","script","/__adblocker|html-load/"]],"orwhateveryoudo.com":[["rmnt","script","/__adblocker|html-load/"]],"ottxmaza.com":[["nowoif"]],"oursportscentral.com":[["rmnt","script","/__adblocker|html-load/"]],"papagiovannipaoloii.altervista.org":[["aost","String.prototype.charCodeAt","ai_"]],"papertraildesign.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"parentpreviews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pastelink.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"pdfaid.com":[["nostif","offsetHeight"]],"pelobuddy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"philly.arkadiumarena.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"phonenumber-lookup.info":[["aopr","pa"]],"phonereviewinfo.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"photovoltaikforum.com":[["acs","$","offsetHeight"]],"pics4upload.com":[["aopr","loadTool"]],"picspornamateur.com":[["acs","document.querySelectorAll","popMagic"]],"pieladybakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pink-sluts.net":[["set","PageLoader.DetectAb","0"]],"pinsexygirls.com":[["acs","document.querySelectorAll","popMagic"]],"pinstripesnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pipingpotcurry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"piratehaven.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"pitiurl.com":[["noeval-if","/chp_?ad/"]],"plankandpillow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"platedcravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"play1002.com":[["aeld","","break;case $."],["aopr","open"]],"player.hdgay.net":[["aopr","BetterJsPop"]],"playerfs.com":[["acs","JSON.parse","break;case $."]],"playertv.net":[["rmnt","script",";}}};break;case $."]],"pnwmoto.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porlalibreportal.com":[["noeval-if","/chp_?ad/"]],"porndrake.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"pornky.com":[["aopr","exoJsPop101"]],"pornmam.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"pornobae.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"pornonline.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"pornx.to":[["rmnt","script","wpadmngr.com"],["nowoif"]],"pornyeah.com":[["acs","document.querySelectorAll","popMagic"]],"postazap.com":[["noeval-if","/chp_?ad/"],["set","blurred","false"],["nano-sib","timer","*","0.001"],["nostif","ai_adb"],["no-xhr-if","googlesyndication"]],"postpartumtrainer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"practicalpainmanagement.com":[["aopr","googletag"]],"prad.de":[["nostif","stop-scrolling"],["nostif",".call(null)","10"],["aopr","googletag"]],"predominantlyorange.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"prensaesports.com":[["noeval-if","/chp_?ad/"]],"presentationskills.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pricematchguarantee.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primermagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"profusioncurry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"programme-tv.net":[["aopr","_sp_._networkListenerData"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"pronpic.org":[["aopr","document.createEvent"],["aopw","ShowAdbblock"],["nostif","style"]],"proteincakery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pumpkinnspice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pureleaks.net":[["aopw","popName"]],"pursuitforum.com":[["rmnt","script","html-load.com"]],"pussyspace.com":[["aost","navigator.userAgent","pushiserve"],["aeld","load","creativeLoaded-"],["aeld","/^load[A-Za-z]{12,}/"],["aost","document.createElement","rollexzone"],["nostif","tick","1000"],["set","registerLazyExo","noopFunc"]],"pussystate.com":[["aopr","AaDetector"]],"puzzleship.com":[["no-fetch-if","client=ca-pub-"],["no-fetch-if","adsbygoogle.js"]],"r1200rforum.com":[["rmnt","script","html-load.com"]],"raenonx.cc":[["nostif","error-report.com"],["nostif","Ads"]],"ragnarokscanlation.opchapters.com":[["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["aopw","adbEnableForPage"]],"rbs.ta36.com":[["noeval-if","/chp_?ad/"]],"reallifeathome.com":[["rmnt","script","/__adblocker|html-load/"]],"recessedlighting.com":[["rmnt","script","/__adblocker|html-load/"]],"recipesthatcrock.com":[["rmnt","script","/__adblocker|html-load/"]],"redketchup.io":[["set","googletag.cmd.push","noopFunc"],["nostif","/googletag\\.pubads|\\/PreBid\\.js/"]],"regiodom.pl":[["rmnt","script","admiral","excludes",",\\\""]],"renovatedrvsforsale.com":[["rmnt","script","/__adblocker|html-load/"]],"resin-expert.com":[["rmnt","script","/__adblocker|html-load/"]],"reuters.com":[["nostif",".call(null)","10"],["rmnt","script","adshieldScript"],["rmnt","script","rcom_bdScriptLoaded"]],"richieashbeck.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"richtexturescrochet.com":[["rmnt","script","/__adblocker|html-load/"]],"riderforums.com":[["rmnt","script","html-load.com"]],"rlxoff.com":[["aeld","DOMContentLoaded","Popunder"]],"rockdilla.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rocketcitynow.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"rogoyume.jp":[["aost","String.prototype.charCodeAt","ai_"]],"roms-download.com":[["acs","parseInt","break;case $."]],"royaledudes.io":[["no-xhr-if","adinplay.com"]],"royalkom.com":[["nosiif","visibility","1000"]],"rugerforum.net":[["rmnt","script","html-load.com"]],"s2-log.com":[["rmnt","script","html-load.com"]],"s2dfree.to":[["acs","navigator","FingerprintJS"]],"samrudhiglobal.com":[["noeval-if","/chp_?ad/"]],"sankaku.app":[["no-xhr-if","googlesyndication"]],"scan-hentai.net":[["aeld","DOMContentLoaded","adb"]],"scarlatifamilykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scoreland.name":[["nowoif"]],"scribens.com":[["rmnt","script","html-load.com"]],"scrumpoker-online.org":[["set","Object.prototype._adShieldLoaded","true"]],"seoul-station-druid.com":[["acs","document.querySelectorAll","popMagic"]],"serieslandia.com":[["aopr","scriptwz_url"]],"sexontheboat.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"sexsaoy.com":[["aopr","decodeURI"]],"seznam.cz":[["remove-cookie","qusnyQusny"]],"sfajacks.com":[["set","blockAdBlock","trueFunc"]],"sflix.pro":[["acs","parseInt","break;case $."]],"sharelink-1.site":[["acs","globalThis","break;case"]],"shazysport.pro":[["acs","EventTarget.prototype.addEventListener","delete window"]],"silverrecyclers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simpledesserts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simpleediy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplymacros.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simscommunity.info":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"singingcarrots.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siusalukis.com":[["set","blockAdBlock","trueFunc"]],"sixsistersstuff.com":[["aopr","Int32Array"]],"skytough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smallpocketlibrary.com":[["aopr","adBlockDetected"]],"smartevforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"smutr.com":[["popads-dummy"],["set","flashvars.adv_pre_vast",""],["set","flashvars.popunder_url","undefined"]],"sneakernews.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"snowmtl.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"soapdelinews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soapoperanetwork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"softwaresite.net":[["aopr","open"]],"soundproofcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southbendtribune.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"southernhospitalityblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"speedrun.com":[["json-prune","session.showAds"]],"sport.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"sports.yahoo.com":[["json-prune","autoRecovery"],["set","__benjiAdblock","undefined"],["rmnt","script","benjiAdblock","excludes","self.__next"]],"sportweb.info":[["no-fetch-if","ads"],["aeld","load","bypass"]],"spotifylists.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"srvy.ninja":[["set","nudgeAdBlock","noopFunc"],["no-xhr-if","/googlesyndication|ads/"]],"sshkit.com":[["no-fetch-if","/adsbygoogle|doubleclick/"]],"stephsunshine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stickers.gg":[["no-xhr-if","adsbygoogle"]],"stiflersmoms.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"stownrusis.com":[["nowoif"]],"streamcenter.xyz":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"streamfree.to":[["acs","EventTarget.prototype.addEventListener","delete window"],["no-fetch-if","method:HEAD"],["no-xhr-if","method:HEAD"]],"stressfreemommies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"strictlyweddings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stronazdrowia.pl":[["rmnt","script","admiral","excludes",",\\\""]],"subarubrzforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sulasokvids.net":[["acs","Date.now","shouldRun"]],"sunderlandecho.com":[["rmnt","script","await eval"]],"survivedivorce.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sustainmycookinghabit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swankyrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetpealifestyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweettoothsweetlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sxsw.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"symbolsage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tamilnaadi.com":[["noeval-if","/chp_?ad/"]],"tammileetips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tapology.com":[["rmnt","script","admiral","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"tasteofreality.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techadvisor.co.uk":[["nostif",".call(null)","10"]],"techlog.ta-yan.ai":[["noeval-if","/chp_?ad/"]],"technewsworld.com":[["aopr","pum_popups"]],"tecnotutoshd.net":[["acs","eval","replace"]],"temp-mail.org":[["set","checkadBlock","noopFunc"]],"tennisforum.com":[["rmnt","script","html-load.com"]],"territorysupply.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"textreverse.com":[["no-fetch-if","snigelweb.com"]],"the-girl-who-ate-everything.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebarchive.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"thebazaarzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebreadguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecaglediaries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theclassroomcreative.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecrazytourist.com":[["acs","document.getElementsByTagName","appendChild"]],"thecreativeshour.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefamilyfreezer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theglamkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehealthyepicurean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theheirloompantry.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehungrysoles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thejoblives.com":[["noeval-if","/chp_?ad/"]],"thelittleepicurean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themezon.net":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["aeld","load","doTest"],["nowoif","_blank"]],"themodernproper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themountainviewcottage.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themovementmenu.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenewsstar.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"theplanetd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theramblingredhead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theredcarpet.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thescarboroughnews.co.uk":[["rmnt","script","await eval"]],"thewebsitesbridge.com":[["no-fetch-if","googlesyndication"]],"thewimpyvegetarian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisorganicgirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ticonsiglio.com":[["aopr","jQuery.adblock"]],"tivocommunity.com":[["rmnt","script","html-load.com"]],"tjcruiserforums.com":[["rmnt","script","html-load.com"]],"toolxox.com":[["rmnt","script","/adblock/i"],["no-fetch-if","googlesyndication"]],"tophotsprings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"topsoccerblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tornadopath.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"totallysnookered.com":[["rmnt","script","await eval"]],"toureiffel.paris":[["set","pa","{}"]],"tourporno.com":[["noeval"],["aopr","Aloader.serve"]],"traingon.top":[["acs","WebAssembly","atob"],["rmnt","script",".offsetHeight"]],"travelcaffeine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tripmemos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ts-mpegs.com":[["acs","document.querySelectorAll","popMagic"]],"tube-teen-18.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"tubepornasian.com":[["noeval"],["aopr","Aloader.serve"]],"tubepornnow.com":[["acs","document.querySelectorAll","popMagic"]],"tune.pk":[["set","ad_blocker","false"]],"turkdown.com":[["aopr","AaDetector"]],"tvn.pl":[["json-prune","movie.advertising.ad_server playlist.movie.advertising.ad_server"]],"tvseries.in":[["ra","onclick","[onclick*=\"window.open\"]","stay"]],"twokooksinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ucfknights.com":[["set","blockAdBlock","trueFunc"]],"ujszo.com":[["set","Drupal.behaviors.adBlockerPopup","null"]],"uk-mkivs.net":[["rmnt","script","html-load.com"]],"uniladtech.com":[["rmnt","script","\"nowprocket\""]],"uoflsports.com":[["set","blockAdBlock","trueFunc"]],"urbancowgirllife.com":[["rmnt","script","/__adblocker|html-load/"]],"usi32.com":[["rmnt","script","html-load.com"]],"utahconcealedcarry.com":[["rmnt","script","html-load.com"]],"vancouverwithlove.com":[["rmnt","script","/__adblocker|html-load/"]],"vedshar.com":[["acs","Math","break;case $."]],"vegamovies3.org":[["nowoif"]],"veganfoodlover.com":[["rmnt","script","/__adblocker|html-load/"]],"vibe.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"vidaextra.com":[["set","hasAdblocker","true"]],"vide0.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","WebAssembly","atob"],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"videoseyred.in":[["nowoif"]],"vidomo.xyz":[["acs","Math","break;case $."]],"virginmediatelevision.ie":[["set","google.ima.dai","{}"],["no-xhr-if","/froloa.js"]],"visatraveler.com":[["rmnt","script","/__adblocker|html-load/"]],"vitamiiin.com":[["rmnt","script","/==undefined.*body/"]],"vods.tv":[["no-fetch-if","doubleclick"],["nostif","_ET"]],"voici.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"],["set","DD_RUM.addTiming","noopFunc"],["no-xhr-if","doubleclick"]],"volkswagenownersclub.com":[["rmnt","script","html-load.com"]],"walderwellness.com":[["rmnt","script","/__adblocker|html-load/"]],"walkingonsunshinerecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"walkingstickforum.com":[["rmnt","script","html-load.com"]],"wanderingindisney.com":[["rmnt","script","/__adblocker|html-load/"]],"watch32.sx":[["acs","EventTarget.prototype.addEventListener","delete window"]],"watchhentai.net":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"],["rmnt","script","AdBlock"]],"watchx.top":[["no-fetch-if","googlesyndication"],["set","S_Popup","10"]],"wcnc.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"webcras.com":[["noeval-if","/chp_?ad/"]],"webnovel.com":[["set","adblockSuspected","false"]],"wetterauer-zeitung.de":[["nostif",".call(null)","10"]],"wfmachines.com":[["rmnt","script","html-load.com"]],"wgzimmer.ch":[["aopr","adBlockDetected"]],"whatgame.xyz":[["noeval-if","/chp_?ad/"],["nano-stb","/.?/","*","0.001"],["nano-sib","/.?/","*","0.001"]],"whatsinthepan.com":[["rmnt","script","/__adblocker|html-load/"]],"wheretianatravels.com":[["rmnt","script","/__adblocker|html-load/"]],"whippedcreamsounds.com":[["rmnt","script","/__adblocker|html-load/"]],"whitelacecottage.com":[["rmnt","script","/__adblocker|html-load/"]],"whitelightsonwednesday.com":[["rmnt","script","/__adblocker|html-load/"]],"whollytasteful.com":[["rmnt","script","/__adblocker|html-load/"]],"wifemamafoodie.com":[["rmnt","script","/__adblocker|html-load/"]],"wifi4games.com":[["acs","JSON.parse","break;case $."]],"wikirise.com":[["acs","decodeURIComponent","ai_"]],"wltx.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"woiden.id":[["no-fetch-if","googlesyndication"]],"wordscookiesanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"worldwildschooling.com":[["rmnt","script","/__adblocker|html-load/"]],"wr.de":[["nostif",".call(null)","10"]],"wyborcza.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"x-tg.tube":[["aeld","click","popMagic"],["acs","WebAssembly","atob"]],"x-x-x.video":[["acs","WebAssembly","atob"],["rmnt","script","/popMagic|pop1stp/"],["rmnt","script","decodeURIComponent"]],"x18hub.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"xanimehub.com":[["acs","document.querySelectorAll","popMagic"],["nosiif","visibility","1000"]],"xca.cymru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.addEventListener","/popup/i"],["rmnt","script",".onerror"]],"xcums.com":[["aopr","encodeURIComponent"]],"xh.video":[["nowoif"]],"xhwebsite.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmateur.com":[["set","flashvars.protect_block",""],["set","flashvars.popunder_url",""],["set","flashvars.video_click_url",""],["aopr","adConfig"]],"xnxx-downloader.net":[["acs","document.querySelectorAll","popMagic"]],"xrv.org.uk":[["rmnt","script","html-load.com"]],"xsexpics.com":[["acs","document.querySelectorAll","popMagic"],["aeld","","pop"]],"xxxdominicana.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"xxxyoungtv.com":[["aopr","popit"],["aeld","popstate","noPop"]],"yesmovies123.me":[["acs","String.fromCharCode","/btoa|break/"]],"yourguardianchef.com":[["rmnt","script","/__adblocker|html-load/"]],"ytpng.net":[["no-fetch-if","ads"]],"zafiraowners.co.uk":[["rmnt","script","html-load.com"]],"zeenews.india.com":[["no-fetch-if","adsbygoogle"]],"zeroupload.com":[["rmnt","script","adblock"]],"zestforbaking.com":[["rmnt","script","/__adblocker|html-load/"]],"zone-telechargement.ing":[["acs","setTimeout","aclib.runPop"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
