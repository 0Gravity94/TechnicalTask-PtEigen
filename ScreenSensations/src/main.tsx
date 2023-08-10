import ReactDOM from "react-dom/client";

import "./styles/index.css";
import Homepage from "./pages/App";
import * as React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
