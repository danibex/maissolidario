import { createContext, useState } from "react";
import React from 'react';

export const CompraContext = createContext({})

export const CompraProvider = ({ children }) => {
    let compraPadrao = {
        
    }
    const [compra, setCompra] = useState({});

    return (
      <CompraContext.Provider value={{ compra }}>
        {children}
      </CompraContext.Provider>
    )
  }