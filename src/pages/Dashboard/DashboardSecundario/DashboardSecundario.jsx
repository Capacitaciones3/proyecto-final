import React from 'react'
import { Outlet } from 'react-router-dom';
import CardUser from '../../components/Cards/CardUser/CardUser'
import CardApi from '../Dashboard/CardApi.jsx/CardApi'
import PostAddIcon from '@mui/icons-material/PostAdd';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab, Typography } from '@mui/material';
import Busqueda from '../Busqueda/Busqueda'

import './dashboardSecundario.css'

const Dashboard = () => {
  return (
    <>
    <main style={{width:'100vw', maxWidth:'100%', minHeight: '100vh', display:'flex', flexDirection: 'column', justifyContent:'space-between', padding:'0px'}}>

      <article style={{width:'100vw', display:'flex', padding:'40px', justifyContent:'flex-start'}}>
        <div className='opciondeBusqueda'>
          <Busqueda/>
        </div>
      </article>

      <article style={{width:'100vw', display:'flex', gap: '25px', padding:'40px', justifyContent:'space-between'}}>
        <section className='contenedorAPIs'>
          <div>
            <CardApi/>
          </div>
          <div>
            <CardApi/>
          </div>
        </section>
        <section className='cardLicenciasPorAprobar2'>
          <div className='titulo2'> <Typography variant="h6" color={'grey'}> Solicitudes pendientes: </Typography></div>
          <div >
            <ul>
              <CardUser/>
            </ul>
          </div>
        </section>
        <section className='cardLicenciasProximas2'>
        <div className='titulo2'> <Typography variant="h6" color={'grey'}> Proximas licencias aprobadas: </Typography></div>
          <div >
            <ul>
              <CardUser/>
            </ul>
          </div>
        </section>
      </article>
    </main>
    <Outlet/>
  </>
  )
  
}

export default Dashboard;