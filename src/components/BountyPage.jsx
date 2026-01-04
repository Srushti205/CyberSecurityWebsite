export default function BountyPage({
  title,
  heading = "WANTED",
  description = "",
}) {
  return (
    <div
      className="
        relative
        w-full
        h-full
        rounded-xl

        /* ===== PAGE LOOK ===== */
        bg-white/12               /* CHANGE transparency here */
        backdrop-blur-md
        border border-white/25
        shadow-[0_0_30px_rgba(255,255,255,0.12)]

        /* ===== INTERACTION ===== */
        transition-all duration-300
        hover:scale-[1.04]        /* CHANGE hover pop here */
        hover:shadow-[0_0_45px_rgba(245,217,139,0.35)]
      "
    >
      {/* ===== INNER CONTENT ===== */}
      <div className="p-5 flex flex-col h-full">
        
        {/* ===== WANTED (COMMON HEADING) ===== */}
        <p
          className="
            font-rye
            text-[11px]
            tracking-[0.35em]
            text-[#f5d98b]
            mb-2
          "
        >
          {heading}
        </p>

        {/* ===== PAGE TITLE ===== */}
        <h2
          className="
            font-rye
            text-xl
            text-[#fff6cc]
            mb-2
          "
        >
          {title}
        </h2>

        {/* ===== DESCRIPTION (OPTIONAL) ===== */}
        {description && (
          <p
            className="
              text-sm
              text-white/80
              leading-relaxed
              mt-1
            "
          >
            {description}
          </p>
        )}

        {/* ===== CLICK LAYER ===== */}
        {/* Wrap this div with <Link> when routing */}
        {/* Example: <Link to='/events'> */}
        <div className="absolute inset-0 cursor-pointer" />
      </div>
    </div>
  );
}
