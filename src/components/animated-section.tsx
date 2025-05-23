"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // Allow specifying the HTML tag
  delay?: string; // Tailwind delay class e.g. 'delay-100'
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, as: Component = 'div', delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) { // Check if sectionRef.current is not null
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) { // Check if sectionRef.current is not null before unobserving
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Component
      ref={sectionRef}
      className={cn('scroll-animate', isVisible && 'is-visible', delay, className)}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
