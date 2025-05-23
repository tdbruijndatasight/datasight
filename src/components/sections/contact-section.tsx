"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SITE_CONFIG } from '@/constants/site';
import { Mail, Phone, Linkedin as LinkedinIconLucide, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: <Mail className="h-8 w-8 text-accent" />,
      label: t('contactEmail'),
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: <Phone className="h-8 w-8 text-accent" />,
      label: t('contactPhone'),
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <LinkedinIconLucide className="h-8 w-8 text-accent" />,
      label: t('contactLinkedIn'),
      value: t('by') + ' Tom de Bruijn', // Or simply "Profile"
      href: SITE_CONFIG.linkedIn,
    },
  ];

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
          {contactItems.map((item, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="p-3 bg-accent/20 rounded-full mb-4 inline-block">
                     {React.cloneElement(item.icon, { className: "h-8 w-8 text-accent" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">{item.label}</h3>
                  <p className="text-primary-foreground/90 mb-4 break-all">{item.value}</p>
                  <Button variant="outline" asChild className="mt-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label === t('contactLinkedIn') ? 'View Profile' : 'Send Message'} 
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-16 text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} DataSight Portfolio - Tom de Bruijn. All rights reserved.</p>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default ContactSection;
