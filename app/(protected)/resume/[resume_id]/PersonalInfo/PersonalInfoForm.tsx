"use client";

import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { PersonalLabel } from "./personalInfo.config";
import { personalInfoBaseSchema, PersonalInfoValues } from "./personalInfoSchema";
import usePersonalInfo from "./usePersonalInfo";
import { ReusableForm } from "../_components/ReusableForm";
import StepsController from "@/app/components/shared/StepsController";

const PersonalInfoForm = () => {
  const { resume_id } = useParams<{ resume_id: string }>();

  const { fetchedData, isDataFetched, addPersonalInfoFn, isAddingPersonalInfo, isUpdatingPersonalInfo, updatePersonalInfoFn } =
    usePersonalInfo(resume_id);

  const form = useForm({
    resolver: zodResolver(personalInfoBaseSchema),
    mode: "onBlur",
  });

  const isEditMode = !!fetchedData?.[0];
  const buttonText = isEditMode ? "Update" : "Submit";
  const onSubmit = (formData: PersonalInfoValues) => {
    if (!isEditMode) {
      return addPersonalInfoFn(formData);
    }
    const currentId = fetchedData?.[0]?.id;
    updatePersonalInfoFn({ formData, currentId });
  };
  useEffect(() => {
    if (fetchedData?.[0]) {
      const data = fetchedData[0];
      // Convert phone from number to string for form
      form.reset({
        ...data,
        phone: data.phone?.toString() || "",
      });
    }
  }, [fetchedData, resume_id, form]);
  return (
    <div className="flex flex-col w-full justify-center p-5">
      <StepsController />
      <ReusableForm
        form={form}
        inputs={PersonalLabel}
        isPending={isAddingPersonalInfo || isUpdatingPersonalInfo || isDataFetched}
        onSubmit={onSubmit}
        buttonText={buttonText}
      />
    </div>
  );
};

export default PersonalInfoForm;
