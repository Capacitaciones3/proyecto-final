import React, {useContext} from "react";
import "./notfound.css"
import { AutenticacionContext } from "../../contexts/Autenticacion"
import { Button } from "@mui/material";
import imagen from './notfound.jpg'

const NotFound = () => {

  const { usuario, isLogged } = useContext(AutenticacionContext);

  return (
    <section className='not_section'>

    {isLogged ? (
      <div className="not_section">
        <h1>Lo sentimos, pagina no encontrada!</h1>
        <img src={imagen} alt="" className="imageNotFound"/>
        <Button variant="contained" href="../Dashboard/Dashboard" >Volver al inicio</Button>
      </div>
    ):(
      <div className="not_section">
        <h1>Oops! No estas loggeado</h1>
        <img src={imagen} alt="" className="imageNotFound"/>
        <Button variant="contained" href="../Login" >Volver al login</Button>
      </div>
    )}


    </section>
  )
}

export default NotFound