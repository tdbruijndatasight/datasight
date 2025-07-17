export type Locale = 'nl' | 'en';

export interface TranslationContent {
  // Header / Nav
  navHome: string;
  navExperience: string;
  navServices: string;
  navBlogs: string;
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

  // Blogs Section
  blogsTitle: string;
  blogsSubtitle: string;
  readMore: string;
  blog1TeaserTitle: string;
  blog1TeaserCTA: string;
  blog1ArticleTitle: string;
  blog1FullArticle: string;
  backToOverview: string;

  // Project Inquiry Section
  projectInquiryTitle: string;
  projectInquirySubtitle: string; 
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

  inquiryPlaceholder1: string;
  inquiryPlaceholder2: string;
  inquiryPlaceholder3: string;
  inquiryPlaceholder5: string;
  inquiryPlaceholder6: string;
  inquiryPlaceholder7: string;
  inquiryPlaceholder8: string;
  inquiryPlaceholder9: string;
  inquiryPlaceholder11: string;
  inquiryPlaceholder12: string;
  inquiryPlaceholder14: string;
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
    navExperience: 'Ervaring',
    navServices: 'Diensten',
    navBlogs: 'Blogs',
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

    customersTitlePart1: 'Klanten en Referenties',
    customersTitlePart2: '',
    customersTitlePart3: '',
    customersDescription: 'Ik werk voor zowel nationale als internationale bedrijven in de profit- en non-profitsector. Wat ons bindt, is de behoefte om complexe veranderingen door te voeren, waarbij IT en data cruciaal zijn.',
    customersLinkedInClarification: "Een overzicht van projecten en bedrijven waarvoor ik via eerdere werkgevers heb gewerkt vind je op",
    customersCTAChallenge: "Heeft u een uitdaging of project waarin ik kan meedenken of meewerken?",
    customersCTAPleasure: "Ik kom graag in contact voor vrijblijvende kennismaking.",


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
    service2DetailDesc: 'Cribl is een platform dat fungeert als slimme tussenlaag tussen databronnen en databestemmingen. Met Cribl Stream kun je data verzamelen, filteren, verrijken, beveiligen en gericht routeren. Je kunt ruwe data opslaan in relatief goedkopere storage en alleen de data die je gericht nodig hebt doorsturen naar verschillende databestemmingen, voor analyse- of securitydoeleinden. Cribl biedt volledige grip en eigenaarschap over je data, bespaart onnodige licentie- en opslagkosten en gaat vendor lock-in tegen. Mijn diensten rondom Cribl bestaan onder andere uit:',
    service2DetailBullet1: 'Het opstellen van een implementatieplan, alsmede de technische implementatie en configuratie van Cribl.',
    service2DetailBullet2: 'Proactief beheer van de Cribl Stream-omgeving en het bouwen van processing pipelines voor filtering, verrijking, beveiliging en routering van data.',
    service2DetailBullet3: 'Integraties met Cribl, van iedere data bron naar iedere data bestemming in ieder gewenst format.',
    service2DetailBullet4: 'Kostenbesparingsstrategieën door data-reductie en slimme datarouting.',
    service2DetailBullet5: '',
	  service2DialogFooterText: "Cribl is een veelzijdig platform en flexibel inzetbaar. In een persoonlijk gesprek kan ik meer toelichten, bespreken we jouw data-uitdaging en laat ik graag een demo zien die past bij jouw situatie.",
    service2DetailCTA: 'Neem contact op',

