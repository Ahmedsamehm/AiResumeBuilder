import React from "react";

const Education = ({ educationData }: any) => {
  if (!educationData) return;

  if (educationData.length === 0) return <p className="text-gray-500 text-sm italic">No education added yet.</p>;
  return (
    <section className="text-gray-800 space-y-4">
      {/* Section Header */}
      <h2 className="text-lg font-semibold uppercase border-b border-gray-500 pb-0.5 mb-2 text-gray-900 tracking-wider">Education</h2>

      {/* Education Details */}
      <div>
        {/* University Name */}
        <h3 className="font-medium text-lg">{educationData[0].university || "Cairo University"}</h3>

        {/* Degree and Graduation Year (Right-aligned) */}
        <div className="flex justify-between items-center">
          <span className="font-medium">{educationData[0].degree || "B.S. Computer Science"}</span>
          <span className="text-gray-700">{educationData[0].graduationyear || "2023"}</span>
        </div>

        {/* diploma */}
        <p className="text-sm mt-1">
          <span className="font-medium ">Diploma</span>: {educationData[0].diploma || "diploma name like this Diploma in Front-End Development (react/next.js) - componyName"}
          <a className="ml-1" target="_blank" href={educationData[0].diplomaLink || "#"}>
            (<span className="underline hover:text-blue-600">Link</span>)
          </a>
        </p>
        {/* Transcript Link */}
        {/* <p className="text-sm mt-1">
          <a href={educationData[0].transcriptLink || "#"} className="underline hover:text-blue-600">
            Transcript Link
          </a>
        </p> */}

        {/* Coursework */}
        {/* <p className="mt-2  text-sm leading-relaxed">
          <span className="font-medium "> Coursework</span>: dataBase,c++,system design.
        </p> */}
      </div>
    </section>
  );
};

export default Education;
