import React, { useState, useEffect, useContext } from "react";
import { ContainerOverflow } from "./tecList.styles.js";
import Button from "../Button/index.jsx";
import { axiosInstance } from "../../axios/axiosInstance.js";
import { TecListContext } from "../../contexts/TecListContext.jsx";
import { UpdateTechContext } from "../../contexts/UpdateTechContext.jsx";
import UpdateModal from "../../components/UpdateModal";

export default function Teclist() {
  const { tecList, setTecList, setTecId } = useContext(TecListContext);
  const { openModal } = useContext(UpdateTechContext);

  useEffect(() => {
    async function showTecList() {
      try {
        const userId = localStorage.getItem("@KenzieHub:userId");
        const res = await axiosInstance.get(`users/${userId}`);
        setTecList(res.data.techs);
      } catch (error) {
        console.log(error.message);
      }
    }
    showTecList();
  }, []);

  function onOpenModal(id) {
    setTecId(id);
    openModal();
    console.log(id);
  }

  return (
    <ContainerOverflow>
      <div className="list__align">
        <ul className="list">
          {!tecList.length == 0 ? (
            tecList.map((tech) => {
              return (
                <li key={tech.id} className="tecnology">
                  <Button onClick={() => onOpenModal(tech.id)} type="button">
                    <div>
                      <h3>{tech.title}</h3>
                      <p>{tech.status}</p>
                    </div>
                  </Button>
                </li>
              );
            })
          ) : (
            <li className="noTecnology">
              <h2> Adicione suas tecnologias...</h2>
            </li>
          )}
        </ul>
      </div>
      <UpdateModal />
    </ContainerOverflow>
  );
}
