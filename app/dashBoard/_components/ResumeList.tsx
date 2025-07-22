import React from "react";

import { Card, CardFooter, CardDescription, CardHeader, CardTitle } from "@/app/components/shared/ui/card";
import { Button } from "@/app/components/shared/ui/button";

import AddResume from "./AddResume";
import useDeleteResume from "../_hooks/useDeleteResume";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import Link from "next/link";
import { useDashBoardContext } from "@/app/context/DashBoardProvider";
const ResumeList = () => {
  const { filteredResumes } = useDashBoardContext();
  const { DeleteResumeCard, isPending } = useDeleteResume();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[calc(90vh-200px)] overflow-y-auto p-1 md:p-5">
      <AddResume />
      {filteredResumes.map((item) => {
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
                  variant="destructive"
                  onClick={() => {
                    DeleteResumeCard(item.id);
                  }}
                  disabled={isPending}
                >
                  {isPending ? <LoadingSpinner /> : "Delete"}
                </Button>
              </CardFooter>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default ResumeList;
