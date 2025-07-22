"use client";

import { Button } from "@/app/components/shared/ui/button";
import Link from "next/link";
import React from "react";

import Search from "./Search";

import ResumeList from "./ResumeList";
import useResumes from "../_hooks/useGetData";

import Loading from "../loading";
import { DashBoardProvider } from "@/app/context/DashBoardProvider";

const ResumeClient = () => {
  const { Resumes, isPending, isError } = useResumes();
  return (
    <>
      <div className="flex justify-between ">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2 ">My Resumes</h1>
          <p className="text-muted-foreground text-lg ">Manage and create professional resumes with ease</p>
        </div>
        <Link href="/">
          <Button>Back</Button>
        </Link>
      </div>
      <DashBoardProvider initialResumes={Resumes}>
        {isPending ? (
          <Loading />
        ) : (
          <>
            <Search />

            <ResumeList />
          </>
        )}
      </DashBoardProvider>
    </>
  );
};

export default ResumeClient;
