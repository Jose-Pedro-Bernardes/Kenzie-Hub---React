import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormLogin from "../../components/FormLogin";
import { Container } from "./LoginPage.styles.js";
import logo from "../../assets/logoDesk.svg";

export default function LoginPage() {
  document.title = "Login · Kenzie Hub";

  function verifyToast(verifier) {
    if (verifier == "sucess") {
      const notifySucess = toast.success("Login bem sucedido!", {
        position: "top-center",
        autoClose: 2000,
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
        position: "top-center",
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

  return (
    <>
      <Container>
        <figure>
          <img src={logo} alt="Kenzie Hub" />
        </figure>
        <main>
          <FormLogin />
        </main>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
      </Container>
    </>
  );
}
//<button onClick={() => verifyToast("error")}>ABC</button>
