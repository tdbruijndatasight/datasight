"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SITE_CONFIG } from '@/constants/site';
import { Card, CardContent } from '@/components/ui/card';

const CustomersSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="customers" className="bg-background section-min-height">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('customersTitle')}
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            {t('customersDescription')}
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-200">
          <div className="relative">
            <div 
              className="flex overflow-x-auto space-x-8 pb-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary"
              style={{ scrollbarWidth: 'thin' }} // For Firefox
            >
              {SITE_CONFIG.companyLogos.map((logo, index) => (
                <Card 
                  key={index} 
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center p-4 bg-card shadow-md hover:shadow-lg transition-shadow duration-300 border-transparent hover:border-primary/30"
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    width={120} 
                    height={60} 
                    className="object-contain"
                    data-ai-hint={logo.dataAiHint}
                  />
                </Card>
              ))}
            </div>
            {/* Optional: Add gradient overlays for a fading effect at the edges if desired */}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomersSection;
