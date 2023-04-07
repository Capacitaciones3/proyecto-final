import { useContext } from "react";
import CardUser from "../components/Cards/CardUser/CardUser";
import { fetchContent } from "../utils/fetch";
import { AutenticacionContext } from "../contexts/Autenticacion";

const ListLicences = async (body, setUsuario) => {

    const {usuario} = useContext(AutenticacionContext);

  try {
    const response = await fetchContent("/licencias", { body, method: "GET" });
    setUsuario(`${response?.name}`);
    console.log(response)

    return <CardUser
      key={usuario.id}
      name={usuario.name}
      avatar={usuario.avatar}
      tipoLicencia={usuario.tipodeLicencia}>
      </CardUser>;
    
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[ListLicences service error]: " + error);
  }
};

  export default ListLicences;