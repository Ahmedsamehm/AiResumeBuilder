import axios from "axios";
import { Resume } from "../_types/types";

const fetchResumes = async (): Promise<Resume[]> => {
  const { data } = await axios.get<Resume[]>("/api/dashBoard");

  return data;
};

export default fetchResumes;
