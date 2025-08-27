import React from "react";
import { skillsType } from "../../_types/types";

type props = {
  skillsData: skillsType[] | undefined;
};
const Skills = ({ skillsData }: props) => {
  if (!skillsData) return;

  const programmingLanguages = skillsData.map((skill: skillsType) => skill.programmingLanguages).join(" , ");
  const frameworksTools = skillsData.map((skill: skillsType) => skill.frameworksTools).join(" , ");
  const technologies = skillsData.map((skill: skillsType) => skill.technologies).join(" , ");

  return (
    <section className="text-gray-800 print:break-inside-avoid">
      <h2 className="text-xl font-semibold border-b mb-2 border-gray-500">Skills</h2>

      <div className="mb-2 capitalize">
        <p className="text-md">
          <span className="font-semibold">programming Languages:</span> {programmingLanguages}
        </p>

        <p className="text-md">
          <span className="font-semibold">frameworks Tools:</span> {frameworksTools}
        </p>
        <p className="text-md">
          <span className="font-semibold">technologies:</span> {technologies}
        </p>
      </div>
    </section>
  );
};

export default Skills;
