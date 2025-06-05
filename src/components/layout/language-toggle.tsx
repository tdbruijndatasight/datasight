
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  iconOnly?: boolean;
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ iconOnly = false, className }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <Button
      variant="outline" // Always use outline variant for a base border
      size={iconOnly ? "icon" : "default"}
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2",
        "border-primary text-primary", // Common: always primary border and text
        iconOnly
          ? "hover:bg-primary/10" // Specific hover for iconOnly
          : "hover:bg-primary hover:text-primary-foreground", // Specific hover for default
        className
      )}
      aria-label={iconOnly ? (language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands') : undefined}
    >
      <Languages className={cn("h-5 w-5", iconOnly ? "" : "h-4 w-4")} />
      {!iconOnly && <span>{t('languageToggle')}</span>}
    </Button>
  );
};

export default LanguageToggle;
