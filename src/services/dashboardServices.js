import { fetchContent } from "../utils/fetch";

export const getDashboard = async () => {
  try {
    return await fetchContent("/dashboard");
  } catch (error) {
    throw new Error("[Dashboard service error]: " + error);
  }
};
