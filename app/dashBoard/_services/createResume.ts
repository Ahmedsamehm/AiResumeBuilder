import { Title } from "@/app/types/dashboard.type";
import { TData } from "../_hooks/useCreateResume";
import axios from "axios";

const createResume = async ({ title }: Title): Promise<TData[]> => {
  const { data } = await axios.post<{ data: TData[] }>("/api/dashBoard", {
    title,
  });

  return data.data;
};
export default createResume;
