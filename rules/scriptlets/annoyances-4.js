/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0815.at":[["set-cookie","cookie-preference","1"]],"0815.eu":[["set-cookie","cookie-preference","1"]],"10000recipe.com":[["acs","$","contextmenu"]],"123movies.fr":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"1blu.de":[["set-cookie","cookieConfig","1"]],"1shows.ru":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","123===i"]],"30seconds.com":[["set-cookie","uf_signup_bar","1"]],"3xyaoi.com":[["acs","document.oncontextmenu"],["aeld","contextmenu","preventDefault"]],"500ish.com":[["set-local-storage-item","201805-policy|accepted","1"]],"50five.com":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"51.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"aaronia.com":[["set-cookie","amcookie_allowed","1"]],"abc7.com":[["aeld","scroll"]],"abysscdn.com":[["set","devtoolsDetector.launch","noopFunc"]],"account.nowpayments.io":[["set-cookie","cookie-accepted","true"]],"adidas.dk":[["set-cookie","notice_preferences","2"]],"adidas.no":[["set-cookie","notice_preferences","2"]],"adidas.sk":[["set-cookie","notice_preferences","2"]],"adnan-tech.com":[["ra","oncontextmenu"]],"afropunk.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"againstdata.com":[["set-cookie","dad_consent","true"]],"ahzaa.net":[["aopr","document.oncontextmenu"]],"airchina.de":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airportwebcams.net":[["set","realCookieBanner","undefined"]],"ajanvaraus.idealinspect.fi":[["set-local-storage-item","cookieConsent","0"]],"akkushop-schweiz.ch":[["set-cookie","cookie-preference","1"]],"akkushop-turkiye.com.tr":[["set-local-storage-item","CerezUyariGosterildi","true"]],"all4running.co.uk":[["set-cookie","cookieConsent","necessary","","reload","1"]],"all4running.pl":[["set-cookie","cookieConsent","necessary","","reload","1"]],"allegro.com":[["set-cookie","gdpr_permission_given","0"]],"allegro.ru":[["set-cookie","gdpr_permission_given","0"]],"alljigsawpuzzles.co.uk":[["set-cookie","_pandectes_gdpr","1"]],"alljigsawpuzzles.com":[["set-cookie","_pandectes_gdpr","1"]],"allsmo.com":[["set","document.onkeydown","null"]],"alltechnerd.com":[["aopw","document.oncontextmenu"]],"alphaspel.se":[["set-cookie","cookie_consent","true"]],"americanexpress.ch":[["set-cookie","sc-privacy-settings","true"]],"ampire.de":[["rc","disable","div","stay"]],"amway.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"androidmakale.com":[["acs","document.oncontextmenu"]],"androidmtk.com":[["acs","document.oncontextmenu"]],"anikoto.pl":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"animaldiversity.org":[["set-cookie","cookie-settings","reject"]],"animedao.de":[["aopr","devtoolsDetector"]],"animenewsnetwork.com":[["set","ANN.ads.adblocked","false"]],"anisubindo.es":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"aniwatch.to":[["set","devtoolsDetector.launch","noopFunc"]],"aniwave.com.br":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"aniwave.es":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.org":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"antallaktikaexartimata.gr":[["aeld","mousedown","function(t)"]],"app.baxus.co":[["set-cookie","IAV","true","","reload","1"]],"app.bionic-reading.com":[["set-local-storage-item","accept_all_cookies","false"]],"app.privacy.com":[["set-local-storage-item","privacy-cookie-consent","1"]],"arrax.io":[["set","ramp.addUnits","noopFunc"]],"asiasentinel.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"aspies.de":[["set","realCookieBanner","undefined"]],"assura.ch":[["set-cookie","cookiePolicyApproved","true"]],"asus.com.cn":[["set-cookie","isReadCookiePolicyDNT","Yes"],["set-cookie","isReadCookiePolicyDNTAa","true"]],"atgames.us":[["set-local-storage-item","theme:popup-appeared","true"]],"athletic-club.eus":[["set-cookie","analitics-cookies-consent","0"],["set-cookie","personalization-cookies-consent","0","","reload","1"],["set-cookie","user-accepted-AEPD-cookies","1"]],"athleticsreg.ca":[["set-cookie","accepted_cookie_policy","false"]],"atlas.workland.com":[["set-local-storage-item","cookie-consent","true"]],"auto-doc.co.uk":[["aeld","mousedown","function(t)"]],"auto.mahindra.com":[["set-cookie","consentTracking","false"]],"autobrinkmann.de":[["set","realCookieBanner","undefined"]],"autodielyonline24.sk":[["aeld","mousedown","function(t)"]],"autodoc.com.br":[["aeld","mousedown","function(t)"]],"autodoc.it":[["aeld","mousedown","function(t)"]],"autodoc.pl":[["aeld","mousedown","function(t)"]],"autodude.se":[["set-local-storage-item","cookieConsent","necessary"]],"autoride.es":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"avnetwork.com":[["set-cookie","FTR_Article_PageView","2"]],"az-renovation.fr":[["rc","unreadable-display","","stay"]],"backmarket.com.br":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"bagosport.cz":[["set-cookie","cookie-bar","0"]],"bahnland-bayern.de":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"baic.cz":[["set-local-storage-item","gdprConsent","false"]],"banistmo.com":[["ra","oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy"]],"basta.berlin":[["set","realCookieBanner","undefined"]],"bayern.de":[["set-cookie","required","1"]],"beerandwine.co.nz":[["set-cookie","isAnAdult","true"]],"beermerchants.com":[["set-local-storage-item","amCookieBarFirstShow","1"]],"bejson.com":[["set","killads","true"]],"bendigoadvertiser.com.au":[["nosiif","modal"]],"benvenuti.com":[["set-cookie","CakeCookie[cookie_consent]","1"]],"berberin.net":[["set","realCookieBanner","undefined"]],"besteonderdelen.nl":[["aeld","mousedown","function(t)"]],"beta.character.ai":[["set-local-storage-item","OPTIONAL_COOKIES_ACCEPTED_0","true"],["set-local-storage-item","VISITED_0","true"]],"betway.nl":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"betway.pl":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"bflix.com":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bg-gledai.es":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bg-gledai.ru":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bgld.wifi.at":[["set-cookie","consent","true"]],"bike-components.de":[["set-cookie","privacy-202605041328","0","","reload","1"]],"biona-shop.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"blackmarket.co.nz":[["set-cookie",".18OK","true"]],"blackpoolairport.com":[["rc","wcc-popup-overflow","body","stay"]],"blindbild.com":[["set","realCookieBanner","undefined"]],"bloomberglinea.com.br":[["aeld","copy"]],"bluemediafile.co.uk":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bmovies.es":[["aeld","devtoolschange"]],"boardstar.cz":[["set-cookie","consent","000","","reload","1"]],"bonappetit.com":[["remove-cookie","pay_ent_msmp"],["remove-cookie","pay_ent_pass"]],"bonbon.hr":[["set-cookie","gdpr_level_1_necessary","1"]],"book.zhulang.com":[["aeld","/contextmenu|selectstart/"]],"bottlerepublic.com":[["set-local-storage-item","ageIsVerified","true"]],"bpcj.or.jp":[["acs","document.oncontextmenu"]],"brainly.com":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brainly.es":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brainly.org":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"braziljournal.com":[["acs","document.oncopy"]],"brixtonbrewery.com":[["set-cookie","age-gate","true"]],"bsh-russia.ru":[["set-cookie","agreement","1"]],"budgetair.nl":[["set-cookie","cookieConsentLevel","functional"]],"bumigemilang.com":[["acs","disable_hot_keys"],["acs","document.oncontextmenu"]],"burzaucebnic.sk":[["set","realCookieBanner","undefined"]],"butter.us":[["set-cookie","cookiePolicy","true"]],"bypass.city":[["no-fetch-if","/googlesyndication|googletag/"],["nowoif"]],"caldaro.eu":[["set-cookie","ris_cookie_setting","1"]],"calvinklein.com.br":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"calvinklein.de":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"camping-car-plus.com":[["set-cookie","ecs-cookies-consent","0"]],"canale-tv.net":[["rmnt","script","preventDefault"],["rmnt","script",".preventDefault()","includes","contextmenu"],["aeld","contextmenu"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"canalpluskuchnia.pl":[["set-cookie","cp_cc_ads","1"],["set-cookie","cp_cc_stats","1","","reload","1"]],"canonvannederland.nl":[["set-local-storage-item","z_cookie_consent","true"]],"cargoe.at":[["set","realCookieBanner","undefined"]],"casapariurilor.ro":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"cbsnews.com":[["rc","floating","","stay"]],"cellcolabsclinical.com":[["set-cookie","functionalCookie","true"]],"chaesbueb.ch":[["set-cookie","chaesbueb-che-cookie-categories","essential"]],"chargenowforbusiness.com":[["set-cookie","CN_ALLOW_FUNCTIONAL_COOKIE","false"]],"cheaptickets.pl":[["set-cookie","cookieConsentLevel","functional"]],"chillicothegazette.com":[["nostif","gnt_mol_oy"]],"chimica-online.it":[["aopr","disableselect"]],"ciberduvidas.iscte-iul.pt":[["aeld","copy"]],"ciss.de":[["set","realCookieBanner","undefined"]],"cityfalcon.ai":[["set-local-storage-item","cookies_policy_status","true"]],"clevercreations.org":[["set-cookie","mailerlite:forms:shown:109925949413262377","1"]],"climbing.com":[["remove-cookie","xbc"]],"clipartmax.com":[["aopw","document.oncontextmenu"]],"clipchamp.com":[["set-cookie","acceptCookies","true"]],"codecamps.com":[["set-cookie","codecamps.cookiesConsent","true"]],"coin360.com":[["set-cookie","isCookiesAccepted","true"]],"comune.laces.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sarentino.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sluderno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"containerandpackaging.com":[["set-cookie","cookieBanner","true"]],"continentale-hannover.de":[["set","realCookieBanner","undefined"]],"core.app":[["set-local-storage-item","connect-wallet-legal-consent","true"],["set-local-storage-item","should_display_cookie_banner_v2","false"],["set-local-storage-item","show-email-intake-form","false"]],"correosaduanas.es":[["set-cookie","cookie_ADT_tecnica","true"],["set-cookie","msg_cookie_ADT","true"]],"coseleurope.eu":[["set-cookie","tiki_cookies_accepted","y","","reload","1"]],"crichype.ru":[["set","confirm","noopFunc"]],"croco-kid.com":[["rc","unreadable-display","","stay"]],"cronista.com":[["aeld","copy","replaceCopiedText"]],"csmonitor.com":[["set-local-storage-item","csm_unique_stories","$remove$"]],"ctol.digital":[["set-local-storage-item","cookie_accepted","true"]],"ctrader.com":[["set-local-storage-item","cookie_accepted","true"],["set-local-storage-item","cookie_analytic","false"],["set-local-storage-item","cookie_necessary","true"]],"curantus.de":[["set-cookie","amcookie_allowed","1"]],"curseforge.com":[["no-fetch-if","googlesyndication"]],"cyclingweekly.com":[["set-cookie","FTR_Article_PageView","2"]],"dailycommercial.com":[["nostif","gnt_mol_oy"]],"dailynewshungary.com":[["set-local-storage-item","wp_dark_mode_active","1"]],"dailyrevs.com":[["set-local-storage-item","acceptCookies","true"]],"daraz.com":[["set-local-storage-item","has-dismissed","1"]],"data.lib.vt.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"datamask.app":[["set-local-storage-item","cookie-permission","false"]],"ddys.it":[["no-fetch-if","analytics"]],"ddys.pl":[["no-fetch-if","analytics"]],"defenceconnect.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"delaware.com":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delaware.fr":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delawareconsulting.com":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delfi.lt":[["aeld","copy"]],"depedlps.nl":[["acs","document.oncontextmenu"]],"der-windows-papst.de":[["set","realCookieBanner","undefined"]],"desbloqueador.org":[["aopr","document.oncontextmenu"]],"devilslakejournal.com":[["nostif","gnt_mol_oy"]],"dg-pw.de":[["set","realCookieBanner","undefined"]],"die-werbeschmiede.de":[["set","realCookieBanner","undefined"]],"dispatch.com":[["nostif","gnt_mol_oy"]],"diylifetech.com":[["set-local-storage-item","201805-policy|accepted","1"]],"dlnews.com":[["aeld","/^(mouseout|mouseleave)$/"]],"dndbeyond.com":[["set-cookie","cookie-consent","denied"]],"docs.yagpdb.xyz":[["set-cookie","__gitbook_cookie_granted","no"]],"dogtime.com":[["acs","document.createElement","admiral"]],"dood.com.br":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.com.br":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dot-st.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"dragshop.com":[["set-cookie","enabled_cookie_accept_cookies","0","","reload","1"]],"dramaqu.de":[["acs","$","contextmenu"]],"dreamstime.com":[["nostif","SignUPPopup_load","5000"]],"dww-suchtberatung.de":[["rc","dp--cookie-consent","body","stay"]],"dxmaps.com":[["nostif","adsbygoogle","5000"]],"earnload.net":[["set","blurred","false"]],"earth.com":[["aopr","HTMLIFrameElement"]],"ebank.fundamenta.hu":[["set-cookie","cookie_consent","true","1year","","domain","ebank.fundamenta.hu"],["set-cookie","general","true","1year","","domain","ebank.fundamenta.hu"]],"echome.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"economictimes-indiatimes-com.translate.goog":[["rmnt","script","var lh = location.host;"]],"ef.co.id":[["set-local-storage-item","accepted-cookies","true"]],"elisazunder.de":[["set","realCookieBanner","undefined"]],"empregoestagios.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"endclothing.com":[["set-cookie","cookieConsentDismissed","true"],["set-cookie","cookieTermsDismissed","true"]],"endorfinese.com.br":[["nostif","google_jobrunner"]],"eninternetgratis.com":[["rc","show--consent","body","stay"]],"enterprisenews.com":[["nostif","gnt_mol_oy"]],"epochtimes.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"erdbeerprofi.de":[["set-cookie","amcookie_allowed","1"]],"etherpad.org":[["set-cookie","cookiesAccepted","false"]],"etsy.com":[["set-cookie","ctc_rejected","1"]],"europixhd.net":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"europixhd.pl":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"everjump.fit":[["set-cookie","_pandectes_gdpr","1"]],"evreporter.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"evroopt.by":[["aeld","/^(?:click|scroll|keydown|touchstart|mouseenter)$/","cookie.get"]],"exeedme.com":[["set-cookie","cookie-consent","true"]],"fadxploit.my.id":[["set-local-storage-item","cookie_consent","accepted"]],"fakturia.de":[["set","realCookieBanner","undefined"]],"favi.de":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"fiberlogy.com":[["set-local-storage-item","consents.show_consent_modal","1"]],"fileditchvids.st":[["aeld","contextmenu"]],"film4e.com":[["acs","AudiosL10n"]],"fin24.com":[["aopr","Date.prototype.toUTCString"]],"finance.yahoo.com":[["aeld","scroll"]],"firestream.es":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"flightradar24.com":[["set-cookie","map_new_features_new_flightradar24_com_label_options","1"]],"flixhq.de":[["nostif","||null"],["aost","console.clear"]],"flowstate.fm":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"fmhikayeleri.com":[["acs","document.oncontextmenu"]],"fmovies.nl":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fmovies.org":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"foliamalacologica.com":[["set-cookie","declineOwnCookiesCookie","1"]],"foodie.com":[["aeld","copy"]],"forbes.com":[["rc","zephr-modal-open","body","stay"]],"ford-besico-nuernberg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-fuchs-uffenheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hartmann-rastatt.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-horstmann-rastede.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-nrw-garage-duesseldorf.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wagner-mayen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.pt":[["set-cookie","cookieAcknowledged","true"]],"foreignaffairs.com":[["nostif","noscroll","3000"]],"format.bike":[["set-local-storage-item","user_cookie","1"]],"forum-koepenick.de":[["set","realCookieBanner","undefined"]],"fourfourtwo.com":[["set-cookie","FTR_Article_PageView","2"]],"foxracingshox.de":[["set-cookie","allowCookie","1"]],"freshis.com":[["set-cookie","accept_cookies","accepted"]],"fruit01.xyz":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["set","document.onkeydown","noopFunc"]],"fruugo.net":[["set-cookie","consents","essential"]],"fruugo.nl":[["set-cookie","consents","essential"]],"fucktube4k.com":[["acs","document.addEventListener","contextmenu"]],"fujirumors.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fullxh.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"funnycase.pl":[["set-cookie","funnycase_cookie_policy_v2","1","","reload","1"]],"fvd.nl":[["set-local-storage-item","GDPR-fingerprint:accepted","true"]],"fydeos.com":[["set-local-storage-item","is_accept_cookie","true"]],"gadgetizedpanda.com":[["nostif","isOpen"]],"galinos.gr":[["nostif","pleaseSupportUs"]],"gamepro.de":[["set","Didomi","noopFunc"]],"gamershit.altervista.org":[["aopr","document.oncontextmenu"]],"gardeningknowhow.com":[["set-cookie","FTR_Article_PageView","2"]],"gdplayertv.ru":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gdpr.twitter.com":[["set-cookie","twtr_pixel_opt_in","N"]],"gdx.net":[["set-cookie","genovaPrivacyOptions","1","","reload","1"]],"gefahrgutjaeger.de":[["set","realCookieBanner","undefined"]],"geizhals.de":[["set-local-storage-item","dnt_message_shown","1"]],"geizhals.eu":[["set-local-storage-item","dnt_message_shown","1"]],"gemeinde.latsch.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.prags.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.prettau.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.rodeneck.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sarntal.bz.it":[["set-cookie","ris_cookie_setting","1"]],"genesistls.com":[["acs","document.ondragstart"],["acs","document.onkeydown"]],"gerdes-reisen.de":[["set","realCookieBanner","undefined"]],"ggsport.live":[["set-cookie","auth.userConsent","1","","reload","1"]],"globalcitizensolutions.com":[["rc","gcs-cc-lock","html","stay"]],"globe.adsbexchange.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"go.bkk.hu":[["set-local-storage-item","cookie_consent","false"]],"godbolt.org":[["set-cookie","privacy_status","1"]],"gonxt.com":[["set-local-storage-item","isAllowCookies","true"]],"goodhub.xyz":[["aeld","/contextmenu|keydown/"]],"grants.at":[["set-cookie","cookieconsent_status_new","1"]],"greenbuildingadvisor.com":[["set-cookie","taunton_user_consent_advertising","false"],["set-cookie","taunton_user_consent_analytics","false"],["set-cookie","taunton_user_consent_submitted","true"]],"greenpandagames.com":[["set-cookie","accept_cookie_policy","true"]],"griffbereit24.de":[["set-cookie","consent_essential","allow"]],"grillrost.com":[["set-cookie","cookie-preference","1","","reload","1"]],"grupo-loma.com":[["set","realCookieBanner","undefined"]],"gs1.se":[["set-local-storage-item","allowFunctionalCookies","false"],["set-local-storage-item","cookiesAccepted","true"]],"guitarplayer.com":[["set-cookie","FTR_Article_PageView","2"]],"haarausfall-stopp.com":[["set","realCookieBanner","undefined"]],"hanos.nl":[["set-cookie","CookieConsentChoice","3"]],"hatchet.run":[["set-local-storage-item","cookie_consent","no"]],"hattiesburgamerican.com":[["nostif","gnt_mol_oy"]],"hdi-mobility-solution-fr.com":[["set-cookie","cookiesAccepted","1","reload","1"]],"healthdigest.com":[["aeld","copy"]],"helenevue.com":[["rc","unreadable-display","","stay"]],"hello-rezka.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hellotv.nl":[["set-cookie","cookieConsentClosed","true"]],"henrikkarlsson.xyz":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"heureka.sk":[["set-cookie","h_adult","1","","reload","1"]],"heypoorplayer.com":[["aopr","ABDSettings"]],"hianime.ru":[["set","devtoolsDetector.launch","noopFunc"]],"hidemywp.co":[["acs","jQuery","userAgent"]],"himovies.org":[["set-cookie","show_share","true"]],"hindipix.de":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hindipix.es":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hollandsentinel.com":[["nostif","gnt_mol_oy"]],"home.shortcutssoftware.com":[["set-local-storage-item","ngx-webstorage|cookies","false"]],"homegymreview.co.uk":[["rmnt","script","nocontextmenu"]],"host.pl":[["set","realCookieBanner","undefined"]],"huellendirekt.de":[["set-cookie","consent","denied"]],"husseinezzat.com":[["aeld","contextmenu"],["aeld","keydown"]],"hyperoptic.com":[["set-cookie","ho_cookie_consent","essential"]],"ibomma.pw":[["acs","$","contextmenu"]],"idealhome.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"iloveincredibles.com":[["set-cookie","age-modal-hide","true"]],"ilsaggiatore.com":[["set-cookie","cookies_analytics_enabled","0","","reload","1"]],"inds.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"info-beihilfe.de":[["acs","document.oncontextmenu"]],"insidetrading.de":[["set","realCookieBanner","undefined"]],"insound.de":[["set-cookie","cookieDeclined","1"]],"instantoffices.com":[["set-cookie","cookieConsent","1"]],"insurance-corporate.blogspot.com":[["ra","oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"]],"inverto.tv":[["set-local-storage-item","gdpr","0"]],"invillage-outvillage.com":[["json-prune","ads.[].imageUrl"]],"inzing.gv.at":[["set-cookie","ris_cookie_setting","1"]],"itv4.de":[["set","realCookieBanner","undefined"]],"jagledam.com":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jagledam.com.br":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jagledam.es":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"japanesewithtomo.com":[["rmnt","script","contextmenu"]],"javbest.xyz":[["acs","$","contextmenu"]],"jetztspielen.de":[["set-cookie","OptanonAlertBoxClosed","true"]],"jeu.fr":[["set-cookie","OptanonAlertBoxClosed","true"]],"jeux.fr":[["set-cookie","OptanonAlertBoxClosed","true"]],"jibjab.com":[["set-local-storage-item","cookie_banner:hidden","true"]],"jito.wtf":[["set-local-storage-item","hasConsentedPH","no"]],"jobs2work.es":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jobs2work.nl":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"johannische-kirche.org":[["set-cookie","cookie-manager","1","","reload","1"],["set-cookie","vimeo","1"]],"jove.com":[["set-local-storage-item","accept-jove-cookie","1"]],"jovemnerd.com.br":[["set-cookie","jovem-nerd-cookie-consent","false"]],"jpralves.net":[["set-cookie","cookiewarning","Y"]],"juancarlosmolinos.net":[["aopw","ABDSettings"]],"justtrucks.com.au":[["set","Drupal.behaviors.detectAdblockers","noopFunc"]],"kamera-express.fr":[["set-cookie","cookie_accepted","false","","reload","1"]],"kamerabudaya.com":[["ra","onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"]],"kapiert.de":[["aeld","contextmenu"]],"karls-shop.de":[["set-cookie","cookie-preference-v3","1"]],"karriere-hamburg.de":[["set-cookie","banner","2","","reload","1"]],"keeb.supply":[["set-cookie","KeebSupplyCookieConsent","true"]],"keengamer.com":[["aopr","__cmpGdprAppliesGlobally"]],"kellermann-online.com":[["set-cookie","cookie-preference","1"]],"kinderveiligheidswinkel.nl":[["set-cookie","cookie_preference","functional"]],"kinky.nl":[["set-cookie","_lst18","1"],["set-cookie","_tms","1"],["set-cookie","nc","1"]],"kinopoisk.ru":[["set-cookie","gdpr","0"]],"knauer-galabau.de":[["set","realCookieBanner","undefined"]],"kooora4lives.net":[["acs","document.oncontextmenu"]],"korona.co.jp":[["ra","oncopy|oncontextmenu","body"]],"kovopolotovary.cz":[["set-cookie","web-cookies","2"]],"ktm2day.com":[["acs","document.oncontextmenu"]],"kto.nl":[["set-cookie","caccept","on"]],"kuchniaplus.pl":[["aeld","contextmenu","a"]],"kunstmuseum-heidenheim.de":[["set","realCookieBanner","undefined"]],"kuopas.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kyoceradocumentsolutions.co.uk":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kytary.com":[["set-cookie","CookieConsent","0","","reload","1"]],"kytary.com.br":[["set-cookie","CookieConsent","0","","reload","1"]],"kytary.pl":[["set-cookie","CookieConsent","0","","reload","1"]],"kzvb.de":[["set-cookie","cookie-optin","true"]],"labiosthetique.de":[["set-cookie","wt-cookie-settings","0"]],"landhaus-thaumiller.de":[["set-cookie","Consent","0"]],"lanidor.com":[["set-cookie","c_aceitaAnaliticos","false"],["set-cookie","c_aceitaFuncionais","false"],["set-cookie","c_aceitaNecessarios","true"],["set-cookie","c_aceitaPublicitarios","false"]],"lawyersweekly.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"ldnews.com":[["nostif","gnt_mol_oy"]],"ledauphinhotel.com":[["rc","unreadable-display","","stay"]],"lenzing.ooe.gv.at":[["set-cookie","ris_cookie_setting","1"]],"leo-pharma.net":[["set-cookie","isCookiePolicySet","false"]],"lesa.ch":[["set-cookie","lesa-che-cookie-categories","essential"]],"lesjardinsinterieurs.com":[["rc","unreadable-display","","stay"]],"lesmoutonsenrages.fr":[["acs","jQuery","ai_adb"]],"lexlog.pl":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","document.onselectstart"]],"libgen.fr":[["nostif","appendMessage"]],"lichttraeumer.de":[["set","realCookieBanner","undefined"]],"lifo.gr":[["nostif","slideout"]],"liverpool.no":[["nostif","offsetHeight"]],"lottehotel.com":[["set-cookie","analyticsCookie","N"],["set-cookie","checkCookie","Y"],["set-cookie","essentialCookie","Y"],["set-cookie","marketingCookie","N"],["set-cookie","thirdCookie","N"]],"lotusantwerp.wacs.online":[["set-cookie","cookie_consent_user_accepted","true"]],"loveplay123.com":[["ra","oncontextmenu|onDragStart|onSelectStart"]],"lublin.eu":[["aeld","contextmenu"]],"lunas.pro":[["aeld","","mdp"]],"lyndonroofing.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mailhilfe.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mangaku.pl":[["acs","$","contextmenu"],["aeld","contextmenu"]],"maniac.de":[["set","realCookieBanner","undefined"]],"mansfieldnewsjournal.com":[["nostif","gnt_mol_oy"]],"margin.utex.io":[["set-cookie","isCookieConsentAccepted","true"]],"marinetraffic.com":[["set","mtGlobal.disabledAds","true"]],"marshfieldnewsherald.com":[["nostif","gnt_mol_oy"]],"matzoo.pl":[["ra","oncontextmenu"],["aeld","contextmenu"]],"mayflex.com":[["set-cookie","acceptCookies","true"]],"mbalib.com":[["aeld","/copy|cut|paste|selectstart/"]],"megaxh.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"meinspielplan.de":[["set-cookie","_msp_cc","yes"],["set-cookie","ga-disable","true"]],"meity.gov.in":[["set-cookie","CookieConsent","false"]],"mightyape.co.nz":[["rc","modal-open","body","stay"]],"mindmegette.hu":[["ra","href","[href*=\"ad.adverticum.net\"]"]],"minecraftforge.net":[["nostif","body"]],"modellbau-jung.de":[["rc","disable","div","stay"]],"molineuxmix.co.uk":[["acs","$","undefined"]],"monese.com":[["set-cookie","accept-analytical-cookies","false"],["set-cookie","accept-cookies","true"],["set-cookie","accept-marketing-cookies","false"]],"moneydigest.com":[["aeld","copy"]],"moneyguru.co":[["acs","$",".height"]],"mongri.net":[["acs","document.oncontextmenu"],["aopr","getSelection"]],"moovly.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"motoblouz.it":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motortrader.com.my":[["aopr","canRunAds"]],"movetex.com":[["set-cookie","cookieconsent","false"]],"movies4us.es":[["set-local-storage-item","cookiePolicy","true"]],"movies4us.net":[["set-local-storage-item","cookiePolicy","true"]],"moviesjoy.org":[["set-cookie","show_share","true"]],"musehub.com":[["set-local-storage-item","cookieConsent","denied"]],"myarklamiss.com":[["aeld","scroll"]],"mycentraljersey.com":[["nostif","gnt_mol_oy"]],"myfreemp3juices.cc":[["ra","onclick","[onclick=\"myFunction()\"]"]],"myvouchercodes.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"napiszar.com":[["acs","document.createElement","setTimeout"]],"narrwalla.de":[["set","realCookieBanner","undefined"]],"natuerlich-holzschuhe.de":[["set-cookie","cookie-preference","1"]],"nbcsports.com":[["aopw","admrlWpJsonP"]],"ndtvprofit.com":[["aopr","document.oncopy"]],"netgem.com":[["set-cookie","consent-cookie-popup","1"],["set-cookie","consent-cookie-vimeo","1"],["set-cookie","consent-cookie-youtube","1"]],"newarkadvocate.com":[["nostif","gnt_mol_oy"]],"newbernsj.com":[["nostif","gnt_mol_oy"]],"newsletter.eng-leadership.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"newweb.renoirpuzzle.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"ngs55.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nn.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nokportalen.se":[["set-cookie","cookies_allowed","yes"]],"nordfishing77.at":[["set-cookie","cookie-preference","1"]],"nordlayer.com":[["set-cookie","consent","accepted"]],"noriel.ro":[["set-cookie","isAgreed","no"]],"notebook-doktor.de":[["set","realCookieBanner","undefined"]],"notificationsounds.com":[["nostif","adsbygoogle","2000"]],"nucom.odoo.dev":[["set-cookie","website_cookies_bar","true"]],"nypost.com":[["remove-cookie","xbc"],["aopr","googletag.cmd"]],"nytimes.com":[["set","_adBlockCheck","true"],["set","navigator.storage.estimate","undefined"]],"octopusenergy.es":[["set-cookie","dismissCookieBanner","true"],["set-cookie","switchCookies","1"]],"okpoznan.pl":[["set-cookie","cookie_analytics","false"],["set-cookie","cookiepolicyinfo_new","true"]],"olarila.com":[["nostif","offsetHeight"]],"omniwood.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"opendesktop.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"openfiler.com":[["set-cookie","cookie-agreed","0"]],"operaneon.com":[["set-local-storage-item","consent_analytics","false"],["set-local-storage-item","consent_granted","true"],["set-local-storage-item","consent_marketing","false"]],"opintopolku.fi":[["set-cookie","oph-mandatory-cookies-accepted","true"]],"oponeo.com":[["set-cookie","_cookieConsents","1"]],"oponeo.org":[["set-cookie","_cookieConsents","1"]],"oricon.co.jp":[["ra","oncontextmenu|onselectstart|onmousedown",".all-lyrics[oncontextmenu]","complete"],["aeld","dragstart","","elements",".all-lyrics"]],"osmc.de":[["set","realCookieBanner","undefined"]],"otakudesu.fr":[["acs","document.oncontextmenu"]],"ousuca.com":[["set","realCookieBanner","undefined"]],"outidesigoto.com":[["acs","document.oncontextmenu"]],"paidiatreio.gr":[["acs","document.oncontextmenu"],["acs","document.addEventListener","copy"]],"palladiumboots.com":[["set-cookie","cookieconsent_status1","deny"]],"palladiumboots.de":[["set-cookie","cookieconsent_status1","deny"]],"palladiumboots.fr":[["set-cookie","cookieconsent_status1","deny"]],"pancreas.ro":[["aopw","document.onkeydown"]],"panwybierak.pl":[["rc","show--consent","body","stay"]],"patientimages.yarraradiology.com.au":[["set-cookie","gdpr_consent","true"]],"paulaschoice.com":[["set-local-storage-item","signUpModalClosed_slot-paulaschoice_us-global-signUpModal-sfmcModal","1"]],"payworks.ca":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"pcworld.com":[["set-cookie","hide-generic-overlay-techhive","true"]],"pecasauto24.pt":[["aeld","mousedown","function(t)"]],"petenkoiratarvike.com":[["set-cookie","pfi_consent_necessary","granted","","reload","1"]],"photobank.mainichi.co.jp":[["set","commonUtil.openToast","null"]],"picallow.com":[["acs","document.oncontextmenu","nocontextmenu"]],"pima.sk":[["set-cookie","adultModal","agree"]],"pinel-medizin.de":[["set","realCookieBanner","undefined"]],"pinterest.ru":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"placercams.com":[["set-cookie","OldAdultContent","1"],["set-cookie","AdultContent","1","","reload","1"]],"poe-vault.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"pogdesign.co.uk":[["nostif","clientHeight"]],"pokemonforever.com":[["set","google_jobrunner","true"]],"polskacanada.com":[["acs","jQuery","contextmenu"]],"popcornflix.com":[["set-cookie","ft_gdprUserConsent","yes"]],"poplinks.idolmaster-official.jp":[["ra","oncontextmenu|onselectstart|onmousedown","body"]],"pornhub.es":[["rc","hasAdAlert","header"]],"pornhub.pl":[["rc","hasAdAlert","header"]],"portal.hepster.com":[["set-local-storage-item","cookies_accepted","yes"]],"portal.sds.ox.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"posterstore.pl":[["set-cookie","synapse-cookie-preferences-set","true"]],"posthog.com":[["set-local-storage-item","cookie_consent","no"]],"powerup-gaming.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"primariasector2.ro":[["rmnt","script",".blockContextMenu"]],"prodopa.de":[["set","realCookieBanner","undefined"]],"producthunt.com":[["set-cookie","agreed_cookie_policy","1"]],"progameguides.com":[["aopr","admrlWpJsonP"]],"project529.com":[["set-cookie","cookies_ok","true"]],"protan-elmark.co.uk":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"ptittraindunord.com":[["set-cookie","protecteur","1"]],"publicopiniononline.com":[["nostif","gnt_mol_oy"]],"pulmonologyadvisor.com":[["remove-cookie","hmmet"]],"puratos.de":[["set-cookie","functionalCookieAccepted","true"]],"putlocker.de":[["aopw","document.oncontextmenu"]],"puzzle-heyawake.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-hitori.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-kakurasu.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-loop.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-nurikabe.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.cz":[["set-cookie","puzzleyou-cz_cookies_consent_allowlist","0","","reload","1"]],"qrzcq.com":[["set-cookie","COOKIES_ACK","1","","reload","1"]],"radicalsandvictuallers.co.uk":[["set-cookie","ce-cookie","N"]],"raindropteamfan.com":[["acs","document.oncontextmenu"]],"rdc.pl":[["set-cookie","cookiepolicyinfo_new","true"]],"rdr.ucl.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"readawrite.com":[["set","securityTool.disableRightClick","noopFunc"],["set","securityTool.disableF12","noopFunc"],["set","securityTool.disableCtrlP","noopFunc"],["set","securityTool.disableCtrlS","noopFunc"],["set","securityTool.disablePrintScreen","noopFunc"],["set","securityTool.disablePrintThisPage","noopFunc"],["set","securityTool.disableElementForPrintThisPage","noopFunc"]],"readcomicsonline.lol":[["nano-stb","e=>e-1"]],"readly.com":[["set-cookie","ReadlyCookieConsent","7","","reload","1"]],"regiomolkerei.ch":[["set-cookie","rmbb-che-cookie-categories","essential"]],"reporter-times.com":[["nostif","gnt_mol_oy"]],"republicadecuritiba.net":[["aopw","nocontext"]],"researchrepository.ul.ie":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"revenue.land":[["aopr","nocontext"],["acs","disableEnterKey"]],"ribescasals.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"rjtkauto.com":[["set-cookie","cookieAccepted","1","","reload","1"]],"rockpapershotgun.com":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"roemermann.com":[["set","realCookieBanner","undefined"]],"royal-oak.org":[["set-cookie","royaloakTermsCookie","1"]],"runningnews.gr":[["acs","document.oncontextmenu"],["acs","disableselect","reEnable"],["ra","oncontextmenu|onselectstart|ondragstart"]],"s-court.me":[["set-cookie","cookie_accept","true"]],"s0urce.io":[["aeld","/^(contextmenu|copy)$/"]],"safe.global":[["set-local-storage-item","SAFE__analyticsPreference","false"],["set-local-storage-item","safe.global","false"]],"samag-mt.com":[["set-cookie","cookieCheckTechnicalVal","true"],["set-cookie","cookieConsent","true"]],"santander.rewardgateway.co.uk":[["set-cookie","cookie_consent_status","allow"],["set-cookie","cookie_preferences","10"]],"sbbrisk.com":[["acs","check","debugger"],["nosiif","_0x"]],"sbenny.com":[["nostif","()","2000"]],"sbflix.it":[["acs","onload","contextmenu"]],"sbot.cf":[["rmnt","script","console.clear"],["nosiif","console.clear"]],"scarysymptoms.com":[["acs","document.oncontextmenu"],["acs","wccp_pro_iscontenteditable"]],"scharoun-theater-wolfsburg-webshop.tkt-datacenter.net":[["set-cookie","cookieBannerConfirmed","0","","reload","1"]],"schulebruetten.ch":[["set","realCookieBanner","undefined"]],"sdewery.me":[["aopw","document.ondragstart"],["aopw","disableEnterKey"]],"sede.coruna.gal":[["set-cookie","AYTO_CORUNA_COOKIES","1","","reload","1"]],"seifriz-preis.de":[["set","realCookieBanner","undefined"]],"seir-sanduk.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seir-sanduk.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"senda.pl":[["set-cookie","cookieConsent3","true"]],"seoul.cs.land.to":[["ra","onselectstart"]],"sflix2.co.uk":[["nosiif","/_0x|devtools/"]],"sflix2.nl":[["nosiif","/_0x|devtools/"]],"sgd.de":[["aeld","contextmenu"]],"shop.euyansang.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.skechers-twn.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.wacoal.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shz.al":[["set","confirm","noopFunc"]],"silvini.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"silvini.de":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"sketch.metademolab.com":[["set-cookie","animated_drawings","true"]],"sky-blue.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"smotret-tv.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"solarmovie.nl":[["nostif","_detectLoop"]],"solidaris-wallonie.be":[["set-cookie","hide-cookie-banner","true"]],"solotrend.net":[["aopw","ai_front"]],"sonyliv.com":[["set-local-storage-item","analytics_cookies_acceptance","true"],["set-local-storage-item","cookie_acceptance","true"]],"spanienweinonline.ch":[["set-cookie","amcookie_allowed","1"]],"spela.se":[["set-cookie","OptanonAlertBoxClosed","true"]],"spiked-online.com":[["set-local-storage-item","nudges","$remove$"]],"splendid-internet.de":[["set","realCookieBanner","undefined"]],"sportsmetrics.football":[["set-cookie","SportsMetrics_Privacy_Police_Cookie","true"]],"ssga.com":[["set-session-storage-item","cookieConfirmed","true"]],"stadt-bremerhaven.de":[["rmnt","script","Adblocker"]],"starlux-airlines.com":[["set-cookie","advertisingCookie","false"],["set-cookie","analyticsCookie","false"],["set-cookie","functionalCookie","true"]],"startuphub.ai":[["set-local-storage-item","cookie_consent","rejected"]],"statsignificant.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"stlorenzen.eu":[["set-cookie","ris_cookie_setting","1"]],"stmas.bayern.de":[["set-cookie","statistik","0"]],"stockerau.at":[["set-cookie","ris_cookie_setting","1"]],"store.pw.live":[["set-cookie","accept_cookies","accepted"]],"store.ubisoft.com":[["set-cookie","UBI_PRIVACY_POLICY_ACCEPTED","true"],["set-cookie","UBI_PRIVACY_VID_OPTOUT","false"]],"streamclipsgermany.de":[["set-local-storage-item","cookiesAccepted","true"]],"streamtape.com":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"streamvid.net":[["aeld","contextmenu"],["rmnt","script","debugger"]],"strtape.com":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strtape.es":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"studyadda.com":[["set","document.onmousedown","null"],["set","document.oncontextmenu","null"]],"stuhl24-shop.de":[["set-cookie","cookie-preference","1"]],"suedafrika-wein.de":[["set","realCookieBanner","undefined"]],"supercartoons.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"swaggystocks.com":[["set-cookie","cc","accepted"]],"swatchseries.it":[["set-cookie","show_share","true"]],"swigthis.com":[["set-cookie","age_verification","1"]],"t3.chat":[["nostif",".abort();","1000"]],"tabonitobrasil.co.uk":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"takealot.com":[["set-cookie","cookieNotice","true"]],"targetstudy.com":[["aopw","stopSelect"]],"tass.ru":[["set-local-storage-item","consentCookie","true"]],"tastemade.com":[["set-local-storage-item","hide-cookbook-modal-0","true"]],"tc-equipment.de":[["set","realCookieBanner","undefined"]],"tchadcarriere.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"techgyd.com":[["acs","document.oncontextmenu","nocontextmenu"]],"technicpack.net":[["acs","document.createElement","admiral"]],"techniknews.net":[["set","realCookieBanner","undefined"]],"tekinvestor.no":[["nostif","custom-modal-create-account-link"]],"telemetr.io":[["set-local-storage-item","c","false"]],"tennessean.com":[["nostif","gnt_mol_oy"]],"tenstorrent.com":[["set-cookie","tenstorrent_cookie_preferences","true"]],"teodor-shop.com":[["set-cookie","amcookie_allowed","1"]],"teplickedorty.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"terra-natur.com":[["set","realCookieBanner","undefined"]],"textcleaner.net":[["no-fetch-if","googlesyndication"]],"the-albany.co.uk":[["set-cookie","ce-cookie","N"]],"theartofnakedwoman.fr":[["aopw","intializemarquee"]],"theartofnakedwoman.net":[["aopw","intializemarquee"]],"theartofnakedwoman.org":[["aopw","intializemarquee"]],"thebotanistbristol.co.uk":[["set-cookie","ce-cookie","N"]],"thegleaner.com":[["nostif","gnt_mol_oy"]],"theguardian.com":[["set-local-storage-item","gu.history.dailyArticleCount","$remove$"],["set-local-storage-item","gu.history.weeklyArticleCount","$remove$"]],"thehill.com":[["aeld","scroll"]],"thememazing.com":[["aeld","","mdp"]],"therecordherald.com":[["nostif","gnt_mol_oy"]],"thesheepheidedinburgh.co.uk":[["set-cookie","ce-cookie","N"]],"thethings.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"thingtesting.com":[["set-local-storage-item","cookiesAccepted","true"]],"tiefenthaler-landtechnik.at":[["set-cookie","allowTracking","false"]],"tiefenthaler-landtechnik.de":[["set-cookie","allowTracking","false"]],"tiermasseur-mannsberger.at":[["set","realCookieBanner","undefined"]],"timeanddate.com":[["aeld","load","ad-wrap"]],"timhortons.co.th":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"timponline.ro":[["aopw","disable_copy"],["aopw","disableSelection"],["aopw","nocontext"]],"tiskarik.cz":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"titantvguide.com":[["set-local-storage-item","COOKIE_CHECK","false"]],"toni-maccaroni.de":[["set-cookie","BestellalarmCookiesAccepted","true"]],"top1iq.com":[["acs","shortcut"]],"topeuropix.net":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"toplink.de":[["set","realCookieBanner","undefined"]],"tower.dev":[["set-local-storage-item","framerCookiesDismissed","true"]],"toysrus.ca":[["set-cookie","cookieModal","false"],["set-cookie","isNewsletterPopupShown","false","","reload","1"]],"transinfo.pl":[["aeld","copy"]],"truecar.com":[["set-cookie","cookieConsent","true"]],"tutu.ru":[["set-cookie","disclaimer_show","1"]],"tv-asahi.co.jp":[["aeld","contextmenu"],["ra","oncontextmenu","body"]],"tv-tokyo.co.jp":[["set","document.oncontextmenu","null"]],"tvhay.de":[["rmnt","script","wccp_pro"]],"tvline.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvron.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvron.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvron.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvzingvn.pl":[["acs","onload","contextmenu"]],"twenga.co.uk":[["set-cookie","cookiewarning","1","","reload","1"]],"twenga.nl":[["set-cookie","cookiewarning","1","","reload","1"]],"txori.com":[["aeld","contextmenu","_0x"]],"u.gg":[["rmnt","script","reviveScroll","excludes","self.__next"]],"ubisoft.com":[["set-cookie","UBI_PRIVACY_ADS_OPTOUT","true"],["set-cookie","UBI_PRIVACY_POLICY_ACCEPTED","false"],["set-cookie","UBI_PRIVACY_POLICY_VIEWED","true"],["set-cookie","UBI_PRIVACY_VIDEO_OPTOUT","false"]],"ukworkshop.co.uk":[["nostif","google_jobrunner"]],"unisa.ac.za":[["set-local-storage-item","cookieConsent","essential"]],"universalliquors.net":[["set-cookie","age_verification","1"]],"unmute.sh":[["set-local-storage-item","cookieConsent","false"]],"untitle.org":[["acs","document.oncontextmenu"]],"uploadvr.com":[["set-local-storage-item","dismissedUpgradePrompt","true"]],"urbanoutfitters.com":[["set-local-storage-item","modalViewed","1"]],"usatoday.com":[["nostif","gnt_mol_oy"]],"valamis.com":[["set-cookie","valamis_cookie_analytics","false"],["set-cookie","valamis_cookie_marketing","false"],["set-cookie","valamis_cookie_message","true","","reload","1"]],"vanlifecampers.com":[["rc","body","cmplz-banner-active"]],"vanmossel.com.br":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vanmossel.de":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"variaine.fi":[["set-cookie","GBaseConsent","0"],["set-cookie","GBaseConsentToAnalytics","0"]],"variohm.de":[["set-cookie","AllowAllCookies","1","","reload","1"]],"varna.eu":[["set-cookie","ris_cookie_setting","1"]],"velleahome.gr":[["set-cookie","hide_cookies_consent","1"]],"veneto.info":[["aeld","copy"]],"vercalendario.info":[["aeld","copy","Source"]],"vidara.fr":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"videovard.fr":[["set","console.clear","undefined"]],"vidplay.nl":[["set","DisDevTool","undefined"]],"vinaurl.de":[["ra","onkeydown"]],"voeunblck.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voirfilms.es":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"vtube.network":[["acs","RegExp","contextmenu"]],"w6-wertarbeit.de":[["set-cookie","cookie-preference","1"]],"wamba.com":[["set-cookie","appBannerPopUpRulesCookie","true"]],"wattpad.com":[["ra","oncontextmenu"],["aeld","/copy|dragstart/"]],"webcodegeeks.com":[["nostif","onload_popup","8000"]],"webtrack.dhlecs.com":[["set-cookie","dhl-webapp-track","allowed"]],"weekend.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"weetabix-arabia.com":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.pt":[["rc","wcc-popup-overflow","body","stay"]],"weicon.com":[["set-cookie","cookie-preference","1"]],"wenku.baidu.com":[["aeld","/contextmenu|dragstart|keydown/","event.dispatch.apply"]],"whatfontis.com":[["acs","$","adBlock"]],"wormate.io":[["aeld","contextmenu","preventDefault"]],"wstream.pl":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wtsenergy.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"www-glasgowlive-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www-lincolnshirelive-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.e-tec.at":[["set-cookie","cc_granted","true","","","domain","www.e-tec.at","reload","1"]],"www.facebook.com":[["json-prune","require.0.3.0.__bbox.define.[].2.is_linkshim_supported require.0.3.0.__bbox.define.[].2.click_ids"]],"x-link.pl":[["aeld","contextmenu","a"]],"xham.live":[["set-cookie","cookie_accept","1"]],"xhamster.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"yenivatan.at":[["set","realCookieBanner","undefined"]],"yesmovies.com.br":[["set-cookie","show_share","true"]],"yle.fi":[["set","yleConsentSdk._consentSdk._embedded_social_media","true"],["set","yleConsentSdk.show","noopFunc"]],"youthforum.org":[["set-cookie","__cookie_consent","false"]],"yoyofilmeys.com":[["acs","document.oncontextmenu"]],"yuboto-telephony.gr":[["set-cookie","yuboto-telephony.gr_CookiesAcceptedN","1"]],"zabawkahurtownia.pl":[["rmnt","script","/oncontextmenu|disableselect/"]],"zadowolenie.pl":[["set-cookie","AtomStore[COOKIES_ACCEPTED]","1","","reload","1"],["set-cookie","AtomStore[FUNCTIONAL_COOKIES_ACCEPTED]","1"],["set-cookie","AtomStore[MARKETING_COOKIES_ACCEPTED]","0"]],"zahnarzt-dr-henkel.de":[["set","realCookieBanner","undefined"]],"zanesvilletimesrecorder.com":[["nostif","gnt_mol_oy"]],"zappatos.com.br":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapx.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zaui.com":[["aeld","/^(mouseout|mouseleave)$/"]],"zave.it":[["set-local-storage-item","framerCookiesDismissed","true"]],"zhik.com":[["set-cookie","cookieAccepted","true"]],"zingvntv.com.br":[["acs","onload","contextmenu"]],"zingvntv.de":[["acs","onload","contextmenu"]],"zingvntv.fr":[["acs","onload","contextmenu"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
