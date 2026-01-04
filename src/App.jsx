import Navbar from "./components/Navbar";
import BountyBoard from "./components/BountyBoard";

import PerspectiveGrid from "./components/PerspectiveGrid";

function App() {
  return (
    <div className="relative min-h-screen text-white">

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


