import CardUser from "../components/Cards/CardUser/CardUser";
import { fetchContent } from "../utils/fetch";


// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

export const getLicencias = async() => {
try {
  const respuesta =  await fetchContent("/licencias")
  console.log(respuesta)
  return (respuesta
    ? listaLicencias(respuesta)
    //? console.log(respuesta)
    : alert("No se han podido obtener las licencias.")
    )}
  catch (error) {
  throw new Error("[getLicencias service error]: " + error)
}
} 

// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

export const listaLicencias = () => {

  try {
      listaLicencias.map(licencia => {
      return <CardUser 
      key={licencia.id}
      name={licencia.name}
      avatar={licencia.avatar}
      tipoLicencia={licencia.tipodeLicencia}>
      </CardUser>
      })
    
  } catch (error) {
    throw new Error("[listaLicencias service error]: " + error)
  }
};

// DESARROLLARRRRRR !!!!!!

export const postLicencias = async (body, setUsuario) => {

  console.log(body, setUsuario)
}


export const actualizarDatosLicencias = async () => {

}