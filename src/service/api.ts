import axios from "axios";

const token = localStorage.getItem("@dev-path:token");

export const instance = axios.create({
  baseURL: "https://api-devpath.herokuapp.com",
  timeout: 20000,
});

export const instanceHeaders = axios.create({
  baseURL: "https://api-devpath.herokuapp.com",
  timeout: 20000,
  headers: { Authorization: `Bearer ${token}` },
});
