import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";

export const getAllGroup = async (id, type, code?) => {
  let url
  if (type === "trainer") {
     url = `http://localhost:3000/groups?trainerID=${id}`;
  } else if (type === "student") {
     url = `http://localhost:3000/groups?groupCode=${code}`;
  }
  else {
    url = `http://localhost:3000/groups`;
  }
  try {
    const res = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
