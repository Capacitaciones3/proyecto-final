import { Box, Typography, Avatar, Select, MenuItem } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getLicencias, getUsuariosSupervisor } from "../../../services/licenciaServices";
import { AutenticacionContext } from "../../../contexts/Autenticacion";

const SelectUsuario = ({ handleData, rol, setUsuarios, usuarios }) => {
  const { usuario } = useContext(AutenticacionContext);
  const [value, setValue] = useState("defecto");


  useEffect(() => {
    getUsuariosSupervisor().then((data) => {
      setUsuarios(data);
    });
  }, []);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const datos = usuarios && usuarios.map((usuario) => (
    <MenuItem value={usuario.id}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Avatar
          alt='User'
          sx={{ width: 56, height: 56 }}
          src={usuario.foto}
        />
        <Typography sx={{ m: 2 }} component='span'>
          {usuario.username}
        </Typography>
      </Box>
    </MenuItem>
  ));

  return (
    <>
      {
        (rol = "usuarios" && (
          <Select
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "300px",
              height: "70px",
            }}
            id='usuario'
            value={value}
            name='solicitanteId'
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
        ))
      }
    </>
  );
};

export default SelectUsuario;
