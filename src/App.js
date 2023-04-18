import React, { useContext, useState } from "react";
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
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const { usuario } = useContext(AutenticacionContext);

  return (
    <BrowserRouter>
      <Routes>
        {usuario.isLogged ? (
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />}>
              <Route path=':idLicencia' element={<LicenciaCard />} />
            </Route>
            <Route path='licencias' element={<Licencias />} />
            <Route path='calendario' element={<Calendario />} />
            {usuario.rol.administrador && (
              <Route path='usuarios' element={<AdminUsuarios />} />
            )}
            <Route path='perfil' element={<PerfilUsuario />} />
          </Route>
        ) : (
          <Route path='login' element={<Login />} />
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
