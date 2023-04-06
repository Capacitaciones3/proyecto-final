import React, {useState } from "react";

export const AutenticacionContext = React.createContext();

export const AutenticacionProvider = ({children}) => {
  const [usuario, setUsuario] = useState({
    isLogged: false,
    rol: {
      usuario: false,
      administrador: true
    }
  });

  const iniciarSesion = () => {
    setUsuario({...usuario,
      isLogged: true
    });
  };
  const cerrarSesion = () => {
    setUsuario({...usuario,
      isLogged: false
    });
  };
  
  return (
    <AutenticacionContext.Provider
      value={{ usuario,setUsuario, iniciarSesion, cerrarSesion }}
    >
      {children}
    </AutenticacionContext.Provider>
  );
};