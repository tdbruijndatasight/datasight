
"use client";

import React, { useState, useEffect } from 'react';
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

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  question: z.string().min(30, { message: "Question must be at least 30 characters." }).max(2000, { message: "Question must be at most 2000 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const placeholderKeys: (keyof typeof import('@/lib/translations').translations.en)[] = [
  'inquiryPlaceholder1', 'inquiryPlaceholder2', 'inquiryPlaceholder3', 'inquiryPlaceholder4', 'inquiryPlaceholder5',
  'inquiryPlaceholder6', 'inquiryPlaceholder7', 'inquiryPlaceholder8', 'inquiryPlaceholder9', 'inquiryPlaceholder10',
  'inquiryPlaceholder11', 'inquiryPlaceholder12', 'inquiryPlaceholder13', 'inquiryPlaceholder14', 'inquiryPlaceholder15',
  'inquiryPlaceholder16',
];

const ProjectInquirySection: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      question: "",
    },
  });

  useEffect(() => {
    // Set initial placeholder text based on current language and index
    setAnimatedPlaceholder(t(placeholderKeys[currentPlaceholderIndex]));
    setIsPlaceholderVisible(true); // Ensure initially visible

    const intervalId = setInterval(() => {
      setIsPlaceholderVisible(false); // Start fade out

      setTimeout(() => {
        setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderKeys.length);
      }, 800); // Wait for fade out (0.8s) to complete before changing text
    }, 4800); // Total cycle time: 4s visible + 0.8s fade out/in

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]); // Rerun effect if language changes to reset animation with new texts

  useEffect(() => {
    // This effect runs when currentPlaceholderIndex changes, to set the new text and fade it in
     // or when language changes and the effect above has reset currentPlaceholderIndex to 0
    if (!isPlaceholderVisible || language) { // Trigger if placeholder was faded out OR if language changed (which resets index)
        setAnimatedPlaceholder(t(placeholderKeys[currentPlaceholderIndex]));
        setTimeout(() => {
            setIsPlaceholderVisible(true); // Start fade in
        }, 50); // Short delay to ensure text is updated before fade-in starts
    }
  }, [currentPlaceholderIndex, t, isPlaceholderVisible, language]);


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
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Send className="h-8 w-8 text-accent" />
            {t('projectInquiryTitle')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t('projectInquirySubtitle')}
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
                              placeholder={animatedPlaceholder}
                              className={cn(
                                "min-h-[150px] resize-y focus:ring-accent focus:border-accent",
                                isPlaceholderVisible ? 'textarea-placeholder-visible' : 'textarea-placeholder-hidden'
                              )}
                              {...field}
                              aria-label={t('questionLabel')}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <p className="text-sm text-muted-foreground text-center">{t('contactFormResponseTime')}</p>
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
