"use client";
import React from "react";
import PersonalInfo from "./PersonalInfo";

import Education from "./Education";
import Skills from "./Skills";
import { useGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { useResumeContext } from "@/app/context/ResumeContext";
import { personalInformationType, ProjectsType, eductionType, skillsType } from "../../_types/types";
import Projects from "./Projects";
import Experience from "./Experience";

const PreviewSection = () => {
  const { fetchedData: personalInfoData, isDataFetched } = useGenericQuery<personalInformationType[]>("PersonalInformation");
  const { fetchedData: ProjectsData } = useGenericQuery<ProjectsType[]>("Projects");
  const { fetchedData: educationData } = useGenericQuery<eductionType[]>("Education");
  const { fetchedData: skillsData } = useGenericQuery<skillsType>("Skills");
  const { fetchedData: experienceData } = useGenericQuery<ProjectsType[]>("Experience");
  const { contentRef } = useResumeContext();
  if (isDataFetched || !personalInfoData) return <LoadingSpinner />;
  return (
    <section ref={contentRef} className=" min-h-full   mx-auto  bg-white  rounded-sm  text-secondary   p-3 space-y-3">
      <PersonalInfo personalInfoData={personalInfoData} />
      {experienceData && experienceData.length > 0 && <Experience experienceData={experienceData} />}
      <Education educationData={educationData} />
      <Projects ProjectsData={ProjectsData} />
      <Skills skillsData={skillsData} />
    </section>
  );
};

export default PreviewSection;
