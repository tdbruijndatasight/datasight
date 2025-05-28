
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import LanguageToggle from './language-toggle';
import { ThemeToggle } from './theme-toggle';
import { useLanguage } from '@/hooks/use-language';
import { NAV_ITEMS } from '@/constants/site';
import { cn } from '@/lib/utils';

const Logo = () => (
  <Link href="/#home" className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors">
    <Brain className="h-8 w-8" />
    <span className="text-2xl font-bold">DataSight</span>
  </Link>
);

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>(NAV_ITEMS[0]?.id || 'home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Zone: 40% from top to 50% from top
      threshold: 0.01, 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let currentActiveId: string | null = null;
      for (const navItem of NAV_ITEMS) {
        const entry = entries.find(e => e.target.id === navItem.id);
        if (entry && entry.isIntersecting) {
          currentActiveId = navItem.id;
          break;
        }
      }

      if (currentActiveId && currentActiveId !== activeSectionId) {
        setActiveSectionId(currentActiveId);
      } else if (!currentActiveId) {
        // Fallback if nothing is intersecting the main rootMargin (e.g. at very top or bottom)
        if (window.scrollY < window.innerHeight * 0.2) { // Near top of page
          if (activeSectionId !== (NAV_ITEMS[0]?.id || 'home')) {
            setActiveSectionId(NAV_ITEMS[0]?.id || 'home');
          }
        } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) { // Near bottom of page
            if (activeSectionId !== (NAV_ITEMS[NAV_ITEMS.length - 1]?.id || 'contact')) {
              setActiveSectionId(NAV_ITEMS[NAV_ITEMS.length - 1]?.id || 'contact');
            }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    // Trigger initial check via observer for consistency
    // Manually trigger a check for all observed elements.
    // This helps set the correct initial active section based on current scroll position.
    const initialObserverTrigger = () => {
      const entries = sections.reduce((acc, section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Simulate an IntersectionObserverEntry. This is a simplified mock.
          // A more robust solution might involve a brief timeout to let layout settle,
          // then checking real intersection status or manually calculating.
          // For now, let's assume if it's near the top, it might be active.
           const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
           if (isVisible) { // A basic check if it's in viewport at all
            acc.push({
              target: section,
              isIntersecting: (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.4), // Crude check for "in target zone"
              boundingClientRect: rect,
              intersectionRatio: 0, // Mocked
              intersectionRect: rect, // Mocked
              rootBounds: null, // Mocked
              time: 0, // Mocked
            } as IntersectionObserverEntry);
           }
        }
        return acc;
      }, [] as IntersectionObserverEntry[]);
      if (entries.length > 0) {
        observerCallback(entries);
      } else {
        // Default to home if no sections are somehow "intersecting" initially
         if (activeSectionId !== (NAV_ITEMS[0]?.id || 'home')) setActiveSectionId(NAV_ITEMS[0]?.id || 'home');
      }
    };

    // A small delay for initial check can sometimes help with elements rendering/layout shifts
    const initialCheckTimeoutId = setTimeout(initialObserverTrigger, 100);


    return () => {
      clearTimeout(initialCheckTimeoutId);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const NavLinks: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
    <>
      {NAV_ITEMS.map((item) => (
        <Button
          variant="ghost"
          asChild
          key={item.id}
          onClick={onLinkClick}
          className={cn(
            "group font-medium relative px-3 py-2 text-foreground hover:text-primary hover:bg-transparent",
            item.id === activeSectionId && "is-active text-primary"
          )}
        >
          <Link href={item.href}>
            <span className="nav-link-text-wrapper">
              {t(item.labelKey)}
              <span className="nav-hover-dots-container">
                <span className="nav-hover-animation-dot blue"></span>
                <span className="nav-hover-animation-dot orange"></span>
              </span>
            </span>
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/95 shadow-lg backdrop-blur-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1">
          <NavLinks />
          <LanguageToggle />
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col space-y-6 h-full">
                <div className="flex justify-between items-center mb-6">
                   <Logo />
                   <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                       <X className="h-6 w-6 text-primary" />
                     </Button>
                   </SheetClose>
                </div>
                <nav className="flex flex-col space-y-3">
                  <NavLinks onLinkClick={() => setIsMobileMenuOpen(false)} />
                </nav>
                <div className="mt-auto pt-6 border-t border-border">
                  <LanguageToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
