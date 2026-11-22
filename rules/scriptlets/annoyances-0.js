/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"1028loveu.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"161.97.70.5":[["rmnt","script","isadb"]],"1a-sehen.de":[["set-cookie","cc-item-google","false"]],"48.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"56.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"69translations.blogspot.com":[["aopr","document.onselectstart"],["aopr","document.onmousedown"],["aopr","document.onclick"]],"72.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"7misr4day.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"],["aopw","disableEnterKey"]],"aaronia.com":[["set-cookie","amcookie_allowed","1"]],"ac-grimmen.de":[["set","realCookieBanner","undefined"]],"action.com":[["set-local-storage-item","newsletterPopupCount","1"]],"adidas.com.br":[["set-cookie","notice_preferences","2"]],"adidas.mx":[["set-cookie","notice_preferences","2"]],"adidas.no":[["set-cookie","notice_preferences","2"]],"adidas.ru":[["set-cookie","notice_preferences","2"]],"adult-tv-channels.click":[["set-session-storage-item","adp-closed","1"]],"aepos.ap.gov.in":[["ra","oncontextmenu"],["acs","$","contextmenu"]],"affordablemobiles.co.uk":[["set-cookie","cookie_accept","true"],["set-cookie","__a1cns","true"],["set-cookie","__a1cp","false"]],"afi-ipl.org":[["set","realCookieBanner","undefined"]],"afterclass.io":[["set-session-storage-item","adblock","true"]],"agilox.net":[["rmnt","script","realCookieBanner"]],"agrointel.ro":[["aeld","copy"]],"aida64.it":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aileen-novel.online":[["acs","disable_hot_keys"],["acs","document.oncontextmenu"]],"airasia.com":[["set-cookie","gdpr-cookie-notification","closed"]],"algund.eu":[["set-cookie","ris_cookie_setting","1"]],"allgaeuer-wanderimkerei.de":[["set-cookie","_pandectes_gdpr","1"]],"allstarssportsbars.co.uk":[["set-cookie","consent_analytics","false"],["set-cookie","consent_received","true"]],"alltechnerd.com":[["aopw","document.oncontextmenu"]],"alohabrowser.app":[["set-cookie","acceptCookie","1"]],"alpen.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"alphabottleshop.co.uk":[["set-cookie","isAnAdult","true"]],"ampire.de":[["rc","disable","div","stay"]],"amtraker.com":[["no-fetch-if","cloudflareinsights.com"]],"amzs.si":[["set-cookie","cookie_gdpr","true","","reload","1"]],"androidweblog.com":[["aeld","","t.preventDefault"]],"andsafe.de":[["set-local-storage-item","user-has-consent-decision","true"]],"angelmagazin.de":[["set","realCookieBanner","undefined"]],"anikaitv.to":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anitrend.co":[["set-local-storage-item","anitrend_analytics_consent","denied"]],"ankersolix.com":[["set-cookie","accept_cookies","accepted"]],"anna.fi":[["set","tcfAllowUseCookies","true"]],"answersafrica.com":[["acs","document.oncontextmenu"]],"antena3.com":[["aeld","contextmenu"]],"aoezone.net":[["set","aoezone_adchecker","true"]],"aphorisma-verlag.eu":[["set-cookie","alertCookie","true"]],"aphorisma.org":[["set-cookie","alertCookie","true"]],"app.argos.education":[["set-cookie","_cky_opt_in","false"],["set-cookie","_cky_opt_in_dismiss","true"]],"app.arzt-direkt.de":[["set-cookie","ARE_DSGVO_PREFERENCES_SUBMITTED","true"]],"app.standards.site":[["set-local-storage-item","accepted-cookies","true"]],"archon.gg":[["set","__NEXT_DATA__.props.pageProps.adPlacements","undefined"]],"arkanium.serveminecraft.net":[["set-local-storage-item","cookiesAccepted","yes"]],"arras.io":[["set","ramp.addUnits","noopFunc"]],"arweave.org":[["set-local-storage-item","user-preference","false"]],"assura.ch":[["set-cookie","cookiePolicyApproved","true"]],"astoryofmasasstruggles.com":[["rmnt","script","/contextmenu|reEnable/"]],"audi-mediacenter.com":[["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_Performance","0"]],"ausfraukesfeder.de":[["set","realCookieBanner","undefined"]],"ausupreme.com":[["set-cookie","allowGetPrivacyInfo","true"]],"autoalkatreszek24.hu":[["aeld","mousedown","function(t)"]],"autobassadone.fi":[["set-cookie","av-cookieConsent","false"]],"autobrinkmann.de":[["set","realCookieBanner","undefined"]],"autodielyonline24.sk":[["aeld","mousedown","function(t)"]],"autodude.fi":[["set-local-storage-item","cookieConsent","necessary"]],"baic.cz":[["set-local-storage-item","gdprConsent","false"]],"balance-fahrradladen.de":[["set-cookie","cookie-preference","1"]],"bamf.de":[["set-cookie","cookiebanner","0"]],"bammusic.com":[["set-cookie","analyticsCookiesAccepted","false"],["set-cookie","mandatoryCookiesAccepted","true"],["set-cookie","mediaCookiesAccepted","false"]],"bar-tek.com":[["set-cookie","cookie-preference","1"]],"barnardos.org.uk":[["set-cookie","consentBanner","closed"]],"batesenvironmental.co.uk":[["set-cookie","analyticsCookieAccepted","0"],["set-cookie","cookieAccepted","0"]],"baumarkt-vogl.at":[["set","realCookieBanner","undefined"]],"bayernlabo.de":[["set-cookie","layerCookie","true","","reload","1"],["set-cookie","video","true"]],"bayernportal.de":[["set-cookie","comfortConsent","true"],["set-cookie","cookieConsent","true","","reload","1"],["set-cookie","videoConsent","true"]],"bbc.com":[["set-local-storage-item","cvcConsentGiven","true"],["remove-cookie","xbc"],["nano-stb","viewClickAttributeId"]],"bbfun.de":[["set","realCookieBanner","undefined"]],"bcs16.ro":[["aopw","document.oncontextmenu"]],"beefeater.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"beeze.de":[["set","realCookieBanner","undefined"]],"beforward.jp":[["set-cookie","wwwbf[appi]","1","","reload","1"]],"beyblade.com":[["set-cookie","underage","false","","reload","1"]],"bialettikave.hu":[["set-cookie","cookie_jog","1"],["set-cookie","cookie_marketing","0"],["set-cookie","cookie_oldal","1"]],"bilibili.com":[["aeld","selectionchange","quill.emitter"],["aeld","copy"],["aost","player.pause","/stackDepth:(9|10).+https:[./0-9a-z]+\\/video\\.[0-9a-f]+\\.js:1\\d{2}:1.+\\.emit/"]],"bitreporter.de":[["set","realCookieBanner","undefined"]],"bittimittari.fi":[["set-local-storage-item","storagePermission","true"]],"biurobox.pl":[["set-cookie","cookies_message_bar_hidden","true"]],"blaguss.com":[["set-cookie","CookieConsent","mandatory"]],"blindhelp.net":[["ra","oncontextmenu|oncopy|onselectstart","body","complete"]],"blockdyor.com":[["set-cookie","cf_consent","false"]],"blogvisaodemercado.pt":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"blommerscoffee.shipping-portal.com":[["set-local-storage-item","acceptedCookies","false"]],"bloomberg.com":[["set-local-storage-item","history","$remove$"]],"blukit.com.br":[["set-cookie","blukit_novo","true"]],"bns.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"boke112.com":[["aopw","stopPrntScr"]],"bomagasinet.dk":[["rc","show--consent","body","stay"]],"boomboxradio.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"bottlerepublic.com":[["set-local-storage-item","ageIsVerified","true"]],"breitachklamm.com":[["set-cookie","Consent","0"]],"brettspiel-angebote.de":[["set-cookie","privacy-shown","true"],["set-cookie","slimstat_optout_tracking","true"]],"buildtheearth.net":[["set-cookie","mtm_cookie_consent","1"]],"buktube.com":[["set-cookie","parental-control","yes","","reload","1"]],"bulletindegestion.fr":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"bygge-anlaegsavisen.dk":[["set-cookie","acceptCookies","Functional"]],"c6bank.com.br":[["set-session-storage-item","ACCEPT_LGPD","true"]],"calendardate.com":[["set-cookie","warn","true"]],"caller.com":[["nostif","gnt_mol_oy"]],"camp-fire.jp":[["set-cookie","terms_agreement_popup_agreed","true","","reload","1"]],"campingbuddies.de":[["set","realCookieBanner","undefined"]],"cargoe.at":[["set","realCookieBanner","undefined"]],"casellimoveis.com.br":[["set-cookie","cookieMold","true"]],"cattime.com":[["acs","document.createElement","admiral"]],"caucasus-naturefund.org":[["set","realCookieBanner","undefined"]],"ccn.com":[["aopr","__cmpGdprAppliesGlobally"]],"ccoo.es":[["set-cookie","config","0000","","reload","1"]],"cdn.gamemonetize.com":[["ra","oncontextmenu","body"]],"celebjihad.live":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"chaesbueb.ch":[["set-cookie","chaesbueb-che-cookie-categories","essential"]],"chieftain.com":[["nostif","gnt_mol_oy"]],"chowhound.com":[["aeld","copy"]],"chronext.com":[["set-cookie","20240903_chronextCookieMessageShown","1"]],"ciberduvidas.iscte-iul.pt":[["aeld","copy"]],"citas.in":[["aeld","copy"]],"citibank.pl":[["set-cookie","cookieConsent","1000"]],"cittadinanza.biz":[["set","disableSelection","noopFunc"],["aopw","document.oncontextmenu"]],"clarionledger.com":[["nostif","gnt_mol_oy"]],"cleverbot.com":[["set-cookie","note","1"]],"clevercreations.org":[["set-cookie","mailerlite:forms:shown:109925949413262377","1"]],"cleverpush.com":[["set","realCookieBanner","undefined"]],"clickbank.com":[["set-cookie","cbgwc_cookie_consent","reject"]],"cmos.ie":[["rc","wcc-popup-overflow","body","stay"]],"coffeeforums.co.uk":[["acs","document.getElementById","undefined"]],"colegiolamagdalena.clickedu.eu":[["set-cookie","cookiescheck","true"]],"columbiasportswear.it":[["set-cookie","Columbia_IT_emailPopup","1"]],"columbiatribune.com":[["nostif","gnt_mol_oy"]],"commondreams.org":[["set-cookie","popupShown","true"]],"comune.gais.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.prato.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.rasunanterselva.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.rifiano.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.salorno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanmartinoinpassiria.bz.it":[["set-cookie","ris_cookie_setting","1"]],"converse.com":[["set-cookie","acceptConverseCookiePolicy","0"],["set-cookie","dw_cookies_accepted","1"]],"conversion-rate-experts.com":[["set-cookie","marketing_cookie_consent","false"],["set-cookie","user_experience_cookie_consent","false"]],"correosaduanas.es":[["set-cookie","cookie_ADT_tecnica","true"],["set-cookie","msg_cookie_ADT","true"]],"correosexpress.pt":[["set-cookie","msg_cookie_CEX","true"]],"cosasdemujer.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"coshoctontribune.com":[["nostif","gnt_mol_oy"]],"cosmote.gr":[["set-cookie","cookie_consent_set","1"]],"cote.co.uk":[["set-cookie","cookie_consent","false"]],"cotswoldoutdoor.com":[["set-cookie","consent_setting","OK","","reload","1"]],"courierexchange.co.uk":[["set-cookie","nc_analytics","rejected"],["set-cookie","nc_cookies","accepted"],["set-cookie","nc_marketing","rejected"]],"courseware.cemc.uwaterloo.ca":[["ra","oncontextmenu"]],"coworkingrepublic.com":[["set","realCookieBanner","undefined"]],"cpuid.com":[["nostif","blocked","1000"]],"crealitycloud.com":[["set-local-storage-item","cookies","true"],["set-local-storage-item","closeGuideRegisterTime","1"],["set-local-storage-item","permission_open_push","1"]],"crearunapaginaweb.cat":[["set-cookie","promptCookies","1"]],"crfop.gdos.gov.pl":[["set-cookie","RODOclosed","true"]],"cricketgully.com":[["set-local-storage-item","cookieConsent","true"]],"crushwineco.com":[["set-cookie","acceptcookietermCookieBanner","true"]],"cssreference.io":[["aopr","carbonLoaded"]],"curate.nd.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"currentargus.com":[["nostif","gnt_mol_oy"]],"cut.ac.cy":[["set-cookie","analyticsCookiesAllowed","false"],["set-cookie","cookieModalShown","true"]],"daadscholarship.com":[["aopw","LaraPush"]],"daily-jeff.com":[["nostif","gnt_mol_oy"]],"daily-tohoku.news":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dailyrecord.com":[["nostif","gnt_mol_oy"]],"daima.asia":[["set-cookie","allowGetPrivacyInfo","true"]],"datezone.com":[["set-cookie","cookie_consent","necessary"]],"daysoftheyear.com":[["aopr","googletag"]],"debenhams.com":[["set-cookie","dw_is_new_consent","true"]],"degruyterbrill.com":[["set-cookie","acceptcookies","false"]],"dehemspub.co.uk":[["set-cookie","ce-cookie","N"]],"delfi.lt":[["aeld","copy"]],"delmarvanow.com":[["nostif","gnt_mol_oy"]],"demingheadlight.com":[["nostif","gnt_mol_oy"]],"desertsun.com":[["nostif","gnt_mol_oy"]],"deutschaj.com":[["acs","document.oncontextmenu"]],"diastixo.gr":[["set-cookie","the_cookie719","true"]],"diffus.de":[["set-cookie","tracking","yes"]],"digibest.pt":[["set-cookie","digibestCookieInfo","true"]],"digitalsynopsis.com":[["aopr","disableSelection"],["aopr","document.oncontextmenu"]],"dirtbikexpress.co.uk":[["set-cookie","_dbe_cookies_accepted","1"]],"dkb.blog":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"docs.eclipse.xyz":[["set-cookie","__gitbook_cookie_granted","no"]],"dollardescent.net":[["rmnt","script","'contextmenu'"]],"dominospizza.pl":[["set-cookie","dominos_cookies_accepted","1"]],"doppelmayr.com":[["set-cookie","essential","true"]],"dragshop.com":[["set-cookie","enabled_cookie_accept_cookies","0","","reload","1"]],"drewag.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","allowMarketingCookies","false"],["set-cookie","cookiesAccepted","true"]],"drinkcentrum.sk":[["set-cookie","accept_age","1"]],"drinkitnow.de":[["set-cookie","cookie-preference","1"]],"dubznetwork.com":[["acs","document.onkeypress"],["acs","jQuery","keydown"]],"duracell.de":[["aeld","contextmenu"]],"e-hilltop.com":[["set-cookie","allowGetPrivacyInfo","true"]],"eapvic.org":[["set-cookie","CookienatorConsent","false"]],"earnlab.com":[["set-cookie","el_consent","necessary"]],"eatsalad.com":[["set-cookie","userCookies","true"]],"ebikelohr.de":[["set-cookie","COOKIES_NEWACCEPTED","1"]],"ecaytrade.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"edookit.com":[["set-cookie","uuAppCookiesAgreement","true"]],"ehealth.gov.gr":[["set-cookie","cookieconsent_status","1"]],"eid.gov.mt":[["set-cookie","cookienotice_eid","dismiss"]],"eightvape.com":[["set-cookie","age-verified","true"]],"elevator.de":[["set-cookie","amcookie_allowed","1"]],"emmi-energy-milk.ch":[["set-cookie","energy-milk-che-cookie-categories","essential"]],"empik.com":[["set-cookie","cvc","true"]],"encurtandourl.com":[["aopw","mensagem"]],"endclothing.com":[["set-cookie","cookieConsentDismissed","true"],["set-cookie","cookieTermsDismissed","true"]],"enduro-mtb.com":[["set","SteadyWidgetSettings.adblockActive","false"]],"engineeringleadership.xyz":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"enterprisenews.com":[["nostif","gnt_mol_oy"]],"epilog.net":[["set-cookie","cookie_gdpr","true","","reload","1"]],"esaral.com":[["aopw","document.oncontextmenu"]],"espressocafe.ro":[["rmnt","script","contextmenu"]],"eurac.edu":[["set-cookie","eurac_cookie_consent","true"]],"euroball.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"euromaster.de":[["set","Didomi","noopFunc"]],"eurosupps.nl":[["set-cookie","cookie-preferences-submitted20190710","true"]],"evivanlanschot.nl":[["set-cookie","acceptCookies","0"]],"exclusivevip.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"expert.cz":[["set-cookie","HideCookieConsentComponentV2","1"]],"eyeletic.com":[["set-local-storage-item","cookieInfoDismissed","true"]],"falabella.com.pe":[["set-cookie","isCookieLegalBannerSelected","true"]],"famos.bz.it":[["set-cookie","ris_cookie_setting","1"]],"fanfare.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"fantasyfitnessing.com":[["set-cookie","Fitnessing21-15-9","0"]],"fantasyfootballgeek.co.uk":[["set-cookie","cmplz_banner-status","dismissed"]],"fanvue.com":[["set-cookie","cookieConsent","accepted"],["set-cookie","fv.cookies_accepted","dismissed"]],"farbenherz.com":[["set","realCookieBanner","undefined"]],"farm-ro.desigusxpro.com":[["aopr","document.oncopy"]],"feelhealthy.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"feinaactiva.gencat.cat":[["set-cookie","cookie-consent","essential"]],"ferienwohnungen-rotzler.de":[["set-cookie","Consent","0"]],"feuerhexen.de":[["set","realCookieBanner","undefined"]],"fflogs.com":[["acs","attachToDom","ad-fallback"]],"fifthgate.shop":[["set-cookie","AgeVerificationPopup-sections--14858278141988__age-verification-popup","1"]],"figshare.arts.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"filefox.cc":[["aeld","blur"]],"filmzone.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"finance.yahoo.com":[["aeld","scroll"]],"firescans.xyz":[["acs","jQuery","hmwp_is_devtool"]],"flickr.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"flinsetyadi.com":[["acs","document.ondragstart"],["acs","disableSelection","reEnable"],["aopr","disable_copy"]],"fluidmaster.it":[["set-cookie","cookie-preference","1"]],"flyingblue.com":[["set-cookie","cookie-consent-level","functional"]],"focusonreproduction.eu":[["set-cookie","cmplz_banner-status","dismissed"]],"fold.dev":[["set-local-storage-item","cookies","no"]],"foleys.ie":[["rc","wcc-popup-overflow","body","stay"]],"foliamalacologica.com":[["set-cookie","declineOwnCookiesCookie","1"]],"followmikewynn.com":[["acs","document.oncontextmenu"],["aopr","document.onkeydown"]],"foodviva.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"ford-hessengarage-frankfurt.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hga-windeck.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-jungmann-wuppertal.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-schankola-dudweiler.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wahl-siegen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.dk":[["set-cookie","cookieAcknowledged","true"]],"foreignaffairs.com":[["nostif","noscroll","3000"]],"formatatmak.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"forwardis.com":[["set","realCookieBanner","undefined"]],"foto-shooting.ch":[["set","realCookieBanner","undefined"]],"freefilesync.org":[["rmnt","script","/adblock/i"]],"freerapidleechlist.blogspot.com":[["acs","document.oncontextmenu"]],"freesmsgateway.com":[["acs","$","modal_newsletter"]],"freewaysintl.com":[["aeld","contextmenu"]],"freizeitbad-greifswald.de":[["set-cookie","swgCookie","false"]],"frick-geraetebau.de":[["set-cookie","ris_cookie_setting","1"]],"fritzens.gv.at":[["set-cookie","ris_cookie_setting","1"]],"funkypotato.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"futbollatam.com":[["aeld","contextmenu"]],"futspo.de":[["rc","disable","div","stay"]],"gadgetizedpanda.com":[["nostif","isOpen"]],"gagetmatome.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"galaxy.com":[["set-cookie","bannerDissmissal","true","","reload","1"],["set-local-storage-item","terms","true"]],"galinos.gr":[["nostif","pleaseSupportUs"]],"gamerant.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"gamerevolution.com":[["aopr","__cmpGdprAppliesGlobally"]],"gamesgames.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"gamoneinterrupted.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"gansel-rechtsanwaelte.de":[["set-cookie","cnp_consent","true"]],"garbageday.email":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"gasolinapromociones.bridgestone.es":[["set-cookie","G-SYB3DEBSY1","1"]],"gasthof-riefenkopf.de":[["set-cookie","Consent","0"]],"geizhals.eu":[["set-local-storage-item","dnt_message_shown","1"]],"gemeinde.klausen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.neumarkt.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stleonhardinpasseier.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generalitranquilidade.pt":[["set-cookie","CST_COOKIE_CONSENT","1"],["set-cookie","cookieMessageDismissed","1"]],"genomicpress.kglmeridian.com":[["set-cookie","pf-cookie-banner-accepted","true"]],"gerberfondue.ch":[["set-cookie","gerber-che-cookie-categories","essential"]],"gerho.it":[["set-cookie","cookie-preference","1"],["set-cookie","tincxTerminiPopUp","1"]],"gesundheitsladen-online.de":[["set","realCookieBanner","undefined"]],"getanchorgrid.com":[["set-cookie","ag_analytics_consent","declined"]],"getunleash.io":[["set-cookie","CookieConsent","true"]],"gift.be":[["set-cookie","CP_ESSENTIAL","1"],["set-cookie","CP_PREFERENCES","1"]],"giochi.it":[["set-cookie","OptanonAlertBoxClosed","true"]],"gioco.it":[["set-cookie","OptanonAlertBoxClosed","true"]],"gitbook.com":[["set-cookie","__gitbook_cookie_granted","no"]],"giuseppezanotti.com":[["set-cookie","cookieConsentGranted","1"],["set-cookie","cookieConsentMarketingGranted","0"],["set-cookie","cookieConsentPreferencesGranted","1"]],"global-messer.shop":[["set-cookie","youtube-video","1"]],"globaledu.jp":[["acs","document.oncontextmenu"],["ra","oncontextmenu|onselectstart","body"]],"gmx.co.uk":[["aeld","mouseout","openLayer"]],"godtlevert.no":[["set-local-storage-item","force_hide_cookie_dialog","1"]],"goerlach-gmbh.com":[["set","realCookieBanner","undefined"]],"gogolf.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-advertisement","no"]],"goldenstateofmind.com":[["nostif","concertAds"]],"goodnews-magazin.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"googleapis.com.do":[["aeld","/contextmenu|keydown/"],["rmnt","script","/oncontextmenu|onselectstart/"]],"gotransit.com":[["set-cookie","cookies_accepted","true"]],"gov.pt":[["set-cookie","ACCEPTED_TERMS","true"]],"grandprixradio.nl":[["set-cookie","advertisement-age-show-alcohol","false"],["set-cookie","advertisement-age-show-gamble","false"],["set-cookie","analytics_cookies","0"],["set-cookie","cookies_accepted","1","","reload","1"],["set-cookie","tracking_cookies","0"]],"granfondo-cycling.com":[["no-xhr-if","googlesyndication","length:10"]],"greenocktelegraph.co.uk":[["aopr","_sp_._networkListenerData"]],"guess.eu":[["set-cookie","Guess.CookieWallSet","true"],["set-cookie","Guess.CookieWallThirdParties","false"]],"h-andreas.com":[["set-cookie","cookie-preference","1"]],"hacktron.ai":[["set-local-storage-item","hacktron-cookie-consent","rejected"]],"hagagruppen.se":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"hajduk.hr":[["set-cookie","gdpr-cookies","1"]],"hamiltonnolan.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"hana-book.fr":[["set-cookie","HANA-RGPD","accepted"]],"handelsbanken.se":[["set-cookie","shb-consent-cookies","false"],["set-cookie","shb-consent-cookies","true"]],"harvester.co.uk":[["set-cookie","ce-cookie","N"]],"havocpoint.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"healthdigest.com":[["aeld","copy"]],"hebrew4christians.com":[["acs","document.oncontextmenu"],["ra","onselectstart|ondragstart"],["rmnt","script","disableSelection"]],"helmut-fischer.com":[["set-cookie","cookie-level-v4","0"]],"herzum.com":[["set-cookie","CookieConsent","false"]],"heysummit.com":[["set-cookie","hs_cookieconsent","true"]],"hienzo.com":[["ra","oncontextmenu"]],"hiermitherz.de":[["set-cookie","cookie_alert","true"]],"hiking.biji.co":[["set-cookie","cookieConsent","true","","reload","1"]],"hiring.amazon.com":[["set-local-storage-item","cookieConsent","true"]],"hitech-gamer.com":[["set-cookie","htg_consent","0"]],"hodalump-ratschkatl.de":[["set-cookie","_pandectes_gdpr","1"]],"hodalump.com":[["set-cookie","_pandectes_gdpr","1"]],"hoermann-kleinwalsertal.de":[["set-cookie","Consent","0"]],"hofer-kerzen.at":[["set-cookie","cookie-preference","1","","reload","1"]],"home.shortcutssoftware.com":[["set-local-storage-item","ngx-webstorage|cookies","false"]],"hoosiertimes.com":[["nostif","gnt_mol_oy"]],"hotelkristall.it":[["set","realCookieBanner","undefined"]],"how-to-pc.info":[["set","pqdxwidthqt","false"]],"hqq.to":[["set","document.oncontextmenu","null"],["set","document.onkeydown","trueFunc"],["nostif","debugger"],["set","console.clear","noopFunc"]],"hsk.de":[["set-cookie","cookies-allowed","00000"]],"htmlreference.io":[["nostif","()","2000"]],"huebschundgut.de":[["set-cookie","CookieConsent","mandatory"]],"hypotheker.nl":[["set-cookie","trackingConsent","1"]],"iconoclasts.blog":[["set-cookie","gdpr_decline","1"]],"ideapod.com":[["set","nocontext","noopFunc"],["set","disableSelection","noopFunc"]],"ihbarweb.org.tr":[["aeld","/^(?:copy|paste)$/","undefined"]],"imprimare3d.com":[["set","realCookieBanner","undefined"]],"incidenthub.cloud":[["set-local-storage-item","cookieConsent","denied"]],"indiatimes.com":[["aeld","copy"]],"industrialphysics.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"infomoney.com.br":[["aopr","addLink"]],"infotainment.mazdahandsfree.com":[["set-cookie","gdpr","accepted"]],"injectjs.net":[["set-local-storage-item","injectjs-consent","denied"]],"inquirer.net":[["acs","document.createElement","admiral"]],"insiderwire.com":[["set-cookie","cookie-consent","declined","","","reload","1"]],"institut-bio-naturel-nice.fr":[["rc","unreadable-display","","stay"]],"intramuros.org":[["set-cookie","intramuros-analytics","false"],["set-cookie","intramuros-cookie-consent","true"]],"ionmobile.es":[["set-cookie","policyDirective","rejected"]],"iptv4best.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"istdasvegan.eu":[["set","realCookieBanner","undefined"]],"itscybertech.com":[["acs","check","debugger"]],"ivfp.de":[["set","realCookieBanner","undefined"]],"iway.ch":[["set","realCookieBanner","undefined"]],"izh1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"j-koenig.de":[["set-cookie","cookie-preference","1"]],"javjavhd.com":[["acs","$","contextmenu"]],"javsubtitle.co":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"jeyran.net":[["acs","document.oncontextmenu"]],"jjfish.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"jobcenter-ge.de":[["set-cookie","cookie_consent","denied"],["set-cookie","personalization_consent","denied"]],"joyella.com":[["rc","unreadable-display","","stay"]],"joysound.com":[["aeld","DOMContentLoaded","ready"],["set","document.body.oncopy","null","3"],["set","document.body.onselectstart","null","3"],["set","document.body.oncontextmenu","null","3"]],"juegos.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"juomaposti.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"justanswer.es":[["set-cookie","cbChecked","true"]],"kamera-express.be":[["set-cookie","cookie_accepted","false","","reload","1"]],"kamera-express.nl":[["set-cookie","cookie_accepted","false","","reload","1"]],"kangasalansanomat.fi":[["set-cookie","kscookies","true"]],"kaputt.de":[["set-cookie","CONSENT","1"],["set-cookie","advertisement","deny"],["set-cookie","functional_cookies","allow"],["set-cookie","marketing_cookies","deny"],["set-cookie","statistic_cookies","deny"]],"karamellstore.com.br":[["nostif","exit_popup","10000"]],"karate.com":[["set-cookie","cookie-consent","true"]],"kashmirobserver.net":[["acs","document.getElementById","ad-blocker"]],"kasteninblau.de":[["set","realCookieBanner","undefined"]],"kaystls.site":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kbtx.com":[["rc","powa-sticky","","stay"]],"kelkay.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kentucky.com":[["aeld","copy","linkPrefixMessage"]],"kierratyskeskuspatina.fi":[["set-cookie","epCookieConsent","0","","reload","1"]],"kijyomatome-ch.com":[["ra","oncontextmenu|onselectstart","body"]],"kinky.nl":[["set-cookie","_lst18","1"],["set-cookie","_tms","1"],["set-cookie","nc","1"]],"kinston.com":[["nostif","gnt_mol_oy"]],"kipling.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"kirklees.gov.uk":[["set-cookie","cookiesacceptedGDPR","false"]],"kissnofrog.com":[["set-cookie","cdisc","true","","reload","1"]],"kivikangas.fi":[["set-cookie","cookies-required","1","","reload","1"]],"klangmassage-moser.de":[["set","realCookieBanner","undefined"]],"klosterneuburg.at":[["set-cookie","ris_cookie_setting","1"]],"knitted-anatomy.at":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_analytics","deny"]],"koenvandenheuvel.be":[["rc","cookieconsent-active","body","stay"]],"ksdk.com":[["aeld","/^(mouseout|mouseleave)$/"]],"ktoo.org":[["set-cookie","modalDismissed","1"]],"kunstler.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"kunstmuseum-heidenheim.de":[["set","realCookieBanner","undefined"]],"kyoceradocumentsolutions.eu":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.mx":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.ru":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"labs.j-novel.club":[["aeld","contextmenu"]],"lanidor.com":[["set-cookie","c_aceitaAnaliticos","false"],["set-cookie","c_aceitaFuncionais","false"],["set-cookie","c_aceitaNecessarios","true"],["set-cookie","c_aceitaPublicitarios","false"]],"latimes.com":[["set-cookie","c_tos","1"]],"lawinsider.com":[["remove-cookie","tce","when","scroll"]],"lcsun-news.com":[["nostif","gnt_mol_oy"]],"leakedzone.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","keyCode"],["set","Object.prototype._detectLoop","noopFunc"]],"leguidedufromage.com":[["set-cookie","bandeaucookies","1"],["set-cookie","userConsent","all"]],"leman-instruments.com":[["rc","unreadable-display","","stay"]],"libertatea.ro":[["aeld","copy"]],"licensekeys.org":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"lifemiles.com":[["set-cookie","cookiePolicyAccepted","true"],["set-cookie","marketing_cookies","false"],["set-cookie","statistics_cookies","false"]],"likey.me":[["aeld","/contextmenu|keydown/","preventDefault"]],"limametti.com":[["acs","document.oncontextmenu"]],"liquorcity.com":[["set-cookie","age_verification","1"]],"liverpoolphil.com":[["set-cookie","eucookie","1"]],"livetennis.it":[["ra","onselectstart","","stay"]],"lohud.com":[["nostif","gnt_mol_oy"]],"lojaboschferramentas.com.br":[["set-cookie","lgpdConsent","true"],["set-cookie","privacy_comodidade","false"],["set-cookie","privacy_marketing","false"]],"longines.com":[["set-cookie","longines-cookiesstatus-analytics","false"],["set-cookie","longines-cookiesstatus-functional","false"],["set-cookie","longines-cookiesstatus-necessary","true"],["set-cookie","longines-cookiesstatus-social","false"]],"louisreynier.com":[["set","realCookieBanner","undefined"]],"luegeten.ch":[["set","realCookieBanner","undefined"]],"luvvoice.com":[["set-local-storage-item","cookieConsent","declined"]],"madcatbrewery.co.uk":[["set-cookie","age-verification","true"]],"madeiramadeira.com.br":[["set-local-storage-item","lgpd-agree","1"]],"magesy.blog":[["noeval-if","disable_copy"],["aeld","contextmenu","preventDefault"]],"magnolia.com":[["set-local-storage-item","BRANCH_BANNER_PAGE_LOAD","1"],["set-local-storage-item","EMAIL_CAPTURE_MODAL_STOP","1"]],"magyarorszag.hu":[["set-cookie","szuf_consent","0"]],"mall.hu":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"malybelgrad.pl":[["aopr","document.oncontextmenu"]],"mandatory.com":[["aopr","__cmpGdprAppliesGlobally"]],"manhwahentai.me":[["acs","document.oncontextmenu"]],"manianomikata.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"]],"marbles.com":[["set-cookie","cookieConsentSet","1"]],"marieclaire.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"marshfieldnewsherald.com":[["nostif","gnt_mol_oy"]],"masrawy.com":[["acs","document.getElementById","adblockerdetected"]],"mathcrave.com":[["rmnt","script","disable_show_error"]],"maybach-luxury.com":[["set-cookie","cookie-preference","1"]],"mdlinx.com":[["nostif","show"]],"mediately.co":[["set-cookie","cookiesApproved20231","true"]],"mediathekviewweb.de":[["set-local-storage-item","allowCookies","true"]],"megacloud.tv":[["set","devtoolsDetector.launch","noopFunc"]],"megaplay.buzz":[["set","devtoolsDetector.launch","noopFunc"]],"memo-book.pl":[["set-cookie","rodo-acceptace","1"]],"merkur.si":[["set-cookie","cookie_analytics_allow","no"],["set-cookie","cookie_notice_dismissed","yes"],["set-cookie","mer_cc_dim_rem_allow","no"]],"metropoliaztm.pl":[["ra","ondrop|ondragstart"]],"midlands.englandhockey.co.uk":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"mikrocop.com":[["set-cookie","AcceptedCookies","true"]],"mikroutsikos.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"milenio.com":[["aeld","copy"]],"minecraftforge.net":[["nostif","body"]],"miss21.estore.asgroup.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"misskey.systems":[["json-prune","ads.[].imageUrl"]],"miu-star.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mivatter.com":[["json-prune","ads.[].imageUrl"]],"mobilelegends.com":[["set-local-storage-item","SITE_2609202-COOKIE-BANNER","1"]],"mobiltbredband.se":[["rc","wcc-popup-overflow","body","stay"]],"mobire.ee":[["set-cookie","ws-cookiebar-mobire","7"]],"mocospace.com":[["nostif","adblocker"]],"moneygenius.ca":[["set-cookie","last-chance-optin","true"]],"montgomeryadvertiser.com":[["nostif","gnt_mol_oy"]],"mt07-forum.de":[["acs","$","offsetHeight"]],"mtishows.com":[["set-cookie","cookie-agreed","2"]],"my.eneba.com":[["set-cookie","cconsent","1000"]],"myaccount.puffininsurance.com":[["set-cookie","fm-consent","1"]],"mycare.de":[["set-cookie","cc_advertising","false"],["set-cookie","cc_analytics","false"],["set-cookie","cookie-policy-accepted-v3","true"]],"mydashboard.getlivesmart.com":[["set-cookie","consentAsked","1"]],"myschool.mos.ru":[["set-cookie","USER_AGREEMENT","1"]],"mytime.mk":[["set-cookie","site_cookie_info","2","","reload","1"]],"n.exchange":[["set-local-storage-item","isUserAcceptCookiesPolicy","true"]],"nadia.gov.gr":[["set-cookie","consent-status","1"]],"nahima.be":[["rc","cookieconsent-active","body","stay"]],"narrwalla.de":[["set","realCookieBanner","undefined"]],"naruko.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"natlawreview.com":[["set-cookie","cookie-agreed","0"]],"natuerlich-holzschuhe.de":[["set-cookie","cookie-preference","1"]],"naturseifen-moosmed.de":[["set","realCookieBanner","undefined"]],"nbcconnecticut.com":[["aeld","scroll"]],"nbcdfw.com":[["aeld","scroll"]],"near.org":[["set-local-storage-item","cookies-preference","1"]],"neumann-grafik.de":[["set-cookie","Consent","0"]],"neurologyadvisor.com":[["remove-cookie","hmmet"]],"neviditelnepradlo.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"newpharma.at":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"news-leader.com":[["nostif","gnt_mol_oy"]],"news.chosun.com":[["aeld","copy","getSelection"]],"news18.com":[["acs","serviceworker.register"]],"newsme.gr":[["aopr","nocontextmenu"],["acs","document.oncontextmenu"],["acs","document.ondragstart"]],"ngs.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nike.com.pe":[["set-cookie","consent","true","","reload","1"]],"noriel.ro":[["set-cookie","isAgreed","no"]],"northeastspace.ie":[["rc","wcc-popup-overflow","body","stay"]],"novagenics.com":[["set-cookie","cookie-preference","1"]],"novelpia.com":[["set","document.ondragstart","trueFunc"],["set","document.onselectstart","trueFunc"],["rmnt","script","/disableclick|devtool/"],["ra","oncontextmenu|ondragstart|ondrop|onselectstart","[oncontextmenu]","complete"]],"nsmb.com":[["no-xhr-if","googlesyndication"]],"nusantararom.org":[["aeld","contextmenu"],["aeld","","keyCode"],["no-xhr-if","gif"]],"nwahomepage.com":[["aeld","scroll"]],"nwslsoccer.com":[["set-cookie","AcceptedCookies","1"]],"nydailyquote.com":[["acs","document.onselectstart"]],"ocala.com":[["nostif","gnt_mol_oy"]],"ocean.io":[["set-cookie","cookies","false"]],"odout.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ohli365.vip":[["ra","oncontextmenu|onselectstart|ondragstart"]],"omnisets.com":[["no-fetch-if","adsbygoogle"]],"one.oregon.gov":[["aeld","contextmenu","event.dispatch"],["ra","onpaste","input[onpaste=\"return false\"]","complete"]],"onlinejpgtools.com":[["nano-sib","Clipboard","1000","0.001"]],"onlinestringtools.com":[["nano-sib","Clipboard","1000","0.001"]],"onlinetexttools.com":[["nano-sib","Clipboard","1000","0.001"]],"ontools.net":[["acs","document.oncontextmenu"]],"ontvtime.ru":[["aeld","contextmenu"]],"oocl.com":[["set-cookie","AcceptCookie","yes"]],"oparana.com.br":[["acs","document.oncontextmenu"]],"openanesthesia.org":[["nostif",".LoginSection"]],"operaneon.com":[["set-local-storage-item","consent_analytics","false"],["set-local-storage-item","consent_granted","true"],["set-local-storage-item","consent_marketing","false"]],"optimism.io":[["set-cookie","cookieAccepted","true"]],"optionsgroup.com":[["set-local-storage-item","cookie-consent-declined-version","1"]],"oricon.co.jp":[["ra","oncontextmenu|onselectstart|onmousedown",".all-lyrics[oncontextmenu]","complete"],["aeld","dragstart","","elements",".all-lyrics"]],"otakukan.com":[["acs","document.oncontextmenu"]],"ouasafat.com":[["acs","document.onselectstart"]],"ouiorganic.com":[["set-cookie","allowGetPrivacyInfo","true"]],"paidiatreio.gr":[["acs","document.oncontextmenu"],["acs","document.addEventListener","copy"]],"pancreas.ro":[["aopw","document.onkeydown"]],"panheadcustomales.com":[["set-cookie","age-checked","1"]],"pasticceriaquadrifoglio.com":[["set-cookie","pasticceria-quadrifoglio-ita-cookie-categories","essential"]],"patria.net":[["set","realCookieBanner","undefined"]],"pccomponentes.fr":[["set-cookie","accept_cookie","1"]],"pcso-lottoresults.com":[["aopr","document.oncontextmenu"]],"pechinchou.com.br":[["set-local-storage-item","Pechinchou:CookiesModal","true"]],"pentadoc-radar.com":[["set","realCookieBanner","undefined"]],"petoskeynews.com":[["nostif","gnt_mol_oy"]],"phimdinhcao.com":[["acs","oncontextmenu","keydown"],["aopr","devtoolsDetector"]],"phpconference.com":[["set","realCookieBanner","undefined"]],"phrasemix.com":[["acs","$","showEmailNewsletterModal"]],"piazzadeimestieri.it":[["set","realCookieBanner","undefined"]],"pisr.org":[["aeld","","mdp"]],"pixers.com.tr":[["set-cookie","cookie_analytics","denied"],["set-cookie","cookie_marketing","denied"],["set-cookie","cookies_after_approvals","true"]],"platforma.eb2b.com.pl":[["set-cookie","cookiesAccepted","1","reload","1"]],"player.pl":[["aeld","contextmenu","a"]],"playstationlifestyle.net":[["aopr","__cmpGdprAppliesGlobally"]],"plough.com":[["remove-cookie","ArticlePaywallList"]],"pnj.com":[["nostif","gnt_mol_oy"]],"pokeos.com":[["nostif","pro-modal"],["no-fetch-if","doubleclick"]],"polagriparts.pl":[["aeld","/^(?:contextmenu|copy)$/"],["aopr","document.onkeydown"]],"politico.com":[["remove-cookie","xbc"]],"polsatboxgo.pl":[["set-cookie","rodo-modal-displayed","1"],["set-cookie","rodo-reminder-displayed","1"]],"poplinks.idolmaster-official.jp":[["ra","oncontextmenu|onselectstart|onmousedown","body"]],"portal.hepster.com":[["set-local-storage-item","cookies_accepted","yes"]],"portalportuario.cl":[["aopr","addLink"]],"portalwrc.pl":[["aeld","contextmenu"]],"posterstore.ae":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.be":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.com":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.es":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.ie":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.jp":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.kr":[["set-cookie","synapse-cookie-preferences-set","true"]],"poudouleveis.gr":[["set-cookie","cc_ads","denied"],["set-cookie","cc_analytics","denied"],["set-cookie","cookie_ul","granted"]],"poyabuy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"pracuj.pl":[["set-cookie","gpc_ad","0"],["set-cookie","gpc_analytic","0"],["set-cookie","gpc_audience","0"],["set-cookie","gpc_func","0"],["set-cookie","gpc_v","1"]],"premium-hifi-shop.com":[["set-cookie","cookieDeclined","1"]],"presto-personaldienste.de":[["set","realCookieBanner","undefined"]],"proabschluss-beratung.de":[["rc","dp--cookie-consent","body","stay"]],"probuildstats.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"proficient.fi":[["set-cookie","AcceptKeksit","0","","reload","1"]],"programasvirtualespc.net":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"pruegeltorten.tirol":[["set-cookie","cookie-preference","1"]],"publicopiniononline.com":[["nostif","gnt_mol_oy"]],"pulltaps.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"pulpe.eu":[["set","realCookieBanner","undefined"]],"pureinfotech.com":[["acs","jQuery","ai_adb"]],"putlocker.vip":[["set","devtoolsDetector.launch","noopFunc"]],"puzzle-aquarium.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-dominosa.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-heyawake.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-killer-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-light-up.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-star-battle.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-tapa.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.it":[["set-cookie","puzzleyou-it_cookies_consent_allowlist","0","","reload","1"]],"qwice.com":[["set-cookie","legalOk","true"]],"radio-canada.ca":[["set-cookie","RC_NOTIFICATION_VIE_PRIVEE","false"]],"radio5.com.pl":[["ra","oncontextmenu"]],"randivonal.hu":[["set-cookie","cookieconsent_dismissed","yes"]],"rapid-cloud.co":[["set","devtoolsDetector.launch","noopFunc"]],"rapidairmax.site":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"raspberrypi.dk":[["set-cookie","cs_viewed_cookie_policy","yes"]],"rdsong.com":[["ra","oncontextmenu|ondragstart|onselectstart","body"]],"read.perspectiveship.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"readcomiconline.li":[["rmnt","script","checkAdsBlocked"]],"reading.ac.uk":[["set-cookie","privacy-notification","1","","reload","1"]],"recambioscoche.es":[["aeld","mousedown","function(t)"]],"receptagemini.pl":[["set-local-storage-item","consents-analytics","false"]],"refurbished.nl":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"reise.ruter.no":[["set-cookie","r_hasConsent","true"]],"researchrepository.ul.ie":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"resolution.de":[["set-cookie","hasSeenCookiePopUp","yes"]],"reuters.com":[["set-local-storage-item","ArcP","$remove$"]],"ribbelmonster.de":[["acs","document.oncontextmenu"]],"rittal.com":[["set-cookie","rittalCC","1"]],"rockpoint.cz":[["set-cookie","cookie-bar","0"]],"romprovider.com":[["aopw","document.oncontextmenu"]],"rostics.ru":[["set-cookie","set-cookie","cookieAccess","1"]],"rotlichtaus.de":[["set","realCookieBanner","undefined"]],"roztoczanskipn.pl":[["aeld","contextmenu"]],"rrstar.com":[["nostif","gnt_mol_oy"]],"ruapehubrewing.co.nz":[["set-cookie","is_legal","yes"]],"s.awa.fm":[["aeld","contextmenu","[native code]","elements","#__next"]],"s0urce.io":[["aeld","/^(contextmenu|copy)$/"]],"sabishiidesu.com":[["acs","document.onkeydown"],["aopw","document.oncontextmenu"]],"sahne-band.de":[["set-cookie","ckies_cookielaw","allow"]],"salsajeans.com":[["set-cookie","plg_cp","1","","reload","1"]],"saltairebrewery.com":[["set-cookie","sb-over-18","true"]],"sandisk-cashback.de":[["set-cookie","Cookie_Category_analytics","false"],["set-cookie","Cookie_Category_tracking","false"],["set-cookie","Cookie_Consent","1"]],"santander.rewardgateway.co.uk":[["set-cookie","cookie_consent_status","allow"],["set-cookie","cookie_preferences","10"]],"sartor-stoffe.de":[["set-cookie","cookie-bar","0"]],"scharoun-theater-wolfsburg-webshop.tkt-datacenter.net":[["set-cookie","cookieBannerConfirmed","0","","reload","1"]],"schoenherr.eu":[["set-cookie","sch-ckmdl","true"]],"scholardata.sun.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"scholpp.pl":[["rc","with-featherlight","","stay"]],"science.org":[["remove-cookie","MAID"]],"seacom.co.za":[["set-cookie","cookieConsent","accepted"]],"securityconference.org":[["set-cookie","MSC_Cookiebanner","false"]],"selfstudys.com":[["aeld","contextmenu","preventDefault"],["ra","onselectstart","body"]],"semrush.com":[["set-session-storage-item","sem30_popup_shown","1"]],"senckenberg.de":[["set","realCookieBanner","undefined"]],"senpa.io":[["aeld","contextmenu","_0x"]],"seoul.cs.land.to":[["ra","onselectstart"]],"serwis-zamkow.com":[["acs","document.oncontextmenu"]],"sgbdigital.de":[["set-cookie","tracking","0","","reload","1"]],"shg-kliniken.de":[["set-cookie","CookieConsent","mandatory"]],"shinchu.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"shop.ba.com":[["set-local-storage-item","iag-performance-consent","\"no\""],["set-local-storage-item","iag-targeting-consent","\"no\""]],"shop.norns.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop0315.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"short-story.net":[["nostif","()","2000"]],"shreveporttimes.com":[["nostif","gnt_mol_oy"]],"sicherheitstraining24.de":[["set-cookie","consented_cookie_types","required"]],"simpl.rent":[["set-cookie","acsr","1"]],"simsherpa.com":[["set-cookie","acceptadvertising","no"],["set-cookie","acceptanalytics","no"],["set-cookie","acceptfunctional","yes"]],"singaporeair.com":[["set-cookie","airTRFX_cookies","accepted"]],"sizyreelingly.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"slashgear.com":[["aeld","copy"]],"smalley.com":[["ra","onselectstart|oncopy","body","complete"]],"smashboards.com":[["nosiif","height"]],"smiggle.co.uk":[["set-cookie","cookiePopupAccepted","true"]],"smokingmeatforums.com":[["acs","$","btoa"]],"socialcounts.org":[["no-fetch-if","googlesyndication"]],"sonofsteak.co.uk":[["set-cookie","ce-cookie","N"]],"soundcloudmp3.org":[["set","detectAdBlock","noopFunc"]],"sourceforge.net":[["set","window.cmpmngr.setConsentViaBtn","noopFunc"]],"southcoasttoday.com":[["nostif","gnt_mol_oy"]],"spiked-online.com":[["set-local-storage-item","nudges","$remove$"]],"sportsstation.id":[["set-cookie","acceptConsent","true"]],"sqlook.com":[["set-local-storage-item","cookieChoice","rejected"]],"stmas.bayern.de":[["set-cookie","statistik","0"]],"strefabiznesu.pl":[["set","Didomi","noopFunc"]],"strip.chat":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"supabase.com":[["set-local-storage-item","supabase-consent-ph","false"]],"supreme.com":[["set-local-storage-item","gdpr_cookie","accepted"],["set-local-storage-item","sup_gdpr_cookie","accepted"]],"svenskhalsokost.se":[["set-cookie","cookieaccept","required","","reload","1"]],"sverigesingenjorer.se":[["set-cookie","approvedcookies","no","","reload","1"]],"sweetslyrics.com":[["aeld","copy","preventDefault"]],"swisscard.ch":[["set-cookie","sc-privacy-settings","true"]],"swnsdigital.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"swrng.de":[["set-cookie","CookieLayerDismissed","true"]],"szerencsejatek.hu":[["set-cookie","GDPR_LEVEL","1"],["set-cookie","GDPR_VERSION","1"]],"tailed.ca":[["set-local-storage-item","cookie_consent","false"]],"taiwantrade.com":[["set-cookie","_cmsCookieaccept","Y"]],"teamskeet.com":[["set-cookie","disclaimer_status","agree"]],"tecalliance.net":[["set","realCookieBanner","undefined"]],"techjunkie.com":[["aeld","mouseout"]],"tek.fi":[["set-cookie","tek-cookie-agreed","2"]],"tekniikkaosat.fi":[["set-cookie","__consent","1"]],"telemundopr.com":[["aeld","scroll"]],"telli.dpd.ee":[["set-cookie","__cookie_consent","false"]],"teplickedorty.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"thailandopen.org":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"thebarentsobserver.com":[["set-cookie","mm_f_45691","true"]],"thebeerlibrary.co.nz":[["set-cookie","isAnAdult","true"]],"thebignewsletter.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thebolditalic.com":[["set-local-storage-item","201805-policy|accepted","1"]],"thechampionpub.co.uk":[["set-cookie","ce-cookie","N"]],"theencorestratford.co.uk":[["set-cookie","ce-cookie","N"]],"thefederalist.com":[["set-cookie","pum-276000","true"]],"thefly.com":[["set-cookie","cookie_consent","1"]],"thegatewaypundit.com":[["aeld","","adtoniq"]],"theghostinmymachine.com":[["acs","document.oncontextmenu"]],"thehopvault.com":[["set-cookie","isAnAdult","true"]],"theinformation.com":[["set-cookie","marketing-modal-closed-1","2"]],"thejournal.ie":[["set-local-storage-item","total_page_views","2"]],"thelambchiswick.co.uk":[["set-cookie","ce-cookie","N"]],"themeparktourist.com":[["nosiif","visibility","1000"]],"thenekodark.com":[["aeld","contextmenu"]],"thenorthwestern.com":[["nostif","gnt_mol_oy"]],"theroom.lol":[["set-local-storage-item","room-welcome-ack-v1","1"]],"thewpclub.net":[["aeld","","mdp"]],"ti.com":[["set-cookie","explicit_consent","true"]],"ticket.io":[["set-cookie","privacyCookie","1","","reload","1"]],"ticketmelon.com":[["set-local-storage-item","cookie_accept","true"]],"tidningenbalans.se":[["set-cookie","CookieConsent","true","","reload","1"]],"tiefenthaler-landtechnik.de":[["set-cookie","allowTracking","false"]],"tieku.fi":[["set","cicc.cookie_cat_statistic","true"],["set","cicc.cookie_cat_functional","true"],["set","cicc.cookie_cat_marketing","true"]],"tiermasseur-mannsberger.at":[["set","realCookieBanner","undefined"]],"titantvguide.com":[["set-local-storage-item","COOKIE_CHECK","false"]],"tommy.com":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"tonispizza-rastatt.de":[["set","realCookieBanner","undefined"]],"toplink.de":[["set","realCookieBanner","undefined"]],"toppremiumpro.com":[["aeld","/contextmenu|selectstart|copy|dragstart/"],["aopr","cpp_loc"]],"toxitabellaeatrebates306.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"transinfo.pl":[["aeld","copy"]],"trimel.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"triumphshop.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"tui.dk":[["rc","no-scroll","body","stay"]],"tunein.com":[["set-cookie","hideMacDesktopDialog","true"],["set-cookie","navBasedDialogManager","true"]],"tuscaloosanews.com":[["nostif","gnt_mol_oy"]],"tutoganga.blogspot.com":[["aopw","disableselect"]],"tv-trwam.pl":[["set-cookie","ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["set-cookie","ARE_MARKETING_COOKIES_ACCEPTED","true"],["set-cookie","ARE_REQUIRED_COOKIES_ACCEPTED","true"],["set-cookie","HAS_COOKIES_FORM_SHOWED","true"]],"tvnoov.com":[["set","HTMLDivElement.prototype.oncontextmenu","trueFunc"]],"tvtun.com":[["aeld","contextmenu"]],"tweaking4all.com":[["nostif","adsbygoogle","2000"]],"twgtea.com":[["set-local-storage-item","LOCALSTORAGE_COOKIE_ALLOW","false"]],"u.gg":[["rmnt","script","reviveScroll","excludes","self.__next"]],"ukrainashop.com":[["aeld","contextmenu"]],"umlandscout.de":[["set-cookie","loader","1"]],"unavidadeviaje.com":[["rc","show--consent","body","stay"]],"underconsideration.com":[["nostif","test.remove"]],"unisa.ac.za":[["set-local-storage-item","cookieConsent","essential"]],"upreply.de":[["set","realCookieBanner","undefined"]],"uranium.io":[["set-cookie","accepted-cookies","false"]],"utour.me":[["nostif","myModal","3000"]],"vaccineadvisor.com":[["remove-cookie","hmmet"]],"vadhander.hogakusten.com":[["set","settings.consent","true"]],"valid.x86.fr":[["rmnt","script","/setTimeout.*style/"]],"varcevanje-energije.si":[["set-cookie","cmplz_banner-status","dismissed"]],"veblr.com":[["ra","oncontextmenu","#VdoPlayerDiv"]],"vedantu.com":[["aeld","contextmenu","preventDefault"]],"verbraucherrecht.at":[["set-cookie","vkicookieconsent","0"]],"verfwebwinkel.be":[["set-cookie","pmStorage","1"]],"verpackungsstadl.at":[["rc","disable","div","stay"]],"vg247.com":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"vgembed.com":[["nosiif","detect"],["set","console.clear","noopFunc"],["set","DD","trueFunc"]],"vidtube.site":[["set","devtoolsDetector.launch","noopFunc"]],"vienna-interiors.at":[["set","realCookieBanner","undefined"]],"vinaurl.blogspot.com":[["acs","matchMedia"],["aopr","shortcut"],["acs","document.onkeydown"]],"vip-cam.xyz":[["set-cookie","agreeterms","1","","reload","1"]],"virpe.com":[["aopr","document.oncontextmenu"],["ra","onselectstart"]],"visaliatimesdelta.com":[["nostif","gnt_mol_oy"]],"vivamanchester.co.uk":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"viveretenerife.com":[["aeld","contextmenu"]],"voe.sx":[["aeld","/keydown|keyup/","keyCode"],["aeld","contextmenu"]],"voeunbl0ck.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"vox.com":[["set-local-storage-item","vox_article_readcount","$remove$"],["set-local-storage-item","vox_article_readcount_count","$remove$"],["nostif","adsBlocked"]],"w6-wertarbeit.de":[["set-cookie","cookie-preference","1"]],"wallpaper.com":[["set-cookie","FTR_Article_PageView","2"]],"walmart.com":[["set-session-storage-item","va-notice-seen","1"]],"warrenjames.co.uk":[["set-cookie","GDPR.CONSENT.ANALYTICS","false"],["set-cookie","GDPR.CONSENT.MARKETING","false"],["set-cookie","GDPR.CONSENT.NECESSARY","true"],["set-cookie","GDPR.CONSENT.STATUS","true","","reload","1"]],"watch.lonelil.com":[["set","navigator.userAgent",""]],"watchaut.film":[["set-cookie","cookieConsent","required"]],"wattoo.dk":[["set-cookie","sscm_consent_widget","1"]],"web.spaggiari.eu":[["set-cookie","cookie_consent","3"]],"webshopdewisselslag.recreatex.be":[["set-cookie","acceptAnalyticsCookies","False"],["set-cookie","acceptFunctionalCookies","True"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"webtimiser.de":[["set","realCookieBanner","undefined"]],"weekend.ee":[["set-cookie","amcookie_allowed","1"]],"weetabix.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.pt":[["rc","wcc-popup-overflow","body","stay"]],"weetabixonthego.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"wenku.baidu.com":[["aeld","/contextmenu|dragstart|keydown/","event.dispatch.apply"]],"werkenbijiciparisxl.nl":[["rc","is-active-cookiebar","","stay"]],"whiskyandmore.co.nz":[["set-cookie","allowage1","1"]],"whitehartbrasted.co.uk":[["set-cookie","ce-cookie","N"]],"wide-angle.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"winlocal.de":[["set","realCookieBanner","undefined"]],"wisconsinrapidstribune.com":[["nostif","gnt_mol_oy"]],"wizardshop.su":[["set-cookie","alert_cookie","1"]],"wobit.com.pl":[["set-cookie","accepted_cookies","functional","","reload","1"]],"womanandhome.com":[["set-cookie","FTR_Article_PageView","2"]],"woolsocks.eu":[["set-cookie","ws-cookie-Techniques","true"]],"wouterplanet.com":[["ra","oncontextmenu","body","complete"],["nosiif","_0x"]],"wqad.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wtsenergy.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"wunderpen.com":[["set","realCookieBanner","undefined"]],"wusa9.com":[["aeld","/^(mouseout|mouseleave)$/"]],"www-cornwalllive-com.translate.goog":[["rmnt","script","loc.hostname"]],"www-glasgowlive-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www-leeds--live-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.facebook.com":[["json-prune","require.0.3.0.__bbox.define.[].2.is_linkshim_supported require.0.3.0.__bbox.define.[].2.click_ids"]],"xham.live":[["set-cookie","cookie_accept","1"]],"xhamster.desi":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"]],"xhbig.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhdate.world":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhplanet2.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xledger.net":[["set-cookie","agreesWithCookies","true"]],"xm.sk":[["set-cookie","cookie-bar","0"]],"xossipy.com":[["ra","oncopy|oncut"]],"yamazaki.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"yogainspires.co.uk":[["set","realCookieBanner","undefined"]],"youcom.com.br":[["set-cookie","termos-aceitos","ok"]],"youmath.it":[["aopw","document.onmousedown"],["aopw","document.onselectstart"],["aopr","document.onselectstart"],["set","disableselect","trueFunc"]],"youtubekids.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"yurishop.it":[["set","realCookieBanner","undefined"]],"zanesvilletimesrecorder.com":[["nostif","gnt_mol_oy"]],"zefoy.com":[["nostif","debugger"]],"zeta-ai.io":[["set-local-storage-item","mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"]],"zimmerwetter.de":[["set","realCookieBanner","undefined"]],"zipcode.com.ng":[["aeld","copy","Source"],["rmnt","script","document.onselectstart"]],"zipfelbund.de":[["set-cookie","Consent","0"]],"zur-glocke.com":[["set","realCookieBanner","undefined"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
