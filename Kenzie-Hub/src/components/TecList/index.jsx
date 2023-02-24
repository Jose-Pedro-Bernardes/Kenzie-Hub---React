import React from "react";
import { ContainerOverflow } from "./tecList.styles.js";

export default function Teclist() {
  return (
    <ContainerOverflow>
      <div className="list__align">
        <ul className="list">
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li className="tecnology"></li>
          <li></li>
        </ul>
      </div>
    </ContainerOverflow>
  );
}
