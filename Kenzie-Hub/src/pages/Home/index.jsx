import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../axios/axiosInstance";
import Header from "../../components/Header";
import { Container } from "./home.styles.js";
import { ToastContainer } from "react-toastify";
import Button from "../../components/Button";
import Teclist from "../../components/TecList";
import CreateTechModal from "../../components/CreateTechModal";
import { verifyToast } from "../../helpers/verifyToast.js";
import { useNavigate } from "react-router-dom";
import { TecListContext } from "../../contexts/TecListContext";
import { CreateTechContext } from "../../contexts/CreateTechContext";

export default function Home() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const userId = localStorage.getItem("@KenzieHub:userId");
  const { tecList, setTecList } = useContext(TecListContext);
  const { openModal, closeModal } = useContext(CreateTechContext);

  useEffect(() => {
    document.title = "Home · Kenzie Hub";
    async function catchUser() {
      try {
        const res = await axiosInstance.get(`users/${userId}`);
        setTecList(res.data.techs);
        setUser(res.data);
      } catch (error) {
        navigate("/");
      }
    }
    catchUser();
  }, []);

  async function createTech(data) {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      const res = await axiosInstance.post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTecList([...tecList, res.data]);
      verifyToast("success", "Tecnologia adicionada!");
      setTimeout(() => {
        closeModal();
      }, 1000);
    } catch (error) {
      verifyToast("error");
    }
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
        <CreateTechModal />
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
