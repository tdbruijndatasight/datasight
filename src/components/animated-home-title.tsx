
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
  const [typingPhase, setTypingPhase] = useState<'finalSentence' | 'done'>('finalSentence');
  const [showCursor, setShowCursor] = useState(true);

  const typingSpeed = 100;
  const pauseDuration = 300; // Extra duration for pause

  useEffect(() => {
    setDisplayedText("");
    setTypingPhase('finalSentence');
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
        let currentTypingSpeed = typingSpeed;
        const lastCharTyped = displayedText.charAt(displayedText.length - 1);
        const pauseAfterChars = ['>', ','];

        if (pauseAfterChars.includes(lastCharTyped)) {
          currentTypingSpeed += pauseDuration;
        }

        timeoutId = setTimeout(() => {
          setDisplayedText(fullSentence.substring(0, displayedText.length + 1));
        }, currentTypingSpeed);
      } else {
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
