import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import City from "./components/City.jsx";
import BlogSearch from "./pages/BlogSearch.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/concerts/:city" element={<City />} />
      <Route path="/blogSearch" element={<BlogSearch />} />
    </Routes>
  </BrowserRouter>
);
