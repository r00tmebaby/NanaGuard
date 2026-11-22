/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0123movie.space":[["nowoif"]],"101soundboards.com":[["no-fetch-if","googlesyndication"],["nano-stb","","10000","0.001"]],"104homestead.com":[["rmnt","script","/__adblocker|html-load/"]],"1130cc.com":[["rmnt","script","html-load.com"]],"1500days.com":[["rmnt","script","/__adblocker|html-load/"]],"2-seriesforum.com":[["rmnt","script","html-load.com"]],"2024tv.ru":[["rmnt","script","break;case"]],"216.219.94.112":[["rmnt","script",".offsetParent"]],"240sxforums.com":[["rmnt","script","html-load.com"]],"27-sidefire-blog.com":[["noeval-if","/chp_?ad/"]],"355nation.net":[["rmnt","script","html-load.com"]],"3dshoots.com":[["rmnt","script","html-load.com"]],"3xamatorszex.hu":[["acs","document.querySelectorAll","popMagic"]],"4allprograms.me":[["nostif","ai_adb"]],"4tests.com":[["set","adblock","false"]],"538.nl":[["set","Object.prototype.ADBLOCK_DETECTION",""]],"68forums.com":[["rmnt","script","html-load.com"]],"69teentube.com":[["aopr","document.dispatchEvent"]],"abowlfulloflemons.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acrochetedsimplicity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adshnk.com":[["nowoif"],["set","_adshrink.skiptime","0"],["nano-sib","countdown","*","0.02"]],"adshrink.it":[["aeld","load","nextFunction"],["aopr","open"]],"adultfun.net":[["nowoif"]],"afamuche.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ah-me.com":[["acs","$","serve"],["aopr","open"]],"airfryeryum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alexjessicamills.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alexroblesmd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aliendictionary.com":[["acs","document.querySelector","adblock"]],"alliptvlinks.com":[["noeval-if","/chp_?ad/"],["aeld","load","ads"],["aopr","eazy_ad_unblocker"],["no-xhr-if","/doubleclick|googlesyndication/","length:10"]],"allnutritious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allosoccer.com":[["acs","parseInt","break;case $."]],"allthingsjewelryy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allwpworld.com":[["nano-sib","timeleft"],["ra","disabled","input[id=\"button1\"][class=\"btn btn-primary\"][disabled]"]],"allwritealright.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"almanac.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amandascookin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"americanoceans.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amiraspantry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"an1.com":[["nano-stb","countdown","*"],["nowoif"]],"animefever.cc":[["no-xhr-if","googlesyndication"]],"animefuckmovies.com":[["aopr","popit"],["aeld","popstate","noPop"]],"apetube.asia":[["aopr","popit"],["aeld","popstate","noPop"]],"aranzulla.it":[["aopr","navigator.userAgent"]],"arcor.de":[["nostif",".call(null)","10"]],"ashevilletrails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianlbfm.net":[["aopr","loadTool"]],"assignmentdon.com":[["noeval-if","/chp_?ad/"]],"atablefullofjoy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ate9ni.com":[["acs","Math","break;case $."]],"attractiondiary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"authority.pub":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"autosport.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","html-load.com"],["noeval-if","interactionCount"]],"ayradvertiser.com":[["set","adLight","true"]],"azby.fmworld.net":[["no-xhr-if","/recommendations."]],"azlyrics.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"bagpipe.news":[["acs","document.getElementById","fakeElement"]],"bakerstable.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakingforfriends.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barrier-free.net":[["aopr","adsBlocked"]],"bdsmporn.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"beaglesunlimited.com":[["rmnt","script","html-load.com"]],"beammeup.com.au":[["acs","Math","break;case $."]],"bedbugsinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"believeinabudget.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"belquistwist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bemyhole.com":[["rmnt","script","egoTab"]],"bergwelten.com":[["nostif","/adblock|Error|getComputedStyle/"]],"berlin-teltow.de":[["noeval-if","/chp_?ad/"]],"beruhmtemedien.com":[["noeval-if","/chp_?ad/"]],"bestjobdescriptions.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"betterbuttchallenge.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"bikersrights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bikyonyu-bijo-zukan.com":[["noeval-if","/chp_?ad/"]],"bildderfrau.de":[["nostif",".call(null)","10"]],"bitco.world":[["aopw","adBlockDetected"]],"bitcotasks.com":[["noeval-if","/chp_?ad/"],["aeld","load","htmls"],["no-xhr-if","bmcdn6"],["no-fetch-if","bmcdn6"],["rmnt","script","AdblockRegixFinder"],["nostif","offsetWidth"],["nostif","alert"]],"bitzite.com":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"],["aeld","load","htmls"],["ra","href",".MyAd > a[target=\"_blank\"]"],["aeld","DOMContentLoaded","antiAdBlockerHandler"],["aeld","DOMContentLoaded","location.href"],["acs","document.createElement","onerror"],["nostif","_0x","500"],["aopw","onScriptError"],["aopr","localStorage"]],"blackcockchurch.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bloground.ro":[["nostif","show"]],"bluedollar.net":[["acs","jQuery","adblock"]],"bluedrake42.com":[["nostif","adb"]],"bollywoodchamp.in":[["noeval-if","/chp_?ad/"]],"booksworthdiscussing.com":[["rmnt","script","html-load.com"]],"bootdey.com":[["nostif","offsetHeight"]],"bowerpowerblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxingdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bramblewinecottage.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bravedown.com":[["no-fetch-if","/adskeeper|cloudflare/"],["set-local-storage-item","a_render","true"],["rmnt","script","/adbl/i"]],"broncoraptorforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"broncosportforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"bsierad.com":[["aopw","adBlockDetected"]],"buerstaedter-zeitung.de":[["nostif",".call(null)","10"]],"buffstreamz.com":[["acs","$","modal"],["nowebrtc"]],"buildabreak.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buttermilkbysam.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cakewhiz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camclips.tv":[["acs","onload"],["aopr","console.clear"],["aeld","","pop"],["aeld","","Pop"],["set","flashvars.adv_pause_html",""],["set","flashvars.popunder_url","undefined"]],"campersmarts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"canadianmoneyforum.com":[["rmnt","script","html-load.com"]],"castironforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"catvills.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cavaliersnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"centsationalstyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chanjaeblog.jp":[["noeval-if","/chp_?ad/"]],"chargerforumz.com":[["rmnt","script","html-load.com"]],"chartmasters.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chd4.com":[["aopw","checkAdBlocker"]],"chefkoch.de":[["aopr","_sp_._networkListenerData"],["rmnt","script","DisplayAcceptableAdIfAdblocked"],["nostif","(null)","10"]],"cherokeesrt8.com":[["rmnt","script","html-load.com"]],"cherrynudes.com":[["acs","loadTool","popping"]],"chevytrucks.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chocolatewithgrace.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cl1ca.com":[["aopr","mm"],["set","blurred","false"]],"claudelog.com":[["nostif","/adsbygoogle|dispatchEvent/"],["aeld","DOMContentLoaded","OfferwallSessionTracker"]],"cleaningtalk.com":[["rmnt","script","html-load.com"]],"cmaxownersclub.com":[["rmnt","script","html-load.com"]],"cocinarodriguez.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"codec.kyiv.ua":[["rmnt","script","mdpDeblocker"]],"collegefootballnetwork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coloradofisherman.com":[["rmnt","script","html-load.com"]],"comicallyincorrect.com":[["rmnt","script","/==undefined.*body/"]],"comunidadgzone.es":[["nostif","nextFunction","2000"]],"comunio-cl.com":[["nostif",".call(null)","10"]],"converto.io":[["acs","atob","decodeURIComponent"],["acs","Math","zfgloaded"]],"cookingbride.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithlei.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookprimalgourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cool--web-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"crackshash.com":[["acs","document.getElementsByClassName","wp-ad"]],"crisslecrossle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crooksandliars.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"crunchyscan.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","open"],["aeld","DOMContentLoaded","adbl"]],"cryptoprofitcalculator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cryptowin.io":[["acs","document.getElementById","body"]],"currytrail.in":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"customcalendarmaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutearn.net":[["aopr","app_vars.force_disable_adblock"],["aopr","open"],["set","blurred","false"]],"dabblesandbabbles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daizurin.com":[["nostif","nextFunction","250"]],"deckshop.pro":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"dejongeturken.com":[["noeval-if","/chp_?ad/"]],"desired.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"deviants.com":[["aopr","decodeURI"]],"di.fm":[["set","di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"]],"diaryofafitmommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dietmenus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dinnersdonequick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dippy.org":[["rmnt","script","html-load.com"]],"dirtygangbangs.com":[["acs","document.querySelectorAll","popMagic"]],"dirtyporn.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"diypete.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diyshowoff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dodgersway.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"dogscatspets.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dollarindex.org":[["acs","jQuery","No"]],"dontmesswithmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dopomininfo.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"draftsim.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dreamhomebasedwork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"driveaccord.net":[["rmnt","script","html-load.com"]],"driveteslacanada.ca":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dropnudes.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"drpsychmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"easymilftube.net":[["noeval"],["aopr","Aloader.serve"]],"eatwellspendsmart.com":[["rmnt","script","/__adblocker|html-load/"]],"edmontonsun.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"educationlibrary.org":[["rmnt","script","/__adblocker|html-load/"]],"egyanime.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","/btoa|break/"]],"embedplayer.xyz":[["nowoif"]],"emilylaurae.com":[["rmnt","script","/__adblocker|html-load/"]],"emperorscan.com":[["noeval-if","/chp_?ad/"],["aost","document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"]],"emporda.info":[["set","pr_okvalida","true"],["nostif","sub"]],"encouragingmomsathome.com":[["rmnt","script","/__adblocker|html-load/"]],"enormousbabes.net":[["aopr","document.dispatchEvent"]],"esgeeks.com":[["nostif","mdp"]],"essencestudios.com":[["rmnt","script","adshield"]],"essexlive.news":[["rmnt","script","nowprocket","excludes","self.__next"]],"eurogamer.it":[["aopr","_sp_.mms.startMsg"]],"expertvn.com":[["aopr","SMart1"],["noeval-if","chp_ad"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"],["rmnt","script","deblocker"]],"ezeviral.com":[["no-fetch-if","ads"]],"eztvx.to":[["rmnt","script","adserverDomain"]],"fabmx1.com":[["aopr","wpsite_clickable_data"]],"falkirkherald.co.uk":[["rmnt","script","await eval"]],"fapfappy.com":[["acs","WebAssembly","atob"]],"farminglife.com":[["rmnt","script","await eval"]],"fastcompany.com":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"feelinfabulouswithkayla.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"filecrate.store":[["aeld","click","!adShown"]],"filmweb.pl":[["rmnt","script","window.open"],["rc","rodo","body.rodo"],["set","rodo.checkIsDidomiConsent","noopFunc"],["rmnt","script","Ads"]],"filmyzilla5.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"financebuzz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"financeformulas.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"financialjuice.com":[["acs","jQuery","modal"]],"financillustrations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"firmenwissen.de":[["nostif",".call(null)","10"]],"fivebarks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fiveslot777.com":[["rmnt","script","html-load.com"]],"fjcruiserforums.com":[["rmnt","script","html-load.com"]],"flipsimu.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flooringforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"floridatoday.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"focusfanatics.com":[["rmnt","script","html-load.com"]],"foodmetamorphosis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodwineandlove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forsal.pl":[["no-fetch-if","dqst.pl"]],"freedownload.flash-files.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","location"]],"freeflix.info":[["aeld","","break;case $."],["aopr","open"]],"freex2line.online":[["acs","document.createElement","globalThis"],["aeld","popstate"],["aeld","click","triggered"]],"friars.com":[["set","blockAdBlock","trueFunc"]],"frugalfun4boys.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ftuapps.dev":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"],["nostif","ai_"]],"fullvideosporn.com":[["nostif","/initPops|popLite|popunder/"]],"funnymadworld.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"fuqer.com":[["aopr","ExoLoader.serve"],["aopr","open"],["popads-dummy"]],"futemax.zip":[["acs","document.documentElement","break;case $."]],"fzmovies.info":[["set","openWindow","noopFunc"]],"gadgetsandwearables.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gallant-matures.com":[["noeval"],["aopr","Aloader.serve"]],"gamersdiscussionhub.com":[["nostif","magnificPopup"]],"games.boston.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.sacbee.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"garylargeavailable.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"gdfile.org":[["nowoif"]],"gdmax.site":[["nowoif","!gcloud"]],"georgianbaymessageboard.com":[["rmnt","script","html-load.com"]],"getfiles.co.uk":[["rmnt","script","checkAdBlock"]],"gifu-np.co.jp":[["rmnt","script","html-load.com"]],"girlgonegourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlversusdough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"givemehistory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"glaownersclub.co.uk":[["rmnt","script","html-load.com"]],"glorioustreats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goafricaonline.com":[["aopr","goafricaSplashScreenAd"]],"gobsao8u.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|popup|\\.onerror|WebAssembly/i"]],"goetbutigers.com":[["set","blockAdBlock","trueFunc"]],"gogetapast.com.br":[["noeval-if","/chp_?ad/"]],"gogifox.com":[["noeval-if","/chp_?ad/"]],"gomarquette.com":[["set","blockAdBlock","trueFunc"]],"goodlookingtan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goshockers.com":[["set","blockAdBlock","trueFunc"]],"gotigersgo.com":[["set","blockAdBlock","trueFunc"]],"gozags.com":[["set","blockAdBlock","trueFunc"]],"gracelikerainblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gratispaste.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"greattopten.com":[["noeval-if","/chp_?ad/"]],"greenocktelegraph.co.uk":[["set","adLight","true"]],"greensmut.com":[["acs","document.querySelectorAll","popMagic"]],"gritsandpinecones.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gsmarena.com":[["aeld","DOMContentLoaded","/doubleclick|atob|return new Promise|aHR0c|String\\.fromCharCode|window\\[|headers|offsetHeight\\?/"],["remove-cookie","/DeviceID|lpe/"],["no-fetch-if","doubleclick"]],"guitaradvise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gusto.at":[["nostif",".call(null)","10"]],"halesowennews.co.uk":[["set","adLight","true"]],"halfbakedharvest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardwaretimes.com":[["acs","document.createElement","js_func_decode_base_64"]],"hawaii-guide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hd-analporn.com":[["aopr","Aloader.serve"],["noeval"]],"hd44.net":[["acs","JSON.parse","break;case $."],["aopr","decodeURI"]],"healthnewsreel.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"hellabyte.one":[["aopr","open"]],"hemeltoday.co.uk":[["rmnt","script","await eval"]],"hentaibrasil.info":[["acs","document.querySelectorAll","popMagic"]],"hexload.com":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"hexupload.net":[["aopw","Fingerprint2"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."]],"hillingdontimes.co.uk":[["set","adLight","true"]],"hillsdale.net":[["set","gnt.x.uam","undefined","runAt","interactive"]],"hiraethtranslation.com":[["aeld","DOMContentLoaded","document.documentElement.lang"],["rmnt","script","adsSrc"]],"hitsports.pro":[["acs","document.documentElement","break;case $."]],"hockeystats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homecookingcollective.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemadehome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hometalk.com":[["set","loadShield","noopFunc"]],"hostzteam.com":[["noeval-if","/chp_?ad/"]],"hotcopper.co.nz":[["rmnt","script","html-load.com"]],"houseplantsexpert.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hqpornero.com":[["acs","document.querySelectorAll","popMagic"]],"hundredpushups.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hunker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hydrogen.lat":[["aeld","load","&&"]],"ibeconomist.com":[["nostif","adsense"]],"ihcubcadet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ilovemycockapoo.com":[["rmnt","script","html-load.com"]],"imagefap.com":[["acs","$","popCookie"],["set","history.pushState","noopFunc"],["set-cookie","show_only_once_per_day","1"],["set-cookie","show_only_once_per_day2","1"]],"imgblaze.net":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"impalas.net":[["rmnt","script","html-load.com"]],"indiakablog.com":[["nano-stb","redirectpage","13500","0.001"]],"indoav.com":[["nowoif"]],"insidememorial.com":[["noeval-if","/chp_?ad/"]],"insidethemagic.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"inspiralized.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"instantstreetview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ix3talk.com":[["rmnt","script","html-load.com"]],"ixforums.com":[["rmnt","script","html-load.com"]],"izzycooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"javbee.vip":[["acs","document.querySelectorAll","popMagic"]],"javhat.tv":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"javopen.co":[["acs","document.querySelectorAll","popMagic"]],"jeepevforum.com":[["rmnt","script","html-load.com"]],"jeepwagoneer.forum":[["rmnt","script","/__adblocker|html-load/"]],"jipinsoft.com":[["nostif","show"]],"jnews1.com":[["rmnt","script","html-load.com"]],"jocooks.com":[["rmnt","script","/__adblocker|html-load/"],["aopw","HTMLElement.prototype.insertAdjacentHTML"]],"jomygosh.com":[["rmnt","script","/__adblocker|html-load/"]],"joomlabeginner.com":[["nostif","eb"]],"joshuaweissman.com":[["rmnt","script","/__adblocker|html-load/"]],"jototheworld.com":[["rmnt","script","/__adblocker|html-load/"]],"journeytosahm.com":[["rmnt","script","/__adblocker|html-load/"]],"joyfulmesses.com":[["rmnt","script","/__adblocker|html-load/"]],"jp-films.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"justwatch.com":[["json-prune","data.getFinalClickoutUrl data.sendSraBid"]],"k1600forum.com":[["rmnt","script","html-load.com"]],"kafeteria.pl":[["nano-sib","consoleLoaded?clearInterval"]],"kakarotfoot.ru":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"kaotic.com":[["nowoif"]],"kare11.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"katoikos.world":[["rmnt","script","AdBl"]],"kawaguchimaeda.com":[["noeval-if","/chp_?ad/"]],"kazefuri.net":[["href-sanitizer","a[href^=\"https://www.adtival.network/\"][href*=\"&url=\"]","?url"]],"kianiroforum.com":[["rmnt","script","html-load.com"]],"klartext-ne.de":[["acs","document.addEventListener","google_ad_client"]],"kmnt.com":[["set","google_unique_id","6"]],"knitting-news.com":[["rmnt","script","/__adblocker|html-load/"]],"knowyourproduce.com":[["rmnt","script","/__adblocker|html-load/"]],"komikdewasa.art":[["nowoif"],["aeld","click","tampilkanUrl"],["rmnt","script","location.href"]],"kosmofoto.com":[["rmnt","script","/__adblocker|html-load/"]],"kreis-anzeiger.de":[["nostif",".call(null)","10"]],"ksnt.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"ksta.de":[["nostif",".call(null)","10"]],"kubotaforum.com":[["rmnt","script","/__adblocker|html-load/"]],"kukni.to":[["noeval-if","/chp_?ad/"]],"kumascans.com":[["acs","JSON.parse","break;case $."]],"kyoto-kanko.net":[["aopr","adsBlocked"]],"langenscheidt.com":[["rmnt","script","html-load.com"]],"laraclevenger.com":[["rmnt","script","/__adblocker|html-load/"]],"lavozdigital.es":[["aopr","NREUM"]],"lbprate.com":[["acs","Math.imul"]],"leakav.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"leakgallery.com":[["no-fetch-if","method:HEAD"],["set-cookie","adblock","0"]],"ledauphine.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"leicestermercury.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"lesbiansex.best":[["acs","document.querySelectorAll","popMagic"]],"lesswithlaur.com":[["rmnt","script","/__adblocker|html-load/"]],"letrasgratis.com.ar":[["noeval-if","/chp_?ad/"]],"lexiscleankitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"lightningrodder.com":[["rmnt","script","html-load.com"]],"littlehaloj.com":[["rmnt","script","/__adblocker|html-load/"]],"liveoutdoors.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"livexscores.com":[["no-fetch-if","googlesyndication"]],"livingchirpy.com":[["rmnt","script","/__adblocker|html-load/"]],"livingmyveglife.com":[["rmnt","script","/__adblocker|html-load/"]],"lonely-mature.com":[["aopr","EviPopunder"]],"lscomic.com":[["noeval-if","ads"]],"lubbockonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"ludlowadvertiser.co.uk":[["set","adLight","true"]],"luluvdoo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","WebAssembly","atob"],["acs","addEventListener","HTMLAllCollection"]],"m.kuku.lu":[["acs","setTimeout","bait.css"]],"m.youtube.com":[["set","ytInitialPlayerResponse.playerAds","undefined"],["set","ytInitialPlayerResponse.adPlacements","undefined"],["set","ytInitialPlayerResponse.adSlots","undefined"],["set","playerResponse.adPlacements","undefined"],["json-prune","playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots important"],["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"m1xdrop.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"macheforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"macserial.com":[["aopw","Fingerprint2"]],"makeitcrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamainastitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamavation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangatv.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"manoramaonline.com":[["aopr","EV.Dab"]],"manysex.com":[["rmnt","script","is_antiblock_refresh"]],"marca.com":[["aopr","adUnits"]],"marialuceydietitian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mariasbluecrayon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marionstar.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"marissasharecareer.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"marutisuzukiforum.com":[["rmnt","script","html-load.com"]],"maryse.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masengwa.com":[["acs","JSON.parse","break;case $."]],"mathcracker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mature4.net":[["acs","document.querySelectorAll","popMagic"]],"maturepornjungle.com":[["acs","document.querySelectorAll","popMagic"]],"mcxlive.org":[["acs","jQuery","No"]],"mdn.lol":[["noeval-if","/chp_?ad/"],["nostif","/adblock|isRequestPresent/"],["no-fetch-if","bmcdn6"],["acs","window.onload","devtools"],["rmnt","script","/bypass.php"]],"meatified.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meaww.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medeberiya1.com":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"meilblog.com":[["noeval-if","/chp_?ad/"]],"melskitchencafe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mercedsunstar.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"miaandme.org":[["aost","String.prototype.charCodeAt","ai_"]],"midgetmomma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"midis.com.ar":[["noeval-if","/chp_?ad/"]],"milkporntube.com":[["acs","document.querySelectorAll","popMagic"]],"ministryofsolutions.com":[["acs","addEventListener","google_ad_client"]],"mkcforum.com":[["rmnt","script","html-load.com"]],"mlive.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","adblockerDisabled","excludes",",\\\""]],"mocoshow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momtastic.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"moonblinkwifi.com":[["acs","parseInt","break;case $."]],"moovitapp.com":[["no-fetch-if","doubleclick"]],"mortadellahead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moshahda.net":[["acs","parseInt","break;case $."]],"motherwellmag.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"movieloversworld.com":[["acs","Math","zfgloaded"]],"mp3cut.net":[["aopw","ab_detected"]],"mp3juices.icu":[["nano-sib","temp"]],"mrfreemium.blogspot.com":[["noeval-if","/chp_?ad/"]],"msuspartans.com":[["set","blockAdBlock","trueFunc"]],"mtbr.com":[["rmnt","script","html-load.com"]],"muminthemadhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"muscularmustangs.com":[["rmnt","script","html-load.com"]],"my-travelmonkey.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mycima.pink":[["rmnt","script","adoptout"]],"mycivillinks.com":[["acs","navigator","FingerprintJS"]],"mygorgeousrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mylistoflists.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myswissalps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mytectutor.com":[["noeval-if","/chp_?ad/"]],"nadidetarifler.com":[["set","koddostu_com_adblock_yok","null"]],"nationaltoday.com":[["rmnt","script","html-load.com"]],"naturallycurly.com":[["rmnt","script","adshield"]],"naughtyblogs.xyz":[["noeval-if","/chp_?ad/"]],"needrom.com":[["nostif","/adsbygoogle|adblock|innerHTML|setTimeout/"]],"neoseeker.com":[["rmnt","script","await eval"]],"netu.ac":[["nowoif"],["aopr","doSecondPop"],["set","adblockcheck","false"]],"neuroscientificallychallenged.com":[["rmnt","script","/__adblocker|html-load/"]],"news-und-nachrichten.de":[["set","adblock","false"]],"newtoncustominteriors.com":[["rmnt","script","/__adblocker|html-load/"]],"nflbite.com":[["acs","Math","zfgloaded"],["rmnt","script","adserverDomain"]],"nizarstream.com":[["acs","document.documentElement","break;case $."]],"nocfsb.com":[["acs","document.querySelectorAll","popMagic"],["noeval-if","/chp_?ad/"]],"nonktube.com":[["nowoif"],["aopr","decodeURI"]],"norfolkmag.co.uk":[["set","adLight","true"]],"notateslaapp.com":[["rmnt","script","/__adblocker|html-load/"]],"notentirelyaverage.com":[["rmnt","script","/__adblocker|html-load/"]],"notesformsc.org":[["noeval-if","/chp_?ad/"]],"novas.net":[["rmnt","script","html-load.com"]],"novelbob.com":[["noeval-if","/chp_?ad/"]],"noz.de":[["nostif",".call(null)","10"]],"nutritiontofit.com":[["rmnt","script","/__adblocker|html-load/"]],"nxbrew.net":[["rmnt","script","/adb/i"]],"nyangames.altervista.org":[["noeval-if","/chp_?ad/"]],"nybass.com":[["rmnt","script","html-load.com"]],"ocregister.com":[["set","CnnXt.Event.fire","noopFunc"]],"offbeathome.com":[["rmnt","script","/__adblocker|html-load/"]],"ohhappyjoy.com":[["rmnt","script","/__adblocker|html-load/"]],"ohiofestivals.net":[["rmnt","script","/__adblocker|html-load/"]],"oldschoollabs.com":[["rmnt","script","/__adblocker|html-load/"]],"olemisssports.com":[["set","blockAdBlock","trueFunc"]],"omaddiet.com":[["rmnt","script","/__adblocker|html-load/"]],"onlinesextube.com":[["acs","document.querySelectorAll","popMagic"]],"ourhappymess.com":[["rmnt","script","/__adblocker|html-load/"]],"outdoortroop.com":[["rmnt","script","/__adblocker|html-load/"]],"pandadevelopment.net":[["no-fetch-if","adsbygoogle"]],"pandamovies.me":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"panuvideo.com":[["acs","setTimeout","l.parentNode.insertBefore(s"],["nostif","myTestAd"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","eval","replace"],["nostif","click"]],"pasatiemposparaimprimir.com":[["noeval-if","/chp_?ad/"]],"passionatecrafter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pastrybysaloni.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peacefulparenthappykids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peanutblossombookclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peanutbutterrunner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peliculas8k.com":[["nowoif"],["set","adblockcheck","false"],["set","arrvast","[]"]],"pelismartv.com":[["acs","parseInt","break;case $."]],"pep.ph":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","adrecover.com"]],"perfektdamen.co":[["acs","document.querySelectorAll","popMagic"]],"persoenlich.com":[["rmnt","script","html-load.com"]],"personality-database.com":[["set","freestar.newAdSlots","trueFunc"]],"personalitymax.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"petoskeynews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"petsgal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pflege-info.net":[["noeval-if","/chp_?ad/"]],"pics-view.com":[["aeld","click","link.click"]],"pidlio.com":[["acs","document.addEventListener","google_ad_client"]],"piratefast.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pixcams.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plantbasedonabudget.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playboy.de":[["aopw","_sp_"],["nostif",".call(null)","10"]],"playerjavseen.com":[["aopr","__Y"]],"playoffsstream.com":[["rmnt","script","adserverDomain"]],"poemofquotes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pokesymbols.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pokuniverse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"polarisgeneralforum.com":[["rmnt","script","html-load.com"]],"polestar.forum":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porn4f.org":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"porndex.com":[["aeld","click"]],"porndoe.com":[["aopr","open"],["aeld","click","pop_under"],["nostif","location.href","500"],["aopr","ExoLoader"]],"porngirlstube.com":[["acs","document.querySelectorAll","popMagic"]],"porngrey.com":[["aeld","","popMagic"]],"pornken.com":[["acs","document.querySelectorAll","popMagic"]],"pornlift.com":[["aopr","open"]],"pornoeggs.com":[["aopr","open"]],"pornohexen.com":[["rmnt","script","detect"]],"pornoleon.com":[["aopr","ExoLoader"],["nostif","/loadMomoVip|loadExo|includeSpecial/"],["aost","document.createElement","loadNeverBlock"]],"pornstreams.co":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"povaddict.com":[["acs","document.querySelectorAll","popMagic"]],"poweredbycovermore.com":[["set","_satellite","{}"],["set","_satellite.track","noopFunc"]],"prague-blog.co.il":[["noeval-if","/chp_?ad/"]],"prepperforums.net":[["rmnt","script","html-load.com"]],"primaverakitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"profootballdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"psychologyjunkie.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"publicsexamateurs.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"puhutv.com":[["aopw","adblockCheck"]],"pythoncentral.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"qyiforum.com":[["rmnt","script","html-load.com"]],"rabbitdogs.net":[["rmnt","script","html-load.com"]],"rabbitstream.net":[["set","console.clear","undefined"]],"radamel.icu":[["acs","document.documentElement","break;case $."]],"radios-uruguay.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radiotormentamx.com":[["aeld","load","onload"]],"raidersreport.com":[["rmnt","script","/__adblocker|html-load/"]],"raidrush.net":[["nostif","getComputedStyle(el)"]],"rangersreview.co.uk":[["set","adLight","true"]],"raptive.net":[["rmnt","script","/__adblocker|html-load/"]],"rawstory.com":[["aopr","setNptTechAdblockerCookie"]],"rctalk.com":[["rmnt","script","/__adblocker|html-load/"]],"realitytea.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"redamateurtube.com":[["acs","document.querySelectorAll","popMagic"]],"reporterpb.com.br":[["set","showModal","noopFunc"]],"resplace.com":[["acs","jQuery","this"]],"retrotv.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"reviewdiv.com":[["set","FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["rmnt","script","wpquads_adblocker_check"]],"rgb.vn":[["nostif","siteAccessPopup"]],"rlfans.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"roadfood.com":[["rmnt","script","/__adblocker|html-load/"]],"robbreport.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"rojadirecta-tv-en-vivo.blogspot.com":[["acs","String.fromCharCode","atob"]],"roms-hub.com":[["acs","parseInt","break;case $."]],"romspedia.com":[["nano-sib","timeLeft"]],"royalenfieldforum.com":[["rmnt","script","html-load.com"]],"rtl.de":[["set","Object.prototype.adReinsertion.homad.enabled","false"],["nostif",".call(null)","10"],["nostif","null","10"]],"rufiiguta.com":[["nowoif","/^/","1"],["aost","HTMLElement.prototype.click","_0x"]],"runbundle.com":[["rmnt","script","/__adblocker|html-load/"]],"ruyamanga.com":[["noeval-if","/chp_?ad/"]],"rv-ecommerce.com":[["noeval-if","/chp_?ad/"]],"rvblogger.com":[["rmnt","script","/__adblocker|html-load/"]],"safeframe.googlesyndication.com":[["nano-sib","()=>{var c=Kb","1000","0.2"]],"samfw.com":[["acs","jQuery","banner"]],"samuraiscan.org":[["no-xhr-if","googlesyndication"]],"saradahentai.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["aopr","document.dispatchEvent"]],"sattaguess.com":[["set","detectAdBlock","noopFunc"]],"savesubs.com":[["nowoif"]],"savingsomegreen.com":[["aopr","b2a"]],"savoryspin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savvysavingcouple.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"schildempire.com":[["noeval-if","/chp_?ad/"],["acs","b2a","ai_adb"]],"schoener-wohnen.de":[["aopr","_sp_._networkListenerData"],["set","foundation.adPlayer.bitmovin","{}"],["nostif",".call(null)","10"]],"schwaebische-post.de":[["nostif",".call(null)","10"]],"schwarzwaelder-bote.de":[["nostif",".call(null)","10"]],"scrappygeek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"section215.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"self.com":[["nofab"]],"selfproclaimedfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"senda.pl":[["no-fetch-if","googletagmanager"]],"seriu.jp":[["noeval-if","/chp_?ad/"]],"sexodi.com":[["set","ads_unblocked","true"]],"sexyteengirlfriends.net":[["acs","document.querySelectorAll","popMagic"]],"sexyvintageporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"sezia.com":[["noeval-if","/chp_?ad/"]],"sharingkindergarten.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharksinfo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shinshi-manga.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"shtab.su":[["acs","document.createElement","script"]],"sieutamphim.me":[["acs","document.addEventListener","Object[_0x"],["nowoif","_blank"]],"signupgenius.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"silkroadrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simply-delicious-food.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simsdom.com":[["nowoif"],["nano-sib","clearInterval","*"],["acs","JSON.parse","break;case $."]],"sinonimos.de":[["nostif","documentElement.innerHTML"],["no-fetch-if","doubleclick","","{\"type\": \"opaque\"}"],["set","document.hasFocus","trueFunc"]],"skillscouter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skincarehero.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartcanucks.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartgardenguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartworld.it":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["no-xhr-if","googlesyndication"]],"socceron.name":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"soletshangout.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sotolover.com":[["rmnt","script","html-load.com"]],"soulsisterstravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spanjevandaag.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"sponsorhunter.com":[["aeld","click","window.focus"],["set","popunder","undefined"]],"sportlerfrage.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"sportowy24.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"startdesigngroup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stephiecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stevenfamilyedge.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"stitichsports.com":[["rmnt","script","antiAdBlockerHandler"]],"str8ongay.com":[["acs","document.querySelectorAll","popMagic"]],"streetsmartnutrition.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stripers247.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stronakobiet.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"studyfinds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"summarynetworks.com":[["acs","Math","break;case $."]],"summle.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supereslresources.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superwestsports.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sureketo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"surfline.com":[["nano-stb","adFreePopup","15000","0.02"],["set","Object.prototype.isPremium","true"],["set","__BACKPLANE_API__.renderOptions.showAdBlock",""],["aeld","timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"]],"sweetcreekpatterns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetcsdesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"switzerlanding.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swzz.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"syosetu.com":[["rmnt","script","html-load.com"]],"szamoldki.hu":[["rmnt","script","html-load.com"]],"szexvideok.hu":[["acs","document.querySelectorAll","popMagic"]],"tapeadsenjoyer.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","wpadmngr.com"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"tccoa.com":[["rmnt","script","html-load.com"]],"teachersguidetn.blogspot.com":[["acs","addEventListener","blocker"]],"teenhost.net":[["aopr","popit"],["aeld","popstate","noPop"]],"teenpornvideo.xxx":[["aopr","ExoLoader.serve"]],"tennisactu.net":[["acs","document.getElementById","ads"]],"tfltruck.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"the-sound.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theartofdoingstuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theavtimes.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"thecelticblog.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","html-load.com"]],"thecookingmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedieselstop.com":[["rmnt","script","html-load.com"]],"theedgyveg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theflavoursofkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theflixertv.to":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"thehandmadehome.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theheartylife.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelibertyline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themom100.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themorrismansionblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therapybypro.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thereciperebel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therookiejurist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therugbyforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesmokies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetfordandbrandontimes.co.uk":[["set","adLight","true"]],"theurbenlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thevegspace.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theyarehuge.com":[["acs","document.querySelectorAll","popMagic"],["acs","Object.defineProperty","clickHandler"]],"thezag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thinbluefoods.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisisfutbol.com":[["aopr","PerformanceLongTaskTiming"]],"thissavoryvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"throughthefibrofog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tiguanevforum.com":[["rmnt","script","html-load.com"]],"titantv.com":[["aeld","load","player"]],"to.com.pl":[["aeld","","show"]],"tokopedia.com":[["json-prune","[].data.displayAdsV3.data.[-].__typename"],["json-prune","[].data.TopAdsProducts.data.[-].__typename"],["json-prune","[].data.topads.data.[-].__typename"],["rmnt","script","displayAdsV3"]],"toyotachrforum.com":[["rmnt","script","html-load.com"]],"tporn.xxx":[["rmnt","script","directBanner"]],"tractorforum.com":[["rmnt","script","html-load.com"]],"tracylocalschool.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"trahodom.com":[["acs","document.querySelectorAll","popMagic"]],"trashschedules.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"travel-the-states.com":[["aost","String.prototype.charCodeAt","ai_"]],"tronxminer.com":[["aeld","load","htmls"]],"tubevintageporn.com":[["noeval"],["aopr","Aloader.serve"]],"tudotecno.com":[["acs","parseInt","break;case $."]],"tumanga.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tvtotalkabout.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"u-s-news.com":[["set","ulp_noadb","true"]],"ucirvinesports.com":[["set","blockAdBlock","trueFunc"]],"umterps.com":[["set","blockAdBlock","trueFunc"]],"uncensoredleak.com":[["acs","document.querySelectorAll","popMagic"]],"up-4ever.net":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["rmnt","script",".offsetHeight"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"up4load.com":[["rmnt","script","/\\);break;case|advert_|POPUNDER_URL|adblock/"]],"uproxy2.biz":[["aopr","GetWindowHeight"],["aopr","decodeURIComponent"],["acs","adcashMacros"]],"upshrink.com":[["set","blurred","false"]],"uptechnologys.com":[["nano-sib","/.?/","*","0.001"],["acs","eval","replace"]],"urbandictionary.com":[["rmnt","script","/:\\[?window,/"]],"urbanfarmie.com":[["rmnt","script","/__adblocker|html-load/"]],"uxjvp.pro":[["nowoif"]],"v6z24.com":[["rmnt","script","html-load.com"]],"vadbam.net":[["acs","document.documentElement","break;case $."]],"vandymania.com":[["rmnt","script","/__adblocker|html-load/"]],"vdtgr.com":[["acs","Math","break;case $."]],"veganinja.hu":[["acs","decodeURIComponent","ai_"]],"veganreset.com":[["rmnt","script","/__adblocker|html-load/"]],"vertigis.com":[["rmnt","script","/aoAdBlockDetected/i"]],"vibehubs.com":[["acs","parseInt","break;case $."],["aost","jQuery","ai_adb"]],"vidavra.com":[["nowoif"],["acs","document.createElement","/blocker|detected/"],["rmnt","script","document.getElementsByTagName"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"vidbm.com":[["acs","JSON.parse","break;case $."]],"videoszoofiliahd.com":[["aopr","open"],["aeld","/^(?:click|mousedown)$/","popunder"]],"vidup.to":[["acs","addEventListener","HTMLAllCollection"]],"vidzy.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"vipotv.com":[["noeval-if","js_func_decode_base_64"]],"vipporns.com":[["acs","document.querySelectorAll","popMagic"]],"vipshort.in":[["set","blurred","false"]],"viralviralvideos.com":[["acs","document.createElement","decodeURI(decodeURI","/^data:/"]],"vishakablone.com":[["rmnt","script","/__adblocker|html-load/"]],"vixcloud.co":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"volvov40club.com":[["rmnt","script","html-load.com"]],"voyeur-house.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","window.open"],["nowoif"]],"voznovel.com":[["rmnt","script","shopeeLinks"],["aeld","click","shopeeLinks"]],"vrcmods.com":[["nano-sib","timeLeft"],["nostif","height"],["nosiif","height"]],"vtxcafe.com":[["rmnt","script","html-load.com"]],"w3cub.com":[["nostif","/detectAdBlocker|window.open/"]],"wandsworthguardian.co.uk":[["set","adLight","true"]],"warefree01.com":[["acs","parseInt","break;case $."]],"watchcalifornicationonline.com":[["nowoif"]],"watchporninpublic.com":[["acs","document.querySelectorAll","popMagic"]],"wcvb.com":[["set","google.ima.settings.setDisableFlashAds","noopFunc"]],"wealthcatal.com":[["nostif","/window\\.location\\.href|n/","8000"]],"wearevoice.co.uk":[["set","adLight","true"]],"webcartop.jp":[["rmnt","script","html-load.com"]],"websiteglowgh.com":[["noeval-if","/chp_?ad/"]],"webtor.io":[["nowoif"]],"weekdaypescatarian.com":[["rmnt","script","/__adblocker|html-load/"]],"weldingmastermind.com":[["rmnt","script","/__adblocker|html-load/"]],"weltfussball.at":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"whas11.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"whattobecome.com":[["rmnt","script","/__adblocker|html-load/"]],"wheelndealmama.com":[["rmnt","script","/__adblocker|html-load/"]],"whiteonricecouple.com":[["rmnt","script","/__adblocker|html-load/"]],"whitneybond.com":[["rmnt","script","/__adblocker|html-load/"]],"wholeandheavenlyoven.com":[["rmnt","script","/__adblocker|html-load/"]],"wildbeeoutdoors.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"windingcreekranch.org":[["rmnt","script","/__adblocker|html-load/"]],"wolverineforums.com":[["rmnt","script","html-load.com"]],"world-fusigi.net":[["rmnt","script","html-load.com"]],"worldofpans.com":[["rmnt","script","/__adblocker|html-load/"]],"worthingcourtblog.com":[["rmnt","script","/__adblocker|html-load/"]],"wsucougars.com":[["set","blockAdBlock","trueFunc"]],"x24.video":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"]],"xcamcovid.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"xcity.org":[["aopr","loadTool"],["set-cookie","popunder","1"]],"xecce.com":[["aopr","open"]],"xianzhenyuan.cn":[["acs","document.getElementById","undefined"]],"xmorex.com":[["nowoif","/pop?"]],"xszav.club":[["acs","document.querySelectorAll","popMagic"]],"xterraforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"xxf.mobi":[["acs","document.querySelectorAll","popMagic"]],"xxxblowjob.pro":[["noeval"],["aopr","Aloader.serve"]],"xxxfiles.com":[["aopr","AaDetector"]],"xxxpicss.com":[["acs","WebAssembly","atob"]],"yakisurume.com":[["noeval-if","/chp_?ad/"]],"yazilidayim.net":[["noeval-if","/chp_?ad/"]],"yellowblissroad.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/"]],"yeovilexpress.co.uk":[["set","adLight","true"]],"yomoviesnow.com":[["acs","parseInt","break;case $."]],"young-machine.com":[["rmnt","script","html-load.com"]],"yourlifeupdated.net":[["noeval-if","ads"]],"youtube-nocookie.com":[["set","ytInitialPlayerResponse.playerAds","undefined"],["set","ytInitialPlayerResponse.adPlacements","undefined"],["set","ytInitialPlayerResponse.adSlots","undefined"],["set","playerResponse.adPlacements","undefined"],["json-prune","playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots important"],["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"youtubetowav.net":[["nowoif","_blank"]],"ysokuhou.blog.jp":[["acs","document.addEventListener","google_ad_client"]],"ytboob.com":[["aopr","document.dispatchEvent"]],"yugioh-starlight.com":[["rmnt","script","html-load.com"]],"yummysextubes.com":[["aopr","Aloader.serve"],["noeval"]],"zagreb.info":[["rmnt","script","html-load.com"]],"zilinak.sk":[["nostif","offsetHeight"]],"zodiacfire.com":[["rmnt","script","/__adblocker|html-load/"]],"zpserver.com":[["noeval-if","/chp_?ad/"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
