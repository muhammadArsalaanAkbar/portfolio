// src/component/header/typing.tsx
"use client";

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (index < text.length) {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      // Pause for a moment, then reset
      clearInterval(interval!);
      setTimeout(() => {
        setDisplayedText(''); // Clear the text
        setIndex(0); // Reset index
      }, 1000); // 1 second delay before restarting
    }

    return () => {
      if (interval) clearInterval(interval); // Clear interval on unmount
    };
  }, [text, speed, index]);

  return <h1>{displayedText}</h1>;
};

export default TypingEffect;