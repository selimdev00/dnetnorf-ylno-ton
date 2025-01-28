import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "@/components/App";
import "@/styles/main.scss";
import Cursor from "@/components/Cursor";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Cursor>
      <App />
    </Cursor>
  </StrictMode>,
);
