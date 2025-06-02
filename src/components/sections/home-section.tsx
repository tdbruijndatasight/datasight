
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

  const backgroundImageUrl = "https://static.vecteezy.com/system/resources/previews/014/689/892/large_2x/abstract-network-technology-geometric-dots-network-clipart-connecting-dots-and-lines-global-network-connection-digital-technology-with-plexus-background-illustration-vector.jpg";

  return (
    <section
      id="home"
      className="section-min-height relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      {/* Overlay for tint and blur to improve text readability over the background image */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Content wrapper: relative z-10 to sit on top of the overlay, container for layout, and padding for header offset */}
      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 items-center pt-28 pb-12 md:py-16"> {/* Padding ensures content is below fixed header */}
        <AnimatedSection className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <AnimatedHomeTitle onSubtitleAnimate={handleSubtitleAnimate} />
          <p className={cn(
            "text-lg md:text-xl text-white/90 font-semibold subtitle-line-base", // Changed text color for better contrast
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

        <AnimatedSection delay="delay-200" className="relative z-10 flex justify-center"> {/* Ensure card is also z-10 if it wasn't implicitly */}
          <Card className="shadow-xl border-primary/20 backdrop-blur-sm bg-card/80"> {/* Card has its own semi-transparent background */}
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
