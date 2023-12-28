// @ts-nocheck
import axios from "axios";
import IPayments from "../../interfaces/Payment.interface";
import urlBase from "../getURL";

const updatePayments = async (id: number, data: IPayments) => {
  const url = `${urlBase}/groups/${id}`;
  try {
    const res = await axios.put(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
