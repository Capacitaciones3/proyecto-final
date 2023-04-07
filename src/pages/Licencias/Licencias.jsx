import React from 'react'
import "./licencias.css"
import SubirArchivo from './SubirArchivo/SubirArchivo'
import TipodeLicencia from './TipodeLicencia/TipodeLicencia'
import Descripcion from './Descripcion/Descripcion'
import Usuario from '../../components/Usuario/Usuario'
import {Chip, Fab, Typography} from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';
import NavigationIcon from '@mui/icons-material/Navigation';
import CardUser from '../../components/Cards/CardUser/CardUser'

const Licencias = () => {
  return (
    <>
    <main style={{width:'100vw', maxWidth:'100%', minHeight: '100vh', display:'flex', gap:'30px', justifyContent:'center', padding:'50px 0'}}>

    <article style={{width:'60%', display:'flex', flexDirection:'column'}}>

      <section className='contenedorUsuario'>
        <div className='usuarioBalance'>
          <div>
            <Usuario/>
          </div>
          <div><Typography variant="subtitle1">BALANCE ACTUAL:</Typography></div>
        </div>
        <div className='estadoLicencia'>
          <Typography variant="subtitle1">ESTADO</Typography>
          <Chip label='Aun no enviado'></Chip>
        </div>
      </section>

      <section className='contenedorDescripcion'>

        <div className='contenedorUno'>
          <div className='licencia'> 
            <Typography variant="subtitle1">TIPO DE LICENCIA</Typography>
            <TipodeLicencia/>
          </div>
          <div className='archivo'>
            <Typography variant="subtitle1">ARCHIVO ADJUNTO</Typography>
            <SubirArchivo/>
          </div>
        </div>

        <div className='contenedorDos'>
          <div className='contenedorCalendario'>
            <div className='fotoCalendario'></div>
            <div className='fecha'></div>
          </div>
        </div>

        <div className='contenedorTres'>
          <Typography variant="subtitle1">DESCRIPCION</Typography>
          <Descripcion/>
        </div>
        </section>

        <section className='contenedorAprobacion'>

        <div className='contenedorCuatro'>
          <div className='administrador'>
            <Typography variant="subtitle1"> APROBACION A CARGO DE: </Typography>
            <div>
              <Usuario/>
            </div>
          </div>
        </div>

        <div className='contenedorCinco'>
          <div className='botondeAprobacion'>
            <Fab variant="extended" size="medium" color="primary" aria-label="add">
              <NavigationIcon sx={{ mr: 1 }} icon={<PostAddIcon />} />Solicitar aprobacion
            </Fab>
          </div>
        </div>
      </section>
    </article>

    <aside className='contenedorLista'>
      <div> <Typography variant="h6" color={'grey'}> Detalle de la licencia: </Typography></div>
      <div>
        <ul>
          <CardUser/>
        </ul>
      </div>
    </aside> 
    </main>
    </>
  )
}

export default Licencias
