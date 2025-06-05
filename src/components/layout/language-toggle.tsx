
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
      // When iconOnly, remove explicit size to use default height/py, and control width with px.
      // Otherwise, use "default" size.
      size={iconOnly ? undefined : "default"}
      onClick={toggleLanguage}
      className={cn(
        "border-primary text-primary", // Common: always primary border and text
        iconOnly
          ? "px-3 hover:bg-primary/10" // Specific style for iconOnly mode: auto-width with padding
          : "hover:bg-primary hover:text-primary-foreground", // Specific hover for default mode
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

