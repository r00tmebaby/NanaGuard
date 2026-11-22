/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"1000rr.net":[["rmnt","script","html-load.com"]],"111.90.151.26":[["aopr","preroll_helper.advs"],["acs","jQuery","magnificPopup"]],"1flix.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"1xxx-tube.com":[["aopr","Aloader.serve"],["noeval"]],"3addedminutes.com":[["rmnt","script","await eval"]],"3dassetcollection.com":[["noeval-if","/chp_?ad/"]],"7starmv.com":[["acs","document.documentElement","break;case $."]],"8020automotive.com":[["rmnt","script","/__adblocker|html-load/"]],"9goals.live":[["acs","document.documentElement","break;case $."]],"a-b-f-dd-aa-bb-ccyh5my.fun":[["nowoif"],["acs","Math","localStorage['\\x"]],"abarthforum.co.uk":[["rmnt","script","html-load.com"]],"abc17news.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"abs-cbn.com":[["no-fetch-if","doubleclick"],["no-xhr-if","ads.viralize.tv"]],"accordingtoelle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acooknamedmatt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acrylicpouring.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"activistpost.com":[["aopr","XMLHttpRequest"],["aopr","String.fromCharCode"]],"acuraworld.com":[["rmnt","script","html-load.com"]],"adebtfreestressfreelife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"advantien.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"adventuresbylana.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"agf.nl":[["nosiif","show"]],"agoudalife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aheadofthyme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"akatsuki-no-yona.com":[["acs","document.querySelectorAll","popMagic"]],"akihabarahitorigurasiseikatu.com":[["noeval-if","/chp_?ad/"]],"alfaowner.com":[["rmnt","script","html-load.com"]],"allotech-dz.com":[["acs","eval","replace"]],"alltopeverything.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amateur-couples.com":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["set","dclm_ajax_var.disclaimer_redirect_url",""]],"amboss.com":[["set","ambossAnalytics","{}"],["set","ambossAnalytics.getUserAttribution","noopFunc"]],"amrapideforum.com":[["rmnt","script","html-load.com"]],"amybakesbread.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anguscountyworld.co.uk":[["rmnt","script","await eval"]],"animespank.com":[["aeld","","break;case $."]],"animeyabu.org":[["acs","EventTarget.prototype.addEventListener","delete window"]],"anniedesigncrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"anonymousemail.me":[["acs","document.getElementById","adblock"]],"anroll.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","EventTarget.prototype.addEventListener","delete window"]],"apieceofrainbow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"apksvip.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"apl374.me":[["nowoif"]],"arti-flora.nl":[["noeval-if","/chp_?ad/"]],"artycraftykids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ascensionlogs.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aspicyperspective.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atlantatrails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atlantisscan.com":[["noeval-if","/chp_?ad/"]],"audio-forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audiomack.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"autobytel.com":[["aopw","_sp_"]],"ayobelajarbareng.com":[["nano-sib","","*","0"]],"azlinamin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"backyardknoxville.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakefromscratch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakemeacookie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakewithjamie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"banburyguardian.co.uk":[["rmnt","script","await eval"]],"barrheadnews.com":[["set","adLight","true"]],"baseballrumors.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"basseqwevewcewcewecwcw.xyz":[["nowoif"]],"bearchasingart.com":[["noeval-if","/chp_?ad/"]],"beekeepingforum.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bensabaconlovers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"besargaji.com":[["nowoif"]],"bestialitytaboo.tv":[["acs","$","azar"]],"bestwish.lol":[["nowoif"]],"betches.com":[["rmnt","script","\"nowprocket\""]],"betterfoodguru.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bgmateriali.com":[["nostif","adbl"]],"bgsi.gg":[["nostif","fired"]],"bidersnotu.com":[["noeval-if","/chp_?ad/"]],"bigdata-social.com":[["noeval-if","/chp_?ad/"]],"bikeperfect.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"bilis.lt":[["rmnt","script","html-load.com"]],"blog.linksfire.co":[["aopr","app_vars.force_disable_adblock"]],"bluebuddies.com":[["noeval-if","/chp_?ad/"]],"booboosbakery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bostonterriersociety.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxing247.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boxycolonial.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"braziliannr.com":[["noeval-if","/chp_?ad/"]],"bricksandlogic.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"btcbunch.com":[["rmnt","script","/downloadJSAtOnload|Object.prototype.toString.call/"]],"buildgreennh.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"businesswritingblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bustyshemaleporn.com":[["acs","document.querySelectorAll","popMagic"]],"bysewihe.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"c10trucks.com":[["rmnt","script","html-load.com"]],"cadenzaforum.com":[["rmnt","script","html-load.com"]],"cakesprices.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"calendarkart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"californiaevforum.com":[["rmnt","script","html-load.com"]],"call2friends.com":[["aopr","onload"]],"camaro7g.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"camaros.net":[["rmnt","script","html-load.com"]],"camgirlfap.com":[["acs","document.createElement","onerror"],["nostif","offsetWidth","2000"]],"camwhoreshd.com":[["acs","onload","onclick"],["nowoif"],["set","hasPoped","true"],["aopr","loadTool"]],"carensureplan.com":[["rmnt","script","offsetHeight"]],"carriecarvalho.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cbr300forum.com":[["rmnt","script","html-load.com"]],"cbs.com":[["set","hasAdBlocker","false"]],"celebjihad.com":[["aopr","dataPopUnder"]],"celebretea.com":[["noeval-if","/chp_?ad/"]],"centslessdeals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cfmotoforums.com":[["rmnt","script","html-load.com"]],"chihuahua-people.com":[["rmnt","script","html-load.com"]],"chins-n-hedgies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cineb.rs":[["acs","addEventListener","HTMLAllCollection"],["aeld","mousedown","shown_at"],["nowoif"]],"civitai.com":[["no-fetch-if","googlesyndication"]],"classbforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"closetfulofclothes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"coconutsandkettlebells.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"codeandkey.com":[["noeval-if","/chp_?ad/"]],"codeastro.com":[["noeval-if","/chp_?ad/"]],"codelivly.com":[["rmnt","script","clientHeight"]],"coloredhaircare.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"completelydelicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"computercrack.com":[["aeld","","break;case $."],["aopr","open"]],"conniekresin.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingwithgenius.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookni.net":[["noeval-if","/chp_?ad/"],["no-xhr-if","adsbygoogle"]],"coolsoft.altervista.org":[["nostif","_0x"]],"coworkingczerska.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"creeklinehouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cretaforum.com":[["rmnt","script","html-load.com"]],"cricfy.net":[["acs","googletag"]],"criptologico.com":[["nostif","akadb"]],"crowsurvival.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cruisehive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cruisersforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cuatrolatastv.blogspot.com":[["acs","_pop"],["aeld","","break;case $."],["acs","navigator","break;case $."]],"cubscoutideas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cucinabyelena.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cuddlystitchescraft.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cumminsforum.com":[["rmnt","script","html-load.com"]],"cupcakesandcutlery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutnmakecrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daciaforum.co.uk":[["rmnt","script","html-load.com"]],"dealsfinders.blog":[["no-fetch-if","method:HEAD"],["nostif","show"]],"deliciouslysprinkled.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desi.upn.bio":[["aeld","click","_blank"]],"desktophut.com":[["acs","document.getElementById",".style"]],"dhd24.com":[["nostif",".call(null)","10"]],"disneynews.us":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"divaliciousrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diyphotography.net":[["aeld","","AdB"]],"diyprojectslab.com":[["noeval-if","/chp_?ad/"]],"diysmarthomehub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"djxmaza.in":[["rmnt","script","DisableDevtool"],["nowoif","!devuploads.com"],["nano-sib","","*","0.02"],["nano-stb","","*","0.02"]],"dollarstorecrafts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"donegallive.ie":[["rmnt","script","await eval"]],"dorsetecho.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"dotgg.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"doubtnut.com":[["set-local-storage-item","student_id","$remove$"]],"dowfutures.org":[["acs","jQuery","No"]],"downhomeinspiration.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drinkswithdanica.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dronedj.com":[["rmnt","script","fundingChoicesCalled"]],"drop.download":[["acs","globalThis","break;case"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","document.addEventListener","google_ad_client"]],"drsnysvet.cz":[["acs","document.querySelectorAll","popMagic"]],"duboku.info":[["acs","addEventListener","HTMLAllCollection"]],"durtypass.com":[["nowoif"],["aopr","_pop"]],"dvd-flix.com":[["noeval-if","/chp_?ad/"],["aost","setTimeout","ads"]],"dvdfullestrenos.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dvdporngay.com":[["aopr","decodeURIComponent"]],"easycheesyvegetarian.com":[["rmnt","script","/__adblocker|html-load/"]],"easyjapanesee.com":[["noeval-if","/chp_?ad/"]],"easytodoit.com":[["noeval-if","/chp_?ad/"]],"edmdls.com":[["set","loadpagecheck","noopFunc"]],"elantragtforum.com":[["rmnt","script","html-load.com"]],"eldiariony.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"elektrotanya.com":[["rmnt","script","!(window.adsbygoogle"]],"emojikeyboard.io":[["rmnt","script","/__adblocker|html-load/"]],"endomondo.com":[["rmnt","script","/__adblocker|html-load/"]],"enjoyfuck.com":[["aopr","Aloader.serve"],["noeval"]],"entirelyelizabeth.com":[["rmnt","script","/__adblocker|html-load/"]],"entoin.com":[["rmnt","script","/__adblocker|html-load/"]],"epicurious.com":[["nofab"]],"erogen.su":[["aopr","document.dispatchEvent"]],"erothots.co":[["nowoif"]],"erotic-beauties.com":[["acs","pop_init"]],"euphoriazine.com":[["rmnt","script","/__adblocker|html-load/"]],"eurogamer.net":[["aopw","yafaIt"],["aopr","_sp_.mms.startMsg"]],"eurogamer.pt":[["aopr","_sp_.mms.startMsg"]],"evaki.fun":[["no-fetch-if","googlesyndication"]],"everywherewithclaire.com":[["rmnt","script","/__adblocker|html-load/"]],"exactlywhatistime.com":[["rmnt","script","/__adblocker|html-load/"]],"exe.io":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["aopr","parcelRequire"]],"exnion.com":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"faaduindia.com":[["noeval-if","/chp_?ad/"]],"factsjustforkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fansided.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"fastcars1.com":[["noeval-if","/chp_?ad/"]],"fattubevideos.net":[["acs","document.querySelectorAll","popMagic"]],"femdom-joi.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"fid-gesundheitswissen.de":[["nostif",".call(null)","10"]],"file4go.net":[["no-xhr-if","outbrain"]],"filmyone.com":[["acs","Math","break;case $."]],"finanzfrage.net":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"findnewjobz.com":[["noeval-if","/chp_?ad/"]],"fineretroporn.com":[["noeval"],["aopr","Aloader.serve"]],"fittoservegroup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flatpanelshd.com":[["nostif","error-report.com"]],"flyfishbc.com":[["rmnt","script","html-load.com"]],"fnforum.net":[["rmnt","script","html-load.com"]],"fnjplay.xyz":[["rmnt","script","debugger"]],"foodsharingvegan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodsharkmarfa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footballtransfer.com.ua":[["nostif","error-report.com"]],"footfetishvid.com":[["acs","document.querySelectorAll","popMagic"]],"forumlovers.club":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fox56news.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"foxandpinestitches.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foxhq.com":[["aeld","load","crakPopInParams"]],"frameratetest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"freecoursesite.com":[["acs","eval","replace"],["nostif","show"]],"freegames.com":[["nostif","moneyDetect"]],"freegogpcgames.com":[["nowoif"],["no-xhr-if","googlesyndication"],["nostif","show"]],"freemodsapp.in":[["acs","eval","replace"],["nostif","document.createElement"]],"freepdf-books.com":[["nano-sib","myTimer","1500"]],"freepublicporn.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","Exo"],["aeld","getexoloader"]],"freeshot.live":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["no-fetch-if","/outbrain|adligature|quantserve|adligature|srvtrck/"],["acs","document.querySelectorAll","popMagic"]],"freethailottery.live":[["nano-sib","timer","1600","0.001"]],"freezermeals101.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fromthiskitchentable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"frugallyblonde.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fullhd4k.com":[["nano-sib"]],"funeralmemorialnews.com":[["noeval-if","/chp_?ad/"]],"fupa.net":[["set","jQuery.adblock","1"]],"fxstreet-id.com":[["rmnt","script","html-load.com"]],"games.kansas.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.lancasteronline.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamestar.de":[["nostif",".call(null)","10"]],"gamezop.com":[["nosiif","debugger"]],"gatasdatv.com":[["acs","document.querySelectorAll","popMagic"]],"gendatabase.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"getintoway.com":[["no-fetch-if","googlesyndication"],["noeval-if","adsBlocked"],["no-xhr-if","/googlesyndication|doubleclick/"]],"gewinnspiele.tv":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"ggjav.com":[["acs","$","popunder"]],"gizmodo.com":[["set","ga","noopFunc"]],"glock.pro":[["rmnt","script","html-load.com"]],"gochyu.com":[["acs","$","open"]],"gogoanime.co.in":[["aopw","Adcash"]],"golfsidekick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gometrostate.com":[["set","blockAdBlock","trueFunc"]],"gomov.bio":[["noeval-if","/chp_?ad/"]],"gonnawantseconds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goodmorningquote.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gosanangelo.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"gr86.org":[["rmnt","script","html-load.com"]],"graphicux.com":[["nostif","css_class.show"]],"greeksubsmovies.me":[["set","gsmAccessGate","noopFunc"]],"grillinwithdad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guitarstrive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hackingwithreact.com":[["set","areAdsDisplayed","true"]],"halsteadgazette.co.uk":[["set","adLight","true"]],"handgunsandammunition.com":[["rmnt","script","html-load.com"]],"happybalancedwellness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happymoneysaver.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"happytummy702.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"harshfaucet.com":[["acs","document.createElement","adsBlocked"]],"hashtaginvesting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hdmovies23.com":[["acs","JSON.parse","break;case $."]],"healthylifez.com":[["nowoif"],["nano-sib","/countdown--|getElementById/","*","0.001"],["nano-stb","getElementById","*","0.001"]],"hentaivideos.net":[["noeval-if","popUnderStage"]],"heyimreading.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hianime.se":[["rmnt","script","REDIRECT_URL"]],"hidefninja.com":[["aopr","adBlockDetected"],["acs","document.addEventListener","adsBlocked"]],"highchairchronicles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"highlysensitiverefuge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hipsteralcolico.altervista.org":[["noeval-if","/chp_?ad/"]],"history-computer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hobbytalk.com":[["rmnt","script","html-load.com"]],"holidayexpert.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"holistichealthherbalist.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hollandsentinel.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"holymanga.net":[["aeld","","break;case $."]],"homecrux.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeschoolof1.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homestratosphere.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"horseracingsense.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotcopper.com.au":[["acs","$","blockAds"],["rmnt","script","html-load.com"]],"hotgameplus.com":[["aopw","downloadJSAtOnload"]],"hotscope.tv":[["nowoif"]],"houserepairtalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"houstonpress.com":[["set","VMG.Components.Adblock","false"]],"hungryenoughtoeatsix.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hxfile.co":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script",";}}};break;case $."],["aeld","","break;case $."],["nowoif"]],"hyogo.ie-t.net":[["noeval-if","/chp_?ad/"]],"icanteachmychild.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"idokep.hu":[["rmnt","script","html-load.com"]],"ignboards.com":[["acs","JSON.stringify"]],"iiyoutube.com":[["acs","Math","break;case $."]],"ikarianews.gr":[["noeval-if","/chp_?ad/"]],"ilforumdeibrutti.is":[["nostif","AdBlock"],["rmnt","script","adblock"]],"imagetwist.com":[["acs","document.getElementsByTagName","script"],["aeld","","checkTarget"]],"imgdawgknuttz.com":[["aopw","atOptions"],["acs","document.createElement","l.parentNode.insertBefore(s"],["aost","atob","inlineScript"],["aopr","Pub2a"],["acs","JSON.parse","break;case $."]],"imore.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"in2013dollars.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"inc.com":[["acs","admiral"]],"infofuge.com":[["nostif","disableDeveloperTools"]],"infokik.com":[["nano-sib","counter"],["nostif","ga"],["set","two_worker_data_js.js","[]"]],"informatudo.com.br":[["noeval-if","/chp_?ad/"]],"insidertracking.com":[["acs","jQuery","length"]],"ishouldbemoppingthefloor.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"itmaniatv.com":[["noeval-if","/chp_?ad/"]],"itv.com":[["nowoif"]],"izurvive.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"]],"jacksorrell.tv":[["acs","jQuery","adblocker"]],"jacquieetmicheltv.net":[["set","is_adblocked","false"],["set","showPopunder","noopFunc"],["set","Object.prototype.prerollAds","[]"]],"janamathaya.lk":[["noeval-if","/chp_?ad/"]],"japteenx.com":[["acs","document.querySelectorAll","popMagic"]],"jav-forum.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"jav-fun.cc":[["acs","WebAssembly","atob"]],"javbobo.com":[["aopr","ExoLoader.serve"],["aopr","exoNoExternalUI38djdkjDDJsio96"],["rmnt","script","/popMagic|pop1stp/"]],"javmenu.com":[["acs","WebAssembly","atob"]],"javmix.tv":[["acs","WebAssembly","atob"],["aeld","load","puTSstrpcht"]],"javplayers.com":[["nowoif"]],"javtrailers.com":[["ra","href","[href*=\"nihonjav\"]","stay"]],"jeep392.com":[["rmnt","script","/__adblocker|html-load/"]],"jellynote.com":[["nostif","byepopup","5000"]],"jisaka.com":[["rmnt","script","html-load.com"]],"jizz.us":[["acs","document.querySelectorAll","popMagic"]],"jobsinfootball.com":[["rmnt","script","/__adblocker|html-load/"]],"johnfullwonder.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"join2babes.com":[["aopr","AaDetector"]],"joktop.com":[["rmnt","script","/FingerprintJS|openPopup/"],["set","blurred","false"]],"jpopsingles.eu":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","document.documentElement","break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"],["set","AtcshAltNm","true"],["acs","document.createElement","js_func_decode_base_64"],["rmnt","script","/detectedAdblock|DevTools/"],["nano-sib","downloadTimer"],["noeval-if","adsBlocked"],["aeld","DOMContentLoaded","document.documentElement.lang.toLowerCase"],["rmnt","script","adsSrc"],["no-fetch-if","/ads|google/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","googlesyndication"],["set","detectedAdblock","noopFunc"]],"jrants.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","ai_adb"]],"jrlinks.in":[["noeval-if","/chp_?ad/"]],"jsfiddle.net":[["set","_carbonads","{}"],["set","_bsa","{}"]],"justonecookbook.com":[["rmnt","script","/__adblocker|html-load/"]],"k-statewomenshoops.com":[["set","blockAdBlock","trueFunc"]],"kandisvarlden.com":[["noeval-if","/chp_?ad/"]],"kansascity.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"kasiporn.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"kayifamilytv.com":[["aeld","DOMContentLoaded","adsBlocked"]],"keepthescore.com":[["rmnt","script","/__adblocker|html-load/"]],"keltecforum.com":[["rmnt","script","html-load.com"]],"kenkou-maintenance.com":[["noeval-if","/chp_?ad/"]],"kentlive.news":[["rmnt","script","nowprocket","excludes","self.__next"]],"keralatelecom.info":[["nostif","adb"]],"keysbrasil.blogspot.com":[["nostif","nextFunction","2000"]],"kickassanime.ch":[["noeval-if","shift"]],"kiemlua.com":[["nano-sib","counter","*"],["noeval-if","/chp_?ad/"],["rmnt","script","Adblock"]],"kitchencents.com":[["rmnt","script","/__adblocker|html-load/"]],"kllproject.lv":[["noeval-if","/chp_?ad/"]],"kmed.com":[["set","google_unique_id","6"]],"knutsfordguardian.co.uk":[["set","adLight","true"]],"kochamjp.pl":[["set","blockAdBlock._options.baitClass","null"]],"kotanopan.com":[["noeval-if","/chp_?ad/"]],"krem.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"krepsinis.net":[["rmnt","script","error-report.com"],["rmnt","script","html-load.com"]],"kstatesports.com":[["set","blockAdBlock","trueFunc"]],"labgame.io":[["aeld","/visibilitychange|blur/"],["aeld","blur","stopCountdown"],["rmnt","script","close-modal"],["noeval-if","ppuQnty"]],"latinomegahd.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"latribunadelpaisvasco.com":[["aopw","adBlockDetected"],["noeval"]],"laut.de":[["nostif",".call(null)","10"]],"laweducationinfo.com":[["set-cookie","__gads","1"],["aopw","window.onload"],["no-xhr-if","googlesyndication"],["aost","navigator.userAgent","checkBrowser"],["aopr","bypass_url"],["set","document.hasFocus","trueFunc"]],"ldoceonline.com":[["rmnt","script","await eval"],["rmnt","script","html-load.com"]],"leaktube.net":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"legiongolife.com":[["rmnt","script","/__adblocker|html-load/"]],"letmejerk.com":[["aopr","ExoLoader"],["aeld","","_0x"]],"lexusnxforum.com":[["rmnt","script","html-load.com"]],"lifexperimentblog.com":[["rmnt","script","/__adblocker|html-load/"]],"liga3-online.de":[["nostif",".call(null)","10"]],"limetorrents.lol":[["acs","addEventListener","HTMLAllCollection"]],"linkrex.net":[["aopr","open"],["aopw","__htapop"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"linkskibe.com":[["noeval-if","/chp_?ad/"]],"literarysomnia.com":[["noeval-if","/chp_?ad/"]],"littlebinsforlittlehands.com":[["rmnt","script","/__adblocker|html-load/"]],"liveeatlearn.com":[["rmnt","script","/__adblocker|html-load/"]],"livingthegourmet.com":[["rmnt","script","/__adblocker|html-load/"]],"logofootball.net":[["noeval-if","/chp_?ad/"]],"lookmovie2.to":[["set","Yii2App.playbackTimeout","0"]],"loudersound.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"lovelovething.com":[["rmnt","script","/__adblocker|html-load/"]],"lulu.st":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/HTMLAllCollection|popundersPerIP|referrerPolicy|WebAssembly/"],["acs","WebAssembly","Promise"],["acs","document.write","unescape"],["rmnt","script","/detect/i"]],"luxury4play.com":[["rmnt","script","html-load.com"]],"mac2sell.net":[["no-fetch-if","method:HEAD"]],"magicgameworld.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"],["aost","document.getElementById","adsBlocked"]],"mahobeachcam.com":[["nostif","innerHTML"]],"mainbabes.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"]],"maisondepax.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"makethebestofeverything.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangiawithmichele.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maps.blitzortung.org":[["nostif","Advert"]],"mariashriver.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marlybird.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marvel.church":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marvelrivals.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masscops.com":[["rmnt","script","html-load.com"]],"masterpctutoriales.com":[["noeval-if","/chp_?ad/"]],"mathplayzone.com":[["rmnt","script","html-load.com"]],"mcdonoughvoice.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"mega-p2p.net":[["aopr","open"],["acs","JSON.parse","break;case $."]],"meganvskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"megawypas.com":[["acs","document.addEventListener","google_ad_client"]],"merakilane.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"merkur.de":[["set","Object.prototype._getSalesHouseConfigurations","noopFunc"],["nostif",".call(null)","10"]],"metalflirt.de":[["nostif",".call(null)","10"]],"mezzoguild.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miiiiixdrop.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"],["acs","addEventListener","adserverDomain"]],"mindfulmocktail.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"minecraft.buzz":[["aeld","np.detect"]],"minhasdelicias.com":[["noeval-if","/chp_?ad/"]],"miohentai.com":[["aopr","mnpwclone"]],"missavtv.com":[["aeld","","popMagic"],["no-fetch-if","doubleclick"],["no-xhr-if","adsbygoogle"]],"mlbbox.me":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","adserverDomain"],["acs","EventTarget.prototype.addEventListener","delete window"],["acs","document.documentElement","break;case $."],["nowoif","!/mlbbox\\.me|_self/"],["rmnt","script","/FingerprintJS|Adcash/"]],"mmorpgplay.com.br":[["noeval-if","/chp_?ad/"]],"mmsbee27.com":[["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","wpadmngr.com"],["rmnt","script","function(error)"]],"mobifuq.com":[["acs","document.querySelectorAll","popMagic"]],"mobilelegends.shop":[["nano-sib"]],"mobiletvshows.site":[["ra","onclick","[onclick*=\"window.open\"]","stay"]],"modele-facture.com":[["noeval-if","/chp_?ad/"]],"modenatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"modhub.us":[["rmnt","script","html-load.com"]],"molotov.tv":[["nosiif","goog"],["aeld","","goog"]],"mommyonpurpose.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommypotamus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"money.pl":[["nano-sib","consoleLoaded?clearInterval"]],"moneycontrol.com":[["rmnt","script","initializeInterstitial"],["set-session-storage-item","adViewed","true"]],"monologueblogger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"moonmov.pro":[["nowoif"]],"morizon-gratka.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"motchill29.com":[["acs","addEventListener","HTMLAllCollection"]],"moto.it":[["no-fetch-if","googlesyndication"]],"motortests.de":[["nostif",".call(null)","10"]],"motphimr.io":[["aeld","click","document.createElement"]],"movielinkbd4u.com":[["nowoif"],["aeld","click","/adsActive|POPUNDER/i"]],"moviessquad.com":[["acs","Math","break;case $."]],"moviesxxx.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"mp3-gratis.it":[["acs","JSON.parse","break;case $."]],"mrexcel.com":[["rmnt","script","()=>eval"]],"multi.xxx":[["set","flashvars.video_click_url",""]],"multics.eu":[["acs","$",".test"]],"my-ford-focus.de":[["noeval-if","/chp_?ad/"]],"myabandonware.com":[["set","canRunAds","true"],["nostif","AdBlock"]],"mycloudz.cc":[["acs","document.createElement","window.open"],["acs","$","window.open"],["nowoif"]],"myhomemyglobe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mykoreankitchen.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mymusicreviews.com":[["aopr","chp_adblock_browser"]],"mypace.sasapurin.com":[["noeval-if","/chp_?ad/"]],"myperfectweather.com":[["aeld","load","adblock"]],"mypornhere.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","loadjscssfile"],["set","flashvars.adv_start_html",""]],"mywabashvalley.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"nailsalonsnearme.com":[["rmnt","script","/__adblocker|html-load/"]],"napiszar.com":[["acs","document.querySelectorAll","popMagic"],["acs","decodeURI","decodeURIComponent"]],"nashvillewife.com":[["rmnt","script","/__adblocker|html-load/"]],"netflixporno.net":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"neuepresse.de":[["nostif",".call(null)","10"]],"neurotray.com":[["nano-stb","/EzoIvent|TDELAY/","5000"]],"newninja.com":[["rmnt","script","html-load.com"]],"nickiswift.com":[["rmnt","script","/__adblocker|html-load/"]],"niftyfutures.org":[["acs","jQuery","No"]],"ninernoise.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"ninguno.cc":[["rmnt","script","/delete window|popundersPerIP|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"nippyfish.net":[["rmnt","script","/__adblocker|html-load/"]],"njwildlifecam.com":[["nostif","innerHTML"]],"nobledicion.yoveo.xyz":[["noeval-if","googlesyndication"]],"nohat.cc":[["aopr","ignore_adblock"],["aopr","$.prototype.offset"],["no-fetch-if","adsbygoogle"]],"noor-book.com":[["no-fetch-if","ads"]],"norecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"notebookchat.com":[["nostif",".call(null)","10"]],"notebookcheck-ru.com":[["acs","document.getElementById","send"],["nostif",".call(null)","10"],["rmnt","script","&&window,"]],"notevibes.com":[["aopr","googletag"]],"nudegista.com":[["set","page_params.holiday_promo","true"]],"nudistube.com":[["aopr","document.dispatchEvent"],["noeval"]],"nullforums.net":[["nostif","show"]],"nursexfilme.com":[["nostif","Adb"]],"nutmegnanny.com":[["rmnt","script","/__adblocker|html-load/"]],"ofppt.net":[["noeval-if","/chp_?ad/"]],"ohsodelicioso.com":[["rmnt","script","/__adblocker|html-load/"]],"okblaz.me":[["noeval-if","/chp_?ad/"]],"okmusi.com":[["nowoif"]],"onceuponaprintable.com":[["rmnt","script","/__adblocker|html-load/"]],"onefora.com":[["rmnt","script","html-load.com"]],"online-field-guide.com":[["rmnt","script","/__adblocker|html-load/"]],"opelgt.com":[["rmnt","script","html-load.com"]],"optifine.net":[["nostif","Math.round","1000"]],"originalindianporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"owlzo.com":[["nostif","adblockEnabled"]],"painting-planet.com":[["aopr","LieDetector"]],"pantyhosepink.com":[["aopr","document.dispatchEvent"]],"parsleyandicing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pashplus.jp":[["rmnt","script","html-load.com"]],"pastepvp.org":[["aopw","smrtSB"]],"pattern-paradise.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pawsomerecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pcbolsa.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["set","NoTenia","false"]],"pcguide.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pd2.tools":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"peanutbutterandjulie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"percentagecalculator.guru":[["aopr","detectAdBlock"]],"pes6.es":[["set","Object.prototype.DetectByGoogleAd","noopFunc"]],"petforums.co.uk":[["rmnt","script","html-load.com"]],"pewgame.com":[["acs","String.fromCharCode","/btoa|break/"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"],["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"phimlongtieng.net":[["acs","WebAssembly","atob"],["acs","addEventListener","HTMLAllCollection"]],"phois.pro":[["nowoif"]],"phototrans.eu":[["rmnt","script","!adsbygoogle.loaded"]],"pianetalecce.it":[["acs","document.getElementById","ablk"]],"picgiraffe.com":[["noeval-if","/chp_?ad/"],["nostif","showModal"]],"pigeons.biz":[["rmnt","script","html-load.com"]],"pipsunlimited.app":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pistolsmith.com":[["rmnt","script","html-load.com"]],"pixvid.org":[["nowoif","_blank"]],"planetsuzy.org":[["set","__ads","true"],["acs","jQuery","ready"]],"plantbasedrdblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playmyopinion.com":[["acs","$","modal"]],"pocket-lint.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"popdaily.com.tw":[["rmnt","script","html-load.com"]],"populationpyramids.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porchdaydreamer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porn4fans.com":[["nostif","offsetWidth","2000"],["acs","WebAssembly","atob"],["rmnt","script","adblock_popup"],["nostif","innerText","2000"]],"pornfits.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"pornflixhd.com":[["aopw","adBlockDetected"],["aeld","DOMContentLoaded","src=atob"]],"pornforrelax.com":[["aopr","adver.abFucker.serve"],["aeld","","_blank"]],"porngameshd.com":[["nostif","/out.php"]],"pornhdin.com":[["aopr","ExoLoader.serve"],["aopr","open"],["acs","document.querySelectorAll","popMagic"]],"pornloupe.com":[["acs","document.querySelectorAll","popMagic"]],"porno-baguette.com":[["set-cookie","dscl","1"],["set-cookie","ppndr","1"]],"pornoman.pl":[["aopr","decodeURI"],["aopr","_0x311a"],["acs","document.querySelectorAll","popMagic"]],"pornotom.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"],["nostif","Adb"]],"pornuj.cz":[["acs","document.querySelectorAll","popMagic"]],"pornvintage.tv":[["aopr","popit"],["aeld","popstate","noPop"]],"powellfamilycooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prydwen.gg":[["acs","admiral"]],"pwctrader.com":[["rmnt","script","html-load.com"]],"queerdiary.com":[["acs","document.querySelectorAll","popMagic"]],"radio-philippines.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio.it":[["nostif",".call(null)","10"]],"radios-argentinas.org":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"rahim-soft.com":[["acs","document.documentElement","break;case $."],["noeval-if","/chp_?ad/"]],"railwaymodels.uk":[["rmnt","script","/__adblocker|html-load/"]],"rainbowplantlife.com":[["rmnt","script","/__adblocker|html-load/"]],"randymajors.org":[["rmnt","script","/__adblocker|html-load/"]],"raptivesite.com":[["rmnt","script","/__adblocker|html-load/"]],"rawkuma.net":[["acs","WebAssembly","atob"],["acs","addEventListener","HTMLAllCollection"]],"rc350forum.com":[["rmnt","script","html-load.com"]],"readm.org":[["acs","String.fromCharCode","/btoa|break/"]],"realandvibrant.com":[["rmnt","script","/__adblocker|html-load/"]],"reallyawesomecostumes.com":[["rmnt","script","/__adblocker|html-load/"]],"recetatipica.com":[["rmnt","script","/__adblocker|html-load/"]],"recipesfromeurope.com":[["rmnt","script","/__adblocker|html-load/"]],"redirect.dafontvn.com":[["nano-sib","distance"]],"retrosexfilms.com":[["aopr","popit"],["aeld","popstate","noPop"]],"returnpolicyguide.com":[["rmnt","script","/__adblocker|html-load/"]],"rhinotalk.net":[["rmnt","script","html-load.com"]],"roaringapps.com":[["set","Sentry","{}"],["set","Sentry.onLoad","noopFunc"]],"rubiconownersforum.com":[["rmnt","script","html-load.com"]],"ruffledblog.com":[["rmnt","script","/__adblocker|html-load/"]],"rvrank.com":[["rmnt","script","/__adblocker|html-load/"]],"s3embtaku.pro":[["rmnt","script","{delete window["]],"sabrinacurrie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sakpot.com":[["aost","String.prototype.charCodeAt","ai_"]],"sankakucomplex.com":[["set","Object.prototype.hideAds","true"],["acs","document.querySelectorAll","popMagic"]],"sankei.com":[["rmnt","script","html-load.com"]],"santafeforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sararun.net":[["noeval-if","/chp_?ad/"]],"satdl.com":[["aopw","protection"],["set","xtime","0"]],"savage.ventures":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sbrity.com":[["aopr","__Y"],["aopr","mm"]],"scandichotels.com":[["set","datalayer","[]"]],"scrap-blog.com":[["noeval-if","/chp_?ad/"]],"screenrant.com":[["acs","admiral"],["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"securegames.iwin.com":[["no-xhr-if","/gtm.js"]],"selftattoo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"semihomemadekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seoworld.in":[["noeval-if","/chp_?ad/"]],"sewingmachinetalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sex3.com":[["set","vastEnabled","false"]],"sexpin.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"sexybabes.club":[["aopr","ExoLoader.addZone"],["acs","loadTool","popping"]],"sexyebonyteen.com":[["acs","document.querySelectorAll","popMagic"]],"sexyhive.com":[["acs","document.querySelectorAll","popMagic"]],"shahid.mbc.net":[["no-fetch-if","/gampad/ads?"]],"shameless.com":[["aopr","ExoLoader.addZone"],["aopr","exoNoExternalUI38djdkjDDJsio96"],["aopr","jwplayer.utils.Timer"]],"sharinghubs.com":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"shavetape.cash":[["rmnt","script","wpadmngr.com"]],"shemedia.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"sherdog.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"shoppingtelly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shorttrick.in":[["noeval-if","/chp_?ad/"],["aost","fetch","https"],["aopr","checkAdsStatus"],["rmnt","script","/mdp|adb/i"]],"shoutoutcolorado.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siftandsimmer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"siftwithkima.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplegreenmoms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplyquinoa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sivackidrum.net":[["noeval-if","/chp_?ad/"]],"skodacommunity.de":[["nostif",".call(null)","10"]],"slawoslaw.pl":[["noeval-if","/chp_?ad/"]],"smokinvette.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sneakerfiles.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snowmobileworld.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sodomojo.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"soho.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sooeveningnews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"sortporn.com":[["set","flashvars.adv_pre_vast",""],["aopw","__spotSettings"]],"sourdoughbrandon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southernbite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soyoungteens.com":[["aopr","document.dispatchEvent"],["aeld","getexoloader"]],"spicebangla.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spiceupthecurry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sports-arena.space":[["nostif","bait"],["nostif","adblock"]],"sportshub.to":[["nostif","keepChecking"],["nostif","show"],["acs","document.onkeypress"],["acs","document.oncontextmenu"],["no-xhr-if","doubleclick"],["rmnt","script","/ConsoleBan|alert|AdBlocker/"],["no-fetch-if","googlesyndication"],["no-xhr-if","googlesyndication"]],"sportsloverz.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","popundersPerIP"]],"spotsaver.net":[["nowoif"]],"springfieldforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"star-facts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"startupjobsportal.com":[["noeval-if","/chp_?ad/"]],"sterkinekor.com":[["set","ttd_dom_ready","noopFunc"]],"stingrayforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"storyberries.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"streamfile.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"]],"streamvid.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"],["acs","document.documentElement","break;case $."],["nowoif"],["nano-stb","","","0.02"],["set","googleAd","true"],["rmnt","script","adblock"]],"sugarandsparrow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superdeporte.es":[["set","pr_okvalida","true"],["nostif","sub"]],"superfastrelease.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","load","/await|clientHeight/"],["nostif","Function"]],"tabering.net":[["aopr","adsBlocked"]],"tattle.life":[["nostif","prompt","1000"]],"taycanevforum.com":[["rmnt","script","html-load.com"]],"teachingmama.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"telexplorer.com.ar":[["aost","Math.random","/injectedScript.*inlineScript/"]],"teluguhitsandflops.com":[["noeval-if","/chp_?ad/"]],"tenbaiquest.com":[["noeval-if","/chp_?ad/"]],"teraearn.com":[["json-prune","web_share_ads_adsterra_config wap_short_link_middle_page_ad wap_short_link_middle_page_show_time data.ads_cpm_info"],["nano-stb","value","*"],["nano-sib","clearInterval","*"]],"texte.work":[["acs","addEventListener","google_ad_client"]],"thebargainsisters.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theblacksphere.net":[["rmnt","script","/==undefined.*body/"]],"theblondcook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theboxotruth.com":[["rmnt","script","html-load.com"]],"thebugsquad.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecarrotunderground.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theflexitarian.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegameslayer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehomebrewforum.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehouseofportable.com":[["nano-stb","0x","*"]],"thelabradorforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelanb.com":[["aeld","load","undefined"]],"thelawnforum.com":[["rmnt","script","html-load.com"]],"theloopylamb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themodestmomblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenewbaguette.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenwewalked.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theouterhaven.net":[["acs","jQuery","ai_adb"]],"thepiratebay0.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thepragmaticparent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therealfarmhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thereallife-rd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therecipepot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therelaxedhomeschool.com":[["aopr","__eiPb"]],"thesouthernreporter.co.uk":[["rmnt","script","await eval"]],"thesundaymorningedit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesundevils.com":[["set","blockAdBlock","trueFunc"]],"thethings.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"thisjess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timesnewsgroup.com.au":[["acs","$","popup"]],"timesofindia.com":[["aopr","detector"],["no-fetch-if","tvid.in/log"]],"tinyqualityhomes.org":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"tirumalatirupatiyatra.in":[["noeval-if","/chp_?ad/"]],"tomb-raider-king.com":[["acs","document.querySelectorAll","popMagic"]],"topspeed.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"toptenz.net":[["rmnt","script","/==undefined.*body/"]],"tortoiseknowledge.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"totalsportek1000.com":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"totalsportekhd.com":[["aeld","","open"]],"touchdowntexas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"travelbook-magazine.com":[["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:\\[?window,/"]],"truyen-hentai.com":[["nowoif"],["rmnt","script","ExoLoader"],["aopr","aab"]],"tube18.sexy":[["acs","pop_init"]],"tubewolf.com":[["set","vastEnabled","false"]],"tuktukcinma.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"turkishaudiocenter.com":[["nostif","show"]],"tutflix.org":[["acs","$","test"]],"tvdigital.de":[["nostif",".call(null)","10"]],"tvlogy.to":[["nostif","0x"]],"ultrastreamlinks.xyz":[["rmnt","script","popundersPerIP"]],"underground.tboys.ro":[["noeval-if","/chp_?ad/"]],"upbeetandkaleingitblog.com":[["rmnt","script","/__adblocker|html-load/"]],"updateroj24.com":[["no-fetch-if","adsbygoogle"]],"upnewsinfo.com":[["aopr","mMCheckAgainBlock"]],"uptodown.com":[["rmnt","script","html-load.com"]],"urlgalleries.net":[["aopr","AaDetector"],["acs","document.cookie","setOCookie"]],"v8bikeriders.com":[["rmnt","script","html-load.com"]],"vague.style":[["rmnt","script",").join(String.fromCharCode"]],"venge.io":[["nofab"],["set","adsProvider.init","noopFunc"],["set","SDKLoaded","true"]],"vidcorn.to":[["acs","JSON.parse","break;case $."]],"vidd.se":[["set","page_params.holiday_promo","true"]],"videos.porndig.com":[["aost","document.querySelector","detect"]],"videosinlevels.com":[["set","sgpbCanRunAds","true"]],"vidfast.pro":[["aost","document.createElement","onload"],["aost","XMLHttpRequest","/(?=^(?!.*(_next)))/"]],"vincenzosplate.com":[["rmnt","script","/__adblocker|html-load/"]],"vinstartheme.com":[["no-fetch-if","googlesyndication"]],"vladan.fr":[["nostif","adb","0"],["nowoif"]],"vn750.com":[["rmnt","script","html-load.com"]],"vnjpclub.com":[["rmnt","script","/adblock/i"]],"voiranime1.fr":[["noeval-if","/chp_?ad/"]],"vrporngalaxy.com":[["nowoif"]],"wandering-bird.com":[["rmnt","script","/__adblocker|html-load/"]],"wantedbabes.com":[["aopr","document.dispatchEvent"],["aopr","loadTool"]],"watchkobestreams.info":[["aost","atob","inlineScript"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watchmovies2.com":[["aeld","","break;case $."],["aopr","open"]],"watchserie.online":[["rmnt","script",";}}};break;case $."]],"watchug.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"wdw-magazine.com":[["rmnt","script","/__adblocker|html-load/"]],"wearychef.com":[["rmnt","script","/__adblocker|html-load/"]],"weatherwx.com":[["set","detectAdBlock","noopFunc"]],"webfail.com":[["nostif",".call(null)","10"]],"wellseasonedstudio.com":[["rmnt","script","/__adblocker|html-load/"]],"wenxuecity.com":[["acs","onload","adsbygoogle"],["nostif","ab_root.show"],["no-fetch-if","googlesyndication"]],"whattowatch.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"wheatbellyblog.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"whiteandwoodgrain.com":[["rmnt","script","/__adblocker|html-load/"]],"whitehouseblackshutters.com":[["rmnt","script","/__adblocker|html-load/"]],"whodatdish.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"wholefully.com":[["rmnt","script","/__adblocker|html-load/"]],"wholenewmom.com":[["rmnt","script","/__adblocker|html-load/"]],"wiacsports.com":[["set","blockAdBlock","trueFunc"]],"wildriftfire.com":[["rmnt","script","/__adblocker|html-load/"]],"wiltsglosstandard.co.uk":[["set","adLight","true"]],"winbuzzer.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"windows-7-forum.net":[["nostif",".call(null)","10"]],"windsorstar.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"wkrg.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wohngeld.org":[["nostif",".call(null)","10"]],"woodimprove.com":[["rmnt","script","/__adblocker|html-load/"]],"wooflix.tv":[["aopw","Adcash"],["nowoif"]],"worldofiptv.com":[["nostif","show"]],"worshiphousekids.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"wow-mature.com":[["acs","document.querySelectorAll","popMagic"]],"wowroms.com":[["nano-sib","second"]],"wpsimplehacks.com":[["nostif","show"]],"wranglerboard.com":[["rmnt","script","html-load.com"]],"wristtwisters.com":[["rmnt","script","html-load.com"]],"writtenreality.com":[["rmnt","script","/__adblocker|html-load/"]],"wtnh.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wunderground.com":[["aopw","_sp_"],["acs","admiral"],["no-fetch-if","doubleclick"],["nano-stb","isPeriodic","2200","0.001"],["nano-stb","isPeriodic","2300","0.001"]],"xfuckonline.com":[["noeval"],["aopr","Aloader.serve"]],"xxx-image.com":[["aopr","adsBlocked"],["aopr","open"],["noeval"],["aopr","XMLHttpRequest"],["aopr","Date.prototype.toUTCString"],["ra","oncontextmenu"]],"xxxjapaneseporntube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxpussyclips.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxteenyporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"y2meta.mobi":[["nowoif","!y2meta"]],"yayforyarn.com":[["rmnt","script","/__adblocker|html-load/"]],"yorkpress.co.uk":[["aopw","_sp_"],["set","adLight","true"]],"youlife24.com":[["noeval-if","/chp_?ad/"]],"younghouselove.com":[["rmnt","script","/__adblocker|html-load/"]],"yourtherapysource.com":[["rmnt","script","/__adblocker|html-load/"]],"youswear.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"youtubekids.com":[["set","ytInitialPlayerResponse.playerAds","undefined"],["set","ytInitialPlayerResponse.adPlacements","undefined"],["set","ytInitialPlayerResponse.adSlots","undefined"],["set","playerResponse.adPlacements","undefined"],["json-prune","playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots important"],["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"yt2conv.com":[["ra","onclick","a#downloadbtn[onclick^=\"window.open\"]","stay"],["nowoif"]],"yupflix.com":[["acs","globalThis","break;case"],["rmnt","script","/bait|com\\.android\\.chrome/"]],"zetporn.com":[["aopr","ExoLoader.serve"],["acs","addEventListener","-0x"]],"zien.pl":[["noeval-if","/chp_?ad/"]],"zorroplay.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"]],"zxi.mytechroad.com":[["aost","document.getElementsByTagName","adsBlocked"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
