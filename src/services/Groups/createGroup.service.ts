// @ts-nocheck
import axios from "axios";
import urlBase from "../getURL";

export const createGroup = async (data) => {
  const url = `${urlBase}/groups`;
  try {
    const res = await axios.post(url, data).then((res) =>
      axios.patch(`${urlBase}/groups/` + res.data.id, {
        id: data.id,
        trainerID: data.trainerID,
      })
    );
    return res;
  } catch (error) {
    return null;
  }
};
