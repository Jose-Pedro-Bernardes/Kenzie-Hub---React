import React, { useContext } from "react";
import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateTechContext } from "../../contexts/UpdateTechContext";
import { Container } from "./updateModal.js";
import { axiosInstance } from "../../axios/axiosInstance";
import { verifyToast } from "../../helpers/verifyToast";
import { TecListContext } from "../../contexts/TecListContext";

export default function UpdateModal() {
  const { register, handleSubmit } = useForm();
  const { updateIsOpen, closeModal } = useContext(UpdateTechContext);
  const { tecId } = useContext(TecListContext);

  function updateTech(data) {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      const res = axiosInstance.put(`users/techs/${tecId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      verifyToast("success", "Tecnologia atualizada!", "top-right");
    } catch (error) {
      verifyToast("error", "Algo deu errado.", "top-right");
    }
  }

  return (
    <>
      <Modal
        className="modalUpdate"
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
            <h3>Atualizar o status</h3>
          </div>
          <form onSubmit={handleSubmit(updateTech)}>
            <SelectInput labelText="Status" ID="status" register={register}>
              <option disabled>Escolha o status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </SelectInput>
            <div>
              <Button
                className="main-btn"
                type="submit"
                text="Atualizar Status"
              />
              <Button className="btn-delete" text="Excluir" />
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}
