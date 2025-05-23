
export type Locale = 'nl' | 'en';

export interface TranslationContent {
  // Header / Nav
  navHome: string;
  navAbout: string;
  navCustomers: string;
  navServices: string;
  navPublications: string;
  navProjectInquiry: string; // Changed from navAIProposals
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
  service5Title: string; // New service for Trainings
  service5Description: string; // New service for Trainings

  // Publications Section
  publicationsTitle: string;
  publicationsSubtitle: string;
  publication1Title: string;
  publication1Description: string;
  viewPublication: string;

  // Project Inquiry Section (formerly AI Proposal Section)
  projectInquiryTitle: string;
  projectInquirySubtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  questionLabel: string;
  questionPlaceholder: string;
  submitInquiryButton: string;
  submitInquiryLoading: string;
  contactFormResponseTime: string;
  contactFormSuccessTitle: string;
  contactFormSuccessMessage: string;
  contactFormError: string; // Generic error for form submission

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
    navPublications: 'Publicaties',
    navProjectInquiry: 'Contactformulier', 
    navContact: 'Contact',
    languageToggle: 'Switch to English',
    themeToggleLight: 'Schakel naar lichte modus',
    themeToggleDark: 'Schakel naar donkere modus',

    homeTitle: 'Data-inzichten Transformeren in Bedrijfswaarde',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Over Mij',
    homeAboutMeP1: 'Met meer dan 10 jaar ervaring in de IT-sector, specialiseer ik mij in het transformeren van complexe data in bruikbare inzichten. Als freelance consultant (ZZP) help ik organisaties de kracht van Splunk en Cribl te benutten om operationele efficiëntie te verbeteren en datagedreven beslissingen te nemen.',
    homeAboutMeP2: 'Mijn passie ligt in het oplossen van uitdagende dataproblemen en het leveren van meetbare resultaten voor mijn klanten. Ik ben toegewijd aan continue leren en het toepassen van de nieuwste technologieën om innovatieve oplossingen te bieden.',
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

    publicationsTitle: 'Publicaties & Inzichten',
    publicationsSubtitle: 'Artikelen, whitepapers en presentaties over data, analytics en technologie.',
    publication1Title: 'De Toekomst van Data Observability met Cribl',
    publication1Description: 'Een diepgaande analyse van hoe Cribl de manier waarop we data beheren en observeren transformeert. (Voorbeeld publicatie)',
    viewPublication: 'Bekijk Publicatie',
    
    projectInquiryTitle: 'Contactformulier',
    projectInquirySubtitle: 'Heeft u een data-uitdaging? Beschrijf uw situatie en ik neem contact met u op.',
    emailLabel: 'E-mailadres',
    emailPlaceholder: 'uw.email@voorbeeld.nl',
    phoneLabel: 'Telefoonnummer',
    phonePlaceholder: 'Bijv. +31 6 12345678',
    questionLabel: 'Uw vraag of projectbeschrijving',
    questionPlaceholder: 'Beschrijf hier uw data-uitdaging, projectidee of vraag...',
    submitInquiryButton: 'Verstuur Aanvraag',
    submitInquiryLoading: 'Bezig met versturen...',
    contactFormResponseTime: 'U kunt binnen 5 werkdagen een reactie verwachten.',
    contactFormSuccessTitle: 'Aanvraag Ontvangen!',
    contactFormSuccessMessage: 'Bedankt voor uw bericht. Ik neem zo spoedig mogelijk contact met u op.',
    contactFormError: 'Er is een fout opgetreden bij het versturen. Probeer het later opnieuw.',
        
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

    legalPrivacy: 'Privacybeleid',
    legalDisclaimer: 'Disclaimer',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Me',
    navCustomers: 'Customers',
    navServices: 'Services',
    navPublications: 'Publications',
    navProjectInquiry: 'Contact Form', 
    navContact: 'Contact',
    languageToggle: 'Schakel naar Nederlands',
    themeToggleLight: 'Switch to light mode',
    themeToggleDark: 'Switch to dark mode',

    homeTitle: 'Transforming Data Insights into Business Value',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'About Me',
    homeAboutMeP1: 'With over 10 years of experience in the IT sector, I specialize in transforming complex data into actionable insights. As a freelance consultant (ZZP), I help organizations leverage the power of Splunk and Cribl to improve operational efficiency and make data-driven decisions.',
    homeAboutMeP2: 'My passion lies in solving challenging data problems and delivering measurable results for my clients. I am committed to continuous learning and applying the latest technologies to provide innovative solutions.',
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

    publicationsTitle: 'Publications & Insights',
    publicationsSubtitle: 'Articles, whitepapers, and presentations on data, analytics, and technology.',
    publication1Title: 'The Future of Data Observability with Cribl',
    publication1Description: 'An in-depth analysis of how Cribl is transforming the way we manage and observe data. (Example publication)',
    viewPublication: 'View Publication',

    projectInquiryTitle: 'Contact Form', 
    projectInquirySubtitle: 'Have a data challenge? Describe your situation, and I\'ll get in touch.',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'E.g., +44 7123 456789',
    questionLabel: 'Your Question or Project Description',
    questionPlaceholder: 'Describe your data challenge, project idea, or question here...',
    submitInquiryButton: 'Send Inquiry',
    submitInquiryLoading: 'Sending...',
    contactFormResponseTime: 'You can expect a response within 5 business days.',
    contactFormSuccessTitle: 'Inquiry Received!',
    contactFormSuccessMessage: 'Thank you for your message. I will get back to you as soon as possible.',
    contactFormError: 'An error occurred while sending your inquiry. Please try again later.',

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

    legalPrivacy: 'Privacy Policy',
    legalDisclaimer: 'Disclaimer',
  },
};

    