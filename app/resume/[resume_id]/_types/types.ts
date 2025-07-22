export interface personalInformationType {
  fullName: string;
  position: string;
  phone: number;
  email: string;
  address: string;
  linkedIn: string;
  summary: string;
}
export type PersonalInfoArr = personalInformationType[];
export interface workExperienceType {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  projectDetails: string;
  duration: string;
}

export interface eductionType {
  university: string;
  degree: string;
  graduationyear: string;
  location: string;
}
export interface skillsType {
  skill: string;
}
export type skillList = skillsType[];

export type workExperienceList = workExperienceType[];

export type JobDescriptionType = {
  name: "jobDescription";
  label: "Job Description";
  type: "textarea";
  placeholder: "Write your job description";
};
