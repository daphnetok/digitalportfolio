import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function FooterCTA() {
  return (
    <footer id="contact" className="px-6 pb-6 pt-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="animate-subtle-glow cta-highlight rounded-3xl border border-rose-200/70 bg-white/70 px-8 py-14 text-center shadow-[0_20px_60px_rgba(244,114,182,0.18)] backdrop-blur-sm md:px-16"
        >
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
            <motion.a
              href="mailto:daphne.tok.2024@computing.smu.edu.sg"
              whileTap={{ scale: 0.95 }}
              className="aura-button inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
            >
              <FiMail className="text-lg" />
              daphne.tok.2024@computing.smu.edu.sg
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/daphnetok"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="aura-button inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
            >
              <FiLinkedin className="text-lg" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/daphnetok"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="aura-button inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
            >
              <FiGithub className="text-lg" />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        <p className="mb-6 mt-12 text-center text-xs text-zinc-400">
          © 2026 Daphne Tok 
        </p>
      </div>
    </footer>
  );
}

export default FooterCTA;
