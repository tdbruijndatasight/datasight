export type Locale = 'nl' | 'en';

export interface TranslationContent {
  // Header / Nav
  navHome: string;
  navAbout: string;
  navCustomers: string;
  navServices: string;
  navPublications: string;
  navAIProposals: string;
  navContact: string;
  languageToggle: string;

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

  // Publications Section
  publicationsTitle: string;
  publicationsSubtitle: string;
  publication1Title: string;
  publication1Description: string;
  viewPublication: string;

  // AI Proposal Section
  aiProposalsTitle: string;
  aiProposalsSubtitle: string;
  aiProposalsFormLabel: string;
  aiProposalsFormPlaceholder: string;
  aiProposalsFormButton: string;
  aiProposalsFormLoading: string;
  aiProposalsResultsTitle: string;
  aiProposalsError: string;

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  contactLinkedIn: string;
  
  // Generic
  loading: string;
  error: string;
  by: string;
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
    navAIProposals: 'AI Voorstellen',
    navContact: 'Contact',
    languageToggle: 'Switch to English',

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

    publicationsTitle: 'Publicaties & Inzichten',
    publicationsSubtitle: 'Artikelen, whitepapers en presentaties over data, analytics en technologie.',
    publication1Title: 'De Toekomst van Data Observability met Cribl',
    publication1Description: 'Een diepgaande analyse van hoe Cribl de manier waarop we data beheren en observeren transformeert. (Voorbeeld publicatie)',
    viewPublication: 'Bekijk Publicatie',
    
    aiProposalsTitle: 'AI-Gegenereerde Projectvoorstellen',
    aiProposalsSubtitle: 'Beschrijf uw data-uitdaging en ontvang direct drie initiële projectvoorstellen.',
    aiProposalsFormLabel: 'Beschrijf uw data-gerelateerde pijnpunten:',
    aiProposalsFormPlaceholder: 'Bijvoorbeeld: "We hebben moeite om inzichten te krijgen uit onze logdata en onze huidige systemen zijn te traag."',
    aiProposalsFormButton: 'Genereer Voorstellen',
    aiProposalsFormLoading: 'Voorstellen genereren...',
    aiProposalsResultsTitle: 'Uw Projectvoorstellen:',
    aiProposalsError: 'Er is een fout opgetreden bij het genereren van voorstellen. Probeer het later opnieuw.',
    
    contactTitle: 'Neem Contact Op',
    contactSubtitle: 'Laten we bespreken hoe ik uw organisatie kan helpen met uw data-uitdagingen.',
    contactEmail: 'E-mail',
    contactPhone: 'Telefoon',
    contactLinkedIn: 'LinkedIn Profiel',

    loading: 'Laden...',
    error: 'Fout',
    by: 'door',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Me',
    navCustomers: 'Customers',
    navServices: 'Services',
    navPublications: 'Publications',
    navAIProposals: 'AI Proposals',
    navContact: 'Contact',
    languageToggle: 'Schakel naar Nederlands',

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

    publicationsTitle: 'Publications & Insights',
    publicationsSubtitle: 'Articles, whitepapers, and presentations on data, analytics, and technology.',
    publication1Title: 'The Future of Data Observability with Cribl',
    publication1Description: 'An in-depth analysis of how Cribl is transforming the way we manage and observe data. (Example publication)',
    viewPublication: 'View Publication',

    aiProposalsTitle: 'AI-Powered Project Proposals',
    aiProposalsSubtitle: 'Describe your data challenge and instantly receive three initial project proposals.',
    aiProposalsFormLabel: 'Describe your data-related pain points:',
    aiProposalsFormPlaceholder: 'E.g., "We are struggling to get insights from our log data and our current systems are too slow."',
    aiProposalsFormButton: 'Generate Proposals',
    aiProposalsFormLoading: 'Generating proposals...',
    aiProposalsResultsTitle: 'Your Project Proposals:',
    aiProposalsError: 'An error occurred while generating proposals. Please try again later.',

    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s discuss how I can help your organization with its data challenges.',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactLinkedIn: 'LinkedIn Profile',
    
    loading: 'Loading...',
    error: 'Error',
    by: 'by',
  },
};
