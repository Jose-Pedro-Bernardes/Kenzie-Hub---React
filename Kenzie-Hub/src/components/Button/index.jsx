import React from "react";
import { MainButton } from "./button.styles.js";

export default function Button({ text, onClick, type, children, className }) {
  return (
    <>
      <MainButton className={className} onClick={onClick} type={type}>
        {text}
        {children}
      </MainButton>
    </>
  );
}
