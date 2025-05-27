
export type Locale = 'nl' | 'en';

export interface TranslationContent {
  // Header / Nav
  navHome: string;
  navAbout: string;
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
  homeCTA: string;

  // Customers Section
  customersTitle: string;
  customersDescription: string;

  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  service1Title: string;
  service1Description: string;
  service2Title: string;
  service2Description: string;
  service3Title: string;
  service3Description: string;
  service4Title: string;
  service4Description: string;
  service5Title: string;
  service5Description: string;

  // Publications Section (Hidden)
  // publicationsTitle: string;
  // publicationsSubtitle: string;
  // publication1Title: string;
  // publication1Description: string;
  // viewPublication: string;

  // Project Inquiry Section
  projectInquiryTitle: string;
  projectInquirySubtitle: string;
  // inquiryCoffeePrompt: string; // Removed
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  questionLabel: string;
  questionPlaceholder: string; // Original static placeholder, can be kept as fallback or removed if not needed
  submitInquiryButton: string;
  submitInquiryLoading: string;
  contactFormResponseTime: string;
  contactFormSuccessTitle: string;
  contactFormSuccessMessage: string;
  contactFormError: string;

  // Animated Placeholders for Inquiry Textarea
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


  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  contactLinkedIn: string;
  sendMessage: string;
  openWhatsApp: string;
  viewProfile: string;

  // Generic
  loading: string;
  error: string;
  by: string;
  optionalLabel: string;

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
    navAbout: 'Over Mij',
    navCustomers: 'Klanten',
    navServices: 'Diensten',
    // navPublications: 'Publicaties', // Hidden
    navProjectInquiry: 'Contactformulier',
    navContact: 'Contact',
    languageToggle: 'Switch to English',
    themeToggleLight: 'Schakel naar lichte modus',
    themeToggleDark: 'Schakel naar donkere modus',

    homeTitle: 'Data-inzichten Transformeren in Bedrijfswaarde',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Over Mij',
    homeAboutMeP1: 'Met meer dan 10 jaar ervaring in de IT-sector, specialiseer ik mij als onafhankelijk consultant (ZZP) in het transformeren van complexe data in bruikbare inzichten. Ik help organisaties de kracht van Splunk en Cribl te benutten om operationele efficiëntie te verbeteren en datagedreven beslissingen te nemen.',
    homeAboutMeP2: 'Mijn passie ligt in het oplossen van uitdagende dataproblemen en het leveren van meetbare resultaten voor mijn klanten. Als toegewijd professional en onafhankelijke consultant blijf ik continu leren en pas ik de nieuwste technologieën toe om innovatieve oplossingen te bieden.',
    homeCTA: 'Neem Contact Op',

    customersTitle: 'Vertrouwd door Bedrijven Zoals',
    customersDescription: 'Een selectie van organisaties waarmee ik heb samengewerkt om hun data uitdagingen aan te gaan.',

    servicesTitle: 'Mijn Diensten',
    servicesSubtitle: 'Hoe ik u kan helpen uw data potentieel te maximaliseren.',
    service1Title: 'Splunk Consultancy',
    service1Description: 'Implementatie, optimalisatie en beheer van Splunk-omgevingen voor data-analyse en monitoring.',
    service2Title: 'Cribl Expertise',
    service2Description: 'Ontwerp en implementatie van Cribl-oplossingen voor efficiënt data management en routing.',
    service3Title: 'Data Strategie & Architectuur',
    service3Description: 'Advies over data strategie, architectuurontwerp en het opzetten van robuuste data pipelines.',
    service4Title: 'AI-Gedreven Oplossingen',
    service4Description: 'Ontwikkeling van op maat gemaakte AI-tools en -modellen om specifieke bedrijfsproblemen op te lossen.',
    service5Title: 'Trainingen & Workshops',
    service5Description: 'Maatwerk trainingen en workshops voor Splunk, Cribl en datastrategie om uw team te versterken.',

    // publicationsTitle: 'Publicaties & Inzichten', // Hidden
    // publicationsSubtitle: 'Artikelen, whitepapers en presentaties over data, analytics en technologie.', // Hidden
    // publication1Title: 'De Toekomst van Data Observability met Cribl', // Hidden
    // publication1Description: 'Een diepgaande analyse van hoe Cribl de manier waarop we data beheren en observeren transformeert. (Voorbeeld publicatie)', // Hidden
    // viewPublication: 'Bekijk Publicatie', // Hidden

