import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExperienceValues } from "./experienceSchema";
import { addExperience, fetchExperience, updateExperience, deleteExperience } from "./experienceService";

export const useExperience = (resume_id: string) => {
  // Query
  const {
    data: fetchedData,
    isPending: isDataFetched,
    error,
  } = useQuery({
    queryKey: ["Experience", resume_id],
    queryFn: () => fetchExperience(resume_id),
  });

  // Mutations
  const { mutate: addExperienceFn, isPending: isAddingExperience } = useMutation({
    mutationFn: (formData: ExperienceValues) => addExperience(formData, resume_id),
    onSuccess: () => toast.success("Experience Added Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  const { mutate: updateExperienceFn, isPending: isUpdatingExperience } = useMutation({
    mutationKey: ["updateExperience", resume_id],
    mutationFn: ({ formData, currentId }: { formData: ExperienceValues; currentId: string | number }) => updateExperience(formData, currentId),
    onSuccess: () => toast.success("Experience Updated Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  const { mutate: deleteExperienceFn, isPending: isDeletingExperience } = useMutation({
    mutationFn: (id: string | number) => deleteExperience(id),
    onSuccess: () => toast.success("Experience Deleted Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  return {
    fetchedData,
    isDataFetched,
    error,
    addExperienceFn,
    isAddingExperience,
    updateExperienceFn,
    isUpdatingExperience,
    deleteExperienceFn,
    isDeletingExperience,
  };
};

export default useExperience;
