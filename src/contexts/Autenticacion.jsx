
import React, { useEffect, useState } from "react";


export const AutenticacionContext = React.createContext();

export const AutenticacionProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);
  const [isLogged, setisLogged] = useState(false);
  const iniciarSesion = (id, token, rol) => {
    setisLogged(true);
    setUsuario({
      id: id,
      token: token,
      rol: rol
    });
  };


  const cerrarSesion = () => {
    setisLogged(false);
    setUsuario(null);

  };

  return (
    <AutenticacionContext.Provider
      value={{ usuario, iniciarSesion, cerrarSesion }}
    >
      {children}
    </AutenticacionContext.Provider>
  );
};