/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"12minuteathlete.com":[["rmnt","script","/__adblocker|html-load/"]],"18asiantube.com":[["aopr","document.dispatchEvent"]],"18xxx.xyz":[["nostif",".clientHeight"],["nowoif"],["nostif","/createElement|addEventListener|clientHeight/"]],"1milf.com":[["aost","Math.floor","randStr"]],"38.242.194.12":[["no-xhr-if","googlesyndication"]],"3dzip.info":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"3prn.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.dispatchEvent","myEl"]],"4everproxy.com":[["aost","foreverJQ","/document.createElement|stackDepth:2/"]],"4khd.com":[["acs","document.querySelectorAll","popMagic"],["nano-sib","countdown","1000","0.001"]],"50isnotold.com":[["rmnt","script","/__adblocker|html-load/"]],"519.best":[["noeval-if","/chp_?ad/"]],"730sagestreet.com":[["rmnt","script","/__adblocker|html-load/"]],"7bit.link":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"7mmtv.sx":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"9news.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"9now.nine.com.au":[["set","Adkit","noopFunc"]],"aalah.me":[["aopw","adBlockDetected"]],"accuplacerpracticetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"activeweekender.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acusports.com":[["set","blockAdBlock","trueFunc"]],"addtobucketlist.com":[["nostif","google_jobrunner"],["aopr","adsBlocked"]],"adsurfle.com":[["noeval-if","/chp_?ad/"]],"aestheticsmilereconstruction.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"africue.com":[["noeval-if","/chp_?ad/"]],"afrugalchick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ainttooproudtomeg.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airsoftsniperforum.com":[["rmnt","script","html-load.com"]],"ajaxshowtime.com":[["nostif",".call(null)","10"]],"ajt.xooit.org":[["aopr","document.body.style.backgroundPosition"]],"akuma.moe":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"alexbacher.fr":[["noeval-if","/chp_?ad/"]],"allhomerobotics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allporncartoons.com":[["acs","document.querySelectorAll","popMagic"]],"alltechnerd.com":[["nosiif","visibility","1000"],["nostif","nitroAds"]],"almarsguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alsothecrumbsplease.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"androidheadlines.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"animalia.bio":[["rmnt","script","void 0||window,"]],"animeblkom.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["set","blockAdBlock._options.baitClass","null"],["set","CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"]],"animecix.tv":[["set","Object.prototype.showInterstitialAd","false"]],"anonymous-links.com":[["acs","String.fromCharCode","/btoa|break/"]],"apexbikes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"apkcombo.com":[["aeld","DOMContentLoaded","clientHeight"]],"arboristsite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asiangaysex.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"askmormongirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asouthernsoul.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atalantini.online":[["nostif","doubleclick"]],"atastefortravel.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atglinks.com":[["rmnt","script","/aclib|break;|zoneNativeSett/"],["aopr","detectAdBlock"],["set","blurred","false"]],"athomebyheather.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audi-forums.com":[["rmnt","script","html-load.com"]],"autoindustry.ro":[["noeval-if","/chp_?ad/"]],"avanti24.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"aviationa2z.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"avnetwork.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"b-inspiredmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"babepedia.com":[["aopr","loadTool"]],"babesaround.com":[["aopr","AaDetector"]],"babesexy.com":[["aopr","ExoLoader.addZone"],["aeld","getexoloader"]],"backpacksandbubbly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baking-sense.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakinglikeachef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"balbums.st":[["acs","WebAssembly","atob"],["nowoif"]],"bangyourwife.com":[["aopr","document.dispatchEvent"]],"basketballnoise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bbc.com":[["set","dvtag.getTargeting","trueFunc"]],"bbwfest.com":[["acs","document.querySelectorAll","popMagic"]],"bc4x4.com":[["rmnt","script","html-load.com"]],"bellinghamherald.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"bellybelly.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"benzinga.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestchristmasdesserts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestmaturewomen.com":[["aopr","document.dispatchEvent"]],"bestofarea.com":[["noeval-if","/chp_?ad/"]],"bestplants.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestsextoons.com":[["acs","document.querySelectorAll","popMagic"]],"betweenjpandkr.blog":[["rmnt","#text","PR:"]],"bgfg.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bgmiesports.in":[["nostif","bait"]],"bgr.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bibliopanda.com":[["aost","String.prototype.charCodeAt","ai_"]],"bibliotecahermetica.com.br":[["noeval-if","/chp_?ad/"]],"biddytarot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bikergirllife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"black-matures.com":[["acs","document.querySelectorAll","popMagic"]],"blackmaturevideos.com":[["acs","document.querySelectorAll","popMagic"]],"blog.esuteru.com":[["rmnt","script","html-load.com"]],"bloooog.it":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"blowgunforum.com":[["rmnt","script","html-load.com"]],"blowjobpornset.com":[["noeval"],["aopr","Aloader.serve"]],"boobgirlz.com":[["aopr","loadTool"]],"bookanalysis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"booru.eu":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"boxingforum.com":[["rmnt","script","html-load.com"]],"breedingbusiness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brisbanekids.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"broadbottomvillage.co.uk":[["noeval-if","/chp_?ad/"]],"brownsnationforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buchstaben.com":[["rmnt","script","() => eval"],["rmnt","script","html-load.com"]],"buondua.com":[["acs","document.querySelectorAll","popMagic"],["aeld","click","popurl"]],"bustmonkey.com":[["acs","document.querySelectorAll","popMagic"]],"butlersports.com":[["set","blockAdBlock","trueFunc"]],"buydekhke.com":[["aost","String.prototype.charCodeAt","ai_"]],"californiathroughmylens.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camarchive.tv":[["aeld","click","popMagic"],["no-fetch-if","popunder"]],"camhub.cc":[["nostif","innerText","2000"],["set","flashvars.popunder_url",""],["set","openPop","noopFunc"]],"caminteresse.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"canamspyderforums.com":[["rmnt","script","html-load.com"]],"cantonrep.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"canuckaudiomart.com":[["rmnt","script","()=>eval"]],"carriebradshawlied.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cat3movie.org":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"cbrxx.com":[["rmnt","script","html-load.com"]],"cedarhillfarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"celibook.com":[["aopr","decodeURI"]],"cgdirector.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"champsorchumps.us":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chanto.jp.net":[["rmnt","script","html-load.com"]],"chargerforums.com":[["rmnt","script","html-load.com"]],"chasingoursimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cherokeetalk.com":[["rmnt","script","html-load.com"]],"chicagobearshq.com":[["acs","document.getElementById","JSON"]],"chyoa.com":[["aopr","__NA"],["aopw","ExoLoader"]],"cleaneatingwithkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clockskin.us":[["noeval-if","/chp_?ad/"]],"cloudgallery.net":[["aopr","AaDetector"],["aopr","console.clear"]],"clovermeadowsbeef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clubsearay.com":[["rmnt","script","html-load.com"]],"cocktailsandappetizers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"codeshack.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coffeelevels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coingraph.us":[["noeval-if","/chp_?ad/"]],"collegehdsex.com":[["aopr","document.dispatchEvent"]],"cookeryspace.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithkatiecross.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"craftbeering.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazymonkeygames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crypt.cybar.to":[["nowoif","noreferrer"]],"curseforge.com":[["nano-sib"],["rmnt","h2","/creeperhost/i"]],"cw33.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"cyberdrop.me":[["acs","WebAssembly","atob"]],"cyclones.com":[["set","blockAdBlock","trueFunc"]],"cycraracing.com":[["acs","document.createElement","script"]],"d-series.org":[["rmnt","script","html-load.com"]],"dailywritingtips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dearwendy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"defenseone.com":[["set","GEMG.GPT.Interstitial","noopFunc"]],"deltadigital.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"depvailon.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"],["aopr","PvVideoSlider"],["aopw","_chjeuHenj"]],"der-betze-brennt.de":[["nostif",".call(null)","10"]],"derivative-calculator.net":[["aopr","fallbackAds"]],"desifuckonline.com":[["aopr","popit"],["aeld","popstate","noPop"]],"destinationsanddesserts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"detailingworld.co.uk":[["rmnt","script","html-load.com"]],"deutschsex.mobi":[["aost","Math.floor","randStr"]],"devoloperxda.blogspot.com":[["aeld","load","onload"]],"devuploads.com":[["set","document.hidden","false"],["set","document.hasFocus","trueFunc"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>/g","excludes","/^self\\.__next_f\\.push/"]],"dexterclearance.com":[["rmnt","script","adBlock"]],"dfbplay.tv":[["no-fetch-if","googlesyndication"]],"dgcoursereview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diariodeibiza.es":[["set","pr_okvalida","true"],["nostif","sub"]],"diminimalis.com":[["aopw","adBlockDetected"]],"dinnersdishesanddesserts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"discordtemplates.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"disneyfashionista.com":[["aopr","__eiPb"]],"disneyplus.com":[["json-prune","stream.insertion.adSession stream.insertion.points stream.insertion stream.sources.*.insertion pods.0.ads"],["json-prune","ads.metadata ads.document ads.dxc ads.live ads.vod"]],"divicast.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"doujinnote.com":[["aopw","ai_front"]],"doviz.com":[["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"],["rmnt","script","void 0||window,"]],"drkarenslee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drublood.com":[["noeval-if","/chp_?ad/"]],"drumhelper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dryscalpgone.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"e-sushi.fr":[["rmnt","script","window.open"]],"eaglesnovel.com":[["set","pandaAdviewValidate","true"]],"earthly-provisions.com":[["rmnt","script","/__adblocker|html-load/"]],"easylinkref.com":[["nano-sib","","","0"]],"easynotecards.com":[["rmnt","script","/__adblocker|html-load/"]],"eatfigsnotpigs.com":[["rmnt","script","/__adblocker|html-load/"]],"echoes.gr":[["nostif","displayMessage","2000"]],"einrichtungsbeispiele.de":[["aeld","load","AdBlocker"]],"elcorreoweb.es":[["nostif","sub"]],"electricians.forum":[["rmnt","script","/__adblocker|html-load/"]],"elespanol.com":[["set","tieneAdblock","0"]],"elmundoeats.com":[["rmnt","script","/__adblocker|html-load/"]],"embedrise.com":[["nowoif"]],"entertainment-focus.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"eporner.com":[["set-cookie","ADBp","yes"],["set-cookie","ADBpcount","1"],["aopw","EPeventFire"],["nostif","additional_src","300"]],"erinsakura.com":[["nostif","disableDeveloperTools"]],"eurogamer.es":[["aopr","_sp_.mms.startMsg"]],"everythingfishkeeping.com":[["rmnt","script","/__adblocker|html-load/"]],"ewybory.eu":[["noeval-if","/chp_?ad/"],["rmnt","script","/AdClasses|bait/i"]],"exambd.net":[["set-local-storage-item","lastRedirect","true"],["rmnt","script","contextmenu"]],"explorosity.net":[["acs","document.documentElement","break;case $."]],"extratipp.com":[["nostif",".call(null)","10"]],"f75s.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"fairforexbrokers.com":[["aopw","adBlockDetected"]],"fairygardendiy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"familyroadtrip.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fantasyfootballscout.co.uk":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"fapnut.net":[["rmnt","script","adConfig"]],"fc2ppv.stream":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"fembedx.top":[["aost","HTMLElement.prototype.click","_0x"]],"fernsehserien.de":[["aopr","googlefc"]],"ffcars.com":[["rmnt","script","html-load.com"]],"ffjav.com":[["acs","document.querySelectorAll","popMagic"]],"fiberfluxblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"files.cx":[["aopr","AaDetector"]],"filmcolossus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"financestrategists.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"finanztreff.de":[["nostif",".call(null)","10"]],"finderporn.com":[["acs","document.querySelectorAll","popMagic"],["acs","onbeforeunload"]],"findingtimetofly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"findtherun.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fine-wings.com":[["noeval-if","/chp_?ad/"]],"finexxxvideos.com":[["noeval"],["aopr","Aloader.serve"]],"firstquarterfinance.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitdynamos.com":[["aeld","/visibilitychange|blur/"],["aeld","blur","stopCountdown"],["rmnt","script","close-modal"],["noeval-if","ppuQnty"]],"fitnessplanss.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"fitpractise.com":[["noeval-if","/chp_?ad/"]],"flostreams.xyz":[["aopr","Adcash"]],"foodbymaria.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodieaholic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballgamingzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballtransfer.ru":[["nostif","error-report.com"]],"foxestalk.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fptrack.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frearbroslabs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"free-3dtextureshd.com":[["noeval-if","/chp_?ad/"],["rmnt","script","\"reverse\""]],"freecrochettutorials.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freeiphone.fr":[["acs","decodeURIComponent","ai_"],["aost","Math","ai_"]],"freeslp.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freezehost.pro":[["rmnt","script",".offsetHeight"]],"fromabcstoacts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"front-porch-ideas-and-more.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fsileaks.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","click","popMagic"]],"fsl-stream.lu":[["acs","document.documentElement","break;case $."]],"funwithmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"g310rforum.com":[["rmnt","script","html-load.com"]],"gala.de":[["aopr","_sp_._networkListenerData"],["nostif",".call(null)","10"]],"galaxyos.net":[["nostif","show"]],"game.digitap.eu":[["aeld","/ADBLOCK|ADSENSE/"]],"gamedrive.org":[["rmnt","script","'+'","excludes","/^\\(self\\.__next/"]],"gamefishin.com":[["rmnt","script","html-load.com"]],"gameofporn.com":[["aopr","document.dispatchEvent"],["aeld","","exopop"]],"gamerevolution.com":[["aopr","googletag"],["rmnt","script","adblockerDisabled","excludes",",\\\""]],"gamersglobal.de":[["nostif",".call(null)","10"]],"games.dailymail.co.uk":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.gameshownetwork.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamesmain.xyz":[["rmnt","script","/adScriptURL|eval/"],["acs","document.createElement","adsBlocked"],["rmnt","script",".onerror"],["nano-stb","/.?/","*","0.001"],["nano-sib","/.?/","*","0.001"]],"gamezebo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamingsym.in":[["aost","String.prototype.charCodeAt","ai_"]],"gardenersoasis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gaysearch.com":[["nowoif"]],"gecmisi.com.tr":[["nostif","","4000-"]],"gentosha-go.com":[["rmnt","script","error-report.com"]],"gfilex.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"gioialive.it":[["nostif","rbm_block_active","1000"]],"girlnude.link":[["acs","document.querySelectorAll","popMagic"]],"girlwiththeironcast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"giveawayoftheday.com":[["nosiif","_checkBait"]],"glavmatures.com":[["acs","document.querySelectorAll","popMagic"]],"globalnews.ca":[["set","GNCA_Ad_Support","true"]],"gmauthority.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"godandman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gorating.in":[["noeval-if","/chp_?ad/"]],"gothunderbirds.ca":[["set","blockAdBlock","trueFunc"]],"gotporn.com":[["aeld","","open"],["aopr","ExoLoader"],["acs","document.querySelectorAll","popMagic"]],"grannysex.name":[["aopr","document.dispatchEvent"]],"greenhealthycooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gtamaxprofit.com":[["acs","$","wrapfabtest"]],"guessthephrase.xyz":[["no-fetch-if","method:/head/i"]],"gvforums.com":[["rmnt","script","html-load.com"]],"hadakanonude.com":[["noeval-if","/chp_?ad/"]],"hairbuddha.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happierhuman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happilyeverafteretc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happyorganizedlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"harley-davidsonforums.com":[["rmnt","script","html-load.com"]],"hawaii.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hd-tube-porn.com":[["aopr","document.dispatchEvent"]],"hdbraze.com":[["acs","Math.floor","hilltop"]],"healthelia.com":[["nostif","google_jobrunner"]],"healyeatsreal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heatherdisarro.com":[["aopr","Date.prototype.toUTCString"]],"heightcomparison.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heilpraxisnet.de":[["nostif",".call(null)","10"]],"hellopharmacist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"helpdeskgeek.com":[["rmnt","script",";confirm("],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai-moon.com":[["nostif","offsetWidth","2000"],["set","flashvars.popunder_url",""]],"hentai4f.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"hentaicity.com":[["acs","document.querySelectorAll","popMagic"]],"hentaihaven.com":[["acs","document.querySelectorAll","popMagic"]],"hentaisexfilms.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hentaitv.fun":[["rmnt","script","/popMagic|pop1stp/"]],"hes-goals.io":[["rmnt","script","AdBlock"]],"heygrillhey.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"highheelstrample.com":[["acs","document.querySelectorAll","popMagic"]],"hindinest.com":[["noeval-if","/chp_?ad/"]],"hivelr.com":[["aeld","load","detect-modal"]],"hkpro.com":[["rmnt","script","html-load.com"]],"hna.de":[["nostif",".call(null)","10"],["rmnt","script",",window]"]],"holajalapeno.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"holidayscalendar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hollywoodhinditracks2.blogspot.com":[["acs","atob","decodeURIComponent"]],"hollywoodhomestead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeschoolgiveaways.com":[["acs","btoa","BOOTLOADER_LOADED"]],"hondacb1000r.com":[["rmnt","script","html-load.com"]],"honestlyadhd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hoporno.net":[["acs","document.querySelectorAll","popMagic"]],"hotpornfile.org":[["aopw","getIfc"],["aeld","getexoloader"],["nostif","_0x"],["set","adblockcheck","false"],["nowoif","!bergblock","10"]],"housethathankbuilt.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"housewifehowtos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtoisolve.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtotypeanything.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"html.cafe":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"html5.gamedistribution.com":[["no-fetch-if","api"]],"huurshe.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"hyundaicoupeclub.co.uk":[["rmnt","script","html-load.com"]],"hyundaiperformance.com":[["rmnt","script","html-load.com"]],"idownloadblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iggtech.com":[["noeval-if","/chp_?ad/"],["acs","document.readyState","mdpDeblocker"]],"ihow.info":[["nostif","getComputedStyle","250"]],"ilgazzettino.it":[["set","jwDefaults.advertising","{}"]],"immigrantstable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"indiansexstories2.net":[["set","history.pushState","noopFunc"]],"indianyug.com":[["nostif","siteAccessPopup"]],"infinityblogger.in":[["acs","eval","replace"]],"infocycles.com":[["noeval-if","/chp_?ad/"]],"inklink.news":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"instantpoteats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"intest.tv":[["acs","document.addEventListener","google_ad_client"]],"iobit.com":[["aopr","LieDetector"]],"istanbulescortnetworks.com":[["acs","document.createElement","script"]],"italianoxxx.com":[["aopr","document.dispatchEvent"]],"itavisen.no":[["rmnt","script","()=>eval"]],"iteachtoo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itsyummi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iza.ne.jp":[["rmnt","script","html-load.com"]],"japanesemomsex.com":[["noeval"],["aopr","Aloader.serve"]],"japscan.ws":[["acs","Math","break;case $."]],"javpro.cc":[["acs","document.querySelectorAll","popMagic"]],"jellymemos.com":[["rmnt","script","/__adblocker|html-load/"]],"jeniusplay.com":[["nostif","detect"],["nowoif"],["aost","document.createElement","adsBlocked"]],"jewelryshoppingguide.com":[["rmnt","script","/__adblocker|html-load/"]],"jotapov.com":[["acs","jQuery","adblocker"]],"joujoutravels.com":[["rmnt","script","/__adblocker|html-load/"]],"joyn.ch":[["no-fetch-if","zomap.de"]],"joyousplay.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/adserverDomain|\\);break;case /"],["aopr","Adcash"]],"jumpsokuhou.com":[["rmnt","script","html-load.com"]],"justbrightideas.com":[["rmnt","script","/__adblocker|html-load/"]],"jutarnji.hr":[["rmnt","script","adrecover.com"]],"kaboomtube.com":[["aopr","document.dispatchEvent"]],"kejoam.com":[["set","google_unique_id","6"]],"kendralist.com":[["aopr","loadTool"]],"key-hub.eu":[["no-fetch-if","ads"],["nostif","gaData"]],"keynotesupport.com":[["rmnt","script","/__adblocker|html-load/"]],"kfapfakes.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","decodeURI"]],"khabardinbhar.net":[["noeval-if","/chp_?ad/"]],"kimoitv.com":[["acs","parseInt","break;case $."]],"kinemania.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kissmysmoke.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchenfunwithmy3sons.com":[["rmnt","script","/__adblocker|html-load/"]],"knittingwithchopsticks.com":[["rmnt","script","/__adblocker|html-load/"]],"kompas.com":[["acs","setTimeout","iframeTestTimeMS"]],"kpopjjang.com":[["aopr","decodeURIComponent"],["aopr","Base64"]],"kreuzwortraetsel.de":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"kstatewomenshoops.net":[["set","blockAdBlock","trueFunc"]],"kxnet.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"ladepeche.fr":[["aopr","localStorage"]],"leathercraftforum.com":[["rmnt","script","/__adblocker|html-load/"]],"leeapk.com":[["noeval-if","/chp_?ad/"],["acs","document.querySelectorAll","localStorage"],["rmnt","script","/adblock|abd/i"],["aeld","click","window.open"],["aeld","scroll","start"],["nostif","start"]],"legendsofkansas.com":[["rmnt","script","/__adblocker|html-load/"]],"lehighsports.com":[["set","blockAdBlock","trueFunc"]],"letras.mus.br":[["nostif","r()","0"]],"lexusevforum.com":[["rmnt","script","html-load.com"]],"lifeofsailing.com":[["rmnt","script","/__adblocker|html-load/"]],"lilypcrumbs.com":[["rmnt","script","/__adblocker|html-load/"]],"linovelib.com":[["noeval-if","/adb/i"]],"littleredpiano.com":[["rmnt","script","/__adblocker|html-load/"]],"livesnow.me":[["rmnt","script","popundersPerIP"]],"livestreamtv.pk":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"lnk2.cc":[["aeld","","\\"],["nano-stb"],["acs","document.querySelectorAll","popMagic"]],"loanbixby.com":[["nowoif"],["nano-sib","/countdown--|getElementById/","*","0.001"],["nano-stb","getElementById","*","0.001"]],"lotustalk.com":[["rmnt","script","html-load.com"]],"loveourreallife.com":[["rmnt","script","/__adblocker|html-load/"]],"lowcarblove.com":[["rmnt","script","/__adblocker|html-load/"]],"lukesitturn.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"luv2garden.com":[["rmnt","script","/__adblocker|html-load/"]],"machinelearningmastery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"madamnazar.io":[["no-fetch-if","method:HEAD"],["nostif","/offsetHeight|error\"/"]],"madaradex.org":[["rmnt","script","deblocker"]],"magicalguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"majasrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"makeitdough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamacheaps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mandysrecipeboxblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manga18fx.com":[["acs","document.querySelectorAll","popMagic"],["aopr","exoNoExternalUI38djdkjDDJsio96"],["nostif","fetch"]],"mangacanblog.com":[["aeld","load","nextFunction"]],"mangahere.onl":[["aopr","AdservingModule"],["aopr","loadRunative"]],"manhwa18.cc":[["acs","document.querySelectorAll","popMagic"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"manhwahentai.me":[["acs","document.querySelectorAll","popMagic"]],"maniac.de":[["aopr","td_ad_background_click_link"]],"masahub2.com":[["acs","WebAssembly","atob"]],"maturepussies.pro":[["noeval"],["aopr","Aloader.serve"]],"maxjizztube.com":[["acs","document.querySelectorAll","popMagic"]],"mdzsmutpcvykb.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"medievalists.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"megagames.com":[["acs","jQuery","fuckAdBlock"]],"meghanmakesdo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mewingzone.com":[["noeval-if","/chp_?ad/"]],"minecraftraffle.com":[["acs","awm","location"]],"mittelbayerische.de":[["nostif",".call(null)","10"]],"mixandmatchmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mockupgratis.com":[["noeval-if","/chp_?ad/"]],"modernsurvivalonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"modhoster.de":[["nostif",".call(null)","10"]],"monarchbutterflygarden.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motor1.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","html-load.com"]],"motorcycleforum.com":[["rmnt","script","html-load.com"]],"mountaineast.org":[["set","blockAdBlock","trueFunc"]],"movieshubweb.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"musikradar.de":[["nostif",".call(null)","10"]],"musketfire.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"mustang6g.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"muybuenoblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mylifeandkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mylondon.news":[["rmnt","script","nowprocket","excludes","self.__next"]],"mypapercraft.net":[["nofab"]],"naijavault.com":[["rmnt","script",".offsetHeight"]],"nakedbabes.club":[["aopr","loadTool"],["acs","loadTool","popping"],["aopr","ExoLoader.addZone"]],"nar.k-ba.net":[["aeld","load","nextFunction"]],"naturalfertilityandwellness.com":[["rmnt","script","/__adblocker|html-load/"]],"naughtyza.co.za":[["acs","document.querySelectorAll","popMagic"]],"needbux.com":[["acs","eval","replace"]],"nekolink.site":[["aost","document.getElementsByTagName","_createCatchAllDiv"],["aeld","/click|mouse/","[native code]","elements","document"],["set","PlayerConfig.trusted","true"],["set","PlayerConfig.config.AffiliateAdViewLevel","3"]],"newssokuhou666.blog.fc2.com":[["acs","document.addEventListener","google_ad_client"]],"newzjunky.com":[["noeval-if","ads"]],"nicematin.com":[["nostif","document.body.style.overflow"]],"nicesss.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"nicovideo.jp":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"niice-woker.com":[["rmnt","script","adrecover.com"]],"nilopolisonline.com.br":[["nostif","blocker"]],"nofilmschool.com":[["rmnt","script","/__adblocker|html-load/"]],"noizz.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"notenoughcinnamon.com":[["rmnt","script","/__adblocker|html-load/"]],"nourish-and-fete.com":[["rmnt","script","/__adblocker|html-load/"]],"nudistic.com":[["acs","document.querySelectorAll","popMagic"]],"odekake-spots.com":[["noeval-if","/chp_?ad/"]],"odyclub.com":[["rmnt","script","html-load.com"]],"oeffentlicher-dienst.info":[["nostif",".call(null)","10"],["set","testerli","false"]],"officegamespot.com":[["acs","Math.round","zonefile"]],"ohentai.org":[["nowoif"]],"oii.la":[["rmnt","script","{delete window["],["rmnt","script","/adb_detected|AdBlockCheck|;break;case \\$\\./i"],["nowoif"],["no-fetch-if","googlesyndication"],["no-xhr-if","/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","/checkAdblockUser|bypOnSyntheticClick/"],["nostif","checkAdblock"],["nosiif","-0x"],["set","blurred","false"]],"ok.xxx":[["acs","document.querySelectorAll","popMagic"]],"oneingredientchef.com":[["rmnt","script","/__adblocker|html-load/"]],"onmykidsplate.com":[["rmnt","script","/__adblocker|html-load/"]],"onohawaiianrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"oosex.net":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"ootrandomizer.com":[["rmnt","script","/__adblocker|html-load/"]],"optimizepri.me":[["rmnt","script","/__adblocker|html-load/"]],"ourgabledhome.com":[["rmnt","script","/__adblocker|html-load/"]],"outsports.com":[["rmnt","script","adblockerDisabled"]],"oxfordmail.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"pagalworld.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pandanote.info":[["noeval-if","/chp_?ad/"]],"par3nearme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"paracordforum.com":[["rmnt","script","html-load.com"]],"parksavers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"patheos.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"pc-builds.com":[["set","admiral","noopFunc"],["rmnt","script","freestar"]],"pcgameszone.com":[["noeval-if","/chp_?ad/"]],"peiner-nachrichten.de":[["nostif",".call(null)","10"]],"penarthtimes.co.uk":[["set","adLight","true"]],"philrosenthalworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"phodoi.vn":[["aopr","b2a"]],"phototrans.hu":[["rmnt","script","!adsbygoogle.loaded"]],"physicianassistantforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"piazzagallura.org":[["aopw","adBlockDetected"]],"pinchofyum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pittband.com":[["set","blockAdBlock","trueFunc"]],"plainchicken.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"planetf1.com":[["rmnt","script","/_0x|'innerHTML'/"]],"planetminis.com":[["rmnt","script","html-load.com"]],"play.xpass.top":[["acs","document.createElement","document.head||"]],"player.smashystream.com":[["nowoif"],["rmnt","script","/shown_at|WebAssembly/"],["acs","globalThis","shown_at"]],"playstreaming.win":[["nostif","click"]],"plugintorrent.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"polygamia.pl":[["nano-sib","consoleLoaded?clearInterval"]],"pontoonopedia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pornditt.com":[["acs","document.querySelectorAll","popMagic"]],"pornexpanse.com":[["aopr","Aloader.serve"],["noeval"]],"pornoreino.com":[["aopr","ExoLoader"],["aopr","open"],["acs","document.querySelectorAll","popMagic"]],"pornozot.com":[["aopr","ExoLoader"]],"pornrusskoe.com":[["acs","document.querySelectorAll","popMagic"]],"porscheevforum.com":[["rmnt","script","html-load.com"]],"portable4pc.com":[["nosiif","visibility","1000"],["aost","document.getElementById","adsBlocked"]],"postcrescent.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"powerstroke.org":[["rmnt","script","html-load.com"]],"practicallyhomemade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"praywithme.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"primevid.click":[["json-prune","ads playerAds"],["nowoif"]],"progardentips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prowlertalk.net":[["rmnt","script","html-load.com"]],"ps2-bios.com":[["acs","document.getElementById","innerHTML"]],"publicrecords.netronline.com":[["acs","MutationObserver","removedNodes.forEach"]],"punchbowl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"purelykaylie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pussytorrents.org":[["aopr","loadTool"]],"pussytubeebony.com":[["aopr","Aloader.serve"],["noeval"]],"puzzlefry.com":[["aopw","killAdBlock"]],"pvpoke-re.com":[["no-xhr-if","/^https:\\/\\/pagead2\\.googlesyndication\\.com\\/pagead\\/js\\/adsbygoogle\\.js\\?client=ca-pub-3497863494706299$/"],["ra","data-instype","ins.adsbygoogle:has(> div#aswift_0_host)","stay"],["no-fetch-if","url:https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-3497863494706299 method:HEAD mode:no-cors","","","throttle","121"],["aopr","Worker.prototype.postMessage"]],"pynck.com":[["noeval-if","/chp_?ad/"]],"qmh.sex":[["acs","WebAssembly","atob"]],"radio-ao-vivo.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-new-zealand.co.nz":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-suomi.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"ran.de":[["nostif",".call(null)","10"]],"randomcity.net":[["rmnt","script","/__adblocker|html-load/"]],"rawkuro.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"readfireforce.com":[["acs","document.querySelectorAll","popMagic"]],"readmore.de":[["nostif",".call(null)","10"]],"realsimplegood.com":[["rmnt","script","/__adblocker|html-load/"]],"rechtslupe.de":[["nostif",".call(null)","10"]],"record-bee.com":[["set","CnnXt.Event.fire","noopFunc"]],"relationshipculture.com":[["rmnt","script","/__adblocker|html-load/"]],"repaintnow.com":[["rmnt","script","/__adblocker|html-load/"]],"reptilesmagazine.com":[["rmnt","script","html-load.com"]],"resetera.com":[["rmnt","script","/__adblocker|html-load/"]],"richardquestionbuilding.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"riftdecks.com":[["rmnt","script","/__adblocker|html-load/"]],"ritzyporn.com":[["aopr","ExoLoader.serve"]],"rl6mans.com":[["rmnt","script","/adblock/i"],["nostif","_0x"],["nostif","/atob|innerHTML/"]],"rmkshoes.com":[["rmnt","script","/__adblocker|html-load/"]],"roadglide.org":[["rmnt","script","html-load.com"]],"rolltide.com":[["set","blockAdBlock","trueFunc"]],"rshrt.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"rtilinks.com":[["acs","eval","replace"]],"ruinmyweek.com":[["aopr","googletag"]],"runsforcookies.com":[["rmnt","script","/__adblocker|html-load/"]],"ryannordheimer.com":[["rmnt","script","/__adblocker|html-load/"]],"s0ft4pc.com":[["no-fetch-if","doubleclick","length:10","{\"type\":\"cors\"}"],["no-xhr-if","doubleclick","length:10"]],"saltandbaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sarugbymag.co.za":[["aopr","showAds"]],"savethevideo.com":[["nowoif"]],"sawwiz.com":[["noeval-if","/chp_?ad/"]],"scarletandgame.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"scentchasers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"schaken-mods.com":[["nostif","adblock"]],"scribens.fr":[["rmnt","script","html-load.com"]],"scrubson.blogspot.com":[["aopr","adcashMacros"]],"sctoon.net":[["aopr","alert"]],"selfhostt.com":[["no-xhr-if","googlesyndication"]],"selfstudybrain.com":[["no-fetch-if","googlesyndication"]],"seltosforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"seonkyounglongest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexanimesex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"sexemix.com":[["aost","document.createElement","/(?=^(?!.*(https)))/"],["set","flashvars.adv_pre_src",""]],"sexroute.net":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"shakentogetherlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shemalestube.com":[["nowoif"]],"shemaletoonsex.com":[["acs","document.querySelectorAll","popMagic"]],"shieldsgazette.com":[["rmnt","script","await eval"]],"short-url.link":[["aeld","click","read_cookie"],["nano-sib"]],"shortstackkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shoutouthtx.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"silverblog.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"simplyhomeandhealth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"singjupost.com":[["rmnt","script","domain=?eventId=&error="]],"sixhungryfeet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siz.tv":[["set","koddostu_com_adblock_yok","null"]],"skinnykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slapthesign.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"sleazedepot.com":[["acs","document.querySelectorAll","popMagic"]],"smartcentsmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snbc13.com":[["no-xhr-if","googlesyndication"]],"solsticeforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"somethingborrowedpdx.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soreyfitness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sourcingjournal.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"speedyrecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportbet.gr":[["aopr","wpsite_clickable_data"]],"spydertalk.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"ssnewstelegram.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"starbuckssecretmenu.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"starkroboticsfrc.com":[["nostif","documentElement.innerHTML"],["no-fetch-if","doubleclick","","{\"type\": \"opaque\"}"],["set","document.hasFocus","trueFunc"]],"steerplanet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stonegableblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stream.offidocs.com":[["no-fetch-if","/ip-acl-all.php"]],"stream18.net":[["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"],["acs","addEventListener","HTMLAllCollection"]],"streampoi.com":[["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"]],"streetstylis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"strp2p.site":[["json-prune","ads playerAds"]],"suanoticia.online":[["nano-sib"]],"submilf.com":[["aeld","","popMagic"]],"superdutydiesel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superherohype.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"surfacetip.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"svetserialu.io":[["nowoif"]],"swgoh.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swtorista.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tab-maker.com":[["no-fetch-if","googletagmanager","length:10"]],"talentstareducation.com":[["noeval-if","/chp_?ad/"]],"talonsxsforum.com":[["rmnt","script","html-load.com"]],"tapchipi.com":[["nostif","mdp"]],"tbs.co.jp":[["rmnt","script","html-load.com"]],"tcpermaculture.com":[["acs","parseInt","break;case $."]],"teachertube.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"teachpreschool.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tech21century.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techinferno.com":[["nostif","eabpDialog"]],"techpenny.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techsolveprac.com":[["nostif","display","5000"]],"techyinfo.in":[["noeval-if","/chp_?ad/"],["set","count","0"]],"tecnomd.com":[["noeval-if","/chp_?ad/"]],"tecnoscann.com":[["noeval-if","/chp_?ad/"]],"tele5.de":[["nostif",".call(null)","10"]],"telo-forum.com":[["rmnt","script","html-load.com"]],"telugusexkathalu.com":[["acs","document.querySelectorAll","popMagic"]],"ternitoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"testious.com":[["noeval-if","/chp_?ad/"]],"the-mystery.org":[["noeval-if","/chp_?ad/"]],"thebaynet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theclevercarrot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefedoralounge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefirstyearblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefreedommatrix.blogspot.com":[["aeld","load","2000"]],"thegamer.com":[["aeld","error","blocker"],["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"thegoodride.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehoneyhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theinformr.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thekindergartenconnection.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thekitchengirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theleafchronicle.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"theleftrough.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theliveupdate.com":[["noeval-if","/chp_?ad/"]],"thenation.com":[["aopr","___tp"]],"thenerdyfarmwife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenewstribune.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"thenoise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenovicehomestead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theolympian.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"thepalatablelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepolitistick.com":[["rmnt","script","/==undefined.*body/"]],"theprovince.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"theresearchedtraveler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therootedfarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theseasonedwok.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesimplifydaily.com":[["set","loadShield","noopFunc"]],"thewatchseries.live":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"thisisrussia.io":[["nowoif"]],"thisoldbaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thothd.com":[["acs","document.querySelectorAll","popMagic"]],"thothub.lol":[["rmnt","script","wpadmngr.com"]],"tii.la":[["acs","document.documentElement","break;case $."]],"tinboats.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tipranks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["set","TRC","{}"],["set","TRC._taboolaClone","[]"]],"tmz.com":[["rmnt","script","loadAdmiralJs"]],"tnp98.xyz":[["nowoif"],["nostif","window.location.href","300"]],"todays-obits.com":[["noeval-if","/chp_?ad/"]],"toolsweek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"topcartoons.tv":[["acs","document.documentElement","break;case $."]],"toppng.com":[["nostif","nextFunction","250"]],"totally.top":[["noeval-if","/chp_?ad/"]],"touringplans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tpaste.io":[["aopr","adBlockDetected"]],"tradtalk.com":[["rmnt","script","html-load.com"]],"travelawaits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"travelingjules.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"travelmelodies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trickms.com":[["set","count","0"]],"trogiupnhanh.com":[["no-fetch-if","/\\?abg=|adsbygoogle|tpc\\.googlesyndication\\.com|doubleclick\\.net|googleadservices\\.com/"]],"trrs.pro":[["nowoif"]],"truemoneysaver.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trvlcollective.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tryigit.dev":[["rmnt","script","offsetHeight"]],"tubedupe.com":[["aopr","ExoLoader"],["aeld","","midRoll"]],"tulamama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"turbogvideos.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"tvfoodmaps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tvseries.video":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"twistedporn.com":[["nowoif"]],"twoluckyspoons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"twotwentyone.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"u.co.uk":[["no-xhr-if","fwmrm.net"],["no-fetch-if","fwmrm.net"]],"uberhumor.com":[["nowoif"]],"ufcfight.online":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uknip.co.uk":[["set","penci_adlbock.ad_blocker_detector","0"]],"universalis.fr":[["rmnt","script","html-load.com"]],"universegunz.net":[["nostif","adb"]],"updown.fun":[["no-fetch-if","googlesyndication"]],"uploadking.net":[["nano-stb","downloadbtn"]],"uploadraja.com":[["acs","getCookie"]],"uploadvr.com":[["set","poseidonAdBootstrap.freestarReady","true"]],"vaingloryfire.com":[["rmnt","script","/__adblocker|html-load/"]],"vauxhallownersnetwork.co.uk":[["rmnt","script","html-load.com"]],"veganblueberry.com":[["rmnt","script","/__adblocker|html-load/"]],"veganwins.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"vegetablerecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"vibuxer.com":[["rmnt","script","window.open"]],"vicenzatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"vidbam.org":[["acs","navigator","break;case $."]],"videos.remilf.com":[["nowoif"]],"videq.cloud":[["no-fetch-if","googlesyndication"]],"vidguardto.xyz":[["nostif","afterOpen"],["nowoif"]],"vidhyashomecooking.com":[["rmnt","script","/__adblocker|html-load/"]],"vidshar.org":[["acs","navigator","break;case $."]],"vikatan.com":[["nostif","/adblock|isblock/i"]],"vikingsnation.com":[["rmnt","script","/__adblocker|html-load/"]],"virpe.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.write"]],"virtualnights.com":[["nostif",".call(null)","10"]],"vivcrochets.com":[["rmnt","script","/__adblocker|html-load/"]],"vkprime.com":[["nano-sib"]],"voe.sx":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"vozz.vn":[["aost","String.prototype.charCodeAt","ai_"]],"vstorrent.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"w.grapps.me":[["nostif","error-report.com"]],"wakefieldexpress.co.uk":[["rmnt","script","await eval"]],"warframe.today":[["rmnt","script","/__adblocker|html-load/"]],"warringtonguardian.co.uk":[["set","adLight","true"]],"wattedoen.be":[["rmnt","script","html-load.com"]],"wco.tv":[["no-xhr-if","api"]],"wearemoba.com":[["rmnt","script","/__adblocker|html-load/"]],"web--spiele-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"webmatrices.com":[["no-xhr-if","googlesyndication"]],"weekendatthecottage.com":[["rmnt","script","/__adblocker|html-load/"]],"weneverbeenfree.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"wetter.com":[["acs","$","lobster"],["rmnt","script","/wcomAdBlock|error-report\\.com/"]],"whatihavelearnedteaching.com":[["rmnt","script","/__adblocker|html-load/"]],"whentostream.com":[["noeval-if","js_func_decode_base_64"]],"whitekitchenredwine.com":[["rmnt","script","/__adblocker|html-load/"]],"whoisnovel.com":[["acs","document.readyState","adsBlocked"]],"wildernesstoday.com":[["rmnt","script","/__adblocker|html-load/"]],"windowslite.net":[["set","blurred","false"],["set","go_popup","{}"]],"woffordterriers.com":[["set","blockAdBlock","trueFunc"]],"woodshopdiaries.com":[["rmnt","script","/__adblocker|html-load/"]],"wordbrain.info":[["rmnt","script","/__adblocker|html-load/"]],"wordcrushanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"wordnerd.co":[["rmnt","script","/__adblocker|html-load/"]],"wranglerjlforum.com":[["rmnt","script","html-load.com"]],"wunderweib.de":[["nostif",".call(null)","10"]],"x7forum.com":[["rmnt","script","html-load.com"]],"xhamster-sexvideos.com":[["nostif","Adb"]],"xhamsterdeutsch.xyz":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"xhwebsite5.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xspiel.com":[["acs","document.querySelectorAll","popMagic"]],"xvip.lat":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"xxxtor.com":[["acs","document.querySelectorAll","popMagic"]],"xxxvideohd.net":[["aeld","click","popMagic"]],"xxxxvideo.uno":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"y2meta-uk.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif","!yt1d.com"]],"yariscrossclub.com":[["rmnt","script","html-load.com"]],"ymp4.download":[["acs","Math","break;case $."],["nowoif"]],"yourbigsky.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"yourerie.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"ystream.id":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"ytapi.cc":[["no-fetch-if","googlesyndication"],["nostif","location.href"]],"yu2be.com":[["acs","document.documentElement","break;case $."]],"yupitsvegan.com":[["rmnt","script","/__adblocker|html-load/"]],"zecchino-doro.it":[["noeval-if","/chp_?ad/"]],"zeeplayer.pages.dev":[["aopr","antiAdBlockerHandler"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
