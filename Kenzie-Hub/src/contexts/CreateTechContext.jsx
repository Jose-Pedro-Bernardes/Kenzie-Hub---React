import { createContext, useState } from "react";

export const CreateTechContext = createContext({});

export function CreateTechProvider({ children }) {
  const [createIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <CreateTechContext.Provider
      value={{ openModal, closeModal, createIsOpen, setIsOpen }}
    >
      {children}
    </CreateTechContext.Provider>
  );
}
