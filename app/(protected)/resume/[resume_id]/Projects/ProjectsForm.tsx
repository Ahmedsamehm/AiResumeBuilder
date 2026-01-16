"use client";

import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { ProjectsLabel } from "./projects.config";
import { projectsBaseSchema, ProjectValues } from "./projectsSchema";
import useProjects from "./useProjects";
import { ReusableForm } from "../_components/ReusableForm";
import StepsController from "@/app/components/shared/StepsController";

const ProjectsForm = () => {
  const { resume_id } = useParams<{ resume_id: string }>();

  const { fetchedData, isDataFetched, addProjectsFn, isAddingProjects, isUpdatingProjects, updateProjectsFn } = useProjects(resume_id);

  const form = useForm({
    resolver: zodResolver(projectsBaseSchema),
    mode: "onBlur",
  });

  const isEditMode = !!fetchedData?.[0];
  const buttonText = isEditMode ? "Update" : "Submit";
  const onSubmit = (formData: ProjectValues) => {
    if (!isEditMode) {
      return addProjectsFn(formData);
    }
    const currentId = fetchedData?.[0]?.id;
    updateProjectsFn({ formData, currentId });
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
        inputs={ProjectsLabel}
        isPending={isAddingProjects || isUpdatingProjects || isDataFetched}
        onSubmit={onSubmit}
        buttonText={buttonText}
      />
    </div>
  );
};

export default ProjectsForm;
