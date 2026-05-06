import { useEffect } from "react";
import { FiDownload, FiGithub, FiMail } from "react-icons/fi";
import Hero from "./components/Hero";

const TECH_STACK = [
  "Pandas",
  "SQL",
  "Docker",
  "React",
  "Vue",
  "Flask",
  "Azure",
  "LLMs (Gemma)",
  "Data Engineering",
  "Generative AI",
  "Microservices",
  "Git",
  "Python",
];

const EXPERIENCES = [
  {
    role: "Business Analytics Intern",
    date: "May 2025 - Aug 2025",
    company: "Company Name",
    achievements: [
      "Built dashboards to track KPI trends across operations and marketing teams.",
      "Automated weekly reporting workflows, reducing manual prep time by 40%.",
      "Presented actionable insights that improved campaign targeting decisions.",
    ],
  },
  {
    role: "Data Analyst (Part-Time)",
    date: "Jan 2024 - Apr 2025",
    company: "Company Name",
    achievements: [
      "Designed SQL data models for cleaner analytics and faster ad-hoc analysis.",
      "Developed Python data validation checks to improve data quality.",
      "Collaborated with product and business teams to define success metrics.",
    ],
  },
];

const FEATURED_PROJECTS = [
  {
    title: "InsightPulse Dashboard",
    description:
      "An analytics dashboard for tracking funnel performance, campaign ROI, and weekly KPI movement in one place.",
    stack: ["React", "SQL", "Python"],
    source: "#",
    patternClass: "project-pattern-grid",
  },
  {
    title: "GenAI Knowledge Copilot",
    description:
      "A retrieval-powered assistant that summarizes internal docs and provides source-linked answers for faster decisions.",
    stack: ["Flask", "LLMs (Gemma)", "Azure"],
    source: "#",
    patternClass: "project-pattern-radial",
  },
  {
    title: "Pipeline Watchtower",
    description:
      "A lightweight monitoring layer for ETL pipelines with automated anomaly flags and alert summaries.",
    stack: ["Data Engineering", "Docker", "Microservices"],
    source: "#",
    patternClass: "project-pattern-diagonal",
  },
];

function App() {
  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7789/ingest/4cad9f9e-39a5-48db-9dd0-038ddb88a4a3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "0b756e",
      },
      body: JSON.stringify({
        sessionId: "0b756e",
        runId: "pre-fix",
        hypothesisId: "H3",
        location: "src/App.jsx:7",
        message: "App mounted and useEffect entered",
        data: {},
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

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

  return (
    <div className="bg-neutral-950 text-neutral-100 font-sans">
      <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-6 py-4 text-sm uppercase tracking-widest">
          <a href="#about" className="transition hover:text-neutral-300">
            About
          </a>
          <a href="#skills" className="transition hover:text-neutral-300">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-neutral-300">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-neutral-300">
            Projects
          </a>
        </div>
      </nav>

      <Hero />

      <section id="about" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-12 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            About Me
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
              <p className="leading-relaxed text-neutral-300">
                I am Daphne, an Information Systems student with a strong focus
                on business analytics, data analytics, and AI-driven products.
                I enjoy translating complex datasets into practical insights and
                building thoughtful solutions that support clearer decisions and
                measurable impact.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
              <div className="flex h-full flex-col justify-center gap-4">
                <a
                  href="#"
                  className="group flex items-center justify-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-5 text-lg font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <FiDownload className="text-xl text-neutral-300 transition group-hover:text-neutral-100" />
                  Download CV
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-5 text-lg font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <FiGithub className="text-xl text-neutral-300 transition group-hover:text-neutral-100" />
                  GitHub
                </a>
                <a
                  href="mailto:yourname@example.com"
                  className="group flex items-center justify-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-5 text-lg font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <FiMail className="text-xl text-neutral-300 transition group-hover:text-neutral-100" />
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
            className="mb-12 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Skills
          </h2>
          <div className="skills-marquee-mask rounded-2xl border border-neutral-800 bg-neutral-900/40 py-8">
            <div className="skills-marquee-track flex items-center gap-4">
              {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="shrink-0 rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 text-sm font-medium tracking-wide text-neutral-100"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-12 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Experience
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-800 md:block" />

            <div className="space-y-10">
              {EXPERIENCES.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={`${item.role}-${index}`}
                    className="relative grid md:grid-cols-2 md:gap-16"
                  >
                    <div
                      className={`${
                        isLeft ? "md:col-start-1" : "md:col-start-2"
                      } rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8`}
                    >
                      <h3 className="text-2xl font-semibold">{item.role}</h3>
                      <p className="mt-1 text-sm uppercase tracking-widest text-neutral-400">
                        {item.date} · {item.company}
                      </p>
                      <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-300">
                        {item.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-neutral-600 bg-neutral-950 md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-12 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <article key={project.title} className="project-flip-card h-80">
                <div className="project-flip-card-inner relative h-full w-full rounded-2xl">
                  <div
                    className={`project-flip-face project-flip-front ${project.patternClass} flex h-full items-end rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6`}
                  >
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="project-flip-face project-flip-back flex h-full flex-col rounded-2xl border border-neutral-700 bg-neutral-900 p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.source}
                      className="mt-auto inline-flex items-center justify-center rounded-lg border border-neutral-600 px-4 py-2 text-sm font-medium transition hover:border-neutral-400 hover:bg-neutral-800"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
