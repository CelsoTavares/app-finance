import { createContext, useState, ReactNode } from "react";
import { itens } from "../data/itens";
import { Item } from "../types/Item";

type typesContext = {
  list: Item[];
  setList: (newState: Item[]) => void;
};
const initialize = {
  list: itens,
  setList: () => {},
};

export const Context = createContext<typesContext>(initialize);

const UseProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState(initialize.list);

  return (
    <Context.Provider value={{ list, setList }}>{children}</Context.Provider>
  );
};

export default UseProvider;
