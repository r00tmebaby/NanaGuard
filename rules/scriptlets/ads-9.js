/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0rechner.de":[["set","doads","true"]],"10fragrances.com":[["rmnt","script","/__adblocker|html-load/"]],"123atc.com":[["rmnt","script","/__adblocker|html-load/"]],"124spider.org":[["rmnt","script","html-load.com"]],"12newsnow.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"1geki.jp":[["rmnt","script","html-load.com"]],"1hd.to":[["acs","document.documentElement","break;case $."]],"31daily.com":[["rmnt","script","/__adblocker|html-load/"]],"350z-tech.com":[["rmnt","script","html-load.com"]],"3dporndude.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"3dzip.org":[["no-fetch-if","doubleclick","length:10","{\"type\":\"cors\"}"],["no-xhr-if","doubleclick"],["nostif","google_jobrunner"],["nostif","null","4000"]],"3hentai.net":[["nowoif"]],"51sec.org":[["noeval-if","/chp_?ad/"]],"5thrangerforum.com":[["rmnt","script","html-load.com"]],"976-tuna.com":[["rmnt","script","/__adblocker|html-load/"]],"a-ha.io":[["noeval-if","/content-loader\\.com|css-load\\.com|html-load\\.com/"],["rmnt","script","KCgpPT57bGV0IGU"]],"acura-legend.com":[["rmnt","script","html-load.com"]],"adbypass.org":[["aopr","Adcash"]],"adclickersbot.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"addictedtodates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aimlief.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airfryerlove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allclassic.porn":[["acs","document.querySelectorAll","popMagic"]],"alloaadvertiser.com":[["set","adLight","true"]],"allthesvgs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alternativedish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ambitiouskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amestrib.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"amiablefoods.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anime3rb.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"anonymz.com":[["aost","_pop","_init"]],"apieceoftravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"apkhihe.com":[["nano-sib","show_download_links"]],"aplus.my.id":[["aopw","adBlockDetected"]],"apumpkinandaprincess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"arbweb.info":[["aopr","adsBlocked"]],"arcadepunks.com":[["aopr","penci_adlbock"],["noeval"],["aeld","load","innerHTML"]],"archeryaddix.com":[["rmnt","script","html-load.com"]],"archpaper.com":[["acs","fetch","result"],["aopw","adBlocked"]],"arealgamer.org":[["nano-sib","counter"]],"argio-logic.net":[["acs","document.getElementById","alert"]],"ariversegl.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"arteonforums.com":[["rmnt","script","html-load.com"]],"artificialnudes.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"ashbaber.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asiansex.life":[["acs","document.querySelectorAll","popMagic"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"askpython.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"astyleset.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asvabpracticetests.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"auburntigers.com":[["set","blockAdBlock","trueFunc"]],"audiolgy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audiotips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aussiegreenthumb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"australiaforum.com":[["rmnt","script","html-load.com"]],"av1encodes.com":[["set","HTMLScriptElement.prototype.onerror","undefined"]],"averiecooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"avidgamer.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"babaktv.com":[["rmnt","script","ai_adb"],["nowoif"]],"baylorbears.com":[["set","blockAdBlock","trueFunc"]],"bballrumors.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"becclesandbungayjournal.co.uk":[["set","adLight","true"]],"beeimg.com":[["nostif","document.cookie","2500"],["nostif","window.open"]],"bestbeginnermotorcycles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestgrannies.com":[["acs","document.querySelectorAll","popMagic"]],"bestsportslive.org":[["rmnt","script","/ai_|eval|Google/"]],"beyondkimchee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bigsouthnetwork.com":[["set","blockAdBlock","trueFunc"]],"bike-urious.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"binkysculinarycarnival.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bittools.net":[["acs","onload","fetch"]],"blackchubbymovies.com":[["acs","document.querySelectorAll","popMagic"]],"blacksmithtalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blowjobamateur.net":[["acs","document.querySelectorAll","popMagic"]],"bmwlt.com":[["rmnt","script","html-load.com"]],"boobs-mania.com":[["acs","document.querySelectorAll","popMagic"]],"bootsandhooveshomestead.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"borehamwoodtimes.co.uk":[["set","adLight","true"]],"boxaoffrir.com":[["noeval-if","/chp_?ad/"]],"boxerforums.com":[["rmnt","script","html-load.com"]],"br.nacaodamusica.com":[["aopw","adBlockDetected"]],"bravotube.asia":[["aopr","popit"],["aeld","popstate","noPop"]],"brightsprouts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brokensilenze.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"],["rmnt","script","/popMagic|pop1stp/"]],"bs.to":[["aeld","click","preventDefault"],["ra","onclick"]],"btvsport.bg":[["no-xhr-if","googlesyndication"],["no-fetch-if","googlesyndication"],["no-fetch-if","imasdk"]],"buelltalk.com":[["rmnt","script","html-load.com"]],"busylittlekiddies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bydeannyd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bysebuho.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"camflow.tv":[["acs","onload","onclick"],["set","flashvars.adv_pause_html",""],["set","flashvars.adv_start_html",""],["set","flashvars.logo_text",""],["set","flashvars.mlogo",""],["set","flashvars.popunder_url",""]],"caminspector.net":[["acs","crakPopInParams"],["acs","onload","onclick"],["aopr","console.log"],["set","hasPoped","true"]],"capturownersclub.co.uk":[["rmnt","script","html-load.com"]],"carsized.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"caseihforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"caseyimpactstation.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"celebritynakeds.com":[["acs","document.querySelectorAll","popMagic"]],"chachingonashoestring.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chachingqueen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chambanamoms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chascrazycreations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chataigpt.org":[["aopr","adsBlocked"]],"chibchat.com":[["aost","String.prototype.charCodeAt","ai_"]],"chimicamo.org":[["no-fetch-if","googlesyndication"],["no-xhr-if","ads"]],"chinacarforums.com":[["rmnt","script","html-load.com"]],"chryslerminivan.net":[["rmnt","script","html-load.com"]],"chubbyelders.com":[["acs","document.querySelectorAll","popMagic"]],"civitai.red":[["no-fetch-if","googlesyndication"]],"cjls.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleanfoodcrush.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clydebankpost.co.uk":[["set","adLight","true"]],"collegeteentube.com":[["aopr","ExoLoader.serve"]],"comestayawhile.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comicsvalley.com":[["acs","document.querySelectorAll","popMagic"]],"commsbusiness.co.uk":[["aopr","wpsite_clickable_data"]],"computerzilla.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"conoscereilrischioclinico.it":[["noeval-if","/chp_?ad/"]],"convertcase.net":[["rmnt","script","html-load.com"]],"cooldns-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"cosmetologyguru.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cosmicdeity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cotswoldjournal.co.uk":[["set","adLight","true"]],"crackedsoftware.biz":[["aeld","","break;case $."],["aopr","open"]],"crimsonscrolls.net":[["acs","document.addEventListener","adblock"]],"cuckoldsex.net":[["noeval-if","/chp_?ad/"]],"cw39.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"cyclingnews.com":[["aopr","_sp_._networkListenerData"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"],["aopr","MONETIZER101.init"],["nano-stb","/outboundLink/"]],"da-imnetz.de":[["nostif",".call(null)","10"]],"dailyrecord.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dakota-durango.com":[["rmnt","script","html-load.com"]],"darlingcelebrations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dbstalk.com":[["rmnt","script","html-load.com"]],"delawareonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"deliciousmeetshealthy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"derricknationtop.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"dessertnowdinnerlater.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"destinyislands.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"devicediary.online":[["nowoif","_blank"]],"dhtpre.com":[["rmnt","script","setADBFlag"]],"dieselforums.com":[["rmnt","script","html-load.com"]],"dishesdelish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"djqunjab.in":[["noeval-if","/chp_?ad/"]],"doctoraux.com":[["no-fetch-if","googlesyndication"]],"dodgeevforum.com":[["rmnt","script","html-load.com"]],"doityourselfrv.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domainwheel.com":[["nowoif"]],"domesticheights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doncasterfreepress.co.uk":[["rmnt","script","await eval"]],"downloadtwittervideo.com":[["nowoif"]],"dribbblegraphics.com":[["rmnt","script","deblocker"]],"drphil.com":[["set","canRunAds","true"]],"dtbps3games.com":[["set","penci_adlbock.ad_blocker_detector","0"]],"dynamicminister.net":[["aeld","click","window.open"]],"dz4link.com":[["aopw","Fingerprint2"],["set","blurred","false"],["nowoif"]],"earncrypto.co.in":[["no-xhr-if","adx"]],"eatortoss.com":[["rmnt","script","/__adblocker|html-load/"]],"editorsadda.com":[["noeval-if","/chp_?ad/"]],"elaoffcial.com":[["no-fetch-if","method:HEAD"],["nostif","ai_adb"]],"elcriticodelatele.com":[["noeval-if","/chp_?ad/"]],"electronicdrumadvisor.com":[["rmnt","script","/__adblocker|html-load/"]],"epaceforums.co.uk":[["rmnt","script","html-load.com"]],"eroasmr.com":[["acs","document.querySelectorAll","popMagic"]],"esportsmonk.com":[["noeval-if","/chp_?ad/"]],"everydaycheapskate.com":[["rmnt","script","/__adblocker|html-load/"]],"exam-results.in":[["noeval-if","/chp_?ad/"]],"exclusiveindianporn.com":[["aopr","document.dispatchEvent"]],"expertworldtravel.com":[["rmnt","script","/__adblocker|html-load/"]],"explorertalk.com":[["rmnt","script","html-load.com"]],"expresskaszubski.pl":[["nosiif","childNodes"]],"extreme-board.com":[["acs","document.createElement","script"]],"ezaudiobookforsoul.com":[["set","cabdSettings","undefined"]],"famousnipple.com":[["acs","document.querySelectorAll","popMagic"]],"fangraphs.com":[["acs","$","Math.random"],["set","ezstandalone.enabled","true"]],"farodevigo.es":[["set","pr_okvalida","true"],["nostif","sub"]],"fauxsho.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fduknights.com":[["set","blockAdBlock","trueFunc"]],"feastingathome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fedscoop.com":[["set","init_welcome_ad","noopFunc"]],"femalefirst.co.uk":[["aopr","ppload"]],"fertilityfriends.co.uk":[["rmnt","script","html-load.com"]],"fgochaldeas.com":[["rmnt","script","html-load.com"]],"fiestast.org":[["rmnt","script","html-load.com"]],"filespayout.com":[["nowoif"]],"filme-bune.biz":[["acs","JSON.parse","break;case $."]],"filmovi.ws":[["acs","JSON.parse","break;case $."]],"firmwarex.net":[["no-xhr-if","googlesyndication"],["aost","setTimeout","adsBlocked"],["no-fetch-if","googlesyndication","length:10","{\"type\":\"cors\"}"]],"fitbook.de":[["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"fitnessfooddiva.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flatai.org":[["rmnt","script","adblock"]],"focusstoc.com":[["rmnt","script","html-load.com"]],"fontsforpeas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodbanjo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodiesjoy.com":[["noeval-if","/chp_?ad/"]],"footballchannel.jp":[["rmnt","script","html-load.com"]],"fordtransitusaforum.com":[["rmnt","script","html-load.com"]],"forlitoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"fox16.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"foxeslovelemons.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foxseotools.com":[["nowoif","!?safelink_redirect="],["set","blurred","false"]],"foxtube.com":[["nowoif"]],"foxyfolksy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fraicheliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freebigboobsporn.com":[["noeval"],["aopr","Aloader.serve"]],"freeboytwinks.com":[["aopr","document.dispatchEvent"]],"freemoviesfull.com":[["acs","document.documentElement","break;case $."]],"freenet.de":[["nostif",".call(null)","10"]],"freezerfit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frenchbulldogowner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freshplaza.com":[["nosiif","banner"]],"fresnobee.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"friendshipbreadkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fstream365.com":[["rmnt","script","{delete window["]],"fullassia.com":[["nowoif"]],"fullfreeimage.com":[["acs","document.documentElement","break;case $."],["nowoif","/^/","1"],["aost","HTMLElement.prototype.click","_0x"]],"futabasha-change.com":[["rmnt","script","html-load.com"]],"futurezone.de":[["nostif",".call(null)","10"]],"gamers-haven.org":[["noeval-if","/chp_?ad/"]],"games.fresnobee.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.readersdigest.ca":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.theportugalnews.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.word.tips":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamovideo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"garoetpos.com":[["set","adBlockDetected","noopFunc"]],"gatherforbread.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gatorforums.net":[["rmnt","script","html-load.com"]],"gbsagbo.com":[["rmnt","script","window.open"]],"ge-map-overlays.appspot.com":[["no-xhr-if","googlesyndication"],["nostif","adsbygoogle"]],"gencoupe.com":[["rmnt","script","html-load.com"]],"gentlemansgazette.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"geocaching101.com":[["rmnt","script","html-load.com"]],"getworkation.com":[["noeval-if","/chp_?ad/"]],"gigafile.nu":[["rmnt","script","html-load.com"]],"gimmedelicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlcarnivore.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"girlswallowed.com":[["acs","document.querySelectorAll","popMagic"]],"givemesport.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"giverecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gjsabgs.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|popup|\\.onerror|WebAssembly/i"]],"gload.to":[["aopw","bullads"],["aopr","open"]],"globalrph.com":[["nostif","disableDeveloper"],["rmnt","script","html-load.com"]],"glocktalk.com":[["rmnt","script","html-load.com"]],"gm-volt.com":[["rmnt","script","html-load.com"]],"go.linkify.ru":[["ra","href","[href*=\"survey\"]","stay"]],"goanimes.vip":[["acs","EventTarget.prototype.addEventListener","delete window"]],"gocomics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gojapaneseporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"gomcpanthers.com":[["set","blockAdBlock","trueFunc"]],"gooddinnermom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gossitup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gowyo.com":[["set","blockAdBlock","trueFunc"]],"graphicget.com":[["aeld","load","google-analytics"]],"greatandhra.com":[["set-cookie","garb","1"]],"gruporafa.com.br":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"gtavi.pl":[["noeval-if","/chp_?ad/"]],"guidingtech.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guitarnick.com":[["acs","document.getElementById","banner"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gunandgame.com":[["rmnt","script","html-load.com"]],"gunhub.com":[["rmnt","script","html-load.com"]],"h-flash.com":[["nowoif"]],"haaretz.co.il":[["aeld","load","hblocked"],["acs","$","AdBlockUtil"],["set","showAds","true"]],"habuteru.com":[["noeval-if","/chp_?ad/"]],"hachiraw.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"hancinema.net":[["no-fetch-if","/clarity|googlesyndication/"]],"hanime24.com":[["acs","document.querySelectorAll","popMagic"]],"harmonikum.co":[["rmnt","script","html-load.com"]],"hd-xxx.me":[["acs","document.querySelectorAll","popMagic"],["nowoif"],["aopr","loadTool"]],"healthylifetrainer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heatherchristo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hechos.net":[["noeval-if","/chp_?ad/"]],"hecktictravels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hentai-ia.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"hentaianimedownloads.com":[["acs","puShown","/doOpen|popundr/"]],"hermanathome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hezzi-dsbooksandcooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hiddencamstube.com":[["aopr","Aloader.serve"],["noeval"]],"hifi-forum.de":[["nostif",".call(null)","10"]],"highschooltestprep.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hindisite.net":[["aopr","open"]],"hivetoon.com":[["noeval-if","/chp_?ad/"]],"hochheimer-zeitung.de":[["nostif",".call(null)","10"]],"hokej.net":[["nostif","blur"]],"homehobbiesdaily.com":[["set","loadShield","noopFunc"]],"honeyandlime.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hoodsite.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"hornpot.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"humblerise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hurawatch.cc":[["acs","addEventListener","HTMLAllCollection"]],"hvacptcharts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hvacsite.com":[["rmnt","script","html-load.com"]],"hyundaikonaforum.com":[["rmnt","script","html-load.com"]],"idahostatesman.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"ikneadtoeat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ilikecomix.com":[["acs","document.querySelectorAll","popMagic"]],"ilpiacenza.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"imgouskel.sbs":[["aopr","console.clear"],["nano-sib","timer"],["nowoif","!/prcf.fiyar|themes|pixsense|.jpg/"]],"immotherofthebride.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"imperfecthomemaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"in91vip.win":[["acs","document.querySelectorAll","popMagic"],["set","isTabActive","true"]],"inchcalculator.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infinite-fusion.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infinitiq60.org":[["rmnt","script","html-load.com"]],"insidetheiggles.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"insuredhome.org":[["set","page_params.holiday_promo","true"]],"intereseducation.com":[["acs","parseInt","break;case $."]],"interfootball.co.kr":[["rmnt","script","KCgpPT57bGV0IGU"]],"investing.com":[["no-fetch-if","ads"],["set","adNotificationDetected","false"]],"irreverentgent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itpro.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"jackfruitful.com":[["rmnt","script","/__adblocker|html-load/"]],"jadijuara.com":[["aopw","adBlockDetected"]],"japaneseasmr.com":[["acs","document.querySelectorAll","popMagic"]],"japscan.lol":[["acs","document.documentElement","break;case $."],["nostif","detectImgLoad"]],"javenglish.cc":[["nowoif","_blank"]],"javfull.net":[["aeld","","popMagic"],["nosiif","_0x"]],"javfullmovie.com":[["acs","document.querySelectorAll","popMagic"]],"javgg.me":[["noeval-if","/chp_?ad/"]],"javggvideo.xyz":[["nowoif"],["nostif","window.open"]],"javhdvideo.org":[["aopr","b2a"]],"javhoho.com":[["acs","document.querySelectorAll","popMagic"],["aost","String.prototype.charCodeAt","ai_"]],"javindosub.site":[["set","uas","[]"]],"javplayer.cc":[["nowoif"]],"javsex.guru":[["acs","document.querySelectorAll","popMagic"]],"jkanime.net":[["acs","addEventListener","HTMLAllCollection"]],"jmzkzesy.xyz":[["nowoif"],["acs","Math","localStorage['\\x"]],"jolenesrecipejournal.com":[["rmnt","script","/__adblocker|html-load/"]],"josephwriteranderson.com":[["rmnt","script","/__adblocker|html-load/"]],"joybauer.com":[["rmnt","script","/__adblocker|html-load/"]],"joyfilledeats.com":[["rmnt","script","/__adblocker|html-load/"]],"jpvhub.com":[["acs","document.querySelectorAll","popMagic"]],"kacengeng.com":[["noeval-if","/chp_?ad/"]],"kahanighar.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"kanyetothe.com":[["rmnt","script","html-load.com"]],"karaoke4download.com":[["noeval-if","/chp_?ad/"]],"katieleekitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"kget.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kingsleynyc.com":[["nano-sib","counter","*"]],"kino.de":[["rmnt","script","DisplayAcceptableAdIfAdblocked"],["set","adex","{}"],["set","adex.getAdexUser","noopFunc"]],"kinoger.re":[["aeld","click","_blank"]],"kitchensanctuary.com":[["rmnt","script","/__adblocker|html-load/"]],"kitimama-matome.net":[["rmnt","script","html-load.com"]],"knitterknotter.com":[["rmnt","script","/__adblocker|html-load/"]],"kongregate.com":[["nostif",".offsetHeight"]],"kurakura21.space":[["noeval-if","UserCustomPop"]],"kusonime.com":[["nostif","css_class.show"],["set","showada","true"],["set","showax","true"],["aopw","app_advert"]],"lacrima.jp":[["noeval-if","/chp_?ad/"]],"ladypeartree.com":[["rmnt","script","/__adblocker|html-load/"]],"ldblog.jp":[["rmnt","script","html-load.com"]],"leaderlive.co.uk":[["set","adLight","true"]],"learnclax.com":[["acs","$","fetch"]],"legacy-wow.com":[["rmnt","script","/__adblocker|html-load/"]],"legallyhealthyblonde.com":[["rmnt","script","/__adblocker|html-load/"]],"lesbianfantasyxxx.com":[["aopr","Aloader.serve"],["noeval"]],"leviathanmanga.com":[["aopr","popns"]],"levif.be":[["nostif",".call(null)","10"]],"lglbmm.com":[["noeval-if","/chp_?ad/"]],"lifeloveandgoodfood.com":[["rmnt","script","/__adblocker|html-load/"]],"lifesurance.info":[["set","showadas","true"]],"likemanga.ink":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/popMagic|pop1stp/"]],"link.3dmili.com":[["set","blurred","false"]],"littlepandatranslations.com":[["noeval-if","/chp_?ad/"]],"live.fastsports.store":[["rmnt","script","popundersPerIP"]],"livinggospeldaily.com":[["rmnt","script","/==undefined.*body/"]],"lizardporn.com":[["aopr","loadTool"]],"ljcam.net":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"lne.es":[["nostif","ipod"],["nostif","sub"]],"localdvm.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"localemagazine.com":[["aopr","wpsite_clickable_data"]],"lolcalhost.ru":[["acs","EventTarget.prototype.addEventListener","delete window"]],"loldewfwvwvwewefdw.cyou":[["nowoif"]],"loveandotherspices.com":[["rmnt","script","/__adblocker|html-load/"]],"lovelygreens.com":[["rmnt","script","/__adblocker|html-load/"]],"lovemeow.com":[["rmnt","script","/__adblocker|html-load/"]],"machiningdoctor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"made-by.org":[["nostif","ads"]],"mahajobwala.in":[["rmnt","script","/adbl/i"]],"mail.de":[["nostif",".call(null)","10"]],"mainichi.jp":[["rmnt","script","html-load.com"]],"mamaslaundrytalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manforhimself.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangahub.io":[["acs","document.querySelectorAll","popMagic"],["acs","JSON.parse","break;case $."]],"manganatos.com":[["acs","parseInt","break;case $."]],"manhattan-nest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manitobahuntingforum.com":[["rmnt","script","html-load.com"]],"manusmenu.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maple.kitchen":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maps4study.com.br":[["noeval-if","/chp_?ad/"]],"mardomreport.net":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"marinetraffic.live":[["rmnt","script","/adblock/i"]],"marlinowners.com":[["rmnt","script","html-load.com"]],"masstamilans.com":[["nowoif"]],"mathler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mattadlard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mc-hacks.net":[["acs","navigator","FingerprintJS"],["aopw","ai_front"]],"mconverter.eu":[["set","abd","{}"]],"mediaite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["set-cookie","am-sub","1"]],"meetimgz.com":[["acs","document.querySelectorAll","popMagic"]],"metal-building-homes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meusanimes.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"midwestconference.org":[["set","blockAdBlock","trueFunc"]],"miltonkeynes.co.uk":[["rmnt","script","await eval"]],"modescanlator.net":[["no-fetch-if","googlesyndication"]],"mommyhatescooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommymusings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momsdinner.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mopo.de":[["nostif",".call(null)","10"]],"motive213.com":[["acs","parseInt","break;case $."]],"motogpstream.me":[["rmnt","script","adserverDomain"]],"motorcycle.com":[["set","loadShield","noopFunc"]],"motorsportstats.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","html-load.com"]],"mountainmodernlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"movieffm.net":[["acs","WebAssembly","atob"]],"mt.de":[["nostif",".call(null)","10"]],"multimovies.tech":[["noeval-if","/chp_?ad/"]],"multiup.io":[["nosiif",".submit"],["rmnt","script","\\x"],["nowoif","_blank"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"mustangevolution.com":[["rmnt","script","html-load.com"]],"myfox8.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"myfreeblack.com":[["aopw","mfbDetect"]],"myjest.com":[["nosiif","_$","12345"]],"mylifeelsewhere.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mypornstarbook.net":[["aopr","ExoLoader.serve"],["acs","document.querySelectorAll","popMagic"]],"mysaucerecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mytennishq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mytoolz.net":[["aopr","onload"],["acs","document.createElement","adb"]],"mytuner-radio.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"mzansixporn.co.za":[["acs","document.querySelectorAll","popMagic"],["acs","navigator","FingerprintJS"]],"nakedneighbour.com":[["aopr","loadTool"]],"napolipiu.com":[["aopr","tie"]],"naszemiasto.pl":[["aeld","","show"],["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","admiral","excludes",",\\\""]],"nathanmichaelphoto.com":[["nowoif","","10","obj"],["set","HTMLScriptElement.prototype.onerror","undefined"],["no-fetch-if","/pub\\.clickadu|bing\\.com/"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"nbcnews.com":[["aopr","googletag"]],"nerdburglars.net":[["rmnt","script","/__adblocker|html-load/"]],"new.lewd.ninja":[["nano-sib","next","1000","0.001"]],"newsammo.com":[["nostif",".showModal"],["no-fetch-if","adsbygoogle"]],"nextchessmove.com":[["rmnt","script","head.appendChild.bind"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"nft-media.net":[["rmnt","script","leave_recommend"]],"nikolopaa.com":[["rmnt","script","/__adblocker|html-load/"]],"northdevongazette.co.uk":[["rmnt","script","await eval"]],"norwegiancruiselineblog.com":[["rmnt","script","/__adblocker|html-load/"]],"novaljalocal.com":[["rmnt","script","/__adblocker|html-load/"]],"nsfwr34.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["noeval-if","/chp_?ad/"]],"nudeblackgirlfriend.com":[["acs","document.querySelectorAll","popMagic"]],"nullscripts.net":[["nostif","show"]],"nusports.com":[["set","blockAdBlock","trueFunc"]],"nydailynews.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"oceanoffgames.com":[["nowebrtc"]],"oe24.at":[["set","iom","{}"],["set","iom.c","noopFunc"]],"oklahoman.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"okleak.com":[["noeval-if","ads"]],"okulsoru.com":[["acs","addEventListener","google_ad_client"]],"onlinegrannyporn.com":[["noeval"],["aopr","Aloader.serve"]],"onlinepornushka.com":[["acs","document.querySelectorAll","popMagic"]],"onthefeeder.com":[["rmnt","script","/__adblocker|html-load/"]],"onworks.net":[["set","adBlockDetected","null"]],"orangespotlight.com":[["aopr","adBlockDetected"]],"orgyxxxhub.com":[["aopr","ExoLoader"],["aopr","Aloader"],["aopr","advobj"],["noeval-if","replace"]],"orsm.net":[["aopr","open"]],"osuskinner.com":[["no-xhr-if","/googlesyndication|nitropay/"],["nostif","height"],["aopw","uBlockActive"]],"otoko-honne.com":[["rmnt","script","html-load.com"]],"ourhomemadeeasy.com":[["rmnt","script","/__adblocker|html-load/"]],"outdoorchannel.de":[["nostif",".call(null)","10"]],"outdoorguide.com":[["rmnt","script","/__adblocker|html-load/"]],"packinsider.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"palabr.as":[["nostif","error-report.com"],["rmnt","script","html-load.com"]],"panlasangpinoymeatrecipes.com":[["aopr","__eiPb"]],"pepperporch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"performanceboats.com":[["rmnt","script","html-load.com"]],"petiteinparis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"photoshopvideotutorial.com":[["aopr","adsBlocked"]],"pianokafe.com":[["aopw","adBlockDetected"]],"pichaloca.com":[["aopr","ExoLoader"]],"pincutsewstudio.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pinterpoin.com":[["rmnt","script","await eval"],["rmnt","script","()=>eval"]],"plantcaretoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"plc247.com":[["acs","String.fromCharCode","decodeURIComponent"],["rmnt","script","deblocker"]],"poe-vault.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"pooembed.eu":[["rmnt","script","adserverDomain"],["nowoif"]],"popularasianxxx.com":[["aopr","popit"],["aeld","popstate","noPop"]],"porcore.com":[["nowoif"],["set","puShown","true"],["acs","document.querySelectorAll","popMagic"]],"porn-monkey.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"pornclipshub.com":[["noeval"],["aopr","Aloader.serve"]],"pornd.pro":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","puShown"]],"porngayclips.com":[["acs","document.querySelectorAll","popMagic"]],"pornhoarder.net":[["aopw","Adcash"],["aopr","aclib"],["aopr","aclib.runPop"],["nowoif"]],"pornkino.cc":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"pornobait.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"pornocolegialas.org":[["acs","document.querySelectorAll","popMagic"]],"pornovka.cz":[["acs","document.querySelectorAll","popMagic"],["no-fetch-if","ads"]],"pornproxy.app":[["nowoif"],["aopr","LieDetector"]],"pornve.com":[["set","frg","1"],["nowoif"]],"powerthesaurus.org":[["aopw","ad_abblock_ad"]],"practicalselfreliance.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prayerist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pregledaj.net":[["acs","Math","break;case $."]],"press-citizen.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pro.iqsmartgames.com":[["nowoif"]],"prodigygamers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prosiebenmaxx.de":[["nostif",".call(null)","10"]],"ptcbpracticetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ptoanswers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"punisoku.blogo.jp":[["acs","url","Math.random"]],"pwinsider.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"r1300gsforum.com":[["rmnt","script","html-load.com"]],"raccontivietati.com":[["acs","document.querySelectorAll","popMagic"]],"radio-norge.org":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-sveriges.se":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.at":[["nostif",".call(null)","10"]],"ranger6g.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"realgreekrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"realityblurb.com":[["aopr","googletag"],["aopr","HTMLIFrameElement"]],"recipe52.com":[["rmnt","script","/__adblocker|html-load/"]],"redlineforums.com":[["rmnt","script","html-load.com"]],"relampagomovies.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nostif","bait"],["rmnt","script","offsetHeight"],["acs","document.addEventListener","window.open"]],"reneerenovates.com":[["rmnt","script","/__adblocker|html-load/"]],"reportbangla.com":[["noeval-if","/chp_?ad/"]],"repositoratacadao.cyou":[["aeld","click","pop_"]],"resolutioneats.com":[["rmnt","script","/__adblocker|html-load/"]],"retrorecipebox.com":[["rmnt","script","/__adblocker|html-load/"]],"rhythmsofplay.com":[["rmnt","script","/__adblocker|html-load/"]],"richmondandtwickenhamtimes.co.uk":[["set","adLight","true"]],"rivertenkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"robloxlist.com":[["rmnt","script","/__adblocker|html-load/"]],"rocketrevise.com":[["noeval-if","/chp_?ad/"]],"rodude.com":[["acs","onload"]],"rollingstone.de":[["nostif",".call(null)","10"]],"root-top.com":[["aopr","adblockblock"]],"rotherhamadvertiser.co.uk":[["rmnt","script","await eval"]],"rubyvidhub.com":[["rmnt","script","wpadmngr.com"],["set","cRAds","false"],["aopw","showADBOverlay"],["acs","WebAssembly","atob"]],"rue89lyon.fr":[["aopr","isShowingAd"]],"rulergame.net":[["rmnt","script","/__adblocker|html-load/"]],"runeriders.com":[["rmnt","script","html-load.com"]],"runnersblueprint.com":[["rmnt","script","/__adblocker|html-load/"]],"rysafe.blogspot.com":[["nostif","nextFunction","250"]],"saabscene.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sailorbailey.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"saltypearlcrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sanfoundry.com":[["aopr","googletag"]],"sat1gold.de":[["nostif",".call(null)","10"]],"sbsun.com":[["set","CnnXt.Event.fire","noopFunc"]],"scalemodeladdict.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scionimforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"scubidu.eu":[["aost","String.prototype.charCodeAt","ai_"]],"secuhex.com":[["nostif","show"]],"seededatthetable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seekinggoodeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sempreupdate.com.br":[["nostif","open"]],"seriesgraph.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sesso-escort.com":[["acs","document.querySelectorAll","popMagic"]],"sex-amateur-clips.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"]],"sexo5k.com":[["rmnt","script","ExoLoader"]],"sextvx.com":[["nostif","window.location.href=link"]],"sgpics.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"shemale6.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"shortgoo.blogspot.com":[["set","showAds","true"],["nano-sib"]],"shouldwewatch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shrlink.top":[["acs","String.fromCharCode","/btoa|break/"]],"shutupandgo.travel":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"sidearmsocial.com":[["set","blockAdBlock","trueFunc"]],"simpleveganbites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skat-karten.de":[["nostif","displayMessage","2000"]],"slashfilm.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slobodnadalmacija.hr":[["rmnt","script","adrecover.com"]],"slotforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"smartfeecalculator.com":[["set","document.hidden","false"],["set","document.hasFocus","trueFunc"],["rmnt","script","DisableDevtool"],["nowoif","!devuploads.com"],["nano-sib","","*","0.02"],["nano-stb","","*","0.02"]],"soccerballworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"solanforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"solewe.com":[["nostif","offsetHeight"]],"sondriotoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"sourceforge.net":[["rmnt","script","html-load.com"],["set","SF.adblock","true"],["nano-stb"]],"souvlakiforthesoul.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spacequotations.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spinachandbacon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spotofteadesigns.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"ssdtop.com":[["nostif","show"]],"starterstory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steampoweredfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stitch11.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"storefront.com.ng":[["nostif","show"]],"stream-69.com":[["acs","document.querySelectorAll","popMagic"]],"stream.bunkr.ru":[["aost","Math","_0x"]],"stream.pkayprek.com":[["acs","JSON.parse","break;case $."]],"subtitlecat.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"sukattojapan.com":[["rmnt","script","html-load.com"]],"sunporno.club":[["aopr","popit"],["aeld","popstate","noPop"]],"supermarioemulator.com":[["nostif","adb"]],"survivalsullivan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"suzuki-forums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"suzylu.co.uk":[["set","adsbygoogle","trueFunc"],["set","player.ads.cuePoints","undefined"]],"swdw.net":[["no-xhr-if","adsbygoogle"]],"swiftuploads.com":[["ra","onclick","button[onclick*=\"open\"]"],["nowoif"],["aeld","click","clicksCount"],["acs","String.fromCharCode","fetch"],["aeld","DOMContentLoaded","length"],["set","Element.prototype.closest","falseFunc"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>|\\('\\+'\"|\\}\\)\\(\\);window\\|\\|/g","excludes","/^self\\.__next_f\\.push/"]],"symboleslowianskie.pl":[["noeval-if","/chp_?ad/"]],"syracusecrunch.com":[["set","blockAdBlock","trueFunc"]],"sysguides.com":[["noeval-if","/chp_?ad/"]],"szene38.de":[["nostif",".call(null)","10"]],"tablefortwoblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tastytreatsandeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tauntongazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"teachingautism.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techwiser.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teensextube.xxx":[["aopr","document.dispatchEvent"]],"terrainforum.com":[["rmnt","script","html-load.com"]],"textfixer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"texturecan.com":[["set","detectAdBlock","noopFunc"]],"the5krunner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theaquariumguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebellyrulesthemind.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebestketorecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theboldabode.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theclassicvaluer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theconomy.me":[["noeval-if","/chp_?ad/"]],"thedeliciousspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefashionspot.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"thefriendlyredfox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegamearcade.com":[["noeval-if","/chp_?ad/"]],"thegardenglove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehomeedit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehomesihavemade.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theincrediblebulks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theismailiusa.org":[["acs","Math","break;case $."]],"thelibrarydigital.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"thelifestylecure.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themarblekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepalmierireport.com":[["rmnt","script","/==undefined.*body/"]],"theppk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theregister.co.uk":[["aopr","RegAdBlocking"],["acs","document.createElement","a.adm"]],"thereviewgeek.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesaltypot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesaltysoldier.com":[["noeval-if","js_func_decode_base_64"]],"thespiritualindian.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesqueakymixer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theteacherscorner.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theweathereddoor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theweatheredfox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewestmorlandgazette.co.uk":[["aopr","_sp_._networkListenerData"],["set","adLight","true"]],"thisisreno.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thoughtcard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"threebirdnest.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thrivestrive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tideschart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timelessdishes.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timesofindia.indiatimes.com":[["set","nsShowMaxCount","0"],["no-fetch-if","toiads"],["aeld","","adb"],["nostif","adb"]],"tinyhousetalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"topshelfdiy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toptreehouses.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tortoiseforum.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tpi.li":[["rmnt","script","/adb_detected|AdBlockCheck|;break;case \\$\\./i"],["nowoif"],["no-fetch-if","googlesyndication"],["no-xhr-if","/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["acs","EventTarget.prototype.addEventListener","delete window"],["aeld","DOMContentLoaded","/checkAdblockUser|bypOnSyntheticClick/"],["nostif","checkAdblock"],["nosiif","-0x"],["set","blurred","false"]],"trailboss.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"travelbook.de":[["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"travelingossip.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"travelmath.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"traveltomerida.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tremamnon.com":[["aeld","DOMContentLoaded","adsBlocked"],["rmnt","script","htmls"]],"trocforums.co.uk":[["rmnt","script","html-load.com"]],"trutv.com":[["set","turnerAnalyticsObj","{}"],["set","turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"]],"trxforums.com":[["rmnt","script","html-load.com"]],"tryboobs.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["aopr","open"]],"tubepornstock.com":[["noeval"],["aopr","Aloader.serve"]],"tundrasolutions.com":[["rmnt","script","html-load.com"]],"turbododge.com":[["rmnt","script","html-load.com"]],"turbovid.vip":[["nowoif"],["nostif","window.open"]],"turkishliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tutorgaming.com":[["rmnt","script","antiAdBlockerHandler"]],"tv3.lt":[["rmnt","script","html-load.com"]],"tvpclive.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."]],"twobluescans.com":[["noeval-if","/chp_?ad/"],["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"],["rmnt","script","/ai_|googletag|adb/"]],"twospoke.com":[["rmnt","script","html-load.com"]],"txowners.com":[["rmnt","script","html-load.com"]],"typinggames.zone":[["acs","document.getElementById","alert"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"udemy-downloader.com":[["acs","addEventListener","fetch"]],"unconventionalbaker.com":[["rmnt","script","/__adblocker|html-load/"]],"uncorkedasheville.com":[["rmnt","script","/__adblocker|html-load/"]],"undeadwalking.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"unilad.com":[["rmnt","script","\"nowprocket\""]],"unitystr.com":[["no-fetch-if","googlesyndication"]],"universfreebox.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"unleashedllc.co":[["rmnt","script","/__adblocker|html-load/"]],"unsere-helden.com":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"upanddownwordsanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"uploadhaven.com":[["rmnt","script","FingerprintJS"]],"uppit.com":[["acs","JSON.parse","break;case $."],["acs","navigator","break;case $."]],"usethinkscript.com":[["rmnt","script","/__adblocker|html-load/"]],"vadbom.com":[["acs","navigator","break;case $."]],"veggiessavetheday.com":[["rmnt","script","/__adblocker|html-load/"]],"velarforums.co.uk":[["rmnt","script","html-load.com"]],"veryanxiousmommy.com":[["rmnt","script","/__adblocker|html-load/"]],"victoriamag.com":[["rmnt","script","/__adblocker|html-load/"]],"videogamer.com":[["set","admiral","noopFunc"]],"vidnest.fun":[["json-prune","*","rot_url"],["json-prune","*","pop_type"]],"viralxxxporn.com":[["acs","document.querySelectorAll","popMagic"],["set","flashvars.adv_pre_src",""],["set","flashvars.mlogo",""]],"visalist.io":[["no-xhr-if","adsbygoogle"],["no-fetch-if","adsbygoogle"]],"visible.com":[["set","adobe","{}"]],"visorsmr.com":[["noeval-if","/chp_?ad/"]],"visortecno.com":[["noeval-if","/chp_?ad/"]],"vmorecloud.com":[["noeval-if","/chp_?ad/"]],"voyageatl.com":[["rmnt","script","/__adblocker|html-load/"]],"voyagela.com":[["rmnt","script","/__adblocker|html-load/"]],"vwscout.org":[["rmnt","script","html-load.com"]],"vxxx.com":[["acs","ACtMan"]],"warps.club":[["aopr","adblockDetect"]],"watchfacebook.com":[["noeval-if","ads"]],"weerslag.nl":[["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|siteActivateScripts/"]],"welovecatsandkittens.com":[["rmnt","script","/__adblocker|html-load/"]],"wereintherockies.com":[["rmnt","script","/__adblocker|html-load/"]],"westmanga.org":[["nowoif"]],"whereismyspoon.co":[["rmnt","script","/__adblocker|html-load/"]],"whereverwriter.com":[["rmnt","script","/__adblocker|html-load/"]],"whisperingauroras.com":[["aopr","AaDetector"]],"wiadomosci.wp.pl":[["nostif","","100"]],"wikily.gg":[["rmnt","script","nowprocket","excludes","self.__next"]],"wildlifenomads.com":[["rmnt","script","/__adblocker|html-load/"]],"wohnmobilforum.de":[["nostif","nextFunction"]],"womanscribbles.net":[["rmnt","script","/__adblocker|html-load/"]],"wonderoak.com":[["rmnt","script","/__adblocker|html-load/"]],"worldpopulationreview.com":[["rmnt","script","/__adblocker|html-load/"]],"worldseafishing.com":[["rmnt","script","html-load.com"]],"worldstar.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["acs","admiral"],["set","Object.prototype.shouldExpectGoogleCMP","false"]],"wrzesnia.info.pl":[["no-fetch-if","ads"]],"wspinanie.pl":[["nostif","getComputedStyle"]],"www.primevideo.com":[["json-prune","cuepointPlaylist vodPlaybackUrls.result.playbackUrls.cuepoints vodPlaylistedPlaybackUrls.result.playbackUrls.pauseBehavior vodPlaylistedPlaybackUrls.result.playbackUrls.pauseAdsResolution vodPlaylistedPlaybackUrls.result.playbackUrls.intraTitlePlaylist.[-].shouldShowOnScrubBar ads"]],"x-videos.name":[["acs","document.querySelectorAll","popMagic"]],"x-x-x.tube":[["aopr","popns"],["rmnt","script","location"],["set-cookie","aawsmackeroo0","1"]],"xhardhempus.net":[["nostif","adblock"]],"xhvid1.com":[["acs","Array.prototype.indexOf","popunder"]],"xxxretrofuck.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxwebdlxxx.top":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"yestech.xyz":[["noeval-if","/chp_?ad/"]],"yetgamer.com":[["rmnt","script","/__adblocker|html-load/"]],"yeutienganh.com":[["aopw","adBlockDetected"]],"yogablogfit.com":[["set","timeSec","0"],["nano-stb","getlink","*","0.001"],["noeval-if","replace"]],"yogitimes.com":[["aopr","fuckAdBlock"]],"young-pussy.com":[["aopr","ExoLoader.serve"]],"youngbelle.net":[["acs","document.querySelectorAll","popMagic"]],"yoursciontc.com":[["rmnt","script","html-load.com"]],"youtubetoany.com":[["acs","Math","break;case $."]],"youwatch-serie.com":[["nostif","displayMessage"]],"yummytummyaarthi.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"],["rmnt","script","/__adblocker|html-load/"]],"yxztalk.com":[["rmnt","script","html-load.com"]],"z80ne.com":[["rmnt","script","detectAdBlock"]],"zenaskitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"zone.msn.com":[["no-fetch-if","googlesyndication","length:40000-60000"]],"zxcprime.icu":[["nowoif"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
