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
  const [language, setLanguage] = useState<Locale>('nl'); // Default to Dutch

  useEffect(() => {
    // You could potentially sync with localStorage or browser preference here
    // For now, just set the HTML lang attribute
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: keyof Translations[Locale], replacements?: Record<string, string>): string => {
    let translation = translations[language][key] || translations['en'][key] || String(key); // Fallback to English then key
    if (replacements) {
      Object.keys(replacements).forEach((placeholder) => {
        translation = translation.replace(new RegExp(`{{${placeholder}}}`, 'g'), replacements[placeholder]);
      });
    }
    return translation;
  };
  

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
