import React from "react";
import { createRoot } from "react-dom/client";
import { UNSAFE_NavigationContext } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Configuration des futures flags de React Router
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <UNSAFE_NavigationContext.Provider value={router}>
      <App />
    </UNSAFE_NavigationContext.Provider>
  </React.StrictMode>
);
