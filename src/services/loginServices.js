// ACTUALIZAR CUANDO TENGAMOS LA BASE DE DATOS!!!


import { fetchContent } from "../utils/fetch";

export const postLogin = async (body) => {
  try {
    let response = await fetchContent("/users", { method: "POST", body: body })
    return response;
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[Loginservice error]: " + error);
  }
};
