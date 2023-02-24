import React from "react";
import logo from "../../assets/logoDesk.svg";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./header.styles.js";
import Button from "../Button";
import { toast } from "react-toastify";

export default function Header({ setUser, showToast }) {
  function showToast() {
    const warningToast = toast.warn("Você deslogou. 🤷‍♂️", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    return warningToast;
  }

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
