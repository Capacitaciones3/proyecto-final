import { Button, Typography } from "@mui/material";
import React from "react";
import "./AdminUsuarios.css";
import CardAdmUsers from "../../components/Cards/CardAdmUsers/CardAdmUsers";
import { Link } from "react-router-dom";

const AdminUsuarios = () => {
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
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsuarios;
