import React from "react";
import MainButton from "../MainButton/index.jsx";
import { Form } from "./FormRegister.styles.js";

export default function FormRegister({ onSubmit, register }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="title1">Crie a sua conta</h1>
        <p className="descriptionTop">Rapido e grátis, vamos nessa</p>
        <div className="labeAlign">
          <label htmlFor="name">Nome</label>
          <input
            placeholder="Digite seu nome.."
            id="name"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="labeAlign">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite seu email.."
            id="email"
            type="text"
            {...register("email")}
          />
        </div>
        <div className="labeAlign">
          <label htmlFor="password">Senha</label>
          <input
            placeholder="Digite sua senha.."
            id="password"
            type="password"
            {...register("password")}
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
          <input
            placeholder="Conte mais sobre você.."
            id="bio"
            type="text"
            {...register("bio")}
          />
        </div>
        <div className="labeAlign">
          <label htmlFor="contact">Opção de contato</label>
          <input
            placeholder="Digite seu número de celular.."
            id="contact"
            type="text"
            {...register("contact")}
          />
        </div>

        <div className="labeAlign">
          <label htmlFor="module">Módulo</label>
          <div className="select">
            <select name="select" id="module" {...register("course_module")}>
              <option disabled>Escolha o módulo</option>
              <option value="1º Módulo - Front-end Iniciante">
                1º Módulo - Front-end Iniciante
              </option>
              <option value="2º Módulo - Front-end Intermediário">
                2º Módulo - Front-end Intermediário
              </option>
              <option value="3º Módulo - Front-end Avançado">
                3º Módulo - Front-end Avançado
              </option>
              <option value=" 4º Módulo - Front-end Back-end Iniciante">
                4º Módulo - Front-end Back-end Iniciante
              </option>
              <option value="5º Módulo - Front-end Intermediario/Avançado">
                5º Módulo - Front-end Intermediario/Avançado
              </option>
              <option value="6º Módulo - Módulo de Empregabilidade">
                6º Módulo - Módulo de Empregabilidade
              </option>
            </select>
          </div>
        </div>
        <MainButton type="submit" text="Cadastrar" />
      </Form>
    </>
  );
}
