
"use client";

import type { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SITE_CONFIG, type CompanyLogo } from '@/constants/site';
import { Heart } from 'lucide-react'; // Import Heart icon

const CustomersSection: React.FC = () => {
  const { t } = useLanguage();
  const logos: CompanyLogo[] = SITE_CONFIG.companyLogos;

  return (
    <section id="customers" className="bg-background section-min-height">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-1">
            {t('customersTitlePart1')}
            <span className="relative inline-block mr-1">
              <Heart className="h-[1.375rem] w-[1.375rem] text-red-500 fill-red-500 relative -top-1.5" />
            </span>
            {/* {t('customersTitlePart2')} // Removed */}
            {/* <span className="ml-1">{t('customersTitlePart3')}</span> // Removed */}
          </h2>
          <p className="text-lg text-foreground/80 mb-2 max-w-4xl mx-auto">
            {t('customersDescription')}
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-200" className="mt-12">
          <div className="logo-carousel-container">
            <div className="logo-carousel-track">
              {/* Render logos twice for a seamless loop */}
              {[...logos, ...logos].map((logo, index) => {
                const logoSrc = logo.src as StaticImageData | string; // Type assertion for src
                return (
                  <div 
                    key={`${logo.name}-${index}`} // Unique key for each item, including duplicates
                    className="logo-item-wrapper flex-shrink-0 w-48 h-24 flex items-center justify-center p-4 mx-4 bg-card rounded-lg shadow-md"
                  >
                    <Image 
                      src={logoSrc} 
                      alt={logo.name} 
                      width={logo.width || 140} // Default width if not specified
                      height={logo.height || 55} // Default height if not specified
                      className="object-contain"
                      data-ai-hint={logo.dataAiHint}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
         <AnimatedSection delay="delay-300" className="mt-8">
            <p className="text-sm text-foreground/70 max-w-4xl mx-auto">
                {t('customersClarificationText')}
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomersSection;

    
