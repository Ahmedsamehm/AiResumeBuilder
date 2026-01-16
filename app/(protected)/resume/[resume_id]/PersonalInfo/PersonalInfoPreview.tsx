"use client";

import { useResumeStore } from "../_store/useResumeStore";

const PersonalInfoPreview = () => {
  const personalInfo = useResumeStore((s) => s.personalInfo);

  if (!personalInfo) return <div>No personal info added yet.</div>;
  return (
    <section className="text-gray-800 space-y-4 print:break-inside-avoid ">
      {/* Header */}
      <header className="text-center">
        {/* Name */}
        <h1 className="text-2xl font-bold text-gray-900 tracking-wide">{personalInfo.fullName}</h1>

        {/* Contact Info - Single Line for Desktop, Stacked on Mobile */}
        <div className="flex flex-wrap justify-center items-center gap-x-2 text-sm mt-1 text-gray-700">
          <span>{personalInfo.address}</span>
          <span className="hidden sm:inline-block">|</span>
          <span>(+20) {personalInfo.phone}</span>
          <span className="hidden sm:inline-block">|</span>
          <span>{personalInfo.position}</span>
          <span className="hidden sm:inline-block">|</span>
          <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {personalInfo.email}
          </a>

          <span className="hidden sm:inline-block">|</span>
          <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>

          {personalInfo.github && (
            <>
              <span>|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Github
              </a>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span>|</span>
              <a href={personalInfo.portfolio || ""} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Portfolio
              </a>
            </>
          )}
        </div>
      </header>

      {/* Section Divider */}

      {/* Summary */}
      <div>
        <h2 className="text-base font-semibold uppercase border-b border-gray-500 pb-0.5 mb-2 text-gray-900 tracking-wider">Summary</h2>
        <p className="text-gray-800 leading-relaxed text-sm capitalize">
          {personalInfo.summary || "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."}
        </p>
      </div>
    </section>
  );
};

export default PersonalInfoPreview;
