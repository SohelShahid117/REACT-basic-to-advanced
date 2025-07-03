import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/about" element={<h1 className="text-2xl">About us</h1>} /> */}
    </Routes>
  </BrowserRouter>
);
