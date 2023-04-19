import { Chip, Typography } from "@mui/material";
import React from "react";

const Estado = () => {
  const color = {
    Vacaciones: "verde",
    Estudio: "amarillo",
    "Licencia medica": "azul",
  };

  return (
    <>
      <Typography variant='subtitle1'>ESTADO</Typography>
      <Chip label='Aun no enviado'></Chip>
    </>
  );
};

export default Estado;
