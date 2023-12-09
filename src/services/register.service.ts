import axios from "axios";
import IRegister from "../interfaces/register.interface";

interface ISubmit extends IRegister {
  birthDate?: string
}
export const Register = (user: ISubmit) => {
  const data = axios
    .post("http://localhost:3000/register", user)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res.data;
    })
    .catch((err) => {
      throw new Error(`Error: ${err.response} \n ${user}`);
    });
  return data;
};

