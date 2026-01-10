import Form from "@/app/components/shared/ui/Form";


import { FormActionsProvider } from "@/app/context/FormActionsContext";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";
import { useAddGenericQuery, useGenericQuery, useUpdateGenericQuery } from "../../_hooks/useGenericDatabaseQuery";
import { personalInformationType } from "@/app/types/resumeInput.type";
import { PersonalLabel } from "./PersonalInfo.config";

const PersonalInfoForm = () => {
  // here i need to make sure i send the correct type and table name to my useGenericQuery
  const { fetchedData, isDataFetched } = useGenericQuery<personalInformationType>("PersonalInformation");
  const { createData, isCreated } = useAddGenericQuery<personalInformationType>("PersonalInformation");
  const { editData, isEdited } = useUpdateGenericQuery<personalInformationType>("PersonalInformation", fetchedData?.[0]?.id);

  if (isDataFetched || !fetchedData) return <LoadingSpinner />;

  return (
    <div className="flex flex-col w-full justify-center p-5">
      <FormActionsProvider
        fetchedAction={fetchedData}
        createActions={createData}
        updateActions={editData}
        isPending={isEdited || isDataFetched || isCreated}
      >
        <Form labelName={PersonalLabel} title="Personal Information" className="w-full " showEditButton={true} />
      </FormActionsProvider>
    </div>
  );
};

export default PersonalInfoForm;
