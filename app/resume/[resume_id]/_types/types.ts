export interface personalInformationType {
  id: number;
  fullName: string;
  position: string;
  phone: number;
  email: string;
  address: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  summary: string;
}
export type PersonalInfoArr = personalInformationType[];
export interface workExperienceType {
  id: number;
  projectTitle: string;
  company: string;
  technologiesUsed: string;
  projectDetails: string;
  duration: string;
  github: string;
}

export interface eductionType {
  university: string;
  degree: string;
  graduationyear: string;
  location: string;
  diploma: string;
  diplomaLink: string;
}
export interface skillsType {
  programmingLanguages: string;
  frameworksTools: string;
  technologies: string;
}
export type skillList = skillsType[];

export type workExperienceList = workExperienceType[];

export type JobDescriptionType = {
  name: "jobDescription";
  label: "Job Description";
  type: "textarea";
  placeholder: "Write your job description";
};
