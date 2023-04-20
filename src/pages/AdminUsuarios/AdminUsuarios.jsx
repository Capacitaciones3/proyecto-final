import { Button, Typography } from "@mui/material";
import React, { Children, useEffect, useState } from "react";
import "./AdminUsuarios.css";
import { getLicencias } from "../../services/licenciaServices";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UsuarioAdmin from "../../components/Usuario/Usuario Admin/UsuarioAdmin";
import Usuario from "../Licencias/SelectUsuarios/SelectUsuario";

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    getLicencias().then((data) => {
      console.log(data);
      setUsuarios(data);
    });
  }, []);

  return (
    <div className='containerAdminUsers'>
      <div className='containerDataAdminUsers'>
        <div className='containerTitle'>
          <div>
            <Typography variant='h4' color='error.light' m={3}>
              Usuarios habilitados
            </Typography>
          </div>
          <div style={{ display: "flex", alignSelf: "center" }}>
            <Button
              variant='contained'
              color='success'
              sx={{
                "&:hover": {
                  backgroundColor: "green",
                },
              }}>
              Crear usuario
            </Button>
          </div>
        </div>
        <div className='containerUsers'>
          <div>
            {usuarios ? (
              usuarios.map((usuario, index) => (
                <UsuarioAdmin
                  key={`usuarios-${index}`}
                  avatar={usuario.avatar}
                  name={usuario.name}
                  icono={
                    <>
                      <DeleteIcon fontSize='5px'></DeleteIcon>
                      <EditIcon fontSize='5px'></EditIcon>
                    </>
                  }
                />
              ))
            ) : (
              <p>No hay usuarios</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsuarios;
