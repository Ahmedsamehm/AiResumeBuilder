import { FormFieldT } from "@/app/types/Form.type";

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
