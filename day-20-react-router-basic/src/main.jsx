import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import App from "./app.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/Contact.jsx";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="/" element={<Navbar />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/about" element={<h1 className="text-2xl">About us</h1>} /> */}

      <Route path="/" element={<App />}>
        {/* <Route path="/" element={<Navbar />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
