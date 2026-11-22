/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0815.eu":[["set-cookie","cookie-preference","1"]],"161.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"30seconds.com":[["set-cookie","uf_signup_bar","1"]],"43.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"71.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"9xbuddy.com":[["nostif","adsbygoogle"]],"abc13.com":[["aeld","scroll"]],"abola.pt":[["acs","$","Adblock"]],"accace.hu":[["set","realCookieBanner","undefined"]],"actvid.rs":[["set-cookie","show_share","true"]],"acupoffrench.com":[["acs","stopPrntScr"]],"adbypass.org":[["no-fetch-if","/googlesyndication|googletag/"],["nowoif"]],"adcock.com":[["set-session-storage-item","cookiesAccepted","true"]],"adfilteringdevsummit.com":[["set-local-storage-item","acceptCookies","no"]],"adidas.co.uk":[["set-cookie","notice_preferences","2"]],"adidas.com.my":[["set-cookie","notice_preferences","2"]],"adidas.pt":[["set-cookie","notice_preferences","2"]],"advnture.com":[["set-cookie","FTR_Article_PageView","2"]],"africa-uninet.at":[["set-cookie","cookieconsent_status_new","1"]],"afropunk.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"agenziavista.it":[["set-cookie","gdpr","1"]],"agvillagecamarguais.com":[["rc","unreadable-display","","stay"]],"airastana.com":[["set-cookie","NADevGDPRCookieConsent_portal_2","1"]],"akumo.cz":[["set-cookie","cookie-bar","0"]],"alfred.camera":[["aeld","DOMContentLoaded","ads"],["nosiif","ads"]],"all3dp.com":[["rc","root-modal-container-open","body","stay"]],"allmovie.com":[["acs","$","/getScript|error:/"]],"alsina.com":[["rc","wcc-popup-overflow","body","stay"]],"alter-meierhof.de":[["set-cookie","analytics","false"],["set-cookie","cookieconsent","true","","reload","1"],["set-cookie","marketing","false"]],"amateur.tv":[["set-cookie","AdultContent","1","","reload","1"]],"amway-estonia.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"analyticsvidhya.com":[["nostif","loginModal"]],"ananweb.jp":[["aeld","contextmenu"]],"androidmtk.com":[["acs","document.oncontextmenu"]],"animelib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"animenewsnetwork.com":[["set","ANN.ads.adblocked","false"]],"antallaktikaexartimata.gr":[["aeld","mousedown","function(t)"]],"antiracismnewsletter.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"app.aave.com":[["set-cookie","userAcceptedAnalytics","false"]],"app.baxus.co":[["set-cookie","IAV","true","","reload","1"]],"arabesque-formation.org":[["set-cookie","cmplz_banner-status","dismissed"]],"armedangels.com":[["set-cookie","cookie-preference","1"],["set-cookie","cookie-preference_renew10","1"],["set-cookie","cookie_consent_group_technical","1"]],"arrax.io":[["set","ramp.addUnits","noopFunc"]],"artisan.co":[["set-local-storage-item","artisan_acceptCookie","true"]],"artribune.com":[["set-cookie","m6e-newsletter","1"]],"aruba.com":[["set-cookie","ATA.gdpr.popup","true"]],"assos.com":[["set-cookie","accept-cookies","true"],["set-cookie","popup-newsletter","true"]],"astroportal.com":[["set-cookie","applus_consent","1"]],"asumanaksoy.com":[["rmnt","script","devtoolsDetector"]],"asus.com.cn":[["set-cookie","isReadCookiePolicyDNT","Yes"],["set-cookie","isReadCookiePolicyDNTAa","true"]],"athletic-club.eus":[["set-cookie","analitics-cookies-consent","0"],["set-cookie","personalization-cookies-consent","0","","reload","1"],["set-cookie","user-accepted-AEPD-cookies","1"]],"athleticsreg.ca":[["set-cookie","accepted_cookie_policy","false"]],"audioreview.m1001.coreserver.jp":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"]],"aurumcars.de":[["set-cookie","ac_consent","f","","reload","1"]],"auto24parts.com":[["set-local-storage-item","show_consent_modal","1"],["set-local-storage-item","user_consents","[]"]],"autobedrijfnaessens.be":[["set-cookie","cookie_analytics","0"],["set-cookie","cookie_functional","1"],["set-cookie","cookie_pref_saved","1"]],"autoczescionline24.pl":[["aeld","mousedown","function(t)"]],"autophorie.de":[["aopr","disableSelection"]],"autoride.io":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"autotrader.ca":[["set-cookie","cbnr","1"]],"avdelphi.com":[["aeld","","_0x"],["set","f12lock","false"],["nosiif","debugger"]],"avemaria.edu":[["set-local-storage-item","amu_cookie_consent","1"]],"az-renovation.fr":[["rc","unreadable-display","","stay"]],"baltic-watches.com":[["set-cookie","consent","0","","reload","1"]],"barefootsport.co.nz":[["set-cookie","cookies_allowed","required"]],"baseball-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"basta.berlin":[["set","realCookieBanner","undefined"]],"beerandwine.co.nz":[["set-cookie","isAnAdult","true"]],"beleaf.ch":[["set-cookie","beleaf-che-cookie-categories","essential"]],"belgee.by":[["set-cookie","hide-cookie-message","true"]],"bennettrogers.mysight.uk":[["set-local-storage-item","hasConsent","false"]],"bestcam.tv":[["aeld","/contextmenu|keydown/","preventDefault"]],"bettertires.com":[["set-cookie","consent","1"]],"billetterie.auditorium-lyon.com":[["set-cookie","ga_consentement","0"]],"bingotingo.com":[["acs","document.oncontextmenu"],["aopw","disableEnterKey"]],"bka.de":[["set-cookie","gsbbanner","0"]],"blacktv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"blhv.de":[["set","realCookieBanner","undefined"]],"blindbild.com":[["set","realCookieBanner","undefined"]],"blitzrechner.de":[["aeld","copy"]],"blog.codingconfessions.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"blog.csdn.net":[["aeld","copy","preventDefault"]],"bloomberglinea.com.br":[["aeld","copy"]],"bluebell-railway.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"blxxded.com":[["set-cookie","cookie_consent","true"]],"boardstar.cz":[["set-cookie","consent","000","","reload","1"]],"bold.dk":[["acs","eval","abd"]],"bongdaplus.vn":[["aeld","mousedown","undefined","elements","body"],["set","document.oncontextmenu","trueFunc"]],"bonn.sitzung-online.de":[["set-cookie","allris-cookie-msg","1"]],"bottlenbrew.com":[["set-cookie","age_verification","1"]],"braziljournal.com":[["acs","document.oncopy"]],"brightonandhovealbion.com":[["set-session-storage-item","cookie_reject","true"]],"brooklyneagle.com":[["acs","document.oncontextmenu","nocontextmenu"]],"brusselstimes.com":[["remove-cookie","xbc"]],"bsi.si":[["set-cookie","gdpr_cookie","functional","","reload","1"]],"burkle.tech":[["set-cookie","cookieconsent_status","allow"]],"burlingtonfreepress.com":[["nostif","gnt_mol_oy"]],"calteixidor.cat":[["set-cookie","promptCookies","1"]],"campaignlive.co.uk":[["set-session-storage-item","articleModalShown","true"]],"campusbrno.cz":[["set-cookie","cookie-m-analytics","0"],["set-cookie","cookie-m-marketing","0"],["set-cookie","cookie-m-personalization","0"]],"candy-store.cz":[["set-cookie","cookie-bar","0"]],"canondrivers.org":[["acs","document.addEventListener"],["acs","document.oncontextmenu","key"]],"carinfo.app":[["set-local-storage-item","userConsent","true"]],"carlson.fi":[["set-cookie","consentAdvertising","false"],["set-cookie","consentAnalytics","false"],["set-cookie","consentPersonalization","false"],["set-cookie","privacyExpiration","1"],["set-cookie","privacySettings","1"]],"carsupermarket.com":[["set-cookie","ce-cookie","N"]],"cbs8.com":[["aeld","/^(mouseout|mouseleave)$/"]],"centrumher.eu":[["acs","jQuery","undefined"]],"chipsaway.co.uk":[["set-cookie","cookies-configured","1"]],"chipsliquor.com":[["set-cookie","age_consent","true"]],"cinemarkca.com":[["set-cookie","cookiePolicies","true"]],"cirrusassessment.com":[["rc","wcc-popup-overflow","body","stay"]],"city-data.com":[["aopr","addLink"]],"cklenk.de":[["set-cookie","cookie-preference","1"]],"clarin.com":[["nostif","_waitingAuth0Counter"]],"cleanthinking.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"clinicaladvisor.com":[["remove-cookie","hmmet"]],"cloud.aeolservice.es":[["set-cookie","doSomethingOnlyOnce","true"]],"cnblogs.com":[["aeld","copy","clipboardData"]],"cnn.com":[["rc","onetrust-banner-open","","stay"],["set-local-storage-item","REG_WALL_METER","$remove$"],["set-local-storage-item","perm_cnn_regwall_v1","$remove$"],["aeld","visibilitychange","dispatch"]],"code.likeagirl.io":[["set-local-storage-item","201805-policy|accepted","1"]],"cografyahocasi.com":[["acs","document.addEventListener","preventDefault","/^data:text\\/javascript/"]],"collider.com":[["remove-cookie","articlesRead"]],"columbiasportswear.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"compari.net":[["set","realCookieBanner","undefined"]],"comune.falzes.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sarentino.bz.it":[["set-cookie","ris_cookie_setting","1"]],"consumidor.gov.pt":[["set-cookie","WarningsAndPolicyAccepted","true"]],"context.news":[["set-cookie","cookieConsent","true"]],"copaamerica.com":[["set-cookie","localConsent","true"]],"cork.arccinema.ie":[["set-cookie","a1wcc","NECESSARY"]],"counciloflove.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"courier-journal.com":[["nostif","gnt_mol_oy"]],"crazy-factory.com":[["set-cookie","seen_cookie_dialog","1"]],"cristelageorgescu.ro":[["acs","document.oncontextmenu"],["aopr","disableSelection"],["aeld","","ctrlKey"],["aopr","document.onkeydown"],["aopr","document.oncopy"]],"critic.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"croco-kid.com":[["rc","unreadable-display","","stay"]],"crossculture-academy.com":[["set","realCookieBanner","undefined"]],"csid.ro":[["aopw","document.oncontextmenu"]],"csiplearninghub.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cyberspace.world":[["aopr","document.onselectstart"]],"cycling74.com":[["set-cookie","acceptsCookies","false"]],"dailycomet.com":[["nostif","gnt_mol_oy"]],"dailyrevs.com":[["set-local-storage-item","acceptCookies","true"]],"dbnetbcn.com":[["set-cookie","promptCookies","1"]],"decider.com":[["aopr","googletag.cmd"]],"delawareconsulting.com":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delta.com":[["set-cookie","dtPCB","true"]],"der-postillon.com":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"descargatepelis.com":[["aeld","/keydown|mousedown/"],["set","document.oncontextmenu","trueFunc"]],"devm.io":[["set","realCookieBanner","undefined"]],"dhbbank.be":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"dhbbank.nl":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"die-plank.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-cookie","ckies_facebook_post","deny"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_itunes","deny"],["set-cookie","ckies_stripe","allow"]],"diffchecker.com":[["nostif","adStillHere"]],"direct.travelinsurance.tescobank.com":[["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["set-cookie","viewed_cookie_policy","yes"]],"dnbeiendom.no":[["set-cookie","DNB_CookiePolicy_consentpopup","1"]],"docs.civic.com":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.yagpdb.xyz":[["set-cookie","__gitbook_cookie_granted","no"]],"dom.ru":[["set-cookie","cookieAccepted","true"]],"dr-douxi.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"drinkstation.co.uk":[["set-cookie","goodav_block_popup-2711","0"]],"drkrok.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"droidtekno.com":[["aopw","document.ondragstart"],["aopw","disableEnterKey"]],"duft-werk.de":[["set","realCookieBanner","undefined"]],"durex-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"dynmcyou.com":[["set-cookie","_pandectes_gdpr","1"]],"eater.com":[["nostif","adsBlocked"]],"ebc.com.br":[["ra","oncopy"]],"eca-anime.net":[["acs","document.getElementById","advert-tester"]],"eci.ie":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ecologi.com":[["set-cookie","ecologi_cookie_consent_20220224","false"]],"economictimes-indiatimes-com.translate.goog":[["rmnt","script","var lh = location.host;"]],"ecuavisa.com":[["set-cookie","user_cookie_consent","1"]],"ef.co.id":[["set-local-storage-item","accepted-cookies","true"]],"efg-passau.de":[["set","realCookieBanner","undefined"]],"efmdglobal.org":[["rc","wcc-popup-overflow","body","stay"]],"egon-w-kreutzer.de":[["set","realCookieBanner","undefined"]],"einfach-einreichen.de":[["set-cookie","ee-ca","y","","reload","1"],["set-cookie","ee-hj","n"],["set-cookie","ee-yt","y"]],"elisazunder.de":[["set","realCookieBanner","undefined"]],"elpicazo.org":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"emr.ch":[["set-cookie","EMR-CookieConsent-Advertising","0"],["set-cookie","EMR-CookieConsent-Analytical","0","","reload","1"]],"endlesspools.fr":[["rc","wcc-popup-overflow","body","stay"]],"eneba.com":[["set-cookie","cconsent","1"]],"enesco.co.uk":[["set-cookie","acceptCookieCookie","true"],["set-cookie","enableNonEssentialCookies","false"]],"entail.ai":[["set-cookie","cookie_consent_status","rejected","","reload","1"]],"enzobertini.ro":[["set-cookie","CakeCookie[cookie_consent_eb]","1"]],"equisud.com":[["rc","unreadable-display","","stay"]],"etelecinema.hu":[["set-local-storage-item","cok","true"]],"etsy.com":[["set-cookie","ctc_rejected","1"]],"europarl.europa.eu":[["set-cookie","europarlcookiepolicysagreement","0"]],"eventhotels.com":[["set","realCookieBanner","undefined"]],"evroopt.by":[["aeld","/^(?:click|scroll|keydown|touchstart|mouseenter)$/","cookie.get"]],"f2movies.ru":[["aost","console.clear"]],"fabioambrosi.it":[["acs","document.oncontextmenu"]],"faduobra.com":[["set-cookie","allowGetPrivacyInfo","true"]],"fadxploit.my.id":[["set-local-storage-item","cookie_consent","accepted"]],"fairyabc.com":[["nostif","adblock"]],"famousintel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"fandom.com":[["set-cookie","leftPanelOpen","0"]],"fbref.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"ferroviando.com.br":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"fiberlogy.com":[["set-local-storage-item","consents.show_consent_modal","1"]],"figshare.unimelb.edu.au":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"fina.hr":[["set-cookie","ng-cc-accepted","accepted"]],"firebrandbrewing.co.uk":[["set-local-storage-item","age_confirmed","true"]],"firmwarefile.com":[["acs","document.oncontextmenu"]],"firstthings.com":[["set-cookie","pum_popup_14631_page_views","1"]],"fitandwell.com":[["set-cookie","FTR_Article_PageView","2"]],"fitnesscenter-schardt.de":[["set","realCookieBanner","undefined"]],"flamantonlineshop.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"flaviamelissa.com.br":[["set","realCookieBanner","undefined"]],"flinders.edu.au":[["set-cookie","gdpr_opted_in","true","","reload","1"]],"flixrave.to":[["nostif","||null"],["set","DisDevTool","undefined"]],"flory4all.com":[["acs","document.oncontextmenu"]],"flota.es":[["rc","show--consent","body","stay"]],"fm-systeme.de":[["set-cookie","kmaCookiesCode2","0"],["set-cookie","kmaCookiesSaved","1"]],"fontanka.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"fontbrighton.co.uk":[["set-cookie","ce-cookie","N"]],"forbes.com":[["rc","zephr-modal-open","body","stay"]],"ford-autogalerie-alfeld.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-bathauer-bad-harzburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-busch-kirchberg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-foerster-koblenz.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-mertens-beckum.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-ohm-rendsburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-pforzheim.de":[["set-cookie","hide-gdpr-bar","true"]],"fordogtrainers.pl":[["acs","message","clickIE"],["acs","preventSelection"]],"forosupercontable.com":[["set-cookie","CONS","100"]],"forum.robsoft.nu":[["set-cookie","phpbb3_gc8h1_ca","1","","reload","1"]],"forums.sherdog.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fossil.com":[["set-cookie","banner_interaction","1"],["set-cookie","privacy_allow_advertising","0"],["set-cookie","privacy_allow_performance","0"],["set-cookie","privacy_allow_social","0"]],"fox2now.com":[["aeld","/^(mouseout|mouseleave)$/"]],"framer.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"ft.com":[["aeld","copy","clipboardData"]],"fullxh.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"fwd.com":[["set-local-storage-item","cookieBannerRead","true"],["set-local-storage-item","cookieBannerReadDate","1"]],"fydeos.com":[["set-local-storage-item","is_accept_cookie","true"]],"fydeos.io":[["set-cookie","cookie_consent","necessary"],["set-local-storage-item","is_accept_cookie","true"]],"g-star.com":[["set-cookie","coco","00011"],["set-local-storage-item","cn","true"]],"gabriel-godard.com":[["rc","unreadable-display","","stay"]],"gasthaus-schmidmayer.de":[["set","realCookieBanner","undefined"]],"gats.io":[["ra","oncontextmenu","body"]],"gaz.com.br":[["aopw","document.onkeydown"]],"gaza.sk":[["set-cookie","visitedPopup","1"]],"geelyautomobile.by":[["set-cookie","hide-cookie-message","true"]],"gemeinde.schluderns.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schnals.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sexten.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stlorenzen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.wolkensteiningroeden.bz.it":[["set-cookie","ris_cookie_setting","1"]],"getcontact.com":[["set-cookie","cookieInform","reject"]],"getective.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"getfizzy.co":[["set-cookie","age_verified","true"]],"geurwolkje.nl":[["set-cookie","_pandectes_gdpr","1"]],"gigasport.ch":[["set-cookie","consentAll","1"]],"glamourmagazine.co.uk":[["set","ads_not_blocked","true"]],"gmarket.co.kr":[["set","document.oncontextmenu","noopFunc"],["set","document.onmousedown","noopFunc"]],"golfdigest.com":[["aost","document.createElement","admiral"]],"gonxt.com":[["set-local-storage-item","isAllowCookies","true"]],"gpuscout.nl":[["set-local-storage-item","cookieConsent","true"]],"graybar.com":[["set-cookie","cookie-notification","ACCEPTED","","reload","1"]],"greenpandagames.com":[["set-cookie","accept_cookie_policy","true"]],"groedig.at":[["set-cookie","ris_cookie_setting","1"]],"gronkh.tv":[["set-local-storage-item","grnk-cookies-accepted","true"]],"guard.io":[["set-cookie","cookie_consent_seen","1"]],"guidingliterature.com":[["aopw","disableEnterKey"],["acs","document.ondragstart"],["acs","document.oncontextmenu"]],"guildhalldental.com":[["rc","wcc-popup-overflow","body","stay"]],"harry-gerlach.de":[["set-cookie","privacyPolicyAccept","0","","reload","1"]],"hartsboatyard.co.uk":[["set-cookie","ce-cookie","N"]],"headout.com":[["set-cookie","consent-state","true"]],"helium.com":[["set-local-storage-item","acceptedCookies","false"]],"helloatmos.app":[["set-local-storage-item","analytics-consent","denied"]],"heraldmailmedia.com":[["nostif","gnt_mol_oy"]],"hermesit.net":[["rc","wcc-popup-overflow","body","stay"]],"herrlichergarten.de":[["set","realCookieBanner","undefined"]],"hetek.hu":[["rc","modal-open","body"]],"hife.es":[["set-cookie","hife_eu_cookie_consent","1"]],"hillsdale.net":[["nostif","gnt_mol_oy"]],"hoesjesdirect.nl":[["set-cookie","consent","denied"]],"homebuilding.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"hot.si":[["set-cookie","cookieconsent","1"],["set-cookie","permission_funktional_cookies","1"],["set-cookie","permission_marketing_cookies","0"],["set-cookie","permission_statistic_cookies","0"]],"housedigest.com":[["aeld","copy"]],"howjsay.com":[["nostif","()","1500"]],"hplives.com":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"hundgemacht.net":[["set","realCookieBanner","undefined"]],"hyperoptic.com":[["set-cookie","ho_cookie_consent","essential"]],"ibkrcampus.com":[["set-cookie","IBKRcampus_functional_optIn","true","","reload","1"],["set-cookie","IBKRcampus_gdpr_optOut","true"],["set-cookie","IBKRcampus_mkting_optOut","true"]],"ici.tou.tv":[["set-cookie","toutv_cookies_usage_production","1"]],"igta5.com":[["set-cookie","cookieAccepted","true"]],"ijr.com":[["acs","document.createElement","admiral"]],"ilclubdellericette.it":[["acs","document.oncontextmenu"]],"immersivelabs.online":[["set-cookie","cookie_preferences_set","true"]],"immobiliaremia.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"imola.motorsportreg.com":[["set-cookie","hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["set-cookie","hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"]],"indianhealthyrecipes.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["set","disableSelection","undefined"]],"indigo.uic.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"inicionet.com":[["set","realCookieBanner","undefined"]],"innovationsstiftung-bildung.at":[["set-cookie","cookieconsent_status_new","1"]],"insidermonkey.com":[["aopr","ABD"]],"investorvillage.com":[["acs","update_visit_count"]],"iqueen.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"ishoppurium.com":[["set-local-storage-item","isAcceptCookie","true"]],"itv4.de":[["set","realCookieBanner","undefined"]],"j-lyric.net":[["ra","oncontextmenu|onselectstart","body[oncontextmenu]","complete"]],"jaapeden.nl":[["set-cookie","acceptAnalyticsCookies","false"],["set-cookie","acceptFunctionalCookies","true"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"jacksonsun.com":[["nostif","gnt_mol_oy"]],"javbix.com":[["acs","$","contextmenu"]],"javhd.com":[["set-cookie","adult-warning-popup","disabled"]],"javx357.com":[["rmnt","script","disableRightClick"]],"jazz.fm":[["set-cookie","jazzfm-privacy","true"]],"jbjbgame.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"jgl.hr":[["set-cookie","ng-cc-accepted","accepted"]],"jn.fo":[["set-cookie","analyticsStatus","false"],["set-cookie","socialMediaStatus","false"]],"jornaldoalgarve.pt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"jornaljoca.com.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"journalstandard.com":[["nostif","gnt_mol_oy"]],"kaggle.com":[["set-cookie","ACCEPTED_COOKIES","true"]],"kaiser-mania.de":[["set","realCookieBanner","undefined"]],"kare11.com":[["aeld","/^(mouseout|mouseleave)$/"]],"kastner-oehler.de":[["set-cookie","consentAll","0"]],"kb.uconn.edu":[["set-cookie","required-cookies-acknowledged","2"]],"keeb.supply":[["set-cookie","KeebSupplyCookieConsent","true"]],"klimwinkel.nl":[["set-local-storage-item","app_gdpr_consent","1"]],"kocbayi.com.tr":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"korodrogerie.de":[["set-cookie","cookie-preference","1"],["set-cookie","cookie-preference","1","","reload","1"]],"ktm2day.com":[["acs","document.oncontextmenu"]],"kundenportal.harzenergie.de":[["set-local-storage-item","cookiesAccepted","true"]],"kupbilecik.pl":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kyoceradocumentsolutions.cl":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"la-becanerie.com":[["set-cookie","cookieconsent2_dismissed","yes"]],"lancastereaglegazette.com":[["nostif","gnt_mol_oy"]],"langweiledich.net":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"lassociation.fr":[["set-cookie","rgpdLassoCheck","1"]],"lataifas.ro":[["acs","document.oncontextmenu"],["acs","jQuery","oncontextmenu"],["aeld","","undefined"]],"lazytranslations.com":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"learn.inesdi.com":[["set-cookie","COOKIE_CONSENT_ACCEPTED","true"]],"leben-mit-ohne.de":[["set","realCookieBanner","undefined"]],"ledenicheur.fr":[["set-cookie","privacy_settings","1"]],"leeb-milch.at":[["set-cookie","leeb-aut-cookie-categories","essential"]],"leejeans.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"lenox-trading.at":[["set-cookie","cookie-preference","1"]],"leoschilbach.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"]],"liftshare.com":[["rc","show--consent","body","stay"]],"linkmate.xyz":[["aeld","","key"]],"linzerbier.at":[["set","realCookieBanner","undefined"]],"liquorland.co.nz":[["set-cookie","lq-age-gate","true","","reload","1"]],"liquoronbroadway.com":[["set-cookie","bouncer","true"]],"liverpool.no":[["nostif","offsetHeight"]],"liveyourmaths.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"lokercirebon.com":[["aeld","/contextmenu|keydown|dragstart/"]],"lowpass.cc":[["set-cookie","popup_closed","true"]],"luel.ai":[["set-local-storage-item","cookie_consent","denied"]],"lyndonroofing.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"macfarlanes.com":[["set-cookie","macfarlanes-necessary-cookies","accepted"]],"madame-lenormand.de":[["set","realCookieBanner","undefined"]],"magesyrevolution.com":[["aeld","load","adblock"]],"majorgeeks.com":[["aopr","googletag"],["acs","document.getElementById","undefined"]],"mannschaft.com":[["set","realCookieBanner","undefined"]],"marinetraffic.com":[["set","mtGlobal.disabledAds","true"]],"maxstream.video":[["acs","document.body.oncontextmenu"],["aeld","contextmenu","preventDefault"],["aopr","onload"]],"medit.com":[["set","realCookieBanner","undefined"]],"medscape.com":[["remove-cookie","first_article_visited"]],"mein.vav.at":[["set-cookie","cookie-law-concent","true"]],"meity.gov.in":[["set-cookie","CookieConsent","false"]],"melty.fr":[["set","Didomi","noopFunc"]],"metroasis.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mientus.com":[["set-cookie","cookie-preference","1"]],"min.io":[["set-local-storage-item","cookieConsent","accepted"]],"misskey.gamelore.fun":[["json-prune","ads.[].imageUrl"]],"mo-tools.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"mobiliteit.nl":[["set-cookie","gdpr","deny"]],"moreisdifferent.blog":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"movies2watch.ru":[["aost","console.clear"]],"moviesapi.club":[["set","devtoolsDetector.launch","noopFunc"]],"movieweb.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"movy.sx":[["aeld","contextmenu"]],"mullgs.se":[["set-cookie","cc-accepted","2"]],"musicfeeds.com.au":[["aopr","__cmpGdprAppliesGlobally"],["acs","document.createElement","admiral"]],"musicindustryhowto.com":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["acs","document.addEventListener"]],"mustijamirri.fi":[["set-cookie","mfi_consent_necessary","granted","","reload","1"]],"myhtebooks.com":[["ra","oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"]],"mypenndentist.org":[["set-cookie","undefinedpopup-pdfpcouponoffer","1"]],"myriadicity.net":[["set-cookie","confirm_cookies","1"]],"mythicalgames.com":[["set-cookie","cookie-preferences-mythical","1"]],"naku.at":[["set","realCookieBanner","undefined"]],"napavalleybeverageco.com":[["set-cookie","age_verification","1"]],"nautil.us":[["remove-cookie","arc"]],"neofinancial.com":[["set-local-storage-item","neoCookiesAdvertisingConsent","1"],["set-local-storage-item","neoCookiesPerformanceConsent","1"]],"neumarkt-egna.it":[["set","realCookieBanner","undefined"]],"newgrounds.com":[["remove-cookie","_ngViCo-SupporterPromo"]],"newpharma.be":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"news-press.com":[["nostif","gnt_mol_oy"]],"news.samsung.com":[["set-cookie","COOKIECONSENT","false"]],"news10.com":[["aeld","scroll"]],"newsletter.maartengrootendorst.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"newspao.gr":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ngelmat.net":[["nosiif","DevToolsOpen"]],"nhentaihaven.org":[["acs","eval","contextmenu"]],"nikokids.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"nmmn.com":[["set","realCookieBanner","undefined"]],"nordkurier.de":[["set-local-storage-item","consentManager_shown","true"],["set-local-storage-item","consent_necessary","true"],["set-local-storage-item","consent_performance","false"]],"northgatevehiclehire.ie":[["set-cookie","cookieconsent_status","allow"]],"norwichbulletin.com":[["nostif","gnt_mol_oy"]],"notaire.be":[["set-cookie","cookie-bar","hide"],["set-cookie","cookie-settings-social","false"],["set-cookie","cookie-settings-statistics","false"]],"novagente.pt":[["aeld","copy"]],"nuc.edu":[["set-cookie","wow-modal-id-1","yes"]],"nwfdailynews.com":[["nostif","gnt_mol_oy"]],"nytimes.com":[["set","_adBlockCheck","true"],["set","navigator.storage.estimate","undefined"]],"octopusenergy.it":[["set-cookie","dismissCookieBanner","true"]],"oferty.dsautomobiles.pl":[["aeld","contextmenu"]],"oklahoman.com":[["nostif","gnt_mol_oy"]],"okto.tv":[["set-cookie","disclaimer-saved","1"]],"onderwijsvacaturebank.nl":[["set-cookie","enablecookie","false","","reload","1"]],"onedio.com":[["set-cookie","o-push-alert","1"]],"online.ch":[["set","realCookieBanner","undefined"]],"onlinepngtools.com":[["nano-sib","Clipboard","1000","0.001"]],"ontuscia.it":[["set","realCookieBanner","undefined"]],"opengraph.xyz":[["set-cookie","cookie_consent","rejected"]],"opensecrets.org":[["rc","js-no-scroll","html","stay"]],"ouderenfonds.nl":[["set-cookie","cookie_consent","functional"]],"ourgames.ru":[["set-cookie","OptanonAlertBoxClosed","true"]],"ourworldofpixels.com":[["set-cookie","nagAccepted","true"]],"outwrite.com":[["set-cookie","gradeproof_shown_cookie_warning","true"]],"oveckarna.cz":[["set-cookie","cookie-bar","0"]],"overleaf.com":[["set-cookie","oa","0"]],"oxfamnovib.nl":[["set-cookie","advertisingCookies","Accepted","","reload","1"],["set-cookie","analyticsCookies","Accepted"],["set-cookie","functionalCookies","Accepted"]],"paapiidesign.com":[["set-local-storage-item","cookieConsent","true"]],"paderborn.de":[["set-cookie","cookies-accepted","true","","reload","1"]],"palmbeachdailynews.com":[["nostif","gnt_mol_oy"]],"palmbeachpost.com":[["nostif","gnt_mol_oy"]],"parfum-zentrum.de":[["set-cookie","cookie-bar","0"]],"parkenflughafen.de":[["set-cookie","consentIsSetByUser","true","","reload","1"]],"payeer-gift.ru":[["aopr","document.oncontextmenu"]],"pazarama.com":[["set-cookie","cookie_consent_v2","true"]],"pbexpressliquor.com":[["set-cookie","age-checked","1"]],"pekintimes.com":[["nostif","gnt_mol_oy"]],"peliculas24.me":[["aopw","disableSelection"],["aeld","contextmenu"]],"penni.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"pepperlive.info":[["set","console.clear","noopFunc"]],"perplexity.ai":[["set-session-storage-item","shouldShowAuthBannerAfterQuery","false"],["set-session-storage-item","signUpBannerDismissed","true"],["set-session-storage-item","appDownloadBannerDismissed","true"]],"philips-hue.com":[["set","cockieConsentManagement","noopFunc"]],"photo.codes":[["set-local-storage-item","cookiesAccepted","false"]],"photobank.mainichi.co.jp":[["set","commonUtil.openToast","null"]],"photofloh.de":[["set","realCookieBanner","undefined"]],"pigmentmarkets.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"piusx-college.nl":[["set-cookie","hideCookieNotification","true","","reload","1"]],"placementstore.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"plan.livefpl.net":[["rmnt","script","reviveScroll","excludes","self.__next"]],"playbill.com":[["nostif","offsetHeight"]],"playerx.stream":[["aopr","devtoolsDetector"]],"playonlinux.com":[["acs","$","load"]],"pling.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"plusujemy.pl":[["set-cookie","cookies-accepted","false"]],"pndracingteam.net":[["set","realCookieBanner","undefined"]],"poe-vault.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"pogdesign.co.uk":[["nostif","clientHeight"]],"pokemonforever.com":[["set","google_jobrunner","true"]],"pompo.cz":[["set-cookie","cookie-bar","0"]],"ponselharian.com":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","disableSelection"]],"popcornflix.com":[["set-cookie","ft_gdprUserConsent","yes"]],"portableapps.com":[["nostif","innerHTML"]],"portclintonnewsherald.com":[["nostif","gnt_mol_oy"]],"posterstore.ca":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.ch":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.it":[["set-cookie","synapse-cookie-preferences-set","true"]],"powerline.io":[["set","document.oncontextmenu","true"]],"powerup-gaming.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"premierinn.com":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"prenatal.nl":[["set-cookie","marketingCookies","false"]],"prodyna.com":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]],"progameguides.com":[["aopr","admrlWpJsonP"]],"programming-link.info":[["set","pqdxwidthqt","false"]],"prosciutteriasandaniele.it":[["set-session-storage-item","DS_COOKIENOTIFY_CLOSED","true"]],"publicnotice.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"purefiji.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"puzzle-bridges.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-hitori.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.co.uk":[["set-cookie","puzzleyou-co-uk_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.es":[["set-cookie","puzzleyou-es_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.ie":[["set-cookie","puzzleyou-ie_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.pl":[["set-cookie","puzzleyou-pl_cookies_consent_allowlist","0","","reload","1"]],"qiangwaikan.com":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"quillbot.com":[["set-local-storage-item","mode-quills","$remove$"]],"qz.com":[["set-cookie","exitIntentShown","true"]],"r34.app":[["set-local-storage-item","statistics-appOpenedCount","1"]],"raceresult.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"radartest.com":[["acs","document.onmousedown","disableclick"]],"railf.jp":[["ra","oncontextmenu|oncopy"]],"rameder.de":[["set-cookie","cookiemanager","15"]],"raoul-follereau.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"rapidonline.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"ras.bz.it":[["rc","dp--cookie-consent","body","stay"]],"realme.com":[["set-local-storage-item","hadAccept","1"]],"reclutamiento.defensa.gob.es":[["set-cookie","MDEF_COOKIE_CONSENT_1595777","true","","reload","1"]],"renon.eu":[["set-cookie","ris_cookie_setting","1"]],"reporter-times.com":[["nostif","gnt_mol_oy"]],"reservdelar24.se":[["aeld","mousedown","function(t)"]],"restaurant-stmichael.com":[["set-cookie","tincx_cookie_notice_accepted","true"]],"revenue.land":[["aopr","nocontext"],["acs","disableEnterKey"]],"reviewmeta.com":[["set-cookie","rm-first-time-modal-welcome","1"],["nostif","innerHTML"]],"rightnonel.com":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","disableSelection"]],"rijkenis.nl":[["set-cookie","consent-cookies","1"]],"rissland-kunststoffe.de":[["set","realCookieBanner","undefined"]],"roadworksscotland.org":[["set-cookie","cookieConsent","essential"]],"roschmann.de":[["set","realCookieBanner","undefined"]],"rossoft.co.uk":[["set","realCookieBanner","undefined"]],"rubystm.com":[["aopr","devtoolsDetector"]],"ruidosonews.com":[["nostif","gnt_mol_oy"]],"safetxt.net":[["acs","$","contextmenu"]],"salex.md":[["set-local-storage-item","sxCookie","true"]],"salina.com":[["nostif","gnt_mol_oy"]],"samsungsds.com":[["set-cookie","cookie_policy_level","\"1\""]],"samurai.wordoco.com":[["acs","nocontextmenu"]],"sandratex.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"saos.org.pl":[["set","CookiePolicy","{}"],["set","CookiePolicy.init","noopFunc"]],"sat-charts.eu":[["ra","oncontextmenu"]],"savvista.com":[["set","realCookieBanner","undefined"]],"sbenny.com":[["nostif","()","2000"]],"sberbank.com":[["set-cookie","sber.pers_notice_en","1"],["set-cookie","sbrf.pers_notice1","1"]],"sbermarket.ru":[["set-cookie","cookies_consented","yes"]],"sc.edu":[["set-cookie","_pc","0"]],"scheels.com":[["set-cookie","cookiesAccepted","true"]],"schiff-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"schiffe-und-kreuzfahrten.de":[["set","realCookieBanner","undefined"]],"schneelaeuferzunft.de":[["set","realCookieBanner","undefined"]],"schnittmuster-datenbank.de":[["set","realCookieBanner","undefined"]],"schoonmaakgroothandelemmen.nl":[["set-cookie","epCookieConsent","0","","reload","1"]],"scitechdaily.com":[["set-cookie","ezgwcc","1"]],"secfi.com":[["set-cookie","CookieConsent","true"]],"secretsofprivacy.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"sede.coruna.gal":[["set-cookie","AYTO_CORUNA_COOKIES","1","","reload","1"]],"sees.com":[["set-cookie","__sees_cnsnt","1"]],"selfstudyanthro.com":[["aopr","disable_copy"],["acs","document.ondragstart"]],"selfstudyhistory.com":[["acs","document.ondragstart"],["aeld","dragstart|keydown/"],["aopw","disableEnterKey"],["aopw","document.onselectstart"],["acs","jQuery","contextmenu"]],"serieslyawesome.tv":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"sflix.to":[["set-cookie","show_share","true"]],"shaamtv.com":[["aopr","disableSelection"]],"sharktankblog.com":[["aopr","disable_copy"],["aopr","wccp_pro_iscontenteditable"],["aopr","disable_hot_keys"],["aopr","nocontext"]],"sharperimage.com":[["set-cookie","mystery_popup","true"]],"shop.bosscat.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.wacoal.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.be":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopilya.com":[["set-cookie","hulkCookieBarClick","1"]],"shushan.zhangyue.net":[["ra","oncontextmenu|ondragstart|onselectstart"]],"side.misskey.productions":[["json-prune","ads.[].imageUrl"]],"signisalc.org":[["set","realCookieBanner","undefined"]],"sk-nic.sk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"skihuette-oberbeuren.de":[["set-cookie","NL_COOKIE_KOMFORT","false"],["set-cookie","NL_COOKIE_MEMORY","true","","reload","1"],["set-cookie","NL_COOKIE_STATS","false"]],"skymsen.com":[["set-cookie","purecookieDismiss","1"]],"skyrc.com":[["set-cookie","accept-cookie-20240708","false"]],"sleepwakeadvisor.com":[["remove-cookie","hmmet"]],"slideshare.net":[["acs","ab_tests"],["aeld","mouseleave","scribd_ad"]],"slowboring.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"smotrufilm.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"snap.com":[["set-cookie","sc-cookies-accepted","true"]],"soell.gv.at":[["set-cookie","ris_cookie_setting","-1"]],"solscan.io":[["set-local-storage-item","user-cookies-setting","1"]],"songbeam.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sooeveningnews.com":[["nostif","gnt_mol_oy"]],"southbendtribune.com":[["nostif","gnt_mol_oy"]],"sovetromantica.com":[["set","fuckAdBlock","trueFunc"]],"space.com":[["set-cookie","FTR_Article_PageView","2"]],"spanishdict.com":[["set","SD_BLOCKTHROUGH","true"]],"spectrumtherapeutics.com":[["set-local-storage-item","cookiesAccepted","true"]],"spela.se":[["set-cookie","OptanonAlertBoxClosed","true"]],"spieltraum-berlin.de":[["set","realCookieBanner","undefined"]],"splendid-internet.de":[["set","realCookieBanner","undefined"]],"spline.design":[["set-cookie","CookieConsent","false"]],"spusu.co.uk":[["set-cookie","acceptSpusuCookies","necessary"]],"sqlserveregitimleri.com":[["acs","jQuery","contextmenu"]],"ssga.com":[["set-session-storage-item","cookieConfirmed","true"]],"st-pankraz.at":[["set-cookie","ris_cookie_setting","1"]],"stadtwerke-weilburg.de":[["set-cookie","cookiehinweis","2"]],"stammzellenspender.be":[["rc","cookieconsent-active","body","stay"]],"staugustine.com":[["nostif","gnt_mol_oy"]],"stonly.com":[["set-cookie","cookieHidden","true"]],"storm-proof.com":[["set-cookie","cookie-preference","1"]],"streamily.com":[["set-cookie","cookie-notice","true"],["set-cookie","email_modal","true"]],"streema.com":[["set-cookie","cookie_warning","1"]],"studio3t.com":[["set-cookie","3t-cookies-essential","1"],["set-cookie","3t-cookies-functional","1"],["set-cookie","3t-cookies-performance","0"],["set-cookie","3t-cookies-social","0"]],"sturgisjournal.com":[["nostif","gnt_mol_oy"]],"sudoku.coach":[["set-cookie","consent","0"]],"suitapp.de":[["set","realCookieBanner","undefined"]],"sumsub.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"supereight.net":[["set","realCookieBanner","undefined"]],"supplier.stellantis.com":[["set-cookie","opncl_general","true"]],"sushi.com":[["set-cookie","accepted-cookies","essential","","reload","1"]],"svetwhisky.sk":[["set-cookie","popupdisplay1","1"]],"swigthis.com":[["set-cookie","age_verification","1"]],"swtorlogs.com":[["acs","attachToDom","ad-fallback"]],"systemfala.pl":[["set-cookie","COOKIES_ACCEPT","true"]],"tauntongazette.com":[["nostif","gnt_mol_oy"]],"techgyd.com":[["acs","document.oncontextmenu","nocontextmenu"]],"techlicious.com":[["acs","document.createElement","admiral"]],"techmot24.pl":[["set-cookie","RodoPopup","0"]],"techradar.com":[["set-cookie","FTR_Article_PageView","2"]],"techtrickseo.com":[["aopw","disable_copy"],["aopw","disableSelection"]],"techus.website":[["nostif","ai_"]],"tekstowo.pl":[["aopw","addLink"]],"telemetr.io":[["set-local-storage-item","c","false"]],"teodor.bg":[["set-cookie","amcookie_allowed","1"]],"tester.userbrain.com":[["set-cookie","CookieConsent","false"]],"thebarreltap.com":[["set-cookie","m_a_v","1"]],"thebathamptonmill.co.uk":[["set-cookie","ce-cookie","N"]],"thedailyjournal.com":[["nostif","gnt_mol_oy"]],"thedailymeal.com":[["aeld","copy"]],"thedebriefnetwork.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thedewdropinnoxford.co.uk":[["set-cookie","ce-cookie","N"]],"thedraftnetwork.com":[["acs","document.createElement","admiral"]],"thedukesheadcrawley.co.uk":[["set-cookie","ce-cookie","N"]],"thegearhunt.com":[["aeld","/^(?:contextmenu|copy|keydown|mousedown)$/"]],"thehub21.com":[["set-local-storage-item","hub-cp","true"]],"thejakartapost.com":[["set","document.oncopy","noopFunc"],["rmnt","script","/$.*ready.*setInterval/"]],"themosvagas.com.br":[["acs","addEventListener","keydown"],["acs","onload"],["set","document.onkeydown","null"]],"theonenz.co.nz":[["set-cookie","isAnAdult","true"]],"thepensionsregulator.gov.uk":[["set-cookie","TPR_Cookie_CONSENT","Reject"]],"theradiatorcentre.com":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"thestarpress.com":[["nostif","gnt_mol_oy"]],"thethings.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"threads.com":[["set-session-storage-item","cb","1"],["set-session-storage-item","barcelona_mobile_upsell_state","1"]],"tiermaker.com":[["nostif","&adslot"]],"timeanddate.no":[["aeld","load","ad-wrap"]],"timestelegram.com":[["nostif","gnt_mol_oy"]],"tippmix.hu":[["set-cookie","GDPR_LEVEL","1"],["set-cookie","GDPR_VERSION","1"]],"titan.co.in":[["set-local-storage-item","cookiesModule","true"]],"tme.eu":[["set-local-storage-item","necessary_cookie_confirmed","true"]],"tokvila.lt":[["set-cookie","cookiesAgree","true"],["set-cookie","cookiesLevel1","1"]],"top.howfn.com":[["acs","document.onselectstart"]],"topblogs.de":[["set","realCookieBanner","undefined"]],"topuniversities.com":[["set-cookie","cookie-agreed","2"]],"torrentlawyer.com":[["set","document.oncontextmenu","noopFunc"],["set","document.ondragstart","noopFunc"],["set","document.onmousedown","noopFunc"],["set","document.onselectstart","noopFunc"]],"toweroffantasy.info":[["rmnt","script","onerror"]],"toyotabank.pl":[["set-cookie","cookies","1000"]],"tremblingmadness.co.uk":[["set-cookie","leadform_21331328-003f-43ca-a4d6-743402481f7c_closed","1"]],"trettin-apotheken.de":[["set","realCookieBanner","undefined"]],"triathlete.com":[["remove-cookie","xbc"]],"trixonline.be":[["set-cookie","_cookies-consent","yes"]],"truewealth.ch":[["set-cookie","tw_cc","false"]],"ttisi.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"tuffaloy.com":[["set-cookie","cookieConsent","accepted"]],"tui.se":[["rc","no-scroll","body","stay"]],"tunnelmb.net":[["set-cookie","cookie-policy","true"]],"turcolegal.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"turvakilvet.fi":[["set-cookie","GBaseConsent","0"],["set-cookie","GBaseConsentToAnalytics","0"]],"tv11.ruvideo.site":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvivu.com":[["nostif",".adsbygoogle?.loaded"]],"tvn.pl":[["aeld","contextmenu","a"]],"tvnturbo.pl":[["aeld","contextmenu","a"]],"tvpassport.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tvtut.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tw.istayreal.com":[["set-cookie","allowGetPrivacyInfo","true"]],"tweaktown.com":[["rc","modal-open","body","stay"],["aost","document.getSelection","inlineScript"]],"twenga.pl":[["set-cookie","cookiewarning","1","","reload","1"]],"typeform.com":[["set-local-storage-item","CustomCookieBannerAcceptIntent","true"]],"tz-bedarf.de":[["set-cookie","cookie-preference","1"]],"uhb.nhs.uk":[["set-cookie","AcceptCookies","false"]],"uk.rs-online.com":[["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"]],"ultraten.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"uptimeside.webnode.gr":[["acs","document.oncontextmenu"]],"urban-rivals.com":[["set-cookie","__Host-cnil","true"]],"urochsunloath.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"utamap.com":[["ra","oncontextmenu"]],"vahrn.eu":[["set-cookie","ris_cookie_setting","1"]],"valamis.com":[["set-cookie","valamis_cookie_analytics","false"],["set-cookie","valamis_cookie_marketing","false"],["set-cookie","valamis_cookie_message","true","","reload","1"]],"versicherungsmakler-leistenschneider.de":[["set","realCookieBanner","undefined"]],"viajesatodotren.com":[["set-cookie","NTCookies","0"]],"vibuxer.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"vidply.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"vidstream.pro":[["aost","console.clear"]],"villabassa.eu":[["set-cookie","ris_cookie_setting","1"]],"vilson.com":[["set-cookie","allowGetPrivacyInfo","true"]],"virginatlantic.com":[["set-cookie","VAA_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_Functional","0"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_Marketing","0"]],"visti.it":[["set-cookie","acceptcookies","1"]],"vitalvibe.eu":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"vitbikes.de":[["set-cookie","custom-cookies-accepted","1","","reload","1"]],"vivobarefoot.cz":[["set-cookie","cookie-bar","0"]],"vkf-renzel.nl":[["set-cookie","handledCookieMessage","1"]],"vnexpress.net":[["set","adblock","2"]],"voda-zdarma.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"voe-unblock.com":[["aeld","/keydown|keyup/","keyCode"],["aeld","contextmenu"],["acs","console.clear"]],"vzm.de":[["set","realCookieBanner","undefined"]],"wachusettliquors.com":[["set-cookie","age-checked","1"]],"waitrosecellar.com":[["set-cookie","wtr_cookie_consent","1"],["set-cookie","wtr_cookies_advertising","0"],["set-cookie","wtr_cookies_analytics","0"],["set-cookie","wtr_cookies_functional","0"]],"wallpaperaccess.com":[["aeld","mousedown","dispatch"]],"wallpapercat.com":[["nano-sib","counter","1000","0.001"]],"warringtonguardian.co.uk":[["aopw","_sp_"]],"warungkomik.com":[["rmnt","script","preventDefault"]],"watson.ch":[["nostif","AdBlocker"]],"wavy.com":[["aeld","scroll"]],"webhallen.com":[["set-local-storage-item","marketingConsent","false"],["set-local-storage-item","necessaryConsent","true"],["set-local-storage-item","personalisationConsent","false"]],"webtrack.dhlecs.com":[["set-cookie","dhl-webapp-track","allowed"]],"webworm.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"weetabix.fr":[["rc","wcc-popup-overflow","body","stay"]],"weingut-knipser.de":[["set","realCookieBanner","undefined"]],"weiterbildungsfinder.de":[["set","realCookieBanner","undefined"]],"wellandtribune.ca":[["remove-cookie","/^tncms:meter:/"]],"wewantjusticedao.org":[["set-cookie","gdpr-analytics-enabled","false"]],"whathifi.com":[["set-cookie","FTR_Article_PageView","2"]],"wheatonpm.com":[["set-cookie","cookiemonster-gdpr","1"]],"whoisnovel.com":[["acs","document.oncontextmenu"]],"wikihow.com":[["acs","document.addEventListener","contribute"]],"wikiwand.com":[["set-cookie","wikiwand.cookies.consent","true"]],"wipptal.org":[["set-cookie","ris_cookie_setting","1"]],"wisebuy.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"withings.com":[["set-cookie","cookieconsent_advertising","false"],["set-cookie","cookieconsent_statistics","false"],["set-cookie","withings_cookieconsent_dismissed","1"]],"wjx.cn":[["aopr","_0x1a4c"],["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"wko.at":[["set-cookie","consent","true"]],"wkyc.com":[["aeld","/^(mouseout|mouseleave)$/"],["rc","video__docker_state_docked","","stay"]],"wohlleben-sports.de":[["set-cookie","cookie-preference","1"]],"workwide.de":[["set-session-storage-item","cookieModal2","1"]],"worldpressphoto.org":[["set-cookie","CMSCookieLevel","0","","reload","1"]],"wrestlinginc.com":[["aeld","copy"]],"wt-onlineakademie.de":[["set","realCookieBanner","undefined"]],"wwnorton.com":[["set-cookie","privacyPolicyAccepted","true"]],"www.macysgoldenconfetti.com":[["set-cookie","viewedCookieDisclaimer","true"]],"wzzm13.com":[["aeld","/^(mouseout|mouseleave)$/"]],"x-team.com":[["set-cookie","google-tagmanager","false"]],"x.com":[["aeld","mouseleave"]],"xda-developers.com":[["remove-cookie","articlesRead"],["acs","document.createElement","admiral"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"xfree.com":[["set-cookie","have18","1"]],"xhplanet1.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xnxx.com":[["aopr","fuckAdBlock"]],"yamibo.com":[["aeld","/contextmenu|selectstart|select|copy|dragstart/"]],"ymere.nl":[["set-cookie","euconsent","1"]],"yourstorebox.com":[["set-cookie","rcl_consent_given","true"]],"yuboto-telephony.gr":[["set-cookie","yuboto-telephony.gr_CookiesAcceptedN","1"]],"yuuki.me":[["nostif","adsbygoogle"]],"zagorz.pl":[["set-cookie","cookies-policy","1"],["set-cookie","cookies-view","1"]],"zahnarzt-dr-henkel.de":[["set","realCookieBanner","undefined"]],"zapgroup.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zeinpharma.de":[["set-cookie","cookie-preference","1"]],"zelezodum.cz":[["set-cookie","show_gdpr_cookie_message_388801234_cz","no"]],"zertificon.com":[["set","realCookieBanner","undefined"]],"zgbk.com":[["acs","document.oncontextmenu"],["aeld","","blockEvent"]],"zouboulis.com":[["set","realCookieBanner","undefined"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
