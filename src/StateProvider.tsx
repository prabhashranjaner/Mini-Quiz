import { createContext, useReducer, useContext, type ReactNode } from "react";
import type { CONTEXT_TYPE } from "./types";
import { initialState, reducer } from "./reducer";

// eslint-disable-next-line
export const StateContext = createContext<CONTEXT_TYPE | undefined>(undefined);

const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line
export function useContextData() {
  const context = useContext(StateContext);

  if (context === undefined) throw new Error("Outsider of Provider");

  return context;
}

export default StateProvider;
