import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Licencias from "./pages/Licencias/Licencias";
import AdminUsuarios from "./pages/AdminUsuarios/AdminUsuarios";
import Calendario from "./pages/Calendario/Calendario";
import PerfilUsuario from "./pages/PerfilUsuario/PerfilUsuario";
import { AutenticacionContext } from "./contexts/Autenticacion";
import LicenciaCard from "./components/LicenciaCard/LicenciaCard";
import DashboardSecundario from "./pages/Dashboard/DashboardSecundario/DashboardSecundario"


function App() {
  const { usuario, isLogged } = useContext(AutenticacionContext);

  return (
    <BrowserRouter>
      <Routes>
        {isLogged ?
          (<Route path='/' element={<Layout />}>
            <Route index element={<DashboardSecundario />} />
            <Route path="dashboard" element={<DashboardSecundario />}>
              <Route path=':idLicencia' element={<LicenciaCard />} />
            </Route>
            <Route path='licencias' element={<Licencias />} />
            {usuario.rol &&
              <Route path='usuarios' element={<AdminUsuarios />} />
            }
            <Route path='calendario' element={<Calendario />} />
            <Route path='perfil' element={<PerfilUsuario />} />
          </Route>)
          : (<Route path="login" element={<Login />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
