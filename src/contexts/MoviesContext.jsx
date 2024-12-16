import { createContext, useContext, useState } from "react";

// # NUOVO CONTESTO
const MoviesContext = createContext();

// # EXPORT DEL PROVIDER
export const MoviesContextProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState("");

  return (
    <MoviesContext.Provider value={[globalData, setGlobalData]}>
      {children}
    </MoviesContext.Provider>
  );
};

// # EXPORT DEL CONTEXT
export const moviesContext = () => {
  return useContext(MoviesContext);
};
