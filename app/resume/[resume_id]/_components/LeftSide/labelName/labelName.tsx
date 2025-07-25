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
    name: "summary",
    label: "Summary",
    type: "textarea",
    placeholder: "Write your professional summary",
  },
];

export const WorkExperienceLabel: FormFieldT[] = [
  {
    name: "jobTitle",
    label: "Job Title",
    type: "text",
    placeholder: "Enter your job title",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Enter company name",
  },
  {
    name: "location",
    label: "Location",
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
];

export const SkillsLabel: FormFieldT[] = [
  {
    name: "skill",
    label: "Skill",
    type: "text",
    placeholder: "Enter your skills",
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
