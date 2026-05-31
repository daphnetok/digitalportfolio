import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiMail } from "react-icons/fi";
import BackgroundLayers from "./components/background/BackgroundLayers";
import CursorAura from "./components/cursor/CursorAura";
import Hero from "./components/Hero";
import LeftSidebar, { NAV_ITEMS } from "./components/layout/LeftSidebar";
import SkillsSpotlightGrid from "./components/skills/SkillsSpotlightGrid";
import { useScrollspy } from "./hooks/useScrollspy";
import EducationSection from "./components/sections/EducationSection";
import FooterCTA from "./components/sections/FooterCTA";

const EXPERIENCES = [
  {
    role: "Undergraduate Research Assistant (GenAI Fellowship)",
    date: "Feb 9, 2026 - May 22, 2026",
    company: "SMU SCIS",
    achievements: [
      "Engineered an advanced RAG and NLI pipeline using Gemma 4 to autonomously extract Knowledge Components from unstructured educational syllabuses.",
      "Developed a deterministic semantic mapping algorithm using vector embeddings to build hierarchical Directed Acyclic Graphs (DAGs), eliminating structural hallucinations.",
      "Tuned hyperparameter thresholds to optimize true-positive pedagogical connections across 340+ concepts, generating 64 recursive DAGs with 100% structural validity.",
    ],
  },
  {
    role: "Data Analyst Intern",
    date: "May 2025 - July 2025",
    company: "Cyzone",
    achievements: [
      "Validated and standardized 30+ venture capital datasets daily across 20+ key cities, ensuring data integrity for flagship reports.",
      "Synthesized emerging technology trends and startup valuations, translating complex market data into actionable insights influencing 22M+ entrepreneurs and investors.",
    ],
  },
  {
    role: "Junior Analyst / Data Intern",
    date: "Sept 2023 - May 2024",
    company: "Attribute Data",
    achievements: [
      "Designed and deployed comprehensive Adobe Analytics dashboards to track campaign performance and customer behavior, directly supporting C-suite KPI reporting.",
      "Automated User Acceptance Testing (UAT) workflows using Excel, accelerating manual validation time by 50%.",
      "Authored technical specifications for web tagging pipelines and co-led onboarding for 16+ stakeholders on data validation protocols.",
    ],
  },
];

