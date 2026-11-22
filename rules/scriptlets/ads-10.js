/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"10gb.vn":[["set","detectedAdblock","noopFunc"]],"10play.com.au":[["json-prune","cuepoints","cuepoints.[].start cuepoints.[].end cuepoints.[].start_float cuepoints.[].end_float"],["set","moatPrebidApi","{}"],["set","moatPrebidApi.getMoatTargetingForPage","noopFunc"]],"111movies.com":[["acs","clearTimeout","popundersPerIP"]],"185.53.88.104":[["aeld","","break;case $."]],"1xfaucet.com":[["rmnt","script",".offsetHeight"]],"3dprinterly.com":[["rmnt","script","/__adblocker|html-load/"]],"3xyaoi.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","adsbygoogle"]],"4activetalk.com":[["rmnt","script","html-load.com"]],"4cash.me":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"5ggyan.com":[["acs","document.addEventListener","google_ad_client"],["nano-sib","countDown"]],"5thwheelforums.com":[["rmnt","script","/__adblocker|html-load/"]],"aboedman.com":[["noeval-if","/chp_?ad/"]],"abraskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acapellas4u.co.uk":[["nostif","bait","1"]],"adamownersclub.co.uk":[["rmnt","script","html-load.com"]],"adsfly.in":[["nowoif"]],"adult-sex-gamess.com":[["nostif","/out.php"]],"advnture.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"agrarwetter.net":[["aopw","detector_launch"]],"airliners.de":[["nostif",".call(null)","10"]],"allcelebs.club":[["acs","document.querySelectorAll","popMagic"]],"allcivilstandard.com":[["noeval-if","/chp_?ad/"]],"allwaysdelicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allysonvanhouten.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alphamom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amateurporn.co":[["acs","document.querySelectorAll","popMagic"],["set","isAdBlockActive","false"],["set","flashvars.popunder_url",""]],"amaturehomeporn.com":[["noeval-if","/chp_?ad/"]],"ancensored.com":[["aeld","/^(?:click|mousedown)$/","_0x"],["aopr","AaDetector"]],"angelfire.com":[["acs","document.write","lycos_ad"]],"angolopsicologia.com":[["noeval-if","/chp_?ad/"]],"animalwebcams.net":[["noeval-if","/chp_?ad/"]],"animedao.com.ru":[["no-xhr-if","googlesyndication"]],"animesonlineshd.com":[["noeval-if","/chp_?ad/"]],"animetwixtor.com":[["noeval-if","/chp_?ad/"]],"anmup.com.np":[["noeval-if","/chp_?ad/"]],"anoffgridlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"antonimos.de":[["nostif","documentElement.innerHTML"],["no-fetch-if","doubleclick","","{\"type\": \"opaque\"}"],["set","document.hasFocus","trueFunc"]],"apkandroidhub.in":[["no-fetch-if","googlesyndication"]],"aquariadise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aquariumforum.com":[["rmnt","script","html-load.com"]],"archiwumalle.pl":[["acs","jQuery","ga"]],"areinventedmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arhplyrics.in":[["nano-sib"],["no-fetch-if","googlesyndication"]],"ariestube.com":[["aopr","document.dispatchEvent"]],"artfulhomemaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asd.homes":[["aopr","LieDetector"]],"at4forum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audinifer.com":[["rmnt","script","window.open"]],"audioassemble.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"autoshieldd.com":[["noeval-if","/chp_?ad/"]],"avoiderrors.com":[["nostif","css_class.show"]],"aylink.co":[["rmnt","script","toast"],["aopr","xmlhttp"],["nano-sib"],["ra","data-ppcnt_ads|onclick","#main[onclick*=\"mainClick\"]","stay"]],"aznude.com":[["aeld","","popMagic"],["set","AdProvider","noopFunc"],["set","AdProvider.push","noopFunc"]],"bab.la":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"bagi.co.in":[["rmnt","script","/charAt|XMLHttpRequest/"]],"bakeandbacon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baking-forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baking4happiness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"banned.video":[["set","Object.prototype.ads.nopreroll_","true"]],"batporno.com":[["aopr","decodeURI"]],"beaddiagrams.com":[["noeval-if","/chp_?ad/"]],"beamng.wesupply.cx":[["set","importFAB","undefined"]],"beatriceryandesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beautycrafter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bebasbokep.online":[["acs","WebAssembly","atob"],["rmnt","script","/popMagic|pop1stp/"],["acs","document.createElement","zoneid"]],"beelink.pro":[["no-fetch-if","googlesyndication"]],"best18porn.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"bestialitysextaboo.com":[["acs","$","azar"]],"bestialporn.com":[["aopr","open"]],"bestlist.top":[["acs","document.querySelectorAll","popMagic"]],"bigislanditineraries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bikeexif.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bilan.ch":[["aopr","_sp_._networkListenerData"]],"bilasport.net":[["aopr","pwparams"]],"blesserhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blick.de":[["nostif",".call(null)","10"]],"blog.receivefreesms.co.uk":[["nostif","show"]],"booknotification.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bookpraiser.com":[["noeval-if","/chp_?ad/"]],"boote-magazin.de":[["set","HTMLScriptElement.prototype.onerror","undefined"],["no-fetch-if","bf-ad.net"]],"bostonherald.com":[["nostif","n.trigger","1"],["set","CnnXt.Event.fire","noopFunc"]],"bowlsarethenewplates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxofpuns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"breederbest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brendid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bsugarmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bullfrag.com":[["acs","eval","replace"]],"bullion.forum":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burnbutt.com":[["acs","document.addEventListener","google_ad_client"]],"burytimes.co.uk":[["set","adLight","true"]],"bustybloom.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["aopr","loadTool"]],"busuu.com":[["nano-sib","current-=1","*","0.001"]],"bztube.com":[["set","page_params.holiday_promo","true"]],"cakebycourtney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cakenknife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cakescottage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"calculator.academy":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camhoes.tv":[["acs","onload","onclick"],["set","flashvars.adv_pause_html",""],["set","flashvars.adv_start_html",""],["set","flashvars.logo_text",""],["set","flashvars.mlogo",""],["set","flashvars.popunder_url",""],["set","hasPoped","true"]],"camwhorez.tv":[["set","flashvars.adv_pre_src",""],["set","flashvars.adv_pre_url",""],["set","flashvars.adv_pre_vast",""],["set","flashvars.protect_block",""]],"caneswarning.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"cardscanner.co":[["nostif","show"]],"careersatcouncil.com.au":[["acs","document.getElementById","fakeElement"]],"carrnissan.com":[["rmnt","script","detectAdBlock"],["set","count","0"]],"cashkar.in":[["noeval-if","/chp_?ad/"]],"cataz.stream":[["acs","EventTarget.prototype.addEventListener","delete window"]],"celebmix.com":[["set","jQuery.adblock","false"]],"checktls.com":[["set","adsbygoogle","{}"],["set","google_tag_manager","{}"],["set","adsbygoogle.loaded","true"]],"chefdehome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chefjacooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chefjonwatts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chemistrylearner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clashguideswithdusk.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"classifarms.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"codingshiksha.com":[["nostif","css_class.show"]],"codycrosssolutions.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coinsrev.com":[["aopr","adsBlocked"],["no-fetch-if","googlesyndication"]],"collective.world":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"collegelifemadeeasy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"commands.gg":[["aeld","","document.body"]],"comparteunclic.com":[["aopr","NoAdBlock"]],"computerhilfen.de":[["nostif",".call(null)","10"]],"computeruser.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"confessionsofagroceryaddict.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"consoleroms.com":[["nano-sib","timeLeft"]],"constructionplacement.org":[["noeval-if","/chp_?ad/"]],"cookedandloved.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingmadehealthy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithbliss.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cooksdream.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cosplay-xxx.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"cotravinh.blogspot.com":[["aeld","load","nextFunction"]],"countrydiaries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"courierpress.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"cravenherald.co.uk":[["set","adLight","true"]],"cruzetalk.com":[["rmnt","script","html-load.com"]],"csrevo.com":[["acs","document.querySelectorAll","popMagic"]],"cupcakesavvyskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cupofflour.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cushyspa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"custommagnums.com":[["rmnt","script","html-load.com"]],"cyberstumble.com":[["aopr","b2a"]],"cybertruckownersclub.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"czechsex.net":[["acs","document.querySelectorAll","popMagic"]],"daemonanime.net":[["acs","document.createElement","l.parentNode.insertBefore(s","/^data:/"],["acs","eval","replace"],["acs","document.addEventListener","google_ad_client"],["nostif","adbl"],["set","detectAdBlock","noopFunc"],["nowoif","_blank"],["aeld","","STORAGE2"],["aeld","DOMContentLoaded","app_advert"]],"dailymotion.com":[["set","__NATIVEADS_CANARY__","true"]],"dailynous.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"darlingquote.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deine-tierwelt.de":[["nostif",".call(null)","10"]],"denverpioneers.com":[["set","blockAdBlock","trueFunc"]],"designthusiasm.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desitab69.sextgem.com":[["nowoif"]],"dessertfortwo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dict.cc":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"dimensionalseduction.com":[["rmnt","script","/popMagic|pop1stp/"]],"dinnerin321.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"directupload.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dirtyfox.net":[["acs","document.querySelectorAll","popMagic"],["aopr","decodeURI"]],"disneytouristblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diyelectriccar.com":[["rmnt","script","html-load.com"]],"dktechnicalmate.com":[["acs","eval","replace"],["nano-stb","redirectpage","13500","0.001"],["nostif","offsetHeight","100"],["aeld","DOMContentLoaded","AdBlock"]],"do0od.com":[["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dodgerblue.com":[["rmnt","script","error-report.com"]],"dollforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domesticdreamboat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dooodster.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dorsetmagazine.co.uk":[["set","adLight","true"]],"downloadcursos.gratis":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"downshiftology.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"downsizingdinner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drinksmixer.com":[["set","Date.now","noopFunc"]],"droidgamers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dronezon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ducatihyper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"durhamopenhouses.com":[["acs","document.getElementById","fakeElement"]],"dyngutter.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dziennikpolski24.pl":[["aeld","","show"]],"e-mountainbike.com":[["nostif",".call(null)","10"]],"e46fanatics.com":[["rmnt","script","html-load.com"]],"earthsfriends.com":[["rmnt","script","/__adblocker|html-load/"]],"easyhomemaderecipes.ca":[["rmnt","script","/__adblocker|html-load/"]],"echo-news.co.uk":[["set","adLight","true"]],"ecomento.de":[["nostif",".call(null)","10"]],"economicshelp.org":[["rmnt","script","/__adblocker|html-load/"]],"electricbluefood.com":[["rmnt","script","/__adblocker|html-load/"]],"elliott.org":[["rmnt","script","/__adblocker|html-load/"]],"ellwoodcityledger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"elmalajeno.com":[["acs","document.createElement","script"]],"embraceinnerchaos.com":[["noeval-if","/chp_?ad/"]],"emoji.gg":[["no-xhr-if","adsbygoogle"],["rmnt","script","self.loadPW"]],"emptyeasel.com":[["rmnt","script","/__adblocker|html-load/"]],"emulatorgames.net":[["nano-sib","","","0.3"],["nano-stb","","7000","0"]],"emurom.net":[["set","dvsize","52"],["aost","jQuery","removeDLElements"]],"en-thunderscans.com":[["nostif","getComputedStyle(testAd)"]],"enmods.com":[["rmnt","script",".offsetParent"]],"enorme.tv":[["acs","EventTarget.prototype.addEventListener","delete window"]],"ericeastweight.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"escaladeevforum.com":[["rmnt","script","html-load.com"]],"esportsnext.com":[["noeval-if","/chp_?ad/"]],"essexlifemag.co.uk":[["set","adLight","true"]],"eveningtimes.co.uk":[["aopw","_sp_"]],"eveningtribune.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"everything2stroke.com":[["rmnt","script","html-load.com"]],"exactlyhowlong.com":[["noeval-if","ads"]],"exe-urls.com":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"exploringvegan.com":[["rmnt","script","/__adblocker|html-load/"]],"f-typeclub.com":[["rmnt","script","html-load.com"]],"f150forumz.com":[["rmnt","script","html-load.com"]],"f6cforum.com":[["rmnt","script","html-load.com"]],"fabtcg.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fatxxxtube.com":[["acs","document.querySelectorAll","popMagic"]],"fembed9hd.com":[["nowoif"],["aopr","__Y"]],"ferdroid.net":[["noeval-if","/chp_?ad/"]],"fetishtube.cc":[["acs","decodeURI","decodeURIComponent"]],"fierceboard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"filemooon.top":[["noeval-if","popunder"],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"files.fm":[["aopr","canRunAds"]],"filmpornoitaliano.org":[["acs","document.querySelectorAll","popMagic"]],"filmypoints.in":[["noeval-if","/chp_?ad/"],["nano-sib","timer","1000","0.001"],["set","count","0"]],"filtercams.com":[["acs","$","#advVid"]],"financialbestlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"finding-camellia.com":[["acs","document.querySelectorAll","popMagic"]],"findjav.com":[["nowoif"],["nostif","window.open"]],"firefighterinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"firstdayofhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"firstsportz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitnessscenz.com":[["noeval-if","/chp_?ad/"]],"fjrowners.com":[["rmnt","script","html-load.com"]],"fliesonly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flowerglossary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodtasia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballfancast.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"footstockings.com":[["set","flashvars.video_click_url",""],["set","flashvars.popunder_url",""],["set","flashvars.protect_block",""]],"forge.plebmasters.de":[["json-prune","results.[-].advertisement"],["no-fetch-if","/partners/home"]],"freeltc.online":[["noeval-if","ads"]],"freemonogrammaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freeoseocheck.com":[["noeval-if","/chp_?ad/"]],"freepatternsarea.com":[["nostif","show"]],"freethemesy.com":[["nano-sib","counter","*","0.02"]],"fromicecreamtosteak.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frontporchlifemagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frugalcouponliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fun-squared.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funfoodfrolic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funztv.com":[["noeval-if","/chp_?ad/"]],"futemais.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"gadgets.es":[["set","DHAntiAdBlocker","true"],["set","isAdBlockActive","false"]],"games.daytondailynews.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.puzzles.ca":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.theadvocate.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games360rgh.com":[["rmnt","script",".offsetHeight"]],"gamingbible.com":[["rmnt","script","\"nowprocket\""]],"gardenerspath.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gardenersyards.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gartenlexikon.de":[["nostif",".call(null)","10"]],"geniale-tricks.com":[["nostif",".call(null)","10"]],"gestyy.com":[["set","adsBlockerDetector","noopFunc"],["set","globalThis","null"],["aopr","NREUM"],["acs","Math","break;case $."]],"ginghamgardens.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlsofdesire.org":[["aeld","getexoloader"],["nosiif","/^/"]],"globetv.app":[["nano-stb","adRendered","*","0.001"]],"globlenews.in":[["no-fetch-if","googlesyndication"]],"gnom-gnom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"go2share.net":[["no-fetch-if","googlesyndication"]],"gokartguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goodenessgracious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gosbagotui.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["rmnt","script","/h=decodeURIComponent|popundersPerIP|popup|\\.onerror|WebAssembly/i"]],"gowatchseries.net":[["nostif","/bait|AdBlock/i"],["nowoif","_blank"]],"goyoungporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"grapee.jp":[["rmnt","script","html-load.com"]],"greatschools.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grecaleforum.com":[["rmnt","script","html-load.com"]],"greenlitebites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greetingcardpoet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"groovypost.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gtr.co.uk":[["rmnt","script","html-load.com"]],"gtrlife.com":[["rmnt","script","html-load.com"]],"guncelkaynak.com":[["acs","jQuery","ai_adb"]],"gupload.xyz":[["aeld","click","adClickThrough"],["rmnt","script","/document\\.write|MouseEvent|z-index:9999/"],["acs","EventTarget.prototype.addEventListener","open"]],"gutefrage.net":[["nosiif","0x"],["rmnt","script","await eval"],["rmnt","script","/:\\[?window,/"],["rmnt","script","html-load.com"]],"happysimpleliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hard-tubesex.com":[["aopr","Aloader.serve"],["noeval"]],"hardcoresledder.com":[["rmnt","script","html-load.com"]],"haz.de":[["nostif",".call(null)","10"]],"hbculifestyle.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"hdfilmcehennemi2.cx":[["set-local-storage-item","adDisplayed","$remove$"]],"hdmotori.it":[["nostif","CANG","3000"]],"hdtoday.tv":[["acs","document.documentElement","break;case $."]],"hedgehogcentral.com":[["rmnt","script","html-load.com"]],"hentaianimezone.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["noeval-if","l.parentNode.insertBefore(s"],["set","univresalP","noopFunc"],["acs","onload","puHref"]],"hentaiasmr.moe":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"hentaicovid.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"hentaimama.tv":[["no-fetch-if","havenclick"]],"hentaiporno.xxx":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["set","vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""]],"hentaixnx.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"heraldmailmedia.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"heraldnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"herpaperroute.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hertsad.co.uk":[["set","adLight","true"]],"heysigmund.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"higherorlowergame.com":[["rmnt","script","void 0 || window,"]],"hihihaha1.xyz":[["acs","document.documentElement","break;case $."],["aost","HTMLElement.prototype.click","_0x"]],"hindimatrashabd.com":[["noeval-if","/chp_?ad/"]],"holisticfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homegrail.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hondashadow.net":[["rmnt","script","html-load.com"]],"honeywerehome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"horairesdouverture24.fr":[["rmnt","script","html-load.com"]],"hostingunlock.com":[["acs","$","show"]],"hotfm.audio":[["no-xhr-if","adswizz.com"]],"hotjapaneseshows.com":[["aopr","popit"],["aeld","popstate","noPop"]],"housekeen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howifx.com":[["set","timeSec","0"],["nano-stb","getlink","*","0.001"],["noeval-if","replace"]],"howmuchisin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howthingscompare.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtobearedhead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtodisney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hpjav.in":[["aeld","load","puTSstrpcht"]],"htsport.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"hugsandcookiesxoxo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hummerchat.com":[["rmnt","script","html-load.com"]],"hygiena.com":[["aopr","aoAdBlockDetected"]],"ibreatheimhungry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"icelz.to":[["aopw","Adcash"]],"iir.ai":[["acs","Math","XMLHttpRequest"],["aeld","load",".appendChild"],["aopr","app_vars.force_disable_adblock"],["aopr","open"],["aopw","Fingerprint2"],["set","blurred","false"]],"imagetwist.netlify.app":[["acs","document.querySelectorAll","popMagic"]],"imaginacres.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"impalassforum.com":[["rmnt","script","html-load.com"]],"indecentvideos.com":[["noeval"],["aopr","Aloader.serve"]],"indulgenteats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infidrive.net":[["no-xhr-if","googlesyndication"],["nano-stb","-1","*","0.001"]],"inspirationmadesimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"intercelestial.com":[["nowoif"],["rmnt","script","documentElement"],["aeld","click","/(?=[\\s\\S]*(?:isTrusted|defaultPrevented|button))(?=[\\s\\S]*(?:ctrlKey|metaKey|shiftKey|altKey))(?=[\\s\\S]*(?:getAttribute|tagName))(?=[\\s\\S]*Date\\s*\\.\\s*now)/","elements","document"]],"iowaconference.com":[["set","blockAdBlock","trueFunc"]],"jav.re":[["aost","onload","/app.js"]],"javabeat.net":[["rmnt","script","/__adblocker|html-load/"]],"javbull.tv":[["acs","document.querySelectorAll","popMagic"]],"javdock.com":[["acs","document.querySelectorAll","popMagic"]],"javhdz.today":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"javmilf.xyz":[["acs","document.querySelectorAll","popMagic"]],"javmvp.com":[["aopr","__Y"]],"javnew.net":[["acs","document.querySelectorAll","adConfig"],["acs","document.querySelectorAll","popMagic"]],"javsexfree.com":[["acs","document.querySelectorAll","popMagic"]],"jawnsicooked.com":[["rmnt","script","/__adblocker|html-load/"]],"jemontremabite.com":[["aopr","localStorage"]],"jennifereconomicgive.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jessicayeahcatch.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jewelry.com.my":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"jkowners.com":[["rmnt","script","html-load.com"]],"jncojeans.com":[["nano-sib","counter","*"]],"jolynneshane.com":[["rmnt","script","/__adblocker|html-load/"]],"jonathanzaragoza.com":[["rmnt","script","/__adblocker|html-load/"]],"jpg6.su":[["acs","WebAssembly","atob"]],"juliemarieeats.com":[["rmnt","script","/__adblocker|html-load/"]],"jumbleanswer.com":[["rmnt","script","/__adblocker|html-load/"]],"justblogbaby.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"justsexpictures.com":[["acs","document.querySelectorAll","popMagic"]],"juventusfc.hu":[["noeval-if","/chp_?ad/"]],"k511.me":[["acs","document.getElementById","undefined"]],"kamelle.de":[["nostif",".call(null)","10"]],"karaokegratis.com.ar":[["no-fetch-if","method:HEAD"]],"katerinafaith.com":[["rmnt","script","/__adblocker|html-load/"]],"katestube.com":[["nostif","0x"],["nowoif"]],"kinoking.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","mm"],["rmnt","script",".offsetHeight"]],"kitchentreaty.com":[["rmnt","script","/__adblocker|html-load/"]],"kloo.com":[["set","google_unique_id","6"]],"komikmanhwa.me":[["acs","WebAssembly","atob"]],"komunikaty.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"konoyubitomare.jp":[["rmnt","script","html-load.com"]],"koreanbeauty.club":[["noeval-if","/chp_?ad/"]],"kr18plus.com":[["aeld","","popMagic"]],"krx18.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","wpadmngr.com"],["noeval-if","/chp_?ad/"],["acs","document.addEventListener","window.open"],["acs","document.write","onerror"],["rmnt","script","/bait/i"]],"kumapoi.info":[["noeval-if","ads"]],"kwbq.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"lampungkerja.com":[["noeval-if","/chp_?ad/"]],"laptrinhx.com":[["nosiif","clearInterval(i)","1000"]],"lascelebrite.com":[["noeval-if","/chp_?ad/"]],"latinabbw.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"leavingtherut.com":[["rmnt","script","/__adblocker|html-load/"]],"lectormh.com":[["noeval-if","/chp_?ad/"]],"leelalicious.com":[["rmnt","script","/__adblocker|html-load/"]],"legendas.dev":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"leinetal24.de":[["nostif",".call(null)","10"]],"leolist.cc":[["nowoif"]],"letmejerk3.com":[["aopr","ExoLoader"],["aeld","","_0x"]],"letmejerk7.com":[["aopr","ExoLoader"],["aeld","","_0x"]],"lifeissweeterbydesign.com":[["rmnt","script","/__adblocker|html-load/"]],"lifewithdogs.tv":[["rmnt","script","/__adblocker|html-load/"]],"lilluna.com":[["rmnt","script","/__adblocker|html-load/"]],"line25.com":[["aopr","decodeURI"]],"link.turkdown.com":[["set","blurred","false"]],"linkjust.com":[["set","blurred","false"]],"linkmake.in":[["acs","EventTarget.prototype.addEventListener","delete window"]],"listcaboodle.com":[["rmnt","script","/__adblocker|html-load/"]],"live.vodafone.de":[["nostif",".call(null)","10"]],"lkc21.net":[["aopr","AaDetector"],["nowoif"]],"loanpapa.in":[["noeval-if","/chp_?ad/"]],"lootup.me":[["acs","document.getElementById","stop"]],"loveincmag.com":[["rmnt","script","/__adblocker|html-load/"]],"lowcalicious.com":[["rmnt","script","/__adblocker|html-load/"]],"loyolaramblers.com":[["set","blockAdBlock","trueFunc"]],"ltr450hq.com":[["rmnt","script","html-load.com"]],"lucid-forum.com":[["rmnt","script","html-load.com"]],"lugerforums.com":[["rmnt","script","html-load.com"]],"lulustream.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","{delete window["],["acs","addEventListener","HTMLAllCollection"],["nowoif"],["aeld","click","popunder"],["rmnt","script","/HTMLAllCollection|popundersPerIP|referrerPolicy|WebAssembly/"],["acs","WebAssembly","Promise"],["acs","document.write","unescape"],["rmnt","script","/detect/i"]],"m109riders.com":[["rmnt","script","html-load.com"]],"macwelt.de":[["aeld","load","autoRecov"],["nostif",".call(null)","10"],["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","window.admiral","excludes",",\\\""]],"madchensex.com":[["aopr","ExoLoader"]],"mailnesia.com":[["acs","Math","break;case $."]],"maisieandruth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"majorleaguepickleball.co":[["rmnt","script","html-load.com"]],"makeandtakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maldonandburnhamstandard.co.uk":[["set","adLight","true"]],"maphappy.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marijuanamoment.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marketbeat.com":[["aeld","mouseleave","NativeDisplayAdID"]],"marlinforum.com":[["rmnt","script","html-load.com"]],"maverickchat.com":[["rmnt","script","html-load.com"]],"mazda6club.com":[["rmnt","script","html-load.com"]],"mbreviews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medeberiyaa.com":[["no-xhr-if","googlesyndication"]],"megalinks.info":[["aeld","DOMContentLoaded","adlinkfly"]],"megmadewithlove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mesquitaonline.com":[["nostif","blocker"]],"meteoradar.co.uk":[["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|siteActivateScripts/"]],"milanotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"mirror.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"],["json-prune","[].props.slides.[-].adIndex"],["nano-stb","native code","15000","0.001"],["nano-stb","(null)","5000","0.001"]],"mixloads.com":[["aopr","AaDetector"],["aeld","load","2000"]],"mommyshomecooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"monzatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"motorcyclelegalfoundation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motormatchup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moviesapi.club":[["aopr","my_pop"],["nowoif"],["no-fetch-if","googlesyndication"],["set","S_Popup","10"]],"moviesite.app":[["aeld","","break;case $."],["aopr","open"]],"moviesjoyhd.to":[["aeld","mousedown","shown_at"]],"mp4mania1.net":[["aopr","LieDetector"]],"mpo-mag.com":[["acs","$","#pageWrapper"]],"msshiandmrhe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mtgazone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"munchygoddess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"musthavemom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myfrugaladventures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myhomebook-magazine.com":[["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"mymotherlode.com":[["aopw","_sp_"]],"narviks.nl":[["rmnt","script","adb"]],"natashaskitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"naturalblaze.com":[["rmnt","script","/==undefined.*body/"]],"naturallieplantbased.com":[["rmnt","script","/__adblocker|html-load/"]],"nerdtechy.com":[["rmnt","script","/__adblocker|html-load/"]],"newlywoodwards.com":[["rmnt","script","/__adblocker|html-load/"]],"news.com.au":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"news18.com":[["aeld","scroll","getElementById"]],"news38.de":[["nostif",".call(null)","10"]],"newslive.com":[["noeval"]],"ngontinh24.com":[["nostif","aaaaa-modal"]],"nhlbox.me":[["rmnt","script","adserverDomain"]],"niganpro.com":[["noeval-if","/chp_?ad/"]],"nomastehungry.com":[["rmnt","script","/__adblocker|html-load/"]],"notabully.org":[["rmnt","script","/__adblocker|html-load/"]],"notunmovie.net":[["nowoif"]],"number-2-pencil.com":[["rmnt","script","/__adblocker|html-load/"]],"nxprime.in":[["acs","setTimeout","localStorage"]],"nycforfree.co":[["rmnt","script","/__adblocker|html-load/"]],"odtmag.com":[["acs","$","#pageWrapper"]],"ohsimply.com":[["rmnt","script","/__adblocker|html-load/"]],"ohthatsgood.com":[["rmnt","script","/__adblocker|html-load/"]],"on3.com":[["rmnt","script","/__adblocker|html-load/"]],"onestringlab.com":[["noeval-if","/chp_?ad/"]],"onhockey.tv":[["nowebrtc"]],"onionringsandthings.com":[["rmnt","script","/__adblocker|html-load/"]],"onlygayvideo.com":[["acs","document.querySelectorAll","popMagic"],["aopr","ExoLoader.addZone"]],"onlyinyourstate.com":[["rmnt","script","/__adblocker|html-load/"]],"openrangeowners.com":[["rmnt","script","/__adblocker|html-load/"]],"opentunnel.net":[["no-xhr-if","cloudflareinsights"],["no-xhr-if","method:HEAD"]],"optimizedportfolio.com":[["rmnt","script","/__adblocker|html-load/"]],"ourcoincash.xyz":[["aeld","load","htmls"],["acs","addEventListener","google_ad_client"],["rmnt","script","htmls"],["noeval-if","Adblock"]],"ourzestylife.com":[["rmnt","script","/__adblocker|html-load/"]],"packhacker.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"pahe.ink":[["aeld","DOMContentLoaded","history.go"],["aeld","click","/(?=[\\s\\S]*(?:isTrusted|defaultPrevented|button))(?=[\\s\\S]*(?:ctrlKey|metaKey|shiftKey|altKey))(?=[\\s\\S]*(?:getAttribute|tagName))(?=[\\s\\S]*Date\\s*\\.\\s*now)/","elements","document"]],"parentingpod.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"passmesometasty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"patrol4x4.com":[["rmnt","script","html-load.com"]],"pawastreams.pro":[["acs","globalThis","adserverDomain","/^data:/"],["aeld","DOMContentLoaded","history.go"],["acs","b2a","ai_adb","/^data:/"]],"pcwelt.de":[["aopr","proxyLocation"],["aeld","load","autoRecov"],["nostif",".call(null)","10"],["rmnt","script","window.admiral","excludes",",\\\""]],"peaktoplate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pelismarthd.com":[["acs","parseInt","break;case $."]],"percolately.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"persnicketyplates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"personalitygrowth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"phonerotica.com":[["acs","document.querySelectorAll","popMagic"]],"phoneswiki.com":[["set","jQuery.adblock","false"]],"pianetamountainbike.it":[["set","LoadThisScript","true"]],"picturelol.com":[["aopr","ExoLoader"],["nowoif"]],"piraproxy.app":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"],["nowoif"],["aopr","_wm"]],"plaion.com":[["set","Cookiebot","noopFunc"]],"plantbaes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"platform.autods.com":[["set","_conv_q","{}"],["set","_conv_q.push","noopFunc"]],"plattertalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playerflixapi.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"playertv24.com":[["nowoif"]],"playthetunes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pnn.de":[["nostif",".call(null)","10"]],"pokedata.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pornasians.pro":[["aopr","popit"],["aeld","popstate","noPop"]],"pornfeel.com":[["noeval-if","/chp_?ad/"]],"pornhubdeutsch.net":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"pornokeep.com":[["aopr","Aloader.serve"],["noeval"]],"pornpaw.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"pornvibe.org":[["acs","document.querySelectorAll","popMagic"]],"pornvideoq.com":[["aopr","history.replaceState"]],"pornxbit.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornxs.com":[["acs","ExoLoader"],["aopr","_abb"]],"pornyfap.com":[["aopr","document.dispatchEvent"]],"ppv.to":[["rmnt","script","adserverDomain"]],"pre-kpages.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"premierftp.com":[["noeval-if","/chp_?ad/"]],"pressconnects.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pricescope.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"priusonline.com":[["rmnt","script","html-load.com"]],"probuildstats.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"productkeysite.com":[["aopr","open"]],"profootballhistory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"protege-liens.com":[["nowoif"]],"prudentpennypincher.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pussyhothub.com":[["noeval"],["aopr","Aloader.serve"]],"pxxbay.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"qcnews.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"qub.ca":[["set","__NEXT_DATA__.runtimeConfig._qub_sdk.qubConfig.video.adBlockerDetectorEnabled","false"],["set","__NEXT_DATA__.runtimeConfig._qub_sdk.qubConfig.ad.adBlockerDetectorEnabled","false"]],"radiotunes.com":[["set","di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"]],"raider.io":[["rmnt","script","html-load.com"]],"ramevforum.com":[["rmnt","script","html-load.com"]],"raptorforum.com":[["rmnt","script","html-load.com"]],"rarethief.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"rav4world.com":[["rmnt","script","html-load.com"]],"readhunters.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"realcountrysizes.com":[["rmnt","script","/__adblocker|html-load/"]],"realwaystoearnmoneyonline.com":[["rmnt","script","/__adblocker|html-load/"]],"recipethis.com":[["rmnt","script","/__adblocker|html-load/"]],"recipezazz.com":[["rmnt","script","/__adblocker|html-load/"]],"recording.de":[["nostif",".call(null)","10"]],"redbirdrants.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"redheaddeepthroat.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"reizeclub.com":[["rmnt","script","/__adblocker|html-load/"]],"relogioonline.com.br":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["acs","btoa","_contentWindow"]],"retrieveradvice.com":[["rmnt","script","/__adblocker|html-load/"]],"rheinische-anzeigenblaetter.de":[["nostif",".call(null)","10"]],"rollsroyceforums.com":[["rmnt","script","html-load.com"]],"romancetv.site":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"romaniasoft.ro":[["noeval-if","/chp_?ad/"]],"rp-online.de":[["nostif",".call(null)","10"]],"rumahbokep-id.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rvlife.com":[["rmnt","script","/__adblocker|html-load/"]],"sanet.st":[["aost","document.createElement","onerror"]],"sasstrology.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sat24.com":[["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|siteActivateScripts/"]],"savingdessert.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savorysimple.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savvygardening.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scholarshiplist.org":[["noeval-if","/chp_?ad/"]],"scoutmotorsforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"screenflash.io":[["aost","localStorage","tryShowVideoAdAsync"]],"seasonsandsuppers.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"securenetsystems.net":[["rmnt","script","adblock"]],"sewsomestuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexmazahd.com":[["nowoif"]],"sexmv.com":[["acs","document.querySelectorAll","popMagic"]],"sextor.org":[["acs","document.querySelectorAll","popMagic"],["ra","href","a[href*=\"torrentico.top/sim/go.php\"]"]],"sexyaporno.com":[["acs","document.querySelectorAll","popMagic"]],"sexybabesart.com":[["aopr","ExoLoader.addZone"]],"sexyerotica.net":[["acs","document.querySelectorAll","popMagic"]],"sexygirl.cc":[["acs","document.querySelectorAll","popMagic"]],"sexynakeds.com":[["aopr","AaDetector"]],"sfile.mobi":[["nano-sib"],["nowoif"]],"sh.st":[["set","globalThis","null"],["acs","Math","break;case $."]],"shapeandjoy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sheshaft.com":[["aopr","decodeURI"]],"shlink.net":[["acs","document.querySelectorAll","popMagic"]],"shoot-yalla-tv.live":[["rmnt","script","/adbl/i"]],"short1ink.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"shoutoutdfw.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shwetainthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siirtolayhaber.com":[["noeval-if","/chp_?ad/"]],"siliconera.com":[["aopr","googletag"]],"simplyceecee.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skardu.pk":[["noeval-if","/chp_?ad/"]],"skibiditoilet.yourmom.eu.org":[["no-fetch-if","googlesyndication"]],"skinnyhq.com":[["acs","document.querySelectorAll","popMagic"]],"skinnyms.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slashgear.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slowianietworza.pl":[["noeval-if","/chp_?ad/"]],"smellylunchbox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smiechawatv.pl":[["nowoif"]],"sneakerfortress.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snopes.com":[["nostif","=>"]],"snow-forecast.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"soapcentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"socaltrailriders.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sokoskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sonatahomedesign.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sosuroda.pl":[["noeval-if","/chp_?ad/"]],"sourdoughtalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportstalkatl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stadelahly.net":[["noeval-if","/chp_?ad/"]],"starcima.com":[["nowoif","_blank"]],"status.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"statz.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steelersdepot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steelersreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stly.link":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"streamdesi.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif","_blank"]],"streamersplaybook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"streamobs.net":[["aost","document.createElement","createAgeModal"],["nowoif","_blank","1","obj"]],"streamxtv.tech":[["acs","addEventListener","HTMLAllCollection"]],"stromerforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"studentdevos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"such--maschine-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"super.cz":[["rmnt","script","/AdTop|customElements/"]],"surf-magazin.de":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"surfhungry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"survivalistboards.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"suzihaza.com":[["aopr","__Y"]],"sweetandsimpleliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"t-shirtforums.com":[["rmnt","script","html-load.com"]],"tampabayparenting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tapelovesads.org":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"tchatche.com":[["rmnt","script","Brave"]],"tcpvpn.com":[["nostif","Adblock"]],"techiestalk.in":[["noeval-if","/chp_?ad/"]],"techstwo.com":[["noeval-if","/chp_?ad/"]],"techsynchron.com":[["set-local-storage-item","pbs_action_taken","true"],["rmnt","script","const popup"]],"telecinco.es":[["aopr","$REACTBASE_STATE.serverModules.push"]],"telegramgroups.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thebakingchocolatess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thechaosandtheclutter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedailymeal.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"thedailypour.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedailyview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedeliciouscrescent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefirstmess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theflavorbender.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefreshcooky.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegarlicdiaries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegnomishgazette.com":[["noeval-if","/chp_?ad/"]],"thehouseofsmiths.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thekeeperofthecheerios.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themountainkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theoliveroad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepastaqueen.cooking":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theplantnative.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesavvysparrow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetaylor-house.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetorquereport.com":[["rmnt","script","/:\\[?window,/"]],"thewoodgraincottage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisvid.com":[["acs","document.write"]],"thriftynorthwestmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tiendaenlinea.claro.com.ni":[["set","Object.prototype.bk_addPageCtx","noopFunc"],["set","Object.prototype.bk_doJSTag","noopFunc"]],"tinyzonetv.se":[["nowoif"]],"to-travel.net":[["nano-sib","/.?/","*","0.02"]],"tok-thots.com":[["acs","document.querySelectorAll","popMagic"]],"tokoasrimotedanpayet.my.id":[["noeval-if","/chp_?ad/"]],"tolstoytherapy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tomahawkleader.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tomatespodres.com":[["acs","document.querySelectorAll","popMagic"]],"topdogtips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"topstreams.info":[["rmnt","script","adserverDomain"]],"totallyfuzzy.net":[["acs","parseInt","break;case $."]],"totallythebomb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"totschooling.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trafficnews.jp":[["rmnt","script",").join(String.fromCharCode"]],"transtxxx.com":[["json-prune","video.channel"]],"travelingigloo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"treasurie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trendytalker.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"tribeathletics.com":[["set","blockAdBlock","trueFunc"]],"truyenqq.com.vn":[["aeld","click","localStorage"]],"tvovermind.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tvshows4mobile.org":[["set-cookie","downloadbypass","1"]],"tvsportslive.fr":[["acs","EventTarget.prototype.addEventListener","delete window"]],"twitchmetrics.net":[["set-cookie","npabp","1"]],"twitchnosub.com":[["acs","WebAssembly","atob"],["nostif","","3200-"],["rmnt","script","/bait/i"]],"twitchy.com":[["aopr","stop"]],"twobrothersblankets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"twospoons.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ufacw.com":[["no-fetch-if","google"]],"unifycosmos.com":[["rmnt","script","/__adblocker|html-load/"]],"unionpayintl.com":[["set","sensorsDataAnalytic201505","{}"],["set","sensorsDataAnalytic201505.quick","noopFunc"]],"unrealengine.com":[["no-xhr-if","/api/analytics"]],"upbam.org":[["acs","navigator","break;case $."]],"uporno.xxx":[["aopr","document.dispatchEvent"]],"uptostream.com":[["set","jsUnda","noopFunc"]],"userscloud.com":[["rmnt","script",";}}};break;case $."],["rmnt","script","FingerprintJS"]],"ustreasuryyieldcurve.com":[["set","waldoSlotIds","true"]],"utaitebu.com":[["noeval-if","/chp_?ad/"]],"uvnc.com":[["acs","addEventListener","nextFunction"]],"uwakich.com":[["rmnt","script","html-load.com"]],"vibrantguide.com":[["rmnt","script","/__adblocker|html-load/"]],"videolyrics.in":[["no-xhr-if","doubleclick"],["aeld","load","htmls"]],"villettt.kitchen":[["noeval-if","/chp_?ad/"]],"vinovo.to":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["acs","document.createElement","open"]],"viperclub.org":[["rmnt","script","/__adblocker|html-load/"]],"virgo-horoscopes.com":[["nostif","displayMessage","2000"]],"virtuavixen.com":[["set","VVADS","undefined"],["set","FVPOA","undefined"]],"voicefilm.com":[["rmnt","script","/__adblocker|html-load/"]],"voyageforum.com":[["nostif","AdBlock"]],"voyeurblog.net":[["acs","document.querySelectorAll","popMagic"]],"vtubernews.jp":[["rmnt","script","html-load.com"]],"vwforum.com":[["rmnt","script","html-load.com"]],"wa.de":[["nostif",".call(null)","10"]],"warmteensex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"watchdirty.to":[["set","flashvars.protect_block",""],["set","flashvars.popunder_url",""],["set","flashvars.video_click_url",""],["set","flashvars.adv_pre_vast",""]],"watchporn.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"]],"watchsuitsonline.net":[["nowoif"]],"wattonandswaffhamtimes.co.uk":[["set","adLight","true"]],"wcoanimesub.tv":[["set","isAdBlockActive","false"]],"wearewvproud.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"webisjericho.com":[["rmnt","script","/__adblocker|html-load/"]],"weights.com":[["no-fetch-if","adsbygoogle"]],"weshare.is":[["rmnt","script","onDevToolOpen"],["no-fetch-if","adsbygoogle"],["aeld","blur"]],"wfmynews2.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"whatismyip.com":[["set","__disableAds","true"],["set","yieldlove_cmd","{}"],["set","yieldlove_cmd.push","noopFunc"]],"whatmollymade.com":[["rmnt","script","/__adblocker|html-load/"]],"whatnow.com":[["rmnt","script","/__adblocker|html-load/"]],"whatsgabycooking.com":[["rmnt","script","/__adblocker|html-load/"]],"whitehavennews.co.uk":[["set","adLight","true"]],"whtimes.co.uk":[["set","adLight","true"]],"wikifeet.com":[["aopr","NativeAd"]],"willow.arlen.icu":[["nowoif"]],"winnieowners.com":[["rmnt","script","/__adblocker|html-load/"]],"wirtualnelegionowo.pl":[["noeval-if","/chp_?ad/"]],"wolfsburger-nachrichten.de":[["nostif",".call(null)","10"]],"word-crossy.com":[["rmnt","script","/__adblocker|html-load/"]],"word-stacks.com":[["rmnt","script","/__adblocker|html-load/"]],"wrestling-world.com":[["rmnt","script","/__adblocker|html-load/"]],"writeprofit.org":[["noeval-if","/chp_?ad/"]],"wvv-fmovies.com":[["nowoif"]],"www.twitch.tv":[["nowoif","/amazon-adsystem|example\\.com/"]],"www.youtube.com":[["set","ytInitialPlayerResponse.playerAds","undefined"],["set","ytInitialPlayerResponse.adPlacements","undefined"],["set","ytInitialPlayerResponse.adSlots","undefined"],["set","playerResponse.adPlacements","undefined"],["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"],["nano-stb","[native code]","17000","0.001"],["rmnt","script","window,\"fetch\""]],"xmowners.com":[["rmnt","script","html-load.com"]],"xxxmax.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","shift"]],"xxxrip.net":[["ra","href","a[href*=\"torrentico.top/sim/go.php\"]"]],"xxxtubenote.com":[["aopr","Aloader.serve"],["noeval"]],"yourmotorguide.com":[["rmnt","script","/__adblocker|html-load/"]],"ytstv.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"zestfulkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"zlpaste.net":[["aeld","DOMContentLoaded","adlinkfly"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
