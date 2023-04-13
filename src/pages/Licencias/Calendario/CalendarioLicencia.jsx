import React, { useState } from 'react'
import '../licencias.css'
import MiniCalendario from './MiniCalendario'
import { Typography } from '@mui/material'

const initData = {
  diasLabo: 'Días laborales',
  diasDispo: "Días disponibles",
}

const CalendarioLicencia = ({
 setData, data
}) => {

  const [dias, setDias] = useState(initData);

  const handleFecha = (date, name) => {
    setData({...data, [name]: date})
  }
  return (
    <>
    <div className='contenedorCalendario'>
    <div className='imagenesCalendario'>
      <div><MiniCalendario handleFecha={handleFecha} name="startDate"/></div>
      <div><MiniCalendario handleFecha={handleFecha} name="endDate"/></div>
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