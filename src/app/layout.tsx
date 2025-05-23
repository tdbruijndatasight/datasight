import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DataSight Portfolio - Tom de Bruijn | Splunk & Cribl Consultant',
  description: 'Expert freelance (ZZP) Splunk and Cribl consultancy services. AI-powered data solutions and project proposals. Tom de Bruijn, Data Consultant.',
  keywords: ['Splunk', 'Cribl', 'Consultant', 'zzp', 'freelance', 'data consultant', 'data solutions', 'Tom de Bruijn', 'DataSight', 'project proposals', 'IT consultant'],
  authors: [{ name: 'Tom de Bruijn' }],
  creator: 'Tom de Bruijn',
  publisher: 'Tom de Bruijn',
  openGraph: {
    title: 'DataSight Portfolio - Tom de Bruijn',
    description: 'Expert freelance (ZZP) Splunk and Cribl consultancy services.',
    url: 'https://datasight.tomdebruijn.com', // Replace with actual domain
    siteName: 'DataSight Portfolio',
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
    title: 'DataSight Portfolio - Tom de Bruijn',
    description: 'Expert freelance (ZZP) Splunk and Cribl consultancy services.',
    // images: ['https://datasight.tomdebruijn.com/twitter-image.png'], // Replace with actual image URL
  },
  // icons: { // Add favicon links if you have them
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F8FF' },
    { media: '(prefers-color-scheme: dark)', color: '#1A2A3A' }, // Example dark theme color
  ],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="nl"> {/* Default language set here */}
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </LanguageProvider>
  );
}
