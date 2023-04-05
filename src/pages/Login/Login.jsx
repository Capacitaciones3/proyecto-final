import React, { useContext } from 'react'
import { AutenticacionContext } from '../../contexts/Autenticacion'
import "./Login.css"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {

  let user = {email: "", password: ""}

  const {iniciarSesion} = useContext(AutenticacionContext);

  const handleChange = (e) => {
    user = {...user, [e.target.name]: e.target.value}
    console.log(user)
  }


  return (
    <div className='fondo'>
    <section className='login_section'>
      <div className='login_form'>
      <div className='contenedorLogin'>
      <TextField
          id="usser"
          label="Ingrese su usuario"
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
        <Button variant='contained' onClick={() => iniciarSesion()} endIcon={<ArrowForwardIcon/>}>Iniciar</Button>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Login
