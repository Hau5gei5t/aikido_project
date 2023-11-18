import axios from "axios";
import IRegister from "../interfaces/register.interface";


export const Register = (user:IRegister) => {
  axios
    .post("http://localhost:3000/register", user)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
}

