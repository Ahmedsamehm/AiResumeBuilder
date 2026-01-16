import { apiClient } from "../../../../../lib/apiClient";
import { ProjectsResponse, ProjectValues } from "./projectsSchema";

export const fetchProjects = async (resume_id: string) => {
  const { data } = await apiClient.get<ProjectsResponse[]>("/Projects", {
    params: { resume_id },
  });
  return data;
};

export const addProjects = async (formData: ProjectValues, resume_id: string) => {
  const { data } = await apiClient.post<ProjectsResponse[]>("/Projects", { formData, resume_id });
  return data;
};

export const updateProjects = async (formData: ProjectValues, currentId: string | number) => {
  const { data } = await apiClient.put<ProjectsResponse[]>("/Projects", { formData, currentId });
  return data;
};
