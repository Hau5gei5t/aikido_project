// @ts-nocheck
import IGroup from "../../interfaces/group.interface";
import getData from "../getData.service";
import urlBase from "../getURL";

export const getAllGroup = async (id, type, code?) => {
  let url;
  if (type === "trainer") {
    url = `${urlBase}/groups?trainerID=${id}`;
  } else if (type === "student") {
    url = `${urlBase}/groups?groupCode=${code}`;
  } else {
    url = `${urlBase}/groups`;
  }
  try {
    const res = await getData(url);
    return res;
  } catch (error) {
    return null;
  }
};
