
export type Locale = 'nl' | 'en';

export interface TranslationContent {
  // Header / Nav
  navHome: string;
  navAbout: string;
  navCustomers: string;
  navServices: string;
  navPublications: string;
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

  // Publications Section
  publicationsTitle: string;
  publicationsSubtitle: string;
  publication1Title: string;
  publication1Description: string;
  viewPublication: string;

  // Project Inquiry Section
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
  contactFormError: string;

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
    navPublications: 'Publicaties',
    navProjectInquiry: 'Contactformulier',
    navContact: 'Contact',
    languageToggle: 'Switch to English',
    themeToggleLight: 'Schakel naar lichte modus',
    themeToggleDark: 'Schakel naar donkere modus',

    homeTitle: 'Data-inzichten Transformeren in Bedrijfswaarde',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Over Mij',
    homeAboutMeP1: 'Met meer dan 10 jaar ervaring in de IT-sector, specialiseer ik mij als onafhankelijk consultant (ZZP) in het transformeren van complexe data in bruikbare inzichten. Ik help organisaties de kracht van Splunk en Cribl te benutten om operationele efficiëntie te verbeteren en datagedreven beslissingen te nemen.',
    homeAboutMeP2: 'Mijn passie ligt in het oplossen van uitdagende dataproblemen en het leveren van meetbare resultaten voor mijn klanten. Als toegewijd professional blijf ik continu leren en pas ik de nieuwste technologieën toe om innovatieve oplossingen te bieden.',
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
    contactFormSuccessMessage: 'Bedankt voor uw bericht. U ontvangt spoedig een bevestigingsmail.', // API response has more details
    contactFormError: 'Er is een fout opgetreden bij het versturen. Probeer het later opnieuw of neem direct contact op.',

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
    privacyIntro: 'DataSight Portfolio ("wij", "ons", of "onze"), beheerd door Tom de Bruijn, hecht waarde aan uw privacy. Dit Privacybeleid legt uit hoe wij met uw gegevens omgaan wanneer u onze website DataSight Portfolio (de "Site") gebruikt en de diensten die wij aanbieden.',
    privacyInfoCollectTitle: 'Informatie die Wij Verzamelen',
    privacyInfoCollectGenUsage: 'Algemene Gebruiksgegevens: Wanneer u de Site bezoekt, kunnen we automatisch bepaalde informatie over uw apparaat verzamelen, inclusief informatie over uw webbrowser, IP-adres, tijdzone en enkele van de cookies die op uw apparaat zijn geïnstalleerd. Daarnaast verzamelen we, terwijl u door de Site browst, informatie over de individuele webpagina\'s of producten die u bekijkt, welke websites of zoektermen u naar de Site hebben verwezen, en informatie over hoe u met de Site omgaat. We verwijzen naar deze automatisch verzamelde informatie als "Apparaatinformatie". Apparaatinformatie wordt voornamelijk verzameld met behulp van cookies. Deze gegevens helpen ons onze website en diensten te verbeteren. Deze gegevens identificeren u niet persoonlijk.',
    privacyInfoCollectContact: 'Contactinformatie: Als u contact met ons opneemt via ons aanvraagformulier of direct, verzamelen wij de informatie die u verstrekt, zoals uw naam, e-mailadres, telefoonnummer (optioneel) en uw bericht, om op uw vragen te reageren.',
    privacyHowWeUseTitle: 'Hoe Wij Uw Informatie Gebruiken',
    privacyHowWeUseRespond: 'Om op uw aanvragen te reageren en de gevraagde diensten te leveren.',
    privacyHowWeUseImprove: 'Om onze website te verbeteren en af te stemmen op de behoeften van gebruikers, en voor interne analyses.',
    privacyHowWeUseCookies: 'Cookies worden gebruikt voor websitefunctionaliteit en om uw voorkeuren te onthouden (zoals taalinstellingen). U kunt cookies uitschakelen in uw browserinstellingen, hoewel dit uw website-ervaring kan beïnvloeden.',
    privacyInfoSharingTitle: 'Informatie Delen',
    privacyInfoSharingNoSell: 'Wij verkopen, verhandelen of verhuren uw persoonlijke identificeerbare informatie niet aan derden.',
    privacyInfoSharingGov: 'Wij kunnen uw informatie delen met overheids- of regelgevende instanties indien wettelijk verplicht als onderdeel van een onderzoek, of om onze rechten te beschermen.',
    privacyThirdPartyLinksTitle: 'Links naar Derden',
    privacyThirdPartyLinksP1: 'Onze website kan links naar andere websites bevatten. Wij zijn niet verantwoordelijk voor de privacypraktijken van deze externe sites. Wij moedigen u aan hun privacybeleid te lezen.',
    privacySecurityTitle: 'Beveiliging',
    privacySecurityP1: 'Wij nemen redelijke administratieve, technische en fysieke veiligheidsmaatregelen om uw persoonlijke informatie te beschermen tegen verlies, diefstal en misbruik, evenals ongeautoriseerde toegang, openbaarmaking, wijziging en vernietiging. Geen enkele internettransmissie is echter volledig veilig of foutloos.',
    privacyChangesPolicyTitle: 'Wijzigingen in dit Beleid',
    privacyChangesPolicyP1: 'Wij kunnen dit Privacybeleid van tijd tot tijd bijwerken. Eventuele wijzigingen worden op deze pagina geplaatst met een bijgewerkte "Laatst bijgewerkt" datum. Wij moedigen u aan om dit Privacybeleid periodiek te herzien.',
    privacyContactUsTitle: 'Neem Contact Met Ons Op',
    privacyContactUsP1Prefix: 'Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via: ',
    privacyGoverningLawTitle: 'Toepasselijk Recht',
    privacyGoverningLawP1: 'Dit Privacybeleid wordt beheerst door en geïnterpreteerd in overeenstemming met de wetten van Nederland. Eventuele geschillen die voortvloeien uit of verband houden met dit beleid zullen worden voorgelegd aan de exclusieve jurisdictie van de bevoegde rechtbank in Den Haag.',

