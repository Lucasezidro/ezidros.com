import { createContext, ReactNode } from "react";

type ModalProviderProps = {
    children: ReactNode;
  }
  
const ModalContext = createContext({} as ModalProviderProps)

export function ModalProvider({ children }: ModalProviderProps){
    return(
        <ModalContext.Provider value={{ children }}>
            {children}
        </ModalContext.Provider>
    )
}