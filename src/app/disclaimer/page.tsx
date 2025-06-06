
"use client";

import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import ContactSection from '@/components/sections/contact-section';
import { SITE_CONFIG } from '@/constants/site'; 
import { useLanguage } from '@/hooks/use-language';

export default function DisclaimerPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-20">
        <article className="relative max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border">
          <Button 
            asChild 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
          >
            <Link href="/#home" aria-label={t('closeButton')}>
              <X className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-primary mb-6">{t('disclaimerPageTitle')}</h1>
          <p className="text-sm text-muted-foreground mb-6"><strong>{t('disclaimerValidFrom')}</strong></p>

          <div className="space-y-4 text-sm text-foreground/90">
            <p>{t('disclaimerIntroP1').replace('{SITE_CONFIG.name}', SITE_CONFIG.name)}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('disclaimerAccuracyTitle')}</h3>
            <p>{t('disclaimerAccuracyP1')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('disclaimerWebsiteAvailabilityTitle')}</h3>
            <p>{t('disclaimerWebsiteAvailabilityP1')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('disclaimerWebsiteAvailabilityL1')}</li>
              <li>{t('disclaimerWebsiteAvailabilityL2')}</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('disclaimerExternalLinksTitle')}</h3>
            <p>{t('disclaimerExternalLinksP1')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('disclaimerElectronicCommTitle')}</h3>
            <p>{t('disclaimerElectronicCommP1')}</p>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('disclaimerNoProAdviceTitle')}</h3>
            <p>{t('disclaimerNoProAdviceP1')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('disclaimerLimitationLiabilityTitle')}</h3>
            <p>{t('disclaimerLimitationLiabilityP1')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('disclaimerChangesDisclaimerTitle')}</h3>
            <p>{t('disclaimerChangesDisclaimerP1')}</p>
          </div>
        </article>
      </main>
      <ContactSection />
    </>
  );
}
