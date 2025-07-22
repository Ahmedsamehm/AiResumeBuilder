import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteResume, { T } from "../_services/deleteResume";
import { toast } from "sonner";

const useDeleteResume = () => {
  const queryClient = useQueryClient();
  const { mutate: DeleteResumeCard, isPending } = useMutation<T, Error, string>({
    mutationKey: ["DeleteResume"],
    mutationFn: (id: string) => {
      return deleteResume(id);
    },

    onSuccess: (data) => {
      toast.success("Resume deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["Resumes"] });
    },
    onError: (error) => {
      toast.error("something went wrong");
      console.error("Error deleting resume:", error);
    },
  });
  return { DeleteResumeCard, isPending };
};
export default useDeleteResume;
