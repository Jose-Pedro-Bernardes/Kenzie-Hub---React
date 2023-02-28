import React, { useContext } from "react";
import logo from "../../assets/logoDesk.svg";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./header.styles.js";
import Button from "../Button";
import { verifyToast } from "../../helpers/verifyToast";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function logout() {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:userId");
    verifyToast("warn", "Você foi deslogado..", "top-center");
    setTimeout(() => {
      setUser({});
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
