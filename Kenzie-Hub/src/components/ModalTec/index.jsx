import React, { useState } from "react";
import Button from "../Button";
import Modal from "react-modal";
import { Container } from "./modalTec.styles.js";

Modal.setAppElement("#root");

export default function ModalTec({
  onSubmit,
  modalIsOpen,
  closeModal,
  register,
}) {
  return (
    <Modal
      className="modal"
      overlayClassName="modal-overlay"
      isOpen={modalIsOpen}
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
        <form onSubmit={onSubmit}>
          <div className="label-align">
            <label htmlFor="name">Nome da tecnologia</label>
            <input
              id="name"
              type="text"
              placeholder="Preencha com a tecnologia.."
              {...register("title")}
            />
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
