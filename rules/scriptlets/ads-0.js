/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"10.com.au":[["json-prune","cuepoints","cuepoints.[].start cuepoints.[].end cuepoints.[].start_float cuepoints.[].end_float"],["no-fetch-if","/ads/banner"],["set","moatPrebidApi","{}"],["set","moatPrebidApi.getMoatTargetingForPage","noopFunc"]],"185.193.17.214":[["noeval-if","/chp_?ad/"]],"1movielinkbd.com":[["nowoif"]],"2girls1cup.ca":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"40plusstyle.com":[["rmnt","script","/__adblocker|html-load/"]],"4archive.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"4lessbyjess.com":[["rmnt","script","/__adblocker|html-load/"]],"5letterwords.org":[["rmnt","script","/__adblocker|html-load/"]],"69games.xxx":[["nowoif"],["set","puShown","true"],["acs","document.querySelectorAll","popMagic"]],"6hiidude.gold":[["acs","document.documentElement","break;case $."],["href-sanitizer","a[href^=\"https://cdns.6hiidude.gold/file.php?link=http\"]","?link"]],"abcsofliteracy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aberdeennews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"ablefast.com":[["acs","document.querySelectorAll","popMagic"]],"abyssplayer.com":[["nowoif","/^/","1"],["set","document.ontouchend","null"],["set","document.onclick","null"],["aost","HTMLElement.prototype.click","_0x"],["set","urls","[]"],["nowoif","","1"]],"admediaflex.com":[["no-fetch-if","ads"],["aeld","load","bypass"]],"adsy.pw":[["noeval-if","/chp_?ad/"],["nostif","offsetWidth"],["aopr","adsBlocked"],["set","PreRollAd.timeCounter","0"]],"adult-empire.com":[["acs","document.querySelectorAll","popMagic"]],"adultgamesworld.com":[["set","doOpen","undefined"]],"adultporn.com.es":[["acs","document.querySelectorAll","popMagic"]],"aeroxplorer.com":[["nostif","ads"]],"ahoramismo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"akinator.com":[["set","__cfRLUnblockHandlers","true"],["rmnt","script","await eval"]],"allcorsa.co.uk":[["rmnt","script","html-load.com"]],"allpussynow.com":[["acs","document.querySelectorAll","popMagic"]],"alxnow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amateurprochef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amateuryoungpics.com":[["aeld","","popMagic"]],"americanwx.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amnaymag.com":[["noeval-if","/chp_?ad/"]],"amomsimpression.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amyinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"androidecuatoriano.xyz":[["aopw","checkAdsStatus"]],"androjungle.com":[["rmnt","script","onerror"]],"angeloyeo.github.io":[["nosiif","visibility","1000"]],"anonymousceviri.com":[["acs","addEventListener","nextFunction"]],"antenasports.ru":[["acs","document.documentElement","break;case $."],["acs","JSON.parse","atob"]],"antennasports.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","adserverDomain"]],"antimaximalist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"antiquetractorsforum.com":[["rmnt","script","html-load.com"]],"anyxvideos.com":[["acs","decodeURI","decodeURIComponent"]],"apkdelisi.net":[["rmnt","script","deblocker"]],"apkshrt.com":[["acs","parseInt","break;case $."]],"aquariumadvice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"artistforum.com":[["rmnt","script","html-load.com"]],"artsy-traveler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianpornfilms.com":[["acs","document.querySelectorAll","popMagic"]],"asiaon.top":[["no-fetch-if","method:HEAD"],["href-sanitizer","a[href^=\"https://link.asiaon.top/full?api=\"][href*=\"&url=aHR0c\"]","?url -base64"]],"askandyaboutclothes.com":[["rmnt","script","html-load.com"]],"askattest.com":[["set","attestHasAdBlockerActivated","true"]],"athletelunchbox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atxtv.co":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"audif1forum.com":[["rmnt","script","html-load.com"]],"autoextrem.de":[["nostif",".call(null)","10"]],"awdescargas.com":[["aopw","smrtSB"]],"azbasszone.com":[["rmnt","script","html-load.com"]],"babakfilm.com":[["noeval-if","/chp_?ad/"]],"backdoorsurvival.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"badjojo.com":[["aopw","encodeURIComponent"]],"bakeorbreak.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bandyforbundet.no":[["set","adn","{}"],["set","adn.clearDivs","noopFunc"]],"barleyandsage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barrescueupdates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beargoggleson.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"beatree.cn":[["noeval-if","/chp_?ad/"]],"beautythroughimperfection.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beerintheevening.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"biancazapatka.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bikemunk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bimshares.com":[["noeval-if","/chp_?ad/"]],"birdsphere.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blackbeltwiki.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blog.motionisland.com":[["noeval-if","/chp_?ad/"]],"bluerabbitrx.com":[["set","_etmc","{}"],["set","_etmc.push","noopFunc"]],"bolde.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bolly-tube.com":[["acs","document.querySelectorAll","popMagic"]],"bollywoodshaadis.com":[["aopr","Debugger"],["aopw","adBlockDetected"]],"bonnibakery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boobieblog.com":[["aopr","loadTool"]],"boolwowgirls.com":[["acs","document.querySelectorAll","popMagic"]],"bordercountiesadvertizer.co.uk":[["set","adLight","true"]],"bostoncommons.net":[["aopr","LieDetector"],["nostif","adsBlocked"]],"bromefields.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"busyfamilyrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"byd-forums.com":[["rmnt","script","html-load.com"]],"bysedikamoum.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"caliberforums.com":[["rmnt","script","html-load.com"]],"cambro.io":[["acs","onload","localStorage"]],"cambstimes.co.uk":[["set","adLight","true"]],"camgirlbay.net":[["acs","onload"]],"camwhoresbay.com":[["acs","readCookieDelit"]],"camwhorespy.com":[["acs","crakPopInParams"],["acs","onload","onclick"],["aopr","console.log"],["nowoif"]],"cboard.net":[["noeval-if","/content-loader\\.com|css-load\\.com|html-load\\.com/"],["rmnt","script","KCgpPT57bGV0IGU"]],"cbr.com":[["aeld","error","blocker"],["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"ccmapracticetests.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"challengerforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"charlottefashionplate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cheatglobal.com":[["acs","addEventListener","nextFunction"]],"chef-in-training.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cheshirelife.co.uk":[["set","adLight","true"]],"chevelles.com":[["rmnt","script","html-load.com"]],"chicagolandsportbikes.com":[["rmnt","script","html-load.com"]],"chicasdesnudas.xxx":[["acs","document.querySelectorAll","popMagic"]],"christinascucina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinemabg.net":[["aeld","","popMagic"]],"cinnamonsnail.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"citi.com":[["no-xhr-if","cls_report?"]],"ck5.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleanerstalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"climbingtalshill.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"club700xx.com":[["rmnt","script","html-load.com"]],"clubtitan.org":[["rmnt","script","html-load.com"]],"clubxb.com":[["rmnt","script","html-load.com"]],"coatingsworld.com":[["acs","$","#pageWrapper"]],"codesnail.com":[["nostif","css_class.show"]],"coffeeforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coindice.win":[["set","CaptchmeState.adb","undefined"],["aopr","adBlockDetected"]],"collinsdictionary.com":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"comicsporno.xxx":[["acs","document.querySelectorAll","popMagic"]],"competitionplus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"construct101.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingperfected.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookwithkushi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coromon.wiki.gg":[["aost","document.createElement","create_ad"]],"countytimes.co.uk":[["set","adLight","true"]],"couponsuniverse.com":[["acs","document.createElement","script"]],"coverapi.store":[["aopr","mm"]],"cowboyszone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cracking-dz.com":[["aeld","load","0x"]],"crazygames.com":[["no-fetch-if","/adinplay|googlesyndication/"]],"crazytogether.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"createlet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crochething.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crosswalk.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"culture-informatique.net":[["aopr","__eiPb"]],"cupcakesandkalechips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cupra.forum":[["no-xhr-if","googlesyndication"],["nostif","getComputedStyle","250"]],"curbingcarbs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"currencyconverterx.com":[["acs","document.createElement","register"]],"cybar.to":[["aeld","click","open"],["nowoif","cpmecs"],["set-cookie","ads","off"],["nostif","/adlink/i"],["ra","onclick","[onclick]","complete"]],"cyclingweekly.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"cykf.net":[["noeval-if","/chp_?ad/"]],"dafontvn.com":[["acs","document.createElement","adblock"]],"daily-jeff.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dailyboulder.com":[["no-fetch-if","googlesyndication"]],"dailydot.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"dailylocal.com":[["set","CnnXt.Event.fire","noopFunc"]],"daisiesandpie.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dankmemer.lol":[["nostif","nads"]],"delightfulmomfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desixxxtube.org":[["aopr","exoJsPop101"]],"dexerto.com":[["rmnt","script","html-load.com"]],"digitalstudiome.com":[["aopr","adBlockDetected"]],"dinnerexa.com":[["nowoif"]],"dirtyyoungbitches.com":[["aopr","AaDetector"]],"discovertheburgh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dldokan.store":[["aeld","DOMContentLoaded","handleRedirect"]],"dogtime.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"dolphinstalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domesticsuperhero.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"donkparty.com":[["aopr","phantomPopunders"],["nowoif"]],"donnadundas.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doumura.com":[["noeval-if","/chp_?ad/"]],"driverbase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drmonicabravo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dubaitravelplanner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dziennikbaltycki.pl":[["aeld","","show"]],"easyworldbusiness.com":[["nano-sib","timer","*","0.02"]],"eatsmarter.de":[["nostif",".call(null)","10"]],"ecstatichappiness.com":[["rmnt","script","/__adblocker|html-load/"]],"edjerba.com":[["noeval-if","/chp_?ad/"]],"effortlessgent.com":[["rmnt","script","/__adblocker|html-load/"]],"egitim.net.tr":[["rmnt","script","await eval"]],"elektrikmen.com":[["aopr","b2a"]],"eliobenedetto.it":[["aopr","adsBlocked"]],"entano.jp":[["aost","String.prototype.charCodeAt","ai_"]],"entertainmentnow.com":[["rmnt","script","/__adblocker|html-load/"]],"epaceforum.com":[["rmnt","script","html-load.com"]],"erinobrien.life":[["rmnt","script","/__adblocker|html-load/"]],"ervik.as":[["noeval-if","/chp_?ad/"]],"eveningsun.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"ex30owners.com":[["rmnt","script","html-load.com"]],"expansion.com":[["aopr","adUnits"]],"expeditionforum.com":[["rmnt","script","/__adblocker|html-load/"]],"explorerevforum.com":[["rmnt","script","html-load.com"]],"extrapetite.com":[["rmnt","script","/__adblocker|html-load/"]],"fallbrook247.com":[["aopr","googletag"]],"familyporn.tv":[["set","console.clear","noopFunc"],["aopr","AaDetector"]],"familyvacationdesign.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fapcat.com":[["nowoif"]],"fashionbeans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fathermag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"festyy.com":[["set","globalThis","null"],["aopr","NREUM"],["acs","Math","break;case $."]],"fibwatch.art":[["rmnt","script","PASS_KEY"]],"filecrypt.cc":[["rmnt","script","adserverDomain"]],"fileq.games":[["nowoif","_blank"]],"filescdn.com":[["nowoif"]],"filespayouts.com":[["rmnt","script","window.open"],["aeld","click","document.createElement"]],"filmy4wap.co.in":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"]],"financeandinsurance.xyz":[["noeval-if","/chp_?ad/"]],"finishedwithsalt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fle-5r8dchma-moo.com":[["nowoif"],["acs","Math","localStorage['\\x"]],"floandgrace.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flywareagle.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"foguinhogames.net":[["aopw","adBlockDetected"]],"foodstoragemoms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footeuses.com":[["noeval-if","/chp_?ad/"]],"fortunly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fosbasdesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fox43.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"fpl.team":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"free-n8n-templates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freeairpump.com":[["rmnt","script","error-report.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freepornvideo.sex":[["aopr","ExoLoader.serve"]],"freethankyounotes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freethesaurus.com":[["nostif","warn"],["aopr","adc"],["set","majorse","true"],["rmnt","script","window.warn"],["set","completed","1"]],"freshoffthegrid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frogsandsnailsandpuppydogtail.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"fufuskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funclothcrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funlearningforkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fz09.org":[["rmnt","script","html-load.com"]],"gadzetomania.pl":[["nano-sib","consoleLoaded?clearInterval"]],"gal-dem.com":[["aopr","dsanity_ad_block_vars"],["nostif","Delay"]],"games.games.newsgames.parade.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.heraldsun.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games2rule.com":[["ra","target"]],"gametop.com":[["aost","document.getElementById","onLoadEvent"]],"gamingsmart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gaypornhot.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["aost","atob","/HTMLDocument|blob/"],["no-fetch-if","/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["no-xhr-if","/doubleclick|googlesyndication/"]],"geekspin.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"geissblog.koeln":[["nostif",".call(null)","10"]],"genovatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"getinspiredeveryday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlscanner.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"girlsgogames.co.uk":[["aopr","googletag"]],"gk24.pl":[["aeld","","show"]],"go.gociwidey.com":[["no-fetch-if","googlesyn"],["nano-stb","/.?/","*"],["nano-stb"],["nano-sib"],["no-xhr-if","adsbygoogle"],["nowoif","_blank"]],"godupdates.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"gogatv.net":[["aost","HTMLElement.prototype.click","_0x"]],"goldenretrieverforum.com":[["rmnt","script","html-load.com"]],"goodhomeautomation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goplay.su":[["nowoif","!addons.mozilla.org"],["json-prune","*","rot_url"],["noeval-if","innerHTML"],["remove-cookie","/abd/"]],"goto.com.np":[["aopr","open"],["nano-sib","timeLeft"]],"gousfbulls.com":[["set","blockAdBlock","trueFunc"]],"gps-forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grannyfuckxxx.com":[["noeval"],["aopr","Aloader.serve"]],"greensnchocolate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"growinghandsonkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gruene-zitate.de":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"gtaall.com":[["nowebrtc"],["aopr","Notification"]],"gtaboom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"h-donghua.com":[["rmnt","script","antiAdBlockerHandler"]],"harbigol.com":[["noeval-if","/chp_?ad/"]],"hardlinecrawlers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hayatarehber.com":[["acs","eval","replace"]],"hdmovies2.org":[["acs","navigator","break;case $."]],"healthfulblondie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthyelizabeth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentaifreak.org":[["aopr","decodeURI"],["aopw","onpopstate"],["nostif","popState"]],"highheelsandabackpack.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hindiporno.pro":[["noeval"],["aopr","Aloader.serve"]],"hitprn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"hl-live.de":[["nostif","nextFunction"]],"hobbyinsider.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hoca6.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"homeculina.com":[["nostif","/adblock|isRequestPresent/"]],"hotleak.vip":[["acs","document.querySelectorAll","popMagic"]],"hotmaturegirlfriends.com":[["acs","document.querySelectorAll","popMagic"]],"hotntubes.com":[["acs","document.querySelectorAll","popMagic"]],"housedigest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hqbang.com":[["aeld","getexoloader"]],"hubison.com":[["set","blockAdBlock","trueFunc"]],"huntspost.co.uk":[["set","adLight","true"]],"iamneverfull.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"icgaels.com":[["set","blockAdBlock","trueFunc"]],"ifanzine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ilinks.in":[["acs","parseInt","break;case $."]],"imafoodie.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imagehaha.com":[["aeld","","checkTarget"],["nowoif"]],"imgprime.com":[["aopr","document.createElement"],["ra","href|target","a[href=\"https://imgprime.com/view.php\"][target=\"_blank\"]","complete"]],"imgur-com.translate.goog":[["set-cookie","WHITELISTED_CLOSED","1"]],"indesignskills.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"infinitifx.org":[["rmnt","script","html-load.com"]],"inflatableblast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infosgj.free.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"insider-gaming.com":[["noeval-if","/chp_?ad/"],["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"insidetheupgrade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"insightcentral.net":[["rmnt","script","html-load.com"]],"inspiringtips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"intjsecrets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iogames.space":[["set","ramp","undefined"]],"iq-forums.com":[["rmnt","script","html-load.com"]],"italpress.com":[["set","td_ad_background_click_link","undefined"]],"japanesecooking101.com":[["rmnt","script","/__adblocker|html-load/"]],"japaneseholes.com":[["acs","WebAssembly","atob"]],"japanesexxxporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"jav101.online":[["acs","document.querySelectorAll","popMagic"]],"javgrab.com":[["acs","document.querySelectorAll","popMagic"]],"javsub.my":[["aopr","juicy_tags"]],"jeanelleats.com":[["rmnt","script","/__adblocker|html-load/"]],"jobsheel.com":[["noeval-if","/chp_?ad/"],["set","count","0"]],"jokerscores.com":[["nowoif","/aff|jump/"]],"joyusgarden.com":[["rmnt","script","/__adblocker|html-load/"]],"kawaii-anime.com":[["nostif","getComputedStyle"],["nowoif","_blank"],["set-session-storage-item","kw_ad_shown","5"],["set-session-storage-item","kw_ad_clicks","2"]],"kduk.com":[["set","google_unique_id","6"]],"ketokarma.com":[["rmnt","script","/__adblocker|html-load/"]],"kiaownersclub.co.uk":[["rmnt","script","html-load.com"]],"kiddingaroundcolumbia.com":[["rmnt","script","/__adblocker|html-load/"]],"kiddyshort.com":[["acs","addEventListener","google_ad_client"],["aeld","load","htmls"],["set","blurred","false"]],"kingofdown.com":[["aeld","load","onload"]],"kiradream.blog":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"kirstenhollowaydesigns.com":[["rmnt","script","/__adblocker|html-load/"]],"kitabmarkaz.xyz":[["aopr","__Y"]],"kitchenathoskins.com":[["rmnt","script","/__adblocker|html-load/"]],"klettern-magazin.de":[["nostif",".call(null)","10"]],"klykradio.com":[["set","google_unique_id","6"]],"kr-weathernews.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"kristiesoundsimply.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"krxforum.com":[["rmnt","script","html-load.com"]],"kstatewomenshoops.com":[["set","blockAdBlock","trueFunc"]],"l2crypt.com":[["noeval-if","ads"]],"labornursemama.com":[["rmnt","script","/__adblocker|html-load/"]],"labradorforums.co.uk":[["rmnt","script","html-load.com"]],"lambertslately.com":[["rmnt","script","/__adblocker|html-load/"]],"lamborghini-talk.com":[["rmnt","script","html-load.com"]],"last.fm":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"latinohentai.com":[["acs","document.querySelectorAll","popMagic"],["ra","href","#clickfakeplayer"],["acs","document.createElement","__htas"]],"lato.sx":[["acs","EventTarget.prototype.addEventListener","delete window"]],"laurafuentes.com":[["rmnt","script","/__adblocker|html-load/"]],"lebahmovie.com":[["aopr","decodeURI"]],"lechefswife.com":[["rmnt","script","/__adblocker|html-load/"]],"leechyscripts.net":[["noeval-if","/chp_?ad/"]],"legacygt.org":[["rmnt","script","html-load.com"]],"legendei.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"lesbianvideotube.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"letemsvetemapplem.eu":[["rmnt","script","videoList"],["no-fetch-if","/rekaa"]],"lifeloveandsugar.com":[["rmnt","script","/__adblocker|html-load/"]],"lifepathdoc.com":[["rmnt","script","/__adblocker|html-load/"]],"litonmods.com":[["no-fetch-if","googlesyndication"],["noeval-if","adsbygoogle"]],"littlelearningcorner.com":[["rmnt","script","/__adblocker|html-load/"]],"livenewschat.eu":[["rmnt","script","html-load.com"]],"liveonsat.com":[["acs","document.getElementById","No"]],"livingcost.org":[["rmnt","script","/__adblocker|html-load/"]],"loaids.com":[["rmnt","script","/__adblocker|html-load/"]],"lokalo24.de":[["nostif",".call(null)","10"]],"lookmoviess.com":[["acs","JSON.parse","break;case $."]],"lowcarb-ology.com":[["rmnt","script","/__adblocker|html-load/"]],"lsathacks.com":[["rmnt","script","/__adblocker|html-load/"]],"luchaonline.com":[["noeval-if","/chp_?ad/"]],"ma-x.org":[["aeld","load","adb"]],"madeeveryday.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"mainporno.com":[["acs","document.querySelectorAll","popMagic"]],"mamagourmand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamashire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangafreak.me":[["nowoif"],["acs","setTimeout","document.querySelector"]],"mangareader.to":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"manofadan.com":[["aeld","load","htmls"],["rmnt","script","htmls"],["acs","addEventListener","ads"]],"mariashriversundaypaper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mashed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maskinbladet.dk":[["nostif","Check"]],"masstime.us":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mdbekjwqa.pw":[["noeval-if","setInterval"],["acs","document.createElement","onerror"],["nowoif"]],"mdxers.org":[["rmnt","script","html-load.com"]],"mediatakeout.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mega-debrid.eu":[["set","Advertisement","1"]],"megafilmeshd50.com":[["acs","document.documentElement","break;case $."]],"megane.com.pl":[["no-fetch-if","googlesyndication"]],"mentalfoodchain.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"merlinshoujo.com":[["noeval-if","/chp_?ad/"]],"meteopool.org":[["no-xhr-if","googlesyndication"]],"michaelfairmantv.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"microskiff.com":[["rmnt","script","html-load.com"]],"midwesternhomelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"milfmoza.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"millwrighttalk.com":[["rmnt","script","html-load.com"]],"mirrorace.com":[["acs","String.fromCharCode","/'shift'|break;/"]],"missinformationblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mixrootmod.com":[["no-fetch-if","/adoto|googlesyndication/"]],"mmm.lt":[["rmnt","script","html-load.com"]],"mmo69.com":[["acs","document.addEventListener","google_ad_client"]],"mmsmaza.com":[["nowoif"]],"mmtv01.xyz":[["nowoif"],["nostif","window.open"]],"moddedguru.com":[["acs","eval","replace"]],"modpodgerocksblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommyneedschocolate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momsoftweensandteens.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momswithcrockpots.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"monoschino2.com":[["rmnt","script","popMagic"]],"mosttechs.com":[["noeval-if","/chp_?ad/"]],"motorcycleforums.net":[["rmnt","script","html-load.com"]],"motorsportsracingtalk.com":[["rmnt","script","html-load.com"]],"moviesub.is":[["acs","Math","break;case $."]],"mrscript.net":[["no-xhr-if","googlesyndication"]],"munchiesbymallory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myadslink.com":[["aeld","load","2000"]],"myair2.resmed.com":[["no-xhr-if","cloudflare.com/cdn-cgi/trace"]],"myblessedlife.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mychoiceschools.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mydesignchic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mydogsname.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myesports.gg":[["no-fetch-if","method:GET"]],"myheavenlyrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myproplugins.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"myupnow.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"myvwegolf.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mz-web.de":[["acs","document.createElement","document.head.appendChild"],["nostif",".call(null)","10"]],"narcity.com":[["aopw","Ha"]],"nationalgeographic.fr":[["nostif","checkPub","6000"],["no-xhr-if","/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"]],"nbadraft.net":[["rmnt","script","html-load.com"]],"netfuck.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"newsbreak24.de":[["nostif",".call(null)","10"]],"newser.com":[["aeld","load","Object"],["aost","Math","onerror"],["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="],["rmnt","script","/__adblocker|html-load/"]],"nickles.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"nintendoeverything.com":[["rmnt","script","html-load.com"]],"niuhuskies.com":[["set","blockAdBlock","trueFunc"]],"novelhall.com":[["rmnt","script","axios"]],"novinky.cz":[["aost","HTMLIFrameElement","inlineScript"]],"noxx.to":[["aopr","AaDetector"],["rmnt","script","window[_0x"]],"nsfwmonster.com":[["aeld","getexoloader"],["acs","$","window.open"],["nowoif",".php"]],"officedepot.co.cr":[["set","mediator","noopFunc"],["set","Object.prototype.subscribe","noopFunc"]],"ohiogamefishing.com":[["rmnt","script","html-load.com"]],"olympustaff.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/adblock/i"],["nostif","testAd"]],"onlineteenhub.com":[["noeval"],["aopr","Aloader.serve"]],"onthegas.org":[["rmnt","script","/__adblocker|html-load/"]],"oranhightech.com":[["aopw","cancelAdBlocker"]],"orgjunkie.com":[["rmnt","script","/__adblocker|html-load/"]],"osrsguide.com":[["rmnt","script","/__adblocker|html-load/"]],"osxdaily.com":[["rmnt","script","/__adblocker|html-load/"]],"ourlifetastesgood.com":[["rmnt","script","/__adblocker|html-load/"]],"ourstoneyacres.com":[["rmnt","script","/__adblocker|html-load/"]],"ourwovenjourney.com":[["rmnt","script","/__adblocker|html-load/"]],"outlanderforums.com":[["rmnt","script","html-load.com"]],"pandaatlanta.com":[["noeval-if","/chp_?ad/"]],"papertoys.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"passtheplants.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pastetot.com":[["nowoif"]],"pawastreams.org":[["aopr","Adcash"]],"pc-hobby.com":[["noeval-if","/chp_?ad/"]],"pcoptimizedsettings.com":[["noeval-if","js_func_decode_base_64"]],"pdfsite.net":[["aopr","open"]],"pelismart.com":[["acs","JSON.parse","break;case $."]],"pennypinchinmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"perchancetocook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"periodnirvana.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"personafans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"petadvisers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"philippinenmagazin.de":[["aopw","adBlockDetected"]],"pilot.wp.pl":[["set","prebidConfig.steering.disableVideoAutoBid","true"]],"pirlotv.mx":[["acs","JSON.parse","break;case $."]],"pivot-table.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"planetisuzoo.com":[["rmnt","script","html-load.com"]],"play.dictionary.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"play.doramasplus.net":[["set","openUp","noopFunc"]],"play.tv3.lv":[["set","Object.prototype.isNoAds","{}"],["set","tv3Cmp.ConsentGiven","true"]],"playvids.com":[["aopr","open"],["set","pop_target","null"]],"plugincim.com":[["aopr","adBlockDetected"]],"plymouthherald.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"pokemundo.com":[["noeval-if","show"]],"poophq.com":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["no-xhr-if","/vast.php?"],["no-xhr-if","/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["nostif","]();}","500"],["rmnt","script","offsetParent"],["no-xhr-if","162.252.214.4","true"],["no-xhr-if","c.adsco.re"],["no-xhr-if","adsco.re:2087"]],"popularrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"populist.press":[["rmnt","script","/==undefined.*body/"]],"pornborne.com":[["aeld","","popMagic"]],"pornfetishbdsm.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornoxo.com":[["popads-dummy"],["set","__videoPlayerData.popunder","undefined"]],"postimees.ee":[["nostif","adblock"]],"powcloud.org":[["aeld","/click|mouse|touch/","_0x"],["set","puOverlay","noopFunc"],["aopw","opopnso"],["aopw","c0ZZ"]],"powerhungry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prescottenews.com":[["set","closeBlockerModal","false"]],"pressurewasherpumpdiagram.com":[["noeval-if","/chp_?ad/"]],"prisjakt.no":[["set","apntag.refresh","noopFunc"]],"privateindianmovies.com":[["aopr","document.dispatchEvent"]],"progfu.com":[["nano-sib","timer","1600","0.001"]],"proudtobeprimary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"publicflashing.me":[["aost","console","onload"]],"pulpo69.com":[["acs","document.querySelectorAll","popMagic"]],"pupswithchopsticks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"puzzles.nola.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"puzzleseveryday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"r3owners.net":[["acs","$","adsBlocked"]],"radioamericalatina.com":[["aopr","adp"]],"radiokorea.com":[["rmnt","script","/__adblocker|html-load/"]],"radiozet.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"raepublic.com":[["rmnt","script","/__adblocker|html-load/"]],"rainonatinroof.com":[["rmnt","script","/__adblocker|html-load/"]],"raisecuriouskids.com":[["rmnt","script","/__adblocker|html-load/"]],"raisinghealthyfamilies.com":[["rmnt","script","/__adblocker|html-load/"]],"rangerovers.net":[["rmnt","script","html-load.com"]],"rapidfireart.com":[["rmnt","script","/__adblocker|html-load/"]],"rawkuma.com":[["acs","parseInt","break;case $."],["aeld","mousedown","shown_at"],["aeld","readystatechange","document.removeEventListener"]],"readingmiddlegrade.com":[["rmnt","script","/__adblocker|html-load/"]],"realmadryt.pl":[["no-fetch-if","method:GET"]],"rebeccacostthousand.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"rebeccapracticeloss.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"recipesandplaces.com":[["rmnt","script","/__adblocker|html-load/"]],"redensarten-index.de":[["set","is_banner","true"],["nostif","adb"]],"referee.com":[["rmnt","script","/__adblocker|html-load/"]],"resortcams.com":[["nostif","adblocker"]],"retrohousewifegoesgreen.com":[["rmnt","script","/__adblocker|html-load/"]],"rhiansrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"ride.guru":[["rmnt","script","/__adblocker|html-load/"]],"riftmana.com":[["rmnt","script","/__adblocker|html-load/"]],"roadtripliving.com":[["rmnt","script","html-load.com"]],"rockyourhomeschool.net":[["rmnt","script","/__adblocker|html-load/"]],"rosebakes.com":[["rmnt","script","/__adblocker|html-load/"]],"rugby365.fr":[["nostif",".call(null)","10"]],"runninginaskirt.com":[["rmnt","script","/__adblocker|html-load/"]],"rvandplaya.com":[["rmnt","script","/__adblocker|html-load/"]],"safefileku.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","globalThis","break;case"],["acs","EventTarget.prototype.addEventListener","delete window"],["ra","onclick","button#download","complete"],["nowoif","_blank"]],"safemodapk.com":[["acs","decodeURIComponent","ai_"]],"salernotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"saltnsprinkles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sanangelolive.com":[["aopr","googletag"]],"santacruzforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"savanaforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"scat.gold":[["nostif","show"],["acs","document.createElement","onerror"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"schwaebische.de":[["set","disasterpingu","false"]],"scorpio-horoscopes.com":[["nostif","displayMessage","2000"]],"seirsanduk.com":[["noeval-if","/chp_?ad/"]],"seniorskillet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seniortailwaggers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexanimetube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"sexrura.pl":[["acs","document.querySelectorAll","popMagic"]],"sexybabespictures.com":[["acs","document.querySelectorAll","popMagic"]],"sharegdrive.com":[["acs","adcashMacros"]],"sheetaki.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shesfreaky.com":[["acs","document.createElement","appendChild"]],"shogaisha-shuro.com":[["noeval-if","/chp_?ad/"]],"shortencash.click":[["nostif","displayAdBlockerMessage"]],"shortix.co":[["rmnt","script","onerror"]],"sigarms556.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"simplyhealthyfamily.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplyscratch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skidsteerforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skinnyfitalicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skyroadster.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"slateforums.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"smailpro.com":[["set","adsbygoogle_ama_fc_has_run","true"]],"smartkhabrinews.com":[["no-fetch-if","/freychang|passback|popunder|tag|banquetunarmedgrater/"],["set-cookie","visits","1"]],"smokinandgrillinwitab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snowmobiletrader.com":[["rmnt","script","html-load.com"]],"socceronline.me":[["rmnt","script","adserverDomain"]],"socigames.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"soft112.com":[["nano-sib"]],"solidfiles.com":[["aopw","Fingerprint2"]],"spanishdict.com":[["set","SD_IS_BLOCKING","false"],["aeld","","isBlocking"]],"spcdn.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"]],"speculationis.com":[["noeval-if","/chp_?ad/"]],"spicedblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stayfitmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stereogum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stocktrades.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stowmarketmercury.co.uk":[["set","adLight","true"]],"strangernervousql.shop":[["nano-sib","countDown"]],"strefa.biz":[["noeval-if","/chp_?ad/"]],"strmup.ws":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["rmnt","script","popundersPerIP"]],"stuckonsweet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sueseaqpi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugaryums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sumirekeiba.com":[["noeval-if","/chp_?ad/"]],"supforums.com":[["set","adsBlocked","false"],["aopr","htaUrl"],["no-xhr-if","googlesyndication"]],"surgicaltechie.com":[["noeval-if","/chp_?ad/"]],"sweetandsavorymeals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swift4claim.com":[["nosiif","visibility","1000"]],"sylverkat.com":[["noeval-if","/chp_?ad/"]],"tainguyenmienphi.com":[["noeval-if","/chp_?ad/"],["acs","document.addEventListener","randomNumber"]],"talesofthemiddleages.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"talkaboutmarriage.com":[["rmnt","script","html-load.com"]],"tamilguns.org":[["aeld","","break;case $."]],"tarynwhiteaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tastyoven.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tbirdforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teachjunkie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teamfight.lol":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techacrobat.com":[["aopw","adBlockDetected"],["noeval-if","/chp_?ad/"]],"techcrawlr.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techcrunch.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","adblockerDisabled","excludes","/,\\\\\"|self\\.__next|pageProps/"],["aeld","error",".indexOf"],["aeld","load",".indexOf"],["nostif",".indexOf"]],"technicalline.store":[["no-fetch-if","adsbygoogle"]],"techrecur.com":[["acs","Math","break;case $."]],"techsignin.com":[["acs","document.getElementsByTagName","tdBlock"]],"techtrim.tech":[["no-fetch-if","googlesyndication"],["no-xhr-if","googlesyndication"]],"tedenglish.site":[["noeval-if","/chp_?ad/"]],"teenhubxxx.com":[["noeval"],["aopr","Aloader.serve"]],"telemagazyn.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"teryxforums.net":[["rmnt","script","html-load.com"]],"texanerin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"text-compare.com":[["nostif","error-report.com"]],"tf1.fr":[["no-fetch-if","adsafeprotected"]],"thatfoodiegirl.in":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thatswhatchesaid.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theatrenerds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecreativefolk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedieselgarage.com":[["rmnt","script","html-load.com"]],"thediyplaybook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefightingcock.co.uk":[["noeval-if","decodeURIComponent(atob"]],"thegayglobetrotter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegoldendaily.com":[["set","loadShield","noopFunc"]],"thegraciouswife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thembites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themiddlesizedgarden.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themiracleofessentialoils.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenymelrosefamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theruntesters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thescranline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesubaruforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesuburbanmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesurfatlas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theyarethefuture.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thotslife.com":[["acs","document.querySelectorAll","popMagic"]],"tio.ch":[["aeld","error"],["ra","href","a[href*=\"/ads.php\"][target=\"_blank\"]"]],"tj.news":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"tokaiforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toolsofmen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"top16.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["set-cookie","popunder","1"],["set-cookie","visited","1"]],"tophostdeal.com":[["no-xhr-if","googlesyndication"]],"topsecretrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"torascripts.org":[["aost","String.prototype.charCodeAt","ai_"]],"torrage.info":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"touhoudougamatome.blog.fc2.com":[["acs","document.addEventListener","google_ad_client"]],"toyoheadquarters.com":[["aopr","document.dispatchEvent"]],"transexuales.gratis":[["acs","document.querySelectorAll","popMagic"]],"traveldesearch.com":[["acs","parseInt","break;case $."]],"traveltrailerpro.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trentonian.com":[["set","CnnXt.Event.fire","noopFunc"]],"trilltrill.jp":[["rmnt","script","html-load.com"]],"triviabliss.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trlnfam.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ttora.com":[["rmnt","script","html-load.com"]],"tubexplayer.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tv.bdix.app":[["acs","document.readyState","initializeChecks"],["nowoif","_blank"]],"twinsdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"twistandtoast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"u26bekrb.fun":[["set","adBlockDetected","undefined"]],"uberpeople.net":[["rmnt","script","html-load.com"]],"udemyking.com":[["noeval-if","/chp_?ad/"]],"ufaucet.online":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uglyducklingbakery.com":[["rmnt","script","/__adblocker|html-load/"]],"uiuxsource.com":[["noeval-if","/chp_?ad/"]],"ukaudiomart.com":[["rmnt","script","()=>eval"]],"ukchat.co.uk":[["aeld","click","splashPage"]],"ultimate-catch.eu":[["nostif","undefined"],["noeval-if","/chp_?ad/"]],"uncovered.com":[["rmnt","script","/__adblocker|html-load/"]],"unlimitedfiles.xyz":[["nowoif"]],"unoriginalmom.com":[["rmnt","script","/__adblocker|html-load/"]],"unscramble.org":[["rmnt","script","/__adblocker|html-load/"]],"up4stream.com":[["acs","Math","zfgcodeloaded"],["rmnt","script","wpadmngr.com"],["aeld","DOMContentLoaded","history.go"],["rmnt","script","popunder"]],"upfiles-urls.com":[["aeld","DOMContentLoaded","history.go"],["aeld","click","shouldOpenPopUp"],["set","blurred","false"],["aeld","/blur|focus/"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"upstream.to":[["aopr","open"],["acs","globalThis","break;case"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uptime4.com":[["no-xhr-if","adsbygoogle"]],"urbanblisslife.com":[["rmnt","script","/__adblocker|html-load/"]],"usdtoreros.com":[["set","blockAdBlock","trueFunc"]],"usersdrive.com":[["aopr","popurl"],["nowoif","_blank"],["aeld","click","_blank"],["rmnt","script","=\");"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"usp-forum.de":[["nostif",".call(null)","10"]],"ustvgo.live":[["noeval-if","/chp_?ad/"]],"utahwildlife.net":[["rmnt","script","html-load.com"]],"utepathletics.com":[["set","blockAdBlock","trueFunc"]],"valeriabelen.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"vbox7-mp3.info":[["acs","parseInt","break;case $."]],"veekyforums.com":[["nowoif"]],"veggiehomesteading.com":[["rmnt","script","/__adblocker|html-load/"]],"veo-hentai.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","document.addEventListener","google_ad_client"],["rmnt","script","/popMagic|pop1stp/"]],"victoryforums.com":[["rmnt","script","html-load.com"]],"video.gazzetta.it":[["set","google.ima.OmidVerificationVendor","{}"],["set","Object.prototype.omidAccessModeRules","{}"]],"videochums.com":[["rmnt","script","/__adblocker|html-load/"]],"videowood.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"videzz.net":[["nostif","console.clear"],["set","isAdBlockDetected","false"],["set","pData.adblockOverlayEnabled","0"]],"vikuy.click":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif","_blank"]],"ville-ideale.fr":[["nostif","contrformpub"]],"violacentral.com":[["rmnt","script","/__adblocker|html-load/"]],"vivifytribe.com":[["rmnt","script","/__adblocker|html-load/"]],"vnuki.net":[["noeval-if","/chp_?ad/"]],"voyagemichigan.com":[["rmnt","script","/__adblocker|html-load/"]],"voyeur-pornvideos.com":[["aopr","Aloader.serve"],["noeval"]],"vsd.fr":[["nostif","checkPub","6000"]],"vvdailypress.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"warddogs.com":[["aeld","load","checkAdblock"]],"watchelementaryonline.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"wearegreenbay.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"web.livecricket.is":[["nowebrtc"],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"webcams.casa":[["acs","document.querySelectorAll","popMagic"]],"webnots.com":[["rmnt","script","/__adblocker|html-load/"]],"weihnachts-filme.com":[["nostif",".call(null)","10"]],"welt.de":[["set","weltConfig.switches.videoAdBlockBlocker","false"],["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","await eval"],["rmnt","script","/:\\[?window,/"],["rmnt","script","html-load.com"],["no-fetch-if","-load.com/script/","length:101"],["nostif",")](this,...","3000-6000"],["ra","onmousedown",".ob-dynamic-rec-link","stay"]],"wendycode.com":[["nostif","_0x","2000"]],"wenthere8this.com":[["rmnt","script","/__adblocker|html-load/"]],"weretherussos.com":[["rmnt","script","/__adblocker|html-load/"]],"wericmartin.com":[["rmnt","script","window.SCHEDULE.home"]],"wgrz.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"whats-new.cyou":[["noeval-if","/chp_?ad/"]],"wheretogowithkids.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"wholekitchensink.com":[["rmnt","script","/__adblocker|html-load/"]],"wholesomemadeeasy.com":[["rmnt","script","/__adblocker|html-load/"]],"wigantoday.net":[["rmnt","script","await eval"]],"wikwiki.cv":[["nowoif"]],"windowspro.de":[["set","abpblocked","undefined"]],"wlns.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"worksopguardian.co.uk":[["rmnt","script","await eval"]],"worldstreams.click":[["aopw","u_cfg"]],"wort-suchen.de":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"woxikon.in":[["rmnt","script",";}}};break;case $."]],"wric.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"www.amazon.co.jp":[["json-prune","cuepointPlaylist vodPlaybackUrls.result.playbackUrls.cuepoints vodPlaylistedPlaybackUrls.result.playbackUrls.pauseBehavior vodPlaylistedPlaybackUrls.result.playbackUrls.pauseAdsResolution vodPlaylistedPlaybackUrls.result.playbackUrls.intraTitlePlaylist.[-].shouldShowOnScrubBar ads"]],"wyborcza.biz":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"x2download.com":[["aopr","GeneratorAds"]],"xcandid.vip":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","js_func_decode_base_64"]],"xdtalk.com":[["rmnt","script","html-load.com"]],"xsober.com":[["aopr","decodeURI"]],"xxr.mobi":[["acs","document.querySelectorAll","popMagic"]],"xxxparodyhd.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"yamahaforum.com":[["rmnt","script","html-load.com"]],"yellowbullet.com":[["rmnt","script","html-load.com"]],"youmath.it":[["acs","document.getElementById","try"],["nostif","adb"],["no-xhr-if","/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/"]],"youramateurporn.com":[["acs","document.querySelectorAll","popMagic"]],"yourhomebasedmom.com":[["rmnt","script","/__adblocker|html-load/"]],"youtube4kdownloader.com":[["aeld","","break;case $."]],"zoomtventertainment.com":[["nostif","Adblock"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
