
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { BLOG_ITEMS } from '@/constants/site';
import { ArrowRight, BookOpen } from 'lucide-react';

const BlogsSection: React.FC = () => {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${year}/${month}`;
  };

  return (
    <section id="blogs" className="bg-background section-min-height">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-accent" />
            {t('blogsTitle')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('blogsSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {BLOG_ITEMS.length > 0 ? (
            BLOG_ITEMS.map((item, index) => (
              <AnimatedSection key={index} delay={`delay-${index * 100}`}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-primary/20 flex flex-col md:flex-row">
                  <div className="md:w-1/3 xl:w-1/4 relative h-64 md:h-auto flex-shrink-0">
                    <Image
                      src={item.imageSrc}
                      alt={t(item.titleKey)}
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      data-ai-hint={item.dataAiHint}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <time className="text-sm text-muted-foreground mb-2">{formatDate(item.date)}</time>
                      <CardTitle className="text-xl text-primary">{t(item.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-foreground/90 whitespace-pre-line">
                        {t(item.teaserKey)}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="text-accent hover:text-accent/80 p-0 group">
                        <Link href={`/blog/${item.slug}`}>
                          {t('readMore')}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </AnimatedSection>
            ))
          ) : (
            <AnimatedSection className="text-center text-foreground/70 mt-8">
              <p>No blogs available at the moment. Check back soon!</p>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
