/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"01fmovies.com":[["aopr","AaDetector"],["aeld","DOMContentLoaded","checkVPN"]],"101kks.com":[["rmnt","script","/popMagic|pop1stp/"]],"103.74.5.104":[["noeval-if","/chp_?ad/"]],"123strippoker.com":[["aopr","loadTool"]],"1lumen.com":[["rmnt","script","/__adblocker|html-load/"]],"1pack1goal.com":[["set","blockAdBlock","trueFunc"]],"1vid1shar.space":[["acs","document.documentElement","break;case $."]],"23jumpmanstreet.com":[["rmnt","script","/__adblocker|html-load/"]],"2xkofire.com":[["rmnt","script","/__adblocker|html-load/"]],"4chanarchives.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"4drumkits.com":[["noeval-if","/chp_?ad/"]],"5boysbaker.com":[["rmnt","script","/__adblocker|html-load/"]],"7mm003.cc":[["nowoif"]],"8phim1.net":[["acs","addEventListener","HTMLAllCollection"]],"a5oc.com":[["rmnt","script","html-load.com"]],"abc27.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"abseits-ka.de":[["nostif",".call(null)","10"]],"activewild.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adayinourshoes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aerotrader.com":[["rmnt","script","html-load.com"]],"afilmyhouse.blogspot.com":[["rmnt","script",";}}};break;case $."],["acs","Math","break;case $."],["nowoif"]],"agefi.fr":[["nostif","{r()","0"]],"ainonline.com":[["no-xhr-if","adsbygoogle"]],"aipebel.com":[["rmnt","script","deblocker"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"]],"airsoftmilsimnews.com":[["set","td_ad_background_click_link","undefined"]],"alfabb.com":[["rmnt","script","html-load.com"]],"alittlebitofeverythingblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alliannaskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allthingsmamma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amanguides.com":[["rmnt","script","AdbModel"],["no-fetch-if","ads"],["rmnt","script","deblocker"]],"analsexstars.com":[["nowoif"]],"andani.net":[["noeval-if","/chp_?ad/"]],"androidgreek.com":[["aopr","adBlockDetected"]],"animalspot.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"animefreak.to":[["no-xhr-if","googlesyndication"]],"animenexus.in":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif","_blank"]],"animeworld.tv":[["acs","JSON.parse","break;case $."]],"anitube.us":[["acs","EventTarget.prototype.addEventListener","delete window"]],"anizm.net":[["acs","WebAssembly","atob"]],"annoncesescorts.com":[["acs","document.querySelectorAll","popMagic"]],"aotonline.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"apeachyplate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"apkmb.com":[["nano-sib","show_download_links"]],"app.blubank.com":[["set","navigator.standalone","true"]],"app.plex.tv":[["json-prune","MediaContainer.Metadata.[].Ad"]],"applegreencottage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arabstd.com":[["noeval-if","/chp_?ad/"]],"ashcroftfamilytable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asimplepantry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"askushowto.com":[["noeval-if","/chp_?ad/"]],"atomtt.com":[["acs","setTimeout","admc"]],"audiotools.blog":[["rmnt","script","deblocker"]],"autonews.com":[["acs","admiral"]],"autotrader.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"av01.media":[["acs","document.createElement","sliding"],["ra","onclick","a[onclick]"]],"ayo24.id":[["aopr","adsBlocked"]],"azmovies.to":[["acs","atob","_0x"]],"b2bhint.com":[["aopr","google_jobrunner"],["aopr","popupBlocker"]],"badgerofhonor.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"bakai.org":[["aeld","load","nextFunction"]],"bamahammer.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"barefootinthepines.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barleyandbirch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barstoolsports.com":[["set-cookie","dummy","1","","reload","1"]],"bedfordtoday.co.uk":[["rmnt","script","await eval"]],"bestdesserts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestgames.com":[["nostif","/Adb|moneyDetect/"]],"bestofvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"biblemoneymatters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bigboobs.com.es":[["acs","document.querySelectorAll","popMagic"]],"bigconv.com":[["nowoif"]],"bigcountryhomepage.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"bigdata.rawlazy.si":[["nano-sib","counter","*","0.001"]],"bigheartlittlestar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bigshare.io":[["rmnt","script","window.open"],["nowoif"]],"bitchute.com":[["json-prune","show_adverts"],["no-xhr-if","googlesyndication"]],"blog.jp":[["rmnt","script","html-load.com"]],"blogo.jp":[["rmnt","script","html-load.com"]],"bluegraygal.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"boersennews.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"bos21.site":[["acs","WebAssembly","atob"]],"boundlessnecromancer.com":[["noeval-if","/chp_?ad/"]],"boundlessroads.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxingschedule.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"braziliankitchenabroad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brokenovenbaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brutalanimalsfuck.com":[["aopr","popit"],["aeld","popstate","noPop"]],"btvplus.bg":[["no-xhr-if","googlesyndication"],["no-fetch-if","googlesyndication"],["no-fetch-if","imasdk"],["rmnt","script","onerror"],["set","playerEnhancedConfig.run","throwFunc"]],"butterandbliss.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"butterflyidentification.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cafenau.com":[["noeval-if","/chp_?ad/"]],"calbears.com":[["set","blockAdBlock","trueFunc"]],"calculateme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"canarystreetcrafts.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cancerrehabpt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"careeralley.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"casecoltingersoll.com":[["rmnt","script","html-load.com"]],"catster.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cctvwiki.com":[["aost","setTimeout","ads"]],"cdimg.blog.2nt.com":[["acs","document.querySelectorAll","popMagic"]],"ceesty.com":[["set","adsBlockerDetector","noopFunc"],["set","globalThis","null"],["aopr","NREUM"],["acs","Math","break;case $."]],"championpeoples.com":[["noeval-if","/chp_?ad/"]],"chawomenshockey.com":[["set","blockAdBlock","trueFunc"]],"cherryonmysundae.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chevyblazer.org":[["rmnt","script","html-load.com"]],"christianity.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"chroniclelive.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"chunkyinkentucky.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"churchstaffing.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"cindermint.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinefreak.net":[["aost","Promise.all","imageProbe"],["nowoif","_blank"]],"circuitsforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cluckclucksew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cntraveler.com":[["nofab"]],"comeletspray.com":[["noeval-if","/chp_?ad/"]],"commercialtrucktrader.com":[["rmnt","script","html-load.com"]],"connoisseurusveg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"controlbooth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookiesfordays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithria.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cornerstoneconfessions.com":[["aopr","__eiPb"]],"costaricavibes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"couponingtodisney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cpscan.xyz":[["noeval-if","/chp_?ad/"]],"cr7-soccer.store":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"creativebusybee.com":[["aopw","checkAds"]],"creativecertificates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cricket12.com":[["noeval-if","/chp_?ad/"]],"crystal-launcher.pl":[["acs","parseInt","break;case $."]],"ctrmarketingsolutions.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"curlsbot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutyion.com":[["aeld","click","shouldOpenPopUp"]],"d000d.com":[["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dafreeporn.com":[["aopw","__spotSettings"]],"dailyecho.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"dailygeekshow.com":[["aopr","jQuery.hello"]],"daniellewalker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"darngoodveggies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dashofjazz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dayoftheweek.org":[["nosiif","visibility","1000"]],"demae-can.com":[["ra","data-trm-action|data-trm-category|data-trm-label",".trm_event","stay"]],"depo-program.blogspot.com":[["acs","addEventListener","google_ad_client"]],"desktopsolution.org":[["noeval-if","/chp_?ad/"]],"destinationsjourney.com":[["noeval-if","/chp_?ad/"]],"devsoftwr.com":[["noeval-if","/chp_?ad/"]],"diarioinformacion.com":[["set","pr_okvalida","true"]],"dichvureviewmap.com":[["no-fetch-if","googlesyndication"]],"didyouknowfacts.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"dieselramforum.com":[["rmnt","script","html-load.com"]],"dispatch.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dissmercury.co.uk":[["set","adLight","true"]],"diybunker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diycandy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diymobileaudio.com":[["rmnt","script","html-load.com"]],"dj-figo.com":[["aopr","adBlockDetected"]],"dodgedartforumz.com":[["rmnt","script","html-load.com"]],"dodgetalk.com":[["rmnt","script","html-load.com"]],"dokumen.tips":[["nano-stb","","","0.02"]],"douxporno.com":[["acs","document.querySelectorAll","popMagic"]],"downloads.wegomovies.com":[["noeval-if","/chp_?ad/"]],"downredbuddrive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dragonball-zxk.com":[["noeval-if","/chp_?ad/"]],"drakerelays.org":[["set","blockAdBlock","trueFunc"]],"dramaviki.com":[["noeval-if","/chp_?ad/"]],"duggarfamilyblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dunkorthree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"easybudgetrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"eatmovemake.com":[["rmnt","script","/__adblocker|html-load/"]],"eatplayshae.com":[["rmnt","script","/__adblocker|html-load/"]],"ebookbb.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"editions-actu.org":[["noeval-if","/chp_?ad/"]],"eightforestlane.com":[["rmnt","script","/__adblocker|html-load/"]],"emergencyprepguy.com":[["rmnt","script","/__adblocker|html-load/"]],"enciclopediaonline.com":[["aost","String.prototype.charCodeAt","ai_"]],"encurtandourl.com":[["acs","document.documentElement","break;case $."],["nostif","getComputedStyle","250"],["nostif","nextFunction"],["set","blurred","false"]],"entertubeporn.com":[["noeval"],["aopr","Aloader.serve"]],"eroticmoviesonline.me":[["nowebrtc"],["rmnt","script","/window\\[\\'open\\'\\]/"]],"erotikclub35.pw":[["noeval-if","/chp_?ad/"]],"errenskitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"escapeforum.org":[["rmnt","script","/__adblocker|html-load/"]],"eurogamer.de":[["aopr","_sp_.mms.startMsg"]],"eurointegration.com.ua":[["nostif","error-report.com"]],"exalink.fun":[["set","blurred","false"]],"facilycasero.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"falmouthpacket.co.uk":[["set","adLight","true"]],"fandom.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script",").join(String.fromCharCode"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["set","RLCONF.wgAdShieldActive","false"],["set","wgAffiliateEnabled","false"],["set","optimizely","{}"],["set","optimizely.initialized","true"]],"fantacalcio.it":[["nostif",".offsetHeight","100"]],"farmeramania.de":[["acs","$","show"]],"feastandwest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feelslikehomeblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fehmarn24.de":[["nostif",".call(null)","10"]],"fifties-beat.blogspot.com":[["nostif","bait"]],"fikfak.net":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"fikiri.net":[["nostif","mdp"]],"fileguard.cc":[["nosiif","?key="]],"filmyzones.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"],["aeld","DOMContentLoaded","src=atob"],["nostif","ai_adb"]],"financid.com":[["noeval-if","/chp_?ad/"]],"firstcoastnews.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"flixbaba.com":[["no-fetch-if","doubleclick"]],"flixrave.me":[["rmnt","script","adserverDomain"],["no-fetch-if","="]],"floridaconcealedcarry.com":[["rmnt","script","html-load.com"]],"fluentu.com":[["aopr","__eiPb"]],"flyanimes.cloud":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fodmapeveryday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fooddoodles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodtruckempire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballleagueworld.co.uk":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"foragersofhappiness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fordfullsize.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"formatlibrary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["no-fetch-if","doubleclick"]],"fouraroundtheworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fourfourtwo.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"fox59.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"foxaholic.com":[["noeval-if","/chp_?ad/"]],"foxnxx.com":[["acs","document.querySelectorAll","popMagic"]],"foxsports.com":[["json-prune","ads"]],"freeadultvideos.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"freescorespiano.com":[["noeval-if","/chp_?ad/"]],"freestyletravelers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frugallivingmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frugalreality.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fuck-xnxx.com":[["aopr","popit"],["aeld","popstate","noPop"]],"gamehub.cam":[["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","click","window.open"]],"gamejksokuhou.com":[["rmnt","script","html-load.com"]],"gamerempire.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"games.get.tv":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.mercedsunstar.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"garaveli.de":[["acs","addEventListener","google_ad_client"]],"garaz.cz":[["rmnt","script","/adBottomWrap|doubleclick/"],["aopr","shaman"]],"gcinee.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopw","ai_front"],["rmnt","script","offsetHeight"]],"gearthhacks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"geniussolutions.co":[["no-fetch-if","googlesyndication"],["aost","document.getElementById","adsBlocked"]],"gentlenursery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gesund-vital.online":[["noeval-if","/chp_?ad/"]],"ghscanner.com":[["aeld","load","abDetectorPro"],["no-fetch-if","googlesyndication"]],"girlmms.com":[["nowoif"]],"globelempire.com":[["noeval-if","/chp_?ad/"]],"gloryshole.com":[["acs","document.dispatchEvent"]],"goexplorers.com":[["set","blockAdBlock","trueFunc"]],"gogriffs.com":[["set","blockAdBlock","trueFunc"]],"goingawesomeplaces.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goodgourds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goosehuntingchat.com":[["rmnt","script","html-load.com"]],"gotgayporn.com":[["aopr","decodeURI"]],"govandals.com":[["set","blockAdBlock","trueFunc"]],"graphicgoogle.com":[["aost","setTimeout","adsBlocked"]],"greenbeautymama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greenchildmagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"growingplay.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grumpyrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guided.news":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guidetnt.com":[["set","isAdBlockActive","false"]],"gvnvh.net":[["noeval-if","/chp_?ad/"]],"gymnaverse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hackshort.me":[["acs","document.oncontextmenu"],["acs","document.onmousedown"]],"halifaxcourier.co.uk":[["rmnt","script","await eval"]],"handypornos.net":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"happilyevermom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"harimanga.com":[["aeld","","break;case $."],["acs","document.documentElement","break;case $."]],"hausandhand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healingtomato.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthiersteps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthyfitnessmeals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthygreenkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthynibblesandbits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthyrecipesblogs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hellocreativefamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai-hot.com":[["acs","document.querySelectorAll","popMagic"]],"hentai20.io":[["acs","document.querySelectorAll","popMagic"]],"hentaicloud.com":[["aeld","click","open"],["set","decodeURI","noopFunc"],["aopr","TotemToolsObject"],["aopr","AaDetector"]],"hentais.tube":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","checkCookieClick"]],"hermitcrabanswers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heyitsfree.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hinoforums.com":[["rmnt","script","html-load.com"]],"hipsonyc.com":[["nano-stb","/getElementById|gotoo/","*","0.02"],["set","navigator.brave","undefined"]],"historic-uk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hochi.news":[["rmnt","script","html-load.com"]],"holaporno.xxx":[["acs","document.querySelectorAll","popMagic"]],"homegrounds.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hondaforeman.com":[["rmnt","script","html-load.com"]],"honestandtruly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hormuz.data-tracking.net":[["nostif","offsetHeight"]],"hostingreviews24.com":[["noeval-if","/chp_?ad/"]],"hotcountry1035.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotshag.com":[["acs","document.querySelectorAll","popMagic"]],"hotvehs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houndgames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtocivil.com":[["noeval-if","/chp_?ad/"]],"howtodispose.info":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hubcdn.vip":[["aeld","","history.go"]],"hurawatchz.to":[["acs","document.documentElement","break;case $."],["acs","addEventListener","HTMLAllCollection"]],"icutlink.com":[["aopr","open"],["set","blurred","false"],["nano-sib","time"],["set","sec","0"]],"ideasfornames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iedprivatedqu.com":[["nowoif"]],"igg-games.com":[["acs","addEventListener","document.createElement"],["aopw","btoa"],["ra","srcdoc","iframe"],["rmnt","script",";}}};break;case $."]],"ikindlebooks.com":[["acs","JSON.parse","break;case $."]],"ilpescara.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"imgflare.com":[["acs","document.querySelectorAll","popMagic"]],"imightbefunny.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"incgrepacks.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"indobo.com":[["nowoif","_blank"]],"inspiringmomlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"intelligence-console.com":[["noeval-if","/chp_?ad/"]],"interviewpenguin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ithinkwecouldbefriends.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itinyhouses.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iwantmature.com":[["aopr","document.dispatchEvent"]],"jamaicanfoodsandrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"jamespatterncamera.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"japanporn.tv":[["acs","decodeURI","decodeURIComponent"],["acs","Math.floor","ExoLoader"]],"japanxxxworld.com":[["aopr","popit"],["aeld","popstate","noPop"]],"javhdporn.net":[["acs","document.querySelectorAll","popMagic"],["set","clientSide.adbDetect","noopFunc"]],"javpornfull.com":[["acs","document.querySelectorAll","popMagic"]],"jerseydigs.com":[["rmnt","script","/__adblocker|html-load/"]],"jessieathome.com":[["rmnt","script","/__adblocker|html-load/"]],"jetsetchristina.com":[["rmnt","script","/__adblocker|html-load/"]],"jezebel.com":[["set","ga","noopFunc"]],"jillianharris.com":[["rmnt","script","/__adblocker|html-load/"]],"jiujitsucraft.com":[["rmnt","script","/__adblocker|html-load/"]],"joongdo.co.kr":[["noeval-if","/content-loader\\.com|css-load\\.com|html-load\\.com/"],["rmnt","script","KCgpPT57bGV0IGU"]],"joybileefarm.com":[["rmnt","script","/__adblocker|html-load/"]],"joymaxtr.net":[["acs","RegExp","navigator.userAgent"]],"jptorrent.org":[["nano-stb"]],"juegosdetiempolibre.org":[["no-fetch-if","method:HEAD"]],"juliewomanwish.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"justagirlblog.com":[["rmnt","script","/__adblocker|html-load/"]],"jz-eats.com":[["rmnt","script","/__adblocker|html-load/"]],"k-bikes.com":[["rmnt","script","html-load.com"]],"k1nk.co":[["aeld","click","popunder"],["nowoif"],["set","console.clear","noopFunc"]],"k9ofmine.com":[["rmnt","script","/__adblocker|html-load/"]],"kansas.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"kawasakiworld.com":[["rmnt","script","html-load.com"]],"kayoanime.com":[["set","tie.ad_blocker_detector","false"]],"kenarry.com":[["rmnt","script","/__adblocker|html-load/"]],"kickbd.org":[["set","HTMLScriptElement.prototype.onerror","undefined"],["set","__kbAdBait","true"]],"kickrunners.com":[["rmnt","script","html-load.com"]],"kimchimari.com":[["rmnt","script","/__adblocker|html-load/"]],"kindergartenworksheetsandgames.com":[["rmnt","script","/__adblocker|html-load/"]],"kindergeld.org":[["nostif",".call(null)","10"]],"kingshotcalculator.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchensanity.com":[["rmnt","script","/__adblocker|html-load/"]],"kiwifamilies.co.nz":[["rmnt","script","/__adblocker|html-load/"]],"klaustube.com":[["aopr","document.dispatchEvent"]],"knowyourphrase.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"kommandotech.com":[["rmnt","script","/__adblocker|html-load/"]],"konten.co.id":[["nostif","overlay","2000"]],"kontrolkalemi.com":[["aopr","adBlockDetected"]],"kpkuang.org":[["nostif","_0x"]],"kprofiles.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"kryptografie-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"ktalnews.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kwgn.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kxbxfm.com":[["set","google_unique_id","6"]],"lavoixdux.com":[["set","is_adblocked","false"]],"lawyersgunsmoneyblog.com":[["rmnt","script","html-load.com"]],"lesfoodies.com":[["nostif",".call(null)","10"]],"letribunaldunet.fr":[["nostif","adb","0"]],"librarium-online.com":[["rmnt","script","html-load.com"]],"lifemadesweeter.com":[["rmnt","script","/__adblocker|html-load/"]],"limiteddollqjc.shop":[["aost","document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"]],"lineupexperts.com":[["rmnt","script","/account_ad_blocker|tmaAB/"]],"link.snipcash.com":[["nowoif","_blank"],["rmnt","script","/urlPC|popunderShown|window\\.open/"],["set","go_popup","{}"],["set","blurred","false"]],"listentotaxman.com":[["rmnt","script","html-load.com"]],"littleworldofwhimsy.com":[["rmnt","script","/__adblocker|html-load/"]],"live.arynews.tv":[["set","Object.prototype.adOnAdBlockPreventPlayback","false"]],"livesport.ws":[["aopr","MessageChannel"]],"livesport24.net":[["acs","Math","break;case $."],["acs","setTimeout","admc"],["aopr","Adcash"]],"lnbzi.com":[["nowoif"],["set","blurred","false"]],"los40.com":[["ra","class|style","div[id^=\"los40_gpt\"]"],["set","huecosPBS.nstdX","null"],["no-fetch-if","googlesyndication"],["set","DTM.trackAsyncPV","noopFunc"]],"lotteryusa.com":[["rmnt","script","/__adblocker|html-load/"]],"lotusgamehd.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"]],"luckybelly.com":[["rmnt","script","/__adblocker|html-load/"]],"lustesthd.lat":[["noeval-if","/chp_?ad/"]],"lutontoday.co.uk":[["rmnt","script","await eval"]],"macombdaily.com":[["set","CnnXt.Event.fire","noopFunc"]],"macworld.co.uk":[["nostif",".call(null)","10"]],"mafiatown.pl":[["rmnt","script","AreLoaded"]],"magnetoforum.com":[["rmnt","script","html-load.com"]],"mangaruu.com":[["no-fetch-if","/\\?abg=|adsbygoogle|tpc\\.googlesyndication\\.com|doubleclick\\.net|googleadservices\\.com/"]],"manhastro.net":[["noeval-if","/chp_?ad/"]],"manpeace.org":[["aopr","document.write"]],"martysmusings.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mathcrave.com":[["aeld","load","abDetectorPro"],["noeval-if","/chp_?ad/"]],"maths.news":[["no-fetch-if","googlesyndication"]],"maturetubehere.com":[["set","flashvars.adv_pre_vast",""],["aopw","__spotSettings"],["aeld","/click|mousedown/","catch"]],"mein-kummerkasten.de":[["nostif",".call(null)","10"]],"meladorascreations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"melissassouthernstylekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meong.club":[["nowoif","_blank"]],"miamiherald.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"midwesternholidays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"milfpussy-sex.com":[["noeval"],["aopr","Aloader.serve"]],"milfxxxpussy.com":[["aopr","popit"],["aeld","popstate","noPop"]],"minddesignclub.org":[["noeval-if","/chp_?ad/"]],"minhatela.xyz":[["nostif","remove()"],["nosiif","(!1)"]],"mixrootmods.com":[["no-fetch-if","googlesyndication"]],"mjsoffthehookdesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mlbstreams.ai":[["rmnt","script","adserverDomain"]],"mobafire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"modyster.com":[["noeval-if","/chp_?ad/"]],"montanaowners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mostlovelythings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"movies4us.co":[["acs","addEventListener","HTMLAllCollection"]],"moviewr.com":[["acs","parseInt","break;case $."]],"movix.blog":[["nowoif"]],"movstube.net":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"]],"mrjav.net":[["acs","document.querySelectorAll","popMagic"]],"mrsmerry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"msumavericks.com":[["set","blockAdBlock","trueFunc"]],"mummumtime.com":[["noeval-if","/chp_?ad/"]],"myballard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myplexi.fr":[["aeld","click","location"]],"namiko.net":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"naplesnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"nativesurge.top":[["nowoif"]],"ncdexlive.org":[["acs","jQuery","No"]],"newlifeonahomestead.com":[["rmnt","script","/__adblocker|html-load/"]],"nextlevelgents.com":[["rmnt","script","/__adblocker|html-load/"]],"nextofwindows.com":[["rmnt","script","/__adblocker|html-load/"]],"ngemu.com":[["rmnt","script","html-load.com"]],"nhentai.net":[["nowoif"],["set","_n_app.popunder","null"],["set","_n_app.options.ads.show_popunders","false"],["set","N_BetterJsPop.object","{}"]],"nimegami.id":[["aopr","btoa"]],"nomnompaleo.com":[["rmnt","script","/__adblocker|html-load/"]],"northwestforkids.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"noteownersclub.co.uk":[["rmnt","script","html-load.com"]],"notimeforflashcards.com":[["rmnt","script","/__adblocker|html-load/"]],"novel-gate.com":[["noeval-if","/chp_?ad/"]],"novelcrow.com":[["acs","WebAssembly","atob"]],"nudostar.com":[["aopw","__aaZoneid"],["acs","$","wbar"]],"nupload.top":[["rmnt","script","wpadmngr.com"]],"nurulislam.org":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"ocnpj.com":[["acs","Math","break;case $."]],"odiadance.com":[["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["noeval-if","/chp_?ad/"],["rmnt","script","navigator.brave"]],"officialdata.org":[["rmnt","script","/__adblocker|html-load/"]],"oilburners.net":[["rmnt","script","/__adblocker|html-load/"]],"onebalancedlife.com":[["rmnt","script","/__adblocker|html-load/"]],"onehotoven.com":[["rmnt","script","/__adblocker|html-load/"]],"onepace.co":[["nowoif"]],"onesixthwarriors.com":[["rmnt","script","html-load.com"]],"onet.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"ontools.net":[["aeld","load","blocker"]],"organisemyhouse.com":[["rmnt","script","/__adblocker|html-load/"]],"ornithology.com":[["rmnt","script","/__adblocker|html-load/"]],"otakuporn.com":[["acs","document.querySelectorAll","popMagic"]],"ozbargain.com.au":[["nostif","OzB.adb"]],"ozulscansen.com":[["set","checkAdBlockeraz","noopFunc"]],"pagalworld.us":[["nowoif"],["aeld","DOMContentLoaded","anchor.href"]],"pakkotoisto.com":[["acs","$","undefined"],["rmnt","script","void 0||window,"]],"pandajogosgratis.com.br":[["nostif","()","2500"]],"panelprograms.blogspot.com":[["rmnt","script","antiAdBlockerHandler"]],"panlasangpinoy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"parking-map.info":[["noeval-if","/chp_?ad/"]],"passatworld.com":[["rmnt","script","html-load.com"]],"pcbeta.com":[["aost","document.createElement","make_rand_div"]],"peakdistrictkids.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peppe8o.com":[["aopr","b2a"]],"persianhive.com":[["no-xhr-if","adsbygoogle"]],"petitfute.com":[["rmnt","script","html-load.com"]],"phototrans.net":[["rmnt","script","!adsbygoogle.loaded"]],"picks.my":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"pinchmeimeating.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pinoyalbums.com":[["aeld","","adb"]],"pioneerforums.com":[["rmnt","script","html-load.com"]],"pjip.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"player4u.xyz":[["nowoif","","1"]],"playmate.to":[["nostif","/getComputedStyle|offsetHeight/"]],"playpartypin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playporngames.com":[["aeld","DOMContentLoaded","window.open"]],"pleated-jeans.com":[["aopr","HTMLIFrameElement"]],"poemsource.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"polarisatvforums.com":[["rmnt","script","html-load.com"]],"politico.com":[["set","generateGalleryAd","noopFunc"]],"pondit.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"]],"porn0video.com":[["acs","document.querySelectorAll","popMagic"]],"porn4fans.me":[["nostif","offsetWidth","2000"]],"porn77.info":[["acs","document.querySelectorAll","popMagic"]],"porngun.net":[["acs","document.querySelectorAll","popMagic"]],"pornmom.net":[["acs","document.querySelectorAll","popMagic"]],"pornoenspanish.es":[["noeval-if","/chp_?ad/"],["rmnt","script","popMagic"]],"pornopics.site":[["acs","document.querySelectorAll","popMagic"]],"porntape.net":[["acs","document.querySelectorAll","popMagic"]],"portmiamiwebcam.com":[["nostif","innerHTML"]],"pressurecookrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pricearchive.org":[["set-cookie","aalset","1"]],"princesspinkygirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"progameguides.com":[["aopr","googletag"]],"promobil.de":[["nostif",".call(null)","10"]],"protopage.com":[["aopr","pageParams.dispAds"]],"pupupul.site":[["aopr","popUrl"]],"purplex.app":[["aeld","mouseup","open"]],"puzzlegarage.com":[["rmnt","script","html-load.com"]],"pynative.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"r32oc.com":[["rmnt","script","html-load.com"]],"rachelteodoro.com":[["rmnt","script","/__adblocker|html-load/"]],"rachelwojo.com":[["rmnt","script","/__adblocker|html-load/"]],"rachnacooks.com":[["rmnt","script","/__adblocker|html-load/"]],"radio-italiane.it":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-singapore.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.net":[["nostif",".call(null)","10"]],"radioindia.in":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"raffamusadesigns.com":[["rmnt","script","/__adblocker|html-load/"]],"rakuten.tv":[["no-xhr-if","/youboranqs01|spotx|springserve/"]],"ramblinfan.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"ramrebelforum.com":[["rmnt","script","html-load.com"]],"rbtpracticeexam.com":[["rmnt","script","/__adblocker|html-load/"]],"read-onepiece.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"readingchronicle.co.uk":[["set","adLight","true"]],"readygamesurvive.com":[["rmnt","script","/__adblocker|html-load/"]],"realmoasis.com":[["aeld","click","openPopupForChapter"],["aopr","Object.prototype.popupOpened"]],"rebahin.pw":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"receive-sms-online.info":[["aopr","ga.length"]],"recherche-ebook.fr":[["set","nitroAds.abp","true"]],"recipesfromleftovers.com":[["rmnt","script","/__adblocker|html-load/"]],"reddit-streams.online":[["acs","EventTarget.prototype.addEventListener","delete window"]],"redtedart.com":[["rmnt","script","/__adblocker|html-load/"]],"renaldiethq.com":[["rmnt","script","/__adblocker|html-load/"]],"repack-games.com":[["acs","document.documentElement","break;case $."],["rmnt","script","ai_adb"],["aeld","click","window.open"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>/g","excludes","/^self\\.__next_f\\.push/"]],"repairwin.com":[["rmnt","script","/__adblocker|html-load/"]],"reportera.co.kr":[["nostif","error-report.com"]],"reptilecraze.com":[["rmnt","script","/__adblocker|html-load/"]],"retail-insider.com":[["rmnt","script","/__adblocker|html-load/"]],"reviewrate.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"rlxtech24h.com":[["acs","document.createElement","AdBlock"]],"roblox.com":[["json-prune","sorts.[].recommendationList.[-].contentMetadata.EncryptedAdTrackingData"]],"rocketryforum.com":[["rmnt","script","/__adblocker|html-load/"]],"romfordrecorder.co.uk":[["set","adLight","true"]],"romhustler.org":[["nano-sib","timer.remove"]],"rottenlime.pw":[["noeval-if","/chp_?ad/"]],"rubystm.com":[["rmnt","script","wpadmngr.com"],["set","cRAds","false"],["aopw","showADBOverlay"],["acs","WebAssembly","atob"]],"runnersforum.co.uk":[["rmnt","script","html-load.com"]],"runningonrealfood.com":[["rmnt","script","/__adblocker|html-load/"]],"rzrforums.net":[["rmnt","script","html-load.com"]],"s.sseluxx.com":[["nano-sib"]],"sacbee.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"samovies.net":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"satcesc.com":[["nostif","css_class"],["noeval-if","/chp_?ad/"]],"saveshared.com":[["aopr","String.fromCharCode"]],"sawsonskates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"schoolwix.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scimagojr.com":[["aeld","load","adblock"]],"sembunyi.in":[["aopr","popjs"]],"sempredirebanzai.it":[["no-fetch-if","method:HEAD"]],"serengo.net":[["nostif","checkPub","6000"]],"seriesmetro.net":[["aopr","afStorage"]],"sethphat.com":[["nano-stb","total","1000","0.001"]],"sexteenxxxtube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"sexuhot.com":[["aopw","atOptions"],["aopr","history.replaceState"]],"sexyoungtube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"shemalegape.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"shush.se":[["set","check","true"]],"simplebakingwithjolene.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplyhomecooked.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sincerelysarad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sinemalar.com":[["rmnt","script","await eval"]],"singaporeanmalaysianrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"singlehoroskop-loewe.de":[["nostif","displayMessage","2000"]],"sitefilme.com":[["nowoif"]],"sizecharts.net":[["rmnt","#text","adinserter"]],"skinnytaste.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slowcookerclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slowcookerfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smitefire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soapoperadigest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sofwaremania.blogspot.com":[["nano-stb"]],"southgeorgiastyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southpark.cc.com":[["no-fetch-if","dai_iframe"]],"specialstage.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"spox.com":[["nostif",".call(null)","10"]],"spreadsheetpoint.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"squallchannel.com":[["rmnt","script","html-load.com"]],"squeaksandnibbles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"srcimdb.com":[["nano-sib","counter"]],"ssstik.io":[["no-xhr-if","googlesyndication"]],"ssyoutube.com":[["aeld","","break;case $."],["nowoif"]],"stagatv.com":[["acs","document.documentElement","break;case $."]],"stagatvfiles.com":[["acs","document.documentElement","break;case $."],["ra","onclick","button[onclick^=\"window.open\"]"],["nowoif"]],"stageagent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stagemilk.com":[["aopr","wpsite_clickable_data"]],"statesmanjournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"stbemuiptv.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"],["noeval-if","js_func_decode_base_64"]],"stellanspice.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stfly.me":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"stingerforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stream4free.live":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"streamingnow.mov":[["aopr","aclib"],["rmnt","script","/popundersPerIP|adserverDomain|wpadmngr/"],["nowoif"]],"strmup.cc":[["nowoif"]],"succulentcity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugarsaltmagic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"surf-reports.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sussexlife.co.uk":[["set","adLight","true"]],"suvvehicle.com":[["noeval-if","/chp_?ad/"]],"suzuki-forums.net":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sweetsugarbelle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tamatalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tampabaydatenightguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tapeantiads.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"tarantulaforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tattoosbeauty.com":[["nano-sib","timercounter"]],"tcrossforums.co.uk":[["rmnt","script","html-load.com"]],"teamos.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"techmyntra.net":[["nano-stb"],["acs","parseInt","break;case $."]],"techprakash.com":[["noeval-if","/chp_?ad/"]],"techrt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teenpornvideo.sex":[["aopr","document.dispatchEvent"]],"telegraph.co.uk":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["set","_satellite","{}"],["set","_satellite.getVisitorId","noopFunc"]],"terilynadams.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"terrainforum.net":[["rmnt","script","html-load.com"]],"teslabottalk.com":[["rmnt","script","html-load.com"]],"texassports.com":[["set","blockAdBlock","trueFunc"]],"tfp.is":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"thatguywhogrills.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebakerupstairs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebarbell.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedailyjournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thedigestweb.com":[["rmnt","script","html-load.com"]],"thediyvillage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefemaleprofessional.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theflowspace.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"thegreekfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehappyfarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theidearoom.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thejoysharing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelabradoodlesite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thematurexxx.com":[["acs","document.querySelectorAll","popMagic"]],"themgzr.co.uk":[["rmnt","script","html-load.com"]],"thepewterplank.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"theproductanalyst.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therealisticmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theshaderoom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesportsupa.com":[["noeval-if","/chp_?ad/"]],"thestar.co.uk":[["rmnt","script","await eval"]],"thosa.info":[["noeval-if","/chp_?ad/"]],"thoughtcatalog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"titsintops.com":[["acs","document.querySelectorAll","popMagic"],["acs","Math.floor","Math.random"],["aopr","decodeURI"]],"tlycblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"topgear.com":[["set","_sp_.config.events.onSPPMObjectReady","noopFunc"]],"torinotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"torrsexvid.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"toyokeizai.net":[["rmnt","script","await eval"]],"tpayr.xyz":[["nostif","documentElement.innerHTML"],["no-fetch-if","doubleclick","","{\"type\": \"opaque\"}"],["set","document.hasFocus","trueFunc"]],"trade2win.com":[["nostif",".show"]],"transfaze.com":[["nano-stb","remaining","","0.02"]],"tribeclub.com":[["set","blockAdBlock","trueFunc"]],"tubev.sex":[["aopw","displayCache"]],"tudigitale.it":[["nostif","an_message","500"]],"tvanouvelles.ca":[["no-fetch-if","doubleclick"]],"tvtv.us":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"],["set","paAddUnit","noopFunc"]],"tw-hkt.blogspot.com":[["nosiif","visibility","1000"]],"twobrokewatchsnobs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"typerush.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"udoyoshi.com":[["aost","String.prototype.charCodeAt","ai_"]],"udvl.com":[["acs","$","open"],["rmnt","script","serve"],["aeld","DOMContentLoaded","popupurls"]],"uktvplay.uktv.co.uk":[["no-xhr-if","fwmrm.net"],["no-fetch-if","fwmrm.net"]],"ultrateenporn.com":[["aopr","document.dispatchEvent"]],"unnuetzes.com":[["nostif",".call(null)","10"]],"unscramblex.com":[["rmnt","script","/__adblocker|html-load/"]],"upload18.com":[["acs","WebAssembly","atob"]],"uprafa.com":[["set","settings.adBlockerDetection","false"]],"upworthy.com":[["rmnt","script","/__adblocker|html-load/"]],"utahsadventurefamily.com":[["rmnt","script","/__adblocker|html-load/"]],"uur-tech.net":[["noeval-if","/chp_?ad/"]],"v6embed.xyz":[["nostif","afterOpen"],["nowoif"],["set","PlayerConfig.config.CustomAdSetting","[]"]],"ver-mangas-porno.com":[["acs","document.querySelectorAll","popMagic"],["aeld","click","popMagic"]],"verizon.com":[["set","newPageViewSpeedtest","noopFunc"]],"vgames.fun":[["aost","document.getElementById","fairAdblock"]],"vickisaveworker.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"videoeditingtalk.com":[["rmnt","script","html-load.com"]],"videojav.com":[["aost","$","inlineScript"]],"vidstreams.net":[["acs","document.documentElement","break;case $."]],"vidz7.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"vindulge.com":[["rmnt","script","/__adblocker|html-load/"]],"visualnewshub.com":[["rmnt","script","popundersPerIP"],["aopr","Adcash"],["aopr","aclib"]],"vosfemmes.com":[["set","is_adblocked","false"],["rmnt","script","/isAdBlocked|popUnderUrl/"],["set-cookie","dscl2","1"]],"vox.com":[["acs","admiral"]],"voxfm.pl":[["nostif","adb"]],"voyagetampa.com":[["rmnt","script","/__adblocker|html-load/"]],"vplink.in":[["nostif","location.href"],["set","blurred","false"]],"vtube.to":[["nowoif"],["acs","RegExp","debugger"],["aeld","popstate"],["set","D4zz","noopFunc"]],"watchdocumentaries.com":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"watchluna.com":[["nowoif","_blank"]],"watchmodernfamilyonline.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watcho.com":[["nano-stb","isPeriodic","*"]],"watertemp.org":[["rmnt","script","/__adblocker|html-load/"]],"waz.de":[["nostif",".call(null)","10"]],"wbnx.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wear-next.com":[["rmnt","script","/__adblocker|html-load/"]],"weathernj.com":[["rmnt","script","/__adblocker|html-load/"]],"webcamsdolls.com":[["nostif","offsetWidth"]],"webdeyazilim.com":[["aost","String.prototype.charCodeAt","ai_"]],"webservertalk.com":[["rmnt","script","/__adblocker|html-load/"]],"weekendletters.store":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.addEventListener","/popup/i"],["set","HTMLScriptElement.prototype.onerror","noopFunc"]],"wegotthiscovered.com":[["aopr","googletag"]],"weirdwolf.net":[["nowoif"]],"wellnessbykay.com":[["rmnt","script","/__adblocker|html-load/"]],"whats-on-netflix.com":[["acs","eval","replace"]],"wholesomepatisserie.com":[["rmnt","script","/__adblocker|html-load/"]],"windowscentral.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"winning-homebrew.com":[["rmnt","script","/__adblocker|html-load/"]],"wintub.com":[["acs","parseInt","break;case $."]],"wisforwebsite.com":[["rmnt","script","/__adblocker|html-load/"]],"wishesndishes.com":[["rmnt","script","/__adblocker|html-load/"]],"woodworkingtrade.com":[["rmnt","script","/__adblocker|html-load/"]],"woofbarkgrowl.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"world4.eu":[["aost","String.prototype.charCodeAt","ai_"],["aopr","ai_run_scripts"]],"writerscafe.org":[["rmnt","script","/==undefined.*body/"]],"wvuathletics.com":[["set","blockAdBlock","trueFunc"]],"x-fetish.tube":[["aeld","click","popMagic"],["acs","WebAssembly","atob"]],"xda-developers.com":[["acs","admiral"],["rc","twig-body"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"xfantazy.org":[["acs","document.querySelectorAll","popMagic"]],"xfrenchies.com":[["aeld","","popMagic"]],"xhamsterporno.mx":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhdate.world":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhlease.world":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhplanet2.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xpressarticles.com":[["noeval-if","/chp_?ad/"]],"xtratime.org":[["rmnt","script","html-load.com"]],"xvideis.cc":[["acs","document.querySelectorAll","popMagic"]],"xvipp.com":[["noeval-if","/chp_?ad/"]],"xxxxselfie.com":[["acs","document.querySelectorAll","popMagic"]],"y2mate.com":[["aopr","open"]],"yamaha-forum.net":[["rmnt","script","html-load.com"]],"yesdownloader.com":[["nano-sib"]],"yesjavplease.fun":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"yjiur.xyz":[["noeval-if","/chp_?ad/"],["nano-stb","/.?/","*","0.001"],["nano-sib","/.?/","*","0.001"]],"yourdailypornvideos.ws":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"yoursoundmatters.com":[["rmnt","script","/__adblocker|html-load/"]],"yporn.tv":[["acs","document.querySelectorAll","popMagic"]],"ytanime.tv":[["acs","document.querySelectorAll","popMagic"],["acs","Math","break;case $."],["aopr","u_cfg"],["aopw","adcashMacros"]],"yumacs.com":[["set","blockAdBlock","trueFunc"]],"zdrz.xyz":[["noeval-if","/chp_?ad/"]],"zilla-xr.xyz":[["nowoif"]],"zoominar.online":[["aopr","redirectOnClick"]],"zplayer.live":[["acs","Math","break;case $."]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
