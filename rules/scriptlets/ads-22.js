/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"01fmovies.com":[["aopr","AaDetector"],["aeld","DOMContentLoaded","checkVPN"]],"10hitmovies.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"10starhd.fr":[["acs","globalThis","break;case"]],"1234movies.fr":[["acs","Math","break;case $."]],"123moviefree.com.br":[["aeld","","break;case $."]],"123movies-free.net":[["acs","document.documentElement","break;case $."]],"124spider.org":[["rmnt","script","html-load.com"]],"1337x.unblocked.net":[["aopr","open"]],"1kmovies.it":[["acs","JSON.parse","break;case $."],["aeld","","break;case $."]],"1tamilmv.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["acs","document.createElement","cookie"],["aopr","mm"]],"2embed.nl":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","navigator","break;case $."],["aopr","mm"],["nowoif","","1"],["aeld","click","/sandbox/i"],["set-attr","iframe#iframesrc","src","[data-src]"]],"2gomovies.com":[["acs","JSON.parse","break;case $."]],"2tencb.net":[["acs","WebAssembly","atob","/^data:/"]],"3hiidude.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","String.fromCharCode"]],"4lessbyjess.com":[["rmnt","script","/__adblocker|html-load/"]],"720pflix.com.br":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"7hitmovies.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"7mmtv.fr":[["aopr","doOpen"]],"a8ix.de":[["acs","document.documentElement","break;case $."]],"ableitungsrechner.net":[["nostif","ag_adBlockerDetected"]],"adblockeronstreamtape.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON","break;case"],["nowoif"],["nano-stb","counter"]],"adblockstrtech.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"afk.global":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"agrarwetter.net":[["aopw","detector_launch"]],"allschoolboysecrets.com":[["aopr","ExoLoader.serve"]],"alpineella.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"an1me.pl":[["aost","document.getElementsByTagName","adsBlocked"]],"anerdcooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anichin.top":[["nowoif"]],"animeheaven.nl":[["no-xhr-if","method:HEAD"]],"animeheaven.ru":[["no-xhr-if","method:HEAD"],["acs","Math","break;case $."]],"animekb.co.uk":[["nowebrtc"]],"animez.org":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"]],"aniplay.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"aniwave.ru":[["nowoif","_blank"],["set-cookie","__pf","1"]],"anxcinema.com.br":[["ra","href","#clickfakeplayer"],["aopr","__Y"]],"anytimecocktails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aotonline.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"arabseed.ru":[["aeld","","_0x"],["acs","Promise","break;case $."]],"arcor.de":[["nostif",".call(null)","10"]],"aseaofred.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianload.de":[["acs","Math","break;case $."]],"asianporn.sexy":[["aopr","popit"],["aeld","popstate","noPop"]],"asiaon.com.br":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"],["no-xhr-if","googlesyndication","length:10"],["no-xhr-if","doubleclick"],["json-prune","props.pageProps.data.aotHomepageTopBar props.pageProps.data.aotHomepageTopBar props.pageProps.data.aotHeaderAdScripts props.pageProps.data.aotFooterWidgets"]],"ask4movie.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","AaDetector"],["nowoif"]],"assesphoto.com":[["acs","document.querySelectorAll","popMagic"]],"atdhe.com.br":[["popads-dummy"]],"avirtuouswoman.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"babygearessentials.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bahaiforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakedbree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bdsmstreak.com":[["aopr","ExoLoader.serve"],["aeld","","_blank"],["acs","document.querySelectorAll","popMagic"]],"beautycrafter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bharian.com.my":[["aopr","SmartWallSDK"]],"bhoomtv.com":[["rmnt","script","/adblock/i"]],"bigwarp.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["acs","document.createElement","overlay"]],"bimmerforums.co.uk":[["rmnt","script","html-load.com"]],"bluemediafile.net":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bluemediastorage.co.uk":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"blueridgenow.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"bokepxv.com":[["acs","document.querySelectorAll","popMagic"]],"boogieforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bournemouthecho.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"boxentriq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boystube.link":[["acs","document.querySelectorAll","popMagic"],["noeval-if","/chp_?ad/"]],"br.nacaodamusica.com":[["aopw","adBlockDetected"]],"braintreeandwithamtimes.co.uk":[["set","adLight","true"]],"briana-thomas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brmovies.com.br":[["aeld","","break;case $."]],"buffsports.pl":[["acs","EventTarget.prototype.addEventListener","delete window"]],"bunkr.de":[["acs","document.querySelectorAll","popMagic"],["aopr","popMagic.init"],["acs","WebAssembly","Promise"]],"bunkrr.it":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"bunkrr.pl":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"business-live.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"buyjiocoin.co.uk":[["nowoif"]],"caitlin.top":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"camsclips.ru":[["nostif","innerText","2000"]],"camwhores.es":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"],["set","flashvars.adv_pre_src",""],["set","flashvars.adv_pre_url",""],["set","flashvars.adv_pre_vast",""],["set","flashvars.protect_block",""],["set","flashvars.video_click_url",""]],"can-amforum.com":[["rmnt","script","html-load.com"]],"cardscanner.co":[["nostif","show"]],"carolinescooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cartoonporno.xxx":[["aopr","prPuShown"],["nowoif"]],"ccurl.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","Math","break;case $."]],"cdn.gledaitv.de":[["aopr","Handlers"],["aopr","Settings"],["nostif","initializeAdblockDetection"],["acs","document.createElement","detection-bait"]],"chanto.jp.net":[["rmnt","script","html-load.com"]],"cheboygannews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"checkhookboxing.com":[["rmnt","script","html-load.com"]],"chikianimation.org":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"cima4u.com.br":[["aeld","","break;case $."]],"cinecalidad.co.uk":[["set","playerAdSettings.adLink",""],["set","playerAdSettings.waitTime","0"]],"civitai.green":[["no-fetch-if","googlesyndication"]],"clk.com.br":[["nowoif"],["set","blurred","false"]],"clk.net":[["nowoif"],["set","blurred","false"]],"cloudvideotv.de":[["nowoif"],["aopr","localStorage"],["rmnt","script",";}}};break;case $."],["acs","JSON","break;case"],["rmnt","script","FingerprintJS"]],"coachrallyrus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comix.pl":[["nosiif","localStorage["]],"cookierun.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingmadehealthy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"copykat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"couchtuner.com":[["acs","RegExp","0x"],["acs","document.documentElement","break;case $."]],"couponingfor4.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"craftsonsea.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crichd.de":[["aopr","AaDetector"],["acs","JSON.parse","break;case $."],["aeld","","break;case $."],["nowoif"]],"cronachedibirra.it":[["noeval-if","/chp_?ad/"]],"crownforums.com":[["rmnt","script","html-load.com"]],"crvownersclub.com":[["rmnt","script","html-load.com"]],"crvsport.ru":[["acs","document.documentElement","break;case $."]],"culinaryhill.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cybertechng.com":[["set","blurred","false"],["set","go_popup","{}"]],"cyprus.co.il":[["noeval-if","/chp_?ad/"]],"daotranslate.ru":[["acs","document.getElementById","deblocker","/^data:text\\/javascript/"]],"dashboardwarninglights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"decmelfot.xyz":[["aeld","","break;case $."]],"depedlps.it":[["aeld","load","onload"],["aopr","encodeURIComponent"]],"desicinema.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"desivideos.fr":[["aopr","document.dispatchEvent"]],"dewimg.com.br":[["nowoif"],["acs","addEventListener","-0x"]],"dirtyindianporn.co.uk":[["aopr","exoJsPop101"]],"dishingupthedirt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dispatch.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dodz.com":[["nowoif"]],"doncasterfreepress.co.uk":[["rmnt","script","await eval"]],"doomovie-hd.nl":[["set","adSettings","[]"]],"doomovie-hd.pl":[["set","adSettings","[]"]],"doujindesu.org":[["aeld","load","2000"],["rmnt","script","WebAssembly"],["acs","String.fromCharCode","window[_0x"],["acs","document.querySelectorAll","popMagic"]],"douploads.es":[["acs","$","show"],["ra","checked","input#chkIsAdd"]],"downredbuddrive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"downsub.com":[["aopw","Fingerprint2"]],"dpstream.de":[["set","load_pop_power","noopFunc"],["ra","href","#clickfakeplayer"]],"drakecomic.org":[["set","checkAdBlocker","noopFunc"]],"drop.carbikenation.com":[["nano-sib","/.?/","*","0.02"]],"dropmms.it":[["aeld","load","undefined"],["acs","document.onkeydown"]],"drugstoredivas.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ducatiscramblerforum.com":[["rmnt","script","html-load.com"]],"ducatisupersport939.net":[["rmnt","script","html-load.com"]],"dvm360.com":[["nosiif","analytics.initialized"]],"electriciantalk.com":[["rmnt","script","html-load.com"]],"embedgram.com":[["nowoif"]],"empressofdirt.net":[["rmnt","script","/__adblocker|html-load/"]],"erinsakura.com":[["nostif","disableDeveloperTools"]],"essen-und-trinken.de":[["aopr","_sp_.mms.startMsg"],["nostif",".call(null)","10"]],"estrenosflix.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopw","adcashMacros"]],"estrenosgo.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopw","adcashMacros"]],"evdeingilizcem.com":[["noeval-if","/chp_?ad/"]],"ewrc-results.com":[["set","canGetAds","true"],["no-fetch-if","method:/head/i"],["set-local-storage-item","ewrc_ad_signal","$remove$"]],"exploreessaouira.com":[["rmnt","script","/__adblocker|html-load/"]],"extinctanimals.org":[["rmnt","script","/__adblocker|html-load/"]],"extratorrent.de":[["aopw","afStorage"],["nowoif"]],"farmingbase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fayobserver.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"fembedx.top":[["aost","HTMLElement.prototype.click","_0x"]],"fifetoday.co.uk":[["rmnt","script","await eval"]],"filelions.es":[["aopr","__Y"]],"filelions.net":[["aopr","__Y"]],"filmpornoitaliano.org":[["acs","document.querySelectorAll","popMagic"]],"filmy-hit.de":[["acs","document.documentElement","break;case $."]],"filmy4wap1.co.uk":[["acs","Math","break;case $."]],"filmy4web.pl":[["nowoif"]],"filmydown.com":[["nowoif"]],"financebolo.com":[["nano-sib","timer","*","0.001"],["nowoif"]],"firstonetv.fr":[["acs","String.fromCharCode","/btoa|break/"]],"firstonetv.nl":[["acs","String.fromCharCode","/btoa|break/"]],"fixthecfaa.com":[["rmnt","script","html-load.com"]],"flashingjungle.com":[["aeld","/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["aopr","document.dispatchEvent"]],"flixhd.cc":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fluvore.com":[["nowebrtc"]],"fmovies.co.uk":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"],["aopr","mm"],["set","console.clear","undefined"],["acs","document.write","innerWidth"]],"fmovies.ru":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"],["aopr","mm"],["set","console.clear","undefined"],["acs","document.write","innerWidth"]],"fontyukle.net":[["aost","setTimeout","onload"]],"football365.fr":[["nostif",".call(null)","10"]],"footymercato.com":[["noeval-if","/chp_?ad/"]],"foundit.com":[["set","freshpaint","{}"],["set","freshpaint.track","noopFunc"]],"foxnxx.com":[["acs","document.querySelectorAll","popMagic"]],"free-n8n-templates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"free-trannyporn.com":[["acs","document.querySelectorAll","popMagic"]],"freecoursesonline.org":[["aeld","load","nextFunction"]],"freehdvideos.xxx":[["acs","document.querySelectorAll","popMagic"]],"freeindianporn.mobi":[["aeld","/.?/","popMagic"]],"freejav.guru":[["nostif","disableDeveloperTools"],["acs","eval","replace"]],"freeload.fr":[["acs","Math","break;case $."]],"freemovies.org":[["acs","document.documentElement","break;case $."]],"freetvsports.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fsplayer.net":[["nowoif"]],"fuckflix.click":[["rmnt","script","wpadmngr.com"]],"fullofplants.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullxxxporn.net":[["aopr","decodeURI"]],"gadgetxplore.com":[["noeval-if","/chp_?ad/"]],"gamefront.com":[["acs","$","AdBlock"],["nano-stb","","10000"]],"gamereactor.fr":[["set","adblockEnabled","noopFunc"]],"gazetteandherald.co.uk":[["set","adLight","true"]],"gdflix.co.uk":[["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","history.pushState"]],"gdflix.es":[["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","history.pushState"]],"gdtot.de":[["acs","document.createElement","script"],["aopr","open"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"gdtot.it":[["acs","document.createElement","script"],["aopr","open"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"gedichte.ws":[["nostif",".call(null)","10"]],"gencoupe.com":[["rmnt","script","html-load.com"]],"gesundheit.de":[["nostif",".call(null)","10"]],"ghior.com":[["rmnt","script","deblocker"]],"gina-michele.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gisvacancy.com":[["noeval-if","/chp_?ad/"]],"glow-diaries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"go.shortnest.com":[["nowoif"],["nano-stb","","6000"]],"gogoplay.fr":[["acs","JSON.parse","break;case $."]],"gogriffs.com":[["set","blockAdBlock","trueFunc"]],"golfspan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gomoviesfree.com":[["aopr","glxopen"]],"goodgourds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"govid.de":[["acs","parseInt","break;case $."]],"grandhighlanderforum.com":[["rmnt","script","html-load.com"]],"grantorrents.co.uk":[["nano-stb"]],"growgritly.com":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"gutekueche.at":[["set","gkAdsWerbung","true"]],"happyyouhappyfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardfacefuck.com":[["acs","document.querySelectorAll","popMagic"]],"hdeuropix.com":[["aopr","AaDetector"],["aopr","LieDetector"],["popads-dummy"]],"hdhub4u.it":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","mm"],["nowoif"]],"hdmoviehubs.co.uk":[["acs","JSON.parse","break;case $."]],"hdmoviesmaza.ru":[["nowoif"]],"hdzog.nl":[["acs","adver"]],"headbangerskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healyeatsreal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai-one.com":[["nostif","/[a-z]\\(!0\\)/","800"]],"hentaicovid.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"heroine-xxx.com":[["acs","document.querySelectorAll","popMagic"]],"hes-goals.io":[["rmnt","script","AdBlock"]],"hhkungfu.ru":[["acs","WebAssembly","atob"],["nowoif"]],"himovies.fr":[["nowoif"]],"hispasexy.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","decodeURI","decodeURIComponent"],["aopr","_cpp"],["aopr","popns"]],"hoca5.com":[["rmnt","script","delete window"]],"hollywoodhinditracks2.blogspot.com":[["acs","atob","decodeURIComponent"]],"homeculina.com":[["nostif","/adblock|isRequestPresent/"]],"homestratosphere.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"hometips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"honkai.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hormuz.data-tracking.net":[["nostif","offsetHeight"]],"houstonherald.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iamhomesteader.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"icyporno.com":[["aeld","click","popMagic"]],"idownloadblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iframejav.co.uk":[["nowoif"],["aopr","__Y"]],"igram.it":[["nano-sib"]],"imgsen.pl":[["aopr","CustomEvent"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","loadTool"]],"imgviu.it":[["nowoif"],["acs","addEventListener","-0x"]],"indianpornvideos.fr":[["aopr","exoJsPop101"]],"indianyug.com":[["nostif","siteAccessPopup"]],"ishouldbemoppingthefloor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"isohunt.com.br":[["nowoif"]],"ispunlock.fr":[["aopr","pace"]],"itdoesnttastelikechicken.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itopmusic.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ix3talk.com":[["rmnt","script","html-load.com"]],"jagledam.org":[["rmnt","script","offsetHeight"]],"jalshamoviez.de":[["aeld","","/_0x|localStorage\\.getItem/"]],"jalshamoviezhd.nl":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"javsexfree.com":[["acs","document.querySelectorAll","popMagic"]],"javwide.es":[["aopr","AaDetector"]],"jetztspielen.de":[["aopr","googletag"]],"jmanga.co.uk":[["acs","WebAssembly","atob"]],"julieseatsandtreats.com":[["aopr","__eiPb"]],"juninhoscripts.com.br":[["noeval-if","/chp_?ad/"]],"kali.wiki":[["noeval-if","/chp_?ad/"]],"kannadamasti.com.br":[["nowoif"]],"katesbestrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"kch-ent.com":[["rmnt","script","/__adblocker|html-load/"]],"keepvid.ru":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"khatrimaza.org":[["aeld","","0x"],["acs","puShown","/doOpen|popundr/"],["no-xhr-if","ads"],["nostif","showModal"]],"khatrimazafull.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"],["aopr","LieDetector"]],"khon2.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kiatuskerforum.com":[["rmnt","script","html-load.com"]],"kissasian.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"kitchenknifeforums.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchenstewardship.com":[["rmnt","script","/__adblocker|html-load/"]],"kits4beats.com":[["noeval-if","/chp_?ad/"]],"kkickass.it":[["aeld","","break;case $."],["aopw","ospen"]],"klmanga.net":[["acs","document.querySelectorAll","popMagic"],["aeld","","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"klubsports.fr":[["aeld","","break;case $."],["acs","document.documentElement","break;case $."]],"knittingwithchopsticks.com":[["rmnt","script","/__adblocker|html-load/"]],"kokostream.net":[["nowoif"]],"kompas.com":[["acs","setTimeout","iframeTestTimeMS"]],"kompasiana.com":[["aopr","initAdserver"],["rmnt","script","adrecover.com"]],"kompoz2.com":[["aopr","exoJsPop101"]],"komputerswiat.pl":[["rmnt","script","__adblocker","excludes","self.__next"],["acs","$onet","adblock"]],"kstp.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"kumascans.com":[["acs","JSON.parse","break;case $."]],"kuponigo.com":[["rmnt","script","window.location.replace"]],"kyousoku.net":[["rmnt","script","html-load.com"]],"lascelebrite.com":[["noeval-if","/chp_?ad/"]],"lateralmovements.com":[["rmnt","script","/__adblocker|html-load/"]],"latesthdmovies.net":[["acs","eval","replace"],["acs","document.createElement","script"]],"lesswithlaur.com":[["rmnt","script","/__adblocker|html-load/"]],"letmejerk4.com":[["aopr","ExoLoader"],["aeld","","_0x"]],"letthebakingbegin.com":[["rmnt","script","/__adblocker|html-load/"]],"lifeaudio.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"lifemeasure.com":[["rmnt","script","/__adblocker|html-load/"]],"link1s.net":[["aopr","app_vars.force_disable_adblock"],["aopr","open"],["set","blurred","false"]],"linkfly.es":[["set","blurred","false"]],"liveon.it":[["acs","setTimeout","admc"]],"livestreamtv.pk":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"livetvon.pl":[["aeld","","break;case $."],["aopw","u_cfg"]],"living-vegan.com":[["rmnt","script","/__adblocker|html-load/"]],"livingetc.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"localsyr.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"lomaculinaria.com":[["rmnt","script","/__adblocker|html-load/"]],"lookcam.com":[["set","canRunAds","true"]],"lostcoastoutpost.com":[["aost","decodeURI","CACHE"],["rmnt","script","/\\.cmd\\.unshift|adblockerDisabled/","excludes",",\\\""]],"loveandmarriageblog.com":[["rmnt","script","/__adblocker|html-load/"]],"lowkickmma.com":[["rmnt","script","/__adblocker|html-load/"]],"lplaygo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"maisieandruth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manga-scantrad.com.br":[["acs","document.querySelectorAll","popMagic"]],"manga-scantrad.pl":[["acs","document.querySelectorAll","popMagic"]],"manga1000.co.uk":[["aeld","","break;case $."],["aopw","document.ready"]],"manga1001.com.br":[["aeld","","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"manga1001.fr":[["aeld","","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"mangabats.com":[["acs","WebAssembly","atob"],["nowoif"]],"mangahub.io":[["acs","document.querySelectorAll","popMagic"],["acs","JSON.parse","break;case $."]],"mangaku.nl":[["nowebrtc"],["acs","$","onclick"]],"mangarawjp.com":[["aeld","","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"mangasail.com.br":[["set","adblock","1"]],"manhastro.net":[["noeval-if","/chp_?ad/"]],"manhuascan.pl":[["acs","parseInt","break;case $."]],"masaporn.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"mazpic.pl":[["nowoif"],["acs","addEventListener","-0x"]],"mechanicbase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medeberiya1.com":[["noeval-if","/chp_?ad/"],["aopr","adsBlocked"]],"mediacast.click":[["nowoif"]],"megaflix.co.uk":[["nowoif"]],"megaflix.com":[["nowoif"]],"melodelaa.ru":[["acs","parseInt","break;case $."]],"menshairstylestoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"metrowestdailynews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"mhdstream.nl":[["rmnt","script","deblocker"]],"miniurl.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"miohentai.com":[["aopr","mnpwclone"]],"mirror.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"],["json-prune","[].props.slides.[-].adIndex"],["nano-stb","native code","15000","0.001"],["nano-stb","(null)","5000","0.001"]],"mkvcinemas.ru":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","addEventListener","HTMLAllCollection"]],"mlfbd.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"modularfords.com":[["rmnt","script","html-load.com"]],"moflix-stream.co.uk":[["nostif","affiliate"],["nostif","afterOpen"]],"momfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommybearmedia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommyhatescooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momsdinner.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moneteasy.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"monopolyland.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moonandspoonandyum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mosttechs.com":[["noeval-if","/chp_?ad/"]],"motogpstream.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"motorsportsracingtalk.com":[["rmnt","script","html-load.com"]],"mov2day.es":[["aopr","LieDetector"]],"moviefreak.fr":[["acs","parseInt","break;case $."]],"moviehdf.net":[["aopr","popUp"],["nowoif"]],"movieplay.com.br":[["acs","document.documentElement","break;case $."]],"movieruls.pl":[["nowoif"]],"movierulzfree.fr":[["nowoif"]],"movies07.de":[["aeld","","pop"]],"movies4u3.es":[["acs","document.documentElement","break;case $."],["nowoif"],["aopr","antiAdBlockerHandler"]],"moviesrulz.com.br":[["nowoif"],["acs","document.documentElement","break;case $."]],"movieuniverse.fr":[["acs","document.documentElement","break;case $."]],"movieuniverse.pl":[["acs","document.documentElement","break;case $."]],"moviflex.org":[["acs","Math","XMLHttpRequest"],["nowoif"]],"moviflex.pl":[["acs","Math","XMLHttpRequest"],["nowoif"]],"mp4moviez.fr":[["rmnt","script",";}}};break;case $."],["nowoif"]],"mrjav.net":[["acs","document.querySelectorAll","popMagic"]],"musicalmum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"musicstrive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mustardseedmoney.com":[["aopr","__eiPb"]],"myad.biz":[["set","blurred","false"]],"mycima.com":[["acs","parseInt","break;case $."]],"mylargescale.com":[["rmnt","script","html-load.com"]],"myminichefs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mymorningespresso.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mytopspotify.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myyouporn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"namethatporn.com":[["popads-dummy"]],"natashashome.com":[["rmnt","script","/__adblocker|html-load/"]],"nbastream.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"nbastream.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"ncaa.com":[["no-fetch-if","googlesyndication"]],"nearthebeatenpath.com":[["rmnt","script","/__adblocker|html-load/"]],"neighborfoodblog.com":[["rmnt","script","/__adblocker|html-load/"]],"netuplayer.nl":[["nowoif"]],"ngelag.com":[["aopr","FuckAdBlock"]],"nicexxxtube.com":[["noeval"],["aopr","Aloader.serve"]],"nicovideo.jp":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"nifteam.info":[["acs","document.getElementById","undefined"]],"nimegami.id":[["aopr","btoa"]],"nissancubelife.com":[["rmnt","script","html-load.com"]],"niyaniya.it":[["acs","WebAssembly","atob"]],"noicetranslations.blogspot.com":[["aopr","checkAdsStatus"]],"northjersey.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"northumberlandgazette.co.uk":[["rmnt","script","await eval"]],"nothingbutnewcastle.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"notube.de":[["nowoif"]],"nulleb.com":[["rmnt","script","deblocker"]],"nutraingredients.com":[["set","displayInterstitialAdConfig","false"]],"odekake-spots.com":[["noeval-if","/chp_?ad/"]],"ogomovies.org":[["acs","document.documentElement","break;case $."]],"ohthatsgood.com":[["rmnt","script","/__adblocker|html-load/"]],"okmusi.com":[["nowoif"]],"oldwest.org":[["rmnt","script","/__adblocker|html-load/"]],"olivesnthyme.com":[["rmnt","script","/__adblocker|html-load/"]],"ondebola.com":[["nostif","utilAds"]],"onlinevideoconverter.fr":[["nowoif"],["acs","JSON.parse","break;case $."]],"onlyfaucet.com":[["rmnt","script","/fetch|adb/i"]],"onvid.de":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"oportaln10.com.br":[["aopw","adBlockDetected"]],"opvid.it":[["nowoif"]],"otakomu.jp":[["rmnt","script","html-load.com"]],"otakudesu.nl":[["nowoif"]],"ouo.net":[["aopr","AaDetector"],["nowebrtc"],["nano-sib","stop()"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"],["acs","String.fromCharCode","/'shift'|break;/"]],"ovid.com.br":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"pagalworld.nl":[["acs","JSON.parse","break;case $."]],"pagalworld.pl":[["acs","JSON.parse","break;case $."]],"pahe.es":[["nowoif"],["aeld","","_0x"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["],["rmnt","script","documentElement"]],"paipancon.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","WebAssembly","atob"]],"pandafreegames.com.br":[["nostif","adFilled","2500"]],"pandafreegames.org":[["nostif","adFilled","2500"]],"panelprograms.blogspot.com":[["rmnt","script","antiAdBlockerHandler"]],"paperzonevn.com":[["nostif","adb"]],"pastemytxt.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pastepvp.org":[["aopw","smrtSB"]],"patrol4x4.com":[["rmnt","script","html-load.com"]],"peakbagger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peladas69.com":[["aopr","decodeURI"]],"pelisplushd.org":[["aopw","adcashMacros"],["nowoif"]],"physicianonfire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picbaron.com":[["aeld","","_0x"],["aopr","loadTool"],["aopr","open"],["noeval"],["aeld","","popMagic"]],"pickyeaterblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pinkporno.de":[["acs","document.querySelectorAll","popMagic"]],"pirate.net":[["aeld","/^(?:click|mousedown)$/","_0x"]],"piratebayz.com.br":[["aopr","LieDetector"]],"play.virginmediatelevision.ie":[["json-prune","avails"]],"player4me.online":[["acs","WebAssembly","atob"],["aeld","click","popunder"],["aost","document.createElement","displayLayer"]],"plc247.com":[["acs","String.fromCharCode","decodeURIComponent"],["rmnt","script","deblocker"]],"plusupload.net":[["acs","Math","break;case $."]],"pmppracticeexam.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pngreal.com":[["no-fetch-if","ads"]],"podjav.tv":[["rmnt","script","wpadmngr.com"]],"pornhoarder.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/wpadmngr|adserverDomain/"]],"pornocomics.it":[["aeld","","pop"]],"pornovideos-hd.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"powlideo.net":[["nowoif"]],"pramejarab.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"primapaginamarsala.it":[["aopr","wpsite_clickable_data"]],"pro.iqsmartgames.com":[["nowoif"]],"prostoporno.es":[["aopr","ExoLoader.serve"]],"proxybit.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","adcashMacros"],["nowoif"],["aopr","mm"]],"proxytpb.it":[["aeld","/^(?:click|mousedown)$/","_0x"]],"pursuitforum.com":[["rmnt","script","html-load.com"]],"radio-en-direct.fr":[["nostif","displayMessage","2000"]],"radiosantaclaus.com":[["aopr","adp"]],"rawstory.com":[["aopr","setNptTechAdblockerCookie"]],"readcomiconline.fr":[["acs","addEventListener","HTMLAllCollection"],["no-xhr-if","/adskeeper|bidgear|googlesyndication|mgid/"],["aopr","adblockDetector"],["aeld","mousedown","localStorage"]],"rebahin.pw":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"recetatipica.com":[["rmnt","script","/__adblocker|html-load/"]],"redamateurtube.com":[["acs","document.querySelectorAll","popMagic"]],"redcottagechronicles.com":[["rmnt","script","/__adblocker|html-load/"]],"redecanaishd.com.br":[["aopr","aclib"]],"remaxhd.es":[["aopr","decodeURI"],["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"reviewdiv.com":[["set","FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["rmnt","script","wpquads_adblocker_check"]],"rgeyyddl.net":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"rgmovies.it":[["noeval-if","/chp_?ad/"]],"richtexturescrochet.com":[["rmnt","script","/__adblocker|html-load/"]],"ridgeforum.com":[["rmnt","script","html-load.com"]],"rintor.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","loadTool"]],"rintor.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","loadTool"]],"rl6mans.com":[["rmnt","script","/adblock/i"],["nostif","_0x"],["nostif","/atob|innerHTML/"]],"rnbxclusive.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"rnbxclusive0.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"roadtripalberta.com":[["rmnt","script","/__adblocker|html-load/"]],"rojadirectatvlive.es":[["nowoif"]],"roms-download.com":[["acs","parseInt","break;case $."]],"rugbynoise.com":[["rmnt","script","/__adblocker|html-load/"]],"rugerforum.net":[["rmnt","script","html-load.com"]],"ruhr24.de":[["nostif",".call(null)","10"]],"russellstreetreport.com":[["rmnt","script","/__adblocker|html-load/"]],"rzforums.com":[["rmnt","script","html-load.com"]],"sbbrisk.com":[["aopr","__Y"],["aopr","mm"]],"sbchip.es":[["aopr","__Y"],["aopr","mm"]],"scalemodeladdict.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scam-detector.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scatkings.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"scubadiverlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scubidu.eu":[["aost","String.prototype.charCodeAt","ai_"]],"seriesflixhd.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"seriesly.de":[["acs","Math","break;case $."]],"seriesmetro.net":[["aopr","afStorage"]],"seriesonline.com":[["acs","document.documentElement","break;case $."]],"setup.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seulink.it":[["aopr","mm"],["set","blurred","false"]],"sew4home.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sewguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seznamzpravy.cz":[["nostif","0x"],["ra","style","[style*=\"background-image: url\"]","stay"],["ra","href","[href*=\"click?\"]","stay"]],"shahed4u.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."]],"shavetape.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["acs","document.documentElement","break;case $."],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"shegotass.info":[["aopr","popunder"],["set","flashvars.adv_pre_vast",""]],"sheikhmovies.com.br":[["noeval-if","/chp_?ad/"]],"shesfreaky.com":[["acs","document.createElement","appendChild"]],"shoot-yalla.me":[["rmnt","script","/adbl/i"]],"shorten.es":[["aopr","AaDetector"],["aopr","app_vars.force_disable_adblock"],["aopr","parcelRequire"],["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","zfgloaded"]],"showflix.fr":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["aost","document.getElementById","fairAdblock"]],"showflix.nl":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["aost","document.getElementById","fairAdblock"]],"simplycanning.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplyjillicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sleazyneasy.com":[["aopr","decodeURI"],["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_pre_vast_alt",""],["set","x_width","1"]],"slowcookerfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smoner.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","checkAdsBlocked"],["nano-stb","getElementById","*"]],"sms24.es":[["aost","$ado","/ado/i"],["aost","document.createElement","app.js"]],"snap.fan":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snowest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"solarmovies.it":[["aeld","","break;case $."]],"somersetlive.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"soninow.com":[["nosiif","adsbygoogle"]],"sound-park.co.uk":[["acs","$","open"],["acs","document.createElement","script"]],"soundpark.net":[["acs","$","open"],["acs","document.createElement","script"]],"sousou-no-frieren.fr":[["acs","document.querySelectorAll","popMagic"]],"speedostream.es":[["rmnt","script",";}}};break;case $."],["aost","JSON.parse","computed"]],"spielen.de":[["nostif",".call(null)","10"]],"spigotunlocked.fr":[["nostif","show"]],"spigotunlocked.it":[["nostif","show"]],"sportmargin.online":[["rmnt","script","popundersPerIP"]],"sportsembed.pl":[["acs","setTimeout","admc"]],"sportshub.pl":[["acs","document.documentElement","break;case $."]],"srvy.ninja":[["set","nudgeAdBlock","noopFunc"],["no-xhr-if","/googlesyndication|ads/"]],"standard.co.uk":[["rmnt","script","html-load.com"],["set","JSGlobals.prebidEnabled","false"],["nano-stb","[native code]","3000","0.001"],["nano-stb","i||(e(),i=!0)","2500","0.001"]],"stapadblockuser.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"starlinkinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stevesnovasite.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"strcloud.club":[["rmnt","script","wpadmngr.com"]],"streamcloud.co.uk":[["acs","document.documentElement","break;case $."]],"streamcloud.pl":[["acs","document.documentElement","break;case $."]],"streamhoe.org":[["aopr","open"],["aopr","_pop"]],"streamhub.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["aopw","__aaZoneid"],["nowoif"]],"streamm4u.net":[["nowebrtc"],["aopr","AaDetector"]],"streamsport.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["aeld","","_0x"],["nowoif"]],"streamtapeadblock.de":[["acs","JSON.parse","Promise"],["nowoif"],["aopr","Adcash"]],"strtape.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"stuttgarter-zeitung.de":[["nostif",".call(null)","10"]],"subtorrents.org":[["aopr","capapubli"],["aopr","getUrlParameter"],["nowebrtc"],["noeval"],["popads-dummy"],["set","btoa","null"]],"sulaandspice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supervideo.com":[["aopr","AaDetector"]],"sushi-scan.pl":[["nostif","show"]],"sussytoons.de":[["no-fetch-if","doubleclick"]],"sweeteroticart.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"sweetlittlebluebird.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sxyprn.org":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["acs","WebAssembly","atob"],["acs","decodeURI","decodeURIComponent"],["set","vast_urls","{}"],["aopr","popns"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aopw","__aaZoneid"]],"synoniemboek.com":[["aopw","adBlockDetected"]],"syosetu.es":[["acs","WebAssembly","atob"]],"tabootube.co.uk":[["acs","document.querySelectorAll","popMagic"]],"taifood-blog.asia":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"tamilprint.org":[["acs","parseInt","break;case $."]],"tamilprint31.es":[["acs","EventTarget.prototype.addEventListener","delete window"]],"tamilyogis.fr":[["acs","JSON.parse","break;case $."]],"technicalviral.com":[["noeval-if","/chp_?ad/"]],"tehnotone.com":[["noeval-if","/chp_?ad/"]],"teknorizen.org":[["set","safelink.adblock","false"]],"texassports.com":[["set","blockAdBlock","trueFunc"]],"tfly.link":[["set","blurred","false"]],"thebestcakerecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebestketorecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theblissempire.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["aopr","open"]],"thefamilyfoodkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehappyhousie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thekickass.pl":[["aeld","","break;case $."],["aopw","ospen"]],"thembites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themorrismansionblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepoke.co.uk":[["rmnt","script","/==undefined.*body/"]],"thestrive.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesuperdownload.co.uk":[["acs","JSON.parse","break;case $."]],"thetowntalk.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thisreadingmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thought.is":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thunderousintentions.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"tipsaholic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tmearn.com.br":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["set","blurred","false"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tmearn.fr":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["set","blurred","false"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"todaysgardener.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tolstoytherapy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"top.gg":[["nano-stb","readyToVote","12000"]],"topflix.de":[["nano-sib"],["nowoif"],["aopr","console.clear"],["acs","parseInt","break;case $."]],"toptenz.net":[["rmnt","script","/==undefined.*body/"]],"torlock.org":[["acs","setTimeout","admc"],["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"torlock2.net":[["acs","setTimeout","admc"],["nowebrtc"]],"tormalayalam.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopw","adcashMacros"]],"torrentgalaxy.es":[["aost","String.prototype.charCodeAt","$"]],"torrentstatus.nl":[["aopw","afStorage"],["nowoif"],["aopr","mm"]],"torture1.net":[["acs","document.querySelectorAll","popMagic"]],"tpead.net":[["rmnt","script","/WebAssembly|forceunder/"]],"trakt.tv":[["set","art3m1sItemNames.affiliate-wrapper","\"\""]],"transfermarkt.nl":[["acs","document.querySelector","popupBlocked"],["acs","Math","/\\}\\s*\\(.*?\\b(self|this|window)\\b.*?\\)/"],["nostif",".call(null)","10"]],"travelingfamilyblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tvhay.pl":[["set","vidorev_jav_plugin_video_ads_object","{}"],["set","vidorev_jav_plugin_video_ads_object_post","{}"]],"txxx.fr":[["acs","setTimeout","hommy.mutation.mutation"],["aopr","jwplayer.utils.Timer"],["rmnt","script","/nopop|spot\\.url|exoclick|_plBtnExclude|spot_id/"]],"txxxporn.tube":[["acs","adver"]],"ucanwatch.net":[["nowoif"]],"udebut.jp":[["noeval-if","/chp_?ad/"]],"ukiahdailyjournal.com":[["set","CnnXt.Event.fire","noopFunc"]],"umamusume.gg":[["rmnt","script","/__adblocker|html-load/"]],"up-load.io":[["noeval"],["nostif","nextFunction","2000"],["acs","document.querySelectorAll","popMagic"],["acs","parseInt","break;case $."]],"upfiles.co.uk":[["acs","Math","break;case $."]],"uploadbuzz.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uqload.com":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"urlbluemedia.net":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"userupload.es":[["rmnt","script","/adbl/i"],["noeval-if","/chp_?ad/"]],"usp-forum.de":[["nostif",".call(null)","10"]],"uvnc.com":[["acs","addEventListener","nextFunction"]],"uwatchfree.fr":[["aeld","","_0x"],["acs","parseInt","break;case $."]],"vandaaginside.nl":[["set","Object.prototype.ADBLOCK_DETECTION",""],["no-xhr-if","/ad/"]],"vedbom.nl":[["acs","JSON.parse","break;case $."]],"ver-pelis.de":[["nowoif"],["acs","decodeURI","decodeURIComponent"]],"ver-pelis.it":[["nowoif"],["acs","decodeURI","decodeURIComponent"]],"vgmlinks.com.br":[["aopr","initPu"]],"vibestreams.pl":[["rmnt","script","adserverDomain"],["nowoif","_blank"],["aeld","click","popunder"]],"vicenzatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"vid4up.fr":[["nowoif"]],"vidembed.com":[["acs","JSON.parse","break;case $."]],"vidembed.nl":[["acs","JSON.parse","break;case $."]],"videodidixx.com":[["noeval-if","/chp_?ad/"]],"videzz.net":[["nostif","console.clear"],["set","isAdBlockDetected","false"],["set","pData.adblockOverlayEnabled","0"]],"vidsrc.it":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","FingerprintJS"],["acs","addEventListener","HTMLAllCollection"],["nosiif","/0x|sandCheck/"],["nowoif"],["aopr","__Y"],["aopr","AaDetector"],["aopr","Adcash"],["rmnt","script","adserverDomain"]],"vikiporn.com":[["aeld","getexoloader"],["aopr","decodeURI"]],"vintagetube.es":[["aopr","popit"],["aeld","popstate","noPop"]],"viper.to":[["nowoif"]],"vipracing.it":[["acs","$","show"],["aopr","AaDetector"]],"vitadacelebrita.com":[["noeval-if","/chp_?ad/"]],"voiranime1.fr":[["noeval-if","/chp_?ad/"]],"voirfilms.net":[["aopw","smrtSB"],["nowoif"],["acs","atob","decodeURIComponent"]],"volconforum.com":[["rmnt","script","html-load.com"]],"vrcmods.com":[["nano-sib","timeLeft"],["nostif","height"],["nosiif","height"]],"vttpi.com":[["acs","document.createElement","adblock"]],"wanderingourworld.com":[["rmnt","script","/__adblocker|html-load/"]],"watch-series.it":[["acs","Math","XMLHttpRequest"],["nowebrtc"],["nowoif"],["set","console.clear","trueFunc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watchcartoononline.com.br":[["acs","document.documentElement","break;case $."],["nofab"],["acs","document.createElement","jsc.mgid.com"]],"watchseries.nl":[["acs","Math","XMLHttpRequest"],["nowebrtc"],["nowoif"],["set","console.clear","trueFunc"],["aopr","Adcash"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","popMagic"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"watchseries1.org":[["acs","document.querySelectorAll","popMagic"],["acs","document.documentElement","break;case $."]],"watchtvchh.it":[["acs","setTimeout","admc"]],"webcreator-journal.com":[["acs","document.addEventListener","google_ad_client"],["nostif","getComputedStyle"]],"weirdunsocializedhomeschoolers.com":[["rmnt","script","/__adblocker|html-load/"]],"welsh-dictionary.ac.uk":[["set","fingerprint","{}"],["set","get_fingerprint","noopFunc"]],"wetravelwebond.com":[["rmnt","script","/__adblocker|html-load/"]],"whisperingauroras.com":[["aopr","AaDetector"]],"whiteoutdata.com":[["rmnt","script","/__adblocker|html-load/"]],"wholelifestylenutrition.com":[["rmnt","script","/__adblocker|html-load/"]],"wikitechy.com":[["noeval-if","/chp_?ad/"]],"willow.arlen.icu":[["nowoif"]],"wmoviesfree.es":[["acs","JSON.parse","break;case $."]],"wolverineforums.com":[["rmnt","script","html-load.com"]],"worldgirlsportal.com":[["acs","Math","break;case $."]],"wort-suchen.de":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"wvt24.top":[["noeval-if","/chp_?ad/"]],"www.cc.com":[["no-fetch-if","imasdk.googleapis.com"],["no-xhr-if","imasdk.googleapis.com"]],"xberuang.it":[["set","safelink.adblock","false"],["nano-sib"]],"xberuang.org":[["set","safelink.adblock","false"],["nano-sib"]],"xberuang.pl":[["set","safelink.adblock","false"],["nano-sib"]],"xcamcovid.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"xhaccess.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster1.com.br":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster12.com.br":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster15.ru":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster4.net":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmovies.net":[["acs","Math","break;case $."]],"y-2mate.com":[["acs","parseInt","break;case $."]],"y2mate.co.uk":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopw","afStorage"],["nowoif"],["aopr","mm"]],"y2mate.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopw","afStorage"],["nowoif"],["aopr","mm"]],"yellowbridge.com":[["nostif","blocker"],["set","isContentBlocked","falseFunc"]],"yggtorrent.pl":[["aopw","Fingerprint2"]],"yomovies1.de":[["aeld","","break;case $."]],"youporn.org":[["set","page_params.holiday_promo","true"]],"yourpatientvoice.com":[["rmnt","script","html-load.com"]],"youtube.com":[["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"youtubedownloader.nl":[["nowoif"]],"yoututosjeff.com.br":[["aopw","adBlockDetected"],["aeld","load","2000"]],"youvegotthismath.com":[["rmnt","script","/__adblocker|html-load/"]],"yoyofilmeys.ru":[["acs","parseInt","break;case $."]],"ytmp3.com.br":[["nowoif"]],"ytmp3.es":[["nowoif"]],"ytmp3eu.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"zeefiles.ru":[["ra","onclick","[onclick^=\"window.open\"]"],["nano-stb","tick"],["nowoif"]],"zoro.es":[["nowoif"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
