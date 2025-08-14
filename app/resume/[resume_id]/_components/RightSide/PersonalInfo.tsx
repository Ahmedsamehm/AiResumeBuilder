"use client";

import React from "react";

const PersonalInfo = ({ personalInfoData }: { personalInfoData: any }) => {
  if (!personalInfoData) return;

  const { fullName, position, email, phone, address, linkedIn, summary , github, portfolio }  = personalInfoData[0] || {};

  console.log(github);
  
  return (
    <>
      <section className="text-gray-800 space-y-4">
        {/* Header */}
        <header className="text-center">
          {/* Name */}
          <h1 className="text-2xl font-bold text-gray-900 tracking-wide">{fullName || "john Doe"}</h1>

          {/* Contact Info - Single Line for Desktop, Stacked on Mobile */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 text-sm mt-1 text-gray-700">
            <span>{address || "Cairo, Egypt"}</span>
            <span className="hidden sm:inline-block">|</span>
            <span>(+20) {phone || "12546"}</span>
            <span className="hidden sm:inline-block">|</span>
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {email || "support@gmail.com"}
            </a>

            <span className="hidden sm:inline-block">|</span>
            <a href={linkedIn || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <span>|</span>
            <a href={github || "https://github.com"} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Github
            </a>
            <span>|</span>
            <a href={portfolio || ""} target="_blank" rel="noopener noreferrer" className="hover:underline">
              portfolio
            </a>
          </div>
        </header>

        {/* Section Divider */}

        {/* Summary */}
        <div>
          <h2 className="text-base font-semibold uppercase border-b border-gray-500 pb-0.5 mb-2 text-gray-900 tracking-wider">Summary</h2>
          <p className="text-gray-800 leading-relaxed text-sm">{summary || "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."}</p>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
