import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HEADING_TEXT = "Hi there, I'm Daphne";
const SUBTITLE_WORDS = [
  "Engineering",
  "intelligent",
  "data",
  "pipelines",
  "and",
  "predictive",
  "models",
  "to",
  "drive",
  "strategic",
  "decisions.",
];
const HIGHLIGHT_WORDS = new Set(["predictive", "models", "strategic", "decisions."]);

function Hero() {
  const [headingLength, setHeadingLength] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [showFocused, setShowFocused] = useState(false);
  const [headingDone, setHeadingDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);

  useEffect(() => {
    if (headingLength < HEADING_TEXT.length) {
      const timeout = setTimeout(() => setHeadingLength((prev) => prev + 1), 70);
      return () => clearTimeout(timeout);
    }
    setHeadingDone(true);
  }, [headingLength]);

  useEffect(() => {
    if (!headingDone) return;
    if (wordCount < SUBTITLE_WORDS.length) {
      const timeout = setTimeout(() => setWordCount((prev) => prev + 1), 130);
      return () => clearTimeout(timeout);
    }
    setSubtitleDone(true);
  }, [headingDone, wordCount]);

  useEffect(() => {
    if (!subtitleDone) return;
    const timeout = setTimeout(() => setShowFocused(true), 250);
    return () => clearTimeout(timeout);
  }, [subtitleDone]);

  const displayedHeading = HEADING_TEXT.slice(0, headingLength);
  const displayedWords = SUBTITLE_WORDS.slice(0, wordCount);
  const isTypingHeading = headingLength < HEADING_TEXT.length;
  const isTypingSubtitle =
    headingDone && wordCount < SUBTITLE_WORDS.length;

  useEffect(() => {
    const serifId = "playfair-font";
    if (!document.getElementById(serifId)) {
      const link = document.createElement("link");
      link.id = serifId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1
          className="text-5xl font-bold tracking-tight text-zinc-800 md:text-7xl"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {displayedHeading}
          {isTypingHeading && (
            <span className="ml-0.5 inline-block h-[0.9em] w-0.5 animate-pulse bg-rose-300 align-middle" />
          )}
        </h1>

        <p
          className="mx-auto mt-6 min-h-[4.5rem] max-w-3xl font-serif text-xl leading-relaxed text-zinc-600 md:text-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {displayedWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={HIGHLIGHT_WORDS.has(word) ? "text-pink-500" : undefined}
            >
              {word}
              {index < displayedWords.length - 1 ? " " : ""}
            </span>
          ))}
          {isTypingSubtitle && (
            <span className="ml-0.5 inline-block h-[0.8em] w-0.5 animate-pulse bg-rose-300 align-middle" />
          )}
        </p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={showFocused ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-6 text-lg text-zinc-500 md:text-xl"
        >
          <span className="text-zinc-500">Focused on </span>
          <span className="font-medium text-rose-400">Business Analytics</span>
        </motion.p>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-rose-300">
        ↓
      </div>
    </section>
  );
}

export default Hero;
