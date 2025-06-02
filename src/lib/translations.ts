
export type Locale = 'nl' | 'en';

export interface TranslationContent {
  // Header / Nav
  navHome: string;
  navCustomers: string;
  navServices: string;
  // navPublications: string; // Hidden
  navProjectInquiry: string;
  navContact: string;
  languageToggle: string;
  themeToggleLight: string;
  themeToggleDark: string;
  loading: string;

  // Home Section
  homeTitle: string;
  homeSubtitle: string;
  homeAboutMeTitle: string;
  homeAboutMeP1: string;
  homeAboutMeP2: string;
  homeAboutMeP3: string;
  homeCTA: string;

  // Customers Section
  customersTitlePart1: string;
  customersTitlePart2: string; // Retained from user's base
  customersTitlePart3: string; // Retained from user's base
  customersDescription: string;
  customersLinkedInClarification: string;
  customersCTAChallenge: string;
  customersCTAPleasure: string;


  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;

  service1Title: string;
  service1Description: string;
  service1DetailTitle: string;
  service1DetailDesc: string;
  service1DetailBullet1: string;
  service1DetailBullet2: string;
  service1DetailBullet3: string;
  service1DetailBullet4: string;
  service1DetailBullet5: string;
  service1DetailCTA: string;
  service1DialogFooterText: string;

  service2Title: string;
  service2Description: string;
  service2DetailTitle: string;
  service2DetailDesc: string;
  service2DetailBullet1: string;
  service2DetailBullet2: string;
  service2DetailBullet3: string;
  service2DetailBullet4: string;
  service2DetailBullet5: string;
  service2DetailCTA: string;
  service2DialogFooterText: string;

  service5Title: string;
  service5Description: string;
  service5DetailTitle: string;
  service5DetailDesc: string;
  service5DetailBullet1: string;
  service5DetailBullet2: string;
  service5DetailBullet3: string;
  service5DetailBullet4: string;
  service5DetailBullet5: string;
  service5DetailCTA: string;
  service5DialogFooterText: string;

  // Project Inquiry Section
  projectInquiryTitle: string;
  projectInquirySubtitle: string; // This is the animated one
  questionStaticPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  questionLabel: string;
  submitInquiryButton: string;
  submitInquiryLoading: string;
  contactFormSuccessTitle: string;
  contactFormSuccessMessage: string;
  contactFormError: string;
  // contactFormResponseTime: string; // Removed from form display

  inquiryPlaceholder1: string;
  inquiryPlaceholder2: string;
  inquiryPlaceholder3: string;
  // inquiryPlaceholder4: string; // Removed
  inquiryPlaceholder5: string;
  inquiryPlaceholder6: string;
  inquiryPlaceholder7: string;
  inquiryPlaceholder8: string;
  inquiryPlaceholder9: string;
  // inquiryPlaceholder10: string; // Removed
  inquiryPlaceholder11: string;
  inquiryPlaceholder12: string;
  // inquiryPlaceholder13: string; // Removed
  inquiryPlaceholder14: string;
  // inquiryPlaceholder15: string; // Removed
  inquiryPlaceholder16: string;

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  contactLinkedIn: string;
  sendMessage: string;
  openWhatsApp: string;
  viewProfile: string;
  emailCopiedSuccess: string;
  copyErrorTitle: string;
  copyErrorDescription: string;
  copyToClipboardTooltip: string;
  callDirectlyTooltip: string;

  // Generic
  error: string;
  by: string;
  optionalLabel: string;
  closeButton: string;

  // Legal
  legalPrivacy: string;
  legalDisclaimer: string;

  // Privacy Policy Page
  privacyPageTitle: string;
  privacyLastUpdated: string;
  privacyIntro: string;
  privacyInfoCollectTitle: string;
  privacyInfoCollectGenUsage: string;
  privacyInfoCollectContact: string;
  privacyHowWeUseTitle: string;
  privacyHowWeUseRespond: string;
  privacyHowWeUseImprove: string;
  privacyHowWeUseCookies: string;
  privacyInfoSharingTitle: string;
  privacyInfoSharingNoSell: string;
  privacyInfoSharingGov: string;
  privacyThirdPartyLinksTitle: string;
  privacyThirdPartyLinksP1: string;
  privacySecurityTitle: string;
  privacySecurityP1: string;
  privacyChangesPolicyTitle: string;
  privacyChangesPolicyP1: string;
  privacyContactUsTitle: string;
  privacyContactUsP1Prefix: string;
  privacyGoverningLawTitle: string;
  privacyGoverningLawP1: string;

