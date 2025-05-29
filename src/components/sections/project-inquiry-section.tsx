
"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  'inquiryPlaceholder1', 'inquiryPlaceholder2', 'inquiryPlaceholder3', 'inquiryPlaceholder4', 'inquiryPlaceholder5',
  'inquiryPlaceholder6', 'inquiryPlaceholder7', 'inquiryPlaceholder8', 'inquiryPlaceholder9', 'inquiryPlaceholder10',
  'inquiryPlaceholder11', 'inquiryPlaceholder12', 'inquiryPlaceholder13', 'inquiryPlaceholder14', 'inquiryPlaceholder15',
  'inquiryPlaceholder16',
];

const keysToRemoveFromPlaceholders = new Set<keyof TranslationContent>([
  'inquiryPlaceholder4', 'inquiryPlaceholder10', 'inquiryPlaceholder13', 'inquiryPlaceholder15'
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


  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      question: "",
    },
  });

  // Effect for handling form interaction to stop animation
  useEffect(() => {
    if (isFormInteracted && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Clear the ref to prevent further operations on it
    }
  }, [isFormInteracted]);

  // Effect for subtitle animation
  useEffect(() => {
    if (isFormInteracted || activePlaceholderKeys.length === 0) {
      if (intervalRef.current) { // Ensure interval is cleared if interaction happened or no keys
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return; // Stop if form interacted or no keys
    }

    // Initialize or reset animation state
    let localCurrentIndex = 0;
    // Ensure currentSubtitleIndex is reset if language changes or activePlaceholderKeys list changes
    // This effect hook is sensitive to 'language' and 't', so it will re-initialize on language change.
    setAnimatedSubtitle(t(activePlaceholderKeys[localCurrentIndex]));
    setCurrentSubtitleIndex(localCurrentIndex); // Sync state
    setIsSubtitleVisible(true);

    intervalRef.current = setInterval(() => {
      setIsSubtitleVisible(false); // Start fade-out

      setTimeout(() => {
        // Check isFormInteracted again before updating state
        // This ensures that if interaction happened during the fade-out, we don't proceed
        if (intervalRef.current === null) return; // Animation was stopped

        localCurrentIndex = (localCurrentIndex + 1) % activePlaceholderKeys.length;
        setAnimatedSubtitle(t(activePlaceholderKeys[localCurrentIndex]));
        setCurrentSubtitleIndex(localCurrentIndex); // Sync state

        // Short timeout to allow CSS to apply hidden state before transitioning to visible
        setTimeout(() => {
           if (intervalRef.current === null) return; // Animation was stopped
          setIsSubtitleVisible(true); // Start fade-in
        }, 50); // Small delay for fade-in effect
      }, 1000); // Duration of fade-out (1s)
    }, 12000); // 11s visible + 1s fade-out cycle

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, t, isFormInteracted]); // Dependencies: t and language will trigger re-initialization. isFormInteracted stops/starts.

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
          description: `${result.message || t('contactFormSuccessMessage')} ${t('contactFormResponseTime')}`,
          variant: 'default',
          duration: 7000,
        });
        form.reset();
        setIsFormInteracted(false); // Optionally reset interaction state after successful submission
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
    <section id="inquiry" className="bg-background section-min-height">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Send className="h-8 w-8 text-accent" />
            {t('projectInquiryTitle')}
          </h2>
          <p className={cn(
            "text-lg text-foreground/80 max-w-2xl mx-auto min-h-[4em] md:min-h-[3em]",
            "transition-opacity duration-1000 ease-in-out whitespace-pre-line",
            isSubtitleVisible && !isFormInteracted ? "opacity-100" : "opacity-0" // Hide if form interacted or during fade
          )}>
            {animatedSubtitle || (activePlaceholderKeys.length > 0 ? t(activePlaceholderKeys[0]) : "")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-200" className="relative">
          <div className="max-w-2xl mx-auto relative">
            <Card className="shadow-xl bg-card border-primary/20 relative z-0">
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
