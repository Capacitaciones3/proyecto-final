import React, { useContext, useEffect, useState } from "react";
import CardUser from "../../components/Cards/CardUser/CardUser";
import CardApi from "./CardApi.jsx/CardApi";
import { Typography } from "@mui/material";
import Busqueda from "./Busqueda/Busqueda";
import "./dashboard.css";
import LicenciaCard from "../../components/LicenciaCard/LicenciaCard";
import { actualizarDatosLicencias, getLicenciaFull, getLicenciasAprobadas, getLicenciasPendientes } from "../../services/licenciaServices";
import { getApiClima } from "../../services/dashboardServices";
import Loading from "../../components/Loading/Loading";
import UsuarioAdmin from "../../components/UsuarioAdmin/UsuarioAdmin";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Dashboard = () => {

  const [licenciasPendientes, setLicenciasPendientes] = useState(null);
  const [licenciasAprobadas, setLicenciasAprobadas] = useState(null);
  const [licenciaFull, setLicenciaFull] = useState(null);
  const [clima, setClima] = useState(false);
  const [open, setOpen] = useState(false)

  const { usuario } = useContext(AutenticacionContext);
  const initFullData = {
    "id": null,
    "tipo": "",
    "estado": "",
    "adjunto": "",
    "fechaPeticion": "",
    "fechaComienzo": "",
    "fechaFinalizacion": "",
    "descripcion": "",
    "nombreSolicitante": "",
    "fotoSolicitante": "",
    "nombreSupervisor": "",
    "fotoSupervisor": null
  }

  useEffect(() => {
    getApiClima().then((datos) => {

      setClima(datos);
    });
  }, []);

  useEffect(() => {

    getLicenciasPendientes(usuario.id).then((data) => {
      setLicenciasPendientes(data);
    });

    getLicenciasAprobadas(usuario.id)
      .then(data => {
        setLicenciasAprobadas(data)
      })
    setLicenciaFull({ ...initFullData })

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const traerFullLicencia = (id) => {
    getLicenciaFull(id)
      .then(data => {
        setLicenciaFull(data)
        console.log(licenciaFull)
        setOpen(true);
        console.log(open)
      })
  }

  const handleRespuesta = () => {

    actualizarDatosLicencias(licenciaFull.id, licenciaFull.estado).then(res => {
      toast.info(res, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

    }
    )
  }

  return (
    <>
      {!licenciasPendientes ? (
        <Loading />
      ) : (
        <>
          <div className='contenedor-dashboard'>
            <form className='buscador-dashboard' onSubmit={handleSubmit}>
              <div className='opciondeBusqueda'>
                <Busqueda />
              </div>
            </form>
            <article
              style={{
                width: "100%",
                display: "flex",
                gap: "15px",
                padding: "0px 30px 0px 30px",
              }}>
              <section className='contenedorAPIs'>
                <div>
                  <CardApi data={clima} />
                </div>
                <div></div>
              </section>
              <section className='cardLicenciasPorAprobar2'>
                <div className='titulo2'>
                  <Typography
                    variant='p'
                    sx={{ fontWeight: "500" }}
                    color={"grey"}>
                    Solicitudes pendientes:
                  </Typography>
                </div>
                <div className='licencias'>
                  {licenciasPendientes.lenght !== 0 ? (
                    licenciasPendientes.map((licencia) => (
                      <CardUser
                        name={licencia.nombreSolicitante}
                        avatar={licencia.fotoSolicitante}
                        fechaInicio={licencia.fechaComienzo}
                        fechaFinal={licencia.fechaFinalizacion}
                        tipodeLicencia={licencia.tipo}
                        id={licencia.id}
                        handleClick={traerFullLicencia}
                        icono={
                          <>
                            <CheckIcon
                              sx={{
                                backgroundColor: "#86FF73",
                                color: "#ffffff",
                                borderRadius: "15px",
                                marginRight: "10px",
                                width: "20px",
                                height: "20px",
                              }}
                            // onClick={() => traerFullLicencia(licencia.id)}
                            />
                            <ClearIcon
                              sx={{
                                backgroundColor: "#FF8B8B",
                                color: "#ffffff",
                                borderRadius: "15px",
                                width: "20px",
                                height: "20px",
                              }}
                            // onClick={() => traerFullLicencia(licencia.id)}
                            >

                            </ClearIcon>
                          </>
                        }
                      />
                    ))
                  ) : (
                    <p>No hay licencias</p>
                  )}
                </div>
              </section>
              <section className='cardLicenciasProximas2'>
                <div className='titulo2'>
                  <Typography
                    variant='p'
                    sx={{ fontWeight: "500" }}
                    color={"grey"}>
                    Proximas licencias aprobadas:
                  </Typography>
                </div>
                <div className='licencias'>
                  {licenciasAprobadas.lenght !== 0 ? (
                    licenciasAprobadas.map((licencia) => (
                      <CardUser
                        name={licencia.nombreSolicitante}
                        avatar={licencia.fotoSolicitante}
                        fechaInicio={licencia.fechaComienzo}
                        fechaFinal={licencia.fechaFinalizacion}
                        tipodeLicencia={licencia.tipo}
                      />
                    ))
                  ) : (
                    <p>No hay licencias</p>
                  )}
                </div>
              </section>
              {usuario.rol === "usuario" && (
                <section
                  className='cardLicenciasProximas2'
                  style={{ maxWidth: "230px", height: "200px" }}>
                  <div className='titulo2'>
                    <Typography
                      variant='p'
                      sx={{ fontWeight: "500" }}
                      color={"grey"}>
                      ¿Quién estará ausente?
                    </Typography>
                  </div>
                  <div className='licencias'>
                    {licenciasPendientes.map((licencia) => (
                      <UsuarioAdmin
                        avatar={licencia.avatar}
                        name={licencia.name}
                      />
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
          <div className='licencia-card-container' style={{ display: "none" }}>
            {open && <h1>Hola mundo</h1>}
            <LicenciaCard fullData={licenciaFull} setLicenciaFull={setLicenciaFull} handleRespuesta={handleRespuesta} open={open} setOpen={setOpen} />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
