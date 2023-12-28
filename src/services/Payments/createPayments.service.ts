// @ts-nocheck
import axios from "axios";
import IPayments from "../../interfaces/Payment.interface";
import urlBase from "../getURL";

const createPayments = async (data: IPayments) => {
  const url = `${urlBase}/groups`;
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
