import axios from "axios";
import IPayments from "../../interfaces/Payment.interface";

const createPayments = async (data: IPayments) => {
  const url = `http://localhost:3000/groups`;
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
