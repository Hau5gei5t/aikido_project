import axios from "axios";
import IPayments from "../../interfaces/Payment.interface";

const updatePayments = async (id: number, data:IPayments) => {
  const url = `http://localhost:3000/groups/${id}`;
  try {
    const res = await axios.put(url, data);
    return res;
  } catch (error) {
    return null;
  }
};
