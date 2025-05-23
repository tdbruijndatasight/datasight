"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HomeSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-gradient-to-br from-background to-secondary section-min-height">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
            {t('homeTitle')}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-semibold">
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
