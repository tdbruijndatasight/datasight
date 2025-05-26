
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedHomeTitle from '@/components/animated-home-title';
import { cn } from '@/lib/utils';

const HomeSection: React.FC = () => {
  const { t } = useLanguage();
  const [animateSubtitleClass, setAnimateSubtitleClass] = useState("");

  const handleSubtitleAnimate = () => {
    setAnimateSubtitleClass("subtitle-highlight-animate");
    setTimeout(() => {
      setAnimateSubtitleClass(""); // Remove class to allow re-triggering if needed
    }, 600); // Duration of animation matches CSS (0.6s)
  };

  return (
    <section id="home" className="bg-gradient-to-br from-background to-secondary section-min-height">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="space-y-6 text-center md:text-left">
          <AnimatedHomeTitle onSubtitleAnimate={handleSubtitleAnimate} />
          <p className={cn(
            "text-lg md:text-xl text-foreground/80 font-semibold",
            animateSubtitleClass
          )}>
            {t('homeSubtitle')}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105 group">
            <Link href="#contact">
              {t('homeCTA')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <Card className="shadow-xl border-primary/20 backdrop-blur-sm bg-card/80">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t('homeAboutMeTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>{t('homeAboutMeP1')}</p>
              <p>{t('homeAboutMeP2')}</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HomeSection;
