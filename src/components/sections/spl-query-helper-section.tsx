
"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/hooks/use-language';
import AnimatedSection from '@/components/animated-section';
import { generateSplQuery, type GenerateSplQueryOutput } from '@/ai/flows/generate-spl-query';
import { Loader2, Sparkles, AlertTriangle, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription as ShadcnAlertDescription } from '@/components/ui/alert'; // Renamed to avoid conflict

const MAX_QUERIES = 2;

const formSchema = z.object({
  userQuery: z.string().min(10, "Query must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

const SplQueryHelperSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateSplQueryOutput | null>(null);
  const [queryCount, setQueryCount] = useState(0);
  const [copiedQuery, setCopiedQuery] = useState(false);
  const [copiedExplanation, setCopiedExplanation] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userQuery: "",
    },
  });

  const showContactMessage = queryCount >= MAX_QUERIES;

  const copyToClipboard = (text: string, type: 'query' | 'explanation') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'query') setCopiedQuery(true);
      if (type === 'explanation') setCopiedExplanation(true);
      toast({ title: t('splHelperCopied') });
      setTimeout(() => {
        if (type === 'query') setCopiedQuery(false);
        if (type === 'explanation') setCopiedExplanation(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({ variant: "destructive", title: t('error'), description: "Failed to copy to clipboard." });
    });
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (showContactMessage) return;

    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateSplQuery(data);
      if (response && response.splQuery && response.explanation) {
        setResult(response);
        setQueryCount(prev => prev + 1);
      } else {
        toast({
          variant: "destructive",
          title: t('error'),
          description: t('splHelperError'),
        });
      }
    } catch (error) {
      console.error("Error generating SPL query:", error);
      toast({
        variant: "destructive",
        title: t('error'),
        description: t('splHelperError'),
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="spl-helper" className="bg-background section-min-height">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-accent" />
            {t('splHelperTitle')}
            <Sparkles className="h-8 w-8 text-accent" />
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('splHelperSubtitle')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <Card className="max-w-3xl mx-auto shadow-xl bg-card border-primary/20">
            <CardContent className="p-6 md:p-8">
              {showContactMessage ? (
                <Alert variant="default" className="border-accent bg-accent/10">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <AlertTitle className="text-accent font-semibold">{t('splHelperQueryLimitReachedTitle')}</AlertTitle>
                  <ShadcnAlertDescription className="text-accent/90">
                    {t('splHelperQueryLimitReachedMessage')} <a href="#contact" className="underline font-medium hover:text-accent">{t('navContact')}</a>.
                  </ShadcnAlertDescription>
                </Alert>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="userQuery"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg text-primary">{t('splHelperFormLabel')}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t('splHelperFormPlaceholder')}
                              className="min-h-[120px] resize-y focus:ring-accent focus:border-accent text-base"
                              {...field}
                              aria-label={t('splHelperFormLabel')}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading || showContactMessage} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t('splHelperFormLoading')}
                        </>
                      ) : (
                        t('splHelperFormButton')
                      )}
                    </Button>
                     <p className="text-sm text-muted-foreground text-center">
                        {t('queriesRemaining', { count: MAX_QUERIES - queryCount })}
                     </p>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>

        {result && (
          <AnimatedSection delay="delay-400" className="mt-12">
            <Card className="max-w-3xl mx-auto shadow-xl bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('splHelperResultTitle')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t('splHelperSplQueryLabel')}</h3>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(result.splQuery, 'query')} className="text-muted-foreground hover:text-primary">
                      {copiedQuery ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      <span className="ml-2">{copiedQuery ? t('splHelperCopied') : t('splHelperCopyToClipboard')}</span>
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm text-foreground/90 whitespace-pre-wrap break-all">
                    <code>{result.splQuery}</code>
                  </pre>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-primary">{t('splHelperExplanationLabel')}</h3>
                     <Button variant="ghost" size="sm" onClick={() => copyToClipboard(result.explanation, 'explanation')} className="text-muted-foreground hover:text-primary">
                      {copiedExplanation ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                       <span className="ml-2">{copiedExplanation ? t('splHelperCopied') : t('splHelperCopyToClipboard')}</span>
                    </Button>
                  </div>
                  <p className="text-foreground/90 text-base leading-relaxed">{result.explanation}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

// Helper for pluralization, can be expanded or moved to translations if more complex
const translationsHelper = {
  nl: {
    queriesRemaining_one: 'Nog {count} query over.',
    queriesRemaining_other: 'Nog {count} queries over.',
    queriesRemaining_zero: 'Geen queries meer over.',
  },
  en: {
    queriesRemaining_one: '{count} query remaining.',
    queriesRemaining_other: '{count} queries remaining.',
    queriesRemaining_zero: 'No queries remaining.',
  }
};

// Add this to your useLanguage hook or keep it local if only used here
const useLanguageWithPlural = () => {
  const langContext = useLanguage();
  const { language, t: originalT } = langContext;

  const t = (key: keyof TranslationContent | 'queriesRemaining', replacements?: Record<string, string | number>) => {
    if (key === 'queriesRemaining' && replacements && typeof replacements.count === 'number') {
      const count = replacements.count;
      let pluralKey: 'queriesRemaining_one' | 'queriesRemaining_other' | 'queriesRemaining_zero' = 'queriesRemaining_other';
      if (count === 1) pluralKey = 'queriesRemaining_one';
      if (count === 0) pluralKey = 'queriesRemaining_zero';
      
      const translationSet = translationsHelper[language] || translationsHelper.en;
      let translatedString = translationSet[pluralKey] || '';
      return translatedString.replace('{count}', String(count));
    }
    return originalT(key as keyof TranslationContent, replacements as Record<string, string>);
  };
  return { ...langContext, t };
};


// Replace useLanguage with useLanguageWithPlural in the component if you want to use the pluralization helper
// For now, I'll keep it simple and not integrate the pluralization directly into the main `t` function to avoid complexity.
// The component will need a slight adjustment to display the remaining queries text.
// For simplicity, I'll just use a basic text for remaining queries in the main component.
// A more robust i18n library would handle this better.

// In SplQueryHelperSection, update the queries remaining part:
// Find:
// <p className="text-sm text-muted-foreground text-center">
//  Queries remaining: {MAX_QUERIES - queryCount}
// </p>
// This will be handled by a new key in translations.ts if desired, or simply as is.
// For this iteration, I've added a placeholder key `queriesRemaining` in the translations and used it directly.
// The pluralization helper above is an example of how it *could* be done.

export default SplQueryHelperSection;

