import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_ITEMS, type BlogItem } from '@/constants/site';
import { translations } from '@/lib/translations';
import Header from '@/components/layout/header';
import ContactSection from '@/components/sections/contact-section';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_ITEMS.map((post) => ({
    slug: post.slug,
  }));
}

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

// Simple markdown-to-HTML parser for bold text
const parseMarkdown = (text: string) => {
    return text
      .replace(/\n/g, '<br />')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

const renderStep = (icon: string, title: string, description: string, isLast: boolean) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full font-bold text-lg">
        {icon}
      </div>
      {!isLast && (
        <div className="w-px h-16 bg-border border-dashed border-l-2 my-1"></div>
      )}
    </div>
    <div className="pt-1.5">
      <h4 className="font-semibold text-primary">{title}</h4>
      <p className="text-foreground/80">{description}</p>
    </div>
  </div>
);


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const nlTranslations = translations.nl;
  const enTranslations = translations.en;

  const processArticle = (article: string) => {
    const parts = article.split(/(\{\{IMAGE_PLACEHOLDER\}\}|\{\{STEPS_PLACEHOLDER\}\})/);
    return parts.map((part, index) => {
      if (part === '{{IMAGE_PLACEHOLDER}}') {
        return post.articleImageSrc ? (
          <div key={index} className="my-6 relative w-full h-auto aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-border">
            <Image
              src={post.articleImageSrc}
              alt={nlTranslations.blog1ArticleTitle} 
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        ) : null;
      }
      if (part === '{{STEPS_PLACEHOLDER}}') {
        const stepsNl = [
          { icon: '1️⃣', title: nlTranslations.blog1Step1Title, description: nlTranslations.blog1Step1Desc },
          { icon: '2️⃣', title: nlTranslations.blog1Step2Title, description: nlTranslations.blog1Step2Desc },
          { icon: '3️⃣', title: nlTranslations.blog1Step3Title, description: nlTranslations.blog1Step3Desc },
          { icon: '4️⃣', title: nlTranslations.blog1Step4Title, description: nlTranslations.blog1Step4Desc },
          { icon: '5️⃣', title: nlTranslations.blog1Step5Title, description: nlTranslations.blog1Step5Desc },
        ];
         const stepsEn = [
          { icon: '1️⃣', title: enTranslations.blog1Step1Title, description: enTranslations.blog1Step1Desc },
          { icon: '2️⃣', title: enTranslations.blog1Step2Title, description: enTranslations.blog1Step2Desc },
          { icon: '3️⃣', title: enTranslations.blog1Step3Title, description: enTranslations.blog1Step3Desc },
          { icon: '4️⃣', title: enTranslations.blog1Step4Title, description: enTranslations.blog1Step4Desc },
          { icon: '5️⃣', title: enTranslations.blog1Step5Title, description: enTranslations.blog1Step5Desc },
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
      return <div key={index} dangerouslySetInnerHTML={{ __html: parseMarkdown(part) }} />;
    });
  };

  const nlContent = {
    title: nlTranslations[post.articleTitleKey],
    articleParts: processArticle(nlTranslations[post.fullArticleKey]),
    back: nlTranslations.backToOverview,
    by: nlTranslations.by,
  };
  const enContent = {
    title: enTranslations[post.articleTitleKey],
    articleParts: processArticle(enTranslations[post.fullArticleKey]),
    back: enTranslations.backToOverview,
    by: enTranslations.by,
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-28">
        <article className="max-w-3xl mx-auto">
          <div lang="nl" className="[&[lang=en]_&]:hidden">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{nlContent.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{formatDate(post.date, 'nl-NL')} - {nlContent.by} Tom de Bruijn</p>
            <div className="prose prose-blue dark:prose-invert max-w-none text-foreground/90">{nlContent.articleParts}</div>
          </div>
          <div lang="en" className="[&[lang=nl]_&]:hidden">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{enContent.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{formatDate(post.date, 'en-US')} - {enContent.by} Tom de Bruijn</p>
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
