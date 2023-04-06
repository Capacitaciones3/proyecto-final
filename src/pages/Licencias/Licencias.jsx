import React from 'react'
import "./licencias.css"
import SubirArchivo from './SubirArchivo/SubirArchivo'
import TipodeLicencia from './TipodeLicencia/TipodeLicencia'
import Descripcion from './Descripcion/Descripcion'
import CardPrincipal from '../../components/Cards/CardPrincipal/CardPrincipal'
import {BottomNavigationAction } from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';

const Licencias = () => {
  return (
    <div className='container'>
      <div className='containercolumna'>
          <div className='usuarioLicencia'>
        
          </div>
          <section className='descripcionLicencia'>
              <SubirArchivo></SubirArchivo>
              <TipodeLicencia></TipodeLicencia>
              <Descripcion></Descripcion>
              <BottomNavigationAction label="Solicitar aprobacion" icon={<PostAddIcon />}>Solicitar aprobacion</BottomNavigationAction>
          </section>
      </div>
      <aside className='lista'>
        <CardPrincipal></CardPrincipal>
      </aside>
    </div>
  )
}

export default Licencias