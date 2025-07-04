import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <header>DashboardLayout header</header>
      <main>
        <Outlet />
      </main>
      <footer>DashboardLayout footer</footer>
    </div>
  );
};

export default DashboardLayout;
