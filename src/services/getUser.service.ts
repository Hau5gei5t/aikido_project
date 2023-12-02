import getData from "./getData.service";

const getUser = async (UserId: string) => {
    const url = `http://localhost:3000/users/${UserId}`;
  try {
    const res = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
export default getUser;
