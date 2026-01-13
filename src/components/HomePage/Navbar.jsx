import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#192841] bg-opacity-80 backdrop-blur
      "
    >
      {/* ===== NAV CONTAINER ===== */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ===== LOGO / BRAND ===== */}
        <h1
          className="
            text-white
            text-xl
            font-semibold
            tracking-widest
            font-['Orbitron']
          "
        >
          CYBERSECURITY CLUB CCOEW
        </h1>

        {/* ===== DESKTOP NAV ===== */}
        <ul
          className="
            hidden md:flex
            gap-10
            text-white
            font-['Orbitron']
            font-medium
          "
        >
          {/* Change font size / color here */}
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About Us</li>
          <li className="hover:text-gray-300 cursor-pointer">Events</li>
          <li className="hover:text-gray-300 cursor-pointer">Blog</li>
          <li className="hover:text-gray-300 cursor-pointer">Practice</li>
          <li className="hover:text-gray-300 cursor-pointer">Learn</li>
        </ul>

        {/* ===== MOBILE MENU ICON ===== */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE NAV ===== */}
      {open && (
        <div
          className="
            md:hidden
            bg-[#192841]
            px-6 py-6
            flex flex-col gap-6
            text-white
            font-['Orbitron']
            font-medium
          "
        >
          {/* Change spacing / font here later */}
          <span>Home</span>
          <span>About Us</span>
          <span>Events</span>
          <span>Blog</span>
          <span>Practice</span>
          <span>Learn</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
