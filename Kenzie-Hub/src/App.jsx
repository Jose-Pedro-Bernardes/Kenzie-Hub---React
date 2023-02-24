import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import { ResetStyles } from "./global/reset.styles.js";
import { GlobalStyles } from "./global/global.styles.js";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home/:name" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
