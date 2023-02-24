import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../requests/axiosInstance";
import Header from "../../components/Header";
import { Container } from "./home.styles.js";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../components/Button";
import Teclist from "../../components/TecList";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

export default function Home() {
  const [user, setUser] = useState({});
  const [tecList, setTecLit] = useState([]);

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

  useEffect(() => {
    document.title = "Home · Kenzie Hub";

    async function catchUser() {
      const userId = localStorage.getItem("@KenzieHub:userId");
      try {
        const res = await axiosInstance.get(`users/${userId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    catchUser();
  });

  return (
    <>
      <Container>
        <Header setUser={setUser} showToast={showToast} />
        <main>
          {user.name ? (
            <>
              <section className="main__header">
                <div className="align-between">
                  <h1>Olá, {user.name}!</h1>
                  <p>{user.course_module}</p>{" "}
                </div>
              </section>
              <section className="main__body">
                <div className="main__body--header">
                  <h2>Tecnologias</h2>
                  <Button type="button" text="+" />
                </div>
              </section>
              <section className="section-list">
                <Teclist />
              </section>
            </>
          ) : null}
        </main>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Container>
    </>
  );
}
