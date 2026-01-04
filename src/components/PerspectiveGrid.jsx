// ============================================================
// PERSPECTIVE GRID COMPONENT
// ============================================================
import React from 'react';

const PerspectiveGrid = () => {
  return (
    <>
      {/* ===============================
          PERSPECTIVE GRID CONTAINER
          Covers lower 1/4th of screen
          =============================== */}
      <div className="perspective-grid">
        {/* ===============================
            GRID ITSELF
            ⚠️ CHANGE GLOW COLOR / STRENGTH
            in index.css (.grid)
            =============================== */}
        <div className="grid"></div>
      </div>
    </>
  );
};

export default PerspectiveGrid;

