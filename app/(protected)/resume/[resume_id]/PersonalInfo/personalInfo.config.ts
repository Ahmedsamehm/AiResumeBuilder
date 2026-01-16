import { FormFieldConfig } from "@/app/types/Form.type";

export const PersonalLabel: FormFieldConfig[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name…",
    autoComplete: "name",
  },
  {
    name: "position",
    label: "Position",
    type: "text",
    placeholder: "Enter your position…",
    autoComplete: "organization-title",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number…",
    autoComplete: "tel",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email…",
    autoComplete: "email",
    spellCheck: false,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address…",
    autoComplete: "street-address",
  },
  {
    name: "linkedIn",
    label: "LinkedIn",
    type: "text",
    placeholder: "Enter your LinkedIn profile…",
    autoComplete: "url",
  },
  {
    name: "github",
    label: "Github",
    type: "text",
    placeholder: "Enter your github profile…",
    autoComplete: "url",
  },
  {
    name: "portfolio",
    label: "portfolio",
    type: "text",
    placeholder: "Enter your portfolio profile…",
    autoComplete: "url",
  },
  {
    name: "summary",
    label: "Summary",
    type: "textarea",
    placeholder: "Write your professional summary…",
    enableAi: true,
  },
];
