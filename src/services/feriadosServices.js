import { fetchContent } from "../utils/fetch";

export const getFeriados = async () => {
  try {
    const respuesta = await fetchContent("/feriados", {method: 'GET'});
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

/* export const getFeriados = async () => {
    try {
      const res = await fetch('http://nolaborables.com.ar/api/v2/feriados/2023?formato=mensual', {
        method: 'GET',
        headers: {    
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch(error) {
      throw new Error("[getFeriados service error]: " + error);
    }
  } */

/* export const postFeriados = async (body) => {
  try {
      const res = await fetchContent("/feriados", { body, method: "POST" });
      
  } catch (error) {
    alert(
      error?.res.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[postFeriados service error]: " + error);
  }
}; */
