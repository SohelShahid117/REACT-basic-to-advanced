import React from "react";
import { Outlet } from "react-router";

const ProjectsLayout = () => {
  return (
    <>
      <header className="bg-gray-200">Header part</header>
      <main className="bg-amber-200">
        <Outlet />
      </main>
      <footer className="bg-yellow-100">footer part</footer>
    </>
  );
};

export default ProjectsLayout;
