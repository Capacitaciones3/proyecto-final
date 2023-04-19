import { fetchContent } from "../utils/fetch";

export const getFeriados = async () => {
  try {
    const respuesta = await fetchContent("/api/feriados", { method: "GET" });
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

export const postFeriados = async (body) => {
  try {
    const res = await fetchContent("/api/feriados", { body, method: "POST" });
    return res;
  } catch (error) {
    alert(
      error?.res.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[postFeriados service error]: " + error);
  }
};
