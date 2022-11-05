import jwtDecode from "jwt-decode";
import { authHost, host } from ".";
import { IUser } from "../types/user";

export const registration = async (email: string, password: string) => {
  const { data } = await host.post("user/registration", { email, password, role: "USER" });
  localStorage.setItem("token", data.token);
  return jwtDecode<IUser>(data.token);
};
export const login = async (email: string, password: string) => {
  const { data } = await host.post("user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode<IUser>(data.token);
};
export const check = async () => {
  const { data } = await authHost.get("user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode<IUser>(data.token);
};
