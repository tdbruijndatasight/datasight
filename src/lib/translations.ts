
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
  // homeAboutMeP4: string; // Merged into P3
  homeCTA: string;

  // Customers Section
  customersTitlePart1: string;
  customersTitlePart2: string;
  customersTitlePart3: string;
  customersDescription: string;

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
  service1DialogFooterText: string; // New

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
  service2DialogFooterText: string; // New

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
  service5DialogFooterText: string; // New

  // Project Inquiry Section
  projectInquiryTitle: string;
  // projectInquirySubtitle: string; // This is now the animated one
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
  closeButton: string; // For dialog

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

  // Cookie Banner
  cookieBannerMessage: string;
  cookieBannerPrivacyLink: string;
  cookieBannerAcceptButton: string;
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
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Welkom bij DataSight.',
    homeAboutMeP1: "Bij Datasight is onze missie helder: organisaties helpen complexe datavraagstukken op te lossen en te vertalen naar heldere, bruikbare inzichten die échte businesswaarde opleveren.",
    homeAboutMeP2: "Dit doen we met diepgaande technische expertise, persoonlijke aandacht en het inzetten van de nieuwste technologieën – waaronder AI – om praktische en impactvolle oplossingen te bieden. Reken op onafhankelijk, eerlijk en realistisch advies dat is afgestemd op jouw specifieke doelen.",
    homeAboutMeP3: "Wij zijn volledig gecertificeerd in Splunk en Cribl en bieden consultancy, advies en op maat gemaakte trainingen op elk niveau. Op zoek naar een ervaren partner die écht betrokken is bij jouw succes? Laten we kennismaken.",
    // homeAboutMeP4: "Op zoek naar een ervaren partner die écht betrokken is bij jouw succes? Laten we kennismaken.", // Merged into P3
    homeCTA: 'Neem Contact Op',

    customersTitlePart1: 'Vertrouwd',
    customersTitlePart2: 'door',
    customersTitlePart3: 'bedrijven zoals',
    customersDescription: 'Wij werken voor nationale en internationale bedrijven, profit en non-profit. Wat ons verbindt, is de noodzaak om complexe veranderingen door te maken waarbij IT, en vooral data, cruciaal is.',

    servicesTitle: 'Dienstverlening',
    servicesSubtitle: 'Ontdek hoe wij u kunnen helpen, grip en controle te krijgen over uw data.',

    service1Title: 'Splunk Consultancy',
    service1Description: 'Voor proactief beheer, diepgaande expertise, projecten en waarde optimalisatie van uw omgeving.',
    service1DetailTitle: 'Splunk Consultancy: Maximaliseer uw Data Potentieel',
    service1DetailDesc: 'Wij bieden diepgaande Splunk expertise om de volledige waarde uit uw data te halen. Van administratieve taken zoals upgrades en health checks tot het implementeren en optimaliseren van geavanceerde oplossingen zoals Splunk IT Service Intelligence (ITSI) en Splunk Enterprise Security (ES). Ons doel is om uw Splunk-omgeving niet alleen te laten werken, maar excelleren.',
    service1DetailBullet1: 'Uitgebreide Splunk health checks en performance optimalisatie.',
    service1DetailBullet2: 'Beheer en uitvoering van Splunk upgrades en migraties.',
    service1DetailBullet3: 'Implementatie en configuratie van Splunk ITSI voor AIOps.',
    service1DetailBullet4: 'Opzet en verfijning van Splunk Enterprise Security voor SIEM.',
    service1DetailBullet5: 'Ontwikkeling van maatwerk dashboards, alerts en data-integraties.',
    service1DetailCTA: 'Neem contact op',
    service1DialogFooterText: "Iedere klant- en omgeving, data-uitdaging en project is uniek. Dit overzicht is slechts een greep uit wat DataSight kan bieden. Wij gaan graag eerst met u in gesprek om uw specifieke uitdagingen beter te leren kennen.",


    service2Title: 'Cribl Consultancy',
    service2Description: 'Voor volledige controle over uw data en efficiënte observability. Zet Datasight in voor proactief beheer, expertise en optimale inzet van Cribl voor het verzamelen, verrijken en routeren van data.',
    service2DetailTitle: 'Cribl Consultancy: Intelligente Data Pipelines',
    service2DetailDesc: 'Beheers uw datastromen en reduceer kosten met onze Cribl expertise. Wij helpen u bij het ontwerpen, implementeren en optimaliseren van oplossingen met Cribl Stream voor data routing en transformatie, Cribl Edge voor dataverzameling aan de bron, en Cribl Search voor federated querying. Krijg grip op uw data, ongeacht waar het zich bevindt.',
    service2DetailBullet1: 'Architectuur en implementatie van Cribl Stream en Cribl Edge.',
    service2DetailBullet2: 'Ontwerp van efficiënte data processing pipelines (filteren, routen, verrijken).',
    service2DetailBullet3: 'Integratie met Splunk, SIEM-oplossingen en diverse databestemmingen.',
    service2DetailBullet4: 'Kostenbesparingsstrategieën door slimme data routing en reductie.',
    service2DetailBullet5: '', // Removed
    service2DetailCTA: 'Neem contact op',
    service2DialogFooterText: "Cribl is op veel manieren inzetbaar. Iedere klant en omgeving is uniek, daarom gaan wij graag eerst het gesprek met u aan om de mogelijkheden te bespreken.",

    service5Title: 'Trainingen & Workshops',
    service5Description: 'Nieuw met Splunk of Cribl, of hulp nodig? Wij leveren maatwerk trainingen en workshops. Lees meer.',
    service5DetailTitle: 'Praktijkgerichte Trainingen & Workshops',
    service5DetailDesc: 'Versterk uw team met praktische, hands-on trainingen voor Splunk en Cribl, volledig afgestemd op uw behoeften. Onze trainingen zijn ontworpen om direct toepasbare kennis en vaardigheden te leveren. **Prijzen zijn op aanvraag en worden afgestemd op de scope en duur van de training.**',
    service5DetailBullet1: 'Maatwerk curriculum gebaseerd op de specifieke behoeften van uw team.',
    service5DetailBullet2: 'Splunk & Cribl cursussen: van basis tot geavanceerd (Admin, Architect, User).',
    service5DetailBullet3: 'Focus op real-world use cases en best practices.',
    service5DetailBullet4: 'Interactieve labs en Q&A sessies voor diepgaand begrip.',
    service5DetailBullet5: 'Flexibele leveringsopties: on-site of remote.',
    service5DetailCTA: 'Neem contact op',
    service5DialogFooterText: "Neem gerust contact met ons op om de mogelijkheden te bespreken. Prijzen zijn vanwege maatwerk in overleg.",

    projectInquiryTitle: 'Contactformulier',
    // projectInquirySubtitle: "Heeft u een data-uitdaging? Beschrijf uw situatie en ik neem contact met u op.", // Replaced by animated
    questionStaticPlaceholder: 'Beschrijf hier uw vraag of projectidee...',
    emailLabel: 'E-mailadres',
    emailPlaceholder: 'uw.email@voorbeeld.nl',
    phoneLabel: 'Telefoonnummer',
    phonePlaceholder: 'Bijv. +31 6 12345678',
    questionLabel: 'Uw vraag of projectbeschrijving',
    submitInquiryButton: 'Verstuur Aanvraag',
    submitInquiryLoading: 'Bezig met versturen...',
    contactFormSuccessTitle: 'Aanvraag Ontvangen!',
    contactFormSuccessMessage: 'Bedankt voor uw bericht. U ontvangt een bevestigingsmail en wij nemen z.s.m. contact op.',
    contactFormError: 'Er is een fout opgetreden bij het versturen. Probeer het later opnieuw of neem direct contact op.',
    // contactFormResponseTime: 'We reageren doorgaans binnen 5 werkdagen.', // Removed from form

    inquiryPlaceholder1: "Werk je met Splunk of Cribl en loop je ergens tegenaan? 🤔\nWij denken graag mee.",
    inquiryPlaceholder2: "Heb je een uitdaging in het gebruik of beheer van Splunk of Cribl? 🎯\nWij sturen gerust een berichtje.",
    inquiryPlaceholder3: "Ook voor een virtuele ☕ of korte kennismaking.\nPlan hier eenvoudig 30 minuten in je agenda 📅.",
    // inquiryPlaceholder4: "Op zoek naar een training op maat voor jouw team in Splunk of Cribl? 🎓\nWij bellen graag even.", // Removed
    inquiryPlaceholder5: "Vragen over Splunk Observability, Security of ITSI? 🔍\nWij denken graag mee.",
    inquiryPlaceholder6: "Wil je efficiënter werken met Cribl of Splunk? 🛠️\nWij geven ook hands-on trainingen die precies aansluiten bij jouw situatie.",
    inquiryPlaceholder7: "Hulp nodig met dashboarding, alerting of rapportages in Splunk? 📊\nWij helpen je graag op weg.",
    inquiryPlaceholder8: "Beheer je Cribl Stream of Edge en wil je het maximale eruit halen? 📈\nWij kijken samen wat er mogelijk is.",
    inquiryPlaceholder9: "Hulp nodig bij het opzetten of optimaliseren van Cribl Pipelines? ⚙️\nWij sturen gerust een berichtje.",
    // inquiryPlaceholder10: "Training nodig, maar geen standaard verhaal? 💡\nWij bieden maatwerk – praktisch, begrijpelijk en direct toepasbaar.", // Removed
    inquiryPlaceholder11: "Gewoon even kennismaken of een vraag stellen over Splunk/Cribl? 👋\nWij sturen gerust een berichtje!",
    inquiryPlaceholder12: "Wil je met minder data meer inzicht krijgen? ✨\nWij helpen je slimme keuzes maken met Splunk & Cribl.",
    // inquiryPlaceholder13: "Een snelle call om je Splunk-omgeving future-proof te maken? 📞\nPlan 'm hier in 🎧.", // Removed
    inquiryPlaceholder14: "Wil je met je team sneller werken in Cribl of Splunk? 🚀\nOnze trainingen zijn hands-on, maatwerk en zonder onnodige theorie.",
    // inquiryPlaceholder15: "Liever 1-op-1 begeleiding dan droge documentatie? 👨‍🏫\nWij begeleiden je praktisch, op jouw tempo.", // Removed
    inquiryPlaceholder16: "Wil je kosten besparen door Splunk en Cribl slimmer in te zetten? 💰\nWij kijken graag met je mee naar efficiënte oplossingen.",

    contactTitle: 'Neem Contact Op',
    contactSubtitle: 'Laten we bespreken hoe wij uw organisatie kunnen helpen met uw data-uitdagingen.',
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
    privacyIntro: 'DataSight ("wij", "ons", of "onze"), beheerd door Tom de Bruijn (onafhankelijk consultant), hecht waarde aan uw privacy. Dit Privacybeleid legt uit hoe wij met uw gegevens omgaan wanneer u onze website DataSight (de "Site") gebruikt en de diensten die wij aanbieden.',
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

    // Cookie Banner
    cookieBannerMessage: "Wij houden niet van tracking cookies, maar wel van een lekker koekje! 🍪 Deze site gebruikt alleen essentiële cookies om goed te werken en je voorkeuren te onthouden.",
    cookieBannerPrivacyLink: "Meer info in ons Privacybeleid.",
    cookieBannerAcceptButton: "Prima!",
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
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Welcome at DataSight.',
    homeAboutMeP1: "At Datasight, our mission is clear: help organizations solve complex data problems and turn them into clear, actionable insights that drive real business value.",
    homeAboutMeP2: "We do this through deep technical expertise, personal attention, and by using the latest technologies - including AI - to deliver practical, impactful solutions. Expect independent, honest, realistic advice tailored to your specific goals.",
    homeAboutMeP3: "We're fully certified in Splunk and Cribl and offer consultancy, guidance, and tailored training at all levels. Looking for an experienced partner who’s genuinely invested in your success? Let’s connect.",
    // homeAboutMeP4: "Looking for an experienced partner who’s genuinely invested in your success? Let’s connect.", // Merged into P3
    homeCTA: 'Get in Touch',

    customersTitlePart1: 'Trusted',
    customersTitlePart2: 'by',
    customersTitlePart3: 'Companies like',
    customersDescription: 'Our clients are national and international companies, profit and non-profit. What binds us is their need to navigate complex transitions in which ICT, and data in particular, play a pivotal role.',

    servicesTitle: 'Services',
    servicesSubtitle: 'Discover how we can help you gain grip and control over your data.',

    service1Title: 'Splunk Consultancy',
    service1Description: 'Expert Splunk consultancy for optimization, management, and advanced solutions like ITSI & ES.',
    service1DetailTitle: 'Splunk Consultancy: Maximize Your Data Potential',
    service1DetailDesc: 'We offer in-depth Splunk expertise to extract the full value from your data. From administrative tasks like upgrades and health checks to implementing and optimizing advanced solutions such as Splunk IT Service Intelligence (ITSI) and Splunk Enterprise Security (ES). Our goal is to make your Splunk environment not just work, but excel.',
    service1DetailBullet1: 'Comprehensive Splunk health checks and performance optimization.',
    service1DetailBullet2: 'Management and execution of Splunk upgrades and migrations.',
    service1DetailBullet3: 'Implementation and configuration of Splunk ITSI for AIOps.',
    service1DetailBullet4: 'Setup and refinement of Splunk Enterprise Security for SIEM.',
    service1DetailBullet5: 'Development of custom dashboards, alerts, and data integrations.',
    service1DetailCTA: 'Get in touch',
    service1DialogFooterText: "Every client- and environment, data challenge, and project is unique. This overview is a brief selection of what DataSight can offer. We prefer to first engage in a conversation with you to better understand your specific challenges.",

    service2Title: 'Cribl Consultancy',
    service2Description: 'Optimize your data pipelines with Cribl Stream, Edge and Search for maximum efficiency and control.',
    service2DetailTitle: 'Cribl Consultancy: Intelligent Data Pipelines',
    service2DetailDesc: 'Master your data flows and reduce costs with our Cribl expertise. We assist in designing, implementing, and optimizing solutions with Cribl Stream for data routing and transformation, Cribl Edge for data collection at the source, and Cribl Search for federated querying. Gain control over your data, wherever it resides.',
    service2DetailBullet1: 'Architecture and implementation of Cribl Stream and Cribl Edge.',
    service2DetailBullet2: 'Design of efficient data processing pipelines (filtering, routing, enriching).',
    service2DetailBullet3: 'Integration with Splunk, SIEM solutions, and various data destinations.',
    service2DetailBullet4: 'Cost-saving strategies through smart data routing and reduction.',
    service2DetailBullet5: '',
    service2DetailCTA: 'Get in touch',
    service2DialogFooterText: "Cribl is versatile and can be deployed in many ways. Every client and environment is unique; therefore, we prefer to first engage in a conversation with you to discuss the possibilities.",

    service5Title: 'Trainings & Workshops',
    service5Description: 'Customized trainings and workshops for Splunk & Cribl. Pricing on consultation.',
    service5DetailTitle: 'Practical Trainings & Workshops',
    service5DetailDesc: 'Empower your team with practical, hands-on training for Splunk and Cribl, fully tailored to your needs. Our trainings are designed to deliver immediately applicable knowledge and skills. **Pricing is on consultation and tailored to the scope and duration of the training.**',
    service5DetailBullet1: "Customized curriculum based on your team's specific needs.",
    service5DetailBullet2: "Splunk & Cribl courses: from basic to advanced (Admin, Architect, User).",
    service5DetailBullet3: "Focus on real-world use cases and best practices.",
    service5DetailBullet4: "Interactive labs and Q&A sessions for in-depth understanding.",
    service5DetailBullet5: "Flexible delivery options: on-site or remote.",
    service5DetailCTA: 'Get in touch',
    service5DialogFooterText: "Please feel free to contact us to discuss the possibilities. Pricing is available upon request due to the customized nature of our services.",

    projectInquiryTitle: 'Contact Form',
    // projectInquirySubtitle: "Do you have a data challenge? Describe your situation, and I will contact you.", // Replaced by animated
    questionStaticPlaceholder: 'Describe your question or project idea here...',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'E.g., +44 7123 456789',
    questionLabel: 'Your Question or Project Description',
    submitInquiryButton: 'Send Inquiry',
    submitInquiryLoading: 'Sending...',
    contactFormSuccessTitle: 'Inquiry Received!',
    contactFormSuccessMessage: 'Thank you for your message. You will receive a confirmation email, and we will contact you ASAP.',
    contactFormError: 'An error occurred while sending your inquiry. Please try again later or contact us directly.',
    // contactFormResponseTime: 'We typically respond within 5 business days.', // Removed

    inquiryPlaceholder1: "Working with Splunk or Cribl and facing a challenge? 🤔\nLet us know – we're happy to brainstorm with you.",
    inquiryPlaceholder2: "Have a challenge using or managing Splunk or Cribl? 🎯\nFeel free to send us a message.",
    inquiryPlaceholder3: "Also for a virtual ☕ or a brief introduction.\nEasily schedule 30 minutes in your calendar here 📅.",
    // inquiryPlaceholder4: "Looking for a custom training for your team in Splunk or Cribl? 🎓\nLet's schedule a call.", // Removed
    inquiryPlaceholder5: "Questions about Splunk Observability, Security, or ITSI? 🔍\nLet us know – we're happy to think along.",
    inquiryPlaceholder6: "Want to work more efficiently with Cribl or Splunk? 🛠️\nWe also provide hands-on training tailored to your situation.",
    inquiryPlaceholder7: "Need help with dashboarding, alerting, or reporting in Splunk? 📊\nWe're happy to help you get started.",
    inquiryPlaceholder8: "Managing Cribl Stream or Edge and want to get the most out of it? 📈\nLet's explore the possibilities together.",
    inquiryPlaceholder9: "Need help setting up or optimizing Cribl Pipelines? ⚙️\nFeel free to send us a message.",
    // inquiryPlaceholder10: "Need training, but not a standard package? 💡\nWe offer custom solutions – practical, understandable, and directly applicable.", // Removed
    inquiryPlaceholder11: "Just want to get acquainted or ask a question about Splunk/Cribl? 👋\nFeel free to send us a message!",
    inquiryPlaceholder12: "Want to gain more insight with less data? ✨\nWe help you make smart choices with Splunk & Cribl.",
    // inquiryPlaceholder13: "A quick call to make your Splunk environment future-proof? 📞\nSchedule it here 🎧.", // Removed
    inquiryPlaceholder14: "Want your team to work faster in Cribl or Splunk? 🚀\nOur trainings are hands-on, custom, and without unnecessary theory.",
    // inquiryPlaceholder15: "Prefer 1-on-1 guidance over dry documentation? 👨‍🏫\nWe guide you practically, at your own pace.", // Removed
    inquiryPlaceholder16: "Want to save costs by using Splunk and Cribl smarter? 💰\nWe're happy to look into efficient solutions with you.",

    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s discuss how we can help your organization with its data challenges.',
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
    privacyInfoCollectContact: 'Contact Information: If you use our contact form, we collect your name, email, optional phone number, and message to respond.',
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

    // Cookie Banner
    cookieBannerMessage: "We're not fans of tracking cookies, but we love a good biscuit! 🍪 This site only uses essential cookies for functionality and to remember your preferences.",
    cookieBannerPrivacyLink: "More info in our Privacy Policy.",
    cookieBannerAcceptButton: "Got it!",
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

