import axios from "axios";
import { useState } from "react";
const getData = async (url: string) => {
 const res = axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
    return res
};
export default getData;
