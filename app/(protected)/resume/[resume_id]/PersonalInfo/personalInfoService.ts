import { apiClient } from "../../../../../lib/apiClient";
import { PersonalInfoResponse, PersonalInfoValues } from "./personalInfoSchema";

export const fetchPersonalInfo = async (resume_id: string) => {
  const { data } = await apiClient.get<PersonalInfoResponse[]>("/PersonalInformation", {
    params: { resume_id },
  });
  return data;
};

export const addPersonalInfo = async (formData: PersonalInfoValues, resume_id: string) => {
  const { data } = await apiClient.post<PersonalInfoResponse[]>("/PersonalInformation", { formData, resume_id });
  return data;
};

export const updatePersonalInfo = async (formData: PersonalInfoValues, currentId: string | number) => {
  const { data } = await apiClient.put<PersonalInfoResponse[]>("/PersonalInformation", { formData, currentId });
  return data;
};
