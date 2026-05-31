import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CursorAura() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const auraX = useSpring(mouseX, { stiffness: 150, damping: 22, mass: 0.35 });
  const auraY = useSpring(mouseY, { stiffness: 150, damping: 22, mass: 0.35 });

  useEffect(() => {
    const onMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/40 blur-[40px] lg:block"
      style={{ left: auraX, top: auraY }}
      aria-hidden="true"
    />
  );
}

export default CursorAura;
