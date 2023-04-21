import React, { useContext, useState } from "react";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { postLogin } from "../../services/loginServices";
import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const { iniciarSesion } = useContext(AutenticacionContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    
    postLogin(user).then((data) => {
      iniciarSesion(data.id, "123fsdf", data.rol);
      navigate("/dashboard");
    });
  };

  const handleChange = (e) => {
    let prop = { [e.target.name]: e.target.value };
    setUser({ ...user, ...prop });
  };

  return (
    <div className="fondo">
      <section className="login_section">
        <div className="login_form">
          <div className="contenedorLogin">
            <TextField
              id="user"
              name="username"
              label="Ingrese su usuario"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="password"
              name="password"
              label="Ingrese su contraseña"
              type="password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="btn">
            <Button
              variant="contained"
              onClick={() => handleSubmit()}
              endIcon={<ArrowForwardIcon />}
            >
              Iniciar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
