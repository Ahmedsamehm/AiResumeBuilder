"use client";

import React from "react";

const PersonalInfo = ({ personalInfoData }: { personalInfoData: any }) => {
  if (!personalInfoData) return;

  const { fullName, position, email, phone, address, linkedIn, summary } = personalInfoData[0] || {};

  return (
    <>
      <section className="text-black capitalize space-y-3">
        <header className="  mx-auto text-xs  ">
          <div className="flex justify-center flex-col text-center  ">
            <h1 className="capitalize text-sm  ">{fullName || "John Doe"}</h1>
            <span>{position || "Software Engineer"}</span>
          </div>
          <ul className="grid grid-cols-3  text-center items-center ">
            <li className="justify-self-start">{email || "johndoe@example.com"}</li>
            <li className="flex flex-col">
              <span className="">
                (+20)
                {phone || "0123456789"}
              </span>
              <span className="">{address || "Cairo, Egypt"}</span>
            </li>
            <li className="flex flex-col">
              <a className="text-chart-1" href={`${linkedIn || "https://www.linkedin.com/"}`} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </header>
        <hr className=" bg-gray-400 size-full" />
        <div className="">
          <h2 className="text-xl font-semibold  mb-2">Summary</h2>
          <p className="text-black text-base font-medium tracking-tighter align-middle">
            {summary || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non nam tenetur molestiae doloribus laboriosam placeat nemo! In, perspiciatis rerum?"}
          </p>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
