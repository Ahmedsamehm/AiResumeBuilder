"use client";

import React, { useEffect, useState } from "react";
import { GenericServiceParams } from "../../_services/crudService";

type Props<T> = {
  createActions?: (data: Omit<GenericServiceParams<T>, "currentId">) => void;
  updateActions?: (data: Omit<GenericServiceParams<T>, "resume_id">) => void;
  resume_id: string;
  isPending: boolean | undefined;
  currentId: string | number | null;
  setCurrentId: React.Dispatch<React.SetStateAction<string | number | null>>;
};

const useHandleSubmit = <T>(props: Props<T>) => {
  const { createActions, updateActions, resume_id, isPending, currentId, setCurrentId } = props;

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (isEdit && currentId) {
      setCurrentId(currentId);
    }
  }, [currentId, isEdit]);

  useEffect(() => {
    if (!isPending && isEdit) {
      setIsEdit(false);
    }
  }, [isPending]);

  const handleCreateSections = (formData: string) => {
    createActions?.({ formData, resume_id } as any);
  };
  const handleUpdateSections = (formData: string) => {
    updateActions?.({ formData, currentId } as any);
  };

  const onSubmit = (formData: string, massage: string) => {
    if (!formData && !massage) return;

    if (massage === "JobDescription") {
      createActions?.(formData as any);
    } else {
      console.log(formData);

      if (isEdit) return handleUpdateSections(formData);
      return handleCreateSections(formData);
    }
  };
  return { onSubmit, isEdit, setIsEdit, currentId, setCurrentId };
};

export default useHandleSubmit;
