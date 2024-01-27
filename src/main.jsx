import React from "react";
import ReactDOM from "react-dom/client";
import { GradesApp } from "./GradesApp.jsx";
import "./styles.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <GradesApp />
    </HashRouter>
  </React.StrictMode>
);
