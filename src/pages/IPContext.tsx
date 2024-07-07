import React, { createContext, useContext } from 'react';
import { adresseIP } from './AdresseIP';

const IPContext = createContext<string>(adresseIP);

export const IPProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <IPContext.Provider value={adresseIP}>
      {children}
    </IPContext.Provider>
  );
};

export const useIP = () => useContext(IPContext);
