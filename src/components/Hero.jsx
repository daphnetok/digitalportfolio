import { useEffect, useState } from "react";

const PHRASES = ["Business Analytics", "Data Analytics", "Generative AI"];

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];

    const typeDelay = isDeleting ? 55 : 95;
    const holdDelay = 1100;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && typedText === currentPhrase) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && typedText === "") {
          setIsDeleting(false);
          setPhraseIndex((previous) => (previous + 1) % PHRASES.length);
          return;
        }

        const nextText = isDeleting
          ? currentPhrase.slice(0, typedText.length - 1)
          : currentPhrase.slice(0, typedText.length + 1);

        setTypedText(nextText);
      },
      !isDeleting && typedText === currentPhrase ? holdDelay : typeDelay
    );

    return () => clearTimeout(timeout);
  }, [phraseIndex, typedText, isDeleting]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1
          className="text-5xl font-bold tracking-tight md:text-7xl"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Hi there, I&apos;m Daphne
        </h1>

        <p className="mx-auto mt-6 text-lg text-neutral-300 md:text-xl">
          <span className="text-neutral-400">Focused on </span>
          <span className="font-medium text-neutral-100">{typedText}</span>
          <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-neutral-300 align-middle" />
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-neutral-400">
        ↓
      </div>
    </section>
  );
}

export default Hero;
