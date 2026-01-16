import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { EducationValues } from "./educationSchema";
import { addEducation, fetchEducation, updateEducation } from "./educationService";

export const useEducation = (resume_id: string) => {
  // Query
  const {
    data: fetchedData,
    isPending: isDataFetched,
    error,
  } = useQuery({
    queryKey: ["Education", resume_id],
    queryFn: () => fetchEducation(resume_id),
  });

  // Mutations
  const { mutate: addEducationFn, isPending: isAddingEducation } = useMutation({
    mutationFn: (formData: EducationValues) => addEducation(formData, resume_id),
    onSuccess: () => toast.success("Education Added Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  const { mutate: updateEducationFn, isPending: isUpdatingEducation } = useMutation({
    mutationKey: ["updateEducation", resume_id],
    mutationFn: ({ formData, currentId }: { formData: EducationValues; currentId: string | number }) => updateEducation(formData, currentId),
    onSuccess: () => toast.success("Education Updated Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  return {
    fetchedData,
    isDataFetched,
    error,
    addEducationFn,
    isAddingEducation,
    updateEducationFn,
    isUpdatingEducation,
  };
};

export default useEducation;
