// src/PentagonBackground.jsx
export default function PentagonBackground() {
  const pentagons = Array.from({ length: 20 }); // number of pentagons

  return (
    <div className="absolute inset-0 pointer-events-none">
      {pentagons.map((_, i) => {
        const size = Math.random() * 50 + 30; // 30px to 80px
        const top = Math.random() * 100; // percentage
        const left = Math.random() * 100; // percentage
        const duration = Math.random() * 20 + 10; // 10s to 30s
        const delay = Math.random() * 10; // random delay

        return (
          <div
            key={i}
            className="pentagon"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
