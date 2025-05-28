import axios from "axios";
import { LoginType, RegisterType } from "@/@types/api.type";

export const registerMutationFn = async (data: RegisterType) =>
  await axios.post("/api/register", data);

export const loginMutationFn = async (data: LoginType) =>
  await axios.post("/api/login", data);

export const logoutMutationFn = async () => await axios.post("/api/logout");

export const getCurrentUserQueryFn = async () => {
  const response = await axios.get("/api/current-user");
  return response.data;
};
