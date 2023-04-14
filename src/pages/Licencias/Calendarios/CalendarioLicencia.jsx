import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "../licencias.css";
import { Typography } from "@mui/material";
import CardCalendario from "./CardCalendario";

// pasar a la carpeta de constantes
const initData = { diasLabo: "Días laborales", diasDispo: "Días disponibles" };

const CalendarioLicencia = ({ setData, data }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [value, setValue] = useState(new Date());

  const [dias, setDias] = useState(initData);

  // ME SETEA LA DATA DE LICENCIAS y agrega la fecha de inicio y la fecha de fin
  const handleFecha = (date, name) => {
    setData({ ...data, [name]: date });
  };

  const handleDate = (newValue, name) => {
    console.log(newValue);
    const dia = newValue.$d.toString().split(" ")[0];
    const mes = newValue.$d.toString().split(" ")[1];
    const diaNum = newValue.$D;
    setValue({ dia: dia, mes: mes, diaNum: diaNum });
    console.log(dia, mes, diaNum);
    handleFecha({ dia: dia, mes: mes, diaNum: diaNum }, name);
  };

  return (
    <>
      <div className='contenedorCalendario'>
        <div className='imagenesCalendario'>
          <div>
            <ReactDatePicker
              value={value}
              onChange={(date) => handleDate(date)}
              withPortal></ReactDatePicker>
          </div>
          <div>
            <ReactDatePicker
              value={value}
              onChange={(date) => handleDate(date)}
              withPortal></ReactDatePicker>
          </div>
        </div>
        <div className='fecha'>
          <div className='diasLaborales'>
            <Typography variant='subtitle2' sx={{ color: "green" }}>
              {dias.diasLabo}
            </Typography>
          </div>
          <div className='diasDispo'>
            <Typography variant='subtitle2'>{dias.diasDispo}</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarioLicencia;
