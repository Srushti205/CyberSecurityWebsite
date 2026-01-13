export default function CyberGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Perspective container */}
      <div className="absolute inset-0 perspective-[1000px]">
        
        {/* FLOOR GRID */}
        <div
          className="
            absolute
            bottom-[-30%]
            left-1/2
            h-[200%]
            -translate-x-1/2
            rotate-x-[75deg]
            bg-[linear-gradient(to_right,rgba(0,255,255,0.25)_1px,transparent_1px),linear-gradient(to_top,rgba(0,255,255,0.25)_1px,transparent_1px)]
            bg-[size:60px_60px]
            animate-gridMove
          "
        />

        {/* HORIZONTAL GLOW LINE */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-sm" />

        {/* LIGHT STREAKS */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]" />
      </div>
    </div>
  );
}