  // Disclaimer Page
  disclaimerPageTitle: string;
  disclaimerValidFrom: string;
  disclaimerIntroP1: string;
  disclaimerAccuracyTitle: string;
  disclaimerAccuracyP1: string;
  disclaimerWebsiteAvailabilityTitle: string;
  disclaimerWebsiteAvailabilityP1: string;
  disclaimerWebsiteAvailabilityL1: string;
  disclaimerWebsiteAvailabilityL2: string;
  disclaimerExternalLinksTitle: string;
  disclaimerExternalLinksP1: string;
  disclaimerElectronicCommTitle: string;
  disclaimerElectronicCommP1: string;
  disclaimerNoProAdviceTitle: string;
  disclaimerNoProAdviceP1: string;
  disclaimerLimitationLiabilityTitle: string;
  disclaimerLimitationLiabilityP1: string;
  disclaimerChangesDisclaimerTitle: string;
  disclaimerChangesDisclaimerP1: string;
}


export type Translations = {
  [key in Locale]: TranslationContent;
};

export const translations: Translations = {
  nl: {
    navHome: 'Home',
    navCustomers: 'Klanten',
    navServices: 'Diensten',
    // navPublications: 'Publicaties', // Hidden
    navProjectInquiry: 'Contactformulier',
    navContact: 'Contact',
    languageToggle: 'Switch to English',
    themeToggleLight: 'Schakel naar lichte modus',
    themeToggleDark: 'Schakel naar donkere modus',
    loading: 'Laden...',

    homeTitle: 'Data > Inzicht > Waarde, Simpel.',
    homeSubtitle: 'Tom de Bruijn | Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Welkom bij DataSight.',
    homeAboutMeP1: "Mijn naam is Tom de Bruijn en in 2024 heb ik DataSight opgericht. Met DataSight heb ik een heldere missie: organisaties helpen bij complexe datavraagstukken door heldere- bruikbare inzichten te bieden die échte waarde opleveren.",
    homeAboutMeP2: "Met meer dan tien jaar ervaring en een sterke achtergrond in APM en observability, heb ik mij in de afgelopen jaren ontwikkeld tot een veelzijdige en ervaren data engineer.",
    homeAboutMeP3: "Vanuit DataSight ben ik als gecertificeerd specialist in Splunk en Cribl inzetbaar voor consultancy, strategisch advies en op maat gemaakte trainingen op elk niveau. Op zoek naar een ervaren partner die écht betrokken is bij jouw succes? Laten we kennismaken.",
    homeCTA: 'Neem Contact Op',

    customersTitlePart1: 'Klanten',
    customersTitlePart2: '',
    customersTitlePart3: '',
    customersDescription: 'Ik werk voor zowel nationale als internationale bedrijven in de profit- en non-profitsector. Wat ons bindt, is de behoefte om complexe veranderingen door te voeren, waarbij IT en data cruciaal zijn.',
    customersLinkedInClarification: "Een overzicht van projecten en bedrijven waarvoor ik via eerdere werkgevers heb gewerkt vind je op",
    customersCTAChallenge: "Heeft u een uitdaging of project waarin ik kan meedenken of meewerken?",
    customersCTAPleasure: "Ik kom graag in contact voor vrijblijvende kennismaking",


    servicesTitle: 'Diensten',
    servicesSubtitle: 'Met DataSight help ik organisaties om echt waarde uit hun data te halen. Dat doe ik niet alleen met onderstaande diensten, maar ook met de juiste technische oplossingen, kennis en ervaring. Of het nu gaat om een cloudmigratie, automatisering, of het inzetten van producten als Splunk ITSI of Enterprise Security – ik denk mee en help graag met de uitvoering.',

    service1Title: 'Splunk Consultancy',
    service1Description: 'Voor proactief beheer, diepgaande expertise, projecten en waarde optimalisatie van uw omgeving. Lees meer.',
    service1DetailTitle: 'Splunk Consultancy: Maximaliseer uw data potentieel',
    service1DetailDesc: 'Met meer dan 10 jaar ervaring help ik je om het maximale uit je Splunk-omgeving te halen. Of het nu gaat om dagelijkse taken zoals upgrades en beheer, het optimaliseren van de omgeving, of het gebruik van oplossingen als Splunk IT Service Intelligence (ITSI) en Splunk Enterprise Security (ES) — ik zorg dat jouw Splunk-omgeving betrouwbaar draait en volledig wordt benut. Mijn diensten omvatten onder andere:',
    service1DetailBullet1: 'Proactief beheer van je Splunk-omgeving voor optimale prestaties en continuïteit.',
    service1DetailBullet2: 'Ondersteuning bij Splunk-upgrades, cloudmigraties en automatisering met tools zoals Ansible.',
    service1DetailBullet3: 'Implementatie en configuratie van Splunk IT Service Intelligence (ITSI) voor betere IT-service monitoring.',
    service1DetailBullet4: 'Support bij een Security Operations Center (SOC), met de implementatie en configuratie van Splunk Enterprise Security (ES).',
    service1DetailBullet5: 'Ontwikkeling van maatwerk dashboards, alerts en data-integraties, helemaal afgestemd op wat jij nodig hebt.',
	service1DialogFooterText: "Dit is een algemene indruk van wat ik onder Splunk-consultancy aanbied. Elke klant en omgeving is anders, met eigen specifieke uitdagingen en doelen. Daarom ga ik graag eerst met je in gesprek om jouw situatie goed te begrijpen en samen tot de juiste aanpak te komen.",
    service1DetailCTA: 'Neem contact op',

    service2Title: 'Cribl Consultancy',
    service2Description: 'Voor volledige controle over uw data en efficiënte observability. Lees meer.',
    service2DetailTitle: 'Cribl Consultancy: Voor efficiente observability',
    service2DetailDesc: 'Cribl is een platform dat acteert tussen databronnen en databestemmingen. Met Cribl Stream kunt u data verzamelen, filteren, verrijken, beveiligen en routeren. Met Cribl krijgt u volledig grip en eigenaarschap over uw data en gaat u vendor-locking tegen.\nOnze diensten omvatten:',
    service2DetailBullet1: 'Implementatie en configuratie van Cribl.',
    service2DetailBullet2: 'Proactief beheer van uw Cribl Stream omgeving en het aanmaken van processing pipelines voor filtering, routing en verrijking.',
    service2DetailBullet3: 'Integratie van Cribl met Splunk, SIEM-oplossingen en diverse andere databestemmingen.',
    service2DetailBullet4: 'Realisatie van kostenbesparingsstrategieën via slimme data routing en reductie met Cribl.',
    service2DetailBullet5: '',
	service2DialogFooterText: "Cribl is op veel manieren inzetbaar. Iedere klant en omgeving is uniek, daarom gaan wij graag eerst het gesprek met u aan om de mogelijkheden te bespreken.",
    service2DetailCTA: 'Neem contact op',

    service5Title: 'Trainingen & Workshops',
    service5Description: 'Nieuw met Splunk of Cribl, of hulp nodig? Wij leveren maatwerk trainingen en workshops. Lees meer.',
    service5DetailTitle: 'Trainingen & Workshops: Praktische trainingen afgestemd op uw organisatie en behoeften',
    service5DetailDesc: 'Bij DataSight zijn wij gepassioneerd en enthousiast over ons werk. Ik deel graag mijn kennis en ervaring met anderen op een toegankelijke en praktische manier. Daarom worden wij regelmatig gevraagd om trainingen en workshops te verzorgen. Of het nu gaat om organisaties die nieuw zijn met Splunk of Cribl, of om klanten die meer uit hun tools willen halen, alles behoort tot de mogelijkheden.\nWij geloven in maatwerk, zodat we specifiek kunnen inspelen op uw wensen en daarmee maximaal resultaat kunnen bieden. DataSight verzorgt trainingen op locatie of remote, op uw eigen (Splunk/Cribl) omgeving, maar ook via een eigen demo-omgeving. Daarbij bieden wij zowel 1-op-1 sessies als groepssessies, variërend van één dag tot meerdere dagen.\nOnze trainingsmogelijkheden omvatten:',
    service5DetailBullet1: 'Maatwerk trainingen afgestemd op de behoeften van uw organisatie.',
    service5DetailBullet2: 'Trainingen voor beginners en gevorderden in Splunk en Cribl.',
    service5DetailBullet3: 'Flexibele trainingsvormen: individueel of in groepsverband.',
    service5DetailBullet4: 'Interactieve labs en Q&A sessies voor diepgaand begrip.',
    service5DetailBullet5: 'Trainingen op locatie of remote, op eigen of demo-omgeving.',
	service5DialogFooterText: "Neem gerust contact met ons op om de mogelijkheden te bespreken. Prijzen zijn vanwege maatwerk in overleg.",
    service5DetailCTA: 'Neem contact op',

    projectInquiryTitle: 'Contactformulier',
    projectInquirySubtitle: "This text is animated and comes from inquiryPlaceholder keys",
    questionStaticPlaceholder: 'Beschrijf hier uw vraag of projectidee...',
    emailLabel: 'E-mailadres',
    emailPlaceholder: 'uw.email@voorbeeld.nl',
    phoneLabel: 'Telefoonnummer',
    phonePlaceholder: 'Bijv. +31 6 12345678',
    questionLabel: 'Uw vraag of projectbeschrijving',
    submitInquiryButton: 'Verstuur Aanvraag',
    submitInquiryLoading: 'Bezig met versturen...',
    contactFormSuccessTitle: 'Aanvraag Ontvangen!',
    contactFormSuccessMessage: 'Bedankt voor uw bericht. U ontvangt een bevestigingsmail.',
    contactFormError: 'Er is een fout opgetreden bij het versturen. Probeer het later opnieuw of neem direct contact op.',


    inquiryPlaceholder1: "Werk je met Splunk of Cribl en loop je ergens tegenaan? 🤔\nIk denk graag met u mee.",
    inquiryPlaceholder2: "Heb je een uitdaging in het gebruik of beheer van Splunk of Cribl? 🎯\nStuur ons gerust een berichtje.",
    inquiryPlaceholder3: "Ook voor een virtuele ☕ of korte kennismaking.\nPlan hier eenvoudig 30 minuten in je agenda 📅.",
    // inquiryPlaceholder4: "Op zoek naar een training op maat voor jouw team in Splunk of Cribl? 🎓\nWij bellen graag even.", // Removed
    inquiryPlaceholder5: "Vragen over Splunk Observability, Security of ITSI? 🔍\nIk denk graag met u mee.",
    inquiryPlaceholder6: "Wil je efficiënter werken met Cribl of Splunk? 🛠️\nDataSight geeft ook hands-on trainingen die precies aansluiten bij jouw situatie.",
    inquiryPlaceholder7: "Hulp nodig met dashboarding, alerting of rapportages in Splunk? 📊\nIk help graag.",
    inquiryPlaceholder8: "Beheer je Cribl Stream of Edge en wil je het maximale eruit halen? 📈\nLaten we kijken wat er mogelijk is.",
    inquiryPlaceholder9: "Hulp nodig bij het opzetten of optimaliseren van Cribl Pipelines? ⚙️\nStuur gerust een berichtje.",
    // inquiryPlaceholder10: "Training nodig, maar geen standaard verhaal? 💡\nWij bieden maatwerk – praktisch, begrijpelijk en direct toepasbaar.", // Removed
    inquiryPlaceholder11: "Gewoon even kennismaken of een vraag stellen over Splunk/Cribl? 👋\nStuur gerust een berichtje!",
    inquiryPlaceholder12: "Wil je met minder data meer inzicht krijgen? ✨\nIk help om slimme keuzes te maken met Splunk & Cribl.",
    // inquiryPlaceholder13: "Een snelle call om je Splunk-omgeving future-proof te maken? 📞\nPlan 'm hier in 🎧.", // Removed
    inquiryPlaceholder14: "Wil je met je team sneller werken in Cribl of Splunk? 🚀\n De trainingen zijn hands-on, maatwerk en zonder onnodige theorie.",
    // inquiryPlaceholder15: "Liever 1-op-1 begeleiding dan droge documentatie? 👨‍🏫\nWij begeleiden je praktisch, op jouw tempo.", // Removed
    inquiryPlaceholder16: "Wil je kosten besparen door Splunk en Cribl slimmer in te zetten? ✨\n Ik graag meer met je mee naar efficiënte oplossingen.",

    contactTitle: 'Neem Contact Op',
    contactSubtitle: 'Laten we bespreken hoe DataSight uw organisatie kunnen helpen met uw data-uitdagingen.',
    contactEmail: 'E-mail',
    contactPhone: 'Telefoon',
    contactLinkedIn: 'LinkedIn Profiel',
    sendMessage: 'Verstuur Email',
    openWhatsApp: 'Open WhatsApp',
    viewProfile: 'Bekijk Profiel',
    emailCopiedSuccess: "E-mailadres gekopieerd!",
    copyErrorTitle: "Kopiëren Mislukt",
    copyErrorDescription: "Kon het e-mailadres niet naar het klembord kopiëren.",
    copyToClipboardTooltip: "Kopieer naar klembord",
    callDirectlyTooltip: "Direct bellen",

    error: 'Fout',
    by: 'door',
    optionalLabel: 'optioneel',
    closeButton: 'Sluiten',

    legalPrivacy: 'Privacy',
    legalDisclaimer: 'Disclaimer',

    // Privacy Policy Page
    privacyPageTitle: 'Privacybeleid voor DataSight',
    privacyLastUpdated: 'Laatst bijgewerkt: 1 april 2024',
    privacyIntro: 'DataSight ("wij", "ons", of "onze", "ik"), beheerd door Tom de Bruijn (onafhankelijk consultant), hecht waarde aan uw privacy. Dit Privacybeleid legt uit hoe wij met uw gegevens omgaan wanneer u onze website DataSight (de "Site") gebruikt en de diensten die wij aanbieden.',
    privacyInfoCollectTitle: 'Informatie die Wij Verzamelen',
    privacyInfoCollectGenUsage: 'Algemene Gebruiksgegevens: Informatie zoals uw IP-adres en browsegedrag kan anoniem worden verzameld om onze website te verbeteren. Dit identificeert u niet persoonlijk.',
    privacyInfoCollectContact: 'Contactinformatie: Als u ons contactformulier gebruikt, verzamelen wij uw naam, e-mail, optioneel telefoonnummer en bericht om te kunnen reageren.',
    privacyHowWeUseTitle: 'Hoe Wij Uw Informatie Gebruiken',
    privacyHowWeUseRespond: 'Om op uw aanvragen te reageren.',
    privacyHowWeUseImprove: 'Voor websiteverbetering en analyse.',
    privacyHowWeUseCookies: 'Cookies worden gebruikt voor basis websitefunctionaliteit en voorkeuren. U kunt cookies beheren via uw browserinstellingen.',
    privacyInfoSharingTitle: 'Informatie Delen',
    privacyInfoSharingNoSell: 'Wij verkopen uw persoonlijke gegevens niet.',
    privacyInfoSharingGov: 'Informatie kan worden gedeeld met autoriteiten indien wettelijk verplicht.',
    privacyThirdPartyLinksTitle: 'Links naar Derden',
    privacyThirdPartyLinksP1: 'Onze site kan links naar andere websites bevatten. Wij zijn niet verantwoordelijk voor hun privacybeleid.',
    privacySecurityTitle: 'Beveiliging',
    privacySecurityP1: 'Wij nemen redelijke maatregelen om uw gegevens te beschermen, maar geen enkele online transmissie is 100% veilig.',
    privacyChangesPolicyTitle: 'Wijzigingen in dit Beleid',
    privacyChangesPolicyP1: 'Dit beleid kan wijzigen. Wijzigingen worden op deze pagina gepubliceerd.',
    privacyContactUsTitle: 'Neem Contact Met Ons Op',
    privacyContactUsP1Prefix: 'Vragen over dit beleid? Mail ons op: ',
    privacyGoverningLawTitle: 'Toepasselijk Recht',
    privacyGoverningLawP1: 'Nederlands recht is van toepassing. Geschillen worden voorgelegd aan de bevoegde rechtbank in Den Haag.',

    // Disclaimer Page
    disclaimerPageTitle: 'Disclaimer voor DataSight',
    disclaimerValidFrom: 'Geldig vanaf: 1 april 2024',
    disclaimerIntroP1: 'De informatie op de website van {SITE_CONFIG.name} (beheerd door Tom de Bruijn, onafhankelijk consultant) is voor algemene informatiedoeleinden. Wij streven naar nauwkeurigheid, maar geven geen garanties over de volledigheid of juistheid.',
    disclaimerAccuracyTitle: 'Nauwkeurigheid van Informatie',
    disclaimerAccuracyP1: 'Wij doen ons best om de informatie actueel en correct te houden, maar fouten zijn mogelijk. Wij zijn niet aansprakelijk voor onjuistheden.',
    disclaimerWebsiteAvailabilityTitle: 'Website Beschikbaarheid',
    disclaimerWebsiteAvailabilityP1: 'Wij garanderen geen foutloze of ononderbroken werking van de website.',
    disclaimerWebsiteAvailabilityL1: 'Schade door onjuistheden of weglatingen.',
    disclaimerWebsiteAvailabilityL2: 'Problemen door internetdistributie (storingen, vertragingen).',
    disclaimerExternalLinksTitle: 'Externe Links',
    disclaimerExternalLinksP1: 'Links naar websites van derden vallen buiten onze verantwoordelijkheid. Wij onderschrijven niet noodzakelijkerwijs de inhoud van gelinkte sites.',
    disclaimerElectronicCommTitle: 'Elektronische Communicatie',
    disclaimerElectronicCommP1: 'Wij garanderen niet dat e-mails tijdig worden ontvangen of verwerkt en aanvaarden geen aansprakelijkheid voor de gevolgen hiervan.',
    disclaimerNoProAdviceTitle: 'Geen Professioneel Advies',
    disclaimerNoProAdviceP1: 'De informatie op deze site is geen professioneel advies. Raadpleeg een deskundige voor specifieke situaties. Gebruik van de informatie is op eigen risico.',
    disclaimerLimitationLiabilityTitle: 'Beperking van Aansprakelijkheid',
    disclaimerLimitationLiabilityP1: 'DataSight is niet aansprakelijk voor enige directe of indirecte schade die voortvloeit uit het gebruik van deze website, tenzij er sprake is van opzet of grove nalatigheid.',
    disclaimerChangesDisclaimerTitle: 'Wijzigingen in Deze Disclaimer',
    disclaimerChangesDisclaimerP1: 'Deze disclaimer kan worden gewijzigd. Wijzigingen zijn direct van kracht na publicatie.',
  },
  en: {
    navHome: 'Home',
    navCustomers: 'Customers',
    navServices: 'Services',
    // navPublications: 'Publications', // Hidden
    navProjectInquiry: 'Contact Form',
    navContact: 'Contact',
    languageToggle: 'Schakel naar Nederlands',
    themeToggleLight: 'Switch to light mode',
    themeToggleDark: 'Switch to dark mode',
    loading: 'Loading...',

    homeTitle: 'Data > Insight > Value, Simple.',
    homeSubtitle: 'Tom de Bruijn | Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Welcome at DataSight.',
    homeAboutMeP1: "My name is Tom de Bruijn and I founded DataSight in 2024. With DataSight, I have a clear mission: to help organizations with complex data issues by providing clear, usable insights that deliver real value.",
    homeAboutMeP2: "With over ten years of experience and a strong background in APM and observability, I have developed into a versatile and experienced data engineer in recent years.",
    homeAboutMeP3: "From DataSight, as a certified specialist in Splunk and Cribl, I am available for consultancy, strategic advice, and customized training at all levels. Looking for an experienced partner who is genuinely committed to your success? Let's get acquainted.",
    homeCTA: 'Get in Touch',

    customersTitlePart1: 'Customers',
    customersTitlePart2: '',
    customersTitlePart3: '',
    customersDescription: 'I work for both national and international companies in the profit and non-profit sectors. What connects us is the need to implement complex changes where IT and data are crucial.',
    customersLinkedInClarification: "An overview of projects and companies for which I have worked through previous employers can be found on",
    customersCTAChallenge: "Do you have a challenge or project where I can contribute or collaborate?",
    customersCTAPleasure: "I would be happy to get in touch for a no-obligation introduction",

    servicesTitle: 'Services',
    servicesSubtitle: "With DataSight, I help organizations to truly extract value from their data. I do this not only with the services listed below, but also with the right technical solutions, knowledge, and experience. Whether it's a cloud migration, automation, or deploying products like Splunk ITSI or Enterprise Security – I'm here to think along and assist with the execution.",

    service1Title: 'Splunk Consultancy',
    service1Description: 'For proactive management, in-depth expertise, projects, and value optimization of your environment. Read more.',
    service1DetailTitle: 'Splunk Consultancy: Maximize Your Data Potential',
    service1DetailDesc: "With over 10 years of experience, I help you get the most out of your Splunk environment. Whether it's daily tasks like upgrades and management, optimizing the environment, or using solutions like Splunk IT Service Intelligence (ITSI) and Splunk Enterprise Security (ES) — I ensure your Splunk environment runs reliably and is fully utilized. My services include, among others:",
    service1DetailBullet1: 'Proactive management of your Splunk environment for optimal performance and continuity.',
    service1DetailBullet2: 'Support with Splunk upgrades, cloud migrations, and automation with tools like Ansible.',
    service1DetailBullet3: 'Implementation and configuration of Splunk IT Service Intelligence (ITSI) for better IT service monitoring.',
    service1DetailBullet4: 'Support for a Security Operations Center (SOC), with the implementation and configuration of Splunk Enterprise Security (ES).',
    service1DetailBullet5: 'Development of custom dashboards, alerts, and data integrations, completely tailored to what you need.',
	service1DialogFooterText: "This is a general impression of what I offer under Splunk consultancy. Every client and environment is different, with its own specific challenges and goals. That's why I prefer to first discuss your situation thoroughly to understand it well and arrive at the right approach together.",
    service1DetailCTA: 'Get in touch',

    service2Title: 'Cribl Consultancy',
    service2Description: 'For full control over your data and efficient observability. Learn more.',
    service2DetailTitle: 'Cribl Consultancy: For efficient Observability',
    service2DetailDesc: 'Cribl is a platform that operates between data sources and data destinations. With Cribl Stream, you can collect, filter, enrich, secure, and route data. Cribl gives you full control and ownership over your data and helps you prevent vendor lock-in.\nOur services include:',
    service2DetailBullet1: 'Implementation and configuration of Cribl.',
    service2DetailBullet2: 'Proactive management of your Cribl Stream environment and creation of processing pipelines for filtering, routing, and enrichment.',
    service2DetailBullet3: 'Integration of Cribl with Splunk, SIEM solutions, and various other data destinations.',
    service2DetailBullet4: 'Realization of cost-saving strategies through smart data routing and reduction with Cribl.',
    service2DetailBullet5: '',
	service2DialogFooterText: "Cribl is versatile and can be deployed in many ways. Every client and environment is unique; therefore, we prefer to first engage in a conversation with you to discuss the possibilities.",
    service2DetailCTA: 'Get in touch',

    service5Title: 'Trainings & Workshops',
    service5Description: 'New to Splunk or Cribl, or need specific help? We provide tailored training and workshops. Learn more.',
    service5DetailTitle: 'Trainings & Workshops: Practical training designed for your organization and needs',
    service5DetailDesc: 'At DataSight, we are passionate and enthusiastic about our work. We enjoy sharing our knowledge and experience with others. That is why we are regularly asked to provide training sessions and workshops. Whether it concerns organizations new to Splunk or Cribl, or clients looking to get more out of their tools, all options are possible.\nWe believe in tailored solutions, enabling us to specifically address your needs and deliver maximum results. We offer training on-site or remotely, on your own (Splunk/Cribl) environment, as well as via our own demo environment. Sessions can be one-on-one or in groups, ranging from one day to multiple days.\nOur training offerings include:',
    service5DetailBullet1: "Customized curriculum based on your team's specific needs.",
    service5DetailBullet2: "Courses for beginners and advanced users of Splunk and Cribl.",
    service5DetailBullet3: "Flexible formats: individual or group sessions.",
    service5DetailBullet4: "On-site or remote training.",
    service5DetailBullet5: "On your own environment, or a demo environment.",
	service5DialogFooterText: "Please feel free to contact us to discuss the possibilities. Pricing is available upon request due to the customized nature of our services.",
    service5DetailCTA: 'Get in touch',

    projectInquiryTitle: 'Contact Form',
    projectInquirySubtitle: "This text is animated and comes from inquiryPlaceholder keys",
    questionStaticPlaceholder: 'Describe your question or project idea here...',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'E.g., +44 7123 456789',
    questionLabel: 'Your Question or Project Description',
    submitInquiryButton: 'Send Inquiry',
    submitInquiryLoading: 'Sending...',
    contactFormSuccessTitle: 'Inquiry Received!',
    contactFormSuccessMessage: 'Thank you for your message. You will receive a confirmation email.',
    contactFormError: 'An error occurred while sending your inquiry. Please try again later or contact us directly.',


    inquiryPlaceholder1: "Working with Splunk or Cribl and facing a challenge? 🤔\nI'am happy to brainstorm with you.",
    inquiryPlaceholder2: "Have a challenge using or managing Splunk or Cribl? 🎯\nI'll gladly send you a message.",
    inquiryPlaceholder3: "Also for a virtual ☕ or a brief introduction.\nEasily schedule 30 minutes in your calendar here 📅.",
    // inquiryPlaceholder4: "Looking for a custom training for your team in Splunk or Cribl? 🎓\nI'am happy to call.", // Removed
    inquiryPlaceholder5: "Questions about Splunk Observability, Security, or ITSI? 🔍\nI'am happy to think along.",
    inquiryPlaceholder6: "Want to work more efficiently with Cribl or Splunk? 🛠️\nDataSight gives also hands-on training tailored to your situation.",
    inquiryPlaceholder7: "Need help with dashboarding, alerting, or reporting in Splunk? 📊\nI'am happy to help you get started.",
    inquiryPlaceholder8: "Managing Cribl Stream or Edge and want to get the most out of it? 📈\nI'll explore the possibilities together.",
    inquiryPlaceholder9: "Need help setting up or optimizing Cribl Pipelines? ⚙️\nI'll gladly send you a message.",
    // inquiryPlaceholder10: "Need training, but not a standard package? 💡\nWe offer custom solutions – practical, understandable, and directly applicable.", // Removed
    inquiryPlaceholder11: "Just want to get acquainted or ask a question about Splunk/Cribl? 👋\nI'll gladly send you a message!",
    inquiryPlaceholder12: "Want to gain more insight with less data? ✨\nI help to make smart choices with Splunk & Cribl.",
    // inquiryPlaceholder13: "A quick call to make your Splunk environment future-proof? 📞\nSchedule it here 🎧.", // Removed
    inquiryPlaceholder14: "Want your team to work faster in Cribl or Splunk? 🚀\n The trainings are hands-on, custom, and without unnecessary theory.",
    // inquiryPlaceholder15: "Prefer 1-on-1 guidance over dry documentation? 👨‍🏫\nWe guide you practically, at your own pace.", // Removed
    inquiryPlaceholder16: "Want to save costs by using Splunk and Cribl smarter? ✨\n I'am happy to look into efficient solutions with you.",

    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s discuss how DataSight can help your organization with its data challenges.',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactLinkedIn: 'LinkedIn Profile',
    sendMessage: 'Send Email',
    openWhatsApp: 'Open WhatsApp',
    viewProfile: 'View Profile',
    emailCopiedSuccess: "Email address copied!",
    copyErrorTitle: "Copy Failed",
    copyErrorDescription: "Could not copy email address to clipboard.",
    copyToClipboardTooltip: "Copy to clipboard",
    callDirectlyTooltip: "Call directly",

    error: 'Error',
    by: 'by',
    optionalLabel: 'optional',
    closeButton: 'Close',

    legalPrivacy: 'Privacy',
    legalDisclaimer: 'Disclaimer',

    // Privacy Policy Page
    privacyPageTitle: 'Privacy Policy for DataSight',
    privacyLastUpdated: 'Last Updated: April 1, 2024',
    privacyIntro: 'DataSight ("we", "us", or "our"), operated by Tom de Bruijn (independent consultant), values your privacy. This Privacy Policy explains how we handle your information when you use our website, DataSight (the "Site"), and the services we offer.',
    privacyInfoCollectTitle: 'Information We Collect',
    privacyInfoCollectGenUsage: 'General Usage Data: Information like your IP address and browsing behavior may be collected anonymously to improve our website. This does not personally identify you.',
    privacyInfoCollectContact: 'ContactInformation: If you use our contact form, we collect your name, email, optional phone number, and message to respond.',
    privacyHowWeUseTitle: 'How We Use Your Information',
    privacyHowWeUseRespond: 'To respond to your inquiries.',
    privacyHowWeUseImprove: 'For website improvement and analytics.',
    privacyHowWeUseCookies: 'Cookies are used for basic website functionality and preferences. You can manage cookies through your browser settings.',
    privacyInfoSharingTitle: 'Information Sharing',
    privacyInfoSharingNoSell: 'We do not sell your personal data.',
    privacyInfoSharingGov: 'Information may be shared with authorities if legally required.',
    privacyThirdPartyLinksTitle: 'Third-Party Links',
    privacyThirdPartyLinksP1: 'Our site may link to other websites. We are not responsible for their privacy practices.',
    privacySecurityTitle: 'Security',
    privacySecurityP1: 'We take reasonable measures to protect your data, but no online transmission is 100% secure.',
    privacyChangesPolicyTitle: 'Changes to This Policy',
    privacyChangesPolicyP1: 'This policy may change. Updates will be posted on this page.',
    privacyContactUsTitle: 'Contact Us',
    privacyContactUsP1Prefix: 'Questions about this policy? Email us at: ',
    privacyGoverningLawTitle: 'Governing Law',
    privacyGoverningLawP1: 'Dutch law applies. Disputes will be submitted to the competent court in The Hague.',

    // Disclaimer Page
    disclaimerPageTitle: 'Disclaimer for DataSight',
    disclaimerValidFrom: 'Valid from: April 1, 2024',
    disclaimerIntroP1: 'The information on the website of {SITE_CONFIG.name} (operated by Tom de Bruijn, independent consultant) is for general informational purposes. We strive for accuracy but make no guarantees about completeness or correctness.',
    disclaimerAccuracyTitle: 'Accuracy of Information',
    disclaimerAccuracyP1: 'We do our best to keep the information current and correct, but errors are possible. We are not liable for inaccuracies.',
    disclaimerWebsiteAvailabilityTitle: 'Website Availability',
    disclaimerWebsiteAvailabilityP1: 'We do not guarantee error-free or uninterrupted operation of the website.',
    disclaimerWebsiteAvailabilityL1: 'Damage due to inaccuracies or omissions.',
    disclaimerWebsiteAvailabilityL2: 'Problems due to internet distribution (disruptions, delays).',
    disclaimerExternalLinksTitle: 'External Links',
    disclaimerExternalLinksP1: 'Links to third-party websites are beyond our responsibility. We do not necessarily endorse the content of linked sites.',
    disclaimerElectronicCommTitle: 'Electronic Communication',
    disclaimerElectronicCommP1: 'We do not guarantee that emails will be received or processed in a timely manner and accept no liability for the consequences thereof.',
    disclaimerNoProAdviceTitle: 'No Professional Advice',
    disclaimerNoProAdviceP1: 'The information on this site is not professional advice. Consult an expert for specific situations. Use of the information is at your own risk.',
    disclaimerLimitationLiabilityTitle: 'Limitation of Liability',
    disclaimerLimitationLiabilityP1: 'DataSight is not liable for any direct or indirect damage resulting from the use of this website, unless there is intent or gross negligence.',
    disclaimerChangesDisclaimerTitle: 'Changes to This Disclaimer',
    disclaimerChangesDisclaimerP1: 'This disclaimer may be changed. Changes are effective immediately upon publication.',
  },
};

