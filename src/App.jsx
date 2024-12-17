import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/GlobalContext";

// pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}

export default App;
