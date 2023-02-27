import { createContext, useState } from "react";

export const TecListContext = createContext({});

export function TecListProvider({ children }) {
  const [tecList, setTecList] = useState([]);
  return (
    <TecListContext.Provider value={{ tecList, setTecList }}>
      {children}
    </TecListContext.Provider>
  );
}
