import { create } from "zustand";
import { PersonalInfoResponse, PersonalInfoValues } from "../PersonalInfo/personalInfoSchema";
import { EducationValues } from "../Education/educationSchema";
import { ExperienceValues } from "../Experience/experienceSchema";
import { SkillsValues } from "../Skills/skillsSchema";
import { ProjectsValues } from "../Projects/projectsSchema";
import { DummyResume } from "../_constants/DummyResume";

interface ResumeStore {
  personalInfo: PersonalInfoValues | null;
  education: EducationValues | null;
  experience: ExperienceValues | null;
  skills: SkillsValues | null;
  projects: ProjectsValues | null;
  // Actions
  setPersonalInfo: (data: PersonalInfoValues) => void;
  setEducation: (data: EducationValues) => void;
  setExperience: (data: ExperienceValues) => void;
  setSkills: (data: SkillsValues) => void;
  setProjects: (data: ProjectsValues) => void;
  updatePersonalInfoLive: (data: Partial<PersonalInfoValues>) => void;
  // Hydrate from API (call on page load)
  hydrateFromApi: (data: Partial<ResumeStore>) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  personalInfo: DummyResume.personalInfo,
  education: DummyResume.education,
  experience: DummyResume.experience,
  skills: DummyResume.skills,
  projects: DummyResume.projects,

  setPersonalInfo: (data) => set({ personalInfo: data }),
  updatePersonalInfoLive: (data) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo!, ...data },
    })),
  setEducation: (data) => set({ education: data }),
  setExperience: (data) => set({ experience: data }),
  setSkills: (data) => set({ skills: data }),
  setProjects: (data) => set({ projects: data }),

  hydrateFromApi: (data) => set(data),
}));
