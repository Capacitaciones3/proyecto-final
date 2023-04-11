import { Typography } from '@mui/material'
import React from 'react'
import '../licencias.css'

const CalendarioLicencia = ({
  dia,
  num,
  mes,
  diasLaborales,
  diasDispo
}) => {

  return (
    <div className='contenedorCalendario'>

            <div className='imagenesCalendario'>
              <div className='imagenCalendario'>
              <div className='imgRoja' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Typography variant="subtitle2" sx={{color: 'white'}}>{mes}</Typography>
                </div>
                <div className='imgBlanca' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography variant="subtitle2">{num}</Typography>
                <Typography variant="subtitle2">{dia}</Typography>
                </div>
              </div>      

              <div className='imagenCalendario'>
                <div className='imgRoja' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Typography variant="subtitle2" sx={{color: 'white'}}>{mes}</Typography>
                </div>
                <div className='imgBlanca' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography variant="subtitle2">{num}</Typography>
                <Typography variant="subtitle2">{dia}</Typography>
                </div>
              </div>
            </div>

            <div className='fecha'>
              <div className='diasLaborales' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              <Typography variant="subtitle3" sx={{color:'green'}}>{diasLaborales}</Typography>
              </div>
              <div className='diasDispo' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              <Typography variant="subtitle3">{diasDispo}</Typography>
              </div>
            </div>

          </div>
  )
}

export default CalendarioLicencia