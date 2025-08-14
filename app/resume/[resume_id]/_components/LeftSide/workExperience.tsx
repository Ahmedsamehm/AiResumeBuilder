import { FormActionsProvider } from "@/app/context/FormActionsContext";
import React from "react";

import { WorkExperienceLabel } from "./labelName/labelName";
import { useAddGenericQuery, useDeleteGenericQuery, useGenericQuery, useUpdateGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import Form from "@/app/components/shared/ui/Form";
import { workExperienceType } from "../../_types/types";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";

const WorkExperience = () => {
  const { fetchedData, isDataFetched } = useGenericQuery<workExperienceType>("Experience");
  const { createData, isCreated } = useAddGenericQuery<workExperienceType>("Experience");
  const { editData, isEdited } = useUpdateGenericQuery<workExperienceType>("Experience");
  const { deleteData, isDeleted } = useDeleteGenericQuery("Experience");

  if (isDataFetched || !fetchedData) return <LoadingSpinner />;
  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider
        fetchedAction={fetchedData}
        createActions={createData}
        updateActions={editData}
        deleteActions={deleteData}
        isPending={isEdited || isDataFetched || isCreated || isDeleted}
        ListType="Experience"
      >
        <Form labelName={WorkExperienceLabel} title="Projects" className="w-full" showList={true} showEditButton={true} />
      </FormActionsProvider>
    </div>
  );
};

export default WorkExperience;
