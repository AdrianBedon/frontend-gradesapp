import React from "react";
import ReactDOM from "react-dom/client";
import { GradesApp } from "./GradesApp.jsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GradesApp />
    </BrowserRouter>
  </React.StrictMode>
);
