import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormLogin from "../../components/FormLogin";
import { Container } from "./LoginPage.styles.js";
import logo from "../../assets/logoDesk.svg";
import { axiosInstance } from "../../requests/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const formSchema = yup.object().shape({
    email: yup.string().required("Preencha com seu email."),
    password: yup.string().required("Preencha com sua senha."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();

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
    document.title = "Login · Kenzie Hub";
  });

  async function loginUser(data) {
    try {
      const response = await axiosInstance.post("sessions", data);
      localStorage.setItem("@KenzieHub:token", response.data.token);
      localStorage.setItem("@KenzieHub:userId", response.data.user.id);
      verifyToast("sucess");
      setTimeout(() => {
        navigate(`/home/${response.data.user.name}`);
      }, 2000);
    } catch (error) {
      console.log(error);
      verifyToast("error");
    }
  }

  return (
    <>
      <Container>
        <figure>
          <img src={logo} alt="Kenzie Hub" />
        </figure>
        <main>
          <FormLogin
            register={register}
            onSubmit={handleSubmit(loginUser)}
            errors={errors}
          />
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
