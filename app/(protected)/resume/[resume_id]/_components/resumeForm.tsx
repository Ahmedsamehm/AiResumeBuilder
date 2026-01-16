"use client";
import PersonalInfoForm from "../PersonalInfo/PersonalInfoForm";
import SkillsForm from "../Skills/SkillsForm";
import EducationForm from "../Education/EducationForm";

import JobDescriptionForm from "../JobDescription/JobDescriptionForm";
import ExperienceForm from "../Experience/ExperienceForm";
import ProjectsForm from "../Projects/ProjectsForm";
import { useStepsStore } from "../_store/useStepsStore";

const ResumeForm = () => {
  const steps = useStepsStore((s) => s.steps);

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
  return <div className="bg-accent  min-h-[90dvh] rounded-sm  ">{renderStep()}</div>;
};

export default ResumeForm;
