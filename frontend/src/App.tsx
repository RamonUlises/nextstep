import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
// import { Trabajos } from "./Pages/Trabajos";
// import { Trabajadores } from "./Pages/Trabajadores";
// import { Empresas } from "./Pages/Empresas";
import { Login } from './Pages/Login';
import { RegistroInfo } from './Pages/RegistroInfo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/trabajadores" element={<Trabajadores />} />
          <Route path="/empresas" element={<Empresas />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<RegistroInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
