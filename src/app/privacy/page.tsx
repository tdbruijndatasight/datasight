
"use client";

import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/constants/site';
import Header from '@/components/layout/header';
import ContactSection from '@/components/sections/contact-section';
import { useLanguage } from '@/hooks/use-language';

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-primary mb-6">{t('privacyPageTitle')}</h1>
          <p className="text-sm text-muted-foreground mb-6"><strong>{t('privacyLastUpdated')}</strong></p>
          
          <div className="space-y-4 text-sm text-foreground/90">
            <p>{t('privacyIntro')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacyInfoCollectTitle')}</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('privacyInfoCollectGenUsage')}</li>
              <li>{t('privacyInfoCollectContact')}</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacyHowWeUseTitle')}</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('privacyHowWeUseRespond')}</li>
              <li>{t('privacyHowWeUseImprove')}</li>
              <li>{t('privacyHowWeUseCookies')}</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacyInfoSharingTitle')}</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('privacyInfoSharingNoSell')}</li>
              <li>{t('privacyInfoSharingGov')}</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacyThirdPartyLinksTitle')}</h3>
            <p>{t('privacyThirdPartyLinksP1')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacySecurityTitle')}</h3>
            <p>{t('privacySecurityP1')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacyChangesPolicyTitle')}</h3>
            <p>{t('privacyChangesPolicyP1')}</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacyContactUsTitle')}</h3>
            <p>
              {t('privacyContactUsP1Prefix')}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent hover:underline">{SITE_CONFIG.email}</a>
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{t('privacyGoverningLawTitle')}</h3>
            <p>{t('privacyGoverningLawP1')}</p>
          </div>
        </article>
      </main>
      <ContactSection />
    </>
  );
}
