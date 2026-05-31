import { useEffect, useState } from "react";

function AuraBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const bloomScale = 1 + scrollProgress * 0.08;
  const bloomShift = scrollProgress * 6;

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fff0f7]"
      style={{ "--aura-scroll": scrollProgress }}
    >
      <div className="aura-gradient-base absolute inset-0" />

      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `scale(${bloomScale}) translateY(${bloomShift}px)`,
        }}
      >
        <div className="aura-gradient-bloom aura-drift-slow absolute -left-1/4 top-[-8%] h-[62vh] w-[62vh] rounded-full blur-[90px]" />
        <div className="aura-gradient-bloom aura-drift-reverse absolute -right-1/4 top-[24%] h-[48vh] w-[48vh] rounded-full blur-[84px]" />
        <div className="aura-gradient-bloom aura-drift-slow absolute bottom-[-12%] left-1/3 h-[52vh] w-[52vh] rounded-full blur-[88px]" />
        <div className="aura-gradient-bloom aura-drift-reverse absolute left-[16%] top-[48%] h-[22vh] w-[22vh] rounded-full blur-[72px]" />
        <div className="aura-gradient-bloom aura-drift-slow absolute right-[20%] top-[14%] h-[26vh] w-[26vh] rounded-full blur-[74px]" />
      </div>

      <div className="aura-scroll-tint pointer-events-none absolute inset-0" />
    </div>
  );
}

export default AuraBackground;
