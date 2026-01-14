export default function CyberGridBackground() {
  return (
    <div
      className="
        fixed inset-0 -z-10
        bg-black
        overflow-hidden
        h-[100dvh]        /* 🔒 lock viewport height (mobile-safe) */
      "
    >
      {/* Perspective container */}
      <div className="absolute inset-0 perspective-[1000px]">

        {/* FLOOR GRID */}
        <div
          className="
            absolute
            left-1/2
            bottom-[-15%]   /* 🔧 reduced from -30% */
            h-[140%]        /* 🔧 reduced from 200% */
            w-[200%]
            -translate-x-1/2
            rotate-x-[75deg]

            bg-[linear-gradient(to_right,rgba(0,255,255,0.25)_1px,transparent_1px),
                linear-gradient(to_top,rgba(0,255,255,0.25)_1px,transparent_1px)]
            bg-[size:60px_60px]

            animate-gridMove
          "
        />

        {/* HORIZON GLOW LINE */}
        <div
          className="
            absolute
            top-1/2
            left-0
            w-full
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-orange-400
            to-transparent
            blur-sm
            opacity-80
          "
        />

        {/* CENTER LIGHT FALLOFF */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]
          "
        />
      </div>
    </div>
  );
}