    service5Title: 'Trainingen & Workshops',
    service5Description: 'Nieuw met Splunk of Cribl, of hulp nodig? Ik lever maatwerk trainingen en workshops. Lees meer.',
    service5DetailTitle: 'Trainingen & Workshops: Praktische trainingen afgestemd op uw organisatie en behoeften',
    service5DetailDesc: 'Trots op mijn werk deel ik op enthousiaste wijze graag mijn kennis op een praktische en begrijpelijke manier. Daarom geef ik regelmatig trainingen en workshops aan mensen die meer willen leren. Of jullie nu net beginnen met Splunk of Cribl, of juist meer uit de tools willen halen, alles is mogelijk. Ik geloof in maatwerk, zodat ik precies kan aansluiten bij jullie wensen en zo het beste resultaat kan bereiken.\n\nIk verzorg trainingen op locatie of remote, op jullie eigen (Splunk/Cribl) omgeving, maar ook via een demo-omgeving. Daarbij bied ik zowel 1-op-1 sessies als groepssessies aan, van één dag tot meerdere dagen. Mijn trainingsmogelijkheden omvatten:',
    service5DetailBullet1: 'Maatwerk trainingen die passen bij de behoeften van jullie organisatie',
    service5DetailBullet2: 'Trainingen voor beginners en gevorderden in Splunk en Cribl',
    service5DetailBullet3: 'Flexibele trainingsvormen, individueel of in groepsverband',
    service5DetailBullet4: 'Interactieve labs en Q&A sessies voor een diepgaand begrip',
    service5DetailBullet5: 'Trainingen op locatie of remote, op eigen of demo-omgeving',
	  service5DialogFooterText: "Neem gerust contact op om de mogelijkheden te bespreken. Omdat alles maatwerk is, bespreken we de prijzen altijd in overleg.",
    service5DetailCTA: 'Neem contact op',
    
    blogsTitle: "Blogs",
    blogsSubtitle: "Gedachten, handleidingen en inzichten over data, observability en de praktijk.",
    readMore: "Lees meer",
    backToOverview: "Terug naar overzicht",

