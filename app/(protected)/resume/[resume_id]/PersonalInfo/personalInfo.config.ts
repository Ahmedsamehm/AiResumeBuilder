import { FormFieldConfig } from "@/app/types/Form.type";



export const PersonalLabel: FormFieldConfig[] = [
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
    placeholder: "Enter your portfolio  profile",
  },
  {
    name: "summary",
    label: "Summary",
    type: "textarea",
    placeholder: "Write your professional summary",

    enableAi: true,
  },
];
