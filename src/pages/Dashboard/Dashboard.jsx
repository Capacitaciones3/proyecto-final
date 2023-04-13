import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import CardUser from '../../components/Cards/CardUser/CardUser'
import CardApi from '../Dashboard/CardApi.jsx/CardApi'
import PostAddIcon from '@mui/icons-material/PostAdd';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab, Typography } from '@mui/material';
import './dashboard.css'
import { AutenticacionContext } from '../../contexts/Autenticacion';
import LicenciaCard from '../../components/LicenciaCard/LicenciaCard';
//import Busqueda from '../Busqueda/Busqueda'

const Dashboard = () => {

  const { usuario } = useContext(AutenticacionContext);


  return (
    <>
      <div style={{ width: '100vw', maxWidth: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'space-between', padding: '0px' }}>

        <article style={{ width: '80%', display: 'flex', gap: '25px', padding: '40px', justifyContent: 'space-between' }}>

          <section className='cardLicenciasPorAprobar'>
            <div className='titulo'> <Typography variant="h6" color={'grey'}> Solicitudes pendientes: </Typography></div>
            <div >
              <ul>
                <CardUser />
              </ul>
            </div>
          </section>

          <section className='cardLicenciasProximas'>
            <div className='titulo'> <Typography variant="h6" color={'grey'}> Proximas licencias aprobadas: </Typography></div>
            <div >
              <ul>
                <CardUser />
              </ul>
            </div>
          </section>

          {usuario.rol.usuario ?
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
                    <CardUser />
                  </ul>
                </div>
              </div>

              <div className='CantDiasDisponibles'>
                <CardApi />
              </div>
            </section>
            :
            <section className='contenidoSecundario'>

              <box>
                <span>Hola, yo me renderizo cuando soy admin jeje, cambiame desde el contexto para ver la data que le aparece al usuario</span>
              </box>

            </section>
          }

        </article>

        <aside className='contenedorAPIsExternas'>

          <div className='APIexterna'>
            <CardApi />
          </div>
          <div className='APIexterna'>
            <CardApi />
          </div>
        </aside>
      </div>
      <Outlet />
      <LicenciaCard />
    </>
  )

}

export default Dashboard;