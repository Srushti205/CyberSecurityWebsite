import Navbar from "./components/HomePage/Navbar";
import BountyBoard from "./components/HomePage/BountyBoard";
import GlitchLines from "./components/HomePage/GlitchLines"; 
import CyberGridBackground from "./components/HomePage/CyberGridBackground";
import PerspectiveGrid from "./components/HomePage/PerspectiveGrid";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <CyberGridBackground />
      {/* Glitch Overlay */}
      <GlitchLines />
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
        {/* Bounty Board */}
      <BountyBoard />

      {/* GRID COMPONENT */}
      <PerspectiveGrid />
    </div>
  );
}

export default App;


