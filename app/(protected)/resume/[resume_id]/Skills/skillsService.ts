import { apiClient } from "../../../../../lib/apiClient";
import { SkillsResponse, SkillValues } from "./skillsSchema";

export const fetchSkills = async (resume_id: string) => {
  const { data } = await apiClient.get<SkillsResponse[]>("/Skills", {
    params: { resume_id },
  });
  return data;
};

export const addSkills = async (formData: SkillValues, resume_id: string) => {
  const { data } = await apiClient.post<SkillsResponse[]>("/Skills", { formData, resume_id });
  return data;
};

export const updateSkills = async (formData: SkillValues, currentId: string | number) => {
  const { data } = await apiClient.put<SkillsResponse[]>("/Skills", { formData, currentId });
  return data;
};
