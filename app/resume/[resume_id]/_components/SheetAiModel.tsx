"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/shared/ui/sheet";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import aiHelperIcon from "@/public/ai-helper-icon.png";
import { Textarea } from "@/app/components/shared/ui/textarea";
import { Button } from "@/app/components/shared/ui/button";
import useGenerateContentAi from "../_hooks/useGenerateContentAi";
import prompts from "./prompts";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { useResumeContext } from "@/app/context/ResumeContext";
import { Label } from "@/app/components/shared/ui/Label";

type Props = {
  watch: any;
  setValue: any;
};
const SheetAiModel = ({ watch, setValue }: Props) => {
  const { generate, isGenerated, data: Response, isSuccess } = useGenerateContentAi();
  const { steps } = useResumeContext();
  const [contentTypes, setContentTypes] = useState("");
  const [content, setContent] = useState<string>("");

  const summary = watch("summary");
  const projectDetails = watch("projectDetails");

  useEffect(() => {
    if (isSuccess) {
      setContent(Response || "");
    } else {
      setContent(summary || projectDetails);
    }
  }, [Response, isSuccess, summary, projectDetails]);

  useEffect(() => {
    if (steps === 1) {
      setContentTypes("summary");
    } else if (steps === 4) {
      setContentTypes("projectDetails");
    }
  }, [steps]);

  // this render the title and description based on the content type
  const getSheetTitle = () => {
    switch (contentTypes) {
      case summary:
        return "Generate an Optimized Summary";
      case projectDetails:
        return "Improve Your Work Experience";

      default:
        return "AI Content Improvement";
    }
  };

  // this render the description based on the content type
  const getSheetDescription = () => {
    switch (contentTypes) {
      case "summary":
        return "We will use AI to create a professional summary tailored to the job description you provided. This helps highlight your relevant skills and improve your chances with recruiters and applicant tracking systems (ATS).";
      case "projectDetails":
        return "We will use AI to enhance your work experience details to better match the job requirements and improve your resume's effectiveness.";
      default:
        return "We will use AI to improve your content based on the job description you provide.";
    }
  };
  const jobDescription = localStorage.getItem("jobDescription") || "";

  const handleImproveWithAI = async () => {
    try {
      // Get job description from localStorage

      const promptTemplate = prompts[contentTypes as keyof typeof prompts];

      if (!promptTemplate) {
        console.error("No prompt template found for content type:", contentTypes);
        return;
      }

      // Replace placeholders in the prompt template
      const filledPrompt = promptTemplate.replace("{text}", content).replace("{jobDescription}", jobDescription);

      // Send the prompt to the AI API
      await generate(filledPrompt);
    } catch (error) {
      console.error("Error generating AI content:", error);
    }
  };
  return (
    <>
      {steps === 0 ? null : (
        <Sheet>
          <SheetTrigger className="absolute" asChild>
            <Image src={aiHelperIcon} width={80} height={50} alt="quote" className=" right-0 -top-7 z-0 transition-all  group-hover:-top-5 group-hover:z-20 cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="  ">
            <SheetHeader className="">
              <SheetTitle>{getSheetTitle()}</SheetTitle>
              <SheetDescription>{getSheetDescription()}</SheetDescription>

              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-sm font-medium">
                    Your Content:
                  </Label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    id="content"
                    placeholder={`Type your ${contentTypes === "summary" ? "summary" : contentTypes === "projectDetails" ? "projectDetails" : "skills"} here`}
                    className="min-h-[200px] "
                  />
                </div>

                <p className="text-sm text-gray-500 italic">Using job description from your profile to optimize content.</p>

                <Button onClick={handleImproveWithAI} disabled={isGenerated} className="w-full">
                  {isGenerated ? <LoadingSpinner /> : "Improve with AI"}
                </Button>
                <Button onClick={() => setValue(contentTypes, content)} className="w-full mt-2">
                  Apply to Resume
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default SheetAiModel;
