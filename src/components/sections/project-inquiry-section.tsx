
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { TranslationContent } from '@/lib/translations';

const allOriginalPlaceholderKeys: (keyof TranslationContent)[] = [
  'inquiryPlaceholder1', 'inquiryPlaceholder2', 'inquiryPlaceholder3', 'inquiryPlaceholder5',
  'inquiryPlaceholder6', 'inquiryPlaceholder7', 'inquiryPlaceholder8', 'inquiryPlaceholder9',
  'inquiryPlaceholder11', 'inquiryPlaceholder12', 'inquiryPlaceholder14', 'inquiryPlaceholder16',
];

const keysToRemoveFromPlaceholders = new Set<keyof TranslationContent>([
  // 'inquiryPlaceholder4', 'inquiryPlaceholder10', 'inquiryPlaceholder13', 'inquiryPlaceholder15' // Already removed
]);

const activePlaceholderKeys = allOriginalPlaceholderKeys.filter(
  key => !keysToRemoveFromPlaceholders.has(key)
);

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  question: z.string().min(30, { message: "Question must be at least 30 characters." }).max(2000, { message: "Question must be at most 2000 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const ProjectInquirySection: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [animatedSubtitle, setAnimatedSubtitle] = useState("");
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(true);
  const [isFormInteracted, setIsFormInteracted] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isFormInteractedRef = useRef(isFormInteracted);

  useEffect(() => {
    isFormInteractedRef.current = isFormInteracted;
  }, [isFormInteracted]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      question: "",
    },
  });

  useEffect(() => {
    if (!isFormInteracted) {
      setCurrentSubtitleIndex(0); 
    }
  }, [language, isFormInteracted]);


  useEffect(() => {
    if (isFormInteracted) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsSubtitleVisible(true); 
      return; 
    }

    if (activePlaceholderKeys.length === 0) {
      setAnimatedSubtitle(""); 
      return;
    }
    
    setAnimatedSubtitle(t(activePlaceholderKeys[currentSubtitleIndex] || activePlaceholderKeys[0]));
    setIsSubtitleVisible(true);

    intervalRef.current = setInterval(() => {
      setIsSubtitleVisible(false); 

      setTimeout(() => {
        if (!intervalRef.current || isFormInteractedRef.current ) {
          if (isFormInteractedRef.current) setIsSubtitleVisible(true); 
          return;
        }
        
        setCurrentSubtitleIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % activePlaceholderKeys.length;
          setAnimatedSubtitle(t(activePlaceholderKeys[nextIndex] || activePlaceholderKeys[0])); 
          setIsSubtitleVisible(true); 
          return nextIndex;
        });
      }, 1000); 
    }, 10000); 

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, t, isFormInteracted, currentSubtitleIndex]);


  const handleFocus = () => {
    setIsFormInteracted(true);
  };


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: t('contactFormSuccessTitle'),
          description: `${result.message || t('contactFormSuccessMessage')}`,
          variant: 'default',
          duration: 7000,
        });
        form.reset();
        setIsFormInteracted(false); 
      } else {
        toast({
          variant: "destructive",
          title: t('error'),
          description: result.message || t('contactFormError'),
        });
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast({
        variant: "destructive",
        title: t('error'),
        description: t('contactFormError'),
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="inquiry" className="bg-secondary section-min-height">
      <div className="container mx-auto relative">
        <div className="absolute -top-[4rem] transform -translate-y-1/2 z-10 pointer-events-none w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0">
            <Image
                src="/Coffee_Cup_DataSight.png"
                alt="Decorative coffee cup - AI Generated"
                layout="fill"
                objectFit="contain"
                data-ai-hint="coffee cup illustration"
            />
        </div>
        <AnimatedSection className="text-center mb-12 relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Send className="h-8 w-8 text-accent" />
            {t('projectInquiryTitle')}
          </h2>
           <p className={cn(
            "text-lg text-foreground/80 max-w-2xl mx-auto min-h-[4em] md:min-h-[3em]",
            "transition-opacity duration-1000 ease-in-out whitespace-pre-line",
            (isFormInteracted || isSubtitleVisible) ? "opacity-100" : "opacity-0"
          )}>
            {animatedSubtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-200" className="relative z-20">
          <div className="max-w-2xl mx-auto relative">
            <Card className="shadow-xl bg-card border-primary/20">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg text-primary">{t('emailLabel')}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t('emailPlaceholder')}
                              className="focus:ring-accent focus:border-accent"
                              {...field}
                              onFocus={handleFocus}
                              aria-label={t('emailLabel')}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg text-primary">{t('phoneLabel')} ({t('optionalLabel')})</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder={t('phonePlaceholder')}
                              className="focus:ring-accent focus:border-accent"
                              {...field}
                              onFocus={handleFocus}
                              aria-label={t('phoneLabel')}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="question"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg text-primary">{t('questionLabel')}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t('questionStaticPlaceholder')}
                              className="min-h-[150px] resize-y focus:ring-accent focus:border-accent"
                              {...field}
                              onFocus={handleFocus}
                              aria-label={t('questionLabel')}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t('submitInquiryLoading')}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          {t('submitInquiryButton')}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectInquirySection;
