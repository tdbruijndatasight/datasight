
"use client";

import React from 'react';
import Image from 'next/image';
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
      href: `https://wa.me/${SITE_CONFIG.phone.replace(/\s|\+/g, '')}`, 
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
      <div className="container mx-auto relative">
        {/* Desktop Pen - Positioned on the dividing line */}
        <div className="absolute -top-[4rem] transform -translate-y-1/2 z-10 pointer-events-none hidden md:block w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 md:right-0">
            <Image
                src="/Pen_DataSight_GPT.png"
                alt="Decorative pen"
                fill={true}
                style={{ objectFit: 'contain' }}
                sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 8rem"
            />
        </div>

        <AnimatedSection className="text-center mb-12 relative z-20">
          <div className="flex items-center justify-center md:block">
            <h2 className="text-3xl md:text-4xl font-bold md:mb-4">
              {t('contactTitle')}
            </h2>
            {/* Mobile Pen - naast de titel */}
            <div className="relative w-16 h-16 ml-2 md:hidden shrink-0">
              <Image
                src="/Pen_DataSight_GPT.png"
                alt="" 
                fill={true}
                style={{ objectFit: 'contain' }}
                sizes="4rem"
              />
            </div>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mt-2 md:mt-0">
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
        <AnimatedSection className="text-center mt-16 text-primary-foreground/80 text-xs space-y-1">
          <p>&copy; 2024 DataSight - Tom de Bruijn. All rights reserved.</p>
          <p>KVK: 93353413 | BTW-ID: NL005019445B05</p>
          <div className="mt-4 space-x-2 md:space-x-4 !pt-2">
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
