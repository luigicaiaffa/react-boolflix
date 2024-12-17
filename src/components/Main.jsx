import { useGlobalContext } from "../contexts/GlobalContext";

import ProductionList from "./ProductionList";

export default function Main() {
  // # Global Context
  const { movies, series } = useGlobalContext();

  return (
    <main>
      <div className="container">
        <section className="mt-5">
          <h1>Film</h1>

          <ProductionList productions={movies} />
        </section>

        <section className="my-5">
          <h1>Serie TV</h1>

          <ProductionList productions={series} />
        </section>
      </div>
    </main>
  );
}
