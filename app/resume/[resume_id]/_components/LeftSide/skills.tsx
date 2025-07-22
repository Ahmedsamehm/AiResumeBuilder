import { FormActionsProvider } from "@/app/context/FormActionsContext";
import React from "react";
import { useAddGenericQuery, useDeleteGenericQuery, useGenericQuery, useUpdateGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import { SkillsLabel } from "./labelName/labelName";
import Form from "@/app/components/shared/ui/Form";
import { skillList } from "../../_types/types";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { Badge } from "@/app/components/shared/ui/badge";

const Skills = () => {
  const { fetchedData, isDataFetched } = useGenericQuery<skillList>("Skills");
  const { createData, isCreated } = useAddGenericQuery<skillList>("Skills");
  const { editData, isEdited } = useUpdateGenericQuery<skillList>("Skills");
  const { deleteData, isDeleted } = useDeleteGenericQuery("Skills");

  const getKeyWord = localStorage.getItem("keyWords");
  if (isDataFetched || !fetchedData) return <LoadingSpinner />;

  const keyWords = JSON.parse(getKeyWord || "");

  const hardSkill = keyWords?.hard?.map((skill: string, index: number) => {
    return <Badge key={index}>{skill}</Badge>;
  });

  const midSkill = keyWords?.mid?.map((skill: string, index: number) => {
    return <Badge key={index}>{skill}</Badge>;
  });
  const easySkill = keyWords?.easy?.map((skill: string, index: number) => {
    return <Badge key={index}>{skill}</Badge>;
  });

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider
        fetchedAction={fetchedData}
        createActions={createData}
        updateActions={editData}
        deleteActions={deleteData}
        isPending={isEdited || isDataFetched || isCreated || isDeleted}
        ListType="Skills"
      >
        <Form labelName={SkillsLabel} title="Skills" className="w-full" showList={true} showEditButton={true} />
      </FormActionsProvider>
      <div className="flex flex-col gap-4 mt-5 max-h-[40vh] overflow-auto">
        <ul className="flex flex-row flex-wrap justify-center gap-2">
          <Badge variant="outline">Hard Skills</Badge>
          {hardSkill}
        </ul>
        <ul className="flex flex-row flex-wrap justify-center gap-2">
          <Badge variant="outline">Medium Skills</Badge>
          {midSkill}
        </ul>
        <ul className="flex flex-row flex-wrap justify-center gap-2">
          <Badge variant="outline">Easy Skills</Badge>
          {easySkill}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
