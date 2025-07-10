
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_ITEMS, type BlogItem } from '@/constants/site';
import { translations } from '@/lib/translations';
import Header from '@/components/layout/header';
import ContactSection from '@/components/sections/contact-section';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// This function tells Next.js which blog slugs to pre-render at build time.
export async function generateStaticParams() {
  return BLOG_ITEMS.map((post) => ({
    slug: post.slug,
  }));
}

// Helper function to get blog data
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  // We cannot use the useLanguage hook here as this is a Server Component.
  // We'll fetch both translations and you can use a language switcher on the client if needed.
  // For simplicity, we'll display both or default to one. Here, we'll default to Dutch and English side-by-side or toggled.
  const nlTranslations = translations.nl;
  const enTranslations = translations.en;

  // Since we can't use the hook, we need a way to pass language preference or detect it.
  // The page will be statically generated, so we render both and can use client-side logic to show/hide.
  // A simple approach without client logic for now is just to render based on a default.
  // Let's assume a component will handle language toggling on the client.
  const nlContent = {
    title: nlTranslations[post.articleTitleKey],
    article: nlTranslations[post.fullArticleKey],
    back: nlTranslations.backToOverview,
  };
  const enContent = {
    title: enTranslations[post.articleTitleKey],
    article: enTranslations[post.fullArticleKey],
    back: enTranslations.backToOverview,
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-28">
        <article className="max-w-3xl mx-auto">
          {/* We'll render both and use CSS to toggle visibility based on the html[lang] attribute */}
          <div lang="nl" className="[&[lang=en]_&]:hidden">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{nlContent.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{formatDate(post.date, 'nl-NL')}</p>
            <div className="prose prose-blue dark:prose-invert max-w-none text-foreground/90" dangerouslySetInnerHTML={{ __html: nlContent.article.replace(/\n/g, '<br />').replace(/\*\*✅ (.*?)\*\*/g, '<strong>✅ $1</strong>').replace(/\*\*📸 (.*?)\*\*/g, '<strong>📸 $1</strong>').replace(/\*\*🔧 (.*?)\*\*/g, '<strong>🔧 $1</strong>').replace(/\*\*📊 (.*?)\*\*/g, '<strong>📊 $1</strong>') }} />
          </div>
          <div lang="en" className="[&[lang=nl]_&]:hidden">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{enContent.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{formatDate(post.date, 'en-US')}</p>
            <div className="prose prose-blue dark:prose-invert max-w-none text-foreground/90" dangerouslySetInnerHTML={{ __html: enContent.article.replace(/\n/g, '<br />').replace(/\*\*✅ (.*?)\*\*/g, '<strong>✅ $1</strong>').replace(/\*\*📸 (.*?)\*\*/g, '<strong>📸 $1</strong>').replace(/\*\*🔧 (.*?)\*\*/g, '<strong>🔧 $1</strong>').replace(/\*\*📊 (.*?)\*\*/g, '<strong>📊 $1</strong>') }} />
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

// Add some basic prose styles to globals.css for blog formatting
// This is a placeholder; you'd typically add this to your globals.css file.
// For the purpose of this response, we'll assume a 'prose' class provides basic styling.
// We can enhance globals.css if needed.
