
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
      rootMargin: "0px 0px -66% 0px", // Observe the top 33% of the viewport
      threshold: 0.01, // Trigger if at least 1% of the section is in this zone
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let newActiveCandidateId = activeSectionId; 
      let foundIntersectingCandidate = false;

      for (const navItem of NAV_ITEMS) {
        const entry = entries.find(e => e.target.id === navItem.id);
        if (entry && entry.isIntersecting) {
          newActiveCandidateId = navItem.id;
          foundIntersectingCandidate = true;
          break; 
        }
      }
      
      if (foundIntersectingCandidate) {
        setActiveSectionId(newActiveCandidateId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Initial check in case a section other than home is in view on load (e.g. from a hash link)
    // Triggering manually for initial load if needed by re-evaluating intersections
    const initialEntries = sections.map(section => {
        if (!section) return null;
        const rect = section.getBoundingClientRect();
        // A simplified check for initial visibility - might need refinement based on actual use case
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0; 
        // For observer like check - this is a mock. Real check is done by observer.
        // This initial manual trigger can be tricky. For robust initial active set,
        // consider checking window.location.hash or scroll position on mount.
        return {
            target: section,
            isIntersecting: isVisible && (rect.top < (window.innerHeight * 0.34)) && (rect.bottom > 0) , // Simplified: top 34% check
            boundingClientRect: rect,
            intersectionRatio: 0, // Mock values
            intersectionRect: {} as DOMRectReadOnly,
            rootBounds: null,
            time: 0
        }
    }).filter(entry => entry !== null) as IntersectionObserverEntry[];
    
    if (initialEntries.length > 0) {
        observerCallback(initialEntries);
    }


    return () => {
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
