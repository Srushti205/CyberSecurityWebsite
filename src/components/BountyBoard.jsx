export default function BountyBoard() {
  return (
    <div className="absolute bottom-[14%] w-full flex justify-center px-4 pointer-events-none">
      <div
        className="
          relative
          w-full

          /* ================= CHANGE SIZE HERE ================= */
          max-w-[1200px]          /* desktop width */
          h-[520px]               /* desktop height */

          sm:h-[480px]
          md:h-[520px]

          /* MOBILE → vertical board */
          max-sm:max-w-[90%]
          max-sm:h-[520px]
          /* =================================================== */

          rounded-2xl
          bg-gradient-to-br
          from-[#f5d98b]/12
          via-[#1a2a3a]/80
          to-[#f5d98b]/12
          backdrop-blur-xl
          border border-[#f5d98b]/55
          shadow-[0_0_70px_rgba(245,217,139,0.35)]
          overflow-hidden
        "
      >
        {/* 🔵 BLUE GLITCH BORDER (OFFSET + GLOW) */}
        <div
          className="
            absolute inset-0 rounded-2xl
            border border-[#4fc3ff]/50
            shadow-[0_0_25px_rgba(79,195,255,0.45)]
            translate-x-[2px] translate-y-[-2px]
            animate-glitchBlue
          "
        />

        {/* 🟡 GOLD GLITCH BORDER (SLOW) */}
        <div
          className="
            absolute inset-0 rounded-2xl
            border border-[#f5d98b]/35
            shadow-[0_0_30px_rgba(245,217,139,0.25)]
            mix-blend-screen
            animate-glitchGold
          "
        />

        {/* Inner glow */}
        <div
          className="
            absolute inset-0 rounded-2xl
            shadow-[inset_0_0_90px_rgba(245,217,139,0.28)]
          "
        />

        {/* ===== TITLE ===== */}
        <div className="absolute top-8 w-full flex justify-center">
          <h1
            className="
              font-rye
              text-[#fff6cc]
              text-3xl sm:text-4xl md:text-5xl
              tracking-[0.32em]
              drop-shadow-[0_0_18px_rgba(245,217,139,0.8)]
              animate-textPulse
            "
          >
            BOUNTY BOARD
          </h1>
        </div>
      </div>
    </div>
  );
}