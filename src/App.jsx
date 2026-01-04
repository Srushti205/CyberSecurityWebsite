import Navbar from "./components/Navbar";
import BountyBoard from "./components/BountyBoard";
import GlitchLines from "./components/GlitchLines"; 

import PerspectiveGrid from "./components/PerspectiveGrid";

function App() {
  return (
    <div className="relative min-h-screen text-white">
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


