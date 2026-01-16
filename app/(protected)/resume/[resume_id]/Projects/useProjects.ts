import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProjectValues } from "./projectsSchema";
import { addProjects, fetchProjects, updateProjects } from "./projectsService";

export const useProjects = (resume_id: string) => {
  // Query
  const {
    data: fetchedData,
    isPending: isDataFetched,
    error,
  } = useQuery({
    queryKey: ["Projects", resume_id],
    queryFn: () => fetchProjects(resume_id),
  });

  // Mutations
  const { mutate: addProjectsFn, isPending: isAddingProjects } = useMutation({
    mutationFn: (formData: ProjectValues) => addProjects(formData, resume_id),
    onSuccess: () => toast.success("Projects Added Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  const { mutate: updateProjectsFn, isPending: isUpdatingProjects } = useMutation({
    mutationKey: ["updateProjects", resume_id],
    mutationFn: ({ formData, currentId }: { formData: ProjectValues; currentId: string | number }) => updateProjects(formData, currentId),
    onSuccess: () => toast.success("Projects Updated Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  return {
    fetchedData,
    isDataFetched,
    error,
    addProjectsFn,
    isAddingProjects,
    updateProjectsFn,
    isUpdatingProjects,
  };
};

export default useProjects;
