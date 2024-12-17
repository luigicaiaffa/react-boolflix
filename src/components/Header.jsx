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
    <header className="bg-dark">
      <div className="d-flex justify-content-between align-items-center p-3">
        <h1 className="text-danger fw-bold">BOOLFLIX</h1>

        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                aria-describedby="button-addon"
              />
              <button className="btn btn-danger" id="button-addon">
                Cerca
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