    blog1TeaserTitle: "🚀 Hoe koppel je Azure DevOps slim aan Splunk en krijg je real time inzicht in MTTR, teamperformance en doorlooptijden?",
    blog1TeaserCTA: "In deze blog lees je hoe ik dat zo efficient mogelijk aanpak; Eén YAML script, Azure DevOps- en Splunk REST API, slimme dashboarding. Robuust, schaalbaar en klaar voor jouw omgeving.\n\n#Splunk #Azure #DevOps #CICD #Observability #AI",
    blog1ArticleTitle: "📝 Van Azure DevOps naar Splunk: Volledig inzicht in workitems, MTTR en teamvoortgang",
    blog1FullArticle: `In veel DevOps-omgevingen zie ik het volgende patroon: in een monitoringtool gaat een alert af, waarop — handmatig of geautomatiseerd — een ticket wordt aangemaakt in incident registratie systemen als Azure DevOps of Jira. Een engineer onderzoekt het incident, documenteert de oorzaak, en sluit uiteindelijk het ticket af. Wat er in deze flow ontbreekt: samenhangend inzicht. Tickets en logging zijn soms wel geintegreerd, maar leven in de praktijk vaak in gescheiden werelden. Dit leidt tot twee veelvoorkomende problemen:

<b>- Gebrek aan directe context:</b> Vanuit het ticket is vaak onvoldoende informatie beschikbaar, en er ontbreekt een directe link naar de relevante logdata of het bijbehorende dashboard. Engineers moeten handmatig op zoek naar de juiste logs, wat tijdrovend en foutgevoelig is.

<b>- Beperkt inzicht in incidentstromen:</b> Omdat tickets niet zichtbaar zijn in Splunk, ontbreekt daar het overzicht van hoeveel issues er spelen, welke al zijn opgelost en wat de doorlooptijden zijn. Hierdoor is het lastig om trends te signaleren, processen structureel te verbeteren of effectief bij te sturen.

✅ Ik heb dit opgelost door de status van tickets realtime in Splunk te integreren. Hierdoor krijg je:
•	📌 Tickets (Workitems) direct gelogd in Splunk.
•	📈 Duidelijke rapportages over MTTR, MTBF en doorlooptijden.
•	👨‍💻 Voor engineers: snel context bij een errorlog of alert – gelinkt aan het juiste ticket
•	📊 Voor managers: dashboards die inzicht geven in voortgang, bottlenecks en team performance, geschikt voor stuurinformatie.

💡 <i>Ik gebruik in deze blog Azure DevOps en Splunk als voorbeeld, dezelfde opzet is ook toepasbaar op andere tooling.</i>

🔧 <b>Hoe bereik je dit?</b>

Om  de tickets van Azure DevOps - ook wel Workitems genoemd - correct te koppelen aan Splunk en bruikbare inzichten te genereren, zijn de volgende componenten nodig:

<b>•	Azure DevOps PAT Token - </b>Voor REST API-calls naar Azure DevOps, om de workitem ID's en bijbehorende metadata op te halen.
<b>•	Splunk REST Token - </b>Nodig om de huidige status van workitems in Splunk op te halen via Splunk’s REST API.
<b>•	Splunk HEC Token - </b>Voor het aanleveren van nieuwe events aan Splunk via de HTTP Event Collector.
<b>•	Splunk Index + Sourcetype - </b>Een Splunk index en een JSON sourcetype waarin de verrijkte workitem-data wordt opgeslagen.
<b>•	Server voor Yaml Script - </b> Een server of runner waarop het YAML-script draait dat toegang heeft tot zowel Azure DevOps als Splunk.

🧩 Het script (YAML-logica in 5 stappen)
Onderstaand geeft de kern van de datastroom weer. Het YAML-script voert de volgende acties uit:

1️⃣ Request <a href="https://learn.microsoft.com/en-us/rest/api/azure/devops/">Azure DevOps API</a> — haal alle Workitem-ID’s op die in de afgelopen 24 uur zijn gewijzigd.
2️⃣ <a href="https://learn.microsoft.com/en-us/rest/api/azure/devops/wit/work-items/get-work-items-batch">Batch request Workitems</a>metadata via Azure DevOps API — vraag per ID de relevante metadata op.
3️⃣ Query <a href="https://help.splunk.com/en/splunk-enterprise/rest-api-reference/9.4/introduction/using-the-rest-api-reference:">Splunk REST API</a> — controleer of de workitems al aanwezig zijn in Splunk en wat de huidige status is op basis van tijd.
4️⃣ Filter — bewaar alleen gewijzigde en nieuwe events in Splunk.
5️⃣ Verstuur nieuwe events naar <a href="https://docs.splunk.com/Documentation/Splunk/9.4.2/Data/UsetheHTTPEventCollector#Example_of_sending_data_to_HEC_with_an_HTTP_request">Splunk via HEC</a>
 
💡- Let op dat de API's van Azure DevOps en Splunk limieten hebben, in het YAML script maak ik daarom gebruik van batches. 
💡- Door de wijzigingen van Azure DevOps workitems op te halen, en deze te filteren met de data die al in Splunk staat, wordt er zeer efficiënt gelogd in Splunk, waardoor dashboarding ook super goed performt.
💡- Een voorbeeld script nodig? neem gerust contact op!

📊 Splunk Dashboard:
Het eindresultaat is een dynamisch Splunk-dashboard dat data uit de specifieke index en sourcetype visualiseert. De belangrijkste componenten:
<b>•	Eén Base search - </b> die alle data ophaalt en verwerkt, alle andere panelen maken gebruik van deze search waardoor er niet onnodig veel queries worden uitgevoerd en het dashboard goed eprformt.
<b>•	Tijd filtering – werktijden - MTTR MTBF - </b>. De MTTR (Mean Time To Repair) en MTBF (Mean Time Between Failures) wordt standaard berekend middels het vergelijken van twee timestamps, bijvoorbeeld voor MTTR de tijd tussen incident “acknowledged” en “resolved”. In Splunk is het echter ook mogelijk om voor MTTR alleen de tijd tussen werktijden te meten, 08:00-17:00. In de avond- nacht- en weekenden wordt er immers niet gewerkt. Hiervoor is wel een slimme macro nodig.
<b>•	Visualisaties & filters - </b> filters op, Afdeling/team, prioriteit, tag, label, status etc. Dit maakt het eenvoudig om bottlenecks per team te identificeren, prioriteitenschema’s te bewaken en trends over tijd te visualiseren.

📬 <b>Voorbeelden nodig, of dit graag een keer live zien? Vraag gerust om een stukje voorbeeld code of om een demo!</b>
Neem contact met mij op via <a href="mailto:info.tomdebruijn@gmail.com">info.tomdebruijn@gmail.com</a> of <a href="https://www.linkedin.com/in/tcdebruijn/" target="_blank" >LinkedIn</a>.`,
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
    inquiryPlaceholder5: "Vragen over Splunk Observability, Security of ITSI? 🔍\nIk denk graag met u mee.",
    inquiryPlaceholder6: "Wil je efficiënter werken met Cribl of Splunk? 🛠️\nDataSight geeft ook hands-on trainingen die precies aansluiten bij jouw situatie.",
    inquiryPlaceholder7: "Hulp nodig met dashboarding, alerting of rapportages in Splunk? 📊\nIk help graag.",
    inquiryPlaceholder8: "Beheer je Cribl Stream of Edge en wil je het maximale eruit halen? 📈\nLaten we kijken wat er mogelijk is.",
    inquiryPlaceholder9: "Hulp nodig bij het opzetten of optimaliseren van Cribl Pipelines? ⚙️\nStuur gerust een berichtje.",
    inquiryPlaceholder11: "Gewoon even kennismaken of een vraag stellen over Splunk/Cribl? 👋\nStuur gerust een berichtje!",
    inquiryPlaceholder12: "Wil je met minder data meer inzicht krijgen? ✨\nIk help om slimme keuzes te maken met Splunk & Cribl.",
    inquiryPlaceholder14: "Wil je met je team sneller werken in Cribl of Splunk? 🚀\n De trainingen zijn hands-on, maatwerk en zonder onnodige theorie.",
    inquiryPlaceholder16: "Wil je kosten besparen door Splunk en Cribl slimmer in te zetten? ✨\n Ik graag meer met je mee naar efficiënte oplossingen.",

