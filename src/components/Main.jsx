import { useGlobalContext } from "../contexts/GlobalContext";

import ProductionList from "./ProductionList";

export default function Main() {
  // # Global Context
  const { movies, series } = useGlobalContext();

  return (
    <main>
      <div className="container">
        <section>
          <h2>Film</h2>
          <ProductionList productions={movies} />
        </section>

        <section>
          <h2>Serie TV</h2>
          <ProductionList productions={series} />
        </section>
      </div>
    </main>
  );
}
