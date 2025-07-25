import React from "react";
import { Badge } from "./shared/ui/badge";
import { Sparkles, Zap } from "lucide-react";
import { Button } from "./shared/ui/button";
import BackGroundDots from "./BackGroundDots";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden   ">
      <BackGroundDots />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 ">
        {/* Feature badges */}

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium ">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium bg-gradient-primary  text-white bg-blue-500 shadow-lg shadow-cyan-500/50  ring-1  border-0"
          >
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered
          </Badge>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Create Your <span className="text-blue-400">Professional</span>
          <br />
          Resume in Minutes
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
          Effortlessly craft a stunning resume with the power of AI.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">Get noticed by recruiters and land your dream job faster.</p>

        {/* CTA Button */}
        <Button size="lg" className="bg-blue-400 text-lg !p-5 shadow-lg shadow-cyan-500/50 ">
          <Link href="/dashBoard">Build Your Resume Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