    contactTitle: 'Neem Contact Op',
    contactSubtitle: 'Laten we bespreken hoe ik kan helpen met uw data-uitdagingen.',
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
    navExperience: 'Experience',
    navServices: 'Services',
    navBlogs: 'Blogs',
    navProjectInquiry: 'Contact Form',
    navContact: 'Contact',
    languageToggle: 'Schakel naar Nederlands',
    themeToggleLight: 'Switch to light mode',
    themeToggleDark: 'Switch to dark mode',
    loading: 'Loading...',

    homeTitle: 'Data > Insight > Value, Simple.',
    homeSubtitle: 'Tom de Bruijn | Splunk & Cribl Consultant',
    homeAboutMeTitle: 'Welcome at DataSight.',
    homeAboutMeP1: "I'm Tom de Bruijn, founder of DataSight, established in 2024 with a clear mission: to help organizations tackle complex data challenges by transforming raw information into clear, actionable insights that create real value.",
    homeAboutMeP2: "With over a decade of experience and a solid foundation in APM and observability, I’ve grown into a versatile and seasoned data engineer.",
    homeAboutMeP3: "Through DataSight, I offer consultancy, strategic guidance, and tailored training at any level of expertise. Looking for a dedicated, experienced partner who’s genuinely invested in your success? Let’s connect.",
    homeCTA: 'Get in Touch',

    customersTitlePart1: 'Customers and References',
    customersTitlePart2: '',
    customersTitlePart3: '',
    customersDescription: 'I work for both national and international companies in the profit and non-profit sectors. What connects us is the need to implement complex changes where IT and data are crucial.',
    customersLinkedInClarification: "An overview of projects and companies for which I have worked through previous employers can be found on",
    customersCTAChallenge: "Do you have a challenge or project where I can contribute or collaborate?",
    customersCTAPleasure: "I would be happy to get in touch for a no-obligation introduction.",

    servicesTitle: 'Services',
    servicesSubtitle: "At DataSight, I help organizations unlock the full value of their data. This goes beyond the services listed below and includes the right combination of technical solutions, expertise, and hands-on experience. Whether you are going through a cloud migration, automating key processes, or working with products such as Splunk ITSI or Enterprise Security, I am here to collaborate, provide guidance, and support successful execution.",

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
    service2DetailTitle: 'Cribl Consultancy: For Efficient Observability',
    service2DetailDesc: 'Cribl is a platform that acts as a smart intermediary layer between data sources and destinations. With Cribl Stream, you can collect, filter, enrich, secure, and strategically route data. You can store raw data in relatively cheaper storage and only forward the data you specifically need to various data destinations, for analysis or security purposes. Cribl provides complete control and ownership over your data, saves unnecessary licensing and storage costs, and prevents vendor lock-in. My services around Cribl include, among others:',
    service2DetailBullet1: 'Developing an implementation plan, as well as the technical implementation and configuration of Cribl.',
    service2DetailBullet2: 'Proactive management of the Cribl Stream environment and building processing pipelines for filtering, enriching, securing, and routing data.',
    service2DetailBullet3: 'Integrations with Cribl, from any data source to any data destination in any desired format.',
    service2DetailBullet4: 'Cost-saving strategies through data reduction and smart data routing.',
    service2DetailBullet5: '',
	  service2DialogFooterText: "Cribl is a versatile platform and flexibly deployable. In a personal conversation, I can explain more, we can discuss your data challenge, and I would be happy to show a demo that fits your situation.",
    service2DetailCTA: 'Get in touch',

