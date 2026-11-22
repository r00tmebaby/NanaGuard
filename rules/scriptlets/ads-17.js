/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"00m.in":[["nano-sib","show","1000","0.001"]],"10tv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"180sx.club":[["rmnt","script","/__adblocker|html-load/"]],"1bit.space":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","u_cfg"]],"1stream.eu":[["rmnt","script","adserverDomain"],["nowoif"]],"2chblog.jp":[["rmnt","script","html-load.com"]],"2rdroid.com":[["nostif","keep-ads","2000"]],"2the.space":[["noeval-if","/chp_?ad/"]],"3minx.com":[["rmnt","script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"]],"4edtcixl.xyz":[["nowoif"]],"4shared.com":[["nosiif",".append","1000"],["acs","Math","zfgloaded"]],"4spaces.org":[["noeval-if","/chp_?ad/"]],"5moviess.com":[["acs","document.documentElement","break;case $."]],"8-ball-magic.com":[["acs","Math","break;case $."]],"acdriftingpro.com":[["nostif","native"],["nano-sib","countdown","*","0.001"]],"acedarspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acharmingescape.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"acrylgiessen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"adelaidepawnbroker.com":[["set","page_params.holiday_promo","true"]],"adisann.com":[["noeval-if","/chp_?ad/"]],"advertape.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/WebAssembly|forceunder/"],["nosiif","adblock"],["nowoif"],["aopr","Adcash"],["nano-stb","counter"]],"africatwinforum.com":[["rmnt","script","html-load.com"]],"againstallgrain.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"agirlandagluegun.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"airfried.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ak47sports.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"akaihentai.com":[["rmnt","script","popMagic"]],"alicedias.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"allsalonprices.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"alphapolis.co.jp":[["aeld","blur","event.simulate"]],"amarillo.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"anakteknik.co.id":[["no-fetch-if","adsbygoogle"]],"anightowlblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"animeidhentai.com":[["acs","document.querySelectorAll","popMagic"]],"animeshqip.site":[["rmnt","script","popundersPerIP"]],"animetsu.net":[["rmnt","script","navigator?.brave"]],"antaraownersclub.com":[["rmnt","script","html-load.com"]],"anytimesbook.com":[["rmnt","script",".offsetWidth"]],"arbitrarydecisions.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["nostif","readyWait"],["nowoif"]],"architecturaldigest.com":[["nofab"]],"arezzonotizie.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"arizonagunowners.com":[["rmnt","script","html-load.com"]],"arlinadzgn.com":[["aopw","hidekeep"]],"arolinks.com":[["nostif","location.href"],["set","blurred","false"]],"artandthekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"artsandclassy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ashadeofteal.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"asianfucktube.com":[["aopr","popit"],["aeld","popstate","noPop"]],"asianimage.co.uk":[["set","adLight","true"]],"aslobcomesclean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"audiotruyenfull.com":[["nowoif"]],"backforseconds.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakeatmidnite.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakedlean.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakeplaysmile.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakinghow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bakingupmemories.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"baramjak.com":[["acs","JSON.parse","break;case $."]],"basic-mathematics.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"battleboats.io":[["nofab"],["set","adBlocker","false"]],"battlecreekenquirer.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"bearfoottheory.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"befa.lt":[["rmnt","script","html-load.com"]],"beingpatient.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bengalxpress.in":[["noeval-if","/chp_?ad/"]],"berklee.edu":[["aeld","scroll","undefined"]],"bestofmachinery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bif24.pl":[["noeval-if","/chp_?ad/"]],"blizzboygames.net":[["nowebrtc"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"blog.40ch.net":[["acs","document.addEventListener","nextFunction"]],"blogofdoom.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluecinetech.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bluetraxx.com":[["rmnt","script","html-load.com"]],"boobsrealm.com":[["aopr","initPu"],["acs","puShown","/doOpen|popundr/"]],"boomlify.com":[["set-local-storage-item","boomlify-banner-store","$remove$"]],"boraboraphotos.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"boyfuck.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["noeval-if","/chp_?ad/"],["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"braflix.tube":[["acs","EventTarget.prototype.addEventListener","delete window"]],"brainzaps.tv":[["nowoif","_blank"]],"breakingbourbon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brian70.tw":[["noeval-if","/chp_?ad/"]],"britneybreaksbread.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bromabakery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"brother-usa.com":[["set","utag","{}"],["set","utag.link","noopFunc"]],"bugswave.com":[["noeval-if","/chp_?ad/"]],"buildingelements.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"burlingtonfreepress.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"busycooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"bypass.city":[["aopr","Adcash"]],"caitlin.top":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"cambreabakes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"camsstream.com":[["acs","onload","open"]],"camwhores.tv":[["nostif","innerText","2000"]],"caracol.com.co":[["no-fetch-if","googlesyndication"],["set","DTM.trackAsyncPV","noopFunc"]],"catholic.com":[["nostif","innerHTML.replace"]],"cavsnation.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cbr500riders.com":[["rmnt","script","html-load.com"]],"cellocentral.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cempakajaya.com":[["aeld","load","htmls"],["set","document.hasFocus","trueFunc"],["no-fetch-if","/adoto|\\/ads\\/js/"],["rmnt","script","htmls"]],"ceylonssh.com":[["acs","$","adsbygoogle"]],"charactercounter.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"chevybolt.org":[["rmnt","script","html-load.com"]],"ciaochowbambina.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cinemablend.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"ciproud.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"citefast.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cjonline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"cleangreensimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleanmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleantheair.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cleveland.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"clix4btc.com":[["set","adblock","false"]],"club386.com":[["set","td_ad_background_click_link"]],"codare.fun":[["acs","document.addEventListener","google_ad_client"]],"comfortablefood.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"comousarzararadio.blogspot.com":[["aopr","adBlockDetected"]],"compromath.com":[["no-fetch-if","ads"]],"configspc.com":[["set","jsUnda","noopFunc"]],"cookingwithkarli.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cornwalllive.com":[["rmnt","script","nowprocket","excludes","self.__next"]],"corrector.app":[["aost","Object.getPrototypeOf","plugins"]],"cozypeachkitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crackevil.com":[["acs","JSON.parse","break;case $."],["acs","mMcreateCookie"]],"craftinessisnotoptional.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cravingsomecreativity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crisanimex.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"crocotube.com":[["set","vastEnabled","false"]],"crosswordjam.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"crxcommunity.com":[["rmnt","script","html-load.com"]],"cryptonetos.ru":[["acs","onload","adblock"]],"crystaldigest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cuevana.is":[["nowoif"]],"cuevana3.fan":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"culinaryshades.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cults3d.com":[["acs","document.createElement","/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/i"]],"cupfulofkale.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"cutlink.net":[["set","blurred","false"],["aeld","DOMContentLoaded","history.go"],["nostif","offsetHeight"],["aopr","app_vars.please_disable_adblock"],["no-fetch-if","/scorecardresearch\\.com|outbrain\\.com|taboola\\.com|criteo\\.net|rubiconproject\\.com|adform\\.net|casalemedia\\.com|adservice\\.google\\.com|adsboosters\\.xyz|cleverwebserver\\.com|orbsdiacle\\.com|vaudona\\.com/","","{\"type\": \"opaque\"}"]],"cx5forum.com":[["rmnt","script","html-load.com"]],"cybertrucktalk.com":[["rmnt","script","html-load.com"]],"cyndispivey.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"daigasikfaan.co":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dailyamerican.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"dashofting.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"datanodes.to":[["ra","disabled",".downloadbtn"],["aeld","click","pop"],["acs","String.fromCharCode","atob"],["aeld","click","appendChild"],["rmnt","script","/\\\\x|_blank/"]],"daytonscw.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"decomaniacos.es":[["acs","addEventListener","google_ad_client"]],"delicioustable.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"delmarvanow.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"delvein.tech":[["noeval-if","/chp_?ad/"]],"derrickriches.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"desicinema.se":[["aopr","aclib"]],"desivdo.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"detroitjockcity.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"detroitsportsforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"deutschepornos.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"devotedgrandma.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"devour.asia":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"diavel-forum.com":[["rmnt","script","html-load.com"]],"dickclark.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"digitask.ru":[["nostif","offsetHeight","200"]],"dirtytamil.com":[["acs","document.querySelectorAll","popMagic"]],"diversanews.com":[["noeval-if","/chp_?ad/"]],"dixiedelightsonline.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dixva.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"dlpanda.com":[["aeld","load","XMLHttpRequest"]],"dnj.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"doctorsofrunning.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"dolldivine.com":[["rmnt","script","adrecover.com"]],"doorblog.jp":[["rmnt","script","html-load.com"]],"doply.net":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"download.yasir252.com":[["nowoif","/go/out"]],"downloader.is":[["noeval-if","/chp_?ad/"]],"dreamspiritual.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drumstrive.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"drywalltalk.com":[["rmnt","script","html-load.com"]],"ds.163.com":[["set","Sentry","{}"],["set","Sentry.init","noopFunc"],["set","Sentry.configureScope","noopFunc"]],"dumfriesandgallowaylife.co.uk":[["set","adLight","true"]],"dutchmenowners.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"earthsky.org":[["rmnt","script","/__adblocker|html-load/"]],"eastbaytimes.com":[["set","CnnXt.Event.fire","noopFunc"]],"easttennesseefishing.com":[["rmnt","script","html-load.com"]],"easyfamilyrecipes.com":[["rmnt","script","/__adblocker|html-load/"]],"eatthegains.com":[["rmnt","script","/__adblocker|html-load/"]],"edukaroo.com":[["nano-sib","count","*","0.001"]],"electricmommy.com":[["rmnt","script","/__adblocker|html-load/"]],"electrikjam.com":[["rmnt","script","/__adblocker|html-load/"]],"emudesk.com":[["no-fetch-if","method:HEAD"]],"emuenzen.de":[["rmnt","script","replace"],["nostif","prompt","1000"]],"enfieldindependent.co.uk":[["set","adLight","true"]],"engineerboards.com":[["rmnt","script","/__adblocker|html-load/"]],"eroticmv.com":[["acs","document.querySelectorAll","popMagic"]],"esprinterforum.com":[["rmnt","script","html-load.com"]],"etonline.com":[["aopr","_sp_._networkListenerData"],["set","canRunAds","true"]],"everia.club":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aeld","","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s","/^data:/"]],"exploreessaouira.com":[["rmnt","script","/__adblocker|html-load/"]],"expres.cz":[["rmnt","script","pingUrl"],["aeld","/click|mouse/","/scoreUrl|pingUrl/"]],"fairyanime.com":[["nano-sib"]],"familie.de":[["nostif",".call(null)","10"]],"fantasiku.com":[["nowoif","_blank"]],"fapfapgames.com":[["noeval-if","/chp_?ad/"]],"fapptime.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"faps.club":[["acs","onload","open"]],"farmingbase.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fastdownload.top":[["acs","EventTarget.prototype.addEventListener","delete window"]],"faucetbravo.fun":[["aopr","adsBlocked"]],"fautsy.com":[["nano-sib","seconds"]],"fc.lc":[["acs","document.addEventListener","nextFunction"],["aopr","adBlockDetected"],["aopr","app_vars.force_disable_adblock"],["noeval"],["set","blurred","false"],["nowoif","/^/","1"],["rmnt","script","/DName|#iframe_id|AdscoreSignatureLoaded/"]],"feedmephoebe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"feelingfoodish.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"file.gocmod.com":[["aeld","blur"]],"filesharing.io":[["aopw","showMsgAb"]],"filmnudes.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"films5k.com":[["aopr","__Y"],["acs","globalThis","break;case"]],"filmy4waps.org":[["nowoif"],["rmnt","script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"]],"firstasianpussy.com":[["aopr","popit"],["aeld","popstate","noPop"]],"flixindia.xyz":[["rmnt","script","window.location"]],"fluentin3months.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"foodfolksandfun.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"footwearnews.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script",").join(String.fromCharCode"]],"footymercato.com":[["noeval-if","/chp_?ad/"]],"fooxybabes.com":[["aopr","loadTool"]],"fordinsidenews.com":[["rmnt","script","html-load.com"]],"forexforum.co":[["acs","$",".test"]],"forogore.com":[["acs","document.addEventListener","google_ad_client"]],"freegamescasual.com":[["nostif","adblock_popup","500"]],"freegetcoins.com":[["noeval-if","/chp_?ad/"]],"freemcserver.net":[["rmnt","script","await eval"],["rmnt","script","window,void 0"],["rmnt","script","html-load.com"]],"freeomovie.info":[["aopr","exoNoExternalUI38djdkjDDJsio96"],["nowoif"]],"freeserverhostingweb.club":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","document.onmousedown"]],"freewp.io":[["no-xhr-if","/^/"]],"freiepresse.de":[["set","UhasAB","false"]],"freshbeanbakery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"fuckmilf.net":[["acs","document.querySelectorAll","popMagic"]],"fuckundies.com":[["aopr","popit"],["aeld","popstate","noPop"],["acs","puShown","/doOpen|popundr/"]],"funcrot.net":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"fztvseries.live":[["ra","onclick","[onclick*=\"window.open\"]","stay"]],"games.crosswordgiant.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.modbee.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"games.thestar.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"gaminginfos.com":[["rmnt","script","/userAgent|adb|htmls/"],["aopr","document.write"]],"gardening-forums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gats.io":[["nosiif","0x"]],"gelbooru.com":[["acs","document.querySelectorAll","popMagic"],["acs","WebAssembly","atob"]],"generatorgrid.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"genesisevforum.com":[["rmnt","script","html-load.com"]],"geogridgame.com":[["rmnt","script","html-load.com"]],"germancarforum.com":[["rmnt","script","adsbygoogle"]],"germanshepherds.com":[["rmnt","script","html-load.com"]],"get-to.link":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","exoJsPop101"],["aopr","document.dispatchEvent"],["nowoif"]],"ghettopearls.com":[["acs","document.querySelectorAll","popMagic"]],"gisvacancy.com":[["noeval-if","/chp_?ad/"]],"gitnux.org":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"globaldjmix.com":[["aeld","/DOMContentLoaded|load/","y.readyState"]],"gmanga.me":[["aeld","","break;case $."]],"goblackbears.com":[["set","blockAdBlock","trueFunc"]],"gocards.com":[["set","blockAdBlock","trueFunc"]],"goldengracekitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"goldrefiningforum.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"gopack.com":[["set","blockAdBlock","trueFunc"]],"gostanford.com":[["set","blockAdBlock","trueFunc"]],"grandhighlanderforum.com":[["rmnt","script","html-load.com"]],"grandmatube.pro":[["noeval"],["aopr","Aloader.serve"]],"grannyfucko.com":[["noeval"],["aopr","Aloader.serve"]],"grid.id":[["acs","Math","\\x"]],"griffinathletics.com":[["set","blockAdBlock","trueFunc"]],"grimsbytelegraph.co.uk":[["rmnt","script","nowprocket","excludes","self.__next"]],"gt350.org":[["rmnt","script","html-load.com"]],"gta-xtreme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"guessthe.game":[["no-fetch-if","pub.network"]],"hallo-muenchen.de":[["nostif",".call(null)","10"]],"happy-mothering.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hardcoregamer.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"hardcorehd.xxx":[["aopr","document.dispatchEvent"]],"hardwareluxx.de":[["nostif",".call(null)","10"]],"harrowtimes.co.uk":[["set","adLight","true"]],"hdvideo9.com":[["nowoif"]],"headbangerskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"headlinepolitics.com":[["aopw","_sp_"]],"healthfirstweb.com":[["set","timeSec","0"],["nano-stb","getlink","*","0.001"],["noeval-if","replace"]],"healthyhappysmart.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"healthykitchen101.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"heimporno.com":[["set","dclm_ajax_var.disclaimer_redirect_url",""]],"hentaila.com":[["acs","document.querySelectorAll","popMagic"]],"hentaitube.online":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["aopr","checkCookieClick"]],"hentaizm.fun":[["acs","parseInt","break;case $."]],"hifiplus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hiphopa.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["acs","JSON","break;case"],["rmnt","script","FingerprintJS"],["noeval-if","/chp_?ad/"]],"hollywoodlife.com":[["rmnt","script","/\\(async\\s*\\(\\)\\s*=>\\s*\\{\\s*try\\s*\\{\\s*(const|var)/"],["set","Object.prototype.enableInterstitial","false"]],"homefortheharvest.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"homemadeandyummy.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hortonanderfarom.blogspot.com":[["nostif","pop"]],"hotovs.com":[["set","page_params.holiday_promo","true"]],"hotstunners.com":[["aopr","ExoLoader.addZone"],["aopr","loadTool"],["aopr","exoNoExternalUI38djdkjDDJsio96"]],"housedpet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"housefur.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"humanbenchmark.com":[["set","pubg.unload","noopFunc"]],"humorliving.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"hungryrunnergirl.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"huskers.com":[["set","blockAdBlock","trueFunc"]],"hwzone.co.il":[["nostif","site-access-popup"]],"hyderone.com":[["noeval-if","/chp_?ad/"]],"hypebeast.com":[["nostif","ad-block-popup"]],"i-bits.io":[["nano-sib","seconds"]],"ibcomputing.com":[["nostif","Adblocker","10000"]],"idontknowwhatiknow.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ikonforum.com":[["rmnt","script","html-load.com"]],"imagetranslator.io":[["no-fetch-if","googlesyndication"]],"inbloombakery.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"indiafree.net":[["aopr","popit"],["aeld","popstate","noPop"]],"indywithkids.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ingyenszexvideok.hu":[["acs","document.querySelectorAll","popMagic"]],"inquiringchef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"instantcloud.site":[["nowoif"]],"intro-hd.net":[["rmnt","script","/adbl/i"],["noeval-if","/chp_?ad/"],["no-fetch-if","/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["no-xhr-if","googlesyndication"]],"iowagirleats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"iphoneincanada.ca":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"],["rmnt","script","adblockerDisabled","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ipswichstar.co.uk":[["set","adLight","true"]],"ironwinter6m.shop":[["nano-sib","countDown"]],"isabeleats.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"isminiunuttum.com":[["acs","document.getElementById","block"]],"janellerohner.com":[["rmnt","script","/__adblocker|html-load/"]],"japannihon.com":[["noeval-if","/chp_?ad/"]],"javbangers.com":[["acs","document.addEventListener","initBCPopunder"],["acs","readCookieDelit"],["acs","onload","puHref"],["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_postpause_vast",""]],"jayscentre.com":[["rmnt","script","/__adblocker|html-load/"]],"jconline.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"jcutrer.com":[["noeval-if","/chp_?ad/"]],"jeanetteshealthyliving.com":[["rmnt","script","/__adblocker|html-load/"]],"jessicaclearout.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"jikayosha.jp":[["rmnt","script","html-load.com"]],"jobsibe.com":[["noeval-if","/chp_?ad/"]],"jobzhub.store":[["aeld","/visibilitychange|blur/"],["aeld","blur","stopCountdown"],["rmnt","script","close-modal"],["noeval-if","ppuQnty"]],"jocjapantravel.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/"]],"journalduweb.org":[["nostif","bait"]],"juba-get.com":[["aopr","detectAdBlock"]],"jujustu-kaisen.com":[["acs","document.querySelectorAll","popMagic"]],"jukeforums.com":[["rmnt","script","html-load.com"]],"justembeds.xyz":[["nowoif"]],"justinesnacks.com":[["rmnt","script","/__adblocker|html-load/"]],"justinweather.com":[["rmnt","script","/__adblocker|html-load/"]],"k-statesports.org":[["set","blockAdBlock","trueFunc"]],"k20a.org":[["rmnt","script","html-load.com"]],"kaas.ro":[["aopr","aclib"],["aopr","Adcash"]],"kabeleins.de":[["nostif",".call(null)","10"]],"kaido.to":[["rmnt","script",";}}};break;case $."],["acs","document.documentElement","break;case $."]],"kamababa.desi":[["rmnt","script","navigator.userAgent"]],"kangkimin.com":[["nofab"],["nano-sib"]],"keyakizaka46matomemory.net":[["rmnt","script","html-load.com"]],"khoaiphim.com":[["rmnt","script","end_click"]],"kicaunews.com":[["aopw","adBlockDetected"]],"kickasssubtitles.com":[["rmnt","script","overflow = 'hidden'"]],"kicker.de":[["json-prune","enabled","force_disabled"],["nostif",".call(null)","10"],["set","ov.advertising.tisoomi.loadScript","noopFunc"],["set","initializeslideshow","noopFunc"]],"kiddingaroundcharlotte.com":[["rmnt","script","/__adblocker|html-load/"]],"kidgredients.com.au":[["rmnt","script","/__adblocker|html-load/"]],"kiiitv.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"kiplinger.com":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"kitchenwhisperers.com":[["rmnt","script","/__adblocker|html-load/"]],"kitizawa.com":[["rmnt","script","html-load.com"]],"kitraskimisi.com":[["nowoif"]],"knifeinformer.com":[["rmnt","script","/__adblocker|html-load/"]],"koamnewsnow.com":[["rmnt","script","adblockerDisabled","excludes",",\\\""]],"kob.com":[["rmnt","script","/__adblocker|html-load/"]],"kompoz2.com":[["aopr","exoJsPop101"]],"koora.vip":[["acs","document.documentElement","break;case $."]],"kshowsubindo.org":[["acs","document.onclick","popunder"]],"ktm1090forum.net":[["rmnt","script","html-load.com"]],"lachainemeteo.com":[["nostif",".call(null)","10"]],"laopinioncoruna.es":[["set","pr_okvalida","true"],["nostif","sub"]],"largefamilytable.com":[["rmnt","script","/__adblocker|html-load/"]],"lauterbacher-anzeiger.de":[["nostif",".call(null)","10"]],"lawnsite.com":[["rmnt","script","html-load.com"]],"leaderconnectingleaders.com":[["rmnt","script","/__adblocker|html-load/"]],"leanproteinqueen.com":[["rmnt","script","/__adblocker|html-load/"]],"learnmetrics.com":[["rmnt","script","/__adblocker|html-load/"]],"leet365.cc":[["acs","JSON.parse","break;case $."],["acs","parseInt","break;case $."]],"legendaryrttextures.com":[["noeval-if","/chp_?ad/"]],"legionpeliculas.org":[["nano-sib","","","0.02"],["set","t","0"]],"lep.co.uk":[["rmnt","script","await eval"]],"lesoir.be":[["nostif","adb"]],"letocard.fr":[["rmnt","script","/==undefined.*body/"]],"liblo.jp":[["rmnt","script","html-load.com"]],"lifemeasure.com":[["rmnt","script","/__adblocker|html-load/"]],"liftbigeatbig.com":[["rmnt","script","/__adblocker|html-load/"]],"likewhereyouregoing.com":[["rmnt","script","/__adblocker|html-load/"]],"linclik.com":[["set","blurred","false"],["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"lincolnevforum.com":[["rmnt","script","html-load.com"]],"linegee.net":[["nowoif"],["rmnt","script","documentElement"]],"link-to.net":[["aeld","load","nextFunction"],["nano-sib"]],"listeamed.net":[["nostif","afterOpen"],["nowoif","!/d/"],["json-prune","AffiliateAdBlock"],["set","PlayerConfig.config.CustomAdSetting","[]"]],"littlehealthybites.com":[["rmnt","script","/__adblocker|html-load/"]],"live7v.com":[["acs","JSON.parse","break;case $."]],"locurainformaticadigital.com":[["noeval-if","/chp_?ad/"]],"london-now.co.uk":[["set","adLight","true"]],"luxurydreamhomes.net":[["aopw","adBlockDetected"]],"m.akkxs.net":[["acs","eval","_0x"]],"m.timesofindia.com":[["nostif","adb"]],"macheclub.com":[["rmnt","script","html-load.com"]],"machow2.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"madewithlau.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"magazinelib.com":[["rmnt","script","guard"]],"magicalclan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"magnet-fishing.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"magnumforumz.com":[["rmnt","script","html-load.com"]],"makefunprintables.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mangarawad.fit":[["acs","document.createElement","l.parentNode.insertBefore(s"]],"marineinsight.com":[["rmnt","script","html-load.com"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mascac.org":[["set","blockAdBlock","trueFunc"]],"mathgeekmama.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mathsstudio.com":[["no-fetch-if","googlesyndication"]],"mauiinvitational.com":[["set","blockAdBlock","trueFunc"]],"medscape.com":[["set","slideShow.displayInterstitial","true"]],"megacanais.com":[["aopr","Adcash"]],"merkmal-biz.jp":[["rmnt","script",").join(String.fromCharCode"]],"miiixdrop.net":[["acs","addEventListener","adserverDomain"]],"mikaylaarealike.com":[["nowoif"],["set","console.clear","undefined"],["acs","globalThis","break;case"],["acs","WebAssembly","atob"]],"militarybases.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"millennialships.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miniaturehorsetalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"miniminiplus.pl":[["json-prune","ads.servers.[].apiAddress"]],"mirlandraskitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momables.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mommyshorts.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"momo-net.com":[["aeld","contextmenu"],["aopr","document.body.appendChild"]],"momontimeout.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"motorsportjobs.com":[["rmnt","script",".cmd.unshift","excludes",",\\\""],["rmnt","script","html-load.com"]],"mountainbike-magazin.de":[["nostif",".call(null)","10"]],"moviepilot.de":[["nano-stb","_0x","*"],["no-xhr-if","doubleclick"],["rmnt","script","Promise"],["nostif",".call(null)","10"],["rmnt","script","DisplayAcceptableAdIfAdblocked"]],"mozkra.com":[["acs","Math","break;case $."]],"mpnnow.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"mrandmrshowe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mx5life.com":[["rmnt","script","html-load.com"]],"mybakingaddiction.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mydaddy.cc":[["set","adt","0"]],"mydominicankitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"myplantbasedplan.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mysexgamer.com":[["nostif","/out.php"]],"mytastycurry.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"mythologysource.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"natalie.mu":[["rmnt","script","html-load.com"]],"nazarickol.com":[["aeld","","break;case $."],["set","console.clear","undefined"],["ra","style","#over"],["nowoif","/^/","1"]],"nbabite.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"ncgunowners.com":[["rmnt","script","html-load.com"]],"nelliebellie.com":[["rmnt","script","/__adblocker|html-load/"]],"neonmag.fr":[["aopr","_sp_._networkListenerData"]],"netplayz.ru":[["set-cookie","pop","1"],["nowoif","_blank"]],"nettiauto.com":[["set","listingGoogleEETracking","noopFunc"]],"newschief.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"nikkeifutures.org":[["acs","jQuery","No"]],"nissankicksforum.com":[["rmnt","script","html-load.com"]],"nknews.jp":[["noeval-if","/chp_?ad/"]],"nmac.to":[["acs","EventTarget.prototype.addEventListener","delete window"]],"noorderland.nl":[["rmnt","script","html-load.com"]],"noracooks.com":[["rmnt","script","/__adblocker|html-load/"]],"northamptonchron.co.uk":[["rmnt","script","await eval"]],"notunmovie.link":[["nowoif"]],"nutritionistreviews.com":[["rmnt","script","/__adblocker|html-load/"]],"nytcrossword.org":[["rmnt","script","/__adblocker|html-load/"]],"ofeminin.pl":[["rmnt","script","__adblocker","excludes","self.__next"]],"ohmymag.com":[["nostif","checkPub","6000"]],"omuzaani.me":[["rmnt","script","adserverDomain","excludes","debugger"],["no-fetch-if","summerday","length:10","{\"type\":\"cors\"}"]],"oneotv.com":[["acs","document.addEventListener","google_ad_client"]],"onlineporn24.com":[["acs","document.querySelectorAll","popMagic"],["acs","decodeURI","decodeURIComponent"]],"onscreens.me":[["acs","document.querySelectorAll","popMagic"],["aopr","asgPopScript"],["aopr","doSecondPop"],["aopr","BetterJsPop"]],"optimizepics.com":[["acs","document.documentElement","break;case $."]],"organized31.com":[["rmnt","script","/__adblocker|html-load/"]],"osmanonline.co.uk":[["acs","$","modal-window"]],"oumaga-times.com":[["rmnt","script","html-load.com"]],"overwatchporn.xxx":[["aopw","__aaZoneid"],["rmnt","script","popMagic"]],"padovaoggi.it":[["nostif","bADBlock"],["rmnt","script","__unfair"]],"paidshitforfree.com":[["rmnt","script",";}}};break;case $."]],"pandadoc.com":[["rmnt","script","adBlockEnabled"]],"papunika.com":[["nostif","ai_"]],"pdfstandards.net":[["noeval-if","/chp_?ad/"]],"penaltyfile.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"personefamose.it":[["noeval-if","/chp_?ad/"]],"petdogowner.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"petitrobert.fr":[["rmnt","script","html-load.com"]],"phimando.com":[["acs","addEventListener","HTMLAllCollection"]],"phinphanatic.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"phlebotomyexaminer.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pictoa.com":[["acs","document.querySelectorAll","popMagic"],["aeld","getexoloader"],["aeld","","0x"],["aopw","tiPopAction"]],"picturethemagic.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pimylifeup.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"],["aopr","adthrive.config"],["no-fetch-if","marmalade"]],"pipeburn.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pjstar.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"pkbiosfix.com":[["nostif","show"],["rmnt","script","AdBlock"]],"platingsandpairings.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"playdoughtoplato.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"player.gayfor.us":[["nowoif"]],"playideas.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"pocketchangegourmet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"podjav.tv":[["rmnt","script","wpadmngr.com"]],"porconocer.com":[["acs","document.getElementById","onscroll"]],"porndude.tv":[["acs","document.querySelectorAll","popMagic"]],"pornfactors.com":[["acs","jQuery","popunder"]],"pornomico.com":[["aeld","getexoloader"],["aopr","addElementToBody"],["popads-dummy"],["aopr","decodeURI"]],"porntrex.video":[["acs","document.querySelectorAll","popMagic"]],"preludepower.com":[["rmnt","script","html-load.com"]],"premid.app":[["nosiif","innerHTML"],["nano-sib","clearInterval"]],"prettymyparty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"primeanimesex.com":[["aopr","popit"],["aeld","popstate","noPop"]],"prologuetalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"promo-visits.site":[["set","blurred","false"],["nowoif"],["ra","disabled",".btn-primary"]],"proteinsnackqueen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ptcgpocket.gg":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"purelyceleb.com":[["aopr","_wm"]],"purposegames.com":[["nostif","googletag"]],"puzzles.sunjournal.com":[["set","__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["nano-sib","generalTimeLeft","*","0.001"]],"pythonmatplotlibtips.blogspot.com":[["acs","addEventListener","nextFunction"]],"q3ownersclub.co.uk":[["rmnt","script","html-load.com"]],"radiantlydressed.com":[["rmnt","script","/__adblocker|html-load/"]],"radiolovelive.com":[["aopr","adp"]],"realfoodwithsarah.com":[["rmnt","script","/__adblocker|html-load/"]],"realfreelancer.com":[["noeval-if","/chp_?ad/"]],"rebeccaandtheworld.com":[["rmnt","script","/__adblocker|html-load/"]],"recosoku.com":[["rmnt","script","html-load.com"]],"redditchadvertiser.co.uk":[["set","adLight","true"]],"redwap3.com":[["aeld","click","popMagic"]],"regalforums.com":[["rmnt","script","html-load.com"]],"reidoscanais.life":[["rmnt","script","adserverDomain"]],"rekogap.xyz":[["set","blurred","false"]],"rerev.com":[["rmnt","script","/__adblocker|html-load/"]],"retrievertraining.net":[["rmnt","script","html-load.com"]],"rib.net":[["rmnt","script","/__adblocker|html-load/"]],"richmondspiders.com":[["set","blockAdBlock","trueFunc"]],"riedberg.tv":[["acs","EventTarget.prototype.addEventListener","delete window"]],"ritzysex.com":[["aopr","ExoLoader.serve"]],"roadbikereview.com":[["rmnt","script","html-load.com"]],"roadtripalberta.com":[["rmnt","script","/__adblocker|html-load/"]],"roamingwithkids.com":[["rmnt","script","/__adblocker|html-load/"]],"romsite.org":[["aopr","open"]],"rootsandradishes.com":[["rmnt","script","/__adblocker|html-load/"]],"rpginformer.com":[["rmnt","script","/__adblocker|html-load/"]],"samoaobserver.ws":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sanluisobispo.com":[["rmnt","script","[]).push(arguments)","excludes","/,\\\\\"|self\\.__next|pageProps/"]],"sanspo.com":[["rmnt","script","html-load.com"]],"sarahjoyblog.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sarahtitus.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"savevideo.me":[["acs","$","banner"]],"sbchill.com":[["aopr","__Y"],["aopr","mm"]],"schooltravelorganiser.com":[["nostif","adblock"]],"scienceofpeople.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"scopateitaliane.it":[["aopr","document.dispatchEvent"]],"semihomemaderecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sendspace.com":[["aopr","runad"]],"seniorgolfsource.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"serienstream.to":[["acs","parseInt","break;case $."]],"setsuyakutoushi.com":[["noeval-if","/chp_?ad/"]],"sex-babki.com":[["acs","document.querySelectorAll","popMagic"]],"sexavgo.com":[["acs","decodeURI","decodeURIComponent"]],"sfat4582testa.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"shadesofsummr.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"share.hntv.tv":[["set","sensorsDataAnalytic201505","{}"],["set","sensorsDataAnalytic201505.init","noopFunc"],["set","sensorsDataAnalytic201505.quick","noopFunc"],["set","sensorsDataAnalytic201505.track","noopFunc"]],"sheaffertoldmeto.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sideplusleaks.com":[["noeval-if","adb"]],"silveradocheyenne.org":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"simplegreensmoothies.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sixmanfootball.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sleepbubble.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"slippertalk.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smartringnews.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"smokingmeatforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"soap2day-online.com":[["acs","document.documentElement","break;case $."]],"soapsindepth.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"socks24.org":[["aeld","load","onload"]],"somulhergostosa.com":[["acs","document.querySelectorAll","popMagic"]],"soulfoodcooking101.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"southernmadesimple.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sport-97.com":[["noeval-if","/chp_?ad/"]],"sportbikeworld.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"sprinklesomesugar.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"sreality.cz":[["rmnt","script","/adBottomWrap|doubleclick/"],["aopr","shaman"]],"sssam.com":[["set","ads","true"]],"stacysrandomthoughts.com":[["rmnt","script","`/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\"","\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(|[\"']_aQS0\\w+[\"']|decodeURI\\(decodeURI\\(\"|<a href=\"https:\\/\\/getad%|\"cmp\\.updated\"/`"]],"starwarsforum.co.uk":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"statsalt.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steamclouds.online":[["rmnt","script","'hidden'"]],"stemandspoon.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"stephaniessweets.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"steyrclub.com":[["rmnt","script","html-load.com"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"]],"stockhideout.com":[["nosiif","daadb"]],"stormininnorman.com":[["rmnt","script","\"data-sdk\""],["nostif","[native code]","500"]],"storynavigation.com":[["acs","EventTarget.prototype.addEventListener","delete window"]],"stre4mpay.one":[["nowoif"],["aopr","puOverlay"]],"stream.nbcsports.com":[["set","adBlockEnabled","false"]],"suamusica.com.br":[["set","gtag","noopFunc"],["set","_taboola","{}"],["set","_taboola.push","noopFunc"]],"sulocale.sulopachinews.com":[["aopr","adsBlocked"]],"sustainablereview.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"svetatnazdraveto.bg":[["no-xhr-if","googlesyndication"],["no-fetch-if","googlesyndication"],["no-fetch-if","imasdk"]],"svetserialu.to":[["nowoif"]],"svgandme.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"svz.de":[["nostif",".call(null)","10"]],"sweetpotatosoul.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"symbolsandsynchronicity.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tagblatt.ch":[["nostif","adblock","5"]],"talkcockatiels.com":[["rmnt","script","html-load.com"]],"tamilultratv.co.in":[["noeval-if","/chp_?ad/"]],"tcheats.com":[["aopr","checkAds"]],"teatimemagazine.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tech4auto.in":[["noeval-if","/chp_?ad/"]],"techoreview.com":[["noeval-if","/chp_?ad/"]],"techradar.com":[["aopr","_sp_._networkListenerData"],["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/html-load\\.com|:\\[?window,/"]],"techtobo.com":[["acs","$","ads"]],"techyorker.com":[["rmnt","script","isWindows"]],"tempodeconhecer.blogs.sapo.pt":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"terianncarty.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"testlanguages.com":[["set","sgpbCanRunAds","true"]],"thaicaliente.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thaript.com":[["noeval-if","/chp_?ad/"]],"the-travel-life.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"the36thavenue.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theboltonnews.co.uk":[["set","adLight","true"]],"thebudgetbabe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecandidly.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecozyapron.com":[["acs","btoa","BOOTLOADER_LOADED"],["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thecut.com":[["aeld","/touchstart|mousedown|click/","latest"]],"thedigitalcrowns.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thefoodieblogger.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegirlinspired.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegraydetails.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thegrowthop.com":[["rmnt","script","/admiral|adblockerDisabled/i","excludes","/,\\\\\"|self\\.__next|pageProps/"],["rmnt","script","/HTMLIFrameElement|JSON\\[|_contentWindow/","excludes","self.__next"],["nostif","getComputedStyle"],["rmnt","script","/\\(\\)=>eval|html-load\\.com|await eval|:window/"],["set","Object.prototype.adService.initialize","noopFunc"]],"theherta.com":[["no-fetch-if","ads-prebid"],["set","HTMLScriptElement.prototype.onerror","undefined"]],"thehumbledhomemaker.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thelesbianporn.com":[["acs","document.querySelectorAll","popMagic"]],"theletteredcottage.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thenightowlchef.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theonion.com":[["set","ga","noopFunc"],["nano-stb","b()","3000"],["nano-stb","ads","*"]],"theorie-musik.de":[["aost","String.prototype.charCodeAt","ai_"]],"thequeenzone.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therapyfunzone.net":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"therichest.com":[["set","Object.prototype.ads.nopreroll_","true"],["no-fetch-if","googlesyndication"]],"thermomixdivarecipes.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theseoldcookbooks.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theslimmingfoodie.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thewoksoflife.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"theworkathomewoman.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thichcode.net":[["set","detectAdBlock","noopFunc"]],"thishealthykitchen.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"thoroughlytravel.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"threezly.com":[["acs","decodeURIComponent","ai_"]],"thriftynomads.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tieulam.info":[["no-fetch-if","adsbygoogle","war:googlesyndication_adsbygoogle.js"]],"tobys.dk":[["aopr","checkAds"]],"tojimangas.com":[["no-fetch-if","/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["no-xhr-if","/googlesyndication|doubleclick/","length:10"]],"tomtomforums.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"toorco.com":[["noeval-if","/chp_?ad/"]],"topjav.tv":[["acs","document.querySelectorAll","popMagic"]],"topshare.in":[["noeval-if","/chp_?ad/"]],"totalmaturefuck.com":[["aopr","popit"],["aeld","popstate","noPop"]],"tractorbynet.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"trailmanorowners.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tralhasvarias.blogspot.com":[["nano-stb","decodeURL","*"],["nano-sib","updateProgress","*"]],"trashbytes.net":[["aeld","DOMContentLoaded","location.href"]],"treasuredtips.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tricountyindependent.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"triedandtruerecipe.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"tryhardguides.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"ttks.tw":[["acs","addEventListener","HTMLAllCollection"]],"ttsfree.com":[["acs","document.getElementById","adblock"]],"tubesafari.com":[["aopw","c325"]],"tubsxxx.com":[["nostif","window.location.href"]],"turbo.fr":[["ra","onerror","script[id][onerror]","asap","quitAfter","10"],["rmnt","script","/\\(\\)=>eval|&&window\\}/"]],"turkedebiyati.org":[["rmnt","script","/adbl/i"]],"tuscaloosanews.com":[["set","gnt.x.uam","undefined","runAt","interactive"]],"tutorialsduniya.com":[["noeval-if","/chp_?ad/"]],"tv-films.co.uk":[["nostif","AdBlocker"]],"tvfutbol.info":[["acs","document.documentElement","break;case $."]],"tvnet.lv":[["nostif","adblock"]],"tvnow247.top":[["set","aclib","trueFunc"]],"tvtv.ca":[["rmnt","script","()=>eval"],["rmnt","script","html-load.com"],["set","paAddUnit","noopFunc"]],"twincities.com":[["set","CnnXt.Event.fire","noopFunc"]],"twocupsflour.com":[["rmnt","script","/__adblocker|html-load/","excludes","self.__next"]],"unblockweb.me":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"uncovervietnam.com":[["rmnt","script","/__adblocker|html-load/"]],"unefemme.net":[["rmnt","script","/__adblocker|html-load/"]],"unscramble.me":[["rmnt","script","/__adblocker|html-load/"]],"user.guancha.cn":[["set","sensors","{}"],["set","sensors.init","noopFunc"]],"uupbom.com":[["acs","document.documentElement","break;case $."],["nowoif"]],"v2movies.me":[["nowoif"]],"vectorizer.io":[["nostif","modal"]],"veedi.com":[["set","adBlocker","false"]],"vegamoviese.blog":[["nowoif"]],"velostern.com":[["rmnt","script","html-load.com"]],"verkaufsoffener-sonntag.com":[["rmnt","script","html-load.com"]],"vidbeem.com":[["acs","JSON.parse","break;case $."]],"vidorg.net":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"vidply.com":[["acs","EventTarget.prototype.addEventListener","delete window"],["rmnt","script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["aopr","__aaZoneid"],["aopw","DoodPop"],["acs","decodeURI","decodeURIComponent"],["nowoif"]],"vikingforum.net":[["rmnt","script","html-load.com"]],"vip.de":[["nostif",".call(null)","10"]],"virtualdrumming.com":[["rmnt","script","/__adblocker|html-load/"]],"viveseries.com":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"]],"volconforum.com":[["rmnt","script","html-load.com"]],"voltupload.com":[["nano-stb","download","1000","0.001"]],"voronoiapp.com":[["rmnt","script","/__adblocker|html-load/"]],"wat32.tv":[["acs","JSON.parse","break;case $."]],"watchmalcolminthemiddle.com":[["nowoif"]],"wboy.com":[["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"weather.us":[["nostif",".call(null)","10"]],"weknowconquer.com":[["nostif","getComputedStyle"]],"welivedhappilyeverafter.com":[["rmnt","script","/__adblocker|html-load/"]],"werefarfromnormal.com":[["rmnt","script","/__adblocker|html-load/"]],"wethedryers.com":[["rmnt","script","/__adblocker|html-load/"]],"whatfontis.com":[["nostif","/adblock/i"]],"whiskaffair.com":[["rmnt","script","/__adblocker|html-load/"]],"wkyc.com":[["acs","btoa"],["rmnt","script","/admiral|\\[\\]\\)\\.push\\(arguments\\)/","excludes",",\\\""]],"woiden.com":[["acs","navigator","FingerprintJS"]],"wordhikehelp.com":[["rmnt","script","/__adblocker|html-load/"]],"wvusports.com":[["set","blockAdBlock","trueFunc"]],"www.amazon.co.uk":[["json-prune","cuepointPlaylist vodPlaybackUrls.result.playbackUrls.cuepoints vodPlaylistedPlaybackUrls.result.playbackUrls.pauseBehavior vodPlaylistedPlaybackUrls.result.playbackUrls.pauseAdsResolution vodPlaylistedPlaybackUrls.result.playbackUrls.intraTitlePlaylist.[-].shouldShowOnScrubBar ads"]],"www.seznam.cz":[["set","sssp","emptyObj"]],"wwwfotografgotlin.blogspot.com":[["set","fuckAdBlock._options.baitClass","null"]],"xblog.tv":[["rmnt","script","/h=decodeURIComponent|popundersPerIP/"],["rmnt","script","wpadmngr.com"]],"xcum.com":[["set","vastEnabled","false"]],"xdforum.com":[["rmnt","script","html-load.com"]],"xmegadrive.com":[["acs","document.querySelectorAll","popMagic"],["acs","document.createElement","l.parentNode.insertBefore(s"],["rmnt","script","wpadmngr.com"],["set","flashvars.adv_pause_html",""]],"xnxxhamster.net":[["acs","document.querySelectorAll","popMagic"]],"xoxobella.com":[["rmnt","script","/__adblocker|html-load/"]],"xrares.com":[["acs","decodeURI","decodeURIComponent"]],"xx.knit.bid":[["acs","document.querySelectorAll","popMagic"]],"xxxcomics.org":[["acs","document.querySelectorAll","popMagic"]],"xxxlargeporn.com":[["aopr","popit"],["aeld","popstate","noPop"]],"xxxxsx.com":[["remove-cookie"],["nostif","href"]],"yabiladi.com":[["set","adBlockDetected","null"]],"yaoiscan.com":[["acs","document.querySelectorAll","popMagic"]],"yify-subtitles.org":[["aopw","counter"]],"your-daily-girl.com":[["aopr","adtoniq"]],"youramateurtube.com":[["nowoif"]],"yourlifestylelibrary.com":[["rmnt","script","/__adblocker|html-load/"]],"yourlust.com":[["aopr","ExoLoader.serve"],["aeld","getexoloader"]],"yourporngod.com":[["acs","String.fromCharCode","shift"],["set","flashvars.adv_pre_vast",""],["set","flashvars.adv_pre_vast_alt",""]],"yunakhaber.com":[["noeval-if","/chp_?ad/"]],"zojav.com":[["aopr","__Y"]],"zovo.ink":[["set","blurred","false"]],"zx-10r.net":[["rmnt","script","html-load.com"]]},"off":{"uii.io":["[\"noeval\"]"],"titulky.com":["[\"set\",\"xmxalr\",\"\"]"],"idnes.cz":["[\"acs\",\"HTMLIFrameElement.prototype.contentWindow\"]"],"money.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.rekids\",\"undefined\"]","[\"set\",\"Object.prototype.gafSlot\",\"undefined\"]","[\"set\",\"Object.prototype.advViewability\",\"undefined\"]"],"kobieta.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gadzetomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"fotoblogia.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"komorkomania.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wiadomosci.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tech.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"dom.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"facet.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"film.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"finanse.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"gry.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"gwiazdy.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"ksiazki.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"kuchnia.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"moto.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"opinie.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"pogoda.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"teleshow.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"turystyka.wp.pl":["[\"nostif\",\"detected\",\"300\"]"],"wideo.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wawalove.wp.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"autokult.pl":["[\"nostif\",\"detected\",\"300\"]","[\"aost\",\"WP.prebid\",\"onLoad\"]"],"horoskop.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"tv.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"twojeip.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"sportowefakty.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"set\",\"Object.prototype.loadBunch\",\"noopFunc\"]","[\"aopr\",\"Object.prototype.bodyCode\"]"],"fitness.wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"wp.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]","[\"aopr\",\"WP.inline\"]","[\"nostif\",\"/getComputedStyle[\\\\s\\\\S]*?style\\\\.display=\\\"none\\\"[\\\\s\\\\S]*?styleBlocked[\\\\s\\\\S]*?detected/\"]"],"www.wp.pl":["[\"aopr\",\"__headpayload\"]","[\"aost\",\"WP\",\"r https\"]","[\"set\",\"WP.gaf.loadBunch\",\"noopFunc\"]"],"filmweb.pl":["[\"acs\",\"decodeURIComponent\",\"newAdblockBoardDisplayed\"]"],"linkneverdie.net":["[\"nostif\",\"t\"]"],"dziennik.pl":["[\"acs\",\"parseInt\",\"adblock\"]"],"gunauc.net":["[\"no-fetch-if\",\"pagead2.googlesyndication.com\"]"],"daddylive.link":["[\"aopr\",\"require\"]"],"player.pl":["[\"json-prune\",\"movie.advertising.ad_server\"]"],"jobzhub.store":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"fitdynamos.com":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"labgame.io":["[\"nano-sib\",\"tid\",\"*\",\"0.02\"]"],"sayphotobooth.com":["[\"nano-sib\",\"tp-time\",\"*\",\"0.001\"]"],"intercelestial.com":["[\"nano-stb\",\"\",\"*\",\"0.1\"]"],"socialxup.com":["[\"aeld\",\"click\",\"/\\\\[native code\\\\]|^\\\\s*e\\\\s*=>\\\\s*.+\\\\(\\\\s*e\\\\s*\\\\)\\\\s*$/\"]"],"dziennikbaltycki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dzienniklodzki.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikpolski24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"dziennikzachodni.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"echodnia.eu":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressbydgoski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"expressilustrowany.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetakrakowska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetalubuska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gazetawroclawska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gk24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gloswielkopolski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gol24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gp24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gra.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"gs24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"kurierlubelski.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"motofakty.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"naszemiasto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowiny24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nowosci.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"nto.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"polskatimes.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"pomorska.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"poranny.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"sportowy24.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefaagro.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"strefabiznesu.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"stronakobiet.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"telemagazyn.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"to.com.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"wspolczesna.pl":["[\"set\",\"pp_adblock_is_off\",\"trueFunc\"]"],"abczdrowie.pl":["[\"aost\",\"WP.prebid\",\"onLoad\"]"],"job.mt.de":["[\"nostif\",\".call(null)\",\"10\"]"],"job.nw.de":["[\"nostif\",\".call(null)\",\"10\"]"],"uqload.co":["[\"acs\",\"document.createElement\",\"break;case $.\"]"]}};
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
