/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"10scopes.com":[["rmnt","script","/__adblocker|html-load/"]],"17apart.com":[["rmnt","script","/__adblocker|html-load/"]],"20min.ch":[["aopr","_sp_._networkListenerData"],["nano-stb","readyPromise","5000","0.001"]],"25yearslatersite.com":[["set","jQuery.adblock","false"]],"2ix2.com":[["noeval-if","/chp_?ad/"]],"360news4u.net":[["aeld","","history.go"]],"365daysofcrockpot.com":[["rmnt","script","/__adblocker|html-load/"]],"3gpterbaru.com":[["noeval-if","/chp_?ad/"]],"456movie.com":[["acs","clearTimeout","popundersPerIP"]],"51bonusrummy.in":[["rmnt","script","WebAssembly"],["rmnt","script","wpadmngr.com"]],"7daysofplay.com":[["rmnt","script","/__adblocker|html-load/"]],"899panigale.org":[["rmnt","script","html-load.com"]],"959panigale.net":[["rmnt","script","html-load.com"]],"992forum.com":[["rmnt","script","html-load.com"]],"abc4westmichigan.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"aberdeenskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"actuallygoodteamnames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"addsaltandserve.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adultdvdparadise.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"afk.guide":[["nostif","display"]],"aglassofbovino.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"akirabox.to":[["aeld","DOMContentLoaded","open"],["nowoif","_blank"],["acs","setTimeout","decodeURIComponent(escape"],["rmnt","script","(function(","excludes","document"],["aeld","click",".href"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"alfalfalfa.com":[["rmnt","script","html-load.com"]],"aliezstream.pro":[["rmnt","script","popundersPerIP"]],"alleveilingen.be":[["acs","document.addEventListener","fakeAd"]],"allusione.org":[["aopr","b2a"]],"almohtarif-tech.net":[["aeld","load","onload"]],"amberskitchencooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"angrybbq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anichin.top":[["nowoif"]],"anidl.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"animalcrossingworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anime4mega.net":[["noeval-if","/chp_?ad/"]],"anime7.download":[["noeval-if","/chp_?ad/"],["aopw","app_advert"]],"animecenterbr.com":[["noeval-if","/chp_?ad/"]],"animesaturn.cx":[["rmnt","script","{delete window["]],"animexxxsex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"apkmodhub.in":[["acs","String.fromCharCode","ai_adb"]],"apnews.com":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"applediagram.com":[["noeval-if","/chp_?ad/"]],"aquariumsphere.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arabianbusiness.com":[["aopr","adBlockDetected"]],"ariase.com":[["rmnt","script","dataLayer"]],"ariva.de":[["nostif",".call(null)","10"]],"arizonasportsfans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"armslocker.com":[["rmnt","script","html-load.com"]],"armypowerinfo.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"ash-eats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianclipdedhd.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"askannamoseley.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aspdotnet-suresh.com":[["aeld","load","onload"]],"assistirtvonlinebr.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"astrologyking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aucfree.com":[["rmnt","script","html-load.com"]],"audiofanzine.com":[["set","Math.pow","noopFunc"]],"audycje.tokfm.pl":[["set","adsOk","true"]],"avirtualvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ayatoon.com":[["noeval-if","/chp_?ad/"]],"azcentral.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"b4ucast.com":[["acs","document.documentElement","break;case $."]],"babia.to":[["acs","$","adsBlocked"],["nostif","/show|document\\.createElement/"]],"badassdownloader.com":[["set","bscheck.adblocker","noopFunc"],["nostif","innerHTML"]],"bargpt.app":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bassisthq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bbwfuckpic.com":[["acs","document.querySelectorAll","popMagic"]],"bdix.app":[["noeval-if","/chp_?ad/"]],"bdlink.pw":[["nano-sib"]],"bdsmkingdom.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"beautytidbits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beekeepingforums.com":[["rmnt","script","html-load.com"]],"behindthevoiceactors.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bellflowerlifestyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"benandme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"benidormandbeyond.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beritasulteng.com":[["aopw","adBlockDetected"]],"bigcockfreetube.com":[["aopr","Aloader.serve"],["noeval"]],"bigpiecreative.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"bigwank.com":[["acs","document.querySelectorAll","popMagic"]],"bimmerwerkz.com":[["rmnt","script","html-load.com"]],"birdnature.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bitcoinminingforex.blogspot.com":[["nofab"],["nowoif"]],"bitesofberi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bitlinks.pw":[["acs","Math","break;case $."]],"blackberrybabe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blisseyhusband.net":[["noeval-if","/chp_?ad/"]],"blissfullylowcarb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blogesque.net":[["acs","document.documentElement","break;case $."]],"blogpascher.com":[["nostif","document.location"]],"boardingarea.com":[["rmnt","script","await eval"]],"boatbasincafe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boerse.de":[["nostif",".call(null)","10"]],"bollywoodx.org":[["acs","document.querySelectorAll","popMagic"]],"bookishgoblin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxingvideo.org":[["noeval-if","/chp_?ad/"]],"boysahoy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bracontece.com.br":[["aopw","adBlockDetected"]],"brianakdesigns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brighteon.com":[["set","adBlockDisabled","true"],["set","__NEXT_DATA__.props.pageProps.adVideo","undefined"]],"brocoflix.xyz":[["acs","document.createElement","l.appendChild(s)"]],"broncoevforum.com":[["rmnt","script","html-load.com"]],"browncrossing.net":[["aopr","Adcash"]],"brutusforum.com":[["rmnt","script","html-load.com"]],"businessinsider.de":[["nostif",".call(null)","10"]],"businessnamegenerator.com":[["nostif","gclid"]],"businesssoftwarehere.com":[["set","adblockstatus","false"]],"bysekoze.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"bysetayico.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"camwhorez.video":[["aopr","TotemToolsObject"],["set","flashvars.protect_block",""]],"camwhoria.com":[["acs","crakPopInParams"],["aopr","console.log"]],"canalporno.com":[["aopr","ExoLoader"]],"canli-radyo-dinle.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"casertanews.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"cashbux.work":[["noeval-if","ads"]],"catmovie.website":[["noeval-if","/chp_?ad/"]],"cayenneevforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"cda-hd.cc":[["aopr","AaDetector"]],"cesenatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"chefdenise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chelsea24news.pl":[["noeval-if","/chp_?ad/"]],"chiangraitimes.com":[["acs","eval","replace"]],"chietitoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"chip.de":[["json-prune","enabled","force_disabled"],["set","window.__gv_org_tfa","undefined"],["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"cigarforums.net":[["rmnt","script","html-load.com"]],"cinemabaz.com":[["acs","document.documentElement","break;case $."]],"civicsquestions.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ckxsfm.com":[["acs","document.getElementById","fakeElement"]],"clashdaddy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clashdaily.com":[["rmnt","script","/==undefined.*body/"]],"clearlycoffee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clickondetroit.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"cockmeter.com":[["acs","document.dispatchEvent","myEl"],["aopr","document.dispatchEvent"],["aopr","ExoLoader.serve"]],"codeproject.com":[["aopw","_sp_"],["aopr","retrievalService"]],"collider.com":[["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"colnect.com":[["set","aaw","{}"],["set","aaw.processAdsOnPage","noopFunc"],["set-local-storage-item","adblock_warning_pages_count","$remove$"],["set","CAD.pageblockerWarning","noopFunc"]],"coloredmanga.com":[["rmnt","script","FingerprintJS"],["aost","Math.random","inlineScript"]],"conserve-energy-future.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"contractpharma.com":[["acs","$","#pageWrapper"]],"cookeatgo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coolporno.net":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"copykatchat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"corral.net":[["rmnt","script","html-load.com"]],"costcoinsider.com":[["rmnt","script","()=>eval"]],"countrylife.co.uk":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"courier-journal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"crazyshit.com":[["acs","jQuery","document.cookie"]],"crazyvidup.com":[["ra","srcdoc","iframe"]],"criollasx.com":[["acs","document.querySelectorAll","popMagic"],["aeld","click","handlePopup"]],"csst.at":[["acs","document.querySelectorAll",".ad-slot"]],"ctx700forum.com":[["rmnt","script","html-load.com"]],"cuatro.com":[["aopr","$REACTBASE_STATE.serverModules.push"]],"cuts-url.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"cycleforums.com":[["rmnt","script","html-load.com"]],"dailycommutercrossword.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daringgourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"davidsonbuilders.com":[["noeval-if","/chp_?ad/"]],"dawntube.com":[["aopr","document.dispatchEvent"]],"dbna.com":[["nostif",".call(null)","10"]],"decider.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/parentNode\\.removeChild|textContent=atob/"],["acs","atob","/parentNode\\.removeChild|textContent=atob/"]],"derusblog.com":[["noeval-if","/chp_?ad/"]],"desirenovel.com":[["noeval-if","/chp_?ad/"]],"dessertsanddrinks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diabetesforum.com":[["rmnt","script","html-load.com"]],"dieselplace.com":[["rmnt","script","html-load.com"]],"diffen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diglink.blogspot.com":[["nano-sib"]],"dimitrasdishes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dishnthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"distanceparent.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"divinelifestyle.com":[["aopr","__eiPb"]],"dogsnet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"downvod.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dreamcheeky.com":[["nano-sib","counter","*"]],"dreaminterpretation.info":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drivenime.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","/popMagic|pop1stp/"]],"driving.ca":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"drummagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ducati.org":[["rmnt","script","html-load.com"]],"easybib.com":[["aopr","SBMGlobal.run.gramCallback"],["aeld","load","(!i)"],["nano-sib"]],"eatcookbake.com":[["rmnt","script","/__adblocker|html-load/"]],"eatingbirdfood.com":[["rmnt","script","/__adblocker|html-load/"]],"eatplant-based.com":[["rmnt","script","/__adblocker|html-load/"]],"ebookhunter.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"echodnia.eu":[["aeld","","show"]],"ed-protect.org":[["acs","Math","break;case $."]],"elcultura.pl":[["noeval-if","/chp_?ad/"]],"eletronicabr.com":[["nostif","test","100"]],"eliminatorforum.com":[["rmnt","script","html-load.com"]],"ellieandco.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"elmundo.es":[["aopr","adUnits"]],"enjoysharepoint.com":[["rmnt","script","/__adblocker|html-load/"]],"eoreuni.com":[["aopr","adBlockDetected"]],"equinoxevforum.com":[["rmnt","script","html-load.com"]],"eska.pl":[["nostif","adb"]],"essentialketo.com":[["rmnt","script","/__adblocker|html-load/"]],"eurekaddl.baby":[["rmnt","script","adserverDomain"]],"eutawstreetreport.com":[["rmnt","script","/__adblocker|html-load/"]],"everydayfamilyeats.com":[["rmnt","script","/__adblocker|html-load/"]],"examword.com":[["nostif","open"]],"express.de":[["nostif",".call(null)","10"]],"expressbydgoski.pl":[["aeld","","show"]],"familyhandyman.com":[["aopw","_sp_"],["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"fap-nation.org":[["acs","eval","replace"]],"faresgame.com":[["aopr","adBlockDetected"]],"farmingshelter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"faucet.ovh":[["rmnt","script","/adblock.php"]],"fearlessdining.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fileq.net":[["nowoif"],["set","clicked","2"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"fileroy.com":[["ra","inert","main.fr-download-main","complete","quitAfter","10"],["ra","data-fr-detection","body","complete"],["nano-sib","counter"],["rmnt","script","?key="]],"filmesonlinex.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"filmifen.com":[["aeld","load","document.body.appendChild(s)"],["aeld","DOMContentLoaded","adb"],["aeld","contextmenu"]],"finance.yahoo.com":[["rmnt","script","/loadRecoveryScripts|nowprocket/","excludes","self.__next"]],"finurah.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fivemdev.org":[["no-fetch-if","googlesyndication"]],"flacdownloader.com":[["rmnt","script","AdBlockChecker"],["nowoif","_blank"]],"flavcity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flixsix.com":[["aeld","load","nextFunction"]],"focaljet.com":[["rmnt","script","html-load.com"]],"focusrs.org":[["rmnt","script","html-load.com"]],"foodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodologygeek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodrenegade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foolproofliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballandress.club":[["acs","document.documentElement","break;case $."]],"footybite.to":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["aeld","","open"]],"fordmuscleforums.com":[["rmnt","script","html-load.com"]],"forexrw7.com":[["noeval-if","/chp_?ad/"],["nano-stb","/.?/","*","0.001"],["nano-sib","/.?/","*","0.001"]],"forgee.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","click","window.open"]],"fosters.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"fotopixel.es":[["aost","String.prototype.charCodeAt","ai_"]],"fox40.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"free-sms-receive.com":[["nostif","adb"]],"friedrichshainblog.de":[["noeval-if","/chp_?ad/"]],"fromscratchdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fromwatch.com":[["rmnt","script","popundersPerIP"],["aopr","Adcash"],["aopr","aclib"]],"fsharetv.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ftopx.com":[["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopr","loadTool"],["acs","document.querySelectorAll","popMagic"]],"fuckhairygirls.com":[["noeval"],["aopr","Aloader.serve"]],"fullxxxporn.net":[["aopr","decodeURI"]],"funcheaporfree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funeral-memorial.com":[["noeval-if","/chp_?ad/"]],"futbolenlatelevision.com":[["noeval-if","/chp_?ad/"]],"game-2u.com":[["acs","document.documentElement","break;case $."]],"gamesofdesire.com":[["aopr","loadTool"]],"gardenzeus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gazetazachodnia.eu":[["noeval-if","/chp_?ad/"]],"gedpracticequestions.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gekkonen.net":[["aopw","ai_front"]],"genialne.pl":[["nano-sib","consoleLoaded?clearInterval"]],"geo.fr":[["nostif","checkPub","6000"],["aopw","$getWin"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"],["set","DD_RUM.addTiming","noopFunc"],["no-xhr-if","doubleclick"]],"getintopcm.com":[["noeval-if","/chp_?ad/"]],"getmorevocab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"getpczone.com":[["nosiif","visibility","1000"]],"giftofcuriosity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"givemenbastreams.com":[["acs","JSON.parse","break;case $."]],"gl1800riders.com":[["rmnt","script","html-load.com"]],"glow-diaries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gogodl.com":[["acs","document.getElementById","adblock"]],"goltelevision.com":[["set","adblock","false"]],"goodenoughmoming.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"googleapis.com.do":[["aeld","click","_0x"]],"gopherhole.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gotechtor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"govexec.com":[["set","GEMG.GPT.Interstitial","noopFunc"]],"gplastra.com":[["noeval-if","ads"],["aost","setTimeout","data"]],"grassfedgirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grayingwithgrace.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greenesportszone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gsdn.live":[["noeval-if","/chp_?ad/"]],"guidetodetailing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gujjukhabar.in":[["rmnt","script","DisableDevtool"],["nowoif","!devuploads.com"],["nano-sib","","*","0.02"],["nano-stb","","*","0.02"]],"gunboards.com":[["rmnt","script","html-load.com"]],"hampshire-life.co.uk":[["set","adLight","true"]],"happi.com":[["acs","$","#pageWrapper"]],"haxmaps.com":[["acs","ab1","ab2"]],"hdfilmizlesen.com":[["acs","document.addEventListener","initPop"],["set","app._data.ads","[]"]],"healthdigest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthylittlevittles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heandsheeatclean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai.tv":[["acs","document.querySelectorAll","popMagic"],["set-cookie","inter","1","","reload","1"]],"hentaipulse.com":[["acs","ExoLoader"]],"hentaistream.com":[["aeld","load","script"],["noeval-if","popUnderStage"]],"hentaitube1.lol":[["acs","document.querySelectorAll","popMagic"]],"heraldscotland.com":[["aopw","_sp_"],["set","adLight","true"]],"heraldseries.co.uk":[["set","adLight","true"]],"heraldtimesonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"heretocook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"highporn.net":[["acs","document.querySelectorAll","popMagic"],["acs","addEventListener","-0x"],["aopr","jsUnda"]],"hindi.trade":[["noeval-if","/chp_?ad/"]],"hisetpracticetest.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"historyofroyalwomen.com":[["aeld","DOMContentLoaded","daadb_get_data_fetch"]],"home-xxx-videos.com":[["aopr","document.dispatchEvent"],["aeld","getexoloader"]],"honeybearlane.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hoodtrendspredict.com":[["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"hosttbuzz.com":[["nowoif"],["nano-sib","/countdown--|getElementById/","*","0.001"],["nano-stb","getElementById","*","0.001"]],"hothit.me":[["acs","parseInt","break;case $."]],"housebyhoff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howewelive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtobuildit.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtonestforless.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"i123movies.net":[["acs","JSON.parse","break;case $."]],"iban-rechner.de":[["nostif",".call(null)","10"]],"idealhome.co.uk":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"iheartvegetables.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ilbolerodiravel.org":[["noeval-if","/chp_?ad/"]],"imgair.net":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"imgtorrnt.in":[["aopr","ExoLoader.serve"],["aopr","document.dispatchEvent"],["aeld","","_0x"]],"improvephotography.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"indoav.app":[["nowoif","_blank","1"]],"inmyownstyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"insideeducation.co.za":[["noeval-if","/chp_?ad/"]],"insidemarketing.it":[["aopr","adblock"]],"instrupix.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"intentionalhospitality.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"interestingliterature.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ipamod.com":[["noeval-if","deblocker"]],"iptvbin.com":[["aost","String.prototype.charCodeAt","ai_"]],"irunfar.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"irv2.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"isi7.net":[["no-fetch-if","adsbygoogle"]],"isitpacked.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itechguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"jaguarxeforum.com":[["rmnt","script","html-load.com"]],"janjua.tv":[["acs","JSON.parse","break;case $."]],"javbake.com":[["acs","document.querySelectorAll","popMagic"]],"javenspanish.com":[["acs","document.querySelectorAll","popMagic"]],"javhdporn.com":[["acs","document.querySelectorAll","popMagic"]],"javpas.com":[["acs","WebAssembly","atob"]],"javsubindo.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","wpadmngr.com"]],"javtsunami.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["aeld","getexoloader"]],"javxxxporn.com":[["acs","document.querySelectorAll","popMagic"]],"jazzradio.com":[["set","di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"]],"jemsite.com":[["rmnt","script","html-load.com"]],"jessicachoosemake.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jessicanturner.com":[["rmnt","script","/__adblocker|html-load/"]],"jiji.com":[["rmnt","script","html-load.com"]],"jimdofree.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"joinyourlife4u.com":[["rmnt","script","/__adblocker|html-load/"]],"julieseatsandtreats.com":[["aopr","__eiPb"]],"kandiforums.com":[["rmnt","script","html-load.com"]],"katesbestrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"kayakanglermag.com":[["rmnt","script","/__adblocker|html-load/"]],"kch-ent.com":[["rmnt","script","/__adblocker|html-load/"]],"kcra.com":[["set","google.ima.settings.setDisableFlashAds","noopFunc"]],"kellywhatcould.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"ketoasap.com":[["rmnt","script","/__adblocker|html-load/"]],"ketovale.com":[["rmnt","script","/__adblocker|html-load/"]],"keystoneforums.com":[["rmnt","script","/__adblocker|html-load/"]],"keywestharborwebcam.com":[["nostif","innerHTML"]],"kicking-carbs.com":[["rmnt","script","/__adblocker|html-load/"]],"kidan-m.com":[["rmnt","script","html-load.com"]],"kitchendivas.com":[["rmnt","script","/__adblocker|html-load/"]],"knicksnation.com":[["rmnt","script","/__adblocker|html-load/"]],"know-how-tree.com":[["noeval-if","/chp_?ad/"]],"knowyourmeme.com":[["rmnt","script","/adblockerDisabled|\\.cmd\\.unshift|admiral/","excludes",",\\\""]],"kolcars.shop":[["noeval-if","/chp_?ad/"]],"kontenterabox.com":[["noeval-if","adsbygoogle"]],"kotaku.com":[["set","ga","noopFunc"]],"kppk983.com":[["set","google_unique_id","6"]],"krqe.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"la123movies.org":[["acs","JSON.parse","break;case $."],["aeld","","break;case $."]],"ladkibahin.com":[["noeval-if","/chp_?ad/"]],"lasisa.net":[["rmnt","script",").join(String.fromCharCode"]],"ledgernote.com":[["rmnt","script","/__adblocker|html-load/"]],"leechpremium.net":[["aopr","atob"]],"lemonlimeadventures.com":[["rmnt","script","/__adblocker|html-load/"]],"letstraveltocancun.com":[["rmnt","script","/__adblocker|html-load/"]],"letsworkremotely.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"letthebakingbegin.com":[["rmnt","script","/__adblocker|html-load/"]],"lewdzone.com":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","Promise"],["nano-sib","circle_animation"],["nano-stb","CountBack","990"]],"lexusrxowners.com":[["rmnt","script","html-load.com"]],"lifemadefull.com":[["rmnt","script","/__adblocker|html-load/"]],"lifesambrosia.com":[["rmnt","script","/__adblocker|html-load/"]],"limerickleader.ie":[["rmnt","script","await eval"]],"link.vipurl.in":[["nostif","alert","2000"]],"linkshortx.in":[["set","blurred","false"]],"linuxgenie.net":[["rmnt","script","/__adblocker|html-load/"]],"littlesugarsnaps.com":[["rmnt","script","/__adblocker|html-load/"]],"livedoor.blog":[["rmnt","script","html-load.com"]],"livelovefruit.com":[["rmnt","script","/__adblocker|html-load/"]],"lostarkfire.com":[["rmnt","script","/__adblocker|html-load/"]],"loveandmarriageblog.com":[["rmnt","script","/__adblocker|html-load/"]],"luluvids.top":[["acs","WebAssembly","atob"]],"luxuretv.com":[["acs","$","ltvModal"],["set","luxuretv.config",""],["aopr","popns"]],"luxurylaunches.com":[["rmnt","script","/__adblocker|html-load/"]],"lvz.de":[["nostif",".call(null)","10"]],"maccanismi.it":[["noeval-if","show"]],"main-spitze.de":[["nostif",".call(null)","10"]],"mandiner.hu":[["set","Object.prototype.htmlLoadScriptService.loadScript","noopFunc"]],"mangcapquangvnpt.com":[["noeval-if","/chp_?ad/"]],"manhuaga.com":[["noeval-if","adsbygoogle"]],"manhuatop.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["nowoif","_blank"]],"marketrevolution.eu":[["noeval-if","/chp_?ad/"]],"maxgaming.fi":[["aeld","contextmenu"]],"maxstream.video":[["nostif","alert"],["nano-stb",".fadeIn()","3000"],["nowoif"]],"me-encantas.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","document.onmousedown"]],"mealprepify.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"media.cms.nova.cz":[["nano-stb","() => n(t)","*"]],"mediascelebres.com":[["noeval-if","/chp_?ad/"]],"megapornpics.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"megashare-website.com":[["acs","JSON.parse","break;case $."]],"megaxh.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"mentalfloss.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"],["set","countClicks","0"]],"messinatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"meteox.com":[["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|siteActivateScripts/"]],"mhn.quest":[["nostif","adblock"]],"midwexican.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"minecraftmaps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mobitool.net":[["acs","decodeURIComponent","ai_"]],"moflix-stream.fans":[["acs","addEventListener","HTMLAllCollection"]],"mommafitlyndsey.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommybunch.com":[["aopr","__eiPb"]],"momon-ga.com":[["acs","WebAssembly","atob"]],"momooze.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneysavingmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motor-talk.de":[["nostif",".call(null)","10"],["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"motorcyclenews.com":[["aopr","_sp_._networkListenerData"]],"moviefree2.com":[["aeld","","break;case $."],["aopr","open"]],"movies7.to":[["acs","JSON.parse","break;case $."],["nowoif"]],"moviesonline.fm":[["aeld","","break;case $."]],"mp4upload.com":[["aopw","adcashMacros"],["aopr","Adcash"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"mrbenne.com":[["rmnt","script","/fairAdblock|popMagic/"]],"msmorristown.com":[["acs","document.getElementById","fakeElement"]],"mspoweruser.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"muragon.com":[["rmnt","script","html-load.com"]],"musiker-board.de":[["nostif",".call(null)","10"]],"mx30forum.com":[["rmnt","script","html-load.com"]],"myflixertv.to":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"myhentaigallery.com":[["acs","document.addEventListener","fallback"]],"mykitchenserenity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mynewhairstyles.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"nagca.com":[["rmnt","script","html-load.com"]],"naijahits.com":[["acs","Math","break;case $."]],"namasce.pl":[["nostif","","1"]],"navylookout.com":[["rmnt","script","/__adblocker|html-load/"]],"netzwelt.de":[["nostif",".call(null)","10"],["set","window.myAd.runAd","noopFunc"]],"nevadawolfpack.com":[["set","blockAdBlock","trueFunc"]],"news-press.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"news8000.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"nflperry.com":[["rmnt","script","/__adblocker|html-load/"]],"nicomanga.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","addEventListener","HTMLAllCollection"],["nowoif"],["set-cookie","unlock_chapter_guest","1"]],"nikaplayer.com":[["nowoif","!nikaplayer.com"]],"nishinippon.co.jp":[["rmnt","script","html-load.com"]],"nissanforums.com":[["rmnt","script","html-load.com"]],"niteshyadav.in":[["noeval-if","/chp_?ad/"]],"nj.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","adblockerDisabled","excludes",",\\\""]],"njavtv.com":[["set-session-storage-item","_x_popped","{}"]],"nonixxx.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nospoonnecessary.com":[["rmnt","script","/__adblocker|html-load/"]],"notjustahousewife.net":[["rmnt","script","/__adblocker|html-load/"]],"nourishingpursuits.com":[["rmnt","script","/__adblocker|html-load/"]],"novascotiahunting.com":[["rmnt","script","html-load.com"]],"nutrient-matters.com":[["rmnt","script","/__adblocker|html-load/"]],"ocala.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"odporn.com":[["acs","WebAssembly","atob"]],"ohsobeautifulpaper.com":[["rmnt","script","/__adblocker|html-load/"]],"oii.io":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["nowoif"],["ra","onclick",".btn"],["set","blurred","false"],["noeval-if","ppu"]],"olarila.com":[["no-fetch-if","googlesyndication"],["nostif","adblock"]],"oldgrannylovers.com":[["aopr","document.dispatchEvent"]],"omgexploits.com":[["nosiif","visibility","1000"]],"onle.co":[["nano-sib"]],"onlinesaprevodom.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"onlygangbang.com":[["acs","document.querySelectorAll","popMagic"]],"op-marburg.de":[["nostif",".call(null)","10"]],"openchat-review.me":[["set-local-storage-item","BLOCKED_FLAG_KEY","$remove$"],["aost","document.querySelectorAll","security.js"]],"opensubtitles.org":[["set-cookie","download-counter","1"]],"originalteentube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"otakuanimess.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"ourcrowsnest.com":[["rmnt","script","/__adblocker|html-load/"]],"outdoorapothecary.com":[["rmnt","script","/__adblocker|html-load/"]],"ovabee.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"overthefirecooking.com":[["rmnt","script","/__adblocker|html-load/"]],"pagingsupermom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pandasnovel.com":[["set","pandaAdviewValidate","true"]],"paranormal-ch.com":[["rmnt","script","html-load.com"]],"paulmarina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pbfingers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pcgamer.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"],["aopr","_sp_._networkListenerData"]],"pe.com":[["set","CnnXt.Event.fire","noopFunc"]],"peachify.top":[["aeld","click","atob","protect","1"]],"pengantartidurkuh.blogspot.com":[["acs","addEventListener","google_ad_client"]],"penniesintopearls.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"perudelights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"phototraces.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"phototrans.de":[["rmnt","script","!adsbygoogle.loaded"]],"pinoyrecipe.net":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"pizzablab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playgo1.cc":[["acs","document.documentElement","break;case $."]],"playstationlifestyle.net":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"playtolearnpreschool.us":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plaza.chu.jp":[["noeval-if","/chp_?ad/"]],"plumbingforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pnwriders.com":[["rmnt","script","html-load.com"]],"pocketgamer.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"pokemoncoders.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"politicaltownhall.com":[["rmnt","script","html-load.com"]],"pornfd.com":[["nostif","innerText","2000"],["aopr","console.clear"],["aeld","","bi()"]],"pornhost.com":[["aopr","raConf"],["aopw","encodeURIComponent"]],"pornretro.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"porntn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["set","flashvars.protect_block",""],["acs","decodeURIComponent","0x"]],"pornwatchers.com":[["aopr","ExoLoader"],["aopr","document.dispatchEvent"],["acs","document.querySelectorAll","popMagic"]],"pornx.tube":[["aeld","","popMagic"]],"pornxp.org":[["acs","document.querySelectorAll","popMagic"],["aopr","AaDetector"]],"pover.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pptvhd36.com":[["rmnt","script","html-load.com"]],"prcforum.com":[["rmnt","script","html-load.com"]],"present.rssing.com":[["nano-stb","setC"]],"priceme.game":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ptztv.live":[["nostif","innerHTML.length:0"]],"purediablo.com":[["set","nitroAds.abp","true"]],"putacupinit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"puzzles.standard.co.uk":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"quiltdom.com":[["rmnt","script","/__adblocker|html-load/"]],"quotecatalog.com":[["rmnt","script","/__adblocker|html-load/"]],"rachaelsgoodeats.com":[["rmnt","script","/__adblocker|html-load/"]],"rachelcooks.com":[["rmnt","script","/__adblocker|html-load/"]],"radio-en-vivo.mx":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-hk.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.fr":[["nostif",".call(null)","10"]],"radio.zone":[["nosiif","daadb"]],"radiocountrylive.com":[["aopr","adp"]],"radios-online.pt":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"rainydaymum.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"ranoz.gg":[["aeld","click","clicksCount"],["nowoif","_blank"],["no-fetch-if","adskeeper"],["aeld","click","preventDefault"],["acs","setTimeout","decodeURIComponent(escape"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"rarepike.com":[["aeld","np.detect"]],"rargb.to":[["aeld","","open"]],"rateyourmusic.com":[["set","adsSlotRenderEndSeen","true"]],"rawinu.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","addEventListener","HTMLAllCollection"],["set-cookie","unlock_chapter_guest","1"],["nowoif"]],"realgm.com":[["aopw","_sp_"]],"reallifeoflulu.com":[["rmnt","script","/__adblocker|html-load/"]],"realmenrealstyle.com":[["rmnt","script","/__adblocker|html-load/"]],"recipetineats.com":[["rmnt","script","/__adblocker|html-load/"]],"reddit-soccerstreams.com":[["acs","document.documentElement","break;case $."]],"redporno.cz":[["aopr","ExoLoader.serve"]],"reformationacres.com":[["rmnt","script","/__adblocker|html-load/"]],"rightdark-scan.com":[["noeval-if","/chp_?ad/"]],"riminitoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"rimondo.com":[["nostif",".call(null)","10"]],"ringsidenews.com":[["aopr","googletag"]],"rockradio.com":[["set","di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"]],"rogueengineer.com":[["rmnt","script","/__adblocker|html-load/"]],"rpupdate.cc":[["acs","eval","replace"]],"ruhr24.de":[["nostif",".call(null)","10"]],"rzforums.com":[["rmnt","script","html-load.com"]],"salesforcefaqs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"salzgitter-zeitung.de":[["nostif",".call(null)","10"]],"samfirms.com":[["set","startfrom","0"]],"sandhyahariharan.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sarahfit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sb9t.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"scenedl.org":[["set","loadpagecheck","noopFunc"]],"schrauben-normen.de":[["aeld","load","nextFunction"]],"sciencefacts.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scotlandrugbynews.com":[["set","adLight","true"]],"scubadiverlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"searchenginereports.net":[["nostif","showPopup"]],"secretsdujeu.com":[["acs","document.getElementById","adsrefresh"]],"serieshdpormega.com":[["noeval-if","/chp_?ad/"]],"sex-free-movies.com":[["aopr","popit"],["aeld","popstate","noPop"]],"sexlist.tv":[["set","flashvars.popunder_url",""]],"sexypornpictures.org":[["nowoif"]],"sharing.wtf":[["rmnt","script","adblocker"],["set","amiblock","0"]],"shogaisha-techo.com":[["noeval-if","/chp_?ad/"]],"shooshtime.com":[["nowoif"],["acs","document.getElementsByTagName","adn"]],"shownews.pl":[["rmnt","script","admiral","excludes",",\\\""]],"shrink-service.it":[["aopr","open"]],"shrinkforearn.in":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"shrivardhantech.in":[["noeval-if","/chp_?ad/"]],"simplesidedishes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siteunblocked.info":[["nowoif"],["aopr","GetWindowHeight"],["aopr","decodeURIComponent"],["aeld","","/pop|wm|forceClick/"]],"slink.bid":[["acs","navigator","break;case $."]],"smartcarofamerica.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sms-anonyme.net":[["nowebrtc"]],"snaphappytravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snowboardingforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"snowman-information.com":[["noeval-if","/chp_?ad/"]],"socialadventures.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soft.cr3zyblog.com":[["rmnt","script","getComputedStyle(el"],["rmnt","script","popup"]],"softdroid4u.blogspot.com":[["acs","addEventListener","blocker"]],"somewhatsimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soulcysters.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southendstandard.co.uk":[["set","adLight","true"]],"southerncastiron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southerndiscourse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"speakev.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"spellmana.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sprinklesandsprouts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spy.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"squirrelsatthefeeder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stageberry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"starsgtech.in":[["noeval-if","/chp_?ad/"]],"static.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steamidfinder.com":[["rmnt","script","html-load.com"]],"stevesnovasite.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"streamcasthub.store":[["json-prune","ads playerAds"]],"streamnoads.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"],["rmnt","script","FingerprintJS"]],"stretchandfolds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"suaurl.com":[["aopr","document.oncontextmenu"],["aost","document.querySelector","suaads"],["nostif","/window\\.location\\.href|n/","8000"]],"subaruoutback.org":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"subedlc.com":[["acs","document.addEventListener","nextFunction"]],"subtaboo.com":[["aeld","","popMagic"]],"sukuyou.com":[["noeval-if","/chp_?ad/"]],"sunlineclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superembeds.com":[["nowoif"]],"sustainablecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"svipvids.com":[["aopw","KillAdBlock"]],"sxnaar.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"taboodude.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"takimag.com":[["acs","document.getElementById","show_ads"],["aeld","DOMContentLoaded","adb"]],"talkceltic.net":[["set","samDetected","false"]],"tarathueson.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"taschenhirn.de":[["nostif",".call(null)","10"]],"taurusclub.com":[["rmnt","script","html-load.com"]],"teachoo.com":[["aopr","importantFunc"],["rmnt","script","numberPages"],["rmnt","script","brave"]],"team-rcv.xyz":[["noeval-if","/chp_?ad/"]],"technicalviral.com":[["noeval-if","/chp_?ad/"]],"teds-list.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tegutalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thatonepointofview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theakforum.net":[["rmnt","script","html-load.com"]],"theallergychef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theartofsimple.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theberserkmanga.com":[["noeval-if","/chp_?ad/"]],"theblokecave.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theclashify.com":[["nostif","adblock"]],"theclevermeal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecoldwire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecountrycook.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecreameri.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedesigninspiration.com":[["aost","Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["rmnt","script","/==undefined.*body/"]],"theeducatorsroom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefitnessphantom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegardeningfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegimptutorials.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegritandpolish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehindu.com":[["set","Adblock","false"]],"thehousethatlarsbuilt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theintell.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thelabradorsite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelibertydaily.com":[["rmnt","script","/==undefined.*body/"]],"theliterarylifestyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themakeyourownzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenewsglobe.net":[["noeval-if","/chp_?ad/"]],"thepopularlist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thertstv.com":[["nostif",".adsbygoogle"]],"thesewingloftblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestrive.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetelegraphandargus.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"thiagorossi.com.br":[["noeval-if","/chp_?ad/"]],"thingstomen.com":[["acs","JSON.parse","break;case $."]],"thueringen24.de":[["nostif",".call(null)","10"]],"thurrott.com":[["acs","$","adblockDetected"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tickzoo.tv":[["nowoif","","10"],["nostif","popup"]],"tivysideadvertiser.co.uk":[["set","adLight","true"]],"tlzone.net":[["rmnt","script","html-load.com"]],"today.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"topembed.pw":[["rmnt","script","adserverDomain"]],"tophentaicomics.com":[["acs","pop_init"]],"totalfuckmovies.com":[["aopr","popit"],["aeld","popstate","noPop"]],"tpead.net":[["rmnt","script","/WebAssembly|forceunder/"]],"tracklock.gg":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"travelingformiles.com":[["rmnt","script","await eval"]],"triadmomsonmain.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tribuna.com":[["nostif","(!0)"]],"trueachievements.com":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"truesourdough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trumpexcel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tsubasatr.org":[["noeval-if","/chp_?ad/"]],"tubxporn.com":[["aopr","exoJsPop101"]],"turbli.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tvn24.pl":[["json-prune","playlist.movie.advertising.ad_server"]],"tvonlinesports.com":[["aopr","open"]],"twopeasandtheirpod.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"uciteljica.net":[["noeval-if","/chp_?ad/"]],"uicflames.com":[["set","blockAdBlock","trueFunc"]],"ukmagazinesfree.com":[["acs","JSON.parse","break;case $."]],"umatechnology.org":[["aeld","DOMContentLoaded","-banner"],["rmnt","script","/banner/i"]],"unityassetcollection.com":[["nano-sib","secs"]],"unscramblewords.net":[["rmnt","script","/__adblocker|html-load/"]],"upapk.io":[["nano-stb","tick","1000","0.001"]],"v2movies.click":[["nowoif"]],"valleycentral.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"vantasforum.com":[["rmnt","script","html-load.com"]],"varnascan.xyz":[["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"veloster.org":[["rmnt","script","html-load.com"]],"venuedrivers.com":[["rmnt","script","html-load.com"]],"veteranslawblog.org":[["rmnt","script","/__adblocker|html-load/"]],"vidapi.xyz":[["nowoif","","1"]],"vidara.so":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","WebAssembly","atob"],["nowoif"],["acs","document.createElement","/blocker|detected/"],["rmnt","script","document.getElementsByTagName"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"vipserije.com":[["acs","WebAssembly","atob"]],"vipurl.in":[["set","blurred","false"]],"visionias.net":[["aeld","load","2000"]],"voyagebaltimore.com":[["rmnt","script","/__adblocker|html-load/"]],"voyageraleigh.com":[["rmnt","script","/__adblocker|html-load/"]],"voyeurfrance.net":[["set","is_adblocked","false"],["rmnt","script","/isAdBlocked|popUnderUrl/"],["set-cookie","dscl2","1"]],"walesonline.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"wallflowerkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"wanderingcalifornia.com":[["rmnt","script","/__adblocker|html-load/"]],"wannacomewith.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"washingtonpost.com":[["acs","Promise","overlay"],["acs","document.createElement","overlay"],["rmnt","script","/\\badblock\\b/"]],"wasmarcade.com":[["nowoif","_blank"]],"watchonlyfoolsandhorses.com":[["nowoif"]],"wbkb11.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"webnewsobserver.com":[["rmnt","script","/__adblocker|html-load/"]],"wg-gesucht.de":[["acs","$","detectAdBlocker"]],"wgod.co":[["acs","$","test"]],"whatdowedoallday.com":[["rmnt","script","/__adblocker|html-load/"]],"whathifi.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"whiskingmama.com":[["rmnt","script","/__adblocker|html-load/"]],"whoreshub.com":[["acs","addEventListener","smartpop"]],"wildernessredefined.com":[["rmnt","script","/__adblocker|html-load/"]],"wildfireinteriors.com":[["rmnt","script","/__adblocker|html-load/"]],"winemakingtalk.com":[["rmnt","script","/__adblocker|html-load/"]],"wn.de":[["nostif",".call(null)","10"]],"worddb.com":[["rmnt","script","/__adblocker|html-load/"]],"worksheets-to-print.com":[["rmnt","script","/__adblocker|html-load/"]],"wpgdadatong.com":[["aopr","checkAdblock"]],"wranglerforum.com":[["rmnt","script","html-load.com"]],"wrestlecrap.com":[["rmnt","script","/__adblocker|html-load/"]],"www-y2mate.com":[["rmnt","script",";}}};break;case $."],["nowoif"]],"wysokieobcasy.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"xerifetech.com":[["nostif","0x"],["aost","document.getElementsByTagName","adsBlocked"]],"xexle.com":[["acs","document.querySelectorAll","popMagic"]],"xhbranch5.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhwide5.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xkeezmovies.com":[["acs","document.querySelectorAll","popMagic"]],"xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b":[["aopr","__Y"],["rmnt","script",";}}};break;case $."]],"xnxxporn.video":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"xsanime.com":[["acs","Math","break;case $."],["nosiif","_0x"],["aeld","","_0x"],["aopr","console.clear"]],"xsportshd.com":[["acs","document.querySelectorAll","popMagic"]],"xxvideoss.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","shift"]],"xxxscenes.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"yarnandchai.com":[["rmnt","script","/__adblocker|html-load/"]],"yepi.com":[["acs","$","modal"]],"yeshd.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"yhocdata.com":[["nano-stb","/__ez|window.location.href/","*"]],"youmedemblik.nl":[["noeval-if","/chp_?ad/"]],"zippysharecue.com":[["noeval-if","/chp_?ad/"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
