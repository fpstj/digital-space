import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center place-content-center bg-black/10 p-4 w-full backdrop-blur-md fixed gap-10 left-0 top-0 z-2">
      {["home", "projects", "about", "contact"].map((item) => {
        const path = item === "home" ? "/" : `/${item.toLowerCase()}`;
        return (
          <NavLink
            key={item}
            to={path}
            className={({ isActive }) =>
              `relative text-lg font-normal pb-1 transition-all after:block after:h-[.2rem] after:bg-pink-600 after:absolute after:bottom-[-2px] after:left-0 after:transition-all after:duration-300 ${
                isActive
                  ? "text-pink-600 font-semibold after:w-full"
                  : "text-stone hover:text-pink-500 hover:font-medium after:w-0"
              }`
            }
          >
            {item}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
