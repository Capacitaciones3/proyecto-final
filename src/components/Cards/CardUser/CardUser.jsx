import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typografy from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const CardUser = ({
  id,
  name,
  avatar,
  tipoLicencia,
  fechaFinal,
  fechaInicio,
}) => {
  return (
    <Stack
      sx={{
        maxWidth: "368px",
        height: "80px",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        border: "0.2px solid #F0F0F0",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 2,
        flexGrow: 1,
        cursor: "pointer",
      }}
    >
      <Avatar alt="User" src={avatar} sx={{ marginRight: "1rem" }} />
      <Stack sx={{ marginRight: "5rem" }}>
        <Typografy fontWeight="700" component="span">
          {name}
        </Typografy>
        <Typografy component="span" sx={{ color: "rgba(0,0,0,0.6)" }}>
          {fechaInicio} - {fechaFinal}
        </Typografy>
        <Typografy display="flex" alignItems="center">
          <Typografy
            component="span"
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: "#5BFF62",
              borderRadius: "5px",
            }}
          ></Typografy>
          <Typografy component="p" marginLeft={0.7}>
            {tipoLicencia}
          </Typografy>
        </Typografy>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button style={{ border: 0, backgroundColor: "#ffffff" }}>
          <CheckIcon
            sx={{
              backgroundColor: "#86FF73",
              color: "#ffffff",
              borderRadius: "15px",
              marginRight: "10px",
            }}
          ></CheckIcon>
        </button>

        <button style={{ border: 0, backgroundColor: "#ffffff" }}>
          <ClearIcon
            sx={{
              backgroundColor: "#FF8B8B",
              color: "#ffffff",
              borderRadius: "15px",
            }}
          ></ClearIcon>
        </button>
      </Stack>
    </Stack>
  );
};

export default CardUser;
