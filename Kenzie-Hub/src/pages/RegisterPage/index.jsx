import React from "react";
import { Container } from "./register.styles.js";
import logo from "../../assets/logoDesk.svg";
import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  function verifyToast(verifier) {
    if (verifier == "sucess") {
      const notifySucess = toast.success("Login bem sucedido!", {
        position: "top-right",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return notifySucess;
    } else if (verifier == "error") {
      const notifyErr = toast.error("Ops! Algo deu errado.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return notifyErr;
    }
  }

  useEffect(() => {
    document.title = "Cadastrar · Kenzie Hub";
  });

  return (
    <>
      <Container>
        <section>
          <figure>
            <img src={logo} alt="Logo Kenzie Hub" />
          </figure>
          <Link to={"/"}>Voltar</Link>
        </section>
        <FormRegister />
      </Container>
    </>
  );
}
