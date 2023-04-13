import React, {useEffect, useState } from 'react'
import "./licencias.css"
import SubirArchivo from './SubirArchivo/SubirArchivo'
import TipodeLicencia from './TipodeLicencia/TipodeLicencia'
import Descripcion from './Descripcion/Descripcion'
import Usuario from '../../components/Usuario/Usuario'
import UsuarioAdmin from "../../components/Usuario/Usuario Admin/UsuarioAdmin"
import {Fab, Typography} from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';
import NavigationIcon from '@mui/icons-material/Navigation';
import {getLicencias } from '../../services/licenciaServices'
import CalendarioLicencia from './Calendario/CalendarioLicencia'
import Estado from './Estado/Estado'
import { Link } from "react-router-dom";


const Licencias = (rol) => {
 
  const [licencias, setLicencias] = useState([]);
  useEffect(() => {
  getLicencias().then((data) => {console.log(data); setLicencias(data)})
  }, [])

  const datos = licencias.map((licencia) => <UsuarioAdmin avatar={licencia.avatar} name={licencia.name}/> )


  const [data, setData] = useState({});
  const handleData = (e) => {
    setData((old)=>{
      return ({
        ...old, [e.target.name]:e.target.value
      })
    })
  }
  console.log(data)

  // Crear logica dentro de la funcion para guardar el nombre y valor de los campos del componente



  // Crear la funcion onSubmit para enviar la info del formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  }

  return (
    <>
    <div style={{width:'100vw', maxWidth:'100%', minHeight: '100vh', display:'flex', gap:'25px', justifyContent:'center', padding:'50px 0', flexWrap:'wrap'}}>

    <form style={{width:'70%', display:'flex', flexDirection:'column'}} onSubmit={handleSubmit} required>

      <section className='contenedorUsuario'>
        <div className='usuarioBalance'>
          <div><Usuario handleData={handleData} /></div>
          <div><Typography variant="subtitle1">BALANCE ACTUAL:</Typography></div>
        </div>
        <div className='estadoLicencia'>
          <Estado/>
        </div>
      </section>

      <section className='contenedorDescripcion'>

        <div className='contenedorUno'>
          <div className='licencia'> 
            <TipodeLicencia handleData={handleData}/>
          </div>
          <div className='archivo' style={{width:'50%'}}>
            <SubirArchivo handleData={handleData}/>
          </div>
        </div>

        <div className='contenedorDos'>
          <CalendarioLicencia setData={setData} data={data}/>
        </div>

        <div className='contenedorTres'>
          <Descripcion handleData={handleData}/>
        </div>
      </section>

        <section className='contenedorAprobacion'>

        <div className='contenedorCuatro'>
          <div className='administrador'>
            <Typography variant="subtitle1"> APROBACION A CARGO DE: </Typography>
            <div>
             {datos[1]}
            </div>
          </div>
        </div>

        <div className='contenedorCinco'>
          <div className='botondeAprobacion'>
          <Link to="/dashboard">
            <Fab variant="extended" size="medium" color='success' aria-label="add">
              <NavigationIcon sx={{ mr: 1 }} icon={<PostAddIcon />} handleData={handleData}/> Solicitar aprobacion
            </Fab>
            </Link>
          </div>
        </div>
      </section>
    </form>
    </div>
    </>
  )
}

export default Licencias;

/*<aside className='contenedorLista'>
    <div className='titulo3'> <Typography variant="h6" color={'grey'}> Detalle de vacaciones: </Typography></div>
    <div className='listadeLicencias'>
    {
      (licencias.lenght!==0)?licencias.map((licencia) => <CardUser name={licencia.name} avatar={licencia.avatar} fechaInicio={licencia.fechaInicio} fechaFinal={licencia.fechaFinal} tipodeLicencia={licencia.tipodeLicencia}  />):<p>No hay licencias</p>
    }
    </div>
  </aside>*/
