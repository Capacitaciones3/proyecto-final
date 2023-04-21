import { fetchContent } from "../utils/fetch";

export const perfilService = async (id) => {
  try {
    let response = await fetchContent(`/api/usuarios/allInfo/${id}`, {
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

export const modificarService = async (body) => {
  try {
    let response = await fetchContent(`/api/usuarios/modificar`, {
      body: body,
      method: "POST",
    });
    return "Se ha modificado con exito";
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[perfilService error]: " + error);
  }
};

export const crearUsuarioService = async (body) => {
  try {
    let response = await fetchContent(`/api/usuarios`, {
      body: body,
      method: "POST",
    });
    return "Se ha creado usuario con exito";
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[perfilService error]: " + error);
  }
};

export const supervisoresService = async (id) => {
  try {
    let res = await fetchContent(`/api/usuarios/supervisores/${id}`, {
      method: "GET",
    });
    return res;
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[perfilService error]: " + error);
  }
};
