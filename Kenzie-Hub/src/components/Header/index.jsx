import React from "react";
import logo from "../../assets/logoDesk.svg";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./Header.styles.js";
import MainButton from "../Button";

export default function Header() {
  const navigate = useNavigate();
  function logout() {
    navigate("/");

    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:userId");
  }
  return (
    <>
      <HeaderContainer>
        <figure>
          <img src={logo} alt="Logo Kenzie Hub" />
        </figure>

        <MainButton onClick={logout} type="button" text="Sair" />
      </HeaderContainer>
    </>
  );
}
