import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { Form } from "./formLogin.styles.js";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosInstance } from "../../axios/axiosInstance";
import { verifyToast } from "../../helpers/verifyToast.js";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup.string().required("Preencha com seu email."),
    password: yup.string().required("Preencha com sua senha."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function loginUser(data) {
    try {
      const response = await axiosInstance.post("sessions", data);
      localStorage.setItem("@KenzieHub:token", response.data.token);
      localStorage.setItem("@KenzieHub:userId", response.data.user.id);
      verifyToast("success", "Login bem sucedido!", "top-right");
      setTimeout(() => {
        navigate(`/home/${response.data.user.name}`);
      }, 2000);
    } catch (error) {
      verifyToast("error", "Usuário não encontrado.", "top-right");
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(loginUser)}>
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
