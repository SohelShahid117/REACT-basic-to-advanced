import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
// createRoot().render()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <h1>Hello</h1>
  </StrictMode>
);
