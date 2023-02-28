import { createContext, useState } from "react";

export const UpdateTechContext = createContext({});

export function UpdateTechProvider({ children }) {
  const [updateIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <UpdateTechContext.Provider
      value={{ updateIsOpen, setIsOpen, openModal, closeModal }}
    >
      {children}
    </UpdateTechContext.Provider>
  );
}
