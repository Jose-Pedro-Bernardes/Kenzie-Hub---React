import React, { useContext } from "react";
import Button from "../Button";
import Modal from "react-modal";
import { Container } from "./createTechModal.styles.js";
import { CreateTechContext } from "../../contexts/CreateTechContext";
import { verifyToast } from "../../helpers/verifyToast";
import { TecListContext } from "../../contexts/TecListContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosInstance } from "../../axios/axiosInstance";

Modal.setAppElement("#root");

export default function CreateTechModal() {
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

  const { tecList, setTecList } = useContext(TecListContext);
  const { createIsOpen, closeModal } = useContext(CreateTechContext);

  async function createTech(data) {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      const res = await axiosInstance.post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTecList([...tecList, res.data]);
      verifyToast("success", "Tecnologia adicionada!");
      setTimeout(() => {
        closeModal();
      }, 1000);
    } catch (error) {
      console.log(error.message);
      verifyToast("error");
    }
  }

  return (
    <Modal
      className="modal"
      overlayClassName="modal-overlay"
      isOpen={createIsOpen}
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
          <div className="label-align">
            <label htmlFor="name">Nome da tecnologia</label>
            <input
              id="title"
              type="text"
              placeholder="Preencha com a tecnologia.."
              maxLength={30}
              {...register("title")}
            />
            <span>{errors.title?.message}</span>
          </div>
          <div className="label-align">
            <label htmlFor="status">Selecione o status</label>
            <div className="select">
              <select name="select" id="status" {...register("status")}>
                <option disabled>Escolha a tecnologia</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
          </div>
          <Button type="submit" text="Cadastrar Tecnologia" />
        </form>
      </Container>
    </Modal>
  );
}
