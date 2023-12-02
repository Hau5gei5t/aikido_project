import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";

const getTrainerGroups = async (trainerID: string) => {
  const url = `http://localhost:3000/groups?trainerID=${trainerID}`;
  try {
    const res: IGroup = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
