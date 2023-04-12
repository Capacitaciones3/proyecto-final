import { Typography } from '@mui/material'
import React from 'react'
import '../licencias.css'
import { useState } from 'react'
import MiniCalendario from './MiniCalendario'

const CalendarioLicencia = ({
  dia,
  num,
  mes,
  diasLaborales,
  diasDispo
}) => {

  return (
    <div className='contenedorCalendario'>

        <MiniCalendario/>  

    </div>
  )
}

export default CalendarioLicencia

// IMPORTAR COMPONENTE DE MATERIAL UI: DIALOG, PARA ABRIR EL CALENDARIO