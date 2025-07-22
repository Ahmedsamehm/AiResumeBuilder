"use client";

import { useMutation } from "@tanstack/react-query";
import generateContentAi from "../_services/generateContentAi";
import { toast } from "sonner";

const useGenerateContentAi = () => {
  const {
    mutate: generate,
    isPending: isGenerated,
    data,
    context,
    isSuccess,
  } = useMutation<string, Error, string>({
    mutationKey: ["GenerateContentAi"],
    mutationFn: (prompt: string) => {
      console.log(prompt);

      return generateContentAi(prompt);
    },
    onSuccess: (data) => {
      toast.success("Content generated successfully");
    },

    onError: (error: Error) => {
      toast.error(error.message);
      console.error("Error generating content:", error);
    },
  });

  return { generate, isGenerated, data, context, isSuccess };
};

export default useGenerateContentAi;
