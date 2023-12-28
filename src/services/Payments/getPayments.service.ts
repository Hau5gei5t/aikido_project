// @ts-nocheck
import getData from "../getData.service";
import urlBase from "../getURL";

const getPayments = async (studentID: string) => {
  const url = `${urlBase}/payments?studentID=${studentID}`;
  try {
    const res = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