    service5Title: 'Trainings & Workshops',
    service5Description: 'New to Splunk or Cribl, or need specific help? We provide tailored training and workshops. Learn more.',
    service5DetailTitle: 'Trainings & Workshops: Practical training designed for your organization and needs',
    service5DetailDesc: "Proud of my work, I enthusiastically share my knowledge in a practical and understandable way. That's why I regularly give trainings and workshops to people who want to learn more. Whether you're just starting with Splunk or Cribl, or want to get more out of the tools, anything is possible. I believe in custom solutions, so I can precisely meet your needs and achieve the best results.\n\nI provide trainings on-site or remotely, on your own (Splunk/Cribl) environment, but also via a demo environment. I offer both 1-on-1 sessions and group sessions, ranging from one day to several days. My training options include:",
    service5DetailBullet1: "Customized trainings that fit the needs of your organization",
    service5DetailBullet2: "Trainings for beginners and advanced users in Splunk and Cribl",
    service5DetailBullet3: "Flexible training formats, individual or in group sessions",
    service5DetailBullet4: "Interactive labs and Q&A sessions for in-depth understanding",
    service5DetailBullet5: "Trainings on-site or remotely, on your own or demo environment",
	  service5DialogFooterText: "Feel free to contact us to discuss the possibilities. Since everything is custom-made, we always discuss prices in consultation.",
    service5DetailCTA: 'Get in touch',
    
    blogsTitle: "Blogs",
    blogsSubtitle: "Thoughts, guides, and insights on data, observability, and real-world practice.",
    readMore: "Read more",
    backToOverview: "Back to overview",
    
