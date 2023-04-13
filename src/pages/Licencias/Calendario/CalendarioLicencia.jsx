import React from 'react'
import '../licencias.css'
import MiniCalendario from './MiniCalendario'

const CalendarioLicencia = ({
  dia,
  num,
  mes,
  diasLaborales,
  diasDispo
}) => {

  return (
    <>
    <div className='contenedorCalendario'>
    <div className='imagenesCalendario'>
      <div><MiniCalendario/></div>
      <div><MiniCalendario/></div>
    </div>
    <div className='fecha'>
      <div className='diasLaborales'></div>
      <div className='diasDispo'></div>
    </div>
    </div>
    </>
  )
}

export default CalendarioLicencia

// IMPORTAR COMPONENTE DE MATERIAL UI: DIALOG, PARA ABRIR EL CALENDARIO