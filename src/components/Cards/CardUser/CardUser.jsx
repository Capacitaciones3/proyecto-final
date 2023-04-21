import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typografy from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { AutenticacionContext } from "../../../contexts/Autenticacion";

const CardUser = ({
  id,
  name,
  avatar,
  tipodeLicencia,
  fechaFinal,
  fechaInicio,
  rol,
  icono,
  handleClick,
}) => {
  const { usuario } = useContext(AutenticacionContext);

  return (
    <Stack
      sx={{
        height: "75px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        border: "0.2px solid #F0F0F0",
        alignItems: "center",
        padding: 2,
        flexGrow: 1,
        cursor: "pointer",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
        }}
      >
        <Avatar
          alt="User"
          src={avatar}
          sx={{ alignSelf: "center", width: "50px", height: "50px" }}
        />
        <Stack>
          <Typografy fontWeight="550" component="span" fontSize={"15px"}>
            {name}
          </Typografy>
          <Typografy
            component="span"
            sx={{ color: "rgba(0,0,0,0.6)" }}
            fontSize={"15px"}
            fontWeight={"500"}
          >
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
            />
            <Typografy component="p" marginLeft={0.7} fontSize={"14px"}>
              {tipodeLicencia}
            </Typografy>
          </Typografy>
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ alignSelf: "self-end" }}>
          <button
            style={{ border: 0, backgroundColor: "#ffffff" }}
            onClick={() => handleClick(id)}
          >
            {icono}
          </button>
        </div>
      </Stack>
    </Stack>
  );
};

export default CardUser;

/**/
