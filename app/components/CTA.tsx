import Link from "next/link";
import { Button } from "./shared/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-transparent border border-blue-500 rounded-2xl p-8 shadow-md relative">
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6 ">
              <Sparkles className="w-8 h-8 text-blue-500 mr-3" />
              <span className="text-lg font-semibold text-blue-500">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Career with <span className="text-blue-500">AI-Powered Resumes</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already boosted their job search success with our intelligent resume builder.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-transparent border border-blue-500 text-white hover:bg-blue-500 text-lg px-8 py-6 h-auto hover-lift">
                <Link href="/dashBoard"> Build Your Resume Now</Link>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
