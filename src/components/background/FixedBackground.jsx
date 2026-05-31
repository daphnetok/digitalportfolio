import { motion } from "framer-motion";

const FLOATING_ORBS = [
  {
    className: "bg-pink-200/35",
    duration: 32,
    x: ["4vw", "62vw", "28vw"],
    y: ["8vh", "52vh", "18vh"],
  },
  {
    className: "bg-rose-200/30",
    duration: 38,
    x: ["72vw", "18vw", "48vw"],
    y: ["55vh", "22vh", "68vh"],
  },
  {
    className: "bg-pink-100/40",
    duration: 44,
    x: ["38vw", "8vw", "75vw"],
    y: ["70vh", "38vh", "28vh"],
  },
  {
    className: "bg-rose-100/28",
    duration: 36,
    x: ["58vw", "42vw", "12vw"],
    y: ["18vh", "72vh", "42vh"],
  },
];

function FixedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#fcfafb]" />
      {FLOATING_ORBS.map((orb, index) => (
        <motion.div
          key={`floating-orb-${index}`}
          className={`absolute h-[500px] w-[500px] rounded-full blur-[150px] ${orb.className}`}
          initial={{ x: orb.x[0], y: orb.y[0] }}
          animate={{ x: orb.x, y: orb.y }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default FixedBackground;
