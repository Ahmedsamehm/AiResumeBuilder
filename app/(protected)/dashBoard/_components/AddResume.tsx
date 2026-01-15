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
import useCreateResume from "../_hooks/useCreateResume";
import { Title } from "@/app/types/dashboard.type";

const AddResume = () => {
  const { AddResume, isPending: AddResumeLoading } = useCreateResume();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Title>();

  const onSubmit: SubmitHandler<Title> = ({ title }: Title) => {
    AddResume({ title });

    reset();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="size-52  mx-auto  md:size-full text-2xl ">+</AlertDialogTrigger>
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
            <AlertDialogAction disabled={AddResumeLoading} type="submit">
              Create
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddResume;
