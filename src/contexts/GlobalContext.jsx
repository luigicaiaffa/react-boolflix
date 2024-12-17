import { createContext, useContext, useState } from "react";

// # NUOVO CONTESTO
const GlobalContext = createContext();

// # EXPORT DEL PROVIDER
export const GlobalContextProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    movies: [],
    fetchMoviesData,

    series: [],
    fetchSeriesData,
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmQ4YjZmMmVkZDhjZmQ2NmMyNDJlOWNiNDc4MzZmYSIsIm5iZiI6MTczNDM1MDE2Ny44NTEsInN1YiI6IjY3NjAxNTU3ODYyNThhNmZiNzYzNjBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2R6jgLS7MZQWXpS9dD81NJTIh3ug0omVP9C6o5O-mGg`,
    },
  };

  function fetchMoviesData(term) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${term}&language=it&page=1`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const moviesData = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          original_language: movie.original_language,
          vote_average: movie.vote_average,
          poster_path: movie.poster_path,
          overview: movie.overview,
        }));

        setGlobalData((globalData) => ({
          ...globalData,
          movies: moviesData,
        }));
      });
  }

  function fetchSeriesData(term) {
    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${term}&language=it&page=1`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const seriesData = data.results.map((serie) => ({
          id: serie.id,
          title: serie.name,
          original_title: serie.original_name,
          original_language: serie.original_language,
          vote_average: serie.vote_average,
          poster_path: serie.poster_path,
          overview: serie.overview,
        }));

        setGlobalData((globalData) => ({
          ...globalData,
          series: seriesData,
        }));
      });
  }

  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};

// # EXPORT DEL CONTEXT
export const useGlobalContext = () => useContext(GlobalContext);
