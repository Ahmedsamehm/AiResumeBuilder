"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/shared/ui/alert-dialog";
import { Input } from "@/app/components/shared/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import useDashboard from "../_hooks/useDashboard";

import { PlusCircle } from "lucide-react";
import { ResumeValues } from "../Schema/dashBoardSchema";

const AddResume = () => {
  const { addResumeFn, isAddingResume } = useDashboard();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResumeValues>();

  const onSubmit: SubmitHandler<ResumeValues> = ({ title }: ResumeValues) => {
    addResumeFn({ title });
    reset();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" min-h-[20dvh] w-full  mx-auto  md:size-full text-2xl border-1 hover:ease-in-out hover:scale-95 transition-all duration-300  hover:animate-fade-in hover:ring-1  ">
        <PlusCircle className=" mx-auto" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Choose Name for Resume</AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlertDialogDescription className="my-2">
            <Input type="text" id="title" {...register("title")} />
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={isAddingResume} type="submit">
              Create
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddResume;
