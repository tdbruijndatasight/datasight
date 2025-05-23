
"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin as LinkedinIconLucide } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SITE_CONFIG } from '@/constants/site';
import { useLanguage } from '@/hooks/use-language';
import { cn } from '@/lib/utils';

const StickyContactButtons: React.FC = () => {
  const { t } = useLanguage();

  const contactActions = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${SITE_CONFIG.email}`,
      label: t('contactEmail'),
      ariaLabel: `Send an email to ${SITE_CONFIG.email}`,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
      label: t('contactPhone'),
      ariaLabel: `Call ${SITE_CONFIG.phone}`,
    },
    {
      icon: <LinkedinIconLucide className="h-5 w-5" />,
      href: SITE_CONFIG.linkedIn,
      label: t('contactLinkedIn'),
      ariaLabel: 'View LinkedIn Profile',
    },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 flex flex-col space-y-2 p-2 bg-card/80 dark:bg-card/60 backdrop-blur-sm shadow-lg rounded-l-md border border-r-0 border-border">
        {contactActions.map((action) => (
          <Tooltip key={action.label}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-primary hover:bg-primary/10 hover:text-primary"
                aria-label={action.ariaLabel}
              >
                <Link href={action.href} target="_blank" rel="noopener noreferrer">
                  {action.icon}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-popover text-popover-foreground">
              <p>{action.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default StickyContactButtons;
