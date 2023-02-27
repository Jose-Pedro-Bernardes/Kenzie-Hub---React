import React from "react";
import Button from "../Button/index.jsx";
import { Form } from "./formRegister.styles.js";
import Input from "../Input";
import SelectInput from "../SelectInput";

export default function FormRegister({ onSubmit, register, errors }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
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
