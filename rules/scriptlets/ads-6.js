/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"007stockchat.com":[["nosiif","daadb"]],"111.90.151.26":[["aopr","preroll_helper.advs"],["acs","jQuery","magnificPopup"]],"1111fullwise.fr":[["acs","JSON.parse","break;case $."]],"111watcho.com":[["acs","JSON.parse","break;case $."]],"123anime.ru":[["aopr","glxopen"],["acs","setTimeout","popi"],["nowoif"]],"123gostream.es":[["acs","Math","break;case $."]],"123moviesc.de":[["aopr","mm"],["acs","JSON.parse","break;case $."]],"123moviesonline.org":[["acs","navigator","break;case $."]],"1337x.unblock2.xyz":[["aopr","btoa"],["aopr","open"],["aopr","Math.floor"]],"17track.net":[["set","ga.sendGaEvent","noopFunc"]],"1primewire.ru":[["aeld","","break;case $."]],"1stream.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","setTimeout","admc"],["acs","document.createElement","script"],["nostif","admc"]],"24pdd.ru":[["noeval-if","/chp_?ad/"]],"2ddl.com":[["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"350z-tech.com":[["rmnt","script","html-load.com"]],"365cincinnati.com":[["rmnt","script","/__adblocker|html-load/"]],"3dhentai.club":[["acs","document.querySelectorAll","popMagic"]],"560pmovie.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"700rifle.com":[["rmnt","script","html-load.com"]],"7hitmovies.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"7mmtv.it":[["aopr","doOpen"]],"9ketsuki.info":[["noeval-if","/chp_?ad/"]],"9xmovies.com":[["rmnt","script",";}}};break;case $."],["nowoif"]],"9xupload.net":[["nano-stb"],["acs","parseInt","break;case $."],["aeld","","/_0x|localStorage\\.getItem/"]],"acervodaputaria.com.br":[["acs","decodeURI","decodeURIComponent"]],"acortalo.net":[["nofab"],["nano-sib","","","0"],["set","clicked","true"],["set","eClicked","true"],["set","number","0"],["set","sync","true"]],"actvid.com":[["acs","addEventListener","HTMLAllCollection"]],"addicted2decorating.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adelaidepawnbroker.com":[["set","page_params.holiday_promo","true"]],"adhs-zentrum.de":[["nostif","/Werbeblocker|refresh\\\\/"],["set","cwAdblockDisabled","true"]],"adshort.it":[["aopw","Fingerprint2"],["nowoif"],["set","blurred","false"],["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"adyou.com.br":[["aeld","/^(?:click|mousedown)$/","bypassEventsInProxies"]],"afl3ua5u.xyz":[["nowoif"],["acs","Math","localStorage['\\x"]],"ahoramismo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ak4eg.pl":[["acs","document.documentElement","break;case $."],["aeld","load","onload"],["acs","u_cfg"]],"alexsportss.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"aliancapes.de":[["nostif","nextFunction","2000"]],"allcalidad.co.uk":[["acs","doOnce"],["aeld","","0x"],["aopw","smrtSB"],["set","btoa","null"],["ra","href","#clickfakeplayer"],["aeld","click","popMagic"],["acs","Math","zfgloaded"]],"allcalidad.nl":[["acs","doOnce"],["aeld","","0x"],["aopw","smrtSB"],["set","btoa","null"],["ra","href","#clickfakeplayer"],["aeld","click","popMagic"],["acs","Math","zfgloaded"]],"allcelebritywiki.com":[["noeval-if","/chp_?ad/"]],"ambitiouskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"androgamer.org":[["acs","jQuery","ai_adb"]],"androidsite.net":[["aopr","open"]],"andyday.it":[["acs","EventTarget.prototype.addEventListener","delete window"]],"anifast.co":[["acs","addEventListener","HTMLAllCollection"]],"animefire.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"animepornfilm.com":[["aopr","popit"],["aeld","popstate","noPop"]],"animesa.nl":[["set","adblock_use","false"]],"animesanka.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"animestotais.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"animetak.de":[["acs","JSON.parse","break;case $."]],"animexxxfilms.com":[["aopr","popit"],["aeld","popstate","noPop"]],"animeyt.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"animixplay.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"anonymous-links.com":[["acs","String.fromCharCode","/btoa|break/"]],"arabseed.fr":[["aeld","","_0x"],["acs","Promise","break;case $."]],"arenavision.it":[["nowoif"],["acs","JSON.parse","break;case $."]],"ariyaforums.com":[["rmnt","script","html-load.com"]],"artforum.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"asialiveaction.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"asianplay.de":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"asianporntube69.com":[["aopr","document.dispatchEvent"]],"asiansex.net":[["aopr","popit"],["aeld","popstate","noPop"]],"aspdotnet-suresh.com":[["aeld","load","onload"]],"atglinks.com":[["rmnt","script","/aclib|break;|zoneNativeSett/"],["aopr","detectAdBlock"],["set","blurred","false"]],"atomixhq.de":[["aopw","adcashMacros"],["nowoif","!/download\\/|link/"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"atomohd.de":[["nowoif","!atomtt"],["acs","setTimeout","admc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"aussenwirtschaftslupe.de":[["nostif",".call(null)","10"]],"autosport.nl":[["noeval-if","/chp_?ad/"]],"autotrader.nl":[["nostif",".call(null)","10"]],"avoiderrors.com":[["nostif","css_class.show"]],"azsoft.co.uk":[["aopr","SMart1"],["noeval-if","chp_ad"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"]],"babytorrent.com.br":[["aopr","decodeURI"]],"bailbondsfinder.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"bakingupmemories.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barkinganddagenhampost.co.uk":[["set","adLight","true"]],"bbwfest.com":[["acs","document.querySelectorAll","popMagic"]],"bcanepaltu.com":[["noeval-if","/chp_?ad/"]],"bdiptv.it":[["aopr","AaDetector"],["nowoif"],["acs","Math","break;case $."]],"bdiptv.pl":[["aopr","AaDetector"],["nowoif"],["acs","Math","break;case $."]],"bdmusic28.net":[["acs","document.documentElement","break;case $."]],"bdmusic28.org":[["acs","document.documentElement","break;case $."]],"beautymunsta.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestgames.com":[["nostif","/Adb|moneyDetect/"]],"bflix.es":[["rmnt","script",";}}};break;case $."],["rmnt","script","popup"]],"binghamtonhomepage.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"bisceglielive.it":[["nostif","#rbm_block_active","1000"]],"blessherheartyall.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluemediafiles.pl":[["aopr","open"],["nano-sib","i--"],["set","Time_Start","0"]],"bolly2tolly.ru":[["acs","document.documentElement","break;case $."]],"bollyshare.pl":[["acs","Math","break;case $."]],"bookishgoblin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"borrowedbites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brightpets.org":[["noeval-if","/chp_?ad/"]],"buildyourbite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burncitysports.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"butterhand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"c.newsnow.com":[["rmnt","script","/^/gms","excludes","__INITIAL_STATE__"]],"camarozone.com":[["rmnt","script","html-load.com"]],"camwhorestv.co.uk":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"]],"cap3.ru":[["nowoif","popup="],["aeld","click","setTimeout"],["aeld","click","()}","elements",".art-control-fullscreen"]],"capital.de":[["aeld","load","autoRecov"]],"car.com":[["aopw","_sp_"]],"cattleforum.com":[["rmnt","script","html-load.com"]],"celiacandthebeast.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"celibook.com":[["aopr","decodeURI"]],"chrono.quest":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ciberdvd.org":[["nowoif"],["aopw","smrtSB"]],"cinemalibero.co.uk":[["nowoif"],["aopr","AaDetector"]],"cinen9.de":[["acs","Math","break;case $."]],"clampschoolholic.it":[["acs","JSON.parse","break;case $."]],"classbforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clickndownload.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"cloudgallery.net":[["aopr","AaDetector"],["aopr","console.clear"]],"contractortalk.com":[["rmnt","script","html-load.com"]],"cookrepublic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cottageonbunkerhill.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"couponingtodisney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cracking.org":[["acs","$","samAdBlockAction"],["acs","RegExp","googlebot"]],"craftymorning.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cricstream.com.br":[["rmnt","script",";}}};break;case $."]],"cricstream.ru":[["rmnt","script",";}}};break;case $."]],"crictime.es":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"crohasit.de":[["aopw","Fingerprint2"]],"cruiseradio.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ctrlv.de":[["set","uBlockOriginDetected","false"],["no-fetch-if","doubleclick"]],"cumbrialife.co.uk":[["set","adLight","true"]],"cutnmakecrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cyberleaks.it":[["nowoif"]],"daddylive1.nl":[["acs","document.documentElement","break;case $."],["rmnt","script","popundersPerIP"]],"dailypost.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"],["nano-stb","native code","15000","0.001"],["nano-stb","(null)","5000","0.001"]],"dailysport.fr":[["acs","String.fromCharCode","atob"],["aopr","AaDetector"],["aopr","open"]],"dciuu.net":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"decanter.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"deezer.com":[["nostif","Ads"],["set","smartLoaded","true"]],"delo.bg":[["aopr","wpsite_clickable_data"]],"desivdo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"detroitsportsforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dgcoursereview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"digiztechno.com":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"discussfastpitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"divxtotal1.pl":[["acs","jQuery","btoa"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dixiedelightsonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dodz.org":[["nowoif"]],"doodss.de":[["nowoif"]],"doodstream.fr":[["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"doomovie-hd.it":[["set","adSettings","[]"]],"doooood.org":[["nowoif"]],"douploads.net":[["acs","$","show"],["ra","checked","input#chkIsAdd"]],"draftsim.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dramanice.org":[["acs","Math","break;case $."]],"dreamspiritual.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drinksmixer.com":[["set","Date.now","noopFunc"]],"dropgalaxy.org":[["nowoif"]],"dulichkhanhhoa.net":[["no-fetch-if","googlesyndication"]],"dz4soft.fr":[["noeval"],["aeld","load","2000"]],"dziennikpolski24.pl":[["aeld","","show"]],"eatlikebourdain.com":[["rmnt","script","/__adblocker|html-load/"]],"ebookmed.co.uk":[["aeld","load","2000"]],"efukt.com":[["aeld","click","preventDefault"],["nostif","_0x","2000"],["aopr","open"]],"egybest.co.uk":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"egybest.net":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"elavegan.com":[["rmnt","script","/__adblocker|html-load/"]],"electronicdrumadvisor.com":[["rmnt","script","/__adblocker|html-load/"]],"embedplayer.co.uk":[["acs","document.documentElement","break;case $."]],"embtaku.fr":[["acs","document.documentElement","break;case $."]],"embtaku.it":[["acs","document.documentElement","break;case $."]],"emergencyprepguy.com":[["rmnt","script","/__adblocker|html-load/"]],"emisoras-puertorico.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"enciclopediaonline.com":[["aost","String.prototype.charCodeAt","ai_"]],"encurtalink.fr":[["aopr","mm"],["set","blurred","false"]],"epochtimes.de":[["nostif",".call(null)","10"]],"eurostream.com":[["nowoif"]],"eurostream.fr":[["nowoif"]],"eurostream.pl":[["nowoif"]],"ev01.to":[["rmnt","script","{delete window["]],"exe-urls.com":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"famivita.com.br":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fansided.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"faselhdwatch.pl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"fast-dl.es":[["nowoif"]],"fat-bike.com":[["aopr","wpsite_clickable_data"]],"fattubevideos.net":[["acs","document.querySelectorAll","popMagic"]],"fbstreams.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"filecrypt.org":[["acs","EventTarget.prototype.addEventListener","key in document"],["rmnt","script","{delete window["],["set","isAdblock","false"],["ra","onclick","button[id][onclick*=\".html\"]"],["rmnt","script","localStorage.setItem"]],"filepress.com.br":[["aeld","","break;case $."],["aost","String.prototype.charCodeAt","/(?=^(?!.*(jquery|turnstile|challenge-platform)))/"],["aeld","blur","console.log"]],"filmeseries.pl":[["acs","navigator","break;case $."]],"filmlinks4u.de":[["aeld","","break;case $."]],"filmyfly.com.br":[["acs","EventTarget.prototype.addEventListener","delete window"]],"filmyhit.ru":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"fineretroporn.com":[["noeval"],["aopr","Aloader.serve"]],"fitandfabliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flizmovies.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"flizmovies.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"foodnouveau.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodpleasureandhealth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballrumors.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fordgt500.com":[["rmnt","script","html-load.com"]],"forexrw7.com":[["noeval-if","/chp_?ad/"],["nano-stb","/.?/","*","0.001"],["nano-sib","/.?/","*","0.001"]],"fourwheeltrends.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fox4kc.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"freehdinterracialporn.in":[["aopr","decodeURI"]],"freetoursbyfoot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ftuapps.es":[["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"fuckingfast.fr":[["set","window.adLink","null"],["acs","JSON.parse","localStorage._d"],["aeld","click","blank"],["rmnt","script","\"+\""],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"fuckingfast.it":[["set","window.adLink","null"],["acs","JSON.parse","localStorage._d"],["aeld","click","blank"],["rmnt","script","\"+\""],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"funnymadworld.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"g3g.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"gameknot.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"games.idahostatesman.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.wtop.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games2rule.com":[["ra","target"]],"gameshop4u.com":[["rmnt","script","/_0x|brave|onerror/"]],"gdriveplayer.fr":[["aopr","AaDetector"],["nowoif","!gdrivedownload"],["acs","EventTarget.prototype.addEventListener","delete window"]],"genesisg70forum.com":[["rmnt","script","html-load.com"]],"gettapeads.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"giantshemalecocks.com":[["aopr","document.dispatchEvent"]],"gixxer.com":[["rmnt","script","html-load.com"]],"globes.co.il":[["set","document.blocked_var","1"],["set","____ads_js_blocked","false"]],"go.fakta.id":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com|googlesyndication|pubadx/","{\"type\": \"cors\"}"],["nowoif","_blank"],["nano-sib","/.?/","*"],["nano-stb","/.?/","*"]],"godmods.com":[["aopw","mdp_deblocker"]],"gogoanimetv.org":[["aopr","AaDetector"],["nosiif","_0x"],["nowoif"]],"gogoplay.com.br":[["acs","JSON.parse","break;case $."]],"gol245.online":[["nowoif"]],"gomovies.co.uk":[["nowoif"],["set","check_adblock","true"],["aopr","mm"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","addEventListener","HTMLAllCollection"]],"gomoviesc.com.br":[["nowoif"]],"googleapis.com.de":[["aeld","click","_0x"]],"gosemut.ru":[["nowoif"]],"gototub.nl":[["nowoif"]],"growtomato.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guide2free.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hachiraw.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"handgunforum.net":[["rmnt","script","html-load.com"]],"happi.com":[["acs","$","#pageWrapper"]],"hardrockforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"harrowtimes.co.uk":[["set","adLight","true"]],"hdfilme.fr":[["acs","Math","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"hdfilmizlesen.com":[["acs","document.addEventListener","initPop"],["set","app._data.ads","[]"]],"hdfriday.ru":[["aopr","open"],["acs","document.documentElement","break;case $."]],"hdmotori.it":[["nostif","CANG","3000"]],"hdmovieplus.de":[["acs","String.fromCharCode","/btoa|break/"]],"hdmoviesfair.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"hdmoviesfair.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"hdmoviesfair.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"hdvid.net":[["aopw","atOptions"],["aost","String.fromCharCode","stackDepth:3"],["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"hearthandvine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai-senpai.pl":[["acs","document.querySelectorAll","popMagic"]],"hentaifreak.org":[["aopr","decodeURI"],["aopw","onpopstate"],["nostif","popState"]],"herzporno.com.br":[["aeld","getexoloader"]],"hextank.io":[["set","aipAPItag.prerollSkipped","true"],["set","aipAPItag.setPreRollStatus","trueFunc"]],"hikvision.com":[["set","pa","{}"],["set","pa.getVisitorId","noopFunc"],["set","pa.sendEvent","noopFunc"]],"hinatasoul.com":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"historic-uk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"holisticfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homecookingcollective.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hondaatvforums.net":[["rmnt","script","html-load.com"]],"hondarebelforum.com":[["rmnt","script","html-load.com"]],"hornyhill.com.br":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"],["set","HTMLImageElement.prototype.onerror","undefined"],["nowoif"]],"hotmasti.de":[["acs","parseInt","break;case $."],["aeld","","break;case $."]],"hotmasti.fr":[["acs","parseInt","break;case $."],["aeld","","break;case $."]],"howtodisney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtorefinishfurniture.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hubdrive.com.br":[["aeld","DOMContentLoaded","script[data-domain="],["nowoif"],["aeld","","history.go"]],"huskermax.com":[["rmnt","script","adblockerDisabled","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hyperdebrid.com.br":[["acs","decodeURI","atob"]],"icelz.to":[["aopw","Adcash"]],"ilforumdeibrutti.is":[["nostif","AdBlock"],["rmnt","script","adblock"]],"ilpescara.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"imgrock.es":[["nowoif"],["aopr","CustomEvent"],["aopr","popjs.init"],["aopw","Fingerprint2"],["nano-stb","/.?/","4000"],["popads-dummy"]],"imgview.de":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"imgview.net":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"immigrantstable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"indianpornvideos.com":[["aopr","exoJsPop101"]],"indoav.app":[["nowoif","_blank","1"]],"infor.pl":[["rmnt","script","html-load.com"]],"interculturalita.it":[["noeval-if","/chp_?ad/"]],"internetradio-horen.de":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"iphoneincanada.ca":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","adblockerDisabled","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iptvspor.com":[["aopr","adBlockDetected"]],"iputitas.net":[["aopr","afScript"]],"irv2.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"isixsigma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itopmusic.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["noeval-if","/chp_?ad/"]],"j.gs":[["aopw","Fingerprint2"]],"jaiefra.com":[["aopr","adBlockDetected"]],"javjavhd.com":[["acs","document.querySelectorAll","popMagic"]],"javrave.club":[["acs","document.querySelectorAll","popMagic"]],"jeanelleats.com":[["rmnt","script","/__adblocker|html-load/"]],"jkanime.org":[["nowoif"],["acs","JSON.parse","break;case $."]],"jonathanzaragoza.com":[["rmnt","script","/__adblocker|html-load/"]],"juliescafebakery.com":[["rmnt","script","/__adblocker|html-load/"]],"justbcrafty.com":[["rmnt","script","/__adblocker|html-load/"]],"kagane.org":[["nowoif"]],"kat.es":[["aeld","","break;case $."],["aopw","ospen"]],"katfile.pl":[["nowoif"],["aeld","click","open"],["nano-stb","tick"],["nostif","/adblock/i"],["set-cookie","ads","10"],["set","download_click","true"],["rmnt","script","name="]],"kattracker.fr":[["aeld","","break;case $."],["aopw","ospen"]],"keepvid.pw":[["nowoif"]],"key-hub.eu":[["no-fetch-if","ads"],["nostif","gaData"]],"kickassanime.es":[["rmnt","script","globalThis;break;case"],["acs","document.documentElement","break;case $."],["set","ifmax","true"]],"kickasskat.pl":[["aeld","","break;case $."],["aopw","ospen"]],"kindergeld.org":[["nostif",".call(null)","10"]],"kiss-anime.it":[["nowebrtc"],["acs","JSON.parse","break;case $."]],"kitchinsider.com":[["rmnt","script","/__adblocker|html-load/"]],"kkickass.pl":[["aeld","","break;case $."],["aopw","ospen"]],"klubsports.de":[["aeld","","break;case $."],["acs","document.documentElement","break;case $."]],"kmansin09.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"koora.vip":[["acs","document.documentElement","break;case $."]],"kpreps.com":[["rmnt","script","/__adblocker|html-load/"]],"lancewhosedifficult.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"lanjutkeun.fr":[["aeld","load","2000"]],"lanjutkeun.it":[["aeld","load","2000"]],"laptechinfo.com":[["nostif","show"]],"latribunadeautomocion.es":[["aost","String.prototype.charCodeAt","ai_"]],"layardrama21.net":[["noeval-if","ads"]],"leakshaven.com":[["no-fetch-if","googlesyndication"]],"leechall.it":[["nano-sib"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"legallyhealthyblonde.com":[["rmnt","script","/__adblocker|html-load/"]],"letthemeatgfcake.com":[["rmnt","script","/__adblocker|html-load/"]],"lettyskitchen.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"libertestreamvf.com":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"lifeandstylemag.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"link.djbassking.live":[["nano-sib","/.?/","*","0.02"]],"linkos.de":[["nowoif"]],"linkshorts.de":[["aopr","open"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","String.fromCharCode","/btoa|break/"]],"live7v.com":[["acs","JSON.parse","break;case $."]],"livesimply.me":[["rmnt","script","/__adblocker|html-load/"]],"llanfairpwllgwyngy.com":[["acs","document.addEventListener","POP_URL"]],"lne.es":[["nostif","ipod"],["nostif","sub"]],"lordpremium.co.uk":[["aeld","load","nextFunction"]],"lordpremium.pl":[["aeld","load","nextFunction"]],"lustich.de":[["nostif",".call(null)","10"]],"lynkcoforum.com":[["rmnt","script","html-load.com"]],"macombdaily.com":[["set","CnnXt.Event.fire","noopFunc"]],"madden-school.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"magnetdl.net":[["nowoif","!magnetdl.","1"]],"malaysiastock.biz":[["aopr","google_ad_status"]],"mangarawjp.es":[["aeld","","break;case $."],["acs","WebAssembly","atob"],["aopw","__aaZoneid"]],"masaporn.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"maths.media":[["no-fetch-if","googlesyndication"]],"mavplay.fr":[["aopr","jwplayer.utils.Timer"],["aopr","__Y"],["aopw","adcashMacros"],["aopr","mm"],["nowoif"],["acs","globalThis","break;case"]],"mboost.me":[["nano-stb","setinteracted","2000"],["ra","href",".MediaStep","stay"]],"mealplanpros.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medebooks.xyz":[["nostif","ai_adb"]],"mega4up.nl":[["ra","onclick","[onclick^=\"window.open\"]"],["nowoif"],["acs","Math","break;case $."]],"mega4up.ru":[["ra","onclick","[onclick^=\"window.open\"]"],["nowoif"],["acs","Math","break;case $."]],"megawypas.com":[["acs","document.addEventListener","google_ad_client"]],"meghanmakesdo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mejortorrento.com.br":[["nowebrtc"],["aeld","click","popMagic"]],"meloradio.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"merrillfotonews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"metal-hammer.de":[["nostif",".call(null)","10"]],"mexa.es":[["acs","document.getElementById","adblockinfo"],["nowoif"]],"mhdsports.co.uk":[["acs","document.documentElement","break;case $."],["rmnt","script","deblocker"],["aost","fetch","HTMLDocument"]],"mhdtvworld.ru":[["rmnt","script","deblocker"]],"minhaconexao.com.br":[["set","canRunAds","true"],["no-xhr-if","doubleclick"]],"missallieskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mkvpapa.com":[["acs","parseInt","break;case $."]],"mlwbd.nl":[["noeval-if","ads"],["ra","type","input[value^=\"http\"]"],["acs","document.documentElement","break;case $."]],"modsbase.com":[["nowebrtc"],["rmnt","script","html-load.com"]],"momlifetoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motchill.es":[["aeld","click","popactive"]],"motofan-r.com":[["noeval-if","/chp_?ad/"]],"moviebaaz.de":[["acs","document.documentElement","break;case $."]],"movieruls.co.uk":[["nowoif"]],"movieruls.it":[["nowoif"]],"movierulzs.co.uk":[["nowoif"]],"movies2k.nl":[["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."]],"movies4u3.de":[["acs","document.documentElement","break;case $."],["nowoif"],["aopr","antiAdBlockerHandler"]],"movies4u3.ru":[["acs","document.documentElement","break;case $."],["nowoif"],["aopr","antiAdBlockerHandler"]],"moviesden.net":[["aeld","","break;case $."]],"moviesjoy.com.br":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","mm"],["nowoif"]],"moviesjoy.ru":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","mm"],["nowoif"]],"moviesnation.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopw","onpopstate"],["nowoif","_blank"]],"moviespapa.co.uk":[["rmnt","script",";}}};break;case $."],["aost","XMLHttpRequest","/inlineScript|stackDepth:1/"]],"moviesshub.net":[["acs","Math","break;case $."],["no-fetch-if","adsbygoogle"]],"moviessources.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","devtoolschange"],["aopr","console.clear"]],"moviezwaphd.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"moviflex.com":[["acs","Math","XMLHttpRequest"],["nowoif"]],"mp3cut.net":[["aopw","ab_detected"]],"mrpiracy.es":[["acs","document.getElementById","deleted"],["aopr","LieDetector"],["nowoif"]],"munchiesbymallory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"my1ink.de":[["acs","JSON.parse","break;case $."]],"mydverse.nl":[["rmnt","script","antiAdBlockerHandler"]],"netoff.co.jp":[["set","_etmc","{}"],["set","_etmc.push","noopFunc"]],"netuplayer.it":[["nowoif"]],"newsherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"newslive.com":[["noeval"]],"nibelungen-kurier.de":[["set","nlf.custom.userCapabilities","false"]],"nishankhatri.es":[["noeval-if","/chp_?ad/"]],"nmb48-mtm.com":[["rmnt","script","html-load.com"]],"noithatmyphu.vn":[["no-fetch-if","googlesyndication"]],"nonsensediamond.fr":[["aopr","decodeURI"]],"notebookcheck.pl":[["aopw","ab_cl"],["nostif",".call(null)","10"],["rmnt","script","&&window,"]],"novablogitalia.com.br":[["aeld","load","nextFunction"]],"nowmovies.pl":[["acs","Math","break;case $."]],"ntv.org":[["rmnt","script","adserverDomain"]],"oaxacatraveltips.com":[["rmnt","script","/__adblocker|html-load/"]],"oceanofmovies.it":[["acs","JSON.parse","break;case $."]],"ohmymag.ru":[["aopr","_sp_._networkListenerData"],["rmnt","script","()=>eval"]],"olgasflavorfactory.com":[["rmnt","script","/__adblocker|html-load/"]],"olympustaff.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["noeval-if","/adblock/i"],["nostif","testAd"]],"onlinewatchmoviespk.nl":[["aeld","","break;case $."]],"onvid.co.uk":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"op-marburg.de":[["nostif",".call(null)","10"]],"opvid.com":[["nowoif"]],"oricon.co.jp":[["rmnt","script","html-load.com"],["rmnt","script","/\\(async\\(\\)=>\\{try\\{(const|var)/"]],"osteusfilmestuga.online":[["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"oubghas.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"]],"oursportscentral.com":[["rmnt","script","/__adblocker|html-load/"]],"ovester.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"oxy.org":[["acs","$","window.open"],["nosiif",".hide"],["acs","$","localStorage"]],"oyohd.com":[["nowoif"]],"pagalworld.com.br":[["acs","JSON.parse","break;case $."]],"pahe.nl":[["nowoif"],["aeld","","_0x"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["],["rmnt","script","documentElement"]],"pandamovie.es":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"pasokau.com":[["noeval-if","/chp_?ad/"]],"pawastreams.es":[["nowoif"]],"pawsnpups.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"payt.com":[["acs","document.createElement","script"]],"pearforum.com":[["rmnt","script","html-load.com"]],"pelishouse.org":[["ra","href","#clickfakeplayer"]],"perfectmomsporn.com":[["aopr","Aloader"],["noeval"]],"pilibook.com":[["aeld","","popMagic"]],"pinsandprocrastination.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pizzablab.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playthetunes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plumpxxxtube.com":[["acs","document.querySelectorAll","popMagic"]],"pnwmoto.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"poemsource.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"poop.nl":[["nowoif"]],"popularrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pornfetishbdsm.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornfits.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornhoarder.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/wpadmngr|adserverDomain/"]],"pornohubonline.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"poscitech.pl":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["nowoif"],["acs","setTimeout","admc"]],"povvvideo.co.uk":[["nowoif"]],"preservationtalk.com":[["rmnt","script","html-load.com"]],"primevideo.com":[["set","ue_adb_chk","1"]],"projuktirkotha.com":[["noeval-if","/chp_?ad/"]],"proxytpb.com":[["aeld","/^(?:click|mousedown)$/","_0x"]],"qcheng.cc":[["aopr","killAdKiller"]],"racaty.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["aopw","Fingerprint2"],["nowebrtc"]],"radiozet.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"rainanime.com":[["aopr","loadRunative"]],"ramevforum.com":[["rmnt","script","html-load.com"]],"rdxhd1.com.br":[["aeld","","/_0x|localStorage\\.getItem/"]],"rdxhd1.it":[["aeld","","/_0x|localStorage\\.getItem/"]],"read.amazon.pl":[["set","canRunAds","1"],["set","ue_adb_chk","1"]],"readcomiconline.li":[["rmnt","script","{delete window["]],"receptyonline.cz":[["noeval-if","/chp_?ad/"]],"redesigndaily.com":[["set","loadShield","noopFunc"]],"religiousforums.com":[["rmnt","script","/__adblocker|html-load/"]],"reptileforums.co.uk":[["rmnt","script","html-load.com"]],"review42.com":[["rmnt","script","/__adblocker|html-load/"]],"rheinische-anzeigenblaetter.de":[["nostif",".call(null)","10"]],"ridvanmau.com":[["aopw","adBlockDetected"]],"rojadirecta.de":[["aopw","closeMyAd"],["aopw","smrtSP"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["nowoif"]],"roleplayer.me":[["rmnt","script","html-load.com"]],"ryxy.online":[["no-fetch-if","adblock.js"]],"samfordsports.com":[["set","blockAdBlock","trueFunc"]],"sanet.co.uk":[["rmnt","script","adserverDomain"]],"sattaguess.com":[["set","detectAdBlock","noopFunc"]],"savoringthegood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savorylotus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savoryspin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sawdustgirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sbflix.fr":[["aopr","__Y"],["aopr","mm"]],"scansatlanticos.com":[["noeval-if","/chp_?ad/"]],"seamanmemories.com":[["aost","String.prototype.charCodeAt","ai_"]],"seeeed.org":[["acs","Promise","break;case $."]],"seirsanduk.fr":[["popads-dummy"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sekunde.lt":[["rmnt","script","html-load.com"]],"selfstudybrain.com":[["no-fetch-if","googlesyndication"]],"serial1forum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"seriesflixhd.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sexontheboat.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"sexykittenporn.com":[["aopr","loadTool"],["aopr","ExoLoader"],["ra","href","[href*=\"ccbill\"]"]],"shahi4u.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sharedisk.es":[["acs","document.documentElement","break;case $."]],"shid4u.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"short-url.link":[["aeld","click","read_cookie"],["nano-sib"]],"shrink-service.it":[["aopr","open"]],"shrinkearn.com":[["aopr","open"]],"sk8therapy.fr":[["noeval-if","/chp_?ad/"]],"slawoslaw.pl":[["noeval-if","/chp_?ad/"]],"slowcookerclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smashkarts.io":[["set","adblockDetected","false"]],"sms24.de":[["aost","$ado","/ado/i"],["aost","document.createElement","app.js"]],"sms24.ru":[["aost","$ado","/ado/i"],["aost","document.createElement","app.js"]],"soapoperaspy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"solomax-levelnewbie.ru":[["acs","document.querySelectorAll","popMagic"]],"songs.net":[["aopr","AaDetector"]],"sound-park.fr":[["acs","$","open"],["acs","document.createElement","script"]],"soundpark-club.co.uk":[["acs","$","open"],["acs","document.createElement","script"]],"soundpark.com.br":[["acs","$","open"],["acs","document.createElement","script"]],"soundpark.fr":[["acs","$","open"],["acs","document.createElement","script"]],"soundpark.it":[["acs","$","open"],["acs","document.createElement","script"]],"souq-design.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["no-fetch-if","/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["no-xhr-if","/doubleclick|googlesyndication/"]],"soy502.com":[["acs","document.getElementById","length"]],"space-faucet.com":[["noeval-if","/chp_?ad/"]],"sportbar.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."]],"sportico.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"sportlemonx.de":[["aopr","decodeURI"]],"sports24.de":[["acs","String.fromCharCode","/btoa|break/"]],"sportsembed.it":[["acs","setTimeout","admc"]],"sportshub.ru":[["acs","document.documentElement","break;case $."]],"sportskart.com.br":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["aopr","afScript"]],"sporttunatv.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"spreadsheetpoint.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spy-x-family.nl":[["acs","document.querySelectorAll","popMagic"]],"squeaksandnibbles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sshconect.com.br":[["acs","addEventListener","nextFunction"]],"steyrclub.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stocktrades.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"strcloud.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"streamhd247.co.uk":[["acs","document.documentElement","break;case $."]],"streamingclic.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"streamingcommunityz.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"streampiay.org":[["nowoif"]],"strtapeadblock.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"strtapewithadblock.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["nowoif"],["aopr","Adcash"]],"sugargeekshow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superpackpormega.com":[["noeval-if","/chp_?ad/"]],"superpsx.com":[["no-xhr-if","googlesyndication"],["aost","document.getElementById","adsBlocked"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["set","penciBlocksArray","[]"],["acs","b2a"]],"supervideo.ru":[["aopr","AaDetector"]],"sureketo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"susanexpectcare.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"sushi-scan.ru":[["nostif","show"]],"swame.com":[["set","is_adblocked","false"]],"sweetlysplendid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"t-online.de":[["nostif",".call(null)","10"],["set","abp","false"]],"tabooflix.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"taigoforum.de":[["acs","$",".show"]],"talkbudgies.com":[["rmnt","script","html-load.com"]],"talkclassical.com":[["rmnt","script","html-load.com"]],"tamilprint.co.uk":[["acs","parseInt","break;case $."]],"tamilprint30.it":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"tamilyogi.nl":[["acs","String.fromCharCode","shift"]],"tastycocktailrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teknorizen.de":[["set","safelink.adblock","false"]],"teleriumtv.net":[["nowoif"]],"teluguonlinemovies.com":[["nowoif"]],"telugusexkathalu.com":[["acs","document.querySelectorAll","popMagic"]],"tenacrebaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tenies-online.de":[["acs","JSON.parse","break;case $."],["aopr","mm"]],"ternitoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"terrainforum.net":[["rmnt","script","html-load.com"]],"thebeginningaftertheend.de":[["acs","document.querySelectorAll","popMagic"]],"thebudgetsavvybride.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebutteryfairytale.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theculinarycompass.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefrugalchicken.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theglobeandmail.com":[["aopw","adBlocker"]],"thekat.es":[["aeld","","break;case $."],["aopw","ospen"]],"thematbakh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themountainviewcottage.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenavagepatch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theproxy.pl":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"],["nowoif"],["aopr","_wm"]],"thepurplepumpkinblog.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therapybypro.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thespacebetweenblog.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thespectrum.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"theunbox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewimpyvegetarian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thotslife.com":[["acs","document.querySelectorAll","popMagic"]],"tideking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tinxahoivn.com":[["rmnt","script","myModal"]],"to-travel.net":[["nano-sib","/.?/","*","0.02"]],"todaypk.ru":[["acs","document.documentElement","break;case $."],["nowoif"]],"todaypktv.com":[["nowoif"]],"tokaiforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tokuzilla.net":[["ra","onclick","[onclick*=\"_blank\"]","complete"],["nowoif","_blank"],["aeld","click","overlay"]],"tomarnarede.pt":[["rmnt","script","deblocker"]],"tonsofthanks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tonspion.de":[["nostif","()","15000"]],"toonily.com":[["acs","addEventListener","HTMLAllCollection"]],"topflix.com.br":[["nano-sib"],["nowoif"],["aopr","console.clear"],["acs","parseInt","break;case $."]],"torrent9.es":[["aeld","","_0x"]],"torrentdownload.fr":[["acs","addEventListener","HTMLAllCollection"],["acs","adcashMacros"],["acs","JSON.parse","break;case"],["nowoif"]],"totalcsgo.com":[["rmnt","script","/adconfig/i"],["nowoif","_blank"]],"totalsportek.nl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","","open"]],"toyhabits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trilog3.net":[["noeval-if","/chp_?ad/"]],"troprockin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trucs-et-astuces.co":[["rmnt","script","await eval"]],"truestreetcars.com":[["rmnt","script","html-load.com"]],"trvlcollective.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tubedupe.com":[["aopr","ExoLoader"],["aeld","","midRoll"]],"turbo.cr":[["acs","WebAssembly","atob"]],"turbobuicks.com":[["rmnt","script","html-load.com"]],"turtleviplay.xyz":[["set","playID","1"],["aost","document.createElement","openNewTab"],["nowoif"]],"tvply.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"u26bekrb.fun":[["set","adBlockDetected","undefined"]],"unityassetcollection.com":[["nano-sib","secs"]],"unlvrebels.com":[["set","blockAdBlock","trueFunc"]],"unrealengine.com":[["no-xhr-if","/api/analytics"]],"upfiles.ru":[["acs","Math","break;case $."]],"uplinkto.es":[["acs","navigator","break;case $."]],"uproxy.com":[["acs","document.documentElement","break;case $."]],"uproxy.de":[["acs","document.documentElement","break;case $."]],"usagoals.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["nowoif"]],"utahconcealedcarry.com":[["rmnt","script","html-load.com"]],"vapley.org":[["nowoif"],["aopr","doSecondPop"]],"vexmovies.com.br":[["acs","String.fromCharCode","/btoa|break/"]],"vidembed.net":[["acs","JSON.parse","break;case $."]],"videobb.com.br":[["aopr","jwplayer.utils.Timer"],["aopr","__Y"],["aopw","adcashMacros"],["aopr","mm"],["aopr","glxopen"],["nowoif"],["acs","globalThis","break;case"]],"videoplayer.es":[["acs","document.documentElement","break;case $."]],"videovard.de":[["nowoif"],["aeld","mouseup","catch"],["nosiif","0x"],["aopr","FuckAdBlock"]],"vidhidepre.com":[["nowoif","!vidhidepre.com"]],"vido.it":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"vidorg.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"vintagetube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"vipstand.de":[["nowoif","//"]],"visalist.io":[["no-xhr-if","adsbygoogle"],["no-fetch-if","adsbygoogle"]],"vkmp3.nl":[["acs","JSON.parse","break;case $."]],"vkmp3.ru":[["acs","JSON.parse","break;case $."]],"wandsworthguardian.co.uk":[["set","adLight","true"]],"washingtonpost.com":[["acs","Promise","overlay"],["acs","document.createElement","overlay"],["rmnt","script","/\\badblock\\b/"]],"watch4hd.ru":[["aopr","open"],["acs","parseInt","break;case $."]],"watchonlinemoviespk.pl":[["acs","document.documentElement","break;case $."],["nowoif"]],"watchseries1.pl":[["acs","document.querySelectorAll","popMagic"],["acs","document.documentElement","break;case $."]],"watchseries9.net":[["aopr","mm"]],"watchseries9.org":[["aopr","mm"]],"watchserieshd.co.uk":[["acs","JSON.parse","break;case $."]],"watchserieshd.fr":[["acs","JSON.parse","break;case $."]],"watchsouthpark.tv":[["aopr","popns"],["aeld","","break;case $."]],"wavyhaircare.com":[["rmnt","script","/__adblocker|html-load/"]],"wcofun.org":[["nostif","AdBlock"],["set","isAdBlockActive","false"]],"web.de":[["rmnt","script","\"Anzeige\""],["aeld","timeupdate"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"webmaal.co.uk":[["set","univresalP","noopFunc"]],"westmanga.pl":[["rmnt","script","open"]],"whoreshub.com":[["acs","addEventListener","smartpop"]],"wildernessredefined.com":[["rmnt","script","/__adblocker|html-load/"]],"willyweather.it":[["rmnt","script","&&window,"]],"windowslite.net":[["set","blurred","false"],["set","go_popup","{}"]],"wisevoter.com":[["rmnt","script","error-report.com"]],"wnep.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wolfstream.pl":[["nowoif"]],"womanscribbles.net":[["rmnt","script","/__adblocker|html-load/"]],"womennaked.net":[["acs","document.querySelectorAll","popMagic"]],"workproductivityinfo.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"worldfree4u.net":[["nowoif"]],"worldsports.nl":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"worldwildschooling.com":[["rmnt","script","/__adblocker|html-load/"]],"wvnstv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"www.bankofamerica.com":[["no-fetch-if","smetrics.bankofamerica.com"]],"x1337x.pl":[["rmnt","script","adserverDomain"],["nowebrtc"],["nostif","location.href"]],"xhamster-art.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xhamster14.net":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster15.fr":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster18.org":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster46.net":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhtotal.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xpicse.com":[["acs","document.querySelectorAll","popMagic"]],"yamahastarstryker.com":[["rmnt","script","html-load.com"]],"yeptube.com":[["nowoif"]],"yeptube.com.br":[["nowoif"]],"yesmovies.nl":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["aeld","","break;case $."],["nowoif"],["aopr","AaDetector"],["nowebrtc"]],"yomovies.org":[["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","decodeURI"]],"yomovies1.net":[["aeld","","break;case $."]],"you-porn.com":[["set","page_params.holiday_promo","true"]],"youtube-nocookie.com":[["set","ytInitialPlayerResponse.playerAds","undefined"],["set","ytInitialPlayerResponse.adPlacements","undefined"],["set","ytInitialPlayerResponse.adSlots","undefined"],["set","playerResponse.adPlacements","undefined"],["json-prune","playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots important"],["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"youtubetowav.net":[["nowoif","_blank"]],"yupflix.com":[["acs","globalThis","break;case"],["rmnt","script","/bait|com\\.android\\.chrome/"]],"yuvideos.com":[["acs","document.querySelectorAll","popMagic"]],"zedge.net":[["nano-sib","l-1"]],"zetporn.com":[["aopr","ExoLoader.serve"],["acs","addEventListener","-0x"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
