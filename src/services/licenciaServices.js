import { fetchContent } from "../utils/fetch";

// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

export const getLicencias = async () => {
  try {
    const respuesta = await fetchContent("/licencias", { method: "GET" });
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

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
