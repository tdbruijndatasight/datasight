"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SERVICE_ITEMS } from '@/constants/site';
import { SplunkIcon, CriblIcon, DataStrategyIcon, AiSolutionIcon } from '@/components/icons/custom-icons'; // Assuming these are custom or from a library
import { BarChartBig, Database, Settings, Brain } from 'lucide-react'; // Fallback icons

// Map icon names to actual components
const iconComponents: { [key: string]: React.ElementType } = {
  SplunkIcon,
  CriblIcon,
  DataStrategyIcon,
  AiSolutionIcon,
  BarChartBig, // Fallback
  Database,     // Fallback
  Settings,     // Fallback
  Brain,        // Fallback
};


const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-secondary section-min-height">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_ITEMS.map((service, index) => {
            const IconComponent = iconComponents[service.icon] || Brain; // Default to Brain icon if specific one not found
            return (
              <AnimatedSection key={index} delay={`delay-${index * 100}`}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-primary/20 flex flex-col">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{t(service.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <CardDescription className="text-foreground/90">
                      {t(service.descriptionKey)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
