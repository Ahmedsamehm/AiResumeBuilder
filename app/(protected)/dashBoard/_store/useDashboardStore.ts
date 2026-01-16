import { create } from "zustand";
import { ResumeResponse } from "../Schema/dashBoardSchema";

interface DashboardStore {
  resumes: ResumeResponse[];
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  setResumes: (resumes: ResumeResponse[]) => void;
  // Add computed filtered resumes
  filteredResumes: ResumeResponse[];
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  resumes: [],
  searchQuery: "",
  setSearchQuery: (searchQuery) => {
    set({ searchQuery });
    //  Auto-update filtered resumes when search changes
    const { resumes } = get();
    const filtered = searchQuery.trim() ? resumes.filter((resume) => resume.title.toLowerCase().includes(searchQuery.toLowerCase())) : resumes;
    set({ filteredResumes: filtered });
  },
  setResumes: (resumes) => {
    set({ resumes });
    //  Auto-update filtered resumes when resumes change
    const { searchQuery } = get();
    const filtered = searchQuery.trim() ? resumes.filter((resume) => resume.title.toLowerCase().includes(searchQuery.toLowerCase())) : resumes;
    set({ filteredResumes: filtered });
  },
  filteredResumes: [],
}));
