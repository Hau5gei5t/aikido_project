// @ts-nocheck
import axios from "axios";
import IRegister from "../interfaces/register.interface";
import urlBase from "./getURL";

interface ISubmit extends IRegister {
  birthDate?: string;
}
export const Register = (user: ISubmit) => {
  const data = axios
    .post(`${urlBase}/register`, user)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (res.data.user.groupCode.length !== 0) {
        if (res.data.user.groupCode.includes("TRAINER")) {
          localStorage.setItem("role", "trainer");
          axios.patch(`${urlBase}/users/${res.data.user.id}`, {
            role: "trainer",
          });
        } else {
          localStorage.setItem("role", "student");
          axios.patch(`${urlBase}/users/${res.data.user.id}`, {
            role: "student",
          });
        }
        axios.patch(`${urlBase}/users/${res.data.user.id}`, {
          emailConfirmed: false,
          phoneNumberConfirmed: false,
        });
      }

      return res.data;
    })
    .then((res) => {
      try {
        axios
          .get(`${urlBase}/groups?groupCode=${res.user.groupCode}`)
          .then((res) => {
            if (res.data.length === 0) {
              console.log(res);
              return;
            }
            axios.patch(`${urlBase}/groups/${res.data[0].id}`, {
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
