import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";

const getAllGroup = async () => {
  const url = `http://localhost:3000/groups`;
  try {
    const res:IGroup[] = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
