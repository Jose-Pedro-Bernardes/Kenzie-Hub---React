import React, { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from "../../requests/axiosInstance";
import Header from "../../components/Header";
import { Container } from "./home.styles.js";

export default function Home() {
  const [username, setUsername] = useState("");
  const [courseModule, setCourseModule] = useState("");

  useEffect(() => {
    document.title = "Home · Kenzie Hub";

    async function catchUserName() {
      const userId = localStorage.getItem("@KenzieHub:userId");
      try {
        const res = await axiosInstance.get(`users/${userId}`);

        const nameUser = res.data.name;
        const moduleC = res.data.course_module;

        setUsername(nameUser);
        setCourseModule(moduleC);
      } catch (error) {
        console.log(error.message);
      }
    }
    catchUserName();
  });

  return (
    <>
      <Container>
        <Header />
        <main>
          <section className="sectionTop">
            <div>
              <h1>Olá, {username}</h1>
              <p>{courseModule}</p>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
