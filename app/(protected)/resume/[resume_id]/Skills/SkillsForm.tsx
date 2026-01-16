"use client";

import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { SkillsLabel } from "./skills.config";
import { skillsBaseSchema, SkillValues } from "./skillsSchema";
import useSkills from "./useSkills";
import { ReusableForm } from "../_components/ReusableForm";
import StepsController from "@/app/components/shared/StepsController";
import { Badge } from "@/app/components/shared/ui/badge";

const SkillsForm = () => {
  const { resume_id } = useParams<{ resume_id: string }>();

  const { fetchedData, isDataFetched, addSkillsFn, isAddingSkills, isUpdatingSkills, updateSkillsFn } = useSkills(resume_id);

  const form = useForm({
    resolver: zodResolver(skillsBaseSchema),
    mode: "onBlur",
  });

  const isEditMode = !!fetchedData?.[0];
  const buttonText = isEditMode ? "Update" : "Submit";
  const onSubmit = (formData: SkillValues) => {
    if (!isEditMode) {
      return addSkillsFn(formData);
    }
    const currentId = fetchedData?.[0]?.id;
    updateSkillsFn({ formData, currentId });
  };

  useEffect(() => {
    if (fetchedData?.[0]) {
      const data = fetchedData[0];
      form.reset(data);
    }
  }, [fetchedData, resume_id, form]);

  const getKeyWord = typeof window !== "undefined" ? localStorage.getItem("keyWords") : null;
  let keyWords: any;
  if (getKeyWord) {
    keyWords = JSON?.parse(getKeyWord || "");
  } else {
    keyWords = {
      hard: [],
      mid: [],
      easy: [],
    };
  }

  const programmingLanguages = keyWords?.programmingLanguages?.map((skill: string, index: number) => {
    return <Badge key={index}>{skill}</Badge>;
  });

  const frameworks = keyWords?.frameworks?.map((skill: string, index: number) => {
    return <Badge key={index}>{skill}</Badge>;
  });
  const technologies = keyWords?.technologies?.map((skill: string, index: number) => {
    return <Badge key={index}>{skill}</Badge>;
  });

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <StepsController />
      <ReusableForm
        form={form}
        inputs={SkillsLabel}
        isPending={isAddingSkills || isUpdatingSkills || isDataFetched}
        onSubmit={onSubmit}
        buttonText={buttonText}
      />
      <div className="flex flex-col gap-4 mt-5 max-h-[40vh] overflow-auto">
        <ul className="flex flex-row flex-wrap justify-center gap-2">
          <Badge variant="outline">programming Languages</Badge>
          {programmingLanguages}
        </ul>
        <ul className="flex flex-row flex-wrap justify-center gap-2">
          <Badge variant="outline">Frameworks</Badge>
          {frameworks}
        </ul>
        <ul className="flex flex-row flex-wrap justify-center gap-2">
          <Badge variant="outline">Technologies</Badge>
          {technologies}
        </ul>
      </div>
    </div>
  );
};

export default SkillsForm;
