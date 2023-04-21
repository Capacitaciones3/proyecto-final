import React, { useContext, useEffect, useState } from "react";
import "./licencias.css";
import Estado from "./Estado/Estado";
import SubirArchivo from "./SubirArchivo/SubirArchivo";
import CalendarioLicencia from "./Calendarios/CalendarioLicencia";
import TipodeLicencia from "./TipodeLicencia/TipodeLicencia";
import Descripcion from "./Descripcion/Descripcion";
import UsuarioAdmin from "../../components/UsuarioAdmin/UsuarioAdmin";
import PostAddIcon from "@mui/icons-material/PostAdd";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Fab, Typography } from "@mui/material";
import { getLicencias, getUsuariosSupervisor, postLicencias } from "../../services/licenciaServices";
import { Link, useNavigate } from "react-router-dom";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import SelectUsuario from "./SelectUsuarios/SelectUsuario";

const Licencias = () => {
  const mock = {

  }

  const { usuario } = useContext(AutenticacionContext);
  // Esto es para el estado general de la licencia que se envia a BD
  const [licencias, setLicencias] = useState([]);
  // Esto es para obtener toda la data de cada uno de los inputs cuando se modifican
  const [data, setData] = useState({});
  const [usuarios, setUsuarios] = useState(null)
  const navigate = useNavigate();
  // Para obtener la data de la BD de las licencias ya existentes
  useEffect(() => {
    getUsuariosSupervisor(usuario.id).then((data) => {
      console.log(data);
      setUsuarios(data);
    });
  }, []);

  // Actualiza el estado de la data input por input
  // menos el calendario porque no recibe un evento como parámetro!
  const handleData = (e) => {
    if (e.target.name == 'adjunto') {
      setData((old) => {
        return {
          ...old,
          [e.target.name]: 'filename',
        };
      });
    } else {
      setData((old) => {
        return {
          ...old,
          [e.target.name]: e.target.value,
        };
      });
    }

  };

  console.log(data)

  // ENVIO LA DATA DEL FORMULARIO !
  const handleSubmit = () => {
    postLicencias({ ...data, supervisorId: usuario.id }).then(() => {
      navigate('/dashboard')
    }).catch((err) => alert(err))
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
        }}
      >
        <form
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
          onSubmit={handleSubmit}
          required
        >
          <section className="contenedorUsuario">
            <div className="usuarioBalance">
              <div>
                <SelectUsuario handleData={handleData} rol={"usuarios"} setUsuarios={setUsuarios} usuarios={usuarios} />
              </div>
              <div>
                <Typography variant="subtitle1">BALANCE ACTUAL:</Typography>
              </div>
            </div>
            <div className="estadoLicencia">
              <Estado />
            </div>
          </section>

          <section className="contenedorDescripcion">
            <div className="contenedorUno">
              <div className="licencia">
                <TipodeLicencia handleData={handleData} />
              </div>
              <div className="archivo" style={{ width: "50%" }}>
                <SubirArchivo handleData={handleData} />
              </div>
            </div>

            <div className="contenedorDos">
              <CalendarioLicencia setData={setData} data={data} />
            </div>

            <div className="contenedorTres">
              <Descripcion handleData={handleData} />
            </div>
          </section>

          <section className="contenedorAprobacion">
            <div className="contenedorCuatro">
              <div className="administrador">
                <Typography variant="subtitle1">
                  APROBACION A CARGO DE:
                </Typography>
                <div>{usuario.id}</div>
              </div>
            </div>

            <div className="contenedorCinco">
              <div className="botondeAprobacion">
                <div onClick={() => { handleSubmit() }} >
                  <Fab
                    variant="extended"
                    size="medium"
                    color="success"
                    aria-label="add"
                  >
                    <NavigationIcon sx={{ mr: 1 }} icon={<PostAddIcon />} />
                    Solicitar aprobacion
                  </Fab>
                </div>
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
