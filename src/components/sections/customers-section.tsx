
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
            <span className="relative inline-block mr-1"> {/* Added mr-1 for spacing on the right */}
              <Heart className="h-[1.375rem] w-[1.375rem] text-red-500 fill-red-500 relative -top-1.5" /> {/* Adjusted vertical position */}
            </span>
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-4xl mx-auto"> {/* Changed to max-w-4xl */}
            {t('customersDescription')}
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-200">
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
                      width={logo.width || 120} 
                      height={logo.height || 50}
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

    


    