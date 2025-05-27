
import type { Locale, TranslationContent } from '@/lib/translations';
// Import of StaticImageData is no longer needed if all src are strings
// import type { StaticImageData } from 'next/image';

// Removed direct logo imports as they are now in public/images/logos/
// import gemeenteDenHaagLogo from '@/logos/gemeente-den-haag.svg'; // Example of removed import
// import icsLogo from '@/logos/ics.svg';
// import rabobankLogo from '@/logos/rabobank.svg';
// import schipholLogo from '@/logos/schiphol.svg';
// import ikeaLogo from '@/logos/ikea.svg';
// import uwvLogo from '@/logos/uwv.svg';


export interface NavItem {
  labelKey: keyof TranslationContent;
  href: string;
  id: string;
}

export interface CompanyLogo {
  name: string;
  src: string; // Changed from string | StaticImageData to just string
  dataAiHint?: string;
  width?: number;
  height?: number;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'navHome', href: '/#home', id: 'home' },
  { labelKey: 'navCustomers', href: '/#customers', id: 'customers' },
  { labelKey: 'navServices', href: '/#services', id: 'services' },
  // { labelKey: 'navPublications', href: '/#publications', id: 'publications' }, // Hidden
  { labelKey: 'navProjectInquiry', href: '/#inquiry', id: 'inquiry' },
  { labelKey: 'navContact', href: '/#contact', id: 'contact' },
];

export const SITE_CONFIG = {
  name: 'DataSight Portfolio',
  email: 'info.tomdebruijn@gmail.com',
  phone: '+31653483883',
  linkedIn: 'https://www.linkedin.com/in/tcdebruijn/',
  companyLogos: [
    { name: 'Schiphol Airport', src: '/images/logos/schiphol.svg', dataAiHint: 'Schiphol Airport logo', width: 140, height: 55 },
    { name: 'Rabobank', src: '/images/logos/rabobank.svg', dataAiHint: 'Rabobank logo', width: 140, height: 55 },
    { name: 'IKEA', src: '/images/logos/ikea.svg', dataAiHint: 'IKEA logo', width: 140, height: 55 },
    { name: 'ICS Cards', src: '/images/logos/ics.svg', dataAiHint: 'ICS logo', width: 140, height: 55 },
    { name: 'UWV', src: '/images/logos/uwv.svg', dataAiHint: 'UWV logo', width: 100, height: 40 },
    { name: 'Gemeente Den Haag',  src: '/images/logos/gemeente-den-haag.svg', dataAiHint: 'Den Haag logo', width: 140, height: 55 },
  ] as CompanyLogo[],
  footerLogos: [ // Assuming these paths also need updating if they were meant to be used
    { name: 'Schiphol Airport', src: '/images/logos/schiphol.svg', dataAiHint: 'Schiphol Airport logo' },
    { name: 'UWV', src: '/images/logos/uwv.svg', dataAiHint: 'UWV logo' },
  ]
};

export const SERVICE_ITEMS = [
  { titleKey: 'service1Title', descriptionKey: 'service1Description', icon: 'SplunkIcon' },
  { titleKey: 'service2Title', descriptionKey: 'service2Description', icon: 'CriblIcon' },
  { titleKey: 'service3Title', descriptionKey: 'service3Description', icon: 'DataStrategyIcon' },
  { titleKey: 'service4Title', descriptionKey: 'service4Description', icon: 'AiSolutionIcon' },
  { titleKey: 'service5Title', descriptionKey: 'service5Description', icon: 'Clipboard' },
] as const;

// Hidden Publications
// export const PUBLICATION_ITEMS = [
//   {
//     titleKey: 'publication1Title',
//     descriptionKey: 'publication1Description',
//     link: '#',
//     imageSrc: 'https://placehold.co/600x400.png',
//     dataAiHint: 'data report'
//   }
// ];
export const PUBLICATION_ITEMS = [] as const; // Ensure it's an empty array if section is hidden

    