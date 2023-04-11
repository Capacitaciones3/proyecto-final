import CardUser from "../components/Cards/CardUser/CardUser";
import { fetchContent } from "../utils/fetch";


// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

export const getLicencias = async() => {
try {
  const respuesta =  await fetchContent("/licencias")
  return respuesta
  }catch (error) {
  throw new Error("[getLicencias service error]: " + error)
}
} 

// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

// DESARROLLARRRRRR !!!!!!

export const actualizarDatosLicencias = async () => {

}