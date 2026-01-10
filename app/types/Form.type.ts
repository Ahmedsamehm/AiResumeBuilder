export type FormFieldT = {
  name: string;
  label: string;
  type: "text" | "textarea" | "tel" | "email";
  placeholder: string;
  options?: string[];
  required?: boolean;
  enableAi?: boolean;
};
