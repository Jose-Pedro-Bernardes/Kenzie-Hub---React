import React, { useState, useEffect } from "react";
import { ContainerOverflow } from "./tecList.styles.js";
import Button from "../Button/index.jsx";
import { axiosInstance } from "../../axios/axiosInstance.js";

export default function Teclist() {
  const [tecList, setTeclist] = useState([]);

  useEffect(() => {
    async function showTecList() {
      try {
        const userId = localStorage.getItem("@KenzieHub:userId");
        const res = await axiosInstance.get(`users/${userId}`);
        setTeclist(res.data.techs);
      } catch (error) {
        console.log(error.message);
      }
    }
    showTecList();
  }, []);
  return (
    <ContainerOverflow>
      <div className="list__align">
        <ul className="list">
          {tecList.map((tech) => {
            return (
              <li key={tech.id} className="tecnology">
                <Button type="button">
                  <div>
                    <h3>{tech.title}</h3>
                    <p>{tech.status}</p>
                  </div>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </ContainerOverflow>
  );
}
