
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
    const topOffset = 100; // px from top to start observation band, adjust if header height changes
    const bandHeight = 100; // px height of the observation band
    // Ensure bottom margin doesn't result in negative value if viewport is too small
    const bottomMarginForBand = Math.max(0, window.innerHeight - (topOffset + bandHeight));
    const dynamicRootMargin = `-${topOffset}px 0px -${bottomMarginForBand}px 0px`;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: dynamicRootMargin,
      threshold: 0.1, // At least 10% of the section should be in the band
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let newActiveSectionId = null;

      // Prioritize scroll position for top and bottom extremes
      if (window.scrollY < 50) {
        newActiveSectionId = NAV_ITEMS[0]?.id || 'home';
      } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) {
        newActiveSectionId = NAV_ITEMS[NAV_ITEMS.length - 1]?.id || 'contact';
      } else {
        // Find the topmost section intersecting the observation band based on NAV_ITEMS order
        for (const navItem of NAV_ITEMS) {
          const entry = entries.find(e => e.target.id === navItem.id);
          if (entry && entry.isIntersecting) {
            newActiveSectionId = navItem.id;
            break; 
          }
        }
      }

      if (newActiveSectionId && newActiveSectionId !== activeSectionId) {
        setActiveSectionId(newActiveSectionId);
      } else if (!newActiveSectionId && activeSectionId !== (NAV_ITEMS[0]?.id || 'home') && activeSectionId !== (NAV_ITEMS[NAV_ITEMS.length - 1]?.id || 'contact')) {
        // If no section is in the band, and we're not at extremes, try to find the closest one above the band
        // This helps if scrolling fast or sections are short.
        // For simplicity, we can also choose to just keep the last active one if no new one is found in band.
        // The current logic will keep activeSectionId if newActiveSectionId is null from the loop.
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    // Initial check on load for the very top of the page
    if (window.scrollY < 50) {
      setActiveSectionId(NAV_ITEMS[0]?.id || 'home');
    } else {
      // Trigger an initial check based on current intersections
      const initialEntries = sections.reduce((acc, section) => {
        if (section) {
            const rect = section.getBoundingClientRect();
            // Check if section intersects the dynamicRootMargin (simplified check)
            const intersectsTopBand = rect.top < (topOffset + bandHeight) && rect.bottom > topOffset;
            if (intersectsTopBand) {
                acc.push({
                    target: section,
                    isIntersecting: true,
                    boundingClientRect: rect, 
                    intersectionRatio: 0.1, // Dummy value, actual calculation is complex
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
      }
    }


    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Removed activeSectionId from dependencies to prevent potential loops

  const NavLinks: React.FC<{ onLinkClick?: () => void; isMobile?: boolean }> = ({ onLinkClick, isMobile }) => (
    <>
      {NAV_ITEMS.map((item) => (
        <Button
          variant="ghost"
          asChild
          key={item.id}
          onClick={() => {
            if (onLinkClick) onLinkClick();
            // Temporarily set active section on click for faster feedback, observer will confirm
            // setActiveSectionId(item.id); 
          }}
          className={cn(
            "group font-medium relative px-3 py-2 text-foreground hover:text-primary hover:bg-transparent",
            item.id === activeSectionId && "is-active text-primary",
            isMobile && "w-full justify-start text-lg py-3"
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
                </div>
                <nav className="flex flex-col space-y-1">
                  <NavLinks onLinkClick={() => setIsMobileMenuOpen(false)} isMobile={true} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
    