import React, { useContext, useState } from 'react'
import { AutenticacionContext } from '../../contexts/Autenticacion'
import "./Login.css"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { postLogin } from "../../services/loginServices"

const Login = () => {

  // const [user, setUser] = useState({ username: "", password: "" })

  const { iniciarSesion } = useContext(AutenticacionContext);

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    return response.json();
  }

  const handleSubmit = () => {
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    postLogin({ username: username, password: password })
      .then(data => console.log(data))



  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    // setUser({ [e.target.name]: e.target.value, ...user })
    // console.log(user)

  }

  return (
    <div className='fondo'>
      <section className='login_section'>
        <div className='login_form'>
          <div className='contenedorLogin'>
            <TextField
              id="user"
              name='username'
              label="Ingrese su usuario"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="password"
              name='password'
              label="Ingrese su contraseña"
              type="password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='btn'>
            <Button variant='contained' onClick={() => handleSubmit()} endIcon={<ArrowForwardIcon />}>Iniciar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
