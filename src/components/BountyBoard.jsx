import BountyPage from "./BountyPage";

export default function BountyBoard() {
  return (
    <div className="absolute bottom-[14%] w-full flex justify-center px-4">
      <div
        className="
          relative
          w-full
          max-w-[1200px]
          h-[520px]
          rounded-2xl
          bg-gradient-to-br
          from-[#f5d98b]/10
          via-[#1a2a3a]/85
          to-[#f5d98b]/10
          backdrop-blur-xl
          border border-[#f5d98b]/55
          shadow-[0_0_70px_rgba(245,217,139,0.35)]
          overflow-hidden
        "
      >
        {/* ===== VISUAL LAYERS ===== */}
        <div className="absolute inset-0 rounded-2xl border border-[#4fc3ff]/30 pointer-events-none" />
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_80px_rgba(245,217,139,0.22)] pointer-events-none" />

        {/* ===== TITLE ===== */}
        <div className="absolute top-6 w-full flex justify-center z-20">
          <h1
            className="
              font-rye
              text-[#fff6cc]
              text-4xl
              tracking-[0.32em]
              drop-shadow-[0_0_18px_rgba(245,217,139,0.8)]
            "
          >
            BOUNTY BOARD
          </h1>
        </div>

        {/* ================== CONTENT WRAPPER ================== */}
        {/* THIS is what was missing */}
        <div className="relative z-30 w-full h-full pt-[120px] px-8">
          <div
            className="
              grid
              grid-cols-12
              grid-rows-6
              gap-5
              h-full
            "
            style={{
              gridTemplateAreas: `
                'about about about about about about about about about about about about'
                'home home home events events events events events events events events events'
                'home home home events events events events events events events events events'
                'practice practice practice events events events events events events events events events'
                'practice practice practice learn learn learn learn learn learn learn learn learn'
                'practice practice practice learn learn learn learn learn learn learn learn learn'
              `,
            }}
          >
            <BountyPage
              area="about"
              heading="WANTED"
              title="ABOUT US"
              description="Cyber Security Club, Cummins College of Engineering is a student-driven community focused on ethical hacking, cyber defense, hands-on learning, CTFs, and real-world security exposure."
            />

            <BountyPage
              area="home"
              heading="WANTED"
              title="HOME"
            />

            <BountyPage
              area="events"
              heading="WANTED"
              title="EVENTS"
              description="CTFs, hackathons, workshops, guest lectures, and flagship cybersecurity events."
            />

            <BountyPage
              area="practice"
              heading="WANTED"
              title="PRACTICE"
              description="Hands-on labs, tools, vulnerability testing, and walkthroughs."
            />

            <BountyPage
              area="learn"
              heading="WANTED"
              title="LEARN"
              description="Curated resources, roadmaps, and structured learning paths."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
