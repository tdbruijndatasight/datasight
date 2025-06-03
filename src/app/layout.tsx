
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { ThemeProvider } from '@/contexts/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import StickyContactButtons from '@/components/layout/sticky-contact-buttons';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DataSight - Tom de Bruijn | Splunk & Cribl Consultant',
  description: 'Expert Splunk and Cribl consultancy services. AI-powered data solutions and project proposals. Tom de Bruijn, Data Consultant.',
  keywords: ['Splunk', 'Cribl', 'Cribl Search','Cribl Edge','Cribl Stream','Splunk Enterprise Security (ES)','Splunk IT Service Intelligence (ITSI)', 'Consultant', 'zzp', 'freelance', 'data consultant', 'data solutions', 'Tom de Bruijn', 'DataSight', 'project proposals', 'IT consultant', 'project inquiry'],
  authors: [{ name: 'Tom de Bruijn' }],
  creator: 'Tom de Bruijn',
  publisher: 'Tom de Bruijn',
  openGraph: {
    title: 'DataSight - Tom de Bruijn',
    description: 'Expert Splunk and Cribl consultancy services.',
    url: 'https://datasight.nl', // Replace with actual domain
    siteName: 'DataSight',
    // images: [ // Add a relevant image for social sharing
    //   {
    //     url: 'https://datasight.tomdebruijn.com/og-image.png', // Replace with actual image URL
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'nl_NL',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataSight - Tom de Bruijn',
    description: 'Expert Splunk and Cribl consultancy services.',
    // images: ['https://datasight.nl/twitter.png'], // Replace with actual image URL
  },
  icons: { // Add favicon links if you have them
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png', // Assuming you have this, or adjust as needed
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(var(--background))' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(var(--background))' },
  ],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="datasight-theme">
      <LanguageProvider>
        {/* Default language set here, suppressHydrationWarning for next-themes and initial FOUT */}
        <html lang="nl" suppressHydrationWarning>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
            {children}
            <StickyContactButtons />
            <Toaster />
          </body>
        </html>
      </LanguageProvider>
    </ThemeProvider>
  );
}
