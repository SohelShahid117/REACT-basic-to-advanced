import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Blogs from "./pages/Blogs.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      {/* <Route path=":pid/edit" element={<EditProject />} /> */}
    </Routes>
  </BrowserRouter>
);
