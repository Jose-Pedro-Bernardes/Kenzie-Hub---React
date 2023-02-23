import React from "react";
import logo from "../../assets/logoDesk.svg";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./Header.styles.js";
import Button from "../Button";

export default function Header({ setUser, showToast }) {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:userId");
    showToast();
    setTimeout(() => {
      setUser("");
      navigate("/");
    }, 2000);
  }
  return (
    <>
      <HeaderContainer>
        <figure>
          <img src={logo} alt="Logo Kenzie Hub" />
        </figure>

        <Button onClick={logout} type="button" text="Sair" />
      </HeaderContainer>
    </>
  );
}