    // Disclaimer Page - NL
    disclaimerPageTitle: 'Disclaimer voor DataSight Portfolio',
    disclaimerValidFrom: 'Geldig vanaf: 1 april 2024',
    disclaimerIntroP1: 'De informatie verstrekt door DataSight Portfolio ("wij," "ons," of "onze") op deze website (DataSight Portfolio) is uitsluitend bedoeld voor algemene informatieve doeleinden. Alle informatie op de site wordt te goeder trouw verstrekt, echter geven wij geen enkele verklaring of garantie van welke aard dan ook, expliciet of impliciet, met betrekking tot de nauwkeurigheid, toereikendheid, geldigheid, betrouwbaarheid, beschikbaarheid of volledigheid van enige informatie op de site.',
    disclaimerAccuracyTitle: 'Nauwkeurigheid van Informatie',
    disclaimerAccuracyP1: 'Wij doen er alles aan om ervoor te zorgen dat de informatie op onze website accuraat en actueel is. We kunnen echter niet garanderen dat alle informatie volledig vrij is van fouten of omissies. Wij aanvaarden geen aansprakelijkheid voor eventuele fouten of omissies in de inhoud van de site. Wij behouden ons het recht voor om de inhoud van deze website op elk moment zonder kennisgeving te wijzigen.',
    disclaimerWebsiteAvailabilityTitle: 'Website Beschikbaarheid',
    disclaimerWebsiteAvailabilityP1: 'DataSight Portfolio garandeert niet dat de website ononderbroken zal werken of vrij zal zijn van fouten of virussen. Wij zijn niet aansprakelijk voor enige schade die voortvloeit uit:',
    disclaimerWebsiteAvailabilityL1: 'Onnauwkeurigheden of omissies in de verstrekte informatie.',
    disclaimerWebsiteAvailabilityL2: 'Problemen veroorzaakt door of inherent aan de verspreiding van informatie via internet (bijv. storingen, onderbrekingen, fouten of vertragingen in de levering van informatie).',
    disclaimerExternalLinksTitle: 'Externe Links',
    disclaimerExternalLinksP1: 'Deze website kan links naar websites van derden bevatten, of u kunt via links van websites van derden naar onze site worden geleid. Wij zijn niet verantwoordelijk voor de inhoud of nauwkeurigheid van deze externe sites en onderschrijven niet noodzakelijkerwijs de daarin geuite meningen. Wij kunnen niet garanderen dat deze hyperlinks altijd correct of actief zullen zijn. Het opnemen van links impliceert geen aanbeveling of goedkeuring van de sites.',
    disclaimerElectronicCommTitle: 'Elektronische Communicatie',
    disclaimerElectronicCommP1: 'Wij garanderen niet dat e-mails of andere elektronische berichten die naar ons worden verzonden, tijdig worden ontvangen of verwerkt. Wij aanvaarden geen aansprakelijkheid voor gevolgen van het niet of vertraagd ontvangen of verwerken van dergelijke communicatie.',
    disclaimerNoProAdviceTitle: 'Geen Professioneel Advies',
    disclaimerNoProAdviceP1: 'De informatie op deze website is niet bedoeld als professioneel advies (bijv. financieel, juridisch of anderszins). Het is bedoeld voor algemene informatiedoeleinden. U dient een gekwalificeerde professional te raadplegen voordat u beslissingen neemt op basis van de inhoud van deze site. Het vertrouwen op enige informatie die op deze site wordt verstrekt, is uitsluitend op eigen risico.',
    disclaimerLimitationLiabilityTitle: 'Beperking van Aansprakelijkheid',
    disclaimerLimitationLiabilityP1: 'Voor zover toegestaan door de toepasselijke wetgeving, is DataSight Portfolio, Tom de Bruijn, niet aansprakelijk voor enige directe, indirecte, incidentele, speciale, gevolg- of punitieve schade, of enig verlies van winst of inkomsten, direct of indirect opgelopen, of enig verlies van gegevens, gebruik, goodwill of andere immateriële verliezen, als gevolg van (i) uw toegang tot of gebruik van of onvermogen tot toegang tot of gebruik van de website; (ii) enig gedrag of inhoud van een derde partij op de website.',
    disclaimerChangesDisclaimerTitle: 'Wijzigingen in Deze Disclaimer',
    disclaimerChangesDisclaimerP1: 'Wij behouden ons het recht voor om deze disclaimer op elk moment te wijzigen. Wijzigingen worden onmiddellijk van kracht na plaatsing op de website. Uw voortgezet gebruik van de site na dergelijke wijzigingen houdt in dat u akkoord gaat met de gewijzigde disclaimer.',
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

