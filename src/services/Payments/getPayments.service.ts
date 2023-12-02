import getData from "../getData.service";

const getPayments = async (studentID: string) => {
  const url = `http://localhost:3000/payments?studentID=${studentID}`;
  try {
    const res = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
