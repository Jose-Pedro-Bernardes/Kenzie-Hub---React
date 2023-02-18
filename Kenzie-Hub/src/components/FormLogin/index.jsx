import React from "react";
import MainButton from "../MainButton";

export default function FormLogin({ onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="password" />
        <MainButton text={"Entrar"} />
      </form>
    </>
  );
}
