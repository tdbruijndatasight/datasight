
"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/theme-provider';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // theme is user's *preference*: 'light', 'dark', or 'system'
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  // Default to 'light' to avoid issues before client-side determination
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  // Set mounted to true after initial render on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine and set the actual theme (light/dark) once mounted and theme preference is known
  useEffect(() => {
    if (mounted) {
      let currentActualTheme: 'light' | 'dark';
      if (theme === "system") {
        currentActualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      } else {
        currentActualTheme = theme; // theme is already 'light' or 'dark'
      }
      setActualTheme(currentActualTheme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    // Render a placeholder on the server and initial client render to avoid mismatch
    // A disabled button structure is a good placeholder.
    return (
      <Button
        variant="outline"
        size="icon"
        disabled
        aria-label={t('loading')}
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        {/* You can use a default icon or a spinner here if preferred */}
        <Sun className="h-[1.2rem] w-[1.2rem] opacity-50" /> 
      </Button>
    );
  }

  // actualTheme is now definitively 'light' or 'dark'
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(actualTheme === 'dark' ? 'light' : 'dark')}
      aria-label={actualTheme === 'dark' ? t('themeToggleLight') : t('themeToggleDark')}
      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    >
      {actualTheme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
