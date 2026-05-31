import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function FooterCTA() {
  return (
    <footer id="contact" className="px-6 pb-6 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-pink-100 bg-white/50 px-8 py-14 text-center backdrop-blur-sm md:px-16">
          <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
            Let&apos;s Work Together
          </p>
          <h2
            className="mt-4 text-3xl font-bold text-zinc-800 md:text-4xl"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Open to Data & Business Analyst Roles
          </h2>
          <p className="body-copy mx-auto mt-4 max-w-xl text-zinc-500">
            Looking for opportunities where data meets decision-making.
            Let&apos;s connect.
          </p>

          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:daphne.tok.2024@computing.smu.edu.sg"
              className="aura-button inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
            >
              <FiMail className="text-lg" />
              daphne.tok.2024@computing.smu.edu.sg
            </a>
            <a
              href="https://www.linkedin.com/in/daphnetok"
              target="_blank"
              rel="noopener noreferrer"
              className="aura-button inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
            >
              <FiLinkedin className="text-lg" />
              LinkedIn
            </a>
            <a
              href="https://github.com/daphnetok"
              target="_blank"
              rel="noopener noreferrer"
              className="aura-button inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
            >
              <FiGithub className="text-lg" />
              GitHub
            </a>
          </div>
        </div>

        <p className="mb-6 mt-12 text-center text-xs text-zinc-400">
          © 2026 Daphne Tok · Designed & Coded with React
        </p>
      </div>
    </footer>
  );
}

export default FooterCTA;
