import { motion } from "framer-motion";

const EDUCATION = [
  {
    school: "Singapore Management University (SMU)",
    period: "Sept 2024 – Present",
    credential: "Bachelor of Science (Information Systems)",
    focus: "Specialized in Business Analytics",
  },
  {
    school: "Nanyang Polytechnic (NYP)",
    period: "Apr 2021 – May 2024",
    credential: "Diploma in Applied AI & Analytics",
    focus: "Specialized in Big Data Analytics",
  },
];

function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-12 text-4xl font-bold text-zinc-800 md:text-5xl"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Education
        </h2>
        <div className="relative space-y-8 border-l border-zinc-200 pl-8">
          {EDUCATION.map((item, index) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aura-card relative rounded-2xl p-8"
            >
              <span className="absolute -left-[2.125rem] top-8 h-3 w-3 rounded-full border border-zinc-300 bg-white" />
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                {item.period}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-zinc-800">
                {item.school}
              </h3>
              <p className="body-copy mt-2 text-zinc-600">{item.credential}</p>
              <p className="body-copy mt-1 text-sm text-zinc-500">{item.focus}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
