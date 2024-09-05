import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SWRConfig } from "swr";
import { defaultValues } from "./swr/config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={defaultValues}>
      <App />
    </SWRConfig>
  </StrictMode>
);
