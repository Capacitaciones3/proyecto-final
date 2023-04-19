import React, { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "../licencias.css";
import { Typography } from "@mui/material";
import CardCalendario from "./CardCalendario";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import es from "date-fns/locale/es";
registerLocale("es", es);

// pasar a la carpeta de constantes
const initData = { diasLabo: "Días laborales", diasDispo: "Días disponibles" };

const CalendarioLicencia = ({ setData, data }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const isWeekday = (date) => {
    const day = dayjs(date).day();
    return day !== 0 && day !== 6;
  };

  const handleFecha = (date, name) => {
    setData(() => ({ ...data, [name]: date }));
    console.log(date, name);
  };

  const [dias, setDias] = useState(initData);

  return (
    <>
      <div className='contenedorCalendario'>
        <div className='imagenesCalendario'>
          <div>
            <ReactDatePicker
              onChange={(date) => {
                setStartDate(date);
                handleFecha(date, "startDate");
              }}
              selected={startDate}
              state={startDate}
              setter={setStartDate}
              filterDate={isWeekday}
              minDate={new Date()}
              withPortal
              locale='es'
              customInput={
                <CardCalendario state={startDate} />
              }></ReactDatePicker>
          </div>
          <div>
            <ReactDatePicker
              onChange={(date) => {
                setEndDate(date);
                handleFecha(date, "endDate");
              }}
              selected={endDate}
              state={endDate}
              setter={setEndDate}
              minDate={startDate}
              filterDate={(date) => isWeekday(date)}
              withPortal
              locale='es'
              customInput={
                <CardCalendario state={endDate} />
              }></ReactDatePicker>
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
