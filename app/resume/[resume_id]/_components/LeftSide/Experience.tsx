import FormActionsProvider from "@/app/context/FormActionsContext";
import React from "react";

import { useAddGenericQuery, useDeleteGenericQuery, useGenericQuery, useUpdateGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import { ExperienceType } from "../../_types/types";
import { ExperienceLabel } from "./labelName/labelName";
import Form from "@/app/components/shared/ui/Form";

function Experience() {
  const { fetchedData, isDataFetched } = useGenericQuery<ExperienceType>("Experience");
  const { createData, isCreated } = useAddGenericQuery<ExperienceType>("Experience");
  const { editData, isEdited } = useUpdateGenericQuery<ExperienceType>("Experience");
  const { deleteData, isDeleted } = useDeleteGenericQuery("Experience");

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider
        fetchedAction={fetchedData}
        createActions={createData}
        deleteActions={deleteData}
        updateActions={editData}
        isPending={isEdited || isDataFetched || isCreated || isDeleted}
        ListType="Experience"
      >
        <span className="text-destructive py-3">you can skip this step if you don&apos;t have any experience/Internship</span>
        <Form labelName={ExperienceLabel} title="Experience" className="w-full" showEditButton={true} showList={true} />
      </FormActionsProvider>
    </div>
  );
}

export default Experience;
