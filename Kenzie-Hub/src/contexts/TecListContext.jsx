import { createContext, useState } from "react";

export const TecListContext = createContext({});

export function TecListProvider({ children }) {
  const [tecList, setTecList] = useState([]);
  const [tecId, setTecId] = useState("");

  return (
    <TecListContext.Provider
      value={{
        tecList,
        setTecList,
        tecId,
        setTecId,
      }}
    >
      {children}
    </TecListContext.Provider>
  );
}
