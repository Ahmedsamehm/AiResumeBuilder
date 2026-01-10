import { FormActionsProvider } from "@/app/context/FormActionsContext";
import Form from "@/app/components/shared/ui/Form";
import { useAddGenericQuery, useGenericQuery, useUpdateGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";

import { EducationLabel } from "./Education.config";
import { eductionType } from "@/app/types/resumeInput.type";

const EducationForm = () => {
  const { fetchedData, isDataFetched } = useGenericQuery<eductionType>("Education");
  const { createData, isCreated } = useAddGenericQuery<eductionType>("Education");
  const { editData, isEdited } = useUpdateGenericQuery<eductionType>("Education");

  if (isDataFetched || !fetchedData) return <LoadingSpinner />;

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider
        fetchedAction={fetchedData}
        createActions={createData}
        updateActions={editData}
        isPending={isEdited || isDataFetched || isCreated}
      >
        <Form labelName={EducationLabel} title="Education" className="w-full" showEditButton={true} />
      </FormActionsProvider>
    </div>
  );
};

export default EducationForm;
