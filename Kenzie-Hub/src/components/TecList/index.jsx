import React from "react";
import { ContainerOverflow } from "./tecList.styles.js";
import Button from "../Button/index.jsx";

export default function Teclist() {
  return (
    <ContainerOverflow>
      <div className="list__align">
        <ul className="list">
          <li className="tecnology">
            <Button type="button">
              <div>
                <h3>React JS</h3>
                <p>Intermediário</p>
              </div>
            </Button>
          </li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li></li>
        </ul>
      </div>
    </ContainerOverflow>
  );
}
