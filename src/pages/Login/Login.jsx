import React, { useContext } from 'react'
import { postLogin } from '../../services/loginServices'
import { AutenticacionContext } from '../../contexts/Autenticacion'
import "./Login.css"
import {  useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
      return navigate("/grupos")
    }
  }

  return (
    <section className='login_section'>
      <form onSubmit={(e) => handleSubmit(e)} className="login_form">
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="usser"
          label="Usuario"
          defaultValue="Ingrese su usuario"
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
      </Box>
      </form>
    </section>
  )
}

export default Login
