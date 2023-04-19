import React, { useEffect, useState } from "react";
import CardUser from "../../components/Cards/CardUser/CardUser";
import CardApi from "./CardApi.jsx/CardApi";
import { Typography } from "@mui/material";
import Busqueda from "./Busqueda/Busqueda";
import "./dashboard.css";
import LicenciaCard from "../../components/LicenciaCard/LicenciaCard";
import { getLicencias } from "../../services/licenciaServices";
import { getApiClima } from "../../services/dashboardServices";
import Loading from "../../components/Loading/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
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
                gap: "30px",
                padding: "0px 100px 0px 40px",
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
