"use client";

import { Button } from "@/app/components/shared/ui/button";
import Link from "next/link";

import Search from "./Search";

import ResumeList from "./ResumeList";
import useDashboard from "../_hooks/useDashboard";

import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { useDashboardStore } from "../_store/useDashboardStore";
import { Suspense, useEffect } from "react";

const ResumeClient = () => {
  const setResumes = useDashboardStore((state) => state.setResumes);
  const { fetchedData: Resumes, isDataFetched: isPending, error: isError } = useDashboard();
  useEffect(() => {
    setResumes(Resumes ?? []);
  }, [Resumes, setResumes]);
  if (isError) return <div className="text-center text-2xl font-bold">Error fetching resumes</div>;

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

      <Search />
      <Suspense key={Resumes?.length ?? 0} fallback={<LoadingSpinner />}>
        {isPending ? <LoadingSpinner /> : <ResumeList />}
      </Suspense>
    </>
  );
};

export default ResumeClient;
