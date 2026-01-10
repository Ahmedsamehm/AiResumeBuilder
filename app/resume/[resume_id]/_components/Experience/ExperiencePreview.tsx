import React from "react";

const ExperiencePreview = ({ experienceData }: { experienceData: any }) => {
  return (
    <section className="print:break-inside-avoid mt-6">
      <h2 className="text-xl font-bold border-b border-gray-500 pb-1 uppercase tracking-wider text-gray-800">Experience</h2>

      {/* Job Item */}

      {experienceData.map((experience: any) => {
        return (
          <div key={experience.id} className="mt-4 print:mt-2 text-gray-800">
            <div className="flex  justify-between md:items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{experience.company}</h3>
                <p className="text-sm text-gray-700 italic">{experience.title}</p>
              </div>
              <div className="text-right mt-1 md:mt-0">
                <p className="text-sm font-medium text-gray-700">
                  {experience.start_date} – {experience.end_date}
                </p>
                <p className="text-xs text-gray-500"> {experience.location}</p>
              </div>
            </div>

            <ul className="mt-3 space-y-1 list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>{experience.description}</li>
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default ExperiencePreview;
