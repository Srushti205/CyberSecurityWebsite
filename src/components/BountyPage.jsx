// BountyPage.jsx
export default function BountyPage({ title }) {
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