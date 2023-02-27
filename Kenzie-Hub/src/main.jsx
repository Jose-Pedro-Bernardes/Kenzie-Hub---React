import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TecListProvider } from "./contexts/TecListContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TecListProvider>
        <App />
      </TecListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
