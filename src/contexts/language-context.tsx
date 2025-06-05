
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, type Locale, type Translations } from '@/lib/translations';

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: keyof Translations[Locale], replacements?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initial default, will be updated by useEffect
  const [currentLanguage, setCurrentLanguageState] = useState<Locale>('nl'); 

  // This function will be exposed via context to set the language
  // and handle side effects like localStorage and html lang attribute.
  const setLanguage = (newLang: Locale) => {
    if (newLang === 'en' || newLang === 'nl') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('datasight-language', newLang);
        document.documentElement.lang = newLang;
      }
      setCurrentLanguageState(newLang);
    }
  };

  useEffect(() => {
    // This effect runs once on mount to determine the initial language.
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langFromUrl = params.get('lang') as Locale | null;

      // 1. Check URL parameter
      if (langFromUrl && (langFromUrl === 'en' || langFromUrl === 'nl')) {
        setLanguage(langFromUrl);
        return;
      }

      // 2. Check localStorage
      const storedLang = localStorage.getItem('datasight-language') as Locale | null;
      if (storedLang && (storedLang === 'en' || storedLang === 'nl')) {
        setLanguage(storedLang);
        return;
      }

      // 3. Browser language detection (proxy for location)
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('nl')) { // Covers 'nl', 'nl-nl', 'nl-be'
        setLanguage('nl');
      } else {
        setLanguage('en'); // Default to English if browser language is not Dutch
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount after client is available

  const t = (key: keyof Translations[Locale], replacements?: Record<string, string>): string => {
    const langSpecificTranslations = translations[currentLanguage];
    const englishTranslations = translations['en'];
    
    let translation = langSpecificTranslations?.[key] || englishTranslations?.[key] || String(key); 

    if (replacements) {
      Object.keys(replacements).forEach((placeholder) => {
        translation = translation.replace(new RegExp(`{{${placeholder}}}`, 'g'), replacements[placeholder]);
      });
    }
    return translation;
  };
  

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

