import React from 'react'
import "./licencias.css"
import SubirArchivo from './SubirArchivo/SubirArchivo'
import TipodeLicencia from './TipodeLicencia/TipodeLicencia'
import Descripcion from './Descripcion/Descripcion'
import CardPrincipal from '../../components/Cards/CardPrincipal/CardPrincipal'
import Usuario from '../../components/Usuario/Usuario'
import { Divider } from '@mui/material'

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