const FEATURED_PROJECTS = [
  {
    title: "ISD Entity Extraction App",
    description:
      "Led a team to develop a predictive web app that automates the extraction of entities from unstructured text, reducing manual data sifting.",
    stack: ["Python", "Flask", "Ollama API", "NLP"],
    source: "https://github.com/daphnetok/datathon-entity-relationship-analysis-modelling",
    patternClass: "project-pattern-grid",
  },
  {
    title: "SG Livability Analytics",
    description:
      "Developed predictive dashboards to analyze public transport efficiency and forecast infrastructure load based on benchmarked public data.",
    stack: ["Power BI", "DAX", "AI Predictive Modeling"],
    source: "https://github.com/daphnetok",
    patternClass: "project-pattern-radial",
  },
  {
    title: "Advanced RAG for Education",
    description:
      "Architected an end-to-end pipeline using Gemma 4 and Python to automatically extract and map educational concepts from unstructured syllabuses. Engineered semantic algorithms and an automated validation system to generate highly accurate, hallucination-free knowledge graphs.",
    stack: ["Python", "Gemma 4", "LlamaParse", "Llava", "Vector Embeddings", "NLI"],
    source: "https://github.com/daphnetok/Advanced-RAG-for-education",
    patternClass: "project-pattern-diagonal",
  },
  {
    title: "2Shiok2Go - reduce SG hawker food waste",
    description:
      "2Shiok2Go is a web app that reduces food waste in Singapore by linking users to hawker stalls with surplus meals. Featuring location-based listings, price and dietary filters, pickup slots, and AI-powered food suggestions, it makes hawker food more accessible while promoting sustainability.",
    stack: ["Python", "Vue.js", "Firebase", "Chart.js", "Tailwind.css", "Google Maps API", "Gemini API"],
    source: "https://github.com/daphnetok/Advanced-RAG-for-education",
    patternClass: "project-pattern-grid",
  },
  {
    title: "Doctor Everywhere",
    description:
      "Doctor Everywhere covers a Telemedicine business scenario, where patients are able to consult a doctor and get a prescription from the comfort of their home. Our system allows the patient to queue virtually and make payment, the doctor to make prescription.",
    stack: ["Python", "Vue.js", "Firebase", "Chart.js", "Tailwind.css", "Google Maps API", "Gemini API"],
    source: "https://github.com/daphnetok/Advanced-RAG-for-education",
    patternClass: "project-pattern-radial",
  },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function App() {
  const activeSection = useScrollspy(SECTION_IDS);
  const [showIdentity, setShowIdentity] = useState(false);
  const [experienceProgress, setExperienceProgress] = useState(0);
  const experienceSectionRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";

    const fontId = "space-mono-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap";
      document.head.appendChild(link);
    }

    return () => {
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowIdentity(window.scrollY > window.innerHeight);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const section = experienceSectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const progress = ((window.innerHeight - rect.top) / total) * 100;
      setExperienceProgress(Math.max(0, Math.min(100, progress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-zinc-800">
      <BackgroundLayers />
      <CursorAura />
      <LeftSidebar activeSection={activeSection} showIdentity={showIdentity} />

      <main className="relative z-10 lg:pl-72">
        <Hero />

        <section id="about" className="min-h-screen px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2
              className="mb-12 text-4xl font-bold text-zinc-800 md:text-5xl"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              About Me
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="aura-card rounded-2xl p-8">
                <p className="body-copy leading-relaxed text-zinc-500">
                  I am Daphne Tok, an Information Systems undergraduate specializing
                  in Business Analytics. I am passionate about transforming raw data
                  into actionable business intelligence using tools like Power BI,
                  SQL, and Python. I enjoy uncovering insights that directly optimize
                  business strategy and building AI-driven solutions.
                </p>
              </div>
              <div className="aura-card rounded-2xl p-8">
                <div className="flex h-full flex-col justify-center gap-4">
                  <a
                    href="/Daphne_Tok_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aura-button group flex items-center justify-center gap-3 rounded-xl px-6 py-5 text-lg font-semibold"
                  >
                    <FiDownload className="text-xl text-rose-400 transition group-hover:text-rose-500" />
                    View Résumé
                  </a>
                  <a
                    href="https://github.com/daphnetok"
                    target="_blank"
                    rel="noreferrer"
                    className="aura-button group flex items-center justify-center gap-3 rounded-xl px-6 py-5 text-lg font-semibold"
                  >
                    <FiGithub className="text-xl text-rose-400 transition group-hover:text-rose-500" />
                    GitHub
                  </a>
                  <a
                    href="mailto:daphne.tok.2024@computing.smu.edu.sg"
                    className="aura-button group flex items-center justify-center gap-3 rounded-xl px-6 py-5 text-lg font-semibold"
                  >
                    <FiMail className="text-xl text-rose-400 transition group-hover:text-rose-500" />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2
              className="mb-12 text-4xl font-bold text-zinc-800 md:text-5xl"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Skills
            </h2>
            <SkillsSpotlightGrid />
          </div>
        </section>

        <section
          id="experience"
          ref={experienceSectionRef}
          className="min-h-screen px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className="mb-12 text-4xl font-bold text-zinc-800 md:text-5xl"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Experience
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-zinc-200 md:block" />
              <div
                className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-rose-300 transition-[height] duration-300 md:block"
                style={{ height: `${experienceProgress}%` }}
              />

              <div className="space-y-10">
                {EXPERIENCES.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={`${item.role}-${index}`}
                      className="relative grid md:grid-cols-2 md:gap-16"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className={`${
                          isLeft ? "md:col-start-1" : "md:col-start-2"
                        } aura-card rounded-2xl p-8`}
                      >
                        <h3 className="text-2xl font-semibold text-zinc-800">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm uppercase tracking-widest text-zinc-500">
                          {item.date} · {item.company}
                        </p>
                        <ul className="mt-5 list-disc space-y-2 pl-5 text-zinc-500">
                          {item.achievements.map((achievement) => (
                            <li key={achievement} className="body-copy">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <div className="pointer-events-none absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-zinc-300 bg-white md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <EducationSection />

        <section id="projects" className="min-h-screen px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2
              className="mb-12 text-4xl font-bold text-zinc-800 md:text-5xl"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PROJECTS.map((project) => (
                <article key={project.title} className="project-flip-card h-80">
                  <div className="project-flip-card-inner relative h-full w-full rounded-2xl">
                    <div
                      className={`project-flip-face project-flip-front ${project.patternClass} aura-card flex h-full items-end rounded-2xl p-6`}
                    >
                      <h3
                        className="text-2xl font-bold text-zinc-800"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div className="project-flip-face project-flip-back aura-card flex h-full flex-col rounded-2xl p-6">
                      <h3 className="flex-none text-xl font-semibold text-zinc-800">
                        {project.title}
                      </h3>
                      <p className="body-copy project-scrollbar mt-3 flex-grow overflow-y-auto pr-1 text-sm leading-relaxed text-zinc-500">
                        {project.description}
                      </p>
                      <div className="mt-auto flex-none space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tag) => (
                            <span
                              key={tag}
                              className="aura-plate rounded-full px-3 py-1 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.source}
                          className="aura-button inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
                        >
                          View Source
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
