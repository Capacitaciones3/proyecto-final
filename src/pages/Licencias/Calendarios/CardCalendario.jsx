import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
// import es from "date-fns/locale/es";

const initData = { dia: "Día", mes: "Mes", numDia: "" };

const CardCalendario = ({ state, onClick }) => {
  const dias = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
  };

  const meses = {
    0: "Enero",
    1: "Febrero",
    2: "Marzo",
    3: "Abril",
    4: "Mayo",
    5: "Junio",
    6: "Julio",
    7: "Agosto",
    8: "Septiembre",
    9: "Octubre",
    10: "Noviembre",
    11: "Diciembre",
  };

  return (
    <Box
      className='imagenCalendario'
      onClick={onClick}
      sx={{ minWidth: "100px", maxWidth: "100px" }}>
      <div
        className='imgRoja'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant='subtitle2' sx={{ color: "white" }}>
          {state ? meses[dayjs(state).month()] : ""}
        </Typography>
      </div>
      <div
        className='imgBlanca'
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography variant='subtitle2'>
          {state ? dayjs(state).date() : ""}
        </Typography>
        <Typography variant='subtitle2'>
          {state ? dias[dayjs(state).day()] : ""}
        </Typography>
      </div>
    </Box>
  );
};

export default CardCalendario;

/* const [value, setValue] = useState(new Date());
    const handleDate = (newValue, name) => {
    const dia = 
    const mes = 
    const diaNum = 
    setValue({ dia: dia, mes: mes, diaNum: diaNum });
    console.log(dia, mes, diaNum);
    handleFecha({ dia: dia, mes: mes, diaNum: diaNum }, name); */
