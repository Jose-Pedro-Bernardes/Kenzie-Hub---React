import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormLogin from "../../components/FormLogin";
import { Container } from "./loginPage.styles.js";
import logo from "../../assets/logoDesk.svg";
import { axiosInstance } from "../../axios/axiosInstance";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    document.title = "Login · Kenzie Hub";
    const userId = localStorage.getItem("@KenzieHub:userId");
    async function isThereaUser() {
      try {
        setTimeout(async () => {
          const response = await axiosInstance.get(`users/${userId}`);
          navigate(`/home/${response.data.name}`);
          setUser(response.data);
        }, 2500);
      } catch (error) {}
    }
    isThereaUser();
  });

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
