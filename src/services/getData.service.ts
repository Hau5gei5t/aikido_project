// @ts-nocheck
import axios from "axios";
import { useState } from "react";
export const urlConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};
const getData = async (url: string) => {
  const res = axios
    .get(url, urlConfig)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
  return res;
};
export default getData;
