
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
    homeAboutMeP1: "Bij Datasight is onze missie helder: organisaties helpen bij complexe datavraagstukken door heldere- bruikbare inzichten te bieden die échte waarde opleveren.",
    homeAboutMeP2: "Met diepgaande technische expertise, persoonlijke aandacht en het inzetten van de nieuwste technologieën worden praktische en impactvolle oplossingen gerealiseerd.",
    homeAboutMeP3: "Als gecertificeerd specialist in Splunk en Cribl is DataSight inzetbaar voor consultancy, strategisch advies en op maat gemaakte trainingen op elk niveau. Op zoek naar een ervaren partner die écht betrokken is bij jouw succes? Laten we kennismaken.",
    homeCTA: 'Neem Contact Op',

    customersTitlePart1: 'Onze klanten',
    customersTitlePart2: '', // Kept empty as per user's prior requests to remove this part of title
    customersTitlePart3: '', // Kept empty
    customersDescription: 'Tom de Bruijn heeft meer dan 10 jaar ervaring in de IT-sector en is sinds 2024 zelfstandig verder gegaan als DataSight. DataSight werkt voor zowel nationale als internationale bedrijven in de profit- en non-profitsector. Wat ons bindt, is de behoefte om complexe veranderingen door te voeren, waarbij IT en data cruciaal zijn.',
    customersClarificationText: "De onderstaande logo's vertegenwoordigen projecten die zijn gerealiseerd onder DataSight, projecten van Tom de Bruijn onder persoonlijke titel, en projecten voltooid tijdens zijn dienstverband bij zijn vorige werkgevers, Cinq ICT en Accenture.", // This key exists in base
    customersLinkedInClarification: "Voor referenties en werkzaamheden uitgevoerd voor diverse klanten bij eerdere werkgevers wordt verwezen naar",
    customersCTAChallenge: "Heeft u een uitdaging of project waarin DataSight kan meedenken of meewerken?",
    customersCTAPleasure: "Neem gerust contact op voor een vrijblijvende kennismaking.",

	  servicesTitle: 'Services',
    servicesSubtitle: 'Leer hoe wij kunnen helpen uw datapotentieel optimaal te benutten.',
	
    service1Title: 'Splunk Consultancy',
    service1Description: 'Voor proactief beheer, diepgaande expertise, projecten en waarde optimalisatie van uw omgeving. Lees meer.',
    service1DetailTitle: 'Splunk Consultancy: Maximaliseer uw data potentieel',
    service1DetailDesc: 'Met meer dan 10 jaar ervaring biedt DataSight diepgaande Splunk-expertise om maximale waarde uit uw data te halen. Van administratieve taken zoals upgrades en health checks tot het implementeren en optimaliseren van geavanceerde oplossingen zoals Splunk IT Service Intelligence (ITSI) en Splunk Enterprise Security (ES). DataSight zorgt ervoor dat uw Splunk-omgeving betrouwbaar functioneert en volledig wordt benut.\nOnze diensten omvatten onder andere:',
    service1DetailBullet1: 'Proactief beheer van uw Splunk-omgeving voor optimale prestaties en continuïteit.',
    service1DetailBullet2: 'Ondersteuning bij Splunk-upgrades, cloudmigraties en automatisering met tools zoals Ansible.',
    service1DetailBullet3: 'Implementatie en configuratie van Splunk IT Service Intelligence (ITSI) voor verbeterde IT-service monitoring.',
    service1DetailBullet4: 'Ondersteunen van een Security Operations Center (SOC), middels implementatie en configuratie van Splunk Enterprise Security (ES).',
    service1DetailBullet5: 'Ontwikkeling van maatwerk dashboards, alerts en data-integraties, afgestemd op uw specifieke behoeften.',
	service1DialogFooterText: "Iedere klant- en omgeving, data-uitdaging en project is uniek. Dit overzicht is slechts een greep uit wat DataSight kan bieden. Wij gaan graag eerst met u in gesprek om uw specifieke uitdagingen beter te leren kennen.",
    service1DetailCTA: 'Neem contact op',

    service2Title: 'Cribl Consultancy',
    service2Description: 'Voor volledige controle over uw data en efficiënte observability. Lees meer.',
    service2DetailTitle: 'Cribl Consultancy: Voor efficiente observability',
    service2DetailDesc: 'Cribl is een platform dat acteert tussen databronnen en databestemmingen. Met Cribl Stream kunt u data verzamelen, filteren, verrijken, beveiligen en routeren. Met Cribl krijgt u volledig grip en eigenaarschap over uw data en gaat u vendor-locking tegen.\nOnze diensten omvatten:',
    service2DetailBullet1: 'Implementatie en configuratie van Cribl.',
    service2DetailBullet2: 'Proactief beheer van uw Cribl Stream omgeving en het aanmaken van processing pipelines voor filtering, routing en verrijking.',
    service2DetailBullet3: 'Integratie van Cribl met Splunk, SIEM-oplossingen en diverse andere databestemmingen.',
    service2DetailBullet4: 'Realisatie van kostenbesparingsstrategieën via slimme data routing en reductie met Cribl.',
    service2DetailBullet5: '', // Removed
	service2DialogFooterText: "Cribl is op veel manieren inzetbaar. Iedere klant en omgeving is uniek, daarom gaan wij graag eerst het gesprek met u aan om de mogelijkheden te bespreken.",
    service2DetailCTA: 'Neem contact op',

    service5Title: 'Trainingen & Workshops',
    service5Description: 'Nieuw met Splunk of Cribl, of hulp nodig? Wij leveren maatwerk trainingen en workshops. Lees meer.', // Shorter card description,
    service5DetailTitle: 'Trainingen & Workshops: Praktische trainingen afgestemd op uw organisatie en behoeften',
    service5DetailDesc: 'Bij DataSight zijn wij gepassioneerd en enthousiast over ons werk. We delen graag onze kennis en ervaring met anderen. Daarom worden wij regelmatig gevraagd om trainingen en workshops te verzorgen. Of het nu gaat om organisaties die nieuw zijn met Splunk of Cribl, of om klanten die meer uit hun tools willen halen, alles behoort tot de mogelijkheden.\nWij geloven in maatwerk, zodat we specifiek kunnen inspelen op uw wensen en daarmee maximaal resultaat kunnen bieden. We verzorgen trainingen op locatie of remote, op uw eigen (Splunk/Cribl) omgeving, maar ook via een eigen demo-omgeving. Daarbij bieden wij zowel 1-op-1 sessies als groepssessies, variërend van één dag tot meerdere dagen.\nOnze trainingsmogelijkheden omvatten:',
    service5DetailBullet1: 'Maatwerk trainingen afgestemd op de behoeften van uw organisatie.',
    service5DetailBullet2: 'Trainingen voor beginners en gevorderden in Splunk en Cribl.',
    service5DetailBullet3: 'Flexibele trainingsvormen: individueel of in groepsverband.',
    service5DetailBullet4: 'Interactieve labs en Q&A sessies voor diepgaand begrip.',
    service5DetailBullet5: 'Trainingen op locatie of remote, op eigen of demo-omgeving.',
	service5DialogFooterText: "Neem gerust contact met ons op om de mogelijkheden te bespreken. Prijzen zijn vanwege maatwerk in overleg.",
    service5DetailCTA: 'Neem contact op',

    projectInquiryTitle: 'Contactformulier',
    projectInquirySubtitle: "This text is animated and comes from inquiryPlaceholder keys", // Placeholder comment
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
    // contactFormResponseTime: 'We reageren doorgaans binnen 5 werkdagen.', // Removed from form

    inquiryPlaceholder1: "Werk je met Splunk of Cribl en loop je ergens tegenaan? 🤔\nWij denken graag mee.",
    inquiryPlaceholder2: "Heb je een uitdaging in het gebruik of beheer van Splunk of Cribl? 🎯\Stuur ons gerust een berichtje.",
    inquiryPlaceholder3: "Ook voor een virtuele ☕ of korte kennismaking.\nPlan hier eenvoudig 30 minuten in je agenda 📅.",
    // inquiryPlaceholder4: "Op zoek naar een training op maat voor jouw team in Splunk of Cribl? 🎓\nWij bellen graag even.", // Removed
    inquiryPlaceholder5: "Vragen over Splunk Observability, Security of ITSI? 🔍\nWij denken graag mee.",
    inquiryPlaceholder6: "Wil je efficiënter werken met Cribl of Splunk? 🛠️\nWij geven ook hands-on trainingen die precies aansluiten bij jouw situatie.",
    inquiryPlaceholder7: "Hulp nodig met dashboarding, alerting of rapportages in Splunk? 📊\nWij helpen je graag op weg.",
    inquiryPlaceholder8: "Beheer je Cribl Stream of Edge en wil je het maximale eruit halen? 📈\nWij kijken samen wat er mogelijk is.",
    inquiryPlaceholder9: "Hulp nodig bij het opzetten of optimaliseren van Cribl Pipelines? ⚙️\nStuur ons gerust een berichtje.",
    // inquiryPlaceholder10: "Training nodig, maar geen standaard verhaal? 💡\nWij bieden maatwerk – praktisch, begrijpelijk en direct toepasbaar.", // Removed
    inquiryPlaceholder11: "Gewoon even kennismaken of een vraag stellen over Splunk/Cribl? 👋\nStuur ons gerust een berichtje!",
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
    homeAboutMeP1: "At Datasight, our mission is clear: help organizations solve complex data problems and turn them into clear, actionable insights that drive real business value.",
    homeAboutMeP2: "This is achieved by deep technical expertise, personal attention, and by using the latest technologies to deliver practical, impactful solutions.",
    homeAboutMeP3: "Certified in Splunk and Cribl, DataSight provides sultancy, strategic guidance, and tailored training at all levels. Looking for an experienced partner who’s genuinely invested in your success? Let’s connect.",
    homeCTA: 'Get in Touch',

    customersTitlePart1: 'Our clients',
    customersTitlePart2: '', // Kept empty
    customersTitlePart3: '', // Kept empty
    customersDescription: 'Our clients are national and international companies, profit and non-profit. What binds us is their need to navigate complex transitions in which ICT, and data in particular, play a pivotal role.',
	  customersClarificationText: "The logos below represent projects realized under DataSight, projects by Tom de Bruijn under his personal title, and projects completed during his tenures at his previous employers, Cinq ICT and Accenture.",
    customersLinkedInClarification: "Under previous employers, work was performed for various other clients under an employment contract. For more information, please refer to",
    customersCTAChallenge: "Do you have a challenge or project where DataSight can contribute or collaborate?",
    customersCTAPleasure: "We would be happy to get in touch for a no-obligation introduction.",

    servicesTitle: 'Services',
    servicesSubtitle: 'Learn how we can support you in leveraging your data to its full potential.',

    service1Title: 'Splunk Consultancy',
    service1Description: 'For proactive management, in-depth expertise, projects, and value optimization of your environment. Read more.', // Shorter card description
    service1DetailTitle: 'Splunk Consultancy: Maximize Your Data Potential',
    service1DetailDesc: 'With over 10 years of experience, DataSight offers deep Splunk expertise to unlock the full potential value of your data. From administrative tasks such as upgrades and health checks to implementing and optimizing advanced solutions like Splunk IT Service Intelligence (ITSI) and Splunk Enterprise Security (ES). DataSight ensures your Splunk environment operates reliably and is fully leveraged.',
    service1DetailBullet1: 'Proactive management of your Splunk environment for optimal performance and continuity.',
    service1DetailBullet2: 'Support for Splunk upgrades, cloud migrations, and automation using tools like Ansible.',
    service1DetailBullet3: 'Implementation and configuration of Splunk IT Service Intelligence (ITSI) for enhanced IT service monitoring.',
    service1DetailBullet4: 'Operate in a Security Operations Centers (SOC), help with implementation and configuration of Splunk Enterprise Security (ES).',
    service1DetailBullet5: 'Development of custom dashboards, alerts, and data integrations.',
	service1DialogFooterText: "Every client- and environment, data challenge, and project is unique. This overview is a brief selection of what DataSight can offer. We prefer to first engage in a conversation with you to better understand your specific challenges.",
    service1DetailCTA: 'Get in touch',

    service2Title: 'Cribl Consultancy',
    service2Description: 'For full control over your data and efficient observability. Learn more.',
    service2DetailTitle: 'Cribl Consultancy: For efficient Observability',
    service2DetailDesc: 'Cribl is a platform that operates between data sources and data destinations. With Cribl Stream, you can collect, filter, enrich, secure, and route data. Cribl gives you full control and ownership over your data and helps you prevent vendor lock-in.\nOur services include:',
    service2DetailBullet1: 'Implementation and configuration of Cribl.',
    service2DetailBullet2: 'Proactive management of your Cribl Stream environment and creation of processing pipelines for filtering, routing, and enrichment.',
    service2DetailBullet3: 'Integration of Cribl with Splunk, SIEM solutions, and various other data destinations.',
    service2DetailBullet4: 'Realization of cost-saving strategies through smart data routing and reduction with Cribl.',
    service2DetailBullet5: '', // Removed
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
    projectInquirySubtitle: "This text is animated and comes from inquiryPlaceholder keys", // Placeholder comment
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
    // contactFormResponseTime: 'We typically respond within 5 business days.', // Removed

    inquiryPlaceholder1: "Working with Splunk or Cribl and facing a challenge? 🤔\nWe're happy to brainstorm with you.",
    inquiryPlaceholder2: "Have a challenge using or managing Splunk or Cribl? 🎯\nWe'll gladly send you a message.",
    inquiryPlaceholder3: "Also for a virtual ☕ or a brief introduction.\nEasily schedule 30 minutes in your calendar here 📅.",
    // inquiryPlaceholder4: "Looking for a custom training for your team in Splunk or Cribl? 🎓\nWe're happy to call.", // Removed
    inquiryPlaceholder5: "Questions about Splunk Observability, Security, or ITSI? 🔍\nWe're happy to think along.",
    inquiryPlaceholder6: "Want to work more efficiently with Cribl or Splunk? 🛠️\nWe also provide hands-on training tailored to your situation.",
    inquiryPlaceholder7: "Need help with dashboarding, alerting, or reporting in Splunk? 📊\nWe're happy to help you get started.",
    inquiryPlaceholder8: "Managing Cribl Stream or Edge and want to get the most out of it? 📈\nWe'll explore the possibilities together.",
    inquiryPlaceholder9: "Need help setting up or optimizing Cribl Pipelines? ⚙️\nWe'll gladly send you a message.",
    // inquiryPlaceholder10: "Need training, but not a standard package? 💡\nWe offer custom solutions – practical, understandable, and directly applicable.", // Removed
    inquiryPlaceholder11: "Just want to get acquainted or ask a question about Splunk/Cribl? 👋\nWe'll gladly send you a message!",
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
