import { fetchContent } from "../utils/fetch";

export const administrarUsuariosService = async (id) => {
  try {
    let response = await fetchContent("/api/usuarios", {
      method: "GET",
    });
    return response;
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[perfilService error]: " + error);
  }
};
