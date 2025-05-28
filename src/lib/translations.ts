
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

  service3Title: string;
  service3Description: string;
  service3DetailTitle: string;
  service3DetailDesc: string;
  service3DetailBullet1: string;
  service3DetailBullet2: string;
  service3DetailBullet3: string;
  service3DetailBullet4: string;
  service3DetailBullet5: string;
  service3DetailCTA: string;

  service4Title: string;
  service4Description: string;
  service4DetailTitle: string;
  service4DetailDesc: string;
  service4DetailBullet1: string;
  service4DetailBullet2: string;
  service4DetailBullet3: string;
  service4DetailBullet4: string;
  service4DetailBullet5: string;
  service4DetailCTA: string;

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


  // Publications Section (Keys commented out as section is hidden)
  // publicationsTitle: string;
  // publicationsSubtitle: string;
  // publication1Title: string;
  // publication1Description: string;
  // viewPublication: string;

  // Project Inquiry Section
  projectInquiryTitle: string;
  projectInquirySubtitle: string; // This is now the animated text
  questionStaticPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  questionLabel: string;
  submitInquiryButton: string;
  submitInquiryLoading: string;
  // contactFormResponseTime: string; // Removed from form display, still used in API response toast
  contactFormSuccessTitle: string;
  contactFormSuccessMessage: string;
  contactFormError: string;

  inquiryPlaceholder1: string;
  inquiryPlaceholder2: string;
  inquiryPlaceholder3: string;
  inquiryPlaceholder4: string;
  inquiryPlaceholder5: string;
  inquiryPlaceholder6: string;
  inquiryPlaceholder7: string;
  inquiryPlaceholder8: string;
  inquiryPlaceholder9: string;
  inquiryPlaceholder10: string;
  inquiryPlaceholder11: string;
  inquiryPlaceholder12: string;
  inquiryPlaceholder13: string;
  inquiryPlaceholder14: string;
  inquiryPlaceholder15: string;
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
  loading: string;
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

    homeTitle: 'Data > Inzicht > Waarde, Simpel.',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Welkom bij DataSight.',
    homeAboutMeP1: "Bij Datasight is onze missie helder: organisaties helpen complexe datavraagstukken op te lossen en te vertalen naar heldere, bruikbare inzichten die échte businesswaarde opleveren.",
    homeAboutMeP2: "Dit doen we met diepgaande technische expertise, persoonlijke aandacht en het inzetten van de nieuwste technologieën – waaronder AI – om praktische en impactvolle oplossingen te bieden. Reken op onafhankelijk, eerlijk en realistisch advies dat is afgestemd op jouw specifieke doelen.",
    homeAboutMeP3: "Wij zijn volledig gecertificeerd in Splunk en Cribl en bieden consultancy, advies en op maat gemaakte trainingen op elk niveau. Op zoek naar een ervaren partner die écht betrokken is bij jouw succes? Laten we kennismaken.",

    homeCTA: 'Neem Contact Op',

    customersTitlePart1: 'Vertrouwd',
    customersTitlePart2: 'door',
    customersTitlePart3: 'bedrijven zoals',
    customersDescription: 'Wij werken voor nationale en internationale bedrijven, profit en non-profit. Wat ons verbindt, is de noodzaak om complexe veranderingen door te maken waarbij IT, en vooral data, cruciaal is.',


    servicesTitle: 'Dienstverlening',
    servicesSubtitle: 'Ontdek hoe wij u kunnen helpen, grip en controle te krijgen over uw data.',
    service1Title: 'Splunk Consultancy',
    service1Description: 'Implementatie, optimalisatie en beheer van Splunk-omgevingen voor data-analyse en monitoring.',
    service1DetailTitle: 'Diepgaande Splunk Consultancy',
    service1DetailDesc: 'Optimaliseer uw Splunk-implementatie, van architectuur tot geavanceerd zoeken en dashboarding, om de maximale waarde uit uw data te halen.',
    service1DetailBullet1: 'Splunk architectuur review en health checks.',
    service1DetailBullet2: 'Performance tuning en optimalisatie van zoekopdrachten en datamodellen.',
    service1DetailBullet3: 'Geavanceerde data onboarding, parsing en field extracties (CIM).',
    service1DetailBullet4: 'Ontwikkeling van maatwerk dashboards, rapportages en alerts.',
    service1DetailBullet5: 'Splunk App ontwikkeling en integratie met andere systemen.',
    service1DetailCTA: 'Klaar om het volledige potentieel van Splunk te benutten? Neem contact op.',

    service2Title: 'Cribl Expertise',
    service2Description: 'Ontwerp en implementatie van Cribl-oplossingen voor efficiënt data management en routing.',
    service2DetailTitle: 'Beheers uw Dataflow met Cribl',
    service2DetailDesc: 'Wij helpen u bij het ontwerpen, implementeren en beheren van Cribl-oplossingen voor maximale efficiëntie en kostenbesparing in uw dataverwerking.',
    service2DetailBullet1: 'Cribl Stream/Edge architectuurontwerp en implementatie.',
    service2DetailBullet2: 'Pipeline-ontwerp voor data routing, filtering, verrijking en maskering.',
    service2DetailBullet3: 'Naadloze integratie met Splunk, SIEM-systemen en andere bestemmingen.',
    service2DetailBullet4: 'Kostenoptimalisatiestrategieën voor data-ingest en -opslag.',
    service2DetailBullet5: 'Implementatie en optimalisatie van Cribl Search.',
    service2DetailCTA: 'Krijg controle over uw data pipeline. Laten we praten over Cribl.',

    service3Title: 'Data Strategie & Architectuur',
    service3Description: 'Advies over data strategie, architectuurontwerp en het opzetten van robuuste data pipelines.',
    service3DetailTitle: 'Toekomstbestendige Data Strategie en Architectuur',
    service3DetailDesc: 'Ontwikkel een solide datastrategie en een robuuste, schaalbare architectuur die perfect aansluit bij uw bedrijfsdoelstellingen.',
    service3DetailBullet1: 'Uitgebreide data maturity assessments en GAP-analyses.',
    service3DetailBullet2: 'Ontwikkeling van roadmaps voor modernisering van dataplatformen.',
    service3DetailBullet3: 'Implementatie van data governance en data quality frameworks.',
    service3DetailBullet4: 'Ontwerp van cloud, on-premise en hybride data-architecturen.',
    service3DetailBullet5: 'Optimalisatie en ontwerp van ETL/ELT data pipelines.',
    service3DetailCTA: 'Bouw een datafundament voor succes. Bespreek uw strategie met ons.',

    service4Title: 'AI-Gedreven Oplossingen',
    service4Description: 'Ontwikkeling van op maat gemaakte AI-tools en -modellen om specifieke bedrijfsproblemen op te lossen.',
    service4DetailTitle: 'Innovatie met AI-Gedreven Oplossingen',
    service4DetailDesc: 'Benut de kracht van Artificial Intelligence om uw meest urgente bedrijfsuitdagingen aan te pakken. Wij ontwikkelen maatwerk AI-modellen en tools.',
    service4DetailBullet1: 'Ontwikkeling van custom machine learning modellen (predictive maintenance, fraud detection, etc.).',
    service4DetailBullet2: 'AI-ondersteunde log analyse en geavanceerde anomaly detection.',
    service4DetailBullet3: 'Natural Language Processing (NLP) voor analyse van tekstuele data.',
    service4DetailBullet4: 'Voorspellende analyses en forecasting modellen.',
    service4DetailBullet5: 'Integratie van Generative AI oplossingen voor content creatie en procesautomatisering.',
    service4DetailCTA: 'Innoveer met AI. Ontdek vandaag nog maatwerkoplossingen.',

    service5Title: 'Trainingen & Workshops',
    service5Description: 'Maatwerk trainingen en workshops voor Splunk, Cribl en datastrategie om uw team te versterken.',
    service5DetailTitle: 'Praktijkgerichte Trainingen & Workshops',
    service5DetailDesc: 'Versterk uw team met praktische, hands-on trainingen voor Splunk, Cribl en moderne data practices, volledig afgestemd op uw behoeften.',
    service5DetailBullet1: 'Maatwerk curriculum gebaseerd op de specifieke behoeften en het niveau van uw team.',
    service5DetailBullet2: 'Splunk & Cribl cursussen voor beginners tot gevorderden (Admin, Architect, User).',
    service5DetailBullet3: 'Workshops over data best practices, datagedreven werken en nieuwe technologieën.',
    service5DetailBullet4: 'Interactieve labs, real-world use cases en Q&A sessies.',
    service5DetailBullet5: 'Nazorg en toegang tot aanvullende leermiddelen.',
    service5DetailCTA: 'Verhoog de expertise van uw team. Vraag naar onze op maat gemaakte trainingsprogramma\'s.',

    projectInquiryTitle: 'Contactformulier',
    projectInquirySubtitle: 'Placeholder subtitle, will be replaced by animated text.', // This key is actually for the animated text now
    questionStaticPlaceholder: 'Beschrijf hier uw vraag of projectidee...',
    emailLabel: 'E-mailadres',
    emailPlaceholder: 'uw.email@voorbeeld.nl',
    phoneLabel: 'Telefoonnummer',
    phonePlaceholder: 'Bijv. +31 6 12345678',
    questionLabel: 'Uw vraag of projectbeschrijving',
    submitInquiryButton: 'Verstuur Aanvraag',
    submitInquiryLoading: 'Bezig met versturen...',
    // contactFormResponseTime: 'We reageren doorgaans binnen 5 werkdagen.', // Removed from form display
    contactFormSuccessTitle: 'Aanvraag Ontvangen!',
    contactFormSuccessMessage: 'Bedankt voor uw bericht.', // API response will add more detail + response time
    contactFormError: 'Er is een fout opgetreden bij het versturen. Probeer het later opnieuw of neem direct contact op.',

    inquiryPlaceholder1: "Werk je met Splunk of Cribl en loop je ergens tegenaan? 🤔\nWij denken graag mee.",
    inquiryPlaceholder2: "Heb je een uitdaging in het gebruik of beheer van Splunk of Cribl? 🎯\nWij sturen je gerust een berichtje.",
    inquiryPlaceholder3: "Ook voor een virtuele ☕ of korte kennismaking.\nPlan hier eenvoudig 30 minuten in je agenda 📅.",
    inquiryPlaceholder4: "Op zoek naar een training op maat voor jouw team in Splunk of Cribl? 🎓\nLaten we even bellen.",
    inquiryPlaceholder5: "Vragen over Splunk Observability, Security of ITSI? 🔍\nLaat het ons weten – wij denken graag mee.",
    inquiryPlaceholder6: "Wil je efficiënter werken met Cribl of Splunk? 🛠️\nWij geven ook hands-on trainingen die precies aansluiten bij jouw situatie.",
    inquiryPlaceholder7: "Hulp nodig met dashboarding, alerting of rapportages in Splunk? 📊\nWij helpen je graag op weg.",
    inquiryPlaceholder8: "Beheer je Cribl Stream of Edge en wil je het maximale eruit halen? 📈\nLaten we samen kijken wat er mogelijk is.",
    inquiryPlaceholder9: "Hulp nodig bij het opzetten of optimaliseren van Cribl Pipelines? ⚙️\nWij sturen je gerust een berichtje.",
    inquiryPlaceholder10: "Training nodig, maar geen standaard verhaal? 💡\nWij bieden maatwerk – praktisch, begrijpelijk en direct toepasbaar.",
    inquiryPlaceholder11: "Gewoon even kennismaken of een vraag stellen over Splunk/Cribl? 👋\nWij sturen je gerust een berichtje!",
    inquiryPlaceholder12: "Wil je met minder data meer inzicht krijgen? ✨\nWij helpen je slimme keuzes maken met Splunk & Cribl.",
    inquiryPlaceholder13: "Een snelle call om je Splunk-omgeving future-proof te maken? 📞\nPlan 'm hier in.",
    inquiryPlaceholder14: "Wil je met je team sneller werken in Cribl of Splunk? 🚀\nOnze trainingen zijn hands-on, maatwerk en zonder onnodige theorie.",
    inquiryPlaceholder15: "Liever 1-op-1 begeleiding dan droge documentatie? 👨‍🏫\nWij begeleiden je praktisch, op jouw tempo.",
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


    loading: 'Laden...',
    error: 'Fout',
    by: 'door',
    optionalLabel: 'optioneel',
    closeButton: 'Sluiten',

    legalPrivacy: 'Privacy',
    legalDisclaimer: 'Disclaimer',

    // Privacy Policy Page
    privacyPageTitle: 'Privacybeleid voor DataSight Portfolio.',
    privacyLastUpdated: 'Laatst bijgewerkt: 1 april 2024',
    privacyIntro: 'DataSight Portfolio ("wij", "ons", of "onze"), beheerd door Tom de Bruijn (onafhankelijk consultant), hecht waarde aan uw privacy. Dit Privacybeleid legt uit hoe wij met uw gegevens omgaan wanneer u onze website DataSight Portfolio (de "Site") gebruikt en de diensten die wij aanbieden.',
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
    disclaimerPageTitle: 'Disclaimer voor DataSight Portfolio.',
    disclaimerValidFrom: 'Geldig vanaf: 1 april 2024',
    disclaimerIntroP1: 'De informatie op de website van DataSight Portfolio (beheerd door Tom de Bruijn, onafhankelijk consultant) is voor algemene informatiedoeleinden. Wij streven naar nauwkeurigheid, maar geven geen garanties over de volledigheid of juistheid.',
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
    disclaimerLimitationLiabilityP1: 'DataSight Portfolio is niet aansprakelijk voor enige directe of indirecte schade die voortvloeit uit het gebruik van deze website, tenzij er sprake is van opzet of grove nalatigheid.',
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

    homeTitle: 'Data > Insight > Value, Simple.',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Welcome at DataSight.',
    homeAboutMeP1: "At Datasight, our mission is clear: help organizations solve complex data problems and turn them into clear, actionable insights that drive real business value.",
    homeAboutMeP2: "We do this through deep technical expertise, personal attention, and by using the latest technologies - including AI - to deliver practical, impactful solutions. Expect independent, honest, realistic advice tailored to your specific goals.",
    homeAboutMeP3: "We're fully certified in Splunk and Cribl and offer consultancy, guidance, and tailored training at all levels. Looking for an experienced partner who’s genuinely invested in your success? Let’s connect.",


    homeCTA: 'Get in Touch',

    customersTitlePart1: 'Trusted',
    customersTitlePart2: 'by',
    customersTitlePart3: 'companies like',
    customersDescription: 'Our clients are national and international companies, profit and non-profit. What binds us is their need to navigate complex transitions in which ICT, and data in particular, play a pivotal role.',


    servicesTitle: 'Services',
    servicesSubtitle: 'Discover how we can help you gain grip and control over your data.',
    service1Title: 'Splunk Consultancy',
    service1Description: 'Implementation, optimization, and management of Splunk environments for data analysis and monitoring.',
    service1DetailTitle: 'In-Depth Splunk Consultancy',
    service1DetailDesc: 'Optimize your Splunk deployment, from architecture to advanced searching and dashboarding, to extract maximum value from your data.',
    service1DetailBullet1: 'Splunk architecture review and health checks.',
    service1DetailBullet2: 'Performance tuning and optimization of searches and data models.',
    service1DetailBullet3: 'Advanced data onboarding, parsing, and field extractions (CIM).',
    service1DetailBullet4: 'Custom dashboard, report, and alert creation.',
    service1DetailBullet5: 'Splunk App development and integration with other systems.',
    service1DetailCTA: 'Ready to unlock Splunk\'s full potential? Contact us.',

    service2Title: 'Cribl Expertise',
    service2Description: 'Design and implementation of Cribl solutions for efficient data management and routing.',
    service2DetailTitle: 'Master Your Dataflow with Cribl',
    service2DetailDesc: 'We help you design, implement, and manage Cribl solutions for maximum efficiency and cost savings in your data processing.',
    service2DetailBullet1: 'Cribl Stream/Edge architecture design and implementation.',
    service2DetailBullet2: 'Pipeline design for data routing, filtering, enrichment, and masking.',
    service2DetailBullet3: 'Seamless integration with Splunk, SIEM systems, and other destinations.',
    service2DetailBullet4: 'Cost optimization strategies for data ingest and storage.',
    service2DetailBullet5: 'Cribl Search implementation and optimization.',
    service2DetailCTA: 'Take control of your data pipeline. Let\'s talk Cribl.',

    service3Title: 'Data Strategy & Architecture',
    service3Description: 'Advice on data strategy, architecture design, and setting up robust data pipelines.',
    service3DetailTitle: 'Future-Proof Data Strategy & Architecture',
    service3DetailDesc: 'Develop a solid data strategy and a robust, scalable architecture that perfectly aligns with your business objectives.',
    service3DetailBullet1: 'Comprehensive data maturity assessments and GAP analyses.',
    service3DetailBullet2: 'Roadmap development for data platform modernization.',
    service3DetailBullet3: 'Implementation of data governance and data quality frameworks.',
    service3DetailBullet4: 'Design of cloud, on-premise, and hybrid data architectures.',
    service3DetailBullet5: 'Optimization and design of ETL/ELT data pipelines.',
    service3DetailCTA: 'Build a data foundation for success. Discuss your strategy with us.',

    service4Title: 'AI-Driven Solutions',
    service4Description: 'Development of custom AI tools and models to solve specific business problems.',
    service4DetailTitle: 'Innovation with AI-Driven Solutions',
    service4DetailDesc: 'Leverage the power of Artificial Intelligence to tackle your most pressing business challenges. We develop custom AI models and tools.',
    service4DetailBullet1: 'Custom machine learning model development (predictive maintenance, fraud detection, etc.).',
    service4DetailBullet2: 'AI-assisted log analysis and advanced anomaly detection.',
    service4DetailBullet3: 'Natural Language Processing (NLP) for textual data analysis.',
    service4DetailBullet4: 'Predictive analytics and forecasting models.',
    service4DetailBullet5: 'Integration of Generative AI solutions for content creation and process automation.',
    service4DetailCTA: 'Innovate with AI. Explore custom solutions today.',

    service5Title: 'Trainings & Workshops',
    service5Description: 'Customized trainings and workshops for Splunk, Cribl, and data strategy to empower your team.',
    service5DetailTitle: 'Practical Trainings & Workshops',
    service5DetailDesc: 'Empower your team with practical, hands-on training for Splunk, Cribl, and modern data practices, fully tailored to your needs.',
    service5DetailBullet1: 'Customized curriculum based on your team\'s specific needs and skill level.',
    service5DetailBullet2: 'Beginner to advanced Splunk & Cribl courses (Admin, Architect, User).',
    service5DetailBullet3: 'Workshops on data best practices, data-driven work, and new technologies.',
    service5DetailBullet4: 'Interactive labs, real-world use cases, and Q&A sessions.',
    service5DetailBullet5: 'Post-training support and access to additional learning resources.',
    service5DetailCTA: 'Upskill your team. Inquire about our tailored training programs.',

    projectInquiryTitle: 'Contact Form',
    projectInquirySubtitle: 'Placeholder subtitle, will be replaced by animated text.', // This key is actually for the animated text now
    questionStaticPlaceholder: 'Describe your question or project idea here...',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'E.g., +44 7123 456789',
    questionLabel: 'Your Question or Project Description',
    submitInquiryButton: 'Send Inquiry',
    submitInquiryLoading: 'Sending...',
    // contactFormResponseTime: 'We typically respond within 5 business days.', // Removed from form display
    contactFormSuccessTitle: 'Inquiry Received!',
    contactFormSuccessMessage: 'Thank you for your message.', // API response will add more detail + response time
    contactFormError: 'An error occurred while sending your inquiry. Please try again later or contact us directly.',

    inquiryPlaceholder1: "Working with Splunk or Cribl and facing a challenge? 🤔\nWe're happy to brainstorm with you.",
    inquiryPlaceholder2: "Have a challenge using or managing Splunk or Cribl? 🎯\nWe'll gladly send you a message.",
    inquiryPlaceholder3: "Also for a virtual ☕ or a brief introduction.\nEasily schedule 30 minutes in your calendar here 📅.",
    inquiryPlaceholder4: "Looking for a custom training for your team in Splunk or Cribl? 🎓\nLet's have a call.",
    inquiryPlaceholder5: "Questions about Splunk Observability, Security, or ITSI? 🔍\nLet us know – we're happy to think along.",
    inquiryPlaceholder6: "Want to work more efficiently with Cribl or Splunk? 🛠️\nWe also provide hands-on training tailored to your situation.",
    inquiryPlaceholder7: "Need help with dashboarding, alerting, or reporting in Splunk? 📊\nWe're happy to help you get started.",
    inquiryPlaceholder8: "Managing Cribl Stream or Edge and want to get the most out of it? 📈\nLet's explore the possibilities together.",
    inquiryPlaceholder9: "Need help setting up or optimizing Cribl Pipelines? ⚙️\nWe'll gladly send you a message.",
    inquiryPlaceholder10: "Need training, but not a standard package? 💡\nWe offer custom solutions – practical, understandable, and directly applicable.",
    inquiryPlaceholder11: "Just want to get acquainted or ask a question about Splunk/Cribl? 👋\nWe'll gladly send you a message!",
    inquiryPlaceholder12: "Want to gain more insight with less data? ✨\nWe help you make smart choices with Splunk & Cribl.",
    inquiryPlaceholder13: "A quick call to make your Splunk environment future-proof? 📞\nSchedule it here.",
    inquiryPlaceholder14: "Want your team to work faster in Cribl or Splunk? 🚀\nOur trainings are hands-on, custom, and without unnecessary theory.",
    inquiryPlaceholder15: "Prefer 1-on-1 guidance over dry documentation? 👨‍🏫\nWe guide you practically, at your own pace.",
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


    loading: 'Loading...',
    error: 'Error',
    by: 'by',
    optionalLabel: 'optional',
    closeButton: 'Close',

    legalPrivacy: 'Privacy',
    legalDisclaimer: 'Disclaimer',

    // Privacy Policy Page
    privacyPageTitle: 'Privacy Policy for DataSight Portfolio.',
    privacyLastUpdated: 'Last Updated: April 1, 2024',
    privacyIntro: 'DataSight Portfolio ("we", "us", or "our"), operated by Tom de Bruijn (independent consultant), values your privacy. This Privacy Policy explains how we handle your information when you use our website, DataSight Portfolio (the "Site"), and the services we offer.',
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
    disclaimerPageTitle: 'Disclaimer for DataSight Portfolio.',
    disclaimerValidFrom: 'Valid from: April 1, 2024',
    disclaimerIntroP1: 'The information on the DataSight Portfolio website (operated by Tom de Bruijn, independent consultant) is for general informational purposes. We strive for accuracy but make no guarantees about completeness or correctness.',
    disclaimerAccuracyTitle: 'Accuracy of Information',
    disclaimerAccuracyP1: 'We do our best to keep information current and correct, but errors are possible. We are not liable for inaccuracies.',
    disclaimerWebsiteAvailabilityTitle: 'Website Availability',
    disclaimerWebsiteAvailabilityP1: 'We do not guarantee error-free or uninterrupted operation of the website.',
    disclaimerWebsiteAvailabilityL1: 'Damage from inaccuracies or omissions.',
    disclaimerWebsiteAvailabilityL2: 'Problems due to internet distribution (disruptions, delays).',
    disclaimerExternalLinksTitle: 'External Links',
    disclaimerExternalLinksP1: 'Links to third-party websites are beyond our responsibility. We do not necessarily endorse the content of linked sites.',
    disclaimerElectronicCommTitle: 'Electronic Communication',
    disclaimerElectronicCommP1: 'We do not guarantee that emails will be received or processed in a timely manner and accept no liability for the consequences thereof.',
    disclaimerNoProAdviceTitle: 'No Professional Advice',
    disclaimerNoProAdviceP1: 'The information on this site is not professional advice. Consult an expert for specific situations. Use of the information is at your own risk.',
    disclaimerLimitationLiabilityTitle: 'Limitation of Liability',
    disclaimerLimitationLiabilityP1: 'DataSight Portfolio is not liable for any direct or indirect damage resulting from the use of this website, unless there is intent or gross negligence.',
    disclaimerChangesDisclaimerTitle: "Changes to This Disclaimer",
    disclaimerChangesDisclaimerP1: "This disclaimer may be changed. Changes are effective immediately upon publication.",
  },
};

// Ensure all placeholder keys for the inquiry form are defined in English as well.
// Fallback to Dutch if English is missing for a specific key, or a generic prompt.
const ensureEnglishPlaceholders = (en: TranslationContent, nl: TranslationContent) => {
  for (let i = 1; i <= 16; i++) {
    const key = `inquiryPlaceholder${i}` as keyof TranslationContent;
    if (!en[key]) {
      // If an English key is missing, try to use the Dutch one or a generic prompt.
      const nlText = nl[key] || `Tell us about your data challenge... (Placeholder ${i})`;
      // Basic "translation" attempt for pronouns if falling back from Dutch to English for placeholders
      en[key] = nlText.replace(/\bWij\b/g, 'We').replace(/\bwij\b/g, 'we').replace(/\bme\b/g, 'us').replace(/\bje\b/g, 'you').replace(/\bjouw\b/g, 'your');
    }
  }
};
ensureEnglishPlaceholders(translations.en, translations.nl);
