"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import createResume from "../_services/createResume";

import { toast } from "sonner";
import { Title } from "@/app/types/dashboard.type";

export type TData = {
  title: string;
  user_id: string | number;
  id: string | number;
  created_at: string;
};
const useCreateResume = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: AddResume, isPending } = useMutation<TData[], Error, Title>({
    mutationKey: ["Resume"],

    mutationFn: ({ title }) => {
      return createResume({ title });
    },

    onSuccess: (data) => {
      toast.success("Resume created successfully");
      const { id } = data[0];
      if (!id) return;
      router.push(`/resume/${[id]}`);
      queryClient.invalidateQueries({ queryKey: ["Resumes"] });
    },

    onError: (error: Error) => {
      toast.error("something went wrong");
      console.error("Error creating resume:", error);
    },
  });
  return { AddResume, isPending };
};

export default useCreateResume;
