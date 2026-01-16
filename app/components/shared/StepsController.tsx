import { useStepsStore } from "@/app/(protected)/resume/[resume_id]/_store/useStepsStore";

import { Button } from "./ui/button";
import Link from "next/link";

const StepsController = () => {
  const steps = useStepsStore((s) => s.steps);
  const increment = useStepsStore((s) => s.increment);
  const decrement = useStepsStore((s) => s.decrement);
  const reset = useStepsStore((s) => s.reset);
  return (
    <div className="flex justify-between mb-4">
      <Link href={"/dashBoard"}>
        <Button className="cursor-pointer" onClick={reset}>
          Back to DashBoard
        </Button>
      </Link>
      <div className="flex gap-2">
        <Button disabled={steps === 0} onClick={decrement}>
          Previous
        </Button>
        <Button disabled={steps === 5} onClick={increment}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepsController;
