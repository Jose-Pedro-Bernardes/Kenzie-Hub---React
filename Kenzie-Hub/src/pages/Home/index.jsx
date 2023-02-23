import React, { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from "../../requests/axiosInstance";
import Header from "../../components/Header";
import { Container } from "./home.styles.js";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const [user, setUser] = useState({});

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
          <section className="sectionTop">
            <div>
              {user.name ? (
                <>
                  <h1>Olá, {user.name}!</h1>
                  <p>{user.course_module}</p>
                </>
              ) : null}
            </div>
          </section>
          <section></section>
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
