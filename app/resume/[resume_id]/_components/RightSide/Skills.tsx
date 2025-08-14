import React from "react";
import { skillsType } from "../../_types/types";

type props = {
  skillsData: skillsType[] | undefined;
};
const Skills = ({ skillsData }: props) => {
  if (!skillsData) return;

  const programmingLanguages = skillsData.map((skill: skillsType) => skill.programmingLanguages);
  const frameworksTools = skillsData.map((skill: skillsType) => skill.frameworksTools);
  const technologies = skillsData.map((skill: skillsType) => skill.technologies);
  return (
    <section className="text-gray-800">
      <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>

      <div className="mb-2 ">
        <p className="text-md">
          {<span className="font-semibold">programmingLanguages:</span>} {programmingLanguages}
        </p>

        <p className="text-md">
          {<span className="font-semibold">frameworksTools:</span>} {frameworksTools}
        </p>
        <p className="text-md">
          {<span className="font-semibold">technologies:</span>} {technologies}
        </p>
      </div>
    </section>
  );
};

export default Skills;
