import { Typography } from "@mui/material";
import React, { useState } from "react";

const initData = { dia: "Día", mes: "Mes", numDia: "" };

const CardCalendario = () => {
  const [value, setValue] = useState(initData);

  return (
    <div className='imagenCalendario'>
      <div
        className='imgRoja'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant='subtitle2' sx={{ color: "white" }}>
          {value.mes}
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
        <Typography variant='subtitle2'>{value.diaNum}</Typography>
        <Typography variant='subtitle2'>{value.dia}</Typography>
      </div>
    </div>
  );
};

export default CardCalendario;
