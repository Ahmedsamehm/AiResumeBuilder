"use client";
import { Button } from "@/app/components/shared/ui/button";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useFormActionsContext } from "@/app/context/FormActionsContext";

import StepNavigation from "@/app/resume/[resume_id]/_components/StepNavigation";
import EditSection from "@/app/resume/[resume_id]/_components/EditSection";
import { FormFieldT } from "@/app/resume/[resume_id]/_components/LeftSide/labelName/labelName";
import FormField from "./FormField";

type FormProps = {
  labelName: FormFieldT[];
  title: string;
  className: string;
  showList?: boolean;
  showEditButton?: boolean;
};

const Form = ({ labelName, title, className, showList, showEditButton }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();

  const { onSubmit, defaultValues, isEdit, setIsEdit, isPending, SelectedWork } = useFormActionsContext();

  useEffect(() => {
    if (defaultValues && !SelectedWork) {
      reset(defaultValues);
    } else {
      reset(SelectedWork);
    }
  }, [defaultValues, SelectedWork]);

  return (
    <>
      <StepNavigation isEdit={isEdit} setIsEdit={setIsEdit} showEditButton={showEditButton} />

      <div className={className + " z-0"}>
        <form
          onSubmit={handleSubmit((data: any) => {
            onSubmit(data, title);
          })}
          className="w-full space-y-3"
        >
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <ul className="space-y-3">
            {labelName?.map((input, index: number) => (
              <FormField {...input} register={register} errors={errors} key={index} watch={watch} setValue={setValue} />
            ))}
          </ul>
          <ul className=" flex flex-row  justify-between space-y-5">
            <li className="basis-1/5">
              {isEdit ? (
                <Button className="btn btn-primary  w-full  " type="submit" disabled={isPending}>
                  {isPending ? <LoadingSpinner /> : "update"}
                </Button>
              ) : (
                <Button className="btn btn-primary  w-full  " type="submit" disabled={isPending}>
                  {isPending ? <LoadingSpinner /> : "Save"}
                </Button>
              )}
            </li>
          </ul>

          {showList ? <EditSection /> : null}
        </form>
      </div>
    </>
  );
};

export default Form;
