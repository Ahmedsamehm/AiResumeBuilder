import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ResumeValues } from "../Schema/dashBoardSchema";
import { fetchResumes, addResume, deleteResume } from "../_services/dashboardService";

export const useDashboard = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Query
  const {
    data: fetchedData,
    isPending: isDataFetched,
    error,
  } = useQuery({
    queryKey: ["Resumes"],
    queryFn: fetchResumes,
    refetchOnWindowFocus: false,
  });

  // Mutations
  const { mutate: addResumeFn, isPending: isAddingResume } = useMutation({
    mutationKey: ["Resume"],
    mutationFn: (formData: ResumeValues) => addResume(formData),
    onSuccess: (data) => {
      toast.success("Resume created successfully");
      const { id } = data[0];
      if (!id) return;
      router.push(`/resume/${id}`);
      queryClient.invalidateQueries({ queryKey: ["Resumes"] });
    },
    onError: (error: Error) => {
      toast.error("something went wrong");
      console.error("Error creating resume:", error);
    },
  });

  const { mutate: deleteResumeFn, isPending: isDeletingResume } = useMutation({
    mutationKey: ["DeleteResume"],
    mutationFn: (id: string) => deleteResume(id),
    onSuccess: () => {
      toast.success("Resume deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["Resumes"] });
    },
    onError: (error: Error) => {
      toast.error("something went wrong");
      console.error("Error deleting resume:", error);
    },
  });

  return {
    fetchedData,
    isDataFetched,
    error,
    addResumeFn,
    isAddingResume,
    deleteResumeFn,
    isDeletingResume,
  };
};

export default useDashboard;
