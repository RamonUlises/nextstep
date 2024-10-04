import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Trabajos } from './Pages/Trabajos';
import { Colaboradores } from './Pages/Colaboradores';
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
import { TermimosServicios } from './Pages/TerminosServicios';
import { PoliticasPrivacidad } from './Pages/PoliticasPrivacidad';
import { CrearTrabajo } from './Pages/CrearTrabajo';
import { RecuperarContrasena } from './Pages/RecuperarContrasena';
import { TalleresInfo } from './Pages/TalleresInfo';
import { useEffect, useState } from 'react';
import { NotConection } from './Components/NotConection';
import { Premium } from './Pages/Premium';
import { TrabajosInfo } from './Pages/TrabajosInfo';
import { Tienda } from './Pages/Tienda';
import { ScrollToTop } from './Components/ScrollTop';
import { ColaboradoresInfo } from './Pages/ColaboradoresInfo';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Función que se ejecuta cuando el usuario pierde la conexión
    const handleOffline = () => {
      setIsOnline(false);
    };

    // Función que se ejecuta cuando el usuario recupera la conexión
    const handleOnline = () => {
      setIsOnline(true);
    };

    if (!isOnline) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Añadir los event listeners
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isOnline && <NotConection />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/trabajos/:id" element={<TrabajosInfo />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/colaboradores/:id" element={<ColaboradoresInfo />} />
          {/* <Route path="/empresas" element={<Empresas />} /> */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/info-colaborador"
            element={<RegistroInfoColaboradores />}
          />
          <Route path="/info-empresa" element={<RegistroInfoEmpresas />} />
          <Route
            path="/registro/colaborador"
            element={<RegistroColaborador />}
          />
          <Route path="/registro/empresa" element={<RegistroEmpresa />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/talleres-info" element={<TalleresInfo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/crear-trabajo/:id" element={<CrearTrabajo />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/terminos-y-servicios" element={<TermimosServicios />} />
          <Route path="/premium" element={<Premium />} />
          <Route
            path="/politicas-de-privacidad"
            element={<PoliticasPrivacidad />}
          />
          <Route
            path="/recuperar-contrasena"
            element={<RecuperarContrasena />}
          />
          <Route path="tienda" element={<Tienda />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
