import axios from "axios";
import { Resume } from "@/app/types/dashboard.type";

const fetchResumes = async (): Promise<Resume[]> => {
  const { data } = await axios.get<Resume[]>("/api/dashBoard");

  return data;
};

export default fetchResumes;
