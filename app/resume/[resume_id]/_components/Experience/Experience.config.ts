import { FormFieldT } from "@/app/types/Form.type";

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
