import React, { useContext } from 'react'
import { postLogin } from '../../services/loginServices'
import { AutenticacionContext } from '../../contexts/Autenticacion'
import "./Login.css"
import {  useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Boton from "../../components/Boton/Boton"

const Login = () => {

  let user = {email: "", password: ""}
  const {setUsuario} = useContext(AutenticacionContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    user = {...user, [e.target.name]: e.target.value}
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let logIn = await postLogin(user, setUsuario)
    if(logIn === true) {
      console.log("navigate")
      return navigate("/home")
    }
  }

  return (
    <div className='fondo'>
    <section className='login_section'>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div className='login_form'>
      <div className='contenedorLogin'>
        <TextField
          required
          id="usser"
          label="Usuario"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="password"
          label="Ingrese su contraseña"
          type="password"
          autoComplete="current-password"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='btn'>
      <Boton
      mensaje="Iniciar" 
      />
      </div>
      </div>
      </form>
    </section>
    </div>
  )
}

export default Login
