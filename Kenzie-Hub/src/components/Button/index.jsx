import React from "react";
import { MainButton } from "./button.styles.js";

export default function Button({ text, onClick, type, children }) {
  return (
    <>
      <MainButton onClick={onClick} type={type}>
        {text}
        {children}
      </MainButton>
    </>
  );
}
