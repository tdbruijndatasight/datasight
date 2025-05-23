
"use client";

import Header from '@/components/layout/header';
import ContactSection from '@/components/sections/contact-section';
import { SITE_CONFIG } from '@/constants/site'; // Keep if SITE_CONFIG.name is used, or remove if not.
import { useLanguage } from '@/hooks/use-language';

export default function DisclaimerPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-20">
        <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border">
          <h1 className="text-3xl font-bold text-primary mb-6">{t('disclaimerPageTitle')}</h1>
          {/* Updated to use SITE_CONFIG.name if needed, or make it static text */}
          <p className="text-sm text-muted-foreground mb-6"><strong>{t('disclaimerValidFrom')}</strong></p>

          <div className="space-y-4 text-foreground/90">
            <p>{t('disclaimerIntroP1').replace('{SITE_CONFIG.name}', SITE_CONFIG.name)}</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{t('disclaimerAccuracyTitle')}</h2>
            <p>{t('disclaimerAccuracyP1')}</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{t('disclaimerWebsiteAvailabilityTitle')}</h2>
            <p>{t('disclaimerWebsiteAvailabilityP1')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('disclaimerWebsiteAvailabilityL1')}</li>
              <li>{t('disclaimerWebsiteAvailabilityL2')}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{t('disclaimerExternalLinksTitle')}</h2>
            <p>{t('disclaimerExternalLinksP1')}</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{t('disclaimerElectronicCommTitle')}</h2>
            <p>{t('disclaimerElectronicCommP1')}</p>
            
            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{t('disclaimerNoProAdviceTitle')}</h2>
            <p>{t('disclaimerNoProAdviceP1')}</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{t('disclaimerLimitationLiabilityTitle')}</h2>
            <p>{t('disclaimerLimitationLiabilityP1')}</p>

            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{t('disclaimerChangesDisclaimerTitle')}</h2>
            <p>{t('disclaimerChangesDisclaimerP1')}</p>
          </div>
        </article>
      </main>
      <ContactSection />
    </>
  );
}

    