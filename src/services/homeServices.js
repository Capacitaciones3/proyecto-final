import { fetchContent } from "../utils/fetch";

export const getApi = async () => {
  try {
    return await fetchContent("/home");
  } catch (error) {
    throw new Error("[getApi service error]: " + error);
  }
};
