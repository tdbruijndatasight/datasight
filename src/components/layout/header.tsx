
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
      rootMargin: "-50% 0px -50% 0px", // Target the center line of the viewport
      threshold: 0.01, 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let currentActiveId: string | null = null;
      for (const navItem of NAV_ITEMS) {
        const entry = entries.find(e => e.target.id === navItem.id);
        if (entry && entry.isIntersecting) {
          currentActiveId = navItem.id;
          break; // Prioritize the first one in NAV_ITEMS order that is intersecting
        }
      }

      if (currentActiveId && currentActiveId !== activeSectionId) {
        setActiveSectionId(currentActiveId);
      } else if (!currentActiveId) {
        // Fallback logic for very top or bottom of the page
        if (window.scrollY < window.innerHeight * 0.3) { 
          if (activeSectionId !== (NAV_ITEMS[0]?.id || 'home')) {
            setActiveSectionId(NAV_ITEMS[0]?.id || 'home');
          }
        } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) { 
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
    
    // Initial check to set active section on load
    const initialEntries = sections.reduce((acc, section) => {
        if (section) {
            const rect = section.getBoundingClientRect();
            const isIntersecting = (rect.top <= window.innerHeight * 0.5) && (rect.bottom >= window.innerHeight * 0.5);
            if (isIntersecting) {
                acc.push({
                    target: section,
                    isIntersecting: true,
                    boundingClientRect: rect, 
                    intersectionRatio: 1, 
                    intersectionRect: rect, 
                    rootBounds: null,
                    time: performance.now()
                } as IntersectionObserverEntry);
            }
        }
        return acc;
    }, [] as IntersectionObserverEntry[]);

    if (initialEntries.length > 0) {
        observerCallback(initialEntries);
    } else if (window.scrollY < window.innerHeight * 0.3) {
        setActiveSectionId(NAV_ITEMS[0]?.id || 'home');
    }


    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const NavLinks: React.FC<{ onLinkClick?: () => void; isMobile?: boolean }> = ({ onLinkClick, isMobile }) => (
    <>
      {NAV_ITEMS.map((item) => (
        <Button
          variant="ghost"
          asChild
          key={item.id}
          onClick={onLinkClick}
          className={cn(
            "group font-medium relative px-3 py-2 text-foreground hover:text-primary hover:bg-transparent",
            item.id === activeSectionId && "is-active text-primary",
            isMobile && "w-full justify-start text-lg py-3" // Mobile specific styling
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
          <LanguageToggle iconOnly={true} />
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
                   {/* Rely on default SheetClose from SheetContent */}
                </div>
                <nav className="flex flex-col space-y-1">
                  <NavLinks onLinkClick={() => setIsMobileMenuOpen(false)} isMobile={true} />
                </nav>
                {/* LanguageToggle already moved outside for mobile */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
