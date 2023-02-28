import React from "react";
import { verifyToast } from "../../helpers/verifyToast.js";
import { axiosInstance } from "../../axios/axiosInstance.js";
import { Form } from "./formRegister.styles.js";
import Button from "../Button/index.jsx";
import Input from "../Input";
import SelectInput from "../SelectInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function FormRegister() {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Seu nome deve ter ao menos 3 caractéres."),
    email: yup
      .string()
      .required("Email obrigatório.")
      .email("Esse email é inválido."),
    password: yup
      .string()
      .required("Senha obrigatória.")
      .min(8, "Sua senha deve conter ao menos 8 caractéres.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;\"'<>,.?/|\\]).+$/,
        "Sua senha deve conter letras, números e símbolos."
      ),
    contact: yup.string().required("Telefone obrigatório."),
    bio: yup.string().required("Biografia obrigatória."),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function registerUser(data) {
    try {
      const response = await axiosInstance.post("users", data);
      verifyToast("success", "Usuário cadastrado!", "top-right");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      verifyToast("error", "Algo deu errado.", "top-right");
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(registerUser)}>
        <h1 className="title1">Crie a sua conta</h1>
        <p className="descriptionTop">Rapido e grátis, vamos nessa!</p>
        <Input
          labelText={"Nome"}
          placeholder={"Digite seu nome.."}
          ID={"name"}
          type={"text"}
          maxLength={20}
          register={register}
        >
          <span>{errors.name?.message}</span>
        </Input>

        <Input
          labelText={"Email"}
          placeholder={"Digite seu email.."}
          ID={"email"}
          type={"text"}
          maxLength={254}
          register={register}
        >
          <span>{errors.email?.message}</span>
        </Input>

        <Input
          labelText={"Senha"}
          placeholder={"Digite sua senha.."}
          ID={"password"}
          type={"password"}
          maxLength={100}
          register={register}
        >
          <span>{errors.password?.message}</span>
        </Input>

        <Input
          labelText={"Confirmar senha"}
          placeholder={"Confirme sua senha.."}
          ID={"passwordConfirm"}
          type={"password"}
          maxLength={100}
          register={register}
        >
          <span>{errors.passwordConfirm?.message}</span>
        </Input>

        <Input
          labelText={"Bio"}
          placeholder={"Conte mais sobre você.."}
          ID={"bio"}
          type={"text"}
          maxLength={100}
          register={register}
        >
          <span>{errors.bio?.message}</span>
        </Input>

        <Input
          labelText={"Opção de contato"}
          placeholder={"Digite seu número de celular.."}
          ID={"contact"}
          type={"text"}
          maxLength={11}
          register={register}
        >
          <span>{errors.contact?.message}</span>
        </Input>

        <SelectInput labelText="Módulo" ID="course_module" register={register}>
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
        </SelectInput>
        <Button type="submit" text="Cadastrar" />
      </Form>
    </>
  );
}
