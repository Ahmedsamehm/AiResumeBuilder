import axios from "axios";

export interface GenericServiceParams<T> {
  formData: T;
  resume_id: string | number;
  currentId?: string | number;
  tableName: string;
}

export const fetchData = async <T>(resume_id: string, tableName: string): Promise<T[]> => {
  const { data } = await axios.get<T[]>(`/api/resumes/${tableName}?resume_id=${resume_id}`);
  if (!data) throw new Error(`No data found for table ${tableName}.`);
  return data;  
};

export const addData = async <T>({ formData, tableName, resume_id }: Omit<GenericServiceParams<T>, "currentId">): Promise<T[]> => {
  try {
    const { data } = await axios.post<T[]>(`/api/resumes/${tableName}`, { formData, resume_id });
    return data;
  } catch (error: string | any) {
    throw new Error(error.response?.data?.error || `Failed to add data to ${tableName}`);
  }
};

export const updateData = async <T>({ formData, currentId, tableName }: Omit<GenericServiceParams<T>, "resume_id">): Promise<T[]> => {
  try {
    const { data } = await axios.put<T[]>(`/api/resumes/${tableName}`, { formData, currentId });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || `Failed to update data in ${tableName}`);
  }
};

export const deleteDataAction = async ({ id, tableName }: { id: string | number; tableName: string }): Promise<void> => {
  const { data } = await axios.delete(`/api/resumes/${tableName}`, { params: id });
  return data;
};
