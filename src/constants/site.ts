
import type { Locale, TranslationContent } from '@/lib/translations';

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
    { name: 'Gemeente Den Haag', src: 'https://placehold.co/120x60.png', dataAiHint: 'Den Haag logo' },
    { name: 'ICS Cards', src: 'https://placehold.co/120x60.png', dataAiHint: 'ICS Cards logo' },
    { name: 'Rabobank', src: 'https://placehold.co/120x60.png', dataAiHint: 'Rabobank logo' },
    { name: 'Schiphol Airport', src: 'https://placehold.co/120x60.png', dataAiHint: 'Schiphol Airport logo' },
  ]
};

export const SERVICE_ITEMS = [
  { titleKey: 'service1Title', descriptionKey: 'service1Description', icon: 'SplunkIcon' },
  { titleKey: 'service2Title', descriptionKey: 'service2Description', icon: 'CriblIcon' },
  { titleKey: 'service3Title', descriptionKey: 'service3Description', icon: 'DataStrategyIcon' },
  { titleKey: 'service4Title', descriptionKey: 'service4Description', icon: 'AiSolutionIcon' },
  { titleKey: 'service5Title', descriptionKey: 'service5Description', icon: 'ClipboardTeacher' }, // New service for Trainings
] as const; // Adding 'as const' for stricter type inference on icon names

export const PUBLICATION_ITEMS = [
  {
    titleKey: 'publication1Title',
    descriptionKey: 'publication1Description',
    link: '#', // Placeholder link
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'data report'
  }
];
