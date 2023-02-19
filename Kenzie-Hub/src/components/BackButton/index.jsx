import React from "react";
import { Button } from "./BackButton.styles.js";

export default function BackButton({ type, onClick, text }) {
  return (
    <>
      <Button type={type} onClick={onClick} text={text}>
        {text}
      </Button>
    </>
  );
}
