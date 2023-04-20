import React, { useContext, useEffect, useState } from "react";
import CardUser from "../../components/Cards/CardUser/CardUser";
import CardApi from "./CardApi.jsx/CardApi";
import { Typography } from "@mui/material";
import Busqueda from "./Busqueda/Busqueda";
import "./dashboard.css";
import LicenciaCard from "../../components/LicenciaCard/LicenciaCard";
import { getLicencias } from "../../services/licenciaServices";
import { getApiClima } from "../../services/dashboardServices";
import Loading from "../../components/Loading/Loading";
import UsuarioAdmin from "../../components/UsuarioAdmin/UsuarioAdmin";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const Dashboard = () => {
  const { usuario } = useContext(AutenticacionContext);
  const [data, setData] = useState({});
  const [licencias, setLicencias] = useState(null);
  const [clima, setClima] = useState(false);

  useEffect(() => {
    getApiClima().then((datos) => {
      console.log(datos);
      setClima(datos);
    });
  }, []);

  useEffect(() => {
    getLicencias().then((data) => {
      console.log(data);
      setLicencias(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      {!licencias ? (
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
                  {licencias.lenght !== 0 ? (
                    licencias.map((licencia) => (
                      <CardUser
                        name={licencia.name}
                        avatar={licencia.avatar}
                        fechaInicio={licencia.fechaInicio}
                        fechaFinal={licencia.fechaFinal}
                        tipodeLicencia={licencia.tipodeLicencia}
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
                            />
                            <ClearIcon
                              sx={{
                                backgroundColor: "#FF8B8B",
                                color: "#ffffff",
                                borderRadius: "15px",
                                width: "20px",
                                height: "20px",
                              }}></ClearIcon>
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
                  {licencias.lenght !== 0 ? (
                    licencias.map((licencia) => (
                      <CardUser
                        name={licencia.name}
                        avatar={licencia.avatar}
                        fechaInicio={licencia.fechaInicio}
                        fechaFinal={licencia.fechaFinal}
                        tipodeLicencia={licencia.tipodeLicencia}
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
                    {licencias.map((licencia) => (
                      <UsuarioAdmin
                        avatar={licencia.avatar}
                        name={licencia.name}
                      />
                    ))}{" "}
                  </div>
                </section>
              )}
            </article>
          </div>
          <div className='licencia-card-container' style={{ display: "none" }}>
            <LicenciaCard />
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
