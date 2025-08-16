import { FormActionsProvider } from "@/app/context/FormActionsContext";
import React from "react";

import { useAddGenericQuery, useDeleteGenericQuery, useGenericQuery, useUpdateGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import Form from "@/app/components/shared/ui/Form";

import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { ProjectsType } from "../../_types/types";
import { ProjectsLabel } from "./labelName/labelName";

const Projects = () => {
  const { fetchedData, isDataFetched } = useGenericQuery<ProjectsType>("Projects");
  const { createData, isCreated } = useAddGenericQuery<ProjectsType>("Projects");
  const { editData, isEdited } = useUpdateGenericQuery<ProjectsType>("Projects");
  const { deleteData, isDeleted } = useDeleteGenericQuery("Projects");

  if (isDataFetched || !fetchedData) return <LoadingSpinner />;
  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider
        fetchedAction={fetchedData}
        createActions={createData}
        updateActions={editData}
        deleteActions={deleteData}
        isPending={isEdited || isDataFetched || isCreated || isDeleted}
        ListType="Projects"
      >
        <Form labelName={ProjectsLabel} title="Projects" className="w-full" showList={true} showEditButton={true} />
      </FormActionsProvider>
    </div>
  );
};

export default Projects;
