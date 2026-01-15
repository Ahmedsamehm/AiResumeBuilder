import React, { useCallback, useMemo } from "react";

import { Card, CardFooter, CardDescription, CardHeader, CardTitle } from "@/app/components/shared/ui/card";
import { Button } from "@/app/components/shared/ui/button";

import AddResume from "./AddResume";
import useDeleteResume from "../_hooks/useDeleteResume";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import Link from "next/link";

import { Resume } from "@/app/types/dashboard.type";
import { useDashboardStore } from "../_store/useDashboardStore";
import { TrashIcon } from "lucide-react";
const ResumeList = () => {
  const filteredResumes = useDashboardStore((state) => state.filteredResumes);
  const { DeleteResumeCard, isPending } = useDeleteResume();
  const handleDelete = useCallback((id: string) => DeleteResumeCard(id), [DeleteResumeCard]);
  const displayFilteredResumes = useMemo(
    () =>
      filteredResumes?.map((item: Resume) => {
        if (!item) return null;
        return (
          <li key={item.id}>
            <Card className="cursor-pointer flex-1  text-center hover:ease-in-out hover:scale-105 transition-all duration-300  hover:animate-fade-in ">
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
                  disabled={isPending}
                  variant="destructive"
                  onClick={() => handleDelete(item.id)}
                >
                  <TrashIcon className="size-4" />
                  {isPending ? <LoadingSpinner /> : "Delete"}
                </Button>
              </CardFooter>
            </Card>
          </li>
        );
      }),
    [filteredResumes, handleDelete, isPending]
  );
  if (displayFilteredResumes.length === 0) return <div className="text-center text-2xl font-bold">No resumes found</div>;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[calc(90vh-200px)] overflow-y-auto p-1 md:p-5">
      <AddResume />
      {displayFilteredResumes}
    </ul>
  );
};
export default ResumeList;
