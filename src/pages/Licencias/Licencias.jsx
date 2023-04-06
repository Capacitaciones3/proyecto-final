import React from 'react'
import "./licencias.css"
import SubirArchivo from './SubirArchivo/SubirArchivo'
import TipodeLicencia from './TipodeLicencia/TipodeLicencia'
import Descripcion from './Descripcion/Descripcion'
import CardPrincipal from '../../components/Cards/CardPrincipal/CardPrincipal'
import Usuario from '../../components/Usuario/Usuario'
import {Chip, Divider, Fab, Typography} from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';
import NavigationIcon from '@mui/icons-material/Navigation';

const Licencias = () => {
  return (
    <>
    <article>

      <section className='contenedorUsuario'>
        <div>
          <div><img src="" alt="" /><span>Usuario</span></div>
          <div><span>Balnace actual</span></div>
        </div>
        <div>
          <span>Estado</span>
          <button>Aun no enviado</button>
        </div>
      </section>

      <section className='contenedorDescripcion'>

        <div>
          <div> <span>Licencia</span><select name="" id="">opciones</select></div>
          <div><input type="file" /> <span>Subir Archivo</span></div>
        </div>

        <div>

        </div>

        <div></div>
        <div></div>
        <div></div>

      </section>

    </article>



    <aside>

    </aside>
    </>

  )
   
}

export default Licencias

/* <div className='container'>
      <div className='containercolumna'>
          <div className='usuarioLicencia'>
              <Usuario></Usuario>
              <div>
              <Typography variant="subtitle1">
                ESTADO
              </Typography>
              <Chip label='Aun no enviado'></Chip>
              </div>
          </div>
      ------------------------
          <section className='descripcionLicencia'>
            <div>
              <TipodeLicencia></TipodeLicencia>
              <Descripcion></Descripcion>
            </div>
            <div>
              <SubirArchivo></SubirArchivo>
            </div>
          </section>
        ------------------------
          <div className='autorizacionAdmin'>
              <CardPrincipal/>
              <div>
              <Fab variant="extended" size="medium" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 1 }} icon={<PostAddIcon />} />
                Solicitar aprobacion
              </Fab>
            </div>
          </div>
      </div>
      ------------------------
      <aside className='lista'>
        <CardPrincipal></CardPrincipal>
        <Divider light />
        <CardPrincipal></CardPrincipal>
        <Divider light />
        <CardPrincipal></CardPrincipal>
        <Divider light />
        <CardPrincipal></CardPrincipal>
        <Divider light />
      </aside>
    </div>
  )*/