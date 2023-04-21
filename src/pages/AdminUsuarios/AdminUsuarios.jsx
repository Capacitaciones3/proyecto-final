import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./AdminUsuarios.css";
import { getLicencias } from "../../services/licenciaServices";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UsuarioAdmin from "../../components/UsuarioAdmin/UsuarioAdmin";
import { red } from "@mui/material/colors";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import {
  administrarUsuariosService,
  eliminarUsuariosService,
} from "../../services/administrarUsuariosService";

const AdminUsuarios = () => {
  const navigate = useNavigate();

  const { usuario } = useContext(AutenticacionContext);

  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    administrarUsuariosService().then((data) => {
      console.log(data);
      setUsuarios(data);
    });
  }, []);

  const handleEditarUsuario = () => {
    navigate(`/perfil?id=${usuario.id}`);
  };

  const handleCrearUsuario = () => {
    navigate(`/perfil?usuarioNuevo=true&id=0`);
  };

  const handleEliminarUsuario = () => {
    setUsuarios(eliminarUsuariosService(usuario.id));
  };

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
                  }}
                  onClick={(e) => {
                    handleCrearUsuario(e);
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
                      avatar={usuario.foto}
                      name={usuario.username}
                      icono={
                        <>
                          <Button
                            onClick={() => {
                              handleEliminarUsuario();
                            }}>
                            <DeleteIcon
                              sx={{
                                color: red[900],
                              }}
                            />
                          </Button>
                          <Button
                            onClick={() => {
                              handleEditarUsuario();
                            }}>
                            <EditIcon color='success' />
                          </Button>
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
