import React from "react";
import logo from "../../assets/logoDesk.svg";
import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton";

export default function Header() {
  const navigate = useNavigate();
  function logout() {
    navigate("/");

    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:userId");
  }
  return (
    <>
      <header>
        <figure>
          <img src={logo} alt="Logo Kenzie Hub" />
        </figure>

        <BackButton onClick={logout} text="Sair" />
      </header>
    </>
  );
}
