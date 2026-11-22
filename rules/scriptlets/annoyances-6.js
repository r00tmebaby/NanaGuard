/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"116.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"178.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"1blu.de":[["set-cookie","cookieConfig","1"]],"2219.net":[["aopr","clickNS"]],"3d-foto.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"4x4earth.com":[["set","adBlockDetected","false"],["nostif","samOverlay"]],"51.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"59.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"5sim.net":[["set-local-storage-item","isCookiesAccepted","true"]],"60.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"68.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"699pic.com":[["aeld","/contextmenu|mousedown/"],["nosiif","clearInterval(loginReady)"]],"86.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"abels.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"abola.pt":[["acs","$","Adblock"]],"accace.com":[["set","realCookieBanner","undefined"]],"accace.hu":[["set","realCookieBanner","undefined"]],"accace.ro":[["set","realCookieBanner","undefined"]],"acupoffrench.com":[["acs","stopPrntScr"]],"adevarurisecrete.com":[["rmnt","script","/oncontextmenu|wccp/"]],"adidas.cl":[["set-cookie","notice_preferences","2"]],"adidas.com.au":[["set-cookie","notice_preferences","2"]],"adidas.com.my":[["set-cookie","notice_preferences","2"]],"adidas.de":[["set-cookie","notice_preferences","2"]],"adidas.no":[["set-cookie","notice_preferences","2"]],"affiliate.fc2.com":[["nostif","checkFeed","1000"]],"africa-uninet.at":[["set-cookie","cookieconsent_status_new","1"]],"akkushop-schweiz.ch":[["set-cookie","cookie-preference","1"]],"akkushop-turkiye.com.tr":[["set-local-storage-item","CerezUyariGosterildi","true"]],"alfred.camera":[["aeld","DOMContentLoaded","ads"],["nosiif","ads"]],"allgaeuer-wanderimkerei.de":[["set-cookie","_pandectes_gdpr","1"]],"allstarssportsbars.co.uk":[["set-cookie","consent_analytics","false"],["set-cookie","consent_received","true"]],"alpenverein.shop":[["set-cookie","amcookie_allowed","1"]],"alphapolis.co.jp":[["ra","style","div#novelBoby","stay"],["aeld","copy","preventDefault"],["set","document.onselectstart","null"],["set","document.oncontextmenu","null"]],"alsina.com":[["rc","wcc-popup-overflow","body","stay"]],"altranotizia.it":[["acs","disableSelection"]],"ambassadorcruiseline.com":[["set-cookie","cookies_accepted","1","","reload","1"]],"americanexpress.ch":[["set-cookie","sc-privacy-settings","true"]],"amzs.si":[["set-cookie","cookie_gdpr","true","","reload","1"]],"ananda-yoga.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"anascrie.ro":[["rmnt","script","/document.onkeydown|document.ondragstart/"]],"anhanguera.com":[["set-local-storage-item","isCookiePoliceAccepted","1"]],"animelib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"anisearch.com":[["nostif","faq/whitelist"]],"anna.fi":[["set","tcfAllowUseCookies","true"]],"ao.com":[["set-cookie","AOCookiebannerConsent","declined"],["set-cookie","MKT_AOCookiebannerGDPRV2","declined"]],"app.aave.com":[["set-cookie","userAcceptedAnalytics","false"]],"app.erevie.pl":[["set-cookie","cookies-accept","1"]],"arabesque-essen.de":[["set","realCookieBanner","undefined"]],"arcadiumlithium.com":[["set-cookie","terms_conditions_web","true"]],"arccinema.co.uk":[["set-cookie","a1wcc","all"]],"arkanium.serveminecraft.net":[["set-local-storage-item","cookiesAccepted","yes"]],"armenia.travel":[["set-cookie","cp","true"]],"ashemaletube.com":[["set-cookie","rta_terms_accepted","true"]],"assets4godot.com":[["set-cookie","ga_consent","false"]],"astoryofmasasstruggles.com":[["rmnt","script","/contextmenu|reEnable/"]],"asus.com":[["set-cookie","isReadCookiePolicyDNT","true"],["set-cookie","isReadCookiePolicyDNTAa","false"]],"athleticsreg.ca":[["set-cookie","accepted_cookie_policy","false"]],"audiovision.de":[["set","realCookieBanner","undefined"]],"auth.alipay.com":[["ra","oncopy|oncontextmenu|oncut|onpaste","input"]],"autodielyonline24.sk":[["aeld","mousedown","function(t)"]],"autoform.pl":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"autohaus-diefenbach.de":[["set-cookie","hide-gdpr-bar","true"]],"autopareri.com":[["no-fetch-if","googlesyndication"]],"autoride.es":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"autoride.io":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"bafa.de":[["set-cookie","gsbbanner","0"]],"baixedetudo.net.br":[["aopw","document.oncontextmenu"],["aeld","/copy|keydown/"]],"bandwagon.asia":[["ra","onmousedown|onselectstart|oncontextmenu",".article","complete"]],"barracred.com.br":[["set","realCookieBanner","undefined"]],"batesenvironmental.co.uk":[["set-cookie","analyticsCookieAccepted","0"],["set-cookie","cookieAccepted","0"]],"baycix.de":[["set","realCookieBanner","undefined"]],"bca.co.id":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"bdcraft.net":[["set","adsbygoogle","null"]],"beast-kingdom.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"beldora.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"bestcam.tv":[["aeld","/contextmenu|keydown/","preventDefault"]],"beterbed.nl":[["set-local-storage-item","consentLevel","1"]],"bezirksgemeinschaftpustertal.it":[["set-cookie","ris_cookie_setting","1"]],"bidup.amtrak.com":[["set-local-storage-item","pg-accept-cookies","true"]],"billerbeck.shop":[["set-cookie","cookie-preference","1"]],"bimiacg.net":[["acs","document.oncontextmenu"]],"bitreporter.de":[["set","realCookieBanner","undefined"]],"blablacar.ru":[["set-cookie","_cookies_v2","1"]],"blackpoolairport.com":[["rc","wcc-popup-overflow","body","stay"]],"blhv.de":[["set","realCookieBanner","undefined"]],"blindbild.com":[["set","realCookieBanner","undefined"]],"blindhelp.net":[["ra","oncontextmenu|oncopy|onselectstart","body","complete"]],"blome-uhren.de":[["set-cookie","juwcmp_external","0"],["set-cookie","juwcmp_retargeting","0"],["set-cookie","juwcmp_rolex","0"],["set-cookie","juwcmp_tracking","0"],["set-cookie","rlx-consent","false"]],"bloomberglinea.com.br":[["aeld","copy"]],"bloombergquint.com":[["aopw","addLinkToCopy"],["aopr","getSelection"]],"bluemoon-mcfc.co.uk":[["nosiif","removeChild"]],"boardstar.cz":[["set-cookie","consent","000","","reload","1"]],"bolugundem.com":[["rmnt","script","reEnable"]],"boosty.to":[["set-cookie","gdpr","1"]],"brandners-homestyle.de":[["set-cookie","cookie-preference","1"]],"brewersfayre.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"buidlbox.io":[["set-cookie","cookiesAccepted","true"]],"bunq.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"burlingtoncountytimes.com":[["nostif","gnt_mol_oy"]],"bvk-beamtenversorgung.de":[["set-cookie","bvkcookie","true"]],"bvmed.de":[["set-cookie","MATOMO_CONSENT_GIVEN","0"]],"bypass.city":[["no-fetch-if","/googlesyndication|googletag/"],["nowoif"]],"bysezejataos.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"bzgvin.it":[["set-cookie","ris_cookie_setting","1"]],"c-parts.de":[["set","realCookieBanner","undefined"]],"canonvannederland.nl":[["set-local-storage-item","z_cookie_consent","true"]],"cantonrep.com":[["nostif","gnt_mol_oy"]],"cape.co":[["set-local-storage-item","no-cookie-notice-dismissed","true"]],"carbon.ag":[["set","realCookieBanner","undefined"]],"careers.omedastudios.com":[["set-cookie","_ttCookiePermissions","0"]],"carry.pl":[["set-cookie","__carry_cookie_module","2","","reload","1"]],"cateringvandenberg.nl":[["rc","wcc-popup-overflow","body","stay"]],"catolet.de":[["set-cookie","cookie-preference","1"]],"chavesnamao.com.br":[["set-local-storage-item","LGPDconsent","1"]],"chessarena.gg":[["set-local-storage-item","cookie-consent","necessary"]],"cinemablend.com":[["aopr","__cmpGdprAppliesGlobally"],["set-cookie","FTR_Article_PageView","2"]],"cineplanet.com.pe":[["set-cookie","cookie-consent","0"]],"citpekalongan.com":[["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"]],"cittadinanza.biz":[["set","disableSelection","noopFunc"],["aopw","document.oncontextmenu"]],"cleveland.com":[["aopr","__cmpGdprAppliesGlobally"]],"cmg24.pl":[["aopw","document.oncontextmenu"]],"cmlink.com":[["set-cookie","isAgreeCookie_UK","true"]],"cnblogs.com":[["aeld","copy","clipboardData"]],"codedosa.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"colegiolamagdalena.clickedu.eu":[["set-cookie","cookiescheck","true"]],"coloradoan.com":[["nostif","gnt_mol_oy"]],"compact-shop.de":[["set-cookie","ris_cookie_setting","1"]],"comprerural.com":[["aopr","append_link"]],"computerbase.de":[["set-cookie","consent","1"],["set-cookie","OptanonAlertBoxClosed","1"]],"comte.com":[["set-cookie","accept-cookie","no"]],"comune.egna.bz.it":[["set-cookie","ris_cookie_setting","1"]],"conotoxia.com":[["set-cookie","acceptedCookiesRemarketing","required"]],"continentale-hannover.de":[["set","realCookieBanner","undefined"]],"converse.pl":[["set-cookie","amcookie_policy_restriction","allowed"]],"coolermaster.com":[["set-cookie","cookie-policy-agree","true"]],"cosasdeviajes.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cotedecor.com":[["rc","unreadable-display","","stay"]],"counciloflove.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"crazy-factory.com":[["set-cookie","seen_cookie_dialog","1"]],"critic.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"ctrl.blog":[["aopr","a1lck"]],"cycling74.com":[["set-cookie","acceptsCookies","false"]],"dagvandewebshop.be":[["set-cookie","cookie-preference","1"]],"daily-times.com":[["nostif","gnt_mol_oy"]],"dailynews.us.com":[["acs","document.onselectstart"]],"daltonmaag.com":[["set-cookie","dama.cookieConsent","false"]],"data.bathspa.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dbnetbcn.com":[["set-cookie","promptCookies","1"]],"dbs.si":[["set-cookie","AcceptedCookies","true"]],"decider.com":[["aopr","googletag.cmd"]],"deepl.com":[["aeld","copy"]],"dejure.org":[["set","ad_allowed","true"],["remove-cookie","adblock_counter"]],"delmarvanow.com":[["nostif","gnt_mol_oy"]],"delta.com":[["set-cookie","dtPCB","true"]],"denk-doch-mal.de":[["set","realCookieBanner","undefined"]],"depop.com":[["set-cookie","gdpr__depop__functional","true"],["set-cookie","gdpr__facebook__social","false"],["set-cookie","gdpr__google__analytics","false"]],"der-postillon.com":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"designmynight.com":[["set-cookie","consent","0"]],"desijugar.net":[["acs","document.onkeydown"]],"desmoinesregister.com":[["nostif","gnt_mol_oy"]],"desrayaud-paysagistes.com":[["rc","unreadable-display","","stay"]],"developpez.com":[["acs","document.getElementById","cookie"]],"dhbbank.be":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"digitalsynopsis.com":[["aopr","disableSelection"],["aopr","document.oncontextmenu"]],"dj4events.fr":[["rc","unreadable-display","","stay"]],"docs.apica.io":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.dyrector.io":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.paloaltonetworks.com":[["nostif","ad-block"]],"docs.webstudio.is":[["set-cookie","__gitbook_cookie_granted","no"]],"dollardescent.net":[["rmnt","script","'contextmenu'"]],"dom.ru":[["set-cookie","cookieAccepted","true"]],"domeny.art.pl":[["set-cookie","artpl_cmp_cookies","accepted","","reload","1"]],"dozapteka.pl":[["set-cookie","consent-granted","1","","reload","1"],["set-cookie","consent-granted-version","23"]],"draisinenbahn.de":[["set","realCookieBanner","undefined"]],"drhorvath.de":[["set","realCookieBanner","undefined"]],"e1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ebank.fundamenta.hu":[["set-cookie","cookie_consent","true","1year","","domain","ebank.fundamenta.hu"],["set-cookie","general","true","1year","","domain","ebank.fundamenta.hu"]],"ebc.com.br":[["ra","oncopy"]],"economica.net":[["aeld","copy"]],"eding.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"efg-passau.de":[["set","realCookieBanner","undefined"]],"egon-w-kreutzer.de":[["set","realCookieBanner","undefined"]],"eid.gov.mt":[["set-cookie","cookienotice_eid","dismiss"]],"eikaforsikring.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"ejwleo.de":[["set","realCookieBanner","undefined"]],"elektroda.pl":[["nostif","typeof loadElement"]],"eleven-sportswear.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"elpasotimes.com":[["nostif","gnt_mol_oy"]],"emmi-industrie.com":[["set-cookie","emmi-che-cookie-categories","essential"]],"emri.nl":[["rc","wcc-popup-overflow","body","stay"]],"englishlands.net":[["aopw","document.oncontextmenu"]],"esologs.com":[["acs","attachToDom","ad-fallback"]],"esthetique-meyerbeer.com":[["rc","unreadable-display","","stay"]],"euranetplus.de":[["set","realCookieBanner","undefined"]],"eurogamer.pl":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"eurogamer.pt":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"eurosender.com":[["set-cookie","es_cookie_settings_closed","1"]],"eurotvsport1.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"everest-24.pl":[["set-local-storage-item","cookie-accepted","false"],["set-local-storage-item","cookie-closed","true"]],"evkirche-eilsen.de":[["set","realCookieBanner","undefined"]],"falabella.com.co":[["set-cookie","isCookieLegalBannerSelected","true"]],"fantasyfitnessing.com":[["set-cookie","Fitnessing21-15-9","0"]],"fantasypros.com":[["set-cookie","fp_policy","1"]],"faq.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"fasteninfos.de":[["set","realCookieBanner","undefined"]],"feinaactiva.gencat.cat":[["set-cookie","cookie-consent","essential"]],"feucht-obsttechnik.de":[["set","realCookieBanner","undefined"]],"feuerwehr-oberau.de":[["set","realCookieBanner","undefined"]],"ffzblossin.de":[["set","realCookieBanner","undefined"]],"figshare.wesleyan.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"filmora.wondershare.com":[["set-cookie","modalCloseDownloadCookie","2"]],"filmpornoitaliano.org":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","document.onselectstart"]],"filmzie.com":[["set-local-storage-item","cookiesAccepted","false"]],"filmzone.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"financeads.com":[["set","realCookieBanner","undefined"]],"fincaparera.com":[["set-cookie","promptCookies","1"]],"firestream.site":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","||_0x"]],"fitandwell.com":[["set-cookie","FTR_Article_PageView","2"]],"fittingcentermondaysunday.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"flagle.io":[["nostif","googlesyndication"]],"flickr.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"flinsetyadi.com":[["acs","document.ondragstart"],["acs","disableSelection","reEnable"],["aopr","disable_copy"]],"flyingpapers.com":[["set-local-storage-item","FP_cookiesAccepted","true"]],"flynorse.com":[["set-cookie","N0_CONSENT","essential"]],"fm-systeme.de":[["set-cookie","kmaCookiesCode2","0"],["set-cookie","kmaCookiesSaved","1"]],"foodker.hu":[["set","cookie_alert_overlay","noopFunc"]],"foodnetwork.com":[["set-local-storage-item","wbdLTP","true"]],"ford-arndt-goerlitz.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-bathauer-bad-harzburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-behrend-waren.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-foerster-koblenz.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-mgs-radebeul.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.fr":[["set-cookie","cookieAcknowledged","true"]],"ford.lt":[["set-cookie","cookieAcknowledged","true"]],"ford.se":[["set-cookie","cookieAcknowledged","true"]],"forum.robsoft.nu":[["set-cookie","phpbb3_gc8h1_ca","1","","reload","1"]],"fourfourtwo.com":[["set-cookie","FTR_Article_PageView","2"]],"fpmmusic.com":[["aeld","mousedown","","elements",".trackContainer"]],"frag-machiavelli.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"fragrantica.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"freep.com":[["acs","document.createElement","admiral"],["nostif","gnt_mol_oy"]],"freizeitbad-greifswald.de":[["set-cookie","swgCookie","false"]],"frickeldave.de":[["set","realCookieBanner","undefined"]],"frohreich.de":[["set","realCookieBanner","undefined"]],"gadgethacks.com":[["set","WHT.ShowConsentForm","trueFunc"]],"gakki.me":[["ra","oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"]],"galaxy.com":[["set-cookie","bannerDissmissal","true","","reload","1"],["set-local-storage-item","terms","true"]],"gambling-affiliation.com":[["set-cookie","cookie_agreement_v3","2"]],"gastongazette.com":[["nostif","gnt_mol_oy"]],"geeksforgeeks.org":[["nostif","onscroll","5500"],["nostif","login","5000"],["acs","showAdblockerModal"]],"gemeinde.proveis.bz.it":[["set-cookie","ris_cookie_setting","1"]],"getcontact.com":[["set-cookie","cookieInform","reject"]],"getimg.ai":[["set-cookie","permission-getimg","1"]],"gigasport.de":[["set-cookie","consentAll","1"]],"glamourmagazine.co.uk":[["set","ads_not_blocked","true"]],"globe.adsbexchange.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"go.netia.pl":[["set-cookie","rodo-modal-displayed","1"],["set-cookie","rodo-reminder-displayed","1"]],"godbolt.org":[["set-cookie","privacy_status","1"]],"goerlach-gmbh.com":[["set","realCookieBanner","undefined"]],"goessential.com":[["set","realCookieBanner","undefined"]],"goesser.at":[["set","realCookieBanner","undefined"]],"gogolf.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-advertisement","no"]],"golfdigest.com":[["aost","document.createElement","admiral"]],"goodhub.xyz":[["aeld","/contextmenu|keydown/"]],"goodnews-magazin.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"graffitiburger.nemtakeaway.dk":[["set-cookie","cookie-censent-musthave","true"]],"greatfallstribune.com":[["nostif","gnt_mol_oy"]],"green-24.de":[["set-cookie","cf4212_cn","1"]],"grizly.pl":[["set-cookie","mCs-chk","1"]],"gronkh.tv":[["set-local-storage-item","grnk-cookies-accepted","true"]],"hachettebookgroup.com":[["set-cookie","cookie__newsletter_popup","1"],["set-cookie","cookie__privacy_policy","1"]],"halotracker.com":[["aopw","adBlockDetected"]],"handelsbanken.fi":[["set-cookie","shb-consent-cookies","false"]],"hans-engelke.de":[["set","realCookieBanner","undefined"]],"harrycookcheltenham.co.uk":[["set-cookie","ce-cookie","N"]],"harvardmagazine.com":[["aopr","googletag"]],"hattiesburgamerican.com":[["nostif","gnt_mol_oy"]],"hdi-mobility-solution-fr.com":[["set-cookie","cookiesAccepted","1","reload","1"]],"hdtoday.so":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"healthygamer.gg":[["set-cookie","cookieModalAccept","no"]],"hedgeaccordingly.com":[["aopw","ABD"]],"hetzner.com":[["set-cookie","__Secure-HO_Cookie_Consent_Declined","1"]],"hh-taiwan.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"hillsdale.net":[["nostif","gnt_mol_oy"]],"hiraethtranslation.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hodalump.com":[["set-cookie","_pandectes_gdpr","1"]],"holidayworld.com":[["set-cookie","pp-acknowledged","true"]],"hollandsentinel.com":[["nostif","gnt_mol_oy"]],"horecaworld.be":[["set-cookie","consent","1"],["set-cookie","cookies_consent","1"]],"hospihousing.com":[["set-local-storage-item","areCookiesAccepted","true"]],"hotelkristall.it":[["set","realCookieBanner","undefined"]],"howstuffworks.com":[["set-cookie","gdpr_opt_in","1"]],"hsk.de":[["set-cookie","cookies-allowed","00000"]],"huddle.today":[["set-cookie","cmplz_rt_banner-status","dismissed"]],"humandataincome.com":[["set-local-storage-item","cookie-permission","false"]],"icould.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"idar-oberstein.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"ideas0419.com":[["acs","document.oncontextmenu"]],"ielts.co.nz":[["set-cookie","acceptCookie","true"]],"ilovevaldinon.it":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"img999.com":[["ra","oncontextmenu"]],"immobilise.com":[["rmnt","script","/cookie-policy"]],"impotsurlerevenu.org":[["aopr","alerte_declanchee"]],"indystar.com":[["nostif","gnt_mol_oy"]],"infodifesa.it":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"infomoney.com.br":[["aopr","addLink"]],"insound.de":[["set-cookie","cookieDeclined","1"]],"intermatic.com":[["set-cookie","acceptCookies","true"]],"intramed.net":[["set","adblock","false"]],"inzing.gv.at":[["set-cookie","ris_cookie_setting","1"]],"iptvromania.ro":[["rmnt","script","contextmenu"]],"iskandinavya.com":[["aopr","kan_vars.adblock"]],"isolarcloud.eu":[["set-local-storage-item","ISOLAR_COOKIE_VISIT","1"]],"iticket.co.nz":[["set-cookie","itk_cookieconsent","dismissed"]],"j-koenig.de":[["set-cookie","cookie-preference","1"]],"jadent.de":[["set","realCookieBanner","undefined"]],"jailbreakchangelogs.xyz":[["set-session-storage-item","adblock_modal_dismissed","true"]],"jamilacuisine.ro":[["aost","document.oncontextmenu"],["aost","Object","/(?=^(?!.*(jquery|inlineScript)))/"]],"javsubtitle.co":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"jconline.com":[["nostif","gnt_mol_oy"]],"jgl.hr":[["set-cookie","ng-cc-accepted","accepted"]],"jisc.ac.uk":[["set-cookie","cookiesPrivacy","false"]],"jk-market.com":[["acs","jQuery","devtool"]],"jnews5.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aeld","mousedown","","elements",".entry-content"]],"jsonline.com":[["nostif","gnt_mol_oy"]],"jumpropeberlin.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-cookie","ckies_google_ads_ct","deny"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"],["set-cookie","ckies_tiktok_post","deny"],["set-cookie","ckies_youtube_video","allow"]],"justanswer.com":[["set-cookie","cbChecked","true"]],"justjoin.it":[["set-cookie","cookiesPopup","1"]],"justswallows.net":[["set","console.clear","undefined"]],"k-einbruch.de":[["set-cookie","cookie_consent","true"],["set-cookie","gtm-disable-GTM-NLVRXX8","true"]],"kaleidoscope.co.uk":[["set-cookie","firstPartyDataPrefSet","true"]],"kamera-express.be":[["set-cookie","cookie_accepted","false","","reload","1"]],"karamellstore.com.br":[["nostif","exit_popup","10000"]],"karver-systems.com":[["set","realCookieBanner","undefined"]],"kastner-oehler.ch":[["set-cookie","consentAll","0"]],"katzenbaumdesign.de":[["set","realCookieBanner","undefined"]],"keepersecurity.com":[["set-local-storage-item","keeper_cookie_consent","true"]],"keighleynews.co.uk":[["aopr","_sp_.mms.startMsg"]],"kickante.com.br":[["aeld","mouseleave"]],"kitsapsun.com":[["nostif","gnt_mol_oy"]],"kiyoua-news.de":[["set","realCookieBanner","undefined"]],"klimwinkel.nl":[["set-local-storage-item","app_gdpr_consent","1"]],"klsescreener.com":[["acs","document.getElementById","adblock"],["rmnt","script","adblock"],["set-cookie","_ad","0"]],"knauer-galabau.de":[["set","realCookieBanner","undefined"]],"knime.com":[["set-cookie","cookie-agreed","0"],["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"knowyourmeme.com":[["acs","document.createElement","admiral"]],"kohlkg.de":[["set","realCookieBanner","undefined"]],"kolnovel.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"komdigi.go.id":[["set-local-storage-item","localConsent","true"]],"kontaktbazar.at":[["set-cookie","ris_cookie_setting","1"]],"korodrogerie.de":[["set-cookie","cookie-preference","1"],["set-cookie","cookie-preference","1","","reload","1"]],"kosmas.cz":[["set-cookie","was_cookie_consent","no"]],"kroger.com":[["set-local-storage-item","modal_terms_policy_update_notification","true"]],"ksp.co.il":[["set","dataLayer","[]"],["set","gtag","noopFunc"]],"kueren.de":[["set-cookie","Consent","0"]],"kunstmuseum-heidenheim.de":[["set","realCookieBanner","undefined"]],"kuroko-analyze.com":[["ra","oncontextmenu","body"]],"kyutai.org":[["set-local-storage-item","cookieConsent","false"]],"la-grotta-solar.es":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_google_analytics","deny"],["set-cookie","ckies_google_maps","allow"],["set-cookie","ckies_youtube","allow"]],"lalawin.com":[["acs","document.oncontextmenu"],["aopr","tjQuery"]],"langweiledich.net":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"laptophardware.hu":[["set","cookie_alert_overlay","noopFunc"]],"lasexta.com":[["aeld","contextmenu"]],"lazyrecords.app":[["set-local-storage-item","cookieConsent","false"]],"learn.inesdi.com":[["set-cookie","COOKIE_CONSENT_ACCEPTED","true"]],"leben-mit-ohne.de":[["set","realCookieBanner","undefined"]],"leejeans.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"lemke.de":[["set-cookie","cookies-allowed","00000"]],"lempaala.ideapark.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"lethalpanda.com":[["aopr","b2a"]],"letsverne.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"levis.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"lhsystems.com":[["set-cookie","comfortCookiesAccepted","false"],["set-cookie","functionalCookiesAccepted","true"],["set-cookie","necessaryCookies","true"],["set-cookie","statisticsCookiesAccepted","false"]],"lingg-oberstdorf.de":[["set-cookie","Consent","0"]],"linuxslaves.com":[["aopw","hidekeep"]],"linzerbier.at":[["set","realCookieBanner","undefined"]],"linztourismus.at":[["set-cookie","privacy-manager-settings","functional","","reload","1"]],"listeamed.net":[["nosiif","devtool"],["nostif","devtool"]],"liv.si":[["set-cookie","cookie-preference","1"]],"liverpool.no":[["nostif","offsetHeight"]],"ljudmakarn.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"lobetalarbeit.de":[["set","realCookieBanner","undefined"]],"lofter.com":[["aeld","contextmenu"]],"logopaedie-balzer.de":[["set-cookie","_coo1","1"],["set-cookie","_coo2","1"],["set-cookie","_coo3","1"],["set-cookie","_coo_seen","1"]],"loveplay123.com":[["ra","oncontextmenu|onDragStart|onSelectStart"]],"lugarcerto.com.br":[["aeld","mouseout","pop"]],"luvly.care":[["set-cookie","consent","true"]],"m38a1.de":[["set","realCookieBanner","undefined"]],"m4uhd.net":[["aopr","locdau"]],"madame-lenormand.de":[["set","realCookieBanner","undefined"]],"madeiramadeira.com.br":[["set-local-storage-item","lgpd-agree","1"]],"mainframestechhelp.com":[["aopr","document.oncontextmenu"]],"manuals.annafreud.org":[["set-local-storage-item","COOKIE_CONSENT","no"]],"marbles.com":[["set-cookie","cookieConsentSet","1"]],"marshfieldnewsherald.com":[["nostif","gnt_mol_oy"]],"mashed.com":[["aeld","copy"]],"massaschadeconsument.nl":[["set-local-storage-item","analyticsNoticeDismissedSet","true"]],"matrei-osttirol.gv.at":[["set-cookie","ris_cookie_setting","1"]],"mattighofen.at":[["set-cookie","ris_cookie_setting","1"]],"mayflex.com":[["set-cookie","acceptCookies","true"]],"mdpr.jp":[["ra","oncontextmenu|onmousedown|onselectstart"]],"mediahiburan.my":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"mediaite.com":[["set-cookie","am-sub","1"]],"mein.vav.at":[["set-cookie","cookie-law-concent","true"]],"meinlcoffee.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mellerud.de":[["set-cookie","cookie-preference","1"]],"memoreclame.nl":[["rc","wcc-popup-overflow","body","stay"]],"meteoblue.com":[["set","mb.advertisingShouldBeEnabled","false"]],"mhwg.org":[["ra","oncontextmenu|onselectstart|style","#body_game"]],"milfzr.com":[["acs","$","juicyads"]],"millerandcarter.co.uk":[["set-cookie","ce-cookie","N"]],"mimaletamusical.blogspot.com":[["aopw","document.oncontextmenu"]],"minecraftforge.net":[["nostif","body"]],"mobeleader.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"monkey47.com":[["set-cookie","dgtlconsent","essential","","reload","1"]],"move-ment.at":[["set","realCookieBanner","undefined"]],"mt07-forum.de":[["acs","$","offsetHeight"]],"mvideo.ru":[["set-local-storage-item","COOKIE_NOTIFICATION_SUBMITED_v2","true"]],"myeventeo.com":[["set-cookie","cookiesPolicy20211101","1"]],"myflixerz.to":[["nosiif","_0x"]],"nature-et-bois.fr":[["rc","unreadable-display","","stay"]],"nbcsports.com":[["aopw","admrlWpJsonP"]],"nebula.tv":[["set-local-storage-item","/^freeVideoFriendly/","$remove$"]],"neliosoftware.com":[["set-cookie","nelioCookiesAccepted","true"]],"nettv4u.com":[["aeld","contextmenu"],["aeld","copy"]],"news.17173.com":[["aeld","copy"]],"ngelmat.net":[["nosiif","DevToolsOpen"]],"ngs.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ngs22.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nhm.ac.uk":[["set-cookie","nhm-functional-202308","1"],["set-cookie","nhm-marketing","0"],["set-cookie","nhm-performance","0"]],"nhnieuws.nl":[["set-local-storage-item","psh:cookies-other","false"],["set-local-storage-item","psh:cookies-seen","true"],["set-local-storage-item","psh:cookies-social","true"]],"nicematin.com":[["aeld","","AdB"]],"noaf.de":[["set","realCookieBanner","undefined"]],"nogizaka46.com":[["ra","oncontextmenu"]],"noicetranslations.blogspot.com":[["rmnt","script","disableselect"]],"nordlayer.com":[["set-cookie","consent","accepted"]],"norskfamilie.no":[["set-cookie","acceptAll","false"],["set-cookie","consentGiven","true"]],"novagente.pt":[["aeld","copy"]],"novelpia.com":[["set","document.ondragstart","trueFunc"],["set","document.onselectstart","trueFunc"],["rmnt","script","/disableclick|devtool/"],["ra","oncontextmenu|ondragstart|ondrop|onselectstart","[oncontextmenu]","complete"]],"nsfwzone.xyz":[["acs","console.clear","contextmenu"]],"nsmb.com":[["no-xhr-if","googlesyndication"]],"nusantararom.org":[["aeld","contextmenu"],["aeld","","keyCode"],["no-xhr-if","gif"]],"oakridger.com":[["nostif","gnt_mol_oy"]],"oberstdorf-buchen.de":[["set-cookie","Consent","0"]],"ocala.com":[["nostif","gnt_mol_oy"]],"octavio-shop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"octopusenergy.co.jp":[["set-local-storage-item","dismissedPrivacyCookieMessage","1"]],"odw-journal.de":[["set","realCookieBanner","undefined"]],"ohli365.vip":[["ra","oncontextmenu|onselectstart|ondragstart"]],"oktea.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"ol-webshop.com":[["set-cookie","cookie_consent_user_accepted","true"]],"omega-nuernberg.servicebund.com":[["set-cookie","cookieChoice","0"]],"omroepflevoland.nl":[["set-local-storage-item","of_cookies_consent","YES"],["set-local-storage-item","of_cookiewall_banner_seen","YES"]],"onlinecoursebay.com":[["aeld","","mdp"]],"opencascade.com":[["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"opintopolku.fi":[["set-cookie","oph-mandatory-cookies-accepted","true"]],"opmaatzagen.nl":[["set-local-storage-item","cookieConsent","denied"]],"ouiorganic.com":[["set-cookie","allowGetPrivacyInfo","true"]],"oveckarna.cz":[["set-cookie","cookie-bar","0"]],"paf.se":[["set-cookie","cookieConsent","1"]],"pangleglobal.com":[["set-cookie","cookie_banner_preference","reject"]],"patriotledger.com":[["nostif","gnt_mol_oy"]],"pawastreams.pro":[["nostif","debugger"]],"pc-canada.com":[["set-cookie","Cookies-Accepted","true"]],"pendulumedu.com":[["aeld","copy"]],"penn-elcom.com":[["set-cookie","amcookie_allowed","1"]],"penta.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"petsradar.com":[["set-cookie","FTR_Article_PageView","2"]],"pettenbach.at":[["set-cookie","ris_cookie_setting","1"]],"pfotenmond.de":[["set-cookie","_pandectes_gdpr","1"]],"pgatour.com":[["aopr","__cmpGdprAppliesGlobally"]],"photobooth.online":[["set-cookie","cookie_accepted","true"]],"photoshop-online.biz":[["nostif","google_jobrunner"]],"phpconference.com":[["set","realCookieBanner","undefined"]],"pickmypostcode.com":[["set-cookie","FPL-CookieNotice","true"]],"pickyou.ru":[["set-cookie","is_gdpr","1"]],"pinel.de":[["set","realCookieBanner","undefined"]],"pizzeria-algusto.de":[["set","realCookieBanner","undefined"]],"placementstore.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"planetagibi.com.br":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"planetagibiblog.com.br":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"planner.kaboodle.co.nz":[["set-local-storage-item","isNotificationDisplayed","true"]],"player.pl":[["aeld","contextmenu","a"]],"plente.com":[["set-local-storage-item","cookiePolicy","true"]],"plock.pl":[["set-cookie","cookieconsent_status","dismiss","","reload","1"],["set-cookie","rodo","1","","reload","1"]],"plzenoviny.cz":[["set","realCookieBanner","undefined"]],"pokaz.me":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"polygon.com":[["aopw","loadOutbrain"],["nostif","adsBlocked"]],"popcornflix.com":[["set-cookie","ft_gdprUserConsent","yes"]],"portal.sds.ox.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"posterstore.de":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.no":[["set-cookie","synapse-cookie-preferences-set","true"]],"postype.com":[["aeld","contextmenu"],["rc","disable-selection","body"]],"powerline.io":[["set","document.oncontextmenu","true"]],"practicetestgeeks.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"pracuj.pl":[["set-cookie","gpc_ad","0"],["set-cookie","gpc_analytic","0"],["set-cookie","gpc_audience","0"],["set-cookie","gpc_func","0"],["set-cookie","gpc_v","1"]],"prepostseo.com":[["nostif","head"]],"press-citizen.com":[["nostif","gnt_mol_oy"]],"presto-personaldienste.de":[["set","realCookieBanner","undefined"]],"pricespy.co.nz":[["set-cookie","privacy_settings","1"]],"pricespy.co.uk":[["set-cookie","privacy_settings","1"]],"pricewise.nl":[["set-cookie","CookieConsent","true"]],"princessofwalespub.co.uk":[["set-cookie","ce-cookie","N"]],"printedwaste.com":[["set-local-storage-item","cookieConsent","true"]],"printscan.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"privacy.com.br":[["set-local-storage-item","privacy.com.br","accepted"]],"proabschluss-beratung.de":[["rc","dp--cookie-consent","body","stay"]],"proboards.com":[["aeld","scroll"]],"prodottidellapiazza.it":[["set","realCookieBanner","undefined"]],"producthunt.com":[["set-cookie","agreed_cookie_policy","1"]],"produx.ch":[["set-cookie","cmplz_banner-status","dismissed"]],"proex2000.cz":[["set-cookie","cookie-bar","hidden"]],"programasvirtualespc.net":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"projektowanie-wnetrz-online.pl":[["aopr","disable_copy"],["aopw","document.ondragstart"]],"prpm.dbp.gov.my":[["set","document.onmousedown","trueFunc"]],"psihologiadeazi.ro":[["aopr","nocontext"],["aopr","disable_copy"],["acs","jQuery","keydown"]],"publicopiniononline.com":[["nostif","gnt_mol_oy"]],"pureness.se":[["set-cookie","_pandectes_gdpr","1"]],"puzzle-battleships.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-heyawake.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-kakurasu.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-masyu.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-words.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.es":[["set-cookie","puzzleyou-es_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.fr":[["set-cookie","puzzleyou-fr_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.se":[["set-cookie","puzzleyou-se_cookies_consent_allowlist","0","","reload","1"]],"pvcbuis.com":[["set-cookie","cookiebar","1"]],"pzw.org.pl":[["set-cookie","cookiepolicyinfo_new2","true"]],"quora.com":[["set","ansFrontendGlobals.settings.signupWallType","undefined"]],"raceresult.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"racines.eu":[["set-cookie","ris_cookie_setting","1"]],"raiffeisen-mobil.at":[["set-cookie","cookieconsent","1"],["set-cookie","permission_funktional_cookies","1"]],"rameder.de":[["set-cookie","cookiemanager","15"]],"randivonal.hu":[["set-cookie","cookieconsent_dismissed","yes"]],"rapp.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"raymond-weil.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"rdc.pl":[["set-cookie","cookiepolicyinfo_new","true"]],"read.amazon.com":[["aeld","contextmenu"]],"readcomiconline.li":[["rmnt","script","checkAdsBlocked"]],"rededaltro.com.br":[["set-cookie","ocn_accepted","true"]],"reflectim.fr":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"regiomolkerei.ch":[["set-cookie","rmbb-che-cookie-categories","essential"]],"reise.ruter.no":[["set-cookie","r_hasConsent","true"]],"reliant.co.uk":[["set-cookie","gdpr_cookie_consent","1"],["set-cookie","gdpr_cookie_groups","1"]],"renewal.ru":[["set-cookie","agreeCookie","true"]],"repair.wd40.com":[["set-cookie","has-seen-cookie-notice","true","","reload","1"]],"restore.bg":[["set-cookie","consent_cookie_ue","1","","reload","1"]],"riapsport.de":[["set-cookie","cookie-preference","1"]],"ribbelmonster.de":[["acs","document.oncontextmenu"]],"rittal.com":[["set-cookie","rittalCC","1"]],"roemermann.com":[["set","realCookieBanner","undefined"]],"romeo.com":[["set-local-storage-item","cookiesConsent","1"]],"romet.pl":[["ra","oncontextmenu"]],"roofingmegastore.co.uk":[["set-cookie","cookienotice","true"]],"rosgovas.com":[["set","realCookieBanner","undefined"]],"rozklady.bielsko.pl":[["set-local-storage-item","cookie-accepted","1"]],"rrstar.com":[["nostif","gnt_mol_oy"]],"rshare.library.torontomu.ca":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"rte.ie":[["set-cookie","OptanonAlertBoxClosed","ok"]],"rudderstack.com":[["set-local-storage-item","rudderstack_cookie_consent","true"]],"rukim.id":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"rule34.paheal.net":[["set-cookie","ui-tnc-agreed","true"]],"runningnews.gr":[["acs","document.oncontextmenu"],["acs","disableselect","reEnable"],["ra","oncontextmenu|onselectstart|ondragstart"]],"sae.fsc.ccoo.es":[["set-cookie","config","1","","reload","1"]],"samsungsds.com":[["set-cookie","cookie_policy_level","\"1\""]],"sanswiss.pl":[["set-cookie","cookie_info","1","","reload","1"]],"satcesc.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"],["aopw","document.onkeydown"],["aeld","/^(?:keyup|keydown)$/"],["aopr","document.ondragstart"]],"saubusse-thermes.com":[["rc","unreadable-display","","stay"]],"savvytime.com":[["acs","document.createElement","admiral"]],"sbermarket.ru":[["set-cookie","cookies_consented","yes"]],"sbface.com":[["acs","check","debugger"],["nosiif","_0x"]],"sbot.cf":[["rmnt","script","console.clear"],["nosiif","console.clear"]],"scenexe.io":[["set-local-storage-item","ad_blocker","false"]],"schiff-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"schoenherr.eu":[["set-cookie","sch-ckmdl","true"]],"schrikdraad.net":[["set-cookie","cookiebar","1"]],"schulfahrt.de":[["set-cookie","cookiecookie","1"]],"schwanger-in-bayern.de":[["set-cookie","required","1"]],"scienceopen.com":[["set-cookie","cookiesAccepted","3"]],"seacoastonline.com":[["nostif","gnt_mol_oy"]],"seacom.co.za":[["set-cookie","cookieConsent","accepted"]],"seacom.com":[["set-cookie","cookieConsent","accepted"]],"secondsol.com":[["set-cookie","cookies_consent","1"]],"sees.com":[["set-cookie","__sees_cnsnt","1"]],"segro.com":[["set-cookie","Segro-necessary-cookies","accepted"]],"sekisuialveo.com":[["set-local-storage-item","cookies-eu-necessary","true"],["set-local-storage-item","cookies-eu-statistics","false"]],"selfstudys.com":[["aeld","contextmenu","preventDefault"],["ra","onselectstart","body"]],"serieslyawesome.tv":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"serverprofis.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"sfd.pl":[["rc","show--consent","body","stay"]],"sgbdigital.de":[["set-cookie","tracking","0","","reload","1"]],"shaamtv.com":[["aopr","disableSelection"]],"sharesight.com":[["set-local-storage-item","cookieBanner","false"],["set-local-storage-item","gdprPreferencesAccepted","true"]],"shopbuddies.it":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shortlist.com":[["set-cookie","FTR_Article_PageView","2"]],"shoutcast.com":[["set-cookie","cookie_consent","1"]],"shreveporttimes.com":[["nostif","gnt_mol_oy"]],"signisalc.org":[["set","realCookieBanner","undefined"]],"sinemalar.com":[["set-cookie","cookie-disclaimer","1"]],"skiweltcup.tv":[["set","realCookieBanner","undefined"]],"smartservices.icp.gov.ae":[["set-cookie","cookieAccepted","true"]],"snippet.finance":[["set","realCookieBanner","{}"]],"socialcounts.org":[["no-fetch-if","googlesyndication"]],"solana.com":[["set-cookie","consent","rejected"],["set-local-storage-item","cookie_consent","1"]],"solscan.io":[["set-local-storage-item","user-cookies-setting","1"]],"sonyliv.com":[["set-local-storage-item","analytics_cookies_acceptance","true"],["set-local-storage-item","cookie_acceptance","true"]],"soquest.xyz":[["set-local-storage-item","soCookiesPolicy","1"]],"sourceforge.net":[["set","window.cmpmngr.setConsentViaBtn","noopFunc"]],"southcoasttoday.com":[["nostif","gnt_mol_oy"]],"sportsmetrics.football":[["set-cookie","SportsMetrics_Privacy_Police_Cookie","true"]],"sqlserveregitimleri.com":[["acs","jQuery","contextmenu"]],"starnewsonline.com":[["nostif","gnt_mol_oy"]],"statesman.com":[["nostif","gnt_mol_oy"],["aopr","googletag"]],"statik.be":[["set-cookie","__cookie_consent","false"]],"steamdeckhq.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"sterlitamak1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"stilweb.it":[["set","realCookieBanner","undefined"]],"stmp.it":[["set-cookie","ris_cookie_setting","1"]],"stockpokeronline.com":[["acs","document.oncontextmenu"]],"store.kde.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"strcloud.in":[["aeld","contextmenu"]],"strinova.com":[["set-local-storage-item","lscache-klbq-bucket-scceptCookie","true"]],"supereight.net":[["set","realCookieBanner","undefined"]],"swissboardforum.ch":[["set-cookie","cookies-eu-comfort","false"],["set-cookie","cookies-eu-necessary","true"],["set-cookie","cookies-eu-statistics","false"]],"sysdream.com":[["set-cookie","tarteaucitron","false"]],"tadu.com":[["aeld","/contextmenu|selectstart/"]],"talpo.it":[["set","x5engine.utils.imCodeProtection","null"]],"tastingtable.com":[["aeld","copy"]],"techfundingnews.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"techstores.gr":[["set-cookie","i3-cookie-consent","1"],["set-cookie","i3-required-cookies","1"]],"techtrickseo.com":[["aopw","disable_copy"],["aopw","disableSelection"]],"techus.website":[["nostif","ai_"]],"tehnomix.bg":[["set-cookie","amcookie_allowed","1"]],"tek.fi":[["set-cookie","tek-cookie-agreed","2"]],"teket.jp":[["set-cookie","_ul_cookie_consent","allow"]],"tennessean.com":[["nostif","gnt_mol_oy"]],"terramirabilis.ro":[["rmnt","script","wccp"],["ra","oncontextmenu"]],"tester.userbrain.com":[["set-cookie","CookieConsent","false"]],"texthelp.com":[["set-cookie","texthelp_cookie_consent","yes"],["set-cookie","texthelp_cookie_consent_in_eu","0"]],"thailandopen.org":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"the-dispatch.com":[["nostif","gnt_mol_oy"]],"theepochtimes.com":[["nostif","pipaId","0"]],"theferry.co.uk":[["set-cookie","ce-cookie","N"]],"theleafchronicle.com":[["nostif","gnt_mol_oy"]],"thenews-messenger.com":[["nostif","gnt_mol_oy"]],"thenounproject.com":[["set-cookie","cookie_consent","1","","reload","1"]],"theoblog.de":[["set","realCookieBanner","undefined"]],"theodysseyonline.com":[["aopr","__cmpGdprAppliesGlobally"]],"thepensionsregulator.gov.uk":[["set-cookie","TPR_Cookie_CONSENT","Reject"]],"theroom.lol":[["set-local-storage-item","room-welcome-ack-v1","1"]],"thestudentroom.co.uk":[["set-cookie","_tsr_pc","0"]],"thethings.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"thingybob.de":[["set","realCookieBanner","undefined"]],"thinkingaustralia.com":[["set-cookie","surbma-gpga","no"]],"thinktankphoto.com":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"thizissam.in":[["nostif","popupScreen"]],"timeanddate.com":[["aeld","load","ad-wrap"]],"timeoutdoors.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"timo-bernhard.de":[["set","realCookieBanner","undefined"]],"tinyhouse-baluchon.fr":[["acs","document.oncontextmenu"]],"titantvguide.com":[["set-local-storage-item","COOKIE_CHECK","false"]],"togetogebox.org":[["rmnt","style","-ms-user-select: none"]],"tokuyo.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"tommy.com":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"ton.org":[["set-cookie","cookies-allowance","true"]],"toni-maccaroni.de":[["set-cookie","BestellalarmCookiesAccepted","true"]],"tools.jabrek.net":[["no-fetch-if","www3.doubleclick.net"]],"top1iq.com":[["acs","shortcut"]],"topperlearning.com":[["aeld","/contextmenu|keydown/"]],"torrentlawyer.com":[["set","document.oncontextmenu","noopFunc"],["set","document.ondragstart","noopFunc"],["set","document.onmousedown","noopFunc"],["set","document.onselectstart","noopFunc"]],"totalbeauty.com":[["aopr","__cmpGdprAppliesGlobally"]],"travelinsured.com":[["set-cookie","CookieDisclaimer","1"]],"trentino.pl":[["ra","oncontextmenu"]],"trettin-apotheken.de":[["set","realCookieBanner","undefined"]],"truecar.com":[["set-cookie","cookieConsent","true"]],"tryhackme.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"tuhlteim-pedia.de":[["set","realCookieBanner","undefined"]],"tullingecupen.se":[["set-cookie","cookie_consent","false"]],"tv-asahi.co.jp":[["aeld","contextmenu"],["ra","oncontextmenu","body"]],"tvin.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvnfabula.pl":[["aeld","contextmenu","a"]],"tvtropes.org":[["set","valid_user","true"]],"two-notes.com":[["set-cookie","cookiesettings_status","allow"]],"twomates.de":[["set-cookie","gdpr-google-analytics","false"]],"udo-lermann.de":[["set","realCookieBanner","undefined"]],"ukworkshop.co.uk":[["nostif","google_jobrunner"]],"ul.se":[["set-cookie","ulse_atc","no","","reload","1"]],"unavidadeviaje.com":[["rc","show--consent","body","stay"]],"uncrossy.com":[["set","cookieManager","{}"],["set","cookieManager.initialize","noopFunc"],["set","cookieManager.needsConsentBanner","falseFunc"]],"unifachbuch.de":[["set-cookie","i_c_a","true"],["set-cookie","i_cm_a","false"],["set-cookie","i_sc_a","false"]],"unlimitedfiles.xyz":[["acs","console.log","document.referer"]],"unsplash.com":[["set-cookie","cookie_consent","false"]],"upitrek.com":[["rc","wcc-popup-overflow","body","stay"]],"usatoday.com":[["nostif","gnt_mol_oy"]],"usmleexperiences.review":[["acs","document.oncontextmenu"]],"uta-net.com":[["aeld","/contextmenu|selectstart|copy/"]],"uwayapply.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"v2.xmeye.net":[["set-local-storage-item","showCookieUse","false"]],"vadhander.hogakusten.com":[["set","settings.consent","true"]],"valadie-immobilier.com":[["set-cookie","slc_vitrine_cookies-date-submitted","1"],["set-cookie","slc_vitrine_cookies_analytics","0"],["set-cookie","slc_vitrine_cookies_recaptcha","1"],["set-cookie","slc_vitrine_cookies_youtube","1"]],"valuexh.life":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"variohm.de":[["set-cookie","AllowAllCookies","1","","reload","1"]],"veev.to":[["acs","RegExp","console"]],"vemar.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"verdadeiroolhar.pt":[["acs","document.onselectstart"]],"verstehepferde.de":[["set","realCookieBanner","undefined"]],"vetzoo.se":[["set-cookie","vzs_consent_necessary","granted","","reload","1"]],"vg247.com":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"viatasisanatate.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vigill.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"viks.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"vintageinn.co.uk":[["set-cookie","ce-cookie","N"]],"vinusta.com":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"vitalplus.com":[["set","realCookieBanner","undefined"]],"vivobarefoot.cz":[["set-cookie","cookie-bar","0"]],"vnexpress.net":[["set","adblock","2"]],"voda-zdarma.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"voltafinance.com":[["set-cookie","__wr_disclaimer_source","1"]],"vu.lt":[["set-cookie","cookieconsent_status","allow"]],"vyvymanga.net":[["rmnt","script","window.location.href"]],"wales.nhs.attendanywhere.com":[["set-local-storage-item","cookieBanner","false"]],"wallpaper.com":[["set-cookie","FTR_Article_PageView","2"]],"watch.co.uk":[["set-local-storage-item","cookieConsentV2","1"]],"watson.ch":[["nostif","AdBlocker"]],"wattoo.dk":[["set-cookie","sscm_consent_widget","1"]],"wayfair.ie":[["set-cookie","user_cookie_prefs","1"]],"wearconferences.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"web.bunq.com":[["set-local-storage-item","bunq:CookieConsentStore:isBannerVisible","false"]],"webnovel.com":[["aeld","/contextmenu|copy/"],["set","console.clear","noopFunc"],["nosiif","debug"]],"webnoveltranslations.com":[["aeld","/contextmenu|copy|cut|key/","","elements","document"]],"webshopdewisselslag.recreatex.be":[["set-cookie","acceptAnalyticsCookies","False"],["set-cookie","acceptFunctionalCookies","True"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"weetabix.nl":[["rc","wcc-popup-overflow","body","stay"]],"werkenbijaswatson.nl":[["set-cookie","cookieConsent","allowed"]],"whattowatch.com":[["set-cookie","FTR_Article_PageView","2"]],"wifiwien.at":[["set-cookie","consent","true"]],"wikibious.com":[["aopr","disable_copy"],["aopw","document.oncontextmenu"]],"wikihow.com":[["acs","document.addEventListener","contribute"]],"willow.arlen.icu":[["nosiif","e","1000"],["aopr","document.onkeydown"]],"wipptal.org":[["set-cookie","ris_cookie_setting","1"]],"wirtualnyspac3r.pl":[["aeld","contextmenu"]],"witway.nl":[["set-cookie","cookiebar","1"]],"wizcase.com":[["nostif","bioEp.showPopup"]],"womanandhome.com":[["set-cookie","FTR_Article_PageView","2"]],"women.com":[["aeld","copy"]],"world-novel.fr":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"],["aeld","keydown","key"],["aeld","/copy|selectstart/","return"],["aeld","contextmenu","/preventDefault|pointerType/"]],"worldlibertyfinancial.com":[["set-local-storage-item","cookie_consent","false"],["set-local-storage-item","userAcceptedAnalytics","false"]],"wpplugins.tips":[["acs","jQuery","contextmenu"]],"www.ntv.co.jp":[["aeld","contextmenu","preventDefault"]],"xanimu.com":[["rmnt","script","adblock"]],"xhadult4.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamsterlive.com":[["set-cookie","cookie_accept","1"]],"xhbig.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhopen.com":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xm.sk":[["set-cookie","cookie-bar","0"]],"xploo.com":[["set-cookie","Cookies","100","","reload","1"]],"ya62.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"yamazaki.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"yuuki.me":[["nostif","adsbygoogle"]],"zabel-group.de":[["set","realCookieBanner","undefined"]],"zeglins.com":[["set-local-storage-item","canada-cookie-acknowledge","1"]],"zeta-ai.io":[["set-local-storage-item","mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"]],"zgywyd.cn":[["acs","document.oncontextmenu"]],"zhihu.com":[["aeld","/contextmenu|copy/"]],"zoommastory.com":[["acs","document.oncontextmenu"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
