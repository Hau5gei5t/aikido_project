import axios from "axios";
import IRegister from "../interfaces/register.interface";

interface ISubmit extends IRegister {
  birthDate?: string;
}
export const Register = (user: ISubmit) => {
  const data = axios
    .post("http://localhost:3000/register", user)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (res.data.user.groupCode.length !== 0 ){
        localStorage.setItem("role", "student");
      }
      return res.data;
    })
    .then((res) => {
      try {
        axios
          .get(`http://localhost:3000/groups?groupCode=${res.user.groupCode}`)
          .then((res) => {
            // console.log(res);
            axios.patch(`http://localhost:3000/groups/${res.data[0].id}`, {
              students: [
                ...res.data[0].students,
                {
                  key: res.data[0].students.length + 1,
                  groupKey: res.data[0].id,
                  userID: JSON.parse(localStorage.getItem("user")!).id,
                  name: `${user.lastName} ${user.firstName}`,
                  paymentstatus: "Не оплачено",
                  paymentDate: "Нет",
                  price: res.data[0].price,
                },
              ],
            });
          });
          axios.patch(`http://localhost:3000/users/${res.user.id}`, {
            role: "student"
          })
          
        return res;
      } catch (error) {
        
        throw new Error(error);
      }
    })
    .catch((err) => {
      throw new Error(`Error: ${err.response} \n ${user}`);
    });
  return data;
};
