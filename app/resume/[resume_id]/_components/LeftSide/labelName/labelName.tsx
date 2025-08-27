// app/resume/[resume_id]/_components/LeftSide/labelName/labelName.tsx

export type FormFieldT = {
  name: string;
  label: string;
  type: "text" | "textarea" | "tel" | "email";
  placeholder: string;
  options?: string[];
  required?: boolean;
  enableAi?: boolean;
};

export const PersonalLabel: FormFieldT[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "position",
    label: "Position",
    type: "text",
    placeholder: "Enter your position",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
    required: true,
  },
  {
    name: "linkedIn",
    label: "LinkedIn",
    type: "text",
    placeholder: "Enter your LinkedIn profile",
    required: true,
  },
  {
    name: "github",
    label: "Github",
    type: "text",
    placeholder: "Enter your github profile",
    required: false,
  },
  {
    name: "portfolio",
    label: "portfolio",
    type: "text",
    placeholder: "Enter your LinkedIn profile",
    required: false,
  },
  {
    name: "summary",
    label: "Summary",
    type: "textarea",
    placeholder: "Write your professional summary",
    required: true,
    enableAi: true,
  },
];

export const ProjectsLabel: FormFieldT[] = [
  {
    name: "projectTitle",
    label: "projectTitle",
    type: "text",
    placeholder: "Enter your job title",
    required: true,
  },

  {
    name: "technologiesUsed",
    label: "TechnologiesUsed",
    type: "text",
    placeholder: "Enter work TechnologiesUsed React, Next.js, etc.",
    required: false,
  },
  {
    name: "github",
    label: "Github",
    type: "text",
    placeholder: "Enter work location",
    required: false,
  },
  {
    name: "projectDetails",
    label: "Project Details",
    type: "textarea",
    placeholder: "Describe your projects",
    required: true,
    enableAi: true,
  },
  {
    name: "duration",
    label: "Duration",
    type: "text",
    placeholder: "MM/YYYY - MM/YYYY",
    required: true,
  },
];

export const EducationLabel: FormFieldT[] = [
  {
    name: "university",
    label: "University",
    type: "text",
    placeholder: "Enter university name",
    required: true,
  },
  {
    name: "degree",
    label: "Degree",
    type: "text",
    placeholder: "Enter your degree",
    required: true,
  },
  {
    name: "graduationyear",
    label: "Graduation Year",
    type: "text",
    placeholder: "Enter graduation year",
    required: true,
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Enter university location",
    required: true,
  },
  {
    name: "diploma",
    label: "Diploma",
    type: "text",
    placeholder: "Enter Diploma name",
    required: false,
  },
  {
    name: "diplomaLink",
    label: "Link to Diploma",
    type: "text",
    placeholder: "Enter Link to Diploma (www.linkedin.com/)",
    required: false,
  },
  {
    name: "diplomadate",
    label: "diploma Date",
    type: "text",
    placeholder: "Enter diploma date (start-end)",
    required: false,
  },
];

export const ExperienceLabel: FormFieldT[] = [
  {
    name: "company",
    label: "Company / Organization",
    type: "text",
    placeholder: "Enter company or program name (e.g., DEPI - AI & Data Science Track)",
    required: true,
  },
  {
    name: "title",
    label: "Job Title",
    type: "text",
    placeholder: "Enter your role (e.g., ML Engineer Intern)",
    required: true,
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Enter location (e.g., Cairo, Egypt)",
    required: true,
  },
  {
    name: "start_date",
    label: "Start Date",
    type: "text",
    placeholder: "Select start date",
    required: true,
  },
  {
    name: "end_date",
    label: "End Date",
    type: "text",
    placeholder: "Select end date (or leave empty if current)",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: `Enter key responsibilities and achievements. Use bullet points:\n• Participated in an intensive training program...\n• Applied machine learning algorithms...`,
    required: true,
    enableAi: false,
  },
];
export const SkillsLabel: FormFieldT[] = [
  {
    name: "programmingLanguages",
    label: "Programming Languages",
    type: "text",
    placeholder: "Enter your ProgrammingLanguages",
    required: true,
  },
  {
    name: "frameworksTools",
    label: "Frameworks & Tools",
    type: "text",
    placeholder: "Enter your Frameworks & Tools (e.g., React, Next.js, etc.)",
    required: true,
  },
  {
    name: "technologies",
    label: "Technologies",
    type: "text",
    placeholder: "Enter your Technologies (github, etc.)",
    required: true,
  },
];

export const JobDescriptionLabel: any = [
  {
    name: "jobDescription",
    label: "Job Description",
    type: "textarea",
    placeholder: "Write your job description",
    required: true,
    enableAi: false,
  },
];
