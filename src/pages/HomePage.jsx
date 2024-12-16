import { useState } from "react";

export default function HomePage() {
  const [globalData, setGlobalData] = useState({
    movies: [],
    search: "",
  });

  const url = `https://api.themoviedb.org/3/search/movie?query=${globalData.search}&include_adult=false&language=it&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmQ4YjZmMmVkZDhjZmQ2NmMyNDJlOWNiNDc4MzZmYSIsIm5iZiI6MTczNDM1MDE2Ny44NTEsInN1YiI6IjY3NjAxNTU3ODYyNThhNmZiNzYzNjBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2R6jgLS7MZQWXpS9dD81NJTIh3ug0omVP9C6o5O-mGg",
    },
  };

  function handleInputChange(e) {
    setGlobalData({
      ...globalData,
      search: e.target.value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetchMoviesData();
  }

  function fetchMoviesData() {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        const searchedMovies = data.results;

        const movies = searchedMovies.map((movie) => ({
          title: movie.title,
          original_title: movie.original_title,
          original_language: movie.original_language,
          vote_average: movie.vote_average,
        }));

        const searchedMoviesData = {
          ...globalData,
          search: "",
          movies,
        };

        setGlobalData(searchedMoviesData);
      });
  }

  return (
    <>
      <header>
        <h1>Boolflix</h1>
        <div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={globalData.search}
              onChange={handleInputChange}
            />
            <button>search</button>
          </form>
        </div>
      </header>

      <main>
        {globalData.movies.map((movie, index) => {
          return (
            <ul key={index}>
              <li>{movie.title}</li>
              <li>{movie.original_title}</li>
              <li>{movie.original_language}</li>
              <li>{movie.vote_average}</li>
            </ul>
          );
        })}
      </main>
    </>
  );
}
