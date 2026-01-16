import { Path } from "react-hook-form";
type InputType = "text" | "email" | "tel" | "textarea";
export interface FormFieldConfig {
  name: string;
  label: string;
  type: InputType;
  placeholder: string;
  required?: boolean;
  enableAi?: boolean;
}