    homeTitle: 'Transforming Data Insights into Business value',
    homeSubtitle: 'Tom de Bruijn | Freelance Splunk & Cribl Consultant',
    homeAboutMeTitle: 'About Me',
    homeAboutMeP1: 'With over 10 years of experience in the IT sector, I specialize as an independent consultant (ZZP) in transforming complex data into actionable insights. I help organizations leverage the power of Splunk and Cribl to improve operational efficiency and make data-driven decisions.',
    homeAboutMeP2: 'My passion lies in solving challenging data problems and delivering measurable results for my clients. As a dedicated professional, I am committed to continuous learning and applying the latest technologies to provide innovative solutions.',
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
    contactFormSuccessMessage: 'Thank you for your message. You will receive a confirmation email shortly.', // API response has more details
    contactFormError: 'An error occurred while sending your inquiry. Please try again later or contact us directly.',

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
    privacyIntro: 'DataSight Portfolio ("we", "us", or "our"), operated by Tom de Bruijn, values your privacy. This Privacy Policy explains how we handle your information when you use our website, DataSight Portfolio (the "Site"), and the services we offer.',
    privacyInfoCollectTitle: 'Information We Collect',
    privacyInfoCollectGenUsage: 'General Usage Data: When you visit the Site, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information". Device Information is primarily collected using cookies. This data helps us improve our website and services. This data does not personally identify you.',
    privacyInfoCollectContact: 'Contact Information: If you contact us via our inquiry form or directly, we will collect the information you provide, such as your name, email address, phone number (optional), and your message, in order to respond to your queries.',
    privacyHowWeUseTitle: 'How We Use Your Information',
    privacyHowWeUseRespond: 'To respond to your inquiries and provide the services you request.',
    privacyHowWeUseImprove: 'To improve our website and tailor it to user needs, and for internal analytics.',
    privacyHowWeUseCookies: 'Cookies are used for website functionality and to remember your preferences (such as language settings). You can disable cookies in your browser settings, though this may affect your website experience.',
    privacyInfoSharingTitle: 'Information Sharing',
    privacyInfoSharingNoSell: 'We do not sell, trade, or otherwise rent your personally identifiable information to third parties.',
    privacyInfoSharingGov: 'We may share your information with government or regulatory bodies if legally required to do so as part of an investigation, or to protect our rights.',
    privacyThirdPartyLinksTitle: 'Third-Party Links',
    privacyThirdPartyLinksP1: 'Our website may contain links to other websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to read their privacy policies.',
    privacySecurityTitle: 'Security',
    privacySecurityP1: 'We take reasonable administrative, technical, and physical security measures to protect your personal information from loss, theft, and misuse, as well as unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure or error-free.',
    privacyChangesPolicyTitle: 'Changes to This Policy',
    privacyChangesPolicyP1: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.',
    privacyContactUsTitle: 'Contact Us',
    privacyContactUsP1Prefix: 'If you have any questions about this Privacy Policy, please contact us at: ',
    privacyGoverningLawTitle: 'Governing Law',
    privacyGoverningLawP1: 'This Privacy Policy is governed by and construed in accordance with the laws of the Netherlands. Any disputes arising out of or relating to this policy shall be submitted to the exclusive jurisdiction of the competent court in The Hague.',

