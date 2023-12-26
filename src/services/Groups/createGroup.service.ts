import axios from "axios";



export const createGroup = async (data) => {
  const url = `http://localhost:3000/groups`;
  try {
    const res = await axios.post(url, data).then((res) => axios.patch("http://localhost:3000/groups/" + res.data.id, {id: data.id, trainerID:data.trainerID}));
    return res;
  } catch (error) {
    return null;
  }
};
