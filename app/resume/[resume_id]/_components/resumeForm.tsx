"use client";

import React from "react";

import { useResumeContext } from "@/app/context/ResumeContext";
import PersonalInfoForm from "./PersonalInfo/PersonalInfoForm";
import SkillsForm from "./Skills/SkillsForm";
import EducationForm from "./Education/EducationForm";

import JobDescriptionForm from "./JobDescription/JobDescriptionForm";
import ExperienceForm from "./Experience/ExperienceForm";
import ProjectsForm from "./Projects/ProjectsForm";

const ResumeForm = () => {
  const { steps } = useResumeContext();

  const renderStep = () => {
    switch (steps) {
      case 0:
        return <JobDescriptionForm />;
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <EducationForm />;
      case 3:
        return <ExperienceForm />;
      case 4:
        return <ProjectsForm />;
      case 5:
        return <SkillsForm />;
      default:
        return null;
    }
  };
  return <div className="bg-accent  min-h-[90vh] rounded-sm  ">{renderStep()}</div>;
};

export default ResumeForm;
