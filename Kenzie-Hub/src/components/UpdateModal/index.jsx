import React from "react";
import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosInstance } from "../../axios/axiosInstance";

export default function UpdateModal() {
  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("Preencha com a tecnologia.")
      .matches(/^[^<>=$!()+{}\/?;,%#@'"[\]]*$/, "Caracteres inválidos."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <Modal
        className="modal"
        overlayClassName="modal-overlay"
        isOpen={updateIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
      >
        <Container>
          <button className="closeModal" onClick={closeModal} type="button">
            X
          </button>
          <div className="container__header">
            <h3>Cadastrar tecnogia</h3>
          </div>
          <form onSubmit={handleSubmit(createTech)}>
            <Input
              labelText="Nome da tecnologia"
              ID="title"
              type="text"
              placeholder="Preencha com a tecnologia.."
              maxLength={30}
              register={register}
            >
              <span>{errors.title?.message}</span>
            </Input>

            <SelectInput
              labelText="Selecione o status"
              ID="status"
              register={register}
            >
              <option disabled>Escolha a tecnologia</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </SelectInput>

            <Button type="submit" text="Cadastrar Tecnologia" />
          </form>
        </Container>
      </Modal>
    </>
  );
}
