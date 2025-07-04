import React from "react";
import { NavLink, Outlet } from "react-router";

const MarketingLayout = () => {
  return (
    <>
      <header className="bg-orange-400 text-center">
        <ul className="flex gap-5 justify-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>

      <main className="bg-blue-500 min-h-screen text-center flex justify-center items-center font-bold text-3xl">
        <Outlet />
      </main>
      <footer className="bg-gray-300 text-center">Marketing Footer</footer>
    </>
  );
};

export default MarketingLayout;
