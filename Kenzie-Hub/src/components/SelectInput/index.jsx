import React from "react";

export default function SelectInput({ labelText, children, ID, register }) {
  return (
    <div className="labelAlign">
      <label htmlFor={ID}>{labelText}</label>
      <div className="select">
        <select name="select" id={ID} {...register(ID)}>
          {children}
        </select>
      </div>
    </div>
  );
}
