import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";

export const getGroup = async (groupId: string) => {
  const url = `http://localhost:3000/groups/${groupId}`;
  try {
    const res = await getData(url);

    
    return res;
  } catch (error) {
    return null;
  }
};
