import axios from "axios";

const generateContentAi = async (prompt: string): Promise<string> => {
  try {
    const { data } = await axios.post<string>(`/api/Ai/`, { prompt });

    return data;
  } catch (error) {
    console.error("Error calling AI API:", error);
    throw error;
  }
};

export default generateContentAi;
