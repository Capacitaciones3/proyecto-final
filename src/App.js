import React, { useContext } from 'react'
import  {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login/Login';
import Home from "./pages/Dashboard/Dashboard"
import NotFound from "./pages/NotFound/NotFound"
import Layout from './components/Layout/Layout'
import Licencias from './pages/Licencias/Licencias';
import AdminUsuarios from './pages/AdminUsuarios/AdminUsuarios'
import Calendario from './pages/Calendario/Calendario'
import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario'
import { AutenticacionContext } from './contexts/Autenticacion';
import Dashboard from './pages/Dashboard/Dashboard';
import LicenciaCard from './components/LicenciaCard/LicenciaCard';


function App() {

  const {usuario} = useContext(AutenticacionContext);


  return (
    <BrowserRouter>
    <Routes>
    { usuario.isLogged?
    <Route path='/' element={<Layout />}>      
        <Route path='dashboard' element={<Dashboard />}>
            <Route path=':idLicencia' element={<LicenciaCard/>}/>
        </Route>
        <Route path='licencias' element={<Licencias />} />
        { usuario.rol.administrador &&
        <Route path='usuarios' element={<AdminUsuarios />} />
        }
        <Route path='calendario' element={<Calendario />} />
        <Route path='perfil' element={<PerfilUsuario />} />
      </Route>

      :<Route index element={<Login />} />
    }

    <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;