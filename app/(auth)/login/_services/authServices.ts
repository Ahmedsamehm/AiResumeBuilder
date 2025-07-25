import axios from "axios";
import { User } from "../_types/User.type";

export interface LoginResponse {
  message: string;
  user: any;
  session: any;
}

export const loginUser = async (userData: User): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>("/api/auth/login", { userData });

  return data;
};

export const getAuthUser = async () => {
  const { data } = await axios.get("/api/auth/login");
  return data.user;
};

export const logOutUser = async () => {
  const data = await axios.post("/api/auth/logOut");

  return data;
};

export const signInWithGoogle = async (idToken: string) => {
  const { data } = await axios.post<LoginResponse>("/api/auth/callback", { idToken });

  return data;
};
