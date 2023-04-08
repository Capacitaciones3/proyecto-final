import React from 'react'
import { Outlet } from 'react-router-dom';
import CardUser from '../../components/Cards/CardUser/CardUser'
import CardApi from '../Dashboard/CardApi.jsx/CardApi'
import PostAddIcon from '@mui/icons-material/PostAdd';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab, Typography } from '@mui/material';
import './dashboard.css'
//import Busqueda from '../Busqueda/Busqueda'

const Dashboard = () => {
  return (
    <>
    <div style={{width:'100vw', maxWidth:'100%', minHeight: '100vh', display:'flex', justifyContent:'space-between', padding:'0px'}}>

      <article style={{width:'80%', display:'flex', gap: '25px', padding:'40px', justifyContent:'space-between'}}>

        <section className='cardLicenciasPorAprobar'>
          <div className='titulo'> <Typography variant="h6" color={'grey'}> Solicitudes pendientes: </Typography></div>
          <div >
            <ul>
              <CardUser/>
            </ul>
          </div>
        </section>

        <section className='cardLicenciasProximas'>
        <div className='titulo'> <Typography variant="h6" color={'grey'}> Proximas licencias aprobadas: </Typography></div>
          <div >
            <ul>
              <CardUser/>
            </ul>
          </div>
        </section>


        <section className='contenidoSecundario'>

          <div className='botonEnviarLicencias'>
            <Fab variant="extended" size="medium" color="primary" aria-label="add">
              <NavigationIcon sx={{ mr: 1 }} icon={<PostAddIcon />} /> Crear nueva solicitud
            </Fab>
          </div>

          <div className='cardPersonasAusentes'>
            <div className='titulo'> <Typography variant="h6" color={'grey'}> Personas ausentes: </Typography></div>
            <div >
              <ul>
                <CardUser/>
              </ul>
            </div>
          </div>

          <div className='CantDiasDisponibles'>
            <CardApi/>
          </div>
        </section>

      </article>

      <aside className='contenedorAPIsExternas'>

        <div className='APIexterna'>
          <CardApi/>
        </div>
        <div className='APIexterna'>
          <CardApi/>
        </div>
      </aside>
    </div>
    <Outlet/>
  </>
  )
  
}

export default Dashboard;