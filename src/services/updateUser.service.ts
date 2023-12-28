import axios from "axios";
import urlBase from "./getURL";
export const updateUser = async (id: number, data: any) => {
  const url = `${urlBase}/users/${id}`;
  try {
    const res = await axios.patch(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
