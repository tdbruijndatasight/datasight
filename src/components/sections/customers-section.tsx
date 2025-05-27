
"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SITE_CONFIG, type CompanyLogo } from '@/constants/site';

const CustomersSection: React.FC = () => {
  const { t } = useLanguage();
  const logos: CompanyLogo[] = SITE_CONFIG.companyLogos;

  // Default dimensions if not specified on the logo object
  const defaultWidth = 120;
  const defaultHeight = 50;

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
          <div className="logo-carousel-container">
            <div className="logo-carousel-track">
              {/* Render logos twice for a seamless loop */}
              {[...logos, ...logos].map((logo, index) => {
                return (
                  <div 
                    key={`${logo.name}-${index}`} // Unique key for each item, including duplicates
                    className="logo-item-wrapper flex-shrink-0 w-48 h-24 flex items-center justify-center p-4 mx-4 bg-card rounded-lg shadow-md"
                  >
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      width={logo.width || defaultWidth} 
                      height={logo.height || defaultHeight} 
                      className="object-contain"
                      data-ai-hint={logo.dataAiHint}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomersSection;
