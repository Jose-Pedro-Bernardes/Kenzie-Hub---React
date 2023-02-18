import React from "react";
import { Button } from "./MainButton.styles.js";

export default function MainButton({ text, onClick, type }) {
  return (
    <>
      <Button onClick={onClick} type={type}>
        {text}
      </Button>
    </>
  );
}
