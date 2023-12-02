import axios from "axios";



const deleteGroup = async (groupId: string) => {
  const url = `http://localhost:3000/groups/${groupId}`;
  try {
    const res = await axios.delete(url);
    return res;
  } catch (error) {
    return null;
  }
};
