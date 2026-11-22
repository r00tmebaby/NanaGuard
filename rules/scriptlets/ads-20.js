/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"111.90.150.10":[["acs","$","noConflict"],["aopr","preroll_helper.advs"]],"11alive.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"247footballnow.com":[["noeval-if","/chp_?ad/"]],"3rooodnews.net":[["rmnt","script","advads"]],"555fap.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"560pmovie.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"8tm.net":[["nosiif","visibility","1000"],["acs","addEventListener","google_ad_client"]],"abnormalreturns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"accidentalhappybaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acervodaputaria.com.br":[["acs","decodeURI","decodeURIComponent"]],"adsup.lk":[["nostif","show"]],"adultgamescollector.com":[["nowoif"]],"aflavorjournal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ahnfiredigital.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aiailah.com":[["aopw","adBlockDetected"]],"airfryermom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"akcartoons.in":[["set","alert","throwFunc"]],"allears.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allkpop.com":[["set","isal","true"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allplayer.tk":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"alluretube.com":[["acs","decodeURI","decodeURIComponent"]],"alphahistory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alpin.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"alwaysfromscratch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alwaysusebutter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amishamerica.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amtraktrains.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"androidadult.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"],["set","chp_adblock_browser","noopFunc"],["aeld","DOMContentLoaded",".clientHeight"],["nostif","ads"],["aopr","document.write"],["rmnt","script","ads-blocked"]],"animalnerdz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anime-loads.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"animesexclip.com":[["aopr","popit"],["aeld","popstate","noPop"]],"animeyabu.net":[["acs","EventTarget.prototype.addEventListener","delete window"]],"aniwave.uk":[["aost","String.prototype.charCodeAt","https"],["rmnt","script","{delete window["]],"aquarius-horoscopes.com":[["nostif","displayMessage","2000"]],"areamobile.de":[["nostif",".call(null)","10"]],"artoffocas.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"artprojectsforkids.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"as-web.jp":[["rmnt","script","html-load.com"]],"astroages.com":[["noeval-if","/chp_?ad/"]],"astrology-seek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asumesi.com":[["aopr","adsBlocked"]],"aternos.org":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\:window,/"]],"atlantablackstar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atlaq.com":[["aopr","zfgformats"]],"ats-v.org":[["rmnt","script","html-load.com"]],"audiotrip.org":[["noeval-if","/chp_?ad/"]],"autobild.de":[["aopr","adSSetup"],["nostif",".call(null)","10"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"automesseweb.jp":[["rmnt","script","html-load.com"]],"autopareri.com":[["acs","jQuery","adblock"]],"autoroad.cz":[["nostif","check"]],"awfulannouncing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"az900practicetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakemesomesugar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"balkanteka.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"bantenexis.com":[["no-fetch-if","googlesyndication"]],"barkingroyalty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beingmelody.com":[["aopr","__eiPb"]],"beingtek.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"best-shopme.com":[["nosiif","visibility","1000"],["aopr","noAdBlock"]],"bestpornflix.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","popunder"],["set","flashvars.protect_block",""]],"bettingexchange.it":[["noeval-if","/chp_?ad/"]],"betweencarpools.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bigbuttshub2.top":[["no-fetch-if","widgets.outbrain.com"],["no-fetch-if","mode:no-cors"]],"bigsoccer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bike-news.jp":[["rmnt","script",").join(String.fromCharCode"]],"bikerumor.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"bimmerfest.com":[["rmnt","script","html-load.com"]],"biqle.com":[["acs","Math","zfgloaded"]],"birdforum.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blackwidof.org":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"blog-dnz.com":[["set","isAdBlocked","noopFunc"]],"blog.textpage.xyz":[["aopr","eazy_ad_unblocker"]],"blogtruyenmoi.com":[["aeld","click","alink"]],"blowjobgif.net":[["aopr","ExoDetector"]],"bluetracker.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bmw-driver.net":[["rmnt","script","html-load.com"]],"bokepxv.com":[["acs","document.querySelectorAll","popMagic"]],"boobsforfun.com":[["aopr","ExoLoader.serve"]],"boozyburbs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bottledprices.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bowfishingcountry.com":[["rmnt","script","html-load.com"]],"bradenton.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"brainknock.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"brawlhalla.fr":[["nostif","check"]],"broncosporttalk.com":[["rmnt","script","html-load.com"]],"brownthumbmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brutecentral.com":[["rmnt","script","html-load.com"]],"bunnylady.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"butterhand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buzzpit.net":[["noeval-if","/chp_?ad/"]],"bykelseysmith.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bysesayeveum.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"caller.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"camarozone.com":[["rmnt","script","html-load.com"]],"camseek.tv":[["aopr","decodeURI"]],"can-amelectric.com":[["rmnt","script","html-load.com"]],"canberratimes.com.au":[["set","cxStartDetectionProcess","noopFunc"]],"cardboardtranslation.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"careercontessa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"casamiacooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"casos-aislados.com":[["nosiif","visibility","1000"]],"cataz.to":[["acs","addEventListener","HTMLAllCollection"],["nowoif"]],"catforum.com":[["rmnt","script","html-load.com"]],"cbs17.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"centrocommercialevulcano.com":[["aopr","wpsite_clickable_data"]],"chat.tchatche.com":[["acs","document.getElementById","/Content/_AdBlock/AdBlockDetected.html"],["aopw","adBlckActive"],["nosiif","AB.html"],["set","feedBack.showAffilaePromo","noopFunc"],["set","ShowAdvertising","{}"]],"cheat.hax4you.net":[["acs","parseInt","break;case $."]],"cheese-cake.net":[["noeval-if","/chp_?ad/"]],"chiefmotorcycleforum.com":[["rmnt","script","html-load.com"]],"chillicothegazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"chinasichuanfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cine.to":[["aeld","","0x"],["aeld","","/open.*_blank/"]],"cinemablind.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinenerdle2.app":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cizgivedizi.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"clarityforum.com":[["rmnt","script","html-load.com"]],"classicreload.com":[["nostif","show()"]],"cloudvideo.tv":[["set","SubmitDownload1","noopFunc"],["nowoif"],["aopr","mm"],["rmnt","script",";}}};break;case $."],["acs","JSON","break;case"],["rmnt","script","FingerprintJS"]],"cmbarndominium.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coinfaucet.io":[["acs","atob","tabunder"],["nowebrtc"],["acs","decodeURI","zfgloadedpopup"]],"comandotorrentshds.org":[["acs","Math","break;case $."]],"conscioushacker.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"convert-case.softbaba.com":[["aopr","adblockDetector"]],"cookinwithmima.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coomer1.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"cornercoffeestore.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"counterstrike-hack.leforum.eu":[["aopr","document.body.style.backgroundPosition"]],"countryguess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"courseboat.com":[["nostif","brave_load_popup"]],"cpmlink.net":[["acs","decodeURI","decodeURIComponent"],["nowebrtc"],["aeld","","_blank"],["nano-sib"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"cracked.com":[["rmnt","script","/adblockerDisabled|\\.cmd\\.unshift|admiral/","excludes",",\\\""]],"crichd-player.top":[["acs","EventTarget.prototype.addEventListener","delete window"]],"cricketforum.com":[["rmnt","script","html-load.com"]],"crn.pl":[["noeval-if","/chp_?ad/"]],"crosswordbuzz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ctx1300forum.com":[["rmnt","script","html-load.com"]],"cuckoo4design.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cumshotlist.com":[["aopr","ExoLoader.serve"]],"cwtv.com":[["acs","document.createElement","admiral"],["rmnt","script","/admiral|-engaged/","excludes",",\\\""],["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"cx3forum.com":[["rmnt","script","html-load.com"]],"daddyfuckmovies.com":[["aopr","popit"],["aeld","popstate","noPop"]],"dafideff.com":[["acs","addEventListener","google_ad_client"]],"danielsplate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dayhikesneardenver.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ddl-francais.com":[["nowoif"]],"deepgoretube.site":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"demonyslowianskie.pl":[["noeval-if","/chp_?ad/"]],"denofgeek.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","/adblockerDisabled|\\.cmd\\.unshift|admiral/","excludes",",\\\""]],"denverbroncos.com":[["no-fetch-if","method:HEAD"]],"derbyshirelife.co.uk":[["set","adLight","true"]],"descarga.xyz":[["aopr","AaDetector"],["aopw","atOptions"],["aopw","smrtSB"]],"desertblossomcrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desicinema.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"developerinsider.co":[["set","runAdBlocker","false"]],"developgoodhabits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"devonlive.com":[["rmnt","script","nowprocket","excludes","self.__next"]],"devotag.com":[["acs","document.addEventListener","nextFunction"]],"dfast.app":[["nano-stb","countdown","*","0.001"]],"dfilmizle.com":[["aopr","initPu"]],"diamondfansub.com":[["noeval-if","/chp_?ad/"]],"dicariguru.com":[["aopw","adBlockDetected"]],"digi.no":[["aeld","error","/\\{[a-z]\\(e\\)\\}/"]],"digitalcameraworld.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"dirproxy.com":[["aeld","","break;case $."],["aost","Math",""],["nowoif"]],"dirtbikeplanet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"distiller.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"djamix.net":[["no-fetch-if","googlesyndication"]],"dodgedurango.net":[["rmnt","script","html-load.com"]],"dogvills.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dotesports.com":[["aopr","googletag"]],"dreamalittlebigger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dump.xxx":[["aopr","ExoLoader.serve"],["popads-dummy"],["aopr","open"]],"e-hausaufgaben.de":[["nostif",".call(null)","10"]],"ealingtimes.co.uk":[["set","adLight","true"]],"eatingeuropean.com":[["rmnt","script","/__adblocker|html-load/"]],"ebuxxx.net":[["acs","document.querySelectorAll","popMagic"]],"ecosportforum.com":[["rmnt","script","html-load.com"]],"edelwyn.com":[["rmnt","script","/__adblocker|html-load/"]],"edsupportforum.com":[["rmnt","script","html-load.com"]],"edziecko.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"eigachannel.jp":[["rmnt","script","html-load.com"]],"eksporimpor.com":[["aopw","adBlockDetected"]],"elamigosweb.com":[["rmnt","script",":visible"]],"electrek.co":[["rmnt","script","fundingChoicesCalled"]],"electronicshub.org":[["rmnt","script","/__adblocker|html-load/"]],"elicitfolio.com":[["rmnt","script","/__adblocker|html-load/"]],"ellenpoliticalfollow.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"emilybites.com":[["rmnt","script","/__adblocker|html-load/"]],"empressofdirt.net":[["rmnt","script","/__adblocker|html-load/"]],"english-dubbed.com":[["noeval-if","/chp_?ad/"]],"enzasquailhollowkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"epe.es":[["nostif","sub"]],"erospots.info":[["noeval"],["aopr","Pub2"]],"erotom.com":[["acs","String.fromCharCode","replace"]],"erreguete.gal":[["noeval-if","/chp_?ad/"]],"esportivos.fun":[["set","sandDetect","noopFunc"]],"etaplius.lt":[["rmnt","script","html-load.com"]],"euro2024direct.ru":[["rmnt","script","adserverDomain"],["acs","document.documentElement","break;case $."],["acs","document.createElement","break;case"]],"ev.io":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"evdeingilizcem.com":[["noeval-if","/chp_?ad/"]],"everydaymaven.com":[["rmnt","script","/__adblocker|html-load/"]],"everythingairfryer.com":[["rmnt","script","/__adblocker|html-load/"]],"examiner-enterprise.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"exego.app":[["set","blurred","false"],["set","document.hasFocus","trueFunc"]],"extremosports.club":[["acs","document.documentElement","break;case $."]],"fairyhorn.cc":[["aopr","b2a"]],"fanatik.com.tr":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"fantasyfootballcalculator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fantasyfootballgeek.co.uk":[["acs","String.fromCharCode","ai_"]],"fastfoodmenuprices.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fat-bike.com":[["aopr","wpsite_clickable_data"]],"filehorse.com":[["set","isAdBlockActive","false"]],"financacerta.com":[["nostif","checkAdBlock"],["rmnt","script","popUp"]],"financemonk.net":[["nowoif"]],"fireblades.org":[["rmnt","script","html-load.com"]],"fitnakedgirls.com":[["nowoif"]],"fjcforums.com":[["rmnt","script","html-load.com"]],"flaggle.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flixhub.co":[["nowoif","!notunmovie"]],"flowsnet.com":[["noeval-if","/chp_?ad/"]],"fnp.de":[["nostif",".call(null)","10"]],"focusrsoc.com":[["rmnt","script","html-load.com"]],"foodbloggersofcanada.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodgustoso.it":[["noeval-if","/chp_?ad/"]],"footyhunter.lol":[["nostif","sadbl"]],"fordgt500.com":[["rmnt","script","html-load.com"]],"fortniteinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forumdz.com":[["nostif","offsetHeight"]],"forums.hfboards.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"freeforums.net":[["acs","$","vglnk"]],"freehomeschooldeals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freenem.com":[["nowebrtc"]],"freepik-downloader.com":[["no-fetch-if","google-analytics"]],"freeporn8.com":[["set","flashvars.adv_pre_vast",""],["aopw","__spotSettings"],["aeld","/click|mousedown/","catch"]],"freepornsex.net":[["nostif","showModal"],["aost","setTimeout","ads"]],"freepreset.net":[["aeld","DOMContentLoaded","atob"]],"freexmovs.com":[["aopr","document.dispatchEvent"]],"freshshemaleporn.com":[["acs","document.querySelectorAll","popMagic"]],"ftlauderdalebeachcam.com":[["nostif","innerHTML"]],"fucktube4k.com":[["acs","document.querySelectorAll","popMagic"]],"fullofplants.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullydriven.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funktionalhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"futura-sciences.com":[["set","pa","{}"],["set","pa.privacy","{}"]],"gadgetreview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gadsdentimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"games.idahostatesman.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.pressdemocrat.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.sanluisobispo.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gayvideo.me":[["acs","document.querySelectorAll","popMagic"]],"gayxxxtube.net":[["acs","document.querySelectorAll","popMagic"]],"genesisforums.org":[["rmnt","script","html-load.com"]],"georgiapacking.org":[["rmnt","script","html-load.com"]],"giga.de":[["aost","XMLHttpRequest.prototype.open","svonm.com"],["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"ginabnutrition.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"godmods.com":[["aopw","mdp_deblocker"]],"godrakebulldogs.com":[["set","blockAdBlock","trueFunc"]],"godtube.com":[["aopr","googletag"],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"goerie.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"gofetishsex.com":[["aopr","Aloader.serve"],["noeval"]],"goingconcern.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goislanders.com":[["set","blockAdBlock","trueFunc"]],"goldwingowners.com":[["rmnt","script","html-load.com"]],"golem.de":[["acs","showAds"],["nostif","adBlockerDetected"],["nostif","show"],["no-xhr-if","damoh"],["nostif",".call(null)","10"]],"golfforum.com":[["rmnt","script","html-load.com"]],"good.is":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goodfoodpittsburgh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goodstream.one":[["set","adbon","0"]],"gopornindian.com":[["noeval"],["aopr","Aloader.serve"]],"gorecenter.com":[["aopr","b2a"]],"grandemx.org":[["rmnt","script","adserverDomain"]],"greatfallstribune.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"groomshaper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gtoforum.com":[["rmnt","script","html-load.com"]],"hacchaka.net":[["rmnt","script","html-load.com"]],"hamptonpirates.com":[["set","blockAdBlock","trueFunc"]],"handsonaswegrow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"handsthatbless.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hapanom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happyfoodhealthylife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardware--entwicklung-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"harpersbazaar.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"harwichandmanningtreestandard.co.uk":[["set","adLight","true"]],"hauntedplaces.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hayamimi-gunpla.com":[["acs","document.addEventListener","google_ad_client"]],"hcbdsm.com":[["acs","document.querySelectorAll","popMagic"]],"hdlivewireforum.com":[["rmnt","script","html-load.com"]],"heise.de":[["nostif",".call(null)","10"]],"helensburghadvertiser.co.uk":[["set","adLight","true"]],"hellosewing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"helmiau.com":[["acs","document.createElement","open"]],"hentaicovid.org":[["no-fetch-if","adsbygoogle"]],"hentaikai.com":[["acs","document.createElement","script.src"],["nowoif"]],"hilfen-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"hindishri.com":[["noeval-if","/chp_?ad/"]],"hindisink.com":[["aeld","visibilitychange"]],"homecookedroots.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemadelovely.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hondanxriders.com":[["rmnt","script","html-load.com"]],"hotelswithhottubinroom.club":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"housingaforest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"howtomakedinner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"huitranslation.com":[["aopr","b2a"]],"huskermax.com":[["rmnt","script","adblockerDisabled","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hypnohub.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"iceporn.tv":[["acs","document.querySelectorAll","popMagic"]],"ifish.net":[["rmnt","script","html-load.com"]],"imgfrost.net":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"imx.to":[["aopr","ExoLoader.serve"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"ineedskin.com":[["nostif","/adblock|isRequestPresent/"]],"inkristaskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"insidekstatesports.com":[["set","blockAdBlock","trueFunc"]],"insidetherustickitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"introvertdear.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iplocation.net":[["rmnt","script","adrecover.com"]],"islandpacket.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"jamiecooksitup.net":[["rmnt","script","/__adblocker|html-load/"]],"japanesefuck.com":[["aopr","ExoLoader.serve"]],"japanpornclip.com":[["aopr","popit"],["aeld","popstate","noPop"]],"japanxxx.asia":[["aopr","popit"],["aeld","popstate","noPop"]],"jdfanatics.com":[["rmnt","script","html-load.com"]],"jemontremasextape.com":[["aopr","localStorage"]],"jenontherun.com":[["rmnt","script","/__adblocker|html-load/"]],"jin115.com":[["rmnt","script","html-load.com"]],"jovemnerd.com.br":[["rmnt","script","closeAd"]],"joyn.at":[["no-fetch-if","zomap.de"]],"joythebaker.com":[["rmnt","script","/__adblocker|html-load/"]],"jpaceforum.com":[["rmnt","script","html-load.com"]],"jsugamecocksports.com":[["set","blockAdBlock","trueFunc"]],"justataste.com":[["rmnt","script","/__adblocker|html-load/"]],"justplaincooking.ca":[["rmnt","script","/__adblocker|html-load/"]],"jyoseisama.com":[["rmnt","script","html-load.com"]],"kaaltv.com":[["rmnt","script","/__adblocker|html-load/"]],"keepkoding.com":[["aost","String.prototype.charCodeAt","ai_"]],"khabarbyte.com":[["noeval-if","/chp_?ad/"]],"khsm.io":[["aopw","afScript"],["nostif","getComputedStyle"],["nosiif","visibility","1000"]],"kiatellurideforums.com":[["rmnt","script","html-load.com"]],"kijolariat.net":[["rmnt","script","html-load.com"]],"kingshotguides.com":[["rmnt","script","/__adblocker|html-load/"]],"kingstreamz.site":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","popundersPerIP"]],"kinoger.ru":[["aopr","my_pop"]],"klettern.de":[["nostif",".call(null)","10"]],"klooam.com":[["set","google_unique_id","6"]],"kold.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kpreps.com":[["rmnt","script","/__adblocker|html-load/"]],"ktee.com":[["set","google_unique_id","6"]],"kurierverlag.de":[["nostif",".call(null)","10"]],"kxly.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"lakemchenryscanner.com":[["rmnt","script","/__adblocker|html-load/"]],"laradiobbs.net":[["set","adblock","false"]],"lavidanomad.com":[["rmnt","script","/__adblocker|html-load/"]],"leagueofgraphs.com":[["rmnt","script","/__adblocker|html-load/"],["nostif","adblock"]],"leakshaven.com":[["no-fetch-if","googlesyndication"]],"learningjquery.com":[["rmnt","script","/__adblocker|html-load/"]],"ledburyreporter.co.uk":[["set","adLight","true"]],"letstraveltomexico.com":[["rmnt","script","/__adblocker|html-load/"]],"lettersolver.com":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"libertycity.net":[["nano-sib","timer"]],"life-with-confidence.com":[["rmnt","script","/__adblocker|html-load/"]],"lifeyourway.net":[["rmnt","script","/__adblocker|html-load/"]],"ligainsider.de":[["acs","$","MutationObserver"],["aopr","LIDetector"],["rmnt","script","ProbeError"],["nostif","/unknown|BLOCKED/i"]],"likemag.com":[["nostif",".call(null)","10"]],"lindalastattack.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"linsfood.com":[["rmnt","script","/__adblocker|html-load/"]],"littleflowercottage.com":[["rmnt","script","/__adblocker|html-load/"]],"livecamrips.to":[["acs","WebAssembly","atob"]],"liveforlivemusic.com":[["rmnt","script","/__adblocker|html-load/"]],"livingrichwithcoupons.com":[["rmnt","script","/__adblocker|html-load/"]],"lnk.parts":[["aopr","popAdsClickCount"],["nano-sib","","","0"],["nostif","redirectPage"]],"logicalharmony.net":[["rmnt","script","/__adblocker|html-load/"]],"longbournfarm.com":[["rmnt","script","/__adblocker|html-load/"]],"losporn.org":[["aopr","ExoLoader.serve"],["nowoif"]],"lover937.net":[["acs","document.write"],["set","checkerimg","noopFunc"],["acs","setTimeout","document.getElementById"]],"lustaufsleben.at":[["nostif",".call(null)","10"]],"m.bloggingguidance.com":[["set","blurred","false"]],"macanevowners.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"madincrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mainelysubarus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"majestyusa.com":[["rmnt","script","html-load.com"]],"mamieastuce.com":[["rmnt","script","/==undefined.*body/"]],"mangacrab.org":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"],["rmnt","script","Datafadace"]],"mangahere.today":[["acs","parseInt","break;case $."]],"mangaraw18.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"mangaread.org":[["acs","document.addEventListener","promos"]],"mangasite.org":[["aopr","open"]],"manhuarmtl.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["nowoif"]],"mapleleafshotstove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marcandangel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masslive.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","adblockerDisabled","excludes",",\\\""]],"math-salamanders.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maturell.com":[["aopr","document.dispatchEvent"]],"maturepornphoto.com":[["acs","document.querySelectorAll","popMagic"]],"maxisciences.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","()=>eval"]],"maxtubeporn.net":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"meatloafandmelodrama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"medihelp.life":[["aopw","ai_adb_overlay"]],"mel.fm":[["nofab"]],"mercurycougar.net":[["rmnt","script","html-load.com"]],"mercurynews.com":[["set","CnnXt.Event.fire","noopFunc"]],"messen.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"meteo60.fr":[["rmnt","script","html-load.com"]],"mexicocassie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miamibeachradio.com":[["aopr","adp"]],"midhudsonnews.com":[["rmnt","script","html-load.com"]],"midwestfoodieblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miketabor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miklpro.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"minif56.com":[["rmnt","script","html-load.com"]],"mitsubishi-forums.com":[["rmnt","script","html-load.com"]],"mmfenix.com":[["noeval-if","/chp_?ad/"]],"mobile-tracker-free.com":[["set","detectBlockAds","noopFunc"]],"moco.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"modelisme.com":[["set","closeBlockerModal","false"]],"momswithmouseears.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momtubeporn.xxx":[["acs","document.querySelectorAll","popMagic"]],"monkeyanimalporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"montgomeryadvertiser.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"moolasavingmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"morinaga-office.net":[["noeval-if","/chp_?ad/"]],"mossdigitalpublishing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motorbasar.de":[["nostif",".call(null)","10"]],"motorradfrage.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"movieweb.com":[["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"mprogaming.com":[["noeval-if","/chp_?ad/"]],"mrishtanna.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"msgo.com":[["rmnt","script","html-load.com"]],"murphybedhq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"muscleevo.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myadventuresacrosstheworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myanimelist.net":[["rmnt","style","body:is(:not(.ownlist))"]],"mybestxtube.com":[["aopr","document.dispatchEvent"],["aopr","open"]],"myflixerz.to":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"mylinkat.com":[["noeval-if","/chp_?ad/"]],"mysostech.com":[["aopw","ai_adb_overlay"]],"mysweetsavannah.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"national-park.com":[["aeld","click","window.open"]],"nationalworld.com":[["rmnt","script","await eval"]],"nbabox.co":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"neonxcloud.top":[["nowoif","!gcloud"]],"nephobox.com":[["set","Object.prototype.isAllAdClose","true"]],"netatama.net":[["rmnt","script","html-load.com"]],"newbrunswickfishing.com":[["rmnt","script","html-load.com"]],"newjerseyhunter.com":[["rmnt","script","html-load.com"]],"newscionxb.com":[["rmnt","script","html-load.com"]],"newsweekjapan.jp":[["rmnt","script","html-load.com"]],"nexusgames.to":[["acs","document.addEventListener","window.open"],["nowoif","_blank"]],"nflstreams.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["acs","navigator","FingerprintJS"],["acs","setTimeout","admc"]],"nichapk.com":[["nano-sib","timer","*","0.02"]],"nickishomemadecrafts.com":[["rmnt","script","/__adblocker|html-load/"]],"nissancubelife.com":[["rmnt","script","html-load.com"]],"nlab.itmedia.co.jp":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","html-load.com"]],"nokiahacking.pl":[["aopr","adsbygoogle.loaded"]],"nontonvidoy.online":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"nordot.app":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"nosidebar.com":[["rmnt","script","/__adblocker|html-load/"]],"novelaplay.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aeld","DOMContentLoaded","bait"],["nowoif"]],"ntertain.us":[["rmnt","script","/__adblocker|html-load/"]],"nudisteens.com":[["noeval"]],"nulljungle.com":[["aeld","DOMContentLoaded","adsBlocked"],["nostif","innerHTML"]],"nvimfreak.com":[["noeval-if","/chp_?ad/"]],"nyfirearms.com":[["rmnt","script","html-load.com"]],"nytcrosswordanswers.org":[["rmnt","script","/__adblocker|html-load/"]],"ondemandkorea.com":[["aopr","pbjs.libLoaded"],["no-fetch-if","/doubleclick|googlesyndication/"]],"onepiece-manga-online.net":[["acs","document.querySelectorAll","popMagic"]],"oneplace.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"onihimechan.com":[["rmnt","script","html-load.com"]],"onlinekosten.de":[["nostif",".call(null)","10"]],"onpointfresh.com":[["rmnt","script","/__adblocker|html-load/"]],"oombawkadesigncrochet.com":[["rmnt","script","/__adblocker|html-load/"]],"oricon.co.jp":[["rmnt","script","html-load.com"],["rmnt","script","/\\(async\\(\\)=>\\{try\\{(const|var)/"]],"orirom.com":[["acs","eval","AdBlock"]],"overthebigmoon.com":[["rmnt","script","/__adblocker|html-load/"]],"oxanime.com":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"paddlingmag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"palmbeachdailynews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"panigalev4club.com":[["rmnt","script","html-load.com"]],"pawsnpups.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peachytube.com":[["aopr","ExoLoader.addZone"]],"pearforum.com":[["rmnt","script","html-load.com"]],"perfectbrew.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pertpracticetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pestseek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pghk.blogspot.com":[["acs","addEventListener","google_ad_client"]],"photographypursuits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"phys.org":[["set-local-storage-item","scxNewsHits","$remove$"]],"physicianonfire.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picngt.shop":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"pillowcase.su":[["rmnt","script","/h=decodeURIComponent|\"popundersPerIP\"/"]],"pinayscandalz.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"plagiarismchecker.co":[["nostif","showPopup"]],"planetminecraft.com":[["nano-sib","countdown"]],"platinporno.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"playcast.click":[["acs","EventTarget.prototype.addEventListener","key in document"],["rmnt","script","adserverDomain"],["nowoif"]],"player.glomex.com":[["set","Object.prototype._getSalesHouseConfigurations","noopFunc"],["no-fetch-if","player-feedback"]],"playtube.co.za":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"playtube.tv":[["nowoif"]],"pnj.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pornerbros.com":[["aopr","ExoLoader"],["aopw","ads_priv"],["set","adsEnabled","true"],["aopr","document.dispatchEvent"]],"pornfeet.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"pornfuzzy.com":[["acs","document.querySelectorAll","popMagic"]],"pornohelm.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"pornohubonline.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"pornotrack.net":[["acs","document.querySelectorAll","popMagic"]],"portaldoaz.org":[["noeval-if","/chp_?ad/"]],"portcanaveralwebcam.com":[["nostif","innerHTML"]],"ppatour.com":[["rmnt","script","()=>eval"]],"praxis-jugendarbeit.de":[["nostif","nextFunction","2000"]],"predatortalk.com":[["rmnt","script","html-load.com"]],"preludeonline.com":[["rmnt","script","html-load.com"]],"premierfantasytools.com":[["aopw","checkForAdBlocker"]],"prettyprovidence.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prod.hydra.sophos.com":[["set","Sentry","{}"],["set","Sentry.addBreadcrumb","noopFunc"]],"prodigalpieces.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"promasterforum.com":[["rmnt","script","html-load.com"]],"prospectingaustralia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"psychologydictionary.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pugam.com":[["acs","jQuery","ai_adb"]],"quizlet.com":[["rc","has-sidebar-adz|DashboardPage-inner","div[class^=\"DashboardPage-inner\"]","stay"],["rc","hasStickyAd","div.hasStickyAd[class^=\"SetPage\"]","stay"],["nano-stb"],["set","__NEXT_DATA__.props.pageProps.adsConfig","undefined"]],"r125forum.com":[["rmnt","script","html-load.com"]],"radio-belgie.be":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.es":[["nostif",".call(null)","10"]],"raiderking.com":[["rmnt","script","/__adblocker|html-load/"]],"ralli.ee":[["noeval-if","js_func_decode_base_64"]],"rapload.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"razzball.com":[["nostif","[native code]","500"],["rmnt","script","head.appendChild.bind"],["rmnt","script","/^\\(async\\(\\)=>\\{function.{1,200}head.{1,100}\\.bind.{1,900}location\\.href.{1,100}\\}\\)\\(\\);$/"]],"redhillandreigatelife.co.uk":[["set","adLight","true"]],"redlandsdailyfacts.com":[["set","CnnXt.Event.fire","noopFunc"]],"redlion.net":[["set","aoAdBlockDetected","false"]],"redtubemov.com":[["acs","document.createElement","script"]],"reelmama.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"reinventeddelaware.com":[["rmnt","script","/__adblocker|html-load/"]],"remixsearch.net":[["rmnt","script","adblocker"]],"ribbelmonster.de":[["noeval-if","/chp_?ad/"]],"riggosrag.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"roadstarraider.com":[["rmnt","script","html-load.com"]],"robloxscripts.com":[["nostif","ai_adb"]],"romatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"rule34.paheal.net":[["acs","document.querySelectorAll","popMagic"]],"runmods.com":[["nano-sib"]],"sailnet.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"saltnpepperhere.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"samdoesherbest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sandrarose.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"savannahnow.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"scentselective.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"screenfetch4.cyou":[["acs","addEventListener","HTMLAllCollection"]],"scripcheck.great-site.net":[["noeval-if","/chp_?ad/"]],"servustv.com":[["nostif","","10000-15000"],["nostif","/adex|loadAds|adCollapsedCount|ad-?block/i"],["nosiif","/adex|loadAds|adCollapsedCount|ad-?block/i"],["aeld","error","/function\\([a-z]\\){[a-z]\\([a-z]\\)}/"],["no-fetch-if","doubleclick"],["set","OneTrust","{}"],["no-fetch-if","method:HEAD"]],"sewcanshe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexgames.xxx":[["set","starPop","1"]],"sexy-youtubers.com":[["acs","document.querySelectorAll","popMagic"]],"sexybabesz.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"]],"sfirmware.com":[["nano-sib"]],"shannoncoldalready.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"shanurdu.com":[["noeval-if","/chp_?ad/"]],"sharktankblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharktankrecap.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sharpen-free-design-generator.netlify.app":[["set","fathom","{}"],["set","fathom.trackGoal","noopFunc"]],"showdownforrelief.com":[["set","blockAdBlock","trueFunc"]],"showrovblog.com":[["noeval-if","/chp_?ad/"]],"sieutamphim.org":[["acs","globalThis","break;case"]],"simguided.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simple-nourished-living.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplejoy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sixvegansisters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sizzlingeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skyandtelescope.org":[["rmnt","script","html-load.com"]],"slaughtergays.com":[["aopr","decodeURI"],["nowoif"]],"smartinhome.pl":[["noeval-if","/chp_?ad/"]],"smithandwessonforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"solterraforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sommerporno.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"son.co.za":[["aopr","googletag"]],"sonataforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"soundboards.gg":[["no-xhr-if","adsbygoogle"]],"souq-design.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["no-fetch-if","/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["no-xhr-if","/doubleclick|googlesyndication/"]],"sp500-up.com":[["noeval-if","/chp_?ad/"]],"spendwithpennies.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spontacts.com":[["nostif","detectAdBlocker"]],"sport890.com.uy":[["acs","gtag","adblock"]],"sportstream.live":[["aopr","checkABlockP"]],"springfieldspringfield.co.uk":[["nostif","ads","750"]],"standard.co.uk":[["rmnt","script","html-load.com"],["set","JSGlobals.prebidEnabled","false"],["nano-stb","[native code]","3000","0.001"],["nano-stb","i||(e(),i=!0)","2500","0.001"]],"stopstreamtv.net":[["acs","parseInt","break;case $."]],"studyrocket.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugarologie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sunhope.it":[["nosiif","document.getElementById","10000"]],"super-ethanol.com":[["noeval-if","/chp_?ad/"],["nosiif","visibility","1000"]],"surf-forecast.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"surveychris.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"szbz.de":[["set","iom","{}"]],"talkparrots.com":[["rmnt","script","html-load.com"]],"tampabay.com":[["set","CnnXt.Event.fire","noopFunc"]],"tatli.biz":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"tatsublog.com":[["noeval-if","/chp_?ad/"]],"teachmemicro.com":[["set","DHAntiAdBlocker","true"]],"teamtalk.com":[["rmnt","script","/_0x|'innerHTML'/"]],"techgeek.digital":[["acs","document.documentElement","break;case $."],["aopr","adblockDetector"],["nowoif"],["set","blurred","false"]],"techperiod.com":[["set","blockAdBlock","true"]],"thatdisneyfam.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thatslowcarb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebigblogs.com":[["noeval-if","/chp_?ad/"]],"thebigmansworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecalculatorsite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecartoonporntube.com":[["acs","document.querySelectorAll","popMagic"]],"thechroniclesofhome.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"thecollegeinvestor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecookful.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thediaryofadisneydad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefreedictionary.com":[["nostif","warn"],["aopr","adc"],["set","majorse","true"]],"theglampad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehungrybites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theinspiredroom.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thejobsmovie.com":[["nostif","adsBlocked"]],"thelemonbowl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenewsdrill.com":[["no-fetch-if","method:HEAD"]],"theprudentgarden.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"thepublicopinion.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thereporter.com":[["set","CnnXt.Event.fire","noopFunc"]],"thesaltymarshmallow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestar.com":[["aost","document.createElement","detect"],["nano-stb","bFired","*"],["nano-sib","scrollIncrement","*"]],"theunconventionalroute.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewhig.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"]],"thispilgrimlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thunderousintentions.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"timestelegram.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"tiscali.it":[["set","adEnable","true"]],"todaysthebestday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tokyomotion.com":[["acs","document.querySelectorAll","popMagic"],["aopw","__aaZoneid"]],"toonhub4u.me":[["href-sanitizer","a[href^=\"https://toonhub4u.com/redirect/\"]","?url -base64"]],"topnewsshow.com":[["noeval-if","/chp_?ad/"],["nostif","css_class.show"]],"topolinoforum.com":[["rmnt","script","html-load.com"]],"torupload.com":[["nowoif","","10","obj"],["nano-sib","/seconds--|timeLeft--/","*"],["set","document.hidden","true"],["set","HTMLScriptElement.prototype.onerror","undefined"],["no-fetch-if","/pub\\.clickadu|bing\\.com/"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"toyhabits.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trannysexmpegs.com":[["acs","document.querySelectorAll","popMagic"]],"trawlerforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trippy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trucs-et-astuces.co":[["rmnt","script","await eval"]],"truity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tube.shegods.com":[["nowoif"]],"tukoz.com":[["ra","onclick","a[href][onclick^=\"window.open\"]","complete"],["nowoif","_blank"],["aeld","click","overlay"]],"tvchoicemagazine.co.uk":[["acs","$","onload"]],"tweaktown.com":[["rmnt","script","html-load.com"]],"uncomplicatedchef.com":[["rmnt","script","/__adblocker|html-load/"]],"unite-guide.com":[["rmnt","script","detect"]],"upmedia.mg":[["rmnt","script","adrecover.com"]],"uppercutmma.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"uptobox.com":[["nowebrtc"],["aopw","Fingerprint2"],["set","jsUnda","noopFunc"]],"ur-files.com":[["acs","Math","zfgloaded"]],"usatoday.com":[["aopr","_sp_._networkListenerData"],["set","gnt.x.uam","undefined","runAt","interactive"],["set","gnt.u.z","true"]],"ustream.pro":[["rmnt","script","popundersPerIP"]],"utahsweetsavings.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"valuable.hatenablog.com":[["acs","document.addEventListener","google_ad_client"]],"vdbtm.shop":[["acs","document.documentElement","break;case $."]],"vectorx.top":[["no-fetch-if","googlesyndication"]],"vfxmed.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"victor-mochere.com":[["nostif","ai_"]],"video-seed.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"]],"video.pemersatu.org":[["set-attr","iframe#pmt-smart-frame[src=\"about:blank\"][data-pmt-player-src^=\"http\"]","src","[data-pmt-player-src]"]],"videoxxx.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"violablu.net":[["noeval-if","/chp_?ad/"]],"vitadacelebrita.com":[["noeval-if","/chp_?ad/"]],"vocalley.com":[["set","timeSec","0"],["nano-stb","getlink","*","0.001"],["noeval-if","replace"]],"voidtruth.com":[["noeval-if","/chp_?ad/"]],"voyageutah.com":[["rmnt","script","/__adblocker|html-load/"]],"vsrc.su":[["acs","addEventListener","HTMLAllCollection"]],"vtcoa.com":[["rmnt","script","/__adblocker|html-load/"]],"vumoo.cc":[["ra","href","#clickfakeplayer"]],"wallup.net":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"warezcdn.lat":[["aeld","","pop_"]],"warezsite.net":[["aopr","open"]],"watchadsontape.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"watchallchannels.com":[["acs","jQuery","ai_adb"]],"watchtv24.com":[["set","Brid.A9.prototype.backfillAdUnits","[]"]],"waternitylab.com":[["rmnt","script","/__adblocker|html-load/"]],"webxzplay.cfd":[["rmnt","script","{delete window["]],"wepc.com":[["rmnt","script","/__adblocker|html-load/"],["aopr","HTMLIFrameElement"]],"wharfedaleobserver.co.uk":[["set","adLight","true"]],"winboard.org":[["nostif",".call(null)","10"]],"winfuture.de":[["nostif",".call(null)","10"],["nostif","error-report.com"],["aeld","load","error-report.com"],["rmnt","script","html-load.com"],["json-prune","adtagparameter","enabled"]],"winshell.de":[["set","detectAdBlock","noopFunc"]],"wjhl.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"word-grabber.com":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"workwithjoshua.com":[["rmnt","script","/__adblocker|html-load/"]],"worldclock.com":[["rmnt","script","/__adblocker|html-load/"]],"worldsalaries.com":[["rmnt","script","/__adblocker|html-load/"]],"wrestleview.com":[["rmnt","script","/__adblocker|html-load/"]],"wrestlinginc.com":[["set","admiral","noopFunc"],["rmnt","script","/__adblocker|html-load/"]],"wtrf.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"www.facebook.com":[["json-prune","require.0.3.0.__bbox.require.[].3.1.__bbox.result.data.serpResponse.results.edges.[-].relay_rendering_strategy.view_model.story.sponsored_data.ad_id"],["json-prune","require.0.3.0.__bbox.require.[].3.1.__bbox.result.data.node","require.0.3.0.__bbox.require.[].3.1.__bbox.result.data.node.story.sponsored_data.ad_id"],["json-prune","require.0.3.0.__bbox.require.[].3.1.__bbox.result.data.marketplace_search.feed_units.edges.[-].node.story.sponsored_data.ad_id"],["json-prune","require.0.3.0.__bbox.require.[].3.1.__bbox.result.data.viewer.marketplace_feed_stories.edges.[-].node.story.sponsored_data.ad_id"],["json-prune","require.0.3.0.__bbox.require.[].3.1.__bbox.result.data.viewer.sideFeedUnit.nodes.[].new_adverts.nodes.[-].sponsored_data"],["json-prune","require.0.3.0.__bbox.require.[].3.1.__bbox.result.data.serpResponse.results.edges.[-].rendering_strategy.view_model.story.sponsored_data.ad_id"]],"xfreepornsite.com":[["acs","document.querySelectorAll","popMagic"]],"xhomealone.com":[["set","flashvars.popunder_url",""]],"xhreal2.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xozilla.xxx":[["aost","HTMLSelectElement","Object"]],"xpornium.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","window.open"]],"xteensex.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"xvideos-full.com":[["nowoif"]],"xxxbfvideo.net":[["rmnt","script","document.cookie"],["nowoif"]],"xxxsex.pro":[["aopr","popit"],["aeld","popstate","noPop"]],"yamahastarstryker.com":[["rmnt","script","html-load.com"]],"yifysub.net":[["nano-sib","#timer"]],"youbrewmytea.com":[["rmnt","script","/__adblocker|html-load/"]],"youngleak.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"],["acs","document.dispatchEvent","myEl"],["aopr","ExoLoader.serve"]],"youpit.xyz":[["noeval-if","/chp_?ad/"]],"youranshare.com":[["acs","$",".init"]],"yts-subs.net":[["nostif","()","150"]],"zedge.net":[["nano-sib","l-1"]],"zestuous.com":[["rmnt","script","/__adblocker|html-load/"]],"zillow.com":[["set","DD_RUM.addError","noopFunc"],["set","DD_RUM.addAction","noopFunc"]],"zoompussy.com":[["aopr","loadTool"]],"zxforums.com":[["rmnt","script","html-load.com"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
