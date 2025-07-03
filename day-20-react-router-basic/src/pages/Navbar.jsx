import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white p-5">
        <ul className="flex gap-5 justify-center font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