    projectInquiryTitle: 'Contactformulier',
    projectInquirySubtitle: 'Heeft u een data-uitdaging? Beschrijf uw situatie en ik neem contact met u op.',
    // inquiryCoffeePrompt: 'Ook voor een (virtuele) kop koffie! ☕', // Removed
    emailLabel: 'E-mailadres',
    emailPlaceholder: 'uw.email@voorbeeld.nl',
    phoneLabel: 'Telefoonnummer',
    phonePlaceholder: 'Bijv. +31 6 12345678',
    questionLabel: 'Uw vraag of projectbeschrijving',
    questionPlaceholder: 'Beschrijf hier uw data-uitdaging, projectidee of vraag...', // Fallback
    submitInquiryButton: 'Verstuur Aanvraag',
    submitInquiryLoading: 'Bezig met versturen...',
    contactFormResponseTime: 'U kunt binnen 5 werkdagen een reactie verwachten.',
    contactFormSuccessTitle: 'Aanvraag Ontvangen!',
    contactFormSuccessMessage: 'U ontvangt spoedig een bevestigingsmail.',
    contactFormError: 'Er is een fout opgetreden bij het versturen. Probeer het later opnieuw of neem direct contact op.',

    inquiryPlaceholder1: "Heeft u een data-uitdaging? Laten we praten...",
    inquiryPlaceholder2: "Hulp nodig met Splunk of Cribl?",
    inquiryPlaceholder3: "Nieuwsgierig naar datastrategie? Vraag maar raak...",
    inquiryPlaceholder4: "Laten we een snelle 30-min Teams-call plannen...",
    inquiryPlaceholder5: "Ook voor een virtuele koffie en een praatje over data...",
    inquiryPlaceholder6: "Denkt u aan een AI-oplossing voor uw data?",
    inquiryPlaceholder7: "Hoe kan ik helpen uw data pipelines te optimaliseren?",
    inquiryPlaceholder8: "Beschrijf hier uw projectidee...",
    inquiryPlaceholder9: "Vastgelopen op een complex dataprobleem?",
    inquiryPlaceholder10: "Wilt u de mogelijkheden verkennen? Neem contact op!",

    contactTitle: 'Neem Contact Op',
    contactSubtitle: 'Laten we bespreken hoe ik uw organisatie kan helpen met uw data-uitdagingen.',
    contactEmail: 'E-mail',
    contactPhone: 'Telefoon (WhatsApp)',
    contactLinkedIn: 'LinkedIn Profiel',
    sendMessage: 'Verstuur Email',
    openWhatsApp: 'Open WhatsApp',
    viewProfile: 'Bekijk Profiel',

    loading: 'Laden...',
    error: 'Fout',
    by: 'door',
    optionalLabel: 'optioneel',

    legalPrivacy: 'Privacy',
    legalDisclaimer: 'Disclaimer',

    // Privacy Policy Page - NL
    privacyPageTitle: 'Privacybeleid voor DataSight Portfolio',
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

    // Disclaimer Page - NL
    disclaimerPageTitle: 'Disclaimer voor DataSight Portfolio',
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
    navAbout: 'About Me',
    navCustomers: 'Customers',
    navServices: 'Services',
    // navPublications: 'Publications', // Hidden
    navProjectInquiry: 'Contact Form',
    navContact: 'Contact',
    languageToggle: 'Schakel naar Nederlands',
    themeToggleLight: 'Switch to light mode',
    themeToggleDark: 'Switch to dark mode',

    homeTitle: 'Transforming Data Insights into Business value',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'About Me',
    homeAboutMeP1: 'With over 10 years of experience in the IT sector, I specialize as an independent consultant (freelancer) in transforming complex data into actionable insights. I help organizations leverage the power of Splunk and Cribl to improve operational efficiency and make data-driven decisions.',
    homeAboutMeP2: 'My passion lies in solving challenging data problems and delivering measurable results for my clients. As a dedicated professional and independent consultant, I am committed to continuous learning and applying the latest technologies to provide innovative solutions.',
    homeCTA: 'Get in Touch',

    customersTitle: 'Trusted by Companies Like',
    customersDescription: 'A selection of organizations I have collaborated with to tackle their data challenges.',

    servicesTitle: 'My Services',
    servicesSubtitle: 'How I can help you maximize your data potential.',
    service1Title: 'Splunk Consultancy',
    service1Description: 'Implementation, optimization, and management of Splunk environments for data analysis and monitoring.',
    service2Title: 'Cribl Expertise',
    service2Description: 'Design and implementation of Cribl solutions for efficient data management and routing.',
    service3Title: 'Data Strategy & Architecture',
    service3Description: 'Advice on data strategy, architecture design, and setting up robust data pipelines.',
    service4Title: 'AI-Driven Solutions',
    service4Description: 'Development of custom AI tools and models to solve specific business problems.',
    service5Title: 'Trainings & Workshops',
    service5Description: 'Customized trainings and workshops for Splunk, Cribl, and data strategy to empower your team.',

