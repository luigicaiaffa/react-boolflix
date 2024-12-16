import { createContext, useContext, useState } from "react";

// # NUOVO CONTESTO
const MoviesContext = createContext();

// # EXPORT DEL PROVIDER
export const MoviesContextProvider = ({ children }) => {
  const isSearching = (e) => {
    const inputValue = e.target.value;
    const searchGlobaldata = {
      ...globalData,
      search: inputValue,
    };

    setGlobalData(searchGlobaldata);
  };

  const [globalData, setGlobalData] = useState({
    movies: {
      title: "",
      original_title: "",
      original_language: "",
      vote_average: 0,
    },
    search: "",
    isSearching,
  });

  console.log(globalData);

  return (
    <MoviesContext.Provider value={globalData}>
      {children}
    </MoviesContext.Provider>
  );
};

// # EXPORT DEL CONTEXT
export const moviesContext = () => {
  return useContext(MoviesContext);
};
