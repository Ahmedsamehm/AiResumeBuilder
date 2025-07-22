import React from "react";

const Skills = ({ skillsData }: any) => {
  if (!skillsData) return;

  return (
    <section className="text-black">
      <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>

      {skillsData?.length === 0 && <p className="text-gray-500 text-sm italic">No skills added yet.</p>}

      <ul className="grid grid-cols-2">
        {skillsData?.map((item: any) => (
          <li key={item.id} className="text-black text-base font-medium tracking-tighter align-middle mt-1">
            {item.skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
