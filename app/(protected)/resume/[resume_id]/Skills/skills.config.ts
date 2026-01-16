import { FormFieldT } from "@/app/types/Form.type";

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
