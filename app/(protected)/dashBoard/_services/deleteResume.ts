import axios from "axios";

export type T = {
  id: string;
};
const deleteResume = async (id: string): Promise<T> => {
  const { data } = await axios.delete<T>("/api/dashBoard", { params: { id } });

  return data;
};

export default deleteResume;
