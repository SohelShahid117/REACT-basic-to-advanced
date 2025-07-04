import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MarketingLayout from "./layouts/MarketingLayout.jsx";
import ProjectsHome from "./components/ProjectsHome.jsx";
import ProjectsLayout from "./layouts/ProjectsLayout.jsx";
import Project from "./components/Project.jsx";
import EditProject from "./components/EditProject.jsx";
import MarketingHome from "./components/MarketingHome.jsx";
import Contact from "./components/Contact";
import About from "./components/About";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      {/* <Route path="/" element={<App />} /> */}

      {/* layout for marketing section */}
      <Route element={<MarketingLayout />}>
        {/* <Route index element={<MarketingHome />} /> */}

        {/* index means home path("/") */}
        {/* <Route index element={<MarketingHome />} /> */}
        <Route path="/" element={<MarketingHome />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* layout for project section */}
      <Route path="projects">
        {/* <Route element={<ProjectsLayout />}/> */}
        <Route index element={<ProjectsHome />} />
        <Route element={<ProjectsLayout />}>
          {/* <Route index element={<ProjectsLayout />}> */}
          <Route path=":pid" element={<Project />} />
          <Route path=":pid/edit" element={<EditProject />} />
        </Route>
      </Route>

      {/* dashboard layout */}
      <Route path="dashboard" element={<DashboardLayout />}>
        {/* <Route index element={<DashboardLayout />} /> */}
        <Route path="admin" element={<div>admin page</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
