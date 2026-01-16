"use client";

import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { ExperienceLabel } from "./experience.config";
import { experienceBaseSchema, ExperienceValues } from "./experienceSchema";
import useExperience from "./useExperience";
import { ReusableForm } from "../_components/ReusableForm";
import StepsController from "@/app/components/shared/StepsController";

const ExperienceForm = () => {
  const { resume_id } = useParams<{ resume_id: string }>();

  const { fetchedData, isDataFetched, addExperienceFn, isAddingExperience, isUpdatingExperience, updateExperienceFn } = useExperience(resume_id);

  const form = useForm({
    resolver: zodResolver(experienceBaseSchema),
    mode: "onBlur",
  });

  const isEditMode = !!fetchedData?.[0];
  const buttonText = isEditMode ? "Update" : "Submit";
  const onSubmit = (formData: ExperienceValues) => {
    if (!isEditMode) {
      return addExperienceFn(formData);
    }
    const currentId = fetchedData?.[0]?.id;
    updateExperienceFn({ formData, currentId });
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
      <span className="text-destructive py-3">you can skip this step if you don&apos;t have any experience/Internship</span>
      <ReusableForm
        form={form}
        inputs={ExperienceLabel}
        isPending={isAddingExperience || isUpdatingExperience || isDataFetched}
        onSubmit={onSubmit}
        buttonText={buttonText}
      />
    </div>
  );
};

export default ExperienceForm;
