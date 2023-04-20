import React from "react";
import { Typography } from "@mui/material";

const FechaBox = () => {
  return (
    <div className='imagenCalendario' style={{ minWidth: "100px" }}>
      <div
        className='imgRoja'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant='subtitle2' sx={{ color: "white" }}>
          Mes
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
        <Typography variant='subtitle2'>Num</Typography>
        <Typography variant='subtitle2'>Día</Typography>
      </div>
    </div>
  );
};

export default FechaBox;
