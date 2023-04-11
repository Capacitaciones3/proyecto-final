import { Button, Typography } from "@mui/material";
import React from "react";
import "./AdminUsuarios.css";
import CardAdmUsers from "../../components/Cards/CardAdmUsers/CardAdmUsers";
import { Link } from "react-router-dom";

const AdminUsuarios = () => {
  return (
    <div
      style={{
        display: "flex",
        border: "0.5px solid #E4E4E4",
        flexDirection: "column",
        width: "1060px",
        height: "758px",
        margin: "3rem",
        position: "relative",
      }}
    >
      <Typography variant="h4" color="error.light" m={5}>
        Usuarios habilitados
      </Typography>

      <div className="containerUsers">
        <CardAdmUsers id="1" avatar="" nombre="Keanu Reves" rol="Supervisor" />
        <CardAdmUsers id="2" avatar="" nombre="Tom Holland" rol="Usuario" />
        <CardAdmUsers id="3" avatar="" nombre="Maria Becerra" rol="Usuario" />
        <CardAdmUsers id="4" avatar="" nombre="Ricky Martin" rol="Usuario" />
      </div>
      
      <Link to="/crearUsuario">
        <Button
          sx={{
            position: "absolute",
            width: "174px",
            height: "28px",
            left: "873px",
            top: "32px",
            background: "#63ECB2",
            border: "0.5px solid #797979",
            boxShadow: " 0px 2px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
            color: "#ffffff",
            fontWeight: "600",
            fontSize: "11px",
            "&:hover": {
              backgroundColor: "#63ECB2",
            },
          }}
        >
          Crear Usuario
        </Button>
      </Link>
    </div>
  );
};

export default AdminUsuarios;
