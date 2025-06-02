
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedHomeTitle from '@/components/animated-home-title';
import { cn } from '@/lib/utils';
import profilePicture from '@/images/tom-de-bruijn-profile.jpeg';

const HomeSection: React.FC = () => {
  const { t } = useLanguage();
  const [shouldAnimateSubtitleLine, setShouldAnimateSubtitleLine] = useState(false);

  const handleSubtitleAnimate = () => {
    setShouldAnimateSubtitleLine(true);
  };

  return (
    <section
      id="home"
      className="section-min-height relative overflow-hidden bg-background md:py-12 pt-24 pb-8"
    >
      {/* Geometric background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{ backgroundImage: `url('/geometrical_bg_tom.png')` }}
        data-ai-hint="geometric abstract background"
      ></div>

      {/* Overlay for tint and blur on top of the geometric image */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

      {/* Content wrapper: relative z-20 to sit on top of all overlays */}
      <div className="relative z-20 container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <AnimatedHomeTitle onSubtitleAnimate={handleSubtitleAnimate} />
          <p className={cn(
            "text-lg md:text-xl text-white/90 font-semibold subtitle-line-base",
            shouldAnimateSubtitleLine && "is-drawing"
          )}>
            {t('homeSubtitle')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105 group font-semibold"
          >
            <Link href="#contact">
              {t('homeCTA')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay="delay-200" className="flex justify-center">
          <Card className="shadow-xl border-primary/20 backdrop-blur-sm bg-card/80">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t('homeAboutMeTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/90">
              <div className="sm:float-left sm:mr-4 mb-3 sm:-ml-[84px] flex-shrink-0">
                <Image
                  src={profilePicture}
                  alt="Tom de Bruijn"
                  width={120}
                  height={120}
                  quality={100}
                  className="rounded-full shadow-lg border-2 border-primary/50"
                  priority
                  data-ai-hint="profile person"
                />
              </div>
              <div className="overflow-hidden"> {/* Clearfix for float */}
                <p className={cn("font-semibold text-foreground")}>{t('homeAboutMeP1')}</p>
                <p className="mt-3">{t('homeAboutMeP2')}</p>
                <p className="mt-3">{t('homeAboutMeP3')}</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HomeSection;
