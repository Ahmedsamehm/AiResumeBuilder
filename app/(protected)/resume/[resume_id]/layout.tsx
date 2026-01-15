import { ResumeContextProvider } from "@/app/context/ResumeContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <ResumeContextProvider>{children}</ResumeContextProvider>;
};

export default layout;
