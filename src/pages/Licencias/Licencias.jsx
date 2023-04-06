import React from 'react'
import "./licencias.css"
import SubirArchivo from './SubirArchivo/SubirArchivo'
import TipodeLicencia from './TipodeLicencia/TipodeLicencia'
import Descripcion from './Descripcion/Descripcion'
import CardPrincipal from '../../components/Cards/CardPrincipal/CardPrincipal'
import Usuario from '../../components/Usuario/Usuario'
import { BottomNavigationAction, Divider } from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';

const Licencias = () => {
  return (
    <div className='container'>
      <div className='containercolumna'>
          <div className='usuarioLicencia'>
              <Usuario></Usuario>
          </div>
          <section className='descripcionLicencia'>
            <div>
              <TipodeLicencia></TipodeLicencia>
              <Descripcion></Descripcion>
            </div>
            <div>
              <SubirArchivo></SubirArchivo>
            </div>
            <BottomNavigationAction label="Solicitar aprobacion" icon={<PostAddIcon />}>Solicitar aprobacion</BottomNavigationAction>
          </section>
      </div>
      <aside className='lista'>
        <CardPrincipal></CardPrincipal>
        <Divider light />
        <CardPrincipal></CardPrincipal>
        <Divider light />
        <CardPrincipal></CardPrincipal>
        <Divider light />
        <CardPrincipal></CardPrincipal>
        <Divider light />
      </aside>
    </div>
  )
}

export default Licencias