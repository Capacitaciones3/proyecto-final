import { fetchContent } from "../utils/fetch";

export const postLogin = async (body, setUsuario) => {
  try {
    const response = await fetchContent("/login", { body, method: "POST" });
    setUsuario(`${response?.nombre} ${response?.apellido}`);
    localStorage.setItem("user", JSON.stringify(response))
    localStorage.setItem(
      "Token",
      response?.accessToken?.stsTokenManager?.accessToken
    );
    return window.location.replace("/grupos");
    
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[getGrupos service error]: " + error);
  }
};