    // publicationsTitle: 'Publications & Insights', // Hidden
    // publicationsSubtitle: 'Articles, whitepapers, and presentations on data, analytics, and technology.', // Hidden
    // publication1Title: 'The Future of Data Observability with Cribl', // Hidden
    // publication1Description: 'An in-depth analysis of how Cribl is transforming the way we manage and observe data. (Example publication)', // Hidden
    // viewPublication: 'View Publication', // Hidden

    projectInquiryTitle: 'Contact Form',
    projectInquirySubtitle: 'Have a data challenge? Describe your situation, and I\'ll get in touch.',
    // inquiryCoffeePrompt: 'Also for a (virtual) cup of coffee! ☕', // Removed
    emailLabel: 'Email Address',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'E.g., +44 7123 456789',
    questionLabel: 'Your Question or Project Description',
    questionPlaceholder: 'Describe your data challenge, project idea, or question here...', // Fallback
    submitInquiryButton: 'Send Inquiry',
    submitInquiryLoading: 'Sending...',
    contactFormResponseTime: 'You can expect a response within 5 business days.',
    contactFormSuccessTitle: 'Inquiry Received!',
    contactFormSuccessMessage: 'You will receive a confirmation email shortly.',
    contactFormError: 'An error occurred while sending your inquiry. Please try again later or contact us directly.',

    inquiryPlaceholder1: "Have a data challenge? Let's talk...",
    inquiryPlaceholder2: "Need help with Splunk or Cribl?",
    inquiryPlaceholder3: "Curious about data strategy? Ask me anything...",
    inquiryPlaceholder4: "Let's schedule a quick 30-min Teams call to discuss...",
    inquiryPlaceholder5: "Even for a virtual coffee and a chat about data...",
    inquiryPlaceholder6: "Thinking about an AI solution for your data?",
    inquiryPlaceholder7: "How can I help optimize your data pipelines?",
    inquiryPlaceholder8: "Describe your project idea here...",
    inquiryPlaceholder9: "Stuck on a complex data problem?",
    inquiryPlaceholder10: "Just want to explore possibilities? Reach out!",


    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s discuss how I can help your organization with its data challenges.',
    contactEmail: 'Email',
    contactPhone: 'Phone (WhatsApp)',
    contactLinkedIn: 'LinkedIn Profile',
    sendMessage: 'Send Email',
    openWhatsApp: 'Open WhatsApp',
    viewProfile: 'View Profile',

    loading: 'Loading...',
    error: 'Error',
    by: 'by',
    optionalLabel: 'optional',

    legalPrivacy: 'Privacy',
    legalDisclaimer: 'Disclaimer',

    // Privacy Policy Page - EN
    privacyPageTitle: 'Privacy Policy for DataSight Portfolio',
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

    // Disclaimer Page - EN
    disclaimerPageTitle: 'Disclaimer for DataSight Portfolio',
    disclaimerValidFrom: 'Valid from: April 1, 2024',
    disclaimerIntroP1: 'The information on the DataSight Portfolio website (operated by Tom de Bruijn, independent consultant) is for general informational purposes. We strive for accuracy but make no guarantees about completeness or correctness.',
    disclaimerAccuracyTitle: 'Accuracy of Information',
    disclaimerAccuracyP1: 'We do our best to keep information current and correct, but errors are possible. We are not liable for inaccuracies.',
    disclaimerWebsiteAvailabilityTitle: 'Website Availability',
    disclaimerWebsiteAvailabilityP1: 'We do not guarantee error-free or uninterrupted operation of the website.',
    disclaimerWebsiteAvailabilityL1: 'Damages from inaccuracies or omissions.',
    disclaimerWebsiteAvailabilityL2: 'Problems due to internet distribution (failures, delays).',
    disclaimerExternalLinksTitle: 'External Links',
    disclaimerExternalLinksP1: 'Links to third-party websites are outside our responsibility. We do not necessarily endorse the content of linked sites.',
    disclaimerElectronicCommTitle: 'Electronic Communication',
    disclaimerElectronicCommP1: 'We do not guarantee timely receipt or processing of emails and accept no liability for the consequences thereof.',
    disclaimerNoProAdviceTitle: 'No Professional Advice',
    disclaimerNoProAdviceP1: 'The information on this site is not professional advice. Consult an expert for specific situations. Use of the information is at your own risk.',
    disclaimerLimitationLiabilityTitle: 'Limitation of Liability',
    disclaimerLimitationLiabilityP1: 'DataSight Portfolio is not liable for any direct or indirect damages arising from the use of this website, except in cases of willful misconduct or gross negligence.',
    disclaimerChangesDisclaimerTitle: 'Changes to This Disclaimer',
    disclaimerChangesDisclaimerP1: 'This disclaimer may be amended. Changes are effective immediately upon posting.',
  },
};
