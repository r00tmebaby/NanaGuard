/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"007stockchat.com":[["nosiif","daadb"]],"0ochi8hp.com":[["nowoif"],["acs","EventTarget.prototype.addEventListener","delete window"]],"1000logos.net":[["rmnt","script","/__adblocker|html-load/"]],"10alert.com":[["nostif","siteAccessFlag"]],"123moviesready.org":[["acs","parseInt","break;case $."]],"190.115.18.20":[["acs","document.documentElement","break;case $."]],"1dogwoof.com":[["rmnt","script","/__adblocker|html-load/"]],"247tempo.com":[["rmnt","script","/__adblocker|html-load/"]],"300cforums.com":[["rmnt","script","html-load.com"]],"4share.vn":[["nano-stb"],["nowoif"]],"7daystodie-servers.com":[["rmnt","script","/admiral|-engaged/","excludes",",\\\""]],"919thebend.ca":[["rmnt","script","/__adblocker|html-load/"]],"9anime.vip":[["acs","EventTarget.prototype.addEventListener","delete window"]],"abc10.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"accountantforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acemanforum.com":[["rmnt","script","html-load.com"]],"ad4msan.com":[["acs","document.addEventListener","adblock"]],"adamantkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adrenaline.com.br":[["rmnt","script","/:\\[?window,/"]],"afasiaarchzine.com":[["nosiif","visibility","1000"]],"afl3ua5u.xyz":[["nowoif"],["acs","Math","localStorage['\\x"]],"agrodigital.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"aimasummd.blog.fc2.com":[["acs","document.addEventListener","google_ad_client"]],"airhostacademy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"akb48matomemory.com":[["rmnt","script","html-load.com"]],"akw.cam":[["acs","document.addEventListener","google_ad_client"]],"alc.co.jp":[["rmnt","script","html-load.com"]],"allporncomic.com":[["aopw","ExoSupport"],["aopr","exoJsPop101"]],"allpremium.net":[["acs","eval","replace"]],"allthings.how":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allthingsthrifty.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"allureamateurs.net":[["acs","document.querySelectorAll","popMagic"]],"alphagames4u.com":[["acs","addEventListener","ai_"]],"alternativeto.net":[["json-prune","props.sponsoredAlternative"]],"amateur-mature.net":[["acs","document.querySelectorAll","popMagic"]],"ancestral-nutrition.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"andrenalynrushplay.cfd":[["rmnt","script","debugger"]],"androgamer.org":[["acs","jQuery","ai_adb"]],"anibatch.me":[["nostif","nextFunction","2000"]],"animefire.info":[["acs","EventTarget.prototype.addEventListener","delete window"]],"animeflv.net":[["acs","globalThis","break;case"]],"animeshqip.org":[["nostif","getComputedStyle"],["no-fetch-if","adsbygoogle"],["nowoif","_blank","1"]],"aniwixi.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","triggerPopunder"]],"anomize.xyz":[["nano-sib"],["nosiif","visibility","1000"]],"antique-bottles.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"aozoraapps.net":[["noeval-if","/chp_?ad/"]],"apkmirror.com":[["rmnt","script","document.createTextNode"]],"appvn.com":[["acs","JSON.parse","break;case $."]],"aprettylifeinthesuburbs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"apritos.com":[["aopw","adBlockDetected"]],"arcjav.com":[["acs","document.querySelectorAll","popMagic"],["acs","navigator","FingerprintJS"]],"area51.porn":[["aopr","document.dispatchEvent"]],"arena.gamesforthebrain.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"arianathankspecial.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"arldeemix.com":[["noeval-if","adblock"]],"artofmemory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asiansexdiarys.com":[["noeval-if","/chp_?ad/"]],"aspdotnethelp.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"assettoworld.com":[["no-fetch-if","doubleclick"]],"atastykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"atecaforums.co.uk":[["rmnt","script","html-load.com"]],"atgstudy.com":[["noeval-if","/chp_?ad/"]],"ausfile.com":[["aopw","Fingerprint2"],["aopw","SubmitDownload1"],["nano-stb"]],"aussenwirtschaftslupe.de":[["nostif",".call(null)","10"]],"autoexpress.co.uk":[["aopr","_sp_._networkListenerData"]],"automothink.com":[["noeval-if","/chp_?ad/"]],"autotrader.nl":[["nostif",".call(null)","10"]],"awpd24.com":[["noeval-if","/chp_?ad/"]],"badtaste.it":[["aeld","","Adblock"]],"bakeitwithlove.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakingbeauty.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakingwithgranny.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"batman.city":[["noeval-if","/chp_?ad/"]],"bbw6.com":[["acs","document.querySelectorAll","popMagic"]],"beautyandthebenchpress.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"beegsexxx.com":[["acs","document.querySelectorAll","popMagic"],["aopr","document.dispatchEvent"]],"beemtube.com":[["acs","document.querySelectorAll","popMagic"]],"beesource.com":[["rmnt","script","html-load.com"]],"beginningmanga.com":[["acs","document.querySelectorAll","popMagic"]],"bersaforum.com":[["rmnt","script","html-load.com"]],"bestrecipebox.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bethebudget.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"betterhealthwhileaging.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bibliavida.com":[["rmnt","script","[]).push(arguments)","excludes",",\\\""]],"biftutech.com":[["noeval-if","/chp_?ad/"]],"biggerbolderbaking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bingsport.xyz":[["acs","document.documentElement","break;case $."]],"biscuitsandburlap.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"blackamateursnaked.com":[["acs","document.querySelectorAll","popMagic"]],"blacksexmix.com":[["acs","document.querySelectorAll","popMagic"]],"bloggingawaydebt.com":[["aopr","__eiPb"]],"bloggingguidance.com":[["noeval-if","/chp_?ad/"],["aopr","open"]],"boatsafe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bonstreams.net":[["nowebrtc"]],"bonvoyagewithkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"book18.fans":[["aeld","load","puTSstrpcht"]],"bookriot.com":[["nostif","/Adblock|_ad_/"]],"bootstrapbee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"br0wsers.com":[["acs","document.getElementsByClassName","offsetParent"]],"brandstofprijzen.info":[["aeld","load","antiblock"]],"bravoerotica.net":[["set","flashvars.adv_pause_html",""],["set","flashvars.adv_start_html",""]],"brbeast.com":[["nowoif"]],"brianlagerstrom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brigitte.de":[["set","foundation.adPlayer.bitmovin","{}"],["nostif",".call(null)","10"]],"brupload.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"btvnovinite.bg":[["no-xhr-if","googlesyndication"],["no-fetch-if","googlesyndication"],["no-fetch-if","imasdk"]],"buienalarm.be":[["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|siteActivateScripts/"]],"buildyourbite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bulldogbreeds.com":[["rmnt","script","html-load.com"]],"burlingtoncountytimes.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"burntpelletbbq.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"buzter.xyz":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"bytheforkful.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cafehailee.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"canaltdt.es":[["aeld","load","showModal"],["noeval-if","/chp_?ad/"]],"cantondailyledger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"cariskuy.com":[["nostif","nextFunction","450"]],"carlaaston.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"carlmurawski.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"carlocao.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"carryflix.com":[["no-fetch-if","mode:no-cors"]],"catatanonline.com":[["noeval-if","/chp_?ad/"]],"cdn1.site":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","WebAssembly","atob"],["nowoif"],["rmnt","script","justDetectAdblock"],["acs","EventTarget.prototype.addEventListener","delete window"]],"celebsuburb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cgtips.org":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"],["rmnt","script","/adblock|var Data.*];/"]],"chamberofcommerce.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chardandilminsternews.co.uk":[["set","adLight","true"]],"charlottepilgrimagetour.com":[["noeval-if","/chp_?ad/"]],"chazhound.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chevycobaltforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chevymalibuforum.com":[["rmnt","script","html-load.com"]],"chunkbase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cima4u.forum":[["rmnt","script","popup"]],"cinderstravels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinema.de":[["no-xhr-if","svonm"],["nostif",".call(null)","10"]],"cintateknologi.com":[["acs","document.addEventListener","google_ad_client"]],"city-guide.london":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"citynow.it":[["aopr","advads_passive_ads"]],"classiccasualhome.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"clk.asia":[["nosiif","visibility","1000"],["nowoif"],["set","blurred","false"]],"cloudcomputingtopics.net":[["set","distance","0"]],"cockroachsavvy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"code2care.org":[["nostif","Msg"]],"coderblog.in":[["noeval-if","/chp_?ad/"]],"coempregos.com.br":[["nostif","hasAdblock"]],"combotarot.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comfyliving.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comicbasics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"compilationtube.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"constructionmethodology.com":[["noeval-if","/chp_?ad/"]],"cooking-therapy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cookingintheyard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cool--domains-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"coolsoftware-de.translate.goog":[["nostif","wbDeadHinweis"],["nostif","","10000"]],"copykat.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cosplayadvice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cotswoldlife.co.uk":[["set","adLight","true"]],"countylocalnews.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"craftinghappiness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"craftknights.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crochettoplay.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crockpotladies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crohnsforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crystalmathlabs.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"csurams.com":[["set","blockAdBlock","trueFunc"]],"cubshq.com":[["acs","document.getElementById","JSON"]],"culturedvultures.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cumception.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"curto.win":[["aopr","app_vars.force_disable_adblock"],["aeld","click","trigger"]],"cutdl.xyz":[["aopr","app_vars.force_disable_adblock"],["set","blurred","false"]],"cx30talk.com":[["rmnt","script","html-load.com"]],"cyprus.co.il":[["noeval-if","/chp_?ad/"]],"dailyjobposting.xyz":[["no-xhr-if","method:HEAD"],["aost","fetch","http"],["set","Element.prototype.closest","falseFunc"],["aeld","click","rel"],["set","document.hidden","false"]],"dakotaforumz.com":[["rmnt","script","html-load.com"]],"danishealthyeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dayspedia.com":[["rmnt","script","html-load.com"]],"debsdailydish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dehydratorliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deliciouslyorganic.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desertislanddishes.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diabetesselfmanagement.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dieself150forum.com":[["rmnt","script","html-load.com"]],"digitalcitizen.life":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dignityobituary.com":[["noeval-if","/chp_?ad/"]],"dipsnp.com":[["rmnt","script","antiAdBlockerHandler"]],"dlupload.com":[["nowoif"]],"dogfoodsmart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dogforums.com":[["rmnt","script","html-load.com"]],"dogtrainingadvicetips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"domahatv.com":[["acs","document.querySelectorAll","popMagic"]],"downev.com":[["no-fetch-if","googlesyndication"]],"downloads.sayrodigital.net":[["noeval-if","/chp_?ad/"]],"dronexl.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"duellinksmeta.com":[["noeval"]],"dzapk.com":[["nowoif","_blank"],["rmnt","script","/offsetHeight|popup/i"]],"earnbee.xyz":[["aopr","open"]],"easyweeknightrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"eatatmaudes.com":[["rmnt","script","/__adblocker|html-load/"]],"ebc.com.br":[["set","executaGoogleAnalytics3","noopFunc"]],"ebooksite.org":[["aopr","open"]],"ecacsports.com":[["set","blockAdBlock","trueFunc"]],"ecosportownersclub.co.uk":[["rmnt","script","html-load.com"]],"edmontonjournal.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"electro-torrent.pl":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"emmacruises.com":[["rmnt","script","/__adblocker|html-load/"]],"employmentlawhandbook.com":[["rmnt","script","/__adblocker|html-load/"]],"enoki.nz":[["rmnt","script","/__adblocker|html-load/"]],"epainfo.pl":[["acs","document.addEventListener","adsBlocked"]],"epochtimes.de":[["nostif",".call(null)","10"]],"eslfast.com":[["nostif","warning","100"]],"eurasiareview.com":[["rmnt","script","/__adblocker|html-load/"]],"everyeye.it":[["nostif","adb"]],"excelchamps.com":[["rmnt","script","/__adblocker|html-load/"]],"exclusiveasianporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"exe.app":[["aopr","app_vars.force_disable_adblock"],["nowoif"],["set","blurred","false"],["aopr","adBlockDetected"],["no-fetch-if","google"],["acs","JSON.parse","break;case $."]],"expectdynm.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"familyspice.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"familytreemagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"farescd.com":[["no-xhr-if","php"]],"fbstream.is":[["rmnt","script","/delete window|popundersPerIP|var FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["aopr","aclib"]],"fc2stream.tv":[["aopr","__Y"],["acs","document.createElement","window.open"]],"fcsnew.net":[["rmnt","script","adsBlocked"]],"fdlreporter.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"fermentingforfoodies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fetishburg.com":[["aopr","document.dispatchEvent"],["acs","document.querySelectorAll","popMagic"]],"fightinghawks.com":[["set","blockAdBlock","trueFunc"]],"filesq.net":[["nowoif","_blank"]],"filmibeat.com":[["set","detectAdBlock","noopFunc"]],"financebolo.com":[["nano-sib","timer","*","0.001"],["nowoif"]],"finclub.in":[["noeval-if","/chp_?ad/"]],"firstdown.studio":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"flight-report.com":[["aeld","load","/AdBlock/i"]],"flixhd.cc":[["acs","EventTarget.prototype.addEventListener","delete window"]],"fmembed.cc":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"fmodpro.com":[["rmnt","script","/onerror|offsetHeight|no-store/"]],"foodess.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodstruct.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodxor.com":[["no-fetch-if","googlesyndication"]],"footprinthero.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fourchette-et-bikini.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"fpo.xxx":[["set","flashvars.adv_pause_html",""],["set","flashvars.adv_pre_src",""]],"free-famous-toons.com":[["acs","document.createElement","script"]],"free-trannyporn.com":[["acs","document.querySelectorAll","popMagic"]],"freevpshere.com":[["set","adblockstatus","false"],["nowoif"]],"freshscat.com":[["acs","document.querySelectorAll","popMagic"]],"frustfrei-lernen.de":[["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"frvr.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fuck-beeg.com":[["aopr","popit"],["aeld","popstate","noPop"]],"fwmadebycarli.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"gameclubz.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gamekult.com":[["aopr","SmartWallSDK"],["nostif","displayCookieWallBanner"]],"games.abqjournal.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.sixtyandme.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.thestate.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gamingfora.com":[["rmnt","script","html-load.com"]],"gamingvital.com":[["acs","decodeURIComponent","ai_"]],"gastongazette.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"gaypornmasters.com":[["aost","String.prototype.charCodeAt","ai_"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"gaypornwave.com":[["aost","String.prototype.charCodeAt","ai_"],["aopr","ExoLoader"],["aopr","_pop"]],"gazzetta.gr":[["set","Adman","{}"]],"geiriadur.ac.uk":[["set","fingerprint","{}"],["set","get_fingerprint","noopFunc"]],"gemiadamlari.org":[["noeval-if","/chp_?ad/"]],"getdatgadget.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"gifhorner-rundschau.de":[["nostif",".call(null)","10"]],"giftofhospitality.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"giuseppegravante.com":[["noeval-if","/chp_?ad/"]],"glamournglow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"glaowners.com":[["rmnt","script","html-load.com"]],"global-view.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"glueandglitter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gobigtitsporn.com":[["aopr","Aloader.serve"],["noeval"]],"godownsize.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goku.sx":[["rmnt","script",";}}};break;case $."],["acs","EventTarget.prototype.addEventListener","delete window"]],"golfdigest.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["nofab"]],"goodnewsnetwork.org":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"gosexy.mobi":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"grabpussy.com":[["aopr","AaDetector"]],"grafikos.cz":[["noeval-if","/chp_?ad/"]],"growingdawn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"haddoz.net":[["set","adBlockDetected","noopFunc"]],"handylittleme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardcorelesbian.xyz":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"harzkurier.de":[["nostif",".call(null)","10"]],"hauntforum.com":[["rmnt","script","html-load.com"]],"hax.co.id":[["no-fetch-if","googlesyndication"]],"hbnews24.com":[["noeval-if","/chp_?ad/"]],"hbomax.com":[["json-prune","adtech-brightline adtech-google-pal adtech-iab-om"]],"hbrfrance.fr":[["nostif","checkPub","6000"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"hentaigo.com":[["aopr","loadTool"],["aopr","r3H4"]],"hentaipornpics.net":[["acs","$","zendplace"],["aeld","mouseover","event.triggered"]],"hentaisexuality.com":[["aopr","popit"],["aeld","popstate","noPop"]],"hideandseek.world":[["set","canRunAds","true"]],"history.com":[["no-xhr-if","time-events"],["set","phxSiteConfig.gallery.ads.interstitialFrequency","emptyObj"],["rc","has-ad-top|has-ad-right",".m-gallery-overlay.has-ad-top.has-ad-right"]],"holidaycalendar.io":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homebrewtalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemadeheather.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeschool.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homesoftherich.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hometheaterreview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homeworthy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"honestcooking.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"honeyname.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hopepaste.download":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"hornyfap.tv":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"horseforum.com":[["rmnt","script","html-load.com"]],"hotcleaner.com":[["aopr","Element.prototype.attachShadow"]],"huskercorner.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"hypershort.com":[["aeld","click","adForm"],["aeld","","history.go"]],"iheartcraftythings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ikream.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"illicoporno.com":[["set","is_adblocked","false"]],"ilmessaggero.it":[["set","jwDefaults.advertising","{}"]],"imagetotext.info":[["set","detectadsbocker","false"]],"impalaforums.com":[["rmnt","script","html-load.com"]],"individualogist.com":[["noeval-if","/chp_?ad/"]],"inmatefindcalifornia.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"inmatesearchidaho.com":[["aeld","load","abDetectorPro"],["no-xhr-if","googlesyndication"]],"inside-handy.de":[["nostif",".call(null)","10"]],"integral-calculator.com":[["aopr","fallbackAds"]],"investorveda.com":[["aopr","document.onmousedown"],["nano-sib","count","*","0.001"]],"invoice-generator.com":[["rmnt","script","html-load.com"]],"iphonechecker.herokuapp.com":[["no-fetch-if","method:HEAD"]],"iphoneographytalk.com":[["rmnt","script","html-load.com"]],"iplark.com":[["aeld","DOMContentLoaded","adClosedTimestamp"]],"isbn.co.in":[["aopw","ai_front"]],"isgfrm.com":[["acs","document.createElement",".offsetHeight"],["rmnt","script","/adbl|RegExp/i"]],"itslivb.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"jacquieetmichel.net":[["set","is_adblocked","false"],["rmnt","script","popUnderUrl"],["ra","data-popunder-url"]],"jav.direct":[["acs","WebAssembly","atob"],["aeld","load","puTSstrpcht"]],"javboys.com":[["acs","WebAssembly","atob"],["aopr","popns"]],"javhahaha.us":[["aopr","__Y"]],"jaysndees.com":[["nosiif","visibility","1000"],["nofab"]],"jenismac.com":[["rmnt","script","/eval.*RegExp/"]],"jizzbunker.com":[["aopw","spot"],["aopr","XMLHttpRequest"],["aopr","Notification"]],"jorpetz.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"joyfulmommaskitchen.com":[["rmnt","script","/__adblocker|html-load/"]],"jpg2.su":[["acs","document.querySelectorAll","popMagic"]],"jxoplay.xyz":[["acs","EventTarget.prototype.addEventListener","delete window"]],"kashtanka2.com":[["aopr","exoJsPop101"]],"katheats.com":[["rmnt","script","/__adblocker|html-load/"]],"kboards.com":[["rmnt","script","html-load.com"]],"keepv.id":[["acs","JSON.parse","break;case $."],["nowoif"]],"keepvid.pw":[["nowoif"]],"kelseysfoodreviews.com":[["rmnt","script","/__adblocker|html-load/"]],"keytomylime.com":[["rmnt","script","/__adblocker|html-load/"]],"khon2.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kimscravings.com":[["rmnt","script","/__adblocker|html-load/"]],"kisscos.net":[["acs","document.createElement","l.parentNode.insertBefore(s"],["acs","addEventListener","-0x"]],"kitchenseer.com":[["rmnt","script","/__adblocker|html-load/"]],"kitchenswagger.com":[["rmnt","script","/__adblocker|html-load/"]],"kreisbote.de":[["nostif",".call(null)","10"]],"ksusports.com":[["set","blockAdBlock","trueFunc"]],"ktmduke390forum.com":[["rmnt","script","html-load.com"]],"kuponigo.com":[["rmnt","script","window.location.replace"]],"kutubistan.blogspot.com":[["acs","addEventListener","blocker"]],"kyoteibiyori.com":[["rmnt","script","html-load.com"]],"lancashirelife.co.uk":[["set","adLight","true"]],"laposte.net":[["rmnt","script","html-load.com"],["acs","document.createElement","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="]],"largescaleforums.com":[["rmnt","script","/__adblocker|html-load/"],["nostif",").show()"]],"law101.org.za":[["noeval-if","/chp_?ad/"]],"lawweekcolorado.com":[["noeval-if","/chp_?ad/"]],"layitlow.com":[["rmnt","script","html-load.com"]],"laylita.com":[["rmnt","script","/__adblocker|html-load/"]],"leftinknots.com":[["rmnt","script","/__adblocker|html-load/"]],"lehighvalleylive.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"levismodding.co.uk":[["noeval-if","/chp_?ad/"]],"lexusfforum.com":[["rmnt","script","html-load.com"]],"librasol.com.br":[["noeval-if","/chp_?ad/"]],"lifeandstylemag.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"lifeasastrawberry.com":[["rmnt","script","/__adblocker|html-load/"]],"linfoweb.com":[["acs","Math.floor","document.write"]],"link.codevn.net":[["set","blurred","false"]],"linkbin.me":[["aopr","Object.prototype.loadCosplay"],["aopr","Object.prototype.loadImages"]],"linkfinal.com":[["set","blurred","false"]],"linuxexplain.com":[["noeval-if","/chp_?ad/"]],"littlehouseoffour.com":[["rmnt","script","/__adblocker|html-load/"]],"livingathome.de":[["aopr","_sp_._networkListenerData"]],"lmld.org":[["rmnt","script","/__adblocker|html-load/"]],"lnk.lt":[["aeld","error","/^function\\([a-z]\\)\\{[a-z]\\([a-z]\\)\\}$|!1/"],["no-fetch-if","adsbygoogle"]],"longbeachstate.com":[["set","blockAdBlock","trueFunc"]],"lootlemon.com":[["rmnt","script","()=>eval"]],"lovefilipinofood.com":[["rmnt","script","/__adblocker|html-load/"]],"loveinmyoven.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"lovelifeyarn.com":[["rmnt","script","/__adblocker|html-load/"]],"loveyourcat.com":[["rmnt","script","/__adblocker|html-load/"]],"low-riders.com":[["rmnt","script","html-load.com"]],"lowcarbsimplified.com":[["rmnt","script","/__adblocker|html-load/"]],"lucrebem.com.br":[["noeval-if","/chp_?ad/"]],"luluvido.com":[["nowoif"],["rmnt","script","/HTMLAllCollection|popundersPerIP|referrerPolicy|WebAssembly/"],["acs","WebAssembly","Promise"],["acs","document.write","unescape"],["rmnt","script","/detect/i"]],"lumberjocks.com":[["rmnt","script","html-load.com"]],"lustholic.com":[["acs","parseInt","break;case $."]],"maidenhead-advertiser.co.uk":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"majikichi.com":[["rmnt","script","html-load.com"]],"makeitdairyfree.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mamalovesfood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"manchesterworld.uk":[["rmnt","script","await eval"]],"mandatory.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"mangakakalot.gg":[["acs","WebAssembly","atob"],["nowoif"]],"mangalek.com":[["acs","String.fromCharCode","decodeURIComponent"]],"manganato.gg":[["acs","WebAssembly","atob"],["nowoif"]],"mangaraw1001.cc":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"mapcrunch.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"masonfit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"matchbuilt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"math-forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mathepower.com":[["nostif",".call(null)","10"]],"mathsspot.com":[["no-fetch-if","googlesyndication"]],"maturewomenfucks.com":[["noeval"],["aopr","Aloader.serve"]],"mealprepmanual.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mech9.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mechanicbase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"megapornfreehd.com":[["aopr","V4ss"],["acs","document.querySelectorAll","popMagic"]],"meilleurpronostic.fr":[["rmnt","script","/==undefined.*body/"]],"mein-mmo.de":[["nostif",".call(null)","10"]],"meineorte.com":[["nostif",".call(null)"]],"mercedesmedic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"meta-chart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mgoblue.com":[["set","blockAdBlock","trueFunc"]],"milehighhappyhour.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mimaletamusical.blogspot.com":[["nowebrtc"],["aeld","load","2000"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"minecraftbuildinginc.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"minoomakesstuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"missinthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mjandhungryman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mlbstream.tv":[["acs","decodeURI","decodeURIComponent"]],"mmacore.tv":[["rmnt","script","/adb/i"]],"moddedmustangs.com":[["rmnt","script","html-load.com"]],"modularfords.com":[["rmnt","script","html-load.com"]],"mongri.net":[["aopw","adBlockDetected"]],"more.tv":[["set","blockedElement","noopFunc"]],"movie-locations.com":[["rmnt","script","html-load.com"]],"muchfap.com":[["acs","document.querySelectorAll","popMagic"]],"mxpacgroup.com":[["noeval-if","/chp_?ad/"]],"mycaliforniatravels.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mydesibaba.com":[["acs","document.querySelectorAll","popMagic"]],"mywordgames.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"nakiny.com":[["aopr","adsBlocked"],["aopr","b2a"]],"natashashome.com":[["rmnt","script","/__adblocker|html-load/"]],"natomanga.com":[["acs","WebAssembly","atob"],["nowoif"]],"naturalbeachliving.com":[["rmnt","script","/__adblocker|html-load/"]],"naughtymachinima.com":[["acs","__htapop"],["aopr","loadTool"],["nowoif"]],"nbc.com":[["json-prune","avails"]],"neatpornodot.com":[["noeval"],["aopr","Aloader.serve"]],"neilpatel.com":[["no-xhr-if","/googletagmanager|ip-api/"]],"neopets.com":[["noeval-if","page-kit.io"],["rmnt","script","window.__as_"]],"newsletter.co.uk":[["rmnt","script","await eval"]],"newsmondo.it":[["acs","document.getElementById","detect"]],"newtahoeyukon.com":[["rmnt","script","html-load.com"]],"newtiburon.com":[["rmnt","script","html-load.com"]],"nobakerecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"norwichbulletin.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"notesbythalia.com":[["rmnt","script","/__adblocker|html-load/"]],"noteshacker.com":[["noeval-if","/chp_?ad/"]],"nouvelobs.com":[["rmnt","script","html-load.com"]],"novamovie.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON.parse","break;case $."]],"nrz.de":[["nostif",".call(null)","10"]],"nsfwgify.com":[["acs","document.querySelectorAll","popMagic"]],"nudecelebforum.com":[["aopr","__ads"],["noeval"],["nostif","document.querySelectorAll","1000"]],"nwahomepage.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"nwfdailynews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"o2tvseries.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["set-cookie","downloadbypass","1"]],"oakridger.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"oggi.it":[["aeld","adb"],["set","google.ima.OmidVerificationVendor","{}"],["set","Object.prototype.omidAccessModeRules","{}"]],"oggitreviso.it":[["nostif","Delay"]],"ohhappyday.com":[["rmnt","script","/__adblocker|html-load/"]],"ohjav.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"oimsmosy.fun":[["nowoif"],["acs","Math","localStorage['\\x"]],"oldhousesunder100k.com":[["rmnt","script","/__adblocker|html-load/"]],"olutposti.fi":[["aeld","scroll","innerHeight"]],"onlinemictest.com":[["rmnt","script","/__adblocker|html-load/"]],"onlygators.com":[["rmnt","script","/__adblocker|html-load/"]],"opereviews.com":[["rmnt","script","/__adblocker|html-load/"]],"orchidbliss.com":[["rmnt","script","/__adblocker|html-load/"]],"organismes.org":[["aost","String.prototype.charCodeAt","ai_"]],"organizingmoms.com":[["rmnt","script","/__adblocker|html-load/"]],"ourglobetrotters.com":[["rmnt","script","/__adblocker|html-load/"]],"ournourishingtable.com":[["rmnt","script","/__adblocker|html-load/"]],"ovagames.com":[["acs","JSON","_0x"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"p2pplay.pro":[["json-prune","ads playerAds"]],"pacersports.com":[["set","blockAdBlock","trueFunc"]],"paintballforum.com":[["rmnt","script","html-load.com"]],"paleorunningmomma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"paviseforum.com":[["rmnt","script","html-load.com"]],"pcgeeks-games.com":[["rmnt","script","adb"]],"personalityclub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pestleanalysis.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["set","blockAdBlock._options.baitClass","null"]],"petalrepublic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"phonefirmware.com":[["noeval-if","/chp_?ad/"]],"photooxy.com":[["acs","$","blockAdBlock"]],"pianodreamers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pickleballertalk.com":[["rmnt","script","html-load.com"]],"pickledplum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pig-fuck.com":[["aopr","popit"],["aeld","popstate","noPop"]],"piloncilloyvainilla.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pirateblue.com":[["set","blockAdBlock","trueFunc"]],"play.nova.bg":[["no-xhr-if","/googlesyndication|googima\\.js|imasdk/"],["no-fetch-if","/googlesyndication|googima\\.js|imasdk/"]],"play.starsites.fun":[["no-fetch-if","googlesyndication"]],"player.rtl2.de":[["set","getHomadConfig","noopFunc"]],"player.xxxbestsites.com":[["aopr","BetterJsPop"]],"playsexgames.xxx":[["acs","bannersRequest"]],"plotek.pl":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/:\\[?window,/"]],"policesecurity.com":[["nosiif","EFFECTIVE_APPS_GCB_BLOCKED_MESSAGE"]],"polkadotchair.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pornachi.com":[["acs","document.querySelectorAll","popMagic"]],"pornanimetube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"porndig.com":[["set","Object.prototype.AdOverlay","noopFunc"],["set","tkn_popunder","null"]],"porngames.club":[["set","starPop","1"]],"pornodavid.com":[["aeld","getexoloader"],["nostif","appendChild"],["aopr","open"]],"porntin.com":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"portstmaartenwebcam.com":[["nostif","innerHTML"]],"posturedirect.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"powforums.com":[["set","adsBlocked","false"],["nowoif"],["no-xhr-if","googlesyndication"]],"preschoolplayandlearn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"prod-tv.wp.pl":[["set-local-storage-item","WPadbd","$remove$"]],"prohockeyhistory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"promimedien.com":[["noeval-if","/chp_?ad/"]],"pythonguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"quizz.biz":[["no-xhr-if","method:HEAD"]],"rabbitandwolves.com":[["rmnt","script","/__adblocker|html-load/"]],"radio-ecuador.org":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radio-thai.com":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radioitalylive.com":[["aopr","adp"]],"radiomalaysia.org":[["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/\\)\\.join\\(String\\.fromCharCode|html-load\\.com/"]],"radiosymphony.com":[["aopr","adp"]],"railwebcams.net":[["noeval-if","/chp_?ad/"]],"ranker.com":[["aopr","googletag"],["aeld","/admiral/"],["set","runtimeConfig.AM_PATH","undefined"],["rmnt","script","/__adblocker|html-load/"],["aopr","__eiPb"],["nostif","detect"],["aeld","scroll","()&&"],["set","Object.prototype.adBlockerPop","undefined"],["set","admiral","undefined"]],"ranking.net":[["rmnt","script","html-load.com"]],"rav4resource.com":[["rmnt","script","/__adblocker|html-load/"]],"recipesforholidays.com":[["rmnt","script","/__adblocker|html-load/"]],"redsexhub.com":[["aopr","popit"],["aeld","popstate","noPop"]],"reenactingschedule.org":[["rmnt","script","/__adblocker|html-load/"]],"repeatcrafterme.com":[["rmnt","script","/__adblocker|html-load/"]],"reviveusa.com":[["rmnt","script","/==undefined.*body/"]],"rgj.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"richardalois.com":[["rmnt","script","/__adblocker|html-load/"]],"romanticlesbian.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"rootedrevival.com":[["rmnt","script","/__adblocker|html-load/"]],"rotowire.com":[["rmnt","script","()=>eval"]],"rule34h.com":[["acs","document.querySelectorAll","popMagic"]],"rupertisdivingintoocean.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"russland.jetzt":[["nostif","displayMessage"]],"saekita.com":[["noeval-if","/chp_?ad/"]],"safego.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"saltbuttersmoke.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"samash.com":[["acs","document.getElementById","for-variations"]],"samsungmagazine.eu":[["rmnt","script","html-load.com"]],"savvymamalifestyle.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scatfap.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"scheckeats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scoutevforum.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["rmnt","script","/:window,|\\)\\.join\\(String\\.fromCharCode/"]],"screenidle.app":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"seeitworks.com":[["acs","document.getElementById","adblock"]],"seexh.com":[["set-cookie","ts_popunder","true","","reload","1"],["aeld","click","[native code]","elements",".main-wrap"],["acs","document.createElement","window.ts"],["rmnt","script","bannerRight"],["remove-cookie","video_view_count"]],"sexmadeathome.com":[["aopr","document.dispatchEvent"]],"sexyscope.net":[["set","adList","[]"]],"sharphindi.in":[["noeval-if","/chp_?ad/"]],"sheamateur.com":[["aopr","__htapop"]],"sheeshfans.com":[["acs","document.querySelectorAll","popMagic"]],"sholah.net":[["nostif","keep-ads","2000"]],"shorteet.com":[["set","blurred","false"],["set","open","undefined"]],"shortenlinks.top":[["acs","document.documentElement","break;case $."]],"shotkit.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"simplecopycatrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sipandfeast.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sitetorrent.com":[["aeld","","break;case $."],["aopr","open"]],"skinnysouthernrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"skiptomylou.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slateauto.forum":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smallseotools.ai":[["noeval-if","/chp_?ad/"]],"smartschoolhouse.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sms-ol.com":[["rmnt","script",".showModal()"]],"smumustangs.com":[["set","blockAdBlock","trueFunc"]],"snapinsta.to":[["rmnt","style",".modal-content"]],"snapwordz.com":[["rmnt","script","/adblock/i"],["no-fetch-if","googlesyndication"]],"sniperforums.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"snowboardhow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"snowmobilehow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"softdevelopp.com":[["noeval-if","Adblock"]],"somuchlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southernladymagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southhemitv.com":[["rmnt","script","html-load.com"]],"southwestfarmer.co.uk":[["set","adLight","true"]],"space.tribuntekno.com":[["aopw","adBlockDetected"]],"sparktalk.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"spguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sportanalytic.com":[["nostif","error-report.com"]],"sportsdark.com":[["acs","eval","replace"]],"sportsnest.co":[["aopr","Adcash"]],"star-telegram.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"starnewsonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"stepbystepbusiness.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"storage.googleapiscdn.com":[["json-prune","pauseAd"],["rmnt","script","/\\\\x|-a0|bait/"],["aeld","DOMContentLoaded","_0x"]],"stream.googleapiscdn.com":[["json-prune","pauseAd"],["rmnt","script","/\\\\x|-a0|bait/"],["aeld","DOMContentLoaded","_0x"]],"streamruby.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","wpadmngr.com"],["set","cRAds","false"],["aopw","showADBOverlay"],["acs","WebAssembly","atob"]],"strengthandsunshine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sugarfreelondoner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sunkissedkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sunnydayfamily.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"superapk.org":[["aopr","open"]],"sutekinakijo.com":[["rmnt","script","html-load.com"]],"svadore.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"svethardware.cz":[["set","rabLimit","-1"]],"sweetkitchencravings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sweetlycakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"swoonhub.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sztucznainteligencjablog.pl":[["noeval-if","/chp_?ad/"]],"taikoboards.com":[["rmnt","script","html-load.com"]],"takeayard.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tamarindoyam.com":[["nostif","show"]],"tamilanzone.com":[["noeval-if","/chp_?ad/"]],"tdalabamamag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"techmuzz.com":[["nosiif","adblocker"]],"teenextrem.com":[["aopr","popit"],["aeld","popstate","noPop"]],"temptalia.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tempumail.com":[["nostif","detector"]],"teralink.me":[["json-prune","web_share_ads_adsterra_config wap_short_link_middle_page_ad wap_short_link_middle_page_show_time data.ads_cpm_info"],["nano-stb","value","*"],["nano-sib","clearInterval","*"]],"teslaownersonline.com":[["rmnt","script","html-load.com"]],"texas4x4.org":[["rmnt","script","html-load.com"]],"th-world.com":[["nostif","nextFunction","250"]],"thapcam.net":[["nostif","modal"]],"thatvideogameblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theatretrip.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebensonstreet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebudgetsavvybride.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thebussybandit.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"thecandidcooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecookingcollective.com.au":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecozyfork.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefamousbirthdays.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefinancebuff.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thehappycatsite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelinuxcode.com":[["set-cookie","pum-32600","true"],["set-cookie","pum-44957","true"]],"thelittlepine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themagicalslowcooker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themakerista.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themarysue.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"themomfriend.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"themw.com":[["set","blockAdBlock","trueFunc"]],"thepeasantsdaughter.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thepuppymag.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thesimplycraftedlife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thestonesoup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thetastytravelers.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewestonmercury.co.uk":[["set","adLight","true"]],"theworldofarchitecture.com":[["rmnt","script","html-load.com"]],"thisisourbliss.com":[["acs","Date","='\\x"],["acs","document.head.appendChild","='\\x"],["aopr","__eiPb"]],"thrivinghomeblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tiervermittlung.de":[["nostif",".call(null)","10"]],"tiffanymccauley.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timelessmyths.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"timescall.com":[["set","CnnXt.Event.fire","noopFunc"]],"timesreporter.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"timmaybealready.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"tips-and-tricks.co":[["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"],["rmnt","script","await eval"]],"tiscali.cz":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"titfuckvideos.com":[["noeval-if","/chp_?ad/"]],"tlin.me":[["acs","JSON.parse","break;case $."],["set","blurred","false"]],"tonuriaz.info":[["no-fetch-if","/\\?abg=|adsbygoogle|tpc\\.googlesyndication\\.com|doubleclick\\.net|googleadservices\\.com/"]],"topairfryerrecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"towsontigers.com":[["set","blockAdBlock","trueFunc"]],"traderie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tranny6.com":[["acs","document.querySelectorAll","popMagic"]],"transgirlslive.com":[["noeval-if","/chp_?ad/"]],"traumporno.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"trekbible.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trgtkls.org":[["noeval-if","/chp_?ad/"]],"trilog3.net":[["noeval-if","/chp_?ad/"]],"tun.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"turbo1.co":[["nostif","getComputedStyle","250"]],"tutorialesdecalidad.com":[["noeval-if","/chp_?ad/"]],"twistmepretty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tyda.se":[["rmnt","script","html-load.com"]],"tysonsreporter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ufreegames.com":[["nano-sib"]],"ufret.jp":[["rmnt","script","html-load.com"]],"uiporn.com":[["aopr","document.dispatchEvent"]],"unity3diy.blogspot.com":[["nosiif","visibility","1000"]],"unlvrebels.com":[["set","blockAdBlock","trueFunc"]],"uns.bio":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["nowoif"]],"unscramblerer.com":[["rmnt","script","/__adblocker|html-load/"]],"upcyclemystuff.com":[["rmnt","script","/__adblocker|html-load/"]],"upfilesgo.com":[["aeld","DOMContentLoaded","history.go"],["aeld","click","shouldOpenPopUp"],["set","blurred","false"],["aeld","/blur|focus/"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"uploads.mobi":[["acs","parseInt","break;case $."]],"urbantastebud.com":[["rmnt","script","/__adblocker|html-load/"]],"urlaubspartner.net":[["set","adblock","false"]],"usinger-anzeiger.de":[["nostif",".call(null)","10"]],"variety.com":[["rmnt","script","admbenefits"],["aopr","pmc_admanager.show_interrupt_ads"],["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"vcp.xxx":[["acs","document.querySelectorAll","popMagic"]],"verhentai.top":[["acs","document.querySelectorAll","popMagic"]],"veryfreeporn.com":[["rmnt","script","popMagic"],["aopr","Object"],["nowoif"]],"vickypham.com":[["rmnt","script","/__adblocker|html-load/"]],"videocelts.com":[["rmnt","script","html-load.com"]],"vijviral.com":[["nostif","/window\\.location\\.href|n/","8000"]],"vikingf1le.us.to":[["aeld","DOMContentLoaded","history.go"],["nowoif","_blank"],["nowoif","zigi_tag_id"],["aopr","atob"]],"viralxvideos.es":[["acs","document.querySelectorAll","popMagic"]],"voyagekc.com":[["rmnt","script","/__adblocker|html-load/"]],"voyeurpornsex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"vozer.vn":[["acs","document.addEventListener","Popunder"]],"w4hd.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"wallpapers.com":[["rmnt","script","html-load.com"]],"walterprettytheir.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"wannafreeporn.com":[["acs","document.querySelectorAll","popMagic"],["aeld","","pop"]],"watch.plex.tv":[["no-fetch-if","doubleclick.com","","opaque"]],"waupacanow.com":[["rmnt","script","/__adblocker|html-load/"]],"wbschemenews.com":[["set","count","0"]],"wbtw.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"webcamrips.to":[["rmnt","script","adserverDomain"]],"websitesball.com":[["no-fetch-if","googlesyndication"]],"wellplated.com":[["rmnt","script","/__adblocker|html-load/"]],"welovedoodles.com":[["rmnt","script","/__adblocker|html-load/"]],"wethearmed.com":[["rmnt","script","html-load.com"]],"whatisareverseauction.com":[["nano-stb","download","1100"]],"wheatbythewayside.com":[["rmnt","script","/__adblocker|html-load/"]],"whiskeyriff.com":[["rmnt","script","/__adblocker|html-load/"]],"whittierdailynews.com":[["set","CnnXt.Event.fire","noopFunc"]],"whnt.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"wholelottayum.com":[["rmnt","script","/__adblocker|html-load/"]],"wholevideos.com":[["aopr","document.dispatchEvent"]],"wideopencountry.com":[["rmnt","script","/__adblocker|html-load/"]],"wildwap.com":[["acs","Math","break;case $."]],"wiltshiretimes.co.uk":[["set","adLight","true"]],"wimbledonguardian.co.uk":[["set","adLight","true"]],"witneygazette.co.uk":[["set","adLight","true"]],"wiwo.de":[["set","AdController","noopFunc"]],"wordcollectanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"wordsaladanswers.com":[["rmnt","script","/__adblocker|html-load/"]],"www.amazon.de":[["json-prune","cuepointPlaylist vodPlaybackUrls.result.playbackUrls.cuepoints vodPlaylistedPlaybackUrls.result.playbackUrls.pauseBehavior vodPlaylistedPlaybackUrls.result.playbackUrls.pauseAdsResolution vodPlaylistedPlaybackUrls.result.playbackUrls.intraTitlePlaylist.[-].shouldShowOnScrubBar ads"]],"xbaaz.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["aost","clearTimeout","/\\b[a-z] inlineScript:/"]],"xfeed.com":[["set","Object.prototype.loadHillTopBanner","noopFunc"],["nowoif","_blank"]],"xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com":[["noeval-if","/chp_?ad/"]],"xprivo.com":[["json-prune","sponsored_ads"]],"xr1200ownersgroup.com":[["rmnt","script","html-load.com"]],"xxxanimevideos.com":[["aopr","popit"],["aeld","popstate","noPop"]],"yaycoloringpages.com":[["rmnt","script","/__adblocker|html-load/"]],"yellowbrickhome.com":[["rmnt","script","/__adblocker|html-load/"]],"yeswegays.com":[["nowoif"]],"yourcountdown.to":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"yourdesignmagazine.com":[["noeval-if","/chp_?ad/"]],"yourguidesabroad.com":[["rmnt","script","/__adblocker|html-load/"]],"youshort.me":[["aopr","open"]],"ytconverter.app":[["acs","parseInt","break;case $."]],"ytmp3cc.net":[["acs","parseInt","break;case $."]],"zazzybabes.com":[["aeld","/error|canplay/","(t)"],["aopr","loadTool"]],"zentralplus.ch":[["nofab"]],"zerion.cc":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"zeroglutenguide.com":[["rmnt","script","/__adblocker|html-load/"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
