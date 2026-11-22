/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"18-teen-sex.com":[["acs","document.dispatchEvent","myEl"]],"200forums.com":[["rmnt","script","html-load.com"]],"9ketsuki.info":[["noeval-if","/chp_?ad/"]],"abezara.com":[["rmnt","script","/popunder/i"]],"abysscdn.com":[["aeld","","break;case $."],["set","document.ontouchend","null"],["set","document.onclick","null"],["aost","HTMLElement.prototype.click","_0x"]],"aconsciousrethink.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acrforum.com":[["rmnt","script","html-load.com"]],"adnan-tech.com":[["noeval-if","/chp_?ad/"]],"airflix1.com":[["acs","addEventListener","HTMLAllCollection"]],"airfryerworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airsoftsociety.com":[["rmnt","script","html-load.com"]],"akuebresources.com":[["noeval-if","/chp_?ad/"]],"allfordmustangs.com":[["rmnt","script","html-load.com"]],"allgemeine-zeitung.de":[["nostif",".call(null)","10"]],"alliancervforums.com":[["rmnt","script","html-load.com"]],"allyskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alphafoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amazingcharcuterieboards.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amsmotoresllc.com":[["acs","document.documentElement","break;case $."]],"androidcentral.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"anigogo.net":[["aopr","__Y"],["aopr","mm"]],"animedb.in":[["nosiif","ads"]],"animeunity.to":[["rmnt","script","Popup"]],"animexxxfilms.com":[["aopr","popit"],["aeld","popstate","noPop"]],"anothergraphic.org":[["noeval-if","/chp_?ad/"]],"apaigeofpositivity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aprenderquechua.com":[["noeval-if","/chp_?ad/"]],"aquariumgenius.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"archivebate.com":[["acs","document.querySelectorAll","popMagic"],["acs","decodeURI","decodeURIComponent"],["no-fetch-if","googlesyndication"]],"arcticchat.com":[["rmnt","script","html-load.com"]],"ardrossanherald.com":[["set","adLight","true"]],"aroratr.club":[["acs","RegExp","googlebot"]],"artforum.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"artnews.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"asialiveaction.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"asiangay.tv":[["aopr","popns"]],"asianmassage.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"ate60vs7zcjhsjo5qgv8.com":[["nowoif","!vidsrc."]],"athomewiththebarkers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atthepicketfence.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audizine.com":[["acs","document.createElement","admiral"]],"austiblox.net":[["nostif","location"]],"austinbassfishing.com":[["rmnt","script","html-load.com"]],"autofrage.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"avcesar.com":[["nostif","adspot_top","1500"]],"avengerforumz.com":[["rmnt","script","html-load.com"]],"avengerinator.blogspot.com":[["aeld","load","nextFunction"]],"b3infoarena.in":[["aeld","load","2000"]],"babybmw.net":[["rmnt","script","html-load.com"]],"bacasitus.com":[["rmnt","script","AdBl"]],"badassoftcore.com":[["nostif","innerHTML"]],"bakingmehungry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"barcablaugranes.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"basicswithbails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beasttips.com":[["noeval-if","/chp_?ad/"]],"becomeawritertoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"becomingunbusy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beforeitsnews.com":[["rmnt","script","/==undefined.*body/"]],"berliner-kurier.de":[["nostif",".call(null)","10"]],"bestboatreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bettafish.com":[["rmnt","script","html-load.com"]],"bettermindbodysoul.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beyondcruise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beyondtheflag.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"bezpolitickekorektnosti.cz":[["aopr","sc_adv_out"]],"bigdeliciouslife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"biovetro.net":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"bittukitech.in":[["noeval-if","/chp_?ad/"]],"blackcunts.org":[["acs","document.querySelectorAll","popMagic"],["acs","onbeforeunload"]],"blasianluvforever.com":[["aopr","adBlockDetected"]],"blogcreativos.com":[["noeval-if","ads"]],"bnd.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"boainformacao.com.br":[["no-xhr-if","adsbygoogle"]],"boardgamequest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bocadailynews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bottleraiders.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boysxclusive.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["set","flashvars.protect_block",""]],"branditechture.agency":[["aopr","adsBlocked"]],"brightgreenrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brilian-news.id":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"brobible.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brobokep.org":[["acs","addEventListener","aclib"]],"browardpalmbeach.com":[["set","VMG.Components.Adblock","false"]],"btcbitco.in":[["acs","window.onload","innerHTML"],["set","document.hasFocus","trueFunc"],["no-fetch-if","/adoto|\\/ads\\/js/"],["rmnt","script","htmls"],["acs","addEventListener","devtools"],["acs","document.getElementById","ads"],["nowoif","?key="],["set","isRequestPresent","true"]],"budgetsavvydiva.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burbuja.info":[["acs","RegExp","$"]],"cakemehometonight.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camdigest.com":[["nano-sib","/wpsafe|wait/","*","0.001"],["rmnt","script","deblocker"]],"camhub.world":[["nostif","visibility","2000"]],"camlovers.tv":[["set","flashvars.protect_block",""]],"camperreport.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"canzoni-per-bambini.it":[["noeval-if","/chp_?ad/"]],"capecodtimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"carbonite.co.za":[["acs","$","/adblock/i"]],"cardsayings.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"carolinescooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"casperhd.com":[["noeval-if","/chp_?ad/"]],"cassiescroggins.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"catcrave.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"cathydiep.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cattime.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"cattitudedaily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"celebrateanddecorate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"championdrive.co":[["aopr","Adcash"]],"cheflindseyfarr.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chilimath.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chochox.com":[["acs","String.fromCharCode","atob"]],"citizen-times.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"cl500forum.com":[["rmnt","script","html-load.com"]],"cladright.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"classicparker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"classicrockhistory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clevercreations.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleverlysimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"climbingforums.com":[["rmnt","script","html-load.com"]],"clipconverter.cc":[["acs","parseInt","break;case $."]],"clixwarez.blogspot.com":[["aopr","adBlockDetected"]],"cloudykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cloudynights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clubtread.com":[["rmnt","script","html-load.com"]],"clubwrx.net":[["rmnt","script","html-load.com"]],"clubxterra.org":[["rmnt","script","html-load.com"]],"codingnepalweb.com":[["nano-stb","animation"]],"coleccionmovie.com":[["noeval-if","/chp_?ad/"]],"coloradofans.com":[["rmnt","script","html-load.com"]],"coloringpageshq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"colorkit.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"colormadehappy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"columbiadailyherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"columbiatribune.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"comdotgame.com":[["acs","$","cdgPops"]],"commercialcompetentedigitale.ro":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"compu-pc.com":[["acs","document.querySelectorAll","pastepc"]],"consiglietrucchi.com":[["rmnt","script","await eval"]],"cookeatpaleo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cool-etv.net":[["acs","document.documentElement","break;case $."]],"corollacrossforum.com":[["rmnt","script","html-load.com"]],"cotemaison.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"cottercrunch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"countrymusicnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"countypress.co.uk":[["set","adLight","true"]],"crackcodes.in":[["noeval-if","/chp_?ad/"]],"creativecaincabin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"creepycatalog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crinkledcookbook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crochetncrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crossword-explorer.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crotpedia.net":[["noeval-if","ads"]],"crunchycreamysweet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ctsvowners.com":[["rmnt","script","html-load.com"]],"cuisineaz.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"cupofjo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"customtacos.com":[["rmnt","script","html-load.com"]],"cybermania.ws":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"cyclingabout.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dadsguidetowdw.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyknicks.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"dailytech-news.eu":[["nostif","_0x"],["noeval-if","ads"]],"danslelakehouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daventryexpress.co.uk":[["rmnt","script","await eval"]],"daytonaowners.com":[["rmnt","script","html-load.com"]],"dazn.com":[["json-prune","PlaybackDetails.[].DaiVod"]],"dbupatriots.org":[["set","blockAdBlock","trueFunc"]],"dcworldscollide.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ddwloclawek.pl":[["set","questpassGuard","noopFunc"],["set","isAdBlockerEnabled","false"],["aeld","load","adb"]],"decompiler.com":[["no-fetch-if","/ethicalads\\.io|nitropay\\.com/"],["set","HTMLImageElement.prototype.onload","undefined"],["set","HTMLImageElement.prototype.onerror","undefined"],["aeld","load","img"],["aeld","error"],["set","Image.prototype.complete","false"],["set","Element.prototype.getBoundingClientRect","undefined"],["nostif",".length"],["set","HTMLImageElement.prototype.naturalWidth","240"],["set","OffscreenCanvas.prototype.getContext","undefined"],["aost","Image",".js"],["aost","Element.prototype.removeChild","/blocked|tick/"]],"deinesexfilme.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"desotocountynews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dfarq.homeip.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dipprofit.com":[["noeval-if","/chp_?ad/"]],"discover-sharm.com":[["no-fetch-if","adsbygoogle"]],"disneydining.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dobletecno.com":[["noeval-if","/chp_?ad/"]],"dodge-dart.org":[["rmnt","script","html-load.com"]],"dojing.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","wpadmngr.com"]],"domaha.tv":[["ra","href","a[href*=\"torrentico.top/sim/go.php\"]"]],"dontgobaconmyheart.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dorkly.com":[["acs","btoa","BOOTLOADER_LOADED"]],"dorohedoro.online":[["acs","document.querySelectorAll","popMagic"]],"dr-farfar.com":[["aeld","","ads"],["aopr","mdpDeBlocker"],["nowoif"]],"drop.carbikenation.com":[["nano-sib","/.?/","*","0.02"]],"dsmtalk.com":[["rmnt","script","html-load.com"]],"dstyladsg.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|popup|\\.onerror|WebAssembly/i"]],"dukeofed.org":[["aeld","click","","elements",".dropdown-menu a[href]"]],"dumblittleman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"earn.punjabworks.com":[["rmnt","script","/adbl/i"]],"easydrawingguides.com":[["rmnt","script","/__adblocker|html-load/"]],"eatinginstantly.com":[["rmnt","script","/__adblocker|html-load/"]],"eatpicks.com":[["rmnt","script","/__adblocker|html-load/"]],"ebook3000.com":[["aopw","adcashMacros"]],"edealinfo.com":[["acs","$","offsetHeight"],["no-xhr-if","googlesyndication"]],"edivaldobrito.com.br":[["noeval-if","/chp_?ad/"]],"educ4m.com":[["rmnt","script","popundersPerIP"]],"einfachschoen.me":[["nostif",".call(null)","10"]],"electricteeth.com":[["rmnt","script","/__adblocker|html-load/"]],"elevationmap.net":[["acs","parseInt","break;case $."]],"eternalmangas.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"etownbluejays.com":[["set","blockAdBlock","trueFunc"]],"everydayhomeandgarden.com":[["noeval-if","/chp_?ad/"]],"everydaynourishingfoods.com":[["rmnt","script","/__adblocker|html-load/"]],"evoqueownersclub.co.uk":[["rmnt","script","html-load.com"]],"examinerlive.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"exchangeandmart.co.uk":[["set","adLight","true"]],"extraordinarybbq.com":[["rmnt","script","/__adblocker|html-load/"]],"fansubseries.com.br":[["aopr","popUrl"]],"fantasticyoungporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"fatcalc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fatgirlhedonist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fayobserver.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"fc-lc.com":[["acs","document.addEventListener","nextFunction"]],"fcportables.com":[["noeval-if","/chp_?ad/"],["ra","onerror|onload","script[onerror][onload]","asap","quitAfter","10"],["aost","document.createElement","/eval|aabcBoot/"],["rmnt","script","/ai_adb|adblock/"],["set","adsClasses","undefined"],["set","gsecs","0"]],"femdomworld.com":[["acs","document.querySelectorAll","popMagic"]],"feoa.net":[["rmnt","script","html-load.com"]],"fileszero.com":[["rmnt","script","destroyContent"]],"firststepeurope.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fitforfun.de":[["set","window.__gv_org_tfa","undefined"],["nostif",".call(null)","10"]],"flashsports.org":[["acs","document.documentElement","break;case $."]],"floridagators.com":[["set","blockAdBlock","trueFunc"]],"fluxingwell.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"folkmord.se":[["noeval-if","/chp_?ad/"]],"foodieholly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"football-2ch.com":[["rmnt","script","html-load.com"]],"fordescape.org":[["rmnt","script","html-load.com"]],"fordtough.ca":[["rmnt","script","html-load.com"]],"forkknifeswoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freeconvert.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","html-load.com"]],"freeporncave.com":[["nostif","location.replace","300"]],"freeporncomic.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"freshapron.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freshcoasteats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frugalvillage.com":[["rmnt","script","html-load.com"]],"fullcoffeeroast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullywatchonline.com":[["acs","atob","decodeURIComponent"]],"fumettologica.it":[["noeval-if","/chp_?ad/"]],"funintheyard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"futbolsayfasi.net":[["acs","document.getElementById","adb"]],"fztvseries.ng":[["acs","EventTarget.prototype.addEventListener","delete window"],["set","openWindow","noopFunc"]],"g-porno.com":[["nowoif"]],"gadgetbond.com":[["no-fetch-if","adsbygoogle"]],"game-kentang.blogspot.com":[["nano-sib"]],"games.besthealthmag.ca":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.bradenton.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.charlottegames.cnhinews.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.sltrib.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gametter.com":[["acs","document.addEventListener","google_ad_client"]],"gamingguru.fr":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"garminrumors.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gasobni.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|popup|\\.onerror|WebAssembly/i"]],"gaydelicious.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","String.prototype.charCodeAt","ai_"]],"gbatemp.net":[["rmnt","script","error-report.com"]],"gdrivelatinohd.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"generacionretro.net":[["aeld","load","2000"]],"geographyrealm.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gezegenforum.com":[["nostif","show"]],"girlsreport.net":[["rmnt","script","html-load.com"]],"gitizle.vip":[["aopr","xmlhttp"],["nano-sib"],["ra","data-ppcnt_ads|onclick","#main"]],"glcforums.com":[["rmnt","script","html-load.com"]],"glockforum.net":[["rmnt","script","html-load.com"]],"gmdietforums.com":[["rmnt","script","html-load.com"]],"gmx.net":[["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"go.shortnest.com":[["nowoif"],["nano-stb","","6000"]],"golf.rapidmice.com":[["noeval-if","/chp_?ad/"]],"goterriers.com":[["set","blockAdBlock","trueFunc"]],"gputrends.net":[["set-local-storage-item","adWatched","true"]],"grantbakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greatestshemales.com":[["acs","document.querySelectorAll","popMagic"]],"greatyarmouthmercury.co.uk":[["set","adLight","true"]],"greentractortalk.com":[["rmnt","script","html-load.com"]],"groupdiy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gunnerforum.com":[["rmnt","script","html-load.com"]],"gut-erklaert.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"hacksaholic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hacksnation.com":[["no-xhr-if","adsbygoogle"]],"hagalil.com":[["aopw","adBlockDetected"]],"halloweenforum.com":[["rmnt","script","html-load.com"]],"hdmp4mania2.com":[["set-cookie","downloadbypass","1"]],"hdpornteen.com":[["noeval"],["aopr","Aloader.serve"]],"hdtodayz.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"healthyrecipes101.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hearthookhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heartscontentfarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"helpdice.com":[["acs","onload","iframe"]],"hentaigames.app":[["nostif","/out.php"]],"herexxx.com":[["acs","document.querySelectorAll","popMagic"]],"heroine-xxx.com":[["acs","document.querySelectorAll","popMagic"]],"hindimearticles.net":[["nowoif"]],"hiphipgourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hipointfirearmsforums.com":[["rmnt","script","html-load.com"]],"hobbyhelp.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hockeywilderness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hogwarts.cafe":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"holavid.com":[["aopw","decodeURIComponent"]],"hollywoodreporter.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"homemindset.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"honeywhatscooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hortidaily.com":[["nosiif","banner"]],"hostxy.com":[["acs","Math","break;case $."]],"hotmilfs.pro":[["aopr","popit"],["aeld","popstate","noPop"]],"houmatoday.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"houseofdebt.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houseofhepworths.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houseplantsinfo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hscprojects.com":[["aost","setTimeout","adsBlocked"]],"hulu.com":[["set","Object.prototype._parseVAST","noopFunc"],["set","Object.prototype.createAdBlocker","noopFunc"],["set","Object.prototype.isAdPeriod","falseFunc"],["json-prune","breaks custom_breaks_data pause_ads"],["json-prune","breaks custom_breaks_data pause_ads video_metadata.end_credits_time","pause_ads"],["json-prune","breaks custom_breaks_data pause_ads video_metadata.end_credits_time","breaks"]],"ibradome.com":[["acs","document.querySelectorAll","popMagic"]],"idealfollow.in":[["no-xhr-if","googlesyndication"]],"ikaza.net":[["aopr","showAds"]],"im9.eu":[["rmnt","script","/adpreserve|\\/0x/i"]],"impreza5.com":[["rmnt","script","html-load.com"]],"imslp.org":[["nano-sib","timer"]],"indianxxx.us":[["acs","document.querySelectorAll","popMagic"]],"indystar.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"infinitiqx80.org":[["rmnt","script","html-load.com"]],"inflightfeed.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"informer.com":[["aopr","adblock_added"]],"inkatrinaskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"inmamamaggieskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"intoindiegames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"investmentwatchblog.com":[["acs","Math","0x"],["aopw","ABD"]],"iptvxtreamcodes.com":[["noeval-if","/chp_?ad/"]],"irishstar.com":[["rmnt","script","nowprocket","excludes","self.__next"]],"isabelledias.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"jacksonguitars.com":[["set","analytics","{}"]],"jaguarforum.com":[["rmnt","script","html-load.com"]],"javbraze.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"javdoe.sh":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"javmoviexxx.com":[["acs","document.querySelectorAll","popMagic"]],"javplaya.com":[["aopr","__Y"]],"javplayer.me":[["nowoif"]],"javporn.best":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"javprime.net":[["acs","document.querySelectorAll","popMagic"]],"javtiful.com":[["rmnt","script","/adb/i"],["acs","document.addEventListener","adsBlocked"],["acs","String.fromCharCode","shift"],["acs","addEventListener","-0x"],["aopr","decodeURI"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","click","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"jcookingodyssey.com":[["rmnt","script","/__adblocker|html-load/"]],"jefferycontrolmodel.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"joyfulabode.com":[["rmnt","script","/__adblocker|html-load/"]],"juegoviejo.com":[["nano-stb"]],"jukeforums.co.uk":[["rmnt","script","html-load.com"]],"juliasalbum.com":[["rmnt","script","/__adblocker|html-load/"]],"justamumnz.com":[["rmnt","script","/__adblocker|html-load/"]],"justpicsplease.com":[["aopw","__aaZoneid"]],"k-statewomenshoops.net":[["set","blockAdBlock","trueFunc"]],"k3forum.com":[["rmnt","script","html-load.com"]],"kawasakimotorcycle.org":[["rmnt","script","html-load.com"]],"kawasakiz650.com":[["rmnt","script","html-load.com"]],"keighleynews.co.uk":[["set","adLight","true"]],"kellyleighcreates.com":[["rmnt","script","/__adblocker|html-load/"]],"kfor.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kirarafan.com":[["rmnt","script","html-load.com"]],"kitchennostalgia.com":[["rmnt","script","/__adblocker|html-load/"]],"kittycatcam.com":[["nostif","innerHTML"]],"klfy.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kodiaqforums.co.uk":[["rmnt","script","html-load.com"]],"krissysoverthemountaincrochet.com":[["rmnt","script","/__adblocker|html-load/"]],"kylieminteriors.ca":[["rmnt","script","/__adblocker|html-load/"]],"lacuevadeguns.com":[["aost","onload","inlineScript"]],"lakewizard.com":[["rmnt","script","/__adblocker|html-load/"]],"lansingstatejournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"learnospot.com":[["noeval-if","/chp_?ad/"]],"lecrabeinfo.net":[["set","LCI.adBlockDetectorEnabled","false"]],"lecremedelacrumb.com":[["rmnt","script","/__adblocker|html-load/"]],"leermanga.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"legiongamesgod.com":[["aopw","ai_front"]],"legionprogramas.org":[["aopw","smrtSB"],["aopw","smrtSP"],["nano-sib","","","0.02"],["set","t","0"]],"lewebde.com":[["noeval-if","show"]],"lg-firmwares.com":[["nano-sib"]],"lifeinmini.com":[["rmnt","script","/__adblocker|html-load/"]],"likecs.com":[["set","document.onclick",""]],"lindsayannbakes.com":[["rmnt","script","/__adblocker|html-load/"]],"line-stickers.com":[["aopw","adBlockDetected"]],"link.djbassking.live":[["nano-sib","/.?/","*","0.02"]],"littlehouseliving.com":[["rmnt","script","/__adblocker|html-load/"]],"littleloucooks.com":[["rmnt","script","/__adblocker|html-load/"]],"livingandstilllearning.com":[["rmnt","script","/__adblocker|html-load/"]],"loadx.ws":[["rmnt","script","wpadmngr.com"]],"looopings.nl":[["rmnt","script","void 0||window,"]],"lootdest.com":[["nowoif","","5"]],"lydioutloud.com":[["rmnt","script","/__adblocker|html-load/"]],"lz.de":[["nostif",".call(null)","10"]],"m.viptube.com":[["aopw","mobilePop"]],"m14forum.com":[["rmnt","script","html-load.com"]],"m5g.it":[["aopw","adBlockDetected"]],"mailocal2.xyz":[["nosiif","visibility","1000"]],"makotoichikawa.net":[["aost","document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"]],"manager-magazin.de":[["nostif",".call(null)","10"]],"mandai.com":[["set","adobeDataLayer","{}"],["set","adobeDataLayer.push","noopFunc"]],"manhwalist.com":[["acs","navigator","FingerprintJS"],["aost","btoa","/https|stackDepth:3/"]],"manonamai.lt":[["rmnt","script","html-load.com"]],"marcialhub.xyz":[["rmnt","script","/decodeURIComponent\\(escape|fairAdblock/"]],"marketedgeofficial.com":[["noeval-if","/chp_?ad/"]],"marlameridith.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marvelsnapzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maseratilife.com":[["rmnt","script","html-load.com"]],"masonjarcraftslove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masteringruneterra.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mathmonks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mavavid.com":[["aopr","__Y"]],"maxcheaters.com":[["nostif","adblock"]],"mazda3revolution.com":[["rmnt","script","html-load.com"]],"mcdlpit.com":[["acs","JSON.parse","break;case $."]],"mclarenlife.com":[["rmnt","script","html-load.com"]],"mdfx9dc8n.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"meetmeindepartures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"metal-hammer.de":[["nostif",".call(null)","10"]],"metin2alerts.com":[["no-fetch-if","googlesyndication"]],"midlandstraveller.com":[["noeval-if","/chp_?ad/"]],"migweb.co.uk":[["rmnt","script","html-load.com"]],"mindfulzen.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mini.surveyenquete.net":[["acs","document.addEventListener","google_ad_client"]],"minoplres.xyz":[["rmnt","script","{delete window["]],"mockupplanet.com":[["aost","setTimeout","adsBlocked"]],"modelviewer.lol":[["aeld","DOMContentLoaded","isBlocked"]],"mommythrives.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momvids.com":[["aopr","decodeURI"]],"moscatomom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motorandwheels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moviediskhd.cloud":[["acs","document.createElement","warning"]],"moviesapi.to":[["acs","EventTarget.prototype.addEventListener","delete window"],["acs","addEventListener","HTMLAllCollection"]],"mp3yeni.org":[["acs","parseInt","break;case $."]],"multiplayer.it":[["aeld","","adb"]],"musicbusinessworldwide.com":[["set","uberad_mode"]],"musicpiechart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mutigers.com":[["set","blockAdBlock","trueFunc"]],"muyinteresante.es":[["no-fetch-if","googlesyndication","method:HEAD"]],"myeasymusic.ir":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"myfoxzone.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"mykidslickthebowl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myorganizedchaos.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myoutlanderphev.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mypanhandle.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"myquietkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myshopify.com":[["acs","document.addEventListener","adsBlocked"]],"myteenguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myvidplay.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","WebAssembly","atob"],["nowoif"]],"namemc.com":[["acs","setTimeout","runInIframe"],["aopw","deployads"],["rmnt","script","/:\\[?window,/"],["rmnt","script","html-load.com"]],"nanolinks.in":[["nostif","alert","2000"]],"naumburger-tageblatt.de":[["nostif",".call(null)","10"]],"negyzetmeterarak.hu":[["rmnt","script","adsbygoogle"]],"neoxsoftworks.eu":[["set-session-storage-item","adblockDismissed","1"]],"nerdsandscoundrels.com":[["rmnt","script","/__adblocker|html-load/"]],"netsentertainment.net":[["noeval-if","/chp_?ad/"]],"neueroeffnung.info":[["nostif",".call(null)","10"]],"neverdims.com":[["aeld","load","htmls"]],"newfreelancespot.com":[["noeval-if","/chp_?ad/"]],"news.zerkalo.io":[["rmnt","script","html-load.com"]],"newsonthegotoday.com":[["aopr","STREAM_CONFIGS"],["ra","target",".clickbutton"]],"nflbox.me":[["rmnt","script","adserverDomain"]],"nflspinzone.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"ngomik.net":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."]],"nhentaihaven.org":[["acs","Script_Manager"]],"nhl66.ir":[["nowoif"]],"nicekkk.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","decodeURIComponent","'shift'"]],"nicolehappyoutside.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"nikke.gg":[["rmnt","script","/__adblocker|html-load/"]],"nontonhentai.net":[["acs","WebAssembly","atob"]],"northernirelandworld.com":[["rmnt","script","await eval"]],"northjersey.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"northwalespioneer.co.uk":[["aopr","_sp_.mms.startMsg"],["set","adLight","true"]],"note1s.com":[["noeval-if","/chp_?ad/"],["ra","disabled","button"]],"notunmovie.org":[["nowoif","!notunmovie"]],"novohot.com":[["aopr","AaDetector"]],"nozomi.la":[["set","D4zz","noopFunc"],["aopw","__aaZoneid"]],"nudecams.xxx":[["no-xhr-if","googlesyndication"]],"nutraingredients-latam.com":[["set","displayInterstitialAdConfig","false"]],"nutritiousdeliciousness.com":[["rmnt","script","/__adblocker|html-load/"]],"nw.de":[["nostif",".call(null)","10"]],"observer.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"oklivetv.com":[["set","xpv","{}"],["set","xpv.v","true"],["acs","EventTarget.prototype.addEventListener",".clientHeight===0"]],"oldhousetonewhome.net":[["rmnt","script","/__adblocker|html-load/"]],"omavs.com":[["set","blockAdBlock","trueFunc"]],"onceuponacheerio.com":[["rmnt","script","/__adblocker|html-load/"]],"onecomputerguy.com":[["rmnt","script","/__adblocker|html-load/"]],"onecrazymom.com":[["rmnt","script","/__adblocker|html-load/"]],"onegoodthingbyjillee.com":[["rmnt","script","/__adblocker|html-load/"]],"onelovelylife.com":[["rmnt","script","/__adblocker|html-load/"]],"onemanhua.com":[["aeld","/.?/","popMagic"],["nostif","checkSiteNormalLoad"]],"onepiecepower.com":[["acs","document.documentElement","break;case $."],["aopr","aclib"]],"onlinekosh.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"onlinesoccermanager.com":[["set","adBlockerDetected","false"]],"onsuttonplace.com":[["rmnt","script","/__adblocker|html-load/"]],"oraridiapertura24.it":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"otonanswer.jp":[["rmnt","script",").join(String.fromCharCode"]],"oubghas.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"]],"owlsports.com":[["set","blockAdBlock","trueFunc"]],"palapanews.com":[["aopw","adBlockDetected"]],"paris-tabi.com":[["noeval-if","/chp_?ad/"]],"parzibyte.me":[["acs","jQuery","ai_adb"]],"passionatecarbloggers.com":[["noeval-if","/chp_?ad/"]],"patientgardener.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pdfindir.net":[["aeld","","_0x"]],"peanutblossom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peartreekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peelwithzeal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peeplink.in":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pendidikandasar.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"personalitycafe.com":[["rmnt","script","html-load.com"]],"pervclips.com":[["aopr","decodeURI"]],"petersfieldpost.co.uk":[["rmnt","script","await eval"]],"phl17.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"pickcrackpasswords.blogspot.com":[["set","awm","true"]],"picsxxxporn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pig69.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"placeofmytaste.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playbarkrun.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playembedapi.site":[["aost","HTMLElement.prototype.click","_0x"]],"player.vidplus.pro":[["set","Object.prototype.adUrl"]],"player4me.online":[["acs","WebAssembly","atob"],["aeld","click","popunder"],["aost","document.createElement","displayLayer"]],"plc4me.com":[["rmnt","script","deblocker"]],"pllive.xmediaeg.com":[["rmnt","script","html-load.com"]],"poapan.xyz":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"],["noeval-if","/chp_?ad/"]],"porndaa.com":[["acs","document.querySelectorAll","popMagic"]],"pornojenny.net":[["aopr","ExoLoader"],["nostif","/loadMomoVip|loadExo|includeSpecial/"],["aost","document.createElement","loadNeverBlock"]],"postergrind.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primallyinspired.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"princesshairstyles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"printablesforlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prismmarketingco.com":[["noeval-if","/chp_?ad/"]],"projetomotog.blogspot.com":[["aeld","load","2000"]],"protestia.com":[["noeval-if","/chp_?ad/"]],"protrumpnews.com":[["rmnt","script","/==undefined.*body/"]],"psychic.de":[["nostif",".call(null)","10"],["nostif","offsetHeight"]],"pttrns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"purseblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"puttingmetogether.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pysznosci.pl":[["nano-sib","consoleLoaded?clearInterval"]],"qrixpe.com":[["set","document.hidden","false"],["aopw","AdBDetected"],["set","navigator.brave","undefined"]],"quaries.com":[["rmnt","script","/__adblocker|html-load/"]],"questloops.com":[["noeval-if","/chp_?ad/"],["aopr","b2a"]],"quickpreprecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"quicomo.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"rabbitliving.com":[["rmnt","script","/__adblocker|html-load/"]],"radio-australia.org":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-korea.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radiofidelity.com":[["rmnt","script","/__adblocker|html-load/"]],"raetsel-hilfe.de":[["rmnt","script","html-load.com"]],"rainytube.com":[["aopr","document.dispatchEvent"]],"randompowergenerator.com":[["rmnt","script","/__adblocker|html-load/"]],"rapelust.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["set","D4zz","noopFunc"]],"rat.xxx":[["aopr","popns"],["acs","document.write","iframe"]],"realmomnutrition.com":[["rmnt","script","/__adblocker|html-load/"]],"recetatipica.net":[["rmnt","script","/__adblocker|html-load/"]],"redd.tube":[["aopr","config"]],"reisefroh.de":[["rmnt","script","/__adblocker|html-load/"]],"remotejobzone.online":[["no-fetch-if","adsbygoogle"]],"rentbyowner.com":[["nowoif","!refine?search"]],"repelis.net":[["aopr","popTimes"]],"repurposingjunkie.com":[["rmnt","script","/__adblocker|html-load/"]],"reshare.pm":[["nowoif"]],"restlessbackpacker.com":[["rmnt","script","/__adblocker|html-load/"]],"rethmic.com":[["nano-sib","_0x"]],"revealname.com":[["set","$.fx.off","true"]],"rgl.vn":[["set","blurred","false"]],"richlyrooted.com":[["rmnt","script","/__adblocker|html-load/"]],"rideapart.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","html-load.com"]],"rigorousthemes.com":[["rmnt","script","/__adblocker|html-load/"]],"risingapple.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"romsget.io":[["nano-stb","submit","5000"]],"rootz.so":[["nowoif","_blank"],["acs","setTimeout","decodeURIComponent(escape"],["aeld","click","if"],["aeld","click","prevent"],["rmnt","script","\"+\"","excludes","/self\\.__next|recaptcha|document|window|const|var|let/"],["acs","RegExp.prototype.exec.constructor","\"+\""],["acs","Function.prototype.constructor","\"+\""],["aost","document.addEventListener","anonymous@https"],["aost","Document.prototype.addEventListener.call","anonymous@https"],["set","HTMLElement.prototype.click.call","noopFunc"],["set","HTMLElement.prototype.click.apply","noopFunc"],["set","Element.prototype.closest","falseFunc"],["aeld","click","/document.createElement|window.open/"],["nowoif",".cfd"],["rmnt","script","/\"\\+\"g|\"\\+\"'a|self\\.__next.*?,typeof document|self\\.__next&&|\\|\\|self\\.__next,\\(|\\(\"\\+\"t|'\\+'F|0\\|\\|window|\\}\\)\\(\\),typeof|'\\+'s|this\\['F.*\\('\\+'\"|\\)\\)\"'\\)\\(\\);\\(\\(\\)\\=>/g","excludes","/^self\\.__next_f\\.push/"]],"rswarrior.com":[["rmnt","script","html-load.com"]],"rtwin30days.com":[["rmnt","script","/__adblocker|html-load/"]],"rule34hentai.net":[["aopr","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"runstreet.com":[["rmnt","script","/__adblocker|html-load/"]],"s1000rrforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"saltedplains.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sammibrondo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sanet.lc":[["aopr","Adcash"]],"satoshifaucet.io":[["noeval-if","/chp_?ad/"]],"saunahelper.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savefrom.net":[["nowoif","!sf-converter.com"]],"savingdollarsandsense.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scatteredthoughtsofacraftymom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scrapywar.com":[["acs","eval","replace"]],"seireshd.com":[["acs","btoa","href"]],"serienjunkies.de":[["nostif",".call(null)","10"]],"sew4home.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexato.com":[["aopr","ExoLoader.serve"]],"sexfilmkiste.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"sexsq.com":[["acs","document.querySelectorAll","popMagic"]],"shahiid-anime.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","Object","/(?=^(?!.*(https)))/"]],"shanelocaldog.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"shikotch.in":[["acs","WebAssembly","atob"]],"shopkensaku.com":[["noeval-if","/chp_?ad/"]],"short.es":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"shorterall.com":[["acs","parseInt","break;case $."],["set","blurred","false"],["nostif","alert"],["acs","decodeURI","decodeURIComponent"],["aopw","atOptions"],["nowoif"]],"shortx.net":[["aeld","load","nextFunction"],["set","blurred","false"]],"shrinklinker.com":[["noeval-if","/chp_?ad/"]],"sieradmu.com":[["noeval-if","/chp_?ad/"]],"silodrome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"silverpic.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"simplesimonandco.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simpleveganblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplymadeeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skidrowreloaded.com":[["acs","open"],["no-fetch-if","/^/"],["rmnt","script","adserverDomain"],["aeld","click","showNotice"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"]],"slidesaver.app":[["nowoif","_blank"]],"slutdump.com":[["aopr","document.dispatchEvent"],["set","dclm_ajax_var.disclaimer_redirect_url",""]],"smart-wohnen.net":[["nostif",".call(null)","10"]],"smoking-meat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sms24.me":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"snlookup.com":[["no-xhr-if","ads"],["rmnt","script","deblocker"]],"snowest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soberjulie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soccerstream100.to":[["acs","document.documentElement","break;case $."]],"softairbay.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"softrop.com":[["noeval-if","/chp_?ad/"]],"softwaresblue.com":[["acs","$","setTimeout"]],"solution-hub.com":[["nowoif"]],"songmeaningsandfacts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southcoasttoday.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"southwalesargus.co.uk":[["set","adLight","true"]],"sp-today.com":[["set","isAdBlockActive","false"]],"sparkchess.com":[["rmnt","script","html-load.cc"]],"spectrum.ieee.org":[["aopr","splashpage.init"]],"speedweek.com":[["no-fetch-if","/\\/js/"]],"speedzilla.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"spiceography.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spoonfulofflavor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sporked.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportal.de":[["nostif",".call(null)","10"]],"sportsrec.com":[["nostif","error-report.com"]],"srt4mation.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stablediffusionxl.com":[["noeval-if","/chp_?ad/"]],"stacylynharris.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"startseite.to":[["nowebrtc"]],"stbturbo.xyz":[["nowoif"],["nostif","window.open"]],"stokesentinel.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"streamelements.com":[["set","sensorsDataAnalytic201505","{}"],["set","vizier","{}"]],"studydhaba.com":[["nostif","ai_"]],"stvid.com":[["noeval"]],"sugarona.com":[["rmnt","script","AdbModel"]],"summeryule.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supertipzz.online":[["rmnt","script","popundersPerIP"]],"survivingthestores.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetcaramelsunday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweeteroticart.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"swfr.tv":[["acs","EventTarget.prototype.addEventListener","delete window"]],"syzygist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"t3.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"taifood-blog.asia":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"tarjetarojaenvivo.lat":[["aopr","Adcash"]],"techsiting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thatbreadlady.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebathroomblueprint.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecookingfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecraftingchicks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedailyreporter.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"thedebrief.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thedilyblog.com":[["noeval-if","/chp_?ad/"]],"thedinkpickleball.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefashionablehousewife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theforgottensouth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegadgetking.in":[["nosiif","notifyExec"]],"thegunnysack.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegymlab.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehealthfulideas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehealthyhoneys.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehivelaw.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thekimsixfix.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thektog.org":[["rmnt","script","html-load.com"]],"thelastdisaster.vip":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"themehospital.co.uk":[["acs","jQuery","this"]],"themomcreative.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thereptileroom.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesavorychopstick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesouthernladycooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestayathomechef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetakeout.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["set","ga","noopFunc"]],"thetravel.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"thewholesomedish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thispixiecreates.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"threekidsthreecatsandahusband.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thuglink.com":[["set","adblockEnabled","false"]],"tidbits-cami.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"times-series.co.uk":[["set","adLight","true"]],"timesandstar.co.uk":[["set","adLight","true"]],"timesrecordnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"tioanime.com":[["acs","document.querySelectorAll","popMagic"]],"tires.costco.ca":[["set","adobePageView","noopFunc"]],"tiroalpaloes.net":[["aeld","load","nextFunction"]],"todopolicia.com":[["nostif","show"]],"tokusatsuindo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"tonaletalk.com":[["rmnt","script","html-load.com"]],"topfaucet.us":[["noeval-if","/chp_?ad/"]],"traderepublic.community":[["nostif","/show|innerHTML/"]],"transizion.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"travelfashiongirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tribunnews.com":[["acs","Math","='\\x"]],"triesteprima.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"trust.zone":[["set","adblock","false"]],"trythisanswer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tubator.com":[["aeld","getexoloader"]],"tubepornclassic.com":[["acs","adver"],["acs","document.createElement","tcpusher"],["aeld","","window.open"],["aopr","preadvercb"],["nosiif","complete","50"],["nosiif","document.readyState"],["set","prerollMain","undefined"]],"tubtic.com":[["no-fetch-if","mode:no-cors"]],"tunabagel.net":[["noeval-if","/chp_?ad/"]],"tuner.ninja":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"twelveonmain.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"u-createcrafts.com":[["rmnt","script","/__adblocker|html-load/"]],"umagame.info":[["acs","document.addEventListener","google_ad_client"]],"unclutteredsimplicity.com":[["rmnt","script","/__adblocker|html-load/"]],"uncwsports.com":[["set","blockAdBlock","trueFunc"]],"unito.life":[["acs","KeenTracking"]],"uploadmx.com":[["acs","parseInt","break;case $."]],"uqozy.com":[["noeval-if","/chp_?ad/"]],"urlpay.net":[["nano-sib"],["acs","String.fromCharCode","shift"]],"vagdrivers.net":[["rmnt","script","html-load.com"]],"valleyofthesuns.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"vanillaandbean.com":[["rmnt","script","/__adblocker|html-load/"]],"vault76.info":[["rmnt","script","html-load.com"]],"veggiebalance.com":[["rmnt","script","/__adblocker|html-load/"]],"vidbox.dev":[["nostif","getComputedStyle"],["no-fetch-if","method:HEAD"],["nowoif","_blank"]],"videezy.com":[["acs","$","underpop"]],"vidello.net":[["nowoif"],["rmnt","script","popUnder"]],"videplay.us":[["acs","WebAssembly","atob"]],"vidsaver.net":[["rmnt","script",";}}};break;case $."],["acs","Math","break;case $."]],"viralitytoday.com":[["rmnt","script",";}}};break;case $."],["acs","parseInt","break;case $."]],"vloggerpro.com":[["rmnt","script","/__adblocker|html-load/"]],"volkswagenforum.co.uk":[["rmnt","script","html-load.com"]],"voyageminnesota.com":[["rmnt","script","/__adblocker|html-load/"]],"vw-page.com":[["set","$easyadvtblock","false"]],"vwvortex.com":[["rmnt","script","html-load.com"]],"walkthrough-indo.blogspot.com":[["acs","addEventListener","google_ad_client"]],"wamgame.jp":[["rmnt","script","html-load.com"]],"watchporn.to":[["acs","document.createElement","l.parentNode.insertBefore(s"],["nostif","offsetWidth","2000"]],"websitesbridge.com":[["no-fetch-if","googlesyndication"]],"westernslopenow.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"whatsonglasgow.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"whattocooktoday.com":[["rmnt","script","/__adblocker|html-load/"]],"whipitlikebutter.com":[["rmnt","script","/__adblocker|html-load/"]],"windowsreport.com":[["rmnt","script","/__adblocker|html-load/"]],"wishfast.top":[["set","cRAds","false"]],"womennaked.net":[["acs","document.querySelectorAll","popMagic"]],"wordcounter.icu":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"wordl.org":[["rmnt","script","/__adblocker|html-load/"]],"worldhistoryedu.com":[["rmnt","script","/__adblocker|html-load/"]],"wouterplanet.com":[["rmnt","script","clicky"]],"wowescape.com":[["no-fetch-if","adsbygoogle"]],"wowxxxtube.com":[["acs","document.querySelectorAll","popMagic"]],"writingexercises.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"wupfile.com":[["acs","parseInt","break;case $."]],"xanimeporn.com":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","click","popMagic"],["acs","WebAssembly","atob"]],"xhtree.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"xn--90afacv0cu2a3cr.xn--p1ai":[["aopr","__Y"]],"xsportbox.com":[["acs","document.documentElement","break;case $."]],"xxgasm.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["aopr","decodeURI"]],"xxxshake.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["set","flashvars.adv_pause_html",""],["nowoif"]],"xxxtubegain.com":[["noeval"],["aopr","Aloader.serve"]],"ycongnghe.com":[["noeval-if","/chp_?ad/"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"yesporn.vip":[["nostif","offsetWidth","2000"]],"yorkshirepost.co.uk":[["rmnt","script","await eval"]],"your-local-pest-control.com":[["noeval-if","/chp_?ad/"]],"youtubeai.com":[["acs","Math","break;case $."]],"yuramanga.my.id":[["noeval-if","/chp_?ad/"]],"yuvideos.com":[["acs","document.querySelectorAll","popMagic"]],"z125owners.com":[["rmnt","script","html-load.com"]],"zdnet.com":[["acs","admiral"]],"zdravenportal.eu":[["acs","jQuery","ads"]],"zemporn.com":[["aopr","h1mm.w3"]],"ziperto.com":[["acs","JSON.parse","break;case $."],["acs","JSON","break;case"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
