import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoviesContextProvider } from "./contexts/MoviesContext";

// pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* <MoviesContextProvider> */}
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </MoviesContextProvider> */}
    </>
  );
}

export default App;
