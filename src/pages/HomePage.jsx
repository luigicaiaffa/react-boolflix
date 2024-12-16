import { moviesContext } from "../contexts/MoviesContext";

export default function HomePage() {
  const { movies, isSearching } = moviesContext();

  return (
    <div className="container py-5">
      <h1>Boolflix</h1>
      <div>
        <form>
          <input type="text" onChange={isSearching} />
          <button>search</button>
        </form>
      </div>
    </div>
  );
}
