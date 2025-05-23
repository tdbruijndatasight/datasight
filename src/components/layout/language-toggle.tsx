"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Languages } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <Button variant="outline" onClick={toggleLanguage} className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
      <Languages className="h-4 w-4" />
      <span>{t('languageToggle')}</span>
    </Button>
  );
};

export default LanguageToggle;
