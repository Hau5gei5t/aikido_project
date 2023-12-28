// @ts-nocheck
import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";
import urlBase from "../getURL";

const getTrainerGroups = async (trainerID: string) => {
  const url = `${urlBase}/groups?trainerID=${trainerID}`;
  try {
    const res: IGroup = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
