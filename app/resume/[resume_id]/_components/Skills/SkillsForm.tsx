"use client";

import { FormActionsProvider } from "@/app/context/FormActionsContext";
import React from "react";
import { useAddGenericQuery, useDeleteGenericQuery, useGenericQuery, useUpdateGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import { SkillsLabel } from "../labelName";
import Form from "@/app/components/shared/ui/Form";
import { skillList } from "../../_types/types";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { Badge } from "@/app/components/shared/ui/badge";

const SkillsForm = () => {
  const { fetchedData, isDataFetched } = useGenericQuery<skillList>("Skills");
  const { createData, isCreated } = useAddGenericQuery<skillList>("Skills");
  const { editData, isEdited } = useUpdateGenericQuery<skillList>("Skills");
  const { deleteData, isDeleted } = useDeleteGenericQuery("Skills");
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

  if (isDataFetched || !fetchedData) return <LoadingSpinner />;
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
