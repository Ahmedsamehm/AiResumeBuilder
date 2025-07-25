import { Card, CardContent } from "@/app/components/shared/ui/card";
import { Brain, Target, Zap, FileCheck } from "lucide-react";
import { Badge } from "./shared/ui/badge";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Keyword Extraction",
      description: "Our smart AI analyzes job descriptions and extracts relevant keywords, categorizing them as hard, mid-level, and soft skills.",
      badge: "Smart Analysis",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Target,
      title: "ATS Score Optimization",
      description: "Get real-time ATS compatibility scores and suggestions to ensure your resume passes through applicant tracking systems.",
      badge: "ATS Ready",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "Job-Specific Optimization",
      description: "Our AI creates tailored resumes that perfectly match specific job requirements, increasing your chances of getting noticed.",
      badge: "Tailored",
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: FileCheck,
      title: "Professional Templates",
      description: "Choose from expertly designed templates that are optimized for different industries and career levels.",
      badge: "Professional",
      gradient: "from-green-500 to-blue-600",
    },
  ];

  const exampleKeywords = {
    hard: ["React.js", "JavaScript", "Python", "AWS", "Docker"],
    mid: ["Project Management", "Agile", "Team Leadership", "Problem Solving"],
    easy: ["Communication", "Teamwork", "Adaptability"],
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful AI Features for <span className="text-gradient-primary">Perfect Resumes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to create resumes that stand out and get results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16 ">
          {features.map((feature, index) => (
            <Card key={index} className="card-professional hover-lift transition-smooth group">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="mb-3">
                  {feature.badge}
                </Badge>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Keyword Example */}
        <div className="card-professional p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">AI Keyword Analysis Example</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  bg-black p-5 rounded-2xl">
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-3">Hard Skills</h4>
              <div className="space-y-2">
                {exampleKeywords.hard.map((skill, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2 border-red-400/30 text-red-400 hover-lift">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Mid-Level Skills</h4>
              <div className="space-y-2">
                {exampleKeywords.mid.map((skill, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2 border-yellow-400/30 text-yellow-400 hover-lift">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">Soft Skills</h4>
              <div className="space-y-2">
                {exampleKeywords.easy.map((skill, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2 border-green-400/30 text-green-400 hover-lift">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
