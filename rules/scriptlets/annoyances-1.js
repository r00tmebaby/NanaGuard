/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0815.eu":[["set-cookie","cookie-preference","1"]],"10000recipe.com":[["acs","$","contextmenu"]],"1028loveu.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"10tv.com":[["aeld","mouseout"]],"116117.fi":[["set-local-storage-item","cookie-consent","1"]],"164.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"173.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"220.lv":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"360doc.com":[["aopr","document.oncontextmenu"],["aopw","document.body.oncopy"],["set","document.body.onmouseup","null"]],"63.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"69translations.blogspot.com":[["aopr","document.onselectstart"],["aopr","document.onmousedown"],["aopr","document.onclick"]],"74.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"9tsu.vip":[["set","devtoolsDetector","{}"]],"aberdeennews.com":[["nostif","gnt_mol_oy"]],"abysscdn.com":[["set","devtoolsDetector.launch","noopFunc"]],"accademiainformatica.com":[["set","realCookieBanner","undefined"]],"accgroup.vn":[["aeld","contextmenu"],["aopr","document.oncopy"]],"account.samsung.com":[["set-cookie","sa_enable","off"]],"aceitessatunion.com":[["set-cookie","cmplz_banner-status","dismissed"]],"actvid.com":[["nosiif","_0x"]],"adfilteringdevsummit.com":[["set-local-storage-item","acceptCookies","no"]],"adidas.se":[["set-cookie","notice_preferences","2"]],"adressit.com":[["rmnt","script","clipboard_disabled"]],"afoto.cz":[["set-cookie","cookie_consent","yes"]],"aha.or.at":[["set-cookie","cookieConsent_marketing","false"],["set-cookie","cookieConsent_required","true","","reload","1"]],"ahepaseniorliving.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"aida64.it":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aileen-novel.online":[["acs","disable_hot_keys"],["acs","document.oncontextmenu"]],"ajanvaraus.idealinspect.fi":[["set-local-storage-item","cookieConsent","0"]],"akademie-management.de":[["set","realCookieBanner","undefined"]],"allokebab-pau.fr":[["rc","unreadable-display","","stay"]],"alohafromdeer.com":[["set-local-storage-item","cookies-consent","0"]],"alpen.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"alphagirlreviews.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"alpine-hygiene.ch":[["set-cookie","cookie-preference","1"]],"aluypvc.es":[["set-cookie","cookiesConsent","1"],["set-cookie","cookiesPreferences","0"],["set-cookie","cookiesStatistics","0"]],"amestrib.com":[["nostif","gnt_mol_oy"]],"anacondastores.com":[["set-cookie","hideCookiesNotification_AU_en","1"]],"anderweltverlag.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"androidmtk.com":[["acs","document.oncontextmenu"]],"androidpolice.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"anikaitv.to":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"animenewsnetwork.com":[["set","ANN.ads.adblocked","false"]],"aniwatchtv.to":[["set","devtoolsDetector.launch","noopFunc"]],"anonpaste.pw":[["set-local-storage-item","cookieBanner","true"]],"answersafrica.com":[["acs","document.oncontextmenu"]],"antena1.live":[["aeld","contextmenu"]],"apornstories.com":[["aopw","killCopy"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown"]],"appofmirror.com":[["acs","nocontextmenu"]],"aqua-store.fr":[["set-cookie","abz_seo_choosen","1"]],"argusleader.com":[["nostif","gnt_mol_oy"]],"armedangels.com":[["set-cookie","cookie-preference","1"],["set-cookie","cookie-preference_renew10","1"],["set-cookie","cookie_consent_group_technical","1"]],"arrax.io":[["set","ramp.addUnits","noopFunc"]],"artesacro.org":[["aeld","contextmenu"],["acs","document.onselectstart"]],"arti-definisi-pengertian.info":[["set","document.oncontextmenu","null"],["aopw","document.onselectstart"],["aopw","document.ondragstart"]],"asf.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"asheville.com":[["nostif","adblock"]],"assosia.com":[["rc","wcc-popup-overflow","body","stay"]],"astroportal.com":[["set-cookie","applus_consent","1"]],"atani.com":[["set-cookie","anal-opt-in","false"],["set-cookie","cookies_consent","true"]],"audinifer.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"audiologyresearch.org":[["rmnt","script","document.oncontextmenu"]],"audiostereo.pl":[["nostif","adb"]],"auto-treff.com":[["acs","$","offsetHeight"]],"auto.mahindra.com":[["set-cookie","consentTracking","false"]],"auto24parts.com":[["set-local-storage-item","show_consent_modal","1"],["set-local-storage-item","user_consents","[]"]],"autodude.fi":[["set-local-storage-item","cookieConsent","necessary"]],"autoverwertung-berk.de":[["set","realCookieBanner","undefined"]],"avdelphi.com":[["aeld","","_0x"],["set","f12lock","false"],["nosiif","debugger"]],"avianca.com":[["set-cookie","airTRFX_cookies","accepted"]],"babiesrus.ca":[["set-cookie","cookieModal","false"]],"badayak.com":[["acs","document.oncontextmenu"]],"baltic-watches.com":[["set-cookie","consent","0","","reload","1"]],"baseblocks.tenereteam.com":[["set-local-storage-item","isAcceptCookie","false"]],"baselime.io":[["set-local-storage-item","closed","true"]],"bayern-gegen-gewalt.de":[["set-cookie","required","1"]],"bayernlb.de":[["set-cookie","layerCookie","true","","reload","1"],["set-cookie","video","true"]],"bayernportal.de":[["set-cookie","comfortConsent","true"],["set-cookie","cookieConsent","true","","reload","1"],["set-cookie","videoConsent","true"]],"bbc.com":[["set-local-storage-item","cvcConsentGiven","true"],["nano-stb","viewClickAttributeId"]],"bcs-express.ru":[["set-local-storage-item","Express.cookie_agreement_shown","true"]],"bearboss.com":[["set-cookie","allowGetPrivacyInfo","true"]],"bejson.com":[["set","killads","true"]],"beleaf.ch":[["set-cookie","beleaf-che-cookie-categories","essential"]],"bestwig.de":[["set","realCookieBanner","undefined"]],"bettersafe.at":[["set-cookie","COOKIEBAR_1","0"]],"bibliacatolica.com.br":[["aopr","getSelection"]],"bigulnews.tv":[["aeld","/contextmenu|keydown|keyup|copy/"],["aopw","stopPrntScr"]],"bike-onlineshop.de":[["rc","disable","div","stay"]],"bike-supply.de":[["rc","disable","div","stay"]],"bitblokes.de":[["acs","document.getElementsByTagName","null"]],"bitso.com":[["set-cookie","bitso_cc","1"]],"bklm-ahaus.de":[["set","realCookieBanner","undefined"]],"blog.tangwudi.com":[["rmnt","script","stopPrntScr"]],"blukit.com.br":[["set-cookie","blukit_novo","true"]],"bo3.gg":[["set-local-storage-item","cookiesAccepted","true"]],"boke112.com":[["aopw","stopPrntScr"]],"bonbon.hr":[["set-cookie","gdpr_level_1_necessary","1"]],"boonlessbestselling244.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"borger.dk":[["set-cookie","BDK_CookieLawAccepted","false","","reload","1"]],"bouwmatron.nl":[["set-cookie","consent-cookies","1"]],"brawlstats.com":[["set-cookie","accept-cookies","0"]],"brazzersnetwork.com":[["set-cookie","cookieConsent","0","","reload","1"]],"bremerhaven.de":[["set-cookie","GDPRp","no"]],"britannica.com":[["acs","document.createElement","admiral"]],"brodbeck-dd.de":[["set","realCookieBanner","undefined"]],"brutal.io":[["set","document.oncontextmenu","true"]],"bsi.si":[["set-cookie","gdpr_cookie","functional","","reload","1"]],"buckscountycouriertimes.com":[["nostif","gnt_mol_oy"]],"buehler-segelfreunde.de":[["set-cookie","Consent","0"]],"bugzilla.mozilla.org":[["set-cookie","moz-consent-pref","yes"]],"businesshemden.com":[["set-cookie","mnd-cookie-accepted-businesshemdencom1","1"],["set-cookie","mnd-mkt_cookie","false"],["set-cookie","mnd-statistics_cookie","false"]],"butterfly-circus.de":[["set-cookie","cookie-preference","1"]],"bzgcc.bz.it":[["set-cookie","ris_cookie_setting","1"]],"bzgsaltenschlern.it":[["set-cookie","ris_cookie_setting","1"]],"c4ddownload.com":[["aopr","b2a"]],"caldaro.eu":[["set-cookie","ris_cookie_setting","1"]],"caller.com":[["nostif","gnt_mol_oy"]],"camp-fire.jp":[["set-cookie","terms_agreement_popup_agreed","true","","reload","1"]],"camra.org.uk":[["set-cookie","camra_experience_cookie_consent","1"],["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"canale.live":[["aopr","document.oncontextmenu"]],"canela.tv":[["set-local-storage-item","cks","0"]],"cantondailyledger.com":[["nostif","gnt_mol_oy"]],"casapariurilor.ro":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"castleportobello.co.uk":[["set-cookie","ce-cookie","N"]],"ccoo.es":[["set-cookie","config","0000","","reload","1"]],"cdntvmedia.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"cellcom.co.il":[["set-local-storage-item","isCookiesAccepted","true"]],"charbelnemnom.com":[["aeld","/contextmenu|keydown/"]],"chieftain.com":[["nostif","gnt_mol_oy"]],"chita.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"clasicotas.org":[["ra","oncontextmenu|onselectstart|ondragstart"]],"classnotes.org.in":[["aopw","document.oncontextmenu"]],"clearblue.com":[["set-cookie","kali-cc-agreed","true"]],"cleverpush.com":[["set","realCookieBanner","undefined"]],"clubulbebelusilor.ro":[["aeld","contextmenu"]],"cmos.ie":[["rc","wcc-popup-overflow","body","stay"]],"cnki.net":[["aeld","contextmenu"]],"cocktailsworld.net":[["set","realCookieBanner","undefined"]],"codedead.com":[["set-local-storage-item","hasAcceptedCookieNotice","true"]],"coffeeforums.co.uk":[["acs","document.getElementById","undefined"]],"cografyahocasi.com":[["acs","document.addEventListener","preventDefault","/^data:text\\/javascript/"]],"colourbox.com":[["set-cookie","cookie_consent_all","1"]],"columbiaspectator.com":[["nostif","ads","2000"]],"comune.rasunanterselva.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanmartinoinbadia.bz.it":[["set-cookie","ris_cookie_setting","1"]],"context.news":[["set-cookie","cookieConsent","true"]],"cool-etv.net":[["aeld","contextmenu"],["set","console.clear","noopFunc"]],"coolwallpapers.me":[["nosiif","dfgh-adsbygoogle"]],"cordon.de":[["set-cookie","cookie-preference","1"]],"cormarcarpets.co.uk":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"corriereadriatico.it":[["aeld","mouseleave"]],"cosasdemujer.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cotopaxi.com":[["set-cookie","cookie_notice","1"]],"countrylife.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"courier-journal.com":[["nostif","gnt_mol_oy"]],"crazeuk.com":[["set","realCookieBanner","undefined"]],"croco-kid.com":[["rc","unreadable-display","","stay"]],"cronista.com":[["aeld","copy","replaceCopiedText"]],"currentargus.com":[["nostif","gnt_mol_oy"]],"cyamidpulverulence530.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"cyberkrafttraining.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cypherscans.xyz":[["aeld","contextmenu"]],"dacapopress.com":[["set-cookie","cookie__newsletter_popup","1"],["set-cookie","cookie__privacy_policy","1"]],"dailyworld.com":[["nostif","gnt_mol_oy"]],"dasfutterhaus.at":[["set-cookie","dsgvo_consent","1"]],"daum.net":[["acs","document.oncontextmenu"],["ra","oncontextmenu"]],"dbschenker-seino.jp":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"]],"de-de.eundl.de":[["set-cookie","cs","0"]],"deh.mt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"delker-optik.de":[["set-cookie","cookie-preference","1"]],"derhoerbuchblog.de":[["set","realCookieBanner","undefined"]],"derscharfemaxx.com":[["set-cookie","scharfer-maxx-che-cookie-categories","essential"]],"desertsun.com":[["nostif","gnt_mol_oy"]],"deutschebanksae.my.site.com":[["set-cookie","cookieAuth","1"]],"developer-blog.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"dewesoft.com":[["set-local-storage-item","consent","false"]],"dexterdaily.com":[["set-cookie","techspot_pro_cookie_consent","1"]],"dgsf.org":[["set-cookie","confirm_cookies","1"]],"diaforetiko.gr":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"diariodoiguacu.com.br":[["ra","ondragstart|onselectstart"]],"die-plank.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-cookie","ckies_facebook_post","deny"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_itunes","deny"],["set-cookie","ckies_stripe","allow"]],"digminecraft.com":[["set","placeAdsHandler","noopFunc"]],"dmsg.de":[["rc","dp--cookie-consent","body","stay"]],"dndbeyond.com":[["set-cookie","cookie-consent","denied"]],"do.de":[["set","realCookieBanner","undefined"]],"docs.civic.com":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.rememberizer.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"dqr.de":[["set-cookie","gsbbanner","closed"]],"drawasaurus.org":[["nostif","forceRefresh"]],"drinkitnow.de":[["set-cookie","cookie-preference","1"]],"dublinhealthscreening.ie":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"duft-werk.de":[["set","realCookieBanner","undefined"]],"durex-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"dxmaps.com":[["nostif","adsbygoogle","5000"]],"e-file.pl":[["set-cookie","efile-cookiename-","1"]],"e-pole.pl":[["set-cookie","epole_cookies_settings","true"]],"easyjet.com":[["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_easyJet_Marketing","0"]],"eatsalad.com":[["set-cookie","userCookies","true"]],"eboo.lu":[["set-cookie","PostAnalytics","0"]],"ecuavisa.com":[["set-cookie","user_cookie_consent","1"]],"edurev.in":[["aopr","openOverlaySignup"],["acs","$","contextmenu"],["aeld","copy"]],"eezy.nrw":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"efl.com":[["set-cookie","cookie_consent_given","true"]],"ekiwi.de":[["set","realCookieBanner","undefined"]],"electronics.semaf.at":[["rc","show--consent","body","stay"]],"elgiganten.se":[["set","cicc.cookie_cat_statistic","true"]],"elheraldo.hn":[["aopw","addLink"]],"elitepvpers.com":[["nostif","$"],["acs","$","Promise"]],"ellasblog.de":[["set","realCookieBanner","undefined"]],"emall.by":[["set-local-storage-item","isAcceptCookiesNew","true"]],"embedplus.com":[["set-cookie","ytprefs_gdpr_consent","1"]],"emmi-good-day.com":[["set-cookie","good-day-che-cookie-categories","essential"]],"encord.com":[["set-cookie","myAwesomeCookieName2","true"]],"enso.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","allowMarketingCookies","false"],["set-cookie","cookiesAccepted","true"]],"epidemicsound.com":[["set-cookie","hasSeenCookieDisclosure","true"]],"erfurt-touristinformation.de":[["set","realCookieBanner","undefined"]],"esim.redteago.com":[["set-cookie","nCookieVisible","2"]],"esimplus.me":[["set-cookie","cookie-consent","1","","reload","1"]],"esscctv.com":[["ra","onselectstart","html[onselectstart]"]],"estrelabet.bet.br":[["set-local-storage-item","cookieConsent","true"]],"eurac.edu":[["set-cookie","eurac_cookie_consent","true"]],"europemadesoftware.eu":[["set-local-storage-item","cookiesAccepted","1"]],"evroopt.by":[["aeld","/^(?:click|scroll|keydown|touchstart|mouseenter)$/","cookie.get"]],"fairyabc.com":[["nostif","adblock"]],"fanvue.com":[["set-cookie","cookieConsent","accepted"],["set-cookie","fv.cookies_accepted","dismissed"]],"farm-ro.desigusxpro.com":[["aopr","document.oncopy"]],"feel-the-darkness.rocks":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","disableSelection"]],"feelhealthy.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"felizemforma.com":[["aeld","contextmenu"],["acs","document.onkeydown"]],"fetch.ai":[["set-cookie","consent","false"]],"filiser.eu":[["nostif","(!0)","8000"]],"firmwarefile.com":[["acs","document.oncontextmenu"]],"firsttable.co.uk":[["set-cookie","CookieConsentFT","1"]],"firsty.app":[["set-local-storage-item","cookieConsent","true"]],"fish.shimano.com":[["set-cookie","cookiePrefAnalytics","0"],["set-cookie","cookiePrefMarketing","0"],["set-cookie","cookiePrefThirdPartyApplications","0"]],"flashdumpfiles.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"fleksberegner.dk":[["set-local-storage-item","vue-cookie-accept-decline-cookiePanel","accept"]],"fogaonet.com":[["set-cookie","fn_cookie_banner","1"]],"foliamalacologica.com":[["set-cookie","declineOwnCookiesCookie","1"]],"ford-autogalerie-alfeld.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-dinnebier-leipzig.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hommert-coburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-strunk-koeln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.de":[["set-cookie","cookieAcknowledged","true"]],"format.bike":[["set-local-storage-item","user_cookie","1"]],"formatatmak.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"forum.digitalfernsehen.de":[["set-cookie","xf_notice_dismiss","1"]],"foxteller.com":[["ra","oncontextmenu|oncopy|oncut","[id^=\"chapter\"]","complete"],["aeld","contextmenu","preventDefault"],["aeld","selectionchange",".html"],["set","document.onkeydown","noopFunc"]],"freemans.com":[["set-cookie","firstPartyDataPrefSet","true"]],"freerapidleechlist.blogspot.com":[["acs","document.oncontextmenu"]],"freewatchtv.top":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"futspo.de":[["rc","disable","div","stay"]],"fwd.com":[["set-local-storage-item","cookieBannerRead","true"],["set-local-storage-item","cookieBannerReadDate","1"]],"fz-juelich.de":[["set-cookie","confirm_cookies","1"]],"g-nestle.de":[["set-cookie","cookie-preference","1"]],"gagetmatome.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"gainesville.com":[["nostif","gnt_mol_oy"]],"galinos.gr":[["nostif","pleaseSupportUs"]],"gansel-rechtsanwaelte.de":[["set-cookie","cnp_consent","true"]],"gardenmediaguild.co.uk":[["set-cookie","AllowCookies","false","","reload","1"]],"gasometer.de":[["set-cookie","cookie_consent_external-media","true"],["set-cookie","cookie_consent_shown","true"],["set-cookie","cookie_consent_statistics","false"]],"gay69.stream":[["aopr","disableSelection"],["aopw","nocontext"]],"gcol.de":[["set","realCookieBanner","undefined"]],"geelyautomobile.by":[["set-cookie","hide-cookie-message","true"]],"geizhals.de":[["set-local-storage-item","dnt_message_shown","1"]],"gemeinde.klausen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.neumarkt.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.olang.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.partschins.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.percha.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.rodeneck.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.salurn.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gesundheitsamt-2025.de":[["set-cookie","COOKIE_LVL","1"]],"gesundheitsladen-online.de":[["set","realCookieBanner","undefined"]],"gesundheitsmanufaktur.de":[["set-local-storage-item","cookiePreference","required"],["set-local-storage-item","df-cookies-allowed","true"]],"gezimanya.com":[["ra","oncontextmenu|onselectstart|onselect|oncopy"],["acs","jQuery","Drupal"]],"ggeguide.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"gladiator-fightwear.com":[["set-cookie","cookie-preference","1"]],"globalcitizensolutions.com":[["rc","gcs-cc-lock","html","stay"]],"gmx.co.uk":[["aeld","mouseout","openLayer"]],"goerie.com":[["nostif","gnt_mol_oy"]],"golfmonthly.com":[["set-cookie","FTR_Article_PageView","2"]],"googleapis.com.de":[["aeld","/contextmenu|keydown/"],["rmnt","script","/oncontextmenu|onselectstart/"]],"gotransit.com":[["set-cookie","cookies_accepted","true"]],"gov.lv":[["set-cookie","allowCookies","0"]],"gplinks.co":[["aeld","contextmenu"]],"granola.ai":[["set-local-storage-item","cookie_consent","no"]],"grants.at":[["set-cookie","cookieconsent_status_new","1"]],"graphy.com":[["set-cookie","has_accepted_cookies","true"]],"grizly.hu":[["set-cookie","mCs-chk","1"]],"guiasaude.info":[["aeld","contextmenu"],["acs","document.onkeydown"]],"h-andreas.com":[["set-cookie","cookie-preference","1"]],"hacktron.ai":[["set-local-storage-item","hacktron-cookie-consent","rejected"]],"hagagruppen.se":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"hainaut-caravaning.be":[["set-cookie","cookie-ok","1","","reload","1"]],"handball-world.news":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"handelsbanken.co.uk":[["set-cookie","shb-consent-cookies","false"]],"hanerix.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hansa-online.de":[["ra","oncontextmenu","body","complete"]],"hardware-helden.de":[["set","realCookieBanner","undefined"]],"hartsboatyard.co.uk":[["set-cookie","ce-cookie","N"]],"haulageexchange.co.uk":[["set-cookie","nc_analytics","rejected"],["set-cookie","nc_cookies","accepted"],["set-cookie","nc_marketing","rejected"]],"hdrez.com":[["aopw","document.oncontextmenu"]],"heidegrill.com":[["set-cookie","cookie-preference","1"]],"hemas.pl":[["aeld","contextmenu"]],"hentailib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"herrlichergarten.de":[["set","realCookieBanner","undefined"]],"heysummit.com":[["set-cookie","hs_cookieconsent","true"]],"hienzo.com":[["ra","oncontextmenu"]],"hifi-punkten.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"hiphopa.net":[["rmnt","script","oncontextmenu"]],"hiring.amazon.com":[["set-local-storage-item","cookieConsent","true"]],"hollywoodmask.com":[["aeld","/copy|cut|paste|selectstart/"],["nostif","pop"]],"holzkern.com":[["set-cookie","amcookie_allowed","1"]],"home.novel-gate.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"home.shortcutssoftware.com":[["set-local-storage-item","ngx-webstorage|cookies","false"]],"how-to-pc.info":[["set","pqdxwidthqt","false"]],"html5games.com":[["set-session-storage-item","fa-games-consent-given","true"]],"htrnews.com":[["nostif","gnt_mol_oy"]],"hurton.pl":[["set-cookie","is_allowed_client_traking_niezbedne","1","","reload","1"]],"husseinezzat.com":[["aeld","contextmenu"],["aeld","keydown"]],"hyperoptic.com":[["set-cookie","ho_cookie_consent","essential"]],"hypnose.ac":[["set","realCookieBanner","undefined"]],"i-fundusze.pl":[["set-local-storage-item","cookiePolicy","true"]],"ibomair.com":[["set-cookie","cmplz_banner-status","dismissed"]],"ihrlabor.befundpost.at":[["set-cookie","consent","1","","reload","1"]],"ikorektor.pl":[["nostif","ad"]],"ilclubdellericette.it":[["acs","document.oncontextmenu"]],"immobiliaremia.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"incidenthub.cloud":[["set-local-storage-item","cookieConsent","denied"]],"indiatimes.com":[["aeld","copy"]],"info-beihilfe.de":[["acs","document.oncontextmenu"]],"infobroker.de":[["set","realCookieBanner","undefined"]],"intergiro.com":[["set-cookie","cookie_policy","true"]],"intermedicom-gmbh.jimdosite.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_maps","allow"]],"iplayerhls.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"ipphone-warehouse.com":[["aeld","contextmenu"],["aeld","afterKeydown"],["aeld","keydown","void"],["aeld","copy","void"]],"iqoption.com":[["set-local-storage-item","cookie_usage_accepted","1"]],"iqskitchen.de":[["set","realCookieBanner","undefined"]],"istaf-indoor.de":[["set","realCookieBanner","undefined"]],"ithacajournal.com":[["nostif","gnt_mol_oy"]],"itscybertech.com":[["acs","check","debugger"]],"itv.com":[["set-cookie","accept-cookies","accepted"]],"iwanichi.co.jp":[["ra","oncontextmenu|onselectstart"]],"iziconfort.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"j91.asia":[["aeld","contextmenu"]],"jaapeden.nl":[["set-cookie","acceptAnalyticsCookies","false"],["set-cookie","acceptFunctionalCookies","true"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"jacksonville.com":[["nostif","gnt_mol_oy"]],"japancamerahunter.com":[["acs","jQuery","ads"]],"japonhentai.com":[["acs","addEventListener","ays_tooltip"],["rmnt","style","::selection"]],"javbest.xyz":[["acs","$","contextmenu"]],"jeu2048.fr":[["aopw","FuckAdBlock"]],"jfdb.jp":[["aeld","/contextmenu|keydown/"]],"jito.network":[["set-local-storage-item","hasConsentedPH","no"]],"jobskaro.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"jootc.com":[["aopr","disable_copy"],["aopr","disable_hot_keys"],["aopw","document.oncontextmenu"],["set","document.onkeyup","null"],["set","document.ondragstart","null"],["aeld","keydown"]],"juancarlosmolinos.net":[["aopw","ABDSettings"]],"juegos.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"juegosdetiempolibre.org":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"justanswer.es":[["set-cookie","cbChecked","true"]],"juwelier-dringo.de":[["set","realCookieBanner","undefined"]],"kamerabudaya.com":[["ra","onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"]],"kancelarskepotreby.net":[["set-cookie","adsCookies","false"],["set-cookie","inshopCookiesSet","true"],["set-cookie","performanceCookies","false"]],"kanta.fi":[["set-cookie","KantafiCookies","false"]],"kashmirobserver.net":[["acs","document.getElementById","ad-blocker"]],"katholisches.info":[["nostif","pop"]],"kbmv-matting.de":[["set","realCookieBanner","undefined"]],"khanacademy.org":[["set-local-storage-item","ka:4:legal-updates","true"]],"khou.com":[["aeld","mouseout"]],"kiakkoradio.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kierratyskeskuspatina.fi":[["set-cookie","epCookieConsent","0","","reload","1"]],"kirannewsagency.com":[["aopw","disableSelection"],["acs","document.oncontextmenu"]],"kissnofrog.com":[["set-cookie","cdisc","true","","reload","1"]],"kitzbuehel.at":[["set-cookie","ris_cookie_setting","1"]],"kiuruvesilehti.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"klartext-ne.de":[["rmnt","script","contextmenu"]],"kletterkogel.de":[["set-cookie","cookie-preference","1"]],"kmo.to":[["set","console.clear","undefined"]],"knitted-anatomy.at":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_analytics","deny"]],"korona.co.jp":[["ra","oncopy|oncontextmenu","body"]],"kpcen-torun.edu.pl":[["set-cookie","cookieModal","true"]],"krav-maga-online.de":[["set-cookie","consent_cookie","declined"]],"kritichno.bg":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ksaexpo2025.sa":[["set-cookie","cookies-accepted","true","","reload","1"]],"kukaj.io":[["set","devtoolsOpen","false"]],"kuopas.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kyoceradocumentsolutions.it":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.mx":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"lacasadavantialsole.org":[["set","realCookieBanner","undefined"]],"lasmallagency.com":[["set-cookie","gatsby-gdpr","false"]],"lavanguardia.com":[["set","Didomi","noopFunc"]],"lc.paragon-software.com":[["set-cookie","cookie-accepted","yes"]],"lcsun-news.com":[["nostif","gnt_mol_oy"]],"learngerman.dw.com":[["set-local-storage-item","hasAcceptedGdpr","true"]],"leetcode.cn":[["aeld","copy","","elements","#__next"]],"leibniz.com":[["set-cookie","consent","1"]],"lenconnect.com":[["nostif","gnt_mol_oy"]],"lepetitmarchedauvergne.fr":[["set","realCookieBanner","undefined"]],"libraries.merton.gov.uk":[["set-cookie","luci_CC_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","true"],["set-cookie","luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"]],"librospreuniversitariospdf.blogspot.com":[["acs","$","contextmenu"],["acs","document.onselectstart"],["acs","onload"],["acs","document.onkeydown"],["aopr","checkDevTools"]],"lifesum.com":[["set-local-storage-item","accepted-cookies","[]"]],"ligowiec.net":[["ra","oncontextmenu"]],"lilcat.com":[["set-cookie","cookie-consent","accepted","","reload","1"]],"linkmate.xyz":[["aeld","","key"]],"live.theworldgames.org":[["set-cookie","cookies.consent","false"]],"lokercirebon.com":[["aeld","/contextmenu|keydown|dragstart/"]],"london-tickets.co.uk":[["set-cookie","consent-state","true"]],"londonwomenscentre.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"ls-service.at":[["set","realCookieBanner","undefined"]],"lsi-bochum.de":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"lublin.eu":[["aeld","contextmenu"]],"luegeten.ch":[["set","realCookieBanner","undefined"]],"luel.ai":[["set-local-storage-item","cookie_consent","denied"]],"lumingerie.com":[["set-cookie","cookies-required","1","","reload","1"]],"m-m-m.de":[["set","realCookieBanner","undefined"]],"m-tac.pl":[["set-cookie","config-message-052fd829-3229-4b96-a597-13e6f2ebee5f","1","","reload","1"]],"mack-design.com":[["set","realCookieBanner","undefined"]],"madeinbocholt.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"makeupforever.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"manyavar.com":[["set-cookie","consentTracking","false"]],"marcos.com":[["set-cookie","cookiePreference","reject"]],"masuit.com":[["aopr","document.oncontextmenu"],["nosiif","debugger"]],"maybach-luxury.com":[["set-cookie","cookie-preference","1"]],"mbs.jp":[["aopw","document.oncontextmenu"]],"md-store.de":[["set-cookie","cookieconsent_status","allow"]],"mediathekviewweb.de":[["set-local-storage-item","allowCookies","true"]],"medical.edu.mt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"megacartoons.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"meinspielplan.de":[["set-cookie","_msp_cc","yes"],["set-cookie","ga-disable","true"]],"meinstream.net":[["set","realCookieBanner","undefined"]],"meiosepublicidade.pt":[["set-cookie","gdpr_consent","true"],["set-cookie","gdpr_consent-legacy","true"]],"meteo.org.pl":[["ra","oncontextmenu"]],"mexiconewsdaily.com":[["set","detectPrivateMode","noopFunc"]],"microlinkpc.com":[["set-cookie","is_analytics_allowed","0"],["set-cookie","microlink_cookie_notice","1"]],"midlands.englandhockey.co.uk":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"milenio.com":[["aeld","copy"]],"minaprotocol.com":[["rmnt","script","realCookieBanner"]],"minervababy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"miu-star.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mlive.com":[["aopr","__cmpGdprAppliesGlobally"]],"mobilefuse.com":[["set-local-storage-item","cookies_policy_acceptance","denied"]],"mobilevikings.be":[["set-cookie","privacy_mv","1"]],"modellbahndealer.de":[["rc","disable","div","stay"]],"moegirl.org.cn":[["aeld","copy","jQuery!==\"undefined\""]],"momentbymoment.app":[["set-local-storage-item","mbm-analytics-consent","denied"]],"moneyexcel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"mountain.com":[["set-cookie","euCookieNotify","agree"]],"movie-web.app":[["noeval-if","debugger"]],"moviepass.com":[["set-cookie","cookie-consent","true","/","dontOverwrite","1"]],"movy.sx":[["aeld","contextmenu"]],"mpnnow.com":[["nostif","gnt_mol_oy"]],"mrbenne.com":[["rmnt","script","/Clipboard|oncontextmenu|wpcp|keyCode/"],["ra","oncontextmenu|ondragstart|onselectstart|onload|onblur"],["rmnt","style","/-webkit-user-select|webkit-appearance/"]],"mubi.com":[["set-cookie","mubi-cookie-consent","allow"]],"mui.com":[["set-local-storage-item","docs-cookie-consent","essential"]],"musehub.com":[["set-local-storage-item","cookieConsent","denied"]],"music-on-net.de":[["set","realCookieBanner","undefined"]],"music.apple.com":[["aeld","contextmenu"]],"my-code4you.blogspot.com":[["aopr","document.onkeydown"]],"my.eneba.com":[["set-cookie","cconsent","1000"]],"myclim8.com":[["set","realCookieBanner","undefined"]],"mydigi.digi.pt":[["set-cookie","adsConsent","false"],["set-cookie","analyticsConsent","false"]],"mylove-mylife.at":[["set-cookie","my-love-my-life-aut-cookie-categories","essential"]],"myvouchercodes.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"nationalholidays.com":[["set-cookie","cookiePermission","essential"]],"ncert-solutions.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ncrtsolutions.in":[["aopr","document.body.onselectstart"]],"nekopoi.web.id":[["acs","document.oncopy"],["ra","oncontextmenu|ondragstart"]],"nettyworth.io":[["set-cookie","cookie_consent","true"]],"neuroteam-metz.de":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"newarkadvocate.com":[["nostif","gnt_mol_oy"]],"news.chosun.com":[["aeld","copy","getSelection"]],"newspao.gr":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"niederdorf.eu":[["set-cookie","ris_cookie_setting","1"]],"nordlicht-ev.de":[["set","realCookieBanner","undefined"]],"nosdevoirs.fr":[["set-local-storage-item","simple-funnel-name","$remove$"]],"notebook-doktor.de":[["set","realCookieBanner","undefined"]],"notificationsounds.com":[["nostif","adsbygoogle","2000"]],"novacad.fr":[["set-cookie","nov_rgpd_cookie_opt","1"]],"novayagazeta.eu":[["set-cookie","cookies-informer-close","true"]],"nuevoloquo.ch":[["set-cookie","tos_consent","allow"]],"nypost.com":[["aopr","googletag.cmd"]],"nzbstars.com":[["ra","oncontextmenu"]],"obagstore.pl":[["set-cookie","cookieConsentAnalyticsGranted","0"],["set-cookie","cookieConsentGranted","1"],["set-cookie","cookieConsentMarketingGranted","0"],["set-cookie","cookieConsentUserdata","0"]],"ocean.io":[["set-cookie","cookies","false"]],"odiario.com":[["aeld","copy"]],"odout.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ofuxico.com.br":[["aeld","copy"]],"ojas.de":[["set","realCookieBanner","undefined"]],"oklo.com":[["set-cookie","cookiemonster-gdpr","1"]],"okpoznan.pl":[["set-cookie","cookie_analytics","false"],["set-cookie","cookiepolicyinfo_new","true"]],"olmatic.de":[["set","realCookieBanner","undefined"]],"omniplexcinemas.co.uk":[["set-cookie","a1wcc","all"]],"onderlingenederland.nl":[["set-cookie",".OG.Consent","no","","reload","1"]],"onlinestringtools.com":[["nano-sib","Clipboard","1000","0.001"]],"ordo.open.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"ortorex.ch":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ouderenfonds.nl":[["set-cookie","cookie_consent","functional"]],"outidesigoto.com":[["acs","document.oncontextmenu"]],"outwrite.com":[["set-cookie","gradeproof_shown_cookie_warning","true"]],"owgr.com":[["set-local-storage-item","hasAnalyticalCookies","false"],["set-local-storage-item","hasStrictlyNecessaryCookies","true"]],"oxide.computer":[["set-cookie","ox-accept-tracking","false"]],"paizo.com":[["set-cookie","cookieBanner_092519","1","","reload","1"]],"palmbeachdailynews.com":[["nostif","gnt_mol_oy"]],"palmbeachpost.com":[["nostif","gnt_mol_oy"]],"parkenflughafen.de":[["set-cookie","consentIsSetByUser","true","","reload","1"]],"parkguellonline.cat":[["set-cookie","valCookie1","1"]],"parking.praha.eu":[["set-cookie","cookies_and_content_security_policy","false"]],"pekintimes.com":[["nostif","gnt_mol_oy"]],"pentadoc-radar.com":[["set","realCookieBanner","undefined"]],"philosophenlexikon.de":[["set","realCookieBanner","undefined"]],"philosophia-perennis.com":[["set","realCookieBanner","undefined"]],"phimfit.com":[["nosiif","debugger"],["nostif","_detectLoop"]],"photopoint.ee":[["set-cookie","consent-shown","1"]],"plan.livefpl.net":[["rmnt","script","reviveScroll","excludes","self.__next"]],"platforma.eb2b.com.pl":[["set-cookie","cookiesAccepted","1","reload","1"]],"playlumi.com":[["set-cookie","cookies-functional","true"],["set-cookie","cookies-marketing","false"],["set-cookie","cookies-preferences","false"]],"playstationlifestyle.net":[["aopr","__cmpGdprAppliesGlobally"]],"poe-vault.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"polycomp.bg":[["set-cookie","EU_COOKIE_LAW_CONSENT_POLY","true"]],"pompo.cz":[["set-cookie","cookie-bar","0"]],"portalcriatividade.com.br":[["acs","disable_copy"],["acs","nocontext"]],"portclintonnewsherald.com":[["nostif","gnt_mol_oy"]],"posterstore.se":[["set-cookie","synapse-cookie-preferences-set","true"]],"pp-parts.com":[["set-cookie","cookie-preference","1"]],"pro-football-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"programming-link.info":[["set","pqdxwidthqt","false"]],"promotor-poz.kylos.pl":[["ra","oncontextmenu"]],"promotor.pl":[["ra","oncontextmenu","body"]],"protopage.com":[["aost","document.createElement","createAdblockFallbackSubscribeToProtopageAdDiv"]],"przegladpiaseczynski.pl":[["set-cookie","cc","1"],["aeld","contextmenu"]],"psmw.de":[["set-cookie","cookie_settings","1000"]],"putlockernew.vc":[["aost","console.clear"]],"puzzle-bridges.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-shikaku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-shingoki.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-skyscrapers.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.de":[["set-cookie","puzzleyou-de_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.lu":[["set-cookie","puzzleyou-lu_cookies_consent_allowlist","0","","reload","1"]],"qastack.fr":[["set","useGDPR","false"]],"qiangwaikan.com":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"quantamagazine.org":[["set-cookie","acceptedPolicy","true"],["set-cookie","privacy-consent-given","0"]],"queisser.de":[["set-cookie","cookieConsent","true"]],"radio-canada.ca":[["set-cookie","RC_NOTIFICATION_VIE_PRIVEE","false"]],"raven-mythic.com":[["aopw","$adframe"]],"rdsong.com":[["ra","oncontextmenu|ondragstart|onselectstart","body"]],"refurbished.be":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"region-bayreuth.de":[["set-local-storage-item","GDPR:RBI:accepted","false"]],"reinhardstrempel.de":[["set","realCookieBanner","undefined"]],"renon.eu":[["set-cookie","ris_cookie_setting","1"]],"researchdata.smu.edu.sg":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"rg.ru":[["set-cookie","cookie_consent","1"]],"riacurrencyexchange.es":[["set-cookie","CookiesConfigurationRia","false","","reload","1"]],"rissland-kunststoffe.de":[["set","realCookieBanner","undefined"]],"ritsatv.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"rocklyric.jp":[["ra","oncopy|oncut|onmousemove|onmousedown|style","#lyric_area[oncopy]","complete"],["ra","oncontextmenu","#lyric_area > p[oncontextmenu]","complete"]],"rossoft.co.uk":[["set","realCookieBanner","undefined"]],"rostics.ru":[["set-cookie","set-cookie","cookieAccess","1"]],"routenote.com":[["acs","onload"]],"rozbor-dila.cz":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"rudalle.ru":[["set-cookie","myAwesomeCookieName2","true"]],"s0urce.io":[["aeld","/^(contextmenu|copy)$/"]],"sabishiidesu.com":[["acs","document.onkeydown"],["aopw","document.oncontextmenu"]],"sachonthi.com":[["acs","document.oncontextmenu"]],"samenbank-berlin.de":[["set","realCookieBanner","undefined"]],"sammlershop24.de":[["set-cookie","cookie-preference","1"]],"sanha.com":[["set-cookie","cookie-preference","1"]],"sarthaks.com":[["aeld","copy"]],"sat-charts.eu":[["ra","oncontextmenu"]],"savvista.com":[["set","realCookieBanner","undefined"]],"sbenny.com":[["nostif","()","2000"]],"sberdisk.ru":[["set-local-storage-item","cookieIsAccepted","true"]],"sc.edu":[["set-cookie","_pc","0"]],"scheels.com":[["set-cookie","cookiesAccepted","true"]],"scholpp.com":[["rc","with-featherlight","","stay"]],"scholpp.it":[["rc","with-featherlight","","stay"]],"schuetzendepot.de":[["set","realCookieBanner","undefined"]],"schwechat.gv.at":[["set-cookie","ris_cookie_setting","1"]],"scinapse.io":[["set-local-storage-item","a_c","true"]],"screenrant.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"search.odin.io":[["set-local-storage-item","cookie_consent","granted"]],"seb.se":[["set-cookie","AcceptedCookieCategories","1"]],"sebo.ddns.opc-asp.de":[["set-cookie","opc_webapp_cookiesaccepted_be264d3fecc64041f12c2afcba82edc0","1","","reload","1"]],"seemueller.com":[["set-cookie","cookie-preference","1"]],"sekai-kabuka.com":[["ra","oncontextmenu"]],"sexylook.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shakespeare.org.uk":[["set-cookie","advertising","false"],["set-cookie","analytics","false"]],"sharktankblog.com":[["aopr","disable_copy"],["aopr","wccp_pro_iscontenteditable"],["aopr","disable_hot_keys"],["aopr","nocontext"]],"shelbystar.com":[["nostif","gnt_mol_oy"]],"shl.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"shop.ac-zaun-center.de":[["set-cookie","cookie-preference","1"]],"shop.almawin.de":[["set-cookie","cookie-preference","1"],["set-cookie","psd-google-ads-enabled","0"],["set-cookie","psd-gtm-activated","1"],["set-cookie","wishlist-enabled","1"]],"shop.coville.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.hansapark.de":[["set-cookie","cookies_mandatory","true"]],"shop.kbc.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.oettinger.de":[["set-cookie","allowCookie","1"]],"shop.wumajia.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.nl":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopilya.com":[["set-cookie","hulkCookieBarClick","1"]],"shrinkearn.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"sidereel.com":[["acs","$","/getScript|error:/"],["aopr","googletag"]],"sky-blue.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sliplane.io":[["set-cookie","cookiesAccepted","essential","","reload","1"]],"smart.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"smartwielen.lu":[["set-session-storage-item","terms-and-policy-accepted","true"]],"smashboards.com":[["nosiif","height"]],"smotritv.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"snipp.gg":[["set-local-storage-item","hasConsent","false"]],"snowpeak.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sonderversum.com":[["set","realCookieBanner","undefined"]],"songs-wayaku.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sororedit.com":[["set-cookie","cookie_tou","1","","reload","1"]],"soundcloudmp3.org":[["set","detectAdBlock","noopFunc"]],"spb.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"spel.nl":[["set-cookie","OptanonAlertBoxClosed","true"]],"spookshow.net":[["set","adBlockFunction","trueFunc"]],"sportnews.to":[["acs","document.getElementById","isMoz"],["acs","jQuery","keydown"],["set","document.onkeydown","null"],["set","document.onkeypress","null"]],"sports-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"sportsupa.com":[["ra","oncontextmenu"]],"sqlook.com":[["set-local-storage-item","cookieChoice","rejected"]],"srf.nu":[["set-cookie","CookieConsent","necessary"]],"sshoc.eu":[["set-cookie","consent_3rdparties_cookies","false"],["set-cookie","consent_additional_cookies","false"],["set-cookie","consent_experience_cookies","false"],["set-cookie","consent_measurement_cookies","false"],["set-cookie","consent_targeting_cookies","false"]],"st-pankraz.at":[["set-cookie","ris_cookie_setting","1"]],"staff-gallery.com":[["set-cookie","gdpr_check_cookie","accepted","","reload","1"]],"starlux-airlines.com":[["set-cookie","advertisingCookie","false"],["set-cookie","analyticsCookie","false"],["set-cookie","functionalCookie","true"]],"statelibrary.us":[["aopr","document.oncontextmenu"],["aeld","keydown","disable_in_input"]],"steinmetz-baldauf.de":[["set-cookie","essentiell","1","","reload","1"],["set-cookie","googlemaps","1"],["set-cookie","youtube","1"]],"steinway-park-seesen.de":[["set","realCookieBanner","undefined"]],"streamvid.net":[["aeld","contextmenu"],["rmnt","script","debugger"]],"stylewe.com":[["set-cookie","acceptPrivacy","true"]],"sumsub.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"supplier.stellantis.com":[["set-cookie","opncl_general","true"]],"supporthub.experian.co.uk":[["set-cookie","cookie_declined","true"]],"suttonparkgroup.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"swissaccounting.org":[["set-cookie","__hs_opt_out","yes"]],"swrng.de":[["set-cookie","CookieLayerDismissed","true"]],"systelia.fr":[["rc","unreadable-display","","stay"]],"szerencsejatek.hu":[["set-cookie","GDPR_LEVEL","1"],["set-cookie","GDPR_VERSION","1"]],"tapology.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tauntongazette.com":[["nostif","gnt_mol_oy"]],"tcsb.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"techmot24.pl":[["set-cookie","RodoPopup","0"]],"technikdirekt.de":[["set-cookie","cookie-preference","1"]],"technoalpin.com":[["rc","dp--cookie-consent","body","stay"]],"technologyreview.jp":[["remove-cookie","kpwc"]],"teenage.engineering":[["set-cookie","te_cookie_ok","1"]],"teile-direkt.ch":[["aeld","mousedown","function(t)"]],"telefon-treff.de":[["acs","$","offsetHeight"]],"telemetr.io":[["set-local-storage-item","c","false"]],"televid.top":[["aeld","contextmenu"]],"temperatur.nu":[["nostif","holidAds"]],"tennessine.co.uk":[["set-local-storage-item","cookies","0"]],"tfp.is":[["acs","document.oncontextmenu"]],"thedailymeal.com":[["aeld","copy"]],"thedukesheadcrawley.co.uk":[["set-cookie","ce-cookie","N"]],"theencorestratford.co.uk":[["set-cookie","ce-cookie","N"]],"thegearhunt.com":[["aeld","/^(?:contextmenu|copy|keydown|mousedown)$/"]],"thegleaner.com":[["nostif","gnt_mol_oy"]],"theherald-news.com":[["nostif","null"]],"theintercept.com":[["rmnt","script","userData_"]],"thejunctionharborne.co.uk":[["set-cookie","ce-cookie","N"]],"thesheepheidedinburgh.co.uk":[["set-cookie","ce-cookie","N"]],"thestar.com.my":[["aeld","mouseleave"]],"tiefenthaler-landtechnik.ch":[["set-cookie","allowTracking","false"]],"timesonline.com":[["nostif","gnt_mol_oy"]],"timponline.ro":[["aopw","disable_copy"],["aopw","disableSelection"],["aopw","nocontext"]],"tippmix.hu":[["set-cookie","GDPR_LEVEL","1"],["set-cookie","GDPR_VERSION","1"]],"toplink.de":[["set","realCookieBanner","undefined"]],"transinfo.pl":[["aeld","copy"]],"transport-versicherungen.info":[["set","realCookieBanner","undefined"]],"tricountyindependent.com":[["nostif","gnt_mol_oy"]],"tridge.com":[["set-cookie","cookieBannerHidden","true"]],"triviacreator.com":[["set-cookie","accept_cookies","accepted"]],"trouwenbijfletcher.nl":[["set-cookie","acceptCookies","true"]],"truewealth.ch":[["set-cookie","tw_cc","false"]],"truphone.com":[["set-cookie","cookie_preferences","Essential"]],"trygogo.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ttv.pl":[["aeld","contextmenu","a"]],"tunnelmb.net":[["set-cookie","cookie-policy","true"]],"turbo.ai":[["set-local-storage-item","cookieConsent","1"]],"turboimagehost.com":[["set-cookie","cookiewarn","1"]],"turbolab.it":[["nostif","warning"]],"turvakilvet.fi":[["set-cookie","GBaseConsent","0"],["set-cookie","GBaseConsentToAnalytics","0"]],"tvnturbo.pl":[["aeld","contextmenu","a"]],"tweaking4all.com":[["nostif","adsbygoogle","2000"]],"twenga.co.uk":[["set-cookie","cookiewarning","1","","reload","1"]],"twinkietown.com":[["nostif","adsBlocked"]],"tyleenslang.nl":[["set-cookie","cookiebar","1"]],"ubuntu.com":[["set-cookie","_cookies_accepted","essential"]],"uc.pt":[["set-local-storage-item","userDeniedCookies","1"]],"uk.rs-online.com":[["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"]],"ultimate-bravery.net":[["nostif","()","2000"]],"ultrahuman.com":[["set-local-storage-item","COOKIE_CONSENT","false"]],"ultraleds.co.uk":[["set-local-storage-item","cookies_accepted_6pzworitz8","true"]],"ultraten.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"umlandscout.de":[["set-cookie","loader","1"]],"understandingsociety.ac.uk":[["set-cookie","ga-disable-UA-xxxxxxxx-x","true"]],"unikampus.net":[["aopr","document.oncontextmenu"]],"uniqueshop.gr":[["set-cookie","iccb_init","1"]],"united-camera.at":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"unobike.com":[["set-local-storage-item","cookieinfo","1"]],"upreply.de":[["set","realCookieBanner","undefined"]],"urochsunloath.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"usnews.com":[["set-cookie","gdpr_agreed","4"]],"uvetgbt.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"valamis.com":[["set-cookie","valamis_cookie_analytics","false"],["set-cookie","valamis_cookie_marketing","false"],["set-cookie","valamis_cookie_message","true","","reload","1"]],"valid.x86.fr":[["rmnt","script","/setTimeout.*style/"]],"vamos-skateshop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"varna.eu":[["set-cookie","ris_cookie_setting","1"]],"varusteleka.com":[["set-local-storage-item","cookieConsent","false"]],"verbraucherrecht.at":[["set-cookie","vkicookieconsent","0"]],"verpackungsstadl.ch":[["rc","disable","div","stay"]],"viafarmaciaonline.it":[["aopr","document.oncontextmenu"]],"vidstreaming.xyz":[["nosiif","devtoolsDetector"]],"vienna-interiors.at":[["set","realCookieBanner","undefined"]],"visefierbinti.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"visti.it":[["set-cookie","acceptcookies","1"]],"vita-world24.de":[["set-cookie","cookie-preference","1"]],"viveretenerife.com":[["aeld","contextmenu"]],"vivoil.com":[["set","realCookieBanner","undefined"]],"vkf-renzel.nl":[["set-cookie","handledCookieMessage","1"]],"vlachakis-systems.com":[["set-cookie","cookieSettings","11","","reload","1"]],"vladivostok1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"vmake.ai":[["set-cookie","VMAKE_COOKIE_POLICY","0"]],"voeunbl0ck.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voeunblck.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"votegroup.de":[["set-cookie","dsgvo-mark","no"],["set-cookie","dsgvo-stat","yes"]],"voxvalachorum.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vpnmentor.com":[["nostif","bioEp.showPopup"]],"vsetv.click":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"vtbe.to":[["acs","RegExp","contextmenu"]],"vzm.de":[["set","realCookieBanner","undefined"]],"wallauonline.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"wallygusto.de":[["set","realCookieBanner","undefined"]],"wals-siezenheim.at":[["set-cookie","ris_cookie_setting","1"]],"warcraftlogs.com":[["acs","attachToDom","ad-fallback"]],"warringtonguardian.co.uk":[["aopw","_sp_"]],"watch.sonlifetv.com":[["set-cookie","gcp","1","","reload","1"]],"wattpad.com":[["ra","oncontextmenu"],["aeld","/copy|dragstart/"]],"waves.is":[["set-cookie","cookies_accepted","0"]],"waves4you.com":[["aost","String.prototype.charCodeAt","ai_"]],"wawlist.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["aopr","disableSelection"],["aeld","keydown"]],"webtrack.dhlglobalmail.com":[["set-cookie","dhl-webapp-track","allowed"]],"weetabix.com":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.it":[["rc","wcc-popup-overflow","body","stay"]],"werkenbijkruidvat.be":[["rc","is-active-cookiebar","","stay"]],"whatfontis.com":[["acs","$","adBlock"]],"wheatonpm.com":[["set-cookie","cookiemonster-gdpr","1"]],"wheel-size.com":[["set","detector_active","true"]],"whitbreadinns.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"whitepages.com":[["set-cookie","accepted_tos_via_serp","true"]],"wifikaernten.at":[["set-cookie","consent","true"]],"wildstarlogs.com":[["acs","attachToDom","ad-fallback"]],"windows101tricks.com":[["aopr","__cmpGdprAppliesGlobally"],["set","better_ads_adblock","0"]],"winlocal.de":[["set","realCookieBanner","undefined"]],"wjx.top":[["aopr","_0x1a4c"],["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"wlo-cricstreamiing.pages.dev":[["set","confirm","noopFunc"]],"wolfurt.at":[["set-cookie","ris_cookie_setting","1"]],"worldscientific.com":[["acs","document.getElementById","block"]],"writingcooperative.com":[["set-local-storage-item","201805-policy|accepted","1"]],"www-glasgowlive-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.facebook.com":[["json-prune","require.0.3.0.__bbox.define.[].2.is_linkshim_supported require.0.3.0.__bbox.define.[].2.click_ids"]],"x-news.pl":[["aeld","contextmenu","a"]],"xhchannel2.com":[["set-cookie","cookie_accept","1"]],"xiaomi4mi.com":[["aopw","document.oncontextmenu"]],"xossipy.com":[["ra","oncopy|oncut"]],"yenivatan.at":[["set","realCookieBanner","undefined"]],"ymere.nl":[["set-cookie","euconsent","1"]],"youmath.it":[["aopw","document.onmousedown"],["aopw","document.onselectstart"],["aopr","document.onselectstart"],["set","disableselect","trueFunc"]],"youthforum.org":[["set-cookie","__cookie_consent","false"]],"ytj.fi":[["set-local-storage-item","accept-cookies","done"],["set-local-storage-item","cookie-neta","false"],["set-local-storage-item","cookie-snoop","false"]],"yurishop.it":[["set","realCookieBanner","undefined"]],"zefoy.com":[["nostif","debugger"]],"zeinpharma.com":[["set-cookie","cookie-preference","1"]],"zelezodum.cz":[["set-cookie","show_gdpr_cookie_message_388801234_cz","no"]],"zentalk.asus.com":[["set-cookie","isReadCookiePolicyDNT","Yes"],["set-cookie","isReadCookiePolicyDNTAa","true"]],"zipfelbund.de":[["set-cookie","Consent","0"]],"zonerpress.cz":[["set-cookie","adsCookies","false"],["set-cookie","inshopCookiesSet","true"]],"zwei-euro.com":[["nostif","Delay"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
