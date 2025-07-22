"use client";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import { useGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { useResumeContext } from "@/app/context/ResumeContext";
import { personalInformationType, workExperienceType, eductionType, skillsType } from "../../_types/types";

const PreviewSection = () => {
  const { fetchedData: personalInfoData, isDataFetched } = useGenericQuery<personalInformationType[]>("PersonalInformation");
  const { fetchedData: workExperienceData } = useGenericQuery<workExperienceType[]>("Experience");
  const { fetchedData: educationData } = useGenericQuery<eductionType[]>("Education");
  const { fetchedData: skillsData } = useGenericQuery<skillsType[]>("Skills");
  const { contentRef } = useResumeContext();
  if (isDataFetched || !personalInfoData) return <LoadingSpinner />;
  return (
    <section ref={contentRef} className=" min-h-full  mx-auto  bg-white  rounded-sm  text-secondary capitalize  p-3 space-y-3">
      <PersonalInfo personalInfoData={personalInfoData} />
      <hr className=" bg-gray-400 size-full " />
      <WorkExperience workExperienceData={workExperienceData} />
      <hr className=" bg-gray-400 size-full " />
      <Education educationData={educationData} />
      <hr className=" bg-gray-400 size-full " />
      <Skills skillsData={skillsData} />
    </section>
  );
};

export default PreviewSection;
