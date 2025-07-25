"use client";

// External Libraries
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Internal Hooks
import useHandleSubmit from "../resume/[resume_id]/_hooks/handleActions/useHandleSubmit";
import useSelectedFromList from "../resume/[resume_id]/_hooks/useSelectedFromList";
import { GenericServiceParams } from "../resume/[resume_id]/_services/crudService";

interface FormActionsProviderProps<T> {
  children: React.ReactNode;
  onSubmit: (formData: string, massage: string) => void;
  createActions: (data: Omit<GenericServiceParams<T>, "currentId">) => void;
  updateActions: (data: Omit<GenericServiceParams<T>, "resume_id">) => void;
  deleteActions?: ({ id }: { id: string | number }) => void | undefined;
  fetchedAction: T[];
  isPending: boolean;
  ListType: string;
  defaultValues: T;
  resume_id: string;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  SelectedWork: any;
  setCurrentId: Dispatch<SetStateAction<string | number | null>>;
  setSelectIndex: Dispatch<SetStateAction<{ current_id: string | number; index: number }>>;
  jobDescription?: string;
}

const FormActionsContext = createContext<FormActionsProviderProps<any> | undefined>(undefined);

// Custom Hook for Context
export const useFormActionsContext = () => {
  const context = useContext(FormActionsContext);
  if (!context) {
    throw new Error("useFormActionsContext must be used within a FormActionsProvider");
  }
  return context;
};

// Context Provider
export const FormActionsProvider = ({ children, createActions, updateActions, deleteActions, fetchedAction, isPending, ListType }: Partial<FormActionsProviderProps<any>>) => {
  const [defaultValues, setDefaultValues] = useState<any>({});
  const [currentId, setCurrentId] = useState<string | number | null>(null);
  const { resume_id } = useParams<{ resume_id: string }>();
  const [jobDescription, setJobDescription] = useState<string>("");
  const { onSubmit, isEdit, setIsEdit } = useHandleSubmit({
    createActions,
    updateActions,
    resume_id,
    isPending,
    currentId,
    setCurrentId,
  });

  const { SelectedWork, setSelectIndex } = useSelectedFromList(fetchedAction ?? []);

  const getJobDescription = localStorage.getItem("jobDescription");

  useEffect(() => {
    if (getJobDescription) setJobDescription(getJobDescription);
  }, [getJobDescription]);
  useEffect(() => {
    if (!fetchedAction || fetchedAction.length === 0) return;

    setDefaultValues(fetchedAction[0]);
  }, [fetchedAction]);

  const value: any = {
    onSubmit,
    defaultValues,
    resume_id,
    isEdit,
    setIsEdit,
    currentId,
    setCurrentId,
    isPending,
    fetchedAction,
    deleteActions,
    ListType,
    SelectedWork,
    setSelectIndex,
    jobDescription,
  };

  return <FormActionsContext.Provider value={value}>{children}</FormActionsContext.Provider>;
};

export default FormActionsProvider;
