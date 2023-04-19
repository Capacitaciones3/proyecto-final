import { Box, Typography, Avatar, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getLicencias } from "../../services/licenciaServices";

// prop que diferencia/ filtrar si es usuario (false) o es usuario admin (true) (rol)

const Usuario = ({ handleData, avatar, name, id, rol }) => {
  const [licencias, setLicencias] = useState([]);
  const [value, setValue] = useState("defecto");

  useEffect(() => {
    getLicencias().then((data) => {
      setLicencias(data);
    });
  }, []);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const datos = licencias.map((licencia) => (
    <MenuItem value={licencia.id}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Avatar
          alt='User'
          sx={{ width: 56, height: 56 }}
          src={licencia.avatar}
        />
        <Typography sx={{ m: 2 }} component='span'>
          {licencia.name}
        </Typography>
      </Box>
    </MenuItem>
  ));

  return (
    <Select
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "300px",
        height: "70px",
      }}
      id='usuario'
      value={value}
      name='usuario'
      onChange={(e) => {
        handleData(e);
        handleValue(e);
      }}>
      <MenuItem
        value={"defecto"}
        sx={{ display: "flex", flexDirection: "row" }}
        disabled>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ m: 2 }} component='span'>
            Seleccionar usuario
          </Typography>
        </Box>
      </MenuItem>
      {datos}
    </Select>
  );
};

export default Usuario;
