"use client";

import React from "react";
import { workExperienceType } from "../../_types/types";

const WorkExperience = ({ workExperienceData }: { workExperienceData: any }) => {
  if (!workExperienceData) return;

  return (
    <section className="text-gray-800">
      {/* Section Header */}
      <h2 className="text-base font-semibold uppercase border-b border-gray-500 pb-0.5 mb-3 text-gray-900 tracking-wider">Projects</h2>

      {workExperienceData.map((experience: workExperienceType) => (
        <div key={experience.id} className="mb-4">
          {/* Project Title, GitHub, Tech Stack, Year - All in One Line */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-800">{experience.projectTitle}</h3>
              <p className="text-sm text-gray-700">
                <a href={experience.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 pr-1">
                  github
                </a>
                | ({experience.technologiesUsed})
              </p>
            </div>
            <span className="text-sm text-gray-700 whitespace-nowrap">{experience.duration}</span>
          </div>

          {/* Project Details as Bullet Points */}
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-900">
            {experience.projectDetails.split("\n").map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              return (
                <li key={idx} className="whitespace-pre-wrap max-w-full break-words">
                  {trimmed.endsWith(".") ? trimmed : trimmed + "."}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
