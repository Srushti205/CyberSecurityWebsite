import { useState } from 'react';

export default function BountyPage({ title }) {
  const [isScanning, setIsScanning] = useState(false);

  const handleClick = () => {
    // Trigger scan animation on mobile
    setIsScanning(true);
    // Reset after animation completes (4s as per your CSS)
    setTimeout(() => setIsScanning(false), 4000);
  };

  return (
    <div
      onClick={handleClick}
      className="
        relative
        w-full h-full
        rounded-lg
        flex flex-col items-center justify-start
        pt-6

        bg-black/100 backdrop-blur-sm
        border border-[#e6c67a]/70
        shadow-[inset_0_0_25px_rgba(230,198,122,0.28)]

        overflow-hidden

        transition-all duration-300 ease-out
        hover:scale-[1.03]              /* 🔧 POP STRENGTH */
        hover:shadow-[0_0_30px_rgba(230,198,122,0.55)]

        group
        cursor-pointer
      "
    >
      {/* 🔴 ULTRA-THIN SCAN LINE */}
      <div
        className={`
          pointer-events-none
          absolute left-0 w-full
          h-[3px]                        /* 🔧 LINE THICKNESS */

          bg-gradient-to-b
          from-transparent
          via-red-600
          to-transparent

          opacity-0
          
          /* Desktop: hover to trigger */
          group-hover:opacity-100
          group-hover:animate-vertical-scan

          /* Mobile: click to trigger */
          ${isScanning ? 'opacity-100 animate-vertical-scan' : ''}
        `}
      />

      {/* WANTED */}
      <div className="text-center z-10">
        <h2 className="font-rye text-2xl md:text-3xl tracking-widest text-white">
          WANTED
        </h2>
      </div>

      {/* TITLE */}
      <div className="text-center mt-2 z-10">
        <h3 className="font-rye text-lg md:text-xl tracking-wide text-white/90">
          {title}
        </h3>
      </div>
    </div>
  );
}