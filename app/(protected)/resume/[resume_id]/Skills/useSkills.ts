import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { SkillValues } from "./skillsSchema";
import { addSkills, fetchSkills, updateSkills } from "./skillsService";

export const useSkills = (resume_id: string) => {
  // Query
  const {
    data: fetchedData,
    isPending: isDataFetched,
    error,
  } = useQuery({
    queryKey: ["Skills", resume_id],
    queryFn: () => fetchSkills(resume_id),
  });

  // Mutations
  const { mutate: addSkillsFn, isPending: isAddingSkills } = useMutation({
    mutationFn: (formData: SkillValues) => addSkills(formData, resume_id),
    onSuccess: () => toast.success("Skills Added Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  const { mutate: updateSkillsFn, isPending: isUpdatingSkills } = useMutation({
    mutationKey: ["updateSkills", resume_id],
    mutationFn: ({ formData, currentId }: { formData: SkillValues; currentId: string | number }) => updateSkills(formData, currentId),
    onSuccess: () => toast.success("Skills Updated Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  return {
    fetchedData,
    isDataFetched,
    error,
    addSkillsFn,
    isAddingSkills,
    updateSkillsFn,
    isUpdatingSkills,
  };
};

export default useSkills;
