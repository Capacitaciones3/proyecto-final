import React from "react";
import { Typography } from "@mui/material";

const FechaBox = ({ fecha }) => {
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
          {fecha[1]}
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
        <Typography variant='subtitle2'>{fecha[2]}</Typography>
      </div>
    </div>
  );
};

export default FechaBox;
