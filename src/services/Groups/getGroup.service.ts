import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";

const getGroup = async (groupId: string) => {
  const url = `http://localhost:3000/groups/${groupId}`;
  try {
    const res: IGroup = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
