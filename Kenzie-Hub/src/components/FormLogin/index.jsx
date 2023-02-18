import React from "react";
import { Link } from "react-router-dom";
import MainButton from "../MainButton";
import { Form } from "./FormLogin.styles.js";

export default function FormLogin({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="title1">Login</h1>
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
        <MainButton text={"Entrar"} />
        <p>Ainda não possui uma conta?</p>
        <Link to={"/cadastrar"}> Cadastrar </Link>
      </Form>
    </>
  );
}
