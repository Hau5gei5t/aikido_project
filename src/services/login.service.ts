import axios from 'axios';
import ILogin from '../interfaces/login.interface';


export const Login = (user:ILogin) => {
    axios
    .post("http://localhost:3000/login",user)
    .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
    })
    .catch((err) => {
        console.log(err);
    })
}
