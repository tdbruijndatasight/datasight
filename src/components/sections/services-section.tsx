
"use client";

import React, { useState } from 'react';
import type { Key } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { SERVICE_ITEMS, type ServiceItemConstant } from '@/constants/site';
import { SplunkIcon, CriblIcon, DataStrategyIcon, AiSolutionIcon } from '@/components/icons/custom-icons';
import { BarChartBig, Database, Settings, Brain, Clipboard, X as CloseIcon, ArrowRight } from 'lucide-react';
import type { TranslationContent } from '@/lib/translations';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Map icon names to actual components
const iconComponents: { [key: string]: React.ElementType } = {
  SplunkIcon,
  CriblIcon,
  DataStrategyIcon,
  AiSolutionIcon,
  BarChartBig,
  Database,
  Settings,
  Brain,
  Clipboard,
};

interface ServiceItemWithDetails extends ServiceItemConstant {
  detailTitleKey: keyof TranslationContent;
  detailDescKey: keyof TranslationContent;
  detailBulletKeys: (keyof TranslationContent)[];
  detailCTAKey: keyof TranslationContent;
}


const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItemWithDetails | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const serviceItemsWithDetails: ServiceItemWithDetails[] = SERVICE_ITEMS.map((item, index) => ({
    ...item,
    detailTitleKey: `service${index + 1}DetailTitle` as keyof TranslationContent,
    detailDescKey: `service${index + 1}DetailDesc` as keyof TranslationContent,
    detailBulletKeys: [
      `service${index + 1}DetailBullet1` as keyof TranslationContent,
      `service${index + 1}DetailBullet2` as keyof TranslationContent,
      `service${index + 1}DetailBullet3` as keyof TranslationContent,
      `service${index + 1}DetailBullet4` as keyof TranslationContent,
      `service${index + 1}DetailBullet5` as keyof TranslationContent,
    ],
    detailCTAKey: `service${index + 1}DetailCTA` as keyof TranslationContent,
  }));


  const handleServiceClick = (service: ServiceItemWithDetails) => {
    setSelectedService(service);
    setIsOverlayOpen(true);
  };

  return (
    <>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {serviceItemsWithDetails.map((service, index) => {
              const IconComponent = iconComponents[service.icon] || Brain;
              return (
                <AnimatedSection key={index} delay={`delay-${index * 100}`}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className={cn(
                      "h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg",
                      "transition-transform duration-200 ease-in-out active:scale-95"
                    )}
                    aria-label={`Learn more about ${t(service.titleKey)}`}
                  >
                    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-primary/20 flex flex-col group cursor-pointer">
                      <CardHeader className="items-center text-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block transition-transform duration-300 group-hover:scale-110">
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
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <Dialog open={isOverlayOpen} onOpenChange={setIsOverlayOpen}>
          <DialogContent className="sm:max-w-2xl bg-card border-primary/30 text-card-foreground p-6 md:p-8">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
                {t(selectedService.detailTitleKey)}
              </DialogTitle>
            </DialogHeader>
            <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary">
                <p className="text-base text-foreground/90">{t(selectedService.detailDescKey)}</p>
                <ul className="list-disc pl-5 space-y-1.5 text-foreground/80">
                    {selectedService.detailBulletKeys.map((bulletKey, i) => {
                        const bulletText = t(bulletKey);
                        // Only render li if bulletText is not empty or just the key itself (fallback)
                        return bulletText && bulletText !== bulletKey ? (
                             <li key={i} className="text-sm">{bulletText}</li>
                        ) : null;
                    })}
                </ul>
                <div className="pt-4">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md group font-semibold">
                        <Link href="/#contact" onClick={() => setIsOverlayOpen(false)}>
                            {t(selectedService.detailCTAKey)}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ServicesSection;
