"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { PUBLICATION_ITEMS } from '@/constants/site';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="publications" className="bg-background section-min-height">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('publicationsTitle')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t('publicationsSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto"> {/* Centered single column for one publication */}
          {PUBLICATION_ITEMS.map((item, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 100}`}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-primary/20 flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image 
                    src={item.imageSrc} 
                    alt={t(item.titleKey)} 
                    layout="fill" 
                    objectFit="cover"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{t(item.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/90">
                      {t(item.descriptionKey)}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-accent hover:text-accent/80 p-0 group">
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        {t('viewPublication')}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
         {PUBLICATION_ITEMS.length === 0 && (
          <AnimatedSection className="text-center text-foreground/70 mt-8">
            <p>No publications available at the moment. Check back soon!</p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
