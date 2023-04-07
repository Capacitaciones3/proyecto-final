import { fetchContent } from "../utils/fetch";

export const getApi = async () => {
  try {
    return await fetchContent("/licencias");
  } catch (error) {
    throw new Error("[getApi service error]: " + error);
  }
};
