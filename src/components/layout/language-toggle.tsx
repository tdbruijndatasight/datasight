
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

  // Text to display next to icon in iconOnly mode (e.g., "EN" if current is "nl")
  const displayLanguageText = language === 'nl' ? 'EN' : 'NL';
  // Aria-label for iconOnly mode should describe the action clearly
  const ariaLabelForIconOnly = language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands';

  return (
    <Button
      variant="outline" // Always use outline for a consistent border
      size={iconOnly ? "icon" : "default"} // Use "icon" size for iconOnly
      onClick={toggleLanguage}
      className={cn(
        // gap-2 is applied by buttonVariants, which handles spacing between icon and text
        "border-primary text-primary", // Common: always primary border and text
        iconOnly
          ? "hover:bg-primary/10" // Specific hover for iconOnly mode
          : "hover:bg-primary hover:text-primary-foreground", // Specific hover for default mode
        className
      )}
      aria-label={iconOnly ? ariaLabelForIconOnly : t('languageToggle')}
    >
      <Languages className="h-4 w-4 shrink-0" /> {/* Icon size, shrink-0 prevents shrinking */}
      {iconOnly ? (
        <span className="text-xs font-semibold">
          {displayLanguageText}
        </span>
      ) : (
        // For default mode, display the translated text from t('languageToggle')
        <span>{t('languageToggle')}</span>
      )}
    </Button>
  );
};

export default LanguageToggle;
