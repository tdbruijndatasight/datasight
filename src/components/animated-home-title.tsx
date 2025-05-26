
"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';

const AnimatedHomeTitle: FC = () => {
  const { t } = useLanguage();
  const targetWords = ["Data", "Inzicht", "Bedrijfswaarde"];
  const finalSentenceKey = 'homeTitle';

  const [displayedText, setDisplayedText] = useState("");
  const [currentWordPhase, setCurrentWordPhase] = useState(0);
  const [isTypingFullSentence, setIsTypingFullSentence] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const typingSpeed = 100; // ms
  const pauseBetweenWords = 400; // ms
  const pauseBeforeFullSentence = 800; // ms

  useEffect(() => {
    // Reset animation states when language changes
    setDisplayedText("");
    setCurrentWordPhase(0);
    setIsTypingFullSentence(false);
    setAnimationComplete(false);
  }, [t]); // Depends on t to reset on language change

  useEffect(() => {
    if (animationComplete) return;

    const finalSentence = t(finalSentenceKey); // Get current translation of final sentence
    let timeoutId: NodeJS.Timeout | undefined;

    if (!isTypingFullSentence) {
      // Typing individual words
      if (currentWordPhase < targetWords.length) {
        const wordToType = targetWords[currentWordPhase];
        const prefix = targetWords.slice(0, currentWordPhase).join(" ") + (currentWordPhase > 0 ? " " : "");
        
        // Ensure prefix is set before typing the current word
        if (displayedText !== prefix && !animationComplete) {
           // This ensures we start typing the new word correctly after the prefix is displayed
           if (!displayedText.startsWith(prefix)){
             setDisplayedText(prefix); // Set prefix, next effect run will type the word
             return; // Allow state to update and re-trigger effect
           }
        }

        let charIndex = 0;
        const typeChar = () => {
          if (charIndex < wordToType.length) {
            setDisplayedText(prefix + wordToType.substring(0, charIndex + 1));
            charIndex++;
            timeoutId = setTimeout(typeChar, typingSpeed);
          } else {
            // Word finished
            if (currentWordPhase < targetWords.length - 1) {
              timeoutId = setTimeout(() => {
                setCurrentWordPhase(prev => prev + 1);
              }, pauseBetweenWords);
            } else {
              // All words typed
              timeoutId = setTimeout(() => {
                setIsTypingFullSentence(true);
                setDisplayedText(""); // Clear for full sentence
              }, pauseBeforeFullSentence);
            }
          }
        };
        // Start typing if prefix is correctly set or it's the first word
        if (displayedText === prefix || (currentWordPhase === 0 && displayedText.length < targetWords[0].length) ) {
            typeChar();
        } else if (currentWordPhase > 0 && displayedText === targetWords.slice(0, currentWordPhase).join(" ")){
            // This handles the state where prefix is just the completed words without trailing space.
            // Add space then trigger typeChar.
            setDisplayedText(prefix); // Ensures the space is added after previous word.
        }


      }
    } else {
      // Typing full sentence
      let charIndex = 0;
      const typeFullSentenceChar = () => {
        if (charIndex < finalSentence.length) {
          setDisplayedText(finalSentence.substring(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(typeFullSentenceChar, typingSpeed);
        } else {
          setAnimationComplete(true);
        }
      };
      if(displayedText === "") { // Only start typing if display text is cleared for sentence
        typeFullSentenceChar();
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, currentWordPhase, isTypingFullSentence, finalSentenceKey, t, animationComplete]);


  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight lg:min-h-[8rem] md:min-h-[6.5rem] min-h-[5rem] flex items-center justify-center md:justify-start">
      {displayedText}
      {!animationComplete && <span className="blinking-cursor">|</span>}
    </h1>
  );
};

export default AnimatedHomeTitle;
