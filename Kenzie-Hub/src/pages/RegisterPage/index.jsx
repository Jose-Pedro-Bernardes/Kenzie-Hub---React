import React from "react";
import { Container } from "./register.styles.js";
import logo from "../../assets/logoDesk.svg";
import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../requests/axiosInstance.js";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cadastrar · Kenzie Hub";
  });

  async function registerUser(data) {
    try {
      const response = await axiosInstance.post("users", data);
      setTimeout(() => {
        navigate("/");
        const notifySucess = toast.success(
          `Bem vindo, ${response.data.name}!`,
          {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }, 2000);
    } catch (error) {
      console.log(error);
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
    }
  }

  return (
    <>
      <Container>
        <section>
          <figure>
            <img src={logo} alt="Logo Kenzie Hub" />
          </figure>
          <Link to={"/"}>Voltar</Link>
        </section>
        <FormRegister
          onSubmit={handleSubmit(registerUser)}
          register={register}
        />
      </Container>
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
    </>
  );
}
