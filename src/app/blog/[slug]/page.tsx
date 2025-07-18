
"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_ITEMS, type BlogItem } from '@/constants/site';
import { translations } from '@/lib/translations';
import Header from '@/components/layout/header';
import ContactSection from '@/components/sections/contact-section';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Copy } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const getPostData = (slug: string): BlogItem | undefined => {
  return BLOG_ITEMS.find((post) => post.slug === slug);
};

const formatDate = (dateString: string, locale: 'nl' | 'en') => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const CodeSnippet = ({ code }: { code: string }) => {
    const { toast } = useToast();
    const { t } = useLanguage();

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            toast({
                title: t('codeCopiedSuccess'),
                duration: 2000,
            });
        }).catch(err => {
            console.error('Failed to copy code: ', err);
            toast({
                title: t('copyErrorTitle'),
                description: t('copyErrorDescription'),
                variant: 'destructive',
            });
        });
    };

    return (
        <button
            onClick={handleCopy}
            className={cn(
                "group relative w-full text-left p-3 my-2 rounded-md bg-gray-800 dark:bg-gray-900 text-white font-mono text-xs",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            )}
            title={t('copyToClipboardTooltip')}
        >
            <pre className="whitespace-pre-wrap break-all"><code>{code}</code></pre>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Copy className="h-4 w-4 text-gray-400" />
            </div>
        </button>
    );
};


const parseText = (text: string) => {
  // Regex to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Split text by newlines to process line by line
  const lines = text.split('\n');

  return lines.map((line, lineIndex) => {
    // Handle bolding: **text**
    const boldedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Handle URLs: find all urls and replace them with anchor tags
    const parts = boldedLine.split(urlRegex);

    const processedParts = parts.map((part, partIndex) => {
      if (part.match(urlRegex)) {
        return `<a href="${part}" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">${part}</a>`;
      }
      return part;
    });

    // Reconstruct the line and wrap in a paragraph with a line break, unless it's the last line.
    return (
      <span key={lineIndex} dangerouslySetInnerHTML={{ __html: processedParts.join('') + (lineIndex < lines.length - 1 ? '<br/>' : '') }} />
    );
  });
};

const renderStep = (icon: string, title: string, description: string, isLast: boolean) => {
  const [descText, ...codeParts] = description.split('code:');
  const code = codeParts.join('code:').trim();

  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full font-bold text-lg">
          {icon}
        </div>
        {!isLast && (
          <div className="w-px h-full bg-border border-dashed border-l-2 my-1"></div>
        )}
      </div>
      <div className={cn("pt-1.5 flex-1", isLast ? 'pb-0' : 'pb-6')}>
        <h4 className="font-semibold text-primary">{title}</h4>
        <div className="text-foreground/80 prose-sm max-w-none">{parseText(descText)}</div>
        {code && <CodeSnippet code={code} />}
      </div>
    </div>
  );
};


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);
  const { t } = useLanguage();

  if (!post) {
    notFound();
  }

  const processArticle = (article: string) => {
    const parts = article.split(/(\{\{IMAGE_PLACEHOLDER\}\}|\{\{STEPS_PLACEHOLDER\}\})/);
    return parts.map((part, index) => {
      if (part === '{{IMAGE_PLACEHOLDER}}') {
        return post.articleImageSrc ? (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="my-4 relative w-full h-auto aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-border cursor-pointer hover:ring-2 hover:ring-accent transition">
                <Image
                  src={post.articleImageSrc}
                  alt={t('blog1ArticleTitle')} 
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-auto p-2 bg-transparent border-none shadow-none">
              <Image
                src={post.articleImageSrc}
                alt={t('blog1ArticleTitle')}
                width={1920}
                height={1080}
                className="rounded-lg object-contain w-full h-full"
              />
            </DialogContent>
          </Dialog>
        ) : null;
      }
      if (part === '{{STEPS_PLACEHOLDER}}') {
        const stepsNl = [
          { icon: '1️⃣', title: t('blog1Step1Title', { lang: 'nl' }), description: t('blog1Step1Desc', { lang: 'nl' }) },
          { icon: '2️⃣', title: t('blog1Step2Title', { lang: 'nl' }), description: t('blog1Step2Desc', { lang: 'nl' }) },
          { icon: '3️⃣', title: t('blog1Step3Title', { lang: 'nl' }), description: t('blog1Step3Desc', { lang: 'nl' }) },
          { icon: '4️⃣', title: t('blog1Step4Title', { lang: 'nl' }), description: t('blog1Step4Desc', { lang: 'nl' }) },
          { icon: '5️⃣', title: t('blog1Step5Title', { lang: 'nl' }), description: t('blog1Step5Desc', { lang: 'nl' }) },
        ];
        const stepsEn = [
            { icon: '1️⃣', title: t('blog1Step1Title', { lang: 'en' }), description: t('blog1Step1Desc', { lang: 'en' }) },
            { icon: '2️⃣', title: t('blog1Step2Title', { lang: 'en' }), description: t('blog1Step2Desc', { lang: 'en' }) },
            { icon: '3️⃣', title: t('blog1Step3Title', { lang: 'en' }), description: t('blog1Step3Desc', { lang: 'en' }) },
            { icon: '4️⃣', title: t('blog1Step4Title', { lang: 'en' }), description: t('blog1Step4Desc', { lang: 'en' }) },
            { icon: '5️⃣', title: t('blog1Step5Title', { lang: 'en' }), description: t('blog1Step5Desc', { lang: 'en' }) },
        ];
        return (
          <div key={index} className="my-6">
            <div lang="nl" className="[&[lang=en]_&]:hidden">
              {stepsNl.map((step, i) => renderStep(step.icon, step.title, step.description, i === stepsNl.length - 1))}
            </div>
            <div lang="en" className="[&[lang=nl]_&]:hidden">
              {stepsEn.map((step, i) => renderStep(step.icon, step.title, step.description, i === stepsEn.length - 1))}
            </div>
          </div>
        );
      }
      return <div key={index}>{parseText(part)}</div>;
    });
  };

  const nlContent = {
    title: t(post.articleTitleKey, { lang: 'nl' }),
    articleParts: processArticle(t(post.fullArticleKey, { lang: 'nl' })),
    back: t('backToOverview', { lang: 'nl' }),
    by: t('by', { lang: 'nl' }),
  };
  const enContent = {
    title: t(post.articleTitleKey, { lang: 'en' }),
    articleParts: processArticle(t(post.fullArticleKey, { lang: 'en' })),
    back: t('backToOverview', { lang: 'en' }),
    by: t('by', { lang: 'en' }),
  };


  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-28">
        <article className="max-w-3xl mx-auto">
          <div lang="nl" className="[&[lang=en]_&]:hidden">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{nlContent.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{formatDate(post.date, 'nl')} - {nlContent.by} Tom de Bruijn</p>
            <div className="prose prose-blue dark:prose-invert max-w-none text-foreground/90">{nlContent.articleParts}</div>
          </div>
          <div lang="en" className="[&[lang=nl]_&]:hidden">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{enContent.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{formatDate(post.date, 'en')} - {enContent.by} Tom de Bruijn</p>
            <div className="prose prose-blue dark:prose-invert max-w-none text-foreground/90">{enContent.articleParts}</div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/#blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span lang="nl" className="[&[lang=en]_&]:hidden">{nlContent.back}</span>
                <span lang="en" className="[&[lang=nl]_&]:hidden">{enContent.back}</span>
              </Link>
            </Button>
          </div>
        </article>
      </main>
      <ContactSection />
    </>
  );
}

    