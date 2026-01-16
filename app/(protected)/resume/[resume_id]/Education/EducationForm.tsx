"use client";

import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { EducationLabel } from "./education.config";
import { educationBaseSchema, EducationValues } from "./educationSchema";
import useEducation from "./useEducation";
import { ReusableForm } from "../_components/ReusableForm";
import StepsController from "@/app/components/shared/StepsController";

const EducationForm = () => {
  const { resume_id } = useParams<{ resume_id: string }>();

  const { fetchedData, isDataFetched, addEducationFn, isAddingEducation, isUpdatingEducation, updateEducationFn } = useEducation(resume_id);

  const form = useForm({
    resolver: zodResolver(educationBaseSchema),
    mode: "onBlur",
  });

  const isEditMode = !!fetchedData?.[0];
  const buttonText = isEditMode ? "Update" : "Submit";
  const onSubmit = (formData: EducationValues) => {
    if (!isEditMode) {
      return addEducationFn(formData);
    }
    const currentId = fetchedData?.[0]?.id;
    updateEducationFn({ formData, currentId });
  };

  useEffect(() => {
    if (fetchedData?.[0]) {
      const data = fetchedData[0];
      form.reset(data);
    }
  }, [fetchedData, resume_id, form]);

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <StepsController />
      <ReusableForm
        form={form}
        inputs={EducationLabel}
        isPending={isAddingEducation || isUpdatingEducation || isDataFetched}
        onSubmit={onSubmit}
        buttonText={buttonText}
      />
    </div>
  );
};

export default EducationForm;
