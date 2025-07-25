"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { addData, deleteDataAction, fetchData, GenericServiceParams, updateData } from "../_services/crudService";
import { toast } from "sonner";

export const useGenericQuery = <T>(tableName: string) => {
  const { resume_id } = useParams<{ resume_id: string }>();
  if (!resume_id) throw new Error("No resume ID provided.");

  const {
    data: fetchedData,
    isPending: isDataFetched,
    error,
  } = useQuery<T[]>({
    queryKey: [tableName, resume_id],
    queryFn: () => fetchData<T>(resume_id, tableName),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return { fetchedData, isDataFetched, error };
};

export const useAddGenericQuery = <T>(tableName: string) => {
  const queryClient = useQueryClient();
  const { resume_id } = useParams<{ resume_id: string }>();

  const { mutate: createData, isPending: isCreated } = useMutation<T[], Error, Omit<GenericServiceParams<T>, "currentId">>({
    mutationKey: [`add${tableName}`],
    mutationFn: ({ formData }) => addData<T>({ formData, tableName, resume_id }),
    onSuccess: () => {
      toast.success("Data added successfully");
      queryClient.invalidateQueries({ queryKey: [tableName] });
    },
    onError: (error: Error) => {
      toast.error("something went wrong");
      console.error(`Error adding from ${tableName}:`, error);
    },
  });

  return { createData, isCreated };
};

export const useUpdateGenericQuery = <T>(tableName: string, current_id?: number) => {
  const queryClient = useQueryClient();

  const { mutate: editData, isPending: isEdited } = useMutation<T[], Error, Omit<GenericServiceParams<T>, "resume_id">>({
    mutationKey: [`update${tableName}`],
    mutationFn: ({ formData, currentId }) => updateData<T>({ formData, currentId: currentId || current_id, tableName }),
    onSuccess: () => {
      toast.success("Data updated successfully");

      queryClient.invalidateQueries({ queryKey: [tableName] });
    },
    onError: (error: Error) => {
      toast.error("something went wrong");
      console.error(`Error updating from ${tableName}:`, error);
    },
  });

  return { editData, isEdited };
};

export const useDeleteGenericQuery = (tableName: string) => {
  const queryClient = useQueryClient();

  const { mutate: deleteData, isPending: isDeleted } = useMutation<any, Error, any>({
    mutationKey: [`delete${tableName}`],
    mutationFn: (id) => {
      return deleteDataAction({ id, tableName });
    },
    onSuccess: () => {
      toast.success("Data Deleted successfully");
      queryClient.invalidateQueries({ queryKey: [tableName] });
    },
    onError: (error: Error) => {
      toast.error("something went wrong");
      console.error(`Error deleting from ${tableName}:`, error);
    },
  });

  return { deleteData, isDeleted };
};
