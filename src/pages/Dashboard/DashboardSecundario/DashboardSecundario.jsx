import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import CardUser from '../../../components/Cards/CardUser/CardUser'
import CardApi from '../CardApi.jsx/CardApi'
import { Typography } from '@mui/material';
import Busqueda from '../Busqueda/Busqueda'

import './dashboardSecundario.css'
import LicenciaCard from '../../../components/LicenciaCard/LicenciaCard';

const Dashboard = () => {

  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  }


  const handleData = (e) => {
    setData((old) => {
      return ({
        ...old, [e.target.name]: e.target.value  // para acceder a uno objeto dentro de un objeto []
      })
    })
  }

  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <>
      <div style={{ width: '100vw', maxWidth: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0px' }}>

        <form style={{ width: '100%', display: 'flex', padding: '40px 40px 15px 40px', justifyContent: 'flex-start' }} onSubmit={handleSubmit}>
          <div className='opciondeBusqueda'>
            <Busqueda />
          </div>
        </form>

        <article style={{ width: '100%', display: 'flex', gap: '25px', padding: '15px 40px 40px 40px', justifyContent: 'space-between' }}>
          <section className='contenedorAPIs'>
            <div>
              <CardApi />
            </div>
            <div>
              <CardApi />
            </div>
          </section>
          <section className='cardLicenciasPorAprobar2'>
            <div className='titulo2'> <Typography variant="h6" color={'grey'}> Solicitudes pendientes: </Typography></div>
            <div >
              <ul>
                <CardUser />
              </ul>
            </div>
          </section>
          <section className='cardLicenciasProximas2'>
            <div className='titulo2'> <Typography variant="h6" color={'grey'}> Proximas licencias aprobadas: </Typography></div>
            <div >
              <ul>
                <CardUser />
              </ul>
            </div>
          </section>
        </article>
      </div>
      <Outlet />
      <div className='licencia-card-container'>
        <LicenciaCard />
      </div>
    </>
  )

}

export default Dashboard;