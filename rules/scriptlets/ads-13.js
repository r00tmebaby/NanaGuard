/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"101cookingfortwo.com":[["rmnt","script","/__adblocker|html-load/"]],"1024tera.com":[["set","Object.prototype.isAllAdClose","true"]],"123av.com":[["nowoif"]],"141tube.com":[["acs","document.querySelectorAll","popMagic"],["set","univresalP","noopFunc"]],"188.166.182.72":[["nowoif"]],"18comic-gquu.vip":[["acs","WebAssembly","atob"]],"250r.net":[["rmnt","script","html-load.com"]],"3xfaktor.hu":[["acs","document.querySelectorAll","popMagic"]],"46matome.net":[["rmnt","script","html-load.com"]],"4btswaps.com":[["rmnt","script","html-load.com"]],"4funbox.com":[["set","Object.prototype.isAllAdClose","true"]],"4kporn.xxx":[["set","flashvars.popunder_url",""],["rmnt","script","Popunder"]],"5masterzzz.site":[["nowoif","_blank"]],"7-min.com":[["rmnt","script","/__adblocker|html-load/"]],"9mod.com":[["nano-stb","timeLeft--","*"]],"a-b-f-dd-aa-bb-cctwd3a.fun":[["nowoif"],["acs","Math","localStorage['\\x"]],"abendzeitung-muenchen.de":[["nostif",".call(null)","10"]],"ableitungsrechner.net":[["nostif","ag_adBlockerDetected"]],"about-drinks.com":[["nostif",".call(null)","10"]],"acapellas.eu":[["nostif","getComputedStyle"],["rmnt","script","runCheck"],["acs","addEventListener","google_ad_client"]],"acraftyconcept.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"addictedtovacation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aduzz.com":[["no-fetch-if","ads"],["aeld","load","bypass"]],"adventureinyou.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"advtpe.com":[["nosiif","adblock"]],"afarmgirlsdabbles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"agrillforallseasons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aircondlounge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airportseirosafar.com":[["acs","JSON.parse","break;case $."]],"allindiabullion.com":[["rmnt","script","adScripts"]],"allindiaroundup.com":[["nostif","Detected","500"]],"allthedifferences.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allucanheat.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"alonelylife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"altimaforums.net":[["rmnt","script","html-load.com"]],"amazingclassiccars.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amazingtrannies.com":[["acs","document.querySelectorAll","popMagic"]],"amtil.com.au":[["noeval-if","/chp_?ad/"]],"amylattacreations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anagram-solver.io":[["rmnt","script","html-load.com"]],"androidpolice.com":[["aeld","error","blocker"],["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"angrybirdsnest.com":[["set","adblock","false"]],"anigo.to":[["nowoif"]],"anihdplay.com":[["acs","document.documentElement","break;case $."]],"anime-sanka.com":[["acs","parseInt","break;case $."]],"animehub.ac":[["no-xhr-if","googlesyndication"]],"anitube22.vip":[["no-xhr-if","taboola"]],"anyksta.lt":[["rmnt","script","html-load.com"]],"aquaticplantcentral.com":[["rmnt","script","html-load.com"]],"arsiv.mackolik.com":[["set","AdmostClient","{}"]],"ascentforums.com":[["rmnt","script","html-load.com"]],"asianporntube69.com":[["aopr","document.dispatchEvent"]],"askpaccosi.com":[["nostif","/adb/i"],["noeval"],["no-fetch-if","googlesyndication"],["no-xhr-if","googlesyndication"],["no-xhr-if","ad"]],"astrakforums.co.uk":[["rmnt","script","html-load.com"]],"asyaanimeleri.pw":[["nowoif","!asyaanimeleri."],["set-cookie","popcounter","2"]],"athoughtfulplaceblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"au-di-tions.com":[["aopr","__eiPb"]],"autokult.pl":[["nano-sib","consoleLoaded?clearInterval"]],"autopixx.de":[["nostif",".call(null)","10"]],"averagesocialite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"avseesee.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"axleandchassis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"axporn.com":[["acs","document.querySelectorAll","popMagic"]],"azrom.net":[["noeval-if","/chp_?ad/"],["href-sanitizer","a[href^=\"https://azrom.net/\"][href*=\"?url=\"]","?url"],["nostif","show"],["aeld","","show"]],"babeswp.com":[["aopr","document.dispatchEvent"]],"babyclub.de":[["nostif",".call(null)","10"]],"babyfoode.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"badgehungry.com":[["aopr","__eiPb"]],"baixedetudo.net.br":[["acs","JSON.parse","break;case $."]],"bakedbyrachel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakinghermann.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baldandhappy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bargainbabe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bcanepaltu.com":[["noeval-if","/chp_?ad/"]],"bdcraft.net":[["acs","Math","zfgloaded"]],"beautymone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beautysided.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beinmatch.fit":[["rmnt","script","{delete window["]],"bemorewithless.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"betterwander.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bibliopanda.visblog.online":[["rmnt","script","ai_adb"]],"big12sports.com":[["set","blockAdBlock","trueFunc"]],"bimmerforums.co.uk":[["rmnt","script","html-load.com"]],"birdwatchingusa.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"birmingham-now.co.uk":[["set","adLight","true"]],"bitchesgirls.com":[["nowoif"]],"bitesbybianca.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bitsearch.to":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"blackcockadventure.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"blick.ch":[["aopr","_sp_._networkListenerData"],["remove-cookie","__adblocker"]],"blkom.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["set","blockAdBlock._options.baitClass","null"]],"blogmado.com":[["nano-sib","time","","0.02"]],"blogredmachine.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"bloominghomestead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluebowlrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boobsradar.com":[["set","flashvars.mlogo_link",""],["set","flashvars.mlogo",""],["set","flashvars.logo_text",""]],"bookszone.in":[["rmnt","script","onerror"]],"boxofficebusiness.in":[["noeval-if","/chp_?ad/"]],"braflix.uk":[["rmnt","script","random"]],"brentwoodlive.co.uk":[["set","adLight","true"]],"brulosophy.com":[["noeval-if","/chp_?ad/"]],"brushednickel.biz":[["noeval-if","/chp_?ad/"]],"buildingwithkinfolk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"butternutrition.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"c2g.at":[["nostif","checkAdblockUser"],["set","blurred","false"]],"cameronaggies.com":[["set","blockAdBlock","trueFunc"]],"camsmut.com":[["rmnt","script","/setRequestHeader|decodeURIComponent/"]],"caroloportunidades.com.br":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","hasAdblock"]],"ce02forum.com":[["rmnt","script","html-load.com"]],"celebsnudeworld.com":[["acs","document.querySelectorAll","popMagic"]],"celestialtributesonline.com":[["noeval-if","/chp_?ad/"]],"cenlanow.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"chamberofcommerce.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chattanoogafishingforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"checkhookboxing.com":[["rmnt","script","html-load.com"]],"chieftain.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"chihouban.com":[["noeval-if","/chp_?ad/"]],"childrenslibrarylady.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"claimclicks.com":[["noeval-if","/chp_?ad/"],["aopr","checkAdsBlocked"]],"classic-jdm.com":[["rmnt","script","html-load.com"]],"classicalradio.com":[["set","di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"]],"clipartmax.com":[["nano-stb"]],"closermag.fr":[["acs","document.head.appendChild","='\\x"]],"cloubix.com":[["nano-sib","remaining--","*"],["aeld","click","appendChild"]],"cloudy.pk":[["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"cnn.com":[["set","FAVE.settings.ads.ssai.prod.clips.enabled","false"],["set","FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["set","FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"]],"cocoporn.net":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"]],"code9media.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"colearn.id":[["json-prune","*.tanya_video_ads"]],"collater.al":[["aopr","adsanity_ad_block_vars"]],"columbusnavigator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comicspornoxxx.com":[["acs","document.querySelectorAll","popMagic"]],"computer76.ru":[["nostif","adb"]],"concertarchives.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"continuousroamer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"convertbinary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookdinnertonight.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookrepublic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cracking.org":[["acs","$","samAdBlockAction"],["acs","RegExp","googlebot"]],"craftyartideas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazybusymama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crinacle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cristotarjetas.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"crockpotsandflipflops.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cryptomonitor.in":[["nostif","show"]],"cx70forum.com":[["rmnt","script","html-load.com"]],"d0o0d.com":[["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"daemon-hentai.com":[["acs","document.createElement","l.parentNode.insertBefore(s","/^data:/"],["acs","b2a","ai_adb","/^data:/"],["nowoif","_blank"],["aeld","click","openPopunder"],["nostif","openPopunder"],["aeld","load",".getComputedStyle"],["rmnt","script","adblock"]],"daftsex.org":[["acs","document.addEventListener","lastPopupTime"]],"dahh.net":[["acs","document.createElement","script"]],"dailycaller.com":[["set","dc.adfree","true"]],"dailycamera.com":[["nostif","n.trigger","1"],["set","CnnXt.Event.fire","noopFunc"]],"dailypudding.com":[["aopr","Adcash"],["aopr","aclib"]],"damndelicious.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["aopr","__eiPb"],["set","Object.prototype._adsDisabled","true"]],"databasefaqs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daxfutures.org":[["acs","jQuery","No"]],"daybuy.tw":[["noeval-if","/chp_?ad/"]],"dearlilliestudio.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deesweets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"defendersource.com":[["rmnt","script","html-load.com"]],"delcotimes.com":[["set","CnnXt.Event.fire","noopFunc"]],"desmoinesregister.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"detikbangka.com":[["noeval-if","/chp_?ad/"]],"dictionnaire-medical.net":[["nostif","nextFunction","2000"]],"dictionnaire.lerobert.com":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"digit77.com":[["acs","addEventListener","Blocker"]],"discover.futureplc.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"discussingfilm.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diy-forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dndsearch.in":[["acs","$","height"]],"docstips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dogsexporn.net":[["no-xhr-if","/doubleclick|googlesyndication/"],["no-fetch-if","/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"]],"dollopofdough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"draftleunlimited.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dragonball.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dragontranslation.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","String.prototype.charCodeAt","https"]],"drizzlemeskinny.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ducati.ms":[["rmnt","script","html-load.com"]],"ducatiscramblerforum.com":[["rmnt","script","html-load.com"]],"eastcoastcreativeblog.com":[["rmnt","script","/__adblocker|html-load/"]],"ebonyassclips.com":[["acs","document.querySelectorAll","popMagic"]],"ebonybird.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"ebookdz.com":[["nostif","$"]],"economicsonline.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"educationaltechnology.net":[["rmnt","script","/__adblocker|html-load/"]],"educationbluesky.com":[["no-fetch-if","googlesyndication"]],"edumailfree.com":[["no-fetch-if","adsbygoogle"]],"elkstudiohandcraftedcrochetdesigns.com":[["rmnt","script","/__adblocker|html-load/"]],"emfcaution.com":[["rmnt","script","/__adblocker|html-load/"]],"emojiflashcards.com":[["rmnt","script","/__adblocker|html-load/"]],"engstreams.shop":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","Adcash"]],"enryucomics.com":[["noeval-if","adsbygoogle"]],"epawaweather.com":[["rmnt","script","/__adblocker|html-load/"]],"epicdope.com":[["rmnt","script","/__adblocker|html-load/"]],"eracast.cc":[["rmnt","script","adblock"]],"everythinglabradors.com":[["rmnt","script","/__adblocker|html-load/"]],"ex90forum.com":[["rmnt","script","html-load.com"]],"exeygo.com":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"extratorrent.st":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"eztvtorrent.co":[["acs","document.querySelectorAll","popMagic"]],"f650.co.uk":[["rmnt","script","html-load.com"]],"f800riders.org":[["rmnt","script","html-load.com"]],"familypornhd.com":[["rmnt","script","/popMagic|pop1stp/"]],"familysavvy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"farmersalmanac.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"faucetcrypto.com":[["no-fetch-if","googlesyndication"],["nosiif","user=null","1000"]],"favoritepaintcolorsblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feedthepudge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fiestast.net":[["rmnt","script","html-load.com"]],"fikper.com":[["nowoif","?"],["nano-sib","downloadToken"]],"file-upload.net":[["set","advertisement3","true"]],"files.im":[["acs","decodeURI","decodeURIComponent"],["nano-stb","tick"]],"film-adult.com":[["nowoif","_blank"]],"filmeonline2018.net":[["nowoif"]],"finmasters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"firefile.cc":[["set","blockAdBlock._options.baitClass","null"]],"fivehearthome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fixthecfaa.com":[["rmnt","script","html-load.com"]],"flamingotoes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flixlatam.com":[["noeval-if","ads"]],"floridapanhandle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flyfishing.co.uk":[["rmnt","script","html-load.com"]],"flyfishingforum.com":[["rmnt","script","html-load.com"]],"fnfmods.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fordauthority.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fordtruckfanatics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forum.mobilism.me":[["rmnt","script","error-report.com"]],"forum.thresholdx.net":[["no-fetch-if","googlesyndication"]],"fotbolltransfers.com":[["aopr","adBlockDetected"]],"fourstateshomepage.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"fourwheeltrends.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"framedcooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freeadultcomix.com":[["rmnt","script","window.open"],["nowoif"]],"freebulksmsonline.com":[["aost","String.prototype.charCodeAt","ai_"]],"freeindiansextube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"freemp3.tube":[["nowoif"]],"freeshib.biz":[["acs","document.createElement","onerror"],["no-fetch-if","vlitag"]],"freesolana.top":[["no-xhr-if","/coinzillatag|czilladx/"]],"freex2line.onlinex":[["no-fetch-if","googlesyndication"]],"fridasofiaeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"froheweihnachten.info":[["nostif",".call(null)","10"]],"fromachefskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frontrangefed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ft.com":[["aopr","_sp_._networkListenerData"]],"fullxh.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"futabanet.jp":[["rmnt","script","html-load.com"]],"fuxnxx.com":[["acs","document.querySelectorAll","popMagic"]],"g20.net":[["rmnt","script","html-load.com"]],"g6ownersclub.com":[["rmnt","script","html-load.com"]],"gamefront.com":[["acs","$","AdBlock"],["nano-stb","","10000"]],"gamerant.com":[["aeld","error","blocker"],["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"games.bnd.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.mashable.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamesite.info":[["aeld","","break;case $."],["aopr","open"]],"gamespew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamezone.de":[["nostif",".call(null)","10"]],"ganstamovies.com":[["aeld","getexoloader"]],"gardeninthekitchen.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gayboystube.top":[["acs","document.querySelectorAll","popMagic"]],"gazette-news.co.uk":[["set","adLight","true"]],"gcloud.live":[["acs","globalThis","break;case"]],"gculopes.com":[["set","blockAdBlock","trueFunc"]],"gdr-online.com":[["set","isAdsLoaded","true"]],"gearpatrol.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"genelify.com":[["rmnt","script","detectedAdblock"]],"geo.de":[["set","foundation.adPlayer.bitmovin","{}"],["aeld","load","autoRecov"]],"getbusygardening.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"getonmysaladplate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"globfone.com":[["no-xhr-if","ads"]],"gmsquarebody.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gmt400.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gmuender-tagespost.de":[["nostif",".call(null)","10"]],"go.zovo.ink":[["acs","setTimeout","decodeURIComponent(escape"],["nowoif"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>/g","excludes","/^self\\.__next_f\\.push/"]],"gogoplay1.com":[["acs","parseInt","break;case $."]],"gohuskies.com":[["set","blockAdBlock","trueFunc"]],"golf-live.at":[["rmnt","script","html-load.com"]],"golog.jp":[["rmnt","script","html-load.com"]],"gomoviestv.to":[["acs","addEventListener","HTMLAllCollection"]],"gottanut.com":[["aopr","document.dispatchEvent"]],"gra.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"grosnews.com":[["acs","adcashMacros"]],"growingajeweledrose.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gsxr.com":[["rmnt","script","html-load.com"]],"guild-demo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guitarlobby.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"haaretz.com":[["aeld","load","hblocked"],["acs","$","AdBlockUtil"],["set","showAds","true"],["no-fetch-if","googlesyndication"]],"hanime.tv":[["aeld","click","/inter"],["set","ABLK","false"]],"hanjancrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happy-otalife.com":[["noeval-if","/chp_?ad/"]],"happytoddlerplaytime.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happyyouhappyfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardfacefuck.com":[["acs","document.querySelectorAll","popMagic"]],"hardwoodhoudini.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"hartvannederland.nl":[["set","Object.prototype.ADBLOCK_DETECTION",""]],"havaneseforum.com":[["rmnt","script","html-load.com"]],"healthfatal.com":[["noeval-if","/chp_?ad/"]],"healthtoempower.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heartifb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heartlife-matome.com":[["rmnt","script","html-load.com"]],"heavyfetish.com":[["set","flashvars.adv_pre_src",""]],"hechosfizzle.com":[["rmnt","script","await eval"]],"heydonna.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hidan.sh":[["nowoif","!hidan.sh"]],"hispasexy.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","decodeURI","decodeURIComponent"],["aopr","_cpp"],["aopr","popns"]],"hogtiehub.com":[["set","HTMLScriptElement.prototype.onload","noopFunc"],["aeld","","enforce"],["no-fetch-if","highperformanceformat"]],"hojii.net":[["noeval-if","/chp_?ad/"]],"homebuiltairplanes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemade-modern.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homesandgardens.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"hotbabeswanted.com":[["aopr","ExoLoader.addZone"]],"hotdreamsxxx.com":[["aopw","phtData"]],"huim.com":[["aopr","isAdEnabled"]],"humoroushomemaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hungryhealthyhappy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hunterscomics.com":[["rmnt","script","{delete window["],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","pubfuture","length:10"],["no-xhr-if","googlesyndication"]],"huoqwk.com":[["nostif","touchstart","1000"]],"hvac-talk.com":[["rmnt","script","html-load.com"]],"hwnaturkya.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."]],"iade.com":[["aopr","adBlockDetected"]],"iammagnus.com":[["set","adsbygoogle.loaded","true"]],"ibecamethewifeofthemalelead.com":[["acs","document.querySelectorAll","popMagic"]],"icancrochetthat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ievaphone.com":[["acs","onload"]],"igamemom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"illinoisloyalty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imagereviser.com":[["rmnt","script","/ai_|b2a/"],["set","hasFocus","trueFunc"]],"imgcredit.xyz":[["aopr","exoJsPop101"]],"immobilienscout24.de":[["nostif",".call(null)","10"]],"indianporn365.net":[["acs","document.createElement","script"]],"indofirmware.site":[["aopw","adBlockDetected"]],"informnny.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"inspiredtaste.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ipatriot.com":[["aost","Math","onerror"]],"iplayerhls.com":[["rmnt","script","#adbd"]],"irelandbeforeyoudie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"irresistiblepets.net":[["aopr","__eiPb"]],"islingtongazette.co.uk":[["set","adLight","true"]],"jacksonville.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"jasmr.net":[["acs","document.querySelectorAll","popMagic"]],"jastrzabpost.pl":[["nano-sib","consoleLoaded?clearInterval"]],"javguard.xyz":[["nowoif"]],"javplayer.com":[["acs","WebAssembly","atob"],["aeld","/click|pointerup/","handleUserAction"]],"javraveclub.com":[["acs","document.querySelectorAll","popMagic"]],"javteentube.com":[["aopr","document.dispatchEvent"]],"jeepforum.com":[["rmnt","script","html-load.com"]],"jeepreconforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"jerkyholic.com":[["rmnt","script","/__adblocker|html-load/"]],"jnews5.com":[["set","tie.ad_blocker_detector","false"]],"jootc.com":[["aost","String.prototype.charCodeAt","ai_"]],"joyfulmomma.com":[["rmnt","script","/__adblocker|html-load/"]],"jsonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"justfullporn.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"justpostedblog.com":[["rmnt","script","/__adblocker|html-load/"]],"justthegays.tv":[["aopr","popns"]],"kawiforums.com":[["rmnt","script","html-load.com"]],"kellyscleankitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"ketoconnect.net":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/"]],"keviniscooking.com":[["rmnt","script","/__adblocker|html-load/"]],"kimochi.info":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kitchenserf.com":[["rmnt","script","/__adblocker|html-load/"]],"kordramass.com":[["acs","document.onclick","popunder"]],"korogashi-san.org":[["noeval-if","/chp_?ad/"]],"kresy.pl":[["rmnt","script","/==undefined.*body/"]],"ktmforums.com":[["rmnt","script","html-load.com"]],"kugaownersclub.co.uk":[["rmnt","script","html-load.com"]],"lakestclair.net":[["rmnt","script","html-load.com"]],"lampertheimer-zeitung.de":[["nostif",".call(null)","10"]],"lcarecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"learneditfrommymom.com":[["rmnt","script","/__adblocker|html-load/"]],"learnenglish.com":[["rmnt","script","/__adblocker|html-load/"]],"learnodo-newtonic.com":[["noeval-if","/chp_?ad/"]],"leccotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"lectormangass.net":[["acs","addEventListener","HTMLAllCollection"]],"lecturisiarome.ro":[["aopr","__eiPb"]],"letmejerk2.com":[["aopr","ExoLoader"],["aeld","","_0x"]],"lifeisbeautiful.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"lilblueboo.com":[["rmnt","script","/__adblocker|html-load/"]],"linuxsimply.com":[["rmnt","script","/__adblocker|html-load/"]],"littlelearningclub.com":[["rmnt","script","/__adblocker|html-load/"]],"lmtos.com":[["noeval-if","/chp_?ad/"]],"lonestarconference.org":[["set","blockAdBlock","trueFunc"]],"longporn.xyz":[["acs","document.querySelectorAll","popMagic"],["nowoif"],["aopr","loadTool"]],"lorcanaplayer.com":[["rmnt","script","/__adblocker|html-load/"]],"loremipsum.io":[["rmnt","script","/__adblocker|html-load/"]],"lynnswayoflife.com":[["rmnt","script","/__adblocker|html-load/"]],"macanforum.com":[["rmnt","script","html-load.com"]],"macrocreator.com":[["noeval-if","/chp_?ad/"]],"mactechnews.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"madaboutmacarons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"makeuseof.com":[["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"makingitinthemountains.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamaslearningcorner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamasonabudget.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manganelo.tv":[["aopr","JSON.parse"]],"maqal360.com":[["nano-stb","div_form"],["aeld","load","htmls"],["rmnt","script","onerror"],["set","private","false"],["set","navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["set","document.onkeydown","noopFunc"],["aeld","contextmenu","preventDefault"],["aeld","visibilitychange","remainingSeconds"]],"martinloganowners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mat6tube.com":[["set","ads","undefined"]],"maths101.co.za":[["noeval-if","/chp_?ad/"]],"mcrypto.club":[["acs","document.documentElement","break;case $."]],"mega4upload.com":[["acs","document.documentElement","break;case $."]],"meloradio.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"milforddailynews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"minecraft-schematics.com":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"ministryofcurry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mississippivegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mobile.de":[["set","optimizelyDatafile","{}"],["set","optimizelyDatafile.featureFlags","[]"]],"mobilesexgamesx.com":[["nostif","/out.php"]],"modrinth.com":[["rmnt","h2","/creeperhost/i"]],"momspost.com":[["acs","document.querySelectorAll","popMagic"]],"momsrecipecollection.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"monpetitfour.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"monroenews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"mooglyblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moonquill.com":[["aopw","document.getElementsByClassName"]],"morganhillwebcam.com":[["nostif","innerHTML"]],"movi.pk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."],["nowoif"],["aeld","","vads"],["acs","eval","replace"]],"msdos-games.com":[["nostif","getComputedStyle"]],"murphysmultiverse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mut.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"muydelish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mybartender.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myeverydaytable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myfederalretirement.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mygolfspy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mylivewallpapers.com":[["no-fetch-if","ads"],["noeval-if","/chp_?ad/"]],"mym-db.com":[["rmnt","script","wpadmngr.com"]],"naijanowell.com":[["acs","document.documentElement","break;case $."]],"ncraoa.com":[["rmnt","script","/__adblocker|html-load/"]],"nelomanga.net":[["nowoif"]],"nemzetisport.hu":[["rmnt","script","()=>eval"],["rmnt","script","() => eval"]],"neodrive.xyz":[["rmnt","script","FingerprintJS"]],"net--tours-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"netoff.co.jp":[["set","_etmc","{}"],["set","_etmc.push","noopFunc"]],"newcastleworld.com":[["rmnt","script","await eval"]],"newsweek.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"newsyou.info":[["rmnt","script","html-load.com"]],"nflscoop.xyz":[["aopr","aclib"]],"ninahendrick.com":[["rmnt","script","/__adblocker|html-load/"]],"nissan-navara.net":[["rmnt","script","html-load.com"]],"nklinks.click":[["nostif","displayMessage","2000"]],"nmovies.cc":[["acs","JSON.parse","break;case $."]],"nodakoutdoors.com":[["rmnt","script","html-load.com"]],"northeast.aaa.com":[["set","_uxa","{}"],["set","_uxa.push","noopFunc"]],"northernfarmer.co.uk":[["set","adLight","true"]],"northumberlandgazette.co.uk":[["rmnt","script","await eval"]],"noticiascripto.site":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","document.onmousedown"]],"novelssites.com":[["aeld","click","event.dispatch"],["nowoif"],["set","blurred","false"]],"novostrong.com":[["aopr","AaDetector"]],"nowsports.me":[["acs","document.documentElement","break;case $."]],"nu6i-bg-net.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nostif","getComputedStyle"]],"nulakers.ca":[["set","blockAdBlock","trueFunc"]],"nutritionforrunning.com":[["rmnt","script","/__adblocker|html-load/"]],"obituaryupdates.com":[["noeval-if","/chp_?ad/"]],"officerassignments.com":[["rmnt","script","/__adblocker|html-load/"]],"officialpanda.com":[["noeval-if","/chp_?ad/"]],"oliviaadriance.com":[["rmnt","script","/__adblocker|html-load/"]],"omeuemprego.online":[["rmnt","script","adsbygoogle"]],"onepiece-mangaonline.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"oneprojectcloser.com":[["rmnt","script","/__adblocker|html-load/"]],"onlinework4all.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","Math","zfgloaded"]],"origami.me":[["no-xhr-if","adsbygoogle"]],"orlandoparkstop.com":[["rmnt","script","/__adblocker|html-load/"]],"otomi-games.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","Math","break;case $."],["nano-sib"],["aopr","popns"]],"ottawasun.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"ourfifthhouse.com":[["rmnt","script","/__adblocker|html-load/"]],"overdraftapps.com":[["rmnt","script","/__adblocker|html-load/"]],"parasportontario.ca":[["set","closeBlockerModal","false"]],"parents.at":[["aopw","AdBlockDetectorWorkaround"]],"parkrangerjohn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"partner.nonamejose.sx":[["set-local-storage-item","removeAdv","true"],["nostif","","15000"]],"passportaction.com":[["noeval-if","/chp_?ad/"]],"perfectunion.com":[["rmnt","script","html-load.com"]],"perverzija.com":[["aeld","message","_0x"]],"physicsforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pisshamster.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","Exo"],["aeld","getexoloader"]],"pitcherlist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"planetaminecraft.com":[["set","ab","false"]],"plantinformer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"play.max.com":[["json-prune","adtech-brightline adtech-google-pal adtech-iab-om"]],"play.tv3.ee":[["set","Object.prototype.isNoAds","{}"]],"playstationhaber.com":[["nostif","show"]],"pocketturbo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pokequestrecipes.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pontiacdailyleader.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"populationpyramid.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porn00.org":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["nowoif"]],"porno-rolik.com":[["acs","document.querySelectorAll","popMagic"]],"pornoperra.com":[["acs","document.querySelectorAll","popMagic"]],"pornsocket.com":[["set","_site_ads_ns","true"]],"portnassauwebcam.com":[["nostif","innerHTML"]],"posterify.net":[["noeval-if","/chp_?ad/"]],"powerwatch.jp":[["rmnt","script","html-load.com"]],"practicequiz.com":[["aopw","adBlockDetected"]],"preparednessmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pressplay.cam":[["acs","EventTarget.prototype.addEventListener","delete window"]],"prettyhandygirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primapaginamarsala.it":[["aopr","wpsite_clickable_data"]],"printabulls.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"produktion.de":[["set","adblock","false"]],"profootballnetwork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pugliain.net":[["nostif","mdp"]],"puptraveller.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"quesignifi.ca":[["nostif","documentElement.innerHTML"],["no-fetch-if","doubleclick","","{\"type\": \"opaque\"}"],["set","document.hasFocus","trueFunc"]],"rabbitcaretips.com":[["rmnt","script","/__adblocker|html-load/"]],"racedepartment.com":[["acs","$","adsBlocked"]],"radio-polska.pl":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radioitaliacanada.com":[["aopr","adp"]],"radionatale.com":[["aopr","adp"]],"radionylive.com":[["aopr","adp"]],"rainmail.xyz":[["rmnt","script","enable_ad_block_detector"]],"raptorforumz.com":[["rmnt","script","html-load.com"]],"readcomicsonline.lol":[["nostif","getComputedStyle"]],"realbalanced.com":[["rmnt","script","/__adblocker|html-load/"]],"realfoodwholelife.com":[["rmnt","script","/__adblocker|html-load/"]],"realmomsex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"receitasoncaseiras.online":[["acs","Math","break;case $."]],"recipenp.com":[["noeval-if","/chp_?ad/"]],"recipevibes.com":[["rmnt","script","/__adblocker|html-load/"]],"record-courier.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"redandhoney.com":[["rmnt","script","/__adblocker|html-load/"]],"reddflix.com":[["acs","document.querySelectorAll","popMagic"],["aopr","open"],["aopr","LieDetector"]],"redwap2.com":[["aeld","click","popMagic"]],"regenzi.site":[["rmnt","script","/_0x|brave|onerror/"]],"reheardle.com":[["rmnt","script","/__adblocker|html-load/"]],"replica-watch.info":[["aeld","DOMContentLoaded","adsBlocked"]],"reviersport.de":[["nostif",".call(null)","10"]],"riazor.org":[["no-fetch-if","method:HEAD"]],"ripplehub.site":[["nowoif"]],"rjno1.com":[["aopr","document.documentElement.clientWidth"]],"roadtripmanitoba.com":[["rmnt","script","/__adblocker|html-load/"]],"rokni.xyz":[["no-fetch-if","adsbygoogle"]],"romaierioggi.it":[["noeval-if","/chp_?ad/"]],"romaniataramea.com":[["aopr","bizpanda"]],"roporno.info":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rostercon.com":[["rmnt","script","html-load.com"]],"rotinrice.com":[["rmnt","script","/__adblocker|html-load/"]],"rppk13baru.blogspot.com":[["acs","addEventListener","blocker"]],"runwashington.com":[["rmnt","script","/__adblocker|html-load/"]],"rvtrader.com":[["rmnt","script","html-load.com"]],"ryanmoore.marketing":[["noeval-if","/chp_?ad/"]],"ryansharich.com":[["noeval-if","/chp_?ad/"]],"sab.bz":[["aopr","jsPopunder"]],"scientificallysweet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seasonedskilletblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"senzuri.tube":[["acs","adver"]],"sewwhatalicia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexkbj.com":[["acs","document.querySelectorAll","popMagic"]],"sextubedot.com":[["noeval"],["aopr","Aloader.serve"]],"seznamzpravy.cz":[["nostif","0x"],["ra","style","[style*=\"background-image: url\"]","stay"],["ra","href","[href*=\"click?\"]","stay"]],"sgxnifty.org":[["acs","jQuery","No"]],"shadesofblueinteriors.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shootersforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"shrib.com":[["nostif","adb","6000"]],"shrtslug.biz":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"simplyhappyfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplyhookedbyjanet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplykinder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplywhisked.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["aopr","__eiPb"]],"siouxlandproud.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"siriusfiles.com":[["nano-stb"]],"sitepdf.com":[["aeld","","break;case $."],["aopr","open"]],"skyscrapercity.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"slkworld.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sloughobserver.co.uk":[["set","adLight","true"]],"slowcookermeals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smoothdraw.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southsideshowdown.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"space-faucet.com":[["noeval-if","/chp_?ad/"]],"sportsgames.today":[["acs","EventTarget.prototype.addEventListener","delete window"]],"sportzonline.site":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"spotebi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sproutedkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"starwarsunlimited.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"statisticsanddata.org":[["set-attr","iframe[data-src-cmplz][src=\"about:blank\"]","src","[data-src-cmplz]"]],"stmify.com":[["rmnt","script","'error'"]],"streamvid.dev":[["acs","WebAssembly","atob"],["acs","setTimeout","/_0x|window\\.open/"],["nowoif"]],"studyinghuman6js.shop":[["nano-sib","countDown"]],"subtitles.cam":[["acs","setTimeout","admc"]],"suedkurier.de":[["set","_ti_update_user","noopFunc"]],"sugarspunrun.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"suikora.com":[["no-fetch-if","/googlesyndication|doubleclick|favicon.ico/"],["nowoif","_blank"]],"supervideo.tv":[["acs","Math","break;case $."]],"sushiscan.net":[["rmnt","script","adserverDomain"]],"sweetpeaskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetteaandthyme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tajpoint.com":[["acs","Math","break;case $."]],"talkwithstranger.com":[["rmnt","script","html-load.com"]],"tastyairfryerrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"team-integra.net":[["rmnt","script","html-load.com"]],"technicians0.blogspot.com":[["rmnt","script","antiAdBlockerHandler"]],"tempr.email":[["set","adblock","false"]],"tenacrebaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tennessean.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"theblogette.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecarnivalcruiseblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefamilyfoodkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefrugalchicken.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefullhelping.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theharperhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehonoursystem.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theimpulsivebuy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thejudge13.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelifejolie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themamahandbook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themuse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenourishinggourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theoaklandpress.com":[["set","CnnXt.Event.fire","noopFunc"]],"thepiratebay10.info":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thepurplepumpkinblog.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theresident.co.uk":[["set","adLight","true"]],"thermo.kitchen":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theseasonedmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestingyvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesustainablelivingguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetechwire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetemp.email":[["no-fetch-if","adsbygoogle"]],"thetimelinegeek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetottenhamindependent.co.uk":[["set","adLight","true"]],"thevgnway.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thirtyhandmadedays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisiswiltshire.co.uk":[["set","adLight","true"]],"thissillygirlskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tidalfish.com":[["rmnt","script","html-load.com"]],"tinxahoivn.com":[["rmnt","script","myModal"]],"tipsandtrickskorea.com":[["rmnt","script","await eval"]],"titlecaseconverter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"todaytvseries1.com":[["rmnt","script","protectedDomains"]],"topdrama.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tour-magazin.de":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"tranny.one":[["popads-dummy"],["aopr","open"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"travelingwithjessica.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"treadmill.run":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"triedandtrueblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trifive.com":[["rmnt","script","html-load.com"]],"truetrophies.com":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"tsmovies.com":[["acs","document.querySelectorAll","popMagic"]],"tundraevforum.com":[["rmnt","script","html-load.com"]],"turbo.cr":[["acs","WebAssembly","atob"]],"turkleech.com":[["nostif","nextFunction","2000"]],"turkmmo.com":[["acs","$","AdBlock"],["nostif","samOverlay"]],"tutwuri.id":[["nowoif"],["nano-sib"]],"tv.wp.pl":[["set-local-storage-item","WPadbd","$remove$"]],"tvtropes.org":[["nostif","/offsetHeight|loaded/"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"tw.xn--h9jepie9n6a5394exeq51z.com":[["noeval-if","/chp_?ad/"]],"twoplaidaprons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"uctnew.com":[["acs","parseInt","break;case $."]],"umamidays.com":[["rmnt","script","/__adblocker|html-load/"]],"umamigirl.com":[["rmnt","script","/__adblocker|html-load/"]],"undeniable.info":[["acs","document.getElementById","testadblock"]],"uptomega.net":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"utakmice.net":[["nowoif","uzivo"]],"uvmathletics.com":[["set","blockAdBlock","trueFunc"]],"vancouversun.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"vebo1.com":[["aopr","adsRedirectPopups"]],"veggl.com":[["rmnt","script","/__adblocker|html-load/"]],"verteleseriesonline.com":[["aopr","adBlockDetected"],["nosiif","visibility","1000"]],"viciante.com.br":[["noeval-if","/chp_?ad/"]],"vidco.pro":[["rmnt","script","adserverDomain"]],"vide-greniers.org":[["no-fetch-if","ads"]],"videosgays.net":[["noeval-if","/chp_?ad/"]],"vidlo.us":[["acs","JSON.parse","break;case $."],["aeld","","_0x"]],"vidoza.net":[["noeval"],["nowoif"],["acs","Math","zfgloaded"]],"viduro.top":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"vinodelvida.com":[["rmnt","script","/__adblocker|html-load/"]],"vizslaforums.com":[["rmnt","script","html-load.com"]],"vlhhealth.com":[["rmnt","script","/__adblocker|html-load/"]],"volokit2.com":[["json-prune","*","*.adserverDomain"],["rmnt","script","/adserverDomain|\\);break;case /"],["aopr","Adcash"]],"vrporn.com":[["acs","navigator","popunder"]],"vuinsider.com":[["nostif","show"]],"vulgarmilf.com":[["aopr","document.dispatchEvent"]],"vz.lt":[["acs","$","adblock"]],"walesfarmer.co.uk":[["set","adLight","true"]],"waploaded.com":[["acs","document.querySelectorAll","popMagic"],["acs","parseInt","break;case $."]],"watch.foodnetwork.com":[["json-prune","data.attributes.ssaiInfo.forecastTimeline data.attributes.ssaiInfo.vendorAttributes.nonLinearAds data.attributes.ssaiInfo.vendorAttributes.videoView data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adMetadata data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adParameters data.attributes.ssaiInfo.vendorAttributes.breaks.[].timeOffset"]],"wavy.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wcoanimedub.tv":[["nostif","google_jobrunner"]],"wearesunderland.com":[["set","adLight","true"]],"weldingweb.com":[["rmnt","script","html-load.com"]],"whofacts.com":[["rmnt","script","/__adblocker|html-load/"]],"wholefoodsoulfoodkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"whycalculator.com":[["rmnt","script","/__adblocker|html-load/"]],"whyvpn.my.id":[["acs","document.querySelector","akadb"]],"wildcatforums.net":[["rmnt","script","html-load.com"]],"windowsdispatch.com":[["rmnt","script","/__adblocker|html-load/"]],"winlator.com":[["no-fetch-if","googlesyndication"]],"winteriscoming.net":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"wiproud.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"witcherhour.com":[["nostif","show"],["no-fetch-if","ads"]],"wkrn.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wmagazine.com":[["nofab"]],"wnyt.com":[["rmnt","script","/__adblocker|html-load/"]],"woman.excite.co.jp":[["ra","data-woman-ex","a[href][data-woman-ex]"]],"worder.cat":[["set","ab.dt","false"]],"workingdogforum.com":[["rmnt","script","html-load.com"]],"worksheetgenius.com":[["rmnt","script","/__adblocker|html-load/"]],"worldgirlsportal.com":[["acs","Math","break;case $."]],"worldofgardenplants.com":[["rmnt","script","/__adblocker|html-load/"]],"wowyoungsex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"wrxtuners.com":[["rmnt","script","html-load.com"]],"wzzm13.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xasiat.com":[["aopr","exoJsPop101"],["aopr","ExoLoader.serve"]],"xdld.pages.dev":[["noeval-if","window.open"]],"xemales.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"xhamster.fm":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","pop_init"]],"xhmoon5.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xn--31byd1i.net":[["no-fetch-if","googlesyndication"]],"xpeditionforum.com":[["rmnt","script","html-load.com"]],"xxx18.uno":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"xxx24.vip":[["aopr","exoJsPop101"]],"xxxfree.watch":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"]],"xxxpussysextube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"youngandtheinvested.com":[["rmnt","script","/__adblocker|html-load/"]],"z06vette.com":[["rmnt","script","html-load.com"]],"zamundatv.com":[["acs","document.documentElement","break;case $."]],"zeroradio.co.uk":[["aopr","wpsite_clickable_data"]],"zhlednito.cz":[["acs","document.dispatchEvent","myEl"],["aopr","ExoLoader.serve"],["nosiif","/^/"]],"ziminvestors.com":[["noeval-if","/chp_?ad/"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
