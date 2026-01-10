import { FormFieldT } from "@/app/types/Form.type";

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
