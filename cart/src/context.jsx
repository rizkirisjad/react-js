/** @format */

import { useContext, useReducer, useEffect, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
