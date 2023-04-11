import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typografy from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { AutenticacionContext } from '../../../contexts/Autenticacion';

const CardUser = ({
  id,
  name,
  avatar,
  tipoLicencia,
  fechaFinal,
  fechaInicio,
}) => {

  const {usuario} = useContext(AutenticacionContext);

  // AGREGAR FUNCIONALIDAD A LOS BOTONES Y ROL SEGUN ADMIN O USUARIO

  return (
    <Stack
      sx={{
        maxWidth: "100%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "#ffffff",
        border: "0.2px solid #F0F0F0",
        alignItems: "center",
        padding: 2,
        flexGrow: 1,
        cursor: "pointer",
      }}>
      <Stack sx={{  display: 'flex', flexDirection: "row", justifyContent: 'space-between'}}>
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
      </Stack>

      {usuario.rol.administrador && 
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'flex-end'
        }}
      >
        <div style={{alignSelf:'self-end'}}>
          
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
        </div>
      </Stack>
      }
    </Stack>
  );
};

export default CardUser;
