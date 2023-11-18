import axios from "axios";
const getData = async (url: string) => {
  const res = await axios.get(url,{
    headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
  return res.data
};
export default getData;
