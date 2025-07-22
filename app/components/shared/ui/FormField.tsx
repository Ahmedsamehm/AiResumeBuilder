import React from "react";
import { Textarea } from "./textarea";
import { Input } from "./input";
import SheetAiModel from "@/app/resume/[resume_id]/_components/SheetAiModel";
import { Label } from "./Label";

function FormField(props: any) {
  const { type, placeholder, label, name, register, errors, index, watch, setValue } = props;
  return (
    <li key={index} className="space-y-2 capitalize list-none relative group z-[9000]">
      <Label htmlFor={name}>{label}</Label>

      {type === "textarea" ? (
        <div>
          <SheetAiModel watch={watch} setValue={setValue} />
          <Textarea id={name} placeholder={placeholder} {...register(name, { required: true })} defaultValue={""} className="relative" />
        </div>
      ) : (
        <Input id={name} type={type} placeholder={placeholder} {...register(name, { required: `${name} is required` })} />
      )}

      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </li>
  );
}

export default FormField;
