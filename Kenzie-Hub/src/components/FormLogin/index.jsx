import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { Form } from "./formLogin.styles.js";

export default function FormLogin({ onSubmit, register, errors }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="title1">Login</h1>
        <Input
          labelText="Email"
          placeholder="Digite seu email.."
          ID="email"
          type="text"
          register={register}
        >
          <span>{errors.email?.message}</span>
        </Input>

        <Input
          labelText="Senha"
          placeholder="Digite sua senha.."
          ID="password"
          type="password"
          register={register}
        >
          <span>{errors.password?.message}</span>
        </Input>

        <Button type="submit" text={"Entrar"} />
        <p>Ainda não possui uma conta?</p>
        <Link to={"/register"}> Cadastrar </Link>
      </Form>
    </>
  );
}
