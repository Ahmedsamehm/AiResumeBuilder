import { useState } from "react";

const useSelectedFromList = <T>(fetchedAction: T[]) => {
  const [selectIndex, setSelectIndex] = useState({ current_id: 0, index: 0 });

  const SelectedWork = fetchedAction?.find((work: T, index) => index === selectIndex?.index);
  return { SelectedWork, setSelectIndex };
};

export default useSelectedFromList;
