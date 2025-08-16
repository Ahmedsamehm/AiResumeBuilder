export interface personalInformationType {
  id: number;
  fullName: string;
  position: string;
  phone: string;
  email: string;
  address: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  summary: string;
  required: boolean;
}

export type PersonalInfoArr = personalInformationType[];

export interface eductionType {
  university: string;
  degree: string;
  graduationyear: string;
  location: string;
  diploma: string;
  diplomaLink: string;
}

export type ExperienceType = {
  id: number;
  title: string | null;
  company: string | null;
  location: string | null;
  start_date: string | null;
  end_date: string | null;
  description: string | null;
};
export interface ProjectsType {
  id: number;
  projectTitle: string;
  company: string;
  technologiesUsed: string;
  projectDetails: string;
  duration: string;
  github: string;
}

export interface skillsType {
  programmingLanguages: string;
  frameworksTools: string;
  technologies: string;
}
export type skillList = skillsType[];

export type JobDescriptionType = {
  name: "jobDescription";
  label: "Job Description";
  type: "textarea";
  placeholder: "Write your job description";
};
