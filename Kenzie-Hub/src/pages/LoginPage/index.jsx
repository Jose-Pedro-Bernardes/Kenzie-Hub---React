import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormLogin from "../../components/FormLogin";
import { Container } from "./loginPage.styles.js";
import logo from "../../assets/logoDesk.svg";
import { axiosInstance } from "../../axios/axiosInstance";
import { useNavigate } from "react-router-dom";
import { verifyToast } from "../../helpers/verifyToast.js";

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

  useEffect(() => {
    document.title = "Login · Kenzie Hub";
    const userId = localStorage.getItem("@KenzieHub:userId");
    async function isThereaUser() {
      try {
        setTimeout(async () => {
          const response = await axiosInstance.get(`users/${userId}`);
          navigate(`/home/${response.data.name}`);
        }, 2500);
      } catch (error) {}
    }
    isThereaUser();
  });

  async function loginUser(data) {
    try {
      const response = await axiosInstance.post("sessions", data);
      localStorage.setItem("@KenzieHub:token", response.data.token);
      localStorage.setItem("@KenzieHub:userId", response.data.user.id);
      verifyToast("success", "Login bem sucedido!");
      setTimeout(() => {
        navigate(`/home/${response.data.user.name}`);
      }, 2000);
    } catch (error) {
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
