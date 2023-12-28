// @ts-nocheck
import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";
import urlBase from "../getURL";

export const getGroup = async (groupId: string) => {
  const url = `${urlBase}/groups/${groupId}`;
  try {
    const res = await getData(url);

    
    return res;
  } catch (error) {
    return null;
  }
};
