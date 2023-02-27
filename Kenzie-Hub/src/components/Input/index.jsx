import React from "react";

export default function Input({
  placeholder,
  ID,
  type,
  maxLength,
  register,
  children,
  labelText,
}) {
  return (
    <div className="labelAlign">
      <label htmlFor={ID}>{labelText}</label>
      <input
        placeholder={`${placeholder}`}
        id={ID}
        type={type}
        maxLength={maxLength}
        {...register(ID)}
      />
      {children}
    </div>
  );
}
