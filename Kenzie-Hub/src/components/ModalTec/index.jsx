import React from "react";
import Button from "../Button";
import { Modal } from "./ModalTec.styles.js";

export default function ModalTec({ onClick }) {
  return (
    <>
      <Modal>
        <div className="container">
          <div className="container__header"></div>
          <div className="container__inputs">
            <div className="label-align">
              <label htmlFor="name">Nome da tecnologia</label>
              <input
                id="name"
                type="text"
                placeholder="Preencha com a tecnologia.."
              />
            </div>
            <div className="label-align">
              <label htmlFor="status">Selecione o status</label>
              <div className="select">
                <select name="select" id="status">
                  <option disabled>Escolha a tecnologia</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container__buttons">
            <Button onClick={onClick}></Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
