import { apiClient } from "../../../../../lib/apiClient";
import { EducationResponse, EducationValues } from "./educationSchema";

export const fetchEducation = async (resume_id: string) => {
  const { data } = await apiClient.get<EducationResponse[]>("/Education", {
    params: { resume_id },
  });
  return data;
};

export const addEducation = async (formData: EducationValues, resume_id: string) => {
  const { data } = await apiClient.post<EducationResponse[]>("/Education", { formData, resume_id });
  return data;
};

export const updateEducation = async (formData: EducationValues, currentId: string | number) => {
  const { data } = await apiClient.put<EducationResponse[]>("/Education", { formData, currentId });
  return data;
};
