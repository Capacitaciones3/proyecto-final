// ESTA ES LA CARTA QUE APARECE DEBAJO DEL DASHBOARD
import React from "react";
import Usuario from "../Usuario/Usuario";
import { Avatar, Button, Typography } from "@mui/material";
import "./LicenciaCard.css";
import Descripcion from "../../pages/Licencias/Descripcion/Descripcion";
import DescargarArchivo from "./DescargarArchivo/DescargarArchivo";
import FechaBox from "./FechaBox/FechaBox";
import DenseTable from "./DenseTable/DenseTable";

const LicenciaCard = ({ userData }) => {
  const color = {
    Vacaciones: "verde",
    Estudio: "amarillo",
    "Licencia medica": "azul",
  };

  const dataFake = [
    {
      name: "juan",
      startDate: "23234",
      dias: "30px",
      endDate: "23344",
      estado: "aprobado",
    },
    {
      name: "juan",
      dias: "30px",
      startDate: "23234",
      endDate: "23344",
      estado: "aprobado",
    },
  ];

  const handleData = () => {
    //
  };

  return (
    <section className='contenedor-usuario'>
      <div className='usuarioBalance'>
        <div className='avatar-contenedor'>
          <Avatar
            alt='User'
            sx={{ width: 56, height: 56 }}
            src='/static/images/avatar/1.jpg'
          />
          <div>
            <Typography variant='h6' component='span'>
              JenniferAdmin
            </Typography>
            <Typography variant='body2' component='span'>
              2023-11-02 - 2023-11-10
            </Typography>
            <Typography
              sx={{ display: "flex", gap: "10px", alignItems: "center" }}
              component='span'
              variant='body2'
              color='text.primary'>
              <div className={`punto color-amarillo`}></div>Vacaciones
            </Typography>
          </div>
        </div>
      </div>
      <div className='estado-licencia'>
        <div className='fecha-info'>
          <div className='fechasBox-container'>
            <FechaBox />
            <FechaBox />
          </div>
          <div className='fecha'>
            <div className='diasLaborales'></div>
          </div>
        </div>
        <div>
          {/* fecha solicitada cuando se hizo el ticket */}
          <h3>FECHA SOLICITADA</h3>
          <p>30-08-2023</p>
          <DescargarArchivo file='dfffgf.txt' />
        </div>
      </div>
      <div className='contenedorTres'>
        <Descripcion handleData={handleData} />
      </div>
      <div>
        <h3>Quien estara ausentes</h3>
        <DenseTable data={dataFake} />
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
        <Button variant='contained' color='error'>
          Rechazar
        </Button>
        <Button variant='contained' color='success'>
          Aprobar
        </Button>
      </div>
    </section>
  );
};

export default LicenciaCard;
