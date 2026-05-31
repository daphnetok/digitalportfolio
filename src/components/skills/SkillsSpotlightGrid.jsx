import {
  FiBarChart2,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
} from "react-icons/fi";
import SkillSpotlightCard from "./SkillSpotlightCard";

const SKILL_CATEGORIES = [
  {
    title: "Data Analytics",
    description:
      "Turning structured and unstructured data into clear narratives, dashboards, and decision-ready insights.",
    icon: FiBarChart2,
    skills: ["SQL", "Power BI", "Tableau", "Pandas"],
  },
  {
    title: "GenAI & ML",
    description:
      "Building intelligent systems with modern ML stacks, from model training to LLM-powered applications.",
    icon: FiCpu,
    skills: ["Python", "Scikit-Learn", "TensorFlow", "LLMs"],
  },
  {
    title: "Data Engineering",
    description:
      "Designing reliable pipelines, validation workflows, and versioned data infrastructure for analytics teams.",
    icon: FiDatabase,
    skills: ["Docker", "Git", "ETL Pipelines", "Data Validation"],
  },
  {
    title: "Cloud Infra",
    description:
      "Deploying and scaling analytics workloads across major cloud platforms and distributed systems.",
    icon: FiCloud,
    skills: ["AWS", "Azure", "Apache", "Google Cloud"],
  },
  {
    title: "Web Dev",
    description:
      "Crafting responsive, user-centered interfaces and full-stack tools that bring data products to life.",
    icon: FiCode,
    skills: ["Vue.js", "React", "Flask", "JavaScript", "Figma"],
  },
];

function SkillsSpotlightGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SKILL_CATEGORIES.map((category) => (
        <SkillSpotlightCard
          key={category.title}
          icon={category.icon}
          title={category.title}
          description={category.description}
          skills={category.skills}
        />
      ))}
    </div>
  );
}

export default SkillsSpotlightGrid;
