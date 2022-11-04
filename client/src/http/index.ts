import axios from "axios";
import { REACT_APP_API_URL } from "../utils/consts";

const host = axios.create({
  baseURL: REACT_APP_API_URL,
});

const authHost = axios.create({
  baseURL: REACT_APP_API_URL,
});

authHost.interceptors.request.use((config) => {
  config.headers!.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export { host, authHost };
