import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="flex bg-black/70 p-4 w-full backdrop-blur-md fixed gap-5 left-0 top-0">
      {["Home", "About", "Projects", "Contact"].map((item) => (
        <NavLink
          key={item}
          to={`/${item.toLowerCase()}`}
          className={({ isActive }) =>
            `relative text-white text-lg pb-1 transition-all ${
              isActive ? "after:w-full" : "after:w-0"
            } after:block after:h-[2px] after:bg-pink-500 after:absolute after:bottom-[-2px] after:left-0 after:transition-all after:duration-300`
          }
        >
          {item}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
