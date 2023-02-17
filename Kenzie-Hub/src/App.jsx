import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import { ResetStyles } from "./styles/reset.styles.js";
import { GlobalStyles } from "./styles/global.styles.js";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/:name" element={<DashBoardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
