
import type { Locale, TranslationContent } from '@/lib/translations';

// Import logos from src/logos
// import gemeenteDenHaagLogo from '@/logos/gemeente-den-haag.png'; // Temporarily commented out
// import icsCardsLogo from '@/logos/ics-cards.png'; // Temporarily commented out
import rabobankLogo from '@/logos/rabobank.svg';
import schipholLogo from '@/logos/schiphol.png';
// import ikeaLogo from '@/logos/ikea.svg'; // Temporarily commented out

export interface NavItem {
  labelKey: keyof TranslationContent;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'navHome', href: '#home', id: 'home' },
  { labelKey: 'navCustomers', href: '#customers', id: 'customers' },
  { labelKey: 'navServices', href: '#services', id: 'services' },
  { labelKey: 'navPublications', href: '#publications', id: 'publications' },
  { labelKey: 'navProjectInquiry', href: '#inquiry', id: 'inquiry' },
  { labelKey: 'navContact', href: '#contact', id: 'contact' },
];

export const SITE_CONFIG = {
  name: 'DataSight Portfolio',
  email: 'info.tomdebruijn@gmail.com',
  phone: '+31653483883',
  linkedIn: 'https://www.linkedin.com/in/tcdebruijn/',
  companyLogos: [
    { name: 'Gemeente Den Haag', src: 'https://placehold.co/120x60.png', dataAiHint: 'Den Haag logo' }, // Temporarily reverted to placeholder
    { name: 'ICS Cards', src: 'https://placehold.co/120x60.png', dataAiHint: 'ICS Cards logo' }, // Temporarily reverted to placeholder
    { name: 'Rabobank', src: rabobankLogo, dataAiHint: 'Rabobank logo' },
    { name: 'Schiphol Airport', src: schipholLogo, dataAiHint: 'Schiphol Airport logo' },
    { name: 'IKEA', src: 'https://placehold.co/120x60.png', dataAiHint: 'IKEA logo' }, // Temporarily reverted to placeholder
  ]
};

export const SERVICE_ITEMS = [
  { titleKey: 'service1Title', descriptionKey: 'service1Description', icon: 'SplunkIcon' },
  { titleKey: 'service2Title', descriptionKey: 'service2Description', icon: 'CriblIcon' },
  { titleKey: 'service3Title', descriptionKey: 'service3Description', icon: 'DataStrategyIcon' },
  { titleKey: 'service4Title', descriptionKey: 'service4Description', icon: 'AiSolutionIcon' },
  { titleKey: 'service5Title', descriptionKey: 'service5Description', icon: 'Clipboard' }, // Was ClipboardTeacher
] as const;

export const PUBLICATION_ITEMS = [
  {
    titleKey: 'publication1Title',
    descriptionKey: 'publication1Description',
    link: '#',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'data report'
  }
];
