"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function SplitText({ text }) {
  const containerRef = useRef(null);
  const [splitWords, setSplitWords] = useState([]);
  const animationFrame = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const splitTextManually = useCallback(() => {
    if (!containerRef.current || !text) return [];
    return text.split(/\s+/).flatMap((word, wordIndex, allWords) => {
      const letters = word.split("").map((letter, letterIndex) => ({
        letter,
        wordIndex,
        letterIndex,
        opacity: 0,
        y: 10,
      }));
      if (wordIndex < allWords.length - 1) {
        letters.push({
          letter: ' ',
          wordIndex,
          letterIndex: word.length,
          isSpace: true,
          opacity: 0,
          y: 0,
        });
      }
      return letters;
    });
  }, [text]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };
  }, [isVisible]); // Re-run observer setup if visibility changes (though it shouldn't)

  useEffect(() => {
    if (isVisible) {
      document.fonts.ready.then(() => {
        if (!containerRef.current || !text) return;

        containerRef.current.style.visibility = "visible";
        const initialSplitWords = splitTextManually();
        setSplitWords(initialSplitWords);

        const animateWords = () => {
          let startTime;
          const duration = 2000; // 2 seconds
          const staggerDelay = 50; // milliseconds
          let animationActive = true;

          const animateStep = (timestamp) => {
            if (!animationActive) return;
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            const newSplitWords = initialSplitWords.map((item) => {
              if (item.isSpace) return item;

              const wordDelay = item.wordIndex * staggerDelay;
              if (elapsed >= wordDelay) {
                const allLettersInWord = initialSplitWords.filter(lw => lw.wordIndex === item.wordIndex && !lw.isSpace);
                const letterDelay = item.letterIndex * (duration / allLettersInWord.length);
                const effectiveElapsed = elapsed - wordDelay;
                if (effectiveElapsed >= letterDelay && effectiveElapsed < letterDelay + duration) {
                  const progress = Math.min(1, (effectiveElapsed - letterDelay) / duration);
                  const easeOutElastic = (t) => {
                    const p = 0.3;
                    const s = p / 4;
                    return 1 - Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p);
                  };
                  return {
                    ...item,
                    opacity: easeOutElastic(progress),
                    y: 10 * (1 - easeOutElastic(progress)),
                  };
                } else if (effectiveElapsed >= letterDelay + duration) {
                  return { ...item, opacity: 1, y: 0 };
                }
              }
              return item;
            });

            setSplitWords(newSplitWords);

            const allFinished = newSplitWords.every(item => item.isSpace || (item.opacity === 1 && item.y === 0));
            if (allFinished) {
              animationActive = false;
              if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
                animationFrame.current = null;
              }
              return;
            }

            animationFrame.current = requestAnimationFrame(animateStep);
          };

          animationFrame.current = requestAnimationFrame(animateStep);

          return () => {
            animationActive = false;
            if (animationFrame.current) {
              cancelAnimationFrame(animationFrame.current);
              animationFrame.current = null;
            }
          };
        };

        animateWords();
      });
    }

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };
  }, [isVisible, splitTextManually, text]); // Trigger animation only when isVisible becomes true

  return (
    <div className="border border-gray-300 container shadow-2xl rounded-xl p-2" ref={containerRef}>
      <h1 className="h1 text-2xl md:text-3xl xl:text-7xl  font-ralewayB">
        {splitWords.map((item, index) => (
          <span
            key={index}
            className={`split-word ${item.isSpace ? 'space' : ''}`}
            style={{ opacity: item.opacity, transform: `translateY(${item.y}px)` }}
          >
            {item.letter}
          </span>
        ))}
      </h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style jsx>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 450px;
        text-align: center;
        visibility: hidden; /* Initially hidden */
      }

      .h1 {
        word-break: break-word;
      }

      .split-word {
        display: inline-block;
        will-change: transform, opacity;
      }

      .space {
        width: 0.5em;
      }
    `}</style>
  );
}
