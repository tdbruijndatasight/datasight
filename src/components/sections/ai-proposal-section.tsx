
"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { generateProjectProposals, type GenerateProjectProposalsInput } from '@/ai/flows/generate-project-proposals';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const formSchema = z.object({
  clientDescription: z.string().min(50, { message: "Description must be at least 50 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const AiProposalSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [proposals, setProposals] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientDescription: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setProposals([]);
    try {
      // This section is being replaced. The generateProjectProposals flow might be used differently or removed later.
      // For now, this direct client-side call is effectively obsolete with the new form.
      // const result = await generateProjectProposals(data as GenerateProjectProposalsInput);
      // if (result && result.projectProposals) {
      //   setProposals(result.projectProposals);
      // } else {
      //   toast({
      //     variant: "destructive",
      //     title: t('error'),
      //     description: t('aiProposalsError'), // This key will be replaced by contactFormError
      //   });
      // }
      console.warn("AiProposalSection onSubmit is called, but this section is being replaced by ProjectInquirySection. This logic should not run.");
      toast({
        variant: "destructive",
        title: "Old Form Active",
        description: "This AI Proposal form is being replaced. Please use the new Inquiry form.",
      });

    } catch (error) {
      console.error("Error in (old) AiProposalSection:", error);
      toast({
        variant: "destructive",
        title: t('error'),
        description: t('contactFormError'), // Using new key for consistency
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="ai-proposals" className="bg-secondary section-min-height">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-accent" />
            {/* This title will be replaced by projectInquiryTitle */}
            {t('projectInquiryTitle')} 
            <Sparkles className="h-8 w-8 text-accent" />
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {/* This subtitle will be replaced by projectInquirySubtitle */}
            {t('projectInquirySubtitle')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <Card className="max-w-2xl mx-auto shadow-xl bg-card border-primary/20">
            <CardContent className="p-6 md:p-8">
              <p className="text-center text-destructive">This section is being updated. Please refer to the new "Project Inquiry" form.</p>
              {/* The form below is part of the old AiProposalSection and will be removed/replaced by ProjectInquirySection's form.
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="clientDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg text-primary">{t('aiProposalsFormLabel')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('aiProposalsFormPlaceholder')}
                            className="min-h-[150px] resize-y focus:ring-accent focus:border-accent"
                            {...field}
                            aria-label={t('aiProposalsFormLabel')}
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
                        {t('aiProposalsFormLoading')}
                      </>
                    ) : (
                      t('aiProposalsFormButton')
                    )}
                  </Button>
                </form>
              </Form>
              */}
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* This result display is also part of the old section
        {proposals.length > 0 && (
          <AnimatedSection delay="delay-400" className="mt-12">
            <Card className="max-w-2xl mx-auto shadow-xl bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('aiProposalsResultsTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {proposals.map((proposal, index) => (
                    <li key={index} className="p-4 border border-border rounded-md bg-background/50 shadow-sm">
                      <p className="text-foreground">{proposal}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        )}
        */}
      </div>
    </section>
  );
};

export default AiProposalSection;
// This file will be replaced by src/components/sections/project-inquiry-section.tsx
// The content above is a placeholder to ensure no build errors during transition.
// The actual new content for the inquiry form is in project-inquiry-section.tsx.
