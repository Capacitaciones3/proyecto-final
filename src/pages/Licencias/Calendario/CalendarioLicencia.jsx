import { Typography } from '@mui/material'
import React from 'react'
import '../licencias.css'
import { StaticDatePicker } from '@mui/x-date-pickers'
import { format, parse } from 'date-fns'
import { useState } from 'react'

const CalendarioLicencia = ({
  dia,
  num,
  mes,
  diasLaborales,
  diasDispo
}) => {

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [fecha, setFecha] = useState();

  format(new Date(), 'D', { useAdditionalDayOfYearTokens: true })
  //=> '283'
  
  parse('365+1987', 'dd+YYYY', new Date(), {
    useAdditionalDayOfYearTokens: true,
    useAdditionalWeekYearTokens: true
  }).toString()
    

  return (
    <div className='contenedorCalendario'>

            <div className='imagenesCalendario'>

              <button style={{width:'50px'}}>
              <div className='imagenCalendario'>
              <div className='imgRoja' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Typography variant="subtitle2" sx={{color: 'white'}}>{mes}</Typography>
                </div>
                <div className='imgBlanca' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <Typography variant="subtitle2">{num}</Typography>
                <Typography variant="subtitle2">{dia}</Typography>
                </div>
              </div>
              </button>

              

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

            <StaticDatePicker
                value={fechaSeleccionada}
                onChange={setFechaSeleccionada}
              />

          </div>
  )
}

export default CalendarioLicencia