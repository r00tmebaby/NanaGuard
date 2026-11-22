/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"100layercake.com":[["rmnt","script","/__adblocker|html-load/"]],"18teen-tube.com":[["acs","document.dispatchEvent","myEl"]],"1teentubeporn.com":[["acs","document.querySelectorAll","popMagic"]],"21dayhero.com":[["rmnt","script","/__adblocker|html-load/"]],"3d-porn.org":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"3dhentai.club":[["acs","document.querySelectorAll","popMagic"]],"48daysworkout.com":[["rmnt","script","/__adblocker|html-load/"]],"6mt.net":[["rmnt","script","html-load.com"]],"718forum.com":[["rmnt","script","html-load.com"]],"7xm.xyz":[["acs","eval","replace"],["rmnt","script","/AdBlock/i"]],"85po.com":[["acs","document.querySelectorAll","popMagic"],["set","flashvars.protect_block",""],["set","console.clear","noopFunc"]],"8boobs.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"9animes.ru":[["no-xhr-if","googlesyndication"]],"a-hentai.tv":[["acs","document.querySelectorAll","popMagic"]],"aachener-nachrichten.de":[["nostif",".call(null)","10"]],"abcya.com":[["nano-stb","resumeGame","5000","0.001"],["nano-stb","t++","500"]],"abczdrowie.pl":[["nano-sib","consoleLoaded?clearInterval"]],"ac3filter.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acefile.co":[["aopw","popup_ads"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"aclassclub.co.uk":[["rmnt","script","html-load.com"]],"acouplecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"actresstoday.com":[["acs","eval","replace"]],"adultasianporn.com":[["aeld","getexoloader"],["remove-cookie","/^/"]],"aerocorner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"afeelachat.com":[["rmnt","script","html-load.com"]],"alaskananooks.com":[["set","blockAdBlock","trueFunc"]],"alcasthq.com":[["aopr","performance"]],"algodaodocescan.com.br":[["acs","document.querySelectorAll","popMagic"],["acs","document.documentElement","break;case $."],["noeval-if","/chp_?ad/"]],"allthepartyideas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allthingswithpurpose.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alphasource.site":[["noeval-if","/chp_?ad/"]],"althub.club":[["rmnt","script","Adblock"]],"amateurblog.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"androidspill.com":[["aopw","adBlockDetected"]],"animelatinohd.com":[["aeld","load","popMagic"]],"animesexbar.com":[["aopr","popit"],["aeld","popstate","noPop"]],"aniworld.to":[["aeld","","break;case $."]],"aosmark.com":[["set","detectAB1","noopFunc"]],"arrmaforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atlantic10.com":[["set","blockAdBlock","trueFunc"]],"atleticalive.it":[["noeval-if","/chp_?ad/"]],"aubreyskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ausrc.com":[["rmnt","script","html-load.com"]],"autocadcommand.com":[["noeval-if","/chp_?ad/"]],"automaticwasher.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"avitter.net":[["noeval-if","/chp_?ad/"],["aopr","b2a"]],"bahaiforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakedcollective.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baketobefit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bandstand.ph":[["noeval-if","/chp_?ad/"]],"bargainbriana.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"basketballforum.com":[["rmnt","script","html-load.com"]],"basketballhistory.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bcaquaria.com":[["rmnt","script","html-load.com"]],"benzworld.org":[["rmnt","script","html-load.com"]],"best18teens.com":[["acs","document.querySelectorAll","popMagic"]],"beyondfrosting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bfclive.com":[["nowoif"],["rmnt","script","/adb/i"]],"bftactics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bharian.com.my":[["aopr","SmartWallSDK"]],"biggleswadetoday.co.uk":[["rmnt","script","await eval"]],"bikerszene.de":[["nostif",".call(null)","10"]],"birdwatchinghq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blackandteal.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"blackweightlosssuccess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blankcalendarpages.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blogghetti.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blowxxxtube.com":[["noeval"],["aopr","Aloader.serve"]],"boards.net":[["acs","$","vglnk"]],"boombj.com":[["aost","Math","_0x"]],"borntobefuck.com":[["rmnt","script","window.open"]],"boysfood.com":[["aopw","encodeURIComponent"]],"breaddad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"breezynetworks.co.za":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"briefeguru.de":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"brooklynlimestone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"btv.bg":[["no-xhr-if","googlesyndication"],["no-fetch-if","googlesyndication"]],"buffalowdown.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"buffstreams.app":[["rmnt","script","adserverDomain"]],"builtlean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burncitysports.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burnhamandhighbridgeweeklynews.co.uk":[["set","adLight","true"]],"business-live.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"butterpolish.com":[["acs","eval","replace"]],"byseqekaho.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"bzforums.com":[["rmnt","script","html-load.com"]],"caabcrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"callfuck.com":[["noeval"],["aopr","Aloader.serve"]],"camporn.tube":[["acs","crakPopInParams"],["acs","onload","onclick"]],"cancer-horoscopes.com":[["nostif","displayMessage","2000"]],"cat-world.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cccam4sat.com":[["rmnt","script","antiAdBlockerHandler"]],"cehennemstream.xyz":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"celebratingsimply.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cg-gamespc.net":[["rmnt","script",":visible"],["nostif","checkAdblockUser"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"chinese-pics.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"christiantrendy.com":[["noeval-if","/chp_?ad/"]],"ciudadblogger.com":[["aeld","load","onload"]],"clactonandfrintongazette.co.uk":[["set","adLight","true"]],"clarionledger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"classyclutter.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleaneatingveggiegirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clickapi.net":[["nowoif","_blank"]],"cloud-computing-central.com":[["acs","atob","-0x1"],["nostif","-0x"]],"cnbc.com":[["set","cnbc.canShowAds","true"]],"cnet.com":[["acs","admiral"]],"cockroachfacts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coin-profits.xyz":[["noeval-if","/chp_?ad/"],["nostif","nextFunction"]],"cola16.app":[["noeval-if","/chp_?ad/"]],"collegefootballplayoff.com":[["set","blockAdBlock","trueFunc"]],"coloradodiesel.org":[["rmnt","script","html-load.com"]],"colorxs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comedyshow.to":[["acs","document.documentElement","break;case $."]],"comexlive.org":[["acs","jQuery","No"]],"comicyears.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"compucalitv.com":[["aeld","DOMContentLoaded","compupaste"],["aopr","redirectURL"]],"convert2mp3.club":[["nowoif"]],"cookingforpeanuts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingmydreams.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"copycatchic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cotannualconference.org.uk":[["acs","document.createElement","script"]],"couponcravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"course-downloader.com":[["acs","addEventListener","blocker"]],"coverapi.space":[["nowoif"]],"cozinhalegal.com.br":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crackstreamshd.click":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"cravetheplanet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"createcraftprint.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crvownersclub.com":[["rmnt","script","html-load.com"]],"cryptoforu.org":[["acs","JSON.parse","break;case $."]],"culinaryhill.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"datacheap.io":[["no-fetch-if","ads"],["aeld","load","bypass"]],"dealmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"decoholic.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deeplysouthernhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deliacreates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deseneledublate.com":[["acs","Math","XMLHttpRequest"],["aopr","AaDetector"],["nowoif"]],"desihub.sh":[["acs","WebAssembly","atob"]],"destyy.com":[["set","globalThis","null"],["aopr","NREUM"],["acs","Math","break;case $."]],"detroitnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"diamondcentric.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diamondlobby.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diampokusy.com":[["aopr","__Y"]],"diariodemallorca.es":[["set","pr_okvalida","true"],["nostif","sub"]],"dinersdriveinsdiveslocations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"discussfastpitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dishytech.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diychatroom.com":[["rmnt","script","html-load.com"]],"diynatural.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dobreprogramy.pl":[["nano-sib","consoleLoaded?clearInterval"]],"dodge-nitro.com":[["rmnt","script","html-load.com"]],"domestically-designed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"downloadwella.com":[["aeld","","break;case $."]],"dralpana.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drivefire.co":[["aopr","AaDetector"]],"drivemehungry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dukesavenue.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dvdrev.com":[["rmnt","#text","関連動画"]],"dz4up1.com":[["acs","document.getElementById","adblockinfo"]],"eartheclipse.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"ecamrips.com":[["rmnt","script","/document\\.head\\.appendChild|window\\.open/"],["acs","document.cookie","document.head.appendChild"],["acs","OpenInNewTab_Over"]],"edukamer.info":[["noeval-if","/chp_?ad/"]],"eee1.lat":[["set","HTMLImageElement.prototype.onerror","undefined"]],"einewelteinezukunft.de":[["noeval-if","/chp_?ad/"]],"elitegoltv.org":[["aopr","open"]],"elperiodico.com":[["nostif","sub"]],"eltern.de":[["aopr","_sp_.mms.startMsg"],["nostif",".call(null)","10"]],"embed.nextgencloudtools.com":[["acs","addEventListener","HTMLAllCollection"]],"embed4me.com":[["aeld","click","adId"],["nowoif","_blank"]],"emisorascolombianas.co":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"enterprisenews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"equipmenttrader.com":[["rmnt","script","html-load.com"]],"eramuslim.com":[["noeval-if","/chp_?ad/"]],"erothots1.com":[["rmnt","script","/popMagic|pop1stp/"]],"eroxia.com":[["aopr","ExoLoader"]],"essen-und-trinken.de":[["aopr","_sp_.mms.startMsg"],["nostif",".call(null)","10"]],"estrepublicain.fr":[["aopr","__eiPb"]],"ev3forums.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"eveningnews24.co.uk":[["set","adLight","true"]],"ex-500.com":[["rmnt","script","html-load.com"]],"ext.to":[["rmnt","script","adserverDomain"]],"eyalo.com":[["aost","String.prototype.charCodeAt","ai_"]],"f16px.com":[["nowoif"],["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"]],"fakedetail.com":[["aeld","","break;case $."]],"familiesgotravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"famivita.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fanbuzz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"faz.net":[["acs","$","_sp_._networkListenerData"]],"femalefoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fidlarmusic.com":[["nano-sib","counter","*"]],"fikfok.net":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"filmisub.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob","/^data:/"],["aeld","DOMContentLoaded","window.open"],["no-xhr-if","ads"],["aost","setTimeout","adsBlocked"]],"filmy4wap.uno":[["nowoif"]],"finanzas-vida.com":[["set","blurred","false"]],"firsthomelovelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fit4art.com":[["nostif","adblock"]],"flaticon.com":[["aopr","pu_url"]],"foodiesterminal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fosslinux.com":[["nostif","ShowAdBLockerNotice"]],"fplstatistics.com":[["no-fetch-if","ads"],["nostif","adStatus"]],"fr.streamon-sport.ru":[["acs","document.createElement","onerror"],["acs","document.documentElement","break;case $."]],"freebiesmockup.com":[["noeval-if","/chp_?ad/"]],"freecoursesites.com":[["acs","eval","replace"]],"freedomresidence.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freefatpornmovies.com":[["acs","document.querySelectorAll","popMagic"]],"freeindianporn.mobi":[["aeld","/.?/","popMagic"]],"freemagazines.top":[["aopr","b2a"],["nostif","showModal"],["acs","eval","replace"],["rmnt","script",".offsetParent"],["no-xhr-if","/doubleclick|googlesyndication/"],["aeld","DOMContentLoaded","/atob|overlay/"]],"freeplayervideo.com":[["aeld","","break;case $."],["set","console.clear","undefined"],["ra","style","#over"],["nowoif","/^/","1"]],"freepornxxxhd.com":[["acs","String.fromCharCode","constructor"]],"freereadnovel.online":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"freeroms.com":[["rmnt","script","popunder"]],"freewatchserialonline.com":[["acs","XMLHttpRequest","ActiveXObject"]],"fromtheangels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fuckslutsonline.com":[["aopr","document.dispatchEvent"]],"funinfirst.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"funthingsinhouston.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"furher.in":[["nowoif"]],"furyforums.com":[["rmnt","script","html-load.com"]],"g.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"galonamission.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"game3rb.com":[["acs","Math","break;case $."],["acs","navigator","FingerprintJS"],["aeld","DOMContentLoaded","0x"],["no-fetch-if","method:HEAD"]],"gamesgames.com":[["aopr","googletag"]],"gameslay.net":[["acs","parseInt","break;case $."]],"gamezizo.com":[["noeval-if","ppu"]],"gardeningproductsreview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gatorenvy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gaygo.tv":[["acs","$","popMagic"]],"genialetricks.de":[["nostif",".call(null)","10"]],"georgiadogs.com":[["set","blockAdBlock","trueFunc"]],"gerbeaud.com":[["rmnt","script","/:\\[?window,/"],["rmnt","script","html-load.com"]],"gettapeads.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"ghibliforum.com":[["rmnt","script","html-load.com"]],"giize.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"girlscangrill.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gknutshell.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"glockforum.com":[["rmnt","script","html-load.com"]],"gnomio.com":[["no-xhr-if","/doubleclick|googlesyndication/"]],"go.fakta.id":[["no-fetch-if","/outbrain\\.com|adligature\\.com|quantserve\\.com|srvtrck\\.com|googlesyndication|pubadx/","{\"type\": \"cors\"}"],["nowoif","_blank"],["nano-sib","/.?/","*"],["nano-stb","/.?/","*"]],"godriveplayer.com":[["nowoif"]],"gofile.download":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"],["no-fetch-if","adsbygoogle"],["aeld","click","popMagic"]],"goislander.com":[["set","blockAdBlock","trueFunc"]],"gokushiteki.com":[["noeval-if","/chp_?ad/"]],"golightsgo.com":[["set","blockAdBlock","trueFunc"]],"gomo.to":[["aopr","glxopen"],["nowoif"]],"goodlivingguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goproforums.com":[["rmnt","script","html-load.com"]],"gotocam.net":[["noeval-if","/chp_?ad/"]],"goxxxvideos.com":[["noeval"],["aopr","Aloader.serve"]],"gracefullittlehoneybee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grasoku.com":[["rmnt","script","html-load.com"]],"greatholidayrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grootnovels.com":[["noeval-if","/chp_?ad/"]],"guhoyas.com":[["set","blockAdBlock","trueFunc"]],"guitarscanada.com":[["rmnt","script","html-load.com"]],"gunauc.net":[["no-fetch-if","googlesyndication","","{\"type\":\"cors\"}"]],"gunco.net":[["rmnt","script","html-load.com"]],"gurbetseli.net":[["noeval-if","/chp_?ad/"]],"hackedonlinegames.com":[["nostif","_0x"]],"halohangout.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"hamburgerinsult.com":[["acs","document.documentElement","break;case $."]],"handgunforum.net":[["rmnt","script","html-load.com"]],"happilyevertravels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happyinshape.com":[["rmnt","script","await eval"]],"hardsex.cc":[["acs","pop_init"]],"havocxforum.com":[["rmnt","script","html-load.com"]],"hb-nippon.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","html-load.com"]],"hdgayporn.net":[["acs","document.querySelectorAll","popMagic"]],"hdstreamverse.cloud":[["rmnt","script","offsetHeight"]],"healthecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hegreartnudes.com":[["acs","loadTool","popping"]],"hentaimoe.me":[["acs","Date","shift"]],"heresy-online.net":[["rmnt","script","html-load.com"]],"herviewfromhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hilltoprecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hilotrailerforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hispajav.com":[["aost","document.getElementById","fairAdblock"],["rmnt","script","/popMagic|pop1stp/"]],"historichorizons.com":[["noeval-if","/chp_?ad/"]],"hitomi.la":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","popMagic"],["acs","WebAssembly","atob"],["noeval"],["aopr","open"]],"hmanga.world":[["no-fetch-if","method:/head/i"]],"holycowvegan.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeoomph.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hoosierhomemade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houseandgarden.co":[["rmnt","script","await eval"]],"hqhardcoreporno.com":[["noeval"],["aopr","Aloader.serve"]],"hqpornstream.com":[["acs","document.querySelectorAll","popMagic"]],"htowndaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hungryinthailand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"id.condenast.com":[["set","appInfo.snowplow.trackSelfDescribingEvent","noopFunc"]],"ihorror.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"illustratemagazine.com":[["set","penci_adlbock.ad_blocker_detector","0"]],"imgbox.com":[["acs","WebAssembly","atob"]],"imgtag.co.kr":[["nosiif","adsbygoogle"]],"imodeler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imperfectlyhappy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"independent.co.uk":[["no-fetch-if","doubleclick"]],"indiatimes.com":[["nostif","error-report.com"],["set","objAd.loadAdShield","noopFunc"],["rmnt","script","html-load.com"]],"indopanas.cyou":[["nowoif"]],"inhumanity.com":[["aopr","inhumanity_pop_var_name"]],"inra.bg":[["noeval-if","/chp_?ad/"]],"insidermonkey.com":[["acs","Math","0x"]],"inwepo.co":[["aopr","b2a"]],"issuya.com":[["nostif","error-report.com"]],"ithacajournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"ithinkilikeyou.net":[["noeval-if","ads"]],"itsguider.com":[["aeld","load","nextFunction"]],"itudong.com":[["aeld","load","nextFunction"]],"jamesandcatrin.com":[["rmnt","script","/__adblocker|html-load/"]],"jaroflemons.com":[["rmnt","script","/__adblocker|html-load/"]],"javheroine.com":[["acs","document.querySelectorAll","popMagic"]],"javqis.com":[["aopr","decodeURI"]],"javturbo.xyz":[["nowoif"]],"jeep-cj.com":[["set","document.body.contains","trueFunc"],["nostif","show"]],"jeepgladiatorforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"jenniferallwoodhome.com":[["rmnt","script","/__adblocker|html-load/"]],"jerasjamboree.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"jeremyparticipantanything.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jetpunk.com":[["rmnt","script","/__adblocker|html-load/"],["no-xhr-if","prebid"],["remove-cookie","PageCount"],["set-local-storage-item","PageCount","$remove$"]],"jizzberry.com":[["aeld","getexoloader"]],"jockantv.com":[["acs","parseInt","break;case $."],["acs","document.documentElement","break;case $."],["aopr","open"],["ra","onload","[onload^=\"window.open\"]"]],"jojolandsmanga.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","EventTarget.prototype.addEventListener","delete window"]],"journalstandard.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"jpscan-vf.com":[["acs","parseInt","break;case $."]],"k-statefootball.net":[["set","blockAdBlock","trueFunc"]],"kagstv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kali.wiki":[["noeval-if","/chp_?ad/"]],"kasvekuvvet.net":[["aopr","googletag"]],"katherineschoolphone.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"kbvotv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"keepingitsimplecrafts.com":[["rmnt","script","/__adblocker|html-load/"]],"kellythekitchenkop.com":[["rmnt","script","/__adblocker|html-load/"]],"kemiox.com":[["rmnt","script","deblocker"]],"kenta2222.com":[["noeval-if","/chp_?ad/"]],"kill-the-hero.com":[["acs","document.querySelectorAll","popMagic"]],"kion546.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"kitchenconfidante.com":[["rmnt","script","/__adblocker|html-load/"]],"kleinezeitung.at":[["remove-cookie","__adblocker"]],"knowyourmobile.com":[["rmnt","script","/__adblocker|html-load/"]],"knoxnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"komorkomania.pl":[["nano-sib","consoleLoaded?clearInterval"]],"kotaro269.com":[["rmnt","script","html-load.com"]],"kreiszeitung.de":[["nostif",".call(null)","10"]],"kristendukephotography.com":[["rmnt","script","/__adblocker|html-load/"]],"kurashinista.jp":[["rmnt","script","html-load.com"]],"kurosuen.live":[["noeval-if","/chp_?ad/"]],"ladypopularblog.com":[["noeval-if","/chp_?ad/"]],"latinatemptation.com":[["noeval-if","/chp_?ad/"]],"laughingsquid.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"laurenscravings.com":[["rmnt","script","/__adblocker|html-load/"]],"lawnmowerforum.com":[["rmnt","script","/__adblocker|html-load/"]],"leafyplace.com":[["rmnt","script","/__adblocker|html-load/"]],"learnaboutnature.com":[["rmnt","script","/__adblocker|html-load/"]],"learnedclub.com":[["noeval-if","/chp_?ad/"]],"legacy.hockey":[["rmnt","script","/__adblocker|html-load/"]],"legendplayz.com":[["rmnt","script","/__adblocker|html-load/"]],"legendsofz.com":[["rmnt","script","/__adblocker|html-load/"]],"lemino.docomo.ne.jp":[["no-fetch-if","doubleclick.net"]],"letsdiyitall.com":[["rmnt","script","/__adblocker|html-load/"]],"letsrv.com":[["rmnt","script","/__adblocker|html-load/"]],"libramemoria.com":[["aopr","__eiPb"]],"link.asiaon.top":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"linkedmoviehub.top":[["acs","document.documentElement","break;case $."]],"linksly.co":[["acs","parseInt","break;case $."]],"linux-talks.com":[["noeval-if","/chp_?ad/"]],"linuxize.com":[["rmnt","script","/__adblocker|html-load/"]],"linx.cc":[["set","blurred","false"]],"lirik3satu.blogspot.com":[["aeld","load","2000"]],"littlebigsnake.com":[["set","ADS.isBannersEnabled","false"]],"liverate.com":[["rmnt","script","/__adblocker|html-load/"]],"livescience.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","()=>eval"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"livingincebuforums.com":[["nostif",".offsetHeight"]],"logcabinhub.com":[["rmnt","script","/__adblocker|html-load/"]],"logicieleducatif.fr":[["rmnt","script","html-load.com"]],"logicprohelp.com":[["rmnt","script","/__adblocker|html-load/"]],"love4porn.com":[["set","flashvars.popunder_url",""]],"loveablelemons.com":[["rmnt","script","/__adblocker|html-load/"]],"lovelyplanner.com":[["rmnt","script","/__adblocker|html-load/"]],"ltpcalculator.in":[["noeval-if","/chp_?ad/"]],"lumens.com":[["set","_satellite","{}"],["set","_satellite.track","noopFunc"]],"m.iqiyi.com":[["set","Object.prototype.adPlayerId",""]],"m9.news":[["rmnt","script","m9-ad-modal"]],"maangchi.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"macrameforbeginners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"macrumors.com":[["aopr","adthrive"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"madden-school.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"magicseaweed.com":[["aopr","__eiPb"]],"mangadass.com":[["acs","document.querySelectorAll","popMagic"]],"mangakuri.online":[["acs","Date.prototype.toISOString","wpadmngr.com"]],"maplejubilee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"matureworld.ws":[["nowoif"]],"md3b0j6hj.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"],["nano-stb","Please wait","*","0.001"]],"mediamarkt.be":[["no-fetch-if","method:HEAD"]],"mediapemersatubangsa.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.addEventListener","google_ad_client"]],"mediatn.cms.nova.cz":[["nano-stb","() => t()","*"]],"mega-mkv.com":[["aeld","DOMContentLoaded","adlinkfly"],["aeld","DOMContentLoaded","shortener"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"megahentaitube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"megankiddifference.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"merricksart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mimisorganiceats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mlbbite.net":[["rmnt","script","adserverDomain"]],"mlbstreaming.live":[["nowoif"]],"mmaforum.com":[["rmnt","script","html-load.com"]],"mmsmasala.com":[["rmnt","script","/dismissAdBlock|533092QTEErr/"]],"moddroid.com":[["aeld","","break;case $."],["nowoif"]],"modernmrsdarcy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"modsfire.com":[["acs","parseInt","break;case $."],["rmnt","script","html-load.com"]],"morels.com":[["rmnt","script","html-load.com"]],"morikinoko.com":[["rmnt","script","html-load.com"]],"mothering.com":[["rmnt","script","html-load.com"]],"moviesubtitles.click":[["aeld","DOMContentLoaded","script[data-domain="]],"mp3-now.com":[["acs","parseInt","break;case $."]],"msfsaddons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mudinmyblood.net":[["rmnt","script","html-load.com"]],"mult34.com":[["aopr","decodeURI"]],"munchinwithmaddie.blog":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"my-code4you.blogspot.com":[["nostif","offsetLeft"],["set","config.pauseInspect","false"]],"mycookingjourney.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myelearningworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myfoodstory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myjoyfilledlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mypetsname.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myrepurposedlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myvegetarianroots.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"n-tv.de":[["set","Object.prototype.adReinsertion.homad.enabled","false"],["nostif",".call(null)","10"],["aopr","embedAddefend"]],"naijachoice.com.ng":[["acs","document.documentElement","break;case $."]],"nana-press.com":[["rmnt","script","html-load.com"]],"nationalgunforum.com":[["rmnt","script","html-load.com"]],"naturallysavvy.com":[["rmnt","script","/__adblocker|html-load/"]],"naughtypiss.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"necksdesign.com":[["nosiif","visibility","1000"]],"negative.tboys.ro":[["noeval-if","/chp_?ad/"]],"nepalieducate.com":[["nostif","googlesyndication"]],"news-leader.com":[["aopr","_sp_._networkListenerData"],["set","gnt.x.uam","undefined","runAt","interactive"]],"news30over.com":[["rmnt","script","html-load.com"]],"newscard24.com":[["noeval-if","/chp_?ad/"]],"newsmax.com":[["set","fake_ad","true"]],"newstopics.in":[["no-fetch-if","adsbygoogle"]],"newswest9.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"newyorker.com":[["nofab"],["set","paywallGateway.truncateContent","noopFunc"]],"nflbite.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"nhvnovels.com":[["noeval-if","/chp_?ad/"]],"nightlifeporn.com":[["acs","document.querySelectorAll","popMagic"]],"nikkisplate.com":[["rmnt","script","/__adblocker|html-load/"]],"ninetowners.com":[["rmnt","script","html-load.com"]],"noithatmyphu.vn":[["no-fetch-if","googlesyndication"]],"notandor.cn":[["noeval-if","/chp_?ad/"]],"notebookcheck-hu.com":[["rmnt","script","&&window,"]],"notiziemusica.it":[["aopw","adBlockDetected"]],"nourishedbynic.com":[["rmnt","script","/__adblocker|html-load/"]],"nowgeorgia.com":[["rmnt","script","/__adblocker|html-load/"]],"nowtv.com.tr":[["set","adblockDetector","trueFunc"]],"nsjonline.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"nudebabes.sexy":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["aopr","ExoLoader.addZone"]],"nueagles.com":[["set","blockAdBlock","trueFunc"]],"nuhuskies.com":[["set","blockAdBlock","trueFunc"]],"nydus.org":[["nostif","ab"]],"obsev.com":[["aopr","HTMLIFrameElement"]],"odiafresh.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"ohsheglows.com":[["rmnt","script","/__adblocker|html-load/"]],"onceuponachef.com":[["rmnt","script","/__adblocker|html-load/"]],"oneshetwoshe.com":[["rmnt","script","/__adblocker|html-load/"]],"onezoo.net":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"onlyfoods.net":[["rmnt","script","/__adblocker|html-load/"]],"onlypassionatecuriosity.com":[["rmnt","script","/__adblocker|html-load/"]],"onlytech.com":[["acs","$","test"],["acs","eval","replace"],["nostif","document.createElement"]],"orangeink.pk":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."],["aeld","","break;case $."]],"orgasmlist.com":[["aopr","document.dispatchEvent"]],"osuskins.net":[["no-xhr-if","/googlesyndication|nitropay/"],["nostif","height"],["aopw","uBlockActive"]],"ourbeagleworld.com":[["rmnt","script","html-load.com"]],"ovcsports.com":[["set","blockAdBlock","trueFunc"]],"paipancon.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["aopr","popns"],["acs","WebAssembly","atob"]],"paolo9785.com":[["noeval-if","/chp_?ad/"]],"paperscissorscraft.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"paradoxscans.com":[["noeval-if","/chp_?ad/"]],"parenting.pl":[["nano-sib","consoleLoaded?clearInterval"]],"parentingpatch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pay4fans.com":[["nowoif"]],"peetube.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"]],"pelismkvhd.com":[["aeld","click","href"]],"percentagecalculator.net":[["rmnt","script","html-load.com"]],"perelki.net":[["nostif","keepChecking","1000"]],"pferde.de":[["nostif",".call(null)","10"]],"phc.web.id":[["acs","Math","break;case $."]],"pirateblue.org":[["set","blockAdBlock","trueFunc"]],"planetnatural.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plantedinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"platinmods.com":[["aopr","adBlockDetected"]],"play.discoveryplus.com":[["json-prune","ssaiInfo"]],"plumperstube.com":[["aopr","document.dispatchEvent"]],"pmvzone.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pngreal.com":[["no-fetch-if","ads"]],"pocketnow.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"podkontrola.pl":[["acs","document.createElement","script"]],"pokeca-chart.com":[["noeval-if","/chp_?ad/"]],"pokemontcgzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"polskawliczbach.pl":[["nostif","offsetHeight"]],"pomorska.pl":[["aeld","","show"]],"popcornmovies.org":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"popularmechanics.com":[["nostif","addEventListener","0"]],"popville.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pornharlot.net":[["aeld","click","popupInterval"]],"pornkai.com":[["aopw","c325"]],"pornoborshch.com":[["ra","onclick"]],"pornodoido.com":[["aopr","ExoLoader"]],"pornoflux.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornohirsch.net":[["set","vpPrerollVideo","undefined"],["aeld","getexoloader"],["nostif","Adb"]],"pornovideos-hd.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"porntopic.com":[["aopr","loadTool"]],"porntry.com":[["acs","document.querySelectorAll","popMagic"]],"porsche-mania.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"poughkeepsiejournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"powergam.online":[["set","document.hidden","false"],["aopw","AdBDetected"],["set","navigator.brave","undefined"]],"powerover.site":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"practicallyfunctional.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pramejarab.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"pranarevitalize.com":[["noeval-if","/chp_?ad/"],["set","count","0"]],"pravda.com.ua":[["nostif","error-report.com"],["rmnt","script","Ad-Shield"]],"priceoftravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primagames.com":[["aopr","googletag"]],"proplanta.de":[["nostif","/$|adBlock/"]],"providencejournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pupuweb.com":[["noeval-if","/chp_?ad/"]],"puzzles-to-print.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pvip.gratis":[["acs","document.querySelectorAll","popMagic"]],"qcheng.cc":[["aopr","killAdKiller"]],"qpython.club":[["aeld","DOMContentLoaded","AdBlock"]],"qthang.net":[["aopr","app_vars.force_disable_adblock"]],"quickporn.net":[["set","qpcheck.ads","noopFunc"]],"qul-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"rabbitsfun.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"radio-en-direct.fr":[["nostif","displayMessage","2000"]],"radiologyinplainenglish.com":[["rmnt","script","/__adblocker|html-load/"]],"raskakcija.lt":[["rmnt","script","html-load.com"]],"ratrodsrule.com":[["rmnt","script","/__adblocker|html-load/"]],"rcostation.xyz":[["acs","addEventListener","HTMLAllCollection"],["rmnt","script","adbWarn"]],"readallcomics.com":[["noeval-if","/chp_?ad/"]],"realgfporn.com":[["aopr","ExoLoader"],["aopw","__htapop"],["popads-dummy"],["aopr","ExoLoader.serve"],["aeld","click","exopop"],["aeld","/^(?:load|click)$/","popMagic"],["acs","document.createElement","script"]],"redding.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"redfea.com":[["noeval-if","/chp_?ad/"],["set","count","0"]],"remixsearch.es":[["rmnt","script","adblocker"]],"repretel.com":[["aeld","/adblock/i"]],"resetoff.pl":[["set","ads_unblocked","true"]],"restonnow.com":[["rmnt","script","/__adblocker|html-load/"]],"resultadostris.com":[["rmnt","script","await eval"]],"rexdlfile.com":[["aopr","require"]],"rexxx.org":[["aopr","rexxx.swp"]],"rfiql.com":[["rmnt","script","DisableDevtool"],["nowoif","!devuploads.com"],["nano-sib","","*","0.02"],["nano-stb","","*","0.02"]],"roofingtalk.com":[["rmnt","script","html-load.com"]],"root-nation.com":[["set","td_ad_background_click_link","undefined"]],"rosefile.net":[["acs","document.addEventListener","nextFunction"]],"rossoporn.com":[["aopr","AaDetector"]],"routerforums.com":[["rmnt","script","html-load.com"]],"rs25.com":[["rmnt","script","html-load.com"]],"rt3dmodels.com":[["rmnt","script","deblocker"]],"rule34video.com":[["set","flashvars.adv_pre_vast",""]],"s1p1cd.com":[["nowoif"]],"s3taku.com":[["acs","document.documentElement","break;case $."]],"samurai.wordoco.com":[["noeval-if","/chp_?ad/"]],"sarahremmer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"saratogian.com":[["set","CnnXt.Event.fire","noopFunc"]],"savevideo.tube":[["aopr","AaDetector"],["nowoif"]],"sawdustgirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sbazar.cz":[["rmnt","script","ads"]],"schoolcheats.net":[["set","truex","{}"],["set","truex.client","noopFunc"],["nostif","answers"]],"scriptsomg.com":[["noeval-if","/chp_?ad/"]],"seattletimes.com":[["nostif","apstagLOADED"]],"seedscientific.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"semuanyabola.com":[["acs","decodeURIComponent","ai_"]],"senaleszdhd.blogspot.com":[["aeld","load","nextFunction"]],"seniorsmobility.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"serial1forum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"setfucktube.com":[["noeval"],["aopr","Aloader.serve"]],"sewingiscool.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexgamescc.com":[["nostif","/out.php"]],"sexlargetube.com":[["noeval"],["aopr","Aloader.serve"]],"sexpox.com":[["acs","document.querySelectorAll","popMagic"]],"sexykittenporn.com":[["aopr","loadTool"],["aopr","ExoLoader"],["ra","href","[href*=\"ccbill\"]"]],"shropshirestar.com":[["rmnt","script","await eval"]],"shrt10.com":[["aopr","open"],["aopw","adcashMacros"],["set","blurred","false"]],"sightandsoundreading.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siteflix.org":[["aopr","open"]],"skidrowcpy.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"slowcookedeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartmoneysimplelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snap.fan":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"softfully.com":[["no-fetch-if","ads"]],"software-on.com":[["aopr","decodeURIComponent"],["nowebrtc"],["nowoif"]],"softwaresolutionshere.com":[["set","adblockstatus","false"],["nowoif"]],"somebodyfeedseb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sosyalbilgiler.net":[["aopr","adBlockDetected"]],"spiegel.de":[["rmnt","script","homad"],["nostif",".call(null)","10"]],"spiritualmeanings.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sport365.fr":[["nostif",".call(null)","10"]],"sportsfeelgoodstories.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportshub.fan":[["rmnt","script",";}}};break;case $."]],"sportsonline.so":[["aopw","Adcash"]],"spring.org.uk":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"sprinkleofthis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stadiumrant.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stahnivideo.cz":[["noeval-if","/chp_?ad/"]],"stardewguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stardima.com":[["aeld","","break;case $."],["aeld","click","/redirect.php?"]],"starlinktalk.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"steamandbake.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steamverde.net":[["acs","globalThis","break;case"]],"stelvioforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stirlingnews.co.uk":[["set","adLight","true"]],"streambtw.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["aopw","Adcash"],["acs","aclib"],["nostif","atob","120000"]],"stuffparentsneed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stylecaster.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"sugarapron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugarbeecrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sukidesuost.info":[["nosiif","visibility","1000"]],"sunheron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sunrisespecialty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"suzukiatvforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"swame.com":[["set","is_adblocked","false"]],"sweetashoney.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetsimplevegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"szexkepek.net":[["aopr","document.dispatchEvent"]],"tabele-kalorii.pl":[["noeval-if","AdBlock"]],"tablelifeblog.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"tapeblocker.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"tapewithadblock.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"tarateaspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tastesbetterfromscratch.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"taxi69.com":[["acs","WebAssembly","atob"]],"tbib.org":[["aopr","document.dispatchEvent"]],"technologydots.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techyhigher.com":[["noeval-if","/chp_?ad/"]],"techymedies.com":[["acs","eval","replace"],["set","blurred","false"]],"teen-hd-sex.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"]],"tekkenmods.com":[["aopw","HTMLScriptElement.prototype.onerror"]],"testsieger.de":[["json-prune","offers"]],"texteditor.nsspot.net":[["set","gadb","false"]],"thangdangblog.com":[["noeval-if","/chp_?ad/"]],"thatav.net":[["acs","document.querySelectorAll","popMagic"],["aopr","decodeURI"]],"thebakeologie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebeachhousekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebearfootbaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecontentauthority.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecraftsmanblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecreativityexchange.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedarlingapron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegamecrater.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theharristeeterdeals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelastfoodblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelavenderchair.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theledger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thelittleblogofvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theloopywhisk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelupussite.com":[["rmnt","script","html-load.com"]],"thenational.scot":[["set","adLight","true"]],"theoregondietitian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepancakeprincess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thereeftank.com":[["rmnt","script","html-load.com"]],"theslingshotforum.com":[["rmnt","script","html-load.com"]],"thesmokingcuban.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"thestarphoenix.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"thesukan.net":[["aost","String.prototype.charCodeAt","ai_"]],"thetruthaboutcars.com":[["set","loadShield","noopFunc"]],"thetwincookingproject.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theveganlarder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thevintagecook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theweek.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"theyummylife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thgss.com":[["nosiif","adsbygoogle"]],"thismessisours.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tiaclara.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tigernet.com":[["acs","document.getElementById","JSON"]],"tiguanforums.co.uk":[["rmnt","script","html-load.com"]],"tikvica.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tipjunkie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tipsaholic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"today.com":[["set","admiral","noopFunc"]],"todaysdelight.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toonily.com":[["acs","addEventListener","HTMLAllCollection"]],"towerofgod.me":[["noeval-if","ads"]],"trackmustangsonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tubemania.org":[["nowoif"]],"tuberel.com":[["acs","adver"]],"turbocloud.xyz":[["nowoif"],["nostif","window.open"]],"tvappapk.com":[["noeval-if","js_func_decode_base_64"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"tvnz.co.nz":[["no-fetch-if","method:HEAD url:doubleclick.net"]],"tvspielfilm.de":[["set","window.__gv_org_tfa","undefined"],["nostif",".call(null)","10"]],"twocloveskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tz.de":[["set","Object.prototype._getSalesHouseConfigurations","noopFunc"],["nostif",".call(null)","10"],["nostif","[native code]","500"]],"ukrainesmodels.com":[["aopw","atOptions"]],"unicornsinthekitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"unterhalt.net":[["nostif",".call(null)","10"]],"upbolt.to":[["rmnt","script","monetag"],["no-xhr-if","/admaven|adspyglass/"],["aost","document.createElement","openNewTab"],["nowoif","_blank"]],"uploadcloud.pro":[["nano-stb","show","4000"]],"urgayporn.com":[["acs","document.querySelectorAll","popMagic"]],"usctrojans.com":[["set","blockAdBlock","trueFunc"]],"vecloud.eu":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","adserverDomain"]],"veganab.co":[["set","blurred","false"],["nano-sib","/wpsafe|wait/","*","0.001"],["rmnt","script","deblocker"]],"veganderlust.com":[["rmnt","script","/__adblocker|html-load/"]],"vermoegen.org":[["aopr","document.referrer"]],"vidspeeds.com":[["rmnt","script",";}}};break;case $."],["aeld","","break;case $."]],"vik1ngfile.site":[["acs","WebAssembly","atob"],["rmnt","script","adserverDomain"],["rmnt","script","FingerprintJS"],["nowoif","_blank"],["acs","atob","self.Math"],["aeld","click","appendChild"],["aopr","aclib"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"vinylcollective.com":[["acs","jQuery","dismissAdBlock"]],"virtualdinerbot.com":[["set","nitroAds.abp","true"]],"visitdowntownnashville.com":[["rmnt","script","/__adblocker|html-load/"]],"vmaxforum.net":[["rmnt","script","/__adblocker|html-load/"]],"voiranime.stream":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"voirseries.io":[["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"vssmonitoring.com":[["rmnt","script","/__adblocker|html-load/"]],"vtmgo.be":[["no-fetch-if","doubleclick"]],"vwatlasforum.com":[["rmnt","script","html-load.com"]],"watch-movies.com.pk":[["acs","addEventListener","HTMLAllCollection"]],"watchop.live":[["acs","document.documentElement","break;case $."]],"wdtn.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wdwnt.jp":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"weareiowa.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"webdesigndev.com":[["nowoif"]],"webdesignerdepot.com":[["rmnt","script","/__adblocker|html-load/"]],"weerplaza.nl":[["rmnt","script","/:\\[?window,/"]],"westerntelegraph.co.uk":[["set","adLight","true"]],"whec.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"wheel-decide.com":[["rmnt","script","/__adblocker|html-load/"]],"whitchurchherald.co.uk":[["set","adLight","true"]],"wielerflits.nl":[["rmnt","script","html-load.com"]],"wiesbadener-kurier.de":[["nostif",".call(null)","10"]],"wikiofthrones.com":[["rmnt","script","/__adblocker|html-load/"]],"wirtualnemedia.pl":[["set","__INIT_CONFIG__.randvar","undefined"],["aeld","click","instanceof Event","elements","body"]],"wizzair.com":[["set-session-storage-item","bookingSearchAlreadyOpened","true"]],"wjtv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wkbn.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wnynewsnow.com":[["set-attr",":is(.watch-on-link-logo, li.post) img.ezlazyload[src^=\"data:image\"][data-ezsrc]","src","[data-ezsrc]"]],"wordcookies.info":[["rmnt","script","/__adblocker|html-load/"]],"wordmaker.info":[["rmnt","script","/__adblocker|html-load/"]],"workers.dev":[["rmnt","script","_adblockerdetected"],["remove-cookie","_adblockerdetected"]],"workkeyspracticetest.com":[["rmnt","script","/__adblocker|html-load/"]],"woxikon.de":[["nostif",".call(null)","10"]],"wp.pl":[["nano-sib","consoleLoaded?clearInterval"]],"wpteq.org":[["noeval-if","/chp_?ad/"]],"wristreview.com":[["aopw","ai_front"]],"wwlp.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"www.bankofamerica.com":[["no-fetch-if","smetrics.bankofamerica.com"]],"wytv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"xhaccess.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xhopen.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xn--k9ja7fb0161b5jtgfm.jp":[["acs","document.addEventListener","google_ad_client"]],"xn--mlaregvle-02af.nu":[["aeld","","open"]],"xpengevforum.com":[["rmnt","script","html-load.com"]],"xxporner.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"xxxhentaimovies.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxhothub.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxonlinefree.com":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"]],"xxxxxx.hu":[["acs","document.querySelectorAll","popMagic"]],"y2tube.pro":[["nowoif"]],"yabai.si":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"yfzcentral.com":[["rmnt","script","html-load.com"]],"yolopooch.com":[["rmnt","script","/__adblocker|html-load/"]],"youkaiwatch2345.blog.fc2.com":[["acs","document.addEventListener","google_ad_client"]],"youku.com":[["nano-stb","","","0"]],"youlikeboys.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"]],"yourcentralvalley.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"yourcobalt.com":[["rmnt","script","html-load.com"]],"ytsubme.com":[["nowoif","youtube"],["nano-stb","aTagChange","12000"]],"yummyhealthyeasy.com":[["rmnt","script","/__adblocker|html-load/"]],"zch-vip.com":[["rmnt","script","html-load.com"]],"zeroair.org":[["rmnt","script","/__adblocker|html-load/"]],"zeroto60times.com":[["aopr","__eiPb"]],"zimabdko.com":[["nowebrtc"],["aopr","open"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
