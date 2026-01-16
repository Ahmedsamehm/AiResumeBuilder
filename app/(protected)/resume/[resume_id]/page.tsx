import ResumeForm from "./_components/resumeForm";
import PreviewSection from "./_components/PreviewSection";

const Resume = () => {
  return (
    <div className="container mx-auto   ">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center content-center min-h-[90dvh] gap-2 ">
        <section className="col-span-1  w-full">
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
