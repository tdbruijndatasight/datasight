
"use client";

import React, { useState } from 'react';
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

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  question: z.string().min(30, { message: "Question must be at least 30 characters." }).max(2000, { message: "Question must be at most 2000 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const CurvedArrowCoffee: React.FC = () => (
  <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-12 md:-left-20 top-1/2 transform -translate-y-1/2 text-primary opacity-70">
    <path d="M75 5C75 5 45.2785 5.79631 30.9732 30.0262C16.6679 54.2561 29.4891 75.0001 29.4891 75.0001C29.4891 75.0001 42.3104 94.4947 29.4891 115" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34.3848 119.895L29.4892 115L24.5937 119.895" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const ProjectInquirySection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      question: "",
    },
  });

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

        <AnimatedSection delay="delay-200" className="relative"> {/* Added relative for arrow positioning */}
          <div className="max-w-2xl mx-auto relative"> {/* Inner relative for more precise control if needed */}
            {/* Coffee Invitation - positioned to the left of the card */}
            <div className="hidden md:block absolute -left-40 top-1/2 transform -translate-y-1/2 w-32 text-center z-10">
              <CurvedArrowCoffee />
              <p className="text-sm text-primary/90 mt-20">{t('inquiryCoffeePrompt')}</p>
            </div>

            <Card className="shadow-xl bg-card border-primary/20 relative z-0"> {/* z-0 to be behind arrow if it overlaps */}
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
                              placeholder={t('questionPlaceholder')}
                              className="min-h-[150px] resize-y focus:ring-accent focus:border-accent"
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
