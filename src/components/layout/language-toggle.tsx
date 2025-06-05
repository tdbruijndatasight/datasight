
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

  const displayLanguageText = language === 'nl' ? 'EN' : 'NL';
  const ariaLabelForIconOnly = language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands';

  return (
    <Button
      variant="outline"
      size={iconOnly ? undefined : "default"}
      onClick={toggleLanguage}
      className={cn(
        "border-primary text-primary hover:bg-primary hover:text-primary-foreground", // Common styles + desired hover for all states
        iconOnly && "px-3", // Apply px-3 only if iconOnly is true for width adjustment
        className
      )}
      aria-label={iconOnly ? ariaLabelForIconOnly : t('languageToggle')}
    >
      <Languages className="h-4 w-4 shrink-0" />
      {iconOnly ? (
        <span className="text-xs font-semibold">
          {displayLanguageText}
        </span>
      ) : (
        <span>{t('languageToggle')}</span>
      )}
    </Button>
  );
};

export default LanguageToggle;
