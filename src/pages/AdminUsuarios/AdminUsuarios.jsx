import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./AdminUsuarios.css";
import { getLicencias } from "../../services/licenciaServices";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UsuarioAdmin from "../../components/UsuarioAdmin/UsuarioAdmin";
import { red } from "@mui/material/colors";
import Loading from "../../components/Loading/Loading";

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    getLicencias().then((data) => {
      console.log(data);
      setUsuarios(data);
    });
  }, []);

  return (
    <>
      {!usuarios ? (
        <Loading />
      ) : (
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
                          <DeleteIcon
                            sx={{
                              color: red[900],
                            }}></DeleteIcon>
                          <EditIcon color='success'></EditIcon>
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
      )}
    </>
  );
};

export default AdminUsuarios;
