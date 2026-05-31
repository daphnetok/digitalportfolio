import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function LeftSidebar({ activeSection, showIdentity }) {
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const activeIndex = Math.max(
    0,
    NAV_ITEMS.findIndex((item) => item.id === activeSection)
  );
  const pillOffset =
    NAV_ITEMS.length > 1 ? (activeIndex / (NAV_ITEMS.length - 1)) * 100 : 0;

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col px-8 py-10 lg:flex">
      <AnimatePresence>
        {showIdentity && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mb-10 pb-4"
          >
            <p className="text-lg font-bold text-zinc-800">Daphne Tok</p>
            <p className="mt-1 text-sm text-zinc-500">Data & Business Analytics</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-5">
        <div className="relative w-0.5 shrink-0 self-stretch rounded-full bg-zinc-200">
          <motion.div
            className="absolute inset-x-0 top-0 rounded-full bg-pink-400"
            style={{ height: progressHeight }}
          />
          <motion.div
            className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.6)]"
            animate={{ top: `calc(${pillOffset}% - 5px)` }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          />
        </div>

        <nav className="flex flex-col gap-5 py-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "translate-x-1 text-rose-400"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default LeftSidebar;
export { NAV_ITEMS };
