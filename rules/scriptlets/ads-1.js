/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"10-train.com":[["noeval-if","/chp_?ad/"]],"101cookbooks.com":[["rmnt","script","/__adblocker|html-load/"]],"125ccsportsbikes.com":[["rmnt","script","html-load.com"]],"15min.lt":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["nostif","insertBefore"]],"1911talk.com":[["rmnt","script","html-load.com"]],"1919a4.com":[["rmnt","script","html-load.com"]],"368chickens.com":[["rmnt","script","/__adblocker|html-load/"]],"3800pro.com":[["rmnt","script","html-load.com"]],"3bmeteo.com":[["set","elimina_profilazione","1"],["set","elimina_pubblicita","1"],["nano-sib","adv","*"]],"3boysandadog.com":[["rmnt","script","/__adblocker|html-load/"]],"3fnews.com":[["noeval-if","/chp_?ad/"]],"3gaytube.com":[["acs","document.querySelectorAll","popMagic"]],"3si.org":[["rmnt","script","html-load.com"]],"460ford.com":[["rmnt","script","html-load.com"]],"5j386s9.sbs":[["nowoif"]],"9to5mac.com":[["rmnt","script","fundingChoicesCalled"]],"addisonswonderland.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adishofdailylife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"agrigentonotizie.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"alattefood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alfa.lt":[["rmnt","script","html-load.com"]],"alidaskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alittleandalot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allevertakstream.space":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"allpar.com":[["rmnt","script","html-load.com"]],"allthingstarget.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amateur8.com":[["set","flashvars.adv_pre_vast",""],["aopw","__spotSettings"],["aeld","/click|mousedown/","catch"]],"amodernhomestead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"analdin.com":[["set","flashvars.adv_start_html",""],["set","flashvars.adv_pause_html",""]],"and-more.co":[["rmnt","script","await eval"]],"androidapks.biz":[["aeld","","break;case $."],["aopr","open"]],"androidonepro.com":[["aopr","downloadJSAtOnload"]],"anihq.cc":[["rmnt","script","_blank","includes","window.open"],["rmnt","#text","/Adblock/i"]],"anime3d.xyz":[["aopr","popit"],["aeld","popstate","noPop"]],"animeyubi.com":[["nowoif"]],"animez.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"anitube.vip":[["acs","EventTarget.prototype.addEventListener","delete window"],["no-xhr-if","taboola"]],"anonyviet.com":[["noeval-if","/chp_?ad/"]],"aogen-net.com":[["noeval-if","/chp_?ad/"]],"apkhex.com":[["set","style","noopFunc"],["nostif","show"]],"apl373.me":[["nowoif","_blank"]],"app.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"arabcanadanews.ca":[["aeld","load","popupAdModal"]],"arcaneeye.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"archtoolbox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arizonahuntingforums.com":[["rmnt","script","html-load.com"]],"arrowheadaddict.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"artsychicksrule.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianwatch.net":[["acs","parseInt","break;case $."]],"asmr18.fans":[["acs","WebAssembly","atob"]],"awarenessdays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"awealthofcommonsense.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"azel.info":[["aopw","__aaZoneid"]],"barfuck.com":[["aopr","document.dispatchEvent"]],"batchkun.com":[["aopw","auto_safelink"]],"bblink.com":[["set","blurred","false"]],"bbqdryrubs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beatofhawaii.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bedavahesap.org":[["no-xhr-if","adsbygoogle"]],"beesandroses.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"benchmark.pl":[["nano-sib","consoleLoaded?clearInterval"]],"benzinpreis.de":[["nostif","adblock"],["set","consentGiven","true"]],"berriesandbarnacles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"betweenenglandandiowa.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"bhookedcrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bidouillesikea.com":[["aopr","adbackDebug"]],"bigdickwishes.com":[["aopr","Aloader.serve"],["noeval"]],"bigtitsxxxsex.com":[["aopr","ALoader"],["nowoif"],["noeval"]],"biketestreviews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bikinbayi.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"billyparisi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bizjournals.com":[["no-fetch-if","method:HEAD"]],"bjhub.me":[["acs","document.querySelectorAll","popMagic"]],"blackporncrazy.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"blendtw.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluemanhoop.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"bokepsin.in.net":[["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"],["nowoif","_blank"]],"boltbeat.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"boothfindernyc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxentriq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxingstream.me":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","adserverDomain"],["acs","navigator","FingerprintJS"]],"braunschweiger-zeitung.de":[["nostif",".call(null)","10"]],"brieffreunde.de":[["nostif",".call(null)","10"]],"brighteyedbaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bristan.com":[["set","stLight","{}"],["set","stLight.options","noopFunc"]],"broncathleticfund.com":[["set","blockAdBlock","trueFunc"]],"bucetaspeludas.com.br":[["acs","document.querySelectorAll","popMagic"]],"bulbagarden.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["set","setupSkin","noopFunc"]],"businesstrend.jp":[["noeval-if","/chp_?ad/"]],"campsitephotos.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"caraudioclassifieds.org":[["rmnt","script","html-load.com"]],"catfish1.com":[["rmnt","script","html-load.com"]],"cavalierstream.fr":[["noeval-if","/chp_?ad/"]],"celebwhore.com":[["acs","document.querySelectorAll","popMagic"],["set","flashvars.popunder_url",""]],"celicasupra.com":[["rmnt","script","html-load.com"]],"cerdas.com":[["acs","document.querySelectorAll","popMagic"]],"cgcosplay.org":[["noeval-if","/ads|chp_?ad/"],["acs","b2a","ai_adb"]],"chatta.it":[["nostif","Adv"]],"check-imei.info":[["noeval-if","/chp_?ad/"]],"chicoer.com":[["nostif","n.trigger","1"],["set","CnnXt.Event.fire","noopFunc"]],"childhoodmagic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chromeready.com":[["set","penci_adlbock.ad_blocker_detector","0"]],"cincyshopper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"citethisforme.com":[["aopr","SBMGlobal.run.gramCallback"]],"civilenggforall.com":[["aopr","blockAdBlock"]],"claimtrx.com":[["aeld","load","block"]],"claydscap.com":[["noeval-if","/chp_?ad/"]],"cleverjourney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clubtouareg.com":[["rmnt","script","html-load.com"]],"clutchpoints.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cockroachzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"codeitworld.com":[["noeval-if","/chp_?ad/"]],"comixzilla.com":[["acs","document.createElement","script"]],"comnuan.com":[["set","cmnnrunads","true"]],"compsmag.com":[["nostif","jQuery"]],"confidencemeetsparenting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"consoletarget.com":[["aopr","loadTool"]],"constellation-guide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"contexturesblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookinginmygenes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithparita.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coolcrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cosplaynsfw.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"cottageatthecrossroads.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cottageonbunkerhill.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cowboysnews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cozycornercharm.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"craftyourhappyplace.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cravethegood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazylittleprojects.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazytoys.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"crossroadstoday.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"crystalcomics.com":[["noeval-if","/chp_?ad/"]],"curiosidadtop.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"]],"dagmarbleasdale.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyactor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyrevs.com":[["no-xhr-if","adsbygoogle"]],"dailysoapdish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailystar.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"],["nano-stb","native code","15000","0.001"],["nano-stb","(null)","5000","0.001"]],"dailytruthreport.com":[["rmnt","script","/==undefined.*body/"]],"dailyvideoreports.net":[["aeld","load","/showModal|isBlanketFound/"],["set","adsbygoogle.loaded","true"]],"dawnofthedawg.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"decrypt.day":[["no-fetch-if","adsbygoogle"]],"delightfuladventures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"delo.bg":[["aopr","wpsite_clickable_data"]],"delscookingtwist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deltabit.co":[["nano-sib"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"demonicscans.org":[["acs","document.querySelectorAll","popMagic"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"derelictplaces.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"derryjournal.com":[["rmnt","script","await eval"]],"deutschpersischtv.com":[["noeval-if","/chp_?ad/"]],"dev-dark-blog.pantheonsite.io":[["noeval-if","/chp_?ad/"]],"diaryofaquilter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"digiztechno.com":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"dikgames.com":[["acs","document.querySelectorAll","popMagic"]],"dimensionofstuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"discusscooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"divascancook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"divxfilmeonline.net":[["acs","document.documentElement","break;case $."]],"diyandfun.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dl-protect.link":[["rmnt","script","adserverDomain"]],"dloady.com":[["acs","$","show"]],"dogingtonpost.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domesticatedtom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dotafire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dramavideo.se":[["aopr","aclib"]],"eastream.net":[["acs","Math","break;case $."]],"eatyourselfskinny.com":[["rmnt","script","/__adblocker|html-load/"]],"ebook-hunter.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"echo-online.de":[["nostif",".call(null)","10"]],"egpu.io":[["rmnt","script","/__adblocker|html-load/"]],"eleganceechoes.com":[["rmnt","script","/__adblocker|html-load/"]],"elnacional.cat":[["rmnt","script","()=>eval"]],"elystandard.co.uk":[["set","adLight","true"]],"embed.st":[["rmnt","script","adserverDomain"]],"empflix.com":[["aopw","popzone"],["nowoif"],["set","FlixPop.isPopGloballyEnabled","falseFunc"],["aeld","","/exo"]],"encurtareidog.top":[["noeval-if","/chp_?ad/"]],"encyclopedia-titanica.org":[["rmnt","script","/__adblocker|html-load/"]],"englishbulldognews.com":[["rmnt","script","/__adblocker|html-load/"]],"erinscozykitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"erogames.to":[["set","checkJuicyPopBlocked","noopFunc"]],"eropaste.net":[["set","isAdBlockActive","false"]],"erowall.com":[["aopr","document.dispatchEvent"],["aopr","loadTool"]],"errotica-archives.com":[["ra","href","[href*=\"ccbill\"]"]],"eugenemakedraw.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"eurocheapo.com":[["rmnt","script","/__adblocker|html-load/"]],"exceldemy.com":[["rmnt","script","/__adblocker|html-load/"]],"exgirlfriendmarket.com":[["aopr","loadTool"]],"exmouthjournal.co.uk":[["set","adLight","true"]],"factable.com":[["set","googletag.cmd","{}"]],"fakazagods.com":[["acs","parseInt","break;case $."]],"famivita.com.br":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fansmega.com":[["nowoif"]],"farmwifecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fearmp4.ru":[["rmnt","script","ads_block"]],"feed2all.org":[["aopr","popns"],["set-cookie","BetterJsPop0","1"]],"femdomtb.com":[["nostif","innerText","2000"],["aopr","open"]],"filemoon-59t9ep5j.xyz":[["acs","Math.floor","urls.length"]],"filerice.com":[["acs","$","window.open"]],"fillmyrecipebook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"filosofashion.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"financeyogi.net":[["noeval-if","/chp_?ad/"]],"firestream.site":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"foodieandwine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodnutters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodpleasureandhealth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foreverconscious.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"forexcracked.com":[["noeval-if","/chp_?ad/"]],"formyanime.com":[["rmnt","script","antiAdBlockerHandler"]],"forobasketcatala.com":[["acs","XMLHttpRequest","onreadystatechange"]],"frauporno.com":[["aeld","","popMagic"]],"freedom3d.art":[["noeval-if","/chp_?ad/"]],"freedomcardboard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freemovies-download.com":[["noeval-if","/chp_?ad/"]],"freescrapbookfonts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freetubetv.net":[["noeval-if","/chp_?ad/"]],"frenchcountrycottage.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frkn64modding.com":[["no-xhr-if","ad_"]],"fuckingsession.com":[["acs","document.querySelectorAll","popMagic"]],"fullboys.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif","?key="],["nowoif","_blank"]],"funker530.com":[["rc","cnx-ad-container|cnx-ad-bid-slot"]],"fuskator.com":[["aopr","ea.add"],["noeval"]],"gainesville.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"gamedayeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamelopte.com":[["nano-sib","yuidea-","*"]],"games.arkadium.com":[["rmnt","script","html-load.com"],["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.centredaily.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.insp.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.kansascity.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.triviatoday.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"garlicsaltandlime.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gbmwolverine.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"gearjunkie.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"general-anzeiger-bonn.de":[["nostif",".call(null)","10"]],"getitfree.cn":[["acs","document.getElementById",".style"]],"ghajini-4urg44yg.lol":[["nowoif"],["acs","Math","localStorage['\\x"]],"ghostsfreaks.com":[["noeval-if","/chp_?ad/"]],"gigmature.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"gloucestershirelive.co.uk":[["set","chameleonVideo.adDisabledRequested","true"]],"go2gbo.com":[["rmnt","script","html-load.com"]],"gobankingrates.com":[["aeld","DOMContentLoaded","blockAdBlock"]],"godlikeproductions.com":[["rmnt","script","/alert|brave|blocker/i"]],"goeags.com":[["set","blockAdBlock","trueFunc"]],"gogoplay2.com":[["acs","parseInt","break;case $."]],"golancers.ca":[["set","blockAdBlock","trueFunc"]],"golfstreams.me":[["rmnt","script","adserverDomain"]],"golobos.com":[["set","blockAdBlock","trueFunc"]],"gonzoporn.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"goodto.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"gourbanhiking.com":[["rmnt","script","html-load.com"]],"gozips.com":[["set","blockAdBlock","trueFunc"]],"grasta.net":[["noeval-if","/chp_?ad/"]],"grazymag.com":[["noeval-if","/chp_?ad/"]],"greaterlongisland.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gymnastics-now.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hanime1-me.top":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"happity.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happyhealthymama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"haqem.com":[["noeval-if","/chp_?ad/"]],"hardrockforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hartlepoolmail.co.uk":[["rmnt","script","await eval"]],"hd-tch.com":[["acs","addEventListener","nextFunction"]],"hdvintagetube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hdzone.org":[["acs","JSON.parse","break;case $."]],"headlinerpost.com":[["noeval-if","/chp_?ad/"]],"hearthpwn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heatherednest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heatherwholeinvolve.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"hellohoneycomb.blog":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentaiyes.com":[["acs","document.querySelectorAll","popMagic"]],"heraldonline.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"heroichollywood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"herpackinglist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hindimovies.to":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","Math","String.fromCharCode"],["nowoif"]],"hindisubbedacademy.com":[["rmnt","script","antiAdBlockerHandler"]],"hm4tech.info":[["rmnt","script","antiAdBlockerHandler"]],"hmc-id.blogspot.com":[["nostif","AdBlock"]],"hometheateracademy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hondagrom.net":[["rmnt","script","html-load.com"]],"hotcouponworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotelgyms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotxxxjapanese.com":[["aopr","popit"],["aeld","popstate","noPop"]],"howchoo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hqsex-xxx.com":[["noeval"],["aopr","Aloader.serve"]],"hubbardbroadcasting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"huffingtonpost.com":[["aopw","_sp_"]],"hummingbirdhigh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ifoodreal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iguarras.com":[["aopr","afScript"]],"ihearteating.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ihub.live":[["aopr","encodeURIComponent"]],"ilkleygazette.co.uk":[["set","adLight","true"]],"iloveclassicrock.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imag-r.com":[["aopr","adBlockerDetected"]],"imageshimage.com":[["aeld","","checkTarget"]],"imamother.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imgspark.com":[["acs","parseInt","break;case $."]],"imintweb.com":[["aopr","adBlockDetected"]],"incomera-doo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infinityscans.xyz":[["nostif",".adv-"]],"inprogrammer.com":[["noeval-if","/chp_?ad/"]],"inspiredbycharm.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"interculturalita.it":[["noeval-if","/chp_?ad/"]],"ishouldhavesaid.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ispyfabulous.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itaishinja.com":[["rmnt","script","html-load.com"]],"iusm.co.kr":[["nostif","error-report.com"]],"jaiefra.com":[["aopr","adBlockDetected"]],"jamonkey.com":[["rmnt","script","/__adblocker|html-load/"]],"japanese-names.info":[["rmnt","script","/__adblocker|html-load/"]],"jardiner-malin.fr":[["set","wIsAdBlocked","false"]],"javsubbed.xyz":[["aopr","__Y"]],"javx357.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["noeval-if","/chp_?ad/"]],"jenpornuj.cz":[["aopr","document.dispatchEvent"]],"jettajunkie.com":[["rmnt","script","html-load.com"]],"jetztspielen.de":[["aopr","googletag"]],"joyfullymad.com":[["rmnt","script","/__adblocker|html-load/"]],"jujmanga.com":[["acs","document.querySelectorAll","popMagic"]],"kachelmannwetter.com":[["nostif",".call(null)","10"]],"kaoskrew.org":[["acs","document.querySelectorAll","popMagic"]],"kellyelko.com":[["rmnt","script","/__adblocker|html-load/"]],"ketocookingchristian.com":[["rmnt","script","/__adblocker|html-load/"]],"ketolifetalk.com":[["rmnt","script","html-load.com"]],"khohieu.com":[["noeval-if","/chp_?ad/"]],"kiaporn.com":[["acs","document.querySelectorAll","popMagic"]],"kiatuskerforum.com":[["rmnt","script","html-load.com"]],"kiddyearner.com":[["aopw","canRunAds"],["set","document.hasFocus","trueFunc"]],"kidzcraftcorner.com":[["rmnt","script","/__adblocker|html-load/"]],"kijyomita.com":[["rmnt","script","html-load.com"]],"kinsta.cloud":[["rmnt","script","/__adblocker|html-load/"]],"kireicosplay.com":[["noeval-if","/chp_?ad/"]],"kisahdunia.com":[["aeld","DOMContentLoaded","adsBlocked"],["aost","setTimeout","adsBlocked"]],"kmo.to":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"],["nowoif","!abyss.to","1"]],"knicksxfactor.com":[["rmnt","script","/__adblocker|html-load/"]],"kpople.net":[["rmnt","script","/__adblocker|html-load/"]],"kstatefootball.net":[["set","blockAdBlock","trueFunc"]],"ktmforum.co.uk":[["rmnt","script","html-load.com"]],"la7.it":[["no-xhr-if","doubleclick"]],"lanascooking.com":[["rmnt","script","/__adblocker|html-load/"]],"laopiniondezamora.es":[["set","pr_okvalida","true"],["nostif","sub"]],"lawnmodel.com":[["rmnt","script","/__adblocker|html-load/"]],"lazycatkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"leahingram.com":[["rmnt","script","/__adblocker|html-load/"]],"lebois-racing.com":[["noeval-if","/chp_?ad/"]],"lemonsandzest.com":[["rmnt","script","/__adblocker|html-load/"]],"lemonsqueezyhome.com":[["aopr","__eiPb"]],"lendi.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"lespassionsdechinouk.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"lewdweb.net":[["acs","document.querySelectorAll","popMagic"]],"lgbtqnation.com":[["rmnt","script","adblockerDisabled"]],"lib.hatenablog.com":[["acs","document.addEventListener","google_ad_client"]],"lifecurrentsblog.com":[["rmnt","script","/__adblocker|html-load/"]],"lifematome.blog":[["rmnt","#text","/\\[vkExUnit_ad area=(after|before)\\]/"]],"lifestylefortress.com":[["rmnt","script","/__adblocker|html-load/"]],"lillychilders.com":[["rmnt","script","/__adblocker|html-load/"]],"lindsaypleskot.com":[["rmnt","script","/__adblocker|html-load/"]],"lindseyeatsla.com":[["rmnt","script","/__adblocker|html-load/"]],"link4rev.site":[["set","blurred","false"]],"linkconfig.com":[["nano-sib"]],"listverse.com":[["rmnt","script","/__adblocker|html-load/"]],"littlechefwithin.com":[["rmnt","script","/__adblocker|html-load/"]],"littlespoonfarm.com":[["rmnt","script","/__adblocker|html-load/"]],"lowcarbspark.com":[["rmnt","script","/__adblocker|html-load/"]],"ls1gto.com":[["rmnt","script","html-load.com"]],"ludigames.com":[["nostif","ads"]],"luminatedata.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"luremaga.jp":[["rmnt","script","html-load.com"]],"m.jobinmeghalaya.in":[["no-fetch-if","googlesyndication"]],"m1xdrop.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"m2list.com":[["nostif","debugger"],["aopr","Adcash"]],"macrotrends.net":[["acs","RegExp","0x"],["aopw","ABD"],["set","clicky","{}"],["set","clicky.goal","noopFunc"]],"madetobeamomma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangaball.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"mangoful.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangoporn.co":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"maricruzavalos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marieclaire.co.uk":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"marmiton.org":[["aopw","_sp_"]],"matchora.live":[["rmnt","script","/dataset\\.zone|fireSmartlink/"]],"mega-hentai2.blogspot.com":[["aopr","adBlockDetected"]],"megajapantube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"megatube.xxx":[["aopr","BetterJsPop"]],"menhairstylesworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"menhairstylist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"menstennisforums.com":[["rmnt","script","html-load.com"]],"messforless.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"metamani.blog15.fc2.com":[["acs","document.addEventListener","google_ad_client"]],"miakouppa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miamitake.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mindmotion93y8.shop":[["nano-sib","countDown"]],"minesweeperquest.com":[["rmnt","script","html-load.com"]],"missallieskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mobility.com.ng":[["aost","String.prototype.charCodeAt","ai_"]],"moddedraptor.com":[["rmnt","script","html-load.com"]],"moenime.com":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"momof6.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moralfibres.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"morereptiles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moritzfinedesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moto-station.com":[["noeval-if","/chp_?ad/"]],"moviebaztv.com":[["rmnt","script","popundersPerIP"]],"movielair.cc":[["acs","EventTarget.prototype.addEventListener","delete window"]],"moviesnipipay.me":[["noeval-if","/chp_?ad/"]],"mullenowners.com":[["rmnt","script","html-load.com"]],"musvozimbabwenews.com":[["acs","document.querySelectorAll","popMagic"]],"mvagusta.net":[["rmnt","script","html-load.com"]],"myad.biz":[["set","blurred","false"]],"myfastgti.com":[["rmnt","script","html-load.com"]],"myglamwish.com":[["noeval-if","/chp_?ad/"]],"myincrediblerecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mynet.com":[["nostif","error-report.com"],["nostif","googlefc"]],"myriadrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"naijal.com":[["acs","Math","break;case $."]],"nangiphotos.com":[["acs","document.querySelectorAll","popMagic"]],"neservicee.com":[["noeval-if","/chp_?ad/"]],"netnaijas.com":[["set","openWindow","noopFunc"]],"neuna.net":[["noeval-if","/chp_?ad/"]],"news-herald.com":[["aopr","Connext"]],"news.bg":[["no-fetch-if","method:GET"],["nostif","google"],["aeld","DOMContentLoaded","location.replace"],["no-fetch-if","method:HEAD"],["set","HTMLScriptElement.prototype.onerror","null"],["aeld","error"],["no-fetch-if","doubleclick"]],"newsobserver.com":[["set","Adv_ab","false"],["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"nicknight.de":[["nostif",".call(null)","10"]],"ninersdaily.com":[["rmnt","script","/__adblocker|html-load/"]],"ninja400riders.com":[["rmnt","script","html-load.com"]],"nintendosmash.com":[["rmnt","script","/__adblocker|html-load/"]],"nirvanacakery.com":[["rmnt","script","/__adblocker|html-load/"]],"nlcosplay.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","WebAssembly","atob"],["noeval-if","/chp_?ad/"]],"nlegs.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nodenspace.com":[["noeval-if","/chp_?ad/"]],"nodo313.net":[["rmnt","script","/adbl/i"]],"noicetranslations.blogspot.com":[["aopr","checkAdsStatus"]],"noindexscan.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","wpadmngr.com"]],"noodlemagazine.com":[["nano-stb","download","1100"]],"nosweatshakespeare.com":[["rmnt","script","/__adblocker|html-load/"]],"nourishandtempt.com":[["rmnt","script","/__adblocker|html-load/"]],"novelism.jp":[["aeld","blur","native code"]],"nudedxxx.com":[["acs","document.querySelectorAll","popMagic"]],"nwusports.com":[["set","blockAdBlock","trueFunc"]],"ochristine.com":[["rmnt","script","/__adblocker|html-load/"]],"odum.cl":[["acs","$","sam"]],"ofbatteranddough.com":[["rmnt","script","/__adblocker|html-load/"]],"ohmeohmyblog.com":[["rmnt","script","/__adblocker|html-load/"]],"olgainthekitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"omgchocolatedesserts.com":[["rmnt","script","/__adblocker|html-load/"]],"onecrazyhouse.com":[["rmnt","script","/__adblocker|html-load/"]],"onlinefetishporn.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"orgasmatrix.com":[["acs","document.querySelectorAll","popMagic"]],"outdoor-magazin.com":[["nostif",".call(null)","10"]],"ovnihoje.com":[["noeval-if","/chp_?ad/"]],"padresmission.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"paidnaija.com":[["acs","parseInt","break;case $."]],"pak-mcqs.net":[["aopw","_pop"]],"paketmu.com":[["no-fetch-if","googlesyndication"]],"pancakerecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pavementsucks.com":[["rmnt","script","html-load.com"]],"payskip.org":[["aeld","DOMContentLoaded","&nbsp"],["aopw","atOptions"],["set","blurred","false"],["ra","onclick"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pc-builder.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pcworld.com":[["rmnt","script","window.admiral","excludes",",\\\""]],"peladas69.com":[["aopr","decodeURI"]],"pepperlivestream.online":[["aopr","Adcash"]],"pg-wuming.com":[["acs","$",".test"]],"pharmaceutical-technology.com":[["acs","jQuery","click"]],"phim85.com":[["acs","document.querySelectorAll","popMagic"]],"phimmoiaz.cc":[["aopr","popunder"]],"phoenix-manga.com":[["noeval-if","/chp_?ad/"]],"photopea.com":[["set","__osw","undefined"],["no-fetch-if","uniconsent.com"]],"pistolworld.com":[["rmnt","script","html-load.com"]],"pivotalweather.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pkw-forum.de":[["nostif",".call(null)","10"]],"planetguide.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plantyou.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"player.smashy.stream":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["rmnt","script","/shown_at|WebAssembly/"],["acs","globalThis","shown_at"]],"player.subespanolvip.com":[["aopr","BetterJsPop"]],"playrust.io":[["aeld","","Date"]],"poconorecord.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pokemon-zone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porn-hd-tube.com":[["aopr","document.dispatchEvent"]],"porn-pig.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"porndr.com":[["aopr","decodeURI"]],"pornhub-sexfilme.net":[["aopr","ExoLoader"],["nostif","/loadMomoVip|loadExo|includeSpecial/"],["aost","document.createElement","loadNeverBlock"]],"pornicom.com":[["aopr","open"],["aopr","document.dispatchEvent"]],"pornj.com":[["aopr","open"]],"pornoaffe.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"pornocolombiano.net":[["acs","document.querySelectorAll","popMagic"]],"pornoteensex.com":[["noeval"],["aopr","Aloader.serve"]],"pornotommy.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"portalyaoi.com":[["noeval-if","/chp_?ad/"]],"posthouselegacy.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"powershellfaqs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pregnancyfoodchecker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pressemedie.dk":[["noeval-if","/chp_?ad/"]],"programmiedovetrovarli.it":[["aost","encodeURIComponent","inlineScript"]],"promipool.de":[["nostif",".call(null)","10"]],"psychology-spot.com":[["noeval-if","/chp_?ad/"]],"puppyweightcalculator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pussyspace.net":[["aost","navigator.userAgent","pushiserve"],["aeld","load","creativeLoaded-"],["aeld","/^load[A-Za-z]{12,}/"],["aost","document.createElement","rollexzone"],["nostif","tick","1000"],["set","registerLazyExo","noopFunc"]],"q2forums.co.uk":[["rmnt","script","html-load.com"]],"qashbits.com":[["aopr","NoAdBlock"]],"queenbeetoday.com":[["rmnt","script","/__adblocker|html-load/"]],"quicasting.it":[["nosiif","visibility","1000"]],"r6messagenet.com":[["rmnt","script","html-load.com"]],"rachlmansfield.com":[["rmnt","script","/__adblocker|html-load/"]],"radios-chilenas.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"rangerxd.com":[["rmnt","script","/__adblocker|html-load/"]],"rarbg.how":[["aeld","click","PopURL"]],"ratracerebellion.com":[["rmnt","script","/__adblocker|html-load/"]],"rawdex.top":[["rmnt","script","wpadmngr.com"]],"realbbc.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"recipeteacher.com":[["rmnt","script","/__adblocker|html-load/"]],"redcurrantbakery.com":[["rmnt","script","/__adblocker|html-load/"]],"redhousespice.com":[["rmnt","script","/__adblocker|html-load/"]],"redstormsports.com":[["set","blockAdBlock","trueFunc"]],"reluctantentertainer.com":[["rmnt","script","/__adblocker|html-load/"]],"renaultforums.co.uk":[["rmnt","script","html-load.com"]],"rencah.com":[["aost","String.prototype.charCodeAt","ai_"]],"rentry.co":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"reprezentacija.rs":[["noeval-if","/chp_?ad/"]],"retiredom.net":[["rmnt","script","/__adblocker|html-load/"]],"risasfamilykitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"roadbikerider.com":[["rmnt","script","/__adblocker|html-load/"]],"roadrunnersathletics.com":[["set","blockAdBlock","trueFunc"]],"rojitadirecta.blogspot.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rootzwiki.com":[["rmnt","script","html-load.com"]],"rottweilersonline.com":[["rmnt","script","html-load.com"]],"royale-games.com":[["acs","document.addEventListener","localStorage"]],"rpmplay.xyz":[["aopr","open"]],"rugbynoise.com":[["rmnt","script","/__adblocker|html-load/"]],"rundschau-online.de":[["nostif",".call(null)","10"]],"runeatrepeat.com":[["rmnt","script","/__adblocker|html-load/"]],"runnerslab.com":[["rmnt","script","/__adblocker|html-load/"]],"russellstreetreport.com":[["rmnt","script","/__adblocker|html-load/"]],"s10forum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"saikyo-jump.com":[["rmnt","script","html-load.com"]],"saltandwind.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sanblo.com":[["noeval-if","/chp_?ad/"]],"savingslifestyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savvybudgetboss.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savvyhomebody.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sbnation.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"scatnetwork.com":[["acs","document.querySelectorAll","popMagic"]],"science-sparks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scioniaforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"scmp.com":[["no-xhr-if","googlesyndication"],["remove-cookie","__adblocker"]],"scotsman.com":[["rmnt","script","await eval"]],"seasonedhomemaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seasons-dlove.net":[["noeval-if","/chp_?ad/"]],"seevanessacraft.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seogroup.bookmarking.info":[["noeval-if","/chp_?ad/"]],"series9movies.com":[["rmnt","script","/window\\[\\'open\\'\\]/"],["nowoif"]],"server-tutorials.net":[["noeval-if","/chp_?ad/"]],"sewnikki.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexflashgame.org":[["acs","ishop_codes"]],"sexpornasian.com":[["acs","document.querySelectorAll","popMagic"]],"sexxxanimal.com":[["aopr","popit"],["aeld","popstate","noPop"]],"sharemods.com":[["nano-stb","tick","1000","0.001"],["rmnt","script","error-report.com"]],"sheepandstitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"short-jambo.ink":[["nowoif","_blank"]],"short.croclix.me":[["acs","document.querySelectorAll","popMagic"]],"shoutoutarizona.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shreveporttimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"sigtalk.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"simple-veganista.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplytaralynn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplyvoyage.com":[["aopr","_sp_._networkListenerData"]],"simshomekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sitegames.net":[["aeld","","break;case $."],["aopr","open"]],"skylineowners.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"slenderkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smalltownwoman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smithsonianmag.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="],["aeld","DOMContentLoaded","leaderboardAd"],["acs","document.addEventListener","#leaderboardAd"]],"snowmobilefanatics.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"socialmediagirls.com":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"sociologicamente.it":[["acs","addEventListener","MutationObserver"]],"softwaredescargas.com":[["aeld","DOMContentLoaded","scriptwz_url"],["aopr","scriptwz_url"]],"solobari.it":[["aeld","load","blockAdBlock"]],"space.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"sport1.de":[["aeld","load","hard_block"],["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"sportea.link":[["rmnt","script","popundersPerIP"]],"sportsbuff.stream":[["acs","document.documentElement","break;case $."]],"ssdhostting.com":[["no-xhr-if","googlesyndication"]],"stablerarena.com":[["set","blockAdBlock","trueFunc"]],"stalowemiasto.pl":[["aeld","load","detect"]],"starstreams.pro":[["no-fetch-if","adsbygoogle"]],"startup101.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sthelensstar.co.uk":[["set","adLight","true"]],"stitchbyfay.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stmruby.com":[["rmnt","script","wpadmngr.com"],["set","cRAds","false"],["aopw","showADBOverlay"],["acs","WebAssembly","atob"]],"storyofmathematics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"strandsgame.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stream25.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamtpmedia.com":[["rmnt","script","{delete window["]],"strefabiznesu.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"stromtrooper.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sudburymercury.co.uk":[["set","adLight","true"]],"sugarmaplefarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sulaandspice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sumaburayasan.com":[["rmnt","script","html-load.com"]],"supercars.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supergoldenbakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supertelevisionhd.com":[["aopr","AaDetector"]],"supra6.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"surreycomet.co.uk":[["set","adLight","true"]],"sweetandsavorybyshinee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"switchbacktravel.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"sxmislandcam.com":[["nostif","innerHTML"]],"szene1.at":[["nostif",".call(null)","10"]],"tabootube.to":[["rmnt","script","popMagic"]],"tamilbrahmins.com":[["acs","$","test"]],"tapeadvertisement.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"tashasartisanfoods.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"taurus-horoscopes.com":[["nostif","displayMessage","2000"]],"tdtnews.com":[["nostif","TNCMS.DMP"]],"tech8s.net":[["nano-sib","/.?/","*","0.02"]],"techastuces.com":[["noeval-if","/chp_?ad/"]],"techclips.net":[["nostif","sadbl"]],"techedubyte.com":[["noeval-if","/chp_?ad/"],["aeld","load","[native code]"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"],["set","checkAdsStatus","noopFunc"],["noeval-if","deblocker"],["no-fetch-if","googlesyndication"],["nostif",".redirect"],["aeld","load","document.querySelectorAll"]],"techguided.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techsupportforum.com":[["rmnt","script","html-load.com"]],"teleclub.xyz":[["rmnt","script","Error"]],"telegratuita.com":[["aeld","DOMContentLoaded","script[data-domain="]],"tenniscompanion.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tennisworldusa.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"terashare.co":[["nowoif","_blank"],["aeld","click","attached","elements","div[class=\"share-embed-container\"]"]],"textograto.com":[["nostif","()"]],"tflcar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"th-cam.com":[["aopw","HTMLElement.prototype.insertAdjacentHTML"]],"thatoregonlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"the-gazette.co.uk":[["set","adLight","true"]],"the2seasons.com":[["aopr","__eiPb"]],"theargus.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"thebassholes.com":[["rmnt","script","html-load.com"]],"thebetteredblondie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theblissempire.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["aopr","open"]],"thebossykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecelticbhoys.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"theconscientiouseater.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecontentbible.com":[["rmnt","script","\"nowprocket\""]],"thedefineddish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedigitaltheater.com":[["noeval-if","/chp_?ad/"]],"thefastrecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theflyfishingforum.com":[["rmnt","script","html-load.com"]],"thefrugalhomemaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theglobalgaming.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehappychickencoop.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehiddenveggies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehomesteadinghippy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thekitchenmagpie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["acs","Math","adthrive"]],"thekoreanvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themodestman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenews-messenger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thenodramamama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theoi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepeachiespoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theperfectloaf.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theprettybee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theprimaryparade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theprofilebrotherhood.com":[["rmnt","script","html-load.com"]],"theriagames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesawguy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theseasonalhomestead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesecretofthetarot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesologlobetrotter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestitchinmommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theusaposts.com":[["no-fetch-if","googlesyndication"]],"theveglife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thevolvoforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewholecook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thiepmung.com":[["acs","nothingCanStopMeShowThisMessage"]],"thiswortheylife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"throttlepack.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tiffinandteaofficial.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timefordelish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timminspress.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"]],"tipsenweetjes.nl":[["rmnt","script","await eval"]],"tokuvn.com":[["acs","goToURL"]],"topito.com":[["aopr","document.bridCanRunAds"]],"torrentmac.net":[["acs","JSON","break;case"],["aeld","","Math"],["nostif","show"]],"tothotornot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"townandtourist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tpb-proxy.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"trannyline.com":[["acs","document.querySelectorAll","popMagic"]],"transparentcalifornia.com":[["set","$.magnificPopup.open","noopFunc"],["rmnt","script","html-load.com"]],"travel-mi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"triedandtasty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tristatehomepage.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"triumph675.net":[["rmnt","script","html-load.com"]],"true-north-kitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"truesteamachievements.com":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"truthnews.de":[["nostif","show"]],"trx-forum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tsz.com.np":[["nostif","googlesyndication"]],"tulsahurricane.com":[["set","blockAdBlock","trueFunc"]],"tutorialsaya.com":[["no-fetch-if","adsbygoogle"]],"tutti-dolci.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tvline.com":[["aopw","_sp_"],["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tyler-brown.com":[["nano-stb","download","1100"],["acs","document.querySelectorAll","popMagic"]],"u.gg":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"udinetoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"upiapi.in":[["set","detectAdBlock","noopFunc"]],"upliftingmayhem.com":[["rmnt","script","/__adblocker|html-load/"]],"upstore.net":[["nano-sib","countDown","1150","0.5"]],"urbia.de":[["aopr","_sp_.mms.startMsg"]],"urbo.com":[["rmnt","script","/__adblocker|html-load/"]],"urjalansanomat.fi":[["aeld","scroll","innerHeight"]],"usnews.com":[["set","Object.prototype.vjsPlayer.ads","noopFunc"]],"utsports.com":[["set","blockAdBlock","trueFunc"]],"velosterturbo.org":[["rmnt","script","html-load.com"]],"verdragonball.online":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"videyx.cam":[["no-fetch-if","method:HEAD"],["nowoif","!/\\/download|\\/play|cdn\\.videy\\.co/"],["nostif","location.href"]],"vidshare.tv":[["acs","Math","zfgloaded"]],"vidtube.one":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"vienna.at":[["nostif",".call(null)","10"]],"vikistream.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."]],"vimm.net":[["rmnt","script","html-load.com"]],"virabux.com":[["noeval-if","/chp_?ad/"]],"volvoevforum.com":[["rmnt","script","html-load.com"]],"voyageaustin.com":[["rmnt","script","/__adblocker|html-load/"]],"vpzserver.com":[["noeval-if","/chp_?ad/"]],"vstream.id":[["set","uas","[]"]],"vvide0.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"vviruslove.com":[["nosiif","visibility","1000"]],"wallpaper.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"wanderingchickpea.com":[["rmnt","script","/__adblocker|html-load/"]],"wapkiz.com":[["aopw","adBlockDetected"]],"watchfamilyguyonline.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watchfreeks.com":[["rmnt","script","html-load.com"]],"watchuseek.com":[["rmnt","script","html-load.com"]],"watchxxxfree.pw":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"wdio.com":[["rmnt","script","/__adblocker|html-load/"]],"webcafe.bg":[["no-fetch-if","method:GET"],["nostif","google"],["aeld","DOMContentLoaded","location.replace"],["no-fetch-if","method:HEAD"]],"weihnachts-bilder.org":[["nostif",".call(null)","10"]],"welsh-dictionary.ac.uk":[["set","fingerprint","{}"],["set","get_fingerprint","noopFunc"]],"weszlo.com":[["no-fetch-if","ad"]],"wetter--vorhersage-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"wholelifestylenutrition.com":[["rmnt","script","/__adblocker|html-load/"]],"widewifes.com":[["aopr","document.dispatchEvent"]],"wineturtle.com":[["rmnt","script","/__adblocker|html-load/"]],"withthewoodruffs.com":[["rmnt","script","/__adblocker|html-load/"]],"womenreality.com":[["nosiif","visibility","1000"]],"wonderfuldiy.com":[["rmnt","script","/__adblocker|html-load/"]],"wordfromthebird.blog":[["rmnt","script","/__adblocker|html-load/"]],"worldwarwings.com":[["rmnt","script","/__adblocker|html-load/"]],"wowktv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wsavcw.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"x-trail-uk.co.uk":[["rmnt","script","html-load.com"]],"xiaopan.co":[["aopw","AdBlockDetectorWorkaround"]],"xvideos.name":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"xxxhub.cc":[["acs","document.querySelectorAll","popMagic"]],"xxxpornmilf.com":[["aopr","popit"],["aeld","popstate","noPop"]],"yellowbridge.com":[["nostif","blocker"],["set","isContentBlocked","falseFunc"]],"ymovies.vip":[["aopr","mm"]],"youporngay.com":[["set","page_params.holiday_promo","true"]],"yourcupofcake.com":[["rmnt","script","/__adblocker|html-load/"]],"youvegotthismath.com":[["rmnt","script","/__adblocker|html-load/"]],"yt5s.com":[["aost","String.prototype.charCodeAt","https"]],"za.gl":[["acs","document.addEventListener","click"],["acs","document.getElementById","overlay"],["acs","setInterval","location"],["aopr","popad"],["nowoif","!za.gl","0"],["set","document.hidden","true"],["set","blurred","false"]],"zeijakunahiko.com":[["noeval-if","/chp_?ad/"]],"zenradio.com":[["set","di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"]],"zipgameonline.com":[["rmnt","script","/__adblocker|html-load/"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
