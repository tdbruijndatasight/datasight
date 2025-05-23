import React from 'react';

// Example Splunk-like Icon (simplified)
export const SplunkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v2.66M8.5 6.5L6.84 5.16M6.5 11h-2.66M6.84 18.84L8.5 17.5M12 21v-2.66M15.5 17.5l1.66 1.34M17.5 13h2.66M17.16 5.16L15.5 6.5" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

// Example Cribl-like Icon (simplified)
export const CriblIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L2 7 L12 12 L22 7 L12 2 Z" />
    <path d="M2 17 L12 22 L22 17" />
    <path d="M2 12 L12 17 L22 12" />
  </svg>
);

export const DataStrategyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <path d="m12 12-2-2" />
    <path d="m14 12-2 2" />
  </svg>
);

export const AiSolutionIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);
