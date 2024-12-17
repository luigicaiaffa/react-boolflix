import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Header() {
  // # Global Context
  const { fetchMoviesData, fetchSeriesData } = useGlobalContext();

  // # Gestione Form
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetchMoviesData(inputValue);
    fetchSeriesData(inputValue);
  }

  return (
    <header>
      <h1>Boolflix</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button>Cerca</button>
        </form>
      </div>
    </header>
  );
}
