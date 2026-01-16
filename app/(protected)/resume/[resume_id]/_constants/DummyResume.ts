import { educationBaseSchema } from "../Education/educationSchema";
import { experienceBaseSchema } from "../Experience/experienceSchema";
import { personalInfoBaseSchema } from "../PersonalInfo/personalInfoSchema";
import { projectsBaseSchema } from "../Projects/projectsSchema";
import { skillsBaseSchema } from "../Skills/skillsSchema";

export const DummyResume = {
  personalInfo: personalInfoBaseSchema.parse({
    fullName: "Alex Johnson",
    position: "Senior Frontend Engineer",
    email: "alex.johnson@example.com",
    phone: "+1 415 555 0199",
    address: "San Francisco, CA",
    linkedIn: "linkedin.com/in/alexjohnson",
    github: "github.com/alexjohnson",
    portfolio: "alexjohnson.dev",
    summary:
      "Senior Frontend Engineer with 6+ years building scalable web apps. Expert in React, TypeScript, Next.js and modern CSS. Led teams, improved Core Web Vitals by 40%, speaks at React meetups.",
  }),

  education: educationBaseSchema.parse({
    university: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    graduationyear: "2019",
    location: "Berkeley, CA",
    diploma: "",
    diplomaLink: "",
  }),

  experience: experienceBaseSchema.parse({
    title: "Senior Frontend Engineer",
    company: "Acme Corp",
    location: "San Francisco, CA",
    start_date: "2020-03",
    end_date: "Present",
    description:
      "Shipped 5 green-field products using React, TypeScript and Next.js. Reduced bundle size 38% via code-splitting & tree-shaking. Mentored 4 junior engineers, introduced design-system adopted by 60 engineers.",
  }),

  skills: skillsBaseSchema.parse({
    programmingLanguages: "JavaScript, TypeScript, Python",
    frameworksTools: "React, Next.js, Node.js, Express, GraphQL",
    technologies: "AWS, PostgreSQL, Docker, CI/CD, Terraform",
  }),

  projects: projectsBaseSchema.parse({
    projectTitle: "Real-Time Analytics Dashboard",
    technologiesUsed: "React, D3.js, WebSocket, Node.js, PostgreSQL",
    projectDetails:
      "Built interactive dashboard processing 1M+ events/day. Features: live charts, user segmentation, A/B metrics. Cut data-to-insight time from hours to seconds.",
    duration: "8 months",
    github: "github.com/alexjohnson/realtime-analytics",
  }),
};
