import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<DashBoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
