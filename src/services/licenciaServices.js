import { fetchContent } from "../utils/fetch";
// import { fetchContent } from "../utils/fetch";

// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

export const getLicencias = async () => {
  try {
    const respuesta = await fetchContent("/api/licencias", { method: "GET" });
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};


// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

// DESARROLLARRRRRR !!!!!!

export const actualizarDatosLicencias = async () => { };

