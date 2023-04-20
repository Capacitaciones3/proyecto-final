import { Box, Typography, Avatar } from "@mui/material";
import React from "react";

// prop que diferencia/ filtrar si es usuario (false) o es usuario admin (true) (rol)

const UsuarioAdmin = ({ name, avatar, icono }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", p: "10px" }}>
      <Avatar alt='User' sx={{ width: 56, height: 56 }} src={avatar} />
      <Typography sx={{ m: 2 }} component='span'>
        {name}
      </Typography>
      {icono}
    </Box>
  );
};

export default UsuarioAdmin;
