"use client";

import React from "react";
import { workExperienceType } from "../../_types/types";

const WorkExperience = ({ workExperienceData }: { workExperienceData: any }) => {
  if (!workExperienceData) return;

  return (
    <section className="text-black">
      <h2 className="text-xl font-semibold border-b mb-2">Work Experience</h2>

      {workExperienceData.map((experience: workExperienceType) => {
        return (
          <div key={experience.id} className="mb-4">
            <div className="flex justify-between  ">
              <ul className="flex gap-1 text-black text-sm">
                <li>{experience.jobTitle}</li>
                <li> {experience.company}</li>
                <li>{experience.location}</li>
              </ul>
              <p className="text-black text-base font-medium tracking-tighter align-middle">
                <span className="font-medium">{experience.duration}</span>
              </p>
            </div>
            <p className="text-black text-base font-medium tracking-tighter align-middle mt-1">{experience.projectDetails}</p>
          </div>
        );
      })}
    </section>
  );
};

export default WorkExperience;