    // Disclaimer Page - EN
    disclaimerPageTitle: 'Disclaimer for DataSight Portfolio',
    disclaimerValidFrom: 'Valid from: April 1, 2024',
    disclaimerIntroP1: 'The information provided by DataSight Portfolio ("we," "us," or "our") on this website (DataSight Portfolio) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.',
    disclaimerAccuracyTitle: 'Accuracy of Information',
    disclaimerAccuracyP1: 'We make every effort to ensure the information on our website is accurate and up-to-date. However, we cannot guarantee that all information is completely free of errors or omissions. We accept no liability for any errors or omissions in the content of the Site. We reserve the right to change the content on this website at any time without notice.',
    disclaimerWebsiteAvailabilityTitle: 'Website Availability',
    disclaimerWebsiteAvailabilityP1: 'DataSight Portfolio does not guarantee that the website will operate without interruption or be error-free or virus-free. We are not liable for any damages arising from:',
    disclaimerWebsiteAvailabilityL1: 'Inaccuracies or omissions in the information provided.',
    disclaimerWebsiteAvailabilityL2: 'Problems caused by or inherent to the distribution of information via the internet (e.g., breakdowns, interruptions, errors, or delays in the provision of information).',
    disclaimerExternalLinksTitle: 'External Links',
    disclaimerExternalLinksP1: 'This website may contain links to third-party websites, or you may be C-hannel to our Site from links on third-party websites. We are not responsible for the content or accuracy of these external sites and do not necessarily endorse the views expressed within them. We cannot guarantee that these hyperlinks will always be correct or active. The inclusion of any links does not necessarily imply a recommendation or endorse the sites.',
    disclaimerElectronicCommTitle: 'Electronic Communication',
    disclaimerElectronicCommP1: 'We do not guarantee that emails or other electronic messages sent to us will be received or processed in a timely manner. We accept no liability for any consequences of not receiving or processing such communications, or for delays in doing so.',
    disclaimerNoProAdviceTitle: 'No Professional Advice',
    disclaimerNoProAdviceP1: 'The information on this website is not intended as professional advice (e.g., financial, legal, or otherwise). It is for general informational purposes only. You should consult with a qualified professional before making any decisions based on the content of this site. Reliance on any information provided by this site is solely at your own risk.',
    disclaimerLimitationLiabilityTitle: 'Limitation of Liability',
    disclaimerLimitationLiabilityP1: 'To the fullest extent permitted by applicable law, DataSight Portfolio, Tom de Bruijn, shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the website; (ii) any conduct or content of any third party on the website.',
    disclaimerChangesDisclaimerTitle: 'Changes to This Disclaimer',
    disclaimerChangesDisclaimerP1: 'We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on the website. Your continued use of the Site after any such changes shall constitute your agreement to the modified disclaimer.',
  },
};

