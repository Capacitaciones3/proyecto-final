// ESTA ES LA CARTA QUE APARECE DEBAJO DEL DASHBOARD
import React from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import "./LicenciaCard.css";
import DescargarArchivo from "./DescargarArchivo/DescargarArchivo";
import FechaBox from "./FechaBox/FechaBox";
import DenseTable from "./DenseTable/DenseTable";

const LicenciaCard = ({
  userData,
  fullData,
  setLicenciaFull,
  open,
  setOpen,
  handleRespuesta,
}) => {
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

  const handleData = (e) => {
    setLicenciaFull(e.target.value);
  };

  return (
    <section className={open && "contenedor-usuario"}>
      <div className='usuarioBalance'>
        <div className='avatar-contenedor'>
          <Avatar
            alt='User'
            sx={{ width: 56, height: 56 }}
            src={fullData.fotoSolicitante}
          />
          <div>
            <Typography variant='h6' component='span'>
              {fullData.nombreSolicitante}
            </Typography>
            <Typography variant='body2' component='span'>
              {fullData.fechaComienzo} - {fullData.fechaFinalizacion}
            </Typography>
            <Typography
              sx={{ display: "flex", gap: "10px", alignItems: "center" }}
              component='span'
              variant='body2'
              color='text.primary'>
              <div className={`punto color-amarillo`}></div>
              {fullData.tipo}
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
          <p>{fullData.fechaPeticion}</p>
          <DescargarArchivo file={fullData.adjunto} />
        </div>
      </div>
      <div className='contenedorTres'>
        <Typography variant='subtitle1'>DESCRIPCION</Typography>
        <Box noValidate>
          <TextField
            sx={{ width: "90%" }}
            id='descripcionLicencia'
            multiline
            rows={5}
            size='10'
            disabled
            name='descripcionLicencia'>
            {fullData.descripcion}
          </TextField>
        </Box>
      </div>
      <div>
        <h3>Quien estará ausente</h3>
        <DenseTable data={dataFake} />
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
        <Button
          variant='contained'
          color='error'
          onClick={(e) => {
            handleData();
            handleRespuesta();
          }}>
          Rechazar
        </Button>
        <Button
          variant='contained'
          color='success'
          onClick={(e) => {
            handleData();
            handleRespuesta();
          }}>
          Aprobar
        </Button>
      </div>
    </section>
  );
};

export default LicenciaCard;
