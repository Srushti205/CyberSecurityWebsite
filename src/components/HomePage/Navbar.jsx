import logo from "../../assets/logo.jpeg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
   console.log("Logo path:", logo);

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
        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Cybersecurity Club Logo"
    className="h-20 w-20 object-contain"
  />
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
</div>

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
          <li className="hover:text-gray-300 cursor-pointer relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-gray-300 cursor-pointer relative group">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-gray-300 cursor-pointer relative group">
            Events
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-gray-300 cursor-pointer relative group">
            Blog
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-gray-300 cursor-pointer relative group">
            Practice
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-gray-300 cursor-pointer relative group">
            Learn
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
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