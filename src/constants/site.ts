
import type { StaticImageData } from 'next/image';
import type { Locale, TranslationContent } from '@/lib/translations';

// Import logos from src/images/logos
import schipholLogo from '@/images/logos/schiphol.svg';
import rabobankLogo from '@/images/logos/rabobank.svg';
import ikeaLogo from '@/images/logos/ikea.svg';
import icsLogo from '@/images/logos/ics.svg';
import uwvLogo from '@/images/logos/uwv.svg';
import gemeenteDenHaagLogo from '@/images/logos/gemeente-den-haag.svg';


export interface NavItem {
  labelKey: keyof TranslationContent;
  href: string;
  id: string;
}

export interface CompanyLogo {
  name: string;
  src: StaticImageData;
  dataAiHint?: string;
  width?: number;
  height?: number;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'navHome', href: '/#home', id: 'home' },
  { labelKey: 'navServices', href: '/#services', id: 'services' },
  { labelKey: 'navCustomers', href: '/#customers', id: 'customers' },
  // { labelKey: 'navPublications', href: '/#publications', id: 'publications' }, // Hidden
  { labelKey: 'navProjectInquiry', href: '/#inquiry', id: 'inquiry' },
  { labelKey: 'navContact', href: '/#contact', id: 'contact' },
];

export const SITE_CONFIG = {
  name: 'DataSight',
  email: 'info.tomdebruijn@gmail.com',
  phone: '+31653483883',
  linkedIn: 'https://www.linkedin.com/in/tcdebruijn/',
  companyLogos: [
    { name: 'Schiphol Airport', src: schipholLogo, dataAiHint: 'Schiphol Airport logo', width: 140, height: 55 },
    { name: 'Rabobank', src: rabobankLogo, dataAiHint: 'Rabobank logo', width: 140, height: 55 },
    { name: 'IKEA', src: ikeaLogo, dataAiHint: 'IKEA logo', width: 140, height: 55 },
    { name: 'ICS Cards', src: icsLogo, dataAiHint: 'ICS logo', width: 140, height: 55 },
    { name: 'UWV',  src: uwvLogo, dataAiHint: 'UWV logo', width: 100, height: 40 },
    { name: 'Gemeente Den Haag',  src: gemeenteDenHaagLogo, dataAiHint: 'Den Haag logo', width: 140, height: 55 },
  ] as CompanyLogo[],
};

export interface ServiceItemConstant {
  titleKey: keyof TranslationContent;
  descriptionKey: keyof TranslationContent; // For the card
  icon: string;
}

export const SERVICE_ITEMS: ServiceItemConstant[] = [
  { titleKey: 'service1Title', descriptionKey: 'service1Description', icon: 'SplunkIcon' },
  { titleKey: 'service2Title', descriptionKey: 'service2Description', icon: 'CriblIcon' },
  { titleKey: 'service5Title', descriptionKey: 'service5Description', icon: 'Clipboard' },
] as const;

export const PUBLICATION_ITEMS = [] as const;
