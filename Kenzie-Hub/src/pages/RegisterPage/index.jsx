import React from "react";
import { Container } from "./register.styles.js";
import logo from "../../assets/logoDesk.svg";
import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../axios/axiosInstance.js";

export default function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cadastrar · Kenzie Hub";

    const userId = localStorage.getItem("@KenzieHub:userId");
    async function isThereaUser() {
      try {
        const response = await axiosInstance.get(`users/${userId}`);
        navigate(`/home/${response.data.name}`);
      } catch (error) {}
    }
    isThereaUser();
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
