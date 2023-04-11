import React, {useState } from "react";

export const AutenticacionContext = React.createContext();

export const AutenticacionProvider = ({children}) => {
  
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (id, token, rol) => {
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