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

export const getLicenciasPendientes = async (id) => {
  try {
    const respuesta = await fetchContent(`/api/licencias/pendientes/${id}`, {
      method: "GET",
    });
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

export const getLicenciasAprobadas = async (id) => {
  try {
    const respuesta = await fetchContent(
      `/api/licencias/aprobadas/supervisor/${id}`,
      { method: "GET" }
    );
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

// CORREGIR !!!!!!!!!!!!!!!!!!!!!!!!!

// DESARROLLARRRRRR !!!!!!
export const getLicenciaFull = async (id) => {
  try {
    const respuesta = await fetchContent(`/api/licencias/full/${id}`, {
      method: "GET",
    });
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

export const actualizarDatosLicencias = async (idLicencia, estado) => {
  try {
    const respuesta = await fetchContent(
      `/api/licencias/update?idLicencia=${idLicencia}&estado=${estado}`,
      { method: "PUT" }
    );
    return "La licencia a cambiado de estado";
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

export const getLicenciasAprobadasPorUsuario = async (id) => {
  try {
    const respuesta = await fetchContent(
      `/api/licencias/aprobadas/usuario/${id}`,
      {
        method: "GET",
      }
    );
    return respuesta;
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};
