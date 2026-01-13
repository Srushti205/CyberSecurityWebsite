import BountyPage from "./BountyPage";

export default function BountyBoard() {
  return (
    <div className="w-full flex justify-center px-4 pt-32 sm:pt-36 pointer-events-none mb-32">
      <div
        className="
          relative
          w-full
          /* ================= CHANGE SIZE HERE ================= */
          max-w-[1200px]              /* desktop width */
          h-[520px]                   /* desktop height */
          md:h-[520px]
          sm:h-[480px]
          /* 📱 MOBILE FIX */
          max-sm:h-auto               /* allow height to grow */
          max-sm:max-h-[80vh]         /* limit height to enable scrolling */
          max-sm:min-h-[600px]        /* minimum height */
          max-sm:max-w-[95%]
          max-sm:pb-8                 /* padding at bottom */
          /* =================================================== */
          rounded-2xl
          bg-gradient-to-br
          from-[#f5d98b]/12
          via-[#1a2a3a]/80
          to-[#f5d98b]/12
          backdrop-blur-xl
          border border-[#f5d98b]/55
          shadow-[0_0_70px_rgba(245,217,139,0.35)]
          overflow-y-auto
          overflow-x-hidden
        "
      >
        {/* 🔵 BLUE GLITCH BORDER */}
        <div
          className="
            absolute inset-0 rounded-2xl
            border border-[#4fc3ff]/50
            shadow-[0_0_25px_rgba(79,195,255,0.45)]
            translate-x-[2px] translate-y-[-2px]
            animate-glitchBlue
            pointer-events-none
          "
        />
        {/* 🟡 GOLD GLITCH BORDER */}
        <div
          className="
            absolute inset-0 rounded-2xl
            border border-[#f5d98b]/35
            shadow-[0_0_30px_rgba(245,217,139,0.25)]
            mix-blend-screen
            animate-glitchGold
            pointer-events-none
          "
        />
        {/* Inner glow */}
        <div
          className="
            absolute inset-0 rounded-2xl
            shadow-[inset_0_0_90px_rgba(245,217,139,0.28)]
            pointer-events-none
          "
        />
        {/* ===== TITLE ===== */}
        <div className="sticky top-0 w-full flex justify-center z-10 bg-gradient-to-b from-[#1a2a3a] to-transparent pt-8 pb-4 max-sm:pt-6">
          <h1
            className="
              font-rye
              text-[#fff6cc]
              text-3xl sm:text-4xl md:text-5xl
              tracking-[0.32em]
              drop-shadow-[0_0_18px_rgba(245,217,139,0.8)]
              animate-textPulse
              text-center
            "
          >
            BOUNTY BOARD
          </h1>
        </div>
        {/* ===== BOUNTY PAGES GRID ===== */}
        <div className="absolute inset-0 top-24 bottom-6 left-6 right-6 pointer-events-auto max-sm:relative max-sm:top-0 max-sm:inset-auto max-sm:px-4 max-sm:pb-4">
          
          {/* 🖥 Desktop / Tablet */}
          <div className="hidden sm:grid grid-cols-10 grid-rows-6 gap-4 h-full">
            {/* EVENTS - Half height on left */}
            <div className="col-start-1 col-span-4 row-span-3">
              <BountyPage title="EVENTS" />
            </div>
            {/* BLOG - Below EVENTS */}
            <div className="col-start-1 col-span-4 row-start-4 row-span-3">
              <BountyPage title="BLOG" />
            </div>
            {/* PRACTICE - Middle column */}
            <div className="col-start-5 col-span-3 row-span-3">
              <BountyPage title="PRACTICE" />
            </div>
            {/* LEARN - Below PRACTICE */}
            <div className="col-start-5 col-span-3 row-start-4 row-span-3">
              <BountyPage title="LEARN" />
            </div>
            {/* ABOUT US - Right column full height */}
            <div className="col-start-8 col-span-3 row-span-6">
              <BountyPage title="ABOUT US" />
            </div>
          </div>
          {/* 📱 MOBILE — vertical stack with 3x height */}
          <div className="grid sm:hidden grid-cols-1 gap-4">
            <div style={{ height: 'calc(150vh - 360px)' }} className="min-h-[600px]">
              <BountyPage title="EVENTS" />
            </div>
            <div style={{ height: 'calc(150vh - 360px)' }} className="min-h-[600px]">
              <BountyPage title="BLOG" />
            </div>
            <div style={{ height: 'calc(150vh - 360px)' }} className="min-h-[600px]">
              <BountyPage title="PRACTICE" />
            </div>
            <div style={{ height: 'calc(150vh - 360px)' }} className="min-h-[600px]">
              <BountyPage title="LEARN" />
            </div>
            <div style={{ height: 'calc(150vh - 360px)' }} className="min-h-[600px]">
              <BountyPage title="ABOUT US" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}