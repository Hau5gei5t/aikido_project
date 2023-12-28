import axios from "axios";
import urlBase from "../getURL";



export const deleteGroup = async (groupId: string) => {
  const url = `${urlBase}/groups/${groupId}`;
  try {
    const res = await axios.delete(url);
    return res;
  } catch (error) {
    return null;
  }
};
