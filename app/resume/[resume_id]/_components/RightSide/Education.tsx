import React from "react";

const Education = ({ educationData }: any) => {
  if (!educationData) return;

  if (educationData.length === 0) return <p className="text-gray-500 text-sm italic">No education added yet.</p>;
  return (
    <section className="text-black">
      <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
      <h3 className="font-medium">{educationData[0].university || "Cairo University"}</h3>
      <div className="flex justify-between">
        <h3 className="font-medium">{educationData[0].degree || "Bachelor"}</h3>
        <span className="font-medium">{educationData[0].graduationyear || "2020"}</span>
      </div>
      <span>{educationData[0].location}</span>
    </section>
  );
};

export default Education;
