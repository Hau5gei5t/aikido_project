import axios from "axios";
export const updateUser = async (id: number, data: any) => {
  const url = `http://localhost:3000/users/${id}`;
  try {
    const res = await axios.patch(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
