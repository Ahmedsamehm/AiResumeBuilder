"use client";

import Education from "../Education/EducationPreview";
import SkillsPreview from "../Skills/SkillsPreview";

import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { useResumeContext } from "@/app/context/ResumeContext";
// import { personalInformationType, ProjectsType, eductionType, skillsType } from "@/app/types/resumeInput.type";
import ProjectsPreview from "../Projects/ProjectsPreview";
import ExperiencePreview from "../Experience/ExperiencePreview";
import PersonalInfoPreview from "../PersonalInfo/PersonalInfoPreview";

const PreviewSection = () => {
  // const { fetchedData: personalInfoData, isDataFetched } = useGenericQuery<personalInformationType[]>("PersonalInformation");
  // const { fetchedData: ProjectsData } = useGenericQuery<ProjectsType[]>("Projects");
  // const { fetchedData: educationData } = useGenericQuery<eductionType[]>("Education");
  // const { fetchedData: skillsData } = useGenericQuery<skillsType>("Skills");
  // const { fetchedData: experienceData } = useGenericQuery<ProjectsType[]>("Experience");
  const { contentRef } = useResumeContext();

  // if (isDataFetched || !personalInfoData) return <LoadingSpinner />;
  return (
    <section ref={contentRef} className=" min-h-full   mx-auto  bg-white  rounded-sm  text-secondary   px-4 space-y-2">
      <PersonalInfoPreview />
      {/* <PersonalInfoPreview personalInfoData={personalInfoData} />
      {experienceData && experienceData.length > 0 && <ExperiencePreview experienceData={experienceData} />}
      <Education educationData={educationData} />
      <ProjectsPreview ProjectsData={ProjectsData} />
      <SkillsPreview skillsData={skillsData} /> */}
    </section>
  );
};

export default PreviewSection;
