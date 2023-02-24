import React from "react";
import { MainButton } from "./button.styles.js";

export default function Button({ text, onClick, type }) {
  return (
    <>
      <MainButton onClick={onClick} type={type}>
        {text}
      </MainButton>
    </>
  );
}
