/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"100daysofrealfood.com":[["rmnt","script","/__adblocker|html-load/"]],"141jav.com":[["acs","document.createElement","script[data-domain="],["nowoif"],["rmnt","script","InstallTrigger"],["set","univresalP","noopFunc"]],"15minutebeauty.com":[["rmnt","script","/__adblocker|html-load/"]],"1plus1plus1equals1.net":[["rmnt","script","/__adblocker|html-load/"],["aopr","Date.prototype.toUTCString"]],"1shortlink.com":[["set","letShowAds","true"]],"365daysofbakingandmore.com":[["rmnt","script","/__adblocker|html-load/"]],"411mania.com":[["rmnt","script","/__adblocker|html-load/"]],"444.coffee":[["noeval"]],"4fansites.de":[["nostif",".call(null)","10"]],"4filming.com":[["rmnt","script","/__adblocker|html-load/"]],"4fingermusic.com":[["noeval-if","/chp_?ad/"]],"723qrh1p.fun":[["rmnt","script","popunder"]],"9anime.pe":[["acs","document.documentElement","break;case $."]],"9monate.de":[["nostif",".call(null)","10"]],"9thgencivic.com":[["rmnt","script","html-load.com"]],"a-b-c-d-e-f9jeats0w5hf22jbbxcrpnq37qq6nbxjwypsy.fun":[["nowoif"],["acs","Math","localStorage['\\x"]],"a-love-of-rottweilers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aceforums.net":[["rmnt","script","html-load.com"]],"adimesaved.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adultdeepfakes.com":[["set-local-storage-item","adf_plays","2"]],"aeblender.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"aiblog.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"aline-made.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aliontherunblog.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"alkas.lt":[["rmnt","script","html-load.com"]],"allaboutjazz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allsides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"almofed.com":[["noeval-if","/chp_?ad/"]],"altebwsneno.blogspot.com":[["aopw","adBlockDetected"]],"alwayseatdessert.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amazingribs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"american-rails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amycakesbakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amytreasure.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anallievent.com":[["aopr","__eiPb"]],"andiim3.com":[["acs","jQuery","AdBlock"]],"annabelle.ch":[["aopr","_sp_._networkListenerData"]],"antenne.de":[["nostif",".call(null)","10"]],"apl375.me":[["nowoif","_blank"]],"app.simracing.gp":[["nostif",".getComputedStyle"]],"appsmodz.com":[["no-xhr-if","googlesyndication"],["rc","hidden","button"],["ra","disabled","button"]],"arakpop.net":[["acs","btoa","replace"]],"arcai.com":[["set","pubAdsService","trueFunc"]],"armyranger.com":[["aost","String.prototype.charCodeAt","ai_"]],"aroundthenook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianal.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"asianpornjav.com":[["set","puShown","true"]],"atv.com":[["set","loadShield","noopFunc"]],"audiotag.info":[["nostif","/offsetHeight|google|Global/"]],"audiq3forum.com":[["rmnt","script","html-load.com"]],"autismforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"auto-data.net":[["acs","document.getElementById","adblock"]],"babestube.com":[["aopr","decodeURI"]],"babesxworld.com":[["aopr","loadTool"],["aopr","open"],["aopr","document.dispatchEvent"],["acs","document.querySelectorAll","popMagic"]],"bakingamoment.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ballershoesdb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barefeetinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barnsleychronicle.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"base64decode.org":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","()=>eval"],["rmnt","script",").join(String.fromCharCode"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"bbqingwiththenolands.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bbyhaber.com":[["aopw","adBlockDetected"]],"beastlyenergy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beatthebudget.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bedroomproducersblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beermoneyforum.com":[["acs","$","Adblock"]],"bersapistolforum.com":[["rmnt","script","html-load.com"]],"bestasiansex.pro":[["aopr","popit"],["aeld","popstate","noPop"]],"bestgirlsexy.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bestjavporn.com":[["acs","document.querySelectorAll","popMagic"]],"bestpuzzlesandgames.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"betaseries.com":[["nostif","adb"]],"beurettekeh.com":[["aopr","decodeURI"]],"birdwatchingdaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"biteontheside.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blackcrossword.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blessthismeal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blocklayer.com":[["nostif","getComputedStyle"]],"blogx.almontsf.com":[["acs","document.addEventListener","google_ad_client"]],"blowjobfucks.com":[["noeval"],["aopr","Aloader.serve"]],"bluearchive.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bmamag.com":[["rmnt","script","advanced_ads_check_adblocker"]],"boldappetite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boldjourney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bonappeteach.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bosoxinjection.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"brainmass.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brazzersbabes.com":[["acs","document.querySelectorAll","popMagic"]],"breastfeedingplace.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brightgreendoor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bristolworld.com":[["rmnt","script","await eval"]],"bucketlisttummy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"build-basic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bunkr.la":[["acs","document.createElement","click"]],"business-standard.com":[["acs","$","blockThisUrl"],["set","adblock","false"],["no-fetch-if","doubleclick"]],"buxtonadvertiser.co.uk":[["rmnt","script","await eval"]],"c-classforum.com":[["rmnt","script","html-load.com"]],"cadryskitchen.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cagesideseats.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"caliberforumz.com":[["rmnt","script","html-load.com"]],"car.com":[["aopw","_sp_"]],"carolinashootersclub.com":[["rmnt","script","html-load.com"]],"cdn.vifey.de":[["nowoif","_blank"],["rmnt","script","location.href"]],"centralboyssp.com.br":[["acs","document.querySelectorAll","popMagic"]],"centralfifetimes.com":[["set","adLight","true"]],"cesoirtv.com":[["aopw","_sp_"],["rmnt","script","html-load.com"]],"charlotteobserver.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"cheatermad.com":[["acs","globalThis","break;case"],["noeval-if","/chp_?ad/"],["nano-sib","clearInterval"],["nostif","offset"]],"chrforums.uk":[["rmnt","script","html-load.com"]],"ciudadgamer.com":[["acs","atob","encodeURIComponent"]],"classicpornbest.com":[["aopr","decodeURI"],["aeld","popstate"],["aopr","localStorage"]],"classicpornvids.com":[["aopr","document.dispatchEvent"]],"cn-av.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"cnxx.me":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"code.world":[["set","WURFL","{}"]],"codewordsolver.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coffeeatthree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"collectorfreaks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"color-meanings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"confessionsofaserialdiyer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"conselhosetruques.com":[["rmnt","script","await eval"]],"cookieandkate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingclassy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingmaniac.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingontheweekends.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithayeh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithcarlee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithclaudy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cornwalllife.co.uk":[["set","adLight","true"]],"cosplay18.pics":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"cravinghomecooked.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cravingsomethinghealthy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazyforcrust.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crazyporn.xxx":[["acs","document.querySelectorAll","popMagic"]],"creditcardgenerator.com":[["nostif","adsBlocked"]],"cryptednews.space":[["nostif","documentElement.innerHTML"],["no-fetch-if","doubleclick","","{\"type\": \"opaque\"}"],["set","document.hasFocus","trueFunc"]],"cta-fansite.com":[["noeval-if","/chp_?ad/"]],"cx500forum.com":[["rmnt","script","html-load.com"]],"cybercityhelp.in":[["rmnt","script","adsbygoogle"],["aeld","submit","validateForm"],["set","alert","throwFunc"]],"cyberquadforum.com":[["rmnt","script","html-load.com"]],"dailybreeze.com":[["set","CnnXt.Event.fire","noopFunc"]],"dailygrindonline.net":[["aopr","wpsite_clickable_data"]],"dailyworld.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dairygoatinfo.com":[["rmnt","script","html-load.com"]],"damitv.live":[["nowoif","!youtu"]],"dareda.net":[["rmnt","script","html-load.com"]],"darkibox.com":[["acs","document.documentElement","break;case $."]],"datapendidikan.com":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com|googlesyndication|pubadx/","{\"type\": \"cors\"}"],["nowoif","_blank"],["nano-sib","/.?/","*"],["nano-stb","/.?/","*"]],"ddlvalley.me":[["nowebrtc"]],"deerhuntersclub.com":[["rmnt","script","html-load.com"]],"delishknowledge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"derbytelegraph.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"derstandard.de":[["remove-cookie","zonck"],["set-local-storage-item","zonck","$remove$"],["nostif","event","3000"]],"desihoes.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"],["aopr","decodeURI"]],"desitelugusex.com":[["set","D4zz","noopFunc"]],"dessertsonadime.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dessertswithbenefits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dfiles.eu":[["aopw","Fingerprint2"]],"dianaavoidthey.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"digipuzzle.net":[["no-xhr-if","googlesyndication"]],"digitalfernsehen.de":[["nostif",".call(null)","10"]],"dimsimlim.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"disneydreamer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"divinedaolibrary.com":[["rmnt","script","html-load.com"],["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"]],"dlouha-videa.cz":[["acs","document.querySelectorAll","popMagic"]],"dodi-repacks.site":[["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"dolphinnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dominicancooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"downloadfreecourse.com":[["aost","fetch","inlineScript"]],"dragontranslation.net":[["acs","document.querySelectorAll","popMagic"]],"dramabeans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dramathical.stream":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"drizzleanddip.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dropzy.io":[["nowoif"]],"drumspy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dubaitime.net":[["noeval-if","/chp_?ad/"]],"duplex-full.lol":[["nowoif"]],"duplichecker.com":[["nostif","showPopup"]],"dzienniklodzki.pl":[["aeld","","show"]],"eastlondonadvertiser.co.uk":[["set","adLight","true"]],"easydessertrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"easygoodideas.com":[["rmnt","script","/__adblocker|html-load/"]],"ebaticalfel.com":[["nowoif"]],"eddiekidiw.com":[["acs","$","_ads"]],"eggsallways.com":[["rmnt","script","/__adblocker|html-load/"]],"egyup.live":[["aeld","","break;case $."]],"elahmad.com":[["nostif","/debugger|offsetParent/"],["no-fetch-if","/ads|imasdk/"]],"electricmotorcyclesforum.com":[["rmnt","script","html-load.com"]],"electsex.com":[["noeval"],["aopr","Aloader.serve"]],"elnuevoherald.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"elperiodicoextremadura.com":[["nostif","sub"]],"embedsports.me":[["rmnt","script","adserverDomain"],["rmnt","script","/break;case|FingerprintJS/"],["aeld","message"]],"episodehive.com":[["rmnt","script","/__adblocker|html-load/"]],"eplsite.uk":[["aopr","AaDetector"],["aopr","open"]],"epson.com.cn":[["set","_gsq","{}"],["set","_gsq.push","noopFunc"],["set","_gsDevice",""]],"eregulations.com":[["rmnt","script","/__adblocker|html-load/"]],"erinspain.com":[["rmnt","script","/__adblocker|html-load/"]],"eslauthority.com":[["aopr","__eiPb"]],"ethanchlebowski.com":[["rmnt","script","/__adblocker|html-load/"]],"everand.com":[["no-fetch-if","/api/v1/events"],["set","Scribd.Blob.AdBlockerModal","noopFunc"]],"everydayeileen.com":[["rmnt","script","/__adblocker|html-load/"]],"evotuners.net":[["rmnt","script","html-load.com"]],"extraordinarychaos.com":[["rmnt","script","/__adblocker|html-load/"]],"f1livegp.net":[["nowebrtc"]],"faitsfizzle.fr":[["rmnt","script","await eval"]],"familyporner.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","Exo"],["aeld","getexoloader"]],"fantasyfootballranker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fap.bar":[["set-cookie","popunder","1"]],"fastream.to":[["aopr","LieDetector"],["aopr","afScript"]],"fatgirlskinny.net":[["aeld","load","isBlanketFound"]],"faucetcrypto.net":[["acs","eval","decodeURIComponent"],["set","blurred","false"],["no-xhr-if","czilladx"]],"feedgrump.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feyorra.top":[["noeval-if","/chp_?ad/"],["aeld","load","block"]],"fifetoday.co.uk":[["rmnt","script","await eval"]],"fileone.tv":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["acs","globalThis","break;case"]],"filessrc.com":[["nano-sib","counter"]],"filmpornofrancais.fr":[["aeld","getexoloader"]],"financialpost.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"finevids.xxx":[["acs","document.querySelectorAll","popMagic"]],"first-names-meanings.com":[["rmnt","script","/==undefined.*body/"]],"fishtankreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitandwell.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"fitrays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flavormosaic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flippedupsidedown.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"floorcritics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fm-arena.com":[["nostif","getComputedStyle","2000"]],"fm.sekkaku.net":[["rmnt","#text","【広告】"]],"foodbible.com":[["rmnt","script","\"nowprocket\""]],"football365.fr":[["nostif",".call(null)","10"]],"fordfusionclub.com":[["rmnt","script","html-load.com"]],"forplayx.ink":[["no-fetch-if","googlesyndication"]],"forum.lolesporte.com":[["aopr","onload"]],"fox21news.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"fox44news.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"fpsindex.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"franceadventurer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"free-gay-clips.com":[["acs","document.querySelectorAll","popMagic"]],"freedomfirstnetwork.com":[["rmnt","script","/==undefined.*body/"]],"freeindianporn2.com":[["aopr","exoJsPop101"]],"freejav.guru":[["nostif","disableDeveloperTools"],["acs","eval","replace"]],"frugalforless.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funcraftskids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fx-22.com":[["noeval-if","/chp_?ad/"]],"g9r6.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"gamepro.de":[["nostif",".call(null)","10"]],"games-manuals.com":[["noeval-if","/chp_?ad/"]],"games.bellinghamherald.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.wtop.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gaminglariat.com":[["noeval-if","/chp_?ad/"]],"garnishwithlemon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gatcha.org":[["nostif","css_class.show"]],"gatherednutrition.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gaypornlove.net":[["acs","document.querySelectorAll","popMagic"]],"gcaptain.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"geeksofcolor.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"genealogyexplained.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gentletummy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"getarazor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"getmega.net":[["acs","JSON.parse","break;case $."],["aopr","adBlockDetected"]],"giff.cloud":[["nostif","getComputedStyle"]],"gislounge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"givemeaporn.com":[["aeld","","popMagic"]],"gkbooks.in":[["noeval-if","/chp_?ad/"]],"glasgowtimes.co.uk":[["set","adLight","true"]],"gloswielkopolski.pl":[["aeld","","show"]],"gmt800.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"go.bucketforms.com":[["acs","$","adblocker"]],"gojacks.com":[["set","blockAdBlock","trueFunc"]],"goo.st":[["set","adblockstatus","false"]],"gopitbull.com":[["rmnt","script","html-load.com"]],"gps--cache-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"grannysinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grosgrainfab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guidetechly.com":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"gutekueche.at":[["set","gkAdsWerbung","true"]],"hackneygazette.co.uk":[["set","adLight","true"]],"hackr.io":[["no-fetch-if","googlesyndication"]],"hailfloridahail.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"handirect.fr":[["rmnt","script","kmtAdsData"]],"happyheartyhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hartziv.org":[["nostif",".call(null)","10"]],"haytalk.com":[["rmnt","script","html-load.com"]],"hdhub4u.fail":[["aeld","DOMContentLoaded","script[data-domain="]],"healbot.dpm15.net":[["aopw","adBlockDetected"]],"healthbeet.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai-one.com":[["nostif","/[a-z]\\(!0\\)/","800"]],"hentaibros.com":[["acs","document.querySelectorAll","popMagic"]],"heresyourdinner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heutewelt.com":[["noeval-if","/chp_?ad/"]],"homesteadingtoday.com":[["rmnt","script","html-load.com"]],"homestoriesatoz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hondapioneerforum.com":[["rmnt","script","html-load.com"]],"hornetowners.com":[["rmnt","script","html-load.com"]],"hotasianpussysex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hotgirl.biz":[["acs","document.querySelectorAll","popMagic"]],"hothardware.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotmarathistories.com":[["acs","document.querySelectorAll","popMagic"]],"houseofroseblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houstonherald.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howdy.id":[["no-fetch-if","/adsbygoogle|doubleclick/"]],"howtomurderpests.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hoyme.jp":[["nostif","error-report.com"],["rmnt","script","error-report.com"]],"hrvforum.com":[["rmnt","script","html-load.com"]],"hucknalldispatch.co.uk":[["rmnt","script","await eval"]],"ib-game.jp":[["rmnt","script","html-load.com"]],"ichberlin.com":[["aost","String.prototype.charCodeAt","ai_"]],"idevicecentral.com":[["nostif","()=>"]],"idmextension.xyz":[["set","count","0"]],"idntheme.com":[["aopw","hidekeep"]],"iheartumami.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ikarishintou.com":[["rmnt","script","html-load.com"]],"illink.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","click","popMagic"],["acs","JSON.parse","break;case $."]],"impreza6.com":[["rmnt","script","html-load.com"]],"inbbotlist.com":[["no-fetch-if","googlesyndication"]],"indeed.com":[["set","DD_RUM.addAction","noopFunc"]],"india.mplandrecord.info":[["noeval-if","/chp_?ad/"]],"indiepanda.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"interracial.com":[["nowoif"]],"iptvdroid1.blogspot.com":[["acs","Math","zfgloaded"]],"iptvjournal.com":[["no-fetch-if","googlesyndication"]],"isosite.org":[["aeld","","break;case $."],["aopr","open"]],"itsecuritynews.info":[["aopr","b2a"]],"iwatchfriendsonline.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","liedetector"]],"jacksonsun.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"jagoanssh.com":[["nosiif","visibility","1000"]],"japanesetube.video":[["aopr","popit"],["aeld","popstate","noPop"]],"japangaysex.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"]],"jav.si":[["acs","WebAssembly","atob"]],"javatpoint.com":[["rmnt","script","html-load.com"]],"javball.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"],["no-fetch-if","adsbygoogle"],["aopr","popns"]],"javcock.com":[["acs","document.querySelectorAll","popMagic"],["noeval-if","/chp_?ad/"],["aopr","popns"]],"javfun.me":[["acs","document.querySelectorAll","popMagic"]],"javseen.tv":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["aopr","jsPopunder"]],"jeepcherokeeclub.com":[["rmnt","script","html-load.com"]],"jeepcommander.com":[["rmnt","script","html-load.com"]],"jeeppatriot.com":[["rmnt","script","html-load.com"]],"jenwoodhouse.com":[["rmnt","script","/__adblocker|html-load/"]],"jessicagavin.com":[["rmnt","script","/__adblocker|html-load/"]],"jk-market.com":[["noeval-if","/chp_?ad/"]],"jlaforums.com":[["no-xhr-if","googlesyndication","length:1000-1010"]],"jornadaperfecta.com":[["rmnt","script","ad-block-activated"]],"jotea.cl":[["acs","document.querySelectorAll","popMagic"]],"jpg.fishing":[["acs","document.querySelectorAll","popMagic"]],"judgehype.com":[["rmnt","script","html-load.com"]],"jugomobile.com":[["aeld","DOMContentLoaded","adsBlocked"]],"junkyardmob.com":[["rmnt","script","/__adblocker|html-load/"]],"k5owners.com":[["rmnt","script","html-load.com"]],"karacarrero.com":[["rmnt","script","/__adblocker|html-load/"]],"kathleenscravings.com":[["rmnt","script","/__adblocker|html-load/"]],"kathrynskitchenblog.com":[["rmnt","script","/__adblocker|html-load/"]],"katiescucina.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"],["rmnt","script","/__adblocker|html-load/"]],"kayakhelp.com":[["rmnt","script","/__adblocker|html-load/"]],"keepingitrelle.com":[["rmnt","script","/__adblocker|html-load/"]],"keepinspiring.me":[["rmnt","script","/__adblocker|html-load/"]],"kh-pokemon-mc.com":[["noeval-if","/chp_?ad/"]],"kiastonicforum.org":[["rmnt","script","html-load.com"]],"kijomatomelog.com":[["rmnt","script","html-load.com"]],"kijyokatu.com":[["rmnt","script","html-load.com"]],"kimcilonlyofc.com":[["rmnt","script","mdpDeblocker"],["nowoif"]],"kingdomfiles.com":[["acs","parseInt","break;case $."]],"kitchentableclassroom.com":[["rmnt","script","/__adblocker|html-load/"]],"klmanga.cloud":[["no-fetch-if","/\\?abg=|adsbygoogle|tpc\\.googlesyndication\\.com|doubleclick\\.net|googleadservices\\.com/"]],"knickoftime.net":[["rmnt","script","/__adblocker|html-load/"]],"kobe-journal.com":[["rmnt","script","html-load.com"]],"koreanbj.club":[["aopr","BetterJsPop"]],"ktla.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kungfutv.net":[["aeld","DOMContentLoaded","window.open"]],"l2db.info":[["nowoif"]],"labstory.in":[["noeval-if","/chp_?ad/"]],"larazon.es":[["set","gfkS2sExtension","{}"],["set","gfkS2sExtension.HTML5VODExtension","noopFunc"]],"lateralmovements.com":[["rmnt","script","/__adblocker|html-load/"]],"latinlucha.es":[["noeval-if","/chp_?ad/"]],"latinluchas.com":[["no-xhr-if","googlesyndication"]],"laurasia.info":[["acs","document.addEventListener","google_ad_client"]],"lavanguardia.com":[["aeld","error"],["no-xhr-if","notifier"]],"lawandcrime.com":[["rmnt","script","/__adblocker|html-load/"]],"leak.sx":[["nostif","onDetected"],["rmnt","script","navigator.brave"]],"leechall.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"legionscans.com":[["noeval-if","/chp_?ad/"]],"letsporn.com":[["rmnt","script","/popns|\\)\\.substr/"]],"levelsanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"lexusrcowners.com":[["rmnt","script","html-load.com"]],"lifehacker.com":[["set","ga","noopFunc"]],"lifestyle.bg":[["no-fetch-if","method:GET"],["nostif","google"],["aeld","DOMContentLoaded","location.replace"],["no-fetch-if","method:HEAD"]],"liftvault.com":[["rmnt","script","/__adblocker|html-load/"]],"link.tl":[["aopr","_0xbeb9"],["nano-sib","","1800"]],"linkpoi.me":[["acs","Math","replace"],["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["no-fetch-if","manager"]],"littlespicejar.com":[["rmnt","script","/__adblocker|html-load/"]],"littlesweetbaker.com":[["rmnt","script","/__adblocker|html-load/"]],"liveru.sx":[["aopr","decodeURI"]],"livetv.moviebite.cc":[["nostif","getComputedStyle"],["nosiif","getComputedStyle"]],"lohud.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"lopers.com":[["set","blockAdBlock","trueFunc"]],"mail.yahoo.com":[["set","AppBootstrapData.config.adshieldAdblockRecovery","false"],["set","AppBootstrapData.config.adshieldAdblockRecovery","false","runAt","interactive"],["set","AppBootstrapData.config.adshieldNativeAdRecovery","false"],["set","AppBootstrapData.config.adshieldNativeAdRecovery","false","runAt","interactive"],["set","AppBootstrapData.__initializeFeatures__.adshieldAdblockRecovery.enabled","false"],["set","AppBootstrapData.__initializeFeatures__.adshieldAdblockRecovery.enabled","false","runAt","interactive"],["set","AppState.reduxState.features.adshieldAdblockRecovery","false"],["set","AppState.reduxState.features.adshieldAdblockRecovery","false","runAt","interactive"],["json-prune","result.responses.[].response.result.cards.[-].data.offers"],["nostif","ADB"],["nostif","adblock"]],"mainlinks.xyz":[["nowoif"]],"makingthymeforhealth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maliekrani.com":[["nostif","displayMessage","2000"]],"manga-tube.me":[["nostif",".call(null)","10"]],"mashtips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["nostif","ai_adb"]],"matomelotte.com":[["rmnt","script","html-load.com"]],"mavericklightning.org":[["rmnt","script","html-load.com"]],"mboost.me":[["nano-stb","setinteracted","2000"],["ra","href",".MediaStep","stay"]],"mcafee-com.com":[["acs","document.createElement","adsBlocked"],["set","document.hasFocus","trueFunc"],["set","count","0"]],"megapastes.com":[["aeld","DOMContentLoaded","adlinkfly"]],"megaupto.com":[["acs","document.documentElement","break;case $."],["nano-stb","seconds"]],"merriam-webster.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"metabomb.net":[["aopr","_sp_._networkListenerData"]],"meteocity.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"mgnet.xyz":[["acs","addEventListener","-0x"],["acs","document.addEventListener","container.innerHTML"],["nostif","top-right","2000"],["set","hiddenProxyDetected","false"],["nano-stb","_0x","15000"]],"michiganreefers.com":[["rmnt","script","html-load.com"]],"midweekherald.co.uk":[["set","adLight","true"]],"mikebakesnyc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"milanreports.com":[["noeval-if","ads"]],"milliyet.com.tr":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"mini2.com":[["rmnt","script","html-load.com"]],"missdecarbo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mjsbigblog.com":[["aopr","__eiPb"],["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"]],"moalm-qudwa.blogspot.com":[["aopr","zfgformats"]],"mobileweb.bankmellat.ir":[["set","navigator.standalone","true"]],"momdoesreviews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momlifemadeeasy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"morrisvillemustangs.com":[["set","blockAdBlock","trueFunc"]],"motorcitybengals.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"mountain-forecast.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"moviedekho.in":[["acs","parseInt","break;case $."]],"movies123.pk":[["acs","EventTarget.prototype.addEventListener","delete window"]],"moviestowatch.tv":[["acs","document.documentElement","break;case $."]],"mpgbuddy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mrgay.com":[["aopr","mz"],["nowoif"]],"musicalmum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"musicaltheatreresources.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"musicfeeds.com.au":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"mx5nutz.com":[["rmnt","script","html-load.com"]],"myarklamiss.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"mygluten-freekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myhighplains.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"myonvideo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"myporntape.com":[["aopr","loadTool"]],"mysavings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myunity.dev":[["noeval-if","/chp_?ad/"]],"naszahistoria.pl":[["rmnt","script","admiral","excludes",",\\\""]],"nemumemo.com":[["aopr","b2a"]],"nesiaku.my.id":[["nostif","show"],["aeld","","show"]],"nestingwithgrace.com":[["rmnt","script","/__adblocker|html-load/"]],"newanimeporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"newcelica.org":[["rmnt","script","html-load.com"]],"newf150forum.com":[["rmnt","script","html-load.com"]],"news.de":[["nostif",".call(null)","10"]],"newyorkupstate.com":[["aopr","_sp_._networkListenerData"]],"nhltraderumor.com":[["rmnt","script","/__adblocker|html-load/"]],"nichetechy.com":[["noeval-if","/chp_?ad/"]],"nihonkuni.com":[["set-cookie","unlock_chapter_guest","1"],["nowoif"]],"noreast.com":[["rmnt","script","html-load.com"]],"noticiaspais.com":[["rmnt","script","/__adblocker|html-load/"]],"nsfwalbum.com":[["acs","document.querySelectorAll","popMagic"]],"nudeslegion.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["noeval-if","/chp_?ad/"]],"nyaa.land":[["nowoif"]],"nysainfo.pl":[["aopr","mdpDeBlocker"]],"oceanusadventure.com":[["rmnt","script","/__adblocker|html-load/"]],"oko.sh":[["aeld","","break;case $."]],"oldcamera.pl":[["noeval-if","js_func_decode_base_64"]],"omegaforums.net":[["rmnt","script","/__adblocker|html-load/"]],"onehack.us":[["noeval-if","/chp_?ad/"],["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"],["nostif","modal"]],"onepiecemangafree.com":[["acs","document.querySelectorAll","popMagic"]],"onlinegdb.com":[["nostif","error-report.com"]],"onlyfans.to":[["rmnt","script","monetag"],["no-xhr-if","/admaven|adspyglass/"],["aost","document.createElement","openNewTab"],["nowoif","_blank"]],"open3dmodel.com":[["aopr","mdp_deblocker"]],"openspeedtest.com":[["nostif","google_jobrunner"]],"opisanie-kartin.com":[["aopr","LieDetector"]],"opjav.com":[["nowoif"]],"optionsprofitcalculator.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"],["rmnt","script","html-load.com"],["rmnt","script","/\\(async\\(\\)=>\\{try\\{(const|var)/"]],"organizedisland.com":[["rmnt","script","/__adblocker|html-load/"]],"ourenseando.es":[["nostif","displayMessage","2000"]],"pal-item.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"panameraforum.com":[["rmnt","script","html-load.com"]],"parentportfolio.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"passportandplates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pemersatu.link":[["acs","WebAssembly","atob"]],"penis-bilder.com":[["aopr","popunder"]],"penisbuyutucum.net":[["set","open","undefined"]],"periodicadventures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"petbook.de":[["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"petrinadarrah.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pherotruth.com":[["acs","setTimeout","void 0"]],"phoenixnewtimes.com":[["set","VMG.Components.Adblock","false"],["rmnt","script","/==undefined.*body/"]],"pic-upload.de":[["aopw","Fingerprint2"]],"piesandtacos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pisatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"pitbossforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plan.livefpl.net":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"planneratheart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playarcady.com":[["rmnt","script","window.open"]],"player.popfun.co.uk":[["json-prune","response.ads"]],"playswellwithbutter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pluggedingolf.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pokopow.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"],["rmnt","script","var Data"]],"porngo.com":[["aopr","AaDetector"],["nowoif"]],"porninblack.com":[["acs","document.querySelectorAll","popMagic"],["noeval-if","/chp_?ad/"]],"pornomanoir.com":[["acs","document.querySelectorAll","popMagic"]],"pornstargold.com":[["acs","document.querySelectorAll","popMagic"]],"positivelysplendid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"potomaclocal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"praveeneditz.com":[["noeval-if","/chp_?ad/"]],"prensa.click":[["noeval-if","/chp_?ad/"]],"preppykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primandprep.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"projeihale.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"prothots.com":[["acs","document.querySelectorAll","popMagic"]],"proverbmeaning.com":[["acs","document.querySelector","adblock"]],"psicotestuned.info":[["noeval-if","/chp_?ad/"]],"puppyleaks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pussymaturephoto.com":[["acs","document.querySelectorAll","popMagic"]],"puzzles.bestforpuzzles.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"q1003.com":[["nostif","google_ad"]],"qlinks.eu":[["set","blurred","false"]],"r18.best":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"radio-danmark.dk":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-espana.es":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.de":[["nostif",".call(null)","10"]],"radio.se":[["nostif",".call(null)","10"]],"randomgenerators.com":[["rmnt","script","/__adblocker|html-load/"]],"ratforum.com":[["rmnt","script","html-load.com"]],"raw1001.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"readingpage.fun":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"receitasdaora.online":[["rmnt","script","/hasAdblock|detect/"]],"redcottagechronicles.com":[["rmnt","script","/__adblocker|html-load/"]],"references.be":[["rmnt","script","html-load.com"]],"rennrad-news.de":[["nostif",".call(null)","10"]],"respublika.lt":[["rmnt","script","html-load.com"]],"restlesschipotle.com":[["rmnt","script","/__adblocker|html-load/"]],"retroporn.world":[["aopr","popit"],["aeld","popstate","noPop"]],"reviewjournal.com":[["set","CnnXt.Event.fire","noopFunc"]],"ridgeforum.com":[["rmnt","script","html-load.com"]],"ripcityproject.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"ripleyfieldworktracker.com":[["acs","jQuery","ad-block"]],"robloxforum.com":[["rmnt","script","html-load.com"]],"rotoballer.com":[["rmnt","script","/__adblocker|html-load/"]],"rphost.in":[["nano-sib","timer","*","0.001"],["nowoif"]],"rtv.de":[["nostif",".call(null)","10"]],"rumahit.id":[["acs","eval","ignielAdBlock"]],"runningshoesguru.com":[["rmnt","script","/__adblocker|html-load/"]],"rust-servers.net":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"salvagedinspirations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sarahsfitfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sarahsvegankitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savoryexperiments.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savorylotus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scansatlanticos.com":[["noeval-if","/chp_?ad/"]],"schoolgirls-asia.org":[["aopr","loadTool"]],"scramblerforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"scripai.com":[["nostif","/adblock/i"]],"seasonedandsalted.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"selfdecode.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sensibledigs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"serially.it":[["json-prune","ads"]],"sexdicted.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"]],"sextingforum.net":[["aopw","stagedPopUnder"]],"sextubeset.com":[["acs","document.querySelectorAll","popMagic"]],"shadagetech.com":[["noeval-if","/chp_?ad/"]],"shaneandsimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharepointdiary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shipsnostalgia.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"shortgirltallorder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"showbizbites.com":[["acs","parseInt","break;case $."]],"sideplusleaks.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"simple.money":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simpledownload.net":[["aopr","String.fromCharCode"]],"sixx.de":[["nostif",".call(null)","10"]],"slate.com":[["aeld","","/adbl/i"],["nostif","/adbl/i"],["aeld","error","","elements","[src]"]],"slickdeals.net":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"slingshotforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"slowcookingperfected.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartfundiy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smashyplayer.top":[["aeld","click","document.createElement"]],"snowmobileforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"southcarolinavoyager.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spicysouthernkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sport-fm.gr":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"sportsfoundation.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sporttrac.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"srtforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stalkface.com":[["acs","Math","break;case $."]],"starzunion.com":[["aopw","checkAdsStatus"]],"stephreallife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stern.de":[["aopr","_sp_._networkListenerData"],["set","foundation.adPlayer.bitmovin","{}"],["nostif",".call(null)","10"]],"stillrealtous.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stock-rom.com":[["noeval-if","/chp_?ad/"]],"strefaagro.pl":[["aeld","","show"],["rmnt","script","admiral","excludes",",\\\""]],"stripehype.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"sunherald.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"sunshineandhurricanes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"survivingateacherssalary.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetlysplendid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swordalada.org":[["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"tandess.com":[["nostif","detectAdblock"]],"tastythin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tcpalm.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"teaandinksociety.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teaspoonofgoodness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techforu.in":[["noeval-if","/chp_?ad/"]],"technewslive.org":[["noeval-if","/chp_?ad/"]],"teensexass.com":[["aopr","popit"],["aeld","popstate","noPop"]],"tekken8combo.kagewebsite.com":[["no-fetch-if","googlesyndication"]],"telegraaf.nl":[["no-fetch-if","/doubleclick|ad-delivery|googlesyndication/"]],"telegram.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"tennis365.com":[["rmnt","script","/_0x|'innerHTML'/"]],"terabox.fun":[["json-prune","web_share_ads_adsterra_config wap_short_link_middle_page_ad wap_short_link_middle_page_show_time data.ads_cpm_info"],["nano-stb","value","*"],["nano-sib","clearInterval","*"]],"teracourses.com":[["nostif","adBlockerModal"]],"the-review.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thecafesucrefarine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecakeboutiquect.com":[["acs","b2a","ai_adb"]],"thecarmomofficial.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecatsite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecentsofmoney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecheekychickpea.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecookierookie.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedomesticrebel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theendlessmeal.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefastlaneforum.com":[["nostif",".show","1000"]],"thefitnesstribe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegirlonbloor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegleaner.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thegraciouspantry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehawaiivacationguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehomeschoolscientist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theintentionalmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theinternettaughtme.com":[["noeval-if","/chp_?ad/"]],"thematbakh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenaturalnurturer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenerdstash.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["acs","String.prototype.match","__adblocker","/^data:/"]],"theottoolbox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theplantbasedschool.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theporngod.com":[["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_pre_vast_alt",""],["rmnt","script","popMagic"]],"thermoprzepisy.pl":[["noeval-if","/chp_?ad/"]],"thesimpleparent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetowntalk.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thetrendverse.in":[["noeval-if","/chp_?ad/"],["set","count","0"]],"thinkingcloset.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisisraleigh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisitaliankitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thothub.today":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thotsbay.tv":[["acs","document.querySelectorAll","popMagic"]],"tik-tok.porn":[["aeld","click","clkUnder"],["set","adsArr","{}"]],"times-standard.com":[["set","CnnXt.Event.fire","noopFunc"]],"toramemoblog.com":[["aopr","b2a"],["noeval-if","ads"],["acs","document.addEventListener","google_ad_client"]],"torontosun.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","await eval"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"traductionjeux.com":[["acs","document.getElementById","adblock"]],"trancehost.com":[["aost","document.getElementById","adsBlocked"]],"trannyxxxtube.net":[["acs","document.querySelectorAll","popMagic"]],"trendflatt.com":[["noeval-if","/chp_?ad/"]],"tri-cityherald.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"triumphbobberforum.com":[["rmnt","script","html-load.com"]],"truthlion.com":[["rmnt","script","/==undefined.*body/"]],"tuba.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"tubexo.tv":[["acs","document.querySelectorAll","popMagic"]],"tucsonfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tutoganga.blogspot.com":[["acs","addEventListener","google_ad_client"]],"udebut.jp":[["noeval-if","/chp_?ad/"]],"umamusume.gg":[["rmnt","script","/__adblocker|html-load/"]],"unblocked.name":[["aopr","GetWindowHeight"],["aopr","decodeURIComponent"],["acs","adcashMacros"],["aost","Math.random",""]],"unblockedgames.world":[["nano-sib","/count|verify|isCompleted/","","0.001"]],"unipanthers.com":[["set","blockAdBlock","trueFunc"]],"unsurcoenlasombra.com":[["aopr","google_jobrunner"]],"uyduportal.net":[["acs","document.addEventListener","nextFunction"]],"vcloud.lol":[["acs","EventTarget.prototype.addEventListener","delete window"]],"veggiegardener.com":[["rmnt","script","html-load.com"]],"veggiesociety.com":[["rmnt","script","/__adblocker|html-load/"]],"vegrecipesofindia.com":[["rmnt","script","/__adblocker|html-load/"]],"venus-and-mars.com":[["noeval-if","/chp_?ad/"]],"verpeliculasporno.gratis":[["acs","document.querySelectorAll","popMagic"]],"veryveganish.com":[["rmnt","script","/__adblocker|html-load/"]],"vg247.com":[["aopw","yafaIt"],["aopr","_sp_.mms.startMsg"]],"videocdnal24.xyz":[["nowoif"]],"vidnest.live":[["rmnt","script","{delete window["],["nostif","location.replace","100"],["acs","EventTarget.prototype.addEventListener","open"],["nostif","bait.remove"],["json-prune","*","rot_url"],["json-prune","*","pop_type"]],"vidora.stream":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"vidquickly.com":[["nano-sib","clearInterval"]],"villanova.com":[["set","blockAdBlock","trueFunc"]],"vipstand.se":[["acs","parseInt","break;case $."]],"virtual-youtuber.jp":[["noeval-if","/chp_?ad/"]],"visagrader.com":[["rmnt","script","/__adblocker|html-load/"]],"visnalize.com":[["no-fetch-if","googlesyndication"]],"vivaveltoro.com":[["rmnt","script","/__adblocker|html-load/"]],"vtplayer.online":[["nowoif"],["set","adblockcheck","false"]],"wakuraw.com":[["no-fetch-if","/\\?abg=|adsbygoogle|tpc\\.googlesyndication\\.com|doubleclick\\.net|googleadservices\\.com/"]],"warbirdfanatics.com":[["rmnt","script","/__adblocker|html-load/"]],"watch.rkplayer.xyz":[["set","adsPlayer","undefined"]],"watchfreekav.com":[["acs","document.querySelectorAll","popMagic"]],"wblaxmibhandar.com":[["aopr","AdBDetected"]],"wdpglobal.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"web.de":[["rmnt","script","\"Anzeige\""],["aeld","timeupdate"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"webloadedmovie.com":[["acs","parseInt","break;case $."],["nowoif"]],"wetsins.com":[["acs","document.querySelectorAll","popMagic"]],"wgno.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"whatcanmydogeat.com":[["rmnt","script","/__adblocker|html-load/"]],"whistleandivy.com":[["rmnt","script","/__adblocker|html-load/"]],"wikipooster.com":[["noeval-if","/chp_?ad/"]],"windowsaplicaciones.com":[["noeval-if","/chp_?ad/"]],"winnipegsun.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"winsipedia.com":[["rmnt","script","/__adblocker|html-load/"]],"womansworld.com":[["rmnt","script","/__adblocker|html-load/"]],"woodworkingtalk.com":[["rmnt","script","html-load.com"]],"woojr.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"wordsaladgame.com":[["rmnt","script","/__adblocker|html-load/"]],"wordsofdeliciousness.com":[["rmnt","script","/__adblocker|html-load/"]],"worksheetplace.com":[["rmnt","script","/__adblocker|html-load/"]],"wpri.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wtsp.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xfreehd.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["nostif","/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"]],"xn--90afacv0clj6ac0dxa.xn--p1ai":[["aopr","__Y"]],"xnxxjapon.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xoxocomic.com":[["acs","document.documentElement","break;case $."]],"xtapes.me":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"xubster.com":[["nano-stb","remaining","1000","0.001"]],"xxxputas.net":[["acs","document.querySelectorAll","popMagic"],["nowoif"],["aopr","loadTool"]],"xxxsexyjapanese.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxshut.com":[["acs","document.querySelectorAll","popMagic"],["noeval-if","/chp_?ad/"]],"xxxstream.me":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"yamahastarbolt.com":[["rmnt","script","html-load.com"]],"youcouldtravel.com":[["rmnt","script","/__adblocker|html-load/"]],"yourbasin.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"youx.xxx":[["aeld","","_0x"],["aopr","exoNoExternalUI38djdkjDDJsio96"],["set","flashvars.adv_pause_html",""]],"yt-downloaderz.com":[["no-fetch-if","googlesyndication"]],"ythd.org":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"],["aopr","Adcash"]],"ytube2dl.com":[["aeld","","pop"]],"yuatools.com":[["noeval-if","/chp_?ad/"]],"yuvutu.com":[["acs","String.prototype.charAt"]],"z1000forum.com":[["rmnt","script","html-load.com"]],"zee5.com":[["set","Object.prototype.setDisableFlashAds","noopFunc"]],"zona-leros.com":[["nostif","Adb"]],"zovo2.top":[["acs","JSON.parse","document.head.appendChild"],["aeld","click","open"],["set","blurred","false"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
