import axios from "axios";
import { ResumeResponse, ResumeValues } from "../Schema/dashBoardSchema";

const dashboardApiClient = axios.create({
  baseURL: "/api/dashBoard",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Add interceptors once here
dashboardApiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    // Handle 401, 500, etc. globally
    return Promise.reject(error);
  }
);

export const fetchResumes = async () => {
  const { data } = await dashboardApiClient.get<ResumeResponse[]>("/");
  return data;
};

export const addResume = async (formData: ResumeValues) => {
  const { data } = await dashboardApiClient.post<{ data: ResumeResponse[] }>("/", formData);
  return data.data;
};

export const deleteResume = async (id: string) => {
  const { data } = await dashboardApiClient.delete<ResumeResponse>("/", {
    params: { id },
  });
  return data;
};
