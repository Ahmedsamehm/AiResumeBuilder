"use client";

import { useParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, memo } from "react";

import { PersonalLabel } from "./personalInfo.config";
import { personalInfoBaseSchema, PersonalInfoValues } from "./personalInfoSchema";
import usePersonalInfo from "./usePersonalInfo";
import { ReusableForm } from "../_components/ReusableForm";
import StepsController from "@/app/components/shared/StepsController";
import { useResumeStore } from "../_store/useResumeStore";

// Separate component to handle synchronization without re-rendering the whole form
const FormSync = ({ control, updateLive }: { control: any; updateLive: (data: any) => void }) => {
  const watchedValues = useWatch({ control });

  useEffect(() => {
    updateLive(watchedValues);
  }, [watchedValues, updateLive]);

  return null;
};

const PersonalInfoForm = () => {
  const { resume_id } = useParams<{ resume_id: string }>();
  const updateLive = useResumeStore((s) => s.updatePersonalInfoLive);
  const { fetchedData, isDataFetched, addPersonalInfoFn, isAddingPersonalInfo, isUpdatingPersonalInfo, updatePersonalInfoFn } =
    usePersonalInfo(resume_id);

  const form = useForm({
    resolver: zodResolver(personalInfoBaseSchema),
    mode: "onBlur",
    defaultValues: fetchedData?.[0],
  });

  const isEditMode = !!fetchedData?.[0];
  const buttonText = isEditMode ? "Update" : "Submit";

  useEffect(() => {
    if (fetchedData?.[0]) {
      form.reset(fetchedData[0]);
    }
  }, [fetchedData, form]);

  const onSubmit = (formData: PersonalInfoValues) => {
    if (!isEditMode) {
      return addPersonalInfoFn(formData);
    }
    const currentId = fetchedData?.[0]?.id;
    updatePersonalInfoFn({ formData, currentId });
  };

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <StepsController />
      <FormSync control={form.control} updateLive={updateLive} />
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

export default memo(PersonalInfoForm);
