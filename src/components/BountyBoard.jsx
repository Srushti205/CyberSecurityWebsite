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
        <div className="absolute top-8 w-full flex justify-center z-10">
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

        {/* ===== BOUNTY PAGES GRID ===== */}
        <div className="absolute inset-0 top-24 bottom-6 left-6 right-6 pointer-events-auto">
          {/* Desktop/Tablet Grid - 10 columns, 6 rows */}
          <div className="hidden sm:grid grid-cols-10 grid-rows-6 gap-4 h-full">
            {/* Events - (columns 1-4, rows 1-6) */}
            <div className="col-start-1 col-span-4 row-start-1 row-span-6">
              <BountyPage title="EVENTS" />
            </div>
            
            {/* Practice - (columns 5-7, rows 1-3) */}
            <div className="col-start-5 col-span-3 row-start-1 row-span-3">
              <BountyPage title="PRACTICE" />
            </div>
            
            {/* Learn - (columns 5-7, rows 4-6) */}
            <div className="col-start-5 col-span-3 row-start-4 row-span-3">
              <BountyPage title="LEARN" />
            </div>
            
            {/* About Us - (columns 8-10, rows 1-6) */}
            <div className="col-start-8 col-span-3 row-start-1 row-span-6">
              <BountyPage title="ABOUT US" />
            </div>
          </div>

          {/* Mobile Grid - 4 columns, 8 rows */}
          <div className="grid sm:hidden grid-cols-4 grid-rows-8 gap-3 h-full">
            {/* Events - Full width, rows 1-3 */}
            <div className="col-span-4 row-start-1 row-span-3">
              <BountyPage title="EVENTS" />
            </div>
            
            {/* Practice - Half width (left), rows 4-6 */}
            <div className="col-start-1 col-span-2 row-start-4 row-span-3">
              <BountyPage title="PRACTICE" />
            </div>
            
            {/* Learn - Half width (right), rows 4-6 */}
            <div className="col-start-3 col-span-2 row-start-4 row-span-3">
              <BountyPage title="LEARN" />
            </div>
            
            {/* About Us - Columns 2-4, rows 7-8 (note: only 2 rows available, not 3) */}
            <div className="col-start-2 col-span-3 row-start-7 row-span-2">
              <BountyPage title="ABOUT US" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BountyPage({ title }) {
  return (
    <div className="w-full h-full bg-white/95 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-start p-4 border-2 border-[#8B4513]">
      {/* WANTED Header */}
      <div className="text-center mb-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-black">
          WANTED
        </h2>
        <div className="w-full h-0.5 bg-black mt-1"></div>
      </div>
      
      {/* Page Title */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-black">
          {title}
        </h3>
      </div>
    </div>
  );
}