import React, { useCallback, useMemo } from "react";

import { Card, CardFooter, CardDescription, CardHeader, CardTitle } from "@/app/components/shared/ui/card";
import { Button } from "@/app/components/shared/ui/button";

import AddResume from "./AddResume";
import useDashboard from "../_hooks/useDashboard";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import Link from "next/link";


import { useDashboardStore } from "../_store/useDashboardStore";
import { TrashIcon } from "lucide-react";
import { ResumeResponse } from "../Schema/dashBoardSchema";
const ResumeList = () => {
  const filteredResumes = useDashboardStore((state) => state.filteredResumes);
  const { deleteResumeFn, isDeletingResume } = useDashboard();
  const handleDelete = useCallback((id: string) => deleteResumeFn(id), [deleteResumeFn]);
  const displayFilteredResumes = useMemo(
    () =>
      filteredResumes?.map((item: ResumeResponse) => {
        if (!item) return null;
        return (
          <li key={item.id}>
            <Card className="cursor-pointer min-h-[20dvh] w-full  text-center hover:ease-in-out hover:scale-95 transition-all duration-300  hover:animate-fade-in ">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, fugit.</CardDescription>
              </CardHeader>
              <CardFooter className="mx-auto gap-3">
                <Button>
                  <Link href={`/resume/${item.id}`}>open</Link>
                </Button>
                <Button
                  className="cursor-pointer hover:scale-105 transition-all duration-300"
                  disabled={isDeletingResume}
                  variant="destructive"
                  onClick={() => handleDelete(item.id)}
                >
                  <TrashIcon className="size-4" />
                  {isDeletingResume ? <LoadingSpinner /> : "Delete"}
                </Button>
              </CardFooter>
            </Card>
          </li>
        );
      }),
    [filteredResumes, handleDelete, isDeletingResume]
  );
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[calc(90vh-200px)] overflow-y-auto p-1 md:p-5 w-full mt-3">
      <AddResume />
      {displayFilteredResumes?.length === 0 ? <div className="text-center text-2xl font-bold">No resumes found</div> : displayFilteredResumes}
    </ul>
  );
};
export default ResumeList;
