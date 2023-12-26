import axios from "axios";
import IGroup from "../../interfaces/group.interface"; 
export const updateGroup = async (id: number, data: any) => {
  const url = `http://localhost:3000/groups/${id}`;
  try {
    const res = await axios.patch(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
