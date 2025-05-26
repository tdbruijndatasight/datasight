
"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';

const AnimatedHomeTitle: FC = () => {
  const { t } = useLanguage();
  const targetWords = ["Data", "Inzicht", "Bedrijfswaarde"];
  const finalSentenceKey = 'homeTitle';

  const [displayedText, setDisplayedText] = useState("");
  const [currentWordPhase, setCurrentWordPhase] = useState(0); // Index of targetWords
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
  }, [t]);

  useEffect(() => {
    if (animationComplete) return;

    const finalSentence = t(finalSentenceKey);
    let timeoutId: NodeJS.Timeout | undefined;

    if (!isTypingFullSentence) {
        // Typing individual words: "Data", then "Data Inzicht", then "Data Inzicht Bedrijfswaarde"
        if (currentWordPhase < targetWords.length) {
            const wordToType = targetWords[currentWordPhase];
            const basePrefix = currentWordPhase > 0 
                ? targetWords.slice(0, currentWordPhase).join(" ") + " " 
                : "";

            // Current length of the word being typed, derived from displayedText
            let currentLengthOfWordPart = 0;
            if (displayedText.startsWith(basePrefix)) {
                currentLengthOfWordPart = displayedText.length - basePrefix.length;
            } else if (currentWordPhase === 0) { // First word
                currentLengthOfWordPart = displayedText.length;
            }


            if (currentLengthOfWordPart < wordToType.length) {
                // Need to type more characters of the current word
                timeoutId = setTimeout(() => {
                    setDisplayedText(basePrefix + wordToType.substring(0, currentLengthOfWordPart + 1));
                }, typingSpeed);
            } else {
                // Current word is fully typed
                if (currentWordPhase < targetWords.length - 1) {
                    // More words to type
                    timeoutId = setTimeout(() => {
                        // Ensure the displayed text has the full current word and a space before moving to next phase
                        setDisplayedText(basePrefix + wordToType + " ");
                        setCurrentWordPhase(prev => prev + 1);
                    }, pauseBetweenWords);
                } else {
                    // All initial words are typed
                    timeoutId = setTimeout(() => {
                        setIsTypingFullSentence(true);
                        setDisplayedText(""); // Clear for full sentence animation
                    }, pauseBeforeFullSentence);
                }
            }
        }
    } else {
        // Typing full sentence
        if (displayedText.length < finalSentence.length) {
            timeoutId = setTimeout(() => {
                setDisplayedText(finalSentence.substring(0, displayedText.length + 1));
            }, typingSpeed);
        } else {
            setAnimationComplete(true);
        }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, currentWordPhase, isTypingFullSentence, t, animationComplete, finalSentenceKey, targetWords, typingSpeed, pauseBetweenWords, pauseBeforeFullSentence]);


  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight lg:min-h-[8rem] md:min-h-[6.5rem] min-h-[5rem] flex items-center justify-center md:justify-start">
      {displayedText}
      {!animationComplete && <span className="blinking-cursor">|</span>}
    </h1>
  );
};

export default AnimatedHomeTitle;
