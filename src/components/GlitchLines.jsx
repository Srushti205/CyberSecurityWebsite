import { useEffect, useState, useRef } from "react";

export default function GlitchBands() {
  const [band, setBand] = useState(null);
  const nextSide = useRef("left");
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const spawnBand = () => {
      // stop after 30 seconds
      if (Date.now() - startTimeRef.current >= 30000) {
        setBand(null);
        return;
      }

      const side = nextSide.current;
      nextSide.current = side === "left" ? "right" : "left";

      // base width (max 1/5 screen)
      const baseWidth = 6 + Math.random() * 14; // 6–20vw

      setBand({
        id: Date.now(),
        top: 10 + Math.random() * 80,
        side,

        // 🔴 independent but related widths
        whiteWidth: baseWidth,
        blueWidth: baseWidth - (1 + Math.random() * 2),
        greenWidth: baseWidth - (2 + Math.random() * 3),
      });

      timeoutRef.current = setTimeout(() => {
        setBand(null);
        timeoutRef.current = setTimeout(spawnBand, 1000);
      }, 1000);
    };

    spawnBand();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!band) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <div
  key={band.id}
  className={`glitch-band ${band.side}`}
  data-side={band.side}
  style={{ top: `${band.top}%` }}
>

        <span
          className="glitch-line white"
          style={{ width: `${band.whiteWidth}vw` }}
        />
        <span
          className="glitch-line blue"
          style={{ width: `${band.blueWidth}vw` }}
        />
        <span
          className="glitch-line green"
          style={{ width: `${band.greenWidth}vw` }}
        />
      </div>
    </div>
  );
}
