import React, { useState, useEffect } from "react";
import CardUser from "./CardUser";

//Este componente fue creado para probar la card de Solicitudes pendientes!
//---------------------------------------
const ListLicences = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `https://642db4a9bf8cbecdb40d0cf1.mockapi.io/licencias/1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <CardUser
      key={user.id}
      name={user.name}
      avatar={user.avatar}
      tipoLicencia={user.tipodeLicencia}
    ></CardUser>
  );
};

export default ListLicences;
