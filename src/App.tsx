import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
