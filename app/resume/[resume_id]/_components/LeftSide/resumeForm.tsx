"use client";

import React from "react";

import { useResumeContext } from "@/app/context/ResumeContext";
import PersonalInformation from "./personalInformation";
import Skills from "./skills";
import Education from "./education";
import WorkExperience from "./workExperience";
import JobDescription from "./JobDescription";

const ResumeForm = () => {
  const { steps } = useResumeContext();

  const renderStep = () => {
    switch (steps) {
      case 0:
        return <JobDescription />;
      case 1:
        return <PersonalInformation />;
      case 2:
        return <Education />;
      case 3:
        return <WorkExperience />;
      case 4:
        return <Skills />;
      default:
        return null;
    }
  };
  return <div className="bg-accent  min-h-[90vh] rounded-sm  ">{renderStep()}</div>;
};

export default ResumeForm;
