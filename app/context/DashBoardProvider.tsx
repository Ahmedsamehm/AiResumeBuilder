"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Resume } from "../types/dashboard.type";

type DashBoardContextType = {
  resumes: Resume[];
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>;
  filteredResumes: Resume[];
  setFilteredResumes: React.Dispatch<React.SetStateAction<Resume[]>>;
};

const DashBoardContext = createContext<DashBoardContextType | undefined>(undefined);

export const useDashBoardContext = () => {
  const context = useContext(DashBoardContext);
  if (!context) throw new Error("useDashBoardContext must be used within DashBoardProvider");
  return context;
};

export const DashBoardProvider = ({ children, initialResumes = [] }: { children?: ReactNode; initialResumes?: Resume[] }) => {
  const [resumes, setResumes] = useState<Resume[]>(initialResumes);
  const [filteredResumes, setFilteredResumes] = useState<Resume[]>(initialResumes);

  useEffect(() => {
    setResumes(initialResumes);
    setFilteredResumes(initialResumes);
  }, [initialResumes]);

  const value = { resumes, setResumes, filteredResumes, setFilteredResumes };

  return <DashBoardContext.Provider value={value}>{children}</DashBoardContext.Provider>;
};
