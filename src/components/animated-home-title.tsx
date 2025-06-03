
"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';

interface AnimatedHomeTitleProps {
  onSubtitleAnimate: () => void;
}

const AnimatedHomeTitle: FC<AnimatedHomeTitleProps> = ({ onSubtitleAnimate }) => {
  const { t, language } = useLanguage();

  const finalSentenceKey = 'homeTitle';

  const [displayedText, setDisplayedText] = useState("");
  const [typingPhase, setTypingPhase] = useState<'finalSentence' | 'done'>('finalSentence'); // Start directly with final sentence
  const [showCursor, setShowCursor] = useState(true);

  const typingSpeed = 100;

  useEffect(() => {
    // Reset animation states when language changes
    setDisplayedText("");
    setTypingPhase('finalSentence'); // Reset to start typing the final sentence directly
    setShowCursor(true);
  }, [t, language]);

  useEffect(() => {
    if (typingPhase === 'done') {
      setShowCursor(false);
      return;
    }

    let timeoutId: NodeJS.Timeout | undefined;

    if (typingPhase === 'finalSentence') {
      const fullSentence = t(finalSentenceKey);
      if (displayedText.length < fullSentence.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullSentence.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing final sentence
        setTypingPhase('done');
        onSubtitleAnimate();
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, typingPhase, t, finalSentenceKey, onSubtitleAnimate, typingSpeed, language]);


  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight lg:min-h-[8rem] md:min-h-[6.5rem] min-h-[5rem] flex items-center justify-center md:justify-start">
      {displayedText}
      {showCursor && <span className="blinking-cursor">|</span>}
    </h1>
  );
};

export default AnimatedHomeTitle;
