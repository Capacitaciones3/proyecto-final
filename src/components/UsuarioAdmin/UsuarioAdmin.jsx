import { Box, Typography, Avatar } from "@mui/material";
import React from "react";

const UsuarioAdmin = ({ name, avatar, icono }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Avatar alt='User' sx={{ width: 56, height: 56 }} src={avatar} />
        <Typography sx={{ m: 2 }} component='span'>
          {name}
        </Typography>
      </div>

      <div>{icono}</div>
    </Box>
  );
};

export default UsuarioAdmin;
