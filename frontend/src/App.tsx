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
import { Administrador } from './Pages/Administrador';
import { Talleres } from './Pages/Talleres';
import { Blog } from './Pages/Blog';
import { Perfil } from './Pages/Perfil';
import { SobreNosotros } from './Pages/SobreNosotros';

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
          <Route path='/administrador' element={<Administrador />} />
          <Route path='/talleres' element={<Talleres />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/sobre-nosotros' element={<SobreNosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
