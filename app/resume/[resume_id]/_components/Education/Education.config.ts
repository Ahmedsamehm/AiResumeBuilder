import { FormFieldT } from "@/app/types/Form.type";

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
