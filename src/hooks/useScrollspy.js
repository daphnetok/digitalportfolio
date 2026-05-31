import { useEffect, useState } from "react";

function isAtPageBottom(threshold = 50) {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  return window.innerHeight + window.scrollY >= scrollHeight - threshold;
}

export function useScrollspy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "about");

  useEffect(() => {
    const updateFromScroll = () => {
      if (isAtPageBottom(50)) {
        setActiveSection("contact");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAtPageBottom(50)) {
          setActiveSection("contact");
          return;
        }

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.55], rootMargin: "-12% 0px -12% 0px" }
    );

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => observer.observe(section));

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
