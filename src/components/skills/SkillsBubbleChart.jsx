import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const SKILL_CATEGORIES = [
  {
    id: "data-analytics",
    label: "Data Analytics",
    color: "#fda4af",
    skills: ["SQL", "Power BI", "Tableau", "Pandas"],
  },
  {
    id: "genai-ml",
    label: "GenAI & Machine Learning",
    color: "#cbd5e1",
    skills: ["Python", "Scikit-Learn", "TensorFlow", "LLMs"],
  },
  {
    id: "data-engineering",
    label: "Data Engineering",
    color: "#ccfbf1",
    skills: ["Docker", "Git", "ETL Pipelines", "Data Validation"],
  },
  {
    id: "cloud",
    label: "Cloud Infrastructure",
    color: "#ffedd5",
    skills: ["AWS", "Azure", "Apache", "Google Cloud"],
  },
  {
    id: "web",
    label: "Web Development",
    color: "#e4e4e7",
    skills: ["Vue.js", "React", "Flask", "JavaScript", "Figma"],
  },
];

const BUBBLE_LAYOUT = [
  { categoryId: "data-analytics", skill: "SQL", x: 12, y: 18, size: 88 },
  { categoryId: "data-analytics", skill: "Power BI", x: 28, y: 42, size: 100 },
  { categoryId: "data-analytics", skill: "Tableau", x: 8, y: 58, size: 96 },
  { categoryId: "data-analytics", skill: "Pandas", x: 22, y: 72, size: 92 },
  { categoryId: "genai-ml", skill: "Python", x: 42, y: 12, size: 96 },
  { categoryId: "genai-ml", skill: "Scikit-Learn", x: 55, y: 32, size: 112 },
  { categoryId: "genai-ml", skill: "TensorFlow", x: 48, y: 55, size: 108 },
  { categoryId: "genai-ml", skill: "LLMs", x: 62, y: 68, size: 84 },
  { categoryId: "data-engineering", skill: "Docker", x: 72, y: 20, size: 92 },
  { categoryId: "data-engineering", skill: "Git", x: 85, y: 38, size: 80 },
  { categoryId: "data-engineering", skill: "ETL Pipelines", x: 78, y: 52, size: 118 },
  { categoryId: "data-engineering", skill: "Data Validation", x: 88, y: 72, size: 120 },
  { categoryId: "cloud", skill: "AWS", x: 18, y: 32, size: 84 },
  { categoryId: "cloud", skill: "Azure", x: 38, y: 78, size: 88 },
  { categoryId: "cloud", skill: "Apache", x: 68, y: 82, size: 96 },
  { categoryId: "cloud", skill: "Google Cloud", x: 52, y: 88, size: 112 },
  { categoryId: "web", skill: "Vue.js", x: 92, y: 48, size: 92 },
  { categoryId: "web", skill: "React", x: 75, y: 62, size: 88 },
  { categoryId: "web", skill: "Flask", x: 58, y: 42, size: 86 },
  { categoryId: "web", skill: "JavaScript", x: 82, y: 28, size: 104 },
  { categoryId: "web", skill: "Figma", x: 95, y: 62, size: 86 },
];

function SkillsBubbleChart() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const focusedCategory = hoveredCategory ?? activeCategory;

  const categoryMap = useMemo(
    () => Object.fromEntries(SKILL_CATEGORIES.map((c) => [c.id, c])),
    []
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {SKILL_CATEGORIES.map((category) => {
          const isActive = focusedCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onFocus={() => setHoveredCategory(category.id)}
              onBlur={() => setHoveredCategory(null)}
              onClick={() =>
                setActiveCategory((prev) =>
                  prev === category.id ? null : category.id
                )
              }
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                isActive || hoveredCategory === category.id
                  ? "border-rose-300 bg-rose-100 text-rose-500"
                  : "border-zinc-200 bg-white/80 text-zinc-500 hover:border-rose-200 hover:text-rose-400"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-4xl md:h-[480px]">
        {BUBBLE_LAYOUT.map((bubble, index) => {
          const category = categoryMap[bubble.categoryId];
          const isHighlighted =
            !focusedCategory || focusedCategory === bubble.categoryId;
          const floatDuration = 5 + (index % 5) * 0.8;

          return (
            <motion.div
              key={`${bubble.categoryId}-${bubble.skill}`}
              className="absolute flex items-center justify-center rounded-full border border-white/60 text-center shadow-sm"
              animate={{
                y: [0, -10, 5, 0],
                scale:
                  isHighlighted && focusedCategory === bubble.categoryId
                    ? 1.08
                    : 1,
                opacity: isHighlighted ? 1 : 0.15,
              }}
              transition={{
                y: {
                  duration: floatDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 },
              }}
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: bubble.size,
                height: bubble.size,
                marginLeft: -bubble.size / 2,
                marginTop: -bubble.size / 2,
                backgroundColor: category.color,
                boxShadow: isHighlighted
                  ? `0 0 24px ${category.color}88`
                  : "none",
              }}
              whileHover={{ scale: 1.06 }}
            >
              <span className="px-2 text-center text-xs font-medium leading-tight text-zinc-800 md:text-sm">
                {bubble.skill}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsBubbleChart;
