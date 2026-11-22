/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"101planners.com":[["rmnt","script","/__adblocker|html-load/"]],"123movies.net":[["acs","parseInt","break;case $."]],"19-days-manga.com":[["acs","document.querySelectorAll","popMagic"]],"24bite.com":[["rmnt","script","/__adblocker|html-load/"]],"2sistersrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"3dyasan.com":[["noeval-if","/chp_?ad/"]],"3movs.com":[["popads-dummy"],["noeval-if","ExoLoader"],["set","flashvars.adv_pause_html",""]],"3rabsports.com":[["noeval-if","/chp_?ad/"]],"4wdlife.com":[["rmnt","script","/__adblocker|html-load/"]],"5flix.top":[["nostif","afterOpen"],["json-prune","AffiliateAdBlock"]],"604now.com":[["rmnt","script","/__adblocker|html-load/"]],"6thgenaccord.com":[["rmnt","script","/__adblocker|html-load/"]],"abroadwithash.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adcrypto.net":[["no-fetch-if","ads"],["aeld","load","bypass"]],"adffdafdsafds.sbs":[["rmnt","script","/key in document|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"adminreboot.com":[["noeval-if","/chp_?ad/"]],"admiregirls.su":[["acs","$","btoa"]],"afk.global":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airflowforum.com":[["rmnt","script","html-load.com"]],"airsextube.com":[["noeval"],["aopr","Aloader.serve"]],"al.com":[["aopr","_sp_._networkListenerData"],["rmnt","script","adblockerDisabled","excludes",",\\\""]],"aldireviewer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allaboutthetea.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"allmomsex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"allmusic.com":[["no-fetch-if","adsbygoogle"],["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"allpurposeveggies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allthingsdogs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"almezoryae.com":[["acs","document.createElement","adblock"]],"almursi.com":[["aopw","adBlockDetected"]],"amarcoplumbing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"amindfullmom.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"analxxxvideo.com":[["aopr","popit"],["aeld","popstate","noPop"]],"angelicalbalance.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"animecast.net":[["acs","document.querySelectorAll","popMagic"],["aost","String.prototype.charCodeAt","ai_"]],"animenew.com.br":[["nostif","bait"]],"anonymfile.com":[["set","countDown","0"]],"anybunny.com":[["acs","document.querySelectorAll","popMagic"]],"anysex.club":[["aopr","popit"],["aeld","popstate","noPop"]],"anythingtranslate.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"app-sorteos.com":[["rmnt","script","onerror"]],"appkamods.com":[["rmnt","script","deblocker"]],"areascans.net":[["noeval-if","ads"]],"arkadiumhosted.com":[["set","Adv_ab","false"]],"artribune.com":[["aost","Object","mark"],["set","td_ad_background_click_link","undefined"],["rc","td-ad-background-link"]],"aseasyasapplepie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ashandpri.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianporn.sexy":[["aopr","popit"],["aeld","popstate","noPop"]],"at-my-table.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atqa005.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"attainable-sustainable.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atvtorture.com":[["rmnt","script","html-load.com"]],"audiobookexchangeplace.com":[["noeval-if","/chp_?ad/"]],"autoc-one.jp":[["rmnt","script","html-load.com"]],"awaytothecity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"babesinporn.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"],["aopr","exoNoExternalUI38djdkjDDJsio96"],["aopr","document.dispatchEvent"]],"backyarddigs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"badgerowners.com":[["rmnt","script","html-load.com"]],"baithak.news":[["noeval-if","/chp_?ad/"]],"baseballtrainingworld.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"batteryequivalents.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bayimg.com":[["aeld","/^(?:click|mousedown)$/","ppu"]],"bbf.lt":[["nano-sib"]],"bdsmstreak.com":[["aopr","ExoLoader.serve"],["aeld","","_blank"],["acs","document.querySelectorAll","popMagic"]],"bdsomadhan.com":[["noeval-if","/chp_?ad/"]],"beeg.party":[["nowoif"]],"begindot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bestgamehack.top":[["aopr","open"]],"beta.plus.rtl.de":[["no-xhr-if","ad-ipd"]],"betweennapsontheporch.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"birminghamworld.uk":[["rmnt","script","await eval"]],"blackpornhq.com":[["acs","document.querySelectorAll","popMagic"],["aeld","","pop"]],"bleepingcomputer.com":[["rmnt","script","Ad-Shield"]],"blog.tangwudi.com":[["rmnt","script","ai_adb"]],"bloxyscripts.com":[["noeval-if","/chp_?ad/"]],"bluestarcrochet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boatdriving.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bodyketosis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bondagevalley.cc":[["acs","document.querySelectorAll","popMagic"]],"bonsaiprolink.shop":[["noeval-if","ads"]],"boomhavenfarms.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bordertelegraph.com":[["aopw","_sp_"],["set","adLight","true"]],"bravoteens.com":[["set","vastEnabled","false"]],"brilliantmaps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buckscountycouriertimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"bullnettlenews.com":[["rmnt","script","html-load.com"]],"businesschronicler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buzzfeed.at":[["nostif",".call(null)","10"]],"buzzfeed.de":[["nostif",".call(null)","10"]],"bylisafonde.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cadillacforums.com":[["rmnt","script","html-load.com"]],"calvyn.com":[["noeval-if","/chp_?ad/"]],"canonrumors.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"captionpost.com":[["noeval-if","/chp_?ad/"]],"cardiagn.com":[["nostif","mdp"],["acs","eval","replace"]],"caribbeanpot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"caroha.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"casthill.net":[["nowoif"],["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"cattletoday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cbs19.tv":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"celebritynetworth.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"choralia.net":[["nano-sib","download"]],"cieonline.co.uk":[["aopr","wpsite_clickable_data"]],"cinetrafic.fr":[["rmnt","script","html-load.com"]],"classicnerd.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"classicrockforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleananddelicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clock.zone":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clubtraderjoes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"collegefootball.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comeumamao.monster":[["aeld","click","pop_"]],"commande.rhinov.pro":[["set","Sentry","{}"],["set","Sentry.init","noopFunc"]],"compota-soft.work":[["noeval-if","/chp_?ad/"]],"cookerofdeliciousness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookilicious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingforkeeps.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookitrealgood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"counterstats.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"countrymusicfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"countryrebel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cracksports.me":[["rmnt","script","adserverDomain"],["acs","JSON.parse","atob"],["rmnt","script","FingerprintJS"],["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"craftycookbook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"createyum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crossbownation.com":[["rmnt","script","html-load.com"]],"crosswordanswers911.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cruisingfreedom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cruisingkids.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crypto4yu.com":[["aopr","Swal.fire"],["nostif","_0x"],["set","document.hasFocus","trueFunc"],["no-fetch-if","/adoto|\\/ads\\/js/"],["rmnt","script","htmls"],["acs","addEventListener","ads"],["nowoif","?key="]],"cuckold.it":[["acs","document.querySelectorAll","popMagic"]],"culturedvoyages.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"curbly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutiecomics.com":[["acs","document.querySelectorAll","popMagic"]],"cycletraveloverload.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dads-banging-teens.com":[["aeld","getexoloader"],["acs","document.querySelectorAll","popMagic"]],"dailycaring.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailydishrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailypost.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"],["nano-stb","native code","15000","0.001"],["nano-stb","(null)","5000","0.001"]],"dasgelbeblatt.de":[["nostif",".call(null)","10"]],"daysofjay.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dcurbanmom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ddd-smart.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","WebAssembly","atob"]],"deliciousmagazine.pl":[["nano-sib","consoleLoaded?clearInterval"]],"deliciousonadime.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"delightfultravelnotes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"descargatepelis.com":[["nano-sib","contador"],["aeld","DOMContentLoaded","window.open"]],"dewsburyreporter.co.uk":[["rmnt","script","await eval"]],"dishingdelish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diydecormom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"djcliq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"djsofchhattisgarh.in":[["noeval-if","/chp_?ad/"]],"doityourselfdivas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dormroomcook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"downloadudemy.com":[["nostif","showModal"],["nano-stb","countdown"]],"draftlegame.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dramakrsubindo.blogspot.com":[["aopr","open"]],"dressedformyday.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"droidviews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dropbang.net":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"ds2video.com":[["acs","document.documentElement","break;case $."],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"dsharer.com":[["aopr","showada"]],"dunfermlinepress.com":[["set","adLight","true"]],"durangoforumz.com":[["rmnt","script","html-load.com"]],"dx-tv.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","globalThis","break;case"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"],["rmnt","script","deblocker"]],"eastlothiancourier.com":[["set","adLight","true"]],"easyhomemadelife.com":[["rmnt","script","/__adblocker|html-load/"]],"eatsomethingvegan.com":[["rmnt","script","/__adblocker|html-load/"]],"eazypeazymealz.com":[["rmnt","script","/__adblocker|html-load/"]],"ecommercewebsite.store":[["noeval-if","/chp_?ad/"]],"edgedeliverynetwork.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nowoif","_blank"]],"elcaminocentral.com":[["rmnt","script","html-load.com"]],"electricalstudent.com":[["noeval-if","/chp_?ad/"]],"embed.wcostream.com":[["remove-cookie","PHPSESSID"],["rmnt","script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"]],"emilyaclark.com":[["rmnt","script","/__adblocker|html-load/"]],"emugameday.com":[["set","blockAdBlock","trueFunc"]],"engel-horoskop.de":[["nostif","displayMessage","2000"]],"enryumanga.com":[["noeval-if","/chp_?ad/"]],"entenpost.com":[["noeval-if","/chp_?ad/"]],"eporner.video":[["acs","document.querySelectorAll","popMagic"]],"erinliveswhole.com":[["rmnt","script","/__adblocker|html-load/"]],"eservice.directauto.com":[["set","gtm","{}"],["set","gtm.trackEvent","noopFunc"]],"estrenosdoramas.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"everyday-reading.com":[["rmnt","script","/__adblocker|html-load/"]],"eveshamjournal.co.uk":[["set","adLight","true"]],"evfancy.link":[["aopr","Adcash"]],"exawarosu.net":[["rmnt","script","html-load.com"]],"exceljet.net":[["rmnt","script","await eval"]],"exceltrick.com":[["rmnt","script","/__adblocker|html-load/"]],"exclusivepumping.com":[["rmnt","script","/__adblocker|html-load/"]],"exey.io":[["acs","encodeURIComponent","XMLHttpRequest"],["set","blurred","false"],["acs","disableItToContinue"],["acs","parseInt","break;case $."]],"extremotvplay.com":[["aopr","open"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"f123movies.com":[["acs","document.documentElement","break;case $."]],"fabulesslyfrugal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fakeginger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"falpus.com":[["rmnt","script","/FingerprintJS|openPopup/"],["set","blurred","false"]],"fantasyfootballreports.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fapguru.com":[["aost","$","inlineScript"]],"fatblackmatures.com":[["acs","document.querySelectorAll","popMagic"]],"favoyeurtube.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.createElement","l.parentNode.insertBefore(s"]],"fdownloader.net":[["rmnt","script","showAd"]],"femestella.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"femjoybabes.com":[["acs","document.querySelectorAll","popMagic"]],"fettspielen.de":[["nostif",".call(null)","10"]],"ffcv.es":[["noeval-if","/chp_?ad/"]],"ffxnow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fiat500owners.com":[["rmnt","script","html-load.com"]],"fileguru.net":[["acs","parseInt","break;case $."]],"filmizip.com":[["no-fetch-if","googlesyndication","length:40000-60000"],["nowoif"],["no-fetch-if","mode:no-cors"],["no-fetch-if","outbrain"],["rmnt","script","zIndex"]],"financialpanther.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flagandcross.com":[["rmnt","script","/==undefined.*body/"]],"flameipt3.vercel.app":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"fleamerica.com":[["noeval-if","/chp_?ad/"]],"flexxporn.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"flixhq.to":[["acs","addEventListener","HTMLAllCollection"]],"fmovies0.cc":[["nowoif"],["nostif","offsetHeight"],["no-fetch-if","/googlesyndication|googletagservices/"]],"fontyukle.net":[["aost","setTimeout","onload"]],"forestriverforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"forestryjournal.co.uk":[["set","adLight","true"]],"forum.cstalking.tv":[["aopw","checkAdBlocker"],["no-fetch-if","ads"]],"foxtel.com.au":[["json-prune","adease adeaseBlob vmap","adease"]],"freegames44.com":[["nostif","displayMessage","2000"]],"freehdvideos.xxx":[["acs","document.querySelectorAll","popMagic"]],"freehqtube.com":[["noeval"],["aopr","Aloader.serve"]],"freemomstube.com":[["aopr","Aloader.serve"],["noeval"]],"freeomovie.to":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"],["nosiif","visibility","1000"],["acs","String.fromCharCode","shift"]],"freeviewmovies.com":[["aopw","encodeURIComponent"],["set","isAdBlockActive","false"]],"freevpn.us":[["noeval-if","adbl"]],"friendproject.net":[["set","adblock","false"]],"frugalyabundante.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fseries.org":[["aopr","open"]],"ftsefutures.org":[["acs","jQuery","No"]],"fuckdy.com":[["aopr","Popunder"]],"funandnews.de":[["nostif",".call(null)","10"]],"futmind.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"g8w90qhngo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|popup|\\.onerror|WebAssembly/i"]],"gamearter.com":[["nano-sib","/SplashScreen|BannerAd/"],["nano-stb","/SplashScreen|BannerAd/"]],"gamer.com.tw":[["aopr","AntiAd.check"]],"gamer18.net":[["aeld","DOMContentLoaded","src=atob"]],"games.kentucky.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.moviestvnetwork.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.myrtlebeachonline.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gardentherapy.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gazetalubuska.pl":[["aeld","","show"]],"gazetaprawna.pl":[["nostif","error-report.com"],["rmnt","script","html-load.com"]],"gazettenet.com":[["aopr","googletag"]],"genealogyspeaks.com":[["rmnt","script","html-load.com"]],"genevieveogleman.ca":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"getdogecoins.com":[["aopr","show_ads"]],"gforgadget.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gfx-station.com":[["aeld","DOMContentLoaded","antiAdBlockerHandler"]],"ggjav.tv":[["acs","$","popunder"]],"giftrabbit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gingerhomemaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"giveagirlaspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"glam.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gmtruckclub.com":[["rmnt","script","html-load.com"]],"goblueraiders.com":[["set","blockAdBlock","trueFunc"]],"goheels.com":[["set","blockAdBlock","trueFunc"]],"goodriviu.com":[["noeval-if","/chp_?ad/"]],"goprincetontigers.com":[["set","blockAdBlock","trueFunc"]],"gopsusports.com":[["set","blockAdBlock","trueFunc"]],"gotula.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"govexplained.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"grannysquare.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"greenarrowtv.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"greenvilleonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"growgritly.com":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"gsm-solution.com":[["aopr","_0x32d5"],["rmnt","script","antiAdBlockerHandler"]],"gsowners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gt86ownersclub.co.uk":[["rmnt","script","html-load.com"]],"guitarcommand.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"h-game18.xyz":[["aeld","DOMContentLoaded","adlinkfly_url"],["no-xhr-if","googlesyndication"]],"happyhomeschoolnest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"haps.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"haus-garten-test.de":[["nostif",".call(null)","10"]],"hazyandhoppy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthyfloflo.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthygffamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heavy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["no-fetch-if","ads"]],"hesgoal-vip.to":[["rmnt","script","/adbl/i"]],"heyorlando.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hi0ti780.fun":[["nowoif"],["acs","Math","localStorage['\\x"]],"hilites.today":[["acs","$","onload"],["rmnt","script","/adScript|adsBlocked/"],["no-xhr-if","googlesyndication"]],"hitherandthither.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"honyaku-channel.net":[["rmnt","script","html-load.com"]],"hostthetoast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotforfoodblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hotgirlpix.com":[["acs","document.addEventListener","Adblock"]],"hotkitchenbag.com":[["no-fetch-if","googlesyndication"]],"housemixblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"how2pc.com":[["nosiif","visibility","1000"]],"hytale-servers.net":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"i-paceforum.com":[["rmnt","script","html-load.com"]],"i.pl":[["rmnt","script","admiral","excludes",",\\\""]],"iawaterfowlers.com":[["rmnt","script","html-load.com"]],"ibooks.to":[["acs","String.fromCharCode","ai_"],["rmnt","script","ai_adb"]],"idealight.it":[["nostif","bait"]],"idesign.wiki":[["noeval-if","/chp_?ad/"]],"idlixku.com":[["nostif","getComputedStyle"],["nano-stb","()=>j(e=>e-1)","*"],["nostif","start"]],"igay69.com":[["rmnt","script","ai_cookie"],["nowoif","","10"],["nostif","/data?|hideLayer/"]],"iheartnaptime.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ilfordrecorder.co.uk":[["set","adLight","true"]],"imgur.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["set","ADBLOCKED","false"],["set-cookie","WHITELISTED_CLOSED","1"],["set","Object.prototype.adsEnabled","false"]],"imleagues.com":[["nostif",".redirected"]],"impartialreporter.com":[["set","adLight","true"]],"infarrantlycreative.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"infinitiq30.org":[["rmnt","script","html-load.com"]],"inhabitat.com":[["aopr","registerSlideshowAd"]],"intelligencer.ca":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"]],"interstaterestareas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"investedwallet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"irasutoya.blogspot.com":[["acs","document.addEventListener","google_ad_client"]],"isekaisubs.web.id":[["aost","String.prototype.charCodeAt","ai_"]],"itdoesnttastelikechicken.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"j5z.xyz":[["noeval-if","/chp_?ad/"]],"jamjarkitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"japgay.com":[["set","AlobaidiDetectAdBlock","true"]],"javfan.one":[["acs","WebAssembly","atob"],["aeld","load","puTSstrpcht"]],"javideo.net":[["aeld","","popMagic"],["acs","WebAssembly","atob"]],"javlab.net":[["acs","WebAssembly","atob"]],"javtele.net":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"javxxx.me":[["acs","document.querySelectorAll","popMagic"]],"jkdamours.com":[["noeval-if","/chp_?ad/"],["set","count","0"]],"jmty.jp":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"jumboporn.xyz":[["aopr","loadTool"]],"k-statefootball.org":[["set","blockAdBlock","trueFunc"]],"karwan.tv":[["aopr","adsBlocked"]],"kentstatesports.com":[["set","blockAdBlock","trueFunc"]],"kenzato.uk":[["acs","document.querySelectorAll","popMagic"]],"kevinandamanda.com":[["rmnt","script","/__adblocker|html-load/"]],"kijyomatome.com":[["rmnt","script","html-load.com"]],"kindlyunspoken.com":[["rmnt","script","/__adblocker|html-load/"]],"kinkyporn.cc":[["acs","decodeURI","decodeURIComponent"],["aopr","exoJsPop101"],["acs","document.querySelectorAll","popMagic"]],"kitchenhabit.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchenstewardship.com":[["rmnt","script","/__adblocker|html-load/"]],"knitcrochetcreate.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"knownothingnomads.com":[["rmnt","script","/__adblocker|html-load/"]],"kodewebsite.com":[["noeval-if","/chp_?ad/"],["aopr","jQuery.popunder"]],"kowalskimountain.com":[["rmnt","script","/__adblocker|html-load/"]],"kr-av.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"krollskorner.com":[["rmnt","script","/__adblocker|html-load/"]],"kstateathletics.com":[["set","blockAdBlock","trueFunc"]],"ktmatvhq.com":[["rmnt","script","html-load.com"]],"kvue.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kwithsub.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"ladbible.com":[["rmnt","script","\"nowprocket\""]],"landlister.co.uk":[["rmnt","script","/__adblocker|html-load/"]],"langitmovie.com":[["acs","Math","zfgloaded"]],"laptopmag.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"lastampa.it":[["nostif","googleFC"]],"lastwar.wiki":[["rmnt","script","/__adblocker|html-load/"]],"latitude.to":[["nostif","show"]],"lecanalauditif.ca":[["noeval-if","/chp_?ad/"]],"legia.net":[["nostif","timeoutChecker"]],"lejdd.fr":[["aopr","SmartWallSDK"],["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"]],"lempaala.ideapark.fi":[["aeld","scroll","innerHeight"]],"lendrive.web.id":[["noeval-if","/chp_?ad/"],["aopr","btoa"]],"leprogres.fr":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"letsdopuzzles.com":[["rmnt","script","chkADB"]],"letterboxedanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"lettyskitchen.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"levante-emv.com":[["set","pr_okvalida","true"],["nostif","sub"]],"lifearoundthetable.ca":[["rmnt","script","/__adblocker|html-load/"]],"lifestyleofafoodie.com":[["rmnt","script","/__adblocker|html-load/"]],"likehotketo.com":[["rmnt","script","/__adblocker|html-load/"]],"liliputing.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"lilvienna.com":[["rmnt","script","/__adblocker|html-load/"]],"lilymanga.net":[["aeld","","break;case $."]],"linux-community.de":[["nostif",".call(null)","10"]],"linuxhint.com":[["acs","Math","adthrive"]],"lnn.co":[["rmnt","script","/__adblocker|html-load/"]],"loader.fo":[["ra","onclick","button[onclick^=\"window.open\"]","stay"],["ra","onclick","a[href][onclick^=\"openit\"]","stay"]],"login.asda.com":[["set","newrelic","{}"],["set","newrelic.setCustomAttribute","noopFunc"]],"lollty.pro":[["nano-sib","timer","*","0.001"]],"lookimg.com":[["nosiif","visibility","1000"]],"looptorrent.org":[["aopr","checkAdsStatus"]],"love4u.net":[["set-cookie","unlock_chapter_guest","1"],["nowoif"]],"lplaygo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"macworld.com":[["rmnt","script","window.admiral","excludes",",\\\""]],"mafab.hu":[["rmnt","script","html-load.com"]],"makenstitch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maketecheasier.com":[["nostif","loader.min.js"],["rmnt","script","KCgpPT57bGV0IGU"],["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"malaymail.com":[["rmnt","script","html-load.com"]],"mamaofminis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangabats.com":[["acs","WebAssembly","atob"],["nowoif"]],"mangahentai.xyz":[["aopr","loadXMLDoc"]],"mangceh.cc":[["acs","JSON.parse","break;case $."]],"manhuascan.com":[["aeld","","break;case $."]],"mapleandthyme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"marathonhandbook.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"maraudersports.com":[["set","blockAdBlock","trueFunc"]],"matomeiru.com":[["noeval-if","/chp_?ad/"]],"meetdownload.com":[["acs","document.querySelectorAll","popMagic"]],"megafile.io":[["nosiif","()","5000"]],"meine-anzeigenzeitung.de":[["nostif",".call(null)","10"]],"meinestadt.de":[["nostif",".call(null)","10"]],"memoriadatv.com":[["nano-stb"]],"messitv.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","parseInt","break;case $."],["aopw","atOptions"]],"metin2hub.com":[["rmnt","script","/adbl/i"]],"mexicoinmykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"micechat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"milfzr.com":[["nowoif"],["acs","String.prototype.charCodeAt","tabunder"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"minievforum.com":[["rmnt","script","html-load.com"]],"minutolivre.com":[["aopw","adBlockDetected"]],"missyusa.com":[["nostif","error-report.com"]],"mixdrop21.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|dtnoppu|adserverDomain/"],["nowoif"]],"mkzforum.com":[["rmnt","script","html-load.com"]],"mmamania.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"mobilesuitarena.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"modbee.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"modeltrainforum.com":[["rmnt","script","html-load.com"]],"modestfish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mofluid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momcrieff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommysfabulousfinds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"morgenpost.de":[["nostif",".call(null)","10"]],"motorious.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mreader.co":[["acs","document.documentElement","break;case $."]],"mtgsalvation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mtlblog.com":[["aopw","Ha"]],"mtv.com":[["acs","admiral"]],"mujeresdesnudas.club":[["acs","$","azar"],["aopr","open"]],"multifaucet.org":[["acs","String.fromCharCode","/btoa|break/"]],"multporn.net":[["aopr","document.dispatchEvent"],["acs","document.querySelectorAll","popMagic"]],"munchingwithmariyah.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"musiccoder.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mustang7g.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"mychemicalfreehouse.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myforecast.com":[["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"myheartbeets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mythvista.com":[["set","timeSec","0"],["nano-stb","getlink","*","0.001"],["noeval-if","replace"]],"mytiguan.com":[["rmnt","script","html-load.com"]],"mzansinudes.com":[["acs","decodeURI","decodeURIComponent"]],"nakenprat.com":[["aopr","document.dispatchEvent"]],"naniplay.com":[["nowoif"]],"nbastream.tv":[["acs","decodeURI","decodeURIComponent"]],"neatfreeporn.com":[["noeval"],["aopr","Aloader.serve"]],"negumo.com":[["set","fabActive","false"]],"new-xxxvideos.com":[["noeval"],["aopr","Aloader.serve"]],"news10.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"nicheporno.com":[["acs","document.querySelectorAll","popMagic"]],"niestatystyczny.pl":[["aopr","wpsite_clickable_data"]],"nirjonmela.com":[["acs","$","AdBlock"]],"nitroflare.com":[["acs","$","window.open"],["acs","pop3","window.open"]],"niu-pack.com":[["set","blockAdBlock","trueFunc"]],"nohost.one":[["nowoif"],["rmnt","script","HTMLAllCollection"]],"nontongo.win":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"]],"note.sieuthuthuat.com":[["set","isAdBlockActive","false"]],"notebookcheck-cn.com":[["rmnt","script","&&window,"]],"notformembersonly.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","_pop"]],"novelread.co":[["noeval-if","/chp_?ad/"]],"novoporn.com":[["aopr","AaDetector"],["acs","document.querySelectorAll","popMagic"]],"noz-cdn.de":[["nostif",".call(null)","10"]],"nsfwyoutube.com":[["acs","WebAssembly","atob"]],"nudogram.com":[["acs","WebAssembly","atob"]],"nulledteam.com":[["acs","$","userAgent"]],"nullpk.com":[["acs","parseInt","break;case $."],["acs","eval","replace"],["nostif","showModal"]],"nv200forum.com":[["rmnt","script","html-load.com"]],"oceaninfo.com":[["rmnt","script","/__adblocker|html-load/"]],"ocsoku.com":[["rmnt","script","html-load.com"]],"oeffnungszeitenbuch.de":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"]],"officecoach24.de":[["acs","document.addEventListener","google_ad_client"]],"ohmyfoodrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"olivetomato.com":[["rmnt","script","/__adblocker|html-load/"]],"onifile.com":[["nano-sib"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aost","Math.random","/\\st\\.[a-zA-Z]*\\s/"]],"onlyfullporn.video":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"op.gg":[["aopw","lifeOnwer"],["nostif","adblock","2000"]],"opomanga.com":[["acs","document.querySelectorAll","popMagic"]],"optimum.net":[["set","s","{}"],["set","s.tl","noopFunc"]],"orchestracentral.com":[["rmnt","script","/__adblocker|html-load/"]],"overclock.net":[["rmnt","script","html-load.com"]],"overframe.gg":[["rmnt","script","/__adblocker|html-load/"]],"pamelasalzman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"parentcircle.com":[["aeld","scroll","function(e)"]],"parentingchaos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"passportandpixels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"passportforums.com":[["rmnt","script","html-load.com"]],"pawchive.pw":[["acs","WebAssembly","atob"]],"pcgames.de":[["nostif",".call(null)","10"]],"pelotonforum.com":[["rmnt","script","html-load.com"]],"pepperlive.info":[["acs","document.createElement","no-referrer-when-downgrade"],["rmnt","script",";}}};break;case $."]],"personalityhunt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"perugiatoday.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"photo--alben-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"phototrans.pl":[["rmnt","script","!adsbygoogle.loaded"]],"pickyeaterblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"picrew.me":[["nostif","error-report.com"]],"pigeonburger.xyz":[["no-xhr-if","googlesyndication"]],"pilibook.com":[["aeld","","popMagic"]],"pirateblue.net":[["set","blockAdBlock","trueFunc"]],"planetrugby.com":[["rmnt","script",".onerror"],["rmnt","script","/_0x|'innerHTML'/"]],"plantbasedjuniors.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playpartyplan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playstore.pw":[["nostif","offsetWidth"],["aopr","adsBlocked"],["set","PreRollAd.timeCounter","0"]],"playtivities.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"porn78.info":[["acs","document.querySelectorAll","popMagic"]],"pornclassic.tube":[["acs","adver"],["set","prerollMain","undefined"]],"pornhex.com":[["acs","document.querySelectorAll","popMagic"]],"pornobengala.com":[["aopr","open"]],"pornohaha.com":[["aopr","document.dispatchEvent"]],"pornxxxvideos.net":[["acs","document.querySelectorAll","popMagic"]],"positivepsychology.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prettyprudent.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pricemint.in":[["noeval-if","/chp_?ad/"]],"princesscruisesblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"printedelectronicsnow.com":[["acs","$","#pageWrapper"]],"publicidadtulua.com":[["noeval-if","/chp_?ad/"]],"publio.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"punishworld.com":[["acs","document.querySelectorAll","popMagic"],["rmnt","script","Exo"],["aeld","getexoloader"]],"r1-forum.com":[["rmnt","script","html-load.com"]],"radio-ua.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"rank1-media.com":[["rmnt","#text","スポンサードリンク"]],"ranourano.xyz":[["noeval-if","/chp_?ad/"]],"ratemyteachers.com":[["acs","document.getElementById","block"]],"rawfree.top":[["no-fetch-if","/\\?abg=|adsbygoogle|tpc\\.googlesyndication\\.com|doubleclick\\.net|googleadservices\\.com/"]],"rbxscripts.net":[["aeld","DOMContentLoaded","adsBlocked"],["no-xhr-if","googlesyndication"]],"realestateinfoguide.com":[["rmnt","script","/__adblocker|html-load/"]],"realitydaydream.com":[["rmnt","script","/__adblocker|html-load/"]],"recipessimple.com":[["rmnt","script","/__adblocker|html-load/"]],"redfaucet.site":[["noeval-if","/chp_?ad/"]],"rediff.com":[["rmnt","script","Symbol.iterator"]],"redowlanalytics.com":[["acs","parseInt","break;case $."]],"reneeroaming.com":[["rmnt","script","/__adblocker|html-load/"]],"restorbio.com":[["nano-sib","counter","*"]],"rhinoforums.net":[["rmnt","script","html-load.com"]],"rimworldbase.com":[["aopr","ai_run_scripts"],["no-xhr-if","googlesyndication"]],"rlxforum.com":[["rmnt","script","html-load.com"]],"rocketnews24.com":[["set-attr",".lazy","src","[data-sco-src]"]],"rogallylife.com":[["rmnt","script","/__adblocker|html-load/"]],"royston-crow.co.uk":[["set","adLight","true"]],"ruidrive.com":[["no-fetch-if","method:GET"]],"rule34.xxx":[["aopr","newcontent"]],"runnersworld.de":[["nostif",".call(null)","10"]],"rusteensex.com":[["acs","document.querySelectorAll","popMagic"]],"rvliving.com":[["rmnt","script","/__adblocker|html-load/"]],"saboroso.blog":[["rmnt","script","/bait/i"]],"saint.to":[["acs","document.querySelectorAll","popMagic"]],"saving.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savoringthegood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sbs.com.au":[["no-xhr-if","/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["json-prune","ads breaks cuepoints times"],["rc","ad-controls",".bitmovinplayer-container.ad-controls"],["aopr","odabd"]],"sdvoyager.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seirsanduk.online":[["rmnt","script","adserverDomain"]],"send-anywhere.com":[["nano-sib","skipOptions"]],"seneporno.com":[["acs","document.querySelectorAll","popMagic"]],"seriesite.net":[["aeld","","break;case $."],["aopr","open"]],"setup.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sexgay18.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.querySelectorAll","popMagic"]],"sextubefun.com":[["acs","document.querySelectorAll","popMagic"]],"sheboyganpress.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"shelovesporn.com":[["acs","document.querySelectorAll","popMagic"]],"shemalemovies.us":[["acs","document.querySelectorAll","popMagic"]],"shetriedwhat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shipseducation.com":[["noeval-if","/chp_?ad/"]],"shotgunforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"shoutoutatlanta.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shoutoutla.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shoutoutmiami.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplecarguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simpleflying.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"simplicityandastarter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplylovecoloring.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sinfulkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartcharts.net":[["set","WURFL","{}"]],"smoner.com":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","document.documentElement","break;case $."],["rmnt","script","checkAdsBlocked"],["nano-stb","getElementById","*"]],"sms-receive.net":[["acs","$","adblock"]],"snowblowerforum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"softcobra.com":[["noeval-if","/chp_?ad/"]],"softwaresde.com":[["acs","$","advert"]],"sokobj.com":[["aopr","ExoLoader.serve"]],"soldionline.it":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"soupaddict.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soy502.com":[["acs","document.getElementById","length"]],"spidersworlds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"spoonforkbacon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"srt10forum.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"ssforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"ssyou.tube":[["acs","EventTarget.prototype.addEventListener","delete window"]],"stardewids.com":[["aeld","","document.body"],["aeld","scroll"]],"starlust.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"start-to-run.be":[["noeval-if","/chp_?ad/"]],"statecollege.com":[["rmnt","script","html-load.com"]],"stdrivers.co.uk":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stellarthread.com":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"stepsisterfuck.me":[["aopr","ExoLoader.addZone"]],"sterham.net":[["aopr","Adcash"],["nowoif"],["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"],["nowoif","!/^\\/|_self|alexsports|nativesurge/"]],"stimotion.pl":[["noeval-if","/chp_?ad/"]],"stourbridgenews.co.uk":[["set","adLight","true"]],"streamlord.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"strongsounds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stroudnewsandjournal.co.uk":[["set","adLight","true"]],"sturgisjournal.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"suburbansimplicity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sueddeutsche.de":[["aopr","_sp_._networkListenerData"],["aopw","SZAdBlockDetection"],["set","_sp_.config","undefined"],["nostif",".call(null)","10"]],"sugarlesscrystals.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sulleiman.com":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"sunporno.com":[["aopr","ExoLoader.addZone"],["aopr","exoNoExternalUI38djdkjDDJsio96"],["aeld","click","popMagic"]],"supercarnostalgia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superhealthykids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"supraforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"susanexpectcare.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"sweetlittlebluebird.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tbssowners.com":[["rmnt","script","html-load.com"]],"tdeecalculator.me":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"teaching2and3yearolds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techkhulasha.com":[["nano-stb","/getElementById|gotoo/","*","0.02"],["set","navigator.brave","undefined"]],"teenxxxporn.pro":[["acs","document.querySelectorAll","popMagic"]],"telemundobakersfield.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"temporeale.info":[["noeval-if","/chp_?ad/"]],"terrylove.com":[["nostif","prompt","1000"]],"textovisia.com":[["aopr","isAdBlockActive"]],"thatspicychick.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"the-leader.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"theacc.com":[["set","blockAdBlock","trueFunc"]],"thecastawaykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecleaneatingcouple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecustomrom.com":[["rmnt","script","deblocker"],["acs","decodeURIComponent","ai_"],["nano-stb","window.location.href","*"]],"thecwaustin.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"theeasygarden.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefap.net":[["rmnt","script","wpadmngr.com"]],"theflattopking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegatewaypundit.com":[["aopr","adtoniq"],["rmnt","script","/==undefined.*body/"],["rmnt","script","/==undefined|get\\.apply/"],["rmnt","script","__apNoHold"],["rmnt","script","Object.getOwnPropertyDescriptor(Document.prototype"],["set","String.prototype.allReplace","1"]],"thegeneticchef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehackernews.com":[["rmnt","script","imgSrc"]],"thehealthsite.com":[["acs","EventTarget.prototype.addEventListener","onerror"]],"thelandryhat.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"theloopholefox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenetline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theorganisedhousewife.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepurpleponcho.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thescottishsun.co.uk":[["rmnt","script","/parentNode\\.removeChild|textContent=atob/"],["acs","atob","/parentNode\\.removeChild|textContent=atob/"]],"theshadowleague.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesun.co.uk":[["rmnt","script","/parentNode\\.removeChild|textContent=atob/"],["acs","atob","/parentNode\\.removeChild|textContent=atob/"]],"thevog.net":[["rmnt","script","html-load.com"]],"theweek.co.uk":[["aopr","_sp_._networkListenerData"]],"theyummydelights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisevergreenhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisishowwebingham.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thisvivaciouslife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thotpacks.xyz":[["set","blurred","false"]],"thriftytraveler.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thumpertalk.com":[["nostif","location"],["ra","href|target|data-ipshover-target|data-ipshover|data-autolink|rel","a[href^=\"https://thumpertalk.com/link/click/\"][target=\"_blank\"]"]],"thymeandjoy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tickhosting.com":[["set","detectedAdblock","undefined"]],"tidefans.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tieba.baidu.com":[["set","passFingerPrint","noopFunc"]],"tikmate.app":[["set","powerAPITag","emptyObj"],["set","detectAdBlock","noopFunc"]],"tippsundtricks.co":[["rmnt","script","await eval"]],"tiz-cycling-live.io":[["acs","$","blocker"]],"tnaflix.asia":[["aopr","popit"],["aeld","popstate","noPop"]],"tokuzl.net":[["ra","onclick","[onclick=\"goToURL();\"]","complete"],["nowoif","_blank"],["aeld","click","overlay"]],"tomsguide.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"top.gg":[["nano-stb","readyToVote","12000"]],"topweddingsites.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"topwwnews.com":[["aeld","","_0x"]],"torovalley.net":[["acs","document.documentElement","break;case $."]],"tradersunion.com":[["nostif","video-popup"]],"travelerdoor.com":[["no-xhr-if","cloudflare.com/cdn-cgi/trace"]],"trentotoday.it":[["nostif","bADBlock"]],"trx450r.org":[["rmnt","script","html-load.com"]],"ttforum.co.uk":[["rmnt","script","html-load.com"]],"tunebat.com":[["rmnt","script","html-load.com"]],"tunein.com":[["set","Object.prototype.skipPreroll","true"]],"tuppennysfireplace.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"turkishseriestv.org":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"turkuazkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"turtleboysports.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"tv-media.at":[["nostif",".call(null)","10"]],"tvinfo.de":[["nostif",".call(null)","10"]],"tvtechnology.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"twink-hub.com":[["acs","document.querySelectorAll","popMagic"]],"uclabruins.com":[["set","blockAdBlock","trueFunc"]],"ultimateninjablazingx.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"uniquedognames.net":[["rmnt","script","/__adblocker|html-load/"]],"uploadbeast.com":[["nano-sib","counter"]],"upstyledaily.com":[["set","loadShield","noopFunc"]],"usmagazine.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"vdl.np-downloader.com":[["nowoif","?key="]],"veggieboards.com":[["rmnt","script","html-load.com"]],"vercanalesdominicanos.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"vibraporn.com":[["aopr","loadTool"]],"vidlii.com":[["nosiif","visibility","1000"],["set","blockAdBlock","trueFunc"],["set","adsbygoogle.loaded","true"]],"vids.st":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"],["rmnt","script","window.open"],["acs","document.createElement","pop_tag"]],"vintage-recipes.com":[["rmnt","script","/__adblocker|html-load/"]],"vip.stream101.space":[["nowoif"]],"vipnews.jp":[["rmnt","script","html-load.com"]],"vipsister23.com":[["rmnt","script","html-load.com"]],"virginiafirst.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"vkrovatku.com":[["acs","document.querySelectorAll","popMagic"]],"volkszone.com":[["rmnt","script","html-load.com"]],"voyagedallas.com":[["rmnt","script","/__adblocker|html-load/"]],"voyagestl.com":[["rmnt","script","/__adblocker|html-load/"]],"vulcanforums.com":[["rmnt","script","html-load.com"]],"vulture.com":[["aeld","/^(?:click|mousedown)$/","latest!=="]],"wagoneerfans.com":[["rmnt","script","html-load.com"]],"washingtonflyfishing.com":[["rmnt","script","html-load.com"]],"watarukiti.com":[["rmnt","script","html-load.com"]],"watchbrooklynnine-nine.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"watchporn4k.com":[["acs","document.querySelectorAll","popMagic"],["nowoif"]],"wausaudailyherald.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"werockyourweb.com":[["rmnt","script","/__adblocker|html-load/"]],"whatgreatgrandmaate.com":[["rmnt","script","/__adblocker|html-load/"]],"whichyr.com":[["rmnt","script","/__adblocker|html-load/"]],"whiskeywatch.com":[["rmnt","script","/__adblocker|html-load/"]],"wholesomeyumfoods.com":[["rmnt","script","/__adblocker|html-load/"]],"wikitechy.com":[["noeval-if","/chp_?ad/"]],"wildsnow.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"windowstip.com":[["rmnt","script","/__adblocker|html-load/"]],"windroid777.com":[["rmnt","script","detectAdBlock"]],"wintotal.de":[["nostif",".call(null)","10"]],"withukor.com":[["acs","document.addEventListener","google_ad_client"]],"wizistreamz.xyz":[["rmnt","script","popundersPerIP"]],"wltreport.com":[["rmnt","script","/==undefined.*body/"]],"wonporn.com":[["acs","document.querySelectorAll","popMagic"]],"wordcrushanswer.com":[["rmnt","script","/__adblocker|html-load/"]],"wordonlinetips.com":[["rmnt","script","/__adblocker|html-load/"]],"worldofbin.com":[["aopr","adBlockDetected"]],"worldsex.com":[["aopr","Notification"],["aopr","document.dispatchEvent"],["acs","document.querySelectorAll","popMagic"]],"worldtravelling.com":[["nostif","ads"]],"wowpornlist.xyz":[["aopr","document.dispatchEvent"]],"writerswrite.co.za":[["rmnt","script","/__adblocker|html-load/"]],"wtol.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"www.cc.com":[["no-fetch-if","imasdk.googleapis.com"],["no-xhr-if","imasdk.googleapis.com"]],"www.chip.de":[["rmnt","script","/, [0-9]{3}\\)\\]\\; var /"],["rmnt","script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"]],"xbokeps.com":[["acs","document.querySelectorAll","popMagic"]],"xgroovy.com":[["aopr","VAST"]],"xmovies08.org":[["aeld","","0x"]],"xxu.mobi":[["acs","document.querySelectorAll","popMagic"]],"xxxtubedot.com":[["noeval"],["aopr","Aloader.serve"]],"y2down.cc":[["nowoif"]],"yankeesnews.com":[["rmnt","script","/__adblocker|html-load/"]],"yogranny.com":[["acs","document.dispatchEvent","myEl"]],"youapk.net":[["aopr","open"]],"youjax.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"youngpussyfuck.com":[["aopr","popit"],["aeld","popstate","noPop"]],"yourfreecareertest.com":[["rmnt","script","/__adblocker|html-load/"]],"yourfriendthenomad.com":[["rmnt","script","/__adblocker|html-load/"]],"yourmodernfamily.com":[["rmnt","script","/__adblocker|html-load/"]],"youtube.com":[["json-prune","entries.[-].command.reelWatchEndpoint.adClientParams.isAd"]],"ytmp3s.nu":[["nowoif"]],"yummytoddlerfood.com":[["rmnt","script","/__adblocker|html-load/"]],"yurudori.com":[["noeval-if","/chp_?ad/"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
