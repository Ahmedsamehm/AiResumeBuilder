import React from "react";
import ResumeForm from "./_components/LeftSide/resumeForm";
import PreviewSection from "./_components/RightSide/PreviewSection";
import { Button } from "@/app/components/shared/ui/button";

import Link from "next/link";

const Resume = () => {
  return (
    // remember to use @container for responsive design
    // and use @container in the parent div to make it responsive
    <div className="container mx-auto   ">
      <div className="flex justify-end my-3">
        <Button>
          <Link href={"/dashBoard"}>Back</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center content-center min-h-[90vh] gap-2 ">
        <section className="col-span-1    w-full">
          <h2 className="sr-only">Resume Form</h2>
          <ResumeForm />
        </section>
        <section className="col-span-1  w-full ">
          <h2 className="sr-only">Preview Section</h2>
          <PreviewSection />
        </section>
      </div>
    </div>
  );
};

export default Resume;
