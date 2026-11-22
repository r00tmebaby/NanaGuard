/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0123movie.com.br":[["aopr","AaDetector"],["acs","document.documentElement","break;case $."]],"1024teradl.com":[["set-session-storage-item","1024teradl:fetch-click-count","1"]],"10xflix.you":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"11xmovies.de":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","{delete window["]],"123movieshd.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","mm"],["set","p18","undefined"]],"1337x.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","adserverDomain"],["nowebrtc"],["nostif","location.href"]],"1377x.es":[["aopr","open"]],"18-teen-porn.com":[["aopr","document.dispatchEvent"]],"1919a4.com":[["rmnt","script","html-load.com"]],"1movieshd.com":[["acs","document.documentElement","break;case $."]],"1movieshd.com.br":[["acs","document.documentElement","break;case $."]],"1primewire.pl":[["aeld","","break;case $."]],"1stkissmanga.co.uk":[["acs","Math","break;case $."]],"1stkissmanga.es":[["acs","Math","break;case $."]],"1vid1shar.space":[["acs","document.documentElement","break;case $."]],"355nation.net":[["rmnt","script","html-load.com"]],"365daysofbakingandmore.com":[["rmnt","script","/__adblocker|html-load/"]],"4umods.com":[["rmnt","script",".offsetParent"]],"7hitmovies.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"7movierulz1.es":[["nowoif"]],"8boobs.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"8tm.net":[["nosiif","visibility","1000"],["acs","addEventListener","google_ad_client"]],"8xmovies.com.br":[["nowoif"]],"9anime.pe":[["acs","document.documentElement","break;case $."]],"9hentai.es":[["aeld","click","saveLastEvent"]],"9tsu.co.uk":[["acs","parseInt","break;case $."]],"9xupload.nl":[["nano-stb"],["acs","parseInt","break;case $."],["aeld","","/_0x|localStorage\\.getItem/"]],"a8ix.fr":[["acs","document.documentElement","break;case $."]],"academiadelmotor.es":[["aopw","adBlockDetected"]],"accidentalhappybaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acortalo.com.br":[["nofab"],["nano-sib","","","0"],["set","clicked","true"],["set","eClicked","true"],["set","number","0"],["set","sync","true"]],"actvid.ru":[["acs","addEventListener","HTMLAllCollection"]],"adblockplustape.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"adsurfle.com":[["noeval-if","/chp_?ad/"]],"agar.live":[["set","show_videoad_limited","noopFunc"]],"ak4eg.es":[["acs","document.documentElement","break;case $."],["aeld","load","onload"],["acs","u_cfg"]],"akoam.es":[["nowoif"]],"alkas.lt":[["rmnt","script","html-load.com"]],"allcalidad.ru":[["acs","doOnce"],["aeld","","0x"],["aopw","smrtSB"],["set","btoa","null"],["ra","href","#clickfakeplayer"],["aeld","click","popMagic"],["acs","Math","zfgloaded"]],"alldayidreamaboutfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allmovieshub.de":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."]],"amarokforum.com":[["rmnt","script","html-load.com"]],"americanoceans.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ancensored.com":[["aeld","/^(?:click|mousedown)$/","_0x"],["aopr","AaDetector"]],"anime-jl.net":[["aopr","detector_launch"]],"animeflv.pl":[["acs","jQuery","pp12"],["acs","EventTarget.prototype.addEventListener","delete window"]],"animelatinohd.com":[["aeld","load","popMagic"]],"animesonliner4.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"apkmaven.de":[["no-xhr-if","googlesyndication"],["aeld","DOMContentLoaded","adsBlocked"],["set","adBlockDetected","falseFunc"]],"apkmody.es":[["nano-stb","download_loading","*"],["nowoif"]],"appvn.com":[["acs","JSON.parse","break;case $."]],"arabamob.blogspot.com":[["acs","addEventListener","blocker"]],"archivebate.co.uk":[["acs","WebAssembly","atob"]],"arenavision.de":[["nowoif"],["acs","JSON.parse","break;case $."]],"asianhdplay.es":[["acs","document.documentElement","break;case $."]],"asiaon.it":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"],["no-xhr-if","googlesyndication","length:10"],["no-xhr-if","doubleclick"],["json-prune","props.pageProps.data.aotHomepageTopBar props.pageProps.data.aotHomepageTopBar props.pageProps.data.aotHeaderAdScripts props.pageProps.data.aotFooterWidgets"]],"audiforum.us":[["rmnt","script","html-load.com"]],"automoblog.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"av01.de":[["nowoif"],["ra","onclick","a[onclick^=\"setTimeout\"]"],["rc","vjs-hidden",".vjs-control-bar","stay"]],"av01.media":[["acs","document.createElement","sliding"],["ra","onclick","a[onclick]"]],"azcentral.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"azsoft.de":[["aopr","SMart1"],["noeval-if","chp_ad"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"]],"babeporn.com.br":[["aopr","decodeURI"]],"babla.org":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"bakedlean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"banburyguardian.co.uk":[["rmnt","script","await eval"]],"bayimg.com":[["aeld","/^(?:click|mousedown)$/","ppu"]],"bde4.nl":[["nofab"],["nano-sib"]],"beingpatient.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"berlin-teltow.de":[["noeval-if","/chp_?ad/"]],"bersapistolforum.com":[["rmnt","script","html-load.com"]],"best4hack.blogspot.com":[["acs","Math","zfgloaded"]],"bestofarea.com":[["noeval-if","/chp_?ad/"]],"bhaai.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bibliotecadecorte.com":[["noeval-if","/chp_?ad/"]],"bigtitsporn-tube.com":[["noeval"],["aopr","Aloader.serve"]],"bigwarp.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif"],["acs","document.createElement","overlay"]],"bimmerwerkz.com":[["rmnt","script","html-load.com"]],"bluemediadownload.pl":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bluemediafile.es":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bluemediastorage.fr":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bluemediastorage.org":[["aopr","decodeURI"],["aopr","open"],["rmnt","script","FingerprintJS"]],"bmovie.co.uk":[["acs","Math","zfgloaded"]],"bmovies.co.uk":[["acs","JSON.parse","break;case $."],["acs","Math","XMLHttpRequest"]],"boainformacao.com.br":[["no-xhr-if","adsbygoogle"]],"bokepindo13.net":[["rmnt","script","/popMagic|pop1stp/"]],"boobgirlz.com":[["aopr","loadTool"]],"botanicalinterests.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"breakingbourbon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brewerfanatic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brownsnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burnbutt.com":[["acs","document.addEventListener","google_ad_client"]],"buzzheavier.com":[["aeld","DOMContentLoaded","location.href"],["set","AdLink",""],["acs","String.fromCharCode","atob"],["nowoif","!buzzheavier.com"],["aeld","click","removeChild"],["acs","setTimeout","decodeURIComponent(escape"],["rmnt","script","'+'","excludes","/^\\(self\\.__next/"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"bymichiby.com":[["acs","document.querySelectorAll","popMagic"]],"byseqekaho.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"caabcrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cambro.io":[["acs","onload","localStorage"]],"camsstream.com":[["acs","onload","open"]],"camwhores.com":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"],["set","flashvars.adv_pre_src",""],["set","flashvars.adv_pre_url",""],["set","flashvars.adv_pre_vast",""],["set","flashvars.protect_block",""],["set","flashvars.video_click_url",""]],"camwhorestv.es":[["acs","onload"],["aeld","","Pop"],["aopr","_wm"],["aopr","loadTool"],["nowoif"]],"canalesportivo.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"card-codex.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"carryflix.com":[["no-fetch-if","mode:no-cors"]],"celebritynetworth.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chilimath.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chilitochoc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chocolatecoveredkatie.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinemakottaga.es":[["no-xhr-if","googlesyndication"],["aeld","DOMContentLoaded","adsBlocked"],["acs","document.addEventListener","adsbygoogle"],["nano-sib","timePassed"]],"ck5.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"claimlite.club":[["nostif","_0x"],["noeval-if","blocker"]],"clampschoolholic.org":[["acs","JSON.parse","break;case $."]],"cloudvideotv.com":[["nowoif"],["aopr","localStorage"],["rmnt","script",";}}};break;case $."],["acs","JSON","break;case"],["rmnt","script","FingerprintJS"]],"codeshack.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"columbiadailyherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"commande.rhinov.pro":[["set","Sentry","{}"],["set","Sentry.init","noopFunc"]],"comunio.it":[["nostif",".call(null)","10"]],"consejosytrucos.co":[["rmnt","script","await eval"]],"cupra.forum":[["no-xhr-if","googlesyndication"],["nostif","getComputedStyle","250"]],"daddylivehd.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","setTimeout","admc"],["aopw","u_cfg"],["nostif","sadbl"]],"dailyactor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyuploads.net":[["acs","$","window.open"],["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dallashoopsjournal.com":[["rmnt","script","html-load.com"]],"daotranslate.nl":[["acs","document.getElementById","deblocker","/^data:text\\/javascript/"]],"ddrmovies.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"deano.me":[["acs","jQuery","this"]],"desbloqueador.co.uk":[["aeld","mousedown","trigger"],["set","Ok","true"],["nowoif","given"]],"designbump.com":[["aost","Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["rmnt","script","/==undefined.*body/"]],"destinationsjourney.com":[["noeval-if","/chp_?ad/"]],"diaryofafitmommy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"direct-dl.co.uk":[["nowoif"]],"discoveryplus.nl":[["json-prune","data.attributes.config.freewheel data.attributes.config.featureFlags.dPlayer"],["json-prune","data.attributes.ssaiInfo.forecastTimeline data.attributes.ssaiInfo.vendorAttributes.nonLinearAds data.attributes.ssaiInfo.vendorAttributes.videoView data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adMetadata data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adParameters data.attributes.ssaiInfo.vendorAttributes.breaks.[].timeOffset"]],"diversanews.com":[["noeval-if","/chp_?ad/"]],"dloady.com":[["acs","$","show"]],"dlstreams.com":[["rmnt","script","/key in document|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"docer.com":[["set","ads_unblocked","true"]],"dorsetecho.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"douxporno.com":[["acs","document.querySelectorAll","popMagic"]],"downloadhub.nl":[["acs","document.documentElement","break;case $."],["nowoif"]],"downloadhub.ru":[["acs","document.documentElement","break;case $."],["nowoif"]],"downloadwella.com":[["aeld","","break;case $."]],"dpstream.ru":[["set","load_pop_power","noopFunc"],["ra","href","#clickfakeplayer"]],"drtuber.nl":[["nowoif"]],"dudefilms.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"earnload.es":[["aopr","app_vars.force_disable_adblock"],["acs","Math","break;case $."]],"easy-coin.com.br":[["acs","Math.random","banner"]],"eatpicks.com":[["rmnt","script","/__adblocker|html-load/"]],"edp24.co.uk":[["set","adLight","true"]],"egpu.io":[["rmnt","script","/__adblocker|html-load/"]],"elcorreoweb.es":[["nostif","sub"]],"elizabeth-mitchell.org":[["aopw","adBlockDetected"]],"encurtalink.net":[["aopr","mm"],["set","blurred","false"]],"englishlinx.com":[["rmnt","script","/__adblocker|html-load/"]],"enjoy4k.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"eplayvid.nl":[["acs","parseInt","break;case $."]],"ervik.as":[["noeval-if","/chp_?ad/"]],"eskiceviri.blogspot.com":[["aopr","adBlockDetected"],["acs","puShown","/doOpen|popundr/"]],"everyeye.it":[["nostif","adb"]],"evileaks.fr":[["acs","$","prompt"]],"evotuners.net":[["rmnt","script","html-load.com"]],"exalink.fun":[["set","blurred","false"]],"examscisco.com":[["aopr","adsBlocked"]],"expresskaszubski.pl":[["nosiif","childNodes"]],"extramovies.nl":[["rmnt","script",";}}};break;case $."]],"fansfocus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fansonlinehub.com":[["json-prune","web_share_ads_adsterra_config wap_short_link_middle_page_ad wap_short_link_middle_page_show_time data.ads_cpm_info"],["nano-stb","value","*"],["nano-sib","clearInterval","*"]],"fastilinks.nl":[["acs","parseInt","break;case $."]],"fastpeoplesearch.com":[["set","prads","[]"]],"festyy.com":[["set","globalThis","null"],["aopr","NREUM"],["acs","Math","break;case $."]],"ffmovies.org":[["acs","String.fromCharCode","break;"],["nowoif"]],"fikper.com":[["nowoif","?"],["nano-sib","downloadToken"]],"file4go.org":[["acs","document.getElementById","ad_block"],["set","time","0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"file4go.ru":[["acs","document.getElementById","ad_block"],["set","time","0"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"filehorse.com":[["set","isAdBlockActive","false"]],"filepress.fr":[["aeld","","break;case $."],["aost","String.prototype.charCodeAt","/(?=^(?!.*(jquery|turnstile|challenge-platform)))/"],["aeld","blur","console.log"]],"filesamba.de":[["aopr","_wm"]],"filmcdn.top":[["nowoif"]],"filmesonlinehd1.org":[["acs","String.fromCharCode","/btoa|break/"]],"filmesonlinex.com.br":[["acs","Math","break;case $."]],"filmesonlinex.de":[["acs","Math","break;case $."]],"filmisongs.fr":[["acs","JSON.parse","break;case $."]],"filmisongs.it":[["acs","JSON.parse","break;case $."]],"filmy-hit.co.uk":[["acs","document.documentElement","break;case $."]],"filmydown.co.uk":[["nowoif"]],"filmydown.fr":[["nowoif"]],"filmyhit.net":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"finanzas-vida.com":[["set","blurred","false"]],"finanzfrage.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"findheman.com":[["noeval-if","/chp_?ad/"]],"findporn.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"finfang.pl":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]],"firestream.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","adserverDomain"]],"flizmovies.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fmoonembed.fr":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"forevertwentysomethings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foundit.com.br":[["set","freshpaint","{}"],["set","freshpaint.track","noopFunc"]],"freebnbcoin.com":[["nostif","fetch"]],"freedom3d.art":[["noeval-if","/chp_?ad/"]],"freefatpornmovies.com":[["acs","document.querySelectorAll","popMagic"]],"freeltc.online":[["noeval-if","ads"]],"freemedicalbooks.org":[["noeval-if","/chp_?ad/"]],"freeshot.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["no-fetch-if","/outbrain|adligature|quantserve|adligature|srvtrck/"],["acs","document.querySelectorAll","popMagic"]],"freevstplugins.co.uk":[["noeval-if","/chp_?ad/"]],"freevstplugins.es":[["noeval-if","/chp_?ad/"]],"freex2line.online":[["acs","document.createElement","globalThis"],["aeld","popstate"],["aeld","click","triggered"]],"french-stream.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fsplayer.org":[["nowoif"]],"fullcinema.co.uk":[["acs","JSON.parse","break;case $."]],"fulltube.co.uk":[["acs","JSON.parse","break;case $."]],"funztv.com":[["noeval-if","/chp_?ad/"]],"fzlink.de":[["aeld","","break;case $."]],"fzmovies.es":[["acs","Math","break;case $."],["rmnt","script","{delete window["],["ra","onclick","[onclick*=\"window.open\"]","stay"],["nosiif","visibility","1000"]],"g20.net":[["rmnt","script","html-load.com"]],"g3g.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"g8forum.com":[["rmnt","script","html-load.com"]],"games.amny.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gameswelt.com":[["nostif",".call(null)","10"]],"gdirect.com.br":[["acs","Math","break;case $."]],"gdirect.pl":[["acs","Math","break;case $."]],"gedpracticequestions.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gentside.de":[["rmnt","script","()=>eval"]],"gevestor.de":[["nostif",".call(null)","10"]],"gofilms4u.org":[["aeld","","break;case $."]],"gogohd.de":[["acs","document.documentElement","break;case $."]],"gomoviz.es":[["acs","parseInt","break;case $."],["aeld","","break;case $."]],"gosemut.net":[["nowoif"]],"gostream.de":[["set","check_adblock","true"]],"govid.it":[["acs","parseInt","break;case $."]],"gowatchseries.es":[["rmnt","script",";}}};break;case $."]],"greatnass.com":[["acs","document.querySelectorAll","popMagic"]],"gsurl.ru":[["aeld","mousedown","preventDefault"]],"gtrlife.com":[["rmnt","script","html-load.com"]],"gulfcoastjourneys.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gyonlineng.com":[["acs","JSON.parse","break;case $."]],"hacksnation.com":[["no-xhr-if","adsbygoogle"]],"haqem.com":[["noeval-if","/chp_?ad/"]],"hawaiiathletics.com":[["set","blockAdBlock","trueFunc"]],"hbculifestyle.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"hdfilme.de":[["acs","Math","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"hdfriday.fr":[["aopr","open"],["acs","document.documentElement","break;case $."]],"hdfull.es":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","mousedown","!!{});"],["nano-stb"]],"hdfull.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","mousedown","!!{});"],["nano-stb"]],"hdmoviefair.es":[["aeld","","break;case $."],["aost","document.createElement","onerror"]],"hdmovies50.org":[["aeld","","break;case $."],["acs","navigator","break;case $."]],"hdss-to.net":[["acs","JSON.parse","break;case $."]],"hdvid.pl":[["aopw","atOptions"],["aost","String.fromCharCode","stackDepth:3"],["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"hdzog.org":[["acs","adver"]],"healthfatal.com":[["noeval-if","/chp_?ad/"]],"healthmyst.com":[["rmnt","script","/detectAdBlock|checkFakeAd|adBlockNotDetected/"],["nano-sib","/.?/","*","0.02"]],"heftig.net":[["nostif",".call(null)","10"]],"heimporno.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"hentai2w.com":[["aeld","click","popMagic"],["acs","WebAssembly","atob"],["acs","Math.random","ExoLoader"],["aeld","getexoloader"]],"hentaihere.com":[["aeld","getexoloader"],["rmnt","script","/shown_at|WebAssembly/"]],"heresyoursavings.com":[["aopr","__eiPb"]],"hilaryhahn.com":[["acs","parseInt","break;case $."]],"hindimovies.com.br":[["acs","parseInt","break;case $."]],"hindishri.com":[["noeval-if","/chp_?ad/"]],"hitherandthither.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotanimepornvideos.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hotforfoodblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotmasti.net":[["acs","parseInt","break;case $."],["aeld","","break;case $."]],"hotstunners.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"hpaudiobooks.de":[["acs","String.fromCharCode","shift"]],"hqq.nl":[["aopr","adBlockDetected"],["set","sadbl","false"],["nowoif"],["set","adblockcheck","false"],["rmnt","script","self == top"]],"hrvforum.com":[["rmnt","script","html-load.com"]],"hyperdebrid.it":[["acs","decodeURI","atob"]],"ibradome.com":[["acs","document.querySelectorAll","popMagic"]],"icanteachmychild.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"idlixvip.es":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"iframejav.pl":[["nowoif"],["aopr","__Y"]],"iklandb.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nano-sib"]],"im9.eu":[["rmnt","script","/adpreserve|\\/0x/i"]],"imageweb.ws":[["nowoif"]],"img4fap.com":[["aopr","decodeURI"]],"img4fap.es":[["aopr","decodeURI"]],"imgdew.ru":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"imgsen.de":[["aopr","CustomEvent"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","loadTool"]],"imgsto.org":[["aopr","CustomEvent"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","loadTool"]],"imgview.com.br":[["aopr","CustomEvent"],["aopr","exoJsPop101"],["aopr","ExoLoader.addZone"],["aopw","Fingerprint2"],["nowoif"]],"incest.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"indesignskills.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"insidetheupgrade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"insuranceloan.akbastiloantips.in":[["no-xhr-if","doubleclick"],["no-xhr-if","google","length:10"]],"interracial.com":[["nowoif"]],"itopmusic.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"jagledam.it":[["rmnt","script","offsetHeight"]],"japanfuck.ru":[["aopr","popit"],["aeld","popstate","noPop"]],"jav-noni.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javfull.net":[["aeld","","popMagic"],["nosiif","_0x"]],"javmelon.com":[["acs","document.querySelectorAll","popMagic"]],"javseen.tv":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["aopr","jsPopunder"]],"jaysndees.com":[["nosiif","visibility","1000"],["nofab"]],"jenniferallwoodhome.com":[["rmnt","script","/__adblocker|html-load/"]],"jizzberry.com":[["aeld","getexoloader"]],"jkanime.de":[["nowoif"],["acs","JSON.parse","break;case $."]],"jokersportshd.org":[["nowoif","/aff|jump/"]],"joujoutravels.com":[["rmnt","script","/__adblocker|html-load/"]],"jpop80ss3.blogspot.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"jsfiddle.net":[["set","_carbonads","{}"],["set","_bsa","{}"]],"justagirlblog.com":[["rmnt","script","/__adblocker|html-load/"]],"justplaincooking.ca":[["rmnt","script","/__adblocker|html-load/"]],"kaas.ro":[["aopr","aclib"],["aopr","Adcash"]],"kakitengah.es":[["nowoif"]],"kaliscan.co.uk":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","/popMagic|pop1stp/"]],"kanyetothe.com":[["rmnt","script","html-load.com"]],"kaplog.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"kat.de":[["aeld","","break;case $."],["aopw","ospen"]],"kawaii-anime.com":[["nostif","getComputedStyle"],["nowoif","_blank"],["set-session-storage-item","kw_ad_shown","5"],["set-session-storage-item","kw_ad_clicks","2"]],"kazefuri.id":[["rmnt","script","sessionStorage.getItem"]],"kb.arlo.com":[["set","_vwo_code","{}"],["set","_vwo_code.init","noopFunc"]],"keeplinks.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kiddyshort.com":[["acs","addEventListener","google_ad_client"],["aeld","load","htmls"],["set","blurred","false"]],"kinemania.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kiuruvesilehti.fi":[["aeld","scroll","innerHeight"]],"kkat.com.br":[["aeld","","break;case $."],["aopw","ospen"]],"knutsfordguardian.co.uk":[["set","adLight","true"]],"kommandotech.com":[["rmnt","script","/__adblocker|html-load/"]],"kompiko.pl":[["noeval-if","/chp_?ad/"]],"krxforum.com":[["rmnt","script","html-load.com"]],"ksn.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kxnet.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"l23movies.nl":[["acs","JSON.parse","atob"]],"latesthdmovies.pl":[["acs","eval","replace"],["acs","document.createElement","script"]],"lechefswife.com":[["rmnt","script","/__adblocker|html-load/"]],"legacygt.org":[["rmnt","script","html-load.com"]],"letmejerk3.com":[["aopr","ExoLoader"],["aeld","","_0x"]],"likuoo.video":[["acs","document.querySelectorAll","popMagic"]],"lin-ks.com":[["nano-sib"]],"links-url.net":[["aeld","load","onload"]],"linksmore.org":[["acs","JSON.parse","break;case $."]],"livecamrips.net":[["rmnt","script","window.open"]],"livecricket.com.br":[["rmnt","script",";}}};break;case $."]],"liveon.es":[["acs","setTimeout","admc"]],"lodynet.com":[["acs","JSON.parse","break;case $."]],"lonely-mature.com":[["aopr","EviPopunder"]],"lookcam.it":[["set","canRunAds","true"]],"lookmovie2.to":[["set","Yii2App.playbackTimeout","0"]],"los40.com":[["ra","class|style","div[id^=\"los40_gpt\"]"],["set","huecosPBS.nstdX","null"],["no-fetch-if","googlesyndication"],["set","DTM.trackAsyncPV","noopFunc"]],"luxurylaunches.com":[["rmnt","script","/__adblocker|html-load/"]],"m.youtube.com":[["set","ytInitialPlayerResponse.playerAds","undefined"],["set","ytInitialPlayerResponse.adPlacements","undefined"],["set","ytInitialPlayerResponse.adSlots","undefined"],["set","playerResponse.adPlacements","undefined"],["json-prune","playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots important"],["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"madchensex.com":[["aopr","ExoLoader"]],"madhentaitube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"maesmenu.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"magnetoforum.com":[["rmnt","script","html-load.com"]],"manga4life.com":[["acs","JSON.parse","break;case $."]],"mangaku.com.br":[["nowebrtc"],["acs","$","onclick"]],"mangaraw18.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"mangasail.org":[["set","adblock","1"]],"manhwas.it":[["acs","document.querySelectorAll","popMagic"]],"manoramaonline.com":[["aopr","EV.Dab"]],"marinetraffic.live":[["rmnt","script","/adblock/i"]],"matchbuilt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mcrypto.net":[["noeval-if","/chp_?ad/"]],"mcrypto.nl":[["noeval-if","/chp_?ad/"]],"mega1080p.fr":[["aeld","DOMContentLoaded","btoa"]],"megaupto.com":[["acs","document.documentElement","break;case $."],["nano-stb","seconds"]],"mejortorrento.co.uk":[["nowebrtc"],["aeld","click","popMagic"]],"mhdsport.de":[["rmnt","script",";}}};break;case $."]],"mhdsportstv.com":[["acs","document.documentElement","break;case $."],["rmnt","script","deblocker"]],"milfzr.com":[["nowoif"],["acs","String.prototype.charCodeAt","tabunder"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"miniurl.ru":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"missav.net":[["acs","document.createElement","htmlAds"],["nowoif"]],"mixdroop.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"mixdrop23.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"mkcforum.com":[["rmnt","script","html-load.com"]],"mkvcage.nl":[["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."]],"mkvhub.ru":[["acs","Math","break;case $."]],"mlbbox.me":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","adserverDomain"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","document.documentElement","break;case $."],["nowoif","!/mlbbox\\.me|_self/"],["rmnt","script","/FingerprintJS|Adcash/"]],"mlbstream.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"mlive.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","adblockerDisabled","excludes",",\\\""]],"mlsbd.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."]],"mlwbd.it":[["noeval-if","ads"],["ra","type","input[value^=\"http\"]"],["acs","document.documentElement","break;case $."]],"mobiletvshows.site":[["ra","onclick","[onclick*=\"window.open\"]","stay"]],"modelviewer.lol":[["aeld","DOMContentLoaded","isBlocked"]],"modhoster.de":[["nostif",".call(null)","10"]],"momo-net.com":[["aeld","contextmenu"],["aopr","document.body.appendChild"]],"monstream.org":[["aopr","BetterJsPop"]],"moshahda.net":[["acs","parseInt","break;case $."]],"mov2day.co.uk":[["aopr","LieDetector"]],"movie4me.de":[["aopr","Math.floor"]],"movieon21.nl":[["nowoif"]],"movies07.ru":[["aeld","","pop"]],"moviesda4.co.uk":[["acs","document.documentElement","break;case $."]],"moviesjoy.co.uk":[["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","mm"],["nowoif"]],"moviesmon.nl":[["acs","Math","break;case $."]],"moviesmon.org":[["acs","Math","break;case $."]],"moviesmon.pl":[["acs","Math","break;case $."]],"moviesonlinefree.es":[["rmnt","script","_0x"],["nowoif"]],"moviflex.net":[["acs","Math","XMLHttpRequest"],["nowoif"]],"mtg-print.com":[["no-fetch-if","ads"]],"mxdrop.click":[["rmnt","script",".open","includes","\\\\x20*"]],"myesports.gg":[["no-fetch-if","method:GET"]],"myhomemyglobe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mymundaneandmiraculouslife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mypace.sasapurin.com":[["noeval-if","/chp_?ad/"]],"mytrailco.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mzansixporn.co.za":[["acs","document.querySelectorAll","popMagic"],["acs","navigator","FingerprintJS"]],"namasce.pl":[["nostif","","1"]],"namesnerd.com":[["rmnt","script","/__adblocker|html-load/"]],"nationalgunforum.com":[["rmnt","script","html-load.com"]],"naturalbd.com":[["aopr","encodeURIComponent"]],"nbcnews.com":[["aopr","googletag"]],"ncdnstm.nl":[["aopr","__Y"]],"nekopoi.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["rmnt","script","wpadmngr.com"],["acs","atob","tabunder"],["aeld","","adsense"]],"nelomanga.ru":[["acs","WebAssembly","atob"]],"netflixporno.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"newstopics.in":[["no-fetch-if","adsbygoogle"]],"nextorrent.org":[["acs","jQuery","popunder"],["ra","onclick"]],"nexusmods.com":[["set","blockingAds","false"],["remove-cookie","ab"]],"nflstream.ru":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."],["acs","Math","break;case $."]],"nightlifeporn.com":[["acs","document.querySelectorAll","popMagic"]],"notebookchat.com":[["nostif",".call(null)","10"]],"notebookcheck.de":[["aopw","ab_cl"],["nostif",".call(null)","10"],["rmnt","script","&&window,"]],"notevibes.com":[["aopr","googletag"]],"novablogitalia.co.uk":[["aeld","load","nextFunction"]],"novablogitalia.it":[["aeld","load","nextFunction"]],"nudisteens.com":[["noeval"]],"nudistic.com":[["acs","document.querySelectorAll","popMagic"]],"offbeathome.com":[["rmnt","script","/__adblocker|html-load/"]],"ofilmywap.com":[["nowoif"]],"ofilmywap.ru":[["nowoif"]],"ogomovies.com.br":[["acs","document.documentElement","break;case $."]],"ohhappyday.com":[["rmnt","script","/__adblocker|html-load/"]],"oke.io":[["aopr","open"],["aopw","Fingerprint2"],["set","blurred","false"]],"oload.pl":[["aopr","AaDetector"],["aopr","open"],["aopr","_pop"],["aopr","decodeURI"]],"onepunch.it":[["acs","document.querySelectorAll","popMagic"]],"onlyfams.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"onvid.pl":[["aopw","Fingerprint2"],["aopw","smrtSB"],["nowebrtc"]],"oploverz.nl":[["acs","JSON.parse","break;case $."],["acs","$","popup"],["nostif","popup"]],"optiqforum.com":[["rmnt","script","html-load.com"]],"orwhateveryoudo.com":[["rmnt","script","/__adblocker|html-load/"]],"osuskinner.com":[["no-xhr-if","/googlesyndication|nitropay/"],["nostif","height"],["aopw","uBlockActive"]],"otakudesu.com.br":[["nowoif"]],"ouo.org":[["aopr","AaDetector"],["nowebrtc"],["nano-sib","stop()"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"],["acs","String.fromCharCode","/'shift'|break;/"]],"oxxfile.com":[["no-fetch-if","ads_"],["no-xhr-if","ads_"]],"oyohd.net":[["nowoif"]],"pagalmovies.com.br":[["aeld","","/_0x|localStorage\\.getItem/"]],"palabr.as":[["nostif","error-report.com"],["rmnt","script","html-load.com"]],"pandafreegames.nl":[["nostif","adFilled","2500"]],"pasadenastarnews.com":[["set","CnnXt.Event.fire","noopFunc"]],"pc-spiele-wiese.de":[["noeval-if","/chp_?ad/"]],"peaceloveandlowcarb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peliculas24.ru":[["acs","blur"],["aopw","smrtSB"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pelishouse.co.uk":[["ra","href","#clickfakeplayer"]],"perfectgirls.it":[["acs","ExoLoader"],["aopw","ads_priv"],["noeval"],["acs","document.querySelectorAll","popMagic"]],"perfektdamen.net":[["acs","ExoLoader"],["aopw","ads_priv"],["noeval"]],"perfektdamen.ru":[["acs","ExoLoader"],["aopw","ads_priv"],["noeval"]],"personalitycafe.com":[["rmnt","script","html-load.com"]],"phois.pro":[["nowoif"]],"pianodreamers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picrok.net":[["nowoif"],["acs","addEventListener","-0x"]],"pienovels.com":[["noeval-if","adsbygoogle"]],"pingit.fr":[["aopr","AaDetector"],["aopr","open"],["aopr","rmVideoPlay"],["aopr","_pop"],["aopw","Fingerprint2"],["set","blurred","false"]],"pingit.it":[["aopr","AaDetector"],["aopr","open"],["aopr","rmVideoPlay"],["aopr","_pop"],["aopw","Fingerprint2"],["set","blurred","false"]],"piratebay.de":[["aeld","/^(?:click|mousedown)$/","_0x"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"piratebay.ru":[["aeld","/^(?:click|mousedown)$/","_0x"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pixlev.es":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"playarcady.com":[["rmnt","script","window.open"]],"player.uwatchfree.ru":[["aopr","BetterJsPop"],["aopr","arrvast"],["aopr","doSecondPop"]],"playtamil.co.uk":[["acs","JSON.parse","break;case $."]],"plowingthroughlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plusupload.com.br":[["acs","Math","break;case $."]],"plyjam.it":[["set","attr","{}"],["set","scriptSrc",""],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."]],"pocketgamer.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"pokemoncard.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"poodleforum.com":[["rmnt","script","html-load.com"]],"porndex.com":[["aeld","click"]],"porndrake.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"porngirlstube.com":[["acs","document.querySelectorAll","popMagic"]],"porninblack.com":[["acs","document.querySelectorAll","popMagic"],["noeval-if","/chp_?ad/"]],"pornlib.it":[["nowoif"]],"pornlib.org":[["nowoif"]],"pornohirsch.net":[["set","vpPrerollVideo","undefined"],["aeld","getexoloader"],["nostif","Adb"]],"pornotommy.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"pornx.tube":[["aeld","","popMagic"]],"postcrescent.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"povvideo.fr":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"powv1deo.co.uk":[["aopr","jwplayer.vast"],["aopw","adcashMacros"],["aopw","Fingerprent2"],["aopw","Fingerprint2"],["nano-stb","grecaptcha.ready","*"],["nostif","test.remove","100"],["nowoif"],["set","isAdb","false"]],"presentationskills.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"printablesforlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"profootballhistory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"promobil.de":[["nostif",".call(null)","10"]],"psarips.fr":[["aopw","Fingerprint2"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"publio.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"pussyspace.co.uk":[["aopr","open"]],"putlockers.es":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."]],"pythonmatplotlibtips.blogspot.com":[["acs","addEventListener","nextFunction"]],"racaty.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["aopw","Fingerprint2"],["nowebrtc"]],"radio-polska.pl":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radioamericalatina.com":[["aopr","adp"]],"radiolovelive.com":[["aopr","adp"]],"ragnarokscanlation.nl":[["noeval-if","/chp_?ad/"]],"rat.xxx":[["aopr","popns"],["acs","document.write","iframe"]],"rav4resource.com":[["rmnt","script","/__adblocker|html-load/"]],"rdxhd1.pl":[["aeld","","/_0x|localStorage\\.getItem/"]],"read.amazon.com":[["set","canRunAds","1"],["set","ue_adb_chk","1"]],"realjapansex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"redecanaishd.pl":[["aopr","aclib"]],"redecanaistv.pl":[["aeld","click","_0x"],["aopr","__Y"],["set","DisableDevtool","undefined"]],"redisex.co.uk":[["aopr","__Y"],["aopr","onkeydown"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopr","close"]],"redpornblog.com":[["aopr","AaDetector"]],"replica-watch.info":[["aeld","DOMContentLoaded","adsBlocked"]],"retrotv.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"rexdlfile.com":[["aopr","require"]],"rinconpsicologia.com":[["noeval-if","/chp_?ad/"],["no-fetch-if","method:HEAD"]],"rmcmv.com.br":[["nosiif","visibility"]],"rojadirectatvlive.net":[["nowoif"]],"rpmstream.live":[["json-prune","ads playerAds"]],"rshrt.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"rule34ai.it":[["aeld","","popMagic"]],"runsforcookies.com":[["rmnt","script","/__adblocker|html-load/"]],"sanet.com":[["rmnt","script","adserverDomain"]],"satoshifaucet.io":[["noeval-if","/chp_?ad/"]],"savelinks.pl":[["aopr","LieDetector"],["nowoif"],["aeld","DOMContentLoaded","window.open"]],"savemedia.org":[["nowoif"]],"sbchip.nl":[["aopr","__Y"],["aopr","mm"]],"sbflix.co.uk":[["aopr","__Y"],["aopr","mm"]],"sbplay.ru":[["aopr","__Y"],["aopr","mm"],["acs","document.addEventListener","offsetHeight"],["set","console.clear","noopFunc"]],"scan-hentai.net":[["aeld","DOMContentLoaded","adb"]],"scenexe2.io":[["no-fetch-if","googlesyndication"]],"scopateitaliane.it":[["aopr","document.dispatchEvent"]],"scribd.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"],["rmnt","script","adShieldError"]],"scribens.com":[["rmnt","script","html-load.com"]],"sdmoviespoint.es":[["acs","JSON.parse","break;case $."],["noeval-if","ads"]],"seededatthetable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seehd.co.uk":[["acs","String.fromCharCode","shift"]],"series2watch.co.uk":[["acs","document.documentElement","break;case $."]],"sewwhatalicia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shahid4u.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"shahid4uu.nl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"sharksinfo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sheepandstitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sheikhmovies.es":[["noeval-if","/chp_?ad/"]],"shid4u.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"shopr.tv":[["acs","EventTarget.prototype.addEventListener","delete window"]],"shrinke.de":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","window.open"],["aeld","load","doTest"]],"simplymacros.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"singingdalong.co.uk":[["aeld","load","2000"]],"singletrackworld.com":[["rmnt","script","onerror"]],"skymovieshd.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","navigator","break;case $."]],"smplace.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","document.dispatchEvent"],["nowoif"]],"snlookup.com":[["no-xhr-if","ads"],["rmnt","script","deblocker"]],"soccerdigestweb.com":[["rmnt","script","html-load.com"]],"softonic.pl":[["set-cookie","softonic-r2d2-view-state","1"]],"somuchfoodblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"songs.nl":[["aopr","AaDetector"]],"songspk.net":[["aost","Object","/(?=^(?!.*(https)))/"]],"southparkstudios.com":[["no-fetch-if","ima3_dai"],["no-fetch-if","dai_iframe"]],"soxprospects.com":[["rmnt","script","html-load.com"]],"spanishdict.com":[["set","SD_IS_BLOCKING","false"],["aeld","","isBlocking"]],"spectrum.ieee.org":[["aopr","splashpage.init"]],"sportanalytic.com":[["nostif","error-report.com"]],"spotifystats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stalkface.com":[["acs","Math","break;case $."]],"stape.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"]],"stardewids.com":[["aeld","","document.body"],["aeld","scroll"]],"stardima.com":[["acs","parseInt","break;case $."],["aeld","","break;case $."],["aeld","click","/redirect.php?"]],"stingerforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stmruby.com":[["rmnt","script","wpadmngr.com"],["set","cRAds","false"],["aopw","showADBOverlay"],["acs","WebAssembly","atob"]],"stre4mplay.nl":[["nowoif"],["aopr","puOverlay"]],"stream2watch.es":[["acs","atob"],["aopr","AdservingModule"],["acs","Math","break;case $."]],"stream4free.es":[["aeld","load","nextFunction"]],"streamadblocker.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["acs","setTimeout","admc"]],"streamadblockplus.com.br":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"streameast.net":[["aeld","/^/","0x"],["nosiif","visibility","1000"],["nowebrtc"],["nostif","sadbl"],["acs","Object.defineProperty","break;case"],["acs","EventTarget.prototype.addEventListener","delete window"],["aopr","Adcash"]],"streamhub.co.uk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["aopw","__aaZoneid"],["nowoif"]],"streaming-french.ru":[["aeld","","break;case $."]],"streamsport.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["aeld","","_0x"],["nowoif"]],"streamtapeadblock.nl":[["acs","JSON.parse","Promise"],["nowoif"],["aopr","Adcash"]],"stronakuchni.pl":[["rmnt","script","admiral","excludes",",\\\""]],"strtapeadblock.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","Math","break;case $."],["acs","JSON.parse","Promise"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["ra","target","#downloadvideo"],["nano-stb","counter"]],"subtorrents1.com":[["aopr","capapubli"],["aopr","getUrlParameter"],["nowebrtc"],["noeval"],["popads-dummy"],["set","btoa","null"]],"sugarbeecrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supermotojunkie.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"supervideo.com.br":[["aopr","AaDetector"]],"sushiscan.co.uk":[["nosiif","daadb"]],"sustainablecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"suzuki-forums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sxyprn.ru":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popMagic"],["acs","WebAssembly","atob"],["acs","decodeURI","decodeURIComponent"],["set","vast_urls","{}"],["aopr","popns"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aopw","__aaZoneid"]],"tabootube.es":[["acs","document.querySelectorAll","popMagic"]],"tabootube.net":[["acs","document.querySelectorAll","popMagic"]],"talkesg.com":[["rmnt","script","html-load.com"]],"taycanforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"tech.trendingword.com":[["nano-stb","/getElementById|gotoo/","*","0.02"],["set","navigator.brave","undefined"]],"technorj.com":[["noeval-if","/chp_?ad/"]],"techoreview.com":[["noeval-if","/chp_?ad/"]],"techrecur.com":[["acs","Math","break;case $."]],"teknorizen.net":[["set","safelink.adblock","false"]],"teleriumtv.com":[["nowoif"]],"tenseishitaraslimedattaken-manga.com":[["acs","document.querySelectorAll","popMagic"]],"terashare.co":[["nowoif","_blank"],["aeld","click","attached","elements","div[class=\"share-embed-container\"]"]],"teslanorth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"testedich.fr":[["nostif",".call(null)","10"]],"thebargainsisters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theberserkmanga.com":[["noeval-if","/chp_?ad/"]],"thefullhelping.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegraphicsfairy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehayride.com":[["rmnt","script","/==undefined.*body/"]],"thehealthyepicurean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepinningmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theresaneoforthat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thermocookery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therugbyforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thevidhd.com":[["aopw","smrtSB"],["nowebrtc"]],"thisisrussia.io":[["nowoif"]],"thisjess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisorganicgirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thothub.org":[["aost","localStorage","inlineScript"],["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_pre_vast_alt",""]],"times-gazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"tirexo.it":[["nowoif"]],"tmearn.com":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["set","blurred","false"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tmearn.it":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["set","blurred","false"],["aopr","AaDetector"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"toggo.de":[["json-prune","adRequest"]],"topeuropix.nl":[["aopr","AaDetector"],["aopr","LieDetector"],["popads-dummy"],["nowoif"],["aeld","","_0x"]],"topmovies.it":[["nowoif"]],"truyen-hentai.com":[["nowoif"],["rmnt","script","ExoLoader"],["aopr","aab"]],"tubeon.ru":[["nowoif"]],"tubous.com":[["aopr","popMagic.init"],["aopr","document.dispatchEvent"]],"tuhentaionline.com":[["acs","document.querySelectorAll","popMagic"]],"tundraevforum.com":[["rmnt","script","html-load.com"]],"turntablekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tutflix.org":[["acs","$","test"]],"u4m.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uflash.tv":[["aopw","ads_priv"],["nowoif","adblock","1","obj"],["no-fetch-if","ujsmediatags method:HEAD"]],"ultimate-guitar.com":[["set","Object.prototype.setNeedShowAdblockWarning","noopFunc"]],"unblockit.fr":[["acs","setTimeout","admc"]],"unicode-explorer.com":[["rmnt","script","/__adblocker|html-load/"]],"upicsz.com":[["acs","document.querySelectorAll","popMagic"]],"uploadbaz.net":[["acs","onload"],["acs","Math.imul"]],"uplod.net":[["nostif","mdp"]],"upns.net":[["nowoif"],["aeld","click","document.createElement"]],"upornia.pl":[["acs","adver"],["set","hommy","{}"],["set","hommy.waitUntil","noopFunc"]],"uporno.xxx":[["aopr","document.dispatchEvent"]],"uqload.pl":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"utilidades.ecuadjsradiocorp.com":[["noeval-if","/chp_?ad/"]],"uwatchfree.co.uk":[["aeld","","_0x"],["acs","parseInt","break;case $."]],"v6embed.xyz":[["nostif","afterOpen"],["nowoif"],["set","PlayerConfig.config.CustomAdSetting","[]"]],"vembed.org":[["nostif","afterOpen"],["nowoif"],["set","PlayerConfig.config.CustomAdSetting","[]"]],"video.pemersatu.org":[["set-attr","iframe#pmt-smart-frame[src=\"about:blank\"][data-pmt-player-src^=\"http\"]","src","[data-pmt-player-src]"]],"videofilms.nl":[["aopr","__Y"]],"videos-xxx.it":[["acs","document.querySelectorAll","popMagic"]],"videovard.net":[["nowoif"],["aeld","mouseup","catch"],["nosiif","0x"],["aopr","FuckAdBlock"]],"videq.cloud":[["no-fetch-if","googlesyndication"]],"vidop.de":[["aeld","/^(?:click|mousedown|mouseup)$/","di()"],["set","console.clear","trueFunc"],["nowoif"]],"vidsrc.es":[["rmnt","script",";}}};break;case $."],["acs","JSON.parse","break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","FingerprintJS"],["acs","addEventListener","HTMLAllCollection"],["nosiif","/0x|sandCheck/"],["nowoif"],["aopr","__Y"],["aopr","AaDetector"],["aopr","Adcash"],["rmnt","script","adserverDomain"]],"ville-ideale.fr":[["nostif","contrformpub"]],"vintagetube.nl":[["aopr","popit"],["aeld","popstate","noPop"]],"vipleague.de":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","navigator","FingerprintJS"],["acs","setTimeout","admc"]],"visnalize.com":[["no-fetch-if","googlesyndication"]],"vsembed.es":[["acs","addEventListener","HTMLAllCollection"]],"vtlinks.it":[["nowoif"]],"vulgarmilf.com":[["aopr","document.dispatchEvent"]],"wapkiz.com":[["aopw","adBlockDetected"]],"watch4hd.pl":[["aopr","open"],["acs","parseInt","break;case $."]],"watchseries.unblocked.de":[["nowebrtc"]],"watchtvchh.de":[["acs","setTimeout","admc"]],"whatisareverseauction.com":[["nano-stb","download","1100"]],"whereverwriter.com":[["rmnt","script","/__adblocker|html-load/"]],"whichyr.com":[["rmnt","script","/__adblocker|html-load/"]],"whiteonricecouple.com":[["rmnt","script","/__adblocker|html-load/"]],"whitneybond.com":[["rmnt","script","/__adblocker|html-load/"]],"wildsnow.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"willyweather.de":[["rmnt","script","&&window,"]],"windycityfishing.com":[["rmnt","script","html-load.com"]],"wjhl.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wnct.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wolfstream.com":[["nowoif"]],"wordcollectanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"wordhippo.com":[["rmnt","script","html-load.com"]],"world4ufree.pl":[["acs","parseInt","break;case $."],["aeld","","_0x"],["acs","eval","replace"]],"worldfree4u.org":[["nowoif"]],"worldle.teuteuf.fr":[["rmnt","script","html-load.com"]],"writedroid.it":[["nano-stb","shortConfig","15000"],["aopw","akadb"],["nostif","_0x"],["no-xhr-if","ads"]],"wyze.com":[["no-fetch-if","analytics"]],"xhamster10.nl":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhamster5.de":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhvictory.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xmoviesforyou.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","Promise"]],"xnxx.nl":[["aeld","DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["set","xv.sda.pp.init","noopFunc"],["set","xv.conf.dyn.ads","undefined"],["set","xv.conf.dyn.excld","undefined"],["rmnt","script","html5player.enableVideoPreRollAds"]],"yeptube.ru":[["nowoif"]],"yolopooch.com":[["rmnt","script","/__adblocker|html-load/"]],"younetu.it":[["nowoif"],["aopr","doSecondPop"],["set","adblockcheck","false"]],"yourcentralvalley.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"yoyofilmeys.es":[["acs","parseInt","break;case $."]],"yts-subs.it":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","setTimeout","admc"]],"ytsaver.fr":[["acs","JSON.parse","break;case $."]],"z12z0vla.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","Math","/window\\['(?:\\\\x[0-9a-f]{2}){2}/"],["acs","JSON.parse","showTrkURL"],["nowoif"],["noeval-if","/popunder/i"]]},"off":{"uii.io":["[\"noeval\"]"],"vr.pornhat.com":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.net":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.org":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.de":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.fr":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.es":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.it":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.nl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.co.uk":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.pl":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.ru":["[\"aopr\",\"document.dispatchEvent\"]"],"vr.pornhat.com.br":["[\"aopr\",\"document.dispatchEvent\"]"],"vidsrc.com":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.net":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.org":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.de":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.fr":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.es":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.it":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.nl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.co.uk":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.pl":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.ru":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"vidsrc.com.br":["[\"acs\",\"EventTarget.prototype.addEventListener\",\"delete window\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"],"yandex.com":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.net":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.org":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.de":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.fr":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.es":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.it":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.nl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.co.uk":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.pl":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.ru":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"],"yandex.com.br":["[\"aopr\",\"Object.prototype.renderDirect):matches-path(/\\\\/(?:weather\\\\/|pogoda\\\\/|hava\\\\/)/\"]"]}};
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
