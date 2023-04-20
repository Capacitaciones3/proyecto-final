import { fetchContent } from "../utils/fetch";
// import { fetchContent } from "../utils/fetch";

// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

export const getLicencias = async () => {
  try {
<<<<<<< HEAD
    const respuesta = await fetchContent("/api/licencias", { method: 'GET' });
=======
    const respuesta = await fetchContent("/api/licencias", { method: "GET" });
>>>>>>> 81fc042d2cfb2cf617c810ca48e7188e78807196
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

<<<<<<< HEAD
export const postLicencias = async (body) => {
  try {
    await fetchContent("/api/licencias", {
      method: "POST",
      body: body,
    });
  } catch (error) {
    throw new Error("[postLicencias service error]: " + error);
  }
};
=======
// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

// DESARROLLARRRRRR !!!!!!

export const actualizarDatosLicencias = async () => {};
>>>>>>> 81fc042d2cfb2cf617c810ca48e7188e78807196
