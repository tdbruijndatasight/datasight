
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, type Locale, type Translations, type TranslationContent } from '@/lib/translations';

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: keyof TranslationContent, options?: { replacements?: Record<string, string>, lang?: Locale }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<Locale>('nl'); 

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
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langFromUrl = params.get('lang') as Locale | null;

      if (langFromUrl && (langFromUrl === 'en' || langFromUrl === 'nl')) {
        setLanguage(langFromUrl);
        return;
      }

      const storedLang = localStorage.getItem('datasight-language') as Locale | null;
      if (storedLang && (storedLang === 'en' || storedLang === 'nl')) {
        setLanguage(storedLang);
        return;
      }

      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('nl')) {
        setLanguage('nl');
      } else {
        setLanguage('en'); 
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const t = (key: keyof TranslationContent, options?: { replacements?: Record<string, string>, lang?: Locale }): string => {
    const lang = options?.lang || currentLanguage;
    const replacements = options?.replacements;
    
    const langSpecificTranslations = translations[lang];
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

    