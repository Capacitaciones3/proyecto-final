import React, { useState } from 'react'
import '../licencias.css'
import MiniCalendario from './MiniCalendario'
import { Typography } from '@mui/material'

const CalendarioLicencia = ({
  dia,
  num,
  mes,
  diasLaborales,
  diasDispo
}) => {

   const initData = {
    diasLabo: 'Días laborales',
    diasDispo: "Días disponibles",
  }

  const [dias, setDias] = useState(initData);

  const handleDias = (value) => {
    console.log(value)
  }

  return (
    <>
    <div className='contenedorCalendario'>
    <div className='imagenesCalendario'>
      <div><MiniCalendario /></div>
      <div><MiniCalendario/></div>
    </div>
    <div className='fecha'>
      <div className='diasLaborales'>
      <Typography variant="subtitle2" sx={{color:'green'}}>{dias.diasLabo}</Typography>
      </div>
      <div className='diasDispo'>
      <Typography variant="subtitle2">{dias.diasDispo}</Typography>
      </div>
    </div>
    </div>
    </>
  )
}

export default CalendarioLicencia

// IMPORTAR COMPONENTE DE MATERIAL UI: DIALOG, PARA ABRIR EL CALENDARIO