
// ESTA ES LA CARTA QUE APARECE DEBAJO DEL DASHBOARD
import React from 'react'
import Usuario from '../Usuario/Usuario'
import { Avatar, Typography } from '@mui/material'
import "./LicenciaCard.css"
const LicenciaCard = ({ userData }) => {

  const color = {
    Vacaciones: "verde",
    Estudio: "amarillo",
    "Licencia medica": "azul"
  }


  return (
    <div>
      <section className='contenedorUsuario'>
        <div className='usuarioBalance'>
          <div className='avatar-contenedor'>

            <Avatar alt="User" sx={{ width: 56, height: 56 }} src="/static/images/avatar/1.jpg" />
            <div >
              <Typography variant='h6' component="span">JenniferAdmin</Typography>
              <Typography variant='body2' component="span">2023-11-02 - 2023-11-10</Typography>
              <Typography
                sx={{ display: 'flex', gap: "10px", alignItems: "center" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <div className={`punto color-amarillo`}></div>Vacaciones
              </Typography>

            </div>

          </div>

        </div>
        <div className='estadoLicencia'>

        </div>
      </section>
    </div>
  )
}

export default LicenciaCard