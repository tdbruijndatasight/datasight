
import type { Locale, TranslationContent } from '@/lib/translations';

// Import logos from src/logos
import gemeenteDenHaagLogo from '@/logos/gemeente-den-haag.svg';
import icsLogo from '@/logos/ics.svg';
import rabobankLogo from '@/logos/rabobank.svg';
import schipholLogo from '@/logos/schiphol.svg';
import ikeaLogo from '@/logos/ikea.svg';
import uwvLogo from '@/logos/uwv.svg';

export interface NavItem {
  labelKey: keyof TranslationContent;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'navHome', href: '/#home', id: 'home' },
  { labelKey: 'navCustomers', href: '/#customers', id: 'customers' },
  { labelKey: 'navServices', href: '/#services', id: 'services' },
  { labelKey: 'navPublications', href: '/#publications', id: 'publications' },
  { labelKey: 'navProjectInquiry', href: '/#inquiry', id: 'inquiry' },
  { labelKey: 'navContact', href: '/#contact', id: 'contact' },
];

export const SITE_CONFIG = {
  name: 'DataSight Portfolio',
  email: 'info.tomdebruijn@gmail.com',
  phone: '+31653483883',
  linkedIn: 'https://www.linkedin.com/in/tcdebruijn/',
  companyLogos: [
    { name: 'Schiphol Airport', src: schipholLogo, dataAiHint: 'Schiphol Airport logo' },
    { name: 'Rabobank', src: rabobankLogo, dataAiHint: 'Rabobank logo' },
    { name: 'IKEA', src: ikeaLogo, dataAiHint: 'IKEA logo' },
    { name: 'ICS Cards', src: icsLogo, dataAiHint: 'ICS logo' },
    { name: 'UWV', src: uwvLogo, dataAiHint: 'UWV logo' },
    { name: 'Gemeente Den Haag',  src: gemeenteDenHaagLogo, dataAiHint: 'Den Haag logo' },
  ],
  footerLogos: [
    { name: 'Gemeente Den Haag', src: schipholLogo, dataAiHint: 'Schiphol Airport logo' },
    { name: 'UWV', src: uwvLogo, dataAiHint: 'UWV logo' },
  ]
};

export const SERVICE_ITEMS = [
  { titleKey: 'service1Title', descriptionKey: 'service1Description', icon: 'SplunkIcon' },
  { titleKey: 'service2Title', descriptionKey: 'service2Description', icon: 'CriblIcon' },
  { titleKey: 'service3Title', descriptionKey: 'service3Description', icon: 'DataStrategyIcon' },
  { titleKey: 'service4Title', descriptionKey: 'service4Description', icon: 'AiSolutionIcon' },
  { titleKey: 'service5Title', descriptionKey: 'service5Description', icon: 'Clipboard' }, // Changed from ClipboardTeacher
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
