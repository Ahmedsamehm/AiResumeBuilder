import axios from "axios";
import { Title } from "../_types/types";
import { TData } from "../_hooks/useCreateResume";
import { T } from "./deleteResume";

const createResume = async ({ title }: Title): Promise<TData[]> => {
  const { data } = await axios.post<{ data: TData[] }>("/api/dashBoard", {
    title,
  });

  return data.data;
};
export default createResume;
