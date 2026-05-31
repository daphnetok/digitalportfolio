import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

function SkillSpotlightCard({ icon: Icon, title, description, skills }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 260,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 260,
    damping: 22,
  });

  const handleMouseMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setSpotlight({ x, y, visible: true });

    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, visible: false }));
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-pink-100/50 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-md"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: spotlight.visible
            ? `radial-gradient(320px circle at ${spotlight.x}px ${spotlight.y}px, rgba(251,113,133,0.18), transparent 55%)`
            : "transparent",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <Icon className="text-2xl text-rose-400" />
        <h3 className="mt-4 text-xl font-semibold text-zinc-800">{title}</h3>
        <p className="body-copy mt-3 flex-grow text-sm leading-relaxed text-zinc-500">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="aura-plate rounded-full px-3 py-1 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default SkillSpotlightCard;
