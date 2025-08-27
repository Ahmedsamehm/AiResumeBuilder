"use client";

import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

type ResumeContextType = {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  handelIncrement: () => void;
  handelDecrement: () => void;
  reactToPrintFn: () => void;
  contentRef: React.RefObject<null>;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error("useResumeContext must be used within ResumeContextProvider");
  return context;
};

export const ResumeContextProvider = ({ children }: { children: ReactNode }) => {
  const [steps, setSteps] = useState<number>(0);
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const handelIncrement = () => setSteps(steps + 1);
  const handelDecrement = () => setSteps(steps - 1);

  const value = {
    steps,
    setSteps,
    handelIncrement,
    handelDecrement,
    reactToPrintFn,
    contentRef,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};

