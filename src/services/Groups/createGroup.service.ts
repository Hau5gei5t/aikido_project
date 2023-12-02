import axios from "axios";
import IGroup from "../../interfaces/group.interface";


const createGroup = async (data:IGroup) => {
  const url = `http://localhost:3000/groups`;
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
