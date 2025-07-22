"use client";

import { Button } from "@/app/components/shared/ui/button";
import { useResumeContext } from "@/app/context/ResumeContext";
import React from "react";

type Props = {
  isEdit: boolean;
  setIsEdit: any;
  showEditButton?: boolean;
};
function StepNavigation({ isEdit = false, setIsEdit = null, showEditButton = false }: Props) {
  const { handelIncrement, handelDecrement, steps, reactToPrintFn } = useResumeContext();

  return (
    <ul className="flex justify-between">
      {showEditButton && <li>{isEdit ? <Button onClick={() => setIsEdit(false)}>Cancel</Button> : <Button onClick={() => setIsEdit(true)}>Edit</Button>}</li>}
      <li className="ml-auto ">
        <div className="space-x-3 ">
          <Button onClick={handelDecrement} disabled={steps === 0}>
            Previous
          </Button>
          <Button onClick={handelIncrement} disabled={steps === 4}>
            Next
          </Button>
          {steps === 4 ? (
            <Button type="button" onClick={reactToPrintFn}>
              Download
            </Button>
          ) : null}
        </div>
      </li>
    </ul>
  );
}

export default StepNavigation;
