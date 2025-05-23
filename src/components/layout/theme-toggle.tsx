
"use client";

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/theme-provider';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  // Ensure theme is not undefined during initial render
  const currentTheme = theme === 'system' 
    ? (typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light') 
    : theme;


  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label={currentTheme === 'dark' ? t('themeToggleLight') : t('themeToggleDark')}
      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    >
      {currentTheme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