// Ensure all placeholder keys for the inquiry form are defined in English as well.
// Fallback to Dutch if English is missing for a specific key, or a generic prompt.
const ensureEnglishPlaceholders = (en: TranslationContent, nl: TranslationContent) => {
  const placeholderKeys: (keyof TranslationContent)[] = [
    'inquiryPlaceholder1', 'inquiryPlaceholder2', 'inquiryPlaceholder3',
    'inquiryPlaceholder5', 'inquiryPlaceholder6', 'inquiryPlaceholder7',
    'inquiryPlaceholder8', 'inquiryPlaceholder9', 'inquiryPlaceholder11',
    'inquiryPlaceholder12', 'inquiryPlaceholder14', 'inquiryPlaceholder16',
  ];
  placeholderKeys.forEach(key => {
    if (!en[key] || en[key] === key) { // Check if key is missing or just the key itself
      // If an English key is missing, try to use the Dutch one or a generic prompt.
      const nlText = nl[key] || `Tell us about your data challenge...\nWe are happy to help. (Placeholder for ${key})`;
      // Basic "translation" attempt for pronouns if falling back from Dutch to English for placeholders
      en[key] = nlText.replace(/\bWij\b/g, 'We').replace(/\bwij\b/g, 'we').replace(/\bme\b/g, 'us').replace(/\bje\b/g, 'you').replace(/\bjouw\b/g, 'your');
    }
  });
};
ensureEnglishPlaceholders(translations.en, translations.nl);

    
