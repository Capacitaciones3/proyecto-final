import { fetchContent } from "../utils/fetch";

export const getFeriados = async () => {
  try {
    const res = await fetchContent("/feriados");
    return res;
  } catch (error) {
    throw new Error("[getFeriados service error]: " + error);
  }
};

export const postFeriados = async (body) => {
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
};
