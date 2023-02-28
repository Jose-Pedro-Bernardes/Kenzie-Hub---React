import React, { useContext } from "react";
import SelectInput from "../SelectInput";
import Button from "../Button";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { UpdateTechContext } from "../../contexts/UpdateTechContext";
import { Container } from "./updateModal.js";
import { axiosInstance } from "../../axios/axiosInstance";
import { verifyToast } from "../../helpers/verifyToast";
import { TecListContext } from "../../contexts/TecListContext";

export default function UpdateModal() {
  const { register, handleSubmit } = useForm();
  const { updateIsOpen, closeModal } = useContext(UpdateTechContext);
  const { tecList, setTecList, tecId } = useContext(TecListContext);

  async function updateTech(data) {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      const res = await axiosInstance.put(`users/techs/${tecId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      verifyToast("success", "Tecnologia atualizada!", "top-right");
      setTimeout(() => {
        updateTec(tecId, res.data);
        closeModal();
      }, 1000);
    } catch (error) {
      verifyToast("error", "Algo deu errado.", "top-right");
    }
  }

  async function removeTec(id) {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      await axiosInstance.delete(`users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      verifyToast("info", "Tecnologia removida.", "top-right");
      setTimeout(() => {
        setTecList(tecList.filter((tec) => tec.id !== id));
        closeModal();
      }, 1000);
    } catch (error) {
      verifyToast("error", "Erro ao remover tecnologia.", "top-right");
    }
  }

  function updateTec(tecId, updatedTec) {
    setTecList((tecList) =>
      tecList.map((tec) => {
        if (tec.id === tecId) {
          return { ...tec, ...updatedTec };
        } else {
          return tec;
        }
      })
    );
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
              <Button
                onClick={() => removeTec(tecId)}
                className="btn-delete"
                text="Excluir"
                type="button"
              />
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}
