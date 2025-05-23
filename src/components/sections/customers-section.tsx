
"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SITE_CONFIG } from '@/constants/site';
// Removed Card import as it's no longer used directly for individual logos here

const CustomersSection: React.FC = () => {
  const { t } = useLanguage();
  const logos = SITE_CONFIG.companyLogos;

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
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`} // Unique key for each item, including duplicates
                  className="logo-item-wrapper flex-shrink-0 w-48 h-24 flex items-center justify-center p-4 mx-4 bg-card rounded-lg shadow-md"
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    width={120} // Intrinsic width of the image
                    height={60} // Intrinsic height of the image
                    className="object-contain"
                    data-ai-hint={logo.dataAiHint}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomersSection;
