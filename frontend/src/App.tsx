import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
// import { Trabajos } from "./Pages/Trabajos";
// import { Trabajadores } from "./Pages/Trabajadores";
// import { Empresas } from "./Pages/Empresas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/trabajadores" element={<Trabajadores />} />
          <Route path="/empresas" element={<Empresas />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
