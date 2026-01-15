import { FormFieldT } from "@/app/types/Form.type";

export const JobDescriptionLabel: FormFieldT[] = [
  {
    name: "jobDescription",
    label: "Job Description",
    type: "textarea",
    placeholder: "Write your job description",
    required: true,
    enableAi: false,
  },
];
