import { apiClient } from "../../../../../lib/apiClient";
import { ExperienceResponse, ExperienceValues } from "./experienceSchema";

export const fetchExperience = async (resume_id: string) => {
  const { data } = await apiClient.get<ExperienceResponse[]>("/Experience", {
    params: { resume_id },
  });
  return data;
};

export const addExperience = async (formData: ExperienceValues, resume_id: string) => {
  const { data } = await apiClient.post<ExperienceResponse[]>("/Experience", { formData, resume_id });
  return data;
};

export const updateExperience = async (formData: ExperienceValues, currentId: string | number) => {
  const { data } = await apiClient.put<ExperienceResponse[]>("/Experience", { formData, currentId });
  return data;
};

export const deleteExperience = async (id: string | number) => {
  const { data } = await apiClient.delete<ExperienceResponse[]>("/Experience", {
    params: { id },
  });
  return data;
};
