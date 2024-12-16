import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);

  return (
    <GlobalContext.Provider value={moviesData}>
      {children}
    </GlobalContext.Provider>
  );
};

export const globalContext = () => {
  return useContext(GlobalContext);
};
