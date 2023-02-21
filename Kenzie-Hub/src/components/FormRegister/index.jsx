import React from "react";
import MainButton from "../MainButton/index.jsx";
import { Form } from "./FormRegister.styles.js";
import { ToastContainer, toast } from "react-toastify";

export default function FormRegister({ onSubmit, register }) {
  function inDevelopToast() {
    const notifyErr = toast.error("Essa página está em desenvolvimento.", {
      position: "top-center",
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
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="title1">Crie a sua conta</h1>
        <p className="descriptionTop">Rapido e grátis, vamos nessa</p>
        <div className="labeAlign">
          <label htmlFor="name">Nome</label>
          <input placeholder="Digite seu nome.." id="name" type="text" />
        </div>
        <div className="labeAlign">
          <label htmlFor="email">Email</label>
          <input placeholder="Digite seu email.." id="email" type="text" />
        </div>
        <div className="labeAlign">
          <label htmlFor="password">Senha</label>
          <input
            placeholder="Digite sua senha.."
            id="password"
            type="password"
          />
        </div>
        <div className="labeAlign">
          <label htmlFor="passwordConfirm">Confirmar senha</label>
          <input
            placeholder="Confirme sua senha.."
            id="passwordConfirm"
            type="password"
          />
        </div>
        <div className="labeAlign">
          <label htmlFor="bio">Bio</label>
          <input placeholder="Conte mais sobre você.." id="bio" type="text" />
        </div>
        <div className="labeAlign">
          <label htmlFor="contact">Opção de contato</label>
          <input
            placeholder="Digite seu número de celular.."
            id="contact"
            type="text"
          />
        </div>

        <div className="labeAlign">
          <label htmlFor="contact">Módulo</label>
          <select name="contact" id="contact">
            <option value="first">
              Primeiro Módulo - Fundamentos Front-end
            </option>
            <option value="second">
              Segundo Módulo - Intermediário Front-end
            </option>
            <option value="third">Terceiro Módulo - Front-end Avançado</option>
            <option value="fourth">
              Quarto Módulo - Fundamentos do Back-end
            </option>
            <option value="fifth">
              Quinto Módulo - Intermediario e Avançado do Back-end
            </option>
            <option value="sixth">
              Sexto Módulo - Módulo de empregrabilidade
            </option>
          </select>
        </div>
        <MainButton onClick={inDevelopToast} type="button" text="Cadastrar" />
      </Form>

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
