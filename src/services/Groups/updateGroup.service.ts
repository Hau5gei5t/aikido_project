import axios from "axios";
import IGroup from "../../interfaces/group.interface";

const updateGroup = async (id: number, data: IGroup) => {
  const url = `http://localhost:3000/groups/${id}`;
  try {
    const res = await axios.put(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
