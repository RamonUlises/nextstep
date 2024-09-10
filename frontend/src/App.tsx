import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
// import { Trabajos } from "./Pages/Trabajos";
// import { Trabajadores } from "./Pages/Trabajadores";
// import { Empresas } from "./Pages/Empresas";
import { Login } from './Pages/Login';
import { RegistroInfoColaboradores } from './Pages/RegistroInfoColaborador';
import { Page404 } from './Pages/404';
import { RegistroColaborador } from './Pages/RegistroColaborador';
import { RegistroInfoEmpresas } from './Pages/RegistroInfoEmpresas';
import { RegistroEmpresa } from './Pages/RegistroEmpresa';

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
          <Route path='/info-colaborador' element={<RegistroInfoColaboradores />} />
          <Route path='/info-empresa' element={<RegistroInfoEmpresas />} />
          <Route path='/registro/colaborador' element={<RegistroColaborador />} />
          <Route path='/registro/empresa' element={<RegistroEmpresa />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
