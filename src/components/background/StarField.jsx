import { useMemo } from "react";

function TwinkleCross({ size, rotate }) {
  return (
    <span
      className={`relative inline-block text-white/90 ${rotate ? "vibe-twinkle-rotate" : ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 rounded-full bg-current shadow-[0_0_8px_rgba(255,255,255,0.85)]" />
      <span className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 rounded-full bg-current shadow-[0_0_8px_rgba(255,255,255,0.85)]" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.95)]" />
    </span>
  );
}

function PixelStar({ size, className }) {
  const cells = useMemo(() => {
    const grid = ["00100", "01110", "11111", "01110", "00100"];
    return grid.flatMap((row, y) =>
      row.split("").map((cell, x) => ({ x, y, on: cell === "1" }))
    );
  }, []);

  const unit = size / 5;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      {cells
        .filter((cell) => cell.on)
        .map((cell) => (
          <rect
            key={`${cell.x}-${cell.y}`}
            x={cell.x * unit + unit * 0.15}
            y={cell.y * unit + unit * 0.15}
            width={unit * 0.7}
            height={unit * 0.7}
            fill="white"
            opacity="0.88"
          />
        ))}
    </svg>
  );
}

function StarField({ count = 28, opacity = 1, className = "", scrollProgress = 0 }) {
  const twinkles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${(index * 13.7 + 5) % 96}%`,
        top: `${(index * 19.3 + 9) % 94}%`,
        size: 10 + (index % 5) * 5,
        delay: (index % 7) * 0.55,
        duration: 2.8 + (index % 4) * 0.9,
        rotate: index % 3 !== 0,
        pixel: index % 9 === 0,
      })),
    [count]
  );

  return (
    <div className={className} style={{ opacity }}>
      {twinkles.map((star) => {
        const depth = 12 + (star.id % 6) * 10;
        const driftY = scrollProgress * depth;
        const driftX = scrollProgress * (star.id % 2 === 0 ? 8 : -8);

        return (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: star.left,
              top: star.top,
              transform: `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY}px))`,
            }}
          >
            <div
              className="vibe-twinkle"
              style={{
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.pixel ? star.duration + 1.2 : star.duration}s`,
                ["--twinkle-rotate-dir"]: star.rotate ? 1 : -1,
              }}
            >
              {star.pixel ? (
                <PixelStar
                  size={star.size + 8}
                  className="drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                />
              ) : (
                <TwinkleCross size={star.size} rotate={star.rotate} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StarField;
