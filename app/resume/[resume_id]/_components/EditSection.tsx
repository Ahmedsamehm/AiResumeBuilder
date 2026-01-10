import { useFormActionsContext } from "@/app/context/FormActionsContext";
import { Button } from "@/app/components/shared/ui/button";

const EditSection = () => {
  const { fetchedAction, deleteActions, ListType, setSelectIndex, SelectedWork, setCurrentId } = useFormActionsContext();
  if (!fetchedAction) return null;

  const handleEdit = (current_id: string, index: number) => {
    setCurrentId(current_id);
    getSelectedData(current_id, index);
  };
  const getSelectedData = (current_id: string, index: number) => {
    setSelectIndex({
      current_id,
      index,
    });
  };
  const handleDelete = (id: string | number) => {
    deleteActions?.({ id });
  };

  return (
    <div className="max-h-[30vh] overflow-auto my-5 ">
      <ul>
        {fetchedAction.map((work: any, index: number) => (
          <li
            key={work?.id}
            className={`border-b py-3 border-2  p-5 + ${SelectedWork?.index === index ? "border-gray-200 transform scale-95 transition-all" : ""} `}
          >
            <div className="flex justify-between items-center mx-auto  space-y-3">
              {ListType === "Projects" && (
                <div className="flex-1">
                  <span className="font-medium">{work?.projectTitle}</span>
                  <div className="text-sm  text-white mt-1">
                    {work?.location} • {work?.technologiesUsed}
                  </div>
                </div>
              )}
              {ListType === "Skills" && (
                <div className="flex-1">
                  <span className="font-medium">{work?.programmingLanguages}</span>
                </div>
              )}
              {ListType === "Experience" && (
                <div className="flex-1">
                  <span className="font-medium">{work?.company}</span>
                </div>
              )}

              <div className="space-x-2">
                <Button type="button" size="sm" className="cursor-pointer" onClick={() => handleEdit(work?.id, index)}>
                  select
                </Button>

                <Button className="cursor-pointer" type="button" size="sm" variant="destructive" onClick={() => handleDelete(work?.id)}>
                  delete
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditSection;
