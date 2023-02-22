import React from "react";
import { Link } from "react-router-dom";
import MainButton from "../MainButton";
import { Form } from "./FormLogin.styles.js";

export default function FormLogin({ onSubmit, register, errors }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="title1">Login</h1>
        <div className="labeAlign">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite seu email.."
            id="email"
            type="text"
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
        <MainButton type="submit" text={"Entrar"} />
        <p>Ainda não possui uma conta?</p>
        <Link to={"/cadastrar"}> Cadastrar </Link>
      </Form>
    </>
  );
}
