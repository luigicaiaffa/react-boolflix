import { useGlobalContext } from "../contexts/GlobalContext";

import ProductionList from "./ProductionList";

export default function Main() {
  // # Global Context
  const { movies, series } = useGlobalContext();

  return (
    <main>
      <div className="container">
        <section className="mt-5">
          <h1 className="badge bg-dark text-danger fs-2">FILM</h1>

          <ProductionList productions={movies} />
        </section>

        <section className="my-5">
          <h1 className="badge bg-dark text-danger fs-2">SERIE TV</h1>

          <ProductionList productions={series} />
        </section>
      </div>
    </main>
  );
}
