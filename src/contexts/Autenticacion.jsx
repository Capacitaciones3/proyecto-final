import React, { useState } from "react";

export const AutenticacionContext = React.createContext();

export const AutenticacionProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    id: 1,
    token: null,
    rol: "Supervisor",
  });
  const [isLogged, setisLogged] = useState(true);

  const iniciarSesion = (id, token, rol) => {
    setisLogged(true);
    setUsuario({
      id: id,
      token: token,
      rol: rol,
    });
  };

  const cerrarSesion = () => {
    setisLogged(false);
    setUsuario(null);
  };

  return (
    <AutenticacionContext.Provider
      value={{ usuario, iniciarSesion, cerrarSesion, isLogged }}>
      {children}
    </AutenticacionContext.Provider>
  );
};
