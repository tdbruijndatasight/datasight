
"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    // In a real app, you would send this data to a backend service
    // For example: await fetch('/api/inquiry', { method: 'POST', body: JSON.stringify(data) });
    console.log("Form submitted:", data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: t('contactFormSuccessTitle'),
      description: t('contactFormSuccessMessage'),
      variant: 'default',
    });
    form.reset();
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

        <AnimatedSection delay="delay-200">
          <Card className="max-w-2xl mx-auto shadow-xl bg-card border-primary/20">
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
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectInquirySection;
