import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { PersonalInfoValues } from "./personalInfoSchema";
import { addPersonalInfo, fetchPersonalInfo, updatePersonalInfo } from "./personalInfoService";
import { useResumeStore } from "../_store/useResumeStore";
import { useEffect } from "react";

export const usePersonalInfo = (resume_id: string) => {
  // Query
  const {
    data: fetchedData,
    isPending: isDataFetched,
    error,
  } = useQuery({
    queryKey: ["PersonalInformation", resume_id],
    queryFn: () => fetchPersonalInfo(resume_id),
  });

  const setPersonalInfo = useResumeStore((s) => s.setPersonalInfo);
  useEffect(() => {
    if (fetchedData?.[0]) {
      setPersonalInfo(fetchedData[0]);
    }
  }, [fetchedData, setPersonalInfo]);

  // Mutations
  const { mutate: addPersonalInfoFn, isPending: isAddingPersonalInfo } = useMutation({
    mutationFn: (formData: PersonalInfoValues) => addPersonalInfo(formData, resume_id),
    onSuccess: () => toast.success("Personal Info Added Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  const { mutate: updatePersonalInfoFn, isPending: isUpdatingPersonalInfo } = useMutation({
    mutationKey: ["updatePersonalInfo", resume_id],
    mutationFn: ({ formData, currentId }: { formData: PersonalInfoValues; currentId: string | number }) => updatePersonalInfo(formData, currentId),
    onSuccess: () => toast.success("Personal Info Updated Successfully"),
    onError: () => toast.error("Something went wrong"),
  });

  return {
    fetchedData,
    isDataFetched,
    error,
    addPersonalInfoFn,
    isAddingPersonalInfo,
    updatePersonalInfoFn,
    isUpdatingPersonalInfo,
  };
};

export default usePersonalInfo;
