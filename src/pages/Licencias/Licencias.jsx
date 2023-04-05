import React from 'react'
import "./licencias.css"
import SubirArchivo from './SubirArchivo/SubirArchivo'
import TipodeLicencia from './TipodeLicencia/TipodeLicencia'
import Descripcion from './Descripcion/Descripcion'

const Licencias = () => {
  return (
    <div className='container'>

      <div className='usuarioLicencia'>
        
      </div>
      <section className='descripcionLicencia'>
        <SubirArchivo></SubirArchivo>
        <TipodeLicencia></TipodeLicencia>
        <Descripcion></Descripcion>
      </section>
      <aside className='lista'>
      
      </aside>
    </div>
  )
}

export default Licencias