import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Widget } from "./components/Widget.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Widget />
  </StrictMode>
);