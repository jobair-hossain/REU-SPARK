import React from "react";
import { createRoot } from "react-dom/client";
import SparkSite from "../app/SparkSite";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SparkSite />
  </React.StrictMode>,
);
