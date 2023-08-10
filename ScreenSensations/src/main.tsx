import { lazy } from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Homepage from "./pages/App";
import * as React from "react";

// const container: HTMLElement = document.getElementById("root")!;
// const root = createRoot(container);
// const Index = lazy(() => import("./routes/Routes"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
// root.render(<Index />);
