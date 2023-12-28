// @ts-nocheck
import axios from "axios";
import IGroup from "../../interfaces/group.interface";
import urlBase from "../getURL";
export const updateGroup = async (id: number, data: any) => {
  const url = `${urlBase}/groups/${id}`;
  try {
    const res = await axios.patch(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
