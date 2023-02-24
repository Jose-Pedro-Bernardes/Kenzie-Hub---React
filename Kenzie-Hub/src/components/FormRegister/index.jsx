import React from "react";
import Button from "../Button/index.jsx";
import { Form } from "./formRegister.styles.js";

export default function FormRegister({ onSubmit, register, errors }) {
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
            maxLength={20}
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>
        <div className="labeAlign">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite seu email.."
            id="email"
            type="text"
            maxLength={254}
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>
        <div className="labeAlign">
          <label htmlFor="password">Senha</label>
          <input
            placeholder="Digite sua senha.."
            id="password"
            type="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>
        <div className="labeAlign">
          <label htmlFor="passwordConfirm">Confirmar senha</label>
          <input
            placeholder="Confirme sua senha.."
            id="passwordConfirm"
            type="password"
            {...register("passwordConfirm")}
          />
          <span>{errors.passwordConfirm?.message}</span>
        </div>
        <div className="labeAlign">
          <label htmlFor="bio">Bio</label>
          <input
            placeholder="Conte mais sobre você.."
            id="bio"
            type="text"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </div>
        <div className="labeAlign">
          <label htmlFor="contact">Opção de contato</label>
          <input
            placeholder="Digite seu número de celular.."
            id="contact"
            type="text"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
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
        <Button type="submit" text="Cadastrar" />
      </Form>
    </>
  );
}
