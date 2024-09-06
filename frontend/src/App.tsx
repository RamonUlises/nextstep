import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
// import { Trabajos } from "./Pages/Trabajos";
// import { Trabajadores } from "./Pages/Trabajadores";
// import { Empresas } from "./Pages/Empresas";
import { Login } from './Pages/Login';
import { RegistroInfo } from './Pages/RegistroInfo';
import { Page404 } from './Pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/empresas" element={<Empresas />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/registro-colaborador' element={<RegistroInfo />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
