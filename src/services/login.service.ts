import axios from 'axios';
import ILogin from '../interfaces/login.interface';
import urlBase from './getURL';


export const Login = (user:ILogin) => {
   const data = axios
     .post(`${urlBase}/login`, user)
     .then((res) => {
       console.log(res.data);
       localStorage.setItem("token", res.data.accessToken);
       localStorage.setItem("user", JSON.stringify(res.data.user));
       return res.data;
     })
     .catch((err) => {
       console.log(err);
     });
    return data;
}
