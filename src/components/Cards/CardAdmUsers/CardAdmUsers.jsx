import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const CardAdmUsers = ({ id, avatar, nombre, rol }) => {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
          borderBottom: "0.5px solid #79797963",
          width: "100%",
          height: "50px",
        }}
      >
        <Avatar sx={{ width: 36, height: 36 }} alt={nombre} src={avatar} />
        <Typography sx={{ color: "#797979" }} variant="span">
          {nombre}
        </Typography>
        <Typography sx={{ color: "#797979" }} variant="span">
          {rol}
        </Typography>
        <div>
          <Link to="/perfil" style={{ color: "#BEB068", fontSize: "12px" }}>
            <EditIcon fontSize="5px"></EditIcon>
          </Link>
          <button
            type="submit"
            style={{
              color: "#FF7C7C",
              border: 0,
              backgroundColor: "#ffffff",
              cursor: "pointer",
            }}
          >
            <DeleteIcon fontSize="5px"></DeleteIcon>
          </button>
        </div>
      </Stack>
    </>
  );
};

export default CardAdmUsers;
