"use client";

import React from "react";

import { useResumeContext } from "@/app/context/ResumeContext";
import PersonalInformation from "./personalInformation";
import Skills from "./skills";
import Education from "./education";

import JobDescription from "./JobDescription";
import Experience from "./Experience";
import Projects from "./Projects";

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
        return <Experience />;
      case 4:
        return <Projects />;
      case 5:
        return <Skills />;
      default:
        return null;
    }
  };
  return <div className="bg-accent  min-h-[90vh] rounded-sm  ">{renderStep()}</div>;
};

export default ResumeForm;
