"use client";

import React, { useEffect, useState } from "react";

import useGenerateContentAi from "../../_hooks/useGenerateContentAi";
import FormActionsProvider from "@/app/context/FormActionsContext";
import { JobDescriptionLabel } from "./labelName/labelName";
import Form from "@/app/components/shared/ui/Form";
import { useResumeContext } from "@/app/context/ResumeContext";
const prompt = `
You are an expert in resume optimization for ATS (Applicant Tracking System).

Your task:
1. Analyze the job description provided.
2. Extract only the most important **hard skills** and **keywords**.
3. Categorize them into exactly 3 arrays inside an object:
   - "hard": Technical or advanced skills (e.g., programming languages, tools, certifications).
   - "mid": Intermediate-level skills that are important but not highly specialized.
   - "easy": Basic or soft skills expected in most roles.

Output:
Return ONLY a valid **raw JavaScript object** in the format below — no formatting, no code blocks, no Markdown, no titles, no explanations.

{
  "hard": [],
  "mid": [],
  "easy": []
}

Job Description:
"""
{jobDescription}
"""
`;
const JobDescription = () => {
  const [jobDescription, setJobDescription] = useState<string>("");
  const { generate, isGenerated, data: Response, isSuccess } = useGenerateContentAi();
  const { handelIncrement } = useResumeContext();
  useEffect(() => {
    if (isSuccess && jobDescription !== "") {
      localStorage.setItem("jobDescription", jobDescription);
      if (typeof Response === "string") {
        localStorage.setItem("keyWords", Response);
      }
    }
  }, [Response, isSuccess, jobDescription]);

  useEffect(() => {
    if (isSuccess && jobDescription !== "") {
      localStorage.setItem("jobDescription", jobDescription);

      localStorage.setItem("keyWords", Response || "");
      handelIncrement();
    }
  }, [Response, isSuccess]);
  const createAction = (data: any) => {
    const jobDescription = data?.jobDescription || "";

    if (!jobDescription) return;

    const clearText = jobDescription?.replace(/\s+/g, " ").trim();
    setJobDescription(clearText);

    if (clearText !== "") {
      generate(prompt.replace("{jobDescription}", clearText));
    }
  };

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider createActions={createAction} ListType={"JobDescription"} isPending={isGenerated} jobDescription={jobDescription}>
        <Form labelName={JobDescriptionLabel} title={"JobDescription"} className="w-full" showList={false} showEditButton={false} />
      </FormActionsProvider>
    </div>
  );
};

export default JobDescription;