    blog1TeaserTitle: "🚀 How to smartly connect Azure DevOps to Splunk and get real-time insights into MTTR, team performance, and lead times?",
    blog1TeaserCTA: "In this blog, I’ll show you how I approach this as efficiently as possible: one YAML script, Azure DevOps and Splunk REST APIs, and smart dashboarding. Robust, scalable, and ready for your environment.\n\n#Splunk #Azure #DevOps #CICD #Observability #AI",
    blog1ArticleTitle: "📝 From Azure DevOps to Splunk: Complete Insight into Workitems, MTTR, and Team Progress",
    blog1FullArticle: `In many DevOps environments, I see the following pattern: an alert is triggered in a monitoring tool, which — either manually or automatically — creates a ticket in an incident management system like Azure DevOps or Jira. An engineer investigates the issue, documents the root cause, and eventually resolves and closes the ticket.

What’s often missing in this flow: meaningful, connected insight. Tickets and logging may be technically integrated, but in practice they often live in separate silos. This leads to two common problems:

<b>• Lack of direct context:</b> From within a ticket, there’s often too little information available and no direct link to the relevant log data or dashboard. Engineers must manually search for the right logs — a time-consuming and error-prone process.

<b>• Limited visibility into incident flows:</b> Since tickets aren’t visible in Splunk, there’s no overview of how many issues are active, which ones are resolved, or how long they took. That makes it difficult to spot trends, improve processes, or steer effectively.

✅ I’ve solved this by integrating ticket statuses from Azure DevOps directly into Splunk — in real time. This results in:
• 📌 Workitems directly logged in Splunk
• 📈 Clear reporting on MTTR, MTBF and throughput over time
• 👨‍💻 For engineers: instant context for error logs and alerts – directly linked to the right ticket
• 📊 For managers: dashboards with insight into progress, bottlenecks and team performance — ready for decision-making

💡 <i>In this blog I use Azure DevOps and Splunk as an example, but the same setup can be applied to other tooling.</i>

🔧 <b>How do you achieve this?</b>

To correctly link Azure DevOps tickets — known as Workitems — to Splunk and generate actionable insights, you need the following components:

<b>• Azure DevOps PAT Token –</b> For REST API calls to Azure DevOps to fetch workitem IDs and metadata.
<b>• Splunk REST Token –</b> Used to check the current workitem status in Splunk via its REST API.
<b>• Splunk HEC Token –</b> For sending new events into Splunk via the HTTP Event Collector.
<b>• Splunk Index + Sourcetype –</b> A dedicated Splunk index and JSON sourcetype to store the enriched workitem data.
<b>• Server for YAML Script –</b> A server or runner where the YAML script runs, with access to both Azure DevOps and Splunk.

🧩 The script (YAML logic in 5 steps)
The flow below shows the core of the data pipeline. The YAML script performs the following actions:

1️⃣ Request <a href="https://learn.microsoft.com/en-us/rest/api/azure/devops/">Azure DevOps API</a> — fetch all Workitem IDs updated in the last 24h
2️⃣ <a href="https://learn.microsoft.com/en-us/rest/api/azure/devops/wit/work-items/get-work-items-batch">Batch request Workitems</a> metadata via Azure DevOps API
3️⃣ Query <a href="https://help.splunk.com/en/splunk-enterprise/rest-api-reference/9.4/introduction/using-the-rest-api-reference:">Splunk REST API</a> for existing ticket statuses
4️⃣ Filter: only keep records not already present in Splunk
5️⃣ Send new events into Splunk using <a href=""https://docs.splunk.com/Documentation/Splunk/9.4.2/Data/UsetheHTTPEventCollector#Example_of_sending_data_to_HEC_with_an_HTTP_request>Splunk HEC</a> in batch. 

💡- Azure DevOps & Splunk have API limit's, therefore i use batches in the YAML script for processing the records.
💡- By fetching only modified workitems from Azure DevOps and comparing them with what already exists in Splunk, the system logs efficiently — which leads to fast and responsive dashboards.
💡- Need some sample code, drop me a message, happy to help!

📊 Splunk Dashboard: One source, many insights
The end result is a dynamic Splunk dashboard that visualizes data from your configured index and sourcetype. Key components:

<b>• One base search –</b> A single search powers the entire dashboard. All panels use this shared search, avoiding redundant queries and improving performance.
<b>• Time filtering – working hours, MTTR, MTBF – </b>MTTR (Mean Time To Repair) and MTBF (Mean Time Between Failures) are calculated by comparing timestamps — for MTTR, typically the time between “acknowledged” and “resolved”. In Splunk, this can be further refined to count only business hours (e.g., 08:00–17:00), ignoring nights and weekends, and even public holidays.
<b>• Visualizations & filters –</b> Use filters for team, priority, tag, label, status and more. This makes it easy to identify bottlenecks, enforce priority workflows, and monitor trends over time.

📬 <b>In need of some sample code, or want to see this in action? Request a demo!</b>
Reach out via <a href="mailto:info.tomdebruijn@gmail.com">info.tomdebruijn@gmail.com</a> or connect on <a href="https://www.linkedin.com/in/tcdebruijn/" target="_blank">LinkedIn</a>. I'am happy to walk you through the setup or help tailor it to your environment.`,
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
    inquiryPlaceholder5: "Questions about Splunk Observability, Security, or ITSI? 🔍\nI'am happy to think along.",
    inquiryPlaceholder6: "Want to work more efficiently with Cribl or Splunk? 🛠️\nDataSight gives also hands-on training tailored to your situation.",
    inquiryPlaceholder7: "Need help with dashboarding, alerting, or reporting in Splunk? 📊\nI'am happy to help you get started.",
    inquiryPlaceholder8: "Managing Cribl Stream or Edge and want to get the most out of it? 📈\nI'll explore the possibilities together.",
    inquiryPlaceholder9: "Need help setting up or optimizing Cribl Pipelines? ⚙️\nI'll gladly send you a message.",
    inquiryPlaceholder11: "Just want to get acquainted or ask a question about Splunk/Cribl? 👋\nI'll gladly send you a message!",
    inquiryPlaceholder12: "Want to gain more insight with less data? ✨\nI help to make smart choices with Splunk & Cribl.",
    inquiryPlaceholder14: "Want your team to work faster in Cribl or Splunk? 🚀\n The trainings are hands-on, custom, and without unnecessary theory.",
    inquiryPlaceholder16: "Want to save costs by using Splunk and Cribl smarter? ✨\n I'am happy to look into efficient solutions with you.",

    contactTitle: 'Get in Touch',
    contactSubtitle: "Let's discuss how I can help with your data challenges.",
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
