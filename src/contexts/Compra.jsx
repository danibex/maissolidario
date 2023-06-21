import { createContext, useState } from "react";
import React from 'react';

export const CompraContext = createContext({})

export const CompraProvider = ({ children }) => {
    const [compra, setCompra] = useState("Teste");
    
    return (
      <CompraContext.Provider value={{ compra }}>
        {children}
      </CompraContext.Provider>
    )
  }