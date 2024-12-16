import { GlobalContextProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <header>
          <h1>Boolflix</h1>

          <div>
            <input type="text" />
            <button>search</button>
          </div>
        </header>

        <main>
          <div></div>
        </main>
      </GlobalContextProvider>
    </>
  );
}

export default App;
