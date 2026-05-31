import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const MESH_ITEMS = [
  { type: "circle", x: "8%", y: "12%", size: 48, delay: 0 },
  { type: "circle", x: "78%", y: "18%", size: 36, delay: 1.2 },
  { type: "circle", x: "62%", y: "72%", size: 56, delay: 0.6 },
  { type: "plus", x: "22%", y: "38%", size: 20, delay: 0.4 },
  { type: "plus", x: "88%", y: "52%", size: 16, delay: 1.8 },
  { type: "plus", x: "45%", y: "82%", size: 18, delay: 1 },
  { type: "grid", x: "0%", y: "0%", w: "100%", h: "100%" },
  { type: "circle", x: "35%", y: "55%", size: 28, delay: 2.1 },
  { type: "plus", x: "68%", y: "32%", size: 14, delay: 0.9 },
  { type: "circle", x: "92%", y: "78%", size: 32, delay: 1.5 },
];

function HollowCircle({ size, className }) {
  return (
    <svg width={size} height={size} className={className} aria-hidden="true">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 2}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PlusSign({ size, className }) {
  const half = size / 2;
  return (
    <svg width={size} height={size} className={className} aria-hidden="true">
      <line
        x1={half}
        y1={4}
        x2={half}
        y2={size - 4}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1={4}
        y1={half}
        x2={size - 4}
        y2={half}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function TechMeshBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 28 });
  const parallaxX = useTransform(springX, [-1, 1], [18, -18]);
  const parallaxY = useTransform(springY, [-1, 1], [14, -14]);

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fcfafb]">
      <motion.div
        className="absolute inset-[-5%]"
        style={{ x: parallaxX, y: parallaxY }}
      >
        {MESH_ITEMS.map((item, index) => {
          if (item.type === "grid") {
            return (
              <motion.div
                key={`grid-${index}`}
                className="absolute inset-0 opacity-[0.12] text-zinc-400"
                animate={{ opacity: [0.1, 0.16, 0.1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(161,161,170,0.35) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(161,161,170,0.35) 1px, transparent 1px)
                  `,
                  backgroundSize: "64px 64px",
                }}
              />
            );
          }

          const driftDuration = 16 + (index % 4) * 3;
          return (
            <motion.div
              key={`${item.type}-${index}`}
              className="absolute text-rose-300/80"
              style={{ left: item.x, top: item.y }}
              animate={{
                y: [0, -12, 4, 0],
                x: [0, 6, -4, 0],
                rotate: [0, 4, -3, 0],
              }}
              transition={{
                duration: driftDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay ?? 0,
              }}
            >
              {item.type === "circle" ? (
                <HollowCircle
                  size={item.size}
                  className="opacity-[0.15] text-zinc-400"
                />
              ) : (
                <PlusSign size={item.size} className="opacity-[0.2] text-zinc-400" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TechMeshBackground;
