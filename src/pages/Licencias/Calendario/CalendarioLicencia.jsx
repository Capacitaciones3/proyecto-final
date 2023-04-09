import { Typography } from '@mui/material'
import React from 'react'
import '../licencias.css'

const CalendarioLicencia = () => {

    



  return (
    <div className='contenedorCalendario'>

            <div className='imagenesCalendario'>

              <div className='imagenCalendario'>
              <div className='imgRoja' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Typography variant="subtitle2" sx={{color: 'white'}}>Mes</Typography>
                </div>
                <div className='imgBlanca' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography variant="subtitle2">DIA</Typography>
                <Typography variant="subtitle2">DIA</Typography>
                </div>
              </div>

              <div className='imagenCalendario'>
                <div className='imgRoja' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Typography variant="subtitle2" sx={{color: 'white'}}>Mes</Typography>
                </div>
                <div className='imgBlanca' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography variant="subtitle2">DIA</Typography>
                <Typography variant="subtitle2">DIA</Typography>
                </div>
              </div>
            </div>

            <div className='fecha'>
              <div className='diasLaborales' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              <Typography variant="subtitle3" sx={{color:'green'}}>Dias laborales</Typography>
              </div>
              <div className='diasDispo' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              <Typography variant="subtitle3">Dias disponibles</Typography>
              </div>
            </div>

          </div>
  )
}

export default CalendarioLicencia