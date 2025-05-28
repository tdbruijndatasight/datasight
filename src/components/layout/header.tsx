
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
      rootMargin: "-30% 0px -60% 0px", // Observe a band from 30% to 40% of viewport height
      threshold: 0.01, 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let newActiveCandidateId = activeSectionId; 
      let foundIntersectingCandidate = false;

      // Iterate through NAV_ITEMS which are in the desired DOM order
      for (const navItem of NAV_ITEMS) {
        const entry = entries.find(e => e.target.id === navItem.id);
        if (entry && entry.isIntersecting) {
          newActiveCandidateId = navItem.id;
          foundIntersectingCandidate = true;
          break; // Found the highest section in the DOM that's intersecting the target zone
        }
      }
      
      if (foundIntersectingCandidate) {
        setActiveSectionId(newActiveCandidateId);
      } else {
        // If no sections are in the specific trigger zone,
        // check if we're scrolled near the top; if so, default to "home".
        // This handles cases where fast scrolling might miss the narrow band for "home".
        if (window.scrollY < window.innerHeight * 0.3) { // If less than 30% of first viewport height scrolled
           setActiveSectionId(NAV_ITEMS[0]?.id || 'home');
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Initial check for active section on load
    const initialCheck = () => {
      let currentHighestVisibleSectionId = NAV_ITEMS[0]?.id || 'home';
      let highestVisibleRatio = 0;

      for (const navItem of NAV_ITEMS) {
        const section = document.getElementById(navItem.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is within viewport at all
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            // Check if this section is higher than the current highest or more visible
            // A simple check: if top is closer to 0 or negative, it's higher.
            // This is a simplified heuristic for initial load.
            // A more robust way might be to calculate intersection with the rootMargin zone.
            // For now, if it's visible and higher than others, it's a candidate.
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            const ratio = visibleHeight / rect.height;

            if (rect.top < (window.innerHeight * 0.35) && ratio > highestVisibleRatio) { // Prioritize sections in upper 35%
                currentHighestVisibleSectionId = navItem.id;
                highestVisibleRatio = ratio;
            } else if (highestVisibleRatio === 0 && rect.top >= 0 && rect.top < window.innerHeight) {
                // If nothing is high up, take the first one fully in view
                currentHighestVisibleSectionId = navItem.id;
                highestVisibleRatio = 0.001; // Mark as found
            }
          }
        }
      }
      setActiveSectionId(currentHighestVisibleSectionId);
    };
    
    initialCheck(); // Run check on mount
    // Additionally, a small timeout can help if elements are still shifting on load
    const timeoutId = setTimeout(initialCheck, 100);


    return () => {
      clearTimeout(timeoutId);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NAV_ITEMS]); // Rerun if NAV_ITEMS changes (though it's const)

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
