
import React from 'react'
import  {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Layout from './components/Layout/Layout'
import Licencias from './pages/Licencias/Licencias';
import AdminUsuarios from './pages/AdminUsuarios/AdminUsuarios'
import Calendario from './pages/Calendario/Calendario'
import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />         
        <Route path='home' element={<Home />} />
        <Route path='licencia' element={<Licencias />} />
        <Route path='usuarios' element={<AdminUsuarios />} />
        <Route path='calendario' element={<Calendario />} />
        <Route path='perfil' element={<PerfilUsuario />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;