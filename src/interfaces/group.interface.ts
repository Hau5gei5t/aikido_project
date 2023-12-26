import Dayjs from "dayjs";
export default interface IGroup {
  [key: string]:
    | string
    | string[]
    | Dayjs.Dayjs
    | Dayjs.Dayjs[]
    | undefined
    | number
    | {
        key: number;
        groupKey: number;
        userID: number;
        name: string;
        paymentstatus: "Не оплачено" | "Оплачено" | "В обработке";
        paymentDate: string;
        price: number;
      }[];
  id: number;
  groupName: string;
  groupCode: string;
  description?: string;
  paymentDate: Dayjs.Dayjs;
  price: string;
  locationGroup: string;
  shedule: string[];
  students: {
    key: number;
    groupKey: number;
    userID: number;
    name: string;
    paymentstatus: "Не оплачено" | "Оплачено" | "В обработке";
    paymentDate: string;
    price: number;
  }[];
}