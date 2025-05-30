
"use client";

import type { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SITE_CONFIG, type CompanyLogo } from '@/constants/site';
import { Wrench, Heart } from 'lucide-react'; 
import Link from 'next/link';

const CustomersSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Find the Schiphol logo
  const schipholLogo = SITE_CONFIG.companyLogos.find(logo => logo.name === 'Schiphol Airport');

  return (
    <section id="customers" className="bg-background section-min-height">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-x-1">
            {t('customersTitlePart1')}
            <span className="inline-block mx-0.5"> {/* Adjusted for tighter spacing */}
              <Heart className="h-[1.375rem] w-[1.375rem] text-red-500 fill-red-500 relative -top-1.5" /> {/* Adjusted size and vertical position */}
            </span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-4xl mx-auto">
            {t('customersDescription')}
          </p>
        </AnimatedSection>
        
        {schipholLogo && (
          <AnimatedSection delay="delay-100" className="mt-8 mb-10 flex justify-center">
            <div 
              className="logo-item-wrapper flex-shrink-0 w-48 h-24 flex items-center justify-center p-4 bg-card rounded-lg shadow-md"
            >
              <Image 
                src={schipholLogo.src as StaticImageData | string} 
                alt={schipholLogo.name} 
                width={schipholLogo.width || 140}
                height={schipholLogo.height || 55}
                className="object-contain"
                data-ai-hint={schipholLogo.dataAiHint}
              />
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay="delay-200" className="mt-8">
          <p className="text-sm italic text-foreground/70 max-w-4xl mx-auto">
            {t('customersLinkedInClarification')}
            {' '}
            <Link href={SITE_CONFIG.linkedIn} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              LinkedIn
            </Link>.
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-300" className="mt-10">
          <p className="text-lg font-semibold text-foreground max-w-4xl mx-auto flex items-center justify-center gap-2">
            <Wrench className="h-5 w-5 text-accent" />
            {t('customersCTAChallenge')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-400" className="mt-2">
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
            {t('customersCTAPleasure')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomersSection;
