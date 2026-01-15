import { Resume } from "@/app/types/dashboard.type";
import { create } from "zustand";

interface DashboardStore {
  resumes: Resume[];
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  setResumes: (resumes: Resume[]) => void;
  // Add computed filtered resumes
  filteredResumes: Resume[];
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
