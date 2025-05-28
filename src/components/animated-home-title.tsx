
"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';

interface AnimatedHomeTitleProps {
  onSubtitleAnimate: () => void;
}

const AnimatedHomeTitle: FC<AnimatedHomeTitleProps> = ({ onSubtitleAnimate }) => {
  const { t, language } = useLanguage();

  const initialWordsNl = ["Data...", "Inzicht...", "Bedrijfswaarde..."];
  const initialWordsEn = ["Data...", "Insights...", "Value..."];
  const finalSentenceKey = 'homeTitle';

  const [displayedText, setDisplayedText] = useState("");
  const [currentInitialWordIndex, setCurrentInitialWordIndex] = useState(0);
  const [typingPhase, setTypingPhase] = useState<'initialWord' | 'finalSentence' | 'done'>('initialWord');
  const [showCursor, setShowCursor] = useState(true);

  const typingSpeed = 100;
  const pauseBetweenInitialWords = 3000;
  const extraPauseBeforeFinalSentence = 500; 

  const getCurrentInitialWords = () => {
    return language === 'en' ? initialWordsEn : initialWordsNl;
  };

  useEffect(() => {
    // Reset animation states when language changes
    setDisplayedText("");
    setCurrentInitialWordIndex(0);
    setTypingPhase('initialWord');
    setShowCursor(true);
  }, [t, language]); 

  useEffect(() => {
    if (typingPhase === 'done') {
      setShowCursor(false);
      return;
    }

    let timeoutId: NodeJS.Timeout | undefined;
    const currentInitialWords = getCurrentInitialWords();

    if (typingPhase === 'initialWord') {
      if (currentInitialWordIndex < currentInitialWords.length) {
        const wordToType = currentInitialWords[currentInitialWordIndex];
        if (displayedText.length < wordToType.length) {
          // Typing current initial word
          timeoutId = setTimeout(() => {
            setDisplayedText(wordToType.substring(0, displayedText.length + 1));
          }, typingSpeed);
        } else {
          // Finished typing current initial word, pause, then clear for next or move to final
          const isLastInitialWord = currentInitialWordIndex === currentInitialWords.length - 1;
          const nextPauseDuration = isLastInitialWord
            ? (pauseBetweenInitialWords - 2000 + extraPauseBeforeFinalSentence) 
            : pauseBetweenInitialWords;

          timeoutId = setTimeout(() => {
            setDisplayedText(""); // Clear current word
            if (!isLastInitialWord) {
              setCurrentInitialWordIndex(prev => prev + 1);
            } else {
              setTypingPhase('finalSentence');
            }
          }, nextPauseDuration);
        }
      }
    } else if (typingPhase === 'finalSentence') {
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
  }, [displayedText, currentInitialWordIndex, typingPhase, t, finalSentenceKey, onSubtitleAnimate, typingSpeed, pauseBetweenInitialWords, extraPauseBeforeFinalSentence, language]);


  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight lg:min-h-[8rem] md:min-h-[6.5rem] min-h-[5rem] flex items-center justify-center md:justify-start">
      {displayedText}
      {showCursor && <span className="blinking-cursor">|</span>}
    </h1>
  );
};

export default AnimatedHomeTitle;
