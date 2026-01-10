"use client";

import React, { useEffect, useState } from "react";

import useGenerateContentAi from "../../_hooks/useGenerateContentAi";
import FormActionsProvider from "@/app/context/FormActionsContext";
import { JobDescriptionLabel } from "./JobDescription.config";
import Form from "@/app/components/shared/ui/Form";
import { useResumeContext } from "@/app/context/ResumeContext";

const prompt = `
You are an expert in resume optimization for ATS (Applicant Tracking System).

Your task:
1. Analyze the job description provided.
2. Extract only the most important programming languages, frameworks, and technologies.
3. Categorize them into exactly 3 arrays inside an object:
   - "programmingLanguages": Languages like JavaScript, Python, Java, C#, etc.
   - "frameworks": Libraries and frameworks like React.js, Angular, Django, .NET, etc.
   - "technologies": Tools, platforms, and services like Docker, AWS, Git, SQL, etc.

Output:
Return ONLY a valid **raw JavaScript object** in the format below — no formatting, no code blocks, no Markdown, no titles, no explanations.

{
  "programmingLanguages": [],
  "frameworks": [],
  "technologies": []
}

Job Description:
"""
{jobDescription}
"""
`;

const JobDescriptionForm = () => {
  const [jobDescription, setJobDescription] = useState<string>("");
  const { generate, isGenerated, data: Response, isSuccess } = useGenerateContentAi();
  const { handelIncrement } = useResumeContext();

  useEffect(() => {
    if (isSuccess && jobDescription) {
      localStorage.setItem("jobDescription", jobDescription);

      localStorage.setItem("keyWords", Response || "");
      handelIncrement();
    }
  }, [Response, isSuccess, jobDescription]);
  const createAction = ({ formData }: any) => {
    const clearText = formData.jobDescription?.replace(/\s+/g, " ").trim();

    setJobDescription(clearText);

    generate(prompt.replace("{jobDescription}", clearText));
  };

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider createActions={createAction} ListType={"JobDescription"} isPending={isGenerated}>
        <Form labelName={JobDescriptionLabel} title={"JobDescription"} className="w-full" showList={false} showEditButton={false} />
      </FormActionsProvider>
    </div>
  );
};

export default JobDescriptionForm;
