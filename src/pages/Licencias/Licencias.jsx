import React, { useEffect, useState } from "react";
import "./licencias.css";
import Usuario from "../../components/Usuario/Usuario";
import Estado from "./Estado/Estado";
import SubirArchivo from "./SubirArchivo/SubirArchivo";
import CalendarioLicencia from "./Calendarios/CalendarioLicencia";
import TipodeLicencia from "./TipodeLicencia/TipodeLicencia";
import Descripcion from "./Descripcion/Descripcion";
import UsuarioAdmin from "../../components/Usuario/Usuario Admin/UsuarioAdmin";
import PostAddIcon from "@mui/icons-material/PostAdd";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Fab, Typography } from "@mui/material";
import { getLicencias, postLicencias } from "../../services/licenciaServices";
import { Link } from "react-router-dom";

const Licencias = (rol) => {
  // Esto es para el estado general de la licencia que se envia a BD
  const [licencias, setLicencias] = useState([]);
  // Esto es para obtener toda la data de cada uno de los inputs cuando se modifican
  const [data, setData] = useState({});

  // Para obtener la data de la BD de las licencias ya existentes
  useEffect(() => {
    getLicencias().then((data) => {
      console.log(data);
      setLicencias(data);
    });
  }, []);

  // Esto está momentáneo hasta renderizar al admin que viene con el usuario
  const datos = licencias.map((licencia) => (
    <UsuarioAdmin avatar={licencia.avatar} name={licencia.name} />
  )); // !!

  // Actualiza el estado de la data input por input
  // menos el calendario porque no recibe un evento como parámetro!
  const handleData = (e) => {
    setData((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value, // guardar el nombre del input y su valor
      };
    });
  };
  console.log(data);

  // ENVIO LA DATA DEL FORMULARIO !
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    postLicencias(data);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          maxWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          padding: "50px 0",
          flexWrap: "wrap",
        }}>
        <form
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
          onSubmit={handleSubmit}
          required>
          <section className='contenedorUsuario'>
            <div className='usuarioBalance'>
              <div>
                <Usuario handleData={handleData} />
              </div>
              <div>
                <Typography variant='subtitle1'>BALANCE ACTUAL:</Typography>
              </div>
            </div>
            <div className='estadoLicencia'>
              <Estado />
            </div>
          </section>

          <section className='contenedorDescripcion'>
            <div className='contenedorUno'>
              <div className='licencia'>
                <TipodeLicencia handleData={handleData} />
              </div>
              <div className='archivo' style={{ width: "50%" }}>
                <SubirArchivo handleData={handleData} />
              </div>
            </div>

            <div className='contenedorDos'>
              <CalendarioLicencia setData={setData} data={data} />
            </div>

            <div className='contenedorTres'>
              <Descripcion handleData={handleData} />
            </div>
          </section>

          <section className='contenedorAprobacion'>
            <div className='contenedorCuatro'>
              <div className='administrador'>
                <Typography variant='subtitle1'>
                  APROBACION A CARGO DE:
                </Typography>
                <div>{datos[1]}</div>
              </div>
            </div>

            <div className='contenedorCinco'>
              <div className='botondeAprobacion'>
                <Link onClick={(e) => handleSubmit(e)}>
                  <Fab
                    variant='extended'
                    size='medium'
                    color='success'
                    aria-label='add'>
                    <NavigationIcon sx={{ mr: 1 }} icon={<PostAddIcon />} />
                    Solicitar aprobacion
                  </Fab>
                </Link>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Licencias;

/*<aside className='contenedorLista'>
    <div className='titulo3'> <Typography variant="h6" color={'grey'}> Detalle de vacaciones: </Typography></div>
    <div className='listadeLicencias'>
    {
      (licencias.lenght!==0)?licencias.map((licencia) => <CardUser name={licencia.name} avatar={licencia.avatar} 
      fechaInicio={licencia.fechaInicio} fechaFinal={licencia.fechaFinal} tipodeLicencia={licencia.tipodeLicencia}  />):<p>No hay licencias</p>
    }
    </div>
  </aside>*/
