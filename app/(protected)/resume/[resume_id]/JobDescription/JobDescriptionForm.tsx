"use client";

import React, { useEffect, useState } from "react";

// import useGenerateContentAi from "../_hooks/useGenerateContentAi";
import { JobDescriptionLabel } from "./jobDescription.config";

import { useResumeContext } from "@/app/context/ResumeContext";
import { ReusableForm } from "@/app/components/shared/ReusableForm";
import { jobDescriptionBaseSchema, JobDescriptionValues } from "./jobDescriptionSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepsController from "@/app/components/shared/StepsController";

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
  // const { generate, isGenerated, data: Response, isSuccess } = useGenerateContentAi();
  const { handelIncrement } = useResumeContext();

  const form = useForm<JobDescriptionValues>({
    resolver: zodResolver(jobDescriptionBaseSchema),
    mode: "onBlur",
  });

  // useEffect(() => {
  //   if (isSuccess && jobDescription) {
  //     localStorage.setItem("jobDescription", jobDescription);
  //     localStorage.setItem("keyWords", Response || "");
  //     handelIncrement();
  //   }
  // }, [Response, isSuccess, jobDescription, handelIncrement]);

  const onSubmit = (formData: JobDescriptionValues) => {
    const clearText = formData.jobDescription?.replace(/\s+/g, " ").trim();
    setJobDescription(clearText);
    // generate(prompt.replace("{jobDescription}", clearText));
  };

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <StepsController />
      <ReusableForm form={form} inputs={JobDescriptionLabel} isPending={false} onSubmit={onSubmit} buttonText="Submit" />
    </div>
  );
};

export default JobDescriptionForm;
