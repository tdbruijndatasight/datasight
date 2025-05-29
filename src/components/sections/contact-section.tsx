
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SITE_CONFIG } from '@/constants/site';
import { Mail, Phone, Linkedin as LinkedinIconLucide, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const contactItems = [
    {
      icon: <Mail className="h-8 w-8 text-accent" />,
      labelKey: 'contactEmail',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      buttonLabelKey: 'sendMessage',
    },
    {
      icon: <Phone className="h-8 w-8 text-accent" />,
      labelKey: 'contactPhone',
      value: SITE_CONFIG.phone,
      href: `https://wa.me/${SITE_CONFIG.phone.replace(/\s|\+/g, '')}`, // WhatsApp link for the button
      buttonLabelKey: 'openWhatsApp',
    },
    {
      icon: <LinkedinIconLucide className="h-8 w-8 text-accent" />,
      labelKey: 'contactLinkedIn',
      value: t('by') + ' Tom de Bruijn',
      href: SITE_CONFIG.linkedIn,
      buttonLabelKey: 'viewProfile',
    },
  ];

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: t('emailCopiedSuccess'),
        duration: 3000,
      });
    } catch (err) {
      console.error('Failed to copy email: ', err);
      toast({
        title: t('copyErrorTitle'),
        description: t('copyErrorDescription'),
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => {
            const isEmailItem = item.labelKey === 'contactEmail';
            const isPhoneItem = item.labelKey === 'contactPhone';

            return (
              <AnimatedSection key={index} delay={`delay-${index * 100}`}>
                <Card className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <div className="p-3 bg-accent/20 rounded-full mb-4 inline-block">
                       {React.cloneElement(item.icon, { className: "h-8 w-8 text-accent" })}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">{t(item.labelKey)}</h3>
                    
                    {isEmailItem ? (
                      <p
                        className="text-accent mb-4 break-all cursor-pointer hover:underline"
                        onClick={() => handleCopyEmail(item.value)}
                        title={t('copyToClipboardTooltip')}
                      >
                        {item.value}
                      </p>
                    ) : isPhoneItem ? (
                      <a
                        href={`tel:${item.value.replace(/\s|\+/g, '')}`}
                        className="text-accent mb-4 break-all hover:underline"
                        title={t('callDirectlyTooltip')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-accent mb-4 break-all">{item.value}</p>
                    )}

                    <Button variant="outline" asChild className="mt-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                      <Link href={item.href} target="_blank" rel="noopener noreferrer">
                        {t(item.buttonLabelKey)}
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
        <AnimatedSection className="text-center mt-16 text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} DataSight - Tom de Bruijn. All rights reserved. | KVK-nummer: 93353413</p>
          <div className="mt-4 space-x-2 md:space-x-4">
            <Link href="/privacy" className="hover:underline text-sm font-medium text-primary-foreground/80">
              {t('legalPrivacy')}
            </Link>
            <span className="text-sm">|</span>
            <Link href="/disclaimer" className="hover:underline text-sm font-medium text-primary-foreground/80">
              {t('legalDisclaimer')}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default ContactSection;
