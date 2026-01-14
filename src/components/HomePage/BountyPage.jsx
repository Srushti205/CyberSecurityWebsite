export default function BountyPage({ title }) {
  return (
    <div
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
        hover:scale-[1.03]
        hover:shadow-[0_0_30px_rgba(230,198,122,0.55)]
        group
      "
    >
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