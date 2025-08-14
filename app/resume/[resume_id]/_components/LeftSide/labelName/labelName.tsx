// app/resume/[resume_id]/_components/LeftSide/labelName/labelName.tsx
import { personalInformationType, workExperienceType, eductionType, skillsType, JobDescriptionType } from "@/app/resume/[resume_id]/_types/types";

export type FormFieldT = {
  name: keyof personalInformationType | keyof workExperienceType | keyof eductionType | keyof skillsType | keyof JobDescriptionType;
  label: string;
  type: "text" | "textarea" | "tel" | "email" | "select";
  placeholder: string;
  options?: string[];
};

export const PersonalLabel: FormFieldT[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "position",
    label: "Position",
    type: "text",
    placeholder: "Enter your position",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    name: "linkedIn",
    label: "LinkedIn",
    type: "text",
    placeholder: "Enter your LinkedIn profile",
  },
  {
    name: "github",
    label: "Github",
    type: "text",
    placeholder: "Enter your github profile",
  },
  {
    name: "portfolio",
    label: "portfolio",
    type: "text",
    placeholder: "Enter your LinkedIn profile",
  },
  {
    name: "summary",
    label: "Summary",
    type: "textarea",
    placeholder: "Write your professional summary",
  },
];

export const WorkExperienceLabel: FormFieldT[] = [
  {
    name: "projectTitle",
    label: "projectTitle",
    type: "text",
    placeholder: "Enter your job title",
  },

  {
    name: "technologiesUsed",
    label: "TechnologiesUsed",
    type: "text",
    placeholder: "Enter work TechnologiesUsed React, Next.js, etc.",
  },
  {
    name: "github",
    label: "Github",
    type: "text",
    placeholder: "Enter work location",
  },
  {
    name: "projectDetails",
    label: "Project Details",
    type: "textarea",
    placeholder: "Describe your projects",
  },
  {
    name: "duration",
    label: "Duration",
    type: "text",
    placeholder: "MM/YYYY - MM/YYYY",
  },
];

export const EducationLabel: FormFieldT[] = [
  {
    name: "university",
    label: "University",
    type: "text",
    placeholder: "Enter university name",
  },
  {
    name: "degree",
    label: "Degree",
    type: "text",
    placeholder: "Enter your degree",
  },
  {
    name: "graduationyear",
    label: "Graduation Year",
    type: "text",
    placeholder: "Enter graduation year",
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Enter university location",
  },
  {
    name: "diploma",
    label: "Diploma",
    type: "text",
    placeholder: "Enter Diploma name",
  },
  {
    name: "diplomaLink",
    label: "Link to Diploma",
    type: "text",
    placeholder: "Enter Link to Diploma (www.linkedin.com/)",
  },
];

export const SkillsLabel: FormFieldT[] = [
  {
    name: "programmingLanguages",
    label: "Programming Languages",
    type: "text",
    placeholder: "Enter your ProgrammingLanguages",
  },
  {
    name: "frameworksTools",
    label: "Frameworks & Tools",
    type: "text",
    placeholder: "Enter your Frameworks & Tools (e.g., React, Next.js, etc.)",
  },
  {
    name: "technologies",
    label: "Technologies",
    type: "text",
    placeholder: "Enter your Technologies (github, etc.)",
  },
];

export const JobDescriptionLabel: any = [
  {
    name: "jobDescription",
    label: "Job Description",
    type: "textarea",
    placeholder: "Write your job description",
  },
];
