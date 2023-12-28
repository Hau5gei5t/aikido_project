import getData from "./getData.service";
import urlBase from "./getURL";

const getUser = async (UserId: string) => {
    const url = `${urlBase}/users/${UserId}`;
  try {
    const res = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
export default getUser;
