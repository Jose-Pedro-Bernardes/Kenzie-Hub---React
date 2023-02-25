import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../axios/axiosInstance";
import Header from "../../components/Header";
import { Container } from "./home.styles.js";
import { ToastContainer } from "react-toastify";
import Button from "../../components/Button";
import Teclist from "../../components/TecList";
import { useForm } from "react-hook-form";
import ModalTec from "../../components/ModalTec";
import { verifyToast } from "../../helpers/verifyToast.js";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState({});
  const [tecList, setTecList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem("@KenzieHub:userId");

  useEffect(() => {
    document.title = "Home · Kenzie Hub";

    async function catchUser() {
      try {
        const res = await axiosInstance.get(`users/${userId}`);
        setTecList(res.data.techs);
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    catchUser();
  });

  async function createTech(data) {
    try {
      const res = await axiosInstance.post(`users/techs`, data);
      setTecList([...tecList, res.data]);
      verifyToast("success", "Tecnologia adicionada!");
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } catch (error) {
      console.log(error.message);
      verifyToast("error");
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <Header setUser={setUser} />
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
                  <Button onClick={openModal} type="button" text="+" />
                </div>
              </section>
              <section className="section-list">
                <Teclist />
              </section>
            </>
          ) : null}
        </main>
        <ModalTec
          register={register}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
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
