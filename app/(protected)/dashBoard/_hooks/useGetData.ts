"use client";

import { useQuery } from "@tanstack/react-query";
import fetchResumes from "../_services/fetchResumes";
import { Resume } from "@/app/types/dashboard.type";

const useResumes = () => {
  const {
    data: Resumes,
    isPending,
    isError,
  } = useQuery<Resume[]>({
    queryKey: ["Resumes"],
    queryFn: fetchResumes,
    refetchOnWindowFocus: false,
  });

  return { Resumes, isPending, isError };
};

export default useResumes;